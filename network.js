/**
 * network.js — Sync Layer für DUEL  (v2 — Auto-Detect)
 *
 * Modus wird automatisch erkannt:
 *   LOCAL  → BroadcastChannel (2 Tabs, gleicher PC/Browser) — wie bisher
 *   ONLINE → PeerJS WebRTC   (2 Geräte, echtes Netzwerk)
 *
 * Die öffentliche API ist identisch zu v1 — main.js muss NICHT geändert werden.
 *
 * Voraussetzung für ONLINE:
 *   <script src="https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js"></script>
 *   muss in index.html vor network.js geladen sein.
 *
 * Wie der Auto-Detect funktioniert:
 *   - Host wählt im UI "Lokal" oder "Online"   → Network.setMode('local'|'online')
 *   - Oder: Wenn kein Modus gesetzt ist, wird 'local' als Standard genutzt.
 *   - Der Lobby-Code kodiert den Modus:
 *       LOCAL  → 4-stelliger alphanumerischer Code (z.B. "A3KP")
 *       ONLINE → Code beginnt mit "W-"           (z.B. "W-A3KP")
 *   - Wenn ein Guest einen "W-"-Code eingibt, schaltet er automatisch auf Online.
 */

const Network = (() => {

  // ── Interner Zustand ────────────────────────────────────────────────────────
  let _mode      = 'local';   // 'local' | 'online'
  let _isHost    = false;
  let _myRole    = 'host';    // 'host' | 'guest'
  let _lobbyCode = null;      // nur der kurze Teil (ohne "W-")
  let _handlers  = {};
  let _onConnectedCb = null;

  // LOCAL
  let _bc = null;             // BroadcastChannel

  // ONLINE
  let _peer  = null;          // Peer (eigene PeerJS-Instanz)
  let _conn  = null;          // DataConnection zum Gegner

  // ── Hilfsfunktionen ─────────────────────────────────────────────────────────

  function _genCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let c = '';
    for (let i = 0; i < 4; i++) c += chars[Math.floor(Math.random() * chars.length)];
    return c;
  }

  function _dispatch(msg) {
    if (!msg || !msg.type) return;
    if (msg._from === _myRole) return;          // eigene Nachrichten ignorieren

    if (msg.type === '__connected') {
      if (_onConnectedCb) _onConnectedCb(msg);
      return;
    }
    if (_handlers[msg.type]) {
      _handlers[msg.type](msg);
    }
  }

  function _rawSend(data) {
    data._from = _myRole;

    if (_mode === 'local') {
      if (!_bc) { console.warn('[Network] Kein BroadcastChannel!'); return; }
      _bc.postMessage(data);

    } else {
      if (!_conn || _conn.open === false) { console.warn('[Network] Keine PeerJS-Verbindung!'); return; }
      _conn.send(data);
    }
  }

  // ── LOCAL: BroadcastChannel ─────────────────────────────────────────────────

  function _setupBC(code) {
    if (_bc) _bc.close();
    _bc = new BroadcastChannel('duel-lobby-' + code);
    _bc.onmessage = (e) => _dispatch(e.data);
  }

  // ── ONLINE: PeerJS ──────────────────────────────────────────────────────────

  /**
   * Erstellt eine PeerJS-Instanz.
   * peerId: der gewünschte ID-String (für Host: 'duel-host-XXXX', für Guest frei)
   */
  function _createPeer(peerId) {
    return new Promise((resolve, reject) => {
      // PeerJS Cloud-Broker (kostenlos, kein eigener Server nötig)
      const peer = new Peer(peerId, {
        debug: 0,
      });
      peer.on('open', () => resolve(peer));
      peer.on('error', (err) => {
        console.error('[Network] PeerJS Fehler:', err);
        reject(err);
      });
    });
  }

  function _wireConn(conn) {
    _conn = conn;
    conn.on('data',  (data) => _dispatch(data));
    conn.on('close', () => console.warn('[Network] PeerJS-Verbindung getrennt.'));
    conn.on('error', (e) => console.error('[Network] PeerJS conn error:', e));
  }

  // ── PUBLIC API ──────────────────────────────────────────────────────────────

  /**
   * Modus setzen (vor createLobby/joinLobby aufrufen).
   * Wird automatisch gesetzt wenn joinLobby() einen "W-"-Code erkennt.
   */
  function setMode(m) {
    _mode = (m === 'online') ? 'online' : 'local';
  }

  function getMode() { return _mode; }

  /**
   * Host erstellt Lobby.
   * Gibt einen Promise zurück, der mit dem Lobby-Code resolvet.
   * (Für Abwärtskompatibilität: synchrone Nutzung gibt null zurück wenn online,
   *  deshalb createLobby().then(code => ...) bevorzugen wenn online möglich.)
   */
  function createLobby(hostName) {
    _isHost  = true;
    _myRole  = 'host';
    _lobbyCode = _genCode();

    if (_mode === 'local') {
      _setupBC(_lobbyCode);

      // Auf __connected vom Guest hören
      _bc.addEventListener('message', (e) => {
        const msg = e.data;
        if (msg && msg.type === '__connected' && msg._from === 'guest') {
          if (_onConnectedCb) _onConnectedCb(msg);
        }
      });

      return _lobbyCode;   // synchron wie v1

    } else {
      // ONLINE: PeerJS Host
      const peerId = 'duel-host-' + _lobbyCode;
      const displayCode = 'W-' + _lobbyCode;

      _createPeer(peerId).then((peer) => {
        _peer = peer;
        peer.on('connection', (conn) => {
          _wireConn(conn);
          conn.on('open', () => {
            // kurz warten bis Daten-Kanal stabil
            setTimeout(() => {
              conn.on('data', (data) => {
                if (data && data.type === '__connected' && data._from === 'guest') {
                  if (_onConnectedCb) _onConnectedCb(data);
                }
              });
            }, 50);
          });
        });
        // Code ans UI weitergeben (der Caller hat schon createLobby() aufgerufen,
        // wir signalisieren über den onConnected-Callback – der Code wird per
        // _lobbyCodeCallback weitergegeben, siehe unten)
        if (_onCodeReadyCb) _onCodeReadyCb(displayCode);
      }).catch(err => {
        console.error('[Network] PeerJS Host-Init fehlgeschlagen:', err);
      });

      return displayCode;  // wird sofort zurückgegeben (Peer noch nicht bereit — UI nutzt onCodeReady)
    }
  }

  /** Callback der aufgerufen wird wenn der PeerJS-Code bereit ist (nur online/host) */
  let _onCodeReadyCb = null;
  function onCodeReady(cb) { _onCodeReadyCb = cb; }

  /**
   * Guest tritt Lobby bei.
   * Erkennt automatisch ob code ein "W-"-Code ist → Online-Modus.
   */
  function joinLobby(code, guestName) {
    _isHost = false;
    _myRole = 'guest';

    // Auto-Detect: "W-XXXX" → Online
    if (code.startsWith('W-') || code.startsWith('w-')) {
      _mode = 'online';
      _lobbyCode = code.replace(/^[wW]-/, '');
    } else {
      _lobbyCode = code;
    }

    if (_mode === 'local') {
      _setupBC(_lobbyCode);
      setTimeout(() => {
        _rawSend({ type: '__connected', name: guestName });
      }, 150);

    } else {
      // ONLINE: PeerJS Guest
      _createPeer(undefined).then((peer) => {   // eigene ID zufällig
        _peer = peer;
        const hostPeerId = 'duel-host-' + _lobbyCode;
        const conn = peer.connect(hostPeerId, { reliable: true });
        _wireConn(conn);
        conn.on('open', () => {
          setTimeout(() => {
            _rawSend({ type: '__connected', name: guestName });
          }, 150);
        });
        conn.on('error', (e) => console.error('[Network] Konnte Host nicht erreichen:', e));
      }).catch(err => {
        console.error('[Network] PeerJS Guest-Init fehlgeschlagen:', err);
      });
    }
  }

  /** Nachricht an Gegner senden */
  function send(type, payload) {
    _rawSend(Object.assign({ type }, payload || {}));
  }

  /** Handler registrieren */
  function on(type, handler) { _handlers[type] = handler; }

  /** Handler entfernen */
  function off(type) { delete _handlers[type]; }

  /** Callback wenn Gegner verbunden */
  function onConnected(cb) { _onConnectedCb = cb; }

  /** Alles trennen & aufräumen */
  function disconnect() {
    if (_bc)   { _bc.close();   _bc   = null; }
    if (_conn) { _conn.close(); _conn = null; }
    if (_peer) { _peer.destroy(); _peer = null; }
    _handlers      = {};
    _onConnectedCb = null;
    _onCodeReadyCb = null;
    _lobbyCode     = null;
  }

  function getIsHost() { return _isHost; }
  function getRole()   { return _myRole; }
  function getCode()   { return _lobbyCode; }

  return {
    // Neu
    setMode, getMode, onCodeReady,
    // Identisch zu v1 — main.js muss nicht geändert werden
    createLobby, joinLobby, send, on, off, onConnected, disconnect,
    getIsHost, getRole, getCode,
  };
})();
