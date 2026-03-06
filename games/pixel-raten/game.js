(function () {

  // ═══════════════════════════════════════════════════════════
  // BILDER-DATENBANK  (CC0 / Public Domain)
  // ═══════════════════════════════════════════════════════════
var IMAGES = [
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/260px-Cat_November_2010-1a.jpg ', 
        answer: 'Katze' 
    },
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/YellowLabradorLooking_new.jpg/260px-YellowLabradorLooking_new.jpg ', 
        answer: 'Hund' 
    },
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Camponotus_flavomarginatus_ant.jpg/260px-Camponotus_flavomarginatus_ant.jpg ', 
        answer: 'Ameise' 
    },
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/260px-Tsunami_by_hokusai_19th_century.jpg ', 
        answer: 'Welle' 
    },
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/200px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg ', 
        answer: 'Mona Lisa' 
    },
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/260px-Colosseo_2020.jpg ', 
        answer: 'Kolosseum' 
    },
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg/260px-Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg ', 
        answer: 'Everest' 
    },
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/260px-Good_Food_Display_-_NCI_Visuals_Online.jpg ', 
        answer: 'Obst' 
    },
    { 
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/260px-A_small_cup_of_coffee.JPG ', 
        answer: 'Kaffee' 
    },
    { url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800' , answer: 'Weltraum' },
    { url: 'https://images.unsplash.com/photo-1500315331616-db4f707c24d1?w=800' , answer: 'Frühstück' },
    { url: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800' , answer: 'Wasserfall' },
    { url: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=800' , answer: 'Baum' },
    { url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800' , answer: 'Wüste' },
    { url: 'https://images.unsplash.com/photo-1524397057410-1e775ed476f3?w=800' , answer: 'Schloss' },
    { url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800' , answer: 'Bücher' },
    { url: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800' , answer: 'Wunderkerze' },
    { url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=800' , answer: 'Steg' },
    { url: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=800' , answer: 'Astronaut' },
    { url: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800' , answer: 'Glühbirne' },
    { url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800' , answer: 'Roboter' },
    { url: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?w=800' , answer: 'Rakete' },
    { url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800' , answer: 'Satellit' },
    { url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800' , answer: 'Löwe' },
    { url: 'https://images.unsplash.com/photo-1508817628294-5a453fa0b8fb?w=800' , answer: 'Tiger' },
    { url: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?w=800' , answer: 'Pinguin' },,
    { url: 'https://images.unsplash.com/photo-1540331547168-8b63109225b7?w=800' , answer: 'Ornage' },
    { url: 'https://images.unsplash.com/photo-1454991727061-be514eae86f7?w=800' , answer: 'Wal' },
    { url: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=800' , answer: 'Korallen' },
	{ url: 'https://images.unsplash.com/photo-1770236597923-5c3a74530fe8?w=800' , answer: 'Mofa' },
	{ url: 'https://images.unsplash.com/photo-1770802925358-552ab9e88012?w=800' , answer: 'Pizza' },
	{ url: 'https://images.unsplash.com/photo-1767976517276-d322347d35ff?w=800' , answer: 'Jukebox' },
	{ url: 'https://images.unsplash.com/photo-1767976517720-e4779d2661ef?w=800' , answer: 'Telefonzelle' },
	{ url: 'https://images.unsplash.com/photo-1509987300714-11c90a6d40e7?w=800' , answer: 'Eichhörnchen' },
	{ url: 'https://images.unsplash.com/photo-1667604238516-23ec34bda2f1?w=800' , answer: 'Schmetterling' },
	{ url: 'https://images.unsplash.com/photo-1657313997457-892ce86e625f?w=800' , answer: 'Steine' },
	{ url: 'https://images.unsplash.com/photo-1567953836710-eb340f98dcdb?w=800' , answer: 'Himbeere' },
	{ url: 'https://images.unsplash.com/photo-1662146473310-2aae3128a235?w=800' , answer: 'Schildkröte' },
	{ url: 'https://images.unsplash.com/photo-1768245076574-3aee5a33db63?w=800' , answer: 'Eifelturm' },
	{ url: 'https://images.unsplash.com/photo-1682285126716-fe88813e359e?w=800' , answer: 'Ente' },
	{ url: 'https://images.unsplash.com/photo-1622674168978-6a29956e67d2?w=800' , answer: 'Zigarette' },
	{ url: 'https://images.unsplash.com/photo-1589966781848-056f1d039519?w=800' , answer: 'Rucksack' },
	{ url: 'https://images.unsplash.com/photo-1550074931-da683f1f4551?w=800' , answer: 'Kaktus' },
	{ url: 'https://images.unsplash.com/photo-1723507756425-26101d153bb5?w=800' , answer: 'Tastatur' },
	{ url: 'https://images.unsplash.com/photo-1669482912009-5100aa037fc0?w=800' , answer: 'Schnee' },
	{ url: 'https://images.unsplash.com/photo-1555942861-769f7774848a?w=800' , answer: 'Pinsel' },
	{ url: 'https://images.unsplash.com/photo-1552435053-72e5edd17c5d?w=800' , answer: 'Eule' },
	{ url: 'https://images.unsplash.com/photo-1674421338540-a7f905a7b78a?w=800' , answer: 'Schlange' },
	{ url: 'https://images.unsplash.com/photo-1580906628491-ed5dc3ee04c4?w=800' , answer: 'Schuhe' },
	{ url: 'https://images.unsplash.com/photo-1666446224995-496578fbfd6d?w=800' , answer: 'Reißverschluss' },
	{ url: 'https://images.unsplash.com/photo-1769096914324-c8186f3ae3b6?w=800' , answer: 'Sonnenblume' },

  ];

  // ═══════════════════════════════════════════════════════════
  // LEVENSHTEIN
  // ═══════════════════════════════════════════════════════════
  function levenshtein(a, b) {
    a = a.toLowerCase().trim(); b = b.toLowerCase().trim();
    if (a === b) return 0;
    var m = a.length, n = b.length;
    if (!m) return n; if (!n) return m;
    var dp = [];
    for (var i = 0; i <= m; i++) { dp[i] = [i]; }
    for (var j = 0; j <= n; j++) { dp[0][j] = j; }
    for (var i = 1; i <= m; i++) {
      for (var j = 1; j <= n; j++) {
        dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      }
    }
    return dp[m][n];
  }
  function isCorrect(input, answer) {
    var d = levenshtein(input, answer), l = answer.length;
    return l <= 4 ? d === 0 : l <= 8 ? d <= 1 : d <= 2;
  }
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
      o.frequency.value = freq; o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(); o.stop(ac.currentTime + dur + 0.01);
    } catch(e) {}
  }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ═══════════════════════════════════════════════════════════
  // KONSTANTEN
  // ═══════════════════════════════════════════════════════════
  var GRID      = 10;
  var TILES     = 100;
  var REVEAL_MS = 1200;
  var ANSWER_S  = 15;
  var WIN_SCORE = 6;
  var BOX       = 260;    // px, Seitenlänge der Bildbox

  // ═══════════════════════════════════════════════════════════
  // INSTANZ
  // ═══════════════════════════════════════════════════════════
  function PixelRatenInstance(container, ctx, onEnd) {
    this.container = container;
    this.ctx       = ctx;
    this.onEnd     = onEnd;
    this.dead      = false;
    this.mini      = 1;
    this.p1Wins    = 0;
    this.p2Wins    = 0;

    this.phase      = 'idle';
    this.currentImg = null;
    this._deck      = [];
    this._tileOrder = [];
    this._tileIndex = 0;
    this._buzzed    = null;
    this._timeLeft  = 0;

    this._revealInterval = null;
    this._tickInterval   = null;
    this._cdTimers       = [];

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  PixelRatenInstance.prototype = {

    // ─────────────────────────────────────────────────────────
    // UI
    // ─────────────────────────────────────────────────────────
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';

      var root = document.createElement('div');
      root.id = 'pr-root';
      root.style.cssText =
        'width:100%;height:100%;' +
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);' +
        'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
        'position:relative;overflow:hidden;padding:12px 16px;box-sizing:border-box;' +
        'font-family:"Bebas Neue",sans-serif;';

      root.innerHTML =
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;' +
          'top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>' +

        '<div id="pr-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:8px;min-height:24px;"></div>' +

        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;' +
          'color:#c0c0d8;text-transform:uppercase;margin-bottom:6px;">Was ist auf dem Bild zu sehen?</div>' +

        '<div id="pr-timer" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#f0c030;' +
          'letter-spacing:.06em;margin-bottom:4px;min-height:20px;text-align:center;display:none;"></div>' +

        '<div id="pr-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:20px;letter-spacing:.2em;' +
          'color:#c0c0d8;text-transform:uppercase;min-height:26px;margin-bottom:8px;text-align:center;"></div>' +

        '<button id="pr-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-bottom:12px;' +
          'background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;' +
          'letter-spacing:.15em;padding:12px 40px;cursor:pointer;' +
          'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">RUNDE STARTEN</button>' +

        // Bildbox: img als normaler Block, Kachel-Container als absolute Overlay darüber
        '<div id="pr-img-wrap" style="display:none;position:relative;width:' + BOX + 'px;height:' + BOX + 'px;' +
          'border:2px solid rgba(240,192,48,.3);overflow:hidden;flex-shrink:0;margin-bottom:10px;">' +
          '<img id="pr-img" src="" alt="" style="display:block;width:' + BOX + 'px;height:' + BOX + 'px;object-fit:cover;" />' +
          '<div id="pr-tiles" style="position:absolute;top:0;left:0;width:100%;height:100%;"></div>' +
        '</div>' +

        '<div id="pr-buzzer-area" style="display:none;flex-direction:column;align-items:center;gap:6px;' +
          'margin-bottom:8px;width:100%;max-width:420px;">' +
          '<button id="pr-buzz-btn" style="background:rgba(240,192,48,.08);border:2px solid #f0c030;color:#f0c030;' +
            'font-family:\'Bebas Neue\',sans-serif;font-size:24px;letter-spacing:.15em;padding:12px 48px;cursor:pointer;' +
            'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));' +
            'transition:background .1s;">⚡ BUZZEN</button>' +
        '</div>' +

        '<div id="pr-answer-area" style="display:none;flex-direction:column;align-items:center;gap:6px;' +
          'margin-bottom:8px;width:100%;max-width:360px;">' +
          '<div id="pr-answer-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;' +
            'letter-spacing:.2em;color:#f0c030;text-transform:uppercase;"></div>' +
          '<div style="display:flex;gap:6px;width:100%;">' +
            '<input id="pr-answer-input" type="text" placeholder="Antwort eingeben…" autocomplete="off" ' +
              'style="flex:1;background:rgba(255,255,255,.05);border:2px solid rgba(240,192,48,.5);color:#fff;' +
              'font-family:\'Barlow Condensed\',sans-serif;font-size:18px;padding:9px 12px;outline:none;letter-spacing:.04em;" />' +
            '<button id="pr-answer-submit" style="background:#f0c030;border:none;color:#000;' +
              'font-family:\'Bebas Neue\',sans-serif;font-size:15px;padding:9px 16px;cursor:pointer;' +
              'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));">OK</button>' +
          '</div>' +
          '<div id="pr-answer-timer" style="font-family:\'Bebas Neue\',sans-serif;font-size:28px;' +
            'color:#f0c030;letter-spacing:.1em;min-height:32px;"></div>' +
        '</div>' +

        '<div id="pr-wait" style="display:none;font-family:\'Barlow Condensed\',sans-serif;font-size:13px;' +
          'letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;margin-bottom:6px;text-align:center;"></div>' +

        '<div id="pr-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.95);display:none;' +
          'flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:24px;">' +
          '<div id="pr-ov-ico" style="font-size:48px;"></div>' +
          '<div id="pr-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,6vw,44px);' +
            'color:#f0c030;letter-spacing:.05em;"></div>' +
          '<div id="pr-ov-answer" style="font-family:\'Barlow Condensed\',sans-serif;font-size:16px;' +
            'color:#c0c0d8;letter-spacing:.08em;line-height:1.5;"></div>' +
          '<div style="width:160px;height:160px;overflow:hidden;border:2px solid rgba(240,192,48,.4);flex-shrink:0;">' +
            '<img id="pr-ov-img" src="" alt="" style="width:100%;height:100%;object-fit:cover;" />' +
          '</div>' +
          '<div id="pr-ov-badges" style="display:flex;gap:20px;"></div>' +
          '<div id="pr-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;' +
            'color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>' +
          '<button id="pr-ov-btn" style="margin-top:6px;background:#f0c030;border:none;color:#000;' +
            'font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;' +
            'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">WEITER →</button>' +
        '</div>';

      this.container.appendChild(root);
      this._drawDots();

      // Events
      if (this.ctx.isHost) {
        document.getElementById('pr-start-btn').addEventListener('click', function() {
          document.getElementById('pr-start-btn').style.display = 'none';
          self.ctx.network.send('pr_start_countdown', {});
          self._countdown();
        });
      }
      document.getElementById('pr-buzz-btn').addEventListener('click', function() { self._onBuzz(); });
      document.getElementById('pr-answer-submit').addEventListener('click', function() { self._submitAnswer(); });
      document.getElementById('pr-answer-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') self._submitAnswer();
      });
    },

    // ─────────────────────────────────────────────────────────
    // KACHEL-GRID  erstellen / aufdecken
    // ─────────────────────────────────────────────────────────
    _buildTiles: function() {
      var container = document.getElementById('pr-tiles');
      if (!container) return;
      container.innerHTML = '';
      var tPct = (100 / GRID) + '%';
      for (var i = 0; i < TILES; i++) {
        var row = Math.floor(i / GRID), col = i % GRID;
        var tile = document.createElement('div');
        tile.id = 'pr-t-' + i;
        // Schachbrettfärbung damit der Raster sichtbar ist
        var dark = ((row + col) % 2 === 0) ? '#0c0c1e' : '#0a0a18';
        tile.style.cssText =
          'position:absolute;' +
          'left:' + (col * 100 / GRID) + '%;' +
          'top:'  + (row * 100 / GRID) + '%;' +
          'width:' + tPct + ';' +
          'height:' + tPct + ';' +
          'background:' + dark + ';' +
          'box-sizing:border-box;' +
          // 1px inset border in leicht hellerer Farbe = Gitter
          'box-shadow:inset 0 0 0 1px rgba(255,255,255,0.06);';
        container.appendChild(tile);
      }
    },

    // Entfernt eine einzelne Kachel aus dem DOM → Bild darunter sichtbar
    _revealTile: function(idx) {
      var t = document.getElementById('pr-t-' + idx);
      if (t && t.parentNode) t.parentNode.removeChild(t);
    },

    // Entfernt alle Kacheln auf einmal
    _revealAllTiles: function() {
      var container = document.getElementById('pr-tiles');
      if (container) container.innerHTML = '';
    },

    // ─────────────────────────────────────────────────────────
    // NETZWERK
    // ─────────────────────────────────────────────────────────
    _setupNet: function() {
      var self = this;

      this.ctx.network.on('pr_start_countdown', function() {
        if (!self.ctx.isHost) self._countdown();
      });

      this.ctx.network.on('pr_sync_image', function(msg) {
        if (self.ctx.isHost) return;
        self.currentImg = { url: msg.url, answer: msg.answer };
        self._tileOrder = msg.tileOrder;
        self._tileIndex = msg.tileIndex || 0;
        // Bild setzen
        var img = document.getElementById('pr-img');
        if (img) img.src = msg.url;
        // Kacheln bauen, bereits enthüllte sofort entfernen
        self._buildTiles();
        for (var i = 0; i < self._tileIndex; i++) self._revealTile(self._tileOrder[i]);
        self._showGameUI();
        // KEIN _startReveal() beim Guest! Timing kommt vom Host via pr_reveal_tile.
      });

      this.ctx.network.on('pr_reveal_tile', function(msg) {
        if (self.ctx.isHost) return;
        self._tileIndex = msg.tileIndex;
        self._revealTile(msg.tile);
        var el = document.getElementById('pr-timer');
        if (el) el.textContent = msg.tileIndex + ' / ' + TILES + ' Kacheln enthüllt';
        beep(280 + msg.tile, 0.04, 'sine', 0.02);
      });

      this.ctx.network.on('pr_buzz', function(msg) { self._handleBuzzEvent(msg.player); });

      this.ctx.network.on('pr_answer_attempt', function(msg) {
        if (!self.ctx.isHost) return;
        self._resolveAnswer(msg.player, msg.text);
      });

      this.ctx.network.on('pr_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._showResult(msg);
      });

      this.ctx.network.on('pr_resume', function(msg) {
        if (self.ctx.isHost) return;
        // Punkte aktualisieren
        if (msg && msg.p1Wins !== undefined) {
          self.p1Wins = msg.p1Wins;
          self.p2Wins = msg.p2Wins;
        }
        // Nur UI zurücksetzen - KEIN _startReveal(), Host sendet weiter pr_reveal_tile
        self.phase   = 'revealing';
        self._buzzed = null;
        document.getElementById('pr-buzzer-area').style.display = 'flex';
        document.getElementById('pr-wait').style.display        = 'none';
        document.getElementById('pr-answer-area').style.display = 'none';
        self._setStatus('FALSCH! Weiter…', '#f55a3a', '17px');
        self._drawDots();
        setTimeout(function() {
          if (!self.dead && self.phase === 'revealing')
            self._setStatus('WER ERKENNT DAS BILD?', '#f0c030', '17px');
        }, 1500);
      });

      this.ctx.network.on('pr_no_buzz', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._showResult(msg);
      });

      this.ctx.network.on('pr_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._finish();
        else {
          self.mini++;
          self._startMini();
          document.getElementById('pr-ov').style.display = 'none';
        }
      });
    },

    // ─────────────────────────────────────────────────────────
    // NEUE RUNDE
    // ─────────────────────────────────────────────────────────
    _startMini: function() {
      if (this.dead) return;
      this.phase      = 'idle';
      this._buzzed    = null;
      this._tileIndex = 0;
      this._clearAllTimers();

      document.getElementById('pr-img-wrap').style.display    = 'none';
      document.getElementById('pr-buzzer-area').style.display = 'none';
      document.getElementById('pr-answer-area').style.display = 'none';
      document.getElementById('pr-timer').style.display       = 'none';
      document.getElementById('pr-wait').style.display        = 'none';
      this._setStatus('Bereit?', '#c0c0d8', '18px');

      if (this.ctx.isHost) {
        document.getElementById('pr-start-btn').style.display = 'block';
        if (this._deck.length === 0) this._deck = shuffle(IMAGES.map(function(_, i) { return i; }));
        this.currentImg = IMAGES[this._deck.shift()];
      }
      this._drawDots();
    },

    // ─────────────────────────────────────────────────────────
    // COUNTDOWN
    // ─────────────────────────────────────────────────────────
    _countdown: function() {
      if (this.dead) return;
      var self = this, n = 3;
      this.phase = 'countdown';
      var tick = function() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self._cdTimers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('', '#c0c0d8', '18px');
          if (self.ctx.isHost) self._sendImage();
        }
      };
      tick();
    },

    // ─────────────────────────────────────────────────────────
    // BILD SENDEN (Host)
    // ─────────────────────────────────────────────────────────
    _sendImage: function() {
      if (!this.ctx.isHost || !this.currentImg) return;
      var order = shuffle(Array.from({ length: TILES }, function(_, i) { return i; }));
      this._tileOrder = order;
      this._tileIndex = 0;

      this.ctx.network.send('pr_sync_image', {
        url: this.currentImg.url,
        answer: this.currentImg.answer,
        tileOrder: order,
        tileIndex: 0
      });

      // Bild setzen
      var img = document.getElementById('pr-img');
      if (img) img.src = this.currentImg.url;

      // Kacheln bauen
      this._buildTiles();
      this._showGameUI();
      this._startReveal();
    },

    // ─────────────────────────────────────────────────────────
    // SPIEL-UI
    // ─────────────────────────────────────────────────────────
    _showGameUI: function() {
      this.phase = 'revealing';
      document.getElementById('pr-img-wrap').style.display    = 'block';
      document.getElementById('pr-buzzer-area').style.display = 'flex';
      document.getElementById('pr-timer').style.display       = 'block';
      document.getElementById('pr-timer').textContent         = '0 / ' + TILES + ' Kacheln enthüllt';
      this._setStatus('WER ERKENNT DAS BILD?', '#f0c030', '17px');
      beep(550, 0.1, 'sine', 0.12);
    },

    // ─────────────────────────────────────────────────────────
    // ENTHÜLLUNGS-INTERVALL
    // ─────────────────────────────────────────────────────────
    _startReveal: function() {
      var self = this;
      this._stopReveal();
      this._revealInterval = setInterval(function() {
        if (self.dead || self.phase !== 'revealing') return;
        if (self._tileIndex >= TILES) {
          self._stopReveal();
          if (self.ctx.isHost) self._noBuzzResult();
          return;
        }
        var tile = self._tileOrder[self._tileIndex];
        self._tileIndex++;
        if (self.ctx.isHost) {
          self.ctx.network.send('pr_reveal_tile', { tile: tile, tileIndex: self._tileIndex });
        }
        self._revealTile(tile);
        var el = document.getElementById('pr-timer');
        if (el) el.textContent = self._tileIndex + ' / ' + TILES + ' Kacheln enthüllt';
        beep(280 + tile, 0.04, 'sine', 0.02);
      }, REVEAL_MS);
    },

    _stopReveal: function() {
      clearInterval(this._revealInterval);
      this._revealInterval = null;
    },

    // ─────────────────────────────────────────────────────────
    // KEIN BUZZER → kein Punkt, nächste Runde
    // ─────────────────────────────────────────────────────────
    _noBuzzResult: function() {
      if (!this.ctx.isHost) return;
      this.phase = 'result';
      var data = {
        noBuzz: true,
        correct: this.currentImg.answer,
        p1Wins: this.p1Wins,
        p2Wins: this.p2Wins
      };
      this.ctx.network.send('pr_no_buzz', data);
      this._showResult(data);
    },

    // ─────────────────────────────────────────────────────────
    // BUZZEN
    // ─────────────────────────────────────────────────────────
    _onBuzz: function() {
      if (this.phase !== 'revealing' || this._buzzed || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      beep(880, 0.15, 'square', 0.25);
      this.ctx.network.send('pr_buzz', { player: me });
      this._handleBuzzEvent(me);
    },

    _handleBuzzEvent: function(player) {
      if (this._buzzed || this.phase !== 'revealing') return;
      this._buzzed = player;
      this._stopReveal();
      this.phase = 'buzzed';

      var playerName = player === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
      var isMe = (this.ctx.isHost && player === 'p1') || (!this.ctx.isHost && player === 'p2');

      this._setStatus(esc(playerName) + ' hat gebuzzert!', '#f0c030', '18px');
      document.getElementById('pr-buzzer-area').style.display = 'none';

      if (isMe) {
        document.getElementById('pr-answer-label').textContent  = 'Was ist auf dem Bild? Schnell tippen!';
        document.getElementById('pr-answer-area').style.display = 'flex';
        var inp = document.getElementById('pr-answer-input');
        if (inp) { inp.value = ''; inp.focus(); }
        this._startAnswerTimer();
      } else {
        document.getElementById('pr-wait').style.display  = 'block';
        document.getElementById('pr-wait').textContent    = esc(playerName) + ' tippt gerade…';
      }
    },

    // ─────────────────────────────────────────────────────────
    // ANTWORT-TIMER  15 Sek.
    // ─────────────────────────────────────────────────────────
    _startAnswerTimer: function() {
      var self = this;
      this._timeLeft = ANSWER_S;
      var timerEl = document.getElementById('pr-answer-timer');
      if (timerEl) { timerEl.textContent = ANSWER_S + 's'; timerEl.style.color = '#f0c030'; }
      clearInterval(this._tickInterval);
      this._tickInterval = setInterval(function() {
        if (self.dead || self.phase !== 'buzzed') { clearInterval(self._tickInterval); return; }
        self._timeLeft--;
        if (timerEl) {
          timerEl.textContent = self._timeLeft + 's';
          timerEl.style.color = self._timeLeft <= 5 ? '#f55a3a' : '#f0c030';
        }
        if (self._timeLeft <= 0) { clearInterval(self._tickInterval); self._submitAnswer(); }
      }, 1000);
    },

    // ─────────────────────────────────────────────────────────
    // ANTWORT ABSENDEN
    // ─────────────────────────────────────────────────────────
    _submitAnswer: function() {
      if (this.phase !== 'buzzed' || this.dead) return;
      var me   = this.ctx.isHost ? 'p1' : 'p2';
      var inp  = document.getElementById('pr-answer-input');
      var text = (inp ? inp.value : '').trim();
      document.getElementById('pr-answer-area').style.display = 'none';
      clearInterval(this._tickInterval);
      if (this.ctx.isHost) {
        this._resolveAnswer(me, text);
      } else {
        this.ctx.network.send('pr_answer_attempt', { player: me, text: text });
        this._setStatus('Antwort gesendet…', '#c0c0d8', '16px');
      }
    },

    // ─────────────────────────────────────────────────────────
    // AUSWERTUNG  (Host only)
    // Richtig → Buzzer bekommt Punkt, Runde endet
    // Falsch  → Gegner bekommt Punkt, Enthüllung läuft weiter
    // ─────────────────────────────────────────────────────────
    _resolveAnswer: function(player, text) {
      if (!this.ctx.isHost || this.phase === 'result' || this.dead) return;
      clearInterval(this._tickInterval);

      var correct = this.currentImg.answer;
      var right   = isCorrect(text, correct);
      var opponent = player === 'p1' ? 'p2' : 'p1';

      if (right) {
        // ✓ Richtig → Buzzer +1 Punkt, Runde beenden
        this.phase = 'result';
        if (player === 'p1') this.p1Wins++; else this.p2Wins++;
        var data = {
          player: player, text: text, correct: correct, right: true,
          p1Wins: this.p1Wins, p2Wins: this.p2Wins
        };
        this.ctx.network.send('pr_result', data);
        this._showResult(data);
      } else {
        // ✗ Falsch → Gegner +1 Punkt, Enthüllung geht weiter
        if (opponent === 'p1') this.p1Wins++; else this.p2Wins++;
        beep(180, 0.25, 'sawtooth', 0.2);
        var resumeData = {
          wrongPlayer: player, wrongText: text, correct: correct,
          p1Wins: this.p1Wins, p2Wins: this.p2Wins
        };
        this.ctx.network.send('pr_resume', resumeData);
        this._resumeAfterWrong(resumeData);
      }
    },

    _resumeAfterWrong: function(data) {
      // Punkte aktualisieren
      if (data && data.p1Wins !== undefined) {
        this.p1Wins = data.p1Wins;
        this.p2Wins = data.p2Wins;
      }
      this._drawDots();

      this.phase   = 'revealing';
      this._buzzed = null;
      document.getElementById('pr-buzzer-area').style.display = 'flex';
      document.getElementById('pr-wait').style.display        = 'none';
      document.getElementById('pr-answer-area').style.display = 'none';

      var self = this;
      this._setStatus('FALSCH! Weiter…', '#f55a3a', '17px');
      setTimeout(function() {
        if (!self.dead && self.phase === 'revealing')
          self._setStatus('WER ERKENNT DAS BILD?', '#f0c030', '17px');
      }, 1500);

      // Nur Host steuert das Reveal-Intervall!
      // Guest bekommt Kacheln via pr_reveal_tile Events vom Host.
      if (this.ctx.isHost) this._startReveal();
    },

    // ─────────────────────────────────────────────────────────
    // ERGEBNIS ANZEIGEN
    // ─────────────────────────────────────────────────────────
    _showResult: function(data) {
      var self = this;
      this._stopReveal();
      clearInterval(this._tickInterval);
      this.phase = 'result';

      // Alle Kacheln entfernen → volles Bild sichtbar
      this._revealAllTiles();

      document.getElementById('pr-img-wrap').style.display    = 'none';
      document.getElementById('pr-buzzer-area').style.display = 'none';
      document.getElementById('pr-answer-area').style.display = 'none';
      document.getElementById('pr-timer').style.display       = 'none';
      document.getElementById('pr-wait').style.display        = 'none';

      var ov = document.getElementById('pr-ov');

      if (data.noBuzz) {
        document.getElementById('pr-ov-ico').textContent  = '⏱️';
        document.getElementById('pr-ov-ttl').textContent  = 'Niemand hat gebuzzert!';
        document.getElementById('pr-ov-answer').innerHTML =
          'Die Antwort war: <span style="color:#2af0a0;font-size:18px;">' + esc(data.correct) + '</span><br>' +
          '<span style="font-size:12px;color:#888;">Kein Punkt für diese Runde.</span>';
      } else {
        var bname = data.player === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
        document.getElementById('pr-ov-ico').textContent  = data.right ? '🎉' : '❌';
        document.getElementById('pr-ov-ttl').textContent  = data.right
          ? esc(bname) + ' hat es erraten!'
          : 'Falsch!';
        document.getElementById('pr-ov-answer').innerHTML =
          'Eingabe: <span style="color:' + (data.right ? '#2af0a0' : '#f55a3a') + ';">' + esc(data.text || '—') + '</span>' +
          ' &nbsp;·&nbsp; Lösung: <span style="color:#2af0a0;">' + esc(data.correct) + '</span>';
      }

      // Overlay-Bild
      var ovImg = document.getElementById('pr-ov-img');
      if (ovImg && this.currentImg) ovImg.src = this.currentImg.url;

      function badge(name, col, wins) {
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:12px;color:' + col + ';">' + esc(name) + '</div>' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:34px;color:' + col + ';">' + wins + '</div>' +
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;color:#6666aa;' +
            'text-transform:uppercase;letter-spacing:.15em;">Punkte</div>' +
          '</div>';
      }
      document.getElementById('pr-ov-badges').innerHTML =
        badge(this.ctx.p1Name, '#3ab4f5', data.p1Wins) +
        '<div style="color:#c0c0d8;padding-top:10px;font-size:13px;">VS</div>' +
        badge(this.ctx.p2Name, '#f55a3a', data.p2Wins);

      document.getElementById('pr-ov-sc').innerHTML =
        data.p1Wins + ' : ' + data.p2Wins + ' &nbsp;·&nbsp; Ziel: ' + WIN_SCORE + ' Punkte';

      this._drawDots();
      ov.style.display = 'flex';

      if (!data.noBuzz) beep(data.right ? 660 : 220, 0.2, data.right ? 'sine' : 'sawtooth', 0.2);
      else beep(330, 0.3, 'triangle', 0.15);

      var gameOver = data.p1Wins >= WIN_SCORE || data.p2Wins >= WIN_SCORE;
      var btn = document.getElementById('pr-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('pr_next', { gameOver: gameOver });
          if (gameOver) self._finish();
          else { self.mini++; self._startMini(); ov.style.display = 'none'; }
        };
      } else {
        btn.style.display = 'none';
      }
    },

    // ─────────────────────────────────────────────────────────
    // PUNKTE-DOTS
    // ─────────────────────────────────────────────────────────
    _drawDots: function() {
      var el = document.getElementById('pr-dots'); if (!el) return;
      var bs = 'display:inline-block;width:9px;height:9px;border-radius:50%;margin:0 2px;border:2px solid ';
      var d1 = '', d2 = '';
      for (var i = 0; i < WIN_SCORE; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML = d1 +
        '<span style="color:#c0c0d8;margin:0 8px;font-size:11px;">RUNDE ' + this.mini + '</span>' +
        d2;
    },

    // ─────────────────────────────────────────────────────────
    // HILFSFUNKTIONEN
    // ─────────────────────────────────────────────────────────
    _setStatus: function(t, c, s) {
      var el = document.getElementById('pr-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },
    _clearAllTimers: function() {
      this._stopReveal();
      clearInterval(this._tickInterval);
      this._cdTimers.forEach(clearTimeout);
      this._cdTimers = [];
    },
    _finish: function() {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= WIN_SCORE ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },
    destroy: function() {
      this.dead = true;
      this._clearAllTimers();
      ['pr_start_countdown', 'pr_sync_image', 'pr_reveal_tile', 'pr_buzz',
       'pr_answer_attempt', 'pr_result', 'pr_resume', 'pr_no_buzz', 'pr_next'
      ].forEach(function(e) { this.ctx.network.off(e); }, this);
    }
  };

  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id: 'pixel-raten',
    name: 'Pixel-Raten',
    description: 'Bild wird kachelweise aufgedeckt. Buzzen & richtig = 1 Punkt. Falsch gebuzzert = Gegner bekommt 1 Punkt + Aufdecken geht weiter. Niemand gebuzzert = kein Punkt. Wer zuerst 6 Punkte hat, gewinnt!',
    init: function(container, ctx, onEnd) { this._instance = new PixelRatenInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
