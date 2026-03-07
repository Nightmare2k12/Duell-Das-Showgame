/**
 * network.js — Sync Layer für DUELL  (v4)
 *
 * Lokal  → BroadcastChannel (2 Tabs, gleicher Browser)  Code: "XXXX"
 * Online → PeerJS WebRTC   (2 Geräte / Browser)         Code: "W-XXXX"
 *
 * index.html braucht vor diesem Script:
 *   <script src="https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js"></script>
 */

const Network = (function () {

  var _mode   = 'local';
  var _role   = 'host';
  var _code   = null;
  var _handlers = {};
  var _connCb   = null;

  var _bc   = null;
  var _peer = null;
  var _conn = null;

  var PEER_CONFIG = {
    config: {
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' },
        { urls: 'stun:stun3.l.google.com:19302' },
      ]
    },
    debug: 2
  };

  function genCode() {
    var chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', s = '';
    for (var i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
    return s;
  }

  function dispatch(m) {
    if (!m || !m.type) return;
    if (m._from === _role) return;
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

  function openBC(code) {
    if (_bc) _bc.close();
    _bc = new BroadcastChannel('duell-' + code);
    _bc.onmessage = function (e) { dispatch(e.data); };
  }

  function createPeer(id) {
    return new Promise(function (resolve, reject) {
      var cfg = JSON.parse(JSON.stringify(PEER_CONFIG)); // deep copy
      var p = id ? new Peer(id, cfg) : new Peer(cfg);
      p.on('open', function (assignedId) {
        console.log('[Network] PeerJS bereit, ID:', assignedId);
        resolve(p);
      });
      p.on('error', function (e) {
        console.error('[Network] PeerJS Fehler:', e.type, e);
        reject(e);
      });
      p.on('disconnected', function () {
        console.warn('[Network] PeerJS getrennt, reconnect…');
        try { p.reconnect(); } catch(ex) {}
      });
    });
  }

  function wireConn(conn) {
    _conn = conn;
    conn.on('data',  function (d) { dispatch(d); });
    conn.on('close', function ()  { console.warn('[Network] DataConn getrennt.'); });
    conn.on('error', function (e) { console.error('[Network] DataConn Fehler:', e); });
  }

  // ── PUBLIC API ───────────────────────────────────────────

  function setMode(m) { _mode = (m === 'online') ? 'online' : 'local'; }
  function getMode()  { return _mode; }

  function createLobby(name) {
    _role = 'host';
    _code = genCode();

    if (_mode === 'local') {
      openBC(_code);
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
        console.log('[Network] Host wartet auf Verbindung, PeerID:', peerId);
        peer.on('connection', function (conn) {
          console.log('[Network] Guest verbunden!');
          wireConn(conn);
          // __conn kommt nach open via dispatch → _connCb
        });
      }).catch(function (e) {
        console.error('[Network] Host-Init fehlgeschlagen:', e);
      });

      return displayCode;
    }
  }

  function joinLobby(code, name) {
    _role = 'guest';

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
      var hostPeerId = 'duell-host-' + _code;
      console.log('[Network] Guest verbindet zu:', hostPeerId);

      createPeer(null).then(function (peer) {
        _peer = peer;
        console.log('[Network] Guest PeerJS bereit, verbinde zu Host…');
        var conn = peer.connect(hostPeerId, { reliable: true });
        wireConn(conn);
        conn.on('open', function () {
          console.log('[Network] DataChannel offen, sende __conn…');
          setTimeout(function () { rawSend({ type: '__conn', name: name }); }, 200);
        });
      }).catch(function (e) {
        console.error('[Network] Guest-Init fehlgeschlagen:', e);
      });
    }
  }

  function send(type, payload) {
    rawSend(Object.assign({ type: type }, payload || {}));
  }

  function on(type, handler) { _handlers[type] = handler; }
  function off(type)         { delete _handlers[type]; }
  function onConnected(cb)   { _connCb = cb; }

  function disconnect() {
    if (_bc)   { _bc.close();     _bc   = null; }
    if (_conn) { _conn.close();   _conn = null; }
    if (_peer) { _peer.destroy(); _peer = null; }
    _handlers = {};
    _connCb   = null;
    _code     = null;
  }

  function getRole() { return _role; }
  function isHost()  { return _role === 'host'; }
  function getCode() { return _code; }

  return {
    setMode, getMode,
    createLobby, joinLobby,
    send, on, off, onConnected, disconnect,
    getRole, isHost, getCode,
  };

})();
