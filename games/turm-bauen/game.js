(function () {

  // ═══════════════════════════════════════════════════════════
  // TURMGEDÄCHTNIS - Tower Memory Game
  // ═══════════════════════════════════════════════════════════

  var COLORS = {
    ROT:  { name: 'ROT',  hex: '#f55a3a', glow: 'rgba(245,90,58,.5)'  },
    GELB: { name: 'GELB', hex: '#f0c030', glow: 'rgba(240,192,48,.5)' },
    BLAU: { name: 'BLAU', hex: '#3ab4f5', glow: 'rgba(58,180,245,.5)' },
    GRÜN: { name: 'GRÜN', hex: '#2af0a0', glow: 'rgba(42,240,160,.5)' }
  };
  var COLOR_KEYS = ['ROT', 'GELB', 'BLAU', 'GRÜN'];

  var BLOCK_H = 28, BLOCK_GAP = 4;
  var MAX_BLOCKS = 16;
  var TOWER_AREA_H = MAX_BLOCKS * (BLOCK_H + BLOCK_GAP); // fixed, no layout shift

  function beep(freq, dur, type, vol) {
    try {
      var ac = new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = freq; o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(ac.currentTime); o.stop(ac.currentTime + dur + 0.05);
    } catch(e) {}
  }

  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }

  // Progressive difficulty based on round number
  function generateTower(round) {
    var min, max;
    if (round <= 5)      { min = 4;  max = 7;  }
    else if (round <= 9) { min = 8;  max = 11; }
    else                 { min = 12; max = 16; }
    var height = randInt(min, max);
    var blocks = [];
    for (var i = 0; i < height; i++) blocks.push(COLOR_KEYS[randInt(0, 3)]);
    return blocks; // index 0 = bottom block
  }

  // ═══════════════════════════════════════════════════════════
  // MAIN INSTANCE
  // ═══════════════════════════════════════════════════════════

  function TurmgedächtnisInstance(container, ctx, onEnd) {
    this.container               = container;
    this.ctx                     = ctx;
    this.onEnd                   = onEnd;
    this.dead                    = false;
    this.mini                    = 1;
    this.p1Errors                = 0;
    this.p2Errors                = 0;
    this.timers                  = [];
    this._tickInterval           = null;
    this._blockInterval          = null;
    this._showTimer              = null;
    this._buildCountdownInterval = null;
    this.phase                   = 'idle';
    this.towerBlocks             = [];
    this.playerTower             = [];
    this._opponentDone           = false;
    this._iDone                  = false;
    this._p1SubmitData           = null;
    this._p2SubmitData           = null;
    this._countdownLeft          = 0;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  TurmgedächtnisInstance.prototype = {

    // ─────────────────────────────────────────────────────────
    // UI BUILD
    // ─────────────────────────────────────────────────────────
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'tg-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:center;',
        'position:relative;overflow:hidden;padding:8px 20px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        // decorative ring
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;',
        'top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>',

        // error dots (always visible, fixed height)
        '<div id="tg-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:6px;min-height:28px;"></div>',

        // subtitle
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;',
        'text-transform:uppercase;margin-bottom:4px;">Merke den Turm – baue ihn nach</div>',

        // urgency timer — visibility:hidden keeps space reserved
        '<div id="tg-timer" style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;color:#f0c030;',
        'letter-spacing:.1em;margin-bottom:4px;min-height:28px;visibility:hidden;transition:color .2s;">30</div>',

        // status text — fixed height
        '<div id="tg-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:20px;letter-spacing:.25em;',
        'color:#c0c0d8;text-transform:uppercase;min-height:28px;margin-bottom:6px;text-align:center;transition:color .2s;"></div>',

        // start button wrapper — fixed height so UI stays stable
        '<div id="tg-start-wrap" style="min-height:52px;display:flex;align-items:center;justify-content:center;margin-bottom:6px;">',
          '<button id="tg-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';',
          'background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;',
          'letter-spacing:.15em;padding:12px 40px;cursor:pointer;',
          'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">RUNDE STARTEN</button>',
        '</div>',

        // FIXED-HEIGHT arena: show-tower and build-tower are layered inside via absolute positioning
        '<div id="tg-arena" style="position:relative;width:200px;height:' + TOWER_AREA_H + 'px;margin-bottom:8px;flex-shrink:0;">',

          // show-tower panel (memorize)
          '<div id="tg-tower-wrap" style="position:absolute;inset:0;display:flex;flex-direction:column;',
          'justify-content:flex-end;align-items:center;visibility:hidden;">',
            '<div id="tg-tower-blocks" style="display:flex;flex-direction:column-reverse;align-items:center;',
            'gap:' + BLOCK_GAP + 'px;width:100%;justify-content:flex-end;"></div>',
          '</div>',

          // build-tower panel (player construction)
          '<div id="tg-build-wrap-inner" style="position:absolute;inset:0;display:flex;flex-direction:column;',
          'justify-content:flex-end;align-items:center;visibility:hidden;">',
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.3em;',
            'color:#c0c0d8;text-transform:uppercase;position:absolute;top:0;left:0;right:0;text-align:center;">Dein Turm</div>',
            '<div id="tg-build-blocks" style="display:flex;flex-direction:column-reverse;align-items:center;',
            'gap:' + BLOCK_GAP + 'px;width:100%;justify-content:flex-end;',
            'border-bottom:2px solid rgba(255,255,255,.15);padding-bottom:4px;"></div>',
          '</div>',

        '</div>',

        // tower/action label (below arena, fixed height)
        '<div id="tg-tower-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.3em;',
        'color:#c0c0d8;text-transform:uppercase;min-height:18px;margin-bottom:4px;text-align:center;"></div>',

        // RIGHT-SIDE PANEL: color buttons + action buttons + opponent status
        '<div id="tg-right-panel" style="position:absolute;right:16px;top:50%;transform:translateY(-50%);',
        'display:flex;flex-direction:column;align-items:stretch;gap:8px;width:140px;">',

          // color buttons
          '<div id="tg-colbtns" style="display:grid;grid-template-columns:1fr 1fr;gap:6px;visibility:hidden;">',
            '<button id="tg-col-ROT"  class="tg-colbtn" data-col="ROT"  style="background:rgba(245,90,58,.08);border:2px solid #f55a3a;color:#f55a3a;',
            'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.1em;padding:12px 6px;cursor:pointer;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));transition:background .1s;">ROT</button>',
            '<button id="tg-col-GELB" class="tg-colbtn" data-col="GELB" style="background:rgba(240,192,48,.08);border:2px solid #f0c030;color:#f0c030;',
            'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.1em;padding:12px 6px;cursor:pointer;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));transition:background .1s;">GELB</button>',
            '<button id="tg-col-BLAU" class="tg-colbtn" data-col="BLAU" style="background:rgba(58,180,245,.08);border:2px solid #3ab4f5;color:#3ab4f5;',
            'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.1em;padding:12px 6px;cursor:pointer;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));transition:background .1s;">BLAU</button>',
            '<button id="tg-col-GRÜN" class="tg-colbtn" data-col="GRÜN" style="background:rgba(42,240,160,.08);border:2px solid #2af0a0;color:#2af0a0;',
            'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.1em;padding:12px 6px;cursor:pointer;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));transition:background .1s;">GRÜN</button>',
          '</div>',

          // action buttons
          '<div id="tg-action-btns" style="display:flex;flex-direction:column;gap:6px;visibility:hidden;">',
            '<button id="tg-reset-btn" style="background:rgba(255,255,255,.04);border:2px solid rgba(255,255,255,.2);',
            'color:#c0c0d8;font-family:\'Bebas Neue\',sans-serif;font-size:14px;letter-spacing:.1em;padding:9px 8px;cursor:pointer;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));">EINSTURZ ↩</button>',
            '<button id="tg-submit-btn" style="background:#2af0a0;border:none;color:#000;',
            'font-family:\'Bebas Neue\',sans-serif;font-size:14px;letter-spacing:.1em;padding:9px 8px;cursor:pointer;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));">EINLOGGEN ✓</button>',
          '</div>',

          // opponent status
          '<div id="tg-opp-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:.15em;',
          'color:#c0c0d8;text-transform:uppercase;text-align:center;min-height:16px;"></div>',

        '</div>',

        // result overlay
        '<div id="tg-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);',
        'display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;',
        'text-align:center;padding:24px;overflow-y:auto;">',
          '<div id="tg-ov-ico" style="font-size:48px;"></div>',
          '<div id="tg-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,6vw,42px);',
          'color:#f0c030;letter-spacing:.05em;"></div>',
          '<div id="tg-ov-correct-tower" style="display:flex;flex-direction:column;align-items:center;gap:4px;margin:4px 0;"></div>',
          '<div id="tg-ov-answers" style="display:flex;gap:28px;margin:4px 0;flex-wrap:wrap;justify-content:center;"></div>',
          '<div id="tg-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;',
          'text-transform:uppercase;letter-spacing:.2em;"></div>',
          '<button id="tg-ov-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;',
          'font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;',
          'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">WEITER →</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);
      this._drawDots();

      // Events
      if (this.ctx.isHost) {
        document.getElementById('tg-start-btn').addEventListener('click', function() {
          this.style.display = 'none';
          self.ctx.network.send('tg_start_countdown', {});
          self._countdown();
        });
      }

      document.getElementById('tg-reset-btn').addEventListener('click', function() {
        if (self.phase !== 'building' || self._iDone || self.dead) return;
        self._collapsePlayerTower(function() {
          self.playerTower = [];
          self._renderPlayerTower();
        });
      });

      document.getElementById('tg-submit-btn').addEventListener('click', function() {
        self._submitTower();
      });

      document.querySelectorAll('.tg-colbtn').forEach(function(btn) {
        btn.addEventListener('click', function() {
          self._addBlock(this.getAttribute('data-col'));
        });
      });
    },

    // ─────────────────────────────────────────────────────────
    // NETWORK
    // ─────────────────────────────────────────────────────────
    _setupNet: function() {
      var self = this;

      this.ctx.network.on('tg_start_countdown', function() {
        if (!self.ctx.isHost) self._countdown();
      });

      this.ctx.network.on('tg_sync_tower', function(msg) {
        if (self.ctx.isHost) return;
        self.towerBlocks = msg.tower;
        self._startShowTower();
      });

      this.ctx.network.on('tg_opponent_done', function() {
        if (self.dead) return;
        self._opponentDone = true;
        if (!self._iDone && self.phase === 'building') {
          self._startUrgencyTimer();
          var oppEl = document.getElementById('tg-opp-status');
          if (oppEl) { oppEl.textContent = 'Gegner hat eingeloggt – noch 30 Sek!'; oppEl.style.color = '#f55a3a'; }
        }
      });

      this.ctx.network.on('tg_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Errors = msg.p1Errors; self.p2Errors = msg.p2Errors;
        self._showResult(msg.p1Correct, msg.p2Correct, msg.tower, msg.p1Submit, msg.p2Submit, msg.winner);
      });

      this.ctx.network.on('tg_timeout', function() {
        if (self.ctx.isHost) return;
        self._clearAllTimers();
        self.phase = 'result';
        self._setStatus('Zeit abgelaufen...', '#f55a3a', '20px');
      });

      this.ctx.network.on('tg_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) { self._finish(msg.winner); }
        else {
          self.mini++;
          self._startMini();
          document.getElementById('tg-ov').style.display = 'none';
        }
      });

      this.ctx.network.on('tg_p2_submit', function(msg) {
        if (!self.ctx.isHost) return;
        self._p2SubmitData = msg.tower;
        self._tryResolve();
      });
    },

    // ─────────────────────────────────────────────────────────
    // ROUND FLOW
    // ─────────────────────────────────────────────────────────
    _startMini: function() {
      if (this.dead) return;
      this.phase = 'idle';
      this.playerTower = [];
      this._opponentDone = false;
      this._iDone = false;
      this._p1SubmitData = null;
      this._p2SubmitData = null;
      this._clearAllTimers();

      // Reset UI visibility (no layout shift — using visibility not display)
      this._vis('tg-tower-wrap', false);
      this._vis('tg-build-wrap-inner', false);
      this._vis('tg-colbtns', false);
      this._vis('tg-action-btns', false);
      this._vis('tg-timer', false);

      // FIX: Always re-enable all build buttons at start of new round
      this._enableBuildButtons(true);

      // Clear block containers
      var tb = document.getElementById('tg-tower-blocks');
      var bb = document.getElementById('tg-build-blocks');
      if (tb) tb.innerHTML = '';
      if (bb) bb.innerHTML = '';

      var oppEl = document.getElementById('tg-opp-status');
      if (oppEl) { oppEl.textContent = ''; oppEl.style.color = '#c0c0d8'; }
      var labelEl = document.getElementById('tg-tower-label');
      if (labelEl) labelEl.textContent = '';

      this._setStatus('Bereit?', '#c0c0d8', '18px');

      if (this.ctx.isHost) {
        var btn = document.getElementById('tg-start-btn');
        if (btn) btn.style.display = 'block';
        this.towerBlocks = generateTower(this.mini);
      }
      this._drawDots();
    },

    _countdown: function() {
      if (this.dead) return;
      var self = this, n = 3;
      this.phase = 'countdown';
      var startBtn = document.getElementById('tg-start-btn');
      if (startBtn) startBtn.style.display = 'none';
      var tick = function() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('', '#c0c0d8', '18px');
          if (self.ctx.isHost) {
            self.ctx.network.send('tg_sync_tower', { tower: self.towerBlocks });
            self._startShowTower();
          }
        }
      };
      tick();
    },

    _startShowTower: function() {
      if (this.dead) return;
      this.phase = 'showing';
      var self = this;

      var blocksEl = document.getElementById('tg-tower-blocks');
      if (blocksEl) blocksEl.innerHTML = '';
      this._vis('tg-tower-wrap', true);
      this._vis('tg-build-wrap-inner', false);

      var labelEl = document.getElementById('tg-tower-label');
      if (labelEl) labelEl.textContent = 'Turm baut sich auf...';
      this._setStatus('MERKE DIR DEN TURM!', '#f0c030', '18px');
      beep(550, 0.1, 'sine', 0.15);

      var idx = 0;
      var total = this.towerBlocks.length;

      // Blocks container uses flex-direction:column-reverse so appended items stack bottom-up:
      // First appended (index 0 = bottom block) sits at the bottom, each next on top.
      this._blockInterval = setInterval(function() {
        if (self.dead || self.phase !== 'showing') { clearInterval(self._blockInterval); return; }
        if (idx < total) {
          var colKey = self.towerBlocks[idx];
          var c = COLORS[colKey];
          var block = document.createElement('div');
          block.style.cssText = 'width:80px;height:' + BLOCK_H + 'px;background:' + c.hex + ';border-radius:3px;' +
            'box-shadow:0 0 10px ' + c.glow + ';opacity:0;transition:opacity .3s;flex-shrink:0;' +
            'display:flex;align-items:center;justify-content:center;' +
            'font-family:"Bebas Neue",sans-serif;font-size:13px;color:rgba(0,0,0,.65);letter-spacing:.08em;';
          block.textContent = c.name;
          blocksEl.appendChild(block);
          setTimeout(function() { block.style.opacity = '1'; }, 30);
          beep(280 + idx * 18, 0.08, 'triangle', 0.1);
          idx++;
        } else {
          clearInterval(self._blockInterval);
          if (labelEl) labelEl.textContent = 'Merke dir die Farben!';

          // 10-second countdown then collapse
          var secs = 10;
          self._buildCountdownInterval = setInterval(function() {
            secs--;
            if (secs <= 0) { clearInterval(self._buildCountdownInterval); return; }
            self._setStatus('NOCH ' + secs + ' SEK...', secs <= 3 ? '#f55a3a' : '#f0c030', '20px');
            if (secs <= 3) beep(330, 0.05, 'sine', 0.12);
          }, 1000);

          self._showTimer = setTimeout(function() {
            if (self.dead) return;
            clearInterval(self._buildCountdownInterval);
            self._collapseTower(blocksEl, function() {
              if (self.dead) return;
              self._vis('tg-tower-wrap', false);
              self._startBuilding();
            });
          }, 10000);
        }
      }, 3000);
    },

    // Collapse animation: blocks scatter and fade out
    _collapseTower: function(container, done) {
      var blocks = Array.from(container.children);
      if (!blocks.length) { if (done) done(); return; }
      beep(200, 0.3, 'sawtooth', 0.12);
      blocks.forEach(function(b, i) {
        var delay = i * 50;
        var dx = (Math.random() - 0.5) * 80;
        var dy = 20 + Math.random() * 70;
        setTimeout(function() {
          b.style.transition = 'transform .4s cubic-bezier(.4,0,1,1), opacity .4s';
          b.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + (dx * 0.7) + 'deg)';
          b.style.opacity = '0';
        }, delay);
      });
      setTimeout(function() {
        container.innerHTML = '';
        if (done) done();
      }, blocks.length * 50 + 500);
    },

    _collapsePlayerTower: function(done) {
      var container = document.getElementById('tg-build-blocks');
      if (!container) { if (done) done(); return; }
      beep(180, 0.25, 'sawtooth', 0.1);
      this._collapseTower(container, done);
    },

    _startBuilding: function() {
      if (this.dead) return;
      this.phase = 'building';
      this.playerTower = [];
      this._renderPlayerTower();

      this._vis('tg-build-wrap-inner', true);
      this._vis('tg-colbtns', true);
      this._vis('tg-action-btns', true);

      // FIX: Explicitly re-enable all build buttons every time building starts
      this._enableBuildButtons(true);

      var oppEl = document.getElementById('tg-opp-status');
      if (oppEl) { oppEl.textContent = ''; }
      var labelEl = document.getElementById('tg-tower-label');
      if (labelEl) labelEl.textContent = '';

      this._setStatus('BAUE DEN TURM NACH!', '#2af0a0', '18px');
      beep(660, 0.08, 'sine', 0.15);
    },

    // FIX: Central button enable/disable — prevents locked state across rounds
    _enableBuildButtons: function(enabled) {
      document.querySelectorAll('.tg-colbtn').forEach(function(b) {
        b.disabled = !enabled;
        b.style.opacity = enabled ? '1' : '.4';
        b.style.cursor = enabled ? 'pointer' : 'default';
      });
      var sb = document.getElementById('tg-submit-btn');
      var rb = document.getElementById('tg-reset-btn');
      if (sb) { sb.disabled = !enabled; sb.style.opacity = enabled ? '1' : '.4'; }
      if (rb) { rb.disabled = !enabled; rb.style.opacity = enabled ? '1' : '.4'; }
    },

    _addBlock: function(colKey) {
      if (this.phase !== 'building' || this._iDone || this.dead) return;
      this.playerTower.push(colKey);
      this._renderPlayerTower();
      var freqs = { ROT: 440, GELB: 550, BLAU: 330, GRÜN: 495 };
      beep(freqs[colKey] || 440, 0.06, 'sine', 0.12);
    },

    _renderPlayerTower: function() {
      var container = document.getElementById('tg-build-blocks');
      if (!container) return;
      container.innerHTML = '';
      // column-reverse: first appended (index 0 = bottom) appears at the bottom
      this.playerTower.forEach(function(colKey) {
        var c = COLORS[colKey];
        var block = document.createElement('div');
        block.style.cssText = 'width:80px;height:' + BLOCK_H + 'px;background:' + c.hex + ';border-radius:3px;' +
          'box-shadow:0 0 8px ' + c.glow + ';flex-shrink:0;' +
          'display:flex;align-items:center;justify-content:center;' +
          'font-family:"Bebas Neue",sans-serif;font-size:12px;color:rgba(0,0,0,.65);letter-spacing:.08em;';
        block.textContent = c.name;
        container.appendChild(block);
      });
    },

    _submitTower: function() {
      if (this.phase !== 'building' || this._iDone || this.dead) return;
      if (this.playerTower.length === 0) return;
      this._iDone = true;
      this._clearUrgencyTimer();
      this._vis('tg-timer', false);

      // Lock buttons after submit
      this._enableBuildButtons(false);

      this._setStatus('EINGELOGGT – WARTE AUF GEGNER...', '#f0c030', '16px');
      beep(770, 0.12, 'sine', 0.18);

      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (me === 'p1') {
        this._p1SubmitData = this.playerTower.slice();
        this.ctx.network.send('tg_opponent_done', {});
        this._tryResolve();
      } else {
        this.ctx.network.send('tg_p2_submit', { tower: this.playerTower.slice() });
        this.ctx.network.send('tg_opponent_done', {});
      }
    },

    _tryResolve: function() {
      if (!this.ctx.isHost) return;
      if (!this._p1SubmitData || !this._p2SubmitData) return;
      this._resolveRound(this._p1SubmitData, this._p2SubmitData);
    },

    _resolveRound: function(p1Tower, p2Tower) {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result';
      this._clearAllTimers();

      var correct = this.towerBlocks;
      var p1Correct = this._compareTowers(p1Tower, correct);
      var p2Correct = this._compareTowers(p2Tower, correct);

      if (!p1Correct) this.p1Errors++;
      if (!p2Correct) this.p2Errors++;

      // If both reach 3 errors at the same time, neither wins yet — keep playing!
      // Only end the game when exactly one player is at 3+ errors.
      var bothOver = this.p1Errors >= 3 && this.p2Errors >= 3;
      var gameOver = !bothOver && (this.p1Errors >= 3 || this.p2Errors >= 3);
      var winner = null;
      if (gameOver) {
        if (this.p1Errors >= 3) winner = 'p2';
        else winner = 'p1';
      }

      this.ctx.network.send('tg_result', {
        p1Correct: p1Correct, p2Correct: p2Correct,
        tower: correct, p1Submit: p1Tower, p2Submit: p2Tower,
        p1Errors: this.p1Errors, p2Errors: this.p2Errors,
        winner: winner
      });
      this._showResult(p1Correct, p2Correct, correct, p1Tower, p2Tower, winner);
    },

    _compareTowers: function(submitted, correct) {
      if (!submitted || submitted.length !== correct.length) return false;
      for (var i = 0; i < correct.length; i++) {
        if (submitted[i] !== correct[i]) return false;
      }
      return true;
    },

    _startUrgencyTimer: function() {
      var self = this;
      this._clearUrgencyTimer();
      this._countdownLeft = 30;
      var timerEl = document.getElementById('tg-timer');
      if (timerEl) { timerEl.textContent = '30'; timerEl.style.color = '#f0c030'; timerEl.style.visibility = 'visible'; }
      this._tickInterval = setInterval(function() {
        if (self.dead || self.phase !== 'building') { clearInterval(self._tickInterval); return; }
        self._countdownLeft--;
        if (timerEl) {
          timerEl.textContent = self._countdownLeft;
          if (self._countdownLeft <= 10) { timerEl.style.color = '#f55a3a'; beep(330, 0.04, 'sine', 0.1); }
        }
        if (self._countdownLeft <= 0) {
          clearInterval(self._tickInterval);
          if (!self._iDone) self._submitTower();
          if (self.ctx.isHost) self.ctx.network.send('tg_timeout', {});
        }
      }, 1000);
    },

    _clearUrgencyTimer: function() {
      clearInterval(this._tickInterval);
      this._tickInterval = null;
    },

    _clearAllTimers: function() {
      clearInterval(this._blockInterval);
      clearTimeout(this._showTimer);
      clearInterval(this._buildCountdownInterval);
      clearInterval(this._tickInterval);
      this.timers.forEach(clearTimeout);
      this.timers = [];
      this._blockInterval = null;
      this._showTimer = null;
      this._buildCountdownInterval = null;
      this._tickInterval = null;
    },

    // visibility helper — keeps layout stable (no display:none shifting)
    _vis: function(id, show) {
      var el = document.getElementById(id);
      if (el) el.style.visibility = show ? 'visible' : 'hidden';
    },

    // ─────────────────────────────────────────────────────────
    // RESULT OVERLAY
    // ─────────────────────────────────────────────────────────
    _showResult: function(p1Correct, p2Correct, tower, p1Sub, p2Sub, winner) {
      var self = this;
      this._vis('tg-timer', false);

      var ov = document.getElementById('tg-ov');
      var bothOver = !winner && (this.p1Errors >= 3 && this.p2Errors >= 3);
      var meCorrect = this.ctx.isHost ? p1Correct : p2Correct;

      // Icon + title
      if (bothOver) {
        // Both hit 3 simultaneously — nobody wins yet, keep playing!
        document.getElementById('tg-ov-ico').textContent = '⚡';
        document.getElementById('tg-ov-ttl').textContent = 'BEIDE FALSCH – WEITER!';
        document.getElementById('tg-ov-ttl').style.color = '#f0c030';
      } else if (p1Correct && p2Correct) {
        document.getElementById('tg-ov-ico').textContent = '🏆';
        document.getElementById('tg-ov-ttl').textContent = 'BEIDE RICHTIG!';
        document.getElementById('tg-ov-ttl').style.color = '#2af0a0';
      } else if (!p1Correct && !p2Correct) {
        document.getElementById('tg-ov-ico').textContent = '💥';
        document.getElementById('tg-ov-ttl').textContent = 'BEIDE FALSCH!';
        document.getElementById('tg-ov-ttl').style.color = '#f55a3a';
      } else {
        document.getElementById('tg-ov-ico').textContent = meCorrect ? '✅' : '❌';
        document.getElementById('tg-ov-ttl').textContent = meCorrect ? 'RICHTIG!' : 'FALSCH – ✗';
        document.getElementById('tg-ov-ttl').style.color = meCorrect ? '#2af0a0' : '#f55a3a';
      }

      // Correct tower — small horizontal row with position numbers
      var correctWrap = document.getElementById('tg-ov-correct-tower');
      correctWrap.innerHTML = '';
      var ctLabel = document.createElement('div');
      ctLabel.style.cssText = 'font-family:"Barlow Condensed",sans-serif;font-size:11px;letter-spacing:.3em;color:#c0c0d8;text-transform:uppercase;margin-bottom:6px;';
      ctLabel.textContent = 'Richtiger Turm – unten → oben (' + tower.length + ' Blöcke):';
      correctWrap.appendChild(ctLabel);
      var ctBlocks = document.createElement('div');
      ctBlocks.style.cssText = 'display:flex;flex-direction:row;gap:3px;flex-wrap:wrap;justify-content:center;align-items:flex-end;';
      tower.forEach(function(colKey, i) {
        var c = COLORS[colKey];
        var wrapper = document.createElement('div');
        wrapper.style.cssText = 'display:flex;flex-direction:column;align-items:center;gap:2px;';
        var b = document.createElement('div');
        b.style.cssText = 'width:34px;height:16px;background:' + c.hex + ';border-radius:2px;' +
          'box-shadow:0 0 5px ' + c.glow + ';display:flex;align-items:center;justify-content:center;' +
          'font-family:"Bebas Neue",sans-serif;font-size:8px;color:rgba(0,0,0,.65);';
        b.textContent = c.name;
        var num = document.createElement('div');
        num.style.cssText = 'font-family:"Barlow Condensed",sans-serif;font-size:9px;color:rgba(255,255,255,.3);';
        num.textContent = i + 1;
        wrapper.appendChild(b);
        wrapper.appendChild(num);
        ctBlocks.appendChild(wrapper);
      });
      correctWrap.appendChild(ctBlocks);

      // Player answer badges
      function answerBadge(name, colStr, submitted, isCorrect) {
        var icon = isCorrect ? '✓' : '✗';
        var iconColor = isCorrect ? '#2af0a0' : '#f55a3a';
        var rows = (submitted || []).map(function(colKey) {
          var c = COLORS[colKey];
          return '<div style="width:34px;height:14px;background:' + c.hex + ';border-radius:2px;margin:1px auto;' +
            'font-family:\'Bebas Neue\',sans-serif;font-size:8px;color:rgba(0,0,0,.65);' +
            'display:flex;align-items:center;justify-content:center;">' + c.name + '</div>';
        }).join('');
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:' + colStr + ';">' + name + '</div>' +
          '<div style="font-size:22px;color:' + iconColor + ';">' + icon + '</div>' +
          '<div style="display:flex;flex-direction:column-reverse;align-items:center;max-height:120px;overflow:hidden;">' + rows + '</div>' +
          '</div>';
      }

      document.getElementById('tg-ov-answers').innerHTML =
        answerBadge(this.ctx.p1Name, '#3ab4f5', p1Sub, p1Correct) +
        '<div style="color:#c0c0d8;padding-top:12px;font-size:14px;">VS</div>' +
        answerBadge(this.ctx.p2Name, '#f55a3a', p2Sub, p2Correct);

      // Score line
      var bothOver = !winner && (this.p1Errors >= 3 && this.p2Errors >= 3);
      var gameOver = !!winner; // only true when exactly one player has more errors
      var scoreHtml = '❌ ' + this.ctx.p1Name + ': ' + this.p1Errors + ' &nbsp;·&nbsp; ❌ ' + this.ctx.p2Name + ': ' + this.p2Errors + ' &nbsp;·&nbsp; Ziel: 3 Fehler';
      if (bothOver) {
        scoreHtml += ' &nbsp;·&nbsp; <span style="color:#f0c030;">⚡ Beide auf ' + this.p1Errors + ' – nächste Runde entscheidet!</span>';
      } else if (gameOver) {
        if (winner === 'p1') {
          scoreHtml += ' &nbsp;·&nbsp; <span style="color:#3ab4f5;">' + this.ctx.p1Name + ' GEWINNT! 🏆</span>';
        } else {
          scoreHtml += ' &nbsp;·&nbsp; <span style="color:#f55a3a;">' + this.ctx.p2Name + ' GEWINNT! 🏆</span>';
        }
      }
      document.getElementById('tg-ov-sc').innerHTML = scoreHtml;

      var btn = document.getElementById('tg-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE';
      ov.style.display = 'flex';
      this._drawDots();

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('tg_next', { gameOver: gameOver, winner: winner || null });
          if (gameOver) { self._finish(winner); }
          else { self.mini++; self._startMini(); ov.style.display = 'none'; }
        };
      } else {
        btn.style.display = 'none';
      }
    },

    // ─────────────────────────────────────────────────────────
    // DOTS & HELPERS
    // ─────────────────────────────────────────────────────────
    _drawDots: function() {
      var el = document.getElementById('tg-dots'); if (!el) return;
      var d1 = '', d2 = '';
      var maxDots = Math.max(3, this.p1Errors, this.p2Errors);
      var bs = 'display:inline-block;width:12px;height:12px;border-radius:50%;margin:0 2px;border:2px solid ';
      for (var i = 0; i < maxDots; i++) {
        // Dots beyond 3 are "overtime" — shown in orange
        var overtime = i >= 3;
        d1 += '<span style="' + bs + (i < this.p1Errors
          ? (overtime ? '#f0c030;background:#f0c030' : '#f55a3a;background:#f55a3a')
          : (overtime ? 'rgba(240,192,48,.15)' : 'rgba(245,90,58,.2)')) + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Errors
          ? (overtime ? '#f0c030;background:#f0c030' : '#f55a3a;background:#f55a3a')
          : (overtime ? 'rgba(240,192,48,.15)' : 'rgba(245,90,58,.2)')) + '"></span>';
      }
      var diff = this.mini <= 5 ? '★☆☆' : (this.mini <= 9 ? '★★☆' : '★★★');
      var overtime = this.p1Errors >= 3 && this.p2Errors >= 3;
      var label = 'RUNDE ' + this.mini + ' ' + diff + (overtime ? ' ⚡' : '');
      el.innerHTML = d1 +
        '<span style="color:#c0c0d8;margin:0 10px;font-size:11px;font-family:\'Barlow Condensed\',sans-serif;letter-spacing:.2em;">' + label + '</span>' +
        d2;
    },

    _setStatus: function(t, c, s) {
      var el = document.getElementById('tg-status');
      if (el) { el.textContent = t; el.style.color = c || '#c0c0d8'; el.style.fontSize = s || '18px'; }
    },

    _finish: function(winner) {
      this.dead = true;
      // winner should always be 'p1' or 'p2' at this point — no draws
      var w = winner || (this.p1Errors < this.p2Errors ? 'p1' : 'p2');
      this.onEnd({ winner: w, details: this.ctx.p1Name + ': ' + this.p1Errors + ' Fehler · ' + this.ctx.p2Name + ': ' + this.p2Errors + ' Fehler' });
    },

    destroy: function() {
      this.dead = true;
      this._clearAllTimers();
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id: 'turm-bauen',
    name: 'Turmgedächtnis',
    description: 'Ein Turm aus farbigen Blöcken erscheint – merke dir die Reihenfolge von unten nach oben! Dann baue ihn nach. 3 Fehler = verloren. Steigender Schwierigkeitsgrad!',
    init: function(container, ctx, onEnd) { this._instance = new TurmgedächtnisInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
