(function () {

  // ═══════════════════════════════════════════════════════════
  // FRAGEN-DATENBANK
  // ═══════════════════════════════════════════════════════════
  var QUESTIONS = [
// Videospiele
    { itemA: 'Minecraft',          itemB: 'GTA V',                valueA: 300,   valueB: 195,   unit: 'Mio. verkaufte Einheiten' },
    { itemA: 'Tetris',             itemB: 'Wii Sports',            valueA: 520,   valueB: 82,    unit: 'Mio. verkaufte Einheiten' },
    { itemA: 'Fortnite',           itemB: 'League of Legends',     valueA: 350,   valueB: 180,   unit: 'Mio. registrierte Spieler' },
    { itemA: 'Super Mario Bros.',  itemB: 'Pac-Man',              valueA: 1985,  valueB: 1980,  unit: 'Erscheinungsjahr' },
    { itemA: 'Call of Duty',       itemB: 'Battlefield',           valueA: 400,   valueB: 88,    unit: 'Mio. verkaufte Einheiten (Serie)' },
    { itemA: 'PlayStation 5',      itemB: 'Xbox Series X',         valueA: 54,    valueB: 21,    unit: 'Mio. verkaufte Einheiten' },

    // Kino & Film
    { itemA: 'Avatar',             itemB: 'Avengers: Endgame',     valueA: 2923,  valueB: 2799,  unit: 'Mio. $ Einnahmen' },
    { itemA: 'Titanic',            itemB: 'Jurassic Park',         valueA: 2257,  valueB: 1029,  unit: 'Mio. $ Einnahmen' },
    { itemA: 'Der König der Löwen (1994)', itemB: 'Toy Story (1995)', valueA: 968, valueB: 373, unit: 'Mio. $ Einnahmen' },
    { itemA: 'Star Wars: Episode IV', itemB: 'Shrek 2',           valueA: 1977,  valueB: 2004,  unit: 'Erscheinungsjahr' },
    { itemA: 'The Dark Knight',    itemB: 'Inception',             valueA: 1006,  valueB: 836,   unit: 'Mio. $ Einnahmen' },
    { itemA: 'Spider-Man: No Way Home', itemB: 'Black Panther',   valueA: 1901,  valueB: 1347,  unit: 'Mio. $ Einnahmen' },

    // Musik
    { itemA: 'Thriller (Michael Jackson)', itemB: 'Back in Black (AC/DC)', valueA: 66, valueB: 50, unit: 'Mio. verkaufte Alben' },
    { itemA: 'Spotify',            itemB: 'Apple Music',            valueA: 600,   valueB: 100,   unit: 'Mio. aktive Nutzer' },
    { itemA: 'Shape of You (Ed Sheeran)', itemB: 'Blinding Lights (The Weeknd)', valueA: 3.6, valueB: 4.0, unit: 'Mrd. Streams (Spotify)' },
    { itemA: 'Beatles-Alben',      itemB: 'Rolling Stones-Alben',  valueA: 600,   valueB: 240,   unit: 'Mio. verkaufte Alben (Schätzung)' },

    // Technik & Internet
    { itemA: 'YouTube',            itemB: 'TikTok',                valueA: 2700,  valueB: 1000,  unit: 'Mio. aktive Nutzer' },
    { itemA: 'iPhone (Erstausgabe)', itemB: 'Galaxy S1',          valueA: 2007,  valueB: 2010,  unit: 'Erscheinungsjahr' },
    { itemA: 'Google',             itemB: 'Amazon',                valueA: 1998,  valueB: 1994,  unit: 'Gründungsjahr' },
    { itemA: 'ChatGPT',            itemB: 'Instagram',             valueA: 2022,  valueB: 2010,  unit: 'Erscheinungsjahr' },

    // Sport
    { itemA: 'Fußball WM 2022 Finale', itemB: 'Super Bowl LVII',  valueA: 1500,  valueB: 115,   unit: 'Mio. Zuschauer' },
    { itemA: 'Cristiano Ronaldo (Instagram)', itemB: 'Lionel Messi (Instagram)', valueA: 620, valueB: 500, unit: 'Mio. Follower' },
    { itemA: 'Olympische Spiele 1896', itemB: 'Erste Fußball WM',  valueA: 1896,  valueB: 1930,  unit: 'Jahr' },
    { itemA: 'NBA Finals 2023',    itemB: 'Champions League Finale 2023', valueA: 9.7, valueB: 450, unit: 'Mio. Zuschauer TV' },

    // Sonstiges / Welt
    { itemA: 'China',              itemB: 'Indien',                valueA: 1411,  valueB: 1428,  unit: 'Mio. Einwohner' },
    { itemA: 'Sahara',             itemB: 'Antarktis',             valueA: 9.2,   valueB: 14,    unit: 'Mio. km²' },
    { itemA: 'Eiffelturm',         itemB: 'Freiheitsstatue',       valueA: 330,   valueB: 93,    unit: 'Meter Höhe' },
    { itemA: 'Mount Everest',      itemB: 'K2',                    valueA: 8849,  valueB: 8611,  unit: 'Meter Höhe' },
    { itemA: 'Amazon (Fluss)',     itemB: 'Nil',                   valueA: 6400,  valueB: 6650,  unit: 'km Länge' },

    // ═══════════════════════════════════════════════════════════
    // ERWEITERUNG: GEOGRAFIE & STÄDTE
    // ═══════════════════════════════════════════════════════════
    { itemA: 'Berlin', itemB: 'Hamburg', valueA: 3.8, valueB: 1.9, unit: 'Mio. Einwohner' },
    { itemA: 'Russland', itemB: 'Kanada', valueA: 17.1, valueB: 9.9, unit: 'Mio. km² Fläche' },
    { itemA: 'Tokio', itemB: 'New York City', valueA: 37, valueB: 19, unit: 'Mio. Einwohner (Metropolregion)' },
    { itemA: 'Vatikanstadt', itemB: 'Monaco', valueA: 0.44, valueB: 2.02, unit: 'km² Fläche' },
    { itemA: 'Zugspitze', itemB: 'Mont Blanc', valueA: 2962, valueB: 4807, unit: 'Meter Höhe' },
    { itemA: 'Bodensee', itemB: 'Müritz', valueA: 536, valueB: 117, unit: 'km² Fläche' },
    { itemA: 'Island', itemB: 'Irland', valueA: 103000, valueB: 70273, unit: 'km² Fläche' },
    { itemA: 'Mallorca', itemB: 'Rügen', valueA: 3640, valueB: 926, unit: 'km² Fläche' },
    { itemA: 'Australien', itemB: 'Mond', valueA: 4000, valueB: 3474, unit: 'km Durchmesser' },
    { itemA: 'Tiefstes Loch (Kola)', itemB: 'Marianengraben', valueA: 12262, valueB: 11034, unit: 'Meter Tiefe' },

    // ═══════════════════════════════════════════════════════════
    // VIDEOSPIELE & GAMING (ERWEITERT)
    // ═══════════════════════════════════════════════════════════
    { itemA: 'PlayStation 2', itemB: 'Nintendo DS', valueA: 155, valueB: 154, unit: 'Mio. verkaufte Einheiten' },
    { itemA: 'The Witcher 3', itemB: 'Cyberpunk 2077', valueA: 50, valueB: 25, unit: 'Mio. verkaufte Einheiten' },
    { itemA: 'Roblox', itemB: 'Minecraft (monatlich)', valueA: 200, valueB: 160, unit: 'Mio. aktive Spieler' },
    { itemA: 'Elden Ring', itemB: 'Dark Souls 3', valueA: 23, valueB: 10, unit: 'Mio. verkaufte Einheiten' },
    { itemA: 'Game Boy', itemB: 'Nintendo Switch', valueA: 118, valueB: 140, unit: 'Mio. verkaufte Einheiten' },
    { itemA: 'Red Dead Redemption 2', itemB: 'GTA IV', valueA: 61, valueB: 25, unit: 'Mio. verkaufte Einheiten' },
    { itemA: 'Pokémon Blaue Edition', itemB: 'Pokémon Karmesin', valueA: 31, valueB: 23, unit: 'Mio. verkaufte Einheiten' },
    { itemA: 'Steam (Peak User)', itemB: 'Twitch (Peak User)', valueA: 34, valueB: 6, unit: 'Mio. gleichzeitige Nutzer' },

    // ═══════════════════════════════════════════════════════════
    // KINO, TV & STREAMING
    // ═══════════════════════════════════════════════════════════
    { itemA: 'Netflix Abonnenten', itemB: 'Disney+ Abonnenten', valueA: 260, valueB: 150, unit: 'Mio. Nutzer' },
    { itemA: 'Squid Game', itemB: 'Stranger Things (Staffel 4)', valueA: 1650, valueB: 1352, unit: 'Mio. geschauten Stunden (Top 28 Tage)' },
    { itemA: 'Breaking Bad (Folgen)', itemB: 'Game of Thrones (Folgen)', valueA: 62, valueB: 73, unit: 'Anzahl Episoden' },
    { itemA: 'Iron Man (2008)', itemB: 'The Avengers (2012)', valueA: 585, valueB: 1518, unit: 'Mio. $ Einnahmen' },
    { itemA: 'Oscars für "Titanic"', itemB: 'Oscars für "Oppenheimer"', valueA: 11, valueB: 7, unit: 'Anzahl gewonnene Oscars' },
    { itemA: 'Budget: Avatar 2', itemB: 'Budget: Avengers: Endgame', valueA: 350, valueB: 356, unit: 'Mio. $ Produktionskosten' },

    // ═══════════════════════════════════════════════════════════
    // BIOLOGIE & NATUR
    // ═══════════════════════════════════════════════════════════
    { itemA: 'Blauwal', itemB: 'Afrikanischer Elefant', valueA: 190, valueB: 6, unit: 'Tonnen Gewicht' },
    { itemA: 'Gepard (Speed)', itemB: 'Wanderfalke (Sturzflug)', valueA: 110, valueB: 320, unit: 'km/h Höchstgeschwindigkeit' },
    { itemA: 'Mensch (Knochen)', itemB: 'Hund (Knochen)', valueA: 206, valueB: 320, unit: 'Anzahl Knochen' },
    { itemA: 'Tragzeit Elefant', itemB: 'Tragzeit Nashorn', valueA: 22, valueB: 15, unit: 'Monate' },
    { itemA: 'Lebenserwartung Riesen-Schildkröte', itemB: 'Lebenserwartung Papagei', valueA: 150, valueB: 80, unit: 'Jahre' },
    { itemA: 'Herzschläge/Min (Kolibri)', itemB: 'Herzschläge/Min (Blauwal)', valueA: 1200, valueB: 10, unit: 'Schläge pro Minute' },

    // ═══════════════════════════════════════════════════════════
    // ESSEN & TRINKEN
    // ═══════════════════════════════════════════════════════════
    { itemA: 'Big Mac', itemB: 'Whopper', valueA: 503, valueB: 633, unit: 'Kalorien (kcal)' },
    { itemA: 'Coca Cola (Zucker)', itemB: 'Apfelsaft (Zucker)', valueA: 10.6, valueB: 10.3, unit: 'g Zucker pro 100ml' },
    { itemA: 'Kaffee-Produktion (Brasilien)', itemB: 'Kaffee-Produktion (Vietnam)', valueA: 2.6, valueB: 1.5, unit: 'Mio. Tonnen pro Jahr' },
    { itemA: 'Bierverbrauch (Deutschland)', itemB: 'Bierverbrauch (Tschechien)', valueA: 90, valueB: 140, unit: 'Liter pro Kopf/Jahr' },

// ═══════════════════════════════════════════════════════════
  // TECHNIK & WELTRAUM
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Entfernung Erde–Mond', itemB: 'Umfang der Erde', valueA: 384400, valueB: 40075, unit: 'km' },
  { itemA: 'Temperatur Sonne (Oberfläche)', itemB: 'Temperatur Erdkern', valueA: 5500, valueB: 6000, unit: '°C' },
  { itemA: 'Lichtgeschwindigkeit', itemB: 'Schallgeschwindigkeit (Luft)', valueA: 300000, valueB: 0.343, unit: 'km pro Sekunde' },
  { itemA: 'Alter des Universums', itemB: 'Alter der Erde', valueA: 13.8, valueB: 4.5, unit: 'Mrd. Jahre' },
  { itemA: 'Erster Computer (Z3)', itemB: 'Erster Apple Computer', valueA: 1941, valueB: 1976, unit: 'Erscheinungsjahr' },

  // ═══════════════════════════════════════════════════════════
  // SPORT & REKORDE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Usain Bolt (100m)', itemB: 'Florence Griffith-Joyner (100m)', valueA: 9.58, valueB: 10.49, unit: 'Sekunden (Weltrekord)' },
  { itemA: 'Michael Phelps (Goldmedaillen)', itemB: 'Usain Bolt (Goldmedaillen)', valueA: 23, valueB: 8, unit: 'Anzahl Gold bei Olympia' },
  { itemA: 'Tour de France Gesamtlänge', itemB: 'Entfernung Hamburg-Mallorca', valueA: 3400, valueB: 1650, unit: 'km' },
  { itemA: 'Höchstgeschwindigkeit Formel 1', itemB: 'Höchstgeschwindigkeit ICE 3', valueA: 372, valueB: 330, unit: 'km/h' },

  // ═══════════════════════════════════════════════════════════
  // GESCHICHTE & KULTUR
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Bauzeit Berliner Mauer', itemB: 'Bestand der Berliner Mauer', valueA: 1, valueB: 28, unit: 'Jahre' },
  { itemA: 'Französische Revolution', itemB: 'Amerikanische Unabhängigkeit', valueA: 1789, valueB: 1776, unit: 'Jahr des Beginns' },
  { itemA: 'Titanic Untergang', itemB: 'Hindenburg Katastrophe', valueA: 1912, valueB: 1937, unit: 'Jahr' },
  { itemA: 'Eiffelturm (Stufen)', itemB: 'Empire State Building (Stufen)', valueA: 1665, valueB: 1860, unit: 'Anzahl Treppenstufen' },

  // ═══════════════════════════════════════════════════════════
  // AUTOMOBIL & GESCHWINDIGKEIT
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Bugatti Chiron (Top Speed)', itemB: 'Tesla Model S Plaid (Top Speed)', valueA: 420, valueB: 322, unit: 'km/h' },
  { itemA: 'VW Käfer (Produktionszahl)', itemB: 'Toyota Corolla (Produktionszahl)', valueA: 21.5, valueB: 50, unit: 'Mio. Fahrzeuge' },
  { itemA: 'Gründungsjahr BMW', itemB: 'Gründungsjahr Mercedes-Benz', valueA: 1916, valueB: 1926, unit: 'Jahr' },
  { itemA: 'Ferrari Marktwert', itemB: 'Porsche Marktwert', valueA: 75, valueB: 85, unit: 'Mrd. $' },
  { itemA: 'Länge eines Formel 1 Rennens', itemB: 'Länge Marathon', valueA: 305, valueB: 42.195, unit: 'km' },
  { itemA: 'Gewicht eines VW Golf', itemB: 'Gewicht eines Hummer H1', valueA: 1300, valueB: 3400, unit: 'kg' },

  // ═══════════════════════════════════════════════════════════
  // MENSCHLICHER KÖRPER & GESUNDHEIT
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Herzschläge pro Tag', itemB: 'Atemzüge pro Tag', valueA: 100000, valueB: 20000, unit: 'Anzahl' },
  { itemA: 'Länge des Dünndarms', itemB: 'Länge des Dickdarms', valueA: 6, valueB: 1.5, unit: 'Meter' },
  { itemA: 'Anzahl der Zähne (Erwachsener)', itemB: 'Anzahl der Rippen', valueA: 32, valueB: 24, unit: 'Anzahl' },
  { itemA: 'Gewicht des Gehirns', itemB: 'Gewicht der Leber', valueA: 1.4, valueB: 1.8, unit: 'kg' },
  { itemA: 'Wasseranteil im Körper', itemB: 'Wasseranteil im Gehirn', valueA: 60, valueB: 80, unit: '%' },
  { itemA: 'Geschwindigkeit eines Niesers', itemB: 'Geschwindigkeit eines Husters', valueA: 160, valueB: 90, unit: 'km/h' },

  // ═══════════════════════════════════════════════════════════
  // ESSEN, TRINKEN & KONSUM
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Koffein im Espresso', itemB: 'Koffein in Dose Red Bull', valueA: 60, valueB: 80, unit: 'mg' },
  { itemA: 'Zucker in Snickers', itemB: 'Zucker in Mars-Riegel', valueA: 27, valueB: 33, unit: 'Gramm' },
  { itemA: 'Liter Wasser für 1kg Rindfleisch', itemB: 'Liter Wasser für 1kg Kartoffeln', valueA: 15400, valueB: 290, unit: 'Liter' },
  { itemA: 'McDonalds Filialen weltweit', itemB: 'Subway Filialen weltweit', valueA: 42000, valueB: 37000, unit: 'Anzahl Filialen' },
  { itemA: 'Verbrauch Schokolade (DE)', itemB: 'Verbrauch Schokolade (CH)', valueA: 9.2, valueB: 10.3, unit: 'kg pro Kopf/Jahr' },
  { itemA: 'Preis Big Mac (USA)', itemB: 'Preis Big Mac (Schweiz)', valueA: 5.69, valueB: 7.10, unit: 'US-Dollar' },

  // ═══════════════════════════════════════════════════════════
  // WELTRAUM & PHYSIK
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Monde des Jupiter', itemB: 'Monde des Saturn', valueA: 95, valueB: 146, unit: 'Anzahl Monde' },
  { itemA: 'Dichte Gold', itemB: 'Dichte Blei', valueA: 19.3, valueB: 11.3, unit: 'g/cm³' },
  { itemA: 'Siedepunkt Wasser', itemB: 'Siedepunkt Eisen', valueA: 100, valueB: 2862, unit: '°C' },
  { itemA: 'Entfernung Erde-Mars (Min)', itemB: 'Entfernung Erde-Sonne', valueA: 56, valueB: 150, unit: 'Mio. km' },
  { itemA: 'Umdrehung der Erde (Äquator)', itemB: 'Schallgeschwindigkeit', valueA: 1670, valueB: 1235, unit: 'km/h' },
  { itemA: 'Gewicht ISS', itemB: 'Gewicht Blauwal', valueA: 450, valueB: 190, unit: 'Tonnen' },

  // ═══════════════════════════════════════════════════════════
  // BRANDS & BUSINESS
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Markenwert Apple', itemB: 'Markenwert Microsoft', valueA: 516, valueB: 340, unit: 'Mrd. $' },
  { itemA: 'Mitarbeiter Walmart', itemB: 'Mitarbeiter Amazon', valueA: 2.1, valueB: 1.5, unit: 'Mio. Menschen' },
  { itemA: 'Kosten Nike-Logo (Original)', itemB: 'Kosten BP-Logo (Redesign)', valueA: 35, valueB: 211000000, unit: 'Dollar' },
  { itemA: 'Gründungsjahr Nintendo', itemB: 'Gründungsjahr Coca-Cola', valueA: 1889, valueB: 1886, unit: 'Jahr' },
  { itemA: 'Umsatz Starbucks', itemB: 'Umsatz Netflix', valueA: 36, valueB: 33, unit: 'Mrd. $' },

  // ═══════════════════════════════════════════════════════════
  // ENTERTAINMENT & INTERNET (NEU)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Abonnenten MrBeast', itemB: 'Abonnenten T-Series', valueA: 350, valueB: 285, unit: 'Mio. Abonnenten' },
  { itemA: 'Episoden One Piece', itemB: 'Episoden Naruto (Gesamt)', valueA: 1120, valueB: 720, unit: 'Anzahl Folgen' },
  { itemA: 'Views "Baby Shark"', itemB: 'Views "Despacito"', valueA: 14.5, valueB: 8.5, unit: 'Mrd. YouTube Views' },
  { itemA: 'Instagram Follower: Selena Gomez', itemB: 'Instagram Follower: Kylie Jenner', valueA: 430, valueB: 400, unit: 'Mio. Follower' },
  { itemA: 'Länge Spielfilm (Durchschnitt)', itemB: 'Länge TikTok (Maximal)', valueA: 100, valueB: 10, unit: 'Minuten' },
  { itemA: 'Twitch Follower: Ninja', itemB: 'Twitch Follower: Auronplay', valueA: 19, valueB: 16, unit: 'Mio. Follower' },

  // ═══════════════════════════════════════════════════════════
  // GEOGRAFIE & REKORDE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Fläche Grönland', itemB: 'Fläche Australien', valueA: 2.1, valueB: 7.6, unit: 'Mio. km²' },
  { itemA: 'Länge der Donau', itemB: 'Länge des Rheins', valueA: 2850, valueB: 1233, unit: 'km' },
  { itemA: 'Brücken in Hamburg', itemB: 'Brücken in Venedig', valueA: 2500, valueB: 400, unit: 'Anzahl Brücken' },
  { itemA: 'Einwohner Island', itemB: 'Einwohner Berlin', valueA: 0.38, valueB: 3.8, unit: 'Mio. Einwohner' },
  { itemA: 'Alter Pyramiden von Gizeh', itemB: 'Alter Kolosseum Rom', valueA: 4500, valueB: 1940, unit: 'Jahre' },
  { itemA: 'Höchster Wasserfall (Angel Falls)', itemB: 'Burj Khalifa', valueA: 979, valueB: 828, unit: 'Meter Höhe' },

  // ═══════════════════════════════════════════════════════════
  // GESCHICHTE & ZEIT
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Dauer 1. Weltkrieg', itemB: 'Dauer 30-jähriger Krieg', valueA: 4, valueB: 30, unit: 'Jahre' },
  { itemA: 'Bauzeit Cheops-Pyramide', itemB: 'Bauzeit Kölner Dom', valueA: 20, valueB: 632, unit: 'Jahre' },
  { itemA: 'Untergang Pompeji (Vesuv)', itemB: 'Bau der Chinesischen Mauer (Beginn)', valueA: 79, valueB: -214, unit: 'Jahr' },
  { itemA: 'Regierungszeit Queen Elizabeth II', itemB: 'Regierungszeit Ludwig XIV', valueA: 70, valueB: 72, unit: 'Jahre' },
  { itemA: 'Erste Mondlandung', itemB: 'Erfindung des Internets (WWW)', valueA: 1969, valueB: 1989, unit: 'Jahr' },

// ═══════════════════════════════════════════════════════════
  // TIERE & NATUR
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Zähne eines Hais (insgesamt)', itemB: 'Zähne einer Schnecke', valueA: 3000, valueB: 14000, unit: 'Anzahl Zähne' },
  { itemA: 'Fluggeschwindigkeit Libelle', itemB: 'Fluggeschwindigkeit Stubenfliege', valueA: 50, valueB: 7, unit: 'km/h' },
  { itemA: 'Schlaf eines Löwen', itemB: 'Schlaf einer Giraffe', valueA: 20, valueB: 2, unit: 'Stunden pro Tag' },
  { itemA: 'Gewicht eines Straußeneis', itemB: 'Gewicht eines Hühnereis', valueA: 1.5, valueB: 0.06, unit: 'kg' },
  { itemA: 'Anzahl Beine Spinne', itemB: 'Anzahl Beine Ameise', valueA: 8, valueB: 6, unit: 'Anzahl' },
  { itemA: 'Zellanzahl Mensch', itemB: 'Sterne in der Milchstraße', valueA: 37000, valueB: 200, unit: 'Mrd. (Schätzung)' },

  // ═══════════════════════════════════════════════════════════
  // LIFESTYLE & MISC
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Felder auf einem Schachbrett', itemB: 'Tasten auf einem Klavier', valueA: 64, valueB: 88, unit: 'Anzahl' },
  { itemA: 'Seiten in "Harry Potter 1"', itemB: 'Seiten in der Bibel', valueA: 336, valueB: 1200, unit: 'Seiten (ca.)' },
  { itemA: 'Farben im Regenbogen', itemB: 'Farben in der Deutschland-Flagge', valueA: 7, valueB: 3, unit: 'Anzahl' },
  { itemA: 'Höhe Basketballkorb', itemB: 'Höhe Fußballtor', valueA: 3.05, valueB: 2.44, unit: 'Meter' },
  { itemA: 'Karten in einem Skatdeck', itemB: 'Karten in einem Pokerdeck', valueA: 32, valueB: 52, unit: 'Anzahl' },
  { itemA: 'Speicherkapazität erste Festplatte', itemB: 'Speicherkapazität CD', valueA: 5, valueB: 700, unit: 'Megabyte' },

  { itemA: 'Dichte Wasser', itemB: 'Dichte Alkohol', valueA: 1000, valueB: 789, unit: 'kg/m³' },
  { itemA: 'Länge der Chinesischen Mauer', itemB: 'Umfang der Erde', valueA: 21196, valueB: 40075, unit: 'km' },
  { itemA: 'Oscar-Gewinne Walt Disney', itemB: 'Oscar-Gewinne Meryl Streep', valueA: 22, valueB: 3, unit: 'Anzahl Oscars' },
  { itemA: 'Anzahl Tasten (Standard-Tastatur)', itemB: 'Anzahl Knochen im Fuß', valueA: 105, valueB: 26, unit: 'Anzahl' },
  { itemA: 'Bevölkerung Tokyo', itemB: 'Bevölkerung ganz Australien', valueA: 37, valueB: 26, unit: 'Mio. Menschen' },
  { itemA: 'Erstes iPhone (Gewicht)', itemB: 'iPhone 15 Pro (Gewicht)', valueA: 135, valueB: 187, unit: 'Gramm' },
  { itemA: 'Spielfeldlänge Fußball', itemB: 'Spielfeldlänge American Football', valueA: 105, valueB: 110, unit: 'Meter' },
  { itemA: 'IQ von Albert Einstein (Schätzung)', itemB: 'IQ von Stephen Hawking', valueA: 160, valueB: 162, unit: 'Punkte' },
  { itemA: 'Anzahl Weltmeere', itemB: 'Anzahl Kontinente', valueA: 5, valueB: 7, unit: 'Anzahl' },
  { itemA: 'Siedepunkt Gold', itemB: 'Siedepunkt Silber', valueA: 2856, valueB: 2162, unit: '°C' },
  { itemA: 'Durchmesser Golfball', itemB: 'Durchmesser Tischtennisball', valueA: 42.7, valueB: 40, unit: 'mm' },
  { itemA: 'Anzahl Saiten einer Harfe', itemB: 'Anzahl Saiten einer Gitarre', valueA: 47, valueB: 6, unit: 'Anzahl' },
  { itemA: 'Gewicht des Herzens', itemB: 'Gewicht eines Augapfels', valueA: 300, valueB: 7.5, unit: 'Gramm' },
  { itemA: 'Geschwindigkeit Nervenimpuls', itemB: 'Geschwindigkeit Formel 1 Auto', valueA: 400, valueB: 370, unit: 'km/h' },
  { itemA: 'Anzahl Buchstaben (Deutsch)', itemB: 'Anzahl Buchstaben (Englisch)', valueA: 30, valueB: 26, unit: 'Anzahl' },
  { itemA: 'Breite einer Standardtür', itemB: 'Breite einer Tischtennisplatte', valueA: 0.86, valueB: 1.52, unit: 'Meter' },
  { itemA: 'Inhalt einer Weinflasche', itemB: 'Inhalt einer Maß Bier', valueA: 0.75, valueB: 1.0, unit: 'Liter' },
  { itemA: 'Anzahl Filme "James Bond"', itemB: 'Anzahl Filme "Star Wars" (Hauptreihe)', valueA: 25, valueB: 9, unit: 'Anzahl' },
  { itemA: 'Höchstwert Bitcoin (historisch)', itemB: 'Höchstwert Gold pro Unze (ca.)', valueA: 73700, valueB: 2400, unit: 'Dollar' },
  { itemA: 'Anzahl Mitgliedstaaten EU', itemB: 'Anzahl Mitgliedstaaten NATO', valueA: 27, valueB: 32, unit: 'Staaten' },
  { itemA: 'Filmlänge "Vom Winde verweht"', itemB: 'Filmlänge "Titanic"', valueA: 238, valueB: 194, unit: 'Minuten' },
  { itemA: 'Durchmesser der Sonne', itemB: 'Entfernung Erde-Mond', valueA: 1392700, valueB: 384400, unit: 'km' },
  { itemA: 'Bauzeit Empire State Building', itemB: 'Bauzeit Eiffelturm', valueA: 1.1, valueB: 2.1, unit: 'Jahre' },
  { itemA: 'Anzahl Pokemon (1. Gen)', itemB: 'Anzahl Pokemon (Gesamt Gen 9)', valueA: 151, valueB: 1025, unit: 'Anzahl' },
  { itemA: 'Fläche Russland', itemB: 'Einwohner Indien', valueA: 17.1, valueB: 1428, unit: 'Mio. km² / Mio. Personen' },
  { itemA: 'Umsatz GTA V (Gesamt)', itemB: 'Budget Avatar 1', valueA: 8000, valueB: 237, unit: 'Mio. $' },
  { itemA: 'Tage im Schaltjahr', itemB: 'Tage im Marsjahr', valueA: 366, valueB: 687, unit: 'Tage' },
  { itemA: 'Anzahl Episoden "The Simpsons"', itemB: 'Anzahl Episoden "South Park"', valueA: 760, valueB: 320, unit: 'Folgen' },
  { itemA: 'Anzahl Planeten im Sonnensystem', itemB: 'Anzahl Zwergplaneten (anerkannt)', valueA: 8, valueB: 5, unit: 'Anzahl' },
  { itemA: 'Länge eines Tennisfeldes', itemB: 'Länge eines Volleyballfeldes', valueA: 23.77, valueB: 18.0, unit: 'Meter' },
  { itemA: 'Mitarbeiter Google', itemB: 'Mitarbeiter Apple', valueA: 182000, valueB: 161000, unit: 'Anzahl' },
  { itemA: 'Kalorien Apfel', itemB: 'Kalorien Banane', valueA: 52, valueB: 89, unit: 'kcal pro 100g' },
  { itemA: 'Volljährigkeit (Deutschland)', itemB: 'Volljährigkeit (Alkohol USA)', valueA: 18, valueB: 21, unit: 'Jahre' },
  { itemA: 'Alter Stonehenge', itemB: 'Alter Akropolis', valueA: 5000, valueB: 2460, unit: 'Jahre' },
  { itemA: 'Anzahl menschliche Sinne', itemB: 'Anzahl Noten einer Tonleiter', valueA: 5, valueB: 7, unit: 'Anzahl' },
  { itemA: 'Länge der Titanic', itemB: 'Länge eines Flugzeugträgers', valueA: 269, valueB: 333, unit: 'Meter' },
  { itemA: 'Anzahl Zylinder Bugatti Veyron', itemB: 'Anzahl Zylinder Formel 1 Auto', valueA: 16, valueB: 6, unit: 'Anzahl' },
  { itemA: 'Größe Saarland', itemB: 'Größe Luxemburg', valueA: 2569, valueB: 2586, unit: 'km²' },
  { itemA: 'Gewicht eines Goldbarrens (Standard)', itemB: 'Gewicht einer Bowlingkugel (Max)', valueA: 12.4, valueB: 7.2, unit: 'kg' },

  // ═══════════════════════════════════════════════════════════
  // SKURRILES & REKORDE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Tote durch Haie (pro Jahr)', itemB: 'Tote durch herabfallende Kokosnüsse (pro Jahr)', valueA: 10, valueB: 150, unit: 'Todesfälle weltweit' },
  { itemA: 'Ameisen auf der Erde (Milliarden)', itemB: 'Sterne in der Milchstraße (Milliarden)', valueA: 20000000, valueB: 200, unit: 'Milliarden Stück' },
  { itemA: 'Längster aufgezeichneter Hühnerflug', itemB: 'Länge eines Fußballfeldes', valueA: 13, valueB: 105, unit: 'Meter' },
  { itemA: 'Gewicht der Zunge eines Blauwals', itemB: 'Gewicht eines ausgewachsenen Elefanten', valueA: 2.7, valueB: 6.0, unit: 'Tonnen' },
  { itemA: 'Größte jemals gemessene Schneeflocke', itemB: 'Durchmesser einer Pizza (Standard)', valueA: 38, valueB: 32, unit: 'Zentimeter' },
  { itemA: 'Höchstgeschwindigkeit einer Schnecke', itemB: 'Höchstgeschwindigkeit einer Schildkröte', valueA: 0.048, valueB: 1.6, unit: 'km/h' },
  { itemA: 'Anzahl der Inseln in Schweden', itemB: 'Anzahl der Inseln in Griechenland', valueA: 267000, valueB: 6000, unit: 'Inseln' },

  // ═══════════════════════════════════════════════════════════
  // WISSENSCHAFT & NATURPHÄNOMENE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Temperatur auf dem Merkur (Tag)', itemB: 'Temperatur auf der Venus', valueA: 430, valueB: 464, unit: '°C' },
  { itemA: 'Dichte von Saturn', itemB: 'Dichte von Wasser', valueA: 687, valueB: 1000, unit: 'kg/m³' },
  { itemA: 'Tiefster Punkt im Atlantik', itemB: 'Tiefster Punkt im Pazifik', valueA: 8376, valueB: 11034, unit: 'Meter Tiefe' },
  { itemA: 'Geschwindigkeit Erde um Sonne', itemB: 'Geschwindigkeit Sonnensystem durch Galaxie', valueA: 107000, valueB: 828000, unit: 'km/h' },
  { itemA: 'Atome in einem Teelöffel Wasser', itemB: 'Sterne im beobachtbaren Universum', valueA: 500, valueB: 700, unit: 'Trilliarden (geschätzt)' },
  { itemA: 'Länge einer DNA-Kette (ausgefaltet)', itemB: 'Entfernung Erde-Sonne', valueA: 2000000, valueB: 150000000, unit: 'km' },

  // ═══════════════════════════════════════════════════════════
  // ERNÄHRUNG & KULINARIK (SCHARF & SÜSS)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Schärfe: Jalapeño', itemB: 'Schärfe: Habanero', valueA: 5000, valueB: 300000, unit: 'Scoville' },
  { itemA: 'Schärfe: Tabasco Sauce', itemB: 'Schärfe: Cayenne Pfeffer', valueA: 4000, valueB: 40000, unit: 'Scoville' },
  { itemA: 'Koffein in Cola (330ml)', itemB: 'Koffein in Tasse Kaffee (150ml)', valueA: 35, valueB: 80, unit: 'mg' },
  { itemA: 'Zuckergehalt Ketchup', itemB: 'Zuckergehalt Nutella', valueA: 22, valueB: 56, unit: 'g pro 100g' },
  { itemA: 'Produktionsjahr Nutella', itemB: 'Produktionsjahr Hanuta', valueA: 1964, valueB: 1959, unit: 'Jahr' },
  { itemA: 'Teuerster Kaffee (Kopi Luwak)', itemB: 'Standard Arabica Kaffee', valueA: 300, valueB: 15, unit: '€ pro kg' },

  // ═══════════════════════════════════════════════════════════
  // TECH, GAMING & INTERNET
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Erscheinungsjahr Game Boy Color', itemB: 'Erscheinungsjahr PlayStation 1', valueA: 1998, valueB: 1994, unit: 'Jahr' },
  { itemA: 'Anzahl Tasten (Computer-Maus)', itemB: 'Anzahl Tasten (Standard-Controller)', valueA: 3, valueB: 14, unit: 'Tasten' },
  { itemA: 'Speicherplatz 1. iPod', itemB: 'Speicherplatz Floppy Disk', valueA: 5000, valueB: 1.44, unit: 'Megabyte' },
  { itemA: 'Anzahl Google-Suchen pro Sekunde', itemB: 'Anzahl Tweets pro Sekunde', valueA: 99000, valueB: 6000, unit: 'Anzahl' },
  { itemA: 'Weltrekord im Videospiel "Snake"', itemB: 'Länge der Berliner Mauer', valueA: 256, valueB: 155, unit: 'Punkte / km (Kurioser Vergleich)' },
  { itemA: 'Akku-Laufzeit Game Boy', itemB: 'Akku-Laufzeit Nintendo Switch', valueA: 15, valueB: 5, unit: 'Stunden' },

  // ═══════════════════════════════════════════════════════════
  // GEOGRAFIE & LÄNDER
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Küstenlänge Kanada', itemB: 'Umfang der Erde', valueA: 202080, valueB: 40075, unit: 'km' },
  { itemA: 'Anzahl Zeitzonen in Russland', itemB: 'Anzahl Zeitzonen in USA', valueA: 11, valueB: 6, unit: 'Zeitzonen' },
  { itemA: 'Einwohner Island', itemB: 'Besucher Oktoberfest (pro Jahr)', valueA: 376000, valueB: 6000000, unit: 'Personen' },
  { itemA: 'Größte Wüste: Sahara', itemB: 'Größte Wüste: Antarktis', valueA: 9.2, valueB: 14.2, unit: 'Mio. km²' },
  { itemA: 'Höhe Petersdom (Vatikan)', itemB: 'Höhe Kölner Dom', valueA: 137, valueB: 157, unit: 'Meter' },
  { itemA: 'Anzahl der Länder in Afrika', itemB: 'Anzahl der Länder in Europa', valueA: 54, valueB: 44, unit: 'Staaten' },

  // ═══════════════════════════════════════════════════════════
  // MENSCH & KÖRPER
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Druckkraft Kaumuskel', itemB: 'Gewicht einer Bowlingkugel', valueA: 80, valueB: 7.2, unit: 'kg' },
  { itemA: 'Wachstum der Haare pro Monat', itemB: 'Wachstum der Fingernägel pro Monat', valueA: 1.2, valueB: 0.35, unit: 'Zentimeter' },
  { itemA: 'Anzahl Schweißdrüsen (beide Füße)', itemB: 'Anzahl Haare auf dem Kopf', valueA: 250000, valueB: 100000, unit: 'Anzahl' },
  { itemA: 'Oberfläche der menschlichen Lunge', itemB: 'Fläche eines Tennisplatzes', valueA: 70, valueB: 260, unit: 'm²' },
  { itemA: 'Gedächtniskapazität Gehirn', itemB: 'Speicherplatz größte Festplatte (Consumer)', valueA: 2500, valueB: 30, unit: 'Terabyte' },

  // ═══════════════════════════════════════════════════════════
  // POPKULTUR & UNTERNEHMEN
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Mitarbeiter Deutsche Bahn', itemB: 'Mitarbeiter Lufthansa', valueA: 340000, valueB: 110000, unit: 'Menschen' },
  { itemA: 'Produktionskosten Film "Titanic"', itemB: 'Bau des echten Schiffs "Titanic" (angepasst)', valueA: 200, valueB: 150, unit: 'Mio. $' },
  { itemA: 'Anzahl Simpsons Staffeln', itemB: 'Anzahl South Park Staffeln', valueA: 35, valueB: 26, unit: 'Staffeln' },
  { itemA: 'IKEA Kataloge (Rekordjahr)', itemB: 'Harry Potter Bücher (Band 1 Gesamt)', valueA: 200, valueB: 120, unit: 'Mio. Exemplare' },
  { itemA: 'Gründungsjahr Lego', itemB: 'Gründungsjahr Playmobil', valueA: 1932, valueB: 1974, unit: 'Jahr' },

  // ═══════════════════════════════════════════════════════════
  // SPORT & GESCHWINDIGKEIT
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Geschwindigkeit Eishockey-Puck (Max)', itemB: 'Geschwindigkeit Golfball (Max)', valueA: 177, valueB: 310, unit: 'km/h' },
  { itemA: 'Länge eines Kricket-Pitches', itemB: 'Länge eines Basketballfelds', valueA: 20, valueB: 28, unit: 'Meter' },
  { itemA: 'Gewicht eines Sumo-Ringers (Schnitt)', itemB: 'Gewicht eines MotoGP-Motorrads', valueA: 150, valueB: 157, unit: 'kg' },
  { itemA: 'Rekord-Elfmeter Geschwindigkeit', itemB: 'Geschwindigkeit eines Geparden', valueA: 211, valueB: 110, unit: 'km/h' },
  { itemA: 'Dauer Boxkampf (12 Runden)', itemB: 'Dauer eines Fußballspiels', valueA: 47, valueB: 90, unit: 'Minuten (reine Kampfzeit)' },

  // ═══════════════════════════════════════════════════════════
  // GESCHICHTE & ZEITLINIEN
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Bauzeit Golden Gate Bridge', itemB: 'Bauzeit Burj Khalifa', valueA: 4, valueB: 6, unit: 'Jahre' },
  { itemA: 'Dauer Französische Revolution', itemB: 'Dauer Amerikanischer Bürgerkrieg', valueA: 10, valueB: 4, unit: 'Jahre' },
  { itemA: 'Untergang der Sowjetunion', itemB: 'Wiedervereinigung Deutschlands', valueA: 1991, valueB: 1990, unit: 'Jahr' },
  { itemA: 'Erfindung des Buchdrucks', itemB: 'Entdeckung Amerikas', valueA: 1440, valueB: 1492, unit: 'Jahr' },
  { itemA: 'Bau der Berliner Mauer (Beginn)', itemB: 'Bau der Chinesischen Mauer (Ende)', valueA: 1961, valueB: 1644, unit: 'Jahr' },

  // ═══════════════════════════════════════════════════════════
  // TIERE & BIOLOGIE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Zähne eines Alligators', itemB: 'Zähne eines Flusspferds', valueA: 80, valueB: 40, unit: 'Anzahl' },
  { itemA: 'Sprungweite Floh', itemB: 'Sprungweite Känguru', valueA: 0.3, valueB: 12, unit: 'Meter' },
  { itemA: 'Geschwindigkeit einer Biene', itemB: 'Geschwindigkeit einer Libelle', valueA: 24, valueB: 50, unit: 'km/h' },
  { itemA: 'Gewicht eines Kolibris', itemB: 'Gewicht einer 1-Euro-Münze', valueA: 2, valueB: 7.5, unit: 'Gramm' },
  { itemA: 'Tragzeit Hamster', itemB: 'Tragzeit Elefant', valueA: 16, valueB: 660, unit: 'Tage' },

  // ═══════════════════════════════════════════════════════════
  // VERMISCHTES & ALLTAG
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Höhe Mount Everest', itemB: 'Tiefe Marianengraben', valueA: 8848, valueB: 11034, unit: 'Meter' },
  { itemA: 'Höhe eines Standard-Stockwerks', itemB: 'Länge eines PKW (VW Golf)', valueA: 3, valueB: 4.2, unit: 'Meter' },
  { itemA: 'Druck in Champagnerflasche', itemB: 'Luftdruck im Autoreifen', valueA: 6, valueB: 2.5, unit: 'Bar' },
  { itemA: 'Anzahl Tasten Saxophon', itemB: 'Anzahl Ventile Trompete', valueA: 23, valueB: 3, unit: 'Anzahl' },
  { itemA: 'Temperatur flüssiger Stickstoff', itemB: 'Temperatur eines Blitzes', valueA: -196, valueB: 30000, unit: '°C' },
  { itemA: 'Länge der Freiheitsstatue (Nase)', itemB: 'Länge eines Bleistifts', valueA: 1.4, valueB: 0.18, unit: 'Meter' },
  { itemA: 'Gewicht des menschlichen Herzens', itemB: 'Gewicht einer Ananas', valueA: 0.3, valueB: 1.5, unit: 'kg' },
  { itemA: 'Anzahl Rippen (Mensch)', itemB: 'Wirbel im Hals einer Giraffe', valueA: 24, valueB: 7, unit: 'Anzahl' },
  { itemA: 'Spielfeldbreite Fußball', itemB: 'Spielfeldbreite Handball', valueA: 68, valueB: 20, unit: 'Meter' },
  { itemA: 'Volt einer Haushaltssteckdose', itemB: 'Volt einer Autobatterie', valueA: 230, valueB: 12, unit: 'Volt' },
  { itemA: 'Watt einer Mikrowelle', itemB: 'Watt eines Haartrockners', valueA: 800, valueB: 2000, unit: 'Watt' },
  { itemA: 'Literinhalt Badewanne', itemB: 'Literinhalt Aquarium (Standard)', valueA: 150, valueB: 60, unit: 'Liter' },
  { itemA: 'Größtes Organ (Haut)', itemB: 'Schwerstes Organ (Leber)', valueA: 2, valueB: 1.8, unit: 'm² / kg' },
  { itemA: 'Knochen im menschlichen Ohr', itemB: 'Hauptfarben des Lichts (RGB/CMY+)', valueA: 3, valueB: 7, unit: 'Anzahl' },
  { itemA: 'Schleudern Waschmaschine (Max)', itemB: 'Umdrehungen F1-Motor (Limit)', valueA: 1400, valueB: 15000, unit: 'U/min' },
  { itemA: 'Höhe Fußballtor', itemB: 'Höhe Garagentor (Standard)', valueA: 2.44, valueB: 2.1, unit: 'Meter' },
  { itemA: 'Gewicht Federball', itemB: 'Gewicht Tischtennisball', valueA: 5, valueB: 2.7, unit: 'Gramm' },
  { itemA: 'Lebensdauer Stubenfliege', itemB: 'Lebensdauer Biene (Sommer)', valueA: 28, valueB: 45, unit: 'Tage' },
  { itemA: 'Siedepunkt Ethanol', itemB: 'Siedepunkt Wasser', valueA: 78, valueB: 100, unit: '°C' },
  { itemA: 'Breite einer Tastatur', itemB: 'Breite 24-Zoll-Monitor', valueA: 45, valueB: 54, unit: 'cm' },
  { itemA: 'Länge eines Standard-Betts', itemB: 'Länge Tischtennisplatte', valueA: 2, valueB: 2.74, unit: 'Meter' },
  { itemA: 'Fläche Fußballfeld', itemB: 'Fläche Weißes Haus (Grundstück)', valueA: 0.7, valueB: 7.3, unit: 'Hektar' },
  { itemA: 'Umsatz Apple (pro Quartal ca.)', itemB: 'Umsatz Ferrari (pro Jahr ca.)', valueA: 90, valueB: 6, unit: 'Milliarden $' },
  { itemA: 'Anzahl Tasten Blockflöte', itemB: 'Anzahl Saiten Cello', valueA: 8, valueB: 4, unit: 'Anzahl' },
  { itemA: 'Tiefster Punkt der Ostsee', itemB: 'Tiefe des Bodensees', valueA: 459, valueB: 251, unit: 'Meter' },
  { itemA: 'Geschwindigkeit Tornado (F5)', itemB: 'Geschwindigkeit Verkehrsflugzeug', valueA: 500, valueB: 900, unit: 'km/h' },
  { itemA: 'Kantenlänge Zauberwürfel', itemB: 'Kantenlänge Tennisball-Packung', valueA: 5.7, valueB: 21, unit: 'cm' },
  { itemA: 'Dicke der Erdkruste (Ozean)', itemB: 'Dicke der Erdkruste (Kontinent)', valueA: 7, valueB: 35, unit: 'km' },
  { itemA: 'Gewicht eines iPads', itemB: 'Gewicht einer Tüte Mehl', valueA: 0.48, valueB: 1.0, unit: 'kg' },
  { itemA: 'Länge eines Krokodils (Max)', itemB: 'Länge einer Anakonda (Max)', valueA: 6.1, valueB: 5.2, unit: 'Meter' },
  { itemA: 'Anzahl Monde Mars', itemB: 'Anzahl Monde Neptun', valueA: 2, valueB: 14, unit: 'Anzahl' },
  { itemA: 'Brennwert Gurke', itemB: 'Brennwert Tomate', valueA: 15, valueB: 18, unit: 'kcal/100g' },
  { itemA: 'Höhe Berliner Fernsehturm', itemB: 'Höhe Eiffelturm', valueA: 368, valueB: 330, unit: 'Meter' },
  { itemA: 'Anzahl Bundesländer DE', itemB: 'Anzahl Kantone Schweiz', valueA: 16, valueB: 26, unit: 'Anzahl' },
  { itemA: 'Einwohner Monaco', itemB: 'Plätze Signal Iduna Park (Dortmund)', valueA: 38000, valueB: 81000, unit: 'Personen' },
  { itemA: 'Gewicht einer Wolke (Schnitt)', itemB: 'Gewicht eines Blauwals', valueA: 500, valueB: 190, unit: 'Tonnen' },
  { itemA: 'Anzahl Haare (Augenbraue)', itemB: 'Anzahl Haare (Wimpern oben)', valueA: 550, valueB: 150, unit: 'Anzahl' },
  { itemA: 'Größe eines Pixels (4K 27 Zoll)', itemB: 'Dicke eines menschlichen Haares', valueA: 0.15, valueB: 0.08, unit: 'mm' },
  
// ═══════════════════════════════════════════════════════════
  // HARD MODE: GEOGRAFIE (SEHR KNAPP)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Portugal (Fläche)', itemB: 'Ungarn (Fläche)', valueA: 92212, valueB: 93030, unit: 'km²' },
  { itemA: 'Südkorea (Fläche)', itemB: 'Island (Fläche)', valueA: 100210, valueB: 103000, unit: 'km²' },
  { itemA: 'Belgien (Fläche)', itemB: 'Brandenburg (Fläche)', valueA: 30688, valueB: 29654, unit: 'km²' },
  { itemA: 'Einwohner NRW', itemB: 'Einwohner Niederlande', valueA: 18.1, valueB: 17.9, unit: 'Mio. Menschen' },
  { itemA: 'Einwohner Österreich', itemB: 'Einwohner Schweiz', valueA: 9.1, valueB: 8.9, unit: 'Mio. Menschen' },
  { itemA: 'Einwohner Dänemark', itemB: 'Einwohner Finnland', valueA: 5.9, valueB: 5.6, unit: 'Mio. Menschen' },
  { itemA: 'Umfang Mond', itemB: 'Breite Russland (West-Ost)', valueA: 10921, valueB: 9000, unit: 'km' },
  { itemA: 'Insel Rügen (Fläche)', itemB: 'Stadt Berlin (Fläche)', valueA: 926, valueB: 891, unit: 'km²' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: BAUWERKE & HÖHEN
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Eiffelturm (mit Antenne)', itemB: 'Tokyo Tower', valueA: 330, valueB: 333, unit: 'Meter Höhe' },
  { itemA: 'Kölner Dom', itemB: 'Ulmer Münster', valueA: 157, valueB: 161, unit: 'Meter Höhe' },
  { itemA: 'Willis Tower (Chicago)', itemB: '432 Park Avenue (NY)', valueA: 442, valueB: 426, unit: 'Meter Höhe' },
  { itemA: 'One World Trade Center', itemB: 'CN Tower (Toronto)', valueA: 541, valueB: 553, unit: 'Meter Höhe' },
  { itemA: 'Empire State Building', itemB: 'Chrysler Building', valueA: 381, valueB: 319, unit: 'Meter (Dachhöhe)' },
  { itemA: 'Länge der Titanic', itemB: 'Schlachtschiff Bismarck', valueA: 269, valueB: 251, unit: 'Meter' },
  { itemA: 'Airbus A380 (Länge)', itemB: 'Boeing 747-8 (Länge)', valueA: 73, valueB: 76, unit: 'Meter' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: KINO & ZEITEN
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Filmlänge "Pulp Fiction"', itemB: 'Filmlänge "Goodfellas"', valueA: 154, valueB: 145, unit: 'Minuten' },
  { itemA: 'Filmlänge "Inception"', itemB: 'Filmlänge "The Dark Knight"', valueA: 148, valueB: 152, unit: 'Minuten' },
  { itemA: 'Filmlänge "Gladiator"', itemB: 'Filmlänge "Braveheart"', valueA: 155, valueB: 178, unit: 'Minuten' },
  { itemA: 'Filmlänge "Star Wars IV"', itemB: 'Filmlänge "Star Wars V"', valueA: 121, valueB: 124, unit: 'Minuten' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: WISSENSCHAFT & PHYSIK
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Dichte Gold', itemB: 'Dichte Wolfram', valueA: 19.3, valueB: 19.25, unit: 'g/cm³' },
  { itemA: 'Schmelzpunkt Eisen', itemB: 'Schmelzpunkt Nickel', valueA: 1538, valueB: 1455, unit: '°C' },
  { itemA: 'Mars-Tag (Sonnentag)', itemB: 'Erde-Tag', valueA: 24.6, valueB: 24.0, unit: 'Stunden' },
  { itemA: 'Durchmesser Golfball', itemB: 'Durchmesser Squashball', valueA: 42.7, valueB: 40.0, unit: 'mm' },
  { itemA: 'Länge 50-Euro-Schein', itemB: 'Länge 20-Euro-Schein', valueA: 140, valueB: 133, unit: 'mm' },
  { itemA: 'Länge US-Dollar Schein', itemB: 'Länge 100-Euro-Schein', valueA: 156, valueB: 147, unit: 'mm' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: ESSEN & KALORIEN
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Nutella (Kalorien)', itemB: 'Erdnussbutter (Kalorien)', valueA: 539, valueB: 588, unit: 'kcal/100g' },
  { itemA: 'Mars-Riegel (Kalorien)', itemB: 'Snickers (Kalorien)', valueA: 448, valueB: 488, unit: 'kcal/100g' },
  { itemA: 'Coca Cola (Zucker)', itemB: 'Pepsi (Zucker)', valueA: 10.6, valueB: 11.0, unit: 'g pro 100ml' },
  { itemA: 'Koffein Dose Coca Cola', itemB: 'Koffein Dose Pepsi', valueA: 32, valueB: 38, unit: 'mg' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: TECH & GAMING
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Gewicht iPhone 15 Pro', itemB: 'Gewicht Google Pixel 8', valueA: 187, valueB: 181, unit: 'Gramm' },
  { itemA: 'Gewicht PlayStation 5 (Disc)', itemB: 'Gewicht Xbox Series X', valueA: 4.5, valueB: 4.4, unit: 'kg' },
  { itemA: 'Release: Super Mario 64', itemB: 'Release: Pokémon Rot (EU)', valueA: 1996, valueB: 1999, unit: 'Jahr' },
  { itemA: 'Gründung Beatles', itemB: 'Gründung Rolling Stones', valueA: 1960, valueB: 1962, unit: 'Jahr' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: GESCHICHTE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Alter Michael Jackson (Tod)', itemB: 'Alter Elvis Presley (Tod)', valueA: 50, valueB: 42, unit: 'Jahre' },
  { itemA: 'Fall der Mauer', itemB: 'Katastrophe von Tschernobyl', valueA: 1989, valueB: 1986, unit: 'Jahr' },
  { itemA: 'Euro-Bargeld Einführung', itemB: 'Terroranschläge 11. September', valueA: 2002, valueB: 2001, unit: 'Jahr' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: SPORT
  // ═══════════════════════════════════════════════════════════
  { itemA: '100m Weltrekord (Bolt)', itemB: '110m Hürden Weltrekord', valueA: 9.58, valueB: 12.80, unit: 'Sekunden' },
  { itemA: 'EM-Finale 2024 Zuschauer', itemB: 'Champions-League-Finale 2024 Zuschauer', valueA: 71000, valueB: 86000, unit: 'Besucher' },
  { itemA: 'Gewicht Tennisball', itemB: 'Gewicht Squashball', valueA: 57, valueB: 24, unit: 'Gramm' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: KÖRPER & NATUR
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Menschliches Auge (Ø)', itemB: 'Wachtelei (Länge)', valueA: 24, valueB: 30, unit: 'mm' },
  { itemA: 'Gewicht einer Mango (Schnitt)', itemB: 'Gewicht einer Avocado (Schnitt)', valueA: 400, valueB: 250, unit: 'Gramm' },
  { itemA: 'Tragzeit Katze', itemB: 'Tragzeit Hund', valueA: 64, valueB: 63, unit: 'Tage' },
  { itemA: 'Lebenserwartung Löwe (Wildnis)', itemB: 'Lebenserwartung Wolf (Wildnis)', valueA: 12, valueB: 8, unit: 'Jahre' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: STÄDTE (KNAPPES DUELL)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Einwohner München', itemB: 'Einwohner Mailand', valueA: 1.48, valueB: 1.35, unit: 'Mio. Einwohner' },
  { itemA: 'Einwohner Hamburg', itemB: 'Einwohner Wien', valueA: 1.89, valueB: 1.97, unit: 'Mio. Einwohner' },
  { itemA: 'Einwohner Prag', itemB: 'Einwohner Sofia', valueA: 1.3, valueB: 1.2, unit: 'Mio. Einwohner' },
  { itemA: 'Einwohner Peking', itemB: 'Einwohner Shanghai', valueA: 21.5, valueB: 24.8, unit: 'Mio. Einwohner' },
  { itemA: 'Einwohner Rom', itemB: 'Einwohner Paris (Stadt)', valueA: 2.8, valueB: 2.1, unit: 'Mio. Einwohner' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: PERSONEN (ZEITPUNKTE DEZIMAL)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Tod: Albert Einstein', itemB: 'Tod: James Dean', valueA: 1955.33, valueB: 1955.75, unit: 'Jahrzent-Dezimal' },
  { itemA: 'Tod: Michael Jackson', itemB: 'Tod: Patrick Swayze', valueA: 2009.50, valueB: 2009.75, unit: 'Jahrzent-Dezimal' },
  { itemA: 'Tod: Steve Jobs', itemB: 'Tod: Amy Winehouse', valueA: 2011.83, valueB: 2011.58, unit: 'Jahrzent-Dezimal' },
  { itemA: 'Tod: Queen Elizabeth II', itemB: 'Tod: Mikhail Gorbachev', valueA: 2022.75, valueB: 2022.66, unit: 'Jahrzent-Dezimal' },
  { itemA: 'Tod: John Lennon', itemB: 'Tod: Alfred Hitchcock', valueA: 1980.99, valueB: 1980.33, unit: 'Jahrzent-Dezimal' },
  { itemA: 'Geburt: Lionel Messi', itemB: 'Geburt: Novak Djokovic', valueA: 1987.50, valueB: 1987.42, unit: 'Jahrzent-Dezimal' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: FINALES DUELL
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Länge des Rheins', itemB: 'Länge der Weichsel', valueA: 1233, valueB: 1047, unit: 'km Länge' },
  { itemA: 'Bodensee (Fläche)', itemB: 'Genfersee (Fläche)', valueA: 536, valueB: 580, unit: 'km²' },
  { itemA: 'Insel Korsika (Fläche)', itemB: 'Insel Zypern (Fläche)', valueA: 8680, valueB: 9251, unit: 'km²' },
  { itemA: 'Zugspitze (Höhe)', itemB: 'Triglav (Höhe Slowenien)', valueA: 2962, valueB: 2864, unit: 'Meter' },
  { itemA: 'Tiefe Bodensee', itemB: 'Tiefe Gardasee', valueA: 251, valueB: 346, unit: 'Meter' },
  
  // ═══════════════════════════════════════════════════════════
  // HARD MODE: KÖRPER & CHEMIE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Dichte Gold', itemB: 'Dichte Platin', valueA: 19.3, valueB: 21.45, unit: 'g/cm³' },
  { itemA: 'Dichte Silber', itemB: 'Dichte Blei', valueA: 10.49, valueB: 11.34, unit: 'g/cm³' },
  { itemA: 'Schmelzpunkt Silber', itemB: 'Schmelzpunkt Gold', valueA: 961, valueB: 1064, unit: '°C' },
  { itemA: 'pH-Wert Zitronensaft', itemB: 'pH-Wert Essig', valueA: 2.0, valueB: 2.4, unit: 'pH-Wert' },
  { itemA: 'pH-Wert Kaffee', itemB: 'pH-Wert Schwarzer Tee', valueA: 5.0, valueB: 5.5, unit: 'pH-Wert' },
  { itemA: 'Gewicht Leber (Mensch)', itemB: 'Gewicht Gehirn (Mensch)', valueA: 1.5, valueB: 1.4, unit: 'kg' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: SPORT & MAẞE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Gewicht Tennisball', itemB: 'Gewicht Racquetball', valueA: 58, valueB: 40, unit: 'Gramm' },
  { itemA: 'Breite A4 Papier', itemB: 'Breite US Letter Papier', valueA: 210, valueB: 215.9, unit: 'mm' },
  { itemA: 'Länge 50 Euro Schein', itemB: 'Länge 100 US-Dollar Schein', valueA: 140, valueB: 156, unit: 'mm' },
  { itemA: 'Allianz Arena (Plätze)', itemB: 'Old Trafford (Plätze)', valueA: 75024, valueB: 74310, unit: 'Zuschauerkapazität' },
  { itemA: 'Höhe Fußballtor', itemB: 'Höhe American Football Querlatte', valueA: 2.44, valueB: 3.05, unit: 'Meter' },
  { itemA: 'Länge Squash-Feld', itemB: 'Länge Badminton-Feld (Einzel)', valueA: 9.75, valueB: 13.4, unit: 'Meter' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: TIERE & WELTRAUM
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Durchmesser Merkur', itemB: 'Durchmesser Jupitermond Callisto', valueA: 4879, valueB: 4820, unit: 'km' },
  { itemA: 'Durchmesser Titan (Mond)', itemB: 'Durchmesser Ganymed (Mond)', valueA: 5150, valueB: 5268, unit: 'km' },
  { itemA: 'Schwerkraft Mars', itemB: 'Schwerkraft Merkur', valueA: 3.71, valueB: 3.70, unit: 'm/s²' },
  { itemA: 'Geschwindigkeit Segelfisch', itemB: 'Geschwindigkeit Gepard', valueA: 109, valueB: 110, unit: 'km/h' },
  { itemA: 'Gewicht Eisbär (Männchen)', itemB: 'Gewicht Grizzlybär (Männchen)', valueA: 450, valueB: 360, unit: 'kg (Durchschnitt)' },
  { itemA: 'Höhe Strauß', itemB: 'Höhe Basketball-Korb', valueA: 2.8, valueB: 3.05, unit: 'Meter' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: PRODUKTE & KULINARIK
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Zucker in Fanta (100ml)', itemB: 'Zucker in Sprite (100ml)', valueA: 9.1, valueB: 9.0, unit: 'Gramm' },
  { itemA: 'Alkoholgehalt Standard-Wodka', itemB: 'Alkoholgehalt Standard-Whisky', valueA: 40, valueB: 43, unit: '%' },
  { itemA: 'Protein Hähnchenbrust', itemB: 'Protein Putenbrust', valueA: 27, valueB: 29, unit: 'g pro 100g' },
  { itemA: 'Kalorien Apfel', itemB: 'Kalorien Orange', valueA: 52, valueB: 47, unit: 'kcal pro 100g' },
  { itemA: 'Koffein Red Bull (250ml)', itemB: 'Koffein starker Espresso (60ml)', valueA: 80, valueB: 100, unit: 'mg' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: TECH & VERSCHIEDENES
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Display iPhone 15', itemB: 'Display Samsung Galaxy S24', valueA: 6.1, valueB: 6.2, unit: 'Zoll' },
  { itemA: 'Gewicht PS5 Slim', itemB: 'Gewicht PS4 Pro', valueA: 3.2, valueB: 3.3, unit: 'kg' },
  { itemA: 'Siedepunkt Methanol', itemB: 'Siedepunkt Aceton', valueA: 64.7, valueB: 56.0, unit: '°C' },
  { itemA: 'Länge Öresundbrücke', itemB: 'Länge Mackinac-Brücke', valueA: 7845, valueB: 8038, unit: 'Meter' },
  { itemA: 'Entfernung London-Paris', itemB: 'Entfernung Berlin-Prag', valueA: 344, valueB: 280, unit: 'km (Luftlinie)' },
  { itemA: 'Alter Clint Eastwood (2026)', itemB: 'Alter Gene Hackman (2026)', valueA: 95.8, valueB: 96.1, unit: 'Jahre (Monatsgenau)' },
  { itemA: 'Anzahl Tasten Blockflöte', itemB: 'Anzahl Löcher Oboe', valueA: 8, valueB: 23, unit: 'Anzahl' },
  { itemA: 'Seitenanzahl Bibel (Luther)', itemB: 'Seitenanzahl Koran', valueA: 1200, valueB: 600, unit: 'Seiten (ca.)' },
  { itemA: 'Dauer Licht von Sonne zu Erde', itemB: 'Dauer Licht von Erde zu Mond', valueA: 499, valueB: 1.3, unit: 'Sekunden' },
  
// ═══════════════════════════════════════════════════════════
  // LUXUS & PREISE (ZUM SCHÄTZEN)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Preis: Rolex Submariner (Liste)', itemB: 'Preis: Omega Seamaster (Liste)', valueA: 9100, valueB: 6000, unit: '€ (ca.)' },
  { itemA: 'Preis: Hermès Birkin Bag (Basis)', itemB: 'Preis: Chanel Classic Flap Bag', valueA: 10000, valueB: 9700, unit: '€ (ca.)' },
  { itemA: 'Kosten: 30 Sek. Super Bowl Werbung', itemB: 'Kosten: Bugatti "La Voiture Noire"', valueA: 7, valueB: 16.7, unit: 'Mio. $' },
  { itemA: 'Preis pro Gramm: Gold', itemB: 'Preis pro Gramm: Safran', valueA: 65, valueB: 15, unit: '€ (ca.)' },
  { itemA: 'Teuerstes Gemälde (Salvator Mundi)', itemB: 'Baukosten MSG Sphere Las Vegas', valueA: 450, valueB: 2300, unit: 'Mio. $' },

  // ═══════════════════════════════════════════════════════════
  // WER WAR ZUERST DA? (RELEASE-DUELL)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Release: WhatsApp (Feb 2009)', itemB: 'Release: Bitcoin (Jan 2009)', valueA: 2009.16, valueB: 2009.08, unit: 'Jahr (Dezimal)' },
  { itemA: 'Release: Instagram (Okt 2010)', itemB: 'Release: Pinterest (Mär 2010)', valueA: 2010.83, valueB: 2010.25, unit: 'Jahr (Dezimal)' },
  { itemA: 'Gründung: Adidas (Aug 1949)', itemB: 'Gründung: Puma (Sep 1948)', valueA: 1949.66, valueB: 1948.75, unit: 'Jahr (Dezimal)' },
  { itemA: 'Kino-Release: "Star Wars"', itemB: 'Kino-Release: "Der weiße Hai"', valueA: 1977, valueB: 1975, unit: 'Jahr' },
  { itemA: 'Release: Tetris', itemB: 'Release: Super Mario Bros.', valueA: 1984, valueB: 1985, unit: 'Jahr' },

  // ═══════════════════════════════════════════════════════════
  // REKORDE AUS DER TIERWELT (KNAPP & SKURRIL)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Flügelschläge: Biene', itemB: 'Flügelschläge: Kolibri', valueA: 200, valueB: 80, unit: 'Schläge pro Sekunde' },
  { itemA: 'Tauchtiefe: Kaiserpinguin', itemB: 'Tauchtiefe: U-Boot (Militär Standard)', valueA: 535, valueB: 400, unit: 'Meter' },
  { itemA: 'Gewicht: Neugeborener Blauwal', itemB: 'Gewicht: Ausgewachsener afrik. Elefant', valueA: 2.5, valueB: 6.0, unit: 'Tonnen' },
  { itemA: 'Geschwindigkeit: Segelfisch', itemB: 'Geschwindigkeit: Wanderfalke (Sturzflug)', valueA: 110, valueB: 320, unit: 'km/h' },
  { itemA: 'Lebensdauer: Eintagsfliege (Adult)', itemB: 'Lebensdauer: Galápagos-Schildkröte', valueA: 0.002, valueB: 170, unit: 'Jahre' },

  // ═══════════════════════════════════════════════════════════
  // HARD MODE: WISSEN & ALLTAG
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Stunden eines Mars-Jahres', itemB: 'Stunden eines Erde-Jahres', valueA: 16488, valueB: 8760, unit: 'Stunden' },
  { itemA: 'Anzahl Knochen: Baby', itemB: 'Anzahl Knochen: Erwachsener', valueA: 300, valueB: 206, unit: 'Knochen' },
  { itemA: 'Länge: Golden Gate Bridge', itemB: 'Länge: Brooklyn Bridge', valueA: 2737, valueB: 1825, unit: 'Meter' },
  { itemA: 'Höhe: Cheops-Pyramide (heute)', itemB: 'Höhe: Ulmer Münster', valueA: 139, valueB: 161, unit: 'Meter' },
  { itemA: 'Gewicht: Ein Liter Luft', itemB: 'Gewicht: Eine Büroklammer', valueA: 1.2, valueB: 1.0, unit: 'Gramm' },

  // ═══════════════════════════════════════════════════════════
  // KINO, STREAMING & POPKULTUR
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Abonnenten: Netflix', itemB: 'Abonnenten: Amazon Prime Video', valueA: 260, valueB: 200, unit: 'Mio. (weltweit)' },
  { itemA: 'Gewonnene Oscars: Meryl Streep', itemB: 'Gewonnene Oscars: Katharine Hepburn', valueA: 3, valueB: 4, unit: 'Anzahl' },
  { itemA: 'Länge: "The Wolf of Wall Street"', itemB: 'Länge: "Avengers: Endgame"', valueA: 180, valueB: 181, unit: 'Minuten' },
  { itemA: 'Baukosten: GTA V', itemB: 'Baukosten: Destiny', valueA: 265, valueB: 500, unit: 'Mio. $' },
  { itemA: 'Wörter: "Der Herr der Ringe" (Gesamt)', itemB: 'Wörter: "Harry Potter" Reihe', valueA: 480000, valueB: 1000000, unit: 'Wörter (ca.)' },

  // ═══════════════════════════════════════════════════════════
  // LÄNDER & STÄDTE (SPEZIAL)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Höchster Punkt: Niederlande', itemB: 'Höchster Punkt: Dänemark', valueA: 322, valueB: 170, unit: 'Meter' },
  { itemA: 'Anzahl Brücken: Amsterdam', itemB: 'Anzahl Brücken: Hamburg', valueA: 1280, valueB: 2500, unit: 'Brücken' },
  { itemA: 'U-Bahn Stationen: New York', itemB: 'U-Bahn Stationen: Paris', valueA: 472, valueB: 308, unit: 'Stationen' },
  { itemA: 'Fläche: Vatikanstadt', itemB: 'Fläche: Disneyland Paris', valueA: 0.44, valueB: 19, unit: 'km²' },
  { itemA: 'Einwohner: Grönland', itemB: 'Einwohner: Monaco', valueA: 56000, valueB: 39000, unit: 'Personen' },

  // ═══════════════════════════════════════════════════════════
  // SPORT-FEINHEITEN
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Durchmesser: Basketball', itemB: 'Durchmesser: Fußball', valueA: 24, valueB: 22, unit: 'cm' },
  { itemA: 'Gewicht: Diskus (Männer)', itemB: 'Gewicht: Kugel (Männer Kugelstoßen)', valueA: 2, valueB: 7.26, unit: 'kg' },
  { itemA: 'Länge: Eishockey-Spielfeld', itemB: 'Länge: Schwimmbecken (Olympisch)', valueA: 60, valueB: 50, unit: 'Meter' },
  { itemA: 'Max. Geschwindigkeit: Ski-Abfahrt', itemB: 'Max. Geschwindigkeit: Sportbogen-Pfeil', valueA: 160, valueB: 300, unit: 'km/h' },

 // ═══════════════════════════════════════════════════════════
  // TECHNIK & INTERNET (FINALER CHECK)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Pixel: 4K Auflösung (Breite)', itemB: 'Pixel: 5K Auflösung (Breite)', valueA: 3840, valueB: 5120, unit: 'Pixel' },
  { itemA: 'Gewicht: MacBook Air (M3)', itemB: 'Gewicht: iPad Pro 12.9', valueA: 1.24, valueB: 0.68, unit: 'kg' },
  { itemA: 'Startjahr: Google Suche', itemB: 'Startjahr: Amazon Shop', valueA: 1998, valueB: 1995, unit: 'Jahr' },
  { itemA: 'Länge: USB-Kabel (Standard max.)', itemB: 'Länge: HDMI-Kabel (Standard max.)', valueA: 5, valueB: 15, unit: 'Meter (ohne Verstärker)' },
  { itemA: 'Anzahl: Emojis (Stand 2024)', itemB: 'Anzahl: Wörter auf einer Zeitungsseite', valueA: 3782, valueB: 800, unit: 'Anzahl (ca.)' },

  // ═══════════════════════════════════════════════════════════
  // MIXED HARD MODE
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Volumen: Ein Ei (Huhn)', itemB: 'Volumen: Ein Golfball', valueA: 50, valueB: 40, unit: 'ml' },
  { itemA: 'Breite: Tischtennisplatte', itemB: 'Breite: King Size Bett', valueA: 152.5, valueB: 193, unit: 'cm' },
  { itemA: 'Anzahl: Saiten einer Harfe', itemB: 'Anzahl: Tasten eines Klaviers', valueA: 47, valueB: 88, unit: 'Anzahl' },
  { itemA: 'Dicke: 1-Euro-Münze', itemB: 'Dicke: 2-Euro-Münze', valueA: 2.33, valueB: 2.2, unit: 'mm' },
  { itemA: 'Siedepunkt: Quecksilber', itemB: 'Siedepunkt: Blei', valueA: 356, valueB: 1749, unit: '°C' },
  { itemA: 'Länge: Zündholz (Standard)', itemB: 'Länge: SD-Karte', valueA: 43, valueB: 32, unit: 'mm' },
  { itemA: 'Gewicht: Eine Wolke (Cumulus)', itemB: 'Gewicht: 3x Airbus A380', valueA: 500, valueB: 1680, unit: 'Tonnen' },
  { itemA: 'Anzahl: Beine einer Krabbe', itemB: 'Anzahl: Beine einer Spinne', valueA: 10, valueB: 8, unit: 'Anzahl' },
  { itemA: 'Höhe: Mount Everest', itemB: 'Entfernung: Beginn Weltraum (Kármán-Linie)', valueA: 8.8, valueB: 100, unit: 'km' },
  { itemA: 'Fläche: Saarland', itemB: 'Fläche: Luxemburg', valueA: 2569, valueB: 2586, unit: 'km²' },
  { itemA: 'Dauer: Ein Erd-Jahr', itemB: 'Dauer: Ein Mars-Jahr', valueA: 365, valueB: 687, unit: 'Tage' },

  // ═══════════════════════════════════════════════════════════
  // ALLTAGS-VERGLEICHE (EINFACH)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Gewicht PKW (Schnitt)', itemB: 'Gewicht Fahrrad', valueA: 1500, valueB: 15, unit: 'kg' },
  { itemA: 'Dauer Zähneputzen (Empfehlung)', itemB: 'Dauer eines Radio-Songs', valueA: 3, valueB: 3.5, unit: 'Minuten' },
  { itemA: 'Inhalt Kaffeetasse', itemB: 'Inhalt Cola-Dose', valueA: 200, valueB: 330, unit: 'ml' },
  { itemA: 'Höhe eines Stockwerks', itemB: 'Länge eines Linienbusses', valueA: 3, valueB: 12, unit: 'Meter' },
  { itemA: 'Gewicht eines Hamsters', itemB: 'Gewicht eines Meerschweinchens', valueA: 0.1, valueB: 1.0, unit: 'kg' },

  // ═══════════════════════════════════════════════════════════
  // GEOGRAFIE & REISEN (KLASSIKER)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Einwohner Deutschland', itemB: 'Einwohner Österreich', valueA: 84, valueB: 9, unit: 'Mio. Menschen' },
  { itemA: 'Fläche Berlin', itemB: 'Fläche München', valueA: 891, valueB: 310, unit: 'km²' },
  { itemA: 'Flug Frankfurt-New York', itemB: 'Flug Frankfurt-Mallorca', valueA: 8.5, valueB: 2.2, unit: 'Stunden' },
  { itemA: 'Höhe der Zugspitze', itemB: 'Höhe des Feldbergs (Schwarzwald)', valueA: 2962, valueB: 1493, unit: 'Meter' },
  { itemA: 'Länge Marathon', itemB: 'Länge des Rheins', valueA: 42.19, valueB: 1233, unit: 'km' },

  // ═══════════════════════════════════════════════════════════
  // MENSCH & SPORT (INTUITIV)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Dauer Fußballspiel', itemB: 'Dauer Handballspiel', valueA: 90, valueB: 60, unit: 'Minuten' },
  { itemA: 'Spieler pro Fußballteam', itemB: 'Spieler pro Basketballteam (Feld)', valueA: 11, valueB: 5, unit: 'Personen' },
  { itemA: 'Gewicht eines Fußballs', itemB: 'Gewicht eines Tennisballs', valueA: 430, valueB: 58, unit: 'Gramm' },
  { itemA: 'Länge Schwimmbecken (kurz)', itemB: 'Höhe Sprungturm (max)', valueA: 25, valueB: 10, unit: 'Meter' },
  { itemA: 'Körpertemperatur (Gesund)', itemB: 'Zimmertemperatur (Wohlfühl)', valueA: 37, valueB: 21, unit: '°C' },

  // ═══════════════════════════════════════════════════════════
  // TIERE (EINFACH ZU SCHÄTZEN)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Beine einer Spinne', itemB: 'Beine eines Käfers', valueA: 8, valueB: 6, unit: 'Anzahl' },
  { itemA: 'Gewicht Hauskatze', itemB: 'Gewicht Schäferhund', valueA: 4, valueB: 35, unit: 'kg' },
  { itemA: 'Höhe einer Giraffe', itemB: 'Höhe eines Elefanten', valueA: 5.5, valueB: 3.2, unit: 'Meter' },
  { itemA: 'Geschwindigkeit Hase', itemB: 'Geschwindigkeit Igel', valueA: 70, valueB: 2, unit: 'km/h' },
  { itemA: 'Flügelspannweite Adler', itemB: 'Flügelspannweite Spatz', valueA: 2.2, valueB: 0.25, unit: 'Meter' },

  // ═══════════════════════════════════════════════════════════
  // MARKEN & KONSUM
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Preis einer Kugel Eis', itemB: 'Preis einer Kinokarte', valueA: 1.7, valueB: 12, unit: '€ (Schnitt)' },
  { itemA: 'Zuckerwürfel in Cola (0,5l)', itemB: 'Zuckerwürfel in Apfelsaft (0,5l)', valueA: 17, valueB: 15, unit: 'Stück (ca.)' },
  { itemA: 'Speicherplatz Handy (Schnitt)', itemB: 'Speicherplatz Laptop (Schnitt)', valueA: 128, valueB: 512, unit: 'Gigabyte' },
  { itemA: 'Gewicht Tafel Schokolade', itemB: 'Gewicht Packung Mehl', valueA: 0.1, valueB: 1.0, unit: 'kg' },
  { itemA: 'McDonald’s Filialen (DE)', itemB: 'Aldi Filialen (DE)', valueA: 1400, valueB: 4000, unit: 'Filialen' },
// ═══════════════════════════════════════════════════════════
  // DIE WEITEREN 50 FRAGEN (GEMISCHT & ALLTAG)
  // ═══════════════════════════════════════════════════════════
  { itemA: 'Länge eines Bleistifts', itemB: 'Länge eines DIN A4 Blattes', valueA: 18, valueB: 29.7, unit: 'cm' },
  { itemA: 'Saiten einer Gitarre', itemB: 'Saiten einer Violine', valueA: 6, valueB: 4, unit: 'Anzahl' },
  { itemA: 'Seiten eines Würfels', itemB: 'Ecken eines Quadrats', valueA: 6, valueB: 4, unit: 'Anzahl' },
  { itemA: 'Anzahl der Zähne (Erwachsener)', itemB: 'Anzahl der Milchzähne', valueA: 32, valueB: 20, unit: 'Anzahl' },
  { itemA: 'Gewicht einer 2-Euro-Münze', itemB: 'Gewicht eines Briefes (Standard)', valueA: 8.5, valueB: 20, unit: 'Gramm' },
  { itemA: 'PS eines Kleinwagens', itemB: 'PS eines Traktors', valueA: 75, valueB: 200, unit: 'PS (Schnitt)' },
  { itemA: 'Geschwindigkeit Fahrrad', itemB: 'Geschwindigkeit Moped', valueA: 15, valueB: 45, unit: 'km/h' },
  { itemA: 'Inhalt Sprudel-Kiste', itemB: 'Inhalt Bier-Kiste', valueA: 12, valueB: 20, unit: 'Flaschen' },
  { itemA: 'Länge eines Teelöffels', itemB: 'Länge eines Messers', valueA: 14, valueB: 22, unit: 'cm' },
  { itemA: 'Tasten auf einem Klavier', itemB: 'Buchstaben im Alphabet', valueA: 88, valueB: 26, unit: 'Anzahl' },
  { itemA: 'Höhe eines Tisches', itemB: 'Höhe eines Stuhls (Sitz)', valueA: 75, valueB: 45, unit: 'cm' },
  { itemA: 'Größe eines Fußballtors', itemB: 'Größe eines Garagentors', valueA: 7.32, valueB: 2.5, unit: 'Meter (Breite)' },
  { itemA: 'Volumen eines Eimers', itemB: 'Volumen einer Gießkanne', valueA: 10, valueB: 12, unit: 'Liter' },
  { itemA: 'Anzahl Bundeskanzler (DE)', itemB: 'Anzahl US-Präsidenten', valueA: 10, valueB: 46, unit: 'Personen (bisher)' },
  { itemA: 'Alter beim Renteneintritt', itemB: 'Alter bei Einschulung', valueA: 67, valueB: 6, unit: 'Jahre' },
  { itemA: 'Gewicht eines Smartphones', itemB: 'Gewicht einer Tafel Schokolade', valueA: 200, valueB: 100, unit: 'Gramm' },
  { itemA: 'Dauer eines Kinofilms', itemB: 'Dauer einer Folge Sitcom', valueA: 120, valueB: 22, unit: 'Minuten' },
  { itemA: 'Temperatur im Gefrierfach', itemB: 'Temperatur im Kühlschrank', valueA: -18, valueB: 7, unit: '°C' },
  { itemA: 'Anzahl Monate im Jahr', itemB: 'Anzahl Wochen im Jahr', valueA: 12, valueB: 52, unit: 'Einheiten' },
  { itemA: 'Länge eines PKW', itemB: 'Länge eines LKW (Sattelzug)', valueA: 4.5, valueB: 16.5, unit: 'Meter' },
  { itemA: 'Gewicht eines Brotes', itemB: 'Gewicht eines Brötchens', valueA: 1000, valueB: 50, unit: 'Gramm' },
  { itemA: 'Speichen am Fahrradrad', itemB: 'Beine einer Ameise', valueA: 36, valueB: 6, unit: 'Anzahl' },
  { itemA: 'Tage im Februar', itemB: 'Tage im August', valueA: 28, valueB: 31, unit: 'Tage' },
  { itemA: 'Höhe des Eiffelturms', itemB: 'Höhe des Ulmer Münsters', valueA: 330, valueB: 161, unit: 'Meter' },
  { itemA: 'Inhalt Weinglas', itemB: 'Inhalt Schnapsglas', valueA: 0.2, valueB: 0.02, unit: 'Liter' },
  { itemA: 'Anzahl der Weltmeere', itemB: 'Anzahl der Planeten', valueA: 5, valueB: 8, unit: 'Anzahl' },
  { itemA: 'PS eines Formel-1-Wagens', itemB: 'PS eines Sportwagens (911)', valueA: 1000, valueB: 450, unit: 'PS (ca.)' },
  { itemA: 'Breite einer Autobahnspur', itemB: 'Breite eines PKW', valueA: 3.75, valueB: 1.8, unit: 'Meter' },
  { itemA: 'Preis für 1 Liter Benzin', itemB: 'Preis für 1 Liter Milch', valueA: 1.8, valueB: 1.1, unit: '€ (ca.)' },
  { itemA: 'Wohnfläche Wohnung (Schnitt)', itemB: 'Grundstücksfläche Haus', valueA: 80, valueB: 500, unit: 'm²' },
  { itemA: 'Dauer eines Gewitters', itemB: 'Dauer eines Regenschauers', valueA: 30, valueB: 15, unit: 'Minuten' },
  { itemA: 'Anzahl Spieler (Schach)', itemB: 'Anzahl Spieler (Mädn)', valueA: 2, valueB: 4, unit: 'Personen' },
  { itemA: 'Länge eines Schals', itemB: 'Länge einer Krawatte', valueA: 1.8, valueB: 1.5, unit: 'Meter' },
  { itemA: 'Gewicht eines Goldbarrens (Standard)', itemB: 'Gewicht eines Hantelgewichts', valueA: 12.4, valueB: 5.0, unit: 'kg' },
  { itemA: 'Anzahl Tasten (Fernbedienung)', itemB: 'Anzahl Tasten (Lichtschalter)', valueA: 40, valueB: 1, unit: 'Anzahl' },
  { itemA: 'Geschwindigkeit Flugzeug', itemB: 'Geschwindigkeit ICE', valueA: 900, valueB: 300, unit: 'km/h' },
  { itemA: 'Breite eines Bettes (Einzel)', itemB: 'Breite eines Bettes (Doppel)', valueA: 90, valueB: 180, unit: 'cm' },
  { itemA: 'Anzahl Tage (Weihnachten)', itemB: 'Anzahl Tage (Ostern Haupttage)', valueA: 2, valueB: 4, unit: 'Tage' },
  { itemA: 'Fläche Fußballfeld', itemB: 'Fläche Tennisplatz', valueA: 7140, valueB: 260, unit: 'm²' },
  { itemA: 'Dauer einer Schwangerschaft', itemB: 'Dauer einer Ausbildung', valueA: 9, valueB: 36, unit: 'Monate' },
  { itemA: 'Anzahl der Nasenlöcher', itemB: 'Anzahl der Kammern im Herz', valueA: 2, valueB: 4, unit: 'Anzahl' },
  { itemA: 'Länge Schiff (Container)', itemB: 'Länge eines Segelbootes', valueA: 400, valueB: 12, unit: 'Meter' },
  { itemA: 'Anzahl Karten (Skat)', itemB: 'Anzahl Karten (Rommé)', valueA: 32, valueB: 110, unit: 'Anzahl' },
  { itemA: 'Volt einer Batterie (AA)', itemB: 'Volt einer Autobatterie', valueA: 1.5, valueB: 12, unit: 'Volt' },
  { itemA: 'Wörter pro Minute (Sprechen)', itemB: 'Wörter pro Minute (Lesen)', valueA: 130, valueB: 250, unit: 'Wörter' },
  { itemA: 'Stunden Schlaf (Schnitt)', itemB: 'Stunden Arbeit am Tag', valueA: 7, valueB: 8, unit: 'Stunden' },
  { itemA: 'Monate im Jahr', itemB: 'Bundesländer in Österreich', valueA: 12, valueB: 9, unit: 'Anzahl' },
  { itemA: 'Liter im Benzintank', itemB: 'Liter in einer Regentonne', valueA: 50, valueB: 200, unit: 'Liter' },
  { itemA: 'Gewicht eines Apfels', itemB: 'Gewicht einer Melone', valueA: 0.2, valueB: 3.0, unit: 'kg' },
  { itemA: 'Länge eines USB-Sticks', itemB: 'Länge einer Kreditkarte', valueA: 5, valueB: 8.5, unit: 'cm' },
  { itemA: 'Ziffern auf einer Uhr', itemB: 'Anzahl der Planeten', valueA: 12, valueB: 8, unit: 'Anzahl' },
  ];

var MAX_ERRORS  = 5;  // X-Fehler bis Runde verloren
  var WIN_ROUNDS  = 2;  // Punkte bis Spielgewinn
  var SHOW_RESULT_MS = 10000; // 10 Sek. Ergebnis zeigen

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
  function SchaetzenOderWissenInstance(container, ctx, onEnd) {
    this.container    = container;
    this.ctx          = ctx;
    this.onEnd        = onEnd;
    this.dead         = false;

    // Match-Ebene (3 Punkte = Spielgewinn)
    this.p1RoundWins  = 0;  // gewonnene Runden (= Punkte)
    this.p2RoundWins  = 0;

    // Runden-Ebene
    this.roundNum     = 1;
    this.p1Errors     = 0;  // Fehler in aktueller Runde
    this.p2Errors     = 0;

    // Fragen-Ebene
    this.questionNum  = 1;
    this._deck        = [];
    this.currentQ     = null;
    this.p1Answer     = null; // 'A' | 'B' | null
    this.p2Answer     = null;

    this.phase        = 'idle';
    this.timers       = [];
    this._resultTimer = null;

    this._buildUI();
    this._setupNet();
    this._startRound();
  }

  SchaetzenOderWissenInstance.prototype = {

    // ─── UI AUFBAUEN ────────────────────────────────────────
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';

      var root = document.createElement('div');
      root.id = 'sow-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:center;',
        'position:relative;overflow:hidden;padding:14px 16px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        // Deko-Ring
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;',
        'top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>',

        // Obere Leiste: Runden-Punkte + Fehler-Leben
        '<div id="sow-header" style="display:flex;align-items:center;justify-content:space-between;',
        'width:100%;max-width:520px;margin-bottom:12px;gap:8px;">',

          // P1 Seite
          '<div style="display:flex;flex-direction:column;align-items:flex-start;gap:4px;flex:1;">',
            '<div id="sow-n1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;',
            'letter-spacing:.3em;color:#3ab4f5;text-transform:uppercase;"></div>',
            '<div id="sow-err1" style="display:flex;gap:4px;"></div>',
          '</div>',

          // Mitte: Runden-Punkte
          '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;">',
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.3em;',
            'color:#c0c0d8;text-transform:uppercase;">Punkte</div>',
            '<div id="sow-score" style="font-family:\'Bebas Neue\',sans-serif;font-size:32px;',
            'color:#f0c030;letter-spacing:.1em;line-height:1;">0 : 0</div>',
            '<div id="sow-round-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;',
            'letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;">Runde 1</div>',
          '</div>',

          // P2 Seite
          '<div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex:1;">',
            '<div id="sow-n2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;',
            'letter-spacing:.3em;color:#f55a3a;text-transform:uppercase;"></div>',
            '<div id="sow-err2" style="display:flex;gap:4px;"></div>',
          '</div>',

        '</div>',

        // Status
        '<div id="sow-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;',
        'letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:28px;',
        'margin-bottom:10px;text-align:center;transition:color .2s;"></div>',

        // Start-Button (nur Host)
        '<button id="sow-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';',
        'margin-bottom:16px;background:#f0c030;border:none;color:#000;',
        'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;',
        'padding:12px 40px;cursor:pointer;',
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));',
        '">RUNDE STARTEN</button>',

        // Fragen-Karte
        '<div id="sow-card" style="display:none;width:100%;max-width:480px;margin-bottom:12px;">',
          // Unit-Label
          '<div id="sow-unit" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;',
          'letter-spacing:.3em;color:#c0c0d8;text-transform:uppercase;text-align:center;margin-bottom:8px;"></div>',

          // A vs B Buttons
          '<div style="display:grid;grid-template-columns:1fr auto 1fr;gap:10px;align-items:stretch;">',

            // Option A
            '<button id="sow-btn-a" style="',
            'background:linear-gradient(135deg,rgba(58,180,245,.08),rgba(58,180,245,.03));',
            'border:2px solid #3ab4f5;color:#f0ede8;',
            'font-family:\'Bebas Neue\',sans-serif;',
            'padding:18px 12px;cursor:pointer;text-align:center;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));',
            'transition:background .12s,box-shadow .12s,opacity .2s;',
            'display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;min-height:90px;',
            '">',
              '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.3em;color:#3ab4f5;">OPTION A</div>',
              '<div id="sow-label-a" style="font-size:clamp(14px,2.5vw,20px);letter-spacing:.05em;line-height:1.3;word-break:break-word;"></div>',
            '</button>',

            // VS
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:20px;color:#2a2a40;',
            'text-align:center;">VS</div>',

            // Option B
            '<button id="sow-btn-b" style="',
            'background:linear-gradient(135deg,rgba(245,90,58,.08),rgba(245,90,58,.03));',
            'border:2px solid #f55a3a;color:#f0ede8;',
            'font-family:\'Bebas Neue\',sans-serif;',
            'padding:18px 12px;cursor:pointer;text-align:center;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));',
            'transition:background .12s,box-shadow .12s,opacity .2s;',
            'display:flex;flex-direction:column;gap:4px;align-items:center;justify-content:center;min-height:90px;',
            '">',
              '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.3em;color:#f55a3a;">OPTION B</div>',
              '<div id="sow-label-b" style="font-size:clamp(14px,2.5vw,20px);letter-spacing:.05em;line-height:1.3;word-break:break-word;"></div>',
            '</button>',

          '</div>',
        '</div>',

        // Warte-Status
        '<div id="sow-wait" style="display:none;font-family:\'Barlow Condensed\',sans-serif;',
        'font-size:13px;letter-spacing:.15em;color:#c0c0d8;text-transform:uppercase;',
        'text-align:center;margin-bottom:8px;"></div>',

        // Ergebnis-Flash (inline, kein Overlay — für flüssigen Ablauf)
        '<div id="sow-result-flash" style="display:none;width:100%;max-width:480px;',
        'background:rgba(6,6,16,.96);border:1px solid rgba(240,192,48,.15);',
        'padding:16px;text-align:center;margin-bottom:10px;',
        'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));',
        '">',
          '<div id="sow-flash-ico" style="font-size:32px;margin-bottom:4px;"></div>',
          '<div id="sow-flash-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(20px,5vw,32px);',
          'color:#f0c030;letter-spacing:.06em;margin-bottom:4px;"></div>',
          '<div id="sow-flash-vals" style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;',
          'color:#a0a0bc;letter-spacing:.05em;"></div>',
          '<div id="sow-flash-p1ans" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;',
          'color:#c0c0d8;margin-top:4px;"></div>',
        '</div>',

        // Rundenende-Overlay
        '<div id="sow-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.95);',
        'display:none;flex-direction:column;align-items:center;justify-content:center;',
        'gap:14px;text-align:center;padding:28px;">',
          '<div id="sow-ov-ico" style="font-size:54px;"></div>',
          '<div id="sow-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(28px,7vw,52px);',
          'color:#f0c030;letter-spacing:.05em;"></div>',
          '<div id="sow-ov-sub" style="font-family:\'Barlow Condensed\',sans-serif;font-size:16px;',
          'color:#a0a0bc;max-width:360px;"></div>',
          '<div id="sow-ov-score" style="font-family:\'Bebas Neue\',sans-serif;font-size:42px;',
          'color:#f0c030;letter-spacing:.1em;"></div>',
          '<button id="sow-ov-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;',
          'font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;',
          'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));',
          '">NÄCHSTE RUNDE →</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);

      // Namen setzen
      document.getElementById('sow-n1').textContent = this.ctx.p1Name;
      document.getElementById('sow-n2').textContent = this.ctx.p2Name;

      this._updateHeader();

      // Start-Button
      var startBtn = document.getElementById('sow-start-btn');
      if (this.ctx.isHost) {
        startBtn.addEventListener('click', function() {
          startBtn.style.display = 'none';
          self.ctx.network.send('sow_start_countdown', {});
          self._countdown();
        });
      }

      // Vote-Buttons
      document.getElementById('sow-btn-a').addEventListener('click', function() { self._selectAnswer('A'); });
      document.getElementById('sow-btn-b').addEventListener('click', function() { self._selectAnswer('B'); });
    },

    // ─── NETZWERK ───────────────────────────────────────────
    _setupNet: function() {
      var self = this;

      this.ctx.network.on('sow_start_countdown', function() {
        if (!self.ctx.isHost) self._countdown();
      });

      this.ctx.network.on('sow_sync_question', function(msg) {
        if (self.ctx.isHost) return;
        self.currentQ = { itemA: msg.itemA, itemB: msg.itemB, valueA: msg.valueA, valueB: msg.valueB, unit: msg.unit };
        self._showQuestion();
      });

      this.ctx.network.on('sow_answer', function(msg) {
        if (!self.ctx.isHost) return;
        if (msg.player === 'p2') {
          self.p2Answer = msg.answer;
          self._updateWait();
          self._tryResolve();
        }
      });

      this.ctx.network.on('sow_resolve', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Answer    = msg.p1Answer;
        self.p2Answer    = msg.p2Answer;
        self.p1Errors    = msg.p1Errors;
        self.p2Errors    = msg.p2Errors;
        self.p1RoundWins = msg.p1RoundWins;
        self.p2RoundWins = msg.p2RoundWins;
        self._showFlashResult(msg.correctSide, msg.valueA, msg.valueB, msg.unit, msg.roundOver, msg.roundWinner, msg.gameOver);
      });

      this.ctx.network.on('sow_next_question', function(msg) {
        if (self.ctx.isHost) return;
        self.currentQ = { itemA: msg.itemA, itemB: msg.itemB, valueA: msg.valueA, valueB: msg.valueB, unit: msg.unit };
        self._showQuestion();
      });

      this.ctx.network.on('sow_next_round', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) { self._finish(); return; }
        self.p1Errors = 0; self.p2Errors = 0;
        self.roundNum = msg.roundNum;
        self._updateHeader();
        document.getElementById('sow-ov').style.display = 'none';
        self._countdown();
      });
    },

    // ─── RUNDE STARTEN ──────────────────────────────────────
    _startRound: function() {
      if (this.dead) return;
      this.phase    = 'idle';
      this.p1Errors = 0;
      this.p2Errors = 0;
      this.p1Answer = null;
      this.p2Answer = null;
      this._clearDeck();

      document.getElementById('sow-card').style.display = 'none';
      document.getElementById('sow-wait').style.display = 'none';
      document.getElementById('sow-result-flash').style.display = 'none';
      this._setStatus('Bereit?', '#c0c0d8', '18px');
      this._updateHeader();

      if (this.ctx.isHost) {
        var btn = document.getElementById('sow-start-btn');
        if (btn) btn.style.display = 'block';
      }
    },

    // ─── DECK ───────────────────────────────────────────────
    _clearDeck: function() {
      // Nur beim allerersten Aufruf oder wenn alle Fragen verbraucht sind: komplett neu mischen
      if (!this._usedIndices) this._usedIndices = [];

      // Alle noch nicht gezeigten Fragen ermitteln
      var available = QUESTIONS.map(function(_, i) { return i; })
        .filter(function(i) { return this._usedIndices.indexOf(i) === -1; }, this);

      // Wenn alle Fragen verbraucht: Pool zurücksetzen
      if (available.length === 0) {
        this._usedIndices = [];
        available = QUESTIONS.map(function(_, i) { return i; });
      }

      // Fisher-Yates mischen
      for (var i = available.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = available[i]; available[i] = available[j]; available[j] = tmp;
      }

      // Letzte Frage nicht als erste zeigen
      var lastQ = this.currentQ;
      if (lastQ && available.length > 1 && QUESTIONS[available[0]] === lastQ) {
        var sw = available[0]; available[0] = available[1]; available[1] = sw;
      }

      this._deck = available;
    },

    _nextQuestion: function() {
      if (this._deck.length === 0) this._clearDeck();
      var idx = this._deck.shift();
      if (!this._usedIndices) this._usedIndices = [];
      this._usedIndices.push(idx);
      this.currentQ = QUESTIONS[idx];
    },

    // ─── COUNTDOWN ──────────────────────────────────────────
    _countdown: function() {
      if (this.dead) return;
      var self = this;
      this.phase = 'countdown';
      document.getElementById('sow-card').style.display = 'none';
      document.getElementById('sow-result-flash').style.display = 'none';
      document.getElementById('sow-wait').style.display = 'none';

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
          if (self.ctx.isHost) {
            self._nextQuestion();
            self._sendQuestion();
          }
        }
      };
      tick();
    },

    // ─── FRAGE SENDEN/ANZEIGEN ──────────────────────────────
    _sendQuestion: function() {
      if (!this.ctx.isHost || !this.currentQ) return;
      this.p1Answer = null;
      this.p2Answer = null;
      this.ctx.network.send('sow_sync_question', {
        itemA: this.currentQ.itemA, itemB: this.currentQ.itemB,
        valueA: this.currentQ.valueA, valueB: this.currentQ.valueB,
        unit: this.currentQ.unit
      });
      this._showQuestion();
    },

    _showQuestion: function() {
      this.phase    = 'answering';
      this.p1Answer = null;
      this.p2Answer = null;

      var q = this.currentQ;
      document.getElementById('sow-label-a').textContent = q.itemA;
      document.getElementById('sow-label-b').textContent = q.itemB;
      document.getElementById('sow-unit').textContent    = q.unit;

      // Buttons zurücksetzen
      var btnA = document.getElementById('sow-btn-a');
      var btnB = document.getElementById('sow-btn-b');
      btnA.disabled = false; btnB.disabled = false;
      btnA.style.opacity = '1'; btnB.style.opacity = '1';
      btnA.style.boxShadow = ''; btnB.style.boxShadow = '';
      btnA.style.background = 'linear-gradient(135deg,rgba(58,180,245,.08),rgba(58,180,245,.03))';
      btnB.style.background = 'linear-gradient(135deg,rgba(245,90,58,.08),rgba(245,90,58,.03))';

      document.getElementById('sow-result-flash').style.display = 'none';
      document.getElementById('sow-card').style.display = 'block';
      document.getElementById('sow-wait').style.display = 'block';
      this._updateWait();
      this._setStatus('WAS HAT MEHR?', '#f0c030', '18px');
      beep(550, 0.08, 'sine', 0.1);
    },

    // ─── ANTWORT WÄHLEN ─────────────────────────────────────
    _selectAnswer: function(choice) {
      if (this.phase !== 'answering' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (me === 'p1' && this.p1Answer !== null) return;
      if (me === 'p2' && this.p2Answer !== null) return;

      var btnA = document.getElementById('sow-btn-a');
      var btnB = document.getElementById('sow-btn-b');
      btnA.disabled = true; btnB.disabled = true;

      if (choice === 'A') {
        btnA.style.boxShadow = '0 0 20px rgba(58,180,245,.5)';
        btnA.style.background = 'linear-gradient(135deg,rgba(58,180,245,.2),rgba(58,180,245,.08))';
        btnB.style.opacity = '0.3';
      } else {
        btnB.style.boxShadow = '0 0 20px rgba(245,90,58,.5)';
        btnB.style.background = 'linear-gradient(135deg,rgba(245,90,58,.2),rgba(245,90,58,.08))';
        btnA.style.opacity = '0.3';
      }
      beep(660, 0.07, 'sine', 0.14);

      if (me === 'p1') {
        this.p1Answer = choice;
        this._updateWait();
        this._tryResolve();
      } else {
        this.p2Answer = choice;
        this._updateWait();
        this.ctx.network.send('sow_answer', { player: 'p2', answer: choice });
      }
    },

    // ─── BEIDE GEANTWORTET? → AUFLÖSEN ─────────────────────
    _tryResolve: function() {
      if (!this.ctx.isHost) return;
      if (this.p1Answer !== null && this.p2Answer !== null) {
        this._resolveQuestion();
      }
    },

    _resolveQuestion: function() {
      if (this.phase !== 'answering' || this.dead) return;
      this.phase = 'resolving';

      var q           = this.currentQ;
      var correctSide = q.valueA >= q.valueB ? 'A' : 'B'; // >= bedeutet: bei Gleichstand zählt A als richtig

      // Fehler zählen
      if (this.p1Answer !== correctSide) this.p1Errors++;
      if (this.p2Answer !== correctSide) this.p2Errors++;

      // Runde vorbei?
      var p1Lost     = this.p1Errors >= MAX_ERRORS;
      var p2Lost     = this.p2Errors >= MAX_ERRORS;
      var roundOver  = p1Lost || p2Lost;
      var roundWinner = null;
      var gameOver   = false;

      if (roundOver) {
        // Beide gleichzeitig voll: Weiterspielen bis einer einen Fehler mehr hat
        if (p1Lost && p2Lost) {
          roundWinner = 'draw';
          roundOver = false; // Runde läuft weiter!
        } else if (p1Lost) {
          roundWinner = 'p2';
          this.p2RoundWins++;
        } else {
          roundWinner = 'p1';
          this.p1RoundWins++;
        }
        gameOver = this.p1RoundWins >= WIN_ROUNDS || this.p2RoundWins >= WIN_ROUNDS;
      }

      // Paket an Gast
      this.ctx.network.send('sow_resolve', {
        p1Answer: this.p1Answer, p2Answer: this.p2Answer,
        correctSide: correctSide,
        valueA: q.valueA, valueB: q.valueB, unit: q.unit,
        p1Errors: this.p1Errors, p2Errors: this.p2Errors,
        p1RoundWins: this.p1RoundWins, p2RoundWins: this.p2RoundWins,
        roundOver: roundOver, roundWinner: roundWinner, gameOver: gameOver
      });

      this._showFlashResult(correctSide, q.valueA, q.valueB, q.unit, roundOver, roundWinner, gameOver);
    },

    // ─── ERGEBNIS-FLASH (inline, 5 Sek.) ───────────────────
    _showFlashResult: function(correctSide, valueA, valueB, unit, roundOver, roundWinner, gameOver) {
      var self = this;
      var q    = this.currentQ;

      this._updateHeader();

      var p1Right = this.p1Answer === correctSide;
      var p2Right = this.p2Answer === correctSide;

      // Flash-Inhalt
      var winnerLabel = correctSide === 'A' ? esc(q.itemA) : esc(q.itemB);
      var winnerVal   = correctSide === 'A' ? valueA : valueB;
      var loserLabel  = correctSide === 'A' ? esc(q.itemB) : esc(q.itemA);
      var loserVal    = correctSide === 'A' ? valueB : valueA;

      document.getElementById('sow-flash-ico').textContent = '📊';
      document.getElementById('sow-flash-ttl').textContent = winnerLabel + ' hat mehr!';
      document.getElementById('sow-flash-vals').innerHTML  =
        '<span style="color:#2af0a0;">' + esc(q.itemA) + ': ' + valueA + '</span>' +
        ' &nbsp;·&nbsp; ' +
        '<span style="color:#f55a3a;">' + esc(q.itemB) + ': ' + valueB + '</span>' +
        ' &nbsp;<span style="color:#c0c0d8;">(' + esc(unit) + ')</span>';
      document.getElementById('sow-flash-p1ans').innerHTML =
        '<span style="color:#3ab4f5;">' + esc(this.ctx.p1Name) + ': ' + (this.p1Answer || '—') + (p1Right ? ' ✓' : ' ✗') + '</span>' +
        ' &nbsp;·&nbsp; ' +
        '<span style="color:#f55a3a;">' + esc(this.ctx.p2Name) + ': ' + (this.p2Answer || '—') + (p2Right ? ' ✓' : ' ✗') + '</span>';

      document.getElementById('sow-card').style.display         = 'none';
      document.getElementById('sow-wait').style.display         = 'none';
      document.getElementById('sow-result-flash').style.display = 'block';

      beep(p1Right || p2Right ? 660 : 220, 0.15, 'sine', 0.12);

      if (roundOver) {
        // Kurz Flash zeigen, dann Rundenende-Overlay
        this._resultTimer = setTimeout(function() {
          if (self.dead) return;
          document.getElementById('sow-result-flash').style.display = 'none';
          self._showRoundEnd(roundWinner, gameOver);
        }, SHOW_RESULT_MS);
      } else if (roundWinner === 'draw') {
        // Gleichstand bei 5 Fehlern — Flash zeigen mit Hinweis, dann weiterspielen
        document.getElementById('sow-flash-ttl').textContent += ' — GLEICHSTAND! Weiterspielen…';
        this._resultTimer = setTimeout(function() {
          if (self.dead) return;
          if (self.ctx.isHost) {
            self._nextQuestion();
            self.ctx.network.send('sow_next_question', {
              itemA: self.currentQ.itemA, itemB: self.currentQ.itemB,
              valueA: self.currentQ.valueA, valueB: self.currentQ.valueB,
              unit: self.currentQ.unit
            });
            self._showQuestion();
          } else {
            document.getElementById('sow-result-flash').style.display = 'none';
            self._setStatus('Gleichstand! Nächste Frage…', '#f0c030', '16px');
          }
        }, SHOW_RESULT_MS);
      } else {
        // Nächste Frage nach 5 Sek.
        this._resultTimer = setTimeout(function() {
          if (self.dead) return;
          if (self.ctx.isHost) {
            self._nextQuestion();
            self.ctx.network.send('sow_next_question', {
              itemA: self.currentQ.itemA, itemB: self.currentQ.itemB,
              valueA: self.currentQ.valueA, valueB: self.currentQ.valueB,
              unit: self.currentQ.unit
            });
            self._showQuestion();
          } else {
            // Gast wartet auf sow_next_question
            document.getElementById('sow-result-flash').style.display = 'none';
            self._setStatus('Nächste Frage...', '#c0c0d8', '16px');
          }
        }, SHOW_RESULT_MS);
      }
    },

    // ─── RUNDENENDE-OVERLAY ──────────────────────────────────
    _showRoundEnd: function(roundWinner, gameOver) {
      var self = this;
      var ov   = document.getElementById('sow-ov');

      if (roundWinner === 'draw') {
        document.getElementById('sow-ov-ico').textContent = '🤝';
        document.getElementById('sow-ov-ttl').textContent = 'UNENTSCHIEDEN!';
        document.getElementById('sow-ov-ttl').style.color = '#aaaacc';
        document.getElementById('sow-ov-sub').textContent = 'Beide hatten gleichzeitig 5 Fehler. Keine Punkte — Runde wird wiederholt!';
      } else {
        var winName = roundWinner === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
        var winColor = roundWinner === 'p1' ? '#3ab4f5' : '#f55a3a';
        document.getElementById('sow-ov-ico').textContent = gameOver ? '🏆' : '🎯';
        document.getElementById('sow-ov-ttl').textContent = esc(winName) + (gameOver ? ' GEWINNT!' : ' gewinnt die Runde!');
        document.getElementById('sow-ov-ttl').style.color = winColor;
        document.getElementById('sow-ov-sub').textContent = gameOver
          ? 'Das Spiel ist beendet!'
          : 'Der Gegner hatte 5 Fehler. Nächste Runde!';
      }

      document.getElementById('sow-ov-score').textContent = this.p1RoundWins + ' : ' + this.p2RoundWins;
      this._updateHeader();

      var btn = document.getElementById('sow-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : (roundWinner === 'draw' ? 'NOCHMAL SPIELEN →' : 'NÄCHSTE RUNDE →');

      ov.style.display = 'flex';
      beep(gameOver ? 880 : 440, 0.3, 'sine', 0.18);

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          if (gameOver) {
            self.ctx.network.send('sow_next_round', { gameOver: true });
            self._finish();
            return;
          }
          // Runde zurücksetzen (bei Draw keine Punkteänderung)
          self.p1Errors = 0; self.p2Errors = 0;
          if (roundWinner !== 'draw') self.roundNum++;
          self._clearDeck();
          self.ctx.network.send('sow_next_round', { gameOver: false, roundNum: self.roundNum });
          ov.style.display = 'none';
          self._countdown();
        };
      } else {
        btn.style.display = 'none';
      }
    },

    // ─── HEADER AKTUALISIEREN ───────────────────────────────
    _updateHeader: function() {
      // Score
      var sc = document.getElementById('sow-score');
      if (sc) sc.textContent = this.p1RoundWins + ' : ' + this.p2RoundWins;
      var rl = document.getElementById('sow-round-label');
      if (rl) rl.textContent = 'Runde ' + this.roundNum + '  ·  Ziel: ' + WIN_ROUNDS;

      // Fehler-X-Symbole (Leben)
      this._renderErrors('sow-err1', this.p1Errors, '#3ab4f5');
      this._renderErrors('sow-err2', this.p2Errors, '#f55a3a');
    },

    _renderErrors: function(elId, count, color) {
      var el = document.getElementById(elId);
      if (!el) return;
      var html = '';
      for (var i = 0; i < MAX_ERRORS; i++) {
        if (i < count) {
          html += '<span style="font-family:\'Barlow Condensed\',sans-serif;font-size:16px;color:' + color + ';opacity:.9;">✗</span>';
        } else {
          html += '<span style="font-family:\'Barlow Condensed\',sans-serif;font-size:16px;color:rgba(255,255,255,.1);">✗</span>';
        }
      }
      el.innerHTML = html;
    },

    // ─── WARTE-ANZEIGE ──────────────────────────────────────
    _updateWait: function() {
      var el = document.getElementById('sow-wait');
      if (!el) return;
      var p1 = this.p1Answer !== null ? '✓' : '…';
      var p2 = this.p2Answer !== null ? '✓' : '…';
      el.textContent = this.ctx.p1Name + ': ' + p1 + '   |   ' + this.ctx.p2Name + ': ' + p2;
    },

    // ─── STATUS ─────────────────────────────────────────────
    _setStatus: function(t, c, s) {
      var el = document.getElementById('sow-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    // ─── FINISH ─────────────────────────────────────────────
    _finish: function() {
      this.dead = true;
      var w = this.p1RoundWins >= WIN_ROUNDS ? 'p1' : (this.p2RoundWins >= WIN_ROUNDS ? 'p2' : 'p1');
      this.onEnd({ winner: w, details: this.p1RoundWins + ' : ' + this.p2RoundWins + ' Runden' });
    },

    // ─── DESTROY ────────────────────────────────────────────
    destroy: function() {
      this.dead = true;
      this.timers.forEach(clearTimeout);
      if (this._resultTimer) clearTimeout(this._resultTimer);
      this.ctx.network.off('sow_start_countdown');
      this.ctx.network.off('sow_sync_question');
      this.ctx.network.off('sow_answer');
      this.ctx.network.off('sow_resolve');
      this.ctx.network.off('sow_next_question');
      this.ctx.network.off('sow_next_round');
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTRIERUNG
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id: 'schaetzen-oder-wissen',
    name: 'Schätzen oder Wissen',
    description: 'Zwei Dinge werden verglichen — welches hat mehr? Wer zuerst 5 falsche Antworten hat, verliert die Runde. Wer 2 Runden gewinnt, gewinnt das Spiel!',
    init: function(container, ctx, onEnd) { this._instance = new SchaetzenOderWissenInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
