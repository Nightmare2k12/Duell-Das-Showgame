(function () {

  // ═══════════════════════════════════════════════════════════
  // BEHAUPTUNGEN-DATENBANK
  // ═══════════════════════════════════════════════════════════
  var STATEMENTS = [
    // --- DEINE 3 BEISPIELE (bitte ergänzen!) ---
    { text: 'Die Chinesische Mauer ist vom Weltraum aus mit bloßem Auge sichtbar.', answer: false, explanation: 'Zu schmal — selbst Astronauten können sie nicht sehen.' },
    { text: 'Ein Blitz kann nicht zweimal an derselben Stelle einschlagen.', answer: false, explanation: 'Blitze schlagen sehr häufig mehrfach am selben Ort ein.' },
    { text: 'Wasser kocht bei 100 °C auf Meereshöhe.', answer: true, explanation: 'Bei 1013 hPa Luftdruck kocht Wasser exakt bei 100 °C.' },

    // --- WEITERE BEISPIELE (bis du die Datenbank füllst) ---
    { text: 'Haie sind Säugetiere.', answer: false, explanation: 'Haie sind Fische, keine Säugetiere.' },
    { text: 'Die Sonne ist ein Stern.', answer: true, explanation: 'Unsere Sonne ist ein durchschnittlicher Gelber Zwerg-Stern.' },
    { text: 'Mozart wurde in Wien geboren.', answer: false, explanation: 'Mozart wurde 1756 in Salzburg geboren.' },
    { text: 'Diamanten bestehen aus Kohlenstoff.', answer: true, explanation: 'Diamant ist die härteste Form von reinem Kohlenstoff.' },
    { text: 'Europa hat mehr Einwohner als Afrika.', answer: false, explanation: 'Afrika hat ca. 1,4 Mrd., Europa ca. 750 Mio. Einwohner.' },
	// --- NATUR & TIERE ---
    { text: 'Bananen wachsen an Bäumen.', answer: false, explanation: 'Bananenpflanzen sind botanisch gesehen Stauden, keine Bäume.' },
    { text: 'Ein Oktopus hat drei Herzen.', answer: true, explanation: 'Zwei pumpen Blut zu den Kiemen, eines zum Rest des Körpers.' },
    { text: 'Pinguine leben am Nordpol.', answer: false, explanation: 'Pinguine leben fast ausschließlich auf der Südhalbkugel.' },
    { text: 'Stiere werden durch die Farbe Rot aggressiv.', answer: false, explanation: 'Stiere sind farbenblind für Rot; sie reagieren auf die Bewegung des Tuchs.' },
    { text: 'Goldfische haben ein Gedächtnis von nur drei Sekunden.', answer: false, explanation: 'Studien zeigen, dass sie sich Dinge über Monate merken können.' },
    { text: 'Elefanten können nicht springen.', answer: true, explanation: 'Sie sind die einzigen Säugetiere, die mit allen vier Beinen am Boden bleiben müssen.' },
    { text: 'Spinnen sind Insekten.', answer: false, explanation: 'Spinnen gehören zur Klasse der Spinnentiere und haben acht Beine.' },
    { text: 'Ein Regenwurm wird zu zwei Würmern, wenn man ihn durchschneidet.', answer: false, explanation: 'Nur das Vorderteil kann unter Umständen überleben, das Hinterteil stirbt.' },
    { text: 'Chamäleons wechseln ihre Farbe nur zur Tarnung.', answer: false, explanation: 'Der Farbwechsel dient primär der Kommunikation und Temperaturregelung.' },
    { text: 'Bienen sterben immer, nachdem sie gestochen haben.', answer: true, explanation: 'Das gilt nur für Honigbienen bei Säugetierhaut wegen der Widerhaken.' },

    // --- KÖRPER & GESUNDHEIT ---
    { text: 'Der Mensch nutzt nur 10 % seines Gehirns.', answer: false, explanation: 'Wir nutzen nahezu jeden Teil unseres Gehirns, nur nicht gleichzeitig.' },
    { text: 'Fingernägel wachsen nach dem Tod weiter.', answer: false, explanation: 'Die Haut trocknet aus und zieht sich zurück, wodurch die Nägel länger wirken.' },
    { text: 'Das Herz ist der stärkste Muskel im menschlichen Körper.', answer: false, explanation: 'Gemessen an seiner Größe ist der Kaumuskel der stärkste.' },
    { text: 'Blut in den Venen ist blau.', answer: false, explanation: 'Blut ist immer rot; die Venen wirken durch die Hautschichten nur blau.' },
    { text: 'Kaffee entzieht dem Körper Wasser.', answer: false, explanation: 'Kaffee wirkt zwar harntreibend, zählt aber zur Flüssigkeitsbilanz dazu.' },
    { text: 'Karotten verbessern die Nachtsicht.', answer: false, explanation: 'Das war britische Propaganda im 2. Weltkrieg, um Radartechnik zu verschleiern.' },
    { text: 'Der Daumen hat ein eigenes Gelenk mehr als andere Finger.', answer: false, explanation: 'Im Gegenteil: Der Daumen hat nur zwei Glieder, die anderen Finger drei.' },
    { text: 'Zucker macht Kinder hyperaktiv.', answer: false, explanation: 'Wissenschaftliche Studien konnten diesen Effekt nicht belegen.' },
    { text: 'Niesen mit offenen Augen ist unmöglich.', answer: true, explanation: 'Ein Reflex schließt die Augen automatisch, um sie zu schützen.' },
    { text: 'Die Zunge ist in verschiedene Geschmackszonen unterteilt.', answer: false, explanation: 'Alle Geschmacksrichtungen werden überall auf der Zunge wahrgenommen.' },

    // --- GEOGRAPHIE & WELT ---
    { text: 'Der Mount Everest ist der höchste Berg der Welt.', answer: true, explanation: 'Mit 8.848 m ist er der höchste Berg über dem Meeresspiegel.' },
    { text: 'Island ist grüner als Grönland.', answer: true, explanation: 'Trotz der Namen ist Grönland meist vereist, Island hingegen sehr grün.' },
    { text: 'Australien ist breiter als der Mond.', answer: true, explanation: 'Australien misst ca. 4.000 km, der Monddurchmesser beträgt ca. 3.474 km.' },
    { text: 'Vatikanstadt ist das kleinste Land der Welt.', answer: true, explanation: 'Es umfasst nur eine Fläche von etwa 0,44 Quadratkilometern.' },
    { text: 'Der Nil ist der längste Fluss der Erde.', answer: true, explanation: 'Er schlägt den Amazonas knapp (wobei dies unter Forschern umstritten ist).' },
    { text: 'New York City ist die Hauptstadt der USA.', answer: false, explanation: 'Die Hauptstadt ist Washington, D.C.' },
    { text: 'Russland hat eine größere Oberfläche als der Pluto.', answer: true, explanation: 'Russland hat ca. 17 Mio. km², Pluto nur ca. 16,6 Mio. km².' },
    { text: 'Die Schweiz hat vier offizielle Landessprachen.', answer: true, explanation: 'Deutsch, Französisch, Italienisch und Rätoromanisch.' },
    { text: 'In Japan gibt es mehr Fahrräder als Autos.', answer: false, explanation: 'Obwohl Fahrräder extrem beliebt sind, übersteigt die Zahl der PKW sie.' },
    { text: 'Die Sahara ist die größte Wüste der Welt.', answer: false, explanation: 'Die Antarktis ist technisch gesehen die größte Wüste (Kältewüste).' },

    // --- GESCHICHTE & KULTUR ---
    { text: 'Napoleon Bonaparte war extrem klein.', answer: false, explanation: 'Er war etwa 1,68 m groß – für seine Zeit absolut durchschnittlich.' },
    { text: 'Die Wikinger trugen Helme mit Hörnern.', answer: false, explanation: 'Diese Helme sind eine Erfindung von Opernkostümbildnern des 19. Jahrhunderts.' },
    { text: 'Kolumbus war der erste Europäer in Amerika.', answer: false, explanation: 'Leif Eriksson erreichte Amerika bereits rund 500 Jahre früher.' },
    { text: 'Die Glühbirne wurde von Thomas Edison erfunden.', answer: false, explanation: 'Er verbesserte sie entscheidend, aber es gab viele Erfinder vor ihm.' },
    { text: 'Albert Einstein ist in der Schule durch Mathe gefallen.', answer: false, explanation: 'Das ist ein Mythos; er war in Mathematik sogar exzellent.' },
    { text: 'Die Mona Lisa hat keine Augenbrauen.', answer: true, explanation: 'Wahrscheinlich verblassten sie über die Jahrhunderte durch Reinigung.' },
    { text: 'Das Internet und das World Wide Web sind dasselbe.', answer: false, explanation: 'Das Internet ist das Netzwerk; das Web ist nur ein Dienst darauf.' },
    { text: 'Kleopatra war Griechin, keine Ägypterin.', answer: true, explanation: 'Sie entstammte der ptolemäischen Dynastie, die griechische Wurzeln hatte.' },
    { text: 'Die erste Mondlandung war im Jahr 1969.', answer: true, explanation: 'Neil Armstrong betrat am 21. Juli 1969 als erster Mensch den Mond.' },
    { text: 'Coca-Cola war ursprünglich grün.', answer: false, explanation: 'Sie war von Anfang an braun, wurde aber in grünen Flaschen verkauft.' },

    // --- WISSENSCHAFT & TECHNIK ---
    { text: 'Schall verbreitet sich im Weltraum schneller.', answer: false, explanation: 'Im Vakuum des Weltraums kann Schall sich gar nicht ausbreiten.' },
    { text: 'Ein Jahr auf dem Merkur ist kürzer als ein Tag auf dem Merkur.', answer: true, explanation: 'Er dreht sich extrem langsam, umkreist die Sonne aber sehr schnell.' },
    { text: 'Glas ist eine extrem langsame Flüssigkeit.', answer: false, explanation: 'Glas ist ein amorpher Festkörper, keine Flüssigkeit.' },
    { text: 'Gold ist das teuerste Metall der Welt.', answer: false, explanation: 'Metalle wie Rhodium oder Palladium sind oft deutlich teurer.' },
    { text: 'Ein Laserstrahl ist im Vakuum unsichtbar.', answer: true, explanation: 'Ohne Partikel (Staub/Luft), die das Licht streuen, sieht man den Strahl nicht.' },
    { text: 'Der Mensch hat 5 Sinne.', answer: false, explanation: 'Wir haben viel mehr, z. B. Gleichgewichtssinn, Schmerzempfinden und Temperatursinn.' },
    { text: 'Blei ist der Hauptbestandteil von Bleistiften.', answer: false, explanation: 'Bleistiftminen bestehen aus Graphit und Ton.' },
    { text: 'Pluto gilt offiziell wieder als Planet.', answer: false, explanation: 'Er wird seit 2006 weiterhin als Zwergplanet klassifiziert.' },
    { text: 'Ein Lichtjahr ist eine Maßeinheit für die Zeit.', answer: false, explanation: 'Ein Lichtjahr misst die Entfernung, nicht die Zeit.' },
    { text: 'Sauerstoff ist brennbar.', answer: false, explanation: 'Sauerstoff selbst brennt nicht, er ist aber für eine Verbrennung notwendig.' },
	// --- VIDEOSPIELE ---
    { text: 'Mario wurde ursprünglich als Zimmermann und nicht als Klempner konzipiert.', answer: true, explanation: 'In seinem ersten Spiel "Donkey Kong" arbeitete er auf einer Baustelle.' },
    { text: 'Die Spielfigur Link aus "The Legend of Zelda" heißt eigentlich Zelda.', answer: false, explanation: 'Zelda ist der Name der Prinzessin; der Held heißt Link.' },
    { text: 'Pac-Man wurde von der Form einer Pizza inspiriert.', answer: true, explanation: 'Erfinder Toru Iwatani kam die Idee beim Essen einer Pizza, bei der ein Stück fehlte.' },
    { text: 'Das Spiel "Minecraft" wurde ursprünglich von nur einer Person entwickelt.', answer: true, explanation: 'Markus "Notch" Persson erschuf die erste Version im Alleingang.' },
    { text: 'Die PlayStation 1 war ursprünglich als Add-on für das Super Nintendo geplant.', answer: true, explanation: 'Nach einem Streit zwischen Sony und Nintendo entwickelte Sony eine eigene Konsole.' },
    { text: 'In "Pokémon" war Pikachu von Anfang an als Maskottchen geplant.', answer: false, explanation: 'Ursprünglich sollte das Pokémon Piepi (Clefairy) das Maskottchen werden.' },
    { text: 'Das erfolgreichste Videospiel aller Zeiten (Verkaufszahlen) ist Tetris.', answer: false, explanation: 'Minecraft hat Tetris inzwischen mit über 300 Millionen Verkäufen überholt.' },
    { text: 'Der Master Chief aus "Halo" hat in der gesamten Spielreihe nie sein Gesicht gezeigt.', answer: true, explanation: 'In den Spielen bleibt sein Gesicht (für den Spieler) stets unter dem Helm verborgen.' },
    { text: 'Sonic der Igel war ursprünglich dunkelblau, damit er im Wasser besser getarnt ist.', answer: false, explanation: 'Er ist blau, weil das die Farbe des SEGA-Logos ist.' },
    { text: 'Die Weltkarte von "GTA V" ist größer als die Fläche von Manhattan.', answer: true, explanation: 'Los Santos und Umgebung sind um ein Vielfaches größer als die New Yorker Insel.' },
    { text: 'Lara Croft sollte ursprünglich eine südamerikanische Abenteurerin namens Laura Cruz sein.', answer: true, explanation: 'Die Entwickler änderten den Namen später, um ihn britischer klingen zu lassen.' },
    { text: 'Das Spiel "E.T." für den Atari 2600 gilt als einer der Gründe für den Videospiel-Crash 1983.', answer: true, explanation: 'Millionen unverkaufter Module wurden damals in der Wüste von New Mexico vergraben.' },
    { text: 'In "Resident Evil" hieß das Virus ursprünglich "T-Virus" wegen des Wortes "Tarantula".', answer: false, explanation: 'Das "T" steht für "Tyrant".' },
    { text: 'Der Game Boy war die erste Handheld-Konsole mit austauschbaren Modulen.', answer: false, explanation: 'Das Microvision von 1979 war die erste Konsole dieser Art.' },
    { text: 'Die Stimmen der Ghasts in "Minecraft" stammen von einer schlafenden Katze.', answer: true, explanation: 'Der Sounddesigner nahm das Schnarchen seiner Katze auf und bearbeitete es.' },
    { text: 'Das erste "The Legend of Zelda" hatte eine Speicherfunktion via Batterie im Modul.', answer: true, explanation: 'Es war eines der ersten Spiele, bei denen man den Fortschritt direkt auf dem Modul sichern konnte.' },
    { text: 'Kratos aus "God of War" hat seine rote Tätowierung als Hommage an seinen Bruder.', answer: true, explanation: 'Sein Bruder Deimos hatte ein ähnliches Muttermal.' },
    { text: 'Die maximale Punktzahl bei "Pac-Man" ist 3.333.360 Punkte.', answer: true, explanation: 'Danach stürzt das Spiel aufgrund eines Programmierfehlers (Level 256) ab.' },
    { text: 'Der Name "Atari" stammt aus dem Japanischen und kommt vom Brettspiel "Go".', answer: true, explanation: 'Es ist ein Begriff, der ähnlich wie "Schachmatt" verwendet wird.' },
    { text: 'Spyro der Drache sollte ursprünglich grün sein.', answer: true, explanation: 'Er wurde lila gefärbt, damit er sich besser vom grünen Gras der Level abhebt.' },

    // --- FILME & SERIEN ---
    { text: 'James Bond trinkt seinen Martini im Buch "Casino Royale" eigentlich gerührt.', answer: false, explanation: 'Schon im ersten Buch verlangt er ihn geschüttelt, nicht gerührt.' },
    { text: 'Darth Vader sagt im Film "Empire Strikes Back" den Satz: "Luke, ich bin dein Vater".', answer: false, explanation: 'Der echte Satz lautet: "Nein, ich bin dein Vater".' },
    { text: 'Die Maske von Michael Myers in "Halloween" ist eine umgearbeitete Captain-Kirk-Maske.', answer: true, explanation: 'Sie nahmen eine günstige William-Shatner-Maske, malten sie weiß an und vergrößerten die Augen.' },
    { text: 'Walt Disney hielt den Rekord für die meisten gewonnenen Oscars.', answer: true, explanation: 'Er gewann insgesamt 26 Oscars bei 59 Nominierungen.' },
    { text: 'In "Titanic" wurde das berühmte Porträt von Rose von Leonardo DiCaprio gezeichnet.', answer: false, explanation: 'Die Zeichnung stammt in Wahrheit vom Regisseur James Cameron.' },
    { text: 'Arnold Schwarzenegger spricht in "Terminator 1" weniger als 100 Wörter.', answer: true, explanation: 'Er sagt im gesamten Film nur 17 Sätze bzw. ca. 70 Wörter.' },
    { text: 'Die "Sturmttruppler" in Star Wars schießen im ersten Film kein einziges Mal daneben.', answer: false, explanation: 'Sie sind berüchtigt dafür, fast nie etwas zu treffen.' },
    { text: 'Der Film "Parasite" war der erste nicht-englischsprachige Film, der den Oscar für den Besten Film gewann.', answer: true, explanation: 'Das geschah bei der Verleihung im Jahr 2020.' },
    { text: 'Will Smith lehnte die Rolle des Neo in "Matrix" ab.', answer: true, explanation: 'Stattdessen drehte er den Film "Wild Wild West".' },
    { text: 'Der weiße Hai im Film "Der weiße Hai" funktionierte während der Dreharbeiten kaum.', answer: true, explanation: 'Die mechanische Haifischpuppe "Bruce" war ständig kaputt, weshalb man den Hai lange nicht sieht.' },
    { text: 'Die Stimme von "E.T." wurde von einer Frau aufgenommen, die zwei Packungen Zigaretten am Tag rauchte.', answer: true, explanation: 'Pat Welsh hatte dadurch die perfekt rauchige, außerirdische Stimme.' },
    { text: 'In "Pulp Fiction" erfährt man im Film nie, was sich im Koffer befindet.', answer: true, explanation: 'Regisseur Quentin Tarantino ließ den Inhalt absichtlich ein Geheimnis (MacGuffin).' },
    { text: 'Keanu Reeves verschenkte einen Großteil seiner Matrix-Gagen an das Special-Effects-Team.', answer: true, explanation: 'Er gab Millionen ab, weil er fand, dass sie die wahre Arbeit geleistet hatten.' },
    { text: 'Der Film "Psycho" war der erste US-Film, in dem eine Toilettenspülung zu sehen war.', answer: true, explanation: 'Das galt 1960 noch als kleiner Skandal.' },
    { text: 'Iron Man war schon immer das bekannteste Mitglied der Avengers.', answer: false, explanation: 'Vor den Filmen (2008) galt er als B-Promi unter den Superhelden.' },
    { text: 'Die Hobbits in "Der Herr der Ringe" rauchten echten Tabak in ihren Pfeifen.', answer: true, explanation: 'Die Schauspieler mussten tatsächlich Tabak rauchen (oft Kräutermischungen).' },
    { text: 'Heath Ledger führte bei den Video-Drohungen des Jokers in "The Dark Knight" selbst Regie.', answer: true, explanation: 'Christopher Nolan vertraute ihm die Gestaltung dieser Szenen komplett an.' },
    { text: 'Der Löwe im MGM-Intro hat bei den Aufnahmen seinen Trainer getötet.', answer: false, explanation: 'Das ist eine urbane Legende; kein Löwe wurde beim Dreh der Logos gewalttätig.' },
    { text: 'Brad Pitt und Edward Norton lernten für "Fight Club" tatsächlich, wie man Seife herstellt.', answer: true, explanation: 'Sie nahmen Unterricht, um ihre Rollen authentisch zu spielen.' },
    { text: 'Für den Film "Interstellar" wurde ein echtes 500-Morgen-Maisfeld angepflanzt.', answer: true, explanation: 'Nach dem Dreh wurde der Mais verkauft und brachte sogar Gewinn ein.' }
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

  // ═══════════════════════════════════════════════════════════
  // HAUPTKLASSE
  // ═══════════════════════════════════════════════════════════
  function IstDasRichtigInstance(container, ctx, onEnd) {
    this.container   = container;
    this.ctx         = ctx;
    this.onEnd       = onEnd;
    this.dead        = false;
    this.mini        = 1;
    this.p1Wins      = 0;
    this.p2Wins      = 0;
    this.timers      = [];
    this._voteTimer  = null;
    this._countdownTimer = null;
    this.phase       = 'idle';
    this.currentStmt = null;
    this.usedIdx     = [];
    this.p1Vote      = null;
    this.p2Vote      = null;
    this._timeLeft   = 8;
    this._tickInterval = null;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  IstDasRichtigInstance.prototype = {

    // ─── UI AUFBAUEN ────────────────────────────────────────
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';

      var root = document.createElement('div');
      root.id = 'idr-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%, #0e0e28, #060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:center;',
        'position:relative;overflow:hidden;padding:16px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        // Hintergrund-Ring
        '<div style="position:absolute;pointer-events:none;width:600px;height:600px;border-radius:50%;',
        'top:50%;left:50%;transform:translate(-50%,-50%);',
        'border:1px solid rgba(240,192,48,.04);"></div>',

        // Punkte-Leiste oben
        '<div id="idr-dots" style="display:flex;align-items:center;gap:20px;margin-bottom:16px;min-height:30px;"></div>',

        // Subtitle
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;',
        'color:#c0c0d8;text-transform:uppercase;margin-bottom:14px;">Richtig oder Falsch?</div>',

        // Behauptungs-Box
        '<div id="idr-stmt-wrap" style="width:100%;max-width:520px;min-height:110px;display:flex;',
        'align-items:center;justify-content:center;margin-bottom:20px;">',
          '<div id="idr-stmt" style="font-family:\'Barlow Condensed\',sans-serif;font-size:clamp(18px,3.5vw,26px);',
          'color:#e8e4f0;text-align:center;line-height:1.4;letter-spacing:.02em;padding:0 8px;"></div>',
        '</div>',

        // Timer-Ring
        '<div id="idr-timer-wrap" style="position:relative;width:80px;height:80px;margin-bottom:18px;">',
          '<svg viewBox="0 0 80 80" style="position:absolute;inset:0;transform:rotate(-90deg);">',
            '<circle cx="40" cy="40" r="34" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="5"/>',
            '<circle id="idr-timer-ring" cx="40" cy="40" r="34" fill="none" stroke="#f0c030" stroke-width="5"',
            ' stroke-dasharray="213.6" stroke-dashoffset="0" stroke-linecap="round"',
            ' style="transition:stroke-dashoffset 1s linear,stroke .3s;"/>',
          '</svg>',
          '<div id="idr-timer-num" style="position:absolute;inset:0;display:flex;align-items:center;',
          'justify-content:center;font-size:28px;color:#f0c030;letter-spacing:.05em;">5</div>',
        '</div>',

        // Status-Zeile
        '<div id="idr-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;',
        'letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:32px;',
        'margin-bottom:16px;text-align:center;transition:color .2s;"></div>',

        // Start-Button (nur Host)
        '<button id="idr-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';',
        'margin-bottom:20px;background:#f0c030;border:none;color:#000;',
        'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;',
        'padding:12px 40px;cursor:pointer;',
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));',
        '">RUNDE STARTEN</button>',

        // Abstimmungs-Buttons
        '<div id="idr-vote-area" style="display:none;gap:16px;margin-bottom:20px;">',
          // RICHTIG
          '<button id="idr-btn-true" style="',
          'width:clamp(120px,20vw,160px);height:clamp(70px,12vw,90px);',
          'background:linear-gradient(135deg,#1a3a1a,#0f2a0f);',
          'border:2px solid #2af0a0;color:#2af0a0;',
          'font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,4vw,30px);letter-spacing:.15em;',
          'cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));',
          'transition:transform .08s,opacity .2s,box-shadow .2s;',
          'box-shadow:0 4px 20px rgba(42,240,160,.15);',
          '">✓ RICHTIG</button>',
          // FALSCH
          '<button id="idr-btn-false" style="',
          'width:clamp(120px,20vw,160px);height:clamp(70px,12vw,90px);',
          'background:linear-gradient(135deg,#3a1a1a,#2a0f0f);',
          'border:2px solid #f55a3a;color:#f55a3a;',
          'font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,4vw,30px);letter-spacing:.15em;',
          'cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));',
          'transition:transform .08s,opacity .2s,box-shadow .2s;',
          'box-shadow:0 4px 20px rgba(245,90,58,.15);',
          '">✗ FALSCH</button>',
        '</div>',

        // Warte-Icons (zeigen gewählt/nicht gewählt für Gegner)
        '<div id="idr-vote-status" style="display:none;flex-direction:column;align-items:center;gap:6px;margin-bottom:16px;">',
          '<div id="idr-vote-p1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;',
          'letter-spacing:.2em;color:#3ab4f5;text-transform:uppercase;"></div>',
          '<div id="idr-vote-p2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;',
          'letter-spacing:.2em;color:#f55a3a;text-transform:uppercase;"></div>',
        '</div>',

        // Ergebnis-Overlay
        '<div id="idr-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);',
        'display:none;flex-direction:column;align-items:center;justify-content:center;',
        'gap:14px;text-align:center;padding:28px;">',
          '<div id="idr-ov-ico" style="font-size:54px;"></div>',
          '<div id="idr-ov-ttl" style="font-size:clamp(28px,7vw,52px);color:#f0c030;',
          'font-family:\'Bebas Neue\',sans-serif;letter-spacing:.05em;"></div>',
          '<div id="idr-ov-expl" style="font-family:\'Barlow Condensed\',sans-serif;',
          'font-size:16px;color:#a0a0bc;max-width:400px;line-height:1.5;"></div>',
          '<div id="idr-ov-votes" style="display:flex;gap:20px;margin:4px 0;"></div>',
          '<div id="idr-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;',
          'font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
          '<button id="idr-ov-btn" style="margin-top:10px;background:#f0c030;border:none;color:#000;',
          'font-family:\'Bebas Neue\',sans-serif;font-size:21px;padding:13px 42px;cursor:pointer;',
          'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));',
          '">WEITER →</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);

      // Spielernamen setzen
      var self = this;
      this._drawDots();

      // Start-Button
      var startBtn = document.getElementById('idr-start-btn');
      if (this.ctx.isHost) {
        startBtn.addEventListener('click', function() {
          startBtn.style.display = 'none';
          self.ctx.network.send('idr_start_countdown', {});
          self._countdown();
        });
      }

      // Vote-Buttons
      document.getElementById('idr-btn-true').addEventListener('click', function() {
        self._castVote(true);
      });
      document.getElementById('idr-btn-false').addEventListener('click', function() {
        self._castVote(false);
      });
    },

    // ─── NETZWERK ───────────────────────────────────────────
    _setupNet: function() {
      var self = this;

      this.ctx.network.on('idr_start_countdown', function() {
        if (!self.ctx.isHost) self._countdown();
      });

      this.ctx.network.on('idr_sync_stmt', function(msg) {
        if (self.ctx.isHost) return;
        self.currentStmt = { text: msg.text, answer: msg.answer, explanation: msg.explanation };
        self._showStatement(msg.text);
        self._startVoting();
      });

      // Gast teilt Host seinen Vote mit
      this.ctx.network.on('idr_vote', function(msg) {
        if (!self.ctx.isHost) return;
        if (msg.player === 'p2') {
          self.p2Vote = msg.vote;
          self._updateVoteStatus();
          self._tryResolve();
        }
      });

      // Host schickt Ergebnis an Gast
      this.ctx.network.on('idr_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins;
        self.p2Wins = msg.p2Wins;
        self._showResult(msg.p1Vote, msg.p2Vote, msg.correct, msg.explanation, msg.p1Points, msg.p2Points);
      });

      this.ctx.network.on('idr_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._finish();
        else { self.mini++; self._startMini(); document.getElementById('idr-ov').style.display = 'none'; }
      });

      // Timeout: Zeit abgelaufen, Host triggert Auflösung
      this.ctx.network.on('idr_timeout', function() {
        if (self.ctx.isHost) return;
        self._clearVoteTimer();
        self.phase = 'result';
        document.getElementById('idr-vote-area').style.display = 'none';
        document.getElementById('idr-vote-status').style.display = 'none';
        document.getElementById('idr-timer-wrap').style.display = 'none';
        self._setStatus('Zeit abgelaufen...', '#f55a3a', '20px');
      });
    },

    // ─── MINI-RUNDE STARTEN ─────────────────────────────────
    _startMini: function() {
      if (this.dead) return;
      this.phase = 'idle';
      this.p1Vote = null;
      this.p2Vote = null;
      this._clearVoteTimer();

      document.getElementById('idr-vote-area').style.display = 'none';
      document.getElementById('idr-vote-status').style.display = 'none';
      document.getElementById('idr-stmt').textContent = '';
      document.getElementById('idr-timer-num').textContent = '5';
      this._setTimerRing(1);
      document.getElementById('idr-timer-wrap').style.display = 'none';

      this._setStatus('Bereit?', '#c0c0d8', '18px');

      if (this.ctx.isHost) {
        var btn = document.getElementById('idr-start-btn');
        if (btn) btn.style.display = 'block';

        if (this.usedIdx.length >= STATEMENTS.length) this.usedIdx = [];
        var idx;
        do { idx = Math.floor(Math.random() * STATEMENTS.length); } while (this.usedIdx.indexOf(idx) !== -1);
        this.usedIdx.push(idx);
        this.currentStmt = STATEMENTS[idx];
      }
      this._drawDots();
    },

    // ─── COUNTDOWN ──────────────────────────────────────────
    _countdown: function() {
      if (this.dead) return;
      var self = this;
      this.phase = 'countdown';

      var btn = document.getElementById('idr-start-btn');
      if (btn) btn.style.display = 'none';
      document.getElementById('idr-timer-wrap').style.display = 'none';
      document.getElementById('idr-vote-area').style.display = 'none';
      document.getElementById('idr-stmt').textContent = '';

      var n = 3;
      var tick = function() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('', '#c0c0d8', '18px');
          if (self.ctx.isHost) self._sendStatement();
        }
      };
      tick();
    },

    // ─── BEHAUPTUNG SENDEN (Host) ────────────────────────────
    _sendStatement: function() {
      if (!this.ctx.isHost || !this.currentStmt) return;
      this.ctx.network.send('idr_sync_stmt', {
        text: this.currentStmt.text,
        answer: this.currentStmt.answer,
        explanation: this.currentStmt.explanation
      });
      this._showStatement(this.currentStmt.text);
      this._startVoting();
    },

    // ─── BEHAUPTUNG ANZEIGEN ────────────────────────────────
    _showStatement: function(text) {
      var el = document.getElementById('idr-stmt');
      if (el) {
        el.style.opacity = '0';
        el.textContent = text;
        el.style.transition = 'opacity .4s';
        setTimeout(function() { el.style.opacity = '1'; }, 30);
      }
      beep(550, 0.1, 'sine', 0.12);
    },

   // ─── ABSTIMMUNG STARTEN ──────────────────────────────────
    _startVoting: function() {
      var self = this;
      this.phase = 'voting';
      this.p1Vote = null;
      this.p2Vote = null;

      // Buttons einblenden und aktivieren
      var voteArea = document.getElementById('idr-vote-area');
      voteArea.style.display = 'flex';
      document.getElementById('idr-btn-true').style.opacity = '1';
      document.getElementById('idr-btn-false').style.opacity = '1';
      document.getElementById('idr-btn-true').disabled = false;
      document.getElementById('idr-btn-false').disabled = false;

      document.getElementById('idr-vote-status').style.display = 'flex';
      this._updateVoteStatus();

      // Timer-Ring
      var timerWrap = document.getElementById('idr-timer-wrap');
      timerWrap.style.display = 'block';
      this._timeLeft = 8;
      document.getElementById('idr-timer-num').textContent = '8';
      document.getElementById('idr-timer-num').style.color = '#f0c030';
      this._setTimerRing(1);

      this._setStatus('ABSTIMMEN!', '#2af0a0', '22px');

      // Tick-Intervall
      this._tickInterval = setInterval(function() {
        if (self.dead || self.phase !== 'voting') { clearInterval(self._tickInterval); return; }
        self._timeLeft--;
        if (self._timeLeft <= 0) self._timeLeft = 0;
        document.getElementById('idr-timer-num').textContent = String(self._timeLeft);
        self._setTimerRing(self._timeLeft / 8);
        if (self._timeLeft <= 2) {
          document.getElementById('idr-timer-num').style.color = '#f55a3a';
        }
        beep(300 + self._timeLeft * 40, 0.04, 'sine', 0.08);
      }, 1000);

      // Timeout nach 8s
      if (this.ctx.isHost) {
        this._voteTimer = setTimeout(function() {
          self._clearVoteTimer();
          self.ctx.network.send('idr_timeout', {});
          self._resolveRound();
        }, 8500);
      }
    },

    // ─── VOTE ABGEBEN ───────────────────────────────────────
    _castVote: function(vote) {
      if (this.phase !== 'voting' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';

      // Schon abgestimmt?
      if (me === 'p1' && this.p1Vote !== null) return;
      if (me === 'p2' && this.p2Vote !== null) return;

      // Visuelles Feedback
      var btnTrue  = document.getElementById('idr-btn-true');
      var btnFalse = document.getElementById('idr-btn-false');
      if (vote) {
        btnTrue.style.boxShadow  = '0 0 24px rgba(42,240,160,.6)';
        btnFalse.style.opacity   = '0.3';
      } else {
        btnFalse.style.boxShadow = '0 0 24px rgba(245,90,58,.6)';
        btnTrue.style.opacity    = '0.3';
      }
      btnTrue.disabled  = true;
      btnFalse.disabled = true;
      beep(vote ? 660 : 330, 0.08, 'square', 0.15);

      if (me === 'p1') {
        this.p1Vote = vote;
        this._updateVoteStatus();
        this._tryResolve();
      } else {
        this.p2Vote = vote;
        this._updateVoteStatus();
        this.ctx.network.send('idr_vote', { player: 'p2', vote: vote });
      }
    },

    // ─── AUFLÖSEN VERSUCHEN (Host) ───────────────────────────
    _tryResolve: function() {
      if (!this.ctx.isHost) return;
      if (this.p1Vote !== null && this.p2Vote !== null) {
        this._clearVoteTimer();
        this._resolveRound();
      }
    },

    // ─── RUNDE AUFLÖSEN ─────────────────────────────────────
    _resolveRound: function() {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result';
      this._clearVoteTimer();

      var correct    = this.currentStmt.answer;
      var expl       = this.currentStmt.explanation;
      var p1Vote     = this.p1Vote;  // null = keine Antwort
      var p2Vote     = this.p2Vote;

      // Punkte berechnen:
      // Richtig → selbst +1 Punkt
      // Falsch oder keine Antwort → Gegner +1 Punkt
      var p1Points = 0, p2Points = 0;
      var p1Right = (p1Vote !== null && p1Vote === correct);
      var p2Right = (p2Vote !== null && p2Vote === correct);

      if (p1Right) p1Points++; else p2Points++;  // richtig = selbst, sonst Gegner
      if (p2Right) p2Points++; else p1Points++;

      this.p1Wins += p1Points;
      this.p2Wins += p2Points;

      if (this.ctx.isHost) {
        this.ctx.network.send('idr_result', {
          p1Vote: p1Vote, p2Vote: p2Vote,
          correct: correct, explanation: expl,
          p1Points: p1Points, p2Points: p2Points,
          p1Wins: this.p1Wins, p2Wins: this.p2Wins
        });
      }

      this._showResult(p1Vote, p2Vote, correct, expl, p1Points, p2Points);
    },

    // ─── ERGEBNIS ANZEIGEN ──────────────────────────────────
    _showResult: function(p1Vote, p2Vote, correct, expl, p1Points, p2Points) {
      var self = this;
      document.getElementById('idr-vote-area').style.display  = 'none';
      document.getElementById('idr-vote-status').style.display = 'none';
      document.getElementById('idr-timer-wrap').style.display  = 'none';

      var ov      = document.getElementById('idr-ov');
      var icoEl   = document.getElementById('idr-ov-ico');
      var ttlEl   = document.getElementById('idr-ov-ttl');
      var explEl  = document.getElementById('idr-ov-expl');
      var votesEl = document.getElementById('idr-ov-votes');
      var scEl    = document.getElementById('idr-ov-sc');

      // Auflösung-Icon
      icoEl.textContent = correct ? '✅' : '❌';

      // Titel
      var correctLabel = correct ? 'RICHTIG!' : 'FALSCH!';
      ttlEl.textContent = 'Die Aussage ist ' + correctLabel;
      ttlEl.style.color = correct ? '#2af0a0' : '#f55a3a';

      // Erklärung
      explEl.textContent = expl || '';

      // Vote-Badges
      function voteLabel(vote, name, color) {
        var icon = vote === null ? '⏳' : (vote ? '✓' : '✗');
        var vColor = vote === null ? '#666' : (vote ? '#2af0a0' : '#f55a3a');
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:4px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:28px;color:' + vColor + ';">' + icon + '</div>' +
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:.15em;color:' + color + ';text-transform:uppercase;">' + esc(name) + '</div>' +
        '</div>';
      }
      votesEl.innerHTML = voteLabel(p1Vote, this.ctx.p1Name, '#3ab4f5') +
        '<div style="font-family:\'Barlow Condensed\',sans-serif;color:#333;font-size:20px;padding-top:4px;">VS</div>' +
        voteLabel(p2Vote, this.ctx.p2Name, '#f55a3a');

      // Punkte-Delta
      var deltaHtml = '';
      if (p1Points > 0) deltaHtml += '<span style="color:#3ab4f5;">+' + p1Points + ' für ' + esc(this.ctx.p1Name) + '</span> ';
      if (p2Points > 0) deltaHtml += '<span style="color:#f55a3a;">+' + p2Points + ' für ' + esc(this.ctx.p2Name) + '</span>';
      scEl.innerHTML = deltaHtml + '<br>' + this.p1Wins + ' : ' + this.p2Wins;

      ov.style.display = 'flex';
      this._drawDots();
      beep(correct ? 880 : 200, 0.2, correct ? 'sine' : 'sawtooth', 0.15);

      var btn = document.getElementById('idr-ov-btn');
      var gameOver = this.p1Wins >= 10 || this.p2Wins >= 10;
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('idr_next', { gameOver: gameOver });
          if (gameOver) self._finish();
          else { self.mini++; self._startMini(); ov.style.display = 'none'; }
        };
      } else {
        btn.style.display = 'none';
      }
    },

    // ─── VOTE-STATUS (wer hat schon abgestimmt) ──────────────
    _updateVoteStatus: function() {
      var p1El = document.getElementById('idr-vote-p1');
      var p2El = document.getElementById('idr-vote-p2');
      if (p1El) p1El.textContent = this.ctx.p1Name + ': ' + (this.p1Vote !== null ? '✓ abgestimmt' : '…wartet');
      if (p2El) p2El.textContent = this.ctx.p2Name + ': ' + (this.p2Vote !== null ? '✓ abgestimmt' : '…wartet');
    },

    // ─── TIMER-RING ─────────────────────────────────────────
    _setTimerRing: function(frac) {
      var ring = document.getElementById('idr-timer-ring');
      if (!ring) return;
      var circ = 213.6;
      ring.style.strokeDashoffset = String(circ * (1 - frac));
      ring.style.stroke = frac > 0.4 ? '#f0c030' : '#f55a3a';
    },

    // ─── DOTS / PUNKTE ──────────────────────────────────────
    _drawDots: function() {
      var el = document.getElementById('idr-dots');
      if (!el) return;
      var bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 2px;border:2px solid ';
      var d1 = '', d2 = '';
      for (var i = 0; i < 10; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML = d1 +
        '<span style="color:#2a2a40;margin:0 10px;font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:.2em;">RUNDE ' + this.mini + '</span>' +
        d2;
    },

    // ─── HILFSFUNKTIONEN ────────────────────────────────────
    _setStatus: function(t, c, s) {
      var el = document.getElementById('idr-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    _clearVoteTimer: function() {
      if (this._voteTimer)    clearTimeout(this._voteTimer);
      if (this._tickInterval) clearInterval(this._tickInterval);
      this._voteTimer    = null;
      this._tickInterval = null;
    },

    _finish: function() {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= 10 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },

    destroy: function() {
      this.dead = true;
      this.timers.forEach(clearTimeout);
      this._clearVoteTimer();
      this.ctx.network.off('idr_start_countdown');
      this.ctx.network.off('idr_sync_stmt');
      this.ctx.network.off('idr_vote');
      this.ctx.network.off('idr_result');
      this.ctx.network.off('idr_next');
      this.ctx.network.off('idr_timeout');
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTRIERUNG
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id: 'ist-das-richtig',
    name: 'Ist das richtig?',
    description: 'Eine Behauptung wird aufgestellt — stimm innerhalb von 5 Sekunden ab: Richtig oder Falsch? Wer falsch liegt, schenkt dem Gegner einen Punkt. Wer zuerst 10 Punkte hat, gewinnt!',
    init: function(container, ctx, onEnd) { this._instance = new IstDasRichtigInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
