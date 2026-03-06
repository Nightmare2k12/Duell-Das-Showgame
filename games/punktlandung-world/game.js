(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // LOCATIONS DATENBANK  (42 Einträge)
  // ═══════════════════════════════════════════════════════════
  var LOCATIONS = [
    { name: 'Mount Everest',              lat:  27.9881,  lng:  86.9250 },
    { name: 'Eiffelturm, Paris',          lat:  48.8584,  lng:   2.2945 },
    { name: 'Machu Picchu, Peru',         lat: -13.1631,  lng: -72.5450 },
    { name: 'Taj Mahal, Indien',          lat:  27.1751,  lng:  78.0421 },
    { name: 'Niagarafälle',               lat:  43.0962,  lng: -79.0377 },
    { name: 'Große Pyramide von Gizeh',   lat:  29.9792,  lng:  31.1342 },
    { name: 'Kolosseum, Rom',             lat:  41.8902,  lng:  12.4922 },
    { name: 'Sydney Opera House',         lat: -33.8568,  lng: 151.2153 },
    { name: 'Victoria-See, Afrika',       lat:  -1.0000,  lng:  33.0000 },
    { name: 'Times Square, New York',     lat:  40.7580,  lng: -73.9855 },
    { name: 'Angkor Wat, Kambodscha',     lat:  13.4125,  lng: 103.8670 },
    { name: 'Copacabana, Rio de Janeiro', lat: -22.9711,  lng: -43.1822 },
    { name: 'Big Ben, London',            lat:  51.5007,  lng:  -0.1246 },
    { name: 'Uluru / Ayers Rock',         lat: -25.3444,  lng: 131.0369 },
    { name: 'Kilimandscharo',             lat:  -3.0674,  lng:  37.3556 },
    { name: 'Sagrada Família, Barcelona', lat:  41.4036,  lng:   2.1744 },
    { name: 'Chichén Itzá, Mexiko',       lat:  20.6843,  lng: -88.5678 },
    { name: 'Akropolis, Athen',           lat:  37.9715,  lng:  23.7267 },
    { name: 'Stonehenge, England',        lat:  51.1789,  lng:  -1.8262 },
    { name: 'Yellowstone Supervolcan',    lat:  44.4280,  lng:-110.5885 },
    { name: 'Galápagos-Inseln',           lat:  -0.9538,  lng: -90.9656 },
    { name: 'Nordkap, Norwegen',          lat:  71.1693,  lng:  25.7843 },
    { name: 'Kapstadt, Südafrika',        lat: -33.9249,  lng:  18.4241 },
    { name: 'Burj Khalifa, Dubai',        lat:  25.1972,  lng:  55.2744 },
    { name: 'Tokio, Japan',               lat:  35.6762,  lng: 139.6503 },
    { name: 'Moskau, Roter Platz',        lat:  55.7539,  lng:  37.6208 },
    { name: 'Mumbai, Indien',             lat:  19.0760,  lng:  72.8777 },
    { name: 'Kap der Guten Hoffnung',     lat: -34.3568,  lng:  18.4734 },
    { name: 'Baikalsee, Sibirien',        lat:  53.5587,  lng: 108.1650 },
    { name: 'Geysir Strokkur, Island',    lat:  64.3131,  lng: -20.3025 },
    { name: 'Torres del Paine, Chile',    lat: -50.9423,  lng: -73.4068 },
    { name: 'Matterhorn, Schweiz',        lat:  45.9763,  lng:   7.6586 },
    { name: 'Kairo, Ägypten',             lat:  30.0444,  lng:  31.2357 },
    { name: 'Mexico City',                lat:  19.4326,  lng: -99.1332 },
    { name: 'Bangkok, Thailand',          lat:  13.7563,  lng: 100.5018 },
    { name: 'Hagia Sophia, Istanbul',     lat:  41.0086,  lng:  28.9802 },
    { name: 'Nairobi, Kenia',             lat:  -1.2921,  lng:  36.8219 },
    { name: 'Buenos Aires, Argentinien',  lat: -34.6037,  lng: -58.3816 },
    { name: 'Vancouver, Kanada',          lat:  49.2827,  lng:-123.1207 },
    { name: 'Sahara, Algerien',           lat:  23.4162,  lng:  25.6628 },
    { name: 'Phuket, Thailand',           lat:   7.8804,  lng:  98.3923 },
    { name: 'Petra, Jordanien',           lat:  30.3285,  lng:  35.4444 },

    // ── LEICHTE FRAGEN (bekannte Weltstädte & Wahrzeichen) ────
    { name: 'Brandenburger Tor, Berlin',  lat:  52.5163,  lng:  13.3777 },
    { name: 'Weißes Haus, Washington',    lat:  38.8977,  lng: -77.0365 },
    { name: 'Kreml, Moskau',              lat:  55.7520,  lng:  37.6175 },
    { name: 'Verbotene Stadt, Peking',    lat:  39.9163,  lng: 116.3972 },
    { name: 'Statue of Liberty',          lat:  40.6892,  lng: -74.0445 },
    { name: 'Buckingham Palace, London',  lat:  51.5014,  lng:  -0.1419 },
    { name: 'Elbphilharmonie, Hamburg',   lat:  53.5413,  lng:   9.9842 },
    { name: 'Schiefer Turm von Pisa',     lat:  43.7230,  lng:  10.3966 },
    { name: 'Nil-Delta, Ägypten',         lat:  31.1656,  lng:  31.8736 },
    { name: 'Amazonas-Mündung, Brasilien',lat:  -0.1670,  lng: -50.0510 },
    { name: 'Venedig, Italien',           lat:  45.4408,  lng:  12.3155 },
    { name: 'Amsterdam, Niederlande',     lat:  52.3676,  lng:   4.9041 },
    { name: 'Prag, Tschechien',           lat:  50.0755,  lng:  14.4378 },
    { name: 'Wien, Österreich',           lat:  48.2082,  lng:  16.3738 },
    { name: 'Kopenhagen, Dänemark',       lat:  55.6761,  lng:  12.5683 },
    { name: 'Stockholm, Schweden',        lat:  59.3293,  lng:  18.0686 },
    { name: 'Lissabon, Portugal',         lat:  38.7169,  lng:  -9.1395 },
    { name: 'Warschau, Polen',            lat:  52.2297,  lng:  21.0122 },
    { name: 'Seoul, Südkorea',            lat:  37.5665,  lng: 126.9780 },
    { name: 'Jakarta, Indonesien',        lat:  -6.2088,  lng: 106.8456 },

    // ── MITTLERE FRAGEN (Naturwunder & weniger offensichtliche Städte) ─
    { name: 'Victoriafälle, Sambia',      lat: -17.9243,  lng:  25.8572 },
    { name: 'Großes Barrier Riff',        lat: -18.2861,  lng: 147.6992 },
    { name: 'Pantanal, Brasilien',        lat: -17.0000,  lng: -57.0000 },
    { name: 'Gobi-Wüste, Mongolei',       lat:  42.5938,  lng: 103.4314 },
    { name: 'Atacama-Wüste, Chile',       lat: -23.8671,  lng: -69.3318 },
    { name: 'Okavango-Delta, Botswana',   lat: -19.3000,  lng:  22.9000 },
    { name: 'Lake Titicaca, Bolivien',    lat: -15.8402,  lng: -69.3342 },
    { name: 'Trolltunga, Norwegen',       lat:  60.1240,  lng:   6.7390 },
    { name: 'Pamukkale, Türkei',          lat:  37.9214,  lng:  29.1200 },
    { name: 'Bagan, Myanmar',             lat:  21.1717,  lng:  94.8585 },
    { name: 'Moai, Osterinsel',           lat: -27.1127,  lng:-109.3497 },
    { name: 'Timbuktu, Mali',             lat:  16.7666,  lng:  -3.0026 },
    { name: 'Ushuaia, Argentinien',       lat: -54.8019,  lng: -68.3030 },
    { name: 'Reykjavik, Island',          lat:  64.1265,  lng: -21.8174 },
    { name: 'Casablanca, Marokko',        lat:  33.5731,  lng:  -7.5898 },
    { name: 'Addis Abeba, Äthiopien',     lat:   9.0320,  lng:  38.7469 },
    { name: 'Colombo, Sri Lanka',         lat:   6.9271,  lng:  79.8612 },
    { name: 'Ulaanbaatar, Mongolei',      lat:  47.8864,  lng: 106.9057 },
    { name: 'La Paz, Bolivien',           lat: -16.5000,  lng: -68.1193 },
    { name: 'Antananarivo, Madagaskar',   lat: -18.8792,  lng:  47.5079 },

    // ── SCHWERE FRAGEN (abgelegene Orte & Geografie-Wissen) ──
    { name: 'Punkt Nemo (Ozeanpol)',      lat: -48.8767,  lng:-123.3933 },
    { name: 'Bouvetinsel (Norwegen)',     lat: -54.4208,  lng:   3.3464 },
    { name: 'Tristan da Cunha',           lat: -37.1052,  lng: -12.2777 },
    { name: 'Oymyakon, Russland',         lat:  63.4608,  lng: 142.7867 },
    { name: 'Dallol, Äthiopien',          lat:  14.2417,  lng:  40.2970 },
    { name: 'Sokotra-Insel, Jemen',       lat:  12.4634,  lng:  53.8237 },
    { name: 'Kerguelen-Inseln',           lat: -49.3500,  lng:  70.2167 },
    { name: 'Qolsharif-Moschee, Kasan',  lat:  55.7981,  lng:  49.1064 },
    { name: 'Ittoqqortoormiit, Grönland', lat:  70.4833,  lng: -21.9667 },
    { name: 'Puerto Williams, Chile',     lat: -54.9350,  lng: -67.6160 },
  ];

  // ═══════════════════════════════════════════════════════════
  // UTILITIES
  // ═══════════════════════════════════════════════════════════
  function beep(freq, dur, type, vol) {
    try {
      var ac = new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = freq; o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(); o.stop(ac.currentTime + dur + 0.05);
    } catch (e) {}
  }

  function haversineKm(lat1, lng1, lat2, lng2) {
    var R = 6371, r = Math.PI / 180;
    var dLat = (lat2 - lat1) * r, dLng = (lng2 - lng1) * r;
    var a = Math.sin(dLat/2)*Math.sin(dLat/2)
          + Math.cos(lat1*r)*Math.cos(lat2*r)*Math.sin(dLng/2)*Math.sin(dLng/2);
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  }

  function fmtKm(d) {
    if (!isFinite(d)) return '–';
    return d >= 1000 ? (d/1000).toFixed(1) + ' Tsd. km' : Math.round(d) + ' km';
  }

  // ═══════════════════════════════════════════════════════════
  // INJECT CSS (once)
  // ═══════════════════════════════════════════════════════════
  (function () {
    if (document.getElementById('pl-styles')) return;
    var s = document.createElement('style');
    s.id = 'pl-styles';
    s.textContent = [
      '.pl-tip.leaflet-tooltip {',
      '  background:rgba(4,14,22,.96)!important;',
      '  border:1px solid #2af0a0!important;',
      '  color:#2af0a0!important;',
      '  font-family:"Bebas Neue",sans-serif!important;',
      '  font-size:13px!important;',
      '  letter-spacing:.08em!important;',
      '  box-shadow:0 0 12px #2af0a044!important;',
      '  padding:4px 10px!important;',
      '}',
      '.pl-tip.leaflet-tooltip::before { border-top-color:#2af0a0!important; }',
      /* km-Labels: transform-zentriert, Leaflet setzt kein iconSize */
      '.pl-km-label { transform: translate(-50%, -50%); }',
      '.leaflet-control-zoom a {',
      '  background:rgba(6,6,22,.9)!important;',
      '  color:#f0c030!important;',
      '  border-color:rgba(240,192,48,.3)!important;',
      '}',
    ].join('\n');
    document.head.appendChild(s);
  })();

  // ═══════════════════════════════════════════════════════════
  // MAIN INSTANCE
  // ═══════════════════════════════════════════════════════════
  function PunktlandungInstance(container, ctx, onEnd) {
    this.container     = container;
    this.ctx           = ctx;
    this.onEnd         = onEnd;
    this.dead          = false;
    this.mini          = 1;
    this.p1Wins        = 0;
    this.p2Wins        = 0;
    this._roundTimer   = null;
    this._tickInterval = null;
    this.phase         = 'idle';
    this.currentLoc    = null;
    this._deck         = [];
    this.p1Guess       = null;
    this.p2Guess       = null;
    this.p1Locked      = false;
    this.p2Locked      = false;
    this._timeLeft     = 120;
    this._map          = null;
    this._p1Marker     = null;
    this._p2Marker     = null;
    this._solMarker    = null;
    this._line1        = null;
    this._line2        = null;

    this._buildUI();
    this._setupNet();
  }

  PunktlandungInstance.prototype = {

    // ─── BUILD UI ─────────────────────────────────────────────
    _buildUI: function () {
      var self = this;
      this.container.innerHTML = '';

      // We render into a wrapper that we fully control
      var wrap = document.createElement('div');
      wrap.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);position:relative;overflow:hidden;font-family:"Bebas Neue",sans-serif;';

      // ── TOP BAR ──────────────────────────────────────────────
      var topBar = document.createElement('div');
      topBar.style.cssText = 'flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:8px 16px 5px;';
      topBar.innerHTML = [
        '<div style="display:flex;flex-direction:column;align-items:flex-start;gap:3px;">',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.4em;color:#3ab4f5;text-transform:uppercase;">' + this.ctx.p1Name + '</div>',
          '<div id="pl-dots-p1" style="display:flex;gap:5px;"></div>',
        '</div>',
        '<div style="text-align:center;">',
          '<div style="font-size:18px;letter-spacing:.12em;color:#f0c030;">PUNKTLANDUNG</div>',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;letter-spacing:.3em;color:#c0c0d8;text-transform:uppercase;">Weltweit &nbsp;·&nbsp; <span id="pl-round-badge">Runde 1</span></div>',
        '</div>',
        '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;">',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.4em;color:#f55a3a;text-transform:uppercase;">' + this.ctx.p2Name + '</div>',
          '<div id="pl-dots-p2" style="display:flex;gap:5px;"></div>',
        '</div>',
      ].join('');
      wrap.appendChild(topBar);

      // ── QUESTION STRIP ───────────────────────────────────────
      var qStrip = document.createElement('div');
      qStrip.style.cssText = 'flex-shrink:0;background:rgba(240,192,48,.10);border-top:1px solid rgba(240,192,48,.18);border-bottom:1px solid rgba(240,192,48,.18);padding:7px 16px;display:flex;align-items:center;justify-content:space-between;';
      qStrip.innerHTML = [
        '<div id="pl-question-text" style="font-family:\'Barlow Condensed\',sans-serif;font-size:16px;color:#f0e88a;letter-spacing:.05em;flex:1;text-align:center;"></div>',
        '<div id="pl-timer" style="font-size:22px;color:#f0c030;letter-spacing:.05em;margin-left:12px;min-width:46px;text-align:right;display:none;">2:00</div>',
      ].join('');
      wrap.appendChild(qStrip);

      // ── MAP AREA ─────────────────────────────────────────────
      // Key fix: use a div that grows via flex:1, then put the
      // Leaflet map inside as position:absolute filling its parent.
      var mapArea = document.createElement('div');
      mapArea.style.cssText = 'flex:1;position:relative;min-height:0;overflow:hidden;';
      wrap.appendChild(mapArea);

      // Leaflet target — absolutely fills mapArea
      var mapDiv = document.createElement('div');
      mapDiv.id = 'pl-map';
      mapDiv.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:0;';
      mapArea.appendChild(mapDiv);

      // Start overlay (sits above map)
      var startOv = document.createElement('div');
      startOv.id = 'pl-start-overlay';
      startOv.style.cssText = 'position:absolute;inset:0;z-index:1000;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,6,22,.75);pointer-events:auto;';
      startOv.innerHTML = [
        '<div style="font-size:clamp(18px,5vw,36px);color:#f0c030;letter-spacing:.1em;margin-bottom:6px;">PUNKTLANDUNG</div>',
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;letter-spacing:.35em;text-transform:uppercase;margin-bottom:22px;">Weltweit Edition</div>',
        this.ctx.isHost
          ? '<button id="pl-start-btn" style="background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">RUNDE STARTEN</button>'
          : '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;color:#c0c0d8;letter-spacing:.3em;text-transform:uppercase;">Warten auf Host…</div>',
      ].join('');
      mapArea.appendChild(startOv);

      // Lock bar (pinned to bottom of map area)
      var lockBar = document.createElement('div');
      lockBar.id = 'pl-lock-bar';
      lockBar.style.cssText = 'position:absolute;bottom:0;left:0;right:0;z-index:1000;background:rgba(6,6,22,.88);padding:8px 14px;display:none;flex-direction:row;align-items:center;justify-content:space-between;gap:10px;';
      lockBar.innerHTML = [
        '<div id="pl-lock-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.18em;color:#c0c0d8;text-transform:uppercase;flex:1;"></div>',
        '<button id="pl-lock-btn" style="display:none;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:15px;letter-spacing:.1em;padding:9px 26px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));white-space:nowrap;">TIPP EINLOGGEN</button>',
      ].join('');
      mapArea.appendChild(lockBar);

      // ── RESULT OVERLAY ───────────────────────────────────────
      var resOv = document.createElement('div');
      resOv.id = 'pl-ov';
      resOv.style.cssText = 'position:absolute;inset:0;z-index:1100;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:24px;';
      resOv.innerHTML = [
        '<div id="pl-ov-ico" style="font-size:44px;"></div>',
        '<div id="pl-ov-ttl" style="font-size:clamp(20px,6vw,42px);color:#f0c030;letter-spacing:.05em;line-height:1.1;"></div>',
        '<div id="pl-ov-loc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#a0a0bc;letter-spacing:.15em;"></div>',
        '<div id="pl-ov-dists" style="display:flex;gap:20px;margin:6px 0;justify-content:center;flex-wrap:wrap;"></div>',
        '<div id="pl-ov-pts" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
        '<button id="pl-ov-btn" style="margin-top:6px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:11px 38px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">NÄCHSTE RUNDE →</button>',
      ].join('');
      wrap.appendChild(resOv);

      this.container.appendChild(wrap);
      this._drawDots();

      // Wire up buttons
      if (this.ctx.isHost) {
        var sb = document.getElementById('pl-start-btn');
        if (sb) sb.addEventListener('click', function () {
          self.ctx.network.send('pl_start_countdown', {});
          self._beginRound();
        });
      }
      document.getElementById('pl-lock-btn').addEventListener('click', function () {
        self._lockGuess();
      });

      // Init Leaflet AFTER the DOM is appended and has real dimensions
      setTimeout(function () { self._initMap(); }, 60);
    },

    // ─── MAP INIT ─────────────────────────────────────────────
    // ─── ANTIMERIDIAN FIX ─────────────────────────────────────
    // Leaflet zeichnet eine gerade Linie wenn ein Polygon-Ring
    // von +179° auf -179° springt (Russland/Alaska).
    // Diese Funktion splittet solche Ringe korrekt auf.
    // ─── MAP INIT ─────────────────────────────────────────────
    _initMap: function () {
      var self = this;
      if (typeof L === 'undefined') {
        console.warn('[Punktlandung] Leaflet (L) ist nicht geladen!');
        return;
      }

      var mapEl = document.getElementById('pl-map');
      if (!mapEl) return;

      if (this._map) { try { this._map.remove(); } catch(e){} this._map = null; }

      var worldBounds = L.latLngBounds(L.latLng(-85, -180), L.latLng(85, 180));

      this._map = L.map(mapEl, {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 6,
        zoomControl: true,
        attributionControl: false,
        worldCopyJump: false,
        maxBounds: worldBounds,
        maxBoundsViscosity: 1.0,
      });

      // ESRI World Physical Map:
      // Zeigt Topographie (Gebirge, Tiefland, Ozean) aber KEINERLEI
      // politische Inhalte — keine Ländergrenzen, keine Städte, keine Straßen.
      // Funktioniert ohne API-Key, ohne TopoJSON, ohne GeoJSON-Bugs.
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
        {
          maxZoom: 6,
          noWrap: true,
          bounds: worldBounds,
        }
      ).addTo(this._map);

      this._map.on('click', function (e) {
        self._handleMapClick(e.latlng.lat, e.latlng.lng);
      });

      setTimeout(function () {
        if (self._map) self._map.invalidateSize();
      }, 100);
    },



    // ─── MAP CLICK ────────────────────────────────────────────
    _handleMapClick: function (lat, lng) {
      if (this.phase !== 'answering' || this.dead) return;
      var isP1 = this.ctx.isHost;
      if (isP1 && this.p1Locked) return;
      if (!isP1 && this.p2Locked) return;

      if (isP1) {
        this.p1Guess = { lat: lat, lng: lng };
        this._placeMarker('p1', lat, lng);
      } else {
        this.p2Guess = { lat: lat, lng: lng };
        this._placeMarker('p2', lat, lng);
        this.ctx.network.send('pl_preview', { lat: lat, lng: lng });
      }
      this._updateLockBar();
    },

    _placeMarker: function (who, lat, lng) {
      var self = this;
      var isP1 = (who === 'p1');
      var locked = isP1 ? this.p1Locked : this.p2Locked;
      var color  = isP1 ? '#3ab4f5' : '#f55a3a';
      var html   = [
        '<div style="',
        'width:16px;height:16px;border-radius:50%;',
        'background:' + color + ';border:2px solid #fff;',
        'box-shadow:0 0 10px ' + color + 'cc;',
        'transform:translate(-50%,-50%);',
        '"></div>',
      ].join('');

      var icon = L.divIcon({ className: '', html: html, iconSize: [0,0], iconAnchor: [0,0] });
      var prev = isP1 ? this._p1Marker : this._p2Marker;
      if (prev) this._map.removeLayer(prev);

      var marker = L.marker([lat, lng], { icon: icon, draggable: !locked }).addTo(this._map);

      marker.on('dragend', function (e) {
        var ll = e.target.getLatLng();
        if (isP1) {
          self.p1Guess = { lat: ll.lat, lng: ll.lng };
        } else {
          self.p2Guess = { lat: ll.lat, lng: ll.lng };
          self.ctx.network.send('pl_preview', { lat: ll.lat, lng: ll.lng });
        }
        self._updateLockBar();
      });

      if (isP1) this._p1Marker = marker;
      else      this._p2Marker = marker;
    },

    // ─── LOCK BAR ─────────────────────────────────────────────
    _updateLockBar: function () {
      var bar    = document.getElementById('pl-lock-bar');
      var btn    = document.getElementById('pl-lock-btn');
      var status = document.getElementById('pl-lock-status');
      if (!bar) return;

      if (this.phase !== 'answering') { bar.style.display = 'none'; return; }
      bar.style.display = 'flex';

      var isP1     = this.ctx.isHost;
      var hasGuess = isP1 ? !!this.p1Guess : !!this.p2Guess;
      var locked   = isP1 ? this.p1Locked  : this.p2Locked;

      if (btn) btn.style.display = (hasGuess && !locked) ? 'block' : 'none';

      var p1s = '<span style="color:#3ab4f5;">' + this.ctx.p1Name + ': '
        + (this.p1Locked ? '✓ Eingeloggt' : this.p1Guess ? '📍 Gesetzt' : '…wartet') + '</span>';
      var p2s = '<span style="color:#f55a3a;">' + this.ctx.p2Name + ': '
        + (this.p2Locked ? '✓ Eingeloggt' : this.p2Guess ? '📍 Gesetzt' : '…wartet') + '</span>';
      if (status) status.innerHTML = p1s + '&ensp;|&ensp;' + p2s;
    },

    // ─── NETWORK ──────────────────────────────────────────────
    _setupNet: function () {
      var self = this;

      this.ctx.network.on('pl_start_countdown', function () {
        if (!self.ctx.isHost) self._beginRound();
      });

      this.ctx.network.on('pl_sync_question', function (msg) {
        if (self.ctx.isHost) return;
        self.currentLoc = { name: msg.name, lat: msg.lat, lng: msg.lng };
        self._showQuestion(msg.name);
        self._startAnswering();
      });

      this.ctx.network.on('pl_preview', function (msg) {
        if (!self.ctx.isHost || self.p2Locked) return;
        self.p2Guess = { lat: msg.lat, lng: msg.lng };
        self._placeMarker('p2', msg.lat, msg.lng);
      });

      this.ctx.network.on('pl_lock', function (msg) {
        if (self.ctx.isHost && msg.player === 'p2') {
          self.p2Guess  = { lat: msg.lat, lng: msg.lng };
          self.p2Locked = true;
          self._placeMarker('p2', msg.lat, msg.lng);
          self._updateLockBar();
          self._tryResolve();
        }
      });

      this.ctx.network.on('pl_show_result', function (msg) {
        if (self.ctx.isHost) return;
        var revealBar = document.getElementById('pl-reveal-bar');
        if (revealBar) revealBar.style.display = 'none';
        self._showResultOverlay(msg);
      });

      this.ctx.network.on('pl_timeout', function () {
        if (!self.ctx.isHost) self._resolveRound();
      });

      this.ctx.network.on('pl_result', function (msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins;
        self.p2Wins = msg.p2Wins;
        if (msg.p1Guess) self._placeMarker('p1', msg.p1Guess.lat, msg.p1Guess.lng);
        if (msg.p2Guess) self._placeMarker('p2', msg.p2Guess.lat, msg.p2Guess.lng);
        self._showMapReveal(msg);
      });

      this.ctx.network.on('pl_next', function (msg) {
        if (msg.gameOver) { self._finish(); return; }
        self.mini++;
        document.getElementById('pl-ov').style.display = 'none';
        self._resetRound();
        document.getElementById('pl-start-overlay').style.display = 'flex';
      });
    },

    // ─── GAME FLOW ────────────────────────────────────────────
    _beginRound: function () {
      var startOv = document.getElementById('pl-start-overlay');
      if (startOv) startOv.style.display = 'none';

      if (this.ctx.isHost) {
        if (!this._deck.length) {
          this._deck = LOCATIONS.slice().sort(function () { return Math.random() - .5; });
        }
        this.currentLoc = this._deck.pop();
        this.ctx.network.send('pl_sync_question', {
          name: this.currentLoc.name,
          lat:  this.currentLoc.lat,
          lng:  this.currentLoc.lng,
        });
        this._showQuestion(this.currentLoc.name);
        this._startAnswering();
      }

      // Ensure map has correct size now that overlay is hidden
      var self = this;
      setTimeout(function () { if (self._map) self._map.invalidateSize(); }, 80);
    },

    _showQuestion: function (name) {
      var el = document.getElementById('pl-question-text');
      if (el) el.textContent = 'Wo liegt: ' + name + '?';
    },

    _startAnswering: function () {
      var self = this;
      this.phase = 'answering';
      this._updateLockBar();

      this._timeLeft = 120;
      var timerEl = document.getElementById('pl-timer');
      if (timerEl) { timerEl.style.display = 'block'; timerEl.style.color = '#f0c030'; timerEl.textContent = '2:00'; }

      this._tickInterval = setInterval(function () {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var m = Math.floor(self._timeLeft / 60), s = self._timeLeft % 60;
        if (timerEl) {
          timerEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
          timerEl.style.color = self._timeLeft <= 10 ? '#f55a3a' : '#f0c030';
        }
        if (self._timeLeft <= 0) {
          self._clearTimers();
          if (self.ctx.isHost) { self.ctx.network.send('pl_timeout', {}); self._resolveRound(); }
        }
      }, 1000);

      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function () {
          self.ctx.network.send('pl_timeout', {});
          self._resolveRound();
        }, 121000);
      }
      beep(550, 0.1, 'sine', 0.12);
    },

    _lockGuess: function () {
      if (this.phase !== 'answering' || this.dead) return;
      var isP1 = this.ctx.isHost;
      if (isP1) {
        if (!this.p1Guess || this.p1Locked) return;
        this.p1Locked = true;
        if (this._p1Marker) this._p1Marker.dragging.disable();
        beep(700, 0.08, 'sine', 0.18);
        this._updateLockBar();
        this._tryResolve();
      } else {
        if (!this.p2Guess || this.p2Locked) return;
        this.p2Locked = true;
        if (this._p2Marker) this._p2Marker.dragging.disable();
        beep(700, 0.08, 'sine', 0.18);
        this.ctx.network.send('pl_lock', { player: 'p2', lat: this.p2Guess.lat, lng: this.p2Guess.lng });
        this._updateLockBar();
      }
    },

    _tryResolve: function () {
      if (this.ctx.isHost && this.p1Locked && this.p2Locked) this._resolveRound();
    },

    _resolveRound: function () {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result';
      this._clearTimers();

      var loc = this.currentLoc;
      var p1d = this.p1Guess ? haversineKm(this.p1Guess.lat, this.p1Guess.lng, loc.lat, loc.lng) : Infinity;
      var p2d = this.p2Guess ? haversineKm(this.p2Guess.lat, this.p2Guess.lng, loc.lat, loc.lng) : Infinity;

      var p1Pts = 0, p2Pts = 0;
      if (p1d < p2d) p1Pts = 1;
      else if (p2d < p1d) p2Pts = 1;

      this.p1Wins += p1Pts;
      this.p2Wins += p2Pts;

      var payload = {
        locName: loc.name, locLat: loc.lat, locLng: loc.lng,
        p1Guess: this.p1Guess, p2Guess: this.p2Guess,
        p1Dist: p1d, p2Dist: p2d,
        p1Pts: p1Pts, p2Pts: p2Pts,
        p1Wins: this.p1Wins, p2Wins: this.p2Wins,
      };

      if (this.ctx.isHost) {
        this.ctx.network.send('pl_result', payload);
        // Erst Karten-Auflösung zeigen, dann Ergebnis-Screen
        this._showMapReveal(payload);
      }
    },

    // ─── ZWISCHENPHASE: Lösung auf Karte zeigen ───────────────
    _showMapReveal: function (msg) {
      var self = this;

      // Timer verstecken
      var timerEl = document.getElementById('pl-timer');
      if (timerEl) timerEl.style.display = 'none';

      // Lock-Bar durch Reveal-Bar ersetzen
      var lockBar = document.getElementById('pl-lock-bar');
      if (lockBar) lockBar.style.display = 'none';

      // Lösung auf Karte zeichnen (mit km-Labels)
      this._drawSolution(msg);

      // Reveal-Button einblenden (nur Host)
      var revealBar = document.getElementById('pl-reveal-bar');
      if (!revealBar) {
        revealBar = document.createElement('div');
        revealBar.id = 'pl-reveal-bar';
        revealBar.style.cssText = 'position:absolute;bottom:0;left:0;right:0;z-index:1000;background:rgba(6,6,22,.92);padding:10px 16px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid rgba(240,192,48,.25);';
        var mapArea = document.getElementById('pl-map').parentNode;
        if (mapArea) mapArea.appendChild(revealBar);
      }

      // Distanz-Info
      var p1DistTxt = isFinite(msg.p1Dist) ? ('<span style="color:#3ab4f5;">' + this.ctx.p1Name + ': ' + fmtKm(msg.p1Dist) + '</span>') : '';
      var p2DistTxt = isFinite(msg.p2Dist) ? ('<span style="color:#f55a3a;">' + this.ctx.p2Name + ': ' + fmtKm(msg.p2Dist) + '</span>') : '';
      var winnerTxt = '';
      if (msg.p1Pts > 0) winnerTxt = '<span style="color:#2af0a0;margin-left:10px;">🏆 ' + this.ctx.p1Name + ' gewinnt die Runde!</span>';
      else if (msg.p2Pts > 0) winnerTxt = '<span style="color:#2af0a0;margin-left:10px;">🏆 ' + this.ctx.p2Name + ' gewinnt die Runde!</span>';
      else if (isFinite(msg.p1Dist) && isFinite(msg.p2Dist)) winnerTxt = '<span style="color:#f0c030;margin-left:10px;">Unentschieden!</span>';

      revealBar.innerHTML = [
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.12em;flex:1;display:flex;gap:16px;flex-wrap:wrap;align-items:center;">',
          p1DistTxt, p2DistTxt, winnerTxt,
        '</div>',
        this.ctx.isHost
          ? '<button id="pl-reveal-btn" style="background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:15px;letter-spacing:.1em;padding:9px 26px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));white-space:nowrap;">ERGEBNIS ANZEIGEN →</button>'
          : '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;color:#c0c0d8;letter-spacing:.2em;">Warten auf Host…</div>',
      ].join('');

      revealBar.style.display = 'flex';

      if (this.ctx.isHost) {
        var btn = document.getElementById('pl-reveal-btn');
        if (btn) btn.onclick = function () {
          revealBar.style.display = 'none';
          self.ctx.network.send('pl_show_result', msg);
          self._showResultOverlay(msg);
        };
      }

      beep(660, 0.15, 'sine', 0.15);
    },

    // ─── SOLUTION ON MAP ──────────────────────────────────────
    _drawSolution: function (msg) {
      if (!this._map) return;

      var solHtml = [
        '<div style="',
        'width:20px;height:20px;border-radius:50%;',
        'background:#2af0a0;border:3px solid #fff;',
        'box-shadow:0 0 16px #2af0a0;',
        'transform:translate(-50%,-50%);',
        '"></div>',
      ].join('');

      var solIcon = L.divIcon({ className: '', html: solHtml, iconSize: [0,0], iconAnchor: [0,0] });

      if (this._solMarker) this._map.removeLayer(this._solMarker);
      this._solMarker = L.marker([msg.locLat, msg.locLng], { icon: solIcon, zIndexOffset: 1000 })
        .addTo(this._map)
        .bindTooltip(msg.locName, { permanent: true, direction: 'top', className: 'pl-tip' });

      if (this._line1) this._map.removeLayer(this._line1);
      if (this._line2) this._map.removeLayer(this._line2);
      if (this._label1) this._map.removeLayer(this._label1);
      if (this._label2) this._map.removeLayer(this._label2);

      if (msg.p1Guess && isFinite(msg.p1Dist)) {
        this._line1 = L.polyline(
          [[msg.p1Guess.lat, msg.p1Guess.lng], [msg.locLat, msg.locLng]],
          { color: '#3ab4f5', weight: 2.5, dashArray: '7 5', opacity: 0.95 }
        ).addTo(this._map);
        var midLat1 = (msg.p1Guess.lat + msg.locLat) / 2;
        var midLng1 = (msg.p1Guess.lng + msg.locLng) / 2;
        var txt1 = fmtKm(msg.p1Dist);
        this._label1 = L.marker([midLat1, midLng1], {
          icon: L.divIcon({
            className: 'pl-km-label',
            html: '<div style="background:rgba(6,6,22,.92);border:1px solid #3ab4f5;color:#3ab4f5;font-family:\'Bebas Neue\',sans-serif;font-size:13px;padding:3px 8px;white-space:nowrap;width:max-content;letter-spacing:.08em;box-shadow:0 2px 6px rgba(0,0,0,.4);">' + txt1 + '</div>',
            iconSize: null,
            iconAnchor: null,
            popupAnchor: [0, 0],
          }),
          interactive: false, zIndexOffset: 500,
        }).addTo(this._map);
      }

      if (msg.p2Guess && isFinite(msg.p2Dist)) {
        this._line2 = L.polyline(
          [[msg.p2Guess.lat, msg.p2Guess.lng], [msg.locLat, msg.locLng]],
          { color: '#f55a3a', weight: 2.5, dashArray: '7 5', opacity: 0.95 }
        ).addTo(this._map);
        var midLat2 = (msg.p2Guess.lat + msg.locLat) / 2;
        var midLng2 = (msg.p2Guess.lng + msg.locLng) / 2;
        var txt2 = fmtKm(msg.p2Dist);
        this._label2 = L.marker([midLat2, midLng2], {
          icon: L.divIcon({
            className: 'pl-km-label',
            html: '<div style="background:rgba(6,6,22,.92);border:1px solid #f55a3a;color:#f55a3a;font-family:\'Bebas Neue\',sans-serif;font-size:13px;padding:3px 8px;white-space:nowrap;width:max-content;letter-spacing:.08em;box-shadow:0 2px 6px rgba(0,0,0,.4);">' + txt2 + '</div>',
            iconSize: null,
            iconAnchor: null,
          }),
          interactive: false, zIndexOffset: 500,
        }).addTo(this._map);
      }

      // Karte auf alle Punkte einpassen
      var pts = [[msg.locLat, msg.locLng]];
      if (msg.p1Guess) pts.push([msg.p1Guess.lat, msg.p1Guess.lng]);
      if (msg.p2Guess) pts.push([msg.p2Guess.lat, msg.p2Guess.lng]);
      try {
        this._map.fitBounds(L.latLngBounds(pts), { padding: [60, 60], maxZoom: 5 });
      } catch(e) {}
    },

    // ─── RESULT OVERLAY ───────────────────────────────────────
    _showResultOverlay: function (msg) {
      var self = this;
      var ov = document.getElementById('pl-ov');

      document.getElementById('pl-ov-ico').textContent = '🌍';
      document.getElementById('pl-ov-ttl').textContent = msg.locName;
      document.getElementById('pl-ov-loc').textContent =
        'Lat ' + parseFloat(msg.locLat).toFixed(3) + '  |  Lng ' + parseFloat(msg.locLng).toFixed(3);

      function card(name, dist, pts, color) {
        var won = pts > 0, noTip = !isFinite(dist);
        var valColor = noTip ? '#555' : (won ? '#2af0a0' : '#c0c0d8');
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;min-width:100px;">'
          + '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:' + color + ';">' + name + '</div>'
          + '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;color:' + valColor + ';">' + fmtKm(dist) + '</div>'
          + (won   ? '<div style="font-size:12px;color:#2af0a0;font-family:\'Barlow Condensed\',sans-serif;">+1 Punkt 🏆</div>' : '')
          + (noTip ? '<div style="font-size:11px;color:#555;font-family:\'Barlow Condensed\',sans-serif;">Kein Tipp</div>' : '')
          + '</div>';
      }

      var tie = msg.p1Pts === 0 && msg.p2Pts === 0 && isFinite(msg.p1Dist) && isFinite(msg.p2Dist);
      document.getElementById('pl-ov-dists').innerHTML =
        card(this.ctx.p1Name, msg.p1Dist, msg.p1Pts, '#3ab4f5')
        + (tie
            ? '<div style="padding-top:10px;font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#f0c030;">UNENTSCHIEDEN</div>'
            : '<div style="color:#c0c0d8;padding-top:8px;font-family:\'Barlow Condensed\',sans-serif;font-size:18px;">VS</div>')
        + card(this.ctx.p2Name, msg.p2Dist, msg.p2Pts, '#f55a3a');

      document.getElementById('pl-ov-pts').innerHTML =
        this.p1Wins + ' : ' + this.p2Wins + ' &nbsp;·&nbsp; Ziel: 5 Punkte';

      var timerEl = document.getElementById('pl-timer');
      if (timerEl) timerEl.style.display = 'none';

      this._drawDots();
      ov.style.display = 'flex';

      var gameOver = this.p1Wins >= 5 || this.p2Wins >= 5;
      var btn = document.getElementById('pl-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE →';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function () {
          self.ctx.network.send('pl_next', { gameOver: gameOver });
          if (gameOver) { self._finish(); return; }
          self.mini++;
          ov.style.display = 'none';
          self._resetRound();
          var startOv = document.getElementById('pl-start-overlay');
          if (startOv) startOv.style.display = 'flex';
        };
      } else {
        btn.style.display = 'none';
      }

      beep(gameOver ? 880 : 660, 0.3, 'sine', 0.2);
    },

    // ─── RESET ROUND ──────────────────────────────────────────
    _resetRound: function () {
      this.phase    = 'idle';
      this.p1Guess  = null; this.p2Guess  = null;
      this.p1Locked = false; this.p2Locked = false;
      this._clearTimers();
      this._cleanMapLayers();

      var qEl = document.getElementById('pl-question-text');
      if (qEl) qEl.textContent = '';
      var tEl = document.getElementById('pl-timer');
      if (tEl) { tEl.style.display = 'none'; tEl.textContent = '2:00'; }
      var rb = document.getElementById('pl-round-badge');
      if (rb) rb.textContent = 'Runde ' + this.mini;
      var revealBar = document.getElementById('pl-reveal-bar');
      if (revealBar) revealBar.style.display = 'none';

      this._updateLockBar();
      this._drawDots();

      if (this._map) this._map.setView([20, 0], 2);
    },

    _cleanMapLayers: function () {
      if (!this._map) return;
      if (this._p1Marker)  { this._map.removeLayer(this._p1Marker);  this._p1Marker  = null; }
      if (this._p2Marker)  { this._map.removeLayer(this._p2Marker);  this._p2Marker  = null; }
      if (this._solMarker) { this._map.removeLayer(this._solMarker); this._solMarker = null; }
      if (this._line1)     { this._map.removeLayer(this._line1);     this._line1     = null; }
      if (this._line2)     { this._map.removeLayer(this._line2);     this._line2     = null; }
      if (this._label1)    { this._map.removeLayer(this._label1);    this._label1    = null; }
      if (this._label2)    { this._map.removeLayer(this._label2);    this._label2    = null; }
    },

    // ─── DOTS ─────────────────────────────────────────────────
    _drawDots: function () {
      var self = this;
      ['p1','p2'].forEach(function (who) {
        var el = document.getElementById('pl-dots-' + who);
        if (!el) return;
        var wins  = who === 'p1' ? self.p1Wins : self.p2Wins;
        var color = who === 'p1' ? '#3ab4f5' : '#f55a3a';
        var html  = '';
        for (var i = 0; i < 5; i++) {
          html += '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;border:2px solid '
            + color + (i < wins ? ';background:' + color : ';background:transparent') + ';"></span>';
        }
        el.innerHTML = html;
      });
    },

    // ─── MISC ─────────────────────────────────────────────────
    _clearTimers: function () {
      clearTimeout(this._roundTimer);
      clearInterval(this._tickInterval);
    },

    _finish: function () {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= 5 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },

    destroy: function () {
      this.dead = true;
      this._clearTimers();
      if (this._map) { try { this._map.remove(); } catch(e){} this._map = null; }
      var evts = ['pl_start_countdown','pl_sync_question','pl_preview','pl_lock','pl_timeout','pl_result','pl_next'];
      var net = this.ctx.network;
      evts.forEach(function (ev) { try { net.off(ev); } catch(e){} });
    },
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id: 'punktlandung-world',
    name: 'PUNKTLANDUNG: Weltweit',
    description: 'Klicke auf die Weltkarte, wo du den gesuchten Ort vermutest. Wer näher dran ist, bekommt einen Punkt. Wer zuerst 5 Punkte hat, gewinnt!',
    init: function (container, ctx, onEnd) {
      this._instance = new PunktlandungInstance(container, ctx, onEnd);
    },
    destroy: function () {
      if (this._instance) this._instance.destroy();
    },
  });

})();
