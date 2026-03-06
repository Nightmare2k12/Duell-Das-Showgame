(function () {

  // ═══════════════════════════════════════════════════════════
  // KATEGORIEN-DATENBANK
  // ═══════════════════════════════════════════════════════════
  var CATEGORIES = [
    {
      label: 'James Bond Filme',
      dir:   ['Früher erschienen', 'Später erschienen'],
      anchor: { t: 'Goldfinger', v: 1964 },
      items: [
        { t: 'Dr. No',              v: 1962 },
        { t: 'Thunderball',         v: 1965 },
        { t: 'The Spy Who Loved Me',v: 1977 },
        { t: 'GoldenEye',           v: 1995 },
        { t: 'Casino Royale',       v: 2006 },
        { t: 'Skyfall',             v: 2012 },
        { t: 'No Time to Die',      v: 2021 },
      ]
    },
    {
      label: 'Tiergröße (Gewicht)',
      dir:   ['Leichter', 'Schwerer'],
      anchor: { t: 'Schaf', v: 70 },
      items: [
        { t: 'Maus',     v: 0.02 },
        { t: 'Katze',    v: 4    },
        { t: 'Hund',     v: 30   },
        { t: 'Löwe',     v: 190  },
        { t: 'Pferd',    v: 600  },
        { t: 'Nilpferd', v: 3000 },
        { t: 'Elefant',  v: 6000 },
      ]
    },
    {
      label: 'Planeten (Entfernung zur Sonne)',
      dir:   ['Näher zur Sonne', 'Weiter entfernt'],
      anchor: { t: 'Erde', v: 3 },
      items: [
        { t: 'Merkur',  v: 1 },
        { t: 'Venus',   v: 2 },
        { t: 'Mars',    v: 4 },
        { t: 'Jupiter', v: 5 },
        { t: 'Saturn',  v: 6 },
        { t: 'Uranus',  v: 7 },
        { t: 'Neptun',  v: 8 },
      ]
    },
    {
      label: 'Berge nach Höhe',
      dir:   ['Niedriger', 'Höher'],
      anchor: { t: 'Mont Blanc', v: 4808 },
      items: [
        { t: 'Zugspitze',      v: 2962 },
        { t: 'Kilimandscharo', v: 5895 },
        { t: 'Elbrus',         v: 5642 },
        { t: 'Denali',         v: 6190 },
        { t: 'Aconcagua',      v: 6961 },
        { t: 'K2',             v: 8611 },
        { t: 'Mt. Everest',    v: 8849 },
      ]
    },
    {
      label: 'Tech-Erfindungen',
      dir:   ['Früher erfunden', 'Später erfunden'],
      anchor: { t: 'Telefon', v: 1876 },
      items: [
        { t: 'Glühbirne',    v: 1879 },
        { t: 'Radio',        v: 1895 },
        { t: 'Fernseher',    v: 1927 },
        { t: 'Transistor',   v: 1947 },
        { t: 'Internet',     v: 1969 },
        { t: 'Mobiltelefon', v: 1983 },
        { t: 'Smartphone',   v: 2007 },
      ]
    },
  ];

  // CSS-Animationen einmalig einbetten
  (function injectCSS() {
    if (document.getElementById('so-styles')) return;
    var s = document.createElement('style');
    s.id = 'so-styles';
    s.textContent = [
      '@keyframes so-flash-green {',
      '  0%   { box-shadow: inset 0 0 0 3px #2af0a0, 0 0 0 0 #2af0a0; background: rgba(42,240,160,.08); }',
      '  40%  { box-shadow: inset 0 0 0 3px #2af0a0, 0 0 40px 12px rgba(42,240,160,.5); background: rgba(42,240,160,.22); }',
      '  100% { box-shadow: inset 0 0 0 3px #2af0a0, 0 0 0 0 #2af0a0; background: rgba(42,240,160,.08); }',
      '}',
      '@keyframes so-flash-red {',
      '  0%   { box-shadow: inset 0 0 0 3px #f55a3a, 0 0 0 0 #f55a3a; background: rgba(245,90,58,.08); }',
      '  40%  { box-shadow: inset 0 0 0 3px #f55a3a, 0 0 40px 12px rgba(245,90,58,.5); background: rgba(245,90,58,.22); }',
      '  100% { box-shadow: inset 0 0 0 3px #f55a3a, 0 0 0 0 #f55a3a; background: rgba(245,90,58,.08); }',
      '}',
      '@keyframes so-reveal {',
      '  from { opacity: 0; transform: translateX(-14px); }',
      '  to   { opacity: 1; transform: translateX(0); }',
      '}',
      '@keyframes so-slide-in {',
      '  from { opacity: 0; transform: scale(.85); }',
      '  to   { opacity: 1; transform: scale(1); }',
      '}',
      '.so-flash-green { animation: so-flash-green .7s ease-out; }',
      '.so-flash-red   { animation: so-flash-red   .7s ease-out; }',
      '.so-reveal-item { animation: so-reveal .35s ease-out both; }',
      '.so-slide-in    { animation: so-slide-in .4s ease-out both; }',
    ].join('\n');
    document.head.appendChild(s);
  })();

  // ─── Helpers ────────────────────────────────────────────────
  function beep(freq, dur, type, vol) {
    try {
      var ac = new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = freq; o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(ac.currentTime); o.stop(ac.currentTime + dur + 0.01);
    } catch(e) {}
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // ═══════════════════════════════════════════════════════════
  // SPIEL-INSTANZ
  // ═══════════════════════════════════════════════════════════
  function SortierenInstance(container, ctx, onEnd) {
    this.container     = container;
    this.ctx           = ctx;
    this.onEnd         = onEnd;
    this.dead          = false;
    this.mini          = 1;
    this.p1Wins        = 0;
    this.p2Wins        = 0;
    this.timers        = [];
    this._roundTimer   = null;
    this._tickInterval = null;
    this.phase         = 'idle';
    this.currentCat    = null;
    this._deck         = [];
    this._timeLeft     = 60;
    this._sortedList   = [];
    this._queue        = [];
    this._selected     = null;
    this._currentTurn  = 'p1';
    this._roundStarter = 'p1';
    // Vollständige sortierte Lösung (alle Begriffe inkl. anchor), für Auflösung
    this._fullSolution = [];

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  SortierenInstance.prototype = {

    // ─────────────────────────────────────────────────────────
    // UI AUFBAUEN
    // ─────────────────────────────────────────────────────────
    _buildUI: function () {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'so-root';
      root.style.cssText =
        'width:100%;height:100%;' +
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);' +
        'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
        'position:relative;overflow:hidden auto;padding:16px 20px;box-sizing:border-box;' +
        'font-family:"Bebas Neue",sans-serif;';

      root.innerHTML =
        // Deko-Ring
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;' +
        'top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>' +

        // Punkte-Dots
        '<div id="so-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:10px;min-height:28px;"></div>' +

        // Kategorie
        '<div id="so-cat-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;' +
        'letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:4px;"></div>' +

        // Timer
        '<div id="so-timer" style="font-size:26px;color:#f0c030;letter-spacing:.1em;margin-bottom:4px;' +
        'font-family:\'Barlow Condensed\',sans-serif;display:none;font-weight:700;">60s</div>' +

        // Status
        '<div id="so-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:18px;' +
        'letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:26px;' +
        'margin-bottom:8px;text-align:center;transition:color .2s;"></div>' +

        // Start-Button (Host)
        '<button id="so-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';' +
        'margin-bottom:14px;background:#f0c030;border:none;color:#000;' +
        'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;' +
        'padding:12px 40px;cursor:pointer;' +
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">' +
        'RUNDE STARTEN</button>' +

        // ── FLASH-OVERLAY für richtig/falsch (liegt über Spielfeld) ──
        '<div id="so-flash" style="display:none;position:absolute;inset:0;z-index:20;pointer-events:none;' +
        'flex-direction:column;align-items:center;justify-content:center;">' +
          '<div id="so-flash-inner" style="font-family:\'Bebas Neue\',sans-serif;' +
          'font-size:clamp(36px,8vw,72px);letter-spacing:.08em;text-shadow:0 0 40px currentColor;"></div>' +
        '</div>' +

        // ── SPIELFELD ──
        '<div id="so-game-area" style="display:none;flex-direction:row;gap:20px;' +
        'width:100%;max-width:580px;align-items:flex-start;justify-content:center;">' +

          // LINKS: Queue
          '<div style="display:flex;flex-direction:column;align-items:stretch;min-width:145px;max-width:180px;flex:1;">' +
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.3em;' +
            'color:#666688;text-transform:uppercase;text-align:center;margin-bottom:6px;">Zu sortieren</div>' +
            '<div id="so-queue" style="display:flex;flex-direction:column;gap:5px;"></div>' +
          '</div>' +

          // RECHTS: Sortierte Liste
          '<div style="display:flex;flex-direction:column;align-items:center;min-width:165px;flex:1;">' +
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.3em;' +
            'color:#666688;text-transform:uppercase;text-align:center;margin-bottom:4px;">Reihenfolge</div>' +
            '<div id="so-dir-top" style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;' +
            'letter-spacing:.2em;color:#f0c03099;text-transform:uppercase;margin-bottom:2px;"></div>' +
            '<div id="so-sorted" style="display:flex;flex-direction:column;align-items:center;width:100%;position:relative;"></div>' +
            '<div id="so-dir-bot" style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;' +
            'letter-spacing:.2em;color:#f0c03099;text-transform:uppercase;margin-top:2px;"></div>' +
          '</div>' +

        '</div>' +

        // Wer ist dran
        '<div id="so-turn-info" style="display:none;margin-top:8px;font-family:\'Barlow Condensed\',' +
        'sans-serif;font-size:13px;letter-spacing:.2em;color:#f0c030;text-transform:uppercase;text-align:center;"></div>' +

        // ── AUFLÖSUNGS-OVERLAY ──
        '<div id="so-resolve" style="display:none;position:absolute;inset:0;z-index:25;' +
        'background:rgba(6,6,16,.96);flex-direction:column;align-items:center;justify-content:center;' +
        'gap:10px;padding:24px;text-align:center;">' +
          '<div id="so-resolve-title" style="font-family:\'Bebas Neue\',sans-serif;' +
          'font-size:clamp(18px,4vw,32px);color:#f0c030;letter-spacing:.08em;margin-bottom:4px;"></div>' +
          '<div id="so-resolve-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;' +
          'letter-spacing:.35em;color:#888;text-transform:uppercase;margin-bottom:6px;"></div>' +
          '<div id="so-resolve-dir-top" style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;' +
          'letter-spacing:.2em;color:#f0c03099;text-transform:uppercase;margin-bottom:2px;"></div>' +
          '<div id="so-resolve-list" style="display:flex;flex-direction:column;gap:5px;width:100%;max-width:320px;"></div>' +
          '<div id="so-resolve-dir-bot" style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;' +
          'letter-spacing:.2em;color:#f0c03099;text-transform:uppercase;margin-top:2px;"></div>' +
          '<button id="so-resolve-btn" style="display:none;margin-top:14px;background:#f0c030;border:none;color:#000;' +
          'font-family:\'Bebas Neue\',sans-serif;font-size:18px;padding:11px 36px;cursor:pointer;' +
          'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));' +
          'letter-spacing:.12em;">PUNKTE ANZEIGEN</button>' +
        '</div>' +

        // ── ERGEBNIS-OVERLAY ──
        '<div id="so-ov" style="display:none;position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.95);' +
        'flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:28px;">' +
          '<div id="so-ov-ico" style="font-size:52px;"></div>' +
          '<div id="so-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,6vw,46px);' +
          'color:#f0c030;letter-spacing:.05em;"></div>' +
          '<div id="so-ov-msg" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;' +
          'color:#a0a0bc;max-width:380px;line-height:1.5;"></div>' +
          '<div id="so-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;' +
          'color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>' +
          '<button id="so-ov-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;' +
          'font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;' +
          'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">' +
          'WEITER \u2192</button>' +
        '</div>';

      this.container.appendChild(root);
      this._drawDots();

      if (this.ctx.isHost) {
        document.getElementById('so-start-btn').addEventListener('click', function () {
          this.style.display = 'none';
          self.ctx.network.send('so_start_countdown', {});
          self._countdown();
        });
      }
    },

    // ─────────────────────────────────────────────────────────
    // NETZWERK
    // ─────────────────────────────────────────────────────────
    _setupNet: function () {
      var self = this;

      this.ctx.network.on('so_start_countdown', function () {
        if (!self.ctx.isHost) self._countdown();
      });

      this.ctx.network.on('so_sync_round', function (msg) {
        if (self.ctx.isHost) return;
        self.currentCat      = msg.cat;
        self._sortedList     = msg.sortedList;
        self._queue          = msg.queue;
        self._currentTurn    = msg.turn;
        self._roundStarter   = msg.starter;
        self._fullSolution   = msg.solution;
        self._selected       = null;
        self._renderGame();
        self._startAnswering();
      });

      this.ctx.network.on('so_update', function (msg) {
        if (self.ctx.isHost) return;
        self._sortedList  = msg.sortedList;
        self._queue       = msg.queue;
        self._currentTurn = msg.turn;
        self._selected    = null;
        self._flashResult(true, function () {
          self._renderGame();
          self._resetTimer();
        });
      });

      this.ctx.network.on('so_client_move', function (msg) {
        if (!self.ctx.isHost) return;
        self._handleMove(msg.selIdx, msg.pos);
      });

      this.ctx.network.on('so_wrong', function (msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._clearTimers();
        self._flashResult(false, function () {
          self._showResolve(msg.solution, function () {
            self._showResult('wrong', msg.who, msg.p1Wins, msg.p2Wins);
          });
        });
      });

      this.ctx.network.on('so_timeout_ev', function (msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._clearTimers();
        self._flashResult(false, function () {
          self._showResolve(msg.solution, function () {
            self._showResult('timeout', msg.who, msg.p1Wins, msg.p2Wins);
          });
        });
      });

      this.ctx.network.on('so_roundwin', function (msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._clearTimers();
        self._flashResult(true, function () {
          self._showResult('win', msg.who, msg.p1Wins, msg.p2Wins);
        });
      });

      this.ctx.network.on('so_next', function (msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) { self._finish(); }
        else {
          self.mini++;
          self._startMini();
          document.getElementById('so-ov').style.display      = 'none';
          document.getElementById('so-resolve').style.display = 'none';
        }
      });
    },

    // ─────────────────────────────────────────────────────────
    // MINI-RUNDE VORBEREITEN
    // ─────────────────────────────────────────────────────────
    _startMini: function () {
      if (this.dead) return;
      this.phase     = 'idle';
      this._selected = null;
      this._clearTimers();
      document.getElementById('so-game-area').style.display  = 'none';
      document.getElementById('so-turn-info').style.display  = 'none';
      document.getElementById('so-timer').style.display      = 'none';
      document.getElementById('so-flash').style.display      = 'none';
      this._setStatus('Bereit?', '#c0c0d8', '18px');

      if (this.ctx.isHost) {
        var btn = document.getElementById('so-start-btn');
        if (btn) btn.style.display = 'block';
        if (this._deck.length === 0) {
          this._deck = shuffle(CATEGORIES.map(function (_, i) { return i; }));
        }
        var cat = CATEGORIES[this._deck.shift()];
        this._roundStarter  = (this.mini % 2 === 1) ? 'p1' : 'p2';
        this._currentTurn   = this._roundStarter;
        this.currentCat     = { label: cat.label, dir: cat.dir, anchor: cat.anchor };
        this._sortedList    = [cat.anchor];
        this._queue         = shuffle(cat.items).slice(0, 7);
        // Vollständige korrekte Reihenfolge vorberechnen
        this._fullSolution  = [cat.anchor].concat(cat.items.slice()).sort(function (a, b) { return a.v - b.v; });
      }
      this._drawDots();
    },

    // ─────────────────────────────────────────────────────────
    // COUNTDOWN
    // ─────────────────────────────────────────────────────────
    _countdown: function () {
      if (this.dead) return;
      var self = this, n = 3;
      this.phase = 'countdown';
      document.getElementById('so-start-btn').style.display = 'none';
      var tick = function () {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('', '#c0c0d8', '18px');
          if (self.ctx.isHost) self._sendRound();
        }
      };
      tick();
    },

    // ─────────────────────────────────────────────────────────
    // HOST SENDET RUNDENSTART
    // ─────────────────────────────────────────────────────────
    _sendRound: function () {
      if (!this.ctx.isHost) return;
      this.ctx.network.send('so_sync_round', {
        cat:        this.currentCat,
        sortedList: this._sortedList,
        queue:      this._queue,
        turn:       this._currentTurn,
        starter:    this._roundStarter,
        solution:   this._fullSolution,
      });
      this._renderGame();
      this._startAnswering();
    },

    // ─────────────────────────────────────────────────────────
    // ANTWORTPHASE
    // ─────────────────────────────────────────────────────────
    _startAnswering: function () {
      var self = this;
      this.phase     = 'answering';
      this._selected = null;
      this._timeLeft = 60;
      var timerEl    = document.getElementById('so-timer');
      timerEl.style.display = 'block';
      timerEl.style.color   = '#f0c030';
      timerEl.textContent   = '60s';

      this._tickInterval = setInterval(function () {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var el = document.getElementById('so-timer');
        if (el) { el.textContent = self._timeLeft + 's'; if (self._timeLeft <= 10) el.style.color = '#f55a3a'; }
        if (self._timeLeft <= 0) { self._clearTimers(); if (self.ctx.isHost) self._handleTimeout(); }
      }, 1000);

      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function () { self._handleTimeout(); }, 60000);
      }
      beep(550, 0.1, 'sine', 0.12);
      this._renderGame();
    },

    _resetTimer: function () {
      var self = this;
      this._clearTimers();
      this._timeLeft = 60;
      var timerEl = document.getElementById('so-timer');
      if (timerEl) { timerEl.style.color = '#f0c030'; timerEl.textContent = '60s'; }
      this._tickInterval = setInterval(function () {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var el = document.getElementById('so-timer');
        if (el) { el.textContent = self._timeLeft + 's'; if (self._timeLeft <= 10) el.style.color = '#f55a3a'; }
        if (self._timeLeft <= 0) { self._clearTimers(); if (self.ctx.isHost) self._handleTimeout(); }
      }, 1000);
      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function () { self._handleTimeout(); }, 60000);
      }
    },

    // ─────────────────────────────────────────────────────────
    // SPIELFELD RENDERN
    // ─────────────────────────────────────────────────────────
    _renderGame: function () {
      var self     = this;
      var cat      = this.currentCat;
      var isMyTurn = this._isMyTurn();
      var hasSel   = (this._selected !== null);

      document.getElementById('so-cat-label').textContent = cat.label;
      document.getElementById('so-dir-top').textContent   = '\u25b2 ' + cat.dir[0];
      document.getElementById('so-dir-bot').textContent   = '\u25bc ' + cat.dir[1];

      var turnName = (this._currentTurn === 'p1') ? this.ctx.p1Name : this.ctx.p2Name;
      var turnEl   = document.getElementById('so-turn-info');
      turnEl.textContent   = '\uD83C\uDFAE  ' + turnName + ' ist dran';
      turnEl.style.display = 'block';
      turnEl.style.color   = (this._currentTurn === 'p1') ? '#3ab4f5' : '#f55a3a';

      // ── Queue (links) ────────────────────────────────────
      var qEl = document.getElementById('so-queue');
      qEl.innerHTML = '';
      this._queue.forEach(function (item, idx) {
        var isSel = (self._selected === idx);
        var btn   = document.createElement('button');
        btn.textContent = item.t;
        btn.style.cssText =
          'background:' + (isSel ? 'rgba(240,192,48,.18)' : 'rgba(255,255,255,.04)') + ';' +
          'border:2px solid ' + (isSel ? '#f0c030' : 'rgba(255,255,255,.13)') + ';' +
          'color:' + (isSel ? '#f0c030' : '#c0c0d8') + ';' +
          'box-shadow:' + (isSel ? '0 0 18px rgba(240,192,48,.45)' : 'none') + ';' +
          'font-family:"Bebas Neue",sans-serif;font-size:clamp(13px,2.5vw,18px);' +
          'letter-spacing:.06em;padding:8px 12px;text-align:left;width:100%;' +
          'cursor:' + (isMyTurn ? 'pointer' : 'default') + ';' +
          'clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px));' +
          'transition:all .15s;';
        if (isMyTurn) {
          (function(i) {
            btn.addEventListener('click', function () { self._selectTerm(i); });
          })(idx);
        }
        qEl.appendChild(btn);
      });
      if (this._queue.length === 0) {
        var empty = document.createElement('div');
        empty.style.cssText = 'color:#44446a;font-family:\'Barlow Condensed\',sans-serif;font-size:12px;text-align:center;padding:8px;';
        empty.textContent = 'Alle platziert!';
        qEl.appendChild(empty);
      }

      // ── Sortierte Liste + Dreiecke (rechts) ───────────────
      var sEl = document.getElementById('so-sorted');
      sEl.innerHTML = '';

      for (var i = 0; i <= this._sortedList.length; i++) {
        // Dreieck — nur Spitze zeigt nach innen, sitzt am Rand
        (function (pos) {
          var canClick = isMyTurn && hasSel;
          var row = document.createElement('div');
          row.style.cssText =
            'display:flex;align-items:center;width:100%;height:18px;position:relative;margin:0;';

          // Linker Pfeil (Spitze zeigt rechts/nach innen)
          var tri = document.createElement('button');
          tri.style.cssText =
            'position:absolute;left:0;top:50%;transform:translateY(-50%);' +
            'width:28px;height:18px;padding:0;border:none;background:transparent;' +
            'cursor:' + (canClick ? 'pointer' : 'default') + ';' +
            'opacity:' + (canClick ? '1' : '0.18') + ';' +
            'transition:opacity .15s;display:flex;align-items:center;justify-content:flex-start;';

          tri.innerHTML =
            '<svg width="28" height="18" viewBox="0 0 28 18" style="display:block;overflow:visible;">' +
              // Dreieck: Spitze rechts (zeigt nach innen zur Liste)
              '<polygon points="26,9 4,2 4,16" ' +
                'fill="' + (canClick ? '#f0c030' : '#252540') + '" ' +
                'stroke="' + (canClick ? '#f0c030' : '#33334a') + '" stroke-width="1"/>' +
              '<text x="9" y="13" text-anchor="middle" ' +
                'fill="' + (canClick ? '#000' : '#44446a') + '" ' +
                'font-size="9" font-family="Bebas Neue,sans-serif" font-weight="bold">' +
                (pos + 1) +
              '</text>' +
            '</svg>';

          if (canClick) {
            (function(p) {
              tri.addEventListener('click', function () { self._placeAt(p); });
            })(pos);
          }
          row.appendChild(tri);
          sEl.appendChild(row);
        })(i);

        // Karte
        if (i < this._sortedList.length) {
          (function(item) {
            var isAnchor = (item.t === self.currentCat.anchor.t);
            var card = document.createElement('div');
            card.style.cssText =
              'background:' + (isAnchor ? 'rgba(162,89,255,.2)' : 'rgba(255,255,255,.05)') + ';' +
              'border:2px solid ' + (isAnchor ? '#a259ff' : 'rgba(255,255,255,.12)') + ';' +
              'color:' + (isAnchor ? '#c4b5fd' : '#e0e0f0') + ';' +
              'font-family:"Bebas Neue",sans-serif;font-size:clamp(12px,2.3vw,16px);' +
              'letter-spacing:.06em;padding:7px 14px 7px 36px;text-align:left;width:100%;' +
              'box-sizing:border-box;' +
              'clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px));';
            card.textContent = item.t + (isAnchor ? '  \uD83D\uDCCD' : '');
            sEl.appendChild(card);
          })(this._sortedList[i]);
        }
      }

      document.getElementById('so-game-area').style.display = 'flex';
      this._setStatus('', '#c0c0d8', '14px');
    },

    // ─────────────────────────────────────────────────────────
    // FLASH-ANIMATION  (grün = richtig, rot = falsch)
    // ─────────────────────────────────────────────────────────
    _flashResult: function (correct, callback) {
      var flashEl = document.getElementById('so-flash');
      var inner   = document.getElementById('so-flash-inner');
      var color   = correct ? '#2af0a0' : '#f55a3a';
      var text    = correct ? '\u2713  RICHTIG!' : '\u2717  FALSCH!';
      var cls     = correct ? 'so-flash-green' : 'so-flash-red';

      inner.textContent  = text;
      inner.style.color  = color;
      flashEl.style.cssText =
        'display:flex;position:absolute;inset:0;z-index:20;pointer-events:none;' +
        'flex-direction:column;align-items:center;justify-content:center;' +
        'background:rgba(6,6,16,.55);';

      // CSS-Klasse animiert das Root-Element
      var root = document.getElementById('so-root');
      root.classList.remove('so-flash-green', 'so-flash-red');
      void root.offsetWidth; // reflow
      root.classList.add(cls);

      if (correct) {
        beep(660, 0.08, 'sine', 0.15);
        setTimeout(function () { beep(880, 0.12, 'sine', 0.15); }, 90);
      } else {
        beep(200, 0.25, 'sawtooth', 0.18);
      }

      setTimeout(function () {
        flashEl.style.display = 'none';
        root.classList.remove(cls);
        if (callback) callback();
      }, 900);
    },

    // ─────────────────────────────────────────────────────────
    // AUFLÖSUNGS-OVERLAY  (zeigt korrekte Reihenfolge animiert)
    // ─────────────────────────────────────────────────────────
    _showResolve: function (solution, onDone) {
      var self    = this;
      var cat     = this.currentCat;
      var resolveEl = document.getElementById('so-resolve');
      var listEl    = document.getElementById('so-resolve-list');

      document.getElementById('so-resolve-title').textContent   = 'Die richtige Reihenfolge';
      document.getElementById('so-resolve-label').textContent   = cat.label;
      document.getElementById('so-resolve-dir-top').textContent = '\u25b2 ' + cat.dir[0];
      document.getElementById('so-resolve-dir-bot').textContent = '\u25bc ' + cat.dir[1];

      listEl.innerHTML = '';
      resolveEl.style.display = 'flex';

      // Begriffe nacheinander einblenden (50ms Versatz je Begriff)
      var delay = 0;
      solution.forEach(function (item, idx) {
        (function(itm, d) {
          setTimeout(function () {
            var isAnchor = (itm.t === cat.anchor.t);
            var card = document.createElement('div');
            card.className = 'so-reveal-item';
            card.style.cssText =
              'background:' + (isAnchor ? 'rgba(162,89,255,.2)' : 'rgba(255,255,255,.05)') + ';' +
              'border:2px solid ' + (isAnchor ? '#a259ff' : 'rgba(42,240,160,.3)') + ';' +
              'color:' + (isAnchor ? '#c4b5fd' : '#e8ffe8') + ';' +
              'font-family:"Bebas Neue",sans-serif;font-size:clamp(12px,2.3vw,16px);' +
              'letter-spacing:.07em;padding:7px 16px;text-align:left;width:100%;' +
              'box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;' +
              'clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px));' +
              'animation-delay:' + d + 'ms;';
            card.innerHTML =
              '<span>' + (idx + 1) + '. &nbsp;' + itm.t + (isAnchor ? '  \uD83D\uDCCD' : '') + '</span>';
            listEl.appendChild(card);
            beep(300 + idx * 40, 0.05, 'sine', 0.08);
          }, d);
        })(item, delay);
        delay += 180;
      });

      // Knopf erscheint nach allen Karten (nur Host)
      var btnEl = document.getElementById('so-resolve-btn');
      btnEl.style.display = 'none';
      setTimeout(function () {
        btnEl.className = 'so-slide-in';
        if (self.ctx.isHost) {
          btnEl.style.display = 'block';
          btnEl.onclick = function () {
            resolveEl.style.display = 'none';
            onDone();
          };
        }
        // Gast wartet auf Host-Signal (onDone kommt via so_ov_show)
        self.ctx.network.on('so_show_score', function () {
          if (self.ctx.isHost) return;
          resolveEl.style.display = 'none';
          onDone();
        });
      }, delay + 200);

      // Host-Knopfdruck sendet Signal an Gast
      if (this.ctx.isHost) {
        var origOnClick = null;
        setTimeout(function () {
          var b = document.getElementById('so-resolve-btn');
          var prev = b.onclick;
          b.onclick = function () {
            self.ctx.network.send('so_show_score', {});
            if (prev) prev();
          };
        }, delay + 250);
      }
    },

    // ─────────────────────────────────────────────────────────
    // Begriff AUSWÄHLEN
    // ─────────────────────────────────────────────────────────
    _selectTerm: function (idx) {
      if (this.phase !== 'answering' || this.dead) return;
      if (!this._isMyTurn()) return;
      this._selected = (this._selected === idx) ? null : idx;
      beep(480, 0.05, 'sine', 0.1);
      this._renderGame();
    },

    // ─────────────────────────────────────────────────────────
    // DREIECK GEKLICKT → Begriff platzieren
    // ─────────────────────────────────────────────────────────
    _placeAt: function (pos) {
      if (this.phase !== 'answering' || this.dead) return;
      if (!this._isMyTurn() || this._selected === null) return;
      if (!this.ctx.isHost) {
        this.ctx.network.send('so_client_move', { selIdx: this._selected, pos: pos });
        return;
      }
      this._handleMove(this._selected, pos);
    },

    // ─────────────────────────────────────────────────────────
    // ZUG VERARBEITEN (Host)
    // ─────────────────────────────────────────────────────────
    _handleMove: function (selIdx, pos) {
      if (this.phase !== 'answering' || this.dead) return;
      if (selIdx < 0 || selIdx >= this._queue.length) return;

      var item      = this._queue[selIdx];
      var newSorted = this._sortedList.slice(0, pos).concat([item]).concat(this._sortedList.slice(pos));
      var newQueue  = this._queue.filter(function (_, i) { return i !== selIdx; });

      var correct = newSorted.every(function (x, i) {
        return i === 0 || newSorted[i - 1].v <= x.v;
      });

      if (!correct) {
        var loser   = this._currentTurn;
        var winnerP = (loser === 'p1') ? 'p2' : 'p1';
        if (winnerP === 'p1') this.p1Wins++; else this.p2Wins++;
        this._clearTimers();
        var sol = this._fullSolution;
        var p1w = this.p1Wins, p2w = this.p2Wins;
        var self = this;
        this.ctx.network.send('so_wrong', { who: loser, p1Wins: p1w, p2Wins: p2w, solution: sol });
        this._flashResult(false, function () {
          self._showResolve(sol, function () {
            self._showResult('wrong', loser, p1w, p2w);
          });
        });
        return;
      }

      // Richtig
      this._sortedList  = newSorted;
      this._queue       = newQueue;
      this._selected    = null;
      this._currentTurn = (this._currentTurn === 'p1') ? 'p2' : 'p1';

      if (this._queue.length === 0) {
        var roundWinner = (this._currentTurn === 'p1') ? 'p2' : 'p1';
        if (roundWinner === 'p1') this.p1Wins++; else this.p2Wins++;
        this._clearTimers();
        var p1w2 = this.p1Wins, p2w2 = this.p2Wins, rw = roundWinner;
        var self2 = this;
        this.ctx.network.send('so_roundwin', { who: roundWinner, p1Wins: this.p1Wins, p2Wins: this.p2Wins });
        this._flashResult(true, function () {
          self2._showResult('win', rw, p1w2, p2w2);
        });
      } else {
        this.ctx.network.send('so_update', {
          sortedList: this._sortedList,
          queue:      this._queue,
          turn:       this._currentTurn,
        });
        var self3 = this;
        this._flashResult(true, function () {
          self3._renderGame();
          self3._resetTimer();
        });
      }
    },

    // ─────────────────────────────────────────────────────────
    // TIMEOUT
    // ─────────────────────────────────────────────────────────
    _handleTimeout: function () {
      if (this.phase === 'result' || this.dead || !this.ctx.isHost) return;
      var loser   = this._currentTurn;
      var winnerP = (loser === 'p1') ? 'p2' : 'p1';
      if (winnerP === 'p1') this.p1Wins++; else this.p2Wins++;
      this._clearTimers();
      var sol = this._fullSolution, p1w = this.p1Wins, p2w = this.p2Wins;
      var self = this;
      this.ctx.network.send('so_timeout_ev', { who: loser, p1Wins: p1w, p2Wins: p2w, solution: sol });
      this._flashResult(false, function () {
        self._showResolve(sol, function () {
          self._showResult('timeout', loser, p1w, p2w);
        });
      });
    },

    // ─────────────────────────────────────────────────────────
    // ERGEBNIS-OVERLAY
    // ─────────────────────────────────────────────────────────
    _showResult: function (type, who, p1w, p2w) {
      var self = this;
      this.phase = 'result';
      document.getElementById('so-game-area').style.display  = 'none';
      document.getElementById('so-turn-info').style.display  = 'none';
      document.getElementById('so-timer').style.display      = 'none';
      document.getElementById('so-resolve').style.display    = 'none';

      var loserName  = (who === 'p1') ? this.ctx.p1Name : this.ctx.p2Name;
      var winnerName = (who === 'p1') ? this.ctx.p2Name : this.ctx.p1Name;
      var ico, ttl, msg;

      if (type === 'win') {
        ico = '\uD83C\uDFC5'; ttl = winnerName + ' punktet!'; msg = 'Alle Begriffe korrekt sortiert!';
        beep(880, 0.15, 'sine', 0.2);
        setTimeout(function () { beep(1100, 0.2, 'sine', 0.18); }, 150);
      } else if (type === 'timeout') {
        ico = '\u23F0'; ttl = 'Zeit abgelaufen!';
        msg = loserName + ' war zu langsam \u2014 ' + winnerName + ' bekommt den Punkt!';
      } else {
        ico = '\u274C'; ttl = 'Falsch sortiert!';
        msg = loserName + ' hat falsch platziert \u2014 ' + winnerName + ' bekommt den Punkt!';
      }

      document.getElementById('so-ov-ico').textContent = ico;
      document.getElementById('so-ov-ttl').textContent = ttl;
      document.getElementById('so-ov-msg').textContent = msg;
      document.getElementById('so-ov-sc').innerHTML    = p1w + ' : ' + p2w + ' \u00a0\u00b7\u00a0 Ziel: 4 Punkte';
      this._drawDots();

      var gameOver = (p1w >= 4 || p2w >= 4);
      var btn      = document.getElementById('so-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMEN\u00dc' : 'N\u00c4CHSTE RUNDE';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function () {
          self.ctx.network.send('so_next', { gameOver: gameOver });
          if (gameOver) { self._finish(); }
          else {
            self.mini++;
            self._startMini();
            document.getElementById('so-ov').style.display = 'none';
          }
        };
      } else {
        btn.style.display = 'none';
      }

      document.getElementById('so-ov').style.display = 'flex';
    },

    // ─────────────────────────────────────────────────────────
    // HELFER
    // ─────────────────────────────────────────────────────────
    _isMyTurn: function () {
      return (this.ctx.isHost  && this._currentTurn === 'p1') ||
             (!this.ctx.isHost && this._currentTurn === 'p2');
    },

    _drawDots: function () {
      var el = document.getElementById('so-dots');
      if (!el) return;
      var d1 = '', d2 = '';
      var bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 3px;border:2px solid ';
      for (var i = 0; i < 4; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)')  + '"></span>';
      }
      el.innerHTML =
        d1 +
        '<span style="color:#c0c0d8;margin:0 12px;font-size:12px;font-family:\'Barlow Condensed\',sans-serif;letter-spacing:.2em;">RUNDE ' + this.mini + '</span>' +
        d2;
    },

    _setStatus: function (t, c, s) {
      var el = document.getElementById('so-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    _clearTimers: function () {
      clearTimeout(this._roundTimer);
      clearInterval(this._tickInterval);
    },

    _finish: function () {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= 4 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },

    destroy: function () {
      this.dead = true;
      this.timers.forEach(clearTimeout);
      this._clearTimers();
      ['so_start_countdown','so_sync_round','so_update','so_client_move',
       'so_wrong','so_timeout_ev','so_roundwin','so_next','so_show_score','so_ov_show']
        .forEach(function (ev) { this.ctx.network.off(ev); }, this);
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTRIEREN
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id:          'sortieren',
    name:        'Sortieren',
    description: '8 Begriffe in die richtige Reihenfolge bringen. Begriff wählen, dann Pfeil anklicken. Fehler gibt dem Gegner einen Punkt. Wer zuerst 4 Punkte hat, gewinnt!',
    init:    function (container, ctx, onEnd) { this._instance = new SortierenInstance(container, ctx, onEnd); },
    destroy: function () { if (this._instance) this._instance.destroy(); }
  });

})();
