/**
 * network.js — Sync Layer für DUELL  (v3)
 *
 * Lokal  → BroadcastChannel (2 Tabs, gleicher Browser)  Code: "XXXX"
 * Online → PeerJS WebRTC   (2 Geräte / Browser)         Code: "W-XXXX"
 *
 * index.html braucht vor diesem Script:
 *   <script src="https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js"></script>
 */

const Network = (function () {

  var _mode    = 'local';   // 'local' | 'online'
  var _role    = 'host';    // 'host'  | 'guest'
  var _code    = null;
  var _handlers  = {};
  var _connCb    = null;

  // LOCAL
  var _bc = null;

  // ONLINE
  var _peer = null;
  var _conn = null;

  // ── Hilfsfunktionen ──────────────────────────────────────

  function genCode() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', s = '';
    for (var i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
  }

  function dispatch(m) {
    if (!m || !m.type) return;
    if (m._from === _role) return;                    // eigene Nachrichten ignorieren
    if (m.type === '__conn') { if (_connCb) _connCb(m); return; }
    if (_handlers[m.type]) _handlers[m.type](m);
  }

  function rawSend(data) {
    data._from = _role;
    if (_mode === 'local') {
      if (!_bc) { console.warn('[Network] Kein BroadcastChannel'); return; }
      _bc.postMessage(data);
    } else {
      if (!_conn) { console.warn('[Network] Keine PeerJS-Verbindung'); return; }
      _conn.send(data);
    }
  }

  // ── LOCAL ────────────────────────────────────────────────

  function openBC(code) {
    if (_bc) _bc.close();
    _bc = new BroadcastChannel('duell-' + code);
    _bc.onmessage = function (e) { dispatch(e.data); };
  }

  // ── ONLINE ───────────────────────────────────────────────

  function createPeer(id) {
    return new Promise(function (resolve, reject) {
      var p = id ? new Peer(id) : new Peer();
      p.on('open', function () { resolve(p); });
      p.on('error', function (e) {
        console.error('[Network] PeerJS Fehler:', e);
        reject(e);
      });
    });
  }

  function wireConn(conn) {
    _conn = conn;
    conn.on('data',  function (d) { dispatch(d); });
    conn.on('close', function ()  { console.warn('[Network] Verbindung getrennt.'); });
    conn.on('error', function (e) { console.error('[Network] Verbindungsfehler:', e); });
  }

  // ── PUBLIC API ───────────────────────────────────────────

  function setMode(m) { _mode = (m === 'online') ? 'online' : 'local'; }
  function getMode()  { return _mode; }

  function createLobby(name) {
    _role = 'host';
    _code = genCode();

    if (_mode === 'local') {
      openBC(_code);
      // separater Listener damit connCb auch funktioniert wenn er erst danach gesetzt wird
      _bc.addEventListener('message', function (e) {
        if (e.data && e.data.type === '__conn' && e.data._from === 'guest') {
          if (_connCb) _connCb(e.data);
        }
      });
      return _code;

    } else {
      var peerId      = 'duell-host-' + _code;
      var displayCode = 'W-' + _code;

      createPeer(peerId).then(function (peer) {
        _peer = peer;
        peer.on('connection', function (conn) {
          // Erst verdrahten, DANN auf open warten — kein Datenverlust
          wireConn(conn);
          conn.on('open', function () {
            // __conn kommt kurz nach open — dispatch() leitet es an _connCb weiter
          });
        });
      }).catch(function (e) {
        console.error('[Network] PeerJS Host-Init fehlgeschlagen:', e);
      });

      return displayCode;
    }
  }

  function joinLobby(code, name) {
    _role = 'guest';

    // Auto-Detect: "W-XXXX" → Online
    if (code.startsWith('W-') || code.startsWith('w-')) {
      _mode = 'online';
      _code = code.replace(/^[wW]-/, '');
    } else {
      _code = code;
    }

    if (_mode === 'local') {
      openBC(_code);
      setTimeout(function () { rawSend({ type: '__conn', name: name }); }, 200);

    } else {
      createPeer(null).then(function (peer) {
        _peer = peer;
        var conn = peer.connect('duell-host-' + _code, { reliable: true });
        wireConn(conn);
        conn.on('open', function () {
          setTimeout(function () { rawSend({ type: '__conn', name: name }); }, 200);
        });
      }).catch(function (e) {
        console.error('[Network] PeerJS Guest-Init fehlgeschlagen:', e);
      });
    }
  }

  function send(type, payload) {
    rawSend(Object.assign({ type: type }, payload || {}));
  }

  function on(type, handler)  { _handlers[type] = handler; }
  function off(type)          { delete _handlers[type]; }
  function onConnected(cb)    { _connCb = cb; }

  function disconnect() {
    if (_bc)   { _bc.close();     _bc   = null; }
    if (_conn) { _conn.close();   _conn = null; }
    if (_peer) { _peer.destroy(); _peer = null; }
    _handlers = {};
    _connCb   = null;
    _code     = null;
  }

  function getRole()   { return _role; }
  function isHost()    { return _role === 'host'; }
  function getCode()   { return _code; }

  return {
    setMode, getMode,
    createLobby, joinLobby,
    send, on, off, onConnected, disconnect,
    getRole, isHost, getCode,
  };

})();
