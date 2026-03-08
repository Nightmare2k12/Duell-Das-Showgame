(function () {

  // ═══════════════════════════════════════════════════════════
  // KARTEN-PAARE (12 Paare = 24 Karten)
  // ═══════════════════════════════════════════════════════════
  var CARD_PAIRS = [
    { id: 'anker',      emoji: '⚓', label: 'Anker'      },
    { id: 'rakete',     emoji: '🚀', label: 'Rakete'     },
    { id: 'diamant',    emoji: '💎', label: 'Diamant'    },
    { id: 'blitz',      emoji: '⚡', label: 'Blitz'      },
    { id: 'flamme',     emoji: '🔥', label: 'Flamme'     },
    { id: 'krone',      emoji: '👑', label: 'Krone'      },
    { id: 'schaedel',   emoji: '💀', label: 'Schädel'    },
    { id: 'stern',      emoji: '⭐', label: 'Stern'      },
    { id: 'herz',       emoji: '❤️', label: 'Herz'       },
    { id: 'planet',     emoji: '🪐', label: 'Planet'     },
    { id: 'schluessel', emoji: '🗝️', label: 'Schlüssel'  },
    { id: 'wuerfel',    emoji: '🎲', label: 'Würfel'     },
  ];

  var REVEAL_TIME = 25; // Sekunden sichtbar

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
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ═══════════════════════════════════════════════════════════
  // INSTANZ
  // ═══════════════════════════════════════════════════════════
  function KartenGedaechtnis(container, ctx, onEnd) {
    this.container       = container;
    this.ctx             = ctx;
    this.onEnd           = onEnd;
    this.dead            = false;
    this.p1Score         = 0;
    this.p2Score         = 0;
    this.timers          = [];
    this._tick           = null;
    // phase: idle | reveal | coinflip | playing | eval | gameover
    this.phase           = 'idle';
    this.cards           = [];
    this.activePlayer    = null;   // 'p1' | 'p2'
    this.selectedCards   = [];     // bis zu 2 Indices, die aufgedeckt wurden
    this.calledCard      = null;   // { id, emoji, label } – gesuchtes Paar
    this.calledCardQueue = [];     // verbleibende Paare

    this._buildUI();
    this._setupNet();
  }

  KartenGedaechtnis.prototype = {

    // ══════════════════════════════════════════════════════════
    // UI AUFBAU
    // ══════════════════════════════════════════════════════════
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'km-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:flex-start;',
        'position:relative;overflow:hidden;padding:10px 14px 8px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        // Scoreboard
        '<div style="display:flex;align-items:center;gap:14px;margin-bottom:6px;min-height:24px;justify-content:center;">',
          '<div id="km-sc-p1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;letter-spacing:.18em;color:#3ab4f5;text-transform:uppercase;"></div>',
          '<div style="color:#505070;font-size:11px;">VS</div>',
          '<div id="km-sc-p2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;letter-spacing:.18em;color:#f55a3a;text-transform:uppercase;"></div>',
          '<div id="km-active-ind" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.12em;color:#c0c0d8;text-transform:uppercase;border-left:1px solid rgba(255,255,255,.12);padding-left:10px;min-width:80px;"></div>',
        '</div>',
        // Status-Zeile
        '<div id="km-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:17px;letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;min-height:24px;margin-bottom:5px;text-align:center;"></div>',
        // Reveal-Balken
        '<div id="km-revbar-wrap" style="display:none;width:100%;max-width:500px;height:5px;background:rgba(255,255,255,.07);border-radius:3px;margin-bottom:6px;overflow:hidden;">',
          '<div id="km-revbar" style="height:100%;width:100%;background:#f0c030;transition:width 1s linear;border-radius:3px;"></div>',
        '</div>',
        // Karten-Grid (4×6)
        '<div id="km-grid" style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;width:100%;max-width:500px;"></div>',
        // Gesuchtes Paar – Anzeige
        '<div id="km-target" style="display:none;align-items:center;gap:10px;margin-top:6px;padding:7px 18px;border:2px solid rgba(240,192,48,.3);background:rgba(240,192,48,.06);clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px));">',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.2em;color:#808090;text-transform:uppercase;">Gesucht:</div>',
          '<div id="km-target-emoji" style="font-size:26px;line-height:1;"></div>',
          '<div id="km-target-label" style="font-family:\'Bebas Neue\',sans-serif;font-size:20px;color:#f0c030;letter-spacing:.1em;"></div>',
        '</div>',
        // Start-Button (nur Host)
        '<button id="km-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-top:16px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 42px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">SPIEL STARTEN</button>',
        // Münzwurf-Overlay
        '<div id="km-coin-ov" style="position:absolute;inset:0;z-index:40;background:rgba(6,6,16,.96);display:none;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:28px;">',
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(20px,5vw,34px);color:#f0c030;letter-spacing:.06em;">MÜNZWURF</div>',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:.2em;color:#505070;text-transform:uppercase;">🔵 Blau = ' + this.ctx.p1Name + '  |  🔴 Rot = ' + this.ctx.p2Name + '</div>',
          '<div id="km-coin-emoji" style="font-size:66px;line-height:1.2;">🪙</div>',
          '<div id="km-coin-result" style="font-family:\'Barlow Condensed\',sans-serif;font-size:20px;color:#c0c0d8;letter-spacing:.18em;min-height:30px;"></div>',
        '</div>',
        // Spielende-Overlay
        '<div id="km-end-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:28px;">',
          '<div id="km-end-ico" style="font-size:52px;"></div>',
          '<div id="km-end-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(24px,6vw,48px);color:#f0c030;letter-spacing:.05em;"></div>',
          '<div id="km-end-sc"  style="font-family:\'Barlow Condensed\',sans-serif;font-size:16px;color:#c0c0d8;letter-spacing:.18em;"></div>',
          '<button id="km-end-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 42px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">ZUM HAUPTMENÜ</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);
      this._updateScore();

      if (this.ctx.isHost) {
        document.getElementById('km-start-btn').addEventListener('click', function() {
          this.style.display = 'none';
          self._initGame();
        });
      }
    },

    // ══════════════════════════════════════════════════════════
    // NETZWERK
    // Host = einzige Wahrheitsquelle.
    // Gast sendet Klick-Anfragen, Host prüft & spiegelt an beide.
    // ══════════════════════════════════════════════════════════
    _setupNet: function() {
      var self = this;

      // Host → Gast: Karten + Queue
      this.ctx.network.on('km_init', function(msg) {
        if (self.ctx.isHost) return;
        self.cards           = msg.cards;
        self.calledCardQueue = msg.queue;
        self._renderGrid();
        self._startReveal();
      });

      // Host → Gast: Reveal vorbei → Karten verdecken + Münzwurf
      this.ctx.network.on('km_reveal_end', function(msg) {
        if (self.ctx.isHost) return;
        self._hideAllCards();
        self.activePlayer = msg.winner;
        self._showCoinAnim(msg.winner);
      });

      // Host → BEIDE: Spielzustand zu Beginn jeder Runde
      this.ctx.network.on('km_turn_start', function(msg) {
        if (self.ctx.isHost) return;
        self.activePlayer  = msg.activePlayer;
        self.calledCard    = msg.calledCard;
        self.selectedCards = [];
        self.phase         = 'playing';
        self._updateActive();
        self._showTarget();
        self._setStatus(
          (msg.activePlayer === 'p1' ? self.ctx.p1Name : self.ctx.p2Name).toUpperCase() + ' – PAAR FINDEN!',
          msg.activePlayer === 'p1' ? '#3ab4f5' : '#f55a3a', '15px'
        );
      });

      // Gast → Host: Karte angeklickt
      this.ctx.network.on('km_flip_req', function(msg) {
        if (!self.ctx.isHost) return;
        self._processFlipRequest(msg.index);
      });

      // Host → BEIDE: Karte aufdecken (autoritativ)
      this.ctx.network.on('km_flip_sync', function(msg) {
        if (self.ctx.isHost) return;
        self._applyFlip(msg.index, msg.activePlayer);
      });

      // Host → BEIDE: Ergebnis nach 2 aufgedeckten Karten
      this.ctx.network.on('km_pair_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Score      = msg.p1Score;
        self.p2Score      = msg.p2Score;
        self.activePlayer = msg.nextActive;
        self.phase        = 'eval';
        self._updateScore();
        self._updateActive();
        if (msg.found) {
          self._applyFound(msg.indices, msg.foundBy);
        } else {
          self._applyFlipBack(msg.indices);
        }
        if (msg.gameOver) {
          self.timers.push(setTimeout(function() { self._showEnd(msg.winner); }, 1400));
        } else {
          self.timers.push(setTimeout(function() { self._startTurn(); }, 1500));
        }
      });

      // Host → Gast: Spielende
      this.ctx.network.on('km_gameover', function(msg) {
        if (self.ctx.isHost) return;
        self._showEnd(msg.winner);
      });

      // Host → Gast: Tiebreaker-Runde
      this.ctx.network.on('km_tiebreaker', function(msg) {
        if (self.ctx.isHost) return;
        self.cards           = msg.cards;
        self.calledCardQueue = msg.queue;
        self.activePlayer    = msg.starter;
        self._applyTiebreaker(msg.starter);
      });
    },

    // ══════════════════════════════════════════════════════════
    // SPIEL INITIALISIEREN (nur Host)
    // ══════════════════════════════════════════════════════════
    _initGame: function() {
      if (!this.ctx.isHost) return;
      var deck = [];
      CARD_PAIRS.forEach(function(p) {
        deck.push({ id: p.id, emoji: p.emoji, label: p.label });
        deck.push({ id: p.id, emoji: p.emoji, label: p.label });
      });
      this.cards = shuffle(deck).map(function(c, i) {
        return { id: c.id, emoji: c.emoji, label: c.label, found: false, flipped: true };
      });
      this.calledCardQueue = shuffle(CARD_PAIRS.map(function(p) {
        return { id: p.id, emoji: p.emoji, label: p.label };
      }));
      this.ctx.network.send('km_init', { cards: this.cards, queue: this.calledCardQueue });
      this._renderGrid();
      this._startReveal();
    },

    // ══════════════════════════════════════════════════════════
    // REVEAL-PHASE (3s Countdown, dann 25 Sekunden offen)
    // ══════════════════════════════════════════════════════════
    _startReveal: function() {
      var self = this;
      this.phase = 'countdown';

      // Karten während Countdown noch verdeckt lassen
      for (var i = 0; i < this.cards.length; i++) {
        this.cards[i].flipped = false;
        this._renderCardFace(i);
      }

      var n = 3;
      this._setStatus(String(n), '#aaaacc', '52px');
      beep(440, 0.07, 'sine', 0.18);

      clearInterval(this._tick);
      this._tick = setInterval(function() {
        if (self.dead) { clearInterval(self._tick); return; }
        n--;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '52px');
          beep(440, 0.07, 'sine', 0.18);
        } else {
          clearInterval(self._tick);
          // Countdown vorbei → Karten aufdecken und Reveal starten
          for (var i = 0; i < self.cards.length; i++) {
            self.cards[i].flipped = true;
            self._renderCardFace(i);
          }
          beep(660, 0.12, 'sine', 0.22);
          self._runRevealTimer();
        }
      }, 1000);
    },

    _runRevealTimer: function() {
      var self = this;
      this.phase = 'reveal';
      var revLeft = REVEAL_TIME;

      var bar  = document.getElementById('km-revbar');
      var wrap = document.getElementById('km-revbar-wrap');
      wrap.style.display = 'block';
      bar.style.width = '100%';
      bar.style.background = '#f0c030';
      this._setStatus('EINPRÄGEN! ' + revLeft + 's', '#f0c030', '17px');

      clearInterval(this._tick);
      this._tick = setInterval(function() {
        if (self.dead || self.phase !== 'reveal') { clearInterval(self._tick); return; }
        revLeft--;
        bar.style.width = ((revLeft / REVEAL_TIME) * 100) + '%';
        if (revLeft <= 5) bar.style.background = '#f55a3a';
        self._setStatus('EINPRÄGEN! ' + revLeft + 's', revLeft <= 5 ? '#f55a3a' : '#f0c030', '17px');
        if (revLeft <= 0) {
          clearInterval(self._tick);
          wrap.style.display = 'none';
          // Nur Host führt Münzwurf durch und synchronisiert
          if (self.ctx.isHost) {
            var winner = Math.random() < 0.5 ? 'p1' : 'p2';
            self.activePlayer = winner;
            self._hideAllCards();
            self.ctx.network.send('km_reveal_end', { winner: winner });
            self._showCoinAnim(winner);
          }
        }
      }, 1000);
    },

    // ══════════════════════════════════════════════════════════
    // MÜNZWURF ANIMATION (beide sehen dieselbe)
    // ══════════════════════════════════════════════════════════
    _showCoinAnim: function(winner) {
      var self = this;
      this.phase = 'coinflip';
      this.activePlayer = winner;

      var ov       = document.getElementById('km-coin-ov');
      var coinEl   = document.getElementById('km-coin-emoji');
      var resultEl = document.getElementById('km-coin-result');
      ov.style.display = 'flex';
      resultEl.textContent = '';
      coinEl.textContent = '🪙';

      var faces = ['🟡','🔵','🔴','🟡','🔵','🔴','🟡','🔵','🔴'];
      var fIdx = 0, flips = 0;
      var anim = setInterval(function() {
        coinEl.textContent = faces[fIdx++ % faces.length];
        if (++flips >= 14) {
          clearInterval(anim);
          coinEl.textContent = winner === 'p1' ? '🔵' : '🔴';
          var wName = winner === 'p1' ? self.ctx.p1Name : self.ctx.p2Name;
          var wCol  = winner === 'p1' ? '#3ab4f5' : '#f55a3a';
          resultEl.innerHTML =
            '<span style="color:' + wCol + ';font-family:\'Bebas Neue\',sans-serif;font-size:22px;">' +
            wName.toUpperCase() + ' FÄNGT AN!</span>';
          beep(660, 0.18, 'sine', 0.2);
          self.timers.push(setTimeout(function() {
            ov.style.display = 'none';
            self._startTurn();
          }, 2400));
        }
      }, 90);
    },

    // ══════════════════════════════════════════════════════════
    // ZUG STARTEN (Host + Gast)
    // ══════════════════════════════════════════════════════════
    _startTurn: function() {
      if (this.dead) return;
      this.phase         = 'playing';
      this.selectedCards = [];

      // Host wählt nächstes gesuchtes Paar und sendet Zug-Start
      if (this.ctx.isHost) {
        var allDone = this.cards.every(function(c) { return c.found; });
        if (allDone) { this._triggerGameOver(); return; }
        // Queue leer aber noch Karten übrig? Neu befüllen mit verbleibenden Paaren
        if (this.calledCardQueue.length === 0) {
          var remaining = [];
          var seen = {};
          for (var i = 0; i < this.cards.length; i++) {
            var c = this.cards[i];
            if (!c.found && !seen[c.id]) { seen[c.id] = true; remaining.push({ id: c.id, emoji: c.emoji, label: c.label }); }
          }
          this.calledCardQueue = shuffle(remaining);
        }
        this.calledCard = this.calledCardQueue.shift();
        this.ctx.network.send('km_turn_start', {
          activePlayer: this.activePlayer,
          calledCard:   this.calledCard
        });
      }

      var name = this.activePlayer === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
      var col  = this.activePlayer === 'p1' ? '#3ab4f5' : '#f55a3a';
      this._updateActive();
      this._showTarget();
      this._setStatus(name.toUpperCase() + ' – PAAR FINDEN!', col, '15px');
    },

    // ══════════════════════════════════════════════════════════
    // KARTEN-GRID
    // ══════════════════════════════════════════════════════════
    _renderGrid: function() {
      var self = this;
      var grid = document.getElementById('km-grid');
      grid.innerHTML = '';
      this.cards.forEach(function(card, idx) {
        var cell = document.createElement('div');
        cell.id = 'km-card-' + idx;
        cell.style.cssText = [
          'aspect-ratio:3/4;border-radius:4px;cursor:pointer;',
          'display:flex;flex-direction:column;align-items:center;justify-content:center;',
          'border:2px solid rgba(240,192,48,.22);background:rgba(240,192,48,.06);',
          'transition:background .15s,border-color .15s,transform .15s,box-shadow .15s,opacity .15s;',
          'overflow:hidden;font-family:"Bebas Neue",sans-serif;user-select:none;'
        ].join('');
        cell.addEventListener('click', function() { self._onCardClick(idx); });
        grid.appendChild(cell);
        self._renderCardFace(idx);
      });
    },

    // Karte rendern — NUR einzelne Properties setzen, kein cssText-Überschreiben
    _renderCardFace: function(idx) {
      var el = document.getElementById('km-card-' + idx);
      if (!el) return;
      var c = this.cards[idx];
      if (c.found) {
        el.style.background  = 'rgba(42,240,160,.05)';
        el.style.borderColor = 'rgba(42,240,160,.25)';
        el.style.opacity     = '0.4';
        el.style.boxShadow   = '';
        el.style.transform   = '';
        el.innerHTML = '<div style="font-size:clamp(13px,2.6vw,20px);">' + c.emoji + '</div>' +
                       '<div style="font-size:clamp(5px,1vw,8px);color:#2af0a0;letter-spacing:.05em;margin-top:2px;">' + c.label + '</div>';
      } else if (c.flipped) {
        el.style.background  = 'rgba(240,192,48,.07)';
        el.style.borderColor = 'rgba(240,192,48,.32)';
        el.style.opacity     = '1';
        el.style.boxShadow   = '';
        el.innerHTML = '<div style="font-size:clamp(13px,2.6vw,20px);">' + c.emoji + '</div>' +
                       '<div style="font-size:clamp(5px,1vw,8px);color:#f0c030;letter-spacing:.05em;margin-top:2px;">' + c.label + '</div>';
      } else {
        el.style.background  = 'rgba(12,12,35,.8)';
        el.style.borderColor = 'rgba(80,80,150,.2)';
        el.style.opacity     = '1';
        el.style.boxShadow   = '';
        el.style.transform   = '';
        el.innerHTML = '<div style="font-size:clamp(13px,2.6vw,20px);opacity:.18;">❓</div>';
      }
    },

    _hideAllCards: function() {
      for (var i = 0; i < this.cards.length; i++) {
        if (!this.cards[i].found) {
          this.cards[i].flipped = false;
          this._renderCardFace(i);
        }
      }
      document.getElementById('km-target').style.display = 'none';
      this._setStatus('Karten verdeckt!', '#c0c0d8', '15px');
      beep(280, 0.22, 'sine', 0.14);
    },

    _showTarget: function() {
      var el = document.getElementById('km-target');
      if (!el || !this.calledCard) return;
      el.style.display = 'flex';
      document.getElementById('km-target-emoji').textContent = this.calledCard.emoji;
      document.getElementById('km-target-label').textContent = this.calledCard.label.toUpperCase();
    },

    // ══════════════════════════════════════════════════════════
    // KARTE KLICKEN
    // Nur der aktive Spieler darf klicken (isHost = p1, Gast = p2)
    // ══════════════════════════════════════════════════════════
    _onCardClick: function(idx) {
      if (this.dead || this.phase !== 'playing') return;

      // Ist der klickende Spieler überhaupt dran?
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (me !== this.activePlayer) return;

      var c = this.cards[idx];
      if (c.found || c.flipped) return;
      if (this.selectedCards.length >= 2) return;
      if (this.selectedCards.indexOf(idx) !== -1) return;

      if (this.ctx.isHost) {
        this._processFlipRequest(idx);
      } else {
        // Gast schickt Anfrage, kein optimistisches Flip
        this.ctx.network.send('km_flip_req', { index: idx });
      }
    },

    // Host: Anfrage prüfen und an beide spiegeln
    _processFlipRequest: function(idx) {
      if (!this.ctx.isHost) return;
      var c = this.cards[idx];
      if (c.found || c.flipped) return;
      if (this.selectedCards.length >= 2) return;
      if (this.selectedCards.indexOf(idx) !== -1) return;

      this.ctx.network.send('km_flip_sync', { index: idx, activePlayer: this.activePlayer });
      this._applyFlip(idx, this.activePlayer);
    },

    // Flip auf beiden Seiten ausführen
    _applyFlip: function(idx, activePlayer) {
      if (this.selectedCards.indexOf(idx) !== -1) return;
      var card = this.cards[idx];
      if (card.found || card.flipped) return;

      card.flipped = true;
      this.selectedCards.push(idx);
      this._renderCardFace(idx);
      beep(400 + idx * 11, 0.07, 'sine', 0.1);

      // Farblicher Rahmen zeigt aktiven Spieler
      var col = (activePlayer || this.activePlayer) === 'p1' ? '#3ab4f5' : '#f55a3a';
      var el  = document.getElementById('km-card-' + idx);
      if (el) { el.style.borderColor = col; el.style.boxShadow = '0 0 10px ' + col + '44'; }

      // Nach 2 aufgedeckten Karten: Host wertet aus
      if (this.selectedCards.length === 2 && this.ctx.isHost) {
        this.phase = 'eval'; // Weitere Klicks sperren während Auswertung
        var self = this;
        self.timers.push(setTimeout(function() { self._evalPair(); }, 750));
      }
    },

    // ══════════════════════════════════════════════════════════
    // PAAR AUSWERTEN (nur Host)
    // ══════════════════════════════════════════════════════════
    _evalPair: function() {
      if (!this.ctx.isHost) return;
      var i1 = this.selectedCards[0], i2 = this.selectedCards[1];
      var c1 = this.cards[i1], c2 = this.cards[i2];
      // Richtig = beide Karten haben die gesuchte ID UND sind ein Paar
      var found    = (c1.id === c2.id) && (c1.id === this.calledCard.id);
      var foundBy  = this.activePlayer;
      var gameOver = false, winner = null;

      if (found) {
        this.cards[i1].found = this.cards[i2].found = true;
        if (this.activePlayer === 'p1') this.p1Score++; else this.p2Score++;
        // Zug behalten → activePlayer bleibt
        var allDone = this.cards.every(function(c) { return c.found; });
        if (allDone) {
          if (this.p1Score !== this.p2Score) {
            // Klarer Sieger
            gameOver = true;
            winner = this.p1Score > this.p2Score ? 'p1' : 'p2';
          } else {
            // Unentschieden → Tiebreaker: alle Karten neu aufdecken und eine Extra-Runde
            gameOver = false;
            winner = null;
            this._startTiebreaker();
          }
        }
      } else {
        // Falsch → Spieler wechseln
        this.activePlayer = this.activePlayer === 'p1' ? 'p2' : 'p1';
      }

      var msg = {
        found:      found,
        indices:    [i1, i2],
        foundBy:    foundBy,
        nextActive: this.activePlayer,
        p1Score:    this.p1Score,
        p2Score:    this.p2Score,
        gameOver:   gameOver,
        winner:     winner
      };
      this.ctx.network.send('km_pair_result', msg);

      // Lokal anwenden
      this.phase = 'eval';
      this._updateScore();
      this._updateActive();
      if (found) {
        this._applyFound([i1, i2], foundBy);
      } else {
        this._applyFlipBack([i1, i2]);
      }
      if (gameOver) {
        var self = this;
        self.timers.push(setTimeout(function() { self._showEnd(winner); }, 1400));
      } else {
        var self2 = this;
        self2.timers.push(setTimeout(function() { self2._startTurn(); }, 1500));
      }
    },

    _applyFound: function(indices, player) {
      var self = this;
      document.getElementById('km-target').style.display = 'none';
      indices.forEach(function(idx) {
        self.cards[idx].found = self.cards[idx].flipped = true;
        self._renderCardFace(idx);
        var el = document.getElementById('km-card-' + idx);
        if (el) {
          el.style.boxShadow = '0 0 20px rgba(42,240,160,.55)';
          el.style.transform = 'scale(1.06)';
          setTimeout(function() { if (el) { el.style.transform = ''; el.style.boxShadow = ''; } }, 650);
        }
      });
      beep(880, 0.2, 'sine', 0.2);
      var name = player === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
      var col  = player === 'p1' ? '#3ab4f5' : '#f55a3a';
      this._setStatus('✓ ' + name.toUpperCase() + ' – PAAR GEFUNDEN! WEITER!', col, '14px');
    },

    _applyFlipBack: function(indices) {
      var self = this;
      // Karten kurz rot markieren
      indices.forEach(function(idx) {
        var el = document.getElementById('km-card-' + idx);
        if (el) { el.style.borderColor = '#f55a3a'; el.style.boxShadow = '0 0 12px rgba(245,90,58,.45)'; }
      });
      beep(180, 0.3, 'sawtooth', 0.12);
      var next = this.activePlayer === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
      var col  = this.activePlayer === 'p1' ? '#3ab4f5' : '#f55a3a';
      this._setStatus('✗ FALSCH – ' + next.toUpperCase() + ' IST DRAN', '#f55a3a', '14px');
      // Nach kurzer Pause verdecken
      self.timers.push(setTimeout(function() {
        indices.forEach(function(idx) {
          self.cards[idx].flipped = false;
          self._renderCardFace(idx);
        });
      }, 900));
    },

    // ══════════════════════════════════════════════════════════
    // HILFSFUNKTIONEN
    // ══════════════════════════════════════════════════════════
    _updateScore: function() {
      var e1 = document.getElementById('km-sc-p1');
      var e2 = document.getElementById('km-sc-p2');
      if (e1) e1.textContent = this.ctx.p1Name + ': ' + this.p1Score;
      if (e2) e2.textContent = this.ctx.p2Name + ': ' + this.p2Score;
    },

    _updateActive: function() {
      var el = document.getElementById('km-active-ind');
      if (!el) return;
      if (!this.activePlayer) { el.innerHTML = ''; return; }
      var name = this.activePlayer === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
      var col  = this.activePlayer === 'p1' ? '#3ab4f5' : '#f55a3a';
      el.innerHTML = '▶ <span style="color:' + col + ';">' + name + '</span>';
    },

    _setStatus: function(t, c, s) {
      var el = document.getElementById('km-status');
      if (el) { el.textContent = t; el.style.color = c || '#c0c0d8'; el.style.fontSize = s || '15px'; }
    },

    // ══════════════════════════════════════════════════════════
    // SPIELENDE
    // ══════════════════════════════════════════════════════════
    _triggerGameOver: function() {
      // Wird nur aufgerufen wenn allDone=true nach _startTurn (sollte nicht passieren,
      // da _evalPair das übernimmt), aber als Fallback:
      var winner = this.p1Score > this.p2Score ? 'p1' : (this.p2Score > this.p1Score ? 'p2' : 'draw');
      if (this.ctx.isHost) this.ctx.network.send('km_gameover', { winner: winner });
      this._showEnd(winner);
    },

    // Tiebreaker: alle Karten zurücksetzen, neue Runde starten
    _startTiebreaker: function() {
      if (!this.ctx.isHost) return;
      // Karten zurücksetzen
      for (var i = 0; i < this.cards.length; i++) {
        this.cards[i].found   = false;
        this.cards[i].flipped = false;
      }
      // Queue neu befüllen
      this.calledCardQueue = shuffle(CARD_PAIRS.map(function(p) {
        return { id: p.id, emoji: p.emoji, label: p.label };
      }));
      // Münzwurf für Tiebreaker-Starter
      var tbWinner = Math.random() < 0.5 ? 'p1' : 'p2';
      this.activePlayer = tbWinner;
      this.ctx.network.send('km_tiebreaker', {
        cards:       this.cards,
        queue:       this.calledCardQueue,
        starter:     tbWinner
      });
      this._applyTiebreaker(tbWinner);
    },

    _applyTiebreaker: function(starter) {
      var self = this;
      this.phase        = 'tiebreaker';
      this.activePlayer = starter;
      // Alle Karten kurz offen zeigen (5 Sekunden), dann verdecken und neu starten
      for (var i = 0; i < this.cards.length; i++) {
        this.cards[i].flipped = true;
        this._renderCardFace(i);
      }
      var tbLeft = 5;
      var bar  = document.getElementById('km-revbar');
      var wrap = document.getElementById('km-revbar-wrap');
      document.getElementById('km-target').style.display = 'none';
      wrap.style.display = 'block';
      bar.style.width = '100%';
      bar.style.background = '#f55a3a';
      this._setStatus('UNENTSCHIEDEN! NOCH EINMAL MERKEN! ' + tbLeft + 's', '#f55a3a', '13px');
      beep(440, 0.15, 'sine', 0.2);
      clearInterval(this._tick);
      this._tick = setInterval(function() {
        if (self.dead) { clearInterval(self._tick); return; }
        tbLeft--;
        bar.style.width = ((tbLeft / 5) * 100) + '%';
        self._setStatus('UNENTSCHIEDEN! NOCH EINMAL MERKEN! ' + tbLeft + 's', '#f55a3a', '13px');
        if (tbLeft <= 0) {
          clearInterval(self._tick);
          wrap.style.display = 'none';
          self._hideAllCards();
          // Kurze Pause, dann Münzwurf-Anim und Zug starten
          self.timers.push(setTimeout(function() {
            self._showCoinAnim(starter);
          }, 600));
        }
      }, 1000);
    },

    _showEnd: function(winner) {
      if (this.dead) return;
      this.phase = 'gameover';
      var self = this;
      var ov = document.getElementById('km-end-ov');
      if (winner === 'draw') {
        document.getElementById('km-end-ico').textContent = '🤝';
        document.getElementById('km-end-ttl').textContent = 'UNENTSCHIEDEN!';
        document.getElementById('km-end-ttl').style.color = '#f0c030';
      } else {
        var wName = winner === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
        var wCol  = winner === 'p1' ? '#3ab4f5' : '#f55a3a';
        document.getElementById('km-end-ico').textContent = '🏆';
        document.getElementById('km-end-ttl').textContent = wName + ' GEWINNT!';
        document.getElementById('km-end-ttl').style.color = wCol;
      }
      document.getElementById('km-end-sc').textContent =
        this.ctx.p1Name + ': ' + this.p1Score + ' Paare  |  ' +
        this.ctx.p2Name + ': ' + this.p2Score + ' Paare';
      ov.style.display = 'flex';
      beep(880, 0.5, 'sine', 0.22);

      var endResult = { winner: winner || 'draw', details: self.ctx.p1Name + ': ' + self.p1Score + ' Paare | ' + self.ctx.p2Name + ': ' + self.p2Score + ' Paare' };

      var btn = document.getElementById('km-end-btn');
      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.textContent = 'WEITER';
        btn.onclick = function() {
          self.dead = true;
          self.onEnd(endResult);
        };
      } else {
        // Guest: nach kurzer Anzeige automatisch onEnd aufrufen,
        // damit der Hauptcontroller den Ergebnis-Screen zeigt
        btn.style.display = 'none';
        self.timers.push(setTimeout(function() {
          if (!self.dead) {
            self.dead = true;
            self.onEnd(endResult);
          }
        }, 2500));
      }
    },

    // ══════════════════════════════════════════════════════════
    // AUFRÄUMEN
    // ══════════════════════════════════════════════════════════
    destroy: function() {
      this.dead = true;
      clearInterval(this._tick);
      this.timers.forEach(clearTimeout);
      var evts = ['km_init','km_reveal_end','km_turn_start','km_flip_req',
                  'km_flip_sync','km_pair_result','km_gameover','km_tiebreaker'];
      var self = this;
      evts.forEach(function(e) { self.ctx.network.off(e); });
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTRIERUNG
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id:          'karten-gedaechtnis',
    name:        'Das Karten-Gedächtnis',
    description: '12 Paare, 25 Sekunden einprägen – dann verdeckt! Münzwurf entscheidet, wer beginnt. Richtiges Paar gefunden = weitermachen. Falsch = Gegner dran!',
    init:    function(container, ctx, onEnd) { this._instance = new KartenGedaechtnis(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
