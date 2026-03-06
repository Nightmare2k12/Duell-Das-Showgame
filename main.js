/**
 * main.js — Hauptcontroller für DUEL
 *
 * Ablauf:
 *   Menü → Lobby erstellen/beitreten → Warteraum →
 *   [15x: Runden-Intro → Beide Bereit → Spiel → Ergebnis] → Spielende
 *
 * Punkte: Runde N = N Punkte (Schlag den Raab, max 120)
 * Host = P1, Guest = P2
 */

// ── Spielzustand ─────────────────────────────────────────────────────────────
const GameState = {
  myRole: 'host',        // 'host' | 'guest'
  myName: 'Spieler 1',

  p1Name: 'Spieler 1',  // Host
  p2Name: 'Spieler 2',  // Guest
  p1Score: 0,
  p2Score: 0,

  currentRound: 0,
  roundOrder: [],        // gameId pro Runde [0..14]
  currentGame: null,

  // Ready-Tracking pro Runde
  _myReadySent: false,
  _opponentReady: false,
  _currentGameId: null,
};

// ── Screen-Verwaltung ─────────────────────────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    const active = s.id === id;
    s.classList.toggle('active', active);
    s.style.display = active ? 'flex' : 'none';
  });
}

// Initialisierung
document.querySelectorAll('.screen').forEach(s => { s.style.display = 'none'; });
document.getElementById('screen-menu').style.display = 'flex';

// ── Menü ──────────────────────────────────────────────────────────────────────
function quitGame() {
  if (confirm('Spiel wirklich verlassen?')) {
    try { window.close(); } catch(e) {}
    document.body.innerHTML = '<div style="color:#f0c030;font-family:\'Bebas Neue\',sans-serif;font-size:60px;text-align:center;padding:20vh">AUF WIEDERSEHEN</div>';
  }
}

function saveSettings() {
  GameState.p1Name = document.getElementById('settings-p1-name').value.trim() || 'Spieler 1';
  GameState.p2Name = document.getElementById('settings-p2-name').value.trim() || 'Spieler 2';
  showScreen('screen-menu');
}

function toggleSound() {
  const t = document.getElementById('sound-toggle');
  t.dataset.on = t.dataset.on === 'true' ? 'false' : 'true';
}

// ── Lobby erstellen ───────────────────────────────────────────────────────────
function createLobby() {
  const name = (document.getElementById('host-name').value || '').trim() || 'Spieler 1';
  GameState.myName = name;
  GameState.myRole = 'host';
  GameState.p1Name = name;

  const code = Network.createLobby(name);

  document.getElementById('lobby-code-value').textContent = code;
  document.getElementById('lobby-code-display').style.display = 'block';
  document.getElementById('lobby-status').textContent = 'Warte auf Spieler 2…';
  document.getElementById('create-lobby-btn').style.display = 'none';

  Network.onConnected((msg) => {
    const guestName = msg.name || 'Spieler 2';
    GameState.p2Name = guestName;
    document.getElementById('lobby-status').textContent = '✓ ' + guestName + ' ist beigetreten!';

    // Host bestätigt dem Guest seinen Namen + Spielernamen
    Network.send('__host_ack', { hostName: GameState.p1Name, p2Name: guestName });

    setTimeout(() => _goWaiting(), 600);
  });
}

// ── Lobby beitreten ───────────────────────────────────────────────────────────
function joinLobby() {
  const name = (document.getElementById('join-name').value || '').trim() || 'Spieler 2';
  const code = (document.getElementById('join-code').value || '').trim().toUpperCase();

  if (code.length !== 4) {
    document.getElementById('join-status').textContent = 'Bitte gültigen 4-stelligen Code eingeben.';
    return;
  }

  GameState.myName = name;
  GameState.myRole = 'guest';
  GameState.p2Name = name;

  document.getElementById('join-status').textContent = 'Verbinde…';

  Network.joinLobby(code, name);

  // Auf Host-Bestätigung warten
  Network.on('__host_ack', (msg) => {
    Network.off('__host_ack');
    GameState.p1Name = msg.hostName || 'Spieler 1';
    document.getElementById('join-status').textContent = '✓ Verbunden mit ' + GameState.p1Name + '!';
    setTimeout(() => _goWaiting(), 400);
  });
}

function leaveLobby() {
  Network.disconnect();
  _resetForms();
  showScreen('screen-menu');
}

// ── Warteraum ─────────────────────────────────────────────────────────────────
function _goWaiting() {
  showScreen('screen-waiting');

  document.getElementById('waiting-players').innerHTML =
    '<div class="waiting-player p1 connected">' +
      '<div class="player-icon">👤</div>' +
      '<div class="player-name">' + escHtml(GameState.p1Name) + '</div>' +
      '<div class="player-status connected">Host</div>' +
    '</div>' +
    '<div class="waiting-player p2 connected">' +
      '<div class="player-icon">👤</div>' +
      '<div class="player-name">' + escHtml(GameState.p2Name) + '</div>' +
      '<div class="player-status connected">Verbunden</div>' +
    '</div>';

  if (GameState.myRole === 'host') {
    document.getElementById('waiting-title').textContent = 'Beide Spieler bereit!';
    document.getElementById('start-game-btn').style.display = 'flex';
  } else {
    document.getElementById('waiting-title').textContent = 'Warte auf Host…';
    document.getElementById('start-game-btn').style.display = 'none';
  }

  // Guest wartet auf Spielstart-Signal vom Host
  Network.on('__game_start', (msg) => {
    Network.off('__game_start');
    GameState.roundOrder = msg.roundOrder;
    GameState.p1Name    = msg.p1Name;
    GameState.p2Name    = msg.p2Name;
    _startMatch();
  });
}

// ── Spiel starten (nur Host) ──────────────────────────────────────────────────
function startGame() {
  if (GameState.myRole !== 'host') return;

  const btn = document.getElementById('start-game-btn');
  btn.disabled = true;
  btn.textContent = 'Lade…';

  GamePool.preloadAll().then(() => {
    const roundOrder = GamePool.buildRoundOrder();
    GameState.roundOrder = roundOrder;

    Network.send('__game_start', {
      roundOrder: roundOrder,
      p1Name: GameState.p1Name,
      p2Name: GameState.p2Name,
    });

    _startMatch();
  });
}

function _startMatch() {
  GameState.p1Score = 0;
  GameState.p2Score = 0;
  GameState.currentRound = 0;
  setTimeout(_advanceRound, 300);
}

// ── Runden-Ablauf ─────────────────────────────────────────────────────────────
function _advanceRound() {
  GameState.currentRound++;

  if (GameState.currentRound > 15) {
    _showGameOver();
    return;
  }

  const gameId = GameState.roundOrder[GameState.currentRound - 1] || GamePool.getGameIds()[0];
  GameState._currentGameId = gameId;

  GamePool.loadGameScript(gameId).then(() => {
    _showRoundIntro(gameId);
  });
}

function _showRoundIntro(gameId) {
  const round  = GameState.currentRound;
  const points = round; // Runde N = N Punkte
  const game   = GamePool.getGame(gameId);

  document.getElementById('round-badge').textContent = 'Runde ' + round + ' von 15';
  document.getElementById('round-points-badge').innerHTML =
    'Wert: <strong>' + points + '</strong> ' + (points === 1 ? 'Punkt' : 'Punkte');
  document.getElementById('round-game-name').textContent  = game ? game.name : gameId;
  document.getElementById('round-game-desc').textContent  = game ? game.description : '';
  document.getElementById('intro-p1-name').textContent    = GameState.p1Name;
  document.getElementById('intro-p2-name').textContent    = GameState.p2Name;
  document.getElementById('intro-p1-score').textContent   = GameState.p1Score;
  document.getElementById('intro-p2-score').textContent   = GameState.p2Score;

  // Ready-State zurücksetzen
  GameState._myReadySent     = false;
  GameState._opponentReady   = false;

  const btn = document.getElementById('round-ready-btn');
  btn.disabled  = false;
  btn.textContent = 'Bereit!';

  // Auf Bereit-Meldung des Gegners hören
  Network.on('__player_ready', (msg) => {
    // Nur Nachrichten vom Gegner zählen (eigene ignoriert das Network-Layer bereits)
    GameState._opponentReady = true;
    _checkBothReady();
  });

  showScreen('screen-round-intro');
}

function readyForRound() {
  if (GameState._myReadySent) return;
  GameState._myReadySent = true;

  const btn = document.getElementById('round-ready-btn');
  btn.disabled  = true;
  btn.textContent = 'Warte auf Gegner…';

  // Gegner informieren
  Network.send('__player_ready', {});

  _checkBothReady();
}

function _checkBothReady() {
  if (GameState._myReadySent && GameState._opponentReady) {
    Network.off('__player_ready');
    _launchGame(GameState._currentGameId);
  }
}

// ── Spiel starten ─────────────────────────────────────────────────────────────
function _launchGame(gameId) {
  const game = GamePool.getGame(gameId);
  if (!game) {
    console.error('[Main] Spiel nicht gefunden:', gameId);
    _handleRoundEnd({ winner: 'draw', details: 'Spiel nicht gefunden: ' + gameId });
    return;
  }

  // HUD aktualisieren
  document.getElementById('hud-p1-name').textContent  = GameState.p1Name;
  document.getElementById('hud-p2-name').textContent  = GameState.p2Name;
  document.getElementById('hud-p1-score').textContent = GameState.p1Score;
  document.getElementById('hud-p2-score').textContent = GameState.p2Score;
  document.getElementById('hud-round').textContent    = 'R' + GameState.currentRound;

  showScreen('screen-game');
  document.getElementById('game-frame').innerHTML = '';

  const ctx = {
    isHost:       GameState.myRole === 'host',
    myRole:       GameState.myRole,
    round:        GameState.currentRound,
    pointValue:   GameState.currentRound,
    p1Name:       GameState.p1Name,
    p2Name:       GameState.p2Name,
    network:      Network,
    soundEnabled: document.getElementById('sound-toggle').dataset.on !== 'false',
  };

  GameState.currentGame = game;
  GamePool.markPlayed(gameId, GameState.currentRound);
  game.init(document.getElementById('game-frame'), ctx, _handleRoundEnd);
}

// ── Runden-Ergebnis ───────────────────────────────────────────────────────────
function _handleRoundEnd(result) {
  if (GameState.currentGame && GameState.currentGame.destroy) {
    try { GameState.currentGame.destroy(); } catch(e) {}
    GameState.currentGame = null;
  }

  const points = GameState.currentRound;
  let winnerName = '';

  if (result.winner === 'p1') {
    GameState.p1Score += points;
    winnerName = GameState.p1Name;
    document.getElementById('result-crown').textContent = '👑';
  } else if (result.winner === 'p2') {
    GameState.p2Score += points;
    winnerName = GameState.p2Name;
    document.getElementById('result-crown').textContent = '👑';
  } else {
    winnerName = 'Unentschieden';
    document.getElementById('result-crown').textContent = '🤝';
  }

  document.getElementById('result-winner').textContent =
    result.winner === 'draw' ? 'Unentschieden!' : winnerName + ' gewinnt!';
  document.getElementById('result-details').innerHTML = result.details || '';
  document.getElementById('res-p1-name').textContent  = GameState.p1Name;
  document.getElementById('res-p2-name').textContent  = GameState.p2Name;
  document.getElementById('res-p1-score').textContent = GameState.p1Score;
  document.getElementById('res-p2-score').textContent = GameState.p2Score;
  document.getElementById('points-awarded').textContent =
    result.winner !== 'draw'
      ? '+' + points + ' ' + (points === 1 ? 'Punkt' : 'Punkte') + ' für ' + winnerName
      : 'Keine Punkte vergeben';

  // Nur Host kann Weiter drücken — Guest wartet auf Signal
  const nextBtn     = document.getElementById('next-round-btn');
  const nextWaiting = document.getElementById('next-round-waiting');
  if (GameState.myRole === 'host') {
    nextBtn.style.display     = 'flex';
    nextWaiting.style.display = 'none';
  } else {
    nextBtn.style.display     = 'none';
    nextWaiting.style.display = 'flex';
    // Guest hört auf "__next_round" vom Host
    Network.on('__next_round', () => {
      Network.off('__next_round');
      nextRound();
    });
  }

  showScreen('screen-round-result');
}

function nextRound() {
  // Host informiert Guest dass es weitergeht
  if (GameState.myRole === 'host') {
    Network.send('__next_round', {});
  }
  if (GameState.currentRound >= 15) {
    _showGameOver();
  } else {
    _advanceRound();
  }
}

// ── Spielende ─────────────────────────────────────────────────────────────────
function _showGameOver() {
  const winner = GameState.p1Score > GameState.p2Score ? GameState.p1Name
               : GameState.p2Score > GameState.p1Score ? GameState.p2Name
               : 'Unentschieden';

  document.getElementById('gameover-winner').textContent = winner;
  document.getElementById('gameover-scores').innerHTML =
    '<div class="gameover-score-item">' +
      '<span class="gameover-score-name">' + escHtml(GameState.p1Name) + '</span>' +
      '<span class="gameover-score-val">'  + GameState.p1Score + '</span>' +
    '</div>' +
    '<div class="gameover-score-item">' +
      '<span class="gameover-score-name">' + escHtml(GameState.p2Name) + '</span>' +
      '<span class="gameover-score-val">'  + GameState.p2Score + '</span>' +
    '</div>';

  showScreen('screen-gameover');
  _launchFireworks();
}

function returnToMenu() {
  if (GameState.currentGame && GameState.currentGame.destroy) {
    try { GameState.currentGame.destroy(); } catch(e) {}
    GameState.currentGame = null;
  }
  Network.disconnect();
  GameState.p1Score = 0;
  GameState.p2Score = 0;
  GameState.currentRound = 0;
  GameState.roundOrder = [];
  _resetForms();
  showScreen('screen-menu');
}

function playAgain() {
  GameState.p1Score = 0;
  GameState.p2Score = 0;
  GameState.currentRound = 0;
  _goWaiting();
}

function _resetForms() {
  const el = (id) => document.getElementById(id);
  if (el('lobby-code-display'))  el('lobby-code-display').style.display = 'none';
  if (el('create-lobby-btn'))    { el('create-lobby-btn').style.display = 'flex'; el('create-lobby-btn').disabled = false; }
  if (el('lobby-status'))        el('lobby-status').textContent = '';
  if (el('join-status'))         el('join-status').textContent = '';
  if (el('start-game-btn'))      { el('start-game-btn').style.display = 'none'; el('start-game-btn').disabled = false; el('start-game-btn').textContent = 'Spiel starten ▶'; }
}

// ── Feuerwerk ─────────────────────────────────────────────────────────────────
function _launchFireworks() {
  const c = document.getElementById('fireworks');
  c.innerHTML = '';
  const colors = ['#f0c030','#e0430a','#2af0a0','#3ab4f5','#f55a3a'];
  for (let i = 0; i < 80; i++) {
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = (20 + Math.random() * 60) + '%';
    s.style.top  = (20 + Math.random() * 60) + '%';
    s.style.background = colors[Math.floor(Math.random() * colors.length)];
    const a = Math.random() * Math.PI * 2;
    const d = 80 + Math.random() * 120;
    s.style.setProperty('--dx', Math.cos(a) * d + 'px');
    s.style.setProperty('--dy', Math.sin(a) * d + 'px');
    s.style.setProperty('--dur', (0.6 + Math.random() * 0.8) + 's');
    s.style.animationDelay = (Math.random() * 0.4) + 's';
    c.appendChild(s);
  }
}

// ── Hilfsfunktionen ───────────────────────────────────────────────────────────
function escHtml(str) {
  return String(str || '').replace(/[&<>"']/g,
    c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function playSound() {} // Legacy-Stub, Spiele nutzen eigene Sounds

// ── Init ──────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  GamePool.preloadAll();
  GamePool.loadHistory();

  document.addEventListener('keydown', (e) => {
    if (e.key === 'F11') {
      e.preventDefault();
      document.fullscreenElement
        ? document.exitFullscreen()
        : document.documentElement.requestFullscreen().catch(() => {});
    }
  });
});
