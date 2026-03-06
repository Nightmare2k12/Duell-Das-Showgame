(function () {

  // ═══════════════════════════════════════════════════════════
  // PFAD DER ERLEUCHTUNG
  // Merke-dir-den-Weg Spiel auf einem 6×10 Raster.
  // Pfad bleibt sichtbar bis ein Spieler buzzert.
  // Fehler → Gegner bekommt Punkt
  // Pfad komplett → Buzzer bekommt Punkt
  // Wer zuerst 3 Punkte hat, gewinnt!
  // ═══════════════════════════════════════════════════════════

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, function(c) {
      return { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c];
    });
  }

  function beep(freq, dur, type, vol) {
    try {
      var ac = new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = freq;
      o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(ac.currentTime); o.stop(ac.currentTime + dur + 0.01);
    } catch(e) {}
  }

  var COLS = 6;
  var ROWS = 10;
  var MAX_POINTS = 3;

  // ─── Pfad-Generator ──────────────────────────────────────────
  // Regeln:
  // - Länge 7–12 Felder
  // - Start kann am Rand sein
  // - Ziel muss tiefer liegen als Start
  // - Rückwärts (nach oben) erlaubt, aber selten (0.5x Gewicht)
  // - Max. 4 Seitwärtsschritte hintereinander
  // - Unten: 5x | Seitwärts: 1x | Rückwärts: 0.5x
  function generatePath() {
    var MAX_ATTEMPTS = 20; // Versuche bis Ziel tiefer liegt als Start
    for (var attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
      var path    = [];
      var visited = {};
      // Start kann am Rand sein
      var startR = Math.floor(Math.random() * 3);           // Zeile 0–2
      var startC = Math.floor(Math.random() * COLS);        // volle Breite inkl. Rand
      path.push({ r: startR, c: startC });
      visited[startR + ',' + startC] = true;

      var targetLen  = 7 + Math.floor(Math.random() * 6);  // 7–12
      var sideStreak = 0;

      for (var step = 0; step < 80 && path.length < targetLen; step++) {
        var cur  = path[path.length - 1];
        var dirs = [];

        // Nach unten: 5x Gewicht
        if (cur.r + 1 < ROWS) {
          for (var i = 0; i < 5; i++) dirs.push({ r: cur.r + 1, c: cur.c, type: 'down' });
        }

        // Seitwärts: 1x Gewicht, max 4 hintereinander
        if (sideStreak < 4) {
          if (cur.c - 1 >= 0)   dirs.push({ r: cur.r, c: cur.c - 1, type: 'side' });
          if (cur.c + 1 < COLS) dirs.push({ r: cur.r, c: cur.c + 1, type: 'side' });
        }

        // Rückwärts (nach oben): 0.5x Gewicht → 1 Eintrag, aber nur 50% Chance
        if (cur.r - 1 >= 0 && Math.random() < 0.5) {
          dirs.push({ r: cur.r - 1, c: cur.c, type: 'back' });
        }

        // Nicht besuchte Felder
        var unvisited = dirs.filter(function(d) {
          return !visited[d.r + ',' + d.c];
        });
        if (unvisited.length === 0) break;

        var next = unvisited[Math.floor(Math.random() * unvisited.length)];
        visited[next.r + ',' + next.c] = true;
        sideStreak = next.type === 'side' ? sideStreak + 1 : 0;
        path.push({ r: next.r, c: next.c });
      }

      // Bedingung: Ziel muss tiefer liegen als Start
      var endR = path[path.length - 1].r;
      if (endR > startR) return path;
    }

    // Fallback: einfacher Pfad direkt nach unten wenn alle Versuche scheitern
    var fallback = [];
    var fc = Math.floor(Math.random() * COLS);
    for (var fr = 0; fr < 8; fr++) fallback.push({ r: fr, c: fc });
    return fallback;
  }


  // ─── Hauptklasse ─────────────────────────────────────────────
  function PathGameInstance(container, ctx, onEnd) {
    this.container   = container;
    this.ctx         = ctx;
    this.onEnd       = onEnd;
    this.dead        = false;
    this.mini        = 1;
    this.p1Points    = 0;
    this.p2Points    = 0;
    this.timers      = [];
    this.phase       = 'idle';
    this.currentPath = null;
    this.buzzer      = null;
    this.playerStep  = 0;
    this._cells      = [];

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  PathGameInstance.prototype = {

    // ────────────────────── UI ───────────────────────────────
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';

      var root = document.createElement('div');
      root.id = 'pg-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0a0a20,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:flex-start;',
        'position:relative;overflow:hidden;padding:12px 14px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        '<div style="position:absolute;pointer-events:none;width:500px;height:500px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(64,160,224,.06);"></div>',

        // Punkt-Dots
        '<div id="pg-dots" style="display:flex;align-items:center;gap:14px;margin-bottom:8px;min-height:26px;flex-wrap:wrap;justify-content:center;"></div>',

        // Untertitel
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:6px;">&#x1F9D8; Pfad der Erleuchtung &#x2014; Merke dir den Weg!</div>',

        // Status
        '<div id="pg-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:18px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:26px;margin-bottom:6px;text-align:center;transition:color .2s;"></div>',

        // Start-Button (nur Host)
        '<button id="pg-start-btn" style="display:none;margin-bottom:12px;background:#40a0e0;border:none;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:10px 34px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">&#x25B6; PFAD ANZEIGEN</button>',

        // Buzzer-Buttons
        '<div id="pg-buzzers" style="display:none;flex-direction:row;gap:10px;margin-bottom:10px;width:100%;max-width:440px;justify-content:center;">',
          '<button id="pg-buzz-p1" style="flex:1;background:rgba(58,180,245,.12);border:2px solid #3ab4f5;color:#3ab4f5;font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:.1em;padding:10px 6px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));">&#x26A1; ' + esc(this.ctx.p1Name) + '</button>',
          '<button id="pg-buzz-p2" style="flex:1;background:rgba(245,90,58,.12);border:2px solid #f55a3a;color:#f55a3a;font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:.1em;padding:10px 6px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));">&#x26A1; ' + esc(this.ctx.p2Name) + '</button>',
        '</div>',

        // Grid
        '<div id="pg-grid-wrap" style="display:none;width:100%;max-width:200px;margin:0 auto;">',
          '<div id="pg-grid" style="display:grid;grid-template-columns:repeat(' + COLS + ',1fr);gap:2px;padding:4px;background:rgba(255,255,255,.03);border:1px solid rgba(64,160,224,.18);border-radius:4px;">',
          '</div>',
        '</div>',

        // Overlay
        '<div id="pg-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:24px;">',
          '<div id="pg-ov-ico" style="font-size:52px;"></div>',
          '<div id="pg-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,5vw,42px);color:#40a0e0;letter-spacing:.05em;"></div>',
          '<div id="pg-ov-expl" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#a0a0bc;max-width:380px;line-height:1.5;"></div>',
          '<div id="pg-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;margin-top:4px;"></div>',
          '<button id="pg-ov-btn" style="display:none;margin-top:8px;background:#40a0e0;border:none;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">N&#xC4;CHSTE RUNDE &#x25B6;</button>',
          '<div id="pg-ov-wait" style="display:none;font-family:\'Barlow Condensed\',sans-serif;font-size:14px;color:#a0a0bc;letter-spacing:.2em;text-transform:uppercase;">Warte auf Host...</div>',
        '</div>',
      ].join('');

      this.container.appendChild(root);
      this._buildGridCells();
      this._drawDots();

      // Start-Button (nur Host)
      var startBtn = document.getElementById('pg-start-btn');
      if (this.ctx.isHost) {
        startBtn.style.display = 'block';
        startBtn.addEventListener('click', function() {
          startBtn.style.display = 'none';
          self._generateAndShowPath();
        });
      }

      // Buzzer: p1 = Host, p2 = Gast
      document.getElementById('pg-buzz-p1').addEventListener('click', function() {
        if (self.phase !== 'show') return;
        if (!self.ctx.isHost) return;
        self._onBuzz('p1');
      });
      document.getElementById('pg-buzz-p2').addEventListener('click', function() {
        if (self.phase !== 'show') return;
        if (self.ctx.isHost) return;
        self._onBuzz('p2');
      });
    },

    _buildGridCells: function() {
      var self = this;
      var grid = document.getElementById('pg-grid');
      grid.innerHTML = '';
      this._cells = [];
      for (var r = 0; r < ROWS; r++) {
        this._cells[r] = [];
        for (var c = 0; c < COLS; c++) {
          var cell = document.createElement('button');
          cell.style.cssText = [
            'aspect-ratio:1/1;',
            'background:rgba(255,255,255,.04);',
            'border:1px solid rgba(255,255,255,.1);',
            'border-radius:2px;',
            'cursor:pointer;',
            'transition:background .15s,border-color .15s;',
            'min-width:0;min-height:0;',
            'font-size:8px;color:#fff;',
            'padding:0;line-height:1;',
          ].join('');
          (function(rr, cc) {
            cell.addEventListener('click', function() {
              self._onCellClick(rr, cc);
            });
          })(r, c);
          grid.appendChild(cell);
          this._cells[r][c] = cell;
        }
      }
    },

    // ────────────────────── Netzwerk ─────────────────────────
    _setupNet: function() {
      var self = this;

      // Gast empfängt den Pfad und zeigt ihn an
      this.ctx.network.on('pg_start_path', function(msg) {
        if (self.ctx.isHost) return;
        self.currentPath = msg.path;
        self._showPath();
      });

      // Beide empfangen Buzzer-Event → Pfad ausblenden, Walking starten
      this.ctx.network.on('pg_buzz', function(msg) {
        self._hidePath();
        self.buzzer     = msg.player;
        self.playerStep = 0;
        self._activateWalking(msg.player);
      });

      // Nicht-Host zeigt angeklickte Zellen live mit
      // Host wertet aus (pathDone oder Fehler)
      this.ctx.network.on('pg_cell', function(msg) {
        if (self.ctx.isHost) {
          // Host wertet aus
          self._markCell(msg.r, msg.c, msg.correct, msg.step);
          if (msg.pathDone) {
            self._resolveRound(self.buzzer, 'path_complete');
          } else if (!msg.correct) {
            var loser = self.buzzer;
            self._resolveRound(loser === 'p1' ? 'p2' : 'p1', 'wrong_cell');
          }
        } else {
          // Gast zeigt nur mit
          self._markCell(msg.r, msg.c, msg.correct, msg.step);
        }
      });

      // Gast empfängt Runden-Ergebnis
      this.ctx.network.on('pg_round_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Points = msg.p1Points;
        self.p2Points = msg.p2Points;
        self._showResult(msg.winner, msg.reason);
      });

      // Gast empfängt "Nächste Runde" oder "Game Over"
      this.ctx.network.on('pg_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) {
          self._showFinal();
        } else {
          self.mini++;
          document.getElementById('pg-ov').style.display = 'none';
          self._startMini();
        }
      });

      this.ctx.network.on('pg_end_final', function() {
        if (self.ctx.isHost) return;
        self._finish();
      });
    },

    // ────────────────────── Runden-Ablauf ───────────────────
    _startMini: function() {
      if (this.dead) return;
      this.phase       = 'idle';
      this.buzzer      = null;
      this.playerStep  = 0;
      this.currentPath = null;
      this._clearTimers();
      this._resetGrid();

      document.getElementById('pg-buzzers').style.display   = 'none';
      document.getElementById('pg-grid-wrap').style.display = 'none';
      document.getElementById('pg-ov').style.display        = 'none';

      this._setStatus('Bereit f\u00fcr den n\u00e4chsten Pfad?', '#c0c0d8', '15px');
      this._drawDots();

      if (this.ctx.isHost) {
        this.currentPath = generatePath();
        var startBtn = document.getElementById('pg-start-btn');
        if (startBtn) startBtn.style.display = 'block';
      }
    },

    _generateAndShowPath: function() {
      if (!this.ctx.isHost || !this.currentPath) return;
      this.ctx.network.send('pg_start_path', { path: this.currentPath });
      this._showPath();
    },

    _showPath: function() {
      if (this.dead) return;
      this.phase = 'show';

      document.getElementById('pg-grid-wrap').style.display = 'block';
      document.getElementById('pg-buzzers').style.display   = 'flex';
      document.getElementById('pg-start-btn').style.display = 'none';

      this._resetGrid();
      this._highlightPath(this.currentPath);
      this._setStatus('Pfad einpr\u00e4gen \u2014 dann buzzern!', '#40a0e0', '18px');
      beep(440, 0.12, 'sine', 0.18);
      // Kein Zeitlimit – Pfad bleibt bis jemand buzzert
    },

    _highlightPath: function(path) {
      var self = this;
      path.forEach(function(cell, idx) {
        var el = self._cells[cell.r] && self._cells[cell.r][cell.c];
        if (!el) return;
        var t  = path.length <= 1 ? 1 : idx / (path.length - 1);
        var rr = Math.round(64  + t * (240 - 64));
        var gg = Math.round(160 + t * (192 - 160));
        var bb = Math.round(224 + t * (48  - 224));
        el.style.background  = 'rgba(' + rr + ',' + gg + ',' + bb + ',.55)';
        el.style.borderColor = 'rgba(' + rr + ',' + gg + ',' + bb + ',.9)';
        el.style.boxShadow   = '0 0 8px rgba(' + rr + ',' + gg + ',' + bb + ',.4)';
        if (idx === 0)               el.textContent = '\u2605';
        if (idx === path.length - 1) el.textContent = '\u2756';
      });
    },

    _hidePath: function() {
      this._resetGrid();
    },

    _resetGrid: function() {
      for (var r = 0; r < ROWS; r++) {
        for (var c = 0; c < COLS; c++) {
          var el = this._cells[r] && this._cells[r][c];
          if (!el) continue;
          el.style.background  = 'rgba(255,255,255,.04)';
          el.style.borderColor = 'rgba(255,255,255,.1)';
          el.style.boxShadow   = '';
          el.textContent       = '';
        }
      }
    },

    // ────────────────────── Buzzer ──────────────────────────
    _onBuzz: function(player) {
      if (this.phase !== 'show') return;
      this.phase      = 'walking';
      this.buzzer     = player;
      this.playerStep = 0;
      this._clearTimers();
      // Netzwerk informieren → alle blenden Pfad aus
      this.ctx.network.send('pg_buzz', { player: player });
      this._hidePath();
      this._activateWalking(player);
    },

    _activateWalking: function(player) {
      var isMe        = (this.ctx.isHost && player === 'p1') || (!this.ctx.isHost && player === 'p2');
      var playerColor = player === 'p1' ? '#3ab4f5' : '#f55a3a';
      var playerName  = player === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;

      document.getElementById('pg-buzzers').style.display   = 'none';
      document.getElementById('pg-grid-wrap').style.display = 'block';

      if (isMe) {
        this._setStatus('\uD83D\uDEB6 ' + esc(playerName) + ' \u2014 Gehe den Pfad!', playerColor, '16px');
      } else {
        this._setStatus('\uD83D\uDC40 ' + esc(playerName) + ' geht den Pfad...', playerColor, '16px');
      }
      beep(660, 0.1, 'sine', 0.2);
    },

    // ────────────────────── Zell-Klick ──────────────────────
    _onCellClick: function(r, c) {
      if (this.phase !== 'walking' || this.dead) return;
      // Nur der aktive Buzzer darf klicken
      var isMe = (this.ctx.isHost && this.buzzer === 'p1') || (!this.ctx.isHost && this.buzzer === 'p2');
      if (!isMe) return;

      var expected = this.currentPath[this.playerStep];
      var correct  = (expected.r === r && expected.c === c);

      if (correct) {
        beep(660, 0.07, 'sine', 0.15);
        this._markCell(r, c, true, this.playerStep);
        this.playerStep++;
        var pathDone = (this.playerStep >= this.currentPath.length);
        // Netzwerk: Schritt melden
        this.ctx.network.send('pg_cell', { r: r, c: c, correct: true, step: this.playerStep - 1, pathDone: pathDone });
        // Wenn Gast den letzten Schritt macht, wertet der Host aus (via pg_cell mit pathDone=true)
        // Wenn Host selbst den letzten Schritt macht, direkt auflösen
        if (pathDone && this.ctx.isHost) {
          this._resolveRound(this.buzzer, 'path_complete');
        }
      } else {
        beep(200, 0.3, 'sawtooth', 0.25);
        this._markCell(r, c, false, this.playerStep);
        // Netzwerk: Fehler melden
        this.ctx.network.send('pg_cell', { r: r, c: c, correct: false, step: this.playerStep, pathDone: false });
        // Wenn Gast Fehler macht, wertet der Host aus (via pg_cell mit correct=false)
        // Wenn Host selbst Fehler macht, direkt auflösen
        if (this.ctx.isHost) {
          var loser = this.buzzer;
          this._resolveRound(loser === 'p1' ? 'p2' : 'p1', 'wrong_cell');
        }
        // Phase sperren damit kein weiterer Klick möglich
        this.phase = 'result_pending';
      }
    },

    _markCell: function(r, c, correct, step) {
      var el = this._cells[r] && this._cells[r][c];
      if (!el) return;
      if (correct) {
        el.style.background  = 'rgba(42,240,160,.45)';
        el.style.borderColor = '#2af0a0';
        el.style.boxShadow   = '0 0 10px rgba(42,240,160,.5)';
        el.textContent       = step + 1;
      } else {
        el.style.background  = 'rgba(245,90,58,.5)';
        el.style.borderColor = '#f55a3a';
        el.style.boxShadow   = '0 0 12px rgba(245,90,58,.6)';
        el.textContent       = '\u2717';
      }
    },

    // ────────────────────── Runden-Auflösung (nur Host) ─────
    _resolveRound: function(pointWinner, reason) {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result';
      this._clearTimers();

      // Richtigen Pfad kurz einblenden zur Kontrolle
      this._highlightPath(this.currentPath);

      if (pointWinner === 'p1') this.p1Points++;
      else this.p2Points++;

      // Ergebnis an Gast senden
      this.ctx.network.send('pg_round_result', {
        winner:   pointWinner,
        reason:   reason,
        p1Points: this.p1Points,
        p2Points: this.p2Points
      });

      this._showResult(pointWinner, reason);
    },

    _showResult: function(winner, reason) {
      var self       = this;
      var winnerName = winner === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
      var loserName  = winner === 'p1' ? this.ctx.p2Name : this.ctx.p1Name;
      var gameOver   = this.p1Points >= MAX_POINTS || this.p2Points >= MAX_POINTS;

      var ov = document.getElementById('pg-ov');

      if (reason === 'path_complete') {
        document.getElementById('pg-ov-ico').textContent  = '\uD83E\uDDD8';
        document.getElementById('pg-ov-ttl').textContent  = esc(winnerName) + ' hat den Pfad gemeistert!';
        document.getElementById('pg-ov-expl').textContent = 'Fehlerfrei abgelaufen \u2014 ' + esc(winnerName) + ' bekommt einen Punkt!';
        beep(880, 0.25, 'sine', 0.22);
      } else {
        document.getElementById('pg-ov-ico').textContent  = '\uD83D\uDCA5';
        document.getElementById('pg-ov-ttl').textContent  = esc(loserName) + ' ist vom Pfad abgewichen!';
        document.getElementById('pg-ov-expl').textContent = esc(winnerName) + ' bekommt einen Punkt!';
      }

      document.getElementById('pg-ov-sc').innerHTML =
        '\u2B50 ' + esc(this.ctx.p1Name) + ': ' + this.p1Points + '/' + MAX_POINTS +
        ' &nbsp;&middot;&nbsp; ' +
        '\u2B50 ' + esc(this.ctx.p2Name) + ': ' + this.p2Points + '/' + MAX_POINTS +
        ' &nbsp;&middot;&nbsp; Runde ' + this.mini;

      ov.style.display = 'flex';
      this._drawDots();

      var btn     = document.getElementById('pg-ov-btn');
      var waitMsg = document.getElementById('pg-ov-wait');

      if (gameOver) {
        btn.textContent = 'AUFL\u00D6SUNG ANZEIGEN';
      } else {
        btn.textContent = 'N\u00C4CHSTE RUNDE \u25B6';
      }

      if (this.ctx.isHost) {
        // Host sieht den Weiter-Button
        btn.style.display     = 'block';
        waitMsg.style.display = 'none';
        btn.onclick = function() {
          self.ctx.network.send('pg_next', { gameOver: gameOver });
          if (gameOver) {
            self._showFinal();
          } else {
            self.mini++;
            self._startMini();
          }
        };
      } else {
        // Gast wartet auf Host
        btn.style.display     = 'none';
        waitMsg.style.display = 'block';
      }
    },

    _showFinal: function() {
      var self       = this;
      var p1Won      = this.p1Points >= MAX_POINTS;
      var winnerName = p1Won ? this.ctx.p1Name : this.ctx.p2Name;

      // Overlay sicherstellen (Gast kommt direkt von pg_next)
      document.getElementById('pg-ov').style.display = 'flex';

      document.getElementById('pg-ov-ico').textContent  = '\uD83C\uDFC6';
      document.getElementById('pg-ov-ttl').textContent  = esc(winnerName) + ' gewinnt!';
      document.getElementById('pg-ov-expl').textContent =
        esc(winnerName) + ' hat als Erstes ' + MAX_POINTS + ' Punkte erreicht. Herzlichen Gl\u00FCckwunsch!';

      document.getElementById('pg-ov-sc').innerHTML =
        '\u2B50 ' + esc(this.ctx.p1Name) + ': ' + this.p1Points +
        ' &nbsp;&middot;&nbsp; ' +
        '\u2B50 ' + esc(this.ctx.p2Name) + ': ' + this.p2Points +
        '<br><span style="font-size:12px;opacity:.7;">Gespielt: ' + this.mini + ' Runden</span>';

      this._drawDots();

      var btn     = document.getElementById('pg-ov-btn');
      var waitMsg = document.getElementById('pg-ov-wait');

      // Beide Spieler sehen den Button
      btn.textContent       = 'ZUM HAUPTMEN\u00DC';
      btn.style.display     = 'block';
      waitMsg.style.display = 'none';

      if (this.ctx.isHost) {
        btn.onclick = function() {
          self.ctx.network.send('pg_end_final', {});
          self._finish();
        };
      } else {
        btn.onclick = function() {
          self._finish();
        };
      }

      beep(523, 0.3, 'sine', 0.2);
      setTimeout(function() { beep(659, 0.3, 'sine', 0.2);  }, 200);
      setTimeout(function() { beep(784, 0.5, 'sine', 0.22); }, 400);
    },

    // ────────────────────── Hilfsmethoden ───────────────────
    _drawDots: function() {
      var el = document.getElementById('pg-dots');
      if (!el) return;
      var d1 = '', d2 = '';
      var bs = 'display:inline-block;width:12px;height:12px;border-radius:50%;margin:0 2px;border:2px solid ';
      for (var i = 0; i < MAX_POINTS; i++) {
        d1 += '<span style="' + bs + (i < this.p1Points ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Points ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML =
        '<span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#3ab4f5;letter-spacing:.1em;">' + esc(this.ctx.p1Name) + '</span> ' +
        d1 +
        '<span style="color:#c0c0d8;margin:0 8px;font-size:11px;white-space:nowrap;">RUNDE ' + this.mini + '</span>' +
        d2 +
        ' <span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#f55a3a;letter-spacing:.1em;">' + esc(this.ctx.p2Name) + '</span>';
    },

    _setStatus: function(t, c, s) {
      var el = document.getElementById('pg-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    _clearTimers: function() {
      this.timers.forEach(clearTimeout);
      this.timers = [];
    },

    _finish: function() {
      this.dead = true;
      var winner = this.p1Points >= MAX_POINTS ? 'p1' : 'p2';
      this.onEnd({ winner: winner, details: '\u2B50 ' + this.p1Points + ' : ' + this.p2Points });
    },

    destroy: function() {
      this.dead = true;
      this._clearTimers();
      ['pg_start_path','pg_buzz','pg_cell','pg_round_result','pg_next','pg_end_final'].forEach(function(ev) {
        this.ctx.network.off(ev);
      }, this);
    }
  };

  // ─── Registrierung ───────────────────────────────────────────
  GamePool.register({
    id: 'pfad-der-erleuchtung',
    name: 'Pfad der Erleuchtung',
    description: 'Ein leuchtender Pfad erscheint auf einem 6\u00D710 Feld \u2014 pr\u00e4ge ihn dir ein, buzzer und laufe ihn fehlerfrei nach! Fehler \u2192 Gegner punktet. Pfad komplett \u2192 du punktest. Wer zuerst 3 Punkte hat, gewinnt!',
    init: function(container, ctx, onEnd) { this._instance = new PathGameInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
