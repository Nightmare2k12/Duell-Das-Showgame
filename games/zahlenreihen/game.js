/**
 * games/zahlenreihen/game.js
 *
 * Ablauf pro Mini-Runde:
 * 1. Host klickt auf "Spiel starten".
 * 2. Beide erhalten das Signal für den Countdown (3, 2, 1).
 * 3. Nach dem Countdown sendet der Host die Zahlenreihe via sync_sequence.
 * 4. Beide sehen die Reihe — Buzzer sind aktiv. Timer (2 Min) startet.
 * 5. Wer zuerst buzzert, darf antworten. Host wertet aus.
 * 6. Wenn der Timer abläuft, gibt es ein Unentschieden.
 */
(function () {

  // ═══════════════════════════════════════════════════════════
  // ZAHLENREIHEN-DATENBANK
  // ═══════════════════════════════════════════════════════════
  var SEQUENCES = [
    { seq: [2,  4,  6,  8,  10],   answer: 12,  rule: '+2'              },
    { seq: [5,  10, 15, 20, 25],   answer: 30,  rule: '+5'              },
    { seq: [1,  4,  7,  10, 13],   answer: 16,  rule: '+3'              },
    { seq: [100,91, 82, 73, 64],   answer: 55,  rule: '-9'              },
    { seq: [2,  4,  8,  16, 32],   answer: 64,  rule: 'x2'             },
    { seq: [64, 32, 16, 8,  4],    answer: 2,   rule: '/2'             },
    { seq: [1,  2,  4,  7,  11],   answer: 16,  rule: '+1,+2,+3...'    },
    { seq: [1,  1,  2,  3,  5],    answer: 8,   rule: 'Fibonacci'      },
    { seq: [2,  3,  5,  7,  11],   answer: 13,  rule: 'Primzahlen'     },
    { seq: [3,  9,  27, 81, 243],  answer: 729, rule: 'x3'             },
    { seq: [1,  3,  6,  10, 15],   answer: 21,  rule: 'Dreieckszahlen'},
    { seq: [2,  5,  10, 17, 26],   answer: 37,  rule: '+3,+5,+7...'    },
    { seq: [10, 20, 30, 40, 50],   answer: 60,  rule: '+10'             },
    // --- LEICHT: Einfache Addition & Subtraktion ---
    { seq: [3,  7,  11, 15, 19],   answer: 23,  rule: '+4'              },
    { seq: [50, 44, 38, 32, 26],   answer: 20,  rule: '-6'              },
    { seq: [12, 19, 26, 33, 40],   answer: 47,  rule: '+7'              },
    { seq: [9,  17, 25, 33, 41],   answer: 49,  rule: '+8'              },
    { seq: [88, 77, 66, 55, 44],   answer: 33,  rule: '-11'             },
    { seq: [4,  16, 28, 40, 52],   answer: 64,  rule: '+12'             },
    { seq: [100, 85, 70, 55, 40],  answer: 25,  rule: '-15'             },
    { seq: [1.5, 3, 4.5, 6, 7.5],  answer: 9,   rule: '+1.5'            },
    { seq: [21, 32, 43, 54, 65],   answer: 76,  rule: '+11'             },
    { seq: [15, 23, 31, 39, 47],   answer: 55,  rule: '+8'              },

    // --- LEICHT: Multiplikation & Division ---
    { seq: [1,  4,  16, 64, 256],  answer: 1024, rule: 'x4'             },
    { seq: [5,  15, 45, 135, 405], answer: 1215, rule: 'x3'             },
    { seq: [1000, 500, 250, 125, 62.5], answer: 31.25, rule: '/2'       },
    { seq: [2,  6,  18, 54, 162],  answer: 486, rule: 'x3'              },
    { seq: [81, 27, 9, 3, 1],      answer: 1/3, rule: '/3'              },

    // --- MITTEL: Steigende/Fallende Differenzen ---
    { seq: [10, 11, 13, 16, 20],   answer: 25,  rule: '+1, +2, +3...'  },
    { seq: [50, 49, 47, 44, 40],   answer: 35,  rule: '-1, -2, -3...'  },
    { seq: [2,  4,  7,  11, 16],   answer: 22,  rule: '+2, +3, +4...'  },
    { seq: [0,  5,  15, 30, 50],   answer: 75,  rule: '+5, +10, +15...'},
    { seq: [100, 98, 94, 88, 80],  answer: 70,  rule: '-2, -4, -6...'  },
    { seq: [1,  3,  7,  15, 31],   answer: 63,  rule: '+2, +4, +8...'  },
    { seq: [2,  6,  12, 20, 30],   answer: 42,  rule: '+4, +6, +8...'  },
    { seq: [10, 20, 35, 55, 80],   answer: 110, rule: '+10, +15, +20..'},

    // --- MITTEL: Abwechselnde Operationen (Springend) ---
    { seq: [5,  10, 8,  13, 11],   answer: 16,  rule: '+5, -2'         },
    { seq: [2,  6,  3,  9,  4.5],  answer: 13.5, rule: 'x3, /2'         },
    { seq: [20, 22, 11, 13, 6.5],  answer: 8.5, rule: '+2, /2'         },
    { seq: [1,  11, 2,  12, 3],    answer: 13,  rule: '+10, -9'         },
    { seq: [10, 20, 18, 36, 34],   answer: 68,  rule: 'x2, -2'         },
    { seq: [100, 50, 55, 27.5, 32.5], answer: 16.25, rule: '/2, +5'    },
    { seq: [1,  2,  5,  6,  9],    answer: 10,  rule: '+1, +3'         },

    // --- MITTEL: Quadratzahlen & Verwandte ---
    { seq: [1,  4,  9,  16, 25],   answer: 36,  rule: 'Quadratzahlen'  },
    { seq: [0,  3,  8,  15, 24],   answer: 35,  rule: 'Quadrat - 1'    },

    // --- MIX: Logik-Check ---
    { seq: [7,  14, 21, 28, 35],   answer: 42,  rule: '7er Reihe'      },
    { seq: [12, 24, 36, 48, 60],   answer: 72,  rule: '+12'             },
    { seq: [1,  2,  4,  8,  16],   answer: 32,  rule: 'Verdoppeln'      },
    { seq: [90, 81, 72, 63, 54],   answer: 45,  rule: '-9'              },
    { seq: [11, 22, 33, 44, 55],   answer: 66,  rule: '+11'             },
    { seq: [80, 40, 20, 10, 5],    answer: 2.5, rule: '/2'              }
  ];

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

  function ZahlenreihenInstance(container, ctx, onEnd) {
    this.container    = container;
    this.ctx          = ctx;
    this.onEnd        = onEnd;
    this.dead           = false;
    this.mini           = 1;
    this.p1Wins       = 0;
    this.p2Wins       = 0;
    this.timers       = [];
    this.usedIdx      = [];
    this._answerTimer = null;
    this._roundTimer  = null;
    this._timeInterval= null; // NEU: Intervall für die visuelle Anzeige
    this.timeLeft     = 120;  // NEU: Verbleibende Sekunden
    this.phase        = 'idle'; 
    this.currentSeq   = null;
    this.buzzer       = null;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  ZahlenreihenInstance.prototype = {

    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'zr-root';
      root.style.cssText = 'width:100%;height:100%;background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:16px;box-sizing:border-box;font-family:"Bebas Neue",sans-serif;';

      root.innerHTML = [
        '<div id="zr-ring" style="position:absolute;pointer-events:none;width:520px;height:520px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.05);transition:all .4s;"></div>',
        '<div id="zr-dots" style="display:flex;align-items:center;gap:20px;margin-bottom:20px;min-height:30px;"></div>',
        '<div style="text-align:center;margin-bottom:4px;"><div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:12px;">Welche Zahl kommt als nächstes?</div><div id="zr-seq" style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;min-height:90px;"></div></div>',
        
        // NEU: Timer-Anzeige UI
        '<div id="zr-round-time" style="font-size:28px;color:#f0c030;letter-spacing:.1em;margin-bottom:10px;display:none;font-weight:bold;">2:00</div>',

        '<div id="zr-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:24px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:34px;margin:4px 0 18px;text-align:center;transition:color .2s;"></div>',
        
        '<button id="zr-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-bottom:18px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">SPIEL STARTEN</button>',

        '<div id="zr-answer-area" style="display:none;flex-direction:column;align-items:center;gap:10px;margin-bottom:18px;"><div id="zr-answer-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.25em;color:#f0c030;text-transform:uppercase;"></div><div style="display:flex;gap:10px;align-items:center;"><input id="zr-input" type="number" inputmode="decimal" step="any" style="background:#0d0d1c;border:2px solid #f0c030;color:#f0c030;font-family:\'Bebas Neue\',sans-serif;font-size:42px;letter-spacing:.06em;text-align:center;width:160px;padding:8px 10px;outline:none;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));" placeholder="?"><button id="zr-submit" style="background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;letter-spacing:.15em;padding:14px 30px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">OK</button></div><div style="width:240px;height:5px;background:rgba(255,255,255,.06);border-radius:3px;overflow:hidden;"><div id="zr-timebar" style="height:100%;width:100%;background:#f0c030;transition:width linear;border-radius:3px;"></div></div></div>',
        '<div style="display:flex;align-items:flex-start;gap:clamp(20px,5vw,70px);"><div style="display:flex;flex-direction:column;align-items:center;gap:10px;"><div id="zr-n1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.3em;color:#3ab4f5;text-transform:uppercase;"></div><button id="zr-b1" style="width:clamp(100px,15vw,155px);height:clamp(100px,15vw,155px);border-radius:50%;background:radial-gradient(circle at 36% 30%,#65d5ff,#0b5a9e);border:4px solid #3ab4f5;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:19px;letter-spacing:.2em;cursor:pointer;outline:none;box-shadow:0 6px 28px rgba(58,180,245,.22);transition:transform .08s,opacity .2s;user-select:none;">BUZZ</button><div id="zr-w1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;">0 Punkte</div></div><div style="font-family:\'Bebas Neue\',sans-serif;font-size:28px;color:rgba(255,255,255,.05);padding-top:50px;">VS</div><div style="display:flex;flex-direction:column;align-items:center;gap:10px;"><div id="zr-n2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.3em;color:#f55a3a;text-transform:uppercase;"></div><button id="zr-b2" style="width:clamp(100px,15vw,155px);height:clamp(100px,15vw,155px);border-radius:50%;background:radial-gradient(circle at 36% 30%,#ff7a58,#a81508);border:4px solid #f55a3a;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:19px;letter-spacing:.2em;cursor:pointer;outline:none;box-shadow:0 6px 28px rgba(245,90,58,.22);transition:transform .08s,opacity .2s;user-select:none;">BUZZ</button><div id="zr-w2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;">0 Punkte</div></div></div>',
        '<div id="zr-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;padding:28px;"><div id="zr-ov-ico" style="font-size:54px;"></div><div id="zr-ov-ttl" style="font-size:clamp(30px,7vw,58px);color:#f0c030;"></div><div id="zr-ov-det" style="font-family:\'Barlow Condensed\',sans-serif;font-size:17px;color:#a0a0bc;text-transform:uppercase;"></div><div id="zr-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;"></div><button id="zr-ov-btn" style="margin-top:10px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:21px;padding:13px 42px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">WEITER →</button></div>'
      ].join('');

      this.container.appendChild(root);

      document.getElementById('zr-n1').textContent = this.ctx.p1Name;
      document.getElementById('zr-n2').textContent = this.ctx.p2Name;

      var startBtn = document.getElementById('zr-start-btn');
      if (this.ctx.isHost) {
        startBtn.addEventListener('click', function() {
          startBtn.style.display = 'none';
          self.ctx.network.send('zr_start_countdown', {});
          self._countdown();
        });
      }

      document.getElementById('zr-b1').addEventListener('pointerdown', function(e) { e.preventDefault(); if(self.ctx.isHost) self._localBuzz(); });
      document.getElementById('zr-b2').addEventListener('pointerdown', function(e) { e.preventDefault(); if(!self.ctx.isHost) self._localBuzz(); });
      document.getElementById('zr-submit').addEventListener('click', function() { self._submitAnswer(); });
      document.getElementById('zr-input').addEventListener('keydown', function(e) { if(e.key==='Enter') self._submitAnswer(); });

      this._drawDots();
    },

    _startMini: function() {
      if (this.dead) return;
      this.phase = 'idle';
      this.buzzer = null;
      if (this._roundTimer) clearTimeout(this._roundTimer); 
      if (this._timeInterval) clearInterval(this._timeInterval); // UI Timer stoppen
      
      var timeEl = document.getElementById('zr-round-time');
      if (timeEl) timeEl.style.display = 'none'; // Timer verstecken bis es losgeht

      this._setStatus('Bereit?', '#c0c0d8', '18px');
      document.getElementById('zr-seq').innerHTML = '';
      
      if (this.ctx.isHost) {
        var startBtn = document.getElementById('zr-start-btn');
        if (startBtn) startBtn.style.display = 'block';

        if (this.usedIdx.length >= SEQUENCES.length) this.usedIdx = [];
        var idx;
        do { idx = Math.floor(Math.random() * SEQUENCES.length); } while(this.usedIdx.indexOf(idx) !== -1);
        this.usedIdx.push(idx);
        this.currentSeq = SEQUENCES[idx];
      }
    },

    _countdown: function() {
      if (this.dead) return;
      var self = this;
      this.phase = 'countdown';
      var n = 3;
      
      var btn = document.getElementById('zr-start-btn');
      if(btn) btn.style.display = 'none';

      var tick = function() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '42px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          if (self.ctx.isHost) self._sendSequence();
        }
      };
      tick();
    },

    _sendSequence: function() {
      if (!this.ctx.isHost || !this.currentSeq) return;
      this.ctx.network.send('sync_sequence', { seq: this.currentSeq.seq, answer: this.currentSeq.answer, rule: this.currentSeq.rule, mini: this.mini });
      this._renderSequence(this.currentSeq.seq);
      this._activateBuzzers();
    },

    _renderSequence: function(seq) {
      var el = document.getElementById('zr-seq');
      if (!el) return;
      var numCSS = 'display:inline-flex;align-items:center;justify-content:center;font-size:clamp(40px,8vw,72px);color:#f0c030;min-width:clamp(52px,9vw,84px);padding:0 4px;';
      var sepCSS = 'font-family:"Barlow Condensed",sans-serif;font-size:clamp(22px,4vw,38px);color:rgba(240,192,48,.22);padding:0 2px;';
      
      var html = '';
      for (var i = 0; i < seq.length; i++) {
        if (i > 0) html += '<span style="' + sepCSS + '">—</span>';
        html += '<span style="' + numCSS + '">' + seq[i] + '</span>';
      }
      html += '<span style="' + sepCSS + '">—</span>';
      html += '<span style="' + numCSS + 'color:#2af0a0;border:2px solid rgba(42,240,160,.3);border-radius:8px;">?</span>';
      el.innerHTML = html;
    },

    _activateBuzzers: function() {
      var self = this;
      this.phase = 'buzzing';
      this._setBuzzer('p1', 'active');
      this._setBuzzer('p2', 'active');
      this._setStatus('BUZZERN!', '#2af0a0', '22px');
      beep(660, 0.12, 'sine', 0.15);

      // --- NEU: Visuelle UI für den 2-Minuten Timer starten ---
      var timeEl = document.getElementById('zr-round-time');
      if (timeEl) {
        timeEl.style.display = 'block';
        timeEl.style.color = '#f0c030';
        timeEl.textContent = '2:00';
      }
      this.timeLeft = 120; // 120 Sekunden = 2 Minuten
      if (this._timeInterval) clearInterval(this._timeInterval);
      
      this._timeInterval = setInterval(function() {
        if (self.dead || self.phase !== 'buzzing') {
          clearInterval(self._timeInterval);
          return;
        }
        self.timeLeft--;
        if (self.timeLeft <= 0) self.timeLeft = 0;

        var m = Math.floor(self.timeLeft / 60);
        var s = self.timeLeft % 60;
        if (timeEl) {
          timeEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
          if (self.timeLeft <= 10) {
            timeEl.style.color = '#f55a3a'; // Rot, wenn 10s oder weniger
          }
        }
      }, 1000);

      // Versteckter Logik-Timer (Nur Host löst Timeout nach exakt 2 Min. aus)
      if (this.ctx.isHost) {
        if (this._roundTimer) clearTimeout(this._roundTimer);
        this._roundTimer = setTimeout(function() {
          self._handleRoundTimeout();
        }, 120000); 
      }
    },

    _handleRoundTimeout: function() {
      if (this.phase !== 'buzzing' || this.dead) return;
      this.phase = 'timeout';
      if (this._timeInterval) clearInterval(this._timeInterval); // UI-Timer Stoppen

      this.ctx.network.send('zr_timeout', {
        correct: this.currentSeq.answer,
        rule: this.currentSeq.rule
      });

      this._showResult('none', null, false, null, this.currentSeq.answer, this.currentSeq.rule);
    },

    _localBuzz: function() {
      if (this.phase !== 'buzzing' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      this.buzzer = me;
      this.phase = 'answering';
      this.ctx.network.send('buzzer_pressed', { player: me });
      this._onBuzzed(me, true);
    },

    _onBuzzed: function(player, isMe) {
      if (this._roundTimer) clearTimeout(this._roundTimer); 
      if (this._timeInterval) clearInterval(this._timeInterval); // UI-Timer stoppen, wenn gebuzzert wird

      var color = player === 'p1' ? '#3ab4f5' : '#f55a3a';
      this._setBuzzer(player, 'buzzed');
      this._setBuzzer(player === 'p1' ? 'p2' : 'p1', 'off');
      beep(880, 0.08, 'square', 0.2);

      if (isMe) {
        this._showAnswerArea(player === 'p1' ? this.ctx.p1Name : this.ctx.p2Name, color);
      } else {
        this._setStatus(esc(player === 'p1' ? this.ctx.p1Name : this.ctx.p2Name) + ' antwortet...', color, '22px');
      }
    },

    _showAnswerArea: function(name, color) {
      var self = this;
      var area = document.getElementById('zr-answer-area');
      var input = document.getElementById('zr-input');
      var timebar = document.getElementById('zr-timebar');
      
      document.getElementById('zr-answer-label').textContent = 'Deine Antwort, ' + esc(name) + ':';
      document.getElementById('zr-answer-label').style.color = color;
      document.getElementById('zr-submit').style.background = color;
      input.value = '';
      input.style.borderColor = color;
      area.style.display = 'flex';
      
      setTimeout(function() { if(input) input.focus(); }, 50);

      timebar.style.transition = 'none';
      timebar.style.width = '100%';
      setTimeout(function() { timebar.style.transition = 'width 10s linear'; timebar.style.width = '0%'; }, 50);

      this._answerTimer = setTimeout(function() { self._submitAnswer(true); }, 10000);
    },

    _submitAnswer: function(isTimeout) {
      if (this.phase !== 'answering' || this.dead) return;
      if (this.buzzer !== (this.ctx.isHost ? 'p1' : 'p2')) return;

      if (this._answerTimer) clearTimeout(this._answerTimer);
      document.getElementById('zr-answer-area').style.display = 'none';

      var val = parseFloat(document.getElementById('zr-input').value);
      var correct = this.currentSeq.answer;
      var isRight = !isTimeout && val === correct;

      this.ctx.network.send('submit_answer', {
        player: this.buzzer,
        answer: val,
        correct: isRight,
        rightAnswer: correct,
        rule: this.currentSeq.rule
      });

      if (this.ctx.isHost) this._evaluate(this.buzzer, isRight, val, correct, this.currentSeq.rule);
    },

    _evaluate: function(p, isRight, given, correct, rule) {
      var pointWinner = isRight ? p : (p === 'p1' ? 'p2' : 'p1');
      if (pointWinner === 'p1') this.p1Wins++; else this.p2Wins++;

      this.ctx.network.send('zr_result', {
        pointWinner: pointWinner, buzzerPlayer: p, isRight: isRight,
        given: given, correct: correct, rule: rule,
        p1Wins: this.p1Wins, p2Wins: this.p2Wins
      });

      this._showResult(pointWinner, p, isRight, given, correct, rule);
    },

    _showResult: function(pw, bp, isRight, given, correct, rule) {
      var self = this;
      var ov = document.getElementById('zr-ov');

      if (pw === 'none') {
        document.getElementById('zr-ov-ico').textContent = '⏳';
        document.getElementById('zr-ov-ttl').textContent = 'UNENTSCHIEDEN';
        document.getElementById('zr-ov-ttl').style.color = '#aaaacc';
        document.getElementById('zr-ov-det').innerHTML = 'Zeit abgelaufen! Lösung: <span style="color:#f0c030">' + correct + '</span> (' + esc(rule) + ')';
      } else {
        document.getElementById('zr-ov-ico').textContent = isRight ? '✅' : '❌';
        document.getElementById('zr-ov-ttl').textContent = esc(pw === 'p1' ? this.ctx.p1Name : this.ctx.p2Name) + ' +1 Punkt!';
        document.getElementById('zr-ov-ttl').style.color = pw === 'p1' ? '#3ab4f5' : '#f55a3a';
        document.getElementById('zr-ov-det').innerHTML = 'Antwort: <span style="color:#f0c030">' + correct + '</span> (' + esc(rule) + ')';
      }
      
      document.getElementById('zr-ov-sc').textContent = this.p1Wins + ' : ' + this.p2Wins;
      
      ov.style.display = 'flex';
      this._drawDots();

      var btn = document.getElementById('zr-ov-btn');
      var gameOver = this.p1Wins >= 3 || this.p2Wins >= 3;
      btn.textContent = gameOver ? 'ERGEBNIS' : 'NÄCHSTE RUNDE';
      
      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('zr_next', { gameOver: gameOver });
          if (gameOver) self._finish(); else { self.mini++; self._startMini(); ov.style.display = 'none'; }
        };
      } else {
        btn.style.display = 'none';
      }
    },

    _setupNet: function() {
      var self = this;
      this.ctx.network.on('zr_start_countdown', function() { if(!self.ctx.isHost) self._countdown(); });
      this.ctx.network.on('sync_sequence', function(msg) {
        if (self.ctx.isHost) return;
        self.currentSeq = { seq: msg.seq, answer: msg.answer, rule: msg.rule };
        self._renderSequence(msg.seq);
        self._activateBuzzers();
      });
      this.ctx.network.on('buzzer_pressed', function(msg) {
        if (msg.player !== (self.ctx.isHost ? 'p1' : 'p2')) {
          self.buzzer = msg.player; self.phase = 'answering'; self._onBuzzed(msg.player, false);
        }
      });
      this.ctx.network.on('submit_answer', function(msg) {
        if (self.ctx.isHost) self._evaluate(msg.player, msg.correct, msg.answer, msg.rightAnswer, msg.rule);
      });
      this.ctx.network.on('zr_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._showResult(msg.pointWinner, msg.buzzerPlayer, msg.isRight, msg.given, msg.correct, msg.rule);
      });
      this.ctx.network.on('zr_timeout', function(msg) {
        if (self.ctx.isHost) return;
        if (self._roundTimer) clearTimeout(self._roundTimer);
        if (self._timeInterval) clearInterval(self._timeInterval);
        self._showResult('none', null, false, null, msg.correct, msg.rule);
      });
      this.ctx.network.on('zr_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._finish(); else { self.mini++; self._startMini(); document.getElementById('zr-ov').style.display = 'none'; }
      });
    },

    _setBuzzer: function(p, state) {
      var btn = document.getElementById(p === 'p1' ? 'zr-b1' : 'zr-b2');
      if (!btn) return;
      btn.style.opacity = state === 'active' ? '1' : (state === 'buzzed' ? '0.5' : '0.2');
      btn.style.transform = state === 'buzzed' ? 'scale(0.9)' : 'scale(1)';
    },

    _drawDots: function() {
      var el = document.getElementById('zr-dots');
      if (!el) return;
      var d1 = '', d2 = '', bs = 'display:inline-block;width:12px;height:12px;border-radius:50%;margin:0 3px;border:2px solid ';
      for (var i = 0; i < 3; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML = d1 + '<span style="color:#2a2a40;margin:0 10px">RUNDE ' + this.mini + '</span>' + d2;
      document.getElementById('zr-w1').textContent = this.p1Wins + ' Siege';
      document.getElementById('zr-w2').textContent = this.p2Wins + ' Siege';
    },

    _setStatus: function(t, c, s) {
      var el = document.getElementById('zr-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    _finish: function() {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= 3 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },

    destroy: function() {
      this.dead = true;
      this.timers.forEach(clearTimeout);
      if (this._roundTimer) clearTimeout(this._roundTimer);
      if (this._answerTimer) clearTimeout(this._answerTimer);
      if (this._timeInterval) clearInterval(this._timeInterval); // Clear UI Timer
      this.ctx.network.off('zr_start_countdown');
      this.ctx.network.off('sync_sequence');
      this.ctx.network.off('buzzer_pressed');
      this.ctx.network.off('submit_answer');
      this.ctx.network.off('zr_result');
      this.ctx.network.off('zr_timeout');
      this.ctx.network.off('zr_next');
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTRIERUNG (NEU HINZUGEFÜGT)
  // ═══════════════════════════════════════════════════════════
  var reg = function() {
    if (typeof GamePool !== 'undefined') {
      GamePool.register({
        id: 'zahlenreihen',
        name: 'Zahlenreihen',
        description: 'Welche Zahl kommt als nächstes? Finde das Muster der Zahlenreihe heraus. Wer zuerst buzzert und die richtige Antwort eintippt, punktet!',
        init: function(container, ctx, onEnd) {
          this._instance = new ZahlenreihenInstance(container, ctx, onEnd);
        },
        destroy: function() {
          if (this._instance) { 
            this._instance.destroy(); 
            this._instance = null; 
          }
        }
      });
    } else {
      setTimeout(reg, 100); // Warte 100ms falls GamePool noch nicht geladen ist
    }
  };
  reg();

})();