(function () {

  // ═══════════════════════════════════════════════════════════
  // FRAGEN-DATENBANK
  // ═══════════════════════════════════════════════════════════
  var QUESTIONS = [
{ options: ['Mario', 'Luigi', 'Wario', 'Sonic'], answer: 'Sonic', explanation: 'Sonic ist von SEGA, die anderen sind Nintendo-Figuren.' },
{ options: ['Hund', 'Katze', 'Adler', 'Hamster'], answer: 'Adler', explanation: 'Adler ist ein Vogel, die anderen sind Säugetiere.' },
{ options: ['Paris', 'London', 'Berlin', 'Sydney'], answer: 'Sydney', explanation: 'Sydney liegt in Australien, die anderen sind europäische Hauptstädte.' },
{ options: ['Gitarre', 'Geige', 'Cello', 'Trompete'], answer: 'Trompete', explanation: 'Trompete ist ein Blasinstrument, die anderen sind Saiteninstrumente.' },
{ options: ['Regen', 'Schnee', 'Hagel', 'Wind'], answer: 'Wind', explanation: 'Wind ist kein Niederschlag, die anderen schon.' },
{ options: ['Apfel', 'Birne', 'Kartoffel', 'Pflaume'], answer: 'Kartoffel', explanation: 'Kartoffel ist ein Gemüse, die anderen sind Früchte.' },
{ options: ['Lachs', 'Forelle', 'Hai', 'Delphin'], answer: 'Delphin', explanation: 'Delphin ist ein Säugetier, die anderen sind Fische.' },
{ options: ['Jupiter', 'Saturn', 'Mars', 'Sonne'], answer: 'Sonne', explanation: 'Die Sonne ist ein Stern, die anderen sind Planeten.' },
{ options: ['Fußball', 'Tennis', 'Golf', 'Schwimmen'], answer: 'Schwimmen', explanation: 'Schwimmen braucht keinen Ball, die anderen schon.' },
{ options: ['Blau', 'Rot', 'Grün', 'Silber'], answer: 'Silber', explanation: 'Silber ist eine Metallfarbe, die anderen sind Grundfarben des Lichts.' },
{ options: ['Amazonas', 'Nil', 'Donau', 'Sahara'], answer: 'Sahara', explanation: 'Sahara ist eine Wüste, die anderen sind Flüsse.' },
{ options: ['Python', 'Java', 'Cobra', 'C++'], answer: 'Cobra', explanation: 'Cobra ist eine Schlange, die anderen sind Programmiersprachen.' },
{ options: ['Banane', 'Erdbeere', 'Gurke', 'Ananas'], answer: 'Gurke', explanation: 'Gurke ist ein Gemüse, die anderen sind Obstsorten.' },
{ options: ['Auto', 'Fahrrad', 'LKW', 'Motorrad'], answer: 'Fahrrad', explanation: 'Das Fahrrad hat keinen Motor, die anderen schon.' },
{ options: ['Januar', 'Montag', 'März', 'Juli'], answer: 'Montag', explanation: 'Montag ist ein Wochentag, die anderen sind Monate.' },
{ options: ['Tisch', 'Stuhl', 'Schrank', 'Bettlaken'], answer: 'Bettlaken', explanation: 'Bettlaken ist Textil, die anderen sind Möbelstücke.' },
{ options: ['Hose', 'T-Shirt', 'Schuh', 'Pullover'], answer: 'Schuh', explanation: 'Schuhe gehören zum Schuhwerk, die anderen zur Kleidung.' },
{ options: ['Brot', 'Kuchen', 'Brötchen', 'Steak'], answer: 'Steak', explanation: 'Steak ist Fleisch, die anderen sind Backwaren.' },
{ options: ['Milch', 'Saft', 'Wasser', 'Pizza'], answer: 'Pizza', explanation: 'Pizza ist ein Essen, die anderen sind Getränke.' },
{ options: ['Zahnarzt', 'Lehrer', 'Hammer', 'Bäcker'], answer: 'Hammer', explanation: 'Hammer ist ein Werkzeug, die anderen sind Berufe.' },
{ options: ['Bleistift', 'Radiergummi', 'Lineal', 'Pfanne'], answer: 'Pfanne', explanation: 'Pfanne gehört in die Küche, die anderen sind Schreibwaren.' },
{ options: ['Eis', 'Feuer', 'Lava', 'Sonne'], answer: 'Eis', explanation: 'Eis ist kalt, die anderen sind heiß.' },
{ options: ['Auge', 'Ohr', 'Nase', 'Ellbogen'], answer: 'Ellbogen', explanation: 'Ellbogen ist kein Sinnesorgan, die anderen schon.' },
{ options: ['Gold', 'Silber', 'Holz', 'Kupfer'], answer: 'Holz', explanation: 'Holz ist ein Naturstoff, aber kein Metall.' },
{ options: ['Berlin', 'München', 'Hamburg', 'Österreich'], answer: 'Österreich', explanation: 'Österreich ist ein Land, die anderen sind deutsche Städte.' },
{ options: ['Kreis', 'Viereck', 'Dreieck', 'Linie'], answer: 'Linie', explanation: 'Eine Linie ist eindimensional, die anderen sind zweidimensionale Formen.' },
{ options: ['Klavier', 'Schlagzeug', 'Gitarre', 'Radio'], answer: 'Radio', explanation: 'Radio ist ein Abspielgerät, die anderen sind Instrumente.' },
{ options: ['Europa', 'Asien', 'Afrika', 'Deutschland'], answer: 'Deutschland', explanation: 'Deutschland ist ein Land, die anderen sind Kontinente.' },
{ options: ['Merkur', 'Venus', 'Erde', 'Mond'], answer: 'Mond', explanation: 'Der Mond ist ein Satellit, die anderen sind Planeten.' },
{ options: ['Einstein', 'Newton', 'Picasso', 'Hawking'], answer: 'Picasso', explanation: 'Picasso war ein Künstler, die anderen waren Wissenschaftler.' },
{ options: ['Romeo', 'Julia', 'Hamlet', 'Sherlock Holmes'], answer: 'Sherlock Holmes', explanation: 'Sherlock Holmes stammt von Arthur Conan Doyle, die anderen von Shakespeare.' },
{ options: ['Dollar', 'Euro', 'Yen', 'Gewicht'], answer: 'Gewicht', explanation: 'Gewicht ist eine Maßeinheit, die anderen sind Währungen.' },
{ options: ['WhatsApp', 'Instagram', 'TikTok', 'Netflix'], answer: 'Netflix', explanation: 'Netflix ist ein Streamingdienst, die anderen sind Social Media Plattformen.' },
{ options: ['Washington D.C.', 'New York', 'Los Angeles', 'Chicago'], answer: 'Washington D.C.', explanation: 'Washington D.C. ist die Hauptstadt, die anderen nicht.' },
{ options: ['Quadrat', 'Rechteck', 'Raute', 'Trapez'], answer: 'Quadrat', explanation: 'Nur beim Quadrat sind alle Seiten und Winkel immer gleich.' },
{ options: ['Superman', 'Batman', 'Spider-Man', 'Iron Man'], answer: 'Superman', explanation: 'Superman ist DC, Spider-Man und Iron Man sind Marvel.' },
{ options: ['Violine', 'Cello', 'Kontrabass', 'Harfe'], answer: 'Harfe', explanation: 'Harfe wird gezupft, die anderen sind Streichinstrumente.' },
{ options: ['Google', 'Bing', 'Yahoo', 'Facebook'], answer: 'Facebook', explanation: 'Facebook ist ein soziales Netzwerk, die anderen sind Suchmaschinen.' },
{ options: ['Kupfer', 'Bronze', 'Eisen', 'Aluminium'], answer: 'Bronze', explanation: 'Bronze ist eine Legierung, die anderen sind reine Elemente.' },
{ options: ['Ozean', 'See', 'Fluss', 'Wüste'], answer: 'Wüste', explanation: 'Die Wüste ist trocken, die anderen bestehen aus Wasser.' },
{ options: ['Harry Potter', 'Frodo Beutlin', 'Katniss Everdeen', 'Mickey Mouse'], answer: 'Mickey Mouse', explanation: 'Mickey Mouse ist eine Comicfigur, die anderen sind Romanhelden.' },
{ options: ['Schach', 'Dame', 'Mühle', 'Monopoly'], answer: 'Monopoly', explanation: 'Monopoly basiert auf Glück (Würfel), die anderen sind reine Strategiespiele.' },
{ options: ['Lunge', 'Herz', 'Leber', 'Haut'], answer: 'Haut', explanation: 'Die Haut ist ein äußeres Organ, die anderen sind innere Organe.' },
{ options: ['Mailand', 'Madrid', 'München', 'Montreal'], answer: 'Montreal', explanation: 'Montreal liegt in Nordamerika, die anderen in Europa.' },
{ options: ['Stickstoff', 'Sauerstoff', 'Helium', 'Eisen'], answer: 'Eisen', explanation: 'Eisen ist bei Raumtemperatur fest, die anderen sind Gase.' },
{ options: ['Aue', 'VfB Stuttgart', 'Mainz 05', 'Schalke 04'], answer: 'Aue', explanation: 'Aue liegt im Osten, die anderen im Westen.' },
{ options: ['Beethoven', 'Mozart', 'Bach', 'Wagner'], answer: 'Bach', explanation: 'Bach gehört zum Barock, die anderen zur Klassik oder Romantik.' },
{ options: ['Island', 'Japan', 'Madagaskar', 'Schweiz'], answer: 'Schweiz', explanation: 'Die Schweiz ist ein Binnenstaat, die anderen sind Inselstaaten.' },
{ options: ['Eukalyptus', 'Eiche', 'Ahorn', 'Tanne'], answer: 'Tanne', explanation: 'Tanne ist ein Nadelbaum, die anderen sind Laubbäume.' },
{ options: ['Athen', 'Rom', 'Prag', 'Lissabon'], answer: 'Prag', explanation: 'Prag liegt nicht am Meer oder einem großen Küsten-Delta.' },
{ options: ['13', '17', '19', '21'], answer: '21', explanation: '21 ist keine Primzahl, die anderen schon.' },
{ options: ['Latein', 'Altgriechisch', 'Sanskrit', 'Spanisch'], answer: 'Spanisch', explanation: 'Spanisch ist eine lebende Sprache, die anderen sind historische Sprachen.' },
{ options: ['Homer', 'Platon', 'Aristoteles', 'Sokrates'], answer: 'Homer', explanation: 'Homer war ein Dichter, die anderen waren Philosophen.' },
{ options: ['Brasilien', 'Indien', 'Russland', 'Australien'], answer: 'Australien', explanation: 'Australien ist ein Staat und zugleich ein ganzer Kontinent.' },
{ options: ['CO2', 'Methan', 'Wasserdampf', 'Argon'], answer: 'Argon', explanation: 'Argon ist kein Treibhausgas, die anderen schon.' },
{ options: ['Linux', 'Windows', 'macOS', 'Android'], answer: 'Android', explanation: 'Android ist ein mobiles Betriebssystem, die anderen sind Desktop-Systeme.' },
{ options: ['Dänemark', 'Schweden', 'Norwegen', 'Finnland'], answer: 'Finnland', explanation: 'Finnland nutzt den Euro, die anderen eigene Kronen-Währungen.' },
{ options: ['Oboe', 'Klarinette', 'Fagott', 'Querflöte'], answer: 'Querflöte', explanation: 'Die Querflöte hat kein Rohrblatt zur Tonerzeugung, die anderen schon.' },
{ options: ['Watt', 'Volt', 'Ampere', 'Ohm'], answer: 'Watt', explanation: 'Watt ist die Einheit für Leistung, die anderen für elektrische Basiseinheiten.' },
{ options: ['Kongo', 'Amazonas', 'Mississippi', 'Totes Meer'], answer: 'Totes Meer', explanation: 'Das Tote Meer ist ein See, die anderen sind Flüsse.' },
{ options: ['HTTP', 'FTP', 'SMTP', 'Ethernet'], answer: 'Ethernet', explanation: 'Ethernet ist ein Protokoll der Schicht 2 (Sicherungsschicht), die anderen gehören zur Schicht 7 (Anwendungsschicht).' },
{ options: ['Heisenberg', 'Schrödinger', 'Planck', 'Tesla'], answer: 'Tesla', explanation: 'Tesla war ein Erfinder/Elektroingenieur, die anderen waren Gründerväter der Quantenphysik.' },
{ options: ['Katalanisch', 'Rumänisch', 'Ungarisch', 'Portugiesisch'], answer: 'Ungarisch', explanation: 'Ungarisch ist eine finno-ugrische Sprache, die anderen sind romanische Sprachen.' },
{ options: ['Kanada', 'USA', 'Brasilien', 'Russland'], answer: 'Russland', explanation: 'Russland liegt nicht auf dem amerikanischen Doppelkontinent, die anderen schon.' },
{ options: ['Oganesson', 'Neon', 'Xenon', 'Fluor'], answer: 'Fluor', explanation: 'Fluor ist ein Halogen, die anderen sind Edelgase.' },
{ options: ['SQL', 'NoSQL', 'MariaDB', 'PostgreSQL'], answer: 'NoSQL', explanation: 'NoSQL ist ein Konzept/Kategorie, die anderen sind konkrete Datenbank-Implementierungen oder Sprachen.' },
{ options: ['Inka', 'Maya', 'Azteken', 'Ägypter'], answer: 'Ägypter', explanation: 'Die Ägypter waren eine Hochkultur in Afrika, die anderen in Amerika.' },
{ options: ['64', '125', '216', '340'], answer: '340', explanation: '340 ist keine Kubikzahl (4³, 5³, 6³), die anderen schon.' },
{ options: ['Stradivari', 'Steinway', 'Guarneri', 'Amati'], answer: 'Steinway', explanation: 'Steinway baut Klaviere, die anderen sind berühmte Geigenbauer.' },
{ options: ['Dopamin', 'Serotonin', 'Adrenalin', 'Insulin'], answer: 'Insulin', explanation: 'Insulin wird in der Bauchspeicheldrüse gebildet, die anderen sind primär Neurotransmitter.' },
{ options: ['Python', 'Java', 'Swift', 'C'], answer: 'C', explanation: 'C unterstützt keine objektorientierte Programmierung nativ, die anderen schon.' },
{ options: ['Marathon', 'Aachen', 'Waterloo', 'Stalingrad'], answer: 'Aachen', explanation: 'Aachen ist kein Name einer historischen Schlacht, sondern ein Krönungsort.' },
{ options: ['Atacama', 'Gobi', 'Kalahari', 'Arktis'], answer: 'Arktis', explanation: 'Die Arktis ist ein gefrorener Ozean, die anderen sind Festlandswüsten.' },
{ options: ['Haitisch', 'Jamaikanisch', 'Bahamaisch', 'Kubanisch'], answer: 'Kubanisch', explanation: 'Auf Kuba ist Spanisch die Amtssprache, auf den anderen Inseln primär Englisch oder Französisch/Kreol.' },
{ options: ['Tetragon', 'Hexagon', 'Pentagon', 'Oktaeder'], answer: 'Oktaeder', explanation: 'Das Oktaeder ist ein dreidimensionaler Körper, die anderen sind zweidimensionale Vielecke.' },
{ options: ['Himbeere', 'Heidelbeere', 'Erdbeere', 'Banane'], answer: 'Banane', explanation: 'Die anderen wachsen an Sträuchern, die Banane an einer Staude.' },
{ options: ['Pferd', 'Esel', 'Zebra', 'Löwe'], answer: 'Löwe', explanation: 'Löwe ist ein Fleischfresser, die anderen sind Pflanzenfresser.' },
{ options: ['Hammer', 'Säge', 'Zange', 'Nagel'], answer: 'Nagel', explanation: 'Nagel ist ein Befestigungsmittel, die anderen sind Werkzeuge.' },
{ options: ['Gelb', 'Blau', 'Rot', 'Schwarz'], answer: 'Schwarz', explanation: 'Schwarz ist eine unbunte Farbe, die anderen sind Buntfarben.' },
{ options: ['Sofa', 'Sessel', 'Hocker', 'Teppich'], answer: 'Teppich', explanation: 'Teppich ist ein Bodenbelag, die anderen sind Sitzmöbel.' },
{ options: ['Messer', 'Gabel', 'Löffel', 'Teller'], answer: 'Teller', explanation: 'Teller gehört zum Geschirr, die anderen zum Besteck.' },
{ options: ['Winter', 'Sommer', 'Herbst', 'Ostern'], answer: 'Ostern', explanation: 'Ostern ist ein Feiertag, die anderen sind Jahreszeiten.' },
{ options: ['Bier', 'Wein', 'Sekt', 'Milch'], answer: 'Milch', explanation: 'Milch enthält keinen Alkohol, die anderen schon.' },
{ options: ['Spanien', 'Italien', 'Griechenland', 'Japan'], answer: 'Japan', explanation: 'Japan liegt in Asien, die anderen in Europa.' },
{ options: ['Adler', 'Falke', 'Eule', 'Pinguin'], answer: 'Pinguin', explanation: 'Pinguine können nicht fliegen, die anderen schon.' },
{ options: ['PC', 'Laptop', 'Tablet', 'Drucker'], answer: 'Drucker', explanation: 'Drucker ist ein Peripheriegerät, die anderen sind Computer.' },
{ options: ['Kopf', 'Bein', 'Arm', 'Hut'], answer: 'Hut', explanation: 'Hut ist ein Kleidungsstück, die anderen sind Körperteile.' },
{ options: ['Schlittschuh', 'Ski', 'Snowboard', 'Badehose'], answer: 'Badehose', explanation: 'Badehose ist für den Sommer, die anderen für den Wintersport.' },
{ options: ['Ketchup', 'Senf', 'Mayo', 'Salz'], answer: 'Salz', explanation: 'Salz ist ein Gewürz, die anderen sind Saucen/Dips.' },
{ options: ['Bus', 'Bahn', 'Flugzeug', 'Fahrrad'], answer: 'Fahrrad', explanation: 'Fahrrad ist ein Individualverkehrsmittel, die anderen sind Massenverkehrsmittel.' },
{ options: ['Tulpe', 'Rose', 'Nelke', 'Eiche'], answer: 'Eiche', explanation: 'Eiche ist ein Baum, die anderen sind Blumen.' },
{ options: ['Sonne', 'Lampe', 'Taschenlampe', 'Spiegel'], answer: 'Spiegel', explanation: 'Spiegel reflektiert nur Licht, die anderen erzeugen es.' },
{ options: ['Hemd', 'Bluse', 'T-Shirt', 'Jeans'], answer: 'Jeans', explanation: 'Jeans ist eine Hose, die anderen trägt man am Oberkörper.' },
{ options: ['Salami', 'Schinken', 'Mortadella', 'Käse'], answer: 'Käse', explanation: 'Käse ist ein Milchprodukt, die anderen sind Fleischprodukte.' },
{ options: ['Amazon', 'Google', 'Apple', 'Mercedes'], answer: 'Mercedes', explanation: 'Mercedes ist ein Automobilhersteller, die anderen sind Tech-Giganten.' },
{ options: ['Donner', 'Blitz', 'Regen', 'Sonnenschein'], answer: 'Sonnenschein', explanation: 'Sonnenschein tritt meist bei gutem Wetter auf, die anderen bei Gewitter/Regen.' },
{ options: ['Buch', 'Zeitung', 'Magazin', 'Fernseher'], answer: 'Fernseher', explanation: 'Fernseher ist ein elektronisches Medium, die anderen sind Printmedien.' },
{ options: ['Schwimmen', 'Tauchen', 'Surfen', 'Skifahren'], answer: 'Skifahren', explanation: 'Skifahren findet auf Schnee statt, die anderen im Wasser.' },
{ options: ['Zitrone', 'Limette', 'Grapefruit', 'Banane'], answer: 'Banane', explanation: 'Banane ist keine Zitrusfrucht, die anderen schon.' },
{ options: ['Schokolade', 'Gummibärchen', 'Lutscher', 'Chips'], answer: 'Chips', explanation: 'Chips sind salzig, die anderen sind süß.' },
{ options: ['Küche', 'Bad', 'Wohnzimmer', 'Garage'], answer: 'Garage', explanation: 'Garage ist meist außerhalb des Wohnbereichs, die anderen sind Wohnräume.' },
{ options: ['Tasse', 'Glas', 'Becher', 'Pfanne'], answer: 'Pfanne', explanation: 'Pfanne dient zum Kochen, die anderen zum Trinken.' },
{ options: ['Affe', 'Mensch', 'Schimpanse', 'Hund'], answer: 'Hund', explanation: 'Hund gehört nicht zu den Primaten, die anderen schon.' },
{ options: ['1', '3', '5', '8'], answer: '8', explanation: '8 ist eine gerade Zahl, die anderen sind ungerade.' },
{ options: ['YouTube', 'Vimeo', 'Dailymotion', 'Spotify'], answer: 'Spotify', explanation: 'Spotify ist primär für Musik/Audio, die anderen für Videos.' },
{ options: ['Arzt', 'Anwalt', 'Ingenieur', 'Patient'], answer: 'Patient', explanation: 'Patient ist eine Rolle/Status, die anderen sind Berufsbezeichnungen.' },
{ options: ['Eiffelturm', 'Kolosseum', 'Big Ben', 'Grand Canyon'], answer: 'Grand Canyon', explanation: 'Grand Canyon ist ein Naturwunder, die anderen sind Bauwerke.' },
{ options: ['Berlin', 'Wien', 'Bern', 'Zürich'], answer: 'Zürich', explanation: 'Zürich ist keine Hauptstadt, die anderen schon.' },
{ options: ['Mozart', 'Beethoven', 'Chopin', 'Goethe'], answer: 'Goethe', explanation: 'Goethe war Schriftsteller, die anderen Komponisten.' },
{ options: ['Kino', 'Theater', 'Oper', 'Bibliothek'], answer: 'Bibliothek', explanation: 'In der Bibliothek herrscht Ruhe, in den anderen gibt es Aufführungen.' },
{ options: ['Fußball', 'Handball', 'Basketball', 'Eishockey'], answer: 'Eishockey', explanation: 'Eishockey wird auf Eis gespielt, die anderen auf festem Boden.' },
{ options: ['Fenster', 'Tür', 'Wand', 'Dach'], answer: 'Dach', explanation: 'Dach deckt das Haus oben ab, die anderen sind vertikale Elemente.' },
{ options: ['Mont Blanc', 'Mount Everest', 'Zugspitze', 'Pazifik'], answer: 'Pazifik', explanation: 'Pazifik ist ein Ozean, die anderen sind Berge.' },
{ options: ['Maus', 'Tastatur', 'Monitor', 'Schreibtisch'], answer: 'Schreibtisch', explanation: 'Schreibtisch ist ein Möbelstück, die anderen sind Computer-Hardware.' },
{ options: ['Honig', 'Zucker', 'Sirup', 'Essig'], answer: 'Essig', explanation: 'Essig ist sauer, die anderen sind süß.' },
{ options: ['Schraubenzieher', 'Bohrmaschine', 'Säge', 'Kleber'], answer: 'Kleber', explanation: 'Kleber ist ein Hilfsstoff, die anderen sind mechanische Werkzeuge.' },
{ options: ['Wald', 'Wiese', 'Park', 'Wüste'], answer: 'Wüste', explanation: 'In der Wüste gibt es kaum Vegetation, in den anderen schon.' },
{ options: ['Uhr', 'Kalender', 'Stoppuhr', 'Waage'], answer: 'Waage', explanation: 'Waage misst das Gewicht, die anderen messen Zeit.' },
{ options: ['Puppe', 'Teddybär', 'Lego', 'Pfanne'], answer: 'Pfanne', explanation: 'Pfanne ist kein Spielzeug, die anderen schon.' },
{ options: ['Arktis', 'Antarktis', 'Grönland', 'Sahara'], answer: 'Sahara', explanation: 'Sahara ist eine Heißwüste, die anderen sind Kältewüsten/Eisregionen.' },
{ options: ['Alge', 'Moos', 'Farn', 'Pilz'], answer: 'Pilz', explanation: 'Pilze gehören biologisch zu einer eigenen Gruppe (Fungi), nicht zu den Pflanzen.' },
{ options: ['Harry Potter', 'Ron Weasley', 'Hermine Granger', 'Gandalf'], answer: 'Gandalf', explanation: 'Gandalf gehört zu Herr der Ringe, die anderen zu Harry Potter.' },
{ options: ['Klavier', 'Orgel', 'Keyboard', 'Posaune'], answer: 'Posaune', explanation: 'Posaune hat keine Tasten, die anderen schon.' },
{ options: ['München', 'Köln', 'Hamburg', 'Mallorca'], answer: 'Mallorca', explanation: 'Mallorca ist eine Insel, die anderen sind Städte in Deutschland.' },
{ options: ['Sonne', 'Lampe', 'Glühwürmchen', 'Mond'], answer: 'Mond', explanation: 'Der Mond reflektiert nur Licht, die anderen sind Lichtquellen.' },
{ options: ['Löffel', 'Gabel', 'Messer', 'Topf'], answer: 'Topf', explanation: 'Topf ist Kochgeschirr, die anderen sind Besteck.' },
	
  ];

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
      o.frequency.value = freq;
      o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(ac.currentTime); o.stop(ac.currentTime + dur + 0.01);
    } catch(e) {}
  }

  function DerAusreisserInstance(container, ctx, onEnd) {
    this.container      = container;
    this.ctx            = ctx;
    this.onEnd          = onEnd;
    this.dead           = false;
    this.mini           = 1;
    this.p1Wins         = 0;
    this.p2Wins         = 0;
    this.timers         = [];
    this._roundTimer    = null;
    this._tickInterval  = null;
    this.phase          = 'idle';
    this.currentQ       = null;
    this._deck          = [];
    this.p1Answer       = null;
    this.p2Answer       = null;
    this._timeLeft      = 120;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  DerAusreisserInstance.prototype = {
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'da-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:center;',
        'position:relative;overflow:hidden;padding:16px 20px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>',
        '<div id="da-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:14px;min-height:28px;"></div>',
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:10px;">Welcher Begriff passt nicht dazu?</div>',
        '<div id="da-timer" style="font-size:22px;color:#f0c030;letter-spacing:.1em;margin-bottom:10px;font-family:\'Barlow Condensed\',sans-serif;display:none;">2:00</div>',
        '<div id="da-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:30px;margin-bottom:12px;text-align:center;transition:color .2s;"></div>',
        '<button id="da-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-bottom:18px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">RUNDE STARTEN</button>',
        '<div id="da-options" style="display:none;flex-direction:column;gap:10px;width:100%;max-width:420px;margin-bottom:14px;"></div>',
        '<div id="da-wait" style="display:none;flex-direction:column;align-items:center;gap:4px;margin-bottom:10px;">',
          '<div id="da-wait-p1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#3ab4f5;text-transform:uppercase;"></div>',
          '<div id="da-wait-p2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#f55a3a;text-transform:uppercase;"></div>',
        '</div>',
        '<div id="da-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:28px;">',
          '<div id="da-ov-ico" style="font-size:52px;"></div>',
          '<div id="da-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(26px,7vw,50px);color:#f0c030;letter-spacing:.05em;"></div>',
          '<div id="da-ov-terms" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;max-width:400px;margin:4px 0;"></div>',
          '<div id="da-ov-expl" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#a0a0bc;max-width:380px;line-height:1.5;"></div>',
          '<div id="da-ov-answers" style="display:flex;gap:20px;margin:4px 0;"></div>',
          '<div id="da-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
          '<button id="da-ov-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">WEITER →</button>',
        '</div>',
      ].join('');
      this.container.appendChild(root);
      this._drawDots();
      if (this.ctx.isHost) {
        document.getElementById('da-start-btn').addEventListener('click', function() {
          this.style.display = 'none';
          self.ctx.network.send('da_start_countdown', {});
          self._countdown();
        });
      }
    },

    _setupNet: function() {
      var self = this;
      this.ctx.network.on('da_start_countdown', function() { if (!self.ctx.isHost) self._countdown(); });
      this.ctx.network.on('da_sync_question', function(msg) {
        if (self.ctx.isHost) return;
        self.currentQ = { options: msg.options, answer: msg.answer, explanation: msg.explanation };
        self._renderOptions(msg.options);
        self._startAnswering();
      });
      this.ctx.network.on('da_answer', function(msg) {
        if (!self.ctx.isHost) return;
        if (msg.player === 'p2') { self.p2Answer = msg.answer; self._updateWaitStatus(); self._tryResolve(); }
      });
      this.ctx.network.on('da_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._showResult(msg.p1Answer, msg.p2Answer, msg.correct, msg.explanation, msg.options, msg.p1Points, msg.p2Points);
      });
      this.ctx.network.on('da_timeout', function() {
        if (self.ctx.isHost) return;
        self._clearTimers();
        self.phase = 'result';
        document.getElementById('da-options').style.display = 'none';
        document.getElementById('da-wait').style.display = 'none';
        document.getElementById('da-timer').style.display = 'none';
        self._setStatus('Zeit abgelaufen...', '#f55a3a', '20px');
      });
      this.ctx.network.on('da_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._finish();
        else { self.mini++; self._startMini(); document.getElementById('da-ov').style.display = 'none'; }
      });
    },

    _startMini: function() {
      if (this.dead) return;
      this.phase = 'idle'; this.p1Answer = null; this.p2Answer = null;
      this._clearTimers();
      document.getElementById('da-options').style.display = 'none';
      document.getElementById('da-wait').style.display = 'none';
      document.getElementById('da-timer').style.display = 'none';
      this._setStatus('Bereit?', '#c0c0d8', '18px');
      if (this.ctx.isHost) {
        var btn = document.getElementById('da-start-btn');
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
      document.getElementById('da-start-btn').style.display = 'none';
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
      var shuffled = this.currentQ.options.slice();
      for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
      }
      this.ctx.network.send('da_sync_question', { options: shuffled, answer: this.currentQ.answer, explanation: this.currentQ.explanation });
      this.currentQ = { options: shuffled, answer: this.currentQ.answer, explanation: this.currentQ.explanation };
      this._renderOptions(shuffled);
      this._startAnswering();
    },

    _renderOptions: function(options) {
      var self = this, container = document.getElementById('da-options');
      container.innerHTML = '';
      var grid = document.createElement('div');
      grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;';
      var colors = ['#3ab4f5', '#f0c030', '#2af0a0', '#f55a3a'], labels = ['A', 'B', 'C', 'D'];
      options.forEach(function(opt, idx) {
        var btn = document.createElement('button');
        btn.style.cssText = 'background:rgba(255,255,255,.03);border:2px solid ' + colors[idx] + ';color:' + colors[idx] + ';font-family:"Bebas Neue",sans-serif;font-size:clamp(18px,3.5vw,26px);letter-spacing:.08em;padding:14px 10px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));transition:background .12s,box-shadow .12s,opacity .2s;display:flex;align-items:center;gap:8px;justify-content:center;';
        btn.id = 'da-opt-' + idx;
        btn.innerHTML = '<span style="font-size:.65em;opacity:.5;">' + labels[idx] + '</span>' + esc(opt);
        btn.onclick = function() { self._selectAnswer(opt, idx); };
        grid.appendChild(btn);
      });
      container.appendChild(grid);
    },

    _startAnswering: function() {
      var self = this;
      this.phase = 'answering';
      document.getElementById('da-options').style.display = 'block';
      document.getElementById('da-wait').style.display = 'flex';
      this._updateWaitStatus();
      this._timeLeft = 120;
      var timerEl = document.getElementById('da-timer');
      timerEl.style.display = 'block'; timerEl.style.color = '#f0c030';
      this._tickInterval = setInterval(function() {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var m = Math.floor(self._timeLeft / 60), s = self._timeLeft % 60;
        timerEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
        if (self._timeLeft <= 10) timerEl.style.color = '#f55a3a';
        if (self._timeLeft <= 0) self._clearTimers();
      }, 1000);
      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function() { self.ctx.network.send('da_timeout', {}); self._resolveRound(); }, 120000);
      }
      this._setStatus('WER PASST NICHT?', '#f0c030', '18px');
      beep(550, 0.1, 'sine', 0.12);
    },

    _selectAnswer: function(answer, btnIdx) {
      if (this.phase !== 'answering' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      var colors = ['#3ab4f5', '#f0c030', '#2af0a0', '#f55a3a'];
      for (var i = 0; i < 4; i++) {
        var b = document.getElementById('da-opt-' + i);
        if (b) { b.disabled = true; if (i === btnIdx) { b.style.background = 'rgba(255,255,255,.12)'; b.style.boxShadow = '0 0 20px ' + colors[i] + '44'; } else b.style.opacity = '0.3'; }
      }
      beep(660, 0.07, 'sine', 0.15);
      if (me === 'p1') { this.p1Answer = answer; this._updateWaitStatus(); this._tryResolve(); }
      else { this.p2Answer = answer; this._updateWaitStatus(); this.ctx.network.send('da_answer', { player: 'p2', answer: answer }); }
    },

    _tryResolve: function() { if (this.ctx.isHost && this.p1Answer && this.p2Answer) this._resolveRound(); },

    _resolveRound: function() {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result'; this._clearTimers();
      var correct = this.currentQ.answer, p1Points = (this.p1Answer === correct ? 1 : 0), p2Points = (this.p2Answer === correct ? 1 : 0);
      this.p1Wins += p1Points; this.p2Wins += p2Points;
      if (this.ctx.isHost) this.ctx.network.send('da_result', { p1Answer: this.p1Answer, p2Answer: this.p2Answer, correct: correct, explanation: this.currentQ.explanation, options: this.currentQ.options, p1Points: p1Points, p2Points: p2Points, p1Wins: this.p1Wins, p2Wins: this.p2Wins });
      this._showResult(this.p1Answer, this.p2Answer, correct, this.currentQ.explanation, this.currentQ.options, p1Points, p2Points);
    },

    _showResult: function(p1A, p2A, correct, expl, options, p1P, p2P) {
      var self = this;
      document.getElementById('da-options').style.display = 'none';
      document.getElementById('da-wait').style.display = 'none';
      document.getElementById('da-timer').style.display = 'none';
      var ov = document.getElementById('da-ov');
      document.getElementById('da-ov-ico').textContent = '🔍';
      document.getElementById('da-ov-ttl').textContent = 'Der Ausreißer: ' + esc(correct);
      document.getElementById('da-ov-terms').innerHTML = (options || []).map(function(opt) {
        var isC = opt === correct;
        return '<div style="padding:8px 14px;border:2px solid ' + (isC ? '#f0c030' : 'rgba(255,255,255,.1)') + ';background:' + (isC ? 'rgba(240,192,48,.15)' : 'rgba(255,255,255,.04)') + ';font-family:\'Bebas Neue\',sans-serif;font-size:18px;color:' + (isC ? '#f0c030' : '#aaaacc') + ';clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px));">' + esc(opt) + (isC ? ' ✗' : '') + '</div>';
      }).join('');
      document.getElementById('da-ov-expl').textContent = expl || '';
      function badge(ans, name, col, pts) {
        var isR = ans === correct, vCol = ans === null ? '#555' : (isR ? '#2af0a0' : '#f55a3a');
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;"><div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:'+col+';">' + esc(name) + '</div><div style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;color:'+vCol+';">' + (ans === null ? '⏳' : (isR?'✓':'✗')) + ' ' + esc(ans || '—') + '</div>' + (pts>0?'<div style="font-size:12px;color:'+vCol+';">+' + pts + ' Punkt</div>':'') + '</div>';
      }
      document.getElementById('da-ov-answers').innerHTML = badge(p1A, this.ctx.p1Name, '#3ab4f5', p1P) + '<div style="color:#c0c0d8;padding-top:8px;">VS</div>' + badge(p2A, this.ctx.p2Name, '#f55a3a', p2P);
      document.getElementById('da-ov-sc').innerHTML = this.p1Wins + ' : ' + this.p2Wins + ' &nbsp;·&nbsp; Ziel: 7 Punkte';
      ov.style.display = 'flex'; this._drawDots();
      var gameOver = (this.p1Wins >= 7 || this.p2Wins >= 7) && this.p1Wins !== this.p2Wins, btn = document.getElementById('da-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE';
      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() { self.ctx.network.send('da_next', { gameOver: gameOver }); if (gameOver) self._finish(); else { self.mini++; self._startMini(); ov.style.display = 'none'; } };
      } else btn.style.display = 'none';
    },

    _updateWaitStatus: function() {
      document.getElementById('da-wait-p1').textContent = this.ctx.p1Name + ': ' + (this.p1Answer ? '✓ gewählt' : '…überlegt');
      document.getElementById('da-wait-p2').textContent = this.ctx.p2Name + ': ' + (this.p2Answer ? '✓ gewählt' : '…überlegt');
    },

    _drawDots: function() {
      var el = document.getElementById('da-dots'); if (!el) return;
      var d1 = '', d2 = '', bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 2px;border:2px solid ';
      for (var i = 0; i < 7; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML = d1 + '<span style="color:#c0c0d8;margin:0 10px;font-size:12px;">RUNDE ' + this.mini + '</span>' + d2;
    },

    _setStatus: function(t, c, s) { var el = document.getElementById('da-status'); if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; } },
    _clearTimers: function() { clearTimeout(this._roundTimer); clearInterval(this._tickInterval); },
    _finish: function() { this.dead = true; this.onEnd({ winner: this.p1Wins > this.p2Wins ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins }); },
    destroy: function() {
      this.dead = true; this.timers.forEach(clearTimeout); this._clearTimers();
      this.ctx.network.off('da_start_countdown'); this.ctx.network.off('da_sync_question'); this.ctx.network.off('da_answer'); this.ctx.network.off('da_result'); this.ctx.network.off('da_timeout'); this.ctx.network.off('da_next');
    }
  };

  GamePool.register({
    id: 'der-ausreisser',
    name: 'Der Ausreißer',
    description: 'Vier Begriffe, drei gehören zusammen — welcher passt nicht? Beide Spieler antworten gleichzeitig. Wer zuerst 7 richtige hat, gewinnt!',
    init: function(container, ctx, onEnd) { this._instance = new DerAusreisserInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });
})();