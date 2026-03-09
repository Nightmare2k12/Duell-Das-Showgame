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
// ═══════════════════════════════════════════════════════════
  // ERWEITERUNG: SCHWERE FRAGEN (50 STÜCK)
  // ═══════════════════════════════════════════════════════════
  { options: ['Entropie', 'Energie', 'Impuls', 'Ladung'], answer: 'Entropie', explanation: 'Entropie ist keine Erhaltungsgröße; sie nimmt in geschlossenen Systemen gemäß dem 2. Hauptsatz der Thermodynamik zu.' },
  { options: ['Finnisch', 'Ungarisch', 'Estnisch', 'Schwedisch'], answer: 'Schwedisch', explanation: 'Schwedisch ist eine indogermanische Sprache, die anderen sind finno-ugrische Sprachen.' },
  { options: ['Vatikanstadt', 'Monaco', 'Singapur', 'San Marino'], answer: 'Singapur', explanation: 'Singapur liegt nicht in Europa, die anderen schon.' },
  { options: ['Radon', 'Fluor', 'Chlor', 'Astat'], answer: 'Radon', explanation: 'Radon ist ein Edelgas, die anderen sind Halogene.' },
  { options: ['Bolivien', 'Kasachstan', 'Mongolei', 'Vietnam'], answer: 'Vietnam', explanation: 'Vietnam hat eine Meeresküste, die anderen sind Binnenstaaten.' },
  { options: ['Die Räuber', 'Egmont', 'Torquato Tasso', 'Faust'], answer: 'Die Räuber', explanation: 'Die Räuber stammt von Friedrich Schiller, die anderen von Goethe.' },
  { options: ['Titan', 'Europa', 'Ganymed', 'Kallisto'], answer: 'Titan', explanation: 'Titan umkreist den Saturn, die anderen sind Jupitermonde (Galileische Monde).' },
  { options: ['Elektron', 'Neutrino', 'Tauon', 'Quark'], answer: 'Quark', explanation: 'Quarks unterliegen der starken Wechselwirkung, Leptonen (die anderen drei) nicht.' },
  { options: ['6', '28', '42', '496'], answer: '42', explanation: '42 ist keine vollkommene Zahl (Summe ihrer Teiler), die anderen schon.' },
  { options: ['Tosca', 'Aida', 'Nabucco', 'Rigoletto'], answer: 'Tosca', explanation: 'Tosca ist von Puccini, die anderen von Verdi.' },
  { options: ['Stilecht', 'Authentisch', 'Pragmatisch', 'Veritabel'], answer: 'Pragmatisch', explanation: 'Pragmatisch bedeutet sachbezogen, die anderen bedeuten echt/wahrhaftig.' },
  { options: ['Kupfer', 'Zinn', 'Zink', 'Messing'], answer: 'Messing', explanation: 'Messing ist eine Legierung (Kupfer+Zink), die anderen sind reine chemische Elemente.' },
  { options: ['Athen', 'Sparta', 'Theben', 'Karthago'], answer: 'Karthago', explanation: 'Karthago lag in Nordafrika (heute Tunesien), die anderen waren griechische Stadtstaaten.' },
  { options: ['Brahms', 'Schubert', 'Mendelssohn', 'Vivaldi'], answer: 'Vivaldi', explanation: 'Vivaldi gehört zum Barock, die anderen zur Romantik.' },
  { options: ['Insel', 'Atoll', 'Archipel', 'Isthmus'], answer: 'Isthmus', explanation: 'Ein Isthmus ist eine Landenge, die anderen beschreiben Inselformen oder -gruppen.' },
  { options: ['Mitose', 'Meiose', 'Zytokinese', 'Osmose'], answer: 'Osmose', explanation: 'Osmose ist ein physikalischer Prozess, die anderen sind Phasen der Zellteilung.' },
  { options: ['Adagio', 'Andante', 'Allegro', 'Arpeggio'], answer: 'Arpeggio', explanation: 'Arpeggio ist eine Spielweise (gebrochener Akkord), die anderen sind Tempobezeichnungen.' },
  { options: ['Hebräisch', 'Arabisch', 'Amharisch', 'Persisch'], answer: 'Persisch', explanation: 'Persisch ist eine indogermanische Sprache, die anderen sind semitische Sprachen.' },
  { options: ['Rubin', 'Saphir', 'Smaragd', 'Diamant'], answer: 'Diamant', explanation: 'Der Diamant besteht aus Kohlenstoff, die anderen sind Korunde oder Berylle (Oxide/Silikate).' },
  { options: ['Hume', 'Kant', 'Locke', 'Berkeley'], answer: 'Kant', explanation: 'Kant war Vertreter des Idealismus, die anderen waren britische Empiristen.' },
  { options: ['Kuba', 'Jamaika', 'Haiti', 'Island'], answer: 'Island', explanation: 'Island liegt im Nordatlantik, die anderen sind Inseln der Großen Antillen in der Karibik.' },
  { options: ['Oboe', 'Fagott', 'Englischhorn', 'Blockflöte'], answer: 'Blockflöte', explanation: 'Die Blockflöte ist ein Kernspaltinstrument, die anderen sind Doppelrohrblattinstrumente.' },
  { options: ['121', '144', '169', '191'], answer: '191', explanation: '191 ist eine Primzahl, die anderen sind Quadratzahlen (11, 12, 13).' },
  { options: ['Aorta', 'Vena Cava', 'Kapillare', 'Nephron'], answer: 'Nephron', explanation: 'Das Nephron ist die Funktionseinheit der Niere, die anderen sind Blutgefäße.' },
  { options: ['Dadaismus', 'Fauvismus', 'Kubismus', 'Feudalismus'], answer: 'Feudalismus', explanation: 'Feudalismus ist eine Gesellschaftsordnung, die anderen sind Kunstströmungen.' },
  { options: ['Uranus', 'Neptun', 'Saturn', 'Mars'], answer: 'Mars', explanation: 'Mars ist ein Gesteinsplanet, die anderen sind Gas- oder Eisriesen.' },
  { options: ['Magma', 'Bimsstein', 'Basalt', 'Granit'], answer: 'Magma', explanation: 'Magma ist flüssig, die anderen sind bereits erstarrte Gesteine (Erguß- oder Tiefengesteine).' },
  { options: ['Celsius', 'Kelvin', 'Fahrenheit', 'Kalorie'], answer: 'Kalorie', explanation: 'Kalorie misst Energie, die anderen messen Temperatur.' },
  { options: ['Sumerer', 'Phönizier', 'Hethiter', 'Inka'], answer: 'Inka', explanation: 'Die Inka waren in Südamerika ansässig, die anderen im antiken Nahen Osten.' },
  { options: ['Akkusativ', 'Genitiv', 'Dativ', 'Passiv'], answer: 'Passiv', explanation: 'Passiv ist ein Genus Verbi (Handlungsart), die anderen sind Kasus (Fälle).' },
  { options: ['K2', 'Lhotse', 'Makalu', 'Kilimandscharo'], answer: 'Kilimandscharo', explanation: 'Der Kilimandscharo ist kein Achttausender, die anderen schon.' },
  { options: ['Proton', 'Neutron', 'Elektron', 'Gluon'], answer: 'Gluon', explanation: 'Das Gluon ist ein Austauschteilchen (Boson), die anderen sind Fermionen.' },
  { options: ['Lissabon', 'Dublin', 'Reykjavík', 'Madrid'], answer: 'Madrid', explanation: 'Madrid liegt im Landesinneren, die anderen sind Küstenstädte/Hafenstädte.' },
  { options: ['Picasso', 'Braque', 'Gris', 'Monet'], answer: 'Monet', explanation: 'Monet war Impressionist, die anderen waren Wegbereiter des Kubismus.' },
  { options: ['Indien', 'Pakistan', 'Bangladesch', 'Thailand'], answer: 'Thailand', explanation: 'Thailand war nie eine britische Kolonie, die anderen gehörten zu Britisch-Indien.' },
  { options: ['Xenon', 'Neon', 'Argon', 'Stickstoff'], answer: 'Stickstoff', explanation: 'Stickstoff ist kein Edelgas, die anderen schon.' },
  { options: ['D-Mark', 'Lira', 'Drachme', 'Yen'], answer: 'Yen', explanation: 'Der Yen wurde nicht durch den Euro ersetzt, die anderen schon.' },
  { options: ['Ohr', 'Nase', 'Zunge', 'Kehlkopf'], answer: 'Kehlkopf', explanation: 'Der Kehlkopf dient der Stimmbildung, die anderen beherbergen die klassischen fünf Sinne.' },
  { options: ['Sokrates', 'Platon', 'Aristoteles', 'Seneca'], answer: 'Seneca', explanation: 'Seneca war ein römischer Stoiker, die anderen waren griechische Philosophen.' },
  { options: ['Ecuador', 'Kolumbien', 'Brasilien', 'Argentinien'], answer: 'Argentinien', explanation: 'Argentinien wird nicht vom Äquator geschnitten, die anderen drei schon.' },
  { options: ['Zürich', 'Genf', 'Basel', 'Bern'], answer: 'Bern', explanation: 'Bern ist die Bundesstadt (Hauptstadt de facto), die anderen sind keine Hauptstädte.' },
  { options: ['Cello', 'Bratsche', 'Kontrabass', 'Laute'], answer: 'Laute', explanation: 'Die Laute gehört nicht zur modernen Streichfamilie, die anderen schon.' },
  { options: ['Haiku', 'Sonett', 'Ballade', 'Limerick'], answer: 'Ballade', explanation: 'Eine Ballade hat keine feste Strophen- oder Zeilenanzahl-Vorgabe wie die anderen (festen Gedichtformen).' },
  { options: ['Java', 'Sumatra', 'Borneo', 'Luzon'], answer: 'Luzon', explanation: 'Luzon gehört zu den Philippinen, die anderen liegen primär in Indonesien.' },
  { options: ['Ares', 'Mars', 'Jupiter', 'Zeus'], answer: 'Ares', explanation: 'Ares ist ein griechischer Gott, die anderen sind römische Götternamen (Zeus/Jupiter sind Entsprechungen).' },
  { options: ['Kreide', 'Jura', 'Trias', 'Kambrium'], answer: 'Kambrium', explanation: 'Kambrium gehört zum Paläozoikum, die anderen drei zum Mesozoikum (Erdmittelalter).' },
  { options: ['Kairo', 'Tunis', 'Algier', 'Nairobi'], answer: 'Nairobi', explanation: 'Nairobi liegt nicht am Mittelmeer, die anderen schon.' },
  { options: ['Trompete', 'Posaune', 'Waldhorn', 'Saxophon'], answer: 'Saxophon', explanation: 'Das Saxophon ist ein Holzblasinstrument (wegen des Rohrblatts), die anderen sind Blechblasinstrumente.' },
  { options: ['DNA', 'RNA', 'Protein', 'Lipid'], answer: 'Lipid', explanation: 'Lipide sind keine Makromoleküle aus Kettenbausteinen (Polymere) im selben Sinne wie die anderen drei.' },
  { options: ['Odyssee', 'Ilias', 'Aeneis', 'Metamorphosen'], answer: 'Metamorphosen', explanation: 'Die Metamorphosen sind von Ovid, die anderen sind Heldenepen (Homer/Vergil).' },
  // ═══════════════════════════════════════════════════════════
  // ERWEITERUNG: MITTELSCHWERE FRAGEN (50 STÜCK)
  // ═══════════════════════════════════════════════════════════
  { options: ['Seoul', 'Tokio', 'Peking', 'Bangkok'], answer: 'Bangkok', explanation: 'Bangkok liegt in Südostasien, die anderen in Ostasien.' },
  { options: ['Homer', 'Marge', 'Bart', 'Ned'], answer: 'Ned', explanation: 'Ned Flanders gehört nicht zur Kernfamilie Simpson.' },
  { options: ['Salami', 'Schinken', 'Pastrami', 'Tofu'], answer: 'Tofu', explanation: 'Tofu ist pflanzlich, die anderen sind Fleischprodukte.' },
  { options: ['Pfund', 'Unze', 'Gramm', 'Meile'], answer: 'Meile', explanation: 'Meile ist ein Längenmaß, die anderen sind Gewichtseinheiten.' },
  { options: ['Dachs', 'Fuchs', 'Reh', 'Wolf'], answer: 'Reh', explanation: 'Das Reh ist ein Pflanzenfresser, die anderen sind Raubtiere (Allesfresser).' },
  { options: ['Tsunami', 'Tornado', 'Zyklon', 'Taifun'], answer: 'Tsunami', explanation: 'Ein Tsunami wird durch Erdbeben ausgelöst, die anderen sind Wirbelstürme.' },
  { options: ['Island', 'Irland', 'Malta', 'Zypern'], answer: 'Island', explanation: 'Island gehört nicht zur EU, die anderen drei schon.' },
  { options: ['Sherlock Holmes', 'James Bond', 'Hercule Poirot', 'Miss Marple'], answer: 'James Bond', explanation: 'James Bond ist ein Geheimagent, die anderen sind Detektive.' },
  { options: ['Amazonas', 'Nil', 'Mississippi', 'Baikalsee'], answer: 'Baikalsee', explanation: 'Der Baikalsee ist ein See, die anderen sind Flüsse.' },
  { options: ['Platin', 'Gold', 'Silber', 'Eisen'], answer: 'Eisen', explanation: 'Eisen ist kein Edelmetall, die anderen schon.' },
  { options: ['Batman', 'Iron Man', 'Black Widow', 'Thor'], answer: 'Batman', explanation: 'Batman gehört zu DC Comics, die anderen zu Marvel.' },
  { options: ['Indien', 'China', 'Kanada', 'Indonesien'], answer: 'Kanada', explanation: 'Kanada liegt nicht in Asien, die anderen schon.' },
  { options: ['Schlagzeug', 'Becken', 'Gong', 'Klavier'], answer: 'Klavier', explanation: 'Das Klavier ist ein Tasteninstrument, die anderen sind Perkussionsinstrumente.' },
  { options: ['Sauerstoff', 'Stickstoff', 'Wasserstoff', 'Kohlenmonoxid'], answer: 'Kohlenmonoxid', explanation: 'Kohlenmonoxid ist eine chemische Verbindung, die anderen sind reine Elemente.' },
  { options: ['Helsinki', 'Oslo', 'Stockholm', 'Kopenhagen'], answer: 'Helsinki', explanation: 'Helsinki liegt nicht auf der skandinavischen Halbinsel.' },
  { options: ['Bibel', 'Koran', 'Tora', 'Grimms Märchen'], answer: 'Grimms Märchen', explanation: 'Grimms Märchen ist kein religiöses heiliges Buch.' },
  { options: ['Vanille', 'Zimt', 'Pfeffer', 'Salz'], answer: 'Salz', explanation: 'Salz ist ein Mineral, die anderen sind pflanzliche Gewürze.' },
  { options: ['Affe', 'Elefant', 'Wal', 'Krokodil'], answer: 'Krokodil', explanation: 'Das Krokodil ist ein Reptil, die anderen sind Säugetiere.' },
  { options: ['Venedig', 'Amsterdam', 'St. Petersburg', 'Madrid'], answer: 'Madrid', explanation: 'Madrid hat keine berühmten Kanäle, die anderen werden oft "Venedig des..." genannt.' },
  { options: ['Spotify', 'Deezer', 'Tidal', 'Kindle'], answer: 'Kindle', explanation: 'Kindle ist ein E-Book-Reader/Dienst, die anderen sind Musik-Streaming-Dienste.' },
  { options: ['Karotte', 'Zwiebel', 'Radieschen', 'Tomate'], answer: 'Tomate', explanation: 'Tomaten wachsen oberirdisch, die anderen sind Wurzel- oder Knollengemüse.' },
  { options: ['Yen', 'Won', 'Baht', 'Peso'], answer: 'Peso', explanation: 'Der Peso wird in Lateinamerika/Philippinen genutzt, die anderen in Ost-/Südostasien.' },
  { options: ['Kupfer', 'Bronze', 'Messing', 'Stahl'], answer: 'Kupfer', explanation: 'Kupfer ist ein reines Metall, die anderen sind Legierungen.' },
  { options: ['Luke Skywalker', 'Darth Vader', 'Spock', 'Yoda'], answer: 'Spock', explanation: 'Spock gehört zu Star Trek, die anderen zu Star Wars.' },
  { options: ['Mars', 'Venus', 'Merkur', 'Neptun'], answer: 'Neptun', explanation: 'Neptun ist ein Gasriese, die anderen sind Gesteinsplaneten.' },
  { options: ['Eiffelturm', 'Louvre', 'Notre-Dame', 'Brandenburger Tor'], answer: 'Brandenburger Tor', explanation: 'Das Brandenburger Tor steht in Berlin, die anderen in Paris.' },
  { options: ['Känguru', 'Koala', 'Wombat', 'Waschbär'], answer: 'Waschbär', explanation: 'Waschbären sind keine Beuteltiere, die anderen schon.' },
  { options: ['Oboe', 'Klarinette', 'Fagott', 'Blockflöte'], answer: 'Klarinette', explanation: 'Die Klarinette hat ein einfaches Rohrblatt, Oboe und Fagott ein doppeltes (Blockflöte keins).' },
  { options: ['München', 'Stuttgart', 'Nürnberg', 'Dresden'], answer: 'Dresden', explanation: 'Dresden liegt im Osten (Sachsen), die anderen in Süddeutschland.' },
  { options: ['Twitter', 'LinkedIn', 'Pinterest', 'Photoshop'], answer: 'Photoshop', explanation: 'Photoshop ist eine Software, die anderen sind soziale Netzwerke.' },
  { options: ['Schweiz', 'Österreich', 'Tschechien', 'Italien'], answer: 'Italien', explanation: 'Italien hat einen Meereszugang, die anderen sind Binnenstaaten.' },
  { options: ['Cevapcici', 'Paella', 'Tapas', 'Gazpacho'], answer: 'Cevapcici', explanation: 'Cevapcici stammt vom Balkan, die anderen sind spanische Gerichte.' },
  { options: ['Picasso', 'Dalí', 'Miró', 'Beethoven'], answer: 'Beethoven', explanation: 'Beethoven war Komponist, die anderen waren Maler.' },
  { options: ['H²O', 'CO²', 'NaCl', 'Au'], answer: 'Au', explanation: 'Au (Gold) ist ein Element, die anderen sind chemische Verbindungen.' },
  { options: ['Titanic', 'Avatar', 'Inception', 'Der weiße Hai'], answer: 'Inception', explanation: 'Inception ist von Christopher Nolan, die anderen (Hai indirekt/Produktion) eher mit Spielberg/Cameron assoziiert.' },
  { options: ['Schach', 'Backgammon', 'Mensch ärgere Dich nicht', 'Go'], answer: 'Mensch ärgere Dich nicht', explanation: 'Basiert fast nur auf Glück, die anderen sind Strategiespiele.' },
  { options: ['Euro', 'Dollar', 'Franken', 'Karat'], answer: 'Karat', explanation: 'Karat ist eine Einheit für Gold/Edelsteine, die anderen sind Währungen.' },
  { options: ['Schienbein', 'Speiche', 'Elle', 'Bizeps'], answer: 'Bizeps', explanation: 'Der Bizeps ist ein Muskel, die anderen sind Knochen.' },
  { options: ['Wien', 'Salzburg', 'Innsbruck', 'Graz'], answer: 'Wien', explanation: 'Wien ist ein eigenes Bundesland, die anderen sind Hauptstädte anderer Bundesländer.' },
  { options: ['Fichte', 'Kiefer', 'Lärche', 'Buche'], answer: 'Buche', explanation: 'Die Buche ist ein Laubbaum, die anderen sind Nadelbäume.' },
  { options: ['E-Mail', 'Brief', 'Fax', 'Radio'], answer: 'Radio', explanation: 'Radio ist ein Massenmedium, die anderen sind Individualkommunikation.' },
  { options: ['Kilogramm', 'Meter', 'Sekunde', 'Liter'], answer: 'Liter', explanation: 'Liter gehört nicht zu den sieben SI-Basiseinheiten (Volumen ist abgeleitet).' },
  { options: ['Mexiko', 'Brasilien', 'Argentinien', 'Chile'], answer: 'Mexiko', explanation: 'Mexiko liegt in Nordamerika, die anderen in Südamerika.' },
  { options: ['Jupiter', 'Saturn', 'Uranus', 'Pluto'], answer: 'Pluto', explanation: 'Pluto gilt offiziell als Zwergplanet, die anderen als Planeten.' },
  { options: ['Safran', 'Trüffel', 'Kaviar', 'Nudeln'], answer: 'Nudeln', explanation: 'Nudeln sind ein Grundnahrungsmittel, die anderen gelten als Luxuslebensmittel.' },
  { options: ['Kolosseum', 'Akropolis', 'Chichén Itzá', 'Mount Everest'], answer: 'Mount Everest', explanation: 'Der Mount Everest ist ein Berg, die anderen sind von Menschen geschaffene Stätten.' },
  { options: ['Puppe', 'Auto', 'Bär', 'Stein'], answer: 'Stein', explanation: 'Ein Stein ist kein klassisches Spielzeug.' },
  { options: ['Skateboard', 'Inlineskates', 'Schlittschuhe', 'Fahrrad'], answer: 'Schlittschuhe', explanation: 'Schlittschuhe benötigen Eis, die anderen Rollen/Räder.' },
  { options: ['A, B, AB, 0', 'Positiv', 'Negativ', 'Neutral'], answer: 'Neutral', explanation: 'Es gibt keine "neutrale" Blutgruppe/Rhesusfaktor.' },
  { options: ['New York', 'Rio de Janeiro', 'Sydney', 'Canberra'], answer: 'Canberra', explanation: 'Canberra ist die einzige Hauptstadt in dieser Liste.' },
  // ═══════════════════════════════════════════════════════════
  // ERWEITERUNG: GAMING-SPEZIAL (50 STÜCK)
  // ═══════════════════════════════════════════════════════════
  { options: ['Pikachu', 'Glumanda', 'Schiggy', 'Agumon'], answer: 'Agumon', explanation: 'Agumon ist ein Digimon, die anderen sind Pokémon.' },
  { options: ['Master Chief', 'Cortana', 'Arbiter', 'Marcus Fenix'], answer: 'Marcus Fenix', explanation: 'Marcus Fenix stammt aus Gears of War, die anderen aus Halo.' },
  { options: ['PlayStation', 'Xbox', 'Switch', 'GameCube'], answer: 'Switch', explanation: 'Die Switch ist eine Hybrid-Konsole, die anderen sind reine Heimkonsolen.' },
  { options: ['Link', 'Zelda', 'Ganon', 'Cloud'], answer: 'Cloud', explanation: 'Cloud Strife gehört zu Final Fantasy, die anderen zur Legend of Zelda Reihe.' },
  { options: ['Tetris', 'Minecraft', 'GTA V', 'Pong'], answer: 'Pong', explanation: 'Pong gehört nicht zu den Top 3 der meistverkauften Videospiele aller Zeiten.' },
  { options: ['Steam', 'Epic Games Store', 'Origin', 'Discord'], answer: 'Discord', explanation: 'Discord ist primär ein Kommunikations-Tool, die anderen sind Spiele-Launcher/Shops.' },
  { options: ['Witcher', 'Skyrim', 'Fallout', 'FIFA'], answer: 'FIFA', explanation: 'FIFA ist eine Sportsimulation, die anderen sind Rollenspiele (RPGs).' },
  { options: ['Solid Snake', 'Liquid Snake', 'Big Boss', 'Sam Fisher'], answer: 'Sam Fisher', explanation: 'Sam Fisher ist der Protagonist von Splinter Cell, die anderen gehören zu Metal Gear.' },
  { options: ['Atari 2600', 'NES', 'Sega Genesis', 'iPhone'], answer: 'iPhone', explanation: 'Das iPhone ist ein Smartphone, die anderen sind dedizierte Spielekonsolen.' },
  { options: ['Vault-Boy', 'Pip-Boy', 'Power Armor', 'Claptrap'], answer: 'Claptrap', explanation: 'Claptrap ist aus Borderlands, die anderen Symbole stammen aus Fallout.' },
  { options: ['Fortnite', 'PUBG', 'Apex Legends', 'Overwatch'], answer: 'Overwatch', explanation: 'Overwatch ist ein Hero-Shooter, die anderen sind Battle-Royale-Spiele.' },
  { options: ['Kratos', 'Atreus', 'Zeus', 'Nathan Drake'], answer: 'Nathan Drake', explanation: 'Nathan Drake ist aus Uncharted, die anderen gehören zur God of War Saga.' },
  { options: ['Pac-Man', 'Ms. Pac-Man', 'Blinky', 'Qbert'], answer: 'Qbert', explanation: 'Qbert ist ein eigenständiges Spiel, die anderen gehören zum Pac-Man Universum.' },
  { options: ['Joy-Con', 'DualSense', 'Elite Controller', 'Kinect'], answer: 'Kinect', explanation: 'Kinect ist eine Bewegungssteuerung per Kamera, die anderen sind Hand-Controller.' },
  { options: ['WoW', 'Final Fantasy XIV', 'Guild Wars 2', 'Elden Ring'], answer: 'Elden Ring', explanation: 'Elden Ring ist ein Singleplayer/Koop-RPG, die anderen sind MMORPGs.' },
  { options: ['Lara Croft', 'Jill Valentine', 'Alois', 'Aloy'], answer: 'Alois', explanation: 'Alois ist kein bekannter Videospielcharakter (Aloy ist aus Horizon).' },
  { options: ['Portal', 'Half-Life', 'Left 4 Dead', 'Doom'], answer: 'Doom', explanation: 'Doom wurde von id Software entwickelt, die anderen von Valve.' },
  { options: ['Bowser', 'Dr. Eggman', 'Sephiroth', 'Peach'], answer: 'Peach', explanation: 'Peach ist meist die Heldin/Prinzessin, die anderen sind berühmte Antagonisten.' },
  { options: ['Raytracing', 'DLSS', 'Anti-Aliasing', 'Joystick'], answer: 'Joystick', explanation: 'Joystick ist Hardware, die anderen sind Grafik-Technologien.' },
  { options: ['Nintendo', 'Sega', 'Sony', 'Microsoft'], answer: 'Sega', explanation: 'Sega stellt heute keine eigenen Heimkonsolen mehr her, die anderen schon.' },
  { options: ['Sims', 'SimCity', 'Spore', 'Stardew Valley'], answer: 'Stardew Valley', explanation: 'Stardew Valley wurde von ConcernedApe entwickelt, die anderen von Maxis/EA.' },
  { options: ['Donkey Kong', 'Diddy Kong', 'King K. Rool', 'Yoshi'], answer: 'Yoshi', explanation: 'Yoshi gehört primär zur Mario-Serie, die anderen zur Donkey Kong Serie.' },
  { options: ['Ezio Auditore', 'Altaïr', 'Edward Kenway', 'Geralt von Riva'], answer: 'Geralt von Riva', explanation: 'Geralt ist aus The Witcher, die anderen sind Assassinen aus Assassins Creed.' },
  { options: ['Counter-Strike', 'Valorant', 'Rainbow Six Siege', 'Animal Crossing'], answer: 'Animal Crossing', explanation: 'Animal Crossing ist eine Lebenssimulation, die anderen sind taktische Shooter.' },
  { options: ['Game Boy', 'Game Gear', 'PSP', 'N64'], answer: 'N64', explanation: 'Das N64 ist eine stationäre Konsole, die anderen sind Handhelds.' },
  { options: ['Blue Shell', 'Banana', 'Mushroom', 'Pokéball'], answer: 'Pokéball', explanation: 'Der Pokéball gehört zu Pokémon, die anderen sind Items aus Mario Kart.' },
  { options: ['Ryu', 'Ken', 'Chun-Li', 'Sub-Zero'], answer: 'Sub-Zero', explanation: 'Sub-Zero ist aus Mortal Kombat, die anderen aus Street Fighter.' },
  { options: ['Hyrule', 'Pilz-Königreich', 'Azeroth', 'Mittelerde'], answer: 'Mittelerde', explanation: 'Mittelerde stammt primär aus der Literatur (HdR), die anderen sind originäre Videospiel-Welten.' },
  { options: ['MMO', 'RPG', 'FPS', 'CPU'], answer: 'CPU', explanation: 'CPU ist eine Hardware-Komponente, die anderen sind Spiele-Genres.' },
  { options: ['Sonic', 'Tails', 'Knuckles', 'Crash Bandicoot'], answer: 'Crash Bandicoot', explanation: 'Crash ist das inoffizielle Maskottchen von PlayStation/Activision, die anderen sind Sega-Figuren.' },
  { options: ['Kirby', 'Meta Knight', 'König Dedede', 'Fox McCloud'], answer: 'Fox McCloud', explanation: 'Fox gehört zu Star Fox, die anderen zur Kirby-Serie.' },
  { options: ['Dark Souls', 'Bloodborne', 'Sekiro', 'Candy Crush'], answer: 'Candy Crush', explanation: 'Candy Crush ist ein Mobile/Casual Game, die anderen sind "Souls-like" Spiele von FromSoftware.' },
  { options: ['Creeper', 'Enderman', 'Zombie', 'Goomba'], answer: 'Goomba', explanation: 'Goombas sind Gegner aus Mario, die anderen aus Minecraft.' },
  { options: ['Zelda', 'Epona', 'Navi', 'Midna'], answer: 'Epona', explanation: 'Epona ist das Pferd, die anderen sind weibliche/humanoide Charaktere.' },
  { options: ['Resident Evil', 'Silent Hill', 'Dead Space', 'Super Mario'], answer: 'Super Mario', explanation: 'Super Mario ist ein Jump n Run, die anderen sind Survival-Horror-Spiele.' },
  { options: ['Warcraft', 'Starcraft', 'Diablo', 'League of Legends'], answer: 'League of Legends', explanation: 'LoL ist von Riot Games, die anderen von Blizzard Entertainment.' },
  { options: ['Gordon Freeman', 'G-Man', 'Alyx Vance', 'Arthur Morgan'], answer: 'Arthur Morgan', explanation: 'Arthur Morgan ist aus Red Dead Redemption 2, die anderen aus Half-Life.' },
  { options: ['Discord', 'Twitch', 'YouTube Gaming', 'Facebook Gaming'], answer: 'Discord', explanation: 'Discord ist kein reiner Streaming-Dienst, sondern ein Messenger.' },
  { options: ['Pikmin', 'Lemmings', 'Worms', 'Tetris'], answer: 'Tetris', explanation: 'Tetris ist ein Puzzle-Spiel ohne Spielfiguren/Einheiten, die anderen sind Truppen-Spiele.' },
  { options: ['Razer', 'Logitech', 'SteelSeries', 'Intel'], answer: 'Intel', explanation: 'Intel stellt primär Prozessoren her, die anderen sind bekannt für Gaming-Peripherie (Mäuse etc.).' },
  { options: ['Unreal Engine', 'Unity', 'Frostbite', 'Windows'], answer: 'Windows', explanation: 'Windows ist ein Betriebssystem, die anderen sind Game-Engines.' },
  { options: ['Pac-Man', 'Space Invaders', 'Asteroids', 'Cyberpunk 2077'], answer: 'Cyberpunk 2077', explanation: 'Cyberpunk ist ein modernes Spiel, die anderen sind Arcade-Klassiker der 70er/80er.' },
  { options: ['L-Teil', 'T-Teil', 'I-Teil', 'Zirkel'], answer: 'Zirkel', explanation: 'Zirkel ist kein Tetris-Block (Tetromino).' },
  { options: ['Steve', 'Alex', 'Herobrine', 'Guybrush Threepwood'], answer: 'Guybrush Threepwood', explanation: 'Guybrush ist aus Monkey Island, die anderen sind Minecraft-Charaktere/Mythen.' },
  { options: ['Assassin’s Creed', 'Far Cry', 'Watch Dogs', 'Halo'], answer: 'Halo', explanation: 'Halo ist von Microsoft/Bungie, die anderen sind Ubisoft-Franchises.' },
  { options: ['WASD', 'Pfeiltasten', 'ESDF', 'Alt+F4'], answer: 'Alt+F4', explanation: 'Alt+F4 ist ein Tastenkürzel zum Schließen, die anderen werden zur Bewegung genutzt.' },
  { options: ['Geralt', 'Yennefer', 'Triss', 'Ciri'], answer: 'Yennefer', explanation: 'Alle gehören zu Witcher, aber Yennefer ist die einzige mit schwarzen Haaren (Triss rot, Ciri grau/blond, Geralt weiß).' },
  { options: ['Max Payne', 'Alan Wake', 'Jesse Faden', 'Tomb Raider'], answer: 'Tomb Raider', explanation: 'Tomb Raider ist von Crystal Dynamics/Eidos, die anderen sind Remedy-Charaktere.' },
  { options: ['Heal', 'Tank', 'DPS', 'Noob'], answer: 'Noob', explanation: 'Noob ist eine Beleidigung/Bezeichnung, die anderen sind klassische Rollen in einem Team.' },
  { options: ['Final Fantasy', 'Dragon Quest', 'Kingdom Hearts', 'Gran Turismo'], answer: 'Gran Turismo', explanation: 'Gran Turismo ist ein Rennspiel, die anderen sind JRPGs von Square Enix.' },
  // ═══════════════════════════════════════════════════════════
  // ERWEITERUNG: MITTEL (FAIR & ALLTAGSNAH)
  // ═══════════════════════════════════════════════════════════
  { options: ['Apfel', 'Birne', 'Pfirsich', 'Banane'], answer: 'Banane', explanation: 'Die Banane hat keine Kerne in der Mitte und keine feste Schale, die man mitessen kann.' },
  { options: ['Stift', 'Pinsel', 'Kreide', 'Radiergummi'], answer: 'Radiergummi', explanation: 'Mit dem Radiergummi entfernt man Farbe, mit den anderen trägt man sie auf.' },
  { options: ['Eiffelturm', 'Pyramiden', 'Freiheitsstatue', 'Zugspitze'], answer: 'Zugspitze', explanation: 'Die Zugspitze ist ein Berg, die anderen wurden von Menschen gebaut.' },
  { options: ['Sonne', 'Lampe', 'Feuer', 'Spiegel'], answer: 'Spiegel', explanation: 'Ein Spiegel leuchtet nicht selbst, sondern reflektiert nur Licht.' },
  { options: ['Klavier', 'Keyboard', 'Orgel', 'Gitarre'], answer: 'Gitarre', explanation: 'Die Gitarre hat keine Tasten, die anderen schon.' },
  { options: ['Fußball', 'Basketball', 'Handball', 'Eishockey'], answer: 'Eishockey', explanation: 'Eishockey wird mit einem Puck gespielt, die anderen mit einem Ball.' },
  { options: ['Januar', 'März', 'Mai', 'Juni'], answer: 'Juni', explanation: 'Der Juni hat nur 30 Tage, die anderen drei haben 31 Tage.' },
  { options: ['Spanien', 'Italien', 'Griechenland', 'Schweden'], answer: 'Schweden', explanation: 'Schweden liegt im Norden (Skandinavien), die anderen im Süden am Mittelmeer.' },
  { options: ['Hose', 'Rock', 'Shorts', 'Gürtel'], answer: 'Gürtel', explanation: 'Der Gürtel ist ein Accessoire, die anderen sind Kleidungsstücke für die Beine.' },
  { options: ['Ketchup', 'Senf', 'Mayonnaise', 'Zucker'], answer: 'Zucker', explanation: 'Zucker ist ein Gewürz/Süßungsmittel, die anderen sind fertige Saucen.' },
  { options: ['Fahrrad', 'Mofa', 'Motorrad', 'Auto'], answer: 'Fahrrad', explanation: 'Das Fahrrad hat keinen Motor, die anderen schon.' },
  { options: ['Salami', 'Schinken', 'Leberwurst', 'Käse'], answer: 'Käse', explanation: 'Käse wird aus Milch gemacht, die anderen aus Fleisch.' },
  { options: ['Berlin', 'Hamburg', 'München', 'Österreich'], answer: 'Österreich', explanation: 'Österreich ist ein Land, die anderen sind deutsche Städte.' },
  { options: ['Hammer', 'Säge', 'Zange', 'Nagel'], answer: 'Nagel', explanation: 'Der Nagel ist das Material, die anderen sind Werkzeuge.' },
  { options: ['Hund', 'Katze', 'Löwe', 'Elefant'], answer: 'Elefant', explanation: 'Der Elefant ist ein Pflanzenfresser, die anderen fressen (auch) Fleisch.' },
  { options: ['Schlittschuhe', 'Ski', 'Snowboard', 'Badehose'], answer: 'Badehose', explanation: 'Die Badehose ist für den Sommer, die anderen für den Wintersport.' },
  { options: ['Küche', 'Bad', 'Wohnzimmer', 'Garage'], answer: 'Garage', explanation: 'Die Garage ist für das Auto, die anderen sind Wohnräume im Haus.' },
  { options: ['Zitrone', 'Grapefruit', 'Limette', 'Erdbeere'], answer: 'Erdbeere', explanation: 'Die Erdbeere ist keine Zitrusfrucht, die anderen schon.' },
  { options: ['Arzt', 'Lehrer', 'Bäcker', 'Patient'], answer: 'Patient', explanation: 'Patient ist kein Beruf, die anderen schon.' },
  { options: ['Monitor', 'Tastatur', 'Maus', 'Drucker'], answer: 'Monitor', explanation: 'Der Monitor gibt Bild aus, die anderen sind Eingabegeräte oder Zusatzgeräte.' },
  { options: ['Tisch', 'Stuhl', 'Schrank', 'Teppich'], answer: 'Teppich', explanation: 'Der Teppich liegt flach auf dem Boden, die anderen sind Möbelstücke.' },
  { options: ['Regen', 'Schnee', 'Hagel', 'Wind'], answer: 'Wind', explanation: 'Wind ist keine Form von Wasser/Niederschlag, die anderen schon.' },
  { options: ['Flugzeug', 'Hubschrauber', 'Heißluftballon', 'Fahrrad'], answer: 'Fahrrad', explanation: 'Das Fahrrad bleibt am Boden, die anderen fliegen.' },
  { options: ['Mittagessen', 'Frühstück', 'Abendbrot', 'Nachtisch'], answer: 'Nachtisch', explanation: 'Der Nachtisch ist ein Teil einer Mahlzeit, die anderen sind die Hauptmahlzeiten.' },
  { options: ['Auge', 'Ohr', 'Nase', 'Haare'], answer: 'Haare', explanation: 'Haare sind kein Sinnesorgan, die anderen schon.' },
  { options: ['Montag', 'Mittwoch', 'Freitag', 'Wochenende'], answer: 'Wochenende', explanation: 'Das Wochenende besteht aus zwei Tagen, die anderen sind einzelne Wochentage.' },
  { options: ['Eis', 'Lava', 'Feuer', 'Sonne'], answer: 'Eis', explanation: 'Eis ist kalt, die anderen sind extrem heiß.' },
  { options: ['Schokolade', 'Gummibärchen', 'Lutscher', 'Chips'], answer: 'Chips', explanation: 'Chips sind salzig, die anderen sind süß.' },
  { options: ['Kopf', 'Bauch', 'Rücken', 'Hut'], answer: 'Hut', explanation: 'Der Hut ist Kleidung, die anderen sind Körperteile.' },
  { options: ['Bus', 'Bahn', 'Taxi', 'Skateboard'], answer: 'Skateboard', explanation: 'Das Skateboard ist kein öffentliches Verkehrsmittel.' },
  { options: ['Schach', 'Mensch ärgere dich nicht', 'Kniffel', 'Fußball'], answer: 'Fußball', explanation: 'Fußball ist Sport, die anderen sind Gesellschaftsspiele.' },
  { options: ['Milch', 'Wasser', 'Saft', 'Pizza'], answer: 'Pizza', explanation: 'Pizza ist zum Essen, die anderen zum Trinken.' },
  { options: ['Tulpe', 'Rose', 'Sonnenblume', 'Tanne'], answer: 'Tanne', explanation: 'Die Tanne ist ein Baum, die anderen sind Blumen.' },
  { options: ['Singen', 'Pfeifen', 'Summen', 'Lesen'], answer: 'Lesen', explanation: 'Beim Lesen macht man normalerweise keine Geräusche mit dem Mund.' },
  { options: ['Brief', 'E-Mail', 'Postkarte', 'Fernseher'], answer: 'Fernseher', explanation: 'Der Fernseher sendet Informationen an viele, die anderen sind persönliche Nachrichten.' },
  { options: ['Bett', 'Sofa', 'Hängematte', 'Esstisch'], answer: 'Esstisch', explanation: 'Am Esstisch sitzt man zum Essen, in den anderen liegt oder entspannt man.' },
  { options: ['Gelb', 'Rot', 'Blau', 'Dunkel'], answer: 'Dunkel', explanation: 'Dunkel ist ein Helligkeitszustand, keine Farbe.' },
  { options: ['Wald', 'Park', 'Dschungel', 'Wüste'], answer: 'Wüste', explanation: 'In der Wüste wachsen kaum Pflanzen, in den anderen schon.' },
  { options: ['Ozean', 'Fluss', 'Bach', 'Wasserfall'], answer: 'Ozean', explanation: 'Ein Ozean ist ein stehendes Gewässer, die anderen fließen in eine Richtung.' },
  { options: ['Brot', 'Nudeln', 'Reis', 'Apfel'], answer: 'Apfel', explanation: 'Der Apfel ist Obst, die anderen sind Kohlenhydrat-Beilagen (Getreideprodukte).' },
  { options: ['Maus', 'Ratte', 'Hamster', 'Frosch'], answer: 'Frosch', explanation: 'Der Frosch ist ein Amphibium, die anderen sind Nagetiere.' },
  { options: ['Tasse', 'Glas', 'Becher', 'Teller'], answer: 'Teller', explanation: 'Aus einem Teller isst man, aus den anderen trinkt man.' },
  { options: ['Polizei', 'Feuerwehr', 'Notarzt', 'Lehrer'], answer: 'Lehrer', explanation: 'Ein Lehrer ist kein Rettungsberuf/Einsatzkraft.' },
  { options: ['Puppe', 'Auto', 'Lego', 'Gabel'], answer: 'Gabel', explanation: 'Eine Gabel ist Besteck, kein Spielzeug.' },
  { options: ['Zahnarzt', 'Augenarzt', 'Tierarzt', 'Bäcker'], answer: 'Bäcker', explanation: 'Der Bäcker ist kein medizinischer Beruf.' },
  { options: ['Sommer', 'Sonne', 'Strand', 'Schnee'], answer: 'Schnee', explanation: 'Schnee passt zum Winter, die anderen zum Sommerurlaub.' },
  { options: ['Hemd', 'T-Shirt', 'Pullover', 'Jeans'], answer: 'Jeans', explanation: 'Die Jeans ist eine Hose, die anderen trägt man am Oberkörper.' },
  { options: ['Quadrat', 'Kreis', 'Dreieck', 'Würfel'], answer: 'Würfel', explanation: 'Der Würfel ist dreidimensional, die anderen sind flach (2D).' },
  { options: ['10', '20', '30', '15'], answer: '15', explanation: 'Die anderen sind glatte Zehnerzahlen.' },
  { options: ['Hut', 'Mütze', 'Helm', 'Schal'], answer: 'Schal', explanation: 'Den Schal trägt man um den Hals, die anderen auf dem Kopf.' },
	
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