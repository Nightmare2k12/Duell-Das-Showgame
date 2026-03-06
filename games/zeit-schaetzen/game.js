(function () {

  // ═══════════════════════════════════════════════════════════
  // ZEIT SCHÄTZEN
  // Host generiert Zielzeit (5–77s), beide Spieler stoppen
  // mit ihrem Buzzer. Wer näher dran ist gewinnt die Runde.
  // Erster mit 5 Mini-Siegen gewinnt das Spiel.
  // ═══════════════════════════════════════════════════════════

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, function(c) {
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];
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

  function fanfare() {
    [[523,0],[659,150],[784,300],[1047,450]].forEach(function(p) {
      setTimeout(function() { beep(p[0], 0.18, 'sine', 0.2); }, p[1]);
    });
  }

  // ═══════════════════════════════════════════════════════════
  // HAUPTKLASSE
  // ═══════════════════════════════════════════════════════════
  function ZeitSchaetzenInstance(container, ctx, onEnd) {
    this.container = container;
    this.ctx       = ctx;
    this.onEnd     = onEnd;
    this.dead      = false;

    this.target    = 0;
    this.startMs   = 0;
    this.phase     = 'idle';
    this.p1Time    = null;
    this.p2Time    = null;
    this.p1Wins    = 0;
    this.p2Wins    = 0;
    this.mini      = 1;
    this.timers    = [];

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  ZeitSchaetzenInstance.prototype = {

    // ─── UI AUFBAUEN ────────────────────────────────────────
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';

      var root = document.createElement('div');
      root.id = 'zs-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:center;',
        'position:relative;overflow:hidden;padding:16px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        // Deko-Ring
        '<div style="position:absolute;pointer-events:none;width:520px;height:520px;border-radius:50%;',
        'top:50%;left:50%;transform:translate(-50%,-50%);',
        'border:1px solid rgba(240,192,48,.05);"></div>',

        // Punkte-Dots oben
        '<div id="zs-dots" style="display:flex;align-items:center;gap:20px;margin-bottom:20px;min-height:30px;"></div>',

        // Zielzeit-Anzeige
        '<div style="text-align:center;margin-bottom:4px;">',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;',
          'color:#c0c0d8;text-transform:uppercase;margin-bottom:4px;">Zielzeit</div>',
          '<div id="zs-target" style="font-size:clamp(70px,13vw,108px);line-height:1;',
          'color:#f0c030;text-shadow:0 0 50px rgba(240,192,48,.3);letter-spacing:.04em;">—</div>',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;',
          'letter-spacing:.3em;color:#c0c0d8;text-transform:uppercase;margin-top:2px;">Sekunden</div>',
        '</div>',

        // Status
        '<div id="zs-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:24px;',
        'letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;',
        'min-height:34px;margin:14px 0 18px;text-align:center;transition:color .2s;"></div>',

        // Start-Button (nur Host)
        '<button id="zs-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';',
        'margin-bottom:20px;background:#f0c030;border:none;color:#000;',
        'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;',
        'padding:12px 40px;cursor:pointer;',
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));',
        '">RUNDE STARTEN</button>',

        // Buzzer-Bereich
        '<div style="display:flex;align-items:flex-start;gap:clamp(20px,5vw,70px);">',

          // P1
          '<div style="display:flex;flex-direction:column;align-items:center;gap:10px;">',
            '<div id="zs-n1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;',
            'letter-spacing:.3em;color:#3ab4f5;text-transform:uppercase;"></div>',
            '<button id="zs-b1" style="width:clamp(100px,15vw,155px);height:clamp(100px,15vw,155px);',
            'border-radius:50%;background:radial-gradient(circle at 36% 30%,#65d5ff,#0b5a9e);',
            'border:4px solid #3ab4f5;color:#fff;font-family:\'Bebas Neue\',sans-serif;',
            'font-size:19px;letter-spacing:.2em;cursor:pointer;outline:none;',
            'box-shadow:0 6px 28px rgba(58,180,245,.22),inset 0 2px 0 rgba(255,255,255,.12);',
            'transition:transform .08s,opacity .2s;user-select:none;">BUZZ</button>',
            '<div id="zs-t1" style="font-family:\'Bebas Neue\',sans-serif;font-size:32px;',
            'letter-spacing:.1em;color:#3ab4f5;min-height:40px;text-align:center;">—</div>',
            '<div id="zs-w1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;',
            'letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;">0 Siege</div>',
          '</div>',

          // VS
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:28px;',
          'color:rgba(255,255,255,.05);padding-top:50px;">VS</div>',

          // P2
          '<div style="display:flex;flex-direction:column;align-items:center;gap:10px;">',
            '<div id="zs-n2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;',
            'letter-spacing:.3em;color:#f55a3a;text-transform:uppercase;"></div>',
            '<button id="zs-b2" style="width:clamp(100px,15vw,155px);height:clamp(100px,15vw,155px);',
            'border-radius:50%;background:radial-gradient(circle at 36% 30%,#ff7a58,#a81508);',
            'border:4px solid #f55a3a;color:#fff;font-family:\'Bebas Neue\',sans-serif;',
            'font-size:19px;letter-spacing:.2em;cursor:pointer;outline:none;',
            'box-shadow:0 6px 28px rgba(245,90,58,.22),inset 0 2px 0 rgba(255,255,255,.12);',
            'transition:transform .08s,opacity .2s;user-select:none;">BUZZ</button>',
            '<div id="zs-t2" style="font-family:\'Bebas Neue\',sans-serif;font-size:32px;',
            'letter-spacing:.1em;color:#f55a3a;min-height:40px;text-align:center;">—</div>',
            '<div id="zs-w2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;',
            'letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;">0 Siege</div>',
          '</div>',

        '</div>',

        // Ergebnis-Overlay
        '<div id="zs-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);',
        'display:none;flex-direction:column;align-items:center;justify-content:center;',
        'gap:13px;text-align:center;padding:24px;">',
          '<div id="zs-ov-ico" style="font-size:52px;line-height:1;"></div>',
          '<div id="zs-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(30px,7vw,58px);',
          'letter-spacing:.1em;color:#f0c030;"></div>',
          '<div id="zs-ov-det" style="font-family:\'Barlow Condensed\',sans-serif;font-size:17px;',
          'letter-spacing:.07em;color:#a0a0bc;line-height:2;text-transform:uppercase;"></div>',
          '<div id="zs-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;',
          'letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;"></div>',
          '<button id="zs-ov-btn" style="margin-top:10px;background:#f0c030;border:none;color:#000;',
          'font-family:\'Bebas Neue\',sans-serif;font-size:21px;letter-spacing:.18em;',
          'padding:13px 42px;cursor:pointer;',
          'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));',
          '">WEITER →</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);

      // Namen setzen
      document.getElementById('zs-n1').textContent = this.ctx.p1Name;
      document.getElementById('zs-n2').textContent = this.ctx.p2Name;

      // Start-Button: nur Host
      if (this.ctx.isHost) {
        var startBtn = document.getElementById('zs-start-btn');
        startBtn.addEventListener('click', function() {
          startBtn.style.display = 'none';
          self.ctx.network.send('zs_start_countdown', {});
          self._countdown();
        });
      }

      // Buzzer: P1 = Host, P2 = Gast
      document.getElementById('zs-b1').addEventListener('pointerdown', function(e) {
        e.preventDefault();
        if (self.ctx.isHost) {
          self._animateBuzz('zs-b1', '#3ab4f5');
          self._localBuzz();
        }
      });
      document.getElementById('zs-b2').addEventListener('pointerdown', function(e) {
        e.preventDefault();
        if (!self.ctx.isHost) {
          self._animateBuzz('zs-b2', '#f55a3a');
          self._localBuzz();
        }
      });

      this._setBuzzer('p1', 'off');
      this._setBuzzer('p2', 'off');
      this._drawDots();
    },

    // ─── NETZWERK ───────────────────────────────────────────
    _setupNet: function() {
      var self = this;

      // Gast: Countdown starten
      this.ctx.network.on('zs_start_countdown', function() {
        if (self.ctx.isHost) return;
        self._countdown();
      });

      // Gast: Zielzeit empfangen
      this.ctx.network.on('zs_setup', function(msg) {
        if (self.ctx.isHost) return;
        self.target = msg.target;
        self.mini   = msg.mini;
        var el = document.getElementById('zs-target');
        if (el) el.textContent = self.target + ' s';
        self._setStatus('Bereit machen…', '#c0c0d8');
        self._drawDots();
      });

      // Buzz des Gegners
      this.ctx.network.on('zs_buzz', function(msg) {
        if (self.dead) return;
        var me = self.ctx.isHost ? 'p1' : 'p2';
        if (msg.player !== me) self._registerBuzz(msg.player, msg.time);
      });

      // Gast: Auswertung empfangen
      this.ctx.network.on('zs_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins;
        self.p2Wins = msg.p2Wins;
        if (self.p1Time === null) self.p1Time = msg.p1Time;
        if (self.p2Time === null) self.p2Time = msg.p2Time;
        self._showResult(msg.winner, msg.d1, msg.d2);
      });

      // Gast: nächste Runde
      this.ctx.network.on('zs_nextround', function() {
        if (self.ctx.isHost) return;
        var ov = document.getElementById('zs-ov');
        if (ov) ov.style.display = 'none';
        if (self.p1Wins >= 5 || self.p2Wins >= 5) {
          self._finish();
        } else {
          self.mini++;
          self._startMini();
        }
      });
    },

    // ─── MINI-RUNDE STARTEN ─────────────────────────────────
    _startMini: function() {
      if (this.dead) return;
      this.p1Time = null;
      this.p2Time = null;
      this.phase  = 'idle';

      var t1 = document.getElementById('zs-t1');
      var t2 = document.getElementById('zs-t2');
      if (t1) t1.textContent = '—';
      if (t2) t2.textContent = '—';
      var tgt = document.getElementById('zs-target');
      if (tgt) tgt.textContent = '—';
      var ov = document.getElementById('zs-ov');
      if (ov) ov.style.display = 'none';

      this._setBuzzer('p1', 'off');
      this._setBuzzer('p2', 'off');
      this._setStatus('Bereit?', '#c0c0d8');
      this._drawDots();

      if (this.ctx.isHost) {
        // Zielzeit 5–77 Sekunden
        this.target = Math.floor(5 + Math.random() * 73);
        var el = document.getElementById('zs-target');
        if (el) el.textContent = this.target + ' s';
        this._setStatus('Bereit machen…', '#c0c0d8');
        this.ctx.network.send('zs_setup', { target: this.target, mini: this.mini });
        var startBtn = document.getElementById('zs-start-btn');
        if (startBtn) startBtn.style.display = 'block';
      }
    },

    // ─── COUNTDOWN ──────────────────────────────────────────
    _countdown: function() {
      if (this.dead) return;
      var self = this;
      this.phase = 'countdown';
      var n = 3;

      var startBtn = document.getElementById('zs-start-btn');
      if (startBtn) startBtn.style.display = 'none';

      var tick = function() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('JETZT!', '#2af0a0', '32px');
          beep(880, 0.28, 'sine', 0.22);
          self._go();
        }
      };

      // 800ms Versatz damit Host & Gast synchron laufen
      self.timers.push(setTimeout(tick, 800));
    },

    // ─── GO! ────────────────────────────────────────────────
    _go: function() {
      if (this.dead) return;
      var self = this;
      this.phase   = 'running';
      this.startMs = performance.now();

      this._setBuzzer('p1', 'active');
      this._setBuzzer('p2', 'active');

      // Animierter Punkt-Status
      var dots = 1;
      var iv = setInterval(function() {
        if (self.dead || self.phase !== 'running') { clearInterval(iv); return; }
        var el = document.getElementById('zs-status');
        if (el) {
          el.textContent    = ['●', '● ●', '● ● ●'][dots - 1];
          el.style.color    = 'rgba(42,240,160,.35)';
          el.style.fontSize = '20px';
        }
        dots = dots >= 3 ? 1 : dots + 1;
      }, 550);
      this.timers.push(iv);

      // Sicherheits-Timeout
      var safety = setTimeout(function() {
        if (self.dead || self.phase !== 'running') return;
        if (self.p1Time === null) self._registerBuzz('p1', 120.0);
        if (self.p2Time === null) self._registerBuzz('p2', 120.0);
      }, 120000);
      this.timers.push(safety);
    },

    // ─── LOKALER BUZZ ───────────────────────────────────────
    _localBuzz: function() {
      if (this.phase !== 'running' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (me === 'p1' && this.p1Time !== null) return;
      if (me === 'p2' && this.p2Time !== null) return;

      var elapsed = Math.round((performance.now() - this.startMs) / 10) / 100;
      this._registerBuzz(me, elapsed);
      this.ctx.network.send('zs_buzz', { player: me, time: elapsed });
    },

    // ─── BUZZ EINTRAGEN ─────────────────────────────────────
    _registerBuzz: function(player, time) {
      if (player === 'p1' && this.p1Time !== null) return;
      if (player === 'p2' && this.p2Time !== null) return;
      if (this.dead) return;

      if (player === 'p1') this.p1Time = time;
      else                 this.p2Time = time;

      this._setBuzzer(player, 'buzzed');
      // Zeit erst anzeigen wenn beide gebuzzert haben
      beep(player === 'p1' ? 660 : 440, 0.05, 'square', 0.14);

      if (this.p1Time !== null && this.p2Time !== null) {
        this.phase = 'done';
        // Jetzt erst beide Zeiten aufdecken
        var t1el = document.getElementById('zs-t1');
        var t2el = document.getElementById('zs-t2');
        if (t1el) t1el.textContent = this.p1Time.toFixed(2) + ' s';
        if (t2el) t2el.textContent = this.p2Time.toFixed(2) + ' s';
        this._setStatus('Auswertung…', '#f0c030', '24px');
        if (this.ctx.isHost) {
          var self = this;
          setTimeout(function() { self._evaluate(); }, 700);
        }
      }
    },

    // ─── AUSWERTUNG (nur Host) ──────────────────────────────
    _evaluate: function() {
      if (this.dead) return;
      var d1 = Math.abs(this.p1Time - this.target);
      var d2 = Math.abs(this.p2Time - this.target);
      var winner;
      if      (d1 < d2) { winner = 'p1'; this.p1Wins++; }
      else if (d2 < d1) { winner = 'p2'; this.p2Wins++; }
      else              { winner = 'draw'; }

      this.ctx.network.send('zs_result', {
        winner: winner,
        p1Time: this.p1Time,
        p2Time: this.p2Time,
        p1Wins: this.p1Wins,
        p2Wins: this.p2Wins,
        d1: d1,
        d2: d2
      });
      this._showResult(winner, d1, d2);
    },

    // ─── ERGEBNIS ANZEIGEN ──────────────────────────────────
    _showResult: function(winner, d1, d2) {
      if (this.dead) return;
      var self = this;
      this._drawDots();

      var wName = winner === 'p1' ? this.ctx.p1Name
                : winner === 'p2' ? this.ctx.p2Name : null;

      var ico = document.getElementById('zs-ov-ico');
      var ttl = document.getElementById('zs-ov-ttl');
      var det = document.getElementById('zs-ov-det');
      var sc  = document.getElementById('zs-ov-sc');
      var btn = document.getElementById('zs-ov-btn');
      var ov  = document.getElementById('zs-ov');

      if (ico) ico.textContent = winner === 'draw' ? '🤝' : '🏅';
      if (ttl) {
        ttl.textContent = winner === 'draw' ? 'UNENTSCHIEDEN' : esc(wName) + ' GEWINNT!';
        ttl.style.color = winner === 'p1' ? '#3ab4f5'
                        : winner === 'p2' ? '#f55a3a' : '#f0c030';
      }
      if (det) det.innerHTML =
        'Zielzeit: <span style="color:#f0c030;font-size:1.1em">' + this.target + ' s</span><br>' +
        '<span style="color:#3ab4f5">' + esc(this.ctx.p1Name) + '</span>' +
        '  ' + this.p1Time.toFixed(2) + ' s' +
        ' <span style="color:#a0a0bc">(±' + d1.toFixed(2) + ' s)</span><br>' +
        '<span style="color:#f55a3a">' + esc(this.ctx.p2Name) + '</span>' +
        '  ' + this.p2Time.toFixed(2) + ' s' +
        ' <span style="color:#a0a0bc">(±' + d2.toFixed(2) + ' s)</span>';
      if (sc) sc.textContent =
        'Mini-Siege — ' + esc(this.ctx.p1Name) + ' ' + this.p1Wins +
        ' : ' + this.p2Wins + ' ' + esc(this.ctx.p2Name);

      if (winner !== 'draw') fanfare();
      else beep(440, 0.2, 'sine', 0.14);

      var gameOver = this.p1Wins >= 5 || this.p2Wins >= 5;

      if (btn) {
        btn.textContent = gameOver ? 'SPIEL BEENDEN →' : 'NÄCHSTE RUNDE →';
        btn.onclick = null;
        if (this.ctx.isHost) {
          btn.style.display = 'block';
          btn.addEventListener('click', function handler() {
            btn.removeEventListener('click', handler);
            if (self.dead) return;
            if (ov) ov.style.display = 'none';
            self.ctx.network.send('zs_nextround', {});
            if (gameOver) {
              self._finish();
            } else {
              self.mini++;
              self._startMini();
            }
          });
        } else {
          btn.style.display = 'none';
        }
      }

      if (ov) ov.style.display = 'flex';
    },

    // ─── SPIELENDE ──────────────────────────────────────────
    _finish: function() {
      this.dead = true;
      var winner = this.p1Wins > this.p2Wins ? 'p1' : 'p2';
      this.onEnd({
        winner: winner,
        details:
          '<span style="color:#3ab4f5">' + esc(this.ctx.p1Name) + '</span>: <strong>' +
          this.p1Wins + '</strong> Mini-Siege<br>' +
          '<span style="color:#f55a3a">' + esc(this.ctx.p2Name) + '</span>: <strong>' +
          this.p2Wins + '</strong> Mini-Siege'
      });
    },

    // ─── BUZZER-ANIMATION ──────────────────────────────────
    _animateBuzz: function(btnId, color) {
      var btn = document.getElementById(btnId);
      if (!btn) return;
      // Kurzes Eindrücken
      btn.style.transform = 'scale(0.88)';
      btn.style.boxShadow = '0 0 0 0 ' + color;
      // Welle nach außen
      var root = document.getElementById('zs-root');
      if (root) {
        var wave = document.createElement('div');
        wave.style.cssText = [
          'position:absolute;border-radius:50%;pointer-events:none;',
          'border:3px solid ' + color + ';',
          'width:' + btn.offsetWidth + 'px;',
          'height:' + btn.offsetHeight + 'px;',
          'top:' + (btn.offsetTop + btn.offsetParent.offsetTop) + 'px;',
          'left:' + (btn.offsetLeft + btn.offsetParent.offsetLeft) + 'px;',
          'opacity:0.8;',
          'transition:transform .5s ease-out,opacity .5s ease-out;',
          'transform:scale(1);',
          'z-index:20;'
        ].join('');
        root.appendChild(wave);
        requestAnimationFrame(function() {
          requestAnimationFrame(function() {
            wave.style.transform = 'scale(2.4)';
            wave.style.opacity   = '0';
          });
        });
        setTimeout(function() { if (wave.parentNode) wave.parentNode.removeChild(wave); }, 600);
      }
      // Button zurückfedern
      setTimeout(function() {
        if (btn) btn.style.transform = 'scale(0.9)';
      }, 120);
    },

    // ─── BUZZER-STATUS ──────────────────────────────────────
    _setBuzzer: function(player, state) {
      var btn = document.getElementById(player === 'p1' ? 'zs-b1' : 'zs-b2');
      if (!btn) return;
      if (state === 'active') {
        btn.style.opacity = '1'; btn.style.cursor = 'pointer';
        btn.style.transform = 'scale(1)'; btn.style.filter = 'none';
      } else if (state === 'buzzed') {
        btn.style.opacity = '0.45'; btn.style.cursor = 'default';
        btn.style.transform = 'scale(0.9)'; btn.style.filter = 'none';
      } else {
        btn.style.opacity = '0.3'; btn.style.cursor = 'default';
        btn.style.transform = 'scale(1)'; btn.style.filter = 'grayscale(50%)';
      }
    },

    // ─── PUNKTE-DOTS ────────────────────────────────────────
    _drawDots: function() {
      var el = document.getElementById('zs-dots');
      if (!el) return;
      var bs = 'display:inline-block;width:12px;height:12px;border-radius:50%;margin:0 2px;';
      var d1 = '', d2 = '';
      for (var i = 0; i < 5; i++) {
        d1 += '<span style="' + bs + 'background:' + (i < this.p1Wins ? '#3ab4f5' : 'transparent') + ';' +
          'border:2px solid ' + (i < this.p1Wins ? '#3ab4f5' : 'rgba(58,180,245,.2)') + ';"></span>';
        d2 += '<span style="' + bs + 'background:' + (i < this.p2Wins ? '#f55a3a' : 'transparent') + ';' +
          'border:2px solid ' + (i < this.p2Wins ? '#f55a3a' : 'rgba(245,90,58,.2)') + ';"></span>';
      }
      var w1 = document.getElementById('zs-w1');
      var w2 = document.getElementById('zs-w2');
      if (w1) w1.textContent = this.p1Wins + (this.p1Wins === 1 ? ' Sieg' : ' Siege');
      if (w2) w2.textContent = this.p2Wins + (this.p2Wins === 1 ? ' Sieg' : ' Siege');
      el.innerHTML =
        '<div style="display:flex;gap:4px;">' + d1 + '</div>' +
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;' +
        'letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;padding:0 12px;">' +
        'Runde ' + this.mini + '</div>' +
        '<div style="display:flex;gap:4px;">' + d2 + '</div>';
    },

    // ─── STATUS-TEXT ────────────────────────────────────────
    _setStatus: function(text, color, size) {
      var el = document.getElementById('zs-status');
      if (!el) return;
      el.textContent    = text;
      el.style.color    = color || '#c0c0d8';
      el.style.fontSize = size  || '24px';
    },

    // ─── AUFRÄUMEN ──────────────────────────────────────────
    destroy: function() {
      this.dead = true;
      this.timers.forEach(function(t) { clearTimeout(t); clearInterval(t); });
      this.timers = [];
      this.ctx.network.off('zs_start_countdown');
      this.ctx.network.off('zs_setup');
      this.ctx.network.off('zs_buzz');
      this.ctx.network.off('zs_result');
      this.ctx.network.off('zs_nextround');
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTRIERUNG
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id: 'zeit-schaetzen',
    name: 'Zeit schätzen',
    description: 'Schätze die vorgegebene Zeit so genau wie möglich! Erst wenn BEIDE gebuzzert haben kommt das Ergebnis. Wer näher dran ist gewinnt die Runde. Erster mit 5 Mini-Siegen gewinnt!',
    init: function(container, ctx, onEnd) {
      this._instance = new ZeitSchaetzenInstance(container, ctx, onEnd);
    },
    destroy: function() {
      if (this._instance) { this._instance.destroy(); this._instance = null; }
    }
  });

})();