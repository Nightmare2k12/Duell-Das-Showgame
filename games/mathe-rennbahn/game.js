(function () {

  // ═══════════════════════════════════════════════════════════
  // MATHE RENNBAHN v2
  // +10 m bei richtiger Antwort · -5 m bei falscher (min 0)
  // Animierte Autos mit Boost, Rückwärts-Shake & Partikel
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
      o.frequency.value = freq; o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(ac.currentTime); o.stop(ac.currentTime + dur + 0.01);
    } catch(e) {}
  }

  var FINISH_LINE  = 100;
  var GAIN_CORRECT = 10;
  var LOSS_WRONG   = 5;

  // ─── CSS-Keyframes einmalig injizieren ───────────────────
  (function injectStyles() {
    if (document.getElementById('mr-styles')) return;
    var s = document.createElement('style');
    s.id = 'mr-styles';
    s.textContent = [
      '@keyframes mr-boost {',
      '  0%   { transform: translateY(-50%) translateX(-50%) scaleX(1.0) scaleY(1.0); }',
      '  20%  { transform: translateY(-65%) translateX(-30%) scaleX(1.3) scaleY(0.75) rotate(-6deg); }',
      '  50%  { transform: translateY(-38%) translateX(-50%) scaleX(0.88) scaleY(1.12) rotate(3deg); }',
      '  75%  { transform: translateY(-54%) translateX(-50%) scaleX(1.04) scaleY(0.98); }',
      '  100% { transform: translateY(-50%) translateX(-50%) scaleX(1.0) scaleY(1.0); }',
      '}',
      '@keyframes mr-shake {',
      '  0%,100%{ transform: translateY(-50%) translateX(-50%) rotate(0deg); }',
      '  12%   { transform: translateY(-50%) translateX(calc(-50% + 7px)) rotate(5deg); }',
      '  28%   { transform: translateY(-50%) translateX(calc(-50% - 8px)) rotate(-6deg); }',
      '  44%   { transform: translateY(-50%) translateX(calc(-50% + 5px)) rotate(4deg); }',
      '  60%   { transform: translateY(-50%) translateX(calc(-50% - 4px)) rotate(-3deg); }',
      '  78%   { transform: translateY(-50%) translateX(calc(-50% + 2px)) rotate(1deg); }',
      '}',
      '@keyframes mr-reverse {',
      '  0%   { transform: translateY(-50%) translateX(-50%); }',
      '  40%  { transform: translateY(-50%) translateX(calc(-50% - 12px)) scaleX(-1); }',
      '  70%  { transform: translateY(-50%) translateX(calc(-50% - 6px)) scaleX(-1); }',
      '  100% { transform: translateY(-50%) translateX(-50%); }',
      '}',
      '@keyframes mr-particle {',
      '  0%   { opacity: 1; transform: translate(0,0) scale(1); }',
      '  100% { opacity: 0; transform: translate(var(--px), var(--py)) scale(0); }',
      '}',
      '@keyframes mr-minus {',
      '  0%   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }',
      '  100% { opacity: 0; transform: translateX(-50%) translateY(-32px) scale(0.8); }',
      '}',
      '@keyframes mr-plus {',
      '  0%   { opacity: 1; transform: translateX(-50%) translateY(0) scale(1); }',
      '  50%  { transform: translateX(-50%) translateY(-12px) scale(1.25); }',
      '  100% { opacity: 0; transform: translateX(-50%) translateY(-30px) scale(0.85); }',
      '}',
      '@keyframes mr-pulse-green {',
      '  0%,100% { box-shadow: 0 0 0px rgba(42,240,160,0); }',
      '  50%     { box-shadow: 0 0 20px rgba(42,240,160,.65); }',
      '}',
      '@keyframes mr-pulse-red {',
      '  0%,100% { box-shadow: 0 0 0px rgba(245,90,58,0); }',
      '  50%     { box-shadow: 0 0 20px rgba(245,90,58,.65); }',
      '}',
      '@keyframes mr-countdown-pop {',
      '  0%   { opacity: 0; transform: translate(-50%,-50%) scale(2.5); }',
      '  18%  { opacity: 1; transform: translate(-50%,-50%) scale(0.88); }',
      '  70%  { opacity: 1; transform: translate(-50%,-50%) scale(1); }',
      '  100% { opacity: 0; transform: translate(-50%,-50%) scale(0.6); }',
      '}'
    ].join('\n');
    document.head.appendChild(s);
  })();

  // ─── Aufgaben-Generator (Mix leicht + etwas schwerer) ────
  function generateTask() {
    var tier = Math.floor(Math.random() * 9);
    var a, b, c, text, result;

    if (tier === 0) {
      // Einfache Addition zweistellig
      a = 15 + Math.floor(Math.random() * 55);
      b = 10 + Math.floor(Math.random() * 40);
      text = a + ' + ' + b; result = a + b;

    } else if (tier === 1) {
      // Subtraktion, Ergebnis positiv
      b = 10 + Math.floor(Math.random() * 40);
      a = b + 5 + Math.floor(Math.random() * 50);
      text = a + ' - ' + b; result = a - b;

    } else if (tier === 2) {
      // Einmaleins bis 10×10
      a = 2 + Math.floor(Math.random() * 9);
      b = 2 + Math.floor(Math.random() * 9);
      text = a + ' \u00d7 ' + b; result = a * b;

    } else if (tier === 3) {
      // a × b + c
      a = 2 + Math.floor(Math.random() * 9);
      b = 2 + Math.floor(Math.random() * 9);
      c = 5 + Math.floor(Math.random() * 25);
      text = a + ' \u00d7 ' + b + ' + ' + c; result = a * b + c;

    } else if (tier === 4) {
      // a + b × c  (Punkt vor Strich)
      a = 5 + Math.floor(Math.random() * 30);
      b = 3 + Math.floor(Math.random() * 8);
      c = 3 + Math.floor(Math.random() * 8);
      text = a + ' + ' + b + ' \u00d7 ' + c; result = a + b * c;

    } else if (tier === 5) {
      // Mittleres Einmaleins bis 15×12
      a = 6 + Math.floor(Math.random() * 10);
      b = 6 + Math.floor(Math.random() * 7);
      text = a + ' \u00d7 ' + b; result = a * b;

    } else if (tier === 6) {
      // Drei Summanden
      a = 10 + Math.floor(Math.random() * 40);
      b = 10 + Math.floor(Math.random() * 30);
      c = 5  + Math.floor(Math.random() * 20);
      text = a + ' + ' + b + ' + ' + c; result = a + b + c;

    } else if (tier === 7) {
      // a × b - c  (Ergebnis positiv)
      a = 4 + Math.floor(Math.random() * 9);
      b = 4 + Math.floor(Math.random() * 9);
      c = 2 + Math.floor(Math.random() * 12);
      result = a * b - c;
      if (result < 0) { c = 1; result = a * b - 1; }
      text = a + ' \u00d7 ' + b + ' - ' + c;

    } else {
      // Etwas kniffliger: (a + b) × c
      a = 5  + Math.floor(Math.random() * 10);
      b = 5  + Math.floor(Math.random() * 10);
      c = 2  + Math.floor(Math.random() * 5);
      text = '(' + a + ' + ' + b + ') \u00d7 ' + c;
      result = (a + b) * c;
    }

    return { text: text, result: result };
  }

  // ─── Partikel-Burst ──────────────────────────────────────
  function spawnParticles(trackEl, color, count) {
    for (var i = 0; i < count; i++) {
      var p = document.createElement('div');
      var angle = Math.random() * 360;
      var dist  = 18 + Math.random() * 32;
      var px    = Math.round(Math.cos(angle * Math.PI / 180) * dist);
      var py    = Math.round(Math.sin(angle * Math.PI / 180) * dist);
      p.style.cssText = [
        'position:absolute;pointer-events:none;z-index:20;',
        'width:7px;height:7px;border-radius:50%;',
        'background:' + color + ';',
        'top:50%;left:50%;margin-top:-3px;margin-left:-3px;',
        '--px:' + px + 'px;--py:' + py + 'px;',
        'animation:mr-particle .55s ease-out forwards;',
      ].join('');
      trackEl.appendChild(p);
      setTimeout(function(el) { if (el.parentNode) el.parentNode.removeChild(el); }, 620, p);
    }
  }

  // ─── Floating Label ──────────────────────────────────────
  function spawnFloatLabel(carEl, text, color, anim) {
    var lbl = document.createElement('div');
    lbl.textContent = text;
    lbl.style.cssText = [
      'position:absolute;top:-4px;left:50%;',
      'font-family:"Bebas Neue",sans-serif;font-size:15px;font-weight:bold;',
      'color:' + color + ';pointer-events:none;z-index:25;white-space:nowrap;',
      'animation:' + anim + ' .75s ease-out forwards;',
    ].join('');
    var track = carEl.parentNode;
    if (track) track.appendChild(lbl);
    setTimeout(function() { if (lbl.parentNode) lbl.parentNode.removeChild(lbl); }, 800);
  }

  // ─── Hauptklasse ─────────────────────────────────────────
  function RaceGameInstance(container, ctx, onEnd) {
    this.container   = container;
    this.ctx         = ctx;
    this.onEnd       = onEnd;
    this.dead        = false;
    this.round       = 1;
    this.race        = 1;
    this.p1Wins      = 0;
    this.p2Wins      = 0;
    this.p1Pos       = 0;
    this.p2Pos       = 0;
    this.timers      = [];
    this.phase       = 'idle';
    this.currentTask = null;

    this._buildUI();
    this._setupNet();
    this._startRound();
  }

  RaceGameInstance.prototype = {

    // ────────────────────── UI ───────────────────────────────
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';

      var root = document.createElement('div');
      root.id = 'mr-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0a0a20,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:flex-start;',
        'position:relative;overflow:hidden;padding:12px 14px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        '<div style="position:absolute;pointer-events:none;width:500px;height:500px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(64,160,224,.06);"></div>',

        // Titel
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:4px;">\uD83C\uDFC1 Mathe Rennbahn \u2014 Rechne dich ins Ziel!</div>',

        // Legende
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#a0a0bc;margin-bottom:6px;letter-spacing:.08em;">',
          '\u2705 Richtig <span style="color:#2af0a0">+10 m</span> &nbsp;|&nbsp; \u2717 Falsch <span style="color:#f55a3a">\u22125 m</span> &nbsp;|&nbsp; Ziel: 100 m',
        '</div>',

        // Siege-Anzeige
        '<div id="mr-wins" style="display:flex;align-items:center;gap:14px;margin-bottom:8px;min-height:26px;flex-wrap:wrap;justify-content:center;"></div>',

        // Status
        '<div id="mr-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:18px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:26px;margin-bottom:8px;text-align:center;transition:color .2s;"></div>',

        // ── Rennstrecke ──
        '<div id="mr-track-wrap" style="width:100%;max-width:500px;margin:0 auto 12px auto;">',

          // P1 Spur
          '<div style="margin-bottom:8px;">',
            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px;">',
              '<span id="mr-p1-name" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#3ab4f5;letter-spacing:.1em;"></span>',
              '<span id="mr-p1-meter" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#3ab4f5;letter-spacing:.05em;font-weight:bold;">0 m</span>',
            '</div>',
            '<div id="mr-p1-track" style="',
              'position:relative;height:46px;overflow:visible;',
              'background:repeating-linear-gradient(90deg,rgba(58,180,245,.05) 0px,rgba(58,180,245,.05) 20px,rgba(58,180,245,.02) 20px,rgba(58,180,245,.02) 40px);',
              'border:1px solid rgba(58,180,245,.3);border-radius:6px;',
            '">',
              '<div id="mr-p1-bar" style="position:absolute;left:0;top:0;bottom:0;width:0%;background:linear-gradient(90deg,rgba(58,180,245,.2),rgba(58,180,245,.5));transition:width .45s cubic-bezier(.22,.61,.36,1);border-radius:6px 0 0 6px;"></div>',
              // Kilometermarker
              '<div style="position:absolute;inset:0;pointer-events:none;">',
                '<div style="position:absolute;left:25%;top:2px;font-family:\'Barlow Condensed\',sans-serif;font-size:9px;color:rgba(58,180,245,.3);">25</div>',
                '<div style="position:absolute;left:50%;top:2px;font-family:\'Barlow Condensed\',sans-serif;font-size:9px;color:rgba(58,180,245,.3);">50</div>',
                '<div style="position:absolute;left:75%;top:2px;font-family:\'Barlow Condensed\',sans-serif;font-size:9px;color:rgba(58,180,245,.3);">75</div>',
              '</div>',
              '<div style="position:absolute;right:5px;top:50%;transform:translateY(-50%);font-size:20px;z-index:2;">\uD83C\uDFC1</div>',
              '<div id="mr-p1-car" style="position:absolute;top:50%;left:0%;transform:translateY(-50%) translateX(-50%);font-size:28px;z-index:10;transition:left .45s cubic-bezier(.22,.61,.36,1);">\uD83D\uDE97</div>',
            '</div>',
          '</div>',

          // P2 Spur
          '<div>',
            '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:3px;">',
              '<span id="mr-p2-name" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#f55a3a;letter-spacing:.1em;"></span>',
              '<span id="mr-p2-meter" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#f55a3a;letter-spacing:.05em;font-weight:bold;">0 m</span>',
            '</div>',
            '<div id="mr-p2-track" style="',
              'position:relative;height:46px;overflow:visible;',
              'background:repeating-linear-gradient(90deg,rgba(245,90,58,.05) 0px,rgba(245,90,58,.05) 20px,rgba(245,90,58,.02) 20px,rgba(245,90,58,.02) 40px);',
              'border:1px solid rgba(245,90,58,.3);border-radius:6px;',
            '">',
              '<div id="mr-p2-bar" style="position:absolute;left:0;top:0;bottom:0;width:0%;background:linear-gradient(90deg,rgba(245,90,58,.2),rgba(245,90,58,.5));transition:width .45s cubic-bezier(.22,.61,.36,1);border-radius:6px 0 0 6px;"></div>',
              '<div style="position:absolute;inset:0;pointer-events:none;">',
                '<div style="position:absolute;left:25%;top:2px;font-family:\'Barlow Condensed\',sans-serif;font-size:9px;color:rgba(245,90,58,.3);">25</div>',
                '<div style="position:absolute;left:50%;top:2px;font-family:\'Barlow Condensed\',sans-serif;font-size:9px;color:rgba(245,90,58,.3);">50</div>',
                '<div style="position:absolute;left:75%;top:2px;font-family:\'Barlow Condensed\',sans-serif;font-size:9px;color:rgba(245,90,58,.3);">75</div>',
              '</div>',
              '<div style="position:absolute;right:5px;top:50%;transform:translateY(-50%);font-size:20px;z-index:2;">\uD83C\uDFC1</div>',
              '<div id="mr-p2-car" style="position:absolute;top:50%;left:0%;transform:translateY(-50%) translateX(-50%);font-size:28px;z-index:10;transition:left .45s cubic-bezier(.22,.61,.36,1);">\uD83C\uDFCE\uFE0F</div>',
            '</div>',
          '</div>',

        '</div>',

        // ── Aufgaben-Box ──
        '<div id="mr-task-box" style="display:none;width:100%;max-width:500px;margin:0 auto 10px auto;background:rgba(255,255,255,.04);border:1px solid rgba(64,160,224,.3);border-radius:6px;padding:14px 12px;box-sizing:border-box;text-align:center;">',
          '<div id="mr-task-text" style="font-size:clamp(28px,7vw,48px);color:#fff;letter-spacing:.05em;margin-bottom:10px;text-shadow:0 0 20px rgba(64,160,224,.4);"></div>',
          '<div style="display:flex;gap:8px;align-items:center;justify-content:center;">',
            '<input id="mr-answer" type="number" placeholder="?" style="width:120px;padding:10px 12px;font-size:24px;text-align:center;background:rgba(255,255,255,.08);border:2px solid rgba(64,160,224,.4);color:#fff;border-radius:4px;outline:none;font-family:\'Bebas Neue\',sans-serif;letter-spacing:.05em;" />',
            '<button id="mr-submit" style="padding:10px 22px;background:#40a0e0;border:none;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:20px;letter-spacing:.1em;cursor:pointer;clip-path:polygon(0 0,calc(100% - 7px) 0,100% 7px,100% 100%,7px 100%,0 calc(100% - 7px));">\u2713 OK</button>',
          '</div>',
          '<div id="mr-task-hint" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#f55a3a;margin-top:8px;min-height:18px;font-weight:bold;"></div>',
        '</div>',

        // ── Countdown-Overlay ──
        '<div id="mr-countdown" style="display:none;position:absolute;inset:0;z-index:25;pointer-events:none;background:rgba(6,6,16,.7);">',
          '<div id="mr-countdown-num" style="',
            'position:absolute;top:50%;left:50%;',
            'font-family:\'Bebas Neue\',sans-serif;font-size:clamp(80px,20vw,130px);',
            'color:#fff;letter-spacing:.02em;',
            'text-shadow:0 0 40px rgba(64,160,224,.9),0 0 80px rgba(64,160,224,.4);',
            'transform:translate(-50%,-50%);pointer-events:none;',
          '"></div>',
        '</div>',

        // Start-Button (nur Host)
        '<button id="mr-start-btn" style="display:none;margin-bottom:12px;background:#40a0e0;border:none;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:10px 34px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">\u25b6 RENNEN STARTEN</button>',

        // Overlay
        '<div id="mr-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:24px;">',
          '<div id="mr-ov-ico" style="font-size:52px;"></div>',
          '<div id="mr-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,5vw,42px);color:#40a0e0;letter-spacing:.05em;"></div>',
          '<div id="mr-ov-expl" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#a0a0bc;max-width:380px;line-height:1.5;"></div>',
          '<div id="mr-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;margin-top:4px;"></div>',
          '<button id="mr-ov-btn" style="display:none;margin-top:8px;background:#40a0e0;border:none;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">N\u00c4CHSTE AUFGABE \u25b6</button>',
          '<div id="mr-ov-wait" style="display:none;font-family:\'Barlow Condensed\',sans-serif;font-size:14px;color:#a0a0bc;letter-spacing:.2em;text-transform:uppercase;">Warte auf Host...</div>',
        '</div>',
      ].join('');

      this.container.appendChild(root);

      document.getElementById('mr-p1-name').textContent = this.ctx.p1Name;
      document.getElementById('mr-p2-name').textContent = this.ctx.p2Name;
      this._drawWins();

      if (this.ctx.isHost) {
        var startBtn = document.getElementById('mr-start-btn');
        startBtn.style.display = 'block';
        startBtn.addEventListener('click', function() {
          startBtn.style.display = 'none';
          self._hostSendTask();
        });
      }

      var self = this;
      var inp = document.getElementById('mr-answer');
      if (inp) inp.addEventListener('keydown', function(e) { if (e.key === 'Enter') self._onSubmit(); });
      var sbm = document.getElementById('mr-submit');
      if (sbm) sbm.addEventListener('click', function() { self._onSubmit(); });
    },

    // ────────────────────── Netzwerk ─────────────────────────
    _setupNet: function() {
      var self = this;

      this.ctx.network.on('mr_task', function(msg) {
        if (self.ctx.isHost) return;
        self.currentTask = { text: msg.text, result: msg.result };
        self._showTask();
      });

      // Host schickt Countdown + Aufgabe gleichzeitig → Gast startet Countdown
      this.ctx.network.on('mr_countdown', function(msg) {
        if (self.ctx.isHost) return;
        self.currentTask = { text: msg.text, result: msg.result };
        self._runCountdown(function() {});
      });

      // Host empfängt Antwort-Versuch vom Gast
      this.ctx.network.on('mr_answer', function(msg) {
        if (!self.ctx.isHost) return;
        if (self.phase !== 'playing') return;

        var correct = (msg.answer === self.currentTask.result);

        if (correct) {
          self.phase = 'result';
          self._clearTimers();
          self.p2Pos = Math.min(self.p2Pos + GAIN_CORRECT, FINISH_LINE);
          self._animateCar('p2', 'boost');
          self._updateTrack();
          var answer = self.currentTask.result;
          var p1s = self.p1Pos, p2s = self.p2Pos;
          var gameOver = p1s >= FINISH_LINE || p2s >= FINISH_LINE;
          setTimeout(function() {
            self.ctx.network.send('mr_round_result', {
              winner: 'p2', p1Pos: p1s, p2Pos: p2s, gameOver: gameOver, answer: answer
            });
            self._showRoundResult('p2', gameOver, answer);
          }, 500);
        } else {
          // Falsch → Position abziehen
          self.p2Pos = Math.max(0, self.p2Pos - LOSS_WRONG);
          self._animateCar('p2', 'wrong');
          self._updateTrack();
          self.ctx.network.send('mr_wrong', { player: 'p2', p2Pos: self.p2Pos });
        }
      });

      // Gast empfängt Falsch-Feedback (eigene oder gegnerische)
      this.ctx.network.on('mr_wrong', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.player === 'p1') {
          self.p1Pos = Math.max(0, msg.p1Pos);
        } else {
          self.p2Pos = Math.max(0, msg.p2Pos);
        }
        self._animateCar(msg.player, 'wrong');
        self._updateTrack();
        // Input wieder freischalten
        var inp = document.getElementById('mr-answer');
        var sbm = document.getElementById('mr-submit');
        if (inp) { inp.disabled = false; inp.value = ''; inp.focus(); }
        if (sbm) sbm.disabled = false;
        if (self.phase === 'waiting') self.phase = 'playing';
        var hint = document.getElementById('mr-task-hint');
        if (hint) hint.textContent = '\u2717 Falsch! \u22125 m';
      });

      this.ctx.network.on('mr_round_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Pos = msg.p1Pos;
        self.p2Pos = msg.p2Pos;
        self._updateTrack();
        self._showRoundResult(msg.winner, msg.gameOver, msg.answer);
      });

      this.ctx.network.on('mr_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) {
          self._showFinal();
        } else if (msg.newRace) {
          // Neues Rennen starten: Positionen und Runde zurücksetzen
          document.getElementById('mr-ov').style.display = 'none';
          self.race  = msg.race || (self.race + 1);
          self.round = 1;
          self.p1Pos = 0;
          self.p2Pos = 0;
          self._updateTrack();
          self._drawWins();
          // Countdown kommt via mr_countdown
        } else {
          // Nächste Aufgabe im selben Rennen
          document.getElementById('mr-ov').style.display = 'none';
        }
      });

      this.ctx.network.on('mr_end_final', function() {
        if (self.ctx.isHost) return;
        self._finish();
      });
    },

    // ────────────────────── Auto-Animation ──────────────────
    _animateCar: function(player, type) {
      var carEl   = document.getElementById('mr-' + player + '-car');
      var trackEl = document.getElementById('mr-' + player + '-track');
      if (!carEl) return;

      // Animation zurücksetzen
      carEl.style.animation = 'none';
      void carEl.offsetWidth;

      if (type === 'boost') {
        carEl.style.animation = 'mr-boost .55s ease-out';
        setTimeout(function() { if (carEl) carEl.style.animation = ''; }, 580);

        if (trackEl) spawnParticles(trackEl, player === 'p1' ? '#3ab4f5' : '#f55a3a', 9);
        spawnFloatLabel(carEl, '+10 m', '#2af0a0', 'mr-plus');

        if (trackEl) {
          trackEl.style.animation = 'none';
          void trackEl.offsetWidth;
          trackEl.style.animation = 'mr-pulse-green .5s ease-out';
          setTimeout(function() { if (trackEl) trackEl.style.animation = ''; }, 530);
        }

        beep(660, 0.08, 'sine', 0.18);
        setTimeout(function() { beep(880, 0.1, 'sine', 0.18); }, 90);

      } else if (type === 'wrong') {
        carEl.style.animation = 'mr-shake .48s ease-out';
        setTimeout(function() { if (carEl) carEl.style.animation = ''; }, 510);

        spawnFloatLabel(carEl, '\u22125 m', '#f55a3a', 'mr-minus');

        if (trackEl) {
          trackEl.style.animation = 'none';
          void trackEl.offsetWidth;
          trackEl.style.animation = 'mr-pulse-red .5s ease-out';
          setTimeout(function() { if (trackEl) trackEl.style.animation = ''; }, 530);
        }

        beep(220, 0.28, 'sawtooth', 0.22);
      }
    },

    // ────────────────────── Runden-Ablauf ───────────────────
    _startRound: function() {
      if (this.dead) return;
      this.phase = 'idle';
      this._clearTimers();
      this._setStatus('Bereit zum Rechnen?', '#c0c0d8', '15px');
      this._updateTrack();
      document.getElementById('mr-task-box').style.display = 'none';
      if (this.ctx.isHost) {
        var startBtn = document.getElementById('mr-start-btn');
        if (startBtn) startBtn.style.display = 'block';
      }
    },

    _hostSendTask: function() {
      if (!this.ctx.isHost) return;
      this.currentTask = generateTask();
      this.phase = 'countdown';
      document.getElementById('mr-start-btn').style.display = 'none';
      // Countdown starten – Host & Gast gleichzeitig
      this.ctx.network.send('mr_countdown', {
        text:   this.currentTask.text,
        result: this.currentTask.result
      });
      this._runCountdown(function() {
        // nach Countdown
      });
    },

    _runCountdown: function(onDone) {
      var self  = this;
      var cdDiv = document.getElementById('mr-countdown');
      var cdNum = document.getElementById('mr-countdown-num');
      if (!cdDiv || !cdNum) { onDone && onDone(); return; }

      cdDiv.style.display = 'block';
      var ticks = [3, 2, 1, 'GO!'];
      var colors = ['#f5c842', '#f5c842', '#f5c842', '#2af0a0'];
      var i = 0;

      function tick() {
        if (self.dead) { cdDiv.style.display = 'none'; return; }
        if (i >= ticks.length) {
          cdDiv.style.display = 'none';
          self._showTask();
          onDone && onDone();
          return;
        }
        cdNum.textContent  = ticks[i];
        cdNum.style.color  = colors[i];
        cdNum.style.textShadow = i < 3
          ? '0 0 40px rgba(245,200,66,.9),0 0 80px rgba(245,200,66,.3)'
          : '0 0 40px rgba(42,240,160,.9),0 0 80px rgba(42,240,160,.3)';
        // Animation neu starten
        cdNum.style.animation = 'none';
        void cdNum.offsetWidth;
        cdNum.style.animation = 'mr-countdown-pop .85s ease-out forwards';

        // Beep: 3/2/1 tief, GO hoch
        if (i < 3) { beep(440, 0.12, 'sine', 0.22); }
        else        { beep(880, 0.2,  'sine', 0.25); }

        i++;
        self.timers.push(setTimeout(tick, i < ticks.length ? 900 : 600));
      }

      tick();
    },

    _showTask: function() {
      if (this.dead) return;
      this.phase = 'playing';
      var box  = document.getElementById('mr-task-box');
      var txt  = document.getElementById('mr-task-text');
      var inp  = document.getElementById('mr-answer');
      var hint = document.getElementById('mr-task-hint');

      box.style.display = 'block';
      txt.textContent   = this.currentTask.text + ' = ?';
      hint.textContent  = '';
      if (inp) { inp.value = ''; inp.disabled = false; inp.focus(); }
      var sbm = document.getElementById('mr-submit');
      if (sbm) sbm.disabled = false;

      this._setStatus('\u26a1 Wer rechnet schneller?', '#40a0e0', '17px');
      beep(440, 0.12, 'sine', 0.18);
    },

    _onSubmit: function() {
      if (this.phase !== 'playing' || this.dead) return;
      var inp = document.getElementById('mr-answer');
      if (!inp) return;
      var val = parseInt(inp.value, 10);
      if (isNaN(val)) return;

      var self    = this;
      var correct = (val === this.currentTask.result);

      if (correct) {
        if (this.ctx.isHost) {
          if (this.phase !== 'playing') return;
          this.phase = 'result';
          this._clearTimers();
          this.p1Pos = Math.min(this.p1Pos + GAIN_CORRECT, FINISH_LINE);
          this._animateCar('p1', 'boost');
          this._updateTrack();
          var answer   = this.currentTask.result;
          var p1s = this.p1Pos, p2s = this.p2Pos;
          var gameOver = p1s >= FINISH_LINE || p2s >= FINISH_LINE;
          setTimeout(function() {
            self.ctx.network.send('mr_round_result', {
              winner: 'p1', p1Pos: p1s, p2Pos: p2s, gameOver: gameOver, answer: answer
            });
            self._showRoundResult('p1', gameOver, answer);
          }, 500);
        } else {
          // Gast: sperren und senden
          inp.disabled = true;
          document.getElementById('mr-submit').disabled = true;
          this.phase = 'waiting';
          this._animateCar('p2', 'boost');
          this._setStatus('\u2705 Gesendet \u2013 warte auf Auswertung\u2026', '#2af0a0', '14px');
          this.ctx.network.send('mr_answer', { player: 'p2', answer: val });
        }
      } else {
        // Falsch
        inp.value = '';
        inp.focus();
        var hint = document.getElementById('mr-task-hint');
        if (hint) hint.textContent = '\u2717 Falsch! \u22125 m';

        if (this.ctx.isHost) {
          this.p1Pos = Math.max(0, this.p1Pos - LOSS_WRONG);
          this._animateCar('p1', 'wrong');
          this._updateTrack();
          this.ctx.network.send('mr_wrong', { player: 'p1', p1Pos: this.p1Pos });
        } else {
          // Gast: senden – Host wertet aus und schickt mr_wrong zurück
          this.ctx.network.send('mr_answer', { player: 'p2', answer: val });
          this._animateCar('p2', 'wrong');
        }
      }
    },

    _showRoundResult: function(winner, gameOver, answer) {
      var self       = this;
      var winnerName = winner === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;

      var inp = document.getElementById('mr-answer');
      var sbm = document.getElementById('mr-submit');
      if (inp) { inp.disabled = false; inp.value = ''; }
      if (sbm) sbm.disabled = false;

      this._updateTrack();

      var ov   = document.getElementById('mr-ov');
      var ico  = document.getElementById('mr-ov-ico');
      var ttl  = document.getElementById('mr-ov-ttl');
      var expl = document.getElementById('mr-ov-expl');
      var sc   = document.getElementById('mr-ov-sc');
      var btn  = document.getElementById('mr-ov-btn');
      var wait = document.getElementById('mr-ov-wait');

      ico.textContent = winner === 'p1' ? '\uD83D\uDE97' : '\uD83C\uDFCE\uFE0F';
      ttl.style.color = winner === 'p1' ? '#3ab4f5' : '#f55a3a';
      ttl.textContent = esc(winnerName) + ' springt vor!';
      expl.textContent = 'Richtige Antwort: ' + answer + ' \u2014 ' + esc(winnerName) + ' gewinnt +' + GAIN_CORRECT + ' m!';
      sc.innerHTML =
        '\uD83D\uDE97 ' + esc(this.ctx.p1Name) + ': ' + this.p1Pos + ' m' +
        ' &nbsp;\u00b7&nbsp; ' +
        '\uD83C\uDFCE\uFE0F ' + esc(this.ctx.p2Name) + ': ' + this.p2Pos + ' m';

      document.getElementById('mr-task-box').style.display = 'none';
      ov.style.display = 'flex';

      if (gameOver) { this._showRaceOver(); return; }

      if (this.ctx.isHost) {
        btn.textContent    = 'N\u00c4CHSTE AUFGABE \u25b6';
        btn.style.display  = 'block';
        wait.style.display = 'none';
        btn.onclick = function() {
          ov.style.display = 'none';
          self.round++;
          // mr_next informiert Gast → Overlay weg, Countdown kommt via mr_countdown
          self.ctx.network.send('mr_next', { gameOver: false });
          self._hostSendTask();
        };
      } else {
        btn.style.display  = 'none';
        wait.style.display = 'block';
      }
    },

    _showRaceOver: function() {
      var self    = this;
      var p1Won   = this.p1Pos >= FINISH_LINE && this.p2Pos < FINISH_LINE;
      var tie     = this.p1Pos >= FINISH_LINE && this.p2Pos >= FINISH_LINE;
      var raceWinner = tie ? null : (p1Won ? 'p1' : 'p2');

      // Siege zählen
      if (raceWinner === 'p1') this.p1Wins++;
      else if (raceWinner === 'p2') this.p2Wins++;
      else { this.p1Wins++; this.p2Wins++; } // Gleichstand → beide +1 (Sonderfall)

      this._drawWins();

      var matchOver = this.p1Wins >= 2 || this.p2Wins >= 2;

      var ov   = document.getElementById('mr-ov');
      var ico  = document.getElementById('mr-ov-ico');
      var ttl  = document.getElementById('mr-ov-ttl');
      var expl = document.getElementById('mr-ov-expl');
      var sc   = document.getElementById('mr-ov-sc');
      var btn  = document.getElementById('mr-ov-btn');
      var wait = document.getElementById('mr-ov-wait');

      ov.style.display = 'flex';
      document.getElementById('mr-task-box').style.display = 'none';

      if (tie) {
        ico.textContent = '\uD83E\uDD1D';
        ttl.style.color = '#f5c842';
        ttl.textContent = 'Gleichzeitig im Ziel!';
        expl.textContent = 'Beide auf ' + FINISH_LINE + ' m \u2013 beide bekommen einen Siegpunkt!';
      } else {
        var winnerName = raceWinner === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
        ico.textContent = raceWinner === 'p1' ? '\uD83D\uDE97' : '\uD83C\uDFCE\uFE0F';
        ttl.style.color = raceWinner === 'p1' ? '#3ab4f5' : '#f55a3a';
        ttl.textContent = esc(winnerName) + ' gewinnt Rennen ' + this.race + '!';
        expl.textContent = esc(winnerName) + ' hat als Erstes 100 m erreicht!';
      }

      var dotsHtml = function(wins, color) {
        var s = '';
        for (var i = 0; i < 2; i++)
          s += '<span style="display:inline-block;width:12px;height:12px;border-radius:50%;margin:0 2px;background:' +
               (i < wins ? color : 'rgba(255,255,255,.1)') + ';border:2px solid ' + color + ';"></span>';
        return s;
      };
      sc.innerHTML =
        '\uD83D\uDE97 ' + esc(this.ctx.p1Name) + ': ' + dotsHtml(this.p1Wins, '#3ab4f5') +
        ' &nbsp;\u00b7&nbsp; ' +
        '\uD83C\uDFCE\uFE0F ' + esc(this.ctx.p2Name) + ': ' + dotsHtml(this.p2Wins, '#f55a3a');

      beep(523, 0.3, 'sine', 0.2);
      setTimeout(function() { beep(659, 0.3, 'sine', 0.2);  }, 200);
      setTimeout(function() { beep(784, 0.5, 'sine', 0.22); }, 400);

      if (matchOver) {
        if (this.ctx.isHost) {
          btn.textContent    = 'ERGEBNIS ANZEIGEN \u25b6';
          btn.style.display  = 'block';
          wait.style.display = 'none';
          btn.onclick = function() {
            self.ctx.network.send('mr_next', { gameOver: true });
            self._showFinal();
          };
        } else {
          btn.style.display  = 'none';
          wait.style.display = 'block';
        }
      } else {
        // Nächstes Rennen
        if (this.ctx.isHost) {
          btn.textContent    = 'N\u00c4CHSTES RENNEN \u25b6';
          btn.style.display  = 'block';
          wait.style.display = 'none';
          btn.onclick = function() {
            ov.style.display = 'none';
            self.race++;
            self.round = 1;
            self.p1Pos = 0;
            self.p2Pos = 0;
            self._updateTrack();
            self._drawWins();
            self.ctx.network.send('mr_next', { gameOver: false, newRace: true, race: self.race });
            self._hostSendTask();
          };
        } else {
          btn.style.display  = 'none';
          wait.style.display = 'block';
        }
      }
    },

    _showFinal: function() {
      var self      = this;
      var p1Won     = this.p1Wins > this.p2Wins;
      var tie       = this.p1Wins === this.p2Wins;
      var winnerName = tie ? null : (p1Won ? this.ctx.p1Name : this.ctx.p2Name);

      var ov   = document.getElementById('mr-ov');
      var ico  = document.getElementById('mr-ov-ico');
      var ttl  = document.getElementById('mr-ov-ttl');
      var expl = document.getElementById('mr-ov-expl');
      var sc   = document.getElementById('mr-ov-sc');
      var btn  = document.getElementById('mr-ov-btn');
      var wait = document.getElementById('mr-ov-wait');

      ov.style.display = 'flex';
      document.getElementById('mr-task-box').style.display = 'none';

      ico.textContent  = tie ? '\uD83E\uDD1D' : '\uD83C\uDFC6';
      ttl.style.color  = '#f5c842';
      ttl.textContent  = tie ? 'Unentschieden!' : esc(winnerName) + ' gewinnt das Match!';
      expl.textContent = tie
        ? 'Beide haben ' + this.p1Wins + ' Rennen gewonnen \u2013 was f\u00fcr ein Duell!'
        : esc(winnerName) + ' hat 2 von ' + this.race + ' Rennen gewonnen. Herzlichen Gl\u00FCckwunsch!';
      sc.innerHTML =
        '\uD83D\uDE97 ' + esc(this.ctx.p1Name) + ': ' + this.p1Wins + ' Sieg(e)' +
        ' &nbsp;\u00b7&nbsp; ' +
        '\uD83C\uDFCE\uFE0F ' + esc(this.ctx.p2Name) + ': ' + this.p2Wins + ' Sieg(e)' +
        '<br><span style="font-size:12px;opacity:.7;">Rennen gespielt: ' + this.race + '</span>';

      btn.textContent    = 'ZUM HAUPTMEN\u00dc';
      btn.style.display  = 'block';
      wait.style.display = 'none';

      beep(523, 0.3, 'sine', 0.2);
      setTimeout(function() { beep(659, 0.3, 'sine', 0.2);  }, 200);
      setTimeout(function() { beep(784, 0.5, 'sine', 0.22); }, 400);

      if (this.ctx.isHost) {
        btn.onclick = function() { self.ctx.network.send('mr_end_final', {}); self._finish(); };
      } else {
        btn.onclick = function() { self._finish(); };
      }
    },

    // ────────────────────── Rennstrecke ─────────────────────
    _updateTrack: function() {
      var trackEnd = 90;
      var p1Pct = Math.min(this.p1Pos, FINISH_LINE) / FINISH_LINE * trackEnd;
      var p2Pct = Math.min(this.p2Pos, FINISH_LINE) / FINISH_LINE * trackEnd;

      var p1bar = document.getElementById('mr-p1-bar');
      var p2bar = document.getElementById('mr-p2-bar');
      var p1car = document.getElementById('mr-p1-car');
      var p2car = document.getElementById('mr-p2-car');
      var p1m   = document.getElementById('mr-p1-meter');
      var p2m   = document.getElementById('mr-p2-meter');

      if (p1bar) p1bar.style.width = p1Pct + '%';
      if (p2bar) p2bar.style.width = p2Pct + '%';
      if (p1car) p1car.style.left  = p1Pct + '%';
      if (p2car) p2car.style.left  = p2Pct + '%';
      if (p1m)   p1m.textContent   = this.p1Pos + ' m';
      if (p2m)   p2m.textContent   = this.p2Pos + ' m';
    },

    // ────────────────────── Siege-Dots ──────────────────────
    _drawWins: function() {
      var el = document.getElementById('mr-wins');
      if (!el) return;
      var MAX_WINS = 2;
      var bs = 'display:inline-block;width:14px;height:14px;border-radius:50%;margin:0 3px;border:2px solid ';
      var d1 = '', d2 = '';
      for (var i = 0; i < MAX_WINS; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)')  + '"></span>';
      }
      el.innerHTML =
        '<span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#3ab4f5;letter-spacing:.1em;">' + esc(this.ctx.p1Name) + '</span> ' +
        d1 +
        '<span style="color:#c0c0d8;margin:0 8px;font-size:11px;white-space:nowrap;">RENNEN ' + this.race + '</span>' +
        d2 +
        ' <span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#f55a3a;letter-spacing:.1em;">' + esc(this.ctx.p2Name) + '</span>';
    },

    // ────────────────────── Hilfsmethoden ───────────────────
    _setStatus: function(t, c, s) {
      var el = document.getElementById('mr-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    _clearTimers: function() { this.timers.forEach(clearTimeout); this.timers = []; },

    _finish: function() {
      this.dead = true;
      var winner = this.p1Wins > this.p2Wins ? 'p1' : (this.p2Wins > this.p1Wins ? 'p2' : 'p1');
      this.onEnd({ winner: winner, details: '\uD83D\uDE97 ' + this.p1Wins + ' Siege : ' + this.p2Wins + ' Siege' });
    },

    destroy: function() {
      this.dead = true;
      this._clearTimers();
      ['mr_task','mr_countdown','mr_answer','mr_wrong','mr_round_result','mr_next','mr_end_final'].forEach(function(ev) {
        this.ctx.network.off(ev);
      }, this);
    }
  };

  // ─── Registrierung ───────────────────────────────────────
  GamePool.register({
    id: 'mathe-rennbahn',
    name: 'Mathe Rennbahn',
    description: 'Zwei Fahrer rasen auf 100 m. Richtige Antwort: +10 m \u2022 Falsche Antwort: \u22125 m (min. 0). Wer zuerst 100 m erreicht, gewinnt das Rennen \u2014 wer 2 Rennen gewinnt, gewinnt das Match! Aufgaben-Mix von einfachem Kopfrechnen bis zu Klammer-Aufgaben.',
    init: function(container, ctx, onEnd) { this._instance = new RaceGameInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
