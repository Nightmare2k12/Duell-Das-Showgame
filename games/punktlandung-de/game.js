(function () {
  'use strict';

  // ═══════════════════════════════════════════════════════════
  // LOCATIONS DATENBANK — DEUTSCHLAND  (80 Einträge)
  // ═══════════════════════════════════════════════════════════
  var LOCATIONS = [

    // ── LEICHT (40) — Großstädte, bekannte Wahrzeichen ────────
    { name: 'Brandenburger Tor, Berlin',        lat: 52.5163, lng: 13.3777 },
    { name: 'Hamburger Speicherstadt',          lat: 53.5440, lng:  9.9934 },
    { name: 'Kölner Dom',                       lat: 50.9413, lng:  6.9583 },
    { name: 'Frauenkirche, München',            lat: 48.1385, lng: 11.5734 },
    { name: 'Frankfurter Römer',                lat: 50.1109, lng:  8.6836 },
    { name: 'Stuttgarter Fernsehturm',          lat: 48.7560, lng:  9.1936 },
    { name: 'Düsseldorf, Altstadt',             lat: 51.2254, lng:  6.7763 },
    { name: 'Dresdner Frauenkirche',            lat: 51.0517, lng: 13.7412 },
    { name: 'Hannover Hauptbahnhof',            lat: 52.3769, lng:  9.7413 },
    { name: 'Nürnberger Burg',                  lat: 49.4584, lng: 11.0775 },
    { name: 'Potsdamer Schloss Sanssouci',      lat: 52.4039, lng: 13.0389 },
    { name: 'Bodensee, Konstanz',               lat: 47.6779, lng:  9.1743 },
    { name: 'Zugspitze',                        lat: 47.4211, lng: 10.9851 },
    { name: 'Sylt, Nordsee',                   lat: 55.0153, lng:  8.4295 },
    { name: 'Rügen, Ostsee',                   lat: 54.4291, lng: 13.5000 },
    { name: 'Heidelberger Schloss',             lat: 49.4102, lng:  8.7152 },
    { name: 'Neuschwanstein',                   lat: 47.5576, lng: 10.7498 },
    { name: 'Wartburg, Eisenach',              lat: 50.9657, lng: 10.3061 },
    { name: 'Oktoberfest-Gelände, München',     lat: 48.1315, lng: 11.5497 },
    { name: 'Rheinfall bei Schaffhausen',       lat: 47.6774, lng:  8.6159 },
    { name: 'Leipzig Völkerschlachtdenkmal',    lat: 51.3122, lng: 12.4132 },
    { name: 'Bremen, Marktplatz',               lat: 53.0758, lng:  8.8072 },
    { name: 'Kiel, Kieler Förde',              lat: 54.3233, lng: 10.1228 },
    { name: 'Flensburg, Nordertor',            lat: 54.7917, lng:  9.4341 },
    { name: 'Erfurt, Krämerbrücke',            lat: 50.9784, lng: 11.0300 },
    { name: 'Magdeburg, Dom',                  lat: 52.1277, lng: 11.6376 },
    { name: 'Schwerin, Schloss',               lat: 53.6246, lng: 11.4144 },
    { name: 'Mainz, Dom',                      lat: 49.9988, lng:  8.2741 },
    { name: 'Wiesbaden, Kurhaus',              lat: 50.0831, lng:  8.2453 },
    { name: 'Saarbrücken, Schlossplatz',       lat: 49.2321, lng:  7.0019 },
    { name: 'Augsburg, Rathaus',               lat: 48.3690, lng: 10.8978 },
    { name: 'Würzburg, Residenz',              lat: 49.7938, lng:  9.9300 },
    { name: 'Bamberg, Altstadt',               lat: 49.8988, lng: 10.9028 },
    { name: 'Regensburg, Steinerne Brücke',    lat: 49.0171, lng: 12.0965 },
    { name: 'Lübeck, Holstentor',              lat: 53.8655, lng: 10.6854 },
    { name: 'Rostock, Hafen',                  lat: 54.0887, lng: 12.1405 },
    { name: 'Bonn, Beethoven-Haus',            lat: 50.7331, lng:  7.0959 },
    { name: 'Aachen, Dom',                     lat: 50.7753, lng:  6.0839 },
    { name: 'Münster, Prinzipalmarkt',         lat: 51.9628, lng:  7.6254 },
    { name: 'Bochum, Bergbaumuseum',           lat: 51.4864, lng:  7.2189 },

    // ── MITTEL (30) — Naturlandschaften, kleinere Sehenswürdigkeiten ─
    { name: 'Schwarzwald, Titisee',            lat: 47.8882, lng:  8.1530 },
    { name: 'Berchtesgadener Land',            lat: 47.6316, lng: 13.0013 },
    { name: 'Rheintal, Loreley-Felsen',        lat: 50.1328, lng:  7.7250 },
    { name: 'Harz, Brocken-Gipfel',           lat: 51.7993, lng: 10.6158 },
    { name: 'Moselle, Cochem',                 lat: 50.1484, lng:  7.1670 },
    { name: 'Romantische Straße, Rothenburg',  lat: 49.3808, lng: 10.1799 },
    { name: 'Allianz Arena, München',          lat: 48.2188, lng: 11.6247 },
    { name: 'Elbsandsteingebirge, Bastei',     lat: 50.9614, lng: 14.0750 },
    { name: 'Kaiserstuhl, Vogtsburg',          lat: 48.0826, lng:  7.6701 },
    { name: 'Ostsee, Usedom',                  lat: 53.9268, lng: 14.0142 },
    { name: 'Bergisel, Innsbruck-Grenze',      lat: 47.4400, lng: 11.3940 },
    { name: 'Spreewald, Lübbenau',             lat: 51.8614, lng: 13.9580 },
    { name: 'Müritz-See, Mecklenburg',         lat: 53.4254, lng: 12.6796 },
    { name: 'Watzmann, Berchtesgaden',         lat: 47.5636, lng: 12.9459 },
    { name: 'Fichtelgebirge, Ochsenkopf',      lat: 49.9966, lng: 11.8076 },
    { name: 'Rüdesheim, Niederwalddenkmal',    lat: 49.9789, lng:  7.9220 },
    { name: 'Drachenfels, Siebengebirge',      lat: 50.6597, lng:  7.1944 },
    { name: 'Fehmarn, Ostsee',                 lat: 54.4649, lng: 11.1977 },
    { name: 'Saale-Unstrut, Freyburg',         lat: 51.2200, lng: 11.7836 },
    { name: 'Bayerischer Wald, Arber',         lat: 49.1085, lng: 13.1285 },
    { name: 'Eifel, Nürburgring',              lat: 50.3356, lng:  6.9475 },
    { name: 'Tegernsee, Bayern',               lat: 47.7085, lng: 11.7580 },
    { name: 'Chiemsee, Fraueninsel',           lat: 47.8511, lng: 12.4172 },
    { name: 'Nordsee, Helgoland',              lat: 54.1811, lng:  7.8882 },
    { name: 'Starnberger See',                 lat: 47.9000, lng: 11.3178 },
    { name: 'Porta Westfalica, Denkmal',       lat: 52.2299, lng:  8.9201 },
    { name: 'Wolfsburg, VW-Autostadt',         lat: 52.4247, lng: 10.8011 },
    { name: 'Zeche Zollverein, Essen',         lat: 51.4909, lng:  7.0447 },
    { name: 'Herrenhäuser Gärten, Hannover',   lat: 52.3936, lng:  9.6961 },
    { name: 'Obersalzberg, Kehlstein',         lat: 47.6117, lng: 13.0416 },

    // ── SCHWER (10) — Wenig bekannte Orte, Geografie-Wissen ──
    { name: 'Deutschlands Mittelpunkt, Niederdorla', lat: 51.1433, lng: 10.4583 },
    { name: 'Hiddensee, Ostsee',               lat: 54.5500, lng: 13.1000 },
    { name: 'Baumwipfelpfad, Nationalpark Hainich', lat: 51.0996, lng: 10.4742 },
    { name: 'Externsteine, Teutoburger Wald',  lat: 51.8675, lng:  8.9181 },
    { name: 'Nördlinger Ries, Meteoritenkrater', lat: 48.8562, lng: 10.4956 },
    { name: 'Laacher See, Eifelmaare',         lat: 50.4008, lng:  7.2731 },
    { name: 'Mönchgut, Rügen Südspitze',       lat: 54.2961, lng: 13.6694 },
    { name: 'Hohe Rhön, Wasserkuppe',          lat: 50.4968, lng:  9.9328 },
    { name: 'Odertal, Nationalpark Harz',      lat: 51.7405, lng: 10.5870 },
    { name: 'Cape Arkona, Rügen Nordspitze',   lat: 54.6803, lng: 13.4330 },
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
    if (document.getElementById('plde-styles')) return;
    var s = document.createElement('style');
    s.id = 'plde-styles';
    s.textContent = [
      '.plde-tip.leaflet-tooltip {',
      '  background:rgba(4,14,22,.96)!important;',
      '  border:1px solid #2af0a0!important;',
      '  color:#2af0a0!important;',
      '  font-family:"Bebas Neue",sans-serif!important;',
      '  font-size:13px!important;',
      '  letter-spacing:.08em!important;',
      '  box-shadow:0 0 12px #2af0a044!important;',
      '  padding:4px 10px!important;',
      '}',
      '.plde-tip.leaflet-tooltip::before { border-top-color:#2af0a0!important; }',
      '.plde-km-label { transform: translate(-50%, -50%); }',
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
  function PunktlandungDEInstance(container, ctx, onEnd) {
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
    this._label1       = null;
    this._label2       = null;

    this._buildUI();
    this._setupNet();
  }

  PunktlandungDEInstance.prototype = {

    // ─── BUILD UI ─────────────────────────────────────────────
    _buildUI: function () {
      var self = this;
      this.container.innerHTML = '';

      var wrap = document.createElement('div');
      wrap.style.cssText = 'width:100%;height:100%;display:flex;flex-direction:column;background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);position:relative;overflow:hidden;font-family:"Bebas Neue",sans-serif;';

      // TOP BAR
      var topBar = document.createElement('div');
      topBar.style.cssText = 'flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:8px 16px 5px;';
      topBar.innerHTML = [
        '<div style="display:flex;flex-direction:column;align-items:flex-start;gap:3px;">',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.4em;color:#3ab4f5;text-transform:uppercase;">' + this.ctx.p1Name + '</div>',
          '<div id="plde-dots-p1" style="display:flex;gap:5px;"></div>',
        '</div>',
        '<div style="text-align:center;">',
          '<div style="font-size:18px;letter-spacing:.12em;color:#f0c030;">PUNKTLANDUNG</div>',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;letter-spacing:.3em;color:#c0c0d8;text-transform:uppercase;">🇩🇪 Deutschland &nbsp;·&nbsp; <span id="plde-round-badge">Runde 1</span></div>',
        '</div>',
        '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:3px;">',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.4em;color:#f55a3a;text-transform:uppercase;">' + this.ctx.p2Name + '</div>',
          '<div id="plde-dots-p2" style="display:flex;gap:5px;"></div>',
        '</div>',
      ].join('');
      wrap.appendChild(topBar);

      // QUESTION STRIP
      var qStrip = document.createElement('div');
      qStrip.style.cssText = 'flex-shrink:0;background:rgba(240,192,48,.10);border-top:1px solid rgba(240,192,48,.18);border-bottom:1px solid rgba(240,192,48,.18);padding:7px 16px;display:flex;align-items:center;justify-content:space-between;';
      qStrip.innerHTML = [
        '<div id="plde-question-text" style="font-family:\'Barlow Condensed\',sans-serif;font-size:16px;color:#f0e88a;letter-spacing:.05em;flex:1;text-align:center;"></div>',
        '<div id="plde-timer" style="font-size:22px;color:#f0c030;letter-spacing:.05em;margin-left:12px;min-width:46px;text-align:right;display:none;">2:00</div>',
      ].join('');
      wrap.appendChild(qStrip);

      // MAP AREA
      var mapArea = document.createElement('div');
      mapArea.style.cssText = 'flex:1;position:relative;min-height:0;overflow:hidden;';
      wrap.appendChild(mapArea);

      var mapDiv = document.createElement('div');
      mapDiv.id = 'plde-map';
      mapDiv.style.cssText = 'position:absolute;top:0;left:0;right:0;bottom:0;';
      mapArea.appendChild(mapDiv);

      // Start overlay
      var startOv = document.createElement('div');
      startOv.id = 'plde-start-overlay';
      startOv.style.cssText = 'position:absolute;inset:0;z-index:1000;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(6,6,22,.75);pointer-events:auto;';
      startOv.innerHTML = [
        '<div style="font-size:clamp(18px,5vw,36px);color:#f0c030;letter-spacing:.1em;margin-bottom:6px;">PUNKTLANDUNG</div>',
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;letter-spacing:.35em;text-transform:uppercase;margin-bottom:22px;">🇩🇪 Deutschland Edition</div>',
        this.ctx.isHost
          ? '<button id="plde-start-btn" style="background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">RUNDE STARTEN</button>'
          : '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;color:#c0c0d8;letter-spacing:.3em;text-transform:uppercase;">Warten auf Host…</div>',
      ].join('');
      mapArea.appendChild(startOv);

      // Lock bar
      var lockBar = document.createElement('div');
      lockBar.id = 'plde-lock-bar';
      lockBar.style.cssText = 'position:absolute;bottom:0;left:0;right:0;z-index:1000;background:rgba(6,6,22,.88);padding:8px 14px;display:none;flex-direction:row;align-items:center;justify-content:space-between;gap:10px;';
      lockBar.innerHTML = [
        '<div id="plde-lock-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.18em;color:#c0c0d8;text-transform:uppercase;flex:1;"></div>',
        '<button id="plde-lock-btn" style="display:none;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:15px;letter-spacing:.1em;padding:9px 26px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));white-space:nowrap;">TIPP EINLOGGEN</button>',
      ].join('');
      mapArea.appendChild(lockBar);

      // Result overlay
      var resOv = document.createElement('div');
      resOv.id = 'plde-ov';
      resOv.style.cssText = 'position:absolute;inset:0;z-index:1100;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:24px;';
      resOv.innerHTML = [
        '<div id="plde-ov-ico" style="font-size:44px;"></div>',
        '<div id="plde-ov-ttl" style="font-size:clamp(20px,6vw,42px);color:#f0c030;letter-spacing:.05em;line-height:1.1;"></div>',
        '<div id="plde-ov-loc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#a0a0bc;letter-spacing:.15em;"></div>',
        '<div id="plde-ov-dists" style="display:flex;gap:20px;margin:6px 0;justify-content:center;flex-wrap:wrap;"></div>',
        '<div id="plde-ov-pts" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
        '<button id="plde-ov-btn" style="margin-top:6px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:11px 38px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">NÄCHSTE RUNDE →</button>',
      ].join('');
      wrap.appendChild(resOv);

      this.container.appendChild(wrap);
      this._drawDots();

      if (this.ctx.isHost) {
        var sb = document.getElementById('plde-start-btn');
        if (sb) sb.addEventListener('click', function () {
          self.ctx.network.send('plde_start_countdown', {});
          self._beginRound();
        });
      }
      document.getElementById('plde-lock-btn').addEventListener('click', function () {
        self._lockGuess();
      });

      setTimeout(function () { self._initMap(); }, 60);
    },

    // ─── MAP INIT ─────────────────────────────────────────────
    _initMap: function () {
      var self = this;
      if (typeof L === 'undefined') return;

      var mapEl = document.getElementById('plde-map');
      if (!mapEl) return;

      if (this._map) { try { this._map.remove(); } catch(e){} this._map = null; }

      var deBounds = L.latLngBounds(L.latLng(47.0, 5.5), L.latLng(55.5, 15.5));

      this._map = L.map(mapEl, {
        center: [51.2, 10.4],
        zoom: 6,
        minZoom: 5,
        maxZoom: 10,
        zoomControl: true,
        attributionControl: false,
        worldCopyJump: false,
        maxBounds: deBounds.pad(0.2),
        maxBoundsViscosity: 0.9,
      });

      // ESRI Physical: keine politischen Grenzen, keine Labels
      L.tileLayer(
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
        { maxZoom: 10, noWrap: true }
      ).addTo(this._map);

      // Deutschland-Grenze als GeoJSON — direkt eingebettet, kein Fetch nötig
      // Vereinfachter aber korrekter Umriss (Natural Earth 50m approximiert)
      var deCoords = [
        [6.1172,51.5],[5.9,51.8],[6.2,51.9],[6.8,52.2],[7.0,52.4],[7.2,53.3],[7.9,53.9],
        [8.7,54.9],[9.4,54.8],[9.9,54.5],[10.0,55.1],[10.6,55.0],[11.0,54.4],[12.0,54.2],
        [13.0,54.4],[14.0,54.0],[14.4,53.3],[14.6,52.6],[14.7,51.5],[15.0,51.0],[14.8,50.8],
        [13.5,50.5],[12.5,50.4],[12.1,50.3],[12.9,49.7],[13.8,48.8],[13.5,48.5],[13.0,47.7],
        [12.8,47.6],[12.2,47.7],[11.4,47.5],[10.5,47.4],[10.1,47.4],[9.5,47.5],[8.5,47.6],
        [7.6,47.6],[7.5,47.8],[7.6,48.5],[8.2,49.0],[6.4,49.2],[6.2,49.5],[6.5,49.8],
        [6.1,50.1],[6.0,50.8],[5.9,51.2],[6.1172,51.5]
      ].map(function(c){ return [c[1], c[0]]; }); // [lng,lat] → [lat,lng] für Leaflet

      // Neon-Glow: 3 gestaffelte Polylines (außen → innen)
      // Außen: breit + sehr transparent → erzeugt den weichen Schein
      L.polyline(deCoords, { color: '#f0c030', weight: 12, opacity: 0.12, lineJoin: 'round', lineCap: 'round' }).addTo(this._map);
      // Mitte: mittel + halbtransparent → der Körper des Glows
      L.polyline(deCoords, { color: '#f0c030', weight:  5, opacity: 0.40, lineJoin: 'round', lineCap: 'round' }).addTo(this._map);
      // Innen: schmal + fast weiß → der helle Kern
      L.polyline(deCoords, { color: '#fff9e0', weight:  1.5, opacity: 0.90, lineJoin: 'round', lineCap: 'round' }).addTo(this._map);

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
        this.ctx.network.send('plde_preview', { lat: lat, lng: lng });
      }
      this._updateLockBar();
    },

    _placeMarker: function (who, lat, lng) {
      var self = this;
      var isP1 = (who === 'p1');
      var locked = isP1 ? this.p1Locked : this.p2Locked;
      var color  = isP1 ? '#3ab4f5' : '#f55a3a';
      var html = '<div style="width:16px;height:16px;border-radius:50%;background:' + color + ';border:2px solid #fff;box-shadow:0 0 10px ' + color + 'cc;transform:translate(-50%,-50%);"></div>';
      var icon = L.divIcon({ className: '', html: html, iconSize: [0,0], iconAnchor: [0,0] });
      var prev = isP1 ? this._p1Marker : this._p2Marker;
      if (prev) this._map.removeLayer(prev);
      var marker = L.marker([lat, lng], { icon: icon, draggable: !locked }).addTo(this._map);
      marker.on('dragend', function (e) {
        var ll = e.target.getLatLng();
        if (isP1) { self.p1Guess = { lat: ll.lat, lng: ll.lng }; }
        else       { self.p2Guess = { lat: ll.lat, lng: ll.lng }; self.ctx.network.send('plde_preview', { lat: ll.lat, lng: ll.lng }); }
        self._updateLockBar();
      });
      if (isP1) this._p1Marker = marker;
      else      this._p2Marker = marker;
    },

    // ─── LOCK BAR ─────────────────────────────────────────────
    _updateLockBar: function () {
      var bar    = document.getElementById('plde-lock-bar');
      var btn    = document.getElementById('plde-lock-btn');
      var status = document.getElementById('plde-lock-status');
      if (!bar) return;
      if (this.phase !== 'answering') { bar.style.display = 'none'; return; }
      bar.style.display = 'flex';
      var isP1     = this.ctx.isHost;
      var hasGuess = isP1 ? !!this.p1Guess : !!this.p2Guess;
      var locked   = isP1 ? this.p1Locked  : this.p2Locked;
      if (btn) btn.style.display = (hasGuess && !locked) ? 'block' : 'none';
      var p1s = '<span style="color:#3ab4f5;">' + this.ctx.p1Name + ': ' + (this.p1Locked ? '✓ Eingeloggt' : this.p1Guess ? '📍 Gesetzt' : '…wartet') + '</span>';
      var p2s = '<span style="color:#f55a3a;">' + this.ctx.p2Name + ': ' + (this.p2Locked ? '✓ Eingeloggt' : this.p2Guess ? '📍 Gesetzt' : '…wartet') + '</span>';
      if (status) status.innerHTML = p1s + '&ensp;|&ensp;' + p2s;
    },

    // ─── NETWORK ──────────────────────────────────────────────
    _setupNet: function () {
      var self = this;

      this.ctx.network.on('plde_start_countdown', function () {
        if (!self.ctx.isHost) self._beginRound();
      });
      this.ctx.network.on('plde_sync_question', function (msg) {
        if (self.ctx.isHost) return;
        self.currentLoc = { name: msg.name, lat: msg.lat, lng: msg.lng };
        self._showQuestion(msg.name);
        self._startAnswering();
      });
      this.ctx.network.on('plde_preview', function (msg) {
        if (!self.ctx.isHost || self.p2Locked) return;
        // Nur intern speichern — Marker NICHT anzeigen, bis Spieler 2 einloggt
        self.p2Guess = { lat: msg.lat, lng: msg.lng };
      });
      this.ctx.network.on('plde_lock', function (msg) {
        if (self.ctx.isHost && msg.player === 'p2') {
          self.p2Guess  = { lat: msg.lat, lng: msg.lng };
          self.p2Locked = true;
          // Marker NICHT sofort anzeigen — erscheint erst beim Ergebnis
          self._updateLockBar();
          self._tryResolve();
        }
      });
      this.ctx.network.on('plde_timeout', function () {
        if (!self.ctx.isHost) self._resolveRound();
      });
      this.ctx.network.on('plde_result', function (msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        if (msg.p1Guess) self._placeMarker('p1', msg.p1Guess.lat, msg.p1Guess.lng);
        if (msg.p2Guess) self._placeMarker('p2', msg.p2Guess.lat, msg.p2Guess.lng);
        self._showMapReveal(msg);
      });
      this.ctx.network.on('plde_show_result', function (msg) {
        if (self.ctx.isHost) return;
        var rb = document.getElementById('plde-reveal-bar');
        if (rb) rb.style.display = 'none';
        self._showResultOverlay(msg);
      });
      this.ctx.network.on('plde_next', function (msg) {
        if (msg.gameOver) { self._finish(); return; }
        self.mini++;
        document.getElementById('plde-ov').style.display = 'none';
        self._resetRound();
        document.getElementById('plde-start-overlay').style.display = 'flex';
      });
    },

    // ─── GAME FLOW ────────────────────────────────────────────
    _beginRound: function () {
      var startOv = document.getElementById('plde-start-overlay');
      if (startOv) startOv.style.display = 'none';
      if (this.ctx.isHost) {
        if (!this._deck.length) {
          this._deck = LOCATIONS.slice().sort(function () { return Math.random() - .5; });
        }
        this.currentLoc = this._deck.pop();
        this.ctx.network.send('plde_sync_question', { name: this.currentLoc.name, lat: this.currentLoc.lat, lng: this.currentLoc.lng });
        this._showQuestion(this.currentLoc.name);
        this._startAnswering();
      }
      var self = this;
      setTimeout(function () { if (self._map) self._map.invalidateSize(); }, 80);
    },

    _showQuestion: function (name) {
      var el = document.getElementById('plde-question-text');
      if (el) el.textContent = 'Wo liegt: ' + name + '?';
    },

    _startAnswering: function () {
      var self = this;
      this.phase = 'answering';
      this._updateLockBar();

      this._timeLeft = 120;
      var timerEl = document.getElementById('plde-timer');
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
          if (self.ctx.isHost) { self.ctx.network.send('plde_timeout', {}); self._resolveRound(); }
        }
      }, 1000);

      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function () {
          self.ctx.network.send('plde_timeout', {});
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
        this.ctx.network.send('plde_lock', { player: 'p2', lat: this.p2Guess.lat, lng: this.p2Guess.lng });
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
      this.p1Wins += p1Pts; this.p2Wins += p2Pts;

      var payload = {
        locName: loc.name, locLat: loc.lat, locLng: loc.lng,
        p1Guess: this.p1Guess, p2Guess: this.p2Guess,
        p1Dist: p1d, p2Dist: p2d,
        p1Pts: p1Pts, p2Pts: p2Pts,
        p1Wins: this.p1Wins, p2Wins: this.p2Wins,
      };

      if (this.ctx.isHost) {
        this.ctx.network.send('plde_result', payload);
        this._showMapReveal(payload);
      }
    },

    // ─── ZWISCHENPHASE: Lösung auf Karte ──────────────────────
    _showMapReveal: function (msg) {
      var self = this;
      var timerEl = document.getElementById('plde-timer');
      if (timerEl) timerEl.style.display = 'none';
      var lockBar = document.getElementById('plde-lock-bar');
      if (lockBar) lockBar.style.display = 'none';

      this._drawSolution(msg);

      var revealBar = document.getElementById('plde-reveal-bar');
      if (!revealBar) {
        revealBar = document.createElement('div');
        revealBar.id = 'plde-reveal-bar';
        revealBar.style.cssText = 'position:absolute;bottom:0;left:0;right:0;z-index:1000;background:rgba(6,6,22,.92);padding:10px 16px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;gap:12px;border-top:1px solid rgba(240,192,48,.25);';
        var mapEl = document.getElementById('plde-map');
        if (mapEl && mapEl.parentNode) mapEl.parentNode.appendChild(revealBar);
      }

      var p1DistTxt = isFinite(msg.p1Dist) ? ('<span style="color:#3ab4f5;">' + this.ctx.p1Name + ': ' + fmtKm(msg.p1Dist) + '</span>') : '';
      var p2DistTxt = isFinite(msg.p2Dist) ? ('<span style="color:#f55a3a;">' + this.ctx.p2Name + ': ' + fmtKm(msg.p2Dist) + '</span>') : '';
      var winnerTxt = '';
      if (msg.p1Pts > 0) winnerTxt = '<span style="color:#2af0a0;margin-left:10px;">🏆 ' + this.ctx.p1Name + ' gewinnt!</span>';
      else if (msg.p2Pts > 0) winnerTxt = '<span style="color:#2af0a0;margin-left:10px;">🏆 ' + this.ctx.p2Name + ' gewinnt!</span>';
      else if (isFinite(msg.p1Dist) && isFinite(msg.p2Dist)) winnerTxt = '<span style="color:#f0c030;margin-left:10px;">Unentschieden!</span>';

      revealBar.innerHTML = [
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.12em;flex:1;display:flex;gap:16px;flex-wrap:wrap;align-items:center;">',
          p1DistTxt, p2DistTxt, winnerTxt,
        '</div>',
        this.ctx.isHost
          ? '<button id="plde-reveal-btn" style="background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:15px;letter-spacing:.1em;padding:9px 26px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));white-space:nowrap;">ERGEBNIS ANZEIGEN →</button>'
          : '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;color:#c0c0d8;letter-spacing:.2em;">Warten auf Host…</div>',
      ].join('');
      revealBar.style.display = 'flex';

      if (this.ctx.isHost) {
        var btn = document.getElementById('plde-reveal-btn');
        if (btn) btn.onclick = function () {
          revealBar.style.display = 'none';
          self.ctx.network.send('plde_show_result', msg);
          self._showResultOverlay(msg);
        };
      }
      beep(660, 0.15, 'sine', 0.15);
    },

    // ─── SOLUTION ON MAP ──────────────────────────────────────
    _drawSolution: function (msg) {
      if (!this._map) return;

      var solHtml = '<div style="width:20px;height:20px;border-radius:50%;background:#2af0a0;border:3px solid #fff;box-shadow:0 0 16px #2af0a0;transform:translate(-50%,-50%);"></div>';
      var solIcon = L.divIcon({ className: '', html: solHtml, iconSize: [0,0], iconAnchor: [0,0] });

      if (this._solMarker) this._map.removeLayer(this._solMarker);
      this._solMarker = L.marker([msg.locLat, msg.locLng], { icon: solIcon, zIndexOffset: 1000 })
        .addTo(this._map)
        .bindTooltip(msg.locName, { permanent: true, direction: 'top', className: 'plde-tip' });

      if (this._line1)  this._map.removeLayer(this._line1);
      if (this._line2)  this._map.removeLayer(this._line2);
      if (this._label1) this._map.removeLayer(this._label1);
      if (this._label2) this._map.removeLayer(this._label2);

      if (msg.p1Guess && isFinite(msg.p1Dist)) {
        this._line1 = L.polyline([[msg.p1Guess.lat, msg.p1Guess.lng],[msg.locLat, msg.locLng]],
          { color: '#3ab4f5', weight: 2.5, dashArray: '7 5', opacity: 0.95 }).addTo(this._map);
        this._label1 = L.marker(
          [(msg.p1Guess.lat + msg.locLat)/2, (msg.p1Guess.lng + msg.locLng)/2],
          { icon: L.divIcon({
              className: 'plde-km-label',
              html: '<div style="background:rgba(6,6,22,.92);border:1px solid #3ab4f5;color:#3ab4f5;font-family:\'Bebas Neue\',sans-serif;font-size:13px;padding:3px 8px;white-space:nowrap;width:max-content;letter-spacing:.08em;box-shadow:0 2px 6px rgba(0,0,0,.4);">' + fmtKm(msg.p1Dist) + '</div>',
              iconSize: null, iconAnchor: null,
            }), interactive: false, zIndexOffset: 500 }
        ).addTo(this._map);
      }

      if (msg.p2Guess && isFinite(msg.p2Dist)) {
        this._line2 = L.polyline([[msg.p2Guess.lat, msg.p2Guess.lng],[msg.locLat, msg.locLng]],
          { color: '#f55a3a', weight: 2.5, dashArray: '7 5', opacity: 0.95 }).addTo(this._map);
        this._label2 = L.marker(
          [(msg.p2Guess.lat + msg.locLat)/2, (msg.p2Guess.lng + msg.locLng)/2],
          { icon: L.divIcon({
              className: 'plde-km-label',
              html: '<div style="background:rgba(6,6,22,.92);border:1px solid #f55a3a;color:#f55a3a;font-family:\'Bebas Neue\',sans-serif;font-size:13px;padding:3px 8px;white-space:nowrap;width:max-content;letter-spacing:.08em;box-shadow:0 2px 6px rgba(0,0,0,.4);">' + fmtKm(msg.p2Dist) + '</div>',
              iconSize: null, iconAnchor: null,
            }), interactive: false, zIndexOffset: 500 }
        ).addTo(this._map);
      }

      var pts = [[msg.locLat, msg.locLng]];
      if (msg.p1Guess) pts.push([msg.p1Guess.lat, msg.p1Guess.lng]);
      if (msg.p2Guess) pts.push([msg.p2Guess.lat, msg.p2Guess.lng]);
      try { this._map.fitBounds(L.latLngBounds(pts), { padding: [60, 60], maxZoom: 9 }); } catch(e) {}
    },

    // ─── RESULT OVERLAY ───────────────────────────────────────
    _showResultOverlay: function (msg) {
      var self = this;
      var ov = document.getElementById('plde-ov');
      document.getElementById('plde-ov-ico').textContent = '🇩🇪';
      document.getElementById('plde-ov-ttl').textContent = msg.locName;
      document.getElementById('plde-ov-loc').textContent =
        'Lat ' + parseFloat(msg.locLat).toFixed(4) + '  |  Lng ' + parseFloat(msg.locLng).toFixed(4);

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
      document.getElementById('plde-ov-dists').innerHTML =
        card(this.ctx.p1Name, msg.p1Dist, msg.p1Pts, '#3ab4f5')
        + (tie ? '<div style="padding-top:10px;font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#f0c030;">UNENTSCHIEDEN</div>'
               : '<div style="color:#c0c0d8;padding-top:8px;font-family:\'Barlow Condensed\',sans-serif;font-size:18px;">VS</div>')
        + card(this.ctx.p2Name, msg.p2Dist, msg.p2Pts, '#f55a3a');

      document.getElementById('plde-ov-pts').innerHTML =
        this.p1Wins + ' : ' + this.p2Wins + ' &nbsp;·&nbsp; Ziel: 5 Punkte';

      this._drawDots();
      ov.style.display = 'flex';

      var gameOver = this.p1Wins >= 5 || this.p2Wins >= 5;
      var btn = document.getElementById('plde-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE →';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function () {
          self.ctx.network.send('plde_next', { gameOver: gameOver });
          if (gameOver) { self._finish(); return; }
          self.mini++;
          ov.style.display = 'none';
          self._resetRound();
          var startOv = document.getElementById('plde-start-overlay');
          if (startOv) startOv.style.display = 'flex';
        };
      } else {
        btn.style.display = 'none';
      }
      beep(gameOver ? 880 : 660, 0.3, 'sine', 0.2);
    },

    // ─── RESET ────────────────────────────────────────────────
    _resetRound: function () {
      this.phase = 'idle';
      this.p1Guess = null; this.p2Guess = null;
      this.p1Locked = false; this.p2Locked = false;
      this._clearTimers();
      this._cleanMapLayers();

      var qEl = document.getElementById('plde-question-text'); if (qEl) qEl.textContent = '';
      var tEl = document.getElementById('plde-timer'); if (tEl) { tEl.style.display = 'none'; tEl.textContent = '2:00'; }
      var rb  = document.getElementById('plde-round-badge'); if (rb) rb.textContent = 'Runde ' + this.mini;
      var rev = document.getElementById('plde-reveal-bar');  if (rev) rev.style.display = 'none';

      this._updateLockBar();
      this._drawDots();
      if (this._map) this._map.setView([51.2, 10.4], 6);
    },

    _cleanMapLayers: function () {
      if (!this._map) return;
      ['_p1Marker','_p2Marker','_solMarker','_line1','_line2','_label1','_label2'].forEach(function(k) {
        if (this[k]) { this._map.removeLayer(this[k]); this[k] = null; }
      }, this);
    },

    // ─── DOTS ─────────────────────────────────────────────────
    _drawDots: function () {
      var self = this;
      ['p1','p2'].forEach(function (who) {
        var el = document.getElementById('plde-dots-' + who);
        if (!el) return;
        var wins = who === 'p1' ? self.p1Wins : self.p2Wins;
        var color = who === 'p1' ? '#3ab4f5' : '#f55a3a';
        var html = '';
        for (var i = 0; i < 5; i++) {
          html += '<span style="display:inline-block;width:10px;height:10px;border-radius:50%;border:2px solid '
            + color + (i < wins ? ';background:' + color : ';background:transparent') + ';"></span>';
        }
        el.innerHTML = html;
      });
    },

    _clearTimers: function () { clearTimeout(this._roundTimer); clearInterval(this._tickInterval); },

    _finish: function () {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= 5 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },

    destroy: function () {
      this.dead = true;
      this._clearTimers();
      if (this._map) { try { this._map.remove(); } catch(e){} this._map = null; }
      var evts = ['plde_start_countdown','plde_sync_question','plde_preview','plde_lock','plde_timeout','plde_result','plde_show_result','plde_next'];
      var net = this.ctx.network;
      evts.forEach(function (ev) { try { net.off(ev); } catch(e){} });
    },
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTER
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id: 'punktlandung-de',
    name: 'PUNKTLANDUNG: Deutschland',
    description: 'Klicke auf die Deutschlandkarte, wo du den gesuchten Ort vermutest. Wer näher dran ist, bekommt einen Punkt. Wer zuerst 5 Punkte hat, gewinnt!',
    init: function (container, ctx, onEnd) {
      this._instance = new PunktlandungDEInstance(container, ctx, onEnd);
    },
    destroy: function () {
      if (this._instance) this._instance.destroy();
    },
  });

})();
