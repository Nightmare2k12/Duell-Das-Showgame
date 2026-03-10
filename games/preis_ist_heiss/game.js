(function () {

  var PRODUCTS = [
    { label: 'Apple iPhone 16 (128 GB)', image: 'https://assets.clevertronic.de/attachments/2024_09/apple-iphone-16-128gb-pink-12858513.png?imgeng=/w_800/h_800/m_letterbox_ffffff/', price: 899, explanation: 'Das iPhone 16 startete im September 2024 zu einem UVP von 899 €. Es bietet den A18 Chip, eine verbesserte Kamera mit Action-Taste und unterstützt Apple Intelligence.' },
    { label: 'Kerrygold Butter (250 g)', image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxMbBpQ_fotIelFOB0Z5IOEE6etWjvPa53B8VG91BYdYHjov7lrUxPZqUwkGMJVxjCLqtccLmOtCdLAuwb4s9YoGxws03b7R6ls_-8toOYQH2dwKOYThYmMyRffvfT0O787wN9wupZHw&usqp=CAc', price: 1.89, explanation: 'Ein 250-g-Päckchen Markenbutter kostet im deutschen Supermarkt durchschnittlich rund 1,89 €. Die Preise schwanken je nach Anbieter und Region.' },
    { label: 'Red Bull (250 ml Dose)', image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQPZGGuwD1nHFpIW3Vju9IWCVZM5WZSwLYGoUhh4iiXfOIc284rn5oLfwgliyiouDbR9f7-BwfujwAUhJfULGpQzeXJrvhfpNC0a-PhpMWDWb7XLcClDeLYzw-D70ZMjGl8MS7JKUE&usqp=CAc', price: 1.29, explanation: 'Eine 250-ml-Dose Red Bull kostet im deutschen Einzelhandel typischerweise ca. 1,29 €. Im Kiosk oder an der Tankstelle wird oft mehr verlangt.' },
    { label: 'Nintendo Switch 2', image: 'https://images.cgames.de/images/gamestar/226/nintendo-switch-2-mit-logo_6330923.jpg', price: 469, explanation: 'Die Nintendo Switch 2 erschien 2025 zum UVP von 469 €. Sie bietet einen größeren 7,9-Zoll-Display, mehr Leistung und magnetische Joy-Cons.' },
    { label: 'Nutella (450 g Glas)', image: 'https://cdn.bueromarkt-ag.de/product/6af7463ad3bd564e19b4e3c265f1d0987ee5230b/schokocreme_nutella_nussnougatcreme.jpg?1640149265', price: 3.29, explanation: 'Ein 450-g-Glas Nutella kostet im deutschen Supermarkt rund 3,29 €. Nutella wurde 1964 von Ferrero eingeführt.' },
    { label: 'Dyson V15 Detect Absolute', image: 'https://www.proshop.de/Images/300x251/3206468_340bafb62e59.jpg', price: 699, explanation: 'Der Dyson V15 Detect hat eine UVP von 699 €. Er zeigt per Laser-Technologie unsichtbaren Staub an.' },
    { label: 'Coca-Cola (1,5 Liter PET-Flasche)', image: 'https://www.b-md.be/web/image/product.image/106/image_1024/Coca%20Cola%20Original%20%C2%A9%2072X6X1.5L%20?unique=c677b64', price: 1.99, explanation: 'Eine 1,5-Liter-Flasche Coca-Cola kostet im deutschen Handel ca. 1,99 €.' },
    { label: 'Sony PlayStation 5 Slim (Disc Edition)', image: 'https://image.alza.cz/products/MSX0052de2/MSX0052de2.jpg?width=500&height=500', price: 449, explanation: 'Die PlayStation 5 Slim erschien Ende 2023 für 449 €. Das Gehäuse ist um 30 % kleiner als das Original.' },
    { label: 'Haribo Goldbären (1 kg Beutel)', image: 'https://www.rossmann.de/media-neu/158/MAM_15895174/MAM_15895174_SHOP_IMAGE_2.0.png?width=600&height=600&fit=bounds&auto=webp&format=webply&canvas=600,600&quality=40', price: 4.99, explanation: 'Der 1-kg-Beutel Haribo Goldbären kostet im Supermarkt rund 4,99 €. Haribo wurde 1920 in Bonn gegründet.' },
    { label: 'Samsung Galaxy S25 Ultra', image: 'https://images.sparhandy.de/assets/6211226b52a1ffdd7a0da4bd940606dd7e8ed76c736ff6baf647ef6ba2b176ce/Samsung_Galaxy_S25_Ultra_SM-S938B_Titanium_Black_Single_Cutout_Logoscreen_RGB.png?tr=w-640,cm-pad_resize', price: 1299, explanation: 'Das Samsung Galaxy S25 Ultra hat eine UVP von 1.299 € (256 GB) mit S-Pen und Snapdragon-8-Elite-Prozessor.' },
    { label: 'Burger King Whopper-Menü (groß)', image: 'https://burgerpreise.de/wp-content/uploads/2025/12/Burger-King-King-des-Monats-Cheese-Melt-Beef.webp', price: 10.99, explanation: 'Ein großes Whopper-Menü kostet bei Burger King in Deutschland rund 10,99 €. Die Preise variieren je nach Filiale.' },
    { label: 'Gillette Fusion5 ProGlide (4 Klingen)', image: 'https://i.otto.de/i/otto/e62e2f44-ad6a-4d78-bdf8-190e449f0484?h=520&w=551&sm=clamp&upscale=true&fmt=auto', price: 14.99, explanation: 'Ein 4er-Pack Gillette Fusion5 ProGlide-Klingen kostet im Drogeriemarkt ca. 14,99 €.' },
    { label: 'Apple AirPods Pro (2. Generation)', image: 'https://i.computer-bild.de/imgs/1/4/5/2/5/5/1/7/Apple_AirPods_2_H2_Chip-549581b3ae1ac8f0.jpg?impolicy=full_content', price: 249, explanation: 'Die AirPods Pro (2. Gen) bieten aktive Geräuschunterdrückung und bis zu 30 Stunden Gesamtlaufzeit mit Case.' },
    { label: 'Frische Vollmilch (1 Liter, 3,5 % Fett)', image: 'https://www.gmundner-molkerei.com/wp-content/uploads/ESL-Milch1_GmundnerMilch.jpg', price: 1.09, explanation: 'Ein Liter Vollmilch kostet im deutschen Supermarkt ca. 1,09 €. Bio-Varianten liegen bei 1,50–2,00 €.' },
    { label: 'Rolex Oyster Perpetual Datejust 36', image: 'https://www.rueschenbeck.de/media/e3/cf/56/1769427337/530726_.jpg?ts=1769427337', price: 7700, explanation: 'Die Rolex Datejust 36 hat eine UVP ab ca. 7.700 €. Auf dem Sekundärmarkt werden viele Modelle teurer gehandelt.' },
    { label: "McDonald's Big Mac (Einzeln)", image: 'https://www.zdfheute.de/assets/typical-big-mac-100~1600x1200?cb=1717597790826', price: 5.19, explanation: "Ein einzelner Big Mac kostet bei McDonald's in Deutschland ca. 5,19 €. Der Big Mac Index dient als globaler Kaufkraftvergleich." },
    { label: 'Weber Gasgrill Spirit E-315 GBS', image: 'https://bilder.obi.de/5dad73ae-d419-4070-bd53-a5974e686301/prZZK/image.jpeg', price: 649, explanation: 'Der Weber Spirit E-315 GBS Gasgrill hat eine UVP von 649 €. Er gilt als Einstiegsmodell in die Weber-Premium-Linie.' },
    { label: 'Logitech MX Master 3S (Maus)', image: 'https://i.otto.de/i/otto/d2d83448-0448-59a0-8ac0-139e1f4376e2?w=1599&h=969', price: 99.99, explanation: 'Die Logitech MX Master 3S kostet ca. 99,99 € und bietet 8.000 DPI sowie ein MagSpeed-Scrollrad.' },
    { label: 'LEGO Technic Bugatti Chiron (42083)', image: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MP_107754011?x=1800&y=1800&format=jpg&quality=80&sp=yes&strip=yes&trim&ex=1800&ey=1800&align=center&resizesource&unsharp=1.5x1+0.7+0.02&cox=0&coy=0&cdx=1800&cdy=1800', price: 449.99, explanation: 'Das LEGO Technic Bugatti Chiron Set (3.599 Teile) hat eine UVP von 449,99 €.' },
    { label: 'Nespresso Vertuo Next Kaffeemaschine', image: 'https://www.nespresso.com/ecom/medias/sys_master/public/33790473306142/contrast-white-nespresso-front-coffee-3000x3000.png?impolicy=medium&imwidth=800&imdensity=1', price: 129, explanation: 'Die Nespresso Vertuo Next hat eine UVP von ca. 129 € und nutzt Zentrifusionstechnologie.' }
  ];

  function esc(s) {
    return String(s || '').replace(/[&<>"']/g, function (c) {
      return { '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c];
    });
  }
  function formatPrice(val) {
    var n = parseFloat(val);
    if (val === null || val === undefined || val === '' || isNaN(n)) return '—';
    return n.toFixed(2).replace('.', ',') + ' €';
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
    } catch (e) {}
  }

  // ── Farb-Palette (identisch mit Anagramm-Alarm) ──────────────
  // Hintergrund:   #0e0e28 / #060610  (tiefes Blau)
  // Akzent:        #f0c030             (Gold/Gelb)
  // Text/Subtitel: #c0c0d8             (Hellblau-Grau)
  // P1-Farbe:      #3ab4f5             (Blau)
  // P2-Farbe:      #f55a3a             (Orange-Rot)
  // Overlay-BG:    rgba(6,6,16,.94)
  // Eingabe-BG:    rgba(255,255,255,.05)
  // -----------------------------------------------------------

  function injectCSS() {
    if (document.getElementById('pih-style')) return;
    var s = document.createElement('style');
    s.id = 'pih-style';
    s.textContent =
      '@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&display=swap");' +
      // Input
      '.pih-input{' +
        'background:rgba(255,255,255,.05);' +
        'border:2px solid #f0c030;' +
        'color:#fff;' +
        'font-family:"Bebas Neue",sans-serif;' +
        'font-size:clamp(22px,5vw,32px);' +
        'letter-spacing:.12em;' +
        'text-align:center;width:100%;' +
        'padding:10px 14px;box-sizing:border-box;outline:none;' +
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));' +
        'transition:border-color .15s,box-shadow .15s;}' +
      '.pih-input:focus{box-shadow:0 0 14px rgba(240,192,48,.3);}' +
      '.pih-input::placeholder{color:rgba(255,255,255,.25);}' +
      // Button — gelb wie Anagramm-Alarm
      '.pih-btn{' +
        'background:#f0c030;border:none;color:#000;' +
        'font-family:"Bebas Neue",sans-serif;' +
        'font-size:clamp(15px,3.5vw,20px);letter-spacing:.15em;' +
        'padding:12px 36px;cursor:pointer;' +
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));' +
        'transition:filter .1s,transform .1s;display:inline-block;}' +
      '.pih-btn:hover{filter:brightness(1.12);transform:scale(1.02);}' +
      '.pih-btn:active{transform:scale(.97);}' +
      '.pih-btn:disabled{filter:grayscale(.5);cursor:default;opacity:.5;transform:none;}' +
      // Score-Dots
      '.pih-dot{display:inline-block;width:10px;height:10px;border-radius:50%;' +
        'border:2px solid rgba(240,192,48,.25);background:transparent;' +
        'transition:background .3s,border-color .3s,box-shadow .3s;margin:0 2px;}' +
      '.pih-dot.filled{background:#f0c030;border-color:#f0c030;box-shadow:0 0 5px #f0c030;}' +
      // Timer-Kreis
      '.pih-timer-wrap{position:relative;width:60px;height:60px;}' +
      '.pih-timer-svg{transform:rotate(-90deg);}' +
      '.pih-timer-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;' +
        'font-family:"Barlow Condensed",sans-serif;font-size:20px;color:#f0c030;}' +
      // Keyframes
      '@keyframes pih-pop{0%{transform:scale(.7);opacity:0}70%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}' +
      '@keyframes pih-shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-5px)}40%{transform:translateX(5px)}60%{transform:translateX(-3px)}80%{transform:translateX(3px)}}';
    document.head.appendChild(s);
  }

  var MAX_POINTS    = 6;
  var ROUND_SECONDS = 30;

  function PreisIstHeissInstance(container, ctx, onEnd) {
    this.container   = container;
    this.ctx         = ctx;
    this.onEnd       = onEnd;
    this.dead        = false;
    this.round       = 1;
    this.p1Points    = 0;
    this.p2Points    = 0;
    this.p1Answer    = null;
    this.p2Answer    = null;
    this.p1Locked    = false;
    this.p2Locked    = false;
    this.phase       = 'idle';
    this.currentP    = null;
    this._deck       = [];
    this._used       = [];
    this._timers     = [];
    this._tick       = null;
    this._roundTimer = null;
    this._timeLeft   = ROUND_SECONDS;
    injectCSS();
    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  PreisIstHeissInstance.prototype = {

    _buildUI: function () {
      var self = this;
      this.container.innerHTML = '';

      // ── Root — dunkles Blau wie Anagramm-Alarm ──
      var root = document.createElement('div');
      root.id = 'pih-root';
      root.style.cssText =
        'width:100%;height:100%;' +
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);' +
        'display:flex;flex-direction:column;align-items:center;justify-content:flex-start;' +
        'position:relative;overflow:hidden;padding:14px 20px;box-sizing:border-box;' +
        'font-family:"Bebas Neue",sans-serif;';

      // Deko-Kreis (wie Anagramm-Alarm)
      var deco = document.createElement('div');
      deco.style.cssText = 'position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);';
      root.appendChild(deco);

      // ── Score-Punkte ──
      var sc = document.createElement('div');
      sc.id = 'pih-scores';
      sc.style.cssText = 'display:flex;align-items:center;gap:16px;margin-bottom:12px;min-height:28px;flex-wrap:wrap;justify-content:center;';
      root.appendChild(sc);

      // ── Subtitel ──
      var sub = document.createElement('div');
      sub.style.cssText = 'font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:8px;text-align:center;';
      sub.textContent = 'Der Preis ist heiß · Was kostet das?';
      root.appendChild(sub);

      // ── Rundenanzahl ──
      var rl = document.createElement('div');
      rl.id = 'pih-round-label';
      rl.style.cssText = 'font-family:\'Barlow Condensed\',sans-serif;font-size:22px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:30px;margin-bottom:8px;text-align:center;transition:color .2s;';
      root.appendChild(rl);

      // ── Status-Text ──
      var st = document.createElement('div');
      st.id = 'pih-status';
      st.style.cssText = 'font-family:\'Barlow Condensed\',sans-serif;font-size:22px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:30px;margin-bottom:8px;text-align:center;transition:color .2s;';
      root.appendChild(st);

      // ── Start-Button ──
      var sb = document.createElement('button');
      sb.id = 'pih-start-btn';
      sb.className = 'pih-btn';
      sb.textContent = 'PRODUKT EINBLENDEN';
      sb.style.cssText = 'display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-bottom:16px;';
      root.appendChild(sb);

      // ── Produkt-Karte (NUR Bild) ──
      var card = document.createElement('div');
      card.id = 'pih-product-card';
      card.style.cssText =
        'display:none;width:100%;max-width:420px;' +
        'background:rgba(240,192,48,.05);' +
        'border:2px solid rgba(240,192,48,.25);' +
        'clip-path:polygon(0 0,calc(100% - 12px) 0,100% 12px,100% 100%,12px 100%,0 calc(100% - 12px));' +
        'overflow:hidden;margin-bottom:14px;animation:pih-pop .3s ease-out;';
      var iw = document.createElement('div');
      iw.style.cssText = 'width:100%;aspect-ratio:4/3;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.03);position:relative;';
      var pimg = document.createElement('img');
      pimg.id = 'pih-product-img'; pimg.alt = '';
      pimg.style.cssText = 'max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;padding:14px;box-sizing:border-box;';
      var pfb = document.createElement('div');
      pfb.id = 'pih-img-fallback';
      pfb.style.cssText = 'display:none;position:absolute;inset:0;align-items:center;justify-content:center;font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.25em;color:rgba(240,192,48,.3);text-transform:uppercase;';
      pfb.textContent = 'Bild nicht verfügbar';
      pimg.onerror = function () { pimg.style.display = 'none'; pfb.style.display = 'flex'; };
      iw.appendChild(pimg); iw.appendChild(pfb);
      card.appendChild(iw);
      root.appendChild(card);

      // ── Timer ──
      var tw = document.createElement('div');
      tw.id = 'pih-timer-wrap';
      tw.style.cssText = 'display:none;justify-content:center;margin-bottom:10px;';
      tw.innerHTML =
        '<div class="pih-timer-wrap">' +
          '<svg class="pih-timer-svg" width="60" height="60">' +
            '<circle cx="30" cy="30" r="26" fill="none" stroke="rgba(240,192,48,.15)" stroke-width="4"/>' +
            '<circle id="pih-timer-arc" cx="30" cy="30" r="26" fill="none" stroke="#f0c030" stroke-width="4"' +
              ' stroke-dasharray="163.36" stroke-dashoffset="0" stroke-linecap="round"' +
              ' style="transition:stroke-dashoffset .9s linear,stroke .4s;"/>' +
          '</svg>' +
          '<div class="pih-timer-num" id="pih-timer-num">30</div>' +
        '</div>';
      root.appendChild(tw);

      // ── Eingabebereich ──
      var ia = document.createElement('div');
      ia.id = 'pih-input-area';
      ia.style.cssText = 'display:none;width:100%;max-width:420px;margin-bottom:10px;';
      ia.innerHTML =
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#f0c030;text-transform:uppercase;text-align:center;margin-bottom:6px;">Preis in Euro eingeben</div>' +
        '<div style="display:flex;gap:8px;align-items:flex-end;">' +
          '<input type="number" id="pih-price-input" class="pih-input" placeholder="z.B. 9.99" min="0" step="0.01" style="flex:1;">' +
          '<button id="pih-lock-btn" class="pih-btn" style="padding:12px 18px;white-space:nowrap;">EINLOGGEN</button>' +
        '</div>' +
        '<div id="pih-lock-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;min-height:20px;margin-top:6px;text-align:center;"></div>';
      root.appendChild(ia);

      // ── Warte-Status ──
      var wt = document.createElement('div');
      wt.id = 'pih-wait';
      wt.style.cssText = 'display:none;flex-direction:column;align-items:center;gap:4px;margin-bottom:10px;';
      wt.innerHTML =
        '<div id="pih-wait-p1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#3ab4f5;text-transform:uppercase;"></div>' +
        '<div id="pih-wait-p2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#f55a3a;text-transform:uppercase;"></div>';
      root.appendChild(wt);

      // ── Ergebnis-Overlay ──
      var ov = document.createElement('div');
      ov.id = 'pih-ov';
      ov.style.cssText =
        'position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);' +
        'display:none;flex-direction:column;align-items:center;justify-content:center;' +
        'gap:10px;text-align:center;padding:24px;';
      ov.innerHTML =
        '<div id="pih-ov-ico" style="font-size:52px;"></div>' +
        '<div id="pih-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(24px,6vw,46px);color:#f0c030;letter-spacing:.05em;line-height:1;"></div>' +
        // Produktbild (klein, bei Auflösung)
        '<div id="pih-ov-img-wrap" style="display:none;width:120px;height:80px;overflow:hidden;border:1px solid rgba(240,192,48,.2);background:rgba(255,255,255,.03);clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">' +
          '<img id="pih-ov-img" src="" alt="" style="width:100%;height:100%;object-fit:contain;padding:6px;box-sizing:border-box;">' +
        '</div>' +
        // Produktname
        '<div id="pih-ov-product" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(14px,3.5vw,22px);color:#2af0a0;letter-spacing:.12em;max-width:380px;line-height:1.2;"></div>' +
        // Korrekter Preis
        '<div id="pih-ov-price-reveal" style="display:none;flex-direction:column;align-items:center;gap:2px;">' +
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.35em;color:#c0c0d8;text-transform:uppercase;">Offizieller Preis</div>' +
          '<div id="pih-ov-correct-price" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(28px,7vw,48px);color:#f0c030;text-shadow:0 0 20px rgba(240,192,48,.5);letter-spacing:.06em;"></div>' +
        '</div>' +
        // Spieler-Badges
        '<div id="pih-ov-answers" style="display:flex;gap:20px;margin:4px 0;flex-wrap:wrap;justify-content:center;"></div>' +
        // Erklärung
        '<div id="pih-ov-expl" style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;color:#a0a0bc;max-width:380px;line-height:1.5;margin-bottom:2px;"></div>' +
        // Rundenstand
        '<div id="pih-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>' +
        // Weiter
        '<button id="pih-ov-btn" class="pih-btn" style="margin-top:6px;">WEITER &#8594;</button>';
      root.appendChild(ov);

      // ── ERST appendChild, DANN Events ──
      this.container.appendChild(root);

      document.getElementById('pih-start-btn').addEventListener('click', function () {
        if (!self.ctx.isHost) return;
        document.getElementById('pih-start-btn').style.display = 'none';
        self.ctx.network.send('pih_start_countdown', {});
        self._countdown();
      });
      document.getElementById('pih-lock-btn').addEventListener('click', function () { self._lockAnswer(); });
      document.getElementById('pih-price-input').addEventListener('keydown', function (e) { if (e.key === 'Enter') self._lockAnswer(); });
    },

    _setupNet: function () {
      var self = this;
      this.ctx.network.on('pih_start_countdown', function () { if (!self.ctx.isHost) self._countdown(); });
      this.ctx.network.on('pih_sync_product', function (msg) {
        if (self.ctx.isHost) return;
        self.currentP = { label: msg.label, image: msg.image, price: msg.price, explanation: msg.explanation };
        self._showProduct();
        self._startAnswering();
      });
      this.ctx.network.on('pih_answer', function (msg) {
        if (!self.ctx.isHost || msg.player !== 'p2') return;
        self.p2Answer = msg.answer; self.p2Locked = true;
        self._updateWaitStatus();
        self.ctx.network.send('pih_status_update', { p1Locked: self.p1Locked, p2Locked: true });
        self._tryResolve();
      });
      this.ctx.network.on('pih_status_update', function (msg) {
        if (self.ctx.isHost) return;
        var e1 = document.getElementById('pih-wait-p1'), e2 = document.getElementById('pih-wait-p2');
        if (e1) e1.textContent = self.ctx.p1Name + ': ' + (msg.p1Locked ? 'eingeloggt' : '… überlegt');
        if (e2) e2.textContent = self.ctx.p2Name + ': ' + (msg.p2Locked ? 'eingeloggt' : '… überlegt');
      });
      this.ctx.network.on('pih_result', function (msg) {
        if (self.ctx.isHost) return;
        self._clearTimers(); self.phase = 'result';
        self.p1Points = msg.p1Points; self.p2Points = msg.p2Points;
        self._showResult(msg);
      });
      this.ctx.network.on('pih_timeout', function () {
        if (self.ctx.isHost) return;
        self._clearTimers(); self.phase = 'result';
        self._setStatus('Zeit abgelaufen!', '#f55a3a', '20px');
      });
      this.ctx.network.on('pih_next', function (msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) { self._showFinal(msg); }
        else {
          self.round++; self.p1Points = msg.p1Points; self.p2Points = msg.p2Points;
          self._startMini();
          document.getElementById('pih-ov').style.display = 'none';
        }
      });
      this.ctx.network.on('pih_end_final', function () { if (!self.dead) self._finish(); });
    },

    _startMini: function () {
      if (this.dead) return;
      this.phase = 'idle'; this.p1Answer = null; this.p2Answer = null;
      this.p1Locked = false; this.p2Locked = false;
      this._clearTimers();
      var inp = document.getElementById('pih-price-input');
      if (inp) { inp.value = ''; inp.disabled = false; inp.style.borderColor = '#f0c030'; }
      var lb = document.getElementById('pih-lock-btn'); if (lb) lb.disabled = false;
      var ls = document.getElementById('pih-lock-status'); if (ls) { ls.textContent = ''; ls.style.color = '#c0c0d8'; }
      var arc = document.getElementById('pih-timer-arc'); if (arc) { arc.style.stroke = '#f0c030'; }
      var tn = document.getElementById('pih-timer-num'); if (tn) { tn.style.color = '#f0c030'; tn.textContent = ROUND_SECONDS; }
      document.getElementById('pih-product-card').style.display = 'none';
      document.getElementById('pih-timer-wrap').style.display   = 'none';
      document.getElementById('pih-input-area').style.display   = 'none';
      document.getElementById('pih-wait').style.display         = 'none';
      var ow = document.getElementById('pih-ov-img-wrap'); if (ow) ow.style.display = 'none';
      document.getElementById('pih-round-label').textContent = 'RUNDE ' + this.round;
      this._setStatus('Bereit für das nächste Produkt?', '#c0c0d8', '18px');
      this._drawScores();
      if (this.ctx.isHost) {
        var btn = document.getElementById('pih-start-btn'); if (btn) btn.style.display = 'block';
        this._pickProduct();
      }
    },

    _pickProduct: function () {
      var self = this;
      if (this._deck.length === 0) {
        var idxs = PRODUCTS.map(function (_, i) { return i; });
        for (var i = idxs.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var t = idxs[i]; idxs[i] = idxs[j]; idxs[j] = t;
        }
        this._deck = idxs.filter(function (x) { return self._used.indexOf(x) === -1; });
        if (this._deck.length === 0) { this._used = []; this._deck = idxs; }
      }
      var idx = this._deck.shift();
      this._used.push(idx);
      this.currentP = PRODUCTS[idx];
    },

    _countdown: function () {
      if (this.dead) return;
      var self = this, n = 3;
      this.phase = 'countdown';
      var sb = document.getElementById('pih-start-btn'); if (sb) sb.style.display = 'none';
      this._setStatus('', '', '');
      var tick = function () {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#f0c030', '52px');
          beep(440, 0.07, 'sine', 0.15);
          n--;
          self._timers.push(setTimeout(tick, 900));
        } else {
          beep(660, 0.12, 'sine', 0.22);
          self._setStatus('', '', '');
          self._timers.push(setTimeout(function () { if (self.ctx.isHost) self._sendProduct(); }, 200));
        }
      };
      tick();
    },

    _sendProduct: function () {
      if (!this.ctx.isHost || !this.currentP) return;
      this.ctx.network.send('pih_sync_product', {
        label: this.currentP.label, image: this.currentP.image,
        price: this.currentP.price, explanation: this.currentP.explanation
      });
      this._showProduct();
      this._startAnswering();
    },

    _showProduct: function () {
      var img  = document.getElementById('pih-product-img');
      var fb   = document.getElementById('pih-img-fallback');
      var card = document.getElementById('pih-product-card');
      if (img) { img.style.display = 'block'; img.src = this.currentP.image || ''; }
      if (fb)  fb.style.display = 'none';
      if (card) card.style.display = 'block';
    },

    _startAnswering: function () {
      var self = this;
      this.phase = 'answering'; this._timeLeft = ROUND_SECONDS;
      document.getElementById('pih-input-area').style.display = 'block';
      document.getElementById('pih-wait').style.display       = 'flex';
      document.getElementById('pih-timer-wrap').style.display = 'flex';
      this._updateWaitStatus();
      this._updateTimerArc(ROUND_SECONDS);
      var tn = document.getElementById('pih-timer-num'); if (tn) { tn.textContent = ROUND_SECONDS; tn.style.color = '#f0c030'; }
      var arc = document.getElementById('pih-timer-arc'); if (arc) arc.style.stroke = '#f0c030';
      var inp = document.getElementById('pih-price-input'); if (inp) { inp.value = ''; inp.disabled = false; inp.focus(); }
      this._tick = setInterval(function () {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var t2 = document.getElementById('pih-timer-num'); if (t2) t2.textContent = self._timeLeft;
        self._updateTimerArc(self._timeLeft);
        if (self._timeLeft <= 10) {
          var a2 = document.getElementById('pih-timer-arc'); if (a2) a2.style.stroke = '#f55a3a';
          if (t2) t2.style.color = '#f55a3a';
        }
        if (self._timeLeft <= 5 && self._timeLeft > 0) beep(880, 0.04, 'sine', 0.06);
        if (self._timeLeft <= 0) { clearInterval(self._tick); self._tick = null; }
      }, 1000);
      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function () {
          self.ctx.network.send('pih_timeout', {});
          self._autoSubmitAndResolve();
        }, ROUND_SECONDS * 1000);
      }
    },

    _updateTimerArc: function (t) {
      var arc = document.getElementById('pih-timer-arc');
      if (arc) arc.style.strokeDashoffset = 163.36 * (1 - t / ROUND_SECONDS);
    },

    _lockAnswer: function () {
      if (this.phase !== 'answering' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (me === 'p1' && this.p1Locked) return;
      if (me === 'p2' && this.p2Locked) return;

      var inp = document.getElementById('pih-price-input');
      var lb  = document.getElementById('pih-lock-btn');
      var ls  = document.getElementById('pih-lock-status');

      var val = inp.value.trim().replace(',', '.');
      var parsed = parseFloat(val);

      // ── Leer oder ungültig: Fehlermeldung, NICHT einloggen ──
      if (val === '' || isNaN(parsed) || parsed < 0) {
        ls.textContent = 'Bitte einen Preis eingeben!';
        ls.style.color = '#f55a3a';
        // Input kurz schütteln (CSS shake)
        inp.style.borderColor = '#f55a3a';
        inp.style.animation = 'pih-shake .35s ease';
        setTimeout(function () {
          inp.style.animation = '';
          inp.style.borderColor = '#f0c030';
        }, 400);
        inp.focus();
        return; // NICHT weiter — kein Einloggen ohne Wert
      }

      var answer = parsed;
      inp.disabled = true;
      lb.disabled  = true;
      ls.textContent = 'Eingeloggt: ' + formatPrice(answer);
      ls.style.color = '#f0c030';
      beep(550, 0.06, 'sine', 0.1);

      if (me === 'p1') {
        this.p1Answer = answer; this.p1Locked = true;
        this._updateWaitStatus();
        this.ctx.network.send('pih_status_update', { p1Locked: true, p2Locked: this.p2Locked });
        this._tryResolve();
      } else {
        this.p2Answer = answer; this.p2Locked = true;
        this._updateWaitStatus();
        this.ctx.network.send('pih_answer', { player: 'p2', answer: answer });
      }
    },

    _autoSubmitAndResolve: function () {
      // Zeit abgelaufen — nicht eingeloggte Werte → ungültig
      if (!this.p1Locked) { this.p1Answer = 'invalid'; this.p1Locked = true; }
      if (!this.p2Locked) { this.p2Answer = 'invalid'; this.p2Locked = true; }
      this._resolveRound();
    },

    _tryResolve: function () { if (this.ctx.isHost && this.p1Locked && this.p2Locked) this._resolveRound(); },

    _resolveRound: function () {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result'; this._clearTimers();
      var correct = this.currentP.price;
      var p1A = this.p1Answer, p2A = this.p2Answer;
      var p1I = (p1A === 'invalid' || p1A === null), p2I = (p2A === 'invalid' || p2A === null);
      var winner;
      if (p1I && p2I) winner = 'none';
      else if (p1I)   winner = 'p2';
      else if (p2I)   winner = 'p1';
      else {
        var d1 = Math.abs(p1A - correct), d2 = Math.abs(p2A - correct);
        winner = d1 < d2 ? 'p1' : d2 < d1 ? 'p2' : 'tie';
      }
      if (winner === 'p1') this.p1Points++;
      if (winner === 'p2') this.p2Points++;
      var payload = {
        p1Answer: p1A, p2Answer: p2A, correctPrice: correct,
        explanation: this.currentP.explanation, productLabel: this.currentP.label,
        productImage: this.currentP.image, winner: winner,
        p1Points: this.p1Points, p2Points: this.p2Points, round: this.round
      };
      if (this.ctx.isHost) this.ctx.network.send('pih_result', payload);
      this._showResult(payload);
    },

    _showResult: function (msg) {
      var self = this;
      var winner = msg.winner, p1A = msg.p1Answer, p2A = msg.p2Answer, correct = msg.correctPrice;
      document.getElementById('pih-input-area').style.display   = 'none';
      document.getElementById('pih-wait').style.display         = 'none';
      document.getElementById('pih-timer-wrap').style.display   = 'none';
      document.getElementById('pih-product-card').style.display = 'none';

      var icons = { p1: '🏅', p2: '🏅', tie: '🤝', none: '😬' };
      document.getElementById('pih-ov-ico').textContent = icons[winner] || '🏅';
      document.getElementById('pih-ov-ttl').textContent =
        winner === 'p1' ? this.ctx.p1Name + ' liegt näher dran!' :
        winner === 'p2' ? this.ctx.p2Name + ' liegt näher dran!' :
        winner === 'tie' ? 'Unentschieden!' : 'Beide Tipps ungültig!';

      // Produktname + Bild erst jetzt zeigen
      document.getElementById('pih-ov-product').textContent = msg.productLabel || '';
      var ow = document.getElementById('pih-ov-img-wrap'), oi = document.getElementById('pih-ov-img');
      if (oi && msg.productImage) oi.src = msg.productImage;
      if (ow) ow.style.display = 'block';

      var pr = document.getElementById('pih-ov-price-reveal');
      pr.style.display = 'flex';
      document.getElementById('pih-ov-correct-price').textContent = formatPrice(correct);

      var d1 = (p1A === 'invalid' || p1A === null) ? null : Math.abs(p1A - correct);
      var d2 = (p2A === 'invalid' || p2A === null) ? null : Math.abs(p2A - correct);

      function badge(ans, diff, name, col, isW) {
        var inv = (ans === 'invalid' || ans === null);
        var wl = isW === true  ? '<div style="font-size:12px;color:#2af0a0;letter-spacing:.15em;text-transform:uppercase;font-family:\'Barlow Condensed\',sans-serif;">PUNKT!</div>'
               : isW === false ? '<div style="font-size:12px;color:#f55a3a;letter-spacing:.15em;text-transform:uppercase;font-family:\'Barlow Condensed\',sans-serif;">Kein Punkt</div>'
               : '<div style="font-size:12px;color:#c0c0d8;letter-spacing:.15em;text-transform:uppercase;font-family:\'Barlow Condensed\',sans-serif;">Unentschieden</div>';
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:4px;min-width:120px;' +
               'background:rgba(255,255,255,.03);border:2px solid ' + col + '33;' +
               'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));padding:10px 12px;">' +
               '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:' + col + ';letter-spacing:.1em;">' + esc(name) + '</div>' +
               '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(18px,4vw,26px);color:' + (inv ? '#f55a3a' : '#f0c030') + ';">' + (inv ? 'Ungültig' : formatPrice(ans)) + '</div>' +
               (inv ? '' : '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#c0c0d8;">Abw.: ' + formatPrice(diff) + '</div>') +
               wl + '</div>';
      }
      var p1W = winner === 'p1', p2W = winner === 'p2', tie = winner === 'tie';
      document.getElementById('pih-ov-answers').innerHTML =
        badge(p1A, d1, this.ctx.p1Name, '#3ab4f5', tie ? null : p1W) +
        '<div style="display:flex;align-items:center;padding:0 6px;color:#c0c0d8;font-size:16px;font-family:\'Barlow Condensed\',sans-serif;">VS</div>' +
        badge(p2A, d2, this.ctx.p2Name, '#f55a3a', tie ? null : p2W);

      document.getElementById('pih-ov-expl').textContent = msg.explanation || '';
      document.getElementById('pih-ov-sc').innerHTML =
        esc(this.ctx.p1Name) + ': ' + msg.p1Points + '/' + MAX_POINTS +
        ' &nbsp;·&nbsp; ' + esc(this.ctx.p2Name) + ': ' + msg.p2Points + '/' + MAX_POINTS +
        ' &nbsp;·&nbsp; Runde ' + msg.round;

      var ov = document.getElementById('pih-ov'); ov.style.display = 'flex';
      this._drawScores(msg.p1Points, msg.p2Points);
      beep(winner === 'none' ? 220 : 523, 0.08, 'sine', 0.15);
      if (winner !== 'none' && winner !== 'tie') {
        setTimeout(function(){beep(659,0.08,'sine',0.15);},100);
        setTimeout(function(){beep(784,0.2,'sine',0.18);},200);
      }

      var gameOver = (msg.p1Points >= MAX_POINTS || msg.p2Points >= MAX_POINTS) && (msg.p1Points !== msg.p2Points);
      var btn = document.getElementById('pih-ov-btn');
      btn.textContent = gameOver ? 'AUFLÖSUNG' : 'NÄCHSTE RUNDE →';
      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function () {
          self.ctx.network.send('pih_next', { gameOver: gameOver, p1Points: self.p1Points, p2Points: self.p2Points });
          if (gameOver) { self._showFinal({ winner: self.p1Points > self.p2Points ? 'p1' : 'p2', p1Points: self.p1Points, p2Points: self.p2Points }); }
          else { self.round++; self._startMini(); ov.style.display = 'none'; }
        };
      } else { btn.style.display = 'none'; }
    },

    _showFinal: function (msg) {
      var self = this, p1W = msg.winner === 'p1', p2W = msg.winner === 'p2';
      var wn = p1W ? this.ctx.p1Name : (p2W ? this.ctx.p2Name : '?');
      var ln = p1W ? this.ctx.p2Name : this.ctx.p1Name;
      var ov = document.getElementById('pih-ov');
      document.getElementById('pih-ov-ico').textContent = '🏆';
      document.getElementById('pih-ov-ttl').textContent = wn + ' gewinnt!';
      document.getElementById('pih-ov-product').textContent = 'Herzlichen Glückwunsch!';
      document.getElementById('pih-ov-price-reveal').style.display = 'none';
      document.getElementById('pih-ov-expl').textContent = ln + ' hat ' + (p1W ? msg.p2Points : msg.p1Points) + ' Punkte erzielt — ' + wn + ' erreichte als Erster ' + MAX_POINTS + ' Punkte!';
      var ow = document.getElementById('pih-ov-img-wrap'); if (ow) ow.style.display = 'none';
      document.getElementById('pih-ov-answers').innerHTML =
        '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;min-width:120px;background:rgba(255,255,255,.03);border:2px solid #3ab4f533;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));padding:12px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:#3ab4f5;">' + esc(this.ctx.p1Name) + '</div>' +
          '<div style="font-size:30px;">' + (p1W ? '🏆' : '🥈') + '</div>' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:20px;color:#f0c030;">' + msg.p1Points + ' Pkt.</div>' +
        '</div>' +
        '<div style="display:flex;align-items:center;padding:0 6px;color:#c0c0d8;font-size:16px;font-family:\'Barlow Condensed\',sans-serif;">VS</div>' +
        '<div style="display:flex;flex-direction:column;align-items:center;gap:6px;min-width:120px;background:rgba(255,255,255,.03);border:2px solid #f55a3a33;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));padding:12px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:#f55a3a;">' + esc(this.ctx.p2Name) + '</div>' +
          '<div style="font-size:30px;">' + (p2W ? '🏆' : '🥈') + '</div>' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:20px;color:#f0c030;">' + msg.p2Points + ' Pkt.</div>' +
        '</div>';
      document.getElementById('pih-ov-sc').textContent = 'Gespielt: ' + this.round + ' Runden';
      ov.style.display = 'flex';
      var btn = document.getElementById('pih-ov-btn'); btn.textContent = 'WEITER';
      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function () { self.ctx.network.send('pih_end_final', {}); self._finish(); };
      } else {
        btn.style.display = 'none';
        self._timers.push(setTimeout(function () { if (!self.dead) self._finish(); }, 9000));
      }
    },

    _updateWaitStatus: function () {
      var e1 = document.getElementById('pih-wait-p1'), e2 = document.getElementById('pih-wait-p2');
      if (e1) e1.textContent = this.ctx.p1Name + ': ' + (this.p1Locked ? 'eingeloggt ✓' : '… überlegt');
      if (e2) e2.textContent = this.ctx.p2Name + ': ' + (this.p2Locked ? 'eingeloggt ✓' : '… überlegt');
    },

    _drawScores: function (p1, p2) {
      var el = document.getElementById('pih-scores'); if (!el) return;
      var pts1 = (p1 !== undefined) ? p1 : this.p1Points;
      var pts2 = (p2 !== undefined) ? p2 : this.p2Points;
      function dots(pts) {
        var s = '';
        for (var i = 0; i < MAX_POINTS; i++)
          s += '<span class="pih-dot' + (i < pts ? ' filled' : '') + '"></span>';
        return s;
      }
      el.innerHTML =
        '<div style="display:flex;align-items:center;gap:6px;">' +
          '<span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#3ab4f5;letter-spacing:.1em;">' + esc(this.ctx.p1Name) + '</span>' +
          dots(pts1) +
        '</div>' +
        '<span style="color:#c0c0d8;font-size:10px;letter-spacing:.15em;font-family:\'Barlow Condensed\',sans-serif;">PUNKTE</span>' +
        '<div style="display:flex;align-items:center;gap:6px;">' +
          dots(pts2) +
          '<span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#f55a3a;letter-spacing:.1em;">' + esc(this.ctx.p2Name) + '</span>' +
        '</div>';
    },

    _setStatus: function (txt, col, size) {
      var el = document.getElementById('pih-status'); if (!el) return;
      el.textContent = txt;
      if (col)  el.style.color    = col;
      if (size) el.style.fontSize = size;
    },

    _clearTimers: function () {
      clearTimeout(this._roundTimer); clearInterval(this._tick);
      this._roundTimer = null; this._tick = null;
    },

    _finish: function () {
      this.dead = true;
      this.onEnd({ winner: this.p1Points > this.p2Points ? 'p1' : 'p2', details: this.p1Points + ' : ' + this.p2Points });
    },

    destroy: function () {
      this.dead = true;
      this._timers.forEach(clearTimeout);
      this._clearTimers();
      ['pih_start_countdown','pih_sync_product','pih_answer','pih_result',
       'pih_timeout','pih_next','pih_end_final','pih_status_update'].forEach(function (ev) {
        this.ctx.network.off(ev);
      }, this);
    }
  };

  GamePool.register({
    id: 'preis_ist_heiss',
    name: 'Der Preis ist heiß',
    description: 'Ein Produkt wird eingeblendet – schätzt den Ladenpreis in Euro! Wer näher dran ist, gewinnt den Punkt. Wer zuerst 6 Punkte hat, gewinnt!',
    init: function (container, ctx, onEnd) { this._instance = new PreisIstHeissInstance(container, ctx, onEnd); },
    destroy: function () { if (this._instance) this._instance.destroy(); }
  });

})();
