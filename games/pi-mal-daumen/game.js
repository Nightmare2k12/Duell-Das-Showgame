(function () {

  // ═══════════════════════════════════════════════════════════
  // FRAGEN-DATENBANK  –  100 Schätzfragen
  // ═══════════════════════════════════════════════════════════
  var QUESTIONS = [
    // ── Film & TV
    { question: 'In welchem Jahr erschien der erste „Star Wars"-Film im Kino?', answer: 1977, unit: '' },
    { question: 'Wie viele Folgen hat die Originalserie „Friends" insgesamt?', answer: 236, unit: '' },
    { question: 'In welchem Jahr wurde der erste Harry-Potter-Film veröffentlicht?', answer: 2001, unit: '' },
    { question: 'Wie viele Oscars gewann „Titanic" (1997)?', answer: 11, unit: '' },
    { question: 'Wie viele Episoden hat „Game of Thrones" insgesamt?', answer: 73, unit: '' },
    { question: 'In welchem Jahr kam der erste „Herr der Ringe"-Film ins Kino?', answer: 2001, unit: '' },
    { question: 'Wie lange dauert der Film „Avengers: Endgame" in Minuten?', answer: 181, unit: ' Min.' },
    { question: 'In welchem Jahr startete Netflix seinen Streaming-Dienst?', answer: 2007, unit: '' },
    // ── Games & Technik
    { question: 'Wie viele Pokémon gab es in der allerersten Generation (Rot/Blau)?', answer: 151, unit: '' },
    { question: 'In welchem Jahr erschien das erste iPhone?', answer: 2007, unit: '' },
    { question: 'Wie viele Bit hatte der Nintendo 64?', answer: 64, unit: ' Bit' },
    { question: 'In welchem Jahr wurde Minecraft erstmals veröffentlicht?', answer: 2009, unit: '' },
    { question: 'Wie viele Spieler starten in einem Standard-Match von „Fortnite Battle Royale"?', answer: 100, unit: '' },
    { question: 'Wie viele Tasten hat eine Standard-PC-Tastatur (US-Layout)?', answer: 104, unit: '' },
    { question: 'In welchem Jahr kam die erste PlayStation auf den Markt (Japan)?', answer: 1994, unit: '' },
    { question: 'Wie viele GB hat eine Standard-Blu-ray-Disc (Single Layer)?', answer: 25, unit: ' GB' },
    // ── Musik
    { question: 'In welchem Jahr erschien Michael Jacksons Album „Thriller"?', answer: 1982, unit: '' },
    { question: 'Wie viele Nummer-1-Singles hatten die Beatles in den UK-Charts?', answer: 17, unit: '' },
    { question: 'Wie viele Gitarrensaiten hat eine Standard-E-Gitarre?', answer: 6, unit: '' },
    { question: 'In welchem Jahr fand das erste Woodstock-Festival statt?', answer: 1969, unit: '' },
    { question: 'Wie viele Tasten hat ein Standard-Klavier?', answer: 88, unit: '' },
    { question: 'Wie viele Grammys hat Beyoncé insgesamt gewonnen (Stand 2023)?', answer: 32, unit: '' },
    // ── Sport
    { question: 'In welchem Jahr fand die erste FIFA Fußball-Weltmeisterschaft statt?', answer: 1930, unit: '' },
    { question: 'Wie viele Spieler stehen bei einem Fußball-Spiel gleichzeitig auf dem Feld (beide Teams)?', answer: 22, unit: '' },
    { question: 'Wie viele Punkte ist ein Touchdown im American Football wert?', answer: 6, unit: '' },
    { question: 'Wie lang ist eine Marathonstrecke in Kilometern (gerundet)?', answer: 42, unit: ' km' },
    { question: 'Wie viele Ringe hat das Olympische Symbol?', answer: 5, unit: '' },
    { question: 'In welchem Jahr fanden die ersten modernen Olympischen Spiele statt?', answer: 1896, unit: '' },
    { question: 'Wie viele Spieler sind in einer Basketball-Mannschaft auf dem Feld?', answer: 5, unit: '' },
    { question: 'Wie viele Zentimeter misst das Tennisnetz in der Mitte?', answer: 91, unit: ' cm' },
    // ── Geografie
    { question: 'Wie viele Länder gibt es auf dem afrikanischen Kontinent?', answer: 54, unit: '' },
    { question: 'Wie viele Bundesländer hat Deutschland?', answer: 16, unit: '' },
    { question: 'Wie viele Zeitzonen hat Russland?', answer: 11, unit: '' },
    { question: 'Wie viele Kilometer lang ist die Chinesische Mauer ungefähr?', answer: 21000, unit: ' km' },
    { question: 'In welchem Jahr wurde die Berliner Mauer gebaut?', answer: 1961, unit: '' },
    { question: 'Wie viele Einwohner hat die Stadt Tokio ungefähr (in Millionen)?', answer: 14, unit: ' Mio.' },
    { question: 'Wie hoch ist der Mount Everest in Metern (gerundet)?', answer: 8849, unit: ' m' },
    { question: 'Wie viele Kilometer lang ist der Nil (ca.)?', answer: 6650, unit: ' km' },
    // ── Geschichte
    { question: 'In welchem Jahr endete der Zweite Weltkrieg?', answer: 1945, unit: '' },
    { question: 'In welchem Jahr landete der erste Mensch auf dem Mond?', answer: 1969, unit: '' },
    { question: 'In welchem Jahr fiel die Berliner Mauer?', answer: 1989, unit: '' },
    { question: 'In welchem Jahr begann die Französische Revolution?', answer: 1789, unit: '' },
    { question: 'Wie viele Jahre dauerte der Erste Weltkrieg?', answer: 4, unit: ' Jahre' },
    { question: 'In welchem Jahr wurde die Deutsche Einheit vollzogen?', answer: 1990, unit: '' },
    { question: 'In welchem Jahr entdeckte Kolumbus Amerika?', answer: 1492, unit: '' },
    { question: 'Wie viele Päpste gab es im 20. Jahrhundert?', answer: 7, unit: '' },
    // ── Natur & Wissenschaft
    { question: 'Wie viele Zähne hat ein erwachsener Mensch (Weisheitszähne eingeschlossen)?', answer: 32, unit: '' },
    { question: 'Wie viele Knochen hat der menschliche Körper (Erwachsener)?', answer: 206, unit: '' },
    { question: 'Bei wie viel Grad Celsius siedet Wasser auf Meereshöhe?', answer: 100, unit: '°C' },
    { question: 'Wie viele km/s beträgt die Lichtgeschwindigkeit ungefähr?', answer: 300000, unit: ' km/s' },
    { question: 'Wie viele Elemente stehen im Periodensystem (Stand 2024)?', answer: 118, unit: '' },
    { question: 'Wie viele Chromosomenpaare hat ein gesunder Mensch?', answer: 23, unit: '' },
    { question: 'Wie viele Beine hat eine Spinne?', answer: 8, unit: '' },
    { question: 'Wie viele Monate dauert die Trächtigkeit eines Elefanten (gerundet)?', answer: 22, unit: ' Monate' },
    { question: 'Wie viel Prozent des menschlichen Körpers bestehen aus Wasser (gerundet)?', answer: 60, unit: ' %' },
    { question: 'Wie viele Planeten hat unser Sonnensystem (offiziell)?', answer: 8, unit: '' },
    // ── Essen & Trinken
    { question: 'Wie viele Kalorien hat 100 g Butter ungefähr?', answer: 740, unit: ' kcal' },
    { question: 'Bei wie viel Grad Celsius wird Espresso üblicherweise gebrüht?', answer: 90, unit: '°C' },
    { question: 'Wie viel Gramm Mehl braucht man für Standard-Pizzateig (4 Portionen)?', answer: 500, unit: ' g' },
    { question: 'Wie viele Liter Wasser trinkt ein Mensch durchschnittlich pro Tag?', answer: 2, unit: ' L' },
    { question: 'Wie viel Prozent Kakao enthält dunkle Schokolade typischerweise?', answer: 70, unit: ' %' },
    { question: 'Wie viele Kalorien hat ein Glas Cola (200 ml) ungefähr?', answer: 80, unit: ' kcal' },
    // ── Zahlen & Allgemeinwissen
    { question: 'Wie viele Sekunden hat eine Stunde?', answer: 3600, unit: '' },
    { question: 'Wie viele Spielkarten hat ein Standard-Kartendeck (ohne Joker)?', answer: 52, unit: '' },
    { question: 'Wie viele Felder hat ein Schachbrett?', answer: 64, unit: '' },
    { question: 'Wie viele Seiten hat ein Würfel?', answer: 6, unit: '' },
    { question: 'Wie viele Nullen hat eine Milliarde?', answer: 9, unit: '' },
    { question: 'Wie viele Buchstaben hat das deutsche Alphabet (ohne Umlaute/ß)?', answer: 26, unit: '' },
    { question: 'In welchem Jahr wurde das World Wide Web von Tim Berners-Lee erfunden?', answer: 1989, unit: '' },
    { question: 'Wie viele Zentimeter hat ein Meter?', answer: 100, unit: ' cm' },
    { question: 'Wie viele Gramm hat ein Kilogramm?', answer: 1000, unit: ' g' },
    { question: 'Wie viele Minuten hat ein Tag?', answer: 1440, unit: '' },
    // ── Fahrzeuge & Transport
    { question: 'Wie viele km/h fährt ein ICE-3 Zug maximal?', answer: 330, unit: ' km/h' },
    { question: 'In welchem Jahr wurde das erste Automobil von Carl Benz patentiert?', answer: 1886, unit: '' },
    { question: 'Wie viele Passagiere fasst ein Airbus A380 maximal?', answer: 853, unit: '' },
    { question: 'Wie viele Räder hat ein Standard-Sattelzug (LKW mit Auflieger)?', answer: 18, unit: '' },
    { question: 'Wie viele km/h kann ein Gepard maximal erreichen?', answer: 112, unit: ' km/h' },
    { question: 'Wie viele Kilometer schafft ein Durchschnitts-E-Auto pro Ladung (2023)?', answer: 400, unit: ' km' },
    // ── Deutschland & Europa
    { question: 'Wie viele Einwohner hat Deutschland ungefähr (in Millionen)?', answer: 84, unit: ' Mio.' },
    { question: 'In welchem Jahr wurde die EWG (Vorläufer der EU) gegründet?', answer: 1957, unit: '' },
    { question: 'Wie viele Mitgliedsstaaten hat die EU (Stand 2024)?', answer: 27, unit: '' },
    { question: 'In welchem Jahr fand die letzte Fußball-WM in Deutschland statt?', answer: 2006, unit: '' },
    { question: 'Wie viele Kilometer lang ist die deutsche Küstenlinie (Nordsee + Ostsee, ca.)?', answer: 2389, unit: ' km' },
    { question: 'Wie viele Meter hoch ist der Kölner Dom?', answer: 157, unit: ' m' },
    // ── Popkultur & Diverses
    { question: 'Wie viele Bände umfasst die Buchreihe „Harry Potter"?', answer: 7, unit: '' },
    { question: 'In welchem Jahr wurde YouTube gegründet?', answer: 2005, unit: '' },
    { question: 'Wie viele Millimeter Niederschlag fallen pro Jahr in der Sahara durchschnittlich?', answer: 25, unit: ' mm' },
    { question: 'Wie viele Sprachen werden weltweit gesprochen (grobe Schätzung)?', answer: 7000, unit: '' },
    { question: 'In welchem Jahr wurde Facebook gegründet?', answer: 2004, unit: '' },
    { question: 'Wie viele Minuten dauert eine Schulstunde in Deutschland standardmäßig?', answer: 45, unit: ' Min.' },
    { question: 'Wie viele Tore schoss Ronaldo in seiner Karriere bei Real Madrid insgesamt?', answer: 450, unit: '' },
    { question: 'In welchem Jahr wurde Twitter (jetzt X) gegründet?', answer: 2006, unit: '' },
    { question: 'Wie viele Millionen Einwohner hat New York City ungefähr?', answer: 8, unit: ' Mio.' },
    { question: 'Wie viele Kilometer beträgt die Entfernung von der Erde zum Mond (ca.)?', answer: 384000, unit: ' km' },
    { question: 'Wie viele Seiten hat die Bibel (Lutherbibel, ca.)?', answer: 1200, unit: ' Seiten' },
    { question: 'In welchem Jahr fand die Mondlandung (Apollo 11) statt?', answer: 1969, unit: '' },
    { question: 'Wie viele Episoden hat die Serie „The Simpsons" (Stand Staffel 35)?', answer: 771, unit: '' },
  ];

  function esc(s) {
    return String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, function(c) {
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

  // ─────────────────────────────────────────────────────────────────────────
  function PiMalDaumenInstance(container, ctx, onEnd) {
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
    this.currentQ      = null;
    this._deck         = [];
    this.p1Answer      = null;
    this.p2Answer      = null;
    this._p1InputVal   = '';
    this._p2InputVal   = '';
    this._timeLeft     = 60;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  PiMalDaumenInstance.prototype = {

    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'pm-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:center;',
        'position:relative;overflow:hidden;padding:16px 20px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>',
        '<div id="pm-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:14px;min-height:28px;"></div>',
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:10px;">Pi mal Daumen — Schätze die Zahl!</div>',
        '<div id="pm-timer" style="font-size:22px;color:#f0c030;letter-spacing:.1em;margin-bottom:10px;font-family:\'Barlow Condensed\',sans-serif;display:none;">1:00</div>',
        '<div id="pm-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:30px;margin-bottom:12px;text-align:center;transition:color .2s;"></div>',
        '<button id="pm-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-bottom:18px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">RUNDE STARTEN</button>',

        '<div id="pm-question-area" style="display:none;flex-direction:column;align-items:center;gap:14px;width:100%;max-width:460px;margin-bottom:14px;">',
          '<div id="pm-question-text" style="font-family:\'Barlow Condensed\',sans-serif;font-size:clamp(15px,3.2vw,20px);color:#e0e0f8;text-align:center;line-height:1.4;letter-spacing:.05em;padding:0 8px;"></div>',
          '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;width:100%;">',
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;">Deine Schätzung:</div>',
            '<div style="display:flex;gap:8px;align-items:center;">',
              '<input id="pm-input" type="number" placeholder="Zahl eingeben…"',
              ' style="background:rgba(255,255,255,.05);border:2px solid #f0c030;color:#f0c030;',
              'font-family:\'Bebas Neue\',sans-serif;font-size:28px;letter-spacing:.1em;',
              'padding:10px 16px;width:220px;text-align:center;outline:none;',
              'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));"/>',
              '<button id="pm-confirm-btn"',
              ' style="background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;',
              'font-size:18px;letter-spacing:.12em;padding:12px 22px;cursor:pointer;',
              'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));">OK ✓</button>',
            '</div>',
          '</div>',
        '</div>',

        '<div id="pm-wait" style="display:none;flex-direction:column;align-items:center;gap:4px;margin-bottom:10px;">',
          '<div id="pm-wait-p1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#3ab4f5;text-transform:uppercase;"></div>',
          '<div id="pm-wait-p2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#f55a3a;text-transform:uppercase;"></div>',
        '</div>',

        '<div id="pm-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:28px;">',
          '<div id="pm-ov-ico" style="font-size:52px;"></div>',
          '<div id="pm-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,6vw,44px);color:#f0c030;letter-spacing:.05em;"></div>',
          '<div id="pm-ov-answer" style="font-family:\'Barlow Condensed\',sans-serif;font-size:17px;color:#a0a0bc;max-width:380px;line-height:1.5;margin:4px 0;"></div>',
          '<div id="pm-ov-bets" style="display:flex;gap:20px;margin:4px 0;"></div>',
          '<div id="pm-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
          '<button id="pm-ov-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">WEITER →</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);
      this._drawDots();

      if (this.ctx.isHost) {
        document.getElementById('pm-start-btn').addEventListener('click', function() {
          this.style.display = 'none';
          self.ctx.network.send('pm_start_countdown', {});
          self._countdown();
        });
      }

      var inputEl = document.getElementById('pm-input');
      inputEl.addEventListener('input', function() {
        if (self.ctx.isHost) self._p1InputVal = this.value;
        else self._p2InputVal = this.value;
        self.ctx.network.send('pm_live_input', { player: self.ctx.isHost ? 'p1' : 'p2', val: this.value });
      });
      inputEl.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') document.getElementById('pm-confirm-btn').click();
      });

      document.getElementById('pm-confirm-btn').addEventListener('click', function() {
        if (self.phase !== 'answering' || self.dead) return;
        var raw = document.getElementById('pm-input').value.trim();
        var num = parseFloat(raw.replace(',', '.'));
        if (isNaN(num)) { document.getElementById('pm-input').style.borderColor = '#f55a3a'; return; }
        self._submitAnswer(num);
      });
    },

    _setupNet: function() {
      var self = this;
      this.ctx.network.on('pm_start_countdown', function() { if (!self.ctx.isHost) self._countdown(); });

      this.ctx.network.on('pm_sync_question', function(msg) {
        if (self.ctx.isHost) return;
        self.currentQ = { question: msg.question, answer: msg.answer, unit: msg.unit };
        self._renderQuestion(msg.question);
        self._startAnswering();
      });

      this.ctx.network.on('pm_live_input', function(msg) {
        if (msg.player === 'p1' && !self.ctx.isHost) self._p1InputVal = msg.val;
        if (msg.player === 'p2' && self.ctx.isHost)  self._p2InputVal = msg.val;
      });

      this.ctx.network.on('pm_answer', function(msg) {
        if (!self.ctx.isHost) return;
        if (msg.player === 'p2') { self.p2Answer = msg.answer; self._updateWaitStatus(); self._tryResolve(); }
      });

      this.ctx.network.on('pm_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._showResult(msg.p1Answer, msg.p2Answer, msg.correct, msg.unit, msg.winner, msg.p1Points, msg.p2Points);
      });

      this.ctx.network.on('pm_timeout', function() {
        if (self.ctx.isHost) return;
        self._clearTimers(); self.phase = 'result';
        document.getElementById('pm-question-area').style.display = 'none';
        document.getElementById('pm-wait').style.display = 'none';
        document.getElementById('pm-timer').style.display = 'none';
        self._setStatus('Zeit abgelaufen...', '#f55a3a', '20px');
      });

      this.ctx.network.on('pm_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._finish();
        else { self.mini++; self._startMini(); document.getElementById('pm-ov').style.display = 'none'; }
      });
    },

    _startMini: function() {
      if (this.dead) return;
      this.phase = 'idle';
      this.p1Answer = null; this.p2Answer = null;
      this._p1InputVal = ''; this._p2InputVal = '';
      this._clearTimers();
      var inputEl = document.getElementById('pm-input');
      if (inputEl) { inputEl.value = ''; inputEl.disabled = false; inputEl.style.borderColor = '#f0c030'; }
      var cb = document.getElementById('pm-confirm-btn');
      if (cb) cb.disabled = false;
      document.getElementById('pm-question-area').style.display = 'none';
      document.getElementById('pm-wait').style.display = 'none';
      document.getElementById('pm-timer').style.display = 'none';
      this._setStatus('Bereit?', '#c0c0d8', '18px');
      if (this.ctx.isHost) {
        var btn = document.getElementById('pm-start-btn');
        if (btn) btn.style.display = 'block';
        if (this._deck.length === 0) {
          var indices = QUESTIONS.map(function(_, i) { return i; });
          for (var i = indices.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = indices[i]; indices[i] = indices[j]; indices[j] = tmp;
          }
          this._deck = indices;
        }
        this.currentQ = QUESTIONS[this._deck.shift()];
      }
      this._drawDots();
    },

    _countdown: function() {
      if (this.dead) return;
      var self = this, n = 3;
      this.phase = 'countdown';
      var sb = document.getElementById('pm-start-btn');
      if (sb) sb.style.display = 'none';
      var tick = function() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('', '#c0c0d8', '18px');
          if (self.ctx.isHost) self._sendQuestion();
        }
      };
      tick();
    },

    _sendQuestion: function() {
      if (!this.ctx.isHost || !this.currentQ) return;
      this.ctx.network.send('pm_sync_question', { question: this.currentQ.question, answer: this.currentQ.answer, unit: this.currentQ.unit });
      this._renderQuestion(this.currentQ.question);
      this._startAnswering();
    },

    _renderQuestion: function(text) {
      var el = document.getElementById('pm-question-text');
      if (el) el.textContent = text;
    },

    _startAnswering: function() {
      var self = this;
      this.phase = 'answering';
      document.getElementById('pm-question-area').style.display = 'flex';
      document.getElementById('pm-wait').style.display = 'flex';
      this._updateWaitStatus();
      this._timeLeft = 60;
      var timerEl = document.getElementById('pm-timer');
      timerEl.style.display = 'block'; timerEl.style.color = '#f0c030';
      setTimeout(function() { var inp = document.getElementById('pm-input'); if (inp) inp.focus(); }, 50);

      this._tickInterval = setInterval(function() {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var m = Math.floor(self._timeLeft / 60), s = self._timeLeft % 60;
        timerEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
        if (self._timeLeft <= 10) { timerEl.style.color = '#f55a3a'; beep(330, 0.05, 'sine', 0.08); }
        if (self._timeLeft <= 0) {
          self._clearTimers();
          var me = self.ctx.isHost ? 'p1' : 'p2';
          var rawVal = self.ctx.isHost ? self._p1InputVal : self._p2InputVal;
          var num = parseFloat(String(rawVal).replace(',', '.'));
          if (isNaN(num)) num = 0;
          self._submitAnswer(num, true);
        }
      }, 1000);

      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function() {
          self.ctx.network.send('pm_timeout', {});
          if (self.p1Answer === null) {
            var p1r = parseFloat(String(self._p1InputVal).replace(',', '.'));
            self.p1Answer = isNaN(p1r) ? 0 : p1r;
          }
          if (self.p2Answer === null) {
            var p2r = parseFloat(String(self._p2InputVal).replace(',', '.'));
            self.p2Answer = isNaN(p2r) ? 0 : p2r;
          }
          self._resolveRound();
        }, 62000);
      }
      this._setStatus('WAS IST DIE ANTWORT?', '#f0c030', '16px');
      beep(550, 0.1, 'sine', 0.12);
    },

    _submitAnswer: function(num) {
      if (this.phase !== 'answering' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      var inputEl = document.getElementById('pm-input');
      var cb = document.getElementById('pm-confirm-btn');
      if (inputEl) { inputEl.disabled = true; inputEl.style.borderColor = '#2af0a0'; inputEl.value = num; }
      if (cb) cb.disabled = true;
      beep(660, 0.07, 'sine', 0.15);
      if (me === 'p1') { this.p1Answer = num; this._updateWaitStatus(); this._tryResolve(); }
      else             { this.p2Answer = num; this._updateWaitStatus(); this.ctx.network.send('pm_answer', { player: 'p2', answer: num }); }
    },

    _tryResolve: function() {
      if (this.ctx.isHost && this.p1Answer !== null && this.p2Answer !== null) this._resolveRound();
    },

    _resolveRound: function() {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result'; this._clearTimers();
      var correct = this.currentQ.answer, unit = this.currentQ.unit;
      var d1 = Math.abs((this.p1Answer || 0) - correct);
      var d2 = Math.abs((this.p2Answer || 0) - correct);
      var p1Points = 0, p2Points = 0, winner = 'draw';
      if (d1 < d2)      { p1Points = 1; winner = 'p1'; }
      else if (d2 < d1) { p2Points = 1; winner = 'p2'; }
      else              { p1Points = 1; p2Points = 1; winner = 'draw'; }
      this.p1Wins += p1Points; this.p2Wins += p2Points;
      if (this.ctx.isHost) {
        this.ctx.network.send('pm_result', {
          p1Answer: this.p1Answer, p2Answer: this.p2Answer, correct: correct, unit: unit,
          winner: winner, p1Points: p1Points, p2Points: p2Points,
          p1Wins: this.p1Wins, p2Wins: this.p2Wins
        });
      }
      this._showResult(this.p1Answer, this.p2Answer, correct, unit, winner, p1Points, p2Points);
    },

    _showResult: function(p1A, p2A, correct, unit, winner, p1P, p2P) {
      var self = this;
      document.getElementById('pm-question-area').style.display = 'none';
      document.getElementById('pm-wait').style.display = 'none';
      document.getElementById('pm-timer').style.display = 'none';
      var ov = document.getElementById('pm-ov');
      document.getElementById('pm-ov-ico').textContent = winner === 'draw' ? '🤝' : '🎯';
      var winName = winner === 'p1' ? this.ctx.p1Name : (winner === 'p2' ? this.ctx.p2Name : null);
      document.getElementById('pm-ov-ttl').textContent = winner === 'draw' ? 'UNENTSCHIEDEN!' : (winName + ' GEWINNT!');
      document.getElementById('pm-ov-answer').innerHTML =
        '<span style="color:#aaaacc;">Richtige Antwort: </span>' +
        '<span style="color:#f0c030;font-family:\'Bebas Neue\',sans-serif;font-size:26px;">' + esc(correct) + esc(unit) + '</span>';

      var d1 = Math.abs((p1A || 0) - correct), d2 = Math.abs((p2A || 0) - correct);
      function badge(ans, name, col, pts, diff) {
        var valCol = (winner === 'draw') ? '#f0c030' : (pts > 0 ? '#2af0a0' : '#f55a3a');
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:' + col + ';">' + esc(name) + '</div>' +
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:26px;color:' + valCol + ';">' + (ans === null ? '⏳' : esc(ans)) + esc(unit) + '</div>' +
          '<div style="font-size:12px;color:#a0a0bc;">Abw.: ' + (ans === null ? '—' : esc(Number(diff).toFixed(0))) + esc(unit) + '</div>' +
          (pts > 0 ? '<div style="font-size:12px;color:' + valCol + ';">+' + pts + ' Punkt</div>' : '') +
        '</div>';
      }
      document.getElementById('pm-ov-bets').innerHTML =
        badge(p1A, this.ctx.p1Name, '#3ab4f5', p1P, d1) +
        '<div style="color:#c0c0d8;padding-top:8px;font-size:14px;">VS</div>' +
        badge(p2A, this.ctx.p2Name, '#f55a3a', p2P, d2);
      document.getElementById('pm-ov-sc').innerHTML = this.p1Wins + ' : ' + this.p2Wins + ' &nbsp;·&nbsp; Ziel: 7 Punkte';
      ov.style.display = 'flex'; this._drawDots();

      var gameOver = this.p1Wins >= 7 || this.p2Wins >= 7, btn = document.getElementById('pm-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE';
      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('pm_next', { gameOver: gameOver });
          if (gameOver) self._finish(); else { self.mini++; self._startMini(); ov.style.display = 'none'; }
        };
      } else btn.style.display = 'none';
    },

    _updateWaitStatus: function() {
      var p1El = document.getElementById('pm-wait-p1'), p2El = document.getElementById('pm-wait-p2');
      if (p1El) p1El.textContent = this.ctx.p1Name + ': ' + (this.p1Answer !== null ? '✓ Eingereicht' : '…tippt');
      if (p2El) p2El.textContent = this.ctx.p2Name + ': ' + (this.p2Answer !== null ? '✓ Eingereicht' : '…tippt');
    },

    _drawDots: function() {
      var el = document.getElementById('pm-dots'); if (!el) return;
      var d1 = '', d2 = '', bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 2px;border:2px solid ';
      for (var i = 0; i < 7; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML = d1 + '<span style="color:#c0c0d8;margin:0 10px;font-size:12px;">RUNDE ' + this.mini + '</span>' + d2;
    },

    _setStatus: function(t, c, s) { var el = document.getElementById('pm-status'); if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; } },
    _clearTimers: function() { clearTimeout(this._roundTimer); clearInterval(this._tickInterval); },
    _finish: function() { this.dead = true; this.onEnd({ winner: this.p1Wins >= 7 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins }); },
    destroy: function() {
      this.dead = true; this.timers.forEach(clearTimeout); this._clearTimers();
      ['pm_start_countdown','pm_sync_question','pm_live_input','pm_answer','pm_result','pm_timeout','pm_next'].forEach(function(ev) {
        this.ctx.network.off(ev);
      }, this);
    }
  };

  // ─────────────────────────────────────────────────────────────────────────
  GamePool.register({
    id: 'pi-mal-daumen',
    name: 'Pi mal Daumen',
    description: 'Keine Ja/Nein-Fragen — hier zählt das Zahlengefühl! Beide Spieler schätzen gleichzeitig. Wer näher an der richtigen Zahl ist, gewinnt die Runde. First to 7 gewinnt das Spiel!',
    init: function(container, ctx, onEnd) { this._instance = new PiMalDaumenInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
