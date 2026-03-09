(function () {

  // ═══════════════════════════════════════════════════════════
  // KATEGORIEN-DATENBANK
  // ═══════════════════════════════════════════════════════════
  var CATEGORIES = [
    {
      label: 'James Bond Filme',
      dir:   ['Früher erschienen', 'Später erschienen'],
      anchor: { t: 'Goldfinger', v: 1964 },
      items: [
        { t: 'Dr. No',              v: 1962 },
        { t: 'Thunderball',         v: 1965 },
        { t: 'The Spy Who Loved Me',v: 1977 },
        { t: 'GoldenEye',           v: 1995 },
        { t: 'Casino Royale',       v: 2006 },
        { t: 'Skyfall',             v: 2012 },
        { t: 'No Time to Die',      v: 2021 },
      ]
    },
    {
      label: 'Tiergröße (Gewicht)',
      dir:   ['Leichter', 'Schwerer'],
      anchor: { t: 'Schaf', v: 70 },
      items: [
        { t: 'Maus',     v: 0.02 },
        { t: 'Katze',    v: 4    },
        { t: 'Hund',     v: 30   },
        { t: 'Löwe',     v: 190  },
        { t: 'Pferd',    v: 600  },
        { t: 'Nilpferd', v: 3000 },
        { t: 'Elefant',  v: 6000 },
      ]
    },
    {
      label: 'Planeten (Entfernung zur Sonne)',
      dir:   ['Näher zur Sonne', 'Weiter entfernt'],
      anchor: { t: 'Erde', v: 3 },
      items: [
        { t: 'Merkur',  v: 1 },
        { t: 'Venus',   v: 2 },
        { t: 'Mars',    v: 4 },
        { t: 'Jupiter', v: 5 },
        { t: 'Saturn',  v: 6 },
        { t: 'Uranus',  v: 7 },
        { t: 'Neptun',  v: 8 },
      ]
    },
    {
      label: 'Berge nach Höhe',
      dir:   ['Niedriger', 'Höher'],
      anchor: { t: 'Mont Blanc', v: 4808 },
      items: [
        { t: 'Zugspitze',      v: 2962 },
        { t: 'Kilimandscharo', v: 5895 },
        { t: 'Elbrus',         v: 5642 },
        { t: 'Denali',         v: 6190 },
        { t: 'Aconcagua',      v: 6961 },
        { t: 'K2',             v: 8611 },
        { t: 'Mt. Everest',    v: 8849 },
      ]
    },
    {
      label: 'Tech-Erfindungen',
      dir:   ['Früher erfunden', 'Später erfunden'],
      anchor: { t: 'Telefon', v: 1876 },
      items: [
        { t: 'Glühbirne',    v: 1879 },
        { t: 'Radio',        v: 1895 },
        { t: 'Fernseher',    v: 1927 },
        { t: 'Transistor',   v: 1947 },
        { t: 'Internet',     v: 1969 },
        { t: 'Mobiltelefon', v: 1983 },
        { t: 'Smartphone',   v: 2007 },
      ]
    },
{
  label: 'Disney-Filme (Erscheinungsjahr)',
  dir: ['Früher erschienen', 'Später erschienen'],
  anchor: { t: 'Der König der Löwen', v: 1994 },
  items: [
    { t: 'Schneewittchen', v: 1937 },
    { t: 'Bambi', v: 1942 },
    { t: 'Das Dschungelbuch', v: 1967 },
    { t: 'Arielle', v: 1989 },
    { t: 'Findet Nemo', v: 2003 },
    { t: 'Frozen', v: 2013 },
    { t: 'Encanto', v: 2021 }
  ]
},
{
  label: 'Länder nach Landfläche',
  dir: ['Kleiner', 'Größer'],
  anchor: { t: 'Deutschland', v: 357022 },
  items: [
    { t: 'Monaco', v: 2 },
    { t: 'Island', v: 103000 },
    { t: 'Frankreich', v: 643801 },
    { t: 'Indien', v: 3287263 },
    { t: 'USA', v: 9833517 },
    { t: 'Kanada', v: 9984670 },
    { t: 'Russland', v: 17098242 }
  ]
},
{
  label: 'Geschwindigkeit (km/h)',
  dir: ['Langsamer', 'Schneller'],
  anchor: { t: 'Gepard', v: 110 },
  items: [
    { t: 'Schnecke', v: 0.05 },
    { t: 'Mensch (Sprint)', v: 44 },
    { t: 'Wanderfalke (Sturzflug)', v: 320 },
    { t: 'Formel 1 Auto', v: 370 },
    { t: 'Maglev-Zug', v: 600 },
    { t: 'Passagierflugzeug', v: 900 },
    { t: 'Schallgeschwindigkeit', v: 1235 }
  ]
},
{
  label: 'Harry Potter Bücher (Erscheinungsjahr)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Der Feuerkelch', v: 2000 },
  items: [
    { t: 'Der Stein der Weisen', v: 1997 },
    { t: 'Die Kammer des Schreckens', v: 1998 },
    { t: 'Der Gefangene von Askaban', v: 1999 },
    { t: 'Der Orden des Phönix', v: 2003 },
    { t: 'Der Halbblutprinz', v: 2005 },
    { t: 'Die Heiligtümer des Todes', v: 2007 }
  ]
},
{
  label: 'Lebensmittel (Kalorien pro 100g)',
  dir: ['Weniger Kalorien', 'Mehr Kalorien'],
  anchor: { t: 'Ei', v: 155 },
  items: [
    { t: 'Gurke', v: 15 },
    { t: 'Apfel', v: 52 },
    { t: 'Hähnchenbrust', v: 165 },
    { t: 'Pasta (gekocht)', v: 130 },
    { t: 'Käse (Gouda)', v: 350 },
    { t: 'Vollmilchschokolade', v: 530 },
    { t: 'Walnüsse', v: 650 }
  ]
},
{
  label: 'Bevölkerung (Staaten)',
  dir: ['Weniger Einwohner', 'Mehr Einwohner'],
  anchor: { t: 'Spanien', v: 47000000 },
  items: [
    { t: 'Vatikanstadt', v: 800 },
    { t: 'Luxemburg', v: 640000 },
    { t: 'Österreich', v: 9000000 },
    { t: 'Ägypten', v: 109000000 },
    { t: 'Brasilien', v: 214000000 },
    { t: 'Indien', v: 1408000000 },
    { t: 'China', v: 1412000000 }
  ]
},
{
  label: 'Historische Ereignisse',
  dir: ['Früher passiert', 'Später passiert'],
  anchor: { t: 'Französische Revolution', v: 1789 },
  items: [
    { t: 'Bau der Pyramiden', v: -2560 },
    { t: 'Untergang Pompejis', v: 79 },
    { t: 'Entdeckung Amerikas', v: 1492 },
    { t: 'Mauerfall', v: 1989 },
    { t: 'Erste Mondlandung', v: 1969 },
    { t: 'Titanic Untergang', v: 1912 },
    { t: 'Beginn Erster Weltkrieg', v: 1914 }
  ]
},
{
  label: 'Apple Produkte (Release)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'iPhone (Original)', v: 2007 },
  items: [
    { t: 'Apple I', v: 1976 },
    { t: 'Macintosh', v: 1984 },
    { t: 'iPod', v: 2001 },
    { t: 'MacBook Pro', v: 2006 },
    { t: 'iPad', v: 2010 },
    { t: 'Apple Watch', v: 2015 },
    { t: 'Vision Pro', v: 2024 }
  ]
},
{
  label: 'Star Wars Filme (Episode Chronologie)',
  dir: ['Früher in der Timeline', 'Später in der Timeline'],
  anchor: { t: 'Eine neue Hoffnung', v: 4 },
  items: [
    { t: 'Die dunkle Bedrohung', v: 1 },
    { t: 'Angriff der Klonkrieger', v: 2 },
    { t: 'Die Rache der Sith', v: 3 },
    { t: 'Das Imperium schlägt zurück', v: 5 },
    { t: 'Die Rückkehr der Jedi-Ritter', v: 6 },
    { t: 'Das Erwachen der Macht', v: 7 },
    { t: 'Der Aufstieg Skywalkers', v: 9 }
  ]
},
{
  label: 'Elemente (Ordnungszahl)',
  dir: ['Niedriger', 'Höher'],
  anchor: { t: 'Kohlenstoff', v: 6 },
  items: [
    { t: 'Wasserstoff', v: 1 },
    { t: 'Helium', v: 2 },
    { t: 'Sauerstoff', v: 8 },
    { t: 'Aluminium', v: 13 },
    { t: 'Eisen', v: 26 },
    { t: 'Gold', v: 79 },
    { t: 'Uran', v: 92 }
  ]
},
{
  label: 'Durchschnittliche Lebensdauer (Tiere in Jahren)',
  dir: ['Kürzer', 'Länger'],
  anchor: { t: 'Hund', v: 12 },
  items: [
    { t: 'Eintagsfliege', v: 0.01 },
    { t: 'Hamster', v: 2 },
    { t: 'Kaninchen', v: 8 },
    { t: 'Pferd', v: 25 },
    { t: 'Elefant', v: 60 },
    { t: 'Riesenschildkröte', v: 150 },
    { t: 'Grönlandhai', v: 400 }
  ]
},
{
  label: 'Entfernung von Berlin (Luftlinie)',
  dir: ['Näher', 'Weiter weg'],
  anchor: { t: 'Paris', v: 878 },
  items: [
    { t: 'Potsdam', v: 27 },
    { t: 'Prag', v: 280 },
    { t: 'London', v: 930 },
    { t: 'Rom', v: 1180 },
    { t: 'Moskau', v: 1600 },
    { t: 'New York', v: 6380 },
    { t: 'Tokio', v: 8900 }
  ]
},
{
  label: 'Erfundenes Geld (Dagobert Duck Jahre)',
  dir: ['Älter', 'Jünger'],
  anchor: { t: 'LTB Erstausgabe', v: 1967 },
  items: [
    { t: 'Micky Maus Comic (USA)', v: 1930 },
    { t: 'Dagobert Duck (Debüt)', v: 1947 },
    { t: 'Donald Duck (Debüt)', v: 1934 },
    { t: 'Goofy (Debüt)', v: 1932 },
    { t: 'Tick, Trick und Track', v: 1937 },
    { t: 'Daniel Düsentrieb', v: 1952 }
  ]
},
{
  label: 'Sonnensystem (Größe/Durchmesser)',
  dir: ['Kleiner', 'Größer'],
  anchor: { t: 'Erde', v: 12742 },
  items: [
    { t: 'Mond', v: 3474 },
    { t: 'Pluto', v: 2376 },
    { t: 'Mars', v: 6779 },
    { t: 'Neptun', v: 49244 },
    { t: 'Saturn', v: 116460 },
    { t: 'Jupiter', v: 139820 },
    { t: 'Sonne', v: 1392700 }
  ]
},
{
  label: 'Hunderassen (Schulterhöhe)',
  dir: ['Kleiner', 'Größer'],
  anchor: { t: 'Beagle', v: 35 },
  items: [
    { t: 'Chihuahua', v: 18 },
    { t: 'Mops', v: 30 },
    { t: 'Golden Retriever', v: 58 },
    { t: 'Schäferhund', v: 62 },
    { t: 'Deutsche Dogge', v: 85 },
    { t: 'Irischer Wolfshund', v: 90 }
  ]
},
{
  label: 'Flüsse (Länge)',
  dir: ['Kürzer', 'Länger'],
  anchor: { t: 'Rhein', v: 1232 },
  items: [
    { t: 'Spree', v: 400 },
    { t: 'Elbe', v: 1094 },
    { t: 'Donau', v: 2850 },
    { t: 'Wolga', v: 3530 },
    { t: 'Mississippi', v: 3766 },
    { t: 'Amazonas', v: 6400 },
    { t: 'Nil', v: 6650 }
  ]
},
{
  label: 'Videospielkonsolen (Release)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'PlayStation 1', v: 1994 },
  items: [
    { t: 'Atari 2600', v: 1977 },
    { t: 'NES', v: 1983 },
    { t: 'Game Boy', v: 1989 },
    { t: 'Nintendo 64', v: 1996 },
    { t: 'PlayStation 2', v: 2000 },
    { t: 'Wii', v: 2006 },
    { t: 'Nintendo Switch', v: 2017 }
  ]
},
{
  label: 'Marvel Cinematic Universe (Filmreihenfolge)',
  dir: ['Früher erschienen', 'Später erschienen'],
  anchor: { t: 'The Avengers', v: 2012 },
  items: [
    { t: 'Iron Man', v: 2008 },
    { t: 'Thor', v: 2011 },
    { t: 'Guardians of the Galaxy', v: 2014 },
    { t: 'Doctor Strange', v: 2016 },
    { t: 'Black Panther', v: 2018 },
    { t: 'Avengers: Endgame', v: 2019 },
    { t: 'Spider-Man: No Way Home', v: 2021 }
  ]
},
{
  label: 'Metalle (Schmelzpunkt in °C)',
  dir: ['Niedriger', 'Höher'],
  anchor: { t: 'Silber', v: 961 },
  items: [
    { t: 'Quecksilber', v: -38 },
    { t: 'Zinn', v: 231 },
    { t: 'Blei', v: 327 },
    { t: 'Aluminium', v: 660 },
    { t: 'Gold', v: 1064 },
    { t: 'Eisen', v: 1538 },
    { t: 'Wolfram', v: 3422 }
  ]
},
{
  label: 'Social Media Plattformen (Gründung)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Facebook', v: 2004 },
  items: [
    { t: 'LinkedIn', v: 2002 },
    { t: 'YouTube', v: 2005 },
    { t: 'Twitter (X)', v: 2006 },
    { t: 'WhatsApp', v: 2009 },
    { t: 'Instagram', v: 2010 },
    { t: 'Snapchat', v: 2011 },
    { t: 'TikTok', v: 2016 }
  ]
},
{
  label: 'Berühmte Komponisten (Geburtsjahr)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Mozart', v: 1756 },
  items: [
    { t: 'Vivaldi', v: 1678 },
    { t: 'Bach', v: 1685 },
    { t: 'Beethoven', v: 1770 },
    { t: 'Chopin', v: 1810 },
    { t: 'Wagner', v: 1813 },
    { t: 'Brahms', v: 1833 },
    { t: 'Gershwin', v: 1898 }
  ]
},
{
  label: 'Olympische Sommerspiele (Jahr)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Barcelona', v: 1992 },
  items: [
    { t: 'Athen (Modern)', v: 1896 },
    { t: 'Berlin', v: 1936 },
    { t: 'München', v: 1972 },
    { t: 'Sidney', v: 2000 },
    { t: 'Peking', v: 2008 },
    { t: 'Rio de Janeiro', v: 2016 },
    { t: 'Tokio', v: 2021 }
  ]
},
{
  label: 'Fast-Food Ketten (Gründung)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'McDonalds', v: 1940 },
  items: [
    { t: 'Dunkin Donuts', v: 1950 },
    { t: 'Burger King', v: 1954 },
    { t: 'KFC', v: 1952 },
    { t: 'Pizza Hut', v: 1958 },
    { t: 'Subway', v: 1965 },
    { t: 'Starbucks', v: 1971 },
    { t: 'Chipotle', v: 1993 }
  ]
},
{
  label: 'Supermarkt-Preise (ca. Gewicht g)',
  dir: ['Leichter', 'Schwerer'],
  anchor: { t: 'Butter', v: 250 },
  items: [
    { t: 'Backpulver Päckchen', v: 16 },
    { t: 'Tafel Schokolade', v: 100 },
    { t: 'Packung Spaghetti', v: 500 },
    { t: 'Packung Mehl', v: 1000 },
    { t: 'Sack Kartoffeln (klein)', v: 2500 },
    { t: 'Kasten Bier', v: 17000 }
  ]
},
{
  label: 'Fußball-WM (Jahr)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Deutschland (Sommermärchen)', v: 2006 },
  items: [
    { t: 'Uruguay (Erste)', v: 1930 },
    { t: 'Bern (Deutschland Sieg)', v: 1954 },
    { t: 'Mexiko', v: 1970 },
    { t: 'Italien', v: 1990 },
    { t: 'Frankreich', v: 1998 },
    { t: 'Brasilien (7:1)', v: 2014 },
    { t: 'Katar', v: 2022 }
  ]
},
{
  label: 'Bibel-Ereignisse (Chronologisch)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Zehn Gebote (Moses)', v: 2 },
  items: [
    { t: 'Schöpfung', v: 0 },
    { t: 'Arche Noah', v: 1 },
    { t: 'David gegen Goliath', v: 3 },
    { t: 'Geburt Jesu', v: 4 },
    { t: 'Bergpredigt', v: 5 },
    { t: 'Auferstehung', v: 6 }
  ]
},
{
  label: 'Programmiersprachen (Jahr)',
  dir: ['Früher entwickelt', 'Später entwickelt'],
  anchor: { t: 'C++', v: 1985 },
  items: [
    { t: 'Fortran', v: 1957 },
    { t: 'C', v: 1972 },
    { t: 'Python', v: 1991 },
    { t: 'Java', v: 1995 },
    { t: 'JavaScript', v: 1995 },
    { t: 'Rust', v: 2010 },
    { t: 'Swift', v: 2014 }
  ]
},
{
  label: 'Deutsche Kanzler (Amtsantritt)',
  dir: ['Früher im Amt', 'Später im Amt'],
  anchor: { t: 'Helmut Kohl', v: 1982 },
  items: [
    { t: 'Konrad Adenauer', v: 1949 },
    { t: 'Willy Brandt', v: 1969 },
    { t: 'Helmut Schmidt', v: 1974 },
    { t: 'Gerhard Schröder', v: 1998 },
    { t: 'Angela Merkel', v: 2005 },
    { t: 'Olaf Scholz', v: 2021 }
  ]
},
{
  label: 'James Bond Darsteller (Erster Film)',
  dir: ['Früherer Bond', 'Späterer Bond'],
  anchor: { t: 'Roger Moore', v: 1973 },
  items: [
    { t: 'Sean Connery', v: 1962 },
    { t: 'George Lazenby', v: 1969 },
    { t: 'Timothy Dalton', v: 1987 },
    { t: 'Pierce Brosnan', v: 1995 },
    { t: 'Daniel Craig', v: 2006 }
  ]
},
{
  label: 'Dinosaurier (Zeitliches Auftreten)',
  dir: ['Früher (Trias)', 'Später (Kreide)'],
  anchor: { t: 'Stegosaurus', v: 150 }, // in Mio. Jahren vor heute
  items: [
    { t: 'Herrerasaurus', v: 230 },
    { t: 'Brachiosaurus', v: 153 },
    { t: 'Archaeopteryx', v: 145 },
    { t: 'Iguanodon', v: 125 },
    { t: 'Spinosaurus', v: 100 },
    { t: 'Triceratops', v: 68 },
    { t: 'Tyrannosaurus Rex', v: 66 }
  ]
},
{
  label: 'Bands (Gründungsjahr)',
  dir: ['Früher gegründet', 'Später gegründet'],
  anchor: { t: 'Queen', v: 1970 },
  items: [
    { t: 'The Beatles', v: 1960 },
    { t: 'The Rolling Stones', v: 1962 },
    { t: 'ABBA', v: 1972 },
    { t: 'Metallica', v: 1981 },
    { t: 'Nirvana', v: 1987 },
    { t: 'Linkin Park', v: 1996 },
    { t: 'Coldplay', v: 1996 }
  ]
},
{
  label: 'Währungen (Einführung)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Euro (Bargeld)', v: 2002 },
  items: [
    { t: 'Pfund Sterling', v: 1158 },
    { t: 'US-Dollar', v: 1792 },
    { t: 'Schweizer Franken', v: 1850 },
    { t: 'Deutsche Mark', v: 1948 },
    { t: 'Bitcoin', v: 2009 }
  ]
},
{
  label: 'Harry Potter Charaktere (Alter im 1. Teil)',
  dir: ['Jünger', 'Älter'],
  anchor: { t: 'Hermine Granger', v: 12 },
  items: [
    { t: 'Harry Potter', v: 11 },
    { t: 'Fred & George Weasley', v: 13 },
    { t: 'Severus Snape', v: 31 },
    { t: 'Rubeus Hagrid', v: 62 },
    { t: 'Albus Dumbledore', v: 115 },
    { t: 'Fast Kopfloser Nick', v: 510 }
  ]
},
{
  label: 'Pokémon Generationen (Release DE)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Rubin / Saphir', v: 2003 },
  items: [
    { t: 'Rot / Blau', v: 1999 },
    { t: 'Gold / Silber', v: 2001 },
    { t: 'Diamant / Perl', v: 2007 },
    { t: 'Schwarz / Weiß', v: 2011 },
    { t: 'X / Y', v: 2013 },
    { t: 'Sonne / Mond', v: 2016 },
    { t: 'Karmesin / Purpur', v: 2022 }
  ]
},
{
  label: 'Weltwunder (Baujahr/Fertigstellung)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Kolosseum', v: 80 },
  items: [
    { t: 'Cheops-Pyramide', v: -2560 },
    { t: 'Chichén Itzá', v: 600 },
    { t: 'Machu Picchu', v: 1450 },
    { t: 'Taj Mahal', v: 1648 },
    { t: 'Eiffelturm', v: 1889 },
    { t: 'Christusstatue (Rio)', v: 1931 },
    { t: 'Burj Khalifa', v: 2010 }
  ]
},
{
  label: 'Meere (Tiefe max. m)',
  dir: ['Flacher', 'Tiefer'],
  anchor: { t: 'Mittelmeer', v: 5267 },
  items: [
    { t: 'Ostsee', v: 459 },
    { t: 'Nordsee', v: 725 },
    { t: 'Schwarzes Meer', v: 2212 },
    { t: 'Arktischer Ozean', v: 5608 },
    { t: 'Indischer Ozean', v: 7290 },
    { t: 'Atlantischer Ozean', v: 8376 },
    { t: 'Pazifischer Ozean', v: 11034 }
  ]
},
{
  label: 'Flugzeuge (Erstflug)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Boeing 747 (Jumbo Jet)', v: 1969 },
  items: [
    { t: 'Wright Flyer', v: 1903 },
    { t: 'Spirit of St. Louis', v: 1927 },
    { t: 'Messerschmitt Me 262', v: 1942 },
    { t: 'Concorde', v: 1969 },
    { t: 'Airbus A380', v: 2005 },
    { t: 'SpaceX Starship', v: 2023 }
  ]
},
{
  label: 'Oscar Gewinner Bester Film (Jahr)',
  dir: ['Früher gewonnen', 'Später gewonnen'],
  anchor: { t: 'Titanic', v: 1998 },
  items: [
    { t: 'Vom Winde verweht', v: 1940 },
    { t: 'Der Pate', v: 1973 },
    { t: 'Forrest Gump', v: 1995 },
    { t: 'Der Herr der Ringe 3', v: 2004 },
    { t: 'Parasite', v: 2020 },
    { t: 'Oppenheimer', v: 2024 }
  ]
},
{
  label: 'Brettspiele (Erscheinungsjahr)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Monopoly', v: 1935 },
  items: [
    { t: 'Senet', v: -3500 },
    { t: 'Schach', v: 600 },
    { t: 'Mensch ärgere dich nicht', v: 1910 },
    { t: 'Scrabble', v: 1948 },
    { t: 'Risiko', v: 1957 },
    { t: 'Siedler von Catan', v: 1995 },
    { t: 'Carcassonne', v: 2000 }
  ]
},
{
  label: 'Städte (Einwohnerzahl DE)',
  dir: ['Kleiner', 'Größer'],
  anchor: { t: 'Köln', v: 1080000 },
  items: [
    { t: 'Gießen', v: 90000 },
    { t: 'Kiel', v: 246000 },
    { t: 'Bremen', v: 563000 },
    { t: 'Frankfurt am Main', v: 764000 },
    { t: 'München', v: 1488000 },
    { t: 'Hamburg', v: 1850000 },
    { t: 'Berlin', v: 3670000 }
  ]
},
{
  label: 'Süßigkeiten (Markteinführung)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Haribo Goldbären', v: 1922 },
  items: [
    { t: 'Milka Schokolade', v: 1901 },
    { t: 'Mars Riegel', v: 1932 },
    { t: 'Smarties', v: 1937 },
    { t: 'Nutella', v: 1964 },
    { t: 'Kinder Überraschung', v: 1974 },
    { t: 'Twix (Raider)', v: 1967 }
  ]
},
{
  label: 'Berühmte Brücken (Länge m)',
  dir: ['Kürzer', 'Länger'],
  anchor: { t: 'Golden Gate Bridge', v: 2737 },
  items: [
    { t: 'Rialtobrücke', v: 48 },
    { t: 'Tower Bridge', v: 244 },
    { t: 'Brooklyn Bridge', v: 1825 },
    { t: 'Öresundbrücke', v: 7845 },
    { t: 'Danyang-Kunshan (China)', v: 164800 }
  ]
},
{
  label: 'Planeten (Anzahl Monde)',
  dir: ['Weniger', 'Mehr'],
  anchor: { t: 'Mars', v: 2 },
  items: [
    { t: 'Merkur', v: 0 },
    { t: 'Erde', v: 1 },
    { t: 'Neptun', v: 14 },
    { t: 'Uranus', v: 27 },
    { t: 'Jupiter', v: 95 },
    { t: 'Saturn', v: 146 }
  ]
},
{
  label: 'Edelsteine (Härte nach Mohs)',
  dir: ['Weicher', 'Härter'],
  anchor: { t: 'Quarz', v: 7 },
  items: [
    { t: 'Talk', v: 1 },
    { t: 'Gips', v: 2 },
    { t: 'Calcit', v: 3 },
    { t: 'Apatit', v: 5 },
    { t: 'Topas', v: 8 },
    { t: 'Saphir', v: 9 },
    { t: 'Diamant', v: 10 }
  ]
},
{
  label: 'Explosionskraft (TNT Äquivalent)',
  dir: ['Schwächer', 'Stärker'],
  anchor: { t: 'Hiroshima Bombe', v: 15000 }, // in Tonnen TNT
  items: [
    { t: 'Handgranate', v: 0.0001 },
    { t: 'MOAB (stärkste konventionelle)', v: 11 },
    { t: 'Nagasaki Bombe', v: 21000 },
    { t: 'Tsar Bombe (größte H-Bombe)', v: 50000000 },
    { t: 'Chicxulub Asteroid (Dino-Killer)', v: 100000000000 }
  ]
},
{
  label: 'Speichermedien (Kapazität ca.)',
  dir: ['Weniger Platz', 'Mehr Platz'],
  anchor: { t: 'CD-ROM', v: 700 }, // in MB
  items: [
    { t: 'Lochkarte', v: 0.0001 },
    { t: 'Disketten (3,5 Zoll)', v: 1.44 },
    { t: 'DVD', v: 4700 },
    { t: 'Blu-ray', v: 25000 },
    { t: 'Standard SD-Karte', v: 128000 },
    { t: 'Moderne Festplatte', v: 8000000 }
  ]
},
{
  label: 'Bier-Alkoholgehalt (Vol.-%)',
  dir: ['Weniger Alkohol', 'Mehr Alkohol'],
  anchor: { t: 'Pils', v: 4.8 },
  items: [
    { t: 'Alkoholfreies Bier', v: 0.5 },
    { t: 'Leichtbier', v: 2.5 },
    { t: 'Helles', v: 5.1 },
    { t: 'Weizenbier', v: 5.4 },
    { t: 'Bockbier', v: 7.0 },
    { t: 'Doppelbock', v: 8.5 }
  ]
},
{
  label: 'US-Präsidenten (Amtsantritt)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'J.F. Kennedy', v: 1961 },
  items: [
    { t: 'George Washington', v: 1789 },
    { t: 'Abraham Lincoln', v: 1861 },
    { t: 'Franklin D. Roosevelt', v: 1933 },
    { t: 'Ronald Reagan', v: 1981 },
    { t: 'Barack Obama', v: 2009 },
    { t: 'Donald Trump', v: 2017 },
    { t: 'Joe Biden', v: 2021 }
  ]
},
{
  label: 'Autos (PS-Leistung)',
  dir: ['Weniger PS', 'Mehr PS'],
  anchor: { t: 'VW Golf VIII', v: 150 },
  items: [
    { t: 'VW Käfer', v: 34 },
    { t: 'Trabant 601', v: 26 },
    { t: 'Fiat 500 (alt)', v: 18 },
    { t: 'Porsche 911 Carrera', v: 385 },
    { t: 'Ferrari LaFerrari', v: 963 },
    { t: 'Bugatti Chiron', v: 1500 }
  ]
},
{
  label: 'Internet-Browser (Release)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Firefox', v: 2002 },
  items: [
    { t: 'WorldWideWeb', v: 1990 },
    { t: 'Mosaic', v: 1993 },
    { t: 'Netscape Navigator', v: 1994 },
    { t: 'Internet Explorer', v: 1995 },
    { t: 'Opera', v: 1996 },
    { t: 'Safari', v: 2003 },
    { t: 'Google Chrome', v: 2008 }
  ]
},
{
  label: 'Berühmte Gemälde (Entstehungsjahr)',
  dir: ['Früher gemalt', 'Später gemalt'],
  anchor: { t: 'Mona Lisa (Da Vinci)', v: 1503 },
  items: [
    { t: 'Die Geburt der Venus (Botticelli)', v: 1485 },
    { t: 'Die Nachtwache (Rembrandt)', v: 1642 },
    { t: 'Der Wanderer über dem Nebelmeer (Friedrich)', v: 1818 },
    { t: 'Sternennacht (Van Gogh)', v: 1889 },
    { t: 'Der Schrei (Munch)', v: 1893 },
    { t: 'Guernica (Picasso)', v: 1937 }
  ]
},
{
  label: 'James Bond Autos (PS-Leistung)',
  dir: ['Schwächer', 'Stärker'],
  anchor: { t: 'Aston Martin DB5', v: 282 },
  items: [
    { t: 'Citroën 2CV (Ente)', v: 29 },
    { t: 'Sunbeam Alpine', v: 80 },
    { t: 'Toyota 2000 GT', v: 150 },
    { t: 'Lotus Esprit S1', v: 160 },
    { t: 'BMW Z8', v: 400 },
    { t: 'Aston Martin DBS V12', v: 517 }
  ]
},
{
  label: 'Hauptstädte nach Breitengrad',
  dir: ['Südlicher', 'Nördlicher'],
  anchor: { t: 'Berlin', v: 52 },
  items: [
    { t: 'Canberra', v: -35 },
    { t: 'Kapstadt', v: -33 },
    { t: 'Kairo', v: 30 },
    { t: 'Rom', v: 41 },
    { t: 'Paris', v: 48 },
    { t: 'Oslo', v: 59 },
    { t: 'Reykjavík', v: 64 }
  ]
},
{
  label: 'Speicherplatz (Hardware Release)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'USB-Stick', v: 2000 },
  items: [
    { t: 'Magnetband', v: 1951 },
    { t: 'Festplatte (IBM RAMAC)', v: 1956 },
    { t: 'Kassette (Compact Cassette)', v: 1963 },
    { t: 'CD (Compact Disc)', v: 1982 },
    { t: 'DVD', v: 1995 },
    { t: 'Blu-ray Disc', v: 2006 },
    { t: 'NVMe SSD', v: 2011 }
  ]
},
{
  label: 'Länder nach höchstem Punkt (m)',
  dir: ['Niedriger', 'Höher'],
  anchor: { t: 'Australien (Mt. Kosciuszko)', v: 2228 },
  items: [
    { t: 'Malediven', v: 2 },
    { t: 'Niederlande (Vaalserberg)', v: 322 },
    { t: 'Großbritannien (Ben Nevis)', v: 1345 },
    { t: 'Deutschland (Zugspitze)', v: 2962 },
    { t: 'Japan (Fuji)', v: 3776 },
    { t: 'USA (Denali)', v: 6190 },
    { t: 'Nepal (Mt. Everest)', v: 8848 }
  ]
},
{
  label: 'Entdeckung von Krankheitserregern/Medizin',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Penicillin (Fleming)', v: 1928 },
  items: [
    { t: 'Pockenschutzimpfung (Jenner)', v: 1796 },
    { t: 'Tuberkulose-Bakterium (Koch)', v: 1882 },
    { t: 'Röntgenstrahlen (Röntgen)', v: 1895 },
    { t: 'Blutgruppen (Landsteiner)', v: 1900 },
    { t: 'Insulin', v: 1921 },
    { t: 'DNA-Struktur (Watson/Crick)', v: 1953 },
    { t: 'HIV-Virus', v: 1983 }
  ]
},
{
  label: 'Berühmte Brücken (Baujahr)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Golden Gate Bridge', v: 1937 },
  items: [
    { t: 'Ponte Vecchio', v: 1345 },
    { t: 'Rialtobrücke', v: 1591 },
    { t: 'Brooklyn Bridge', v: 1883 },
    { t: 'Tower Bridge', v: 1894 },
    { t: 'Sydney Harbour Bridge', v: 1932 },
    { t: 'Öresundbrücke', v: 2000 }
  ]
},
{
  label: 'Weltall-Missionen (Jahr)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Apollo 11 (Mondlandung)', v: 1969 },
  items: [
    { t: 'Sputnik 1', v: 1957 },
    { t: 'Wostok 1 (Gagarin)', v: 1961 },
    { t: 'Voyager 1 Start', v: 1977 },
    { t: 'Hubble Teleskop Start', v: 1990 },
    { t: 'Mars Pathfinder', v: 1997 },
    { t: 'ISS (Erstes Modul)', v: 1998 },
    { t: 'James Webb Teleskop Start', v: 2021 }
  ]
},
{
  label: 'Film-Monster nach Größe (m)',
  dir: ['Kleiner', 'Größer'],
  anchor: { t: 'King Kong (1933)', v: 7 },
  items: [
    { t: 'Chucky', v: 0.7 },
    { t: 'Gremlin', v: 0.9 },
    { t: 'Alien (Xenomorph)', v: 2.1 },
    { t: 'T-Rex (Jurassic Park)', v: 6 },
    { t: 'Megalo-Hai (The Meg)', v: 23 },
    { t: 'Godzilla (2014)', v: 108 }
  ]
},
{
  label: 'Literarische Epochen (Beginn ca.)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Barock', v: 1600 },
  items: [
    { t: 'Mittelalter', v: 750 },
    { t: 'Aufklärung', v: 1720 },
    { t: 'Sturm und Drang', v: 1767 },
    { t: 'Klassik', v: 1786 },
    { t: 'Romantik', v: 1795 },
    { t: 'Realismus', v: 1848 },
    { t: 'Moderne', v: 1890 }
  ]
},
{
  label: 'Stadien nach Kapazität',
  dir: ['Kleiner', 'Größer'],
  anchor: { t: 'Allianz Arena', v: 75000 },
  items: [
    { t: 'Alte Försterei', v: 22000 },
    { t: 'Weserstadion', v: 42100 },
    { t: 'Signal Iduna Park', v: 81365 },
    { t: 'Wembley Stadium', v: 90000 },
    { t: 'Camp Nou', v: 99354 },
    { t: 'Maracanã (Rekord)', v: 199854 }
  ]
},
{
  label: 'Wunder der Natur (Fläche/Größe)',
  dir: ['Kleiner', 'Größer'],
  anchor: { t: 'Bodensee', v: 536 },
  items: [
    { t: 'Großer Roter Fleck (Jupiter)', v: 16000 },
    { t: 'Totes Meer', v: 605 },
    { t: 'Baikalsee', v: 31722 },
    { t: 'Great Barrier Reef', v: 344400 },
    { t: 'Sahara Wüste', v: 9200000 },
    { t: 'Pazifik', v: 165200000 }
  ]
},
{
  label: 'Alkoholgehalt Getränke (Vol.-%)',
  dir: ['Schwächer', 'Stärker'],
  anchor: { t: 'Wein', v: 12 },
  items: [
    { t: 'Kefir', v: 0.5 },
    { t: 'Bier', v: 5 },
    { t: 'Likör', v: 20 },
    { t: 'Gin', v: 40 },
    { t: 'Whisky', v: 43 },
    { t: 'Absinth', v: 70 },
    { t: 'Stroh 80', v: 80 }
  ]
},
{
  label: 'Berühmte Schiffe (Länge m)',
  dir: ['Kürzer', 'Länger'],
  anchor: { t: 'Titanic', v: 269 },
  items: [
    { t: 'Santa Maria (Kolumbus)', v: 25 },
    { t: 'HMS Victory', v: 69 },
    { t: 'Gorch Fock', v: 89 },
    { t: 'Bismarck', v: 251 },
    { t: 'USS Nimitz (Flugzeugträger)', v: 332 },
    { t: 'Wonder of the Seas (Kreuzfahrt)', v: 362 }
  ]
},
{
  label: 'Eissorten (Beliebtheit DE Rang)',
  dir: ['Weniger beliebt', 'Beliebter'],
  anchor: { t: 'Erdbeere', v: 3 },
  items: [
    { t: 'Waldmeister', v: 10 },
    { t: 'Stracciatella', v: 5 },
    { t: 'Haselnuss', v: 4 },
    { t: 'Schokolade', v: 2 },
    { t: 'Vanille', v: 1 }
  ]
},
{
  label: 'US Bundesstaaten (Beitritt Union)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Kalifornien', v: 1850 },
  items: [
    { t: 'Delaware (Erster)', v: 1787 },
    { t: 'New York', v: 1788 },
    { t: 'Texas', v: 1845 },
    { t: 'Alaska', v: 1959 },
    { t: 'Hawaii (Letzter)', v: 1959 }
  ]
},
{
  label: 'Chemische Elemente (Entdeckung)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Sauerstoff', v: 1774 },
  items: [
    { t: 'Gold', v: -3000 },
    { t: 'Phosphor', v: 1669 },
    { t: 'Aluminium', v: 1825 },
    { t: 'Helium', v: 1868 },
    { t: 'Radium', v: 1898 },
    { t: 'Plutonium', v: 1940 }
  ]
},
{
  label: 'Druckerzeugnisse (Erfindung/Release)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Gutenberg Bibel', v: 1452 },
  items: [
    { t: 'Papyrusrollen', v: -3000 },
    { t: 'Erste Zeitung (Relation)', v: 1605 },
    { t: 'Erstes Taschenbuch (Albatross)', v: 1932 },
    { t: 'E-Book (Project Gutenberg)', v: 1971 },
    { t: 'Kindle (Amazon)', v: 2007 }
  ]
},
{
  label: 'Hauptstädte nach Einwohnerzahl',
  dir: ['Weniger', 'Mehr'],
  anchor: { t: 'Wien', v: 1900000 },
  items: [
    { t: 'Bern', v: 133000 },
    { t: 'Luxemburg Stadt', v: 128000 },
    { t: 'Berlin', v: 3700000 },
    { t: 'London', v: 8900000 },
    { t: 'Tokio', v: 13900000 }
  ]
},
{
  label: 'Länder nach BIP (Bruttoinlandsprodukt)',
  dir: ['Niedriger', 'Höher'],
  anchor: { t: 'Deutschland', v: 4200 }, // in Mrd USD
  items: [
    { t: 'Island', v: 28 },
    { t: 'Schweiz', v: 800 },
    { t: 'Frankreich', v: 2700 },
    { t: 'Japan', v: 4900 },
    { t: 'China', v: 17700 },
    { t: 'USA', v: 23000 }
  ]
},
{
  label: 'Architekturstile (Beginn ca.)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Gotik', v: 1140 },
  items: [
    { t: 'Griechische Antike', v: -800 },
    { t: 'Romanik', v: 950 },
    { t: 'Renaissance', v: 1420 },
    { t: 'Barock', v: 1575 },
    { t: 'Klassizismus', v: 1770 },
    { t: 'Jugendstil', v: 1890 },
    { t: 'Bauhaus', v: 1919 }
  ]
},
{
  label: 'Menschliche Organe nach Gewicht (g)',
  dir: ['Leichter', 'Schwerer'],
  anchor: { t: 'Herz', v: 300 },
  items: [
    { t: 'Auge', v: 7.5 },
    { t: 'Niere', v: 150 },
    { t: 'Gehirn', v: 1400 },
    { t: 'Lunge', v: 1100 },
    { t: 'Leber', v: 1500 },
    { t: 'Haut (Gesamt)', v: 10000 }
  ]
},
{
  label: 'Schulfächer (typische Wochenstunden)',
  dir: ['Weniger', 'Mehr'],
  anchor: { t: 'Biologie', v: 2 },
  items: [
    { t: 'Ethik/Religion', v: 2 },
    { t: 'Musik', v: 1 },
    { t: 'Sport', v: 3 },
    { t: 'Mathe', v: 4 },
    { t: 'Deutsch', v: 5 }
  ]
},
{
  label: 'Sonnensystem (Fluchtgeschwindigkeit km/s)',
  dir: ['Niedriger', 'Höher'],
  anchor: { t: 'Erde', v: 11.2 },
  items: [
    { t: 'Mond', v: 2.4 },
    { t: 'Mars', v: 5.0 },
    { t: 'Venus', v: 10.4 },
    { t: 'Neptun', v: 23.5 },
    { t: 'Jupiter', v: 59.5 },
    { t: 'Sonne', v: 617.5 }
  ]
},
{
  label: 'James Bond Gadgets (Film Erscheinung)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Jetpack (Thunderball)', v: 1965 },
  items: [
    { t: 'Schleudersitz (Goldfinger)', v: 1964 },
    { t: 'Magnetauslöser Uhr (Live and let Die)', v: 1973 },
    { t: 'Lotus U-Boot (The Spy Who Loved Me)', v: 1977 },
    { t: 'Laser-Uhr (GoldenEye)', v: 1995 },
    { t: 'Unsichtbares Auto (Die Another Day)', v: 2002 }
  ]
},
{
  label: 'Deutsche Fernsehshows (Erstausstrahlung)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Wetten, dass..?', v: 1981 },
  items: [
    { t: 'Tagesschau', v: 1952 },
    { t: 'Aktuelle Sportstudio', v: 1963 },
    { t: 'Tatort', v: 1970 },
    { t: 'Lindenstraße', v: 1985 },
    { t: 'Wer wird Millionär?', v: 1999 },
    { t: 'Heute Show', v: 2009 }
  ]
},
{
  label: 'Automarken (Gründungsjahr)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Volkswagen', v: 1937 },
  items: [
    { t: 'Mercedes-Benz', v: 1926 },
    { t: 'Ford', v: 1903 },
    { t: 'Ferrari', v: 1947 },
    { t: 'Porsche', v: 1931 },
    { t: 'Toyota', v: 1937 },
    { t: 'Tesla', v: 2003 }
  ]
},
{
  label: 'Disney Villains (Film Release)',
  dir: ['Älter', 'Neuer'],
  anchor: { t: 'Scar (König der Löwen)', v: 1994 },
  items: [
    { t: 'Böse Königin (Schneewittchen)', v: 1937 },
    { t: 'Maleficent (Dornröschen)', v: 1959 },
    { t: 'Dschafar (Aladdin)', v: 1992 },
    { t: 'Hades (Hercules)', v: 1997 },
    { t: 'Dr. Facilier (Küss den Frosch)', v: 2009 }
  ]
},
{
  label: 'Sprachen nach Muttersprachlern',
  dir: ['Weniger', 'Mehr'],
  anchor: { t: 'Deutsch', v: 76 }, // in Millionen
  items: [
    { t: 'Italienisch', v: 65 },
    { t: 'Französisch', v: 80 },
    { t: 'Russisch', v: 150 },
    { t: 'Englisch', v: 370 },
    { t: 'Spanisch', v: 480 },
    { t: 'Mandarin-Chinesisch', v: 920 }
  ]
},
{
  label: 'Hunderassen (Gewicht kg)',
  dir: ['Leichter', 'Schwerer'],
  anchor: { t: 'Border Collie', v: 20 },
  items: [
    { t: 'Zwergpudel', v: 4 },
    { t: 'Beagle', v: 10 },
    { t: 'Dalmatiner', v: 25 },
    { t: 'Berner Sennenhund', v: 45 },
    { t: 'Bernhardiner', v: 70 }
  ]
},
{
  label: 'Klassische Musik (Dauer ca. Min)',
  dir: ['Kürzer', 'Länger'],
  anchor: { t: 'Beethoven 5. Sinfonie', v: 35 },
  items: [
    { t: 'Hummelflug', v: 1 },
    { t: 'Für Elise', v: 3 },
    { t: 'Mozart Jupiter Sinfonie', v: 30 },
    { t: 'Vivaldi Vier Jahreszeiten', v: 42 },
    { t: 'Mahler 3. Sinfonie', v: 95 }
  ]
},
{
  label: 'Planeten (Fallbeschleunigung m/s²)',
  dir: ['Geringer', 'Stärker'],
  anchor: { t: 'Erde', v: 9.81 },
  items: [
    { t: 'Mond', v: 1.62 },
    { t: 'Mars', v: 3.71 },
    { t: 'Uranus', v: 8.87 },
    { t: 'Saturn', v: 10.44 },
    { t: 'Neptun', v: 11.15 },
    { t: 'Jupiter', v: 24.79 }
  ]
},
{
  label: 'Küchenkräuter (Wuchshöhe cm)',
  dir: ['Kleiner', 'Größer'],
  anchor: { t: 'Schnittlauch', v: 30 },
  items: [
    { t: 'Kresse', v: 10 },
    { t: 'Thymian', v: 20 },
    { t: 'Petersilie', v: 40 },
    { t: 'Basilikum', v: 50 },
    { t: 'Rosmarin', v: 100 },
    { t: 'Liebstöckel', v: 200 }
  ]
},
{
  label: 'Schachfiguren (Wert in Bauern)',
  dir: ['Weniger Wert', 'Mehr Wert'],
  anchor: { t: 'Läufer', v: 3 },
  items: [
    { t: 'Bauer', v: 1 },
    { t: 'Springer', v: 3 },
    { t: 'Turm', v: 5 },
    { t: 'Dame', v: 9 },
    { t: 'König', v: 99 }
  ]
},
{
  label: 'Metalle (Dichte g/cm³)',
  dir: ['Leichter', 'Dichter'],
  anchor: { t: 'Eisen', v: 7.87 },
  items: [
    { t: 'Lithium', v: 0.53 },
    { t: 'Aluminium', v: 2.70 },
    { t: 'Silber', v: 10.49 },
    { t: 'Blei', v: 11.34 },
    { t: 'Gold', v: 19.30 },
    { t: 'Platin', v: 21.45 }
  ]
},
{
  label: 'Weltbevölkerung (Milliarden)',
  dir: ['Früher', 'Später'],
  anchor: { t: '5 Milliarden erreicht', v: 1987 },
  items: [
    { t: '1 Milliarde erreicht', v: 1804 },
    { t: '2 Milliarden erreicht', v: 1927 },
    { t: '3 Milliarden erreicht', v: 1960 },
    { t: '4 Milliarden erreicht', v: 1974 },
    { t: '6 Milliarden erreicht', v: 1999 },
    { t: '8 Milliarden erreicht', v: 2022 }
  ]
},
{
  label: 'Internet-Meilensteine (Jahr)',
  dir: ['Früher', 'Später'],
  anchor: { t: 'Google Gründung', v: 1998 },
  items: [
    { t: 'ARPANET Start', v: 1969 },
    { t: 'Erste E-Mail', v: 1971 },
    { t: 'Domain Name System (DNS)', v: 1983 },
    { t: 'World Wide Web (CERN)', v: 1989 },
    { t: 'Amazon Gründung', v: 1994 },
    { t: 'Wikipedia Gründung', v: 2001 }
  ]
},
{
  label: 'Insekten (Flügelschläge pro Sek.)',
  dir: ['Langsamer', 'Schneller'],
  anchor: { t: 'Honigbiene', v: 200 },
  items: [
    { t: 'Schwalbenschwanz', v: 10 },
    { t: 'Stubenfliege', v: 150 },
    { t: 'Hummel', v: 230 },
    { t: 'Stechmücke', v: 600 },
    { t: 'Gnitze', v: 1000 }
  ]
},
{
  label: 'Filmlänge Klassiker (Min)',
  dir: ['Kürzer', 'Länger'],
  anchor: { t: 'Der Pate', v: 175 },
  items: [
    { t: 'Casablanca', v: 102 },
    { t: 'Psycho', v: 109 },
    { t: 'Pulp Fiction', v: 154 },
    { t: 'The Wolf of Wall Street', v: 180 },
    { t: 'Vom Winde verweht', v: 238 }
  ]
},
{
  label: 'Papst-Amtszeiten (Dauer Jahre)',
  dir: ['Kürzer', 'Länger'],
  anchor: { t: 'Benedikt XVI.', v: 8 },
  items: [
    { t: 'Johannes Paul I.', v: 0.08 },
    { t: 'Franziskus (bis 2024)', v: 11 },
    { t: 'Johannes XXIII.', v: 5 },
    { t: 'Johannes Paul II.', v: 26 },
    { t: 'Pius XII.', v: 19 }
  ]
},
  ];

  // CSS-Animationen einmalig einbetten
  (function injectCSS() {
    if (document.getElementById('so-styles')) return;
    var s = document.createElement('style');
    s.id = 'so-styles';
    s.textContent = [
      '@keyframes so-flash-green {',
      '  0%   { box-shadow: inset 0 0 0 3px #2af0a0, 0 0 0 0 #2af0a0; background: rgba(42,240,160,.08); }',
      '  40%  { box-shadow: inset 0 0 0 3px #2af0a0, 0 0 40px 12px rgba(42,240,160,.5); background: rgba(42,240,160,.22); }',
      '  100% { box-shadow: inset 0 0 0 3px #2af0a0, 0 0 0 0 #2af0a0; background: rgba(42,240,160,.08); }',
      '}',
      '@keyframes so-flash-red {',
      '  0%   { box-shadow: inset 0 0 0 3px #f55a3a, 0 0 0 0 #f55a3a; background: rgba(245,90,58,.08); }',
      '  40%  { box-shadow: inset 0 0 0 3px #f55a3a, 0 0 40px 12px rgba(245,90,58,.5); background: rgba(245,90,58,.22); }',
      '  100% { box-shadow: inset 0 0 0 3px #f55a3a, 0 0 0 0 #f55a3a; background: rgba(245,90,58,.08); }',
      '}',
      '@keyframes so-reveal {',
      '  from { opacity: 0; transform: translateX(-14px); }',
      '  to   { opacity: 1; transform: translateX(0); }',
      '}',
      '@keyframes so-slide-in {',
      '  from { opacity: 0; transform: scale(.85); }',
      '  to   { opacity: 1; transform: scale(1); }',
      '}',
      '.so-flash-green { animation: so-flash-green .7s ease-out; }',
      '.so-flash-red   { animation: so-flash-red   .7s ease-out; }',
      '.so-reveal-item { animation: so-reveal .35s ease-out both; }',
      '.so-slide-in    { animation: so-slide-in .4s ease-out both; }',
      '@keyframes so-item-correct {',
      '  0%   { box-shadow: 0 0 0 0 rgba(42,240,160,.6); background: rgba(42,240,160,.25); }',
      '  50%  { box-shadow: 0 0 24px 6px rgba(42,240,160,.5); background: rgba(42,240,160,.35); }',
      '  100% { box-shadow: 0 0 0 0 rgba(42,240,160,.1); background: rgba(42,240,160,.15); }',
      '}',
      '@keyframes so-item-wrong {',
      '  0%   { box-shadow: 0 0 0 0 rgba(245,90,58,.6); background: rgba(245,90,58,.25); }',
      '  50%  { box-shadow: 0 0 24px 6px rgba(245,90,58,.5); background: rgba(245,90,58,.35); }',
      '  100% { box-shadow: 0 0 0 0 rgba(245,90,58,.1); background: rgba(245,90,58,.15); }',
      '}',
      '.so-item-correct { animation: so-item-correct .8s ease-out; border-color: #2af0a0 !important; color: #2af0a0 !important; }',
      '.so-item-wrong   { animation: so-item-wrong .8s ease-out; border-color: #f55a3a !important; color: #f55a3a !important; }',
    ].join('\n');
    document.head.appendChild(s);
  })();

  // ─── Helpers ────────────────────────────────────────────────
  function beep(freq, dur, type, vol) {
    try {
      var ac = new (window.AudioContext || window.webkitAudioContext)();
      var o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = freq; o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(ac.currentTime); o.stop(ac.currentTime + dur + 0.01);
    } catch(e) {}
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  // ═══════════════════════════════════════════════════════════
  // SPIEL-INSTANZ
  // ═══════════════════════════════════════════════════════════
  function SortierenInstance(container, ctx, onEnd) {
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
    this.currentCat    = null;
    this._deck         = [];
    this._timeLeft     = 60;
    this._sortedList   = [];
    this._queue        = [];
    this._selected     = null;
    this._currentTurn  = 'p1';
    this._roundStarter = 'p1';
    // Vollständige sortierte Lösung (alle Begriffe inkl. anchor), für Auflösung
    this._fullSolution = [];

    this._usedCatIndices = [];

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  SortierenInstance.prototype = {

    // ─────────────────────────────────────────────────────────
    // UI AUFBAUEN
    // ─────────────────────────────────────────────────────────
    _buildUI: function () {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'so-root';
      root.style.cssText =
        'width:100%;height:100%;' +
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);' +
        'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
        'position:relative;overflow:hidden auto;padding:16px 20px;box-sizing:border-box;' +
        'font-family:"Bebas Neue",sans-serif;';

      root.innerHTML =
        // Deko-Ring
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;' +
        'top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>' +

        // Punkte-Dots
        '<div id="so-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:10px;min-height:28px;"></div>' +

        // Kategorie
        '<div id="so-cat-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;' +
        'letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:4px;"></div>' +

        // Timer
        '<div id="so-timer" style="font-size:26px;color:#f0c030;letter-spacing:.1em;margin-bottom:4px;' +
        'font-family:\'Barlow Condensed\',sans-serif;display:none;font-weight:700;">60s</div>' +

        // Status
        '<div id="so-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:18px;' +
        'letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:26px;' +
        'margin-bottom:8px;text-align:center;transition:color .2s;"></div>' +

        // Start-Button (Host)
        '<button id="so-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';' +
        'margin-bottom:14px;background:#f0c030;border:none;color:#000;' +
        'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;' +
        'padding:12px 40px;cursor:pointer;' +
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">' +
        'RUNDE STARTEN</button>' +

        // ── FLASH-OVERLAY für richtig/falsch (liegt über Spielfeld) ──
        '<div id="so-flash" style="display:none;position:absolute;inset:0;z-index:20;pointer-events:none;' +
        'flex-direction:column;align-items:center;justify-content:center;">' +
          '<div id="so-flash-inner" style="font-family:\'Bebas Neue\',sans-serif;' +
          'font-size:clamp(36px,8vw,72px);letter-spacing:.08em;text-shadow:0 0 40px currentColor;"></div>' +
        '</div>' +

        // ── SPIELFELD ──
        '<div id="so-game-area" style="display:none;flex-direction:row;gap:20px;' +
        'width:100%;max-width:580px;align-items:flex-start;justify-content:center;">' +

          // LINKS: Queue
          '<div style="display:flex;flex-direction:column;align-items:stretch;min-width:145px;max-width:180px;flex:1;">' +
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.3em;' +
            'color:#666688;text-transform:uppercase;text-align:center;margin-bottom:6px;">Zu sortieren</div>' +
            '<div id="so-queue" style="display:flex;flex-direction:column;gap:5px;"></div>' +
          '</div>' +

          // RECHTS: Sortierte Liste
          '<div style="display:flex;flex-direction:column;align-items:center;min-width:165px;flex:1;">' +
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.3em;' +
            'color:#666688;text-transform:uppercase;text-align:center;margin-bottom:4px;">Reihenfolge</div>' +
            '<div id="so-dir-top" style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;' +
            'letter-spacing:.2em;color:#f0c03099;text-transform:uppercase;margin-bottom:2px;"></div>' +
            '<div id="so-sorted" style="display:flex;flex-direction:column;align-items:center;width:100%;position:relative;"></div>' +
            '<div id="so-dir-bot" style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;' +
            'letter-spacing:.2em;color:#f0c03099;text-transform:uppercase;margin-top:2px;"></div>' +
          '</div>' +

        '</div>' +

        // Wer ist dran
        '<div id="so-turn-info" style="display:none;margin-top:8px;font-family:\'Barlow Condensed\',' +
        'sans-serif;font-size:13px;letter-spacing:.2em;color:#f0c030;text-transform:uppercase;text-align:center;"></div>' +

        // ── AUFLÖSUNGS-OVERLAY ──
        '<div id="so-resolve" style="display:none;position:absolute;inset:0;z-index:25;' +
        'background:rgba(6,6,16,.96);flex-direction:column;align-items:center;justify-content:center;' +
        'gap:10px;padding:24px;text-align:center;">' +
          '<div id="so-resolve-title" style="font-family:\'Bebas Neue\',sans-serif;' +
          'font-size:clamp(18px,4vw,32px);color:#f0c030;letter-spacing:.08em;margin-bottom:4px;"></div>' +
          '<div id="so-resolve-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;' +
          'letter-spacing:.35em;color:#888;text-transform:uppercase;margin-bottom:6px;"></div>' +
          '<div id="so-resolve-dir-top" style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;' +
          'letter-spacing:.2em;color:#f0c03099;text-transform:uppercase;margin-bottom:2px;"></div>' +
          '<div id="so-resolve-list" style="display:flex;flex-direction:column;gap:5px;width:100%;max-width:320px;"></div>' +
          '<div id="so-resolve-dir-bot" style="font-family:\'Barlow Condensed\',sans-serif;font-size:9px;' +
          'letter-spacing:.2em;color:#f0c03099;text-transform:uppercase;margin-top:2px;"></div>' +
          '<button id="so-resolve-btn" style="display:none;margin-top:14px;background:#f0c030;border:none;color:#000;' +
          'font-family:\'Bebas Neue\',sans-serif;font-size:18px;padding:11px 36px;cursor:pointer;' +
          'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));' +
          'letter-spacing:.12em;">PUNKTE ANZEIGEN</button>' +
        '</div>' +

        // ── ERGEBNIS-OVERLAY ──
        '<div id="so-ov" style="display:none;position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.95);' +
        'flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:28px;">' +
          '<div id="so-ov-ico" style="font-size:52px;"></div>' +
          '<div id="so-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(22px,6vw,46px);' +
          'color:#f0c030;letter-spacing:.05em;"></div>' +
          '<div id="so-ov-msg" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;' +
          'color:#a0a0bc;max-width:380px;line-height:1.5;"></div>' +
          '<div id="so-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;' +
          'color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>' +
          '<button id="so-ov-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;' +
          'font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;' +
          'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">' +
          'WEITER \u2192</button>' +
        '</div>';

      this.container.appendChild(root);
      this._drawDots();

      if (this.ctx.isHost) {
        document.getElementById('so-start-btn').addEventListener('click', function () {
          this.style.display = 'none';
          self.ctx.network.send('so_start_countdown', {});
          self._countdown();
        });
      }
    },

    // ─────────────────────────────────────────────────────────
    // NETZWERK
    // ─────────────────────────────────────────────────────────
    _setupNet: function () {
      var self = this;

      this.ctx.network.on('so_start_countdown', function () {
        if (!self.ctx.isHost) self._countdown();
      });

      this.ctx.network.on('so_sync_round', function (msg) {
        if (self.ctx.isHost) return;
        self.currentCat      = msg.cat;
        self._sortedList     = msg.sortedList;
        self._queue          = msg.queue;
        self._currentTurn    = msg.turn;
        self._roundStarter   = msg.starter;
        self._fullSolution   = msg.solution;
        self._selected       = null;
        self._renderGame();
        self._startAnswering();
      });

      this.ctx.network.on('so_update', function (msg) {
        if (self.ctx.isHost) return;
        self._sortedList  = msg.sortedList;
        self._queue       = msg.queue;
        self._currentTurn = msg.turn;
        self._selected    = null;
        self._renderGame();
        self._resetTimer();
      });

      this.ctx.network.on('so_preview_place', function (msg) {
        if (self.ctx.isHost) return;
        // Zeige dem Client den platzierten Begriff mit grün/rot-Feedback
        self._sortedList = msg.sortedList;
        self._queue      = msg.queue;
        self._selected   = null;
        self._renderGame();
        // Karte hervorheben
        var sEl = document.getElementById('so-sorted');
        if (sEl) {
          var cards = sEl.querySelectorAll('div[style*="clip-path"]');
          for (var ci = 0; ci < cards.length; ci++) {
            if (cards[ci].textContent.indexOf(msg.itemT) !== -1 && cards[ci].textContent.indexOf('\uD83D\uDCCD') === -1) {
              cards[ci].className = msg.correct ? 'so-item-correct' : 'so-item-wrong';
              break;
            }
          }
        }
      });

      this.ctx.network.on('so_client_move', function (msg) {
        if (!self.ctx.isHost) return;
        self._handleMove(msg.selIdx, msg.pos);
      });

      this.ctx.network.on('so_wrong', function (msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._clearTimers();
        self._flashResult(false, function () {
          self._showResolve(msg.solution, function () {
            self._showResult('wrong', msg.who, msg.p1Wins, msg.p2Wins);
          });
        });
      });

      this.ctx.network.on('so_timeout_ev', function (msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._clearTimers();
        self._flashResult(false, function () {
          self._showResolve(msg.solution, function () {
            self._showResult('timeout', msg.who, msg.p1Wins, msg.p2Wins);
          });
        });
      });

      this.ctx.network.on('so_roundwin', function (msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._clearTimers();
        self._flashResult(true, function () {
          self._showResult('win', msg.who, msg.p1Wins, msg.p2Wins);
        });
      });

      this.ctx.network.on('so_next', function (msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) { self._finish(); }
        else {
          self.mini++;
          self._startMini();
          document.getElementById('so-ov').style.display      = 'none';
          document.getElementById('so-resolve').style.display = 'none';
        }
      });
    },

    // ─────────────────────────────────────────────────────────
    // MINI-RUNDE VORBEREITEN
    // ─────────────────────────────────────────────────────────
    _startMini: function () {
      if (this.dead) return;
      this.phase     = 'idle';
      this._selected = null;
      this._clearTimers();
      document.getElementById('so-game-area').style.display  = 'none';
      document.getElementById('so-turn-info').style.display  = 'none';
      document.getElementById('so-timer').style.display      = 'none';
      document.getElementById('so-flash').style.display      = 'none';
      document.getElementById('so-resolve').style.display    = 'none';
      document.getElementById('so-cat-label').textContent    = '';
      // Queue und sortierte Liste sofort leeren, damit nichts durchscheint
      var qEl = document.getElementById('so-queue');
      if (qEl) qEl.innerHTML = '';
      var sEl = document.getElementById('so-sorted');
      if (sEl) sEl.innerHTML = '';
      this._setStatus('Bereit?', '#c0c0d8', '18px');

      if (this.ctx.isHost) {
        var btn = document.getElementById('so-start-btn');
        if (btn) btn.style.display = 'block';
        // Deck neu mischen, aber bereits gespielte Kategorien ausschließen
        if (this._deck.length === 0) {
          var usedSet = this._usedCatIndices;
          var available = [];
          for (var ci = 0; ci < CATEGORIES.length; ci++) {
            if (usedSet.indexOf(ci) === -1) available.push(ci);
          }
          // Falls alle Kategorien verbraucht sind, Reset
          if (available.length === 0) {
            this._usedCatIndices = [];
            available = CATEGORIES.map(function (_, i) { return i; });
          }
          this._deck = shuffle(available);
        }
        var catIdx = this._deck.shift();
        this._usedCatIndices.push(catIdx);
        var cat = CATEGORIES[catIdx];
        this._roundStarter  = (this.mini % 2 === 1) ? 'p1' : 'p2';
        this._currentTurn   = this._roundStarter;
        this.currentCat     = { label: cat.label, dir: cat.dir, anchor: cat.anchor };
        this._sortedList    = [cat.anchor];
        this._queue         = shuffle(cat.items).slice(0, 7);
        // Vollständige korrekte Reihenfolge vorberechnen
        this._fullSolution  = [cat.anchor].concat(cat.items.slice()).sort(function (a, b) { return a.v - b.v; });
      }
      this._drawDots();
    },

    // ─────────────────────────────────────────────────────────
    // COUNTDOWN
    // ─────────────────────────────────────────────────────────
    _countdown: function () {
      if (this.dead) return;
      var self = this, n = 3;
      this.phase = 'countdown';
      document.getElementById('so-start-btn').style.display = 'none';
      var tick = function () {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('', '#c0c0d8', '18px');
          if (self.ctx.isHost) self._sendRound();
        }
      };
      tick();
    },

    // ─────────────────────────────────────────────────────────
    // HOST SENDET RUNDENSTART
    // ─────────────────────────────────────────────────────────
    _sendRound: function () {
      if (!this.ctx.isHost) return;
      this.ctx.network.send('so_sync_round', {
        cat:        this.currentCat,
        sortedList: this._sortedList,
        queue:      this._queue,
        turn:       this._currentTurn,
        starter:    this._roundStarter,
        solution:   this._fullSolution,
      });
      this._renderGame();
      this._startAnswering();
    },

    // ─────────────────────────────────────────────────────────
    // ANTWORTPHASE
    // ─────────────────────────────────────────────────────────
    _startAnswering: function () {
      var self = this;
      this.phase     = 'answering';
      this._selected = null;
      this._timeLeft = 60;
      var timerEl    = document.getElementById('so-timer');
      timerEl.style.display = 'block';
      timerEl.style.color   = '#f0c030';
      timerEl.textContent   = '60s';

      this._tickInterval = setInterval(function () {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var el = document.getElementById('so-timer');
        if (el) { el.textContent = self._timeLeft + 's'; if (self._timeLeft <= 10) el.style.color = '#f55a3a'; }
        if (self._timeLeft <= 0) { self._clearTimers(); if (self.ctx.isHost) self._handleTimeout(); }
      }, 1000);

      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function () { self._handleTimeout(); }, 60000);
      }
      beep(550, 0.1, 'sine', 0.12);
      this._renderGame();
    },

    _resetTimer: function () {
      var self = this;
      this._clearTimers();
      this._timeLeft = 60;
      var timerEl = document.getElementById('so-timer');
      if (timerEl) { timerEl.style.color = '#f0c030'; timerEl.textContent = '60s'; }
      this._tickInterval = setInterval(function () {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var el = document.getElementById('so-timer');
        if (el) { el.textContent = self._timeLeft + 's'; if (self._timeLeft <= 10) el.style.color = '#f55a3a'; }
        if (self._timeLeft <= 0) { self._clearTimers(); if (self.ctx.isHost) self._handleTimeout(); }
      }, 1000);
      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function () { self._handleTimeout(); }, 60000);
      }
    },

    // ─────────────────────────────────────────────────────────
    // SPIELFELD RENDERN
    // ─────────────────────────────────────────────────────────
    _renderGame: function () {
      var self     = this;
      var cat      = this.currentCat;
      var isMyTurn = this._isMyTurn();
      var hasSel   = (this._selected !== null);

      document.getElementById('so-cat-label').textContent = cat.label;
      document.getElementById('so-dir-top').textContent   = '\u25b2 ' + cat.dir[0];
      document.getElementById('so-dir-bot').textContent   = '\u25bc ' + cat.dir[1];

      var turnName = (this._currentTurn === 'p1') ? this.ctx.p1Name : this.ctx.p2Name;
      var turnEl   = document.getElementById('so-turn-info');
      turnEl.textContent   = '\uD83C\uDFAE  ' + turnName + ' ist dran';
      turnEl.style.display = 'block';
      turnEl.style.color   = (this._currentTurn === 'p1') ? '#3ab4f5' : '#f55a3a';

      // ── Queue (links) ────────────────────────────────────
      var qEl = document.getElementById('so-queue');
      qEl.innerHTML = '';
      this._queue.forEach(function (item, idx) {
        var isSel = (self._selected === idx);
        var btn   = document.createElement('button');
        btn.textContent = item.t;
        btn.style.cssText =
          'background:' + (isSel ? 'rgba(240,192,48,.18)' : 'rgba(255,255,255,.04)') + ';' +
          'border:2px solid ' + (isSel ? '#f0c030' : 'rgba(255,255,255,.13)') + ';' +
          'color:' + (isSel ? '#f0c030' : '#c0c0d8') + ';' +
          'box-shadow:' + (isSel ? '0 0 18px rgba(240,192,48,.45)' : 'none') + ';' +
          'font-family:"Bebas Neue",sans-serif;font-size:clamp(13px,2.5vw,18px);' +
          'letter-spacing:.06em;padding:8px 12px;text-align:left;width:100%;' +
          'cursor:' + (isMyTurn ? 'pointer' : 'default') + ';' +
          'clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px));' +
          'transition:all .15s;';
        if (isMyTurn) {
          (function(i) {
            btn.addEventListener('click', function () { self._selectTerm(i); });
          })(idx);
        }
        qEl.appendChild(btn);
      });
      if (this._queue.length === 0) {
        var empty = document.createElement('div');
        empty.style.cssText = 'color:#44446a;font-family:\'Barlow Condensed\',sans-serif;font-size:12px;text-align:center;padding:8px;';
        empty.textContent = 'Alle platziert!';
        qEl.appendChild(empty);
      }

      // ── Sortierte Liste + Dreiecke (rechts) ───────────────
      var sEl = document.getElementById('so-sorted');
      sEl.innerHTML = '';

      for (var i = 0; i <= this._sortedList.length; i++) {
        // Dreieck — nur Spitze zeigt nach innen, sitzt am Rand
        (function (pos) {
          var canClick = isMyTurn && hasSel;
          var row = document.createElement('div');
          row.style.cssText =
            'display:flex;align-items:center;width:100%;height:18px;position:relative;margin:0;';

          // Linker Pfeil (Spitze zeigt rechts/nach innen)
          var tri = document.createElement('button');
          tri.style.cssText =
            'position:absolute;left:0;top:50%;transform:translateY(-50%);' +
            'width:28px;height:18px;padding:0;border:none;background:transparent;' +
            'cursor:' + (canClick ? 'pointer' : 'default') + ';' +
            'opacity:' + (canClick ? '1' : '0.18') + ';' +
            'transition:opacity .15s;display:flex;align-items:center;justify-content:flex-start;';

          tri.innerHTML =
            '<svg width="28" height="18" viewBox="0 0 28 18" style="display:block;overflow:visible;">' +
              // Dreieck: Spitze rechts (zeigt nach innen zur Liste)
              '<polygon points="26,9 4,2 4,16" ' +
                'fill="' + (canClick ? '#f0c030' : '#252540') + '" ' +
                'stroke="' + (canClick ? '#f0c030' : '#33334a') + '" stroke-width="1"/>' +
              '<text x="9" y="13" text-anchor="middle" ' +
                'fill="' + (canClick ? '#000' : '#44446a') + '" ' +
                'font-size="9" font-family="Bebas Neue,sans-serif" font-weight="bold">' +
                (pos + 1) +
              '</text>' +
            '</svg>';

          if (canClick) {
            (function(p) {
              tri.addEventListener('click', function () { self._placeAt(p); });
            })(pos);
          }
          row.appendChild(tri);
          sEl.appendChild(row);
        })(i);

        // Karte
        if (i < this._sortedList.length) {
          (function(item) {
            var isAnchor = (item.t === self.currentCat.anchor.t);
            var card = document.createElement('div');
            card.style.cssText =
              'background:' + (isAnchor ? 'rgba(162,89,255,.2)' : 'rgba(255,255,255,.05)') + ';' +
              'border:2px solid ' + (isAnchor ? '#a259ff' : 'rgba(255,255,255,.12)') + ';' +
              'color:' + (isAnchor ? '#c4b5fd' : '#e0e0f0') + ';' +
              'font-family:"Bebas Neue",sans-serif;font-size:clamp(12px,2.3vw,16px);' +
              'letter-spacing:.06em;padding:7px 14px 7px 36px;text-align:left;width:100%;' +
              'box-sizing:border-box;' +
              'clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px));';
            card.textContent = item.t + (isAnchor ? '  \uD83D\uDCCD' : '');
            sEl.appendChild(card);
          })(this._sortedList[i]);
        }
      }

      document.getElementById('so-game-area').style.display = 'flex';
      this._setStatus('', '#c0c0d8', '14px');
    },

    // ─────────────────────────────────────────────────────────
    // FLASH-ANIMATION  (grün = richtig, rot = falsch)
    // ─────────────────────────────────────────────────────────
    _flashResult: function (correct, callback) {
      var flashEl = document.getElementById('so-flash');
      var inner   = document.getElementById('so-flash-inner');
      var color   = correct ? '#2af0a0' : '#f55a3a';
      var text    = correct ? '\u2713  RICHTIG!' : '\u2717  FALSCH!';
      var cls     = correct ? 'so-flash-green' : 'so-flash-red';

      inner.textContent  = text;
      inner.style.color  = color;
      flashEl.style.cssText =
        'display:flex;position:absolute;inset:0;z-index:20;pointer-events:none;' +
        'flex-direction:column;align-items:center;justify-content:center;' +
        'background:rgba(6,6,16,.55);';

      // CSS-Klasse animiert das Root-Element
      var root = document.getElementById('so-root');
      root.classList.remove('so-flash-green', 'so-flash-red');
      void root.offsetWidth; // reflow
      root.classList.add(cls);

      if (correct) {
        beep(660, 0.08, 'sine', 0.15);
        setTimeout(function () { beep(880, 0.12, 'sine', 0.15); }, 90);
      } else {
        beep(200, 0.25, 'sawtooth', 0.18);
      }

      setTimeout(function () {
        flashEl.style.display = 'none';
        root.classList.remove(cls);
        if (callback) callback();
      }, 900);
    },

    // ─────────────────────────────────────────────────────────
    // AUFLÖSUNGS-OVERLAY  (zeigt korrekte Reihenfolge animiert)
    // ─────────────────────────────────────────────────────────
    _showResolve: function (solution, onDone) {
      var self    = this;
      var cat     = this.currentCat;
      var resolveEl = document.getElementById('so-resolve');
      var listEl    = document.getElementById('so-resolve-list');

      document.getElementById('so-resolve-title').textContent   = 'Die richtige Reihenfolge';
      document.getElementById('so-resolve-label').textContent   = cat.label;
      document.getElementById('so-resolve-dir-top').textContent = '\u25b2 ' + cat.dir[0];
      document.getElementById('so-resolve-dir-bot').textContent = '\u25bc ' + cat.dir[1];

      listEl.innerHTML = '';
      resolveEl.style.display = 'flex';

      // Begriffe nacheinander einblenden (50ms Versatz je Begriff)
      var delay = 0;
      solution.forEach(function (item, idx) {
        (function(itm, d) {
          setTimeout(function () {
            var isAnchor = (itm.t === cat.anchor.t);
            var card = document.createElement('div');
            card.className = 'so-reveal-item';
            card.style.cssText =
              'background:' + (isAnchor ? 'rgba(162,89,255,.2)' : 'rgba(255,255,255,.05)') + ';' +
              'border:2px solid ' + (isAnchor ? '#a259ff' : 'rgba(42,240,160,.3)') + ';' +
              'color:' + (isAnchor ? '#c4b5fd' : '#e8ffe8') + ';' +
              'font-family:"Bebas Neue",sans-serif;font-size:clamp(12px,2.3vw,16px);' +
              'letter-spacing:.07em;padding:7px 16px;text-align:left;width:100%;' +
              'box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;' +
              'clip-path:polygon(0 0,calc(100% - 5px) 0,100% 5px,100% 100%,5px 100%,0 calc(100% - 5px));' +
              'animation-delay:' + d + 'ms;';
            card.innerHTML =
              '<span>' + (idx + 1) + '. &nbsp;' + itm.t + (isAnchor ? '  \uD83D\uDCCD' : '') + '</span>';
            listEl.appendChild(card);
            beep(300 + idx * 40, 0.05, 'sine', 0.08);
          }, d);
        })(item, delay);
        delay += 180;
      });

      // Knopf erscheint nach allen Karten (nur Host)
      var btnEl = document.getElementById('so-resolve-btn');
      btnEl.style.display = 'none';
      setTimeout(function () {
        btnEl.className = 'so-slide-in';
        if (self.ctx.isHost) {
          btnEl.style.display = 'block';
          btnEl.onclick = function () {
            resolveEl.style.display = 'none';
            onDone();
          };
        }
        // Gast wartet auf Host-Signal (onDone kommt via so_ov_show)
        self.ctx.network.on('so_show_score', function () {
          if (self.ctx.isHost) return;
          resolveEl.style.display = 'none';
          onDone();
        });
      }, delay + 200);

      // Host-Knopfdruck sendet Signal an Gast
      if (this.ctx.isHost) {
        var origOnClick = null;
        setTimeout(function () {
          var b = document.getElementById('so-resolve-btn');
          var prev = b.onclick;
          b.onclick = function () {
            self.ctx.network.send('so_show_score', {});
            if (prev) prev();
          };
        }, delay + 250);
      }
    },

    // ─────────────────────────────────────────────────────────
    // Begriff AUSWÄHLEN
    // ─────────────────────────────────────────────────────────
    _selectTerm: function (idx) {
      if (this.phase !== 'answering' || this.dead) return;
      if (!this._isMyTurn()) return;
      this._selected = (this._selected === idx) ? null : idx;
      beep(480, 0.05, 'sine', 0.1);
      this._renderGame();
    },

    // ─────────────────────────────────────────────────────────
    // DREIECK GEKLICKT → Begriff platzieren
    // ─────────────────────────────────────────────────────────
    _placeAt: function (pos) {
      if (this.phase !== 'answering' || this.dead) return;
      if (!this._isMyTurn() || this._selected === null) return;
      if (!this.ctx.isHost) {
        this.ctx.network.send('so_client_move', { selIdx: this._selected, pos: pos });
        return;
      }
      this._handleMove(this._selected, pos);
    },

    // ─────────────────────────────────────────────────────────
    // ZUG VERARBEITEN (Host)
    // ─────────────────────────────────────────────────────────
    _handleMove: function (selIdx, pos) {
      if (this.phase !== 'answering' || this.dead) return;
      if (selIdx < 0 || selIdx >= this._queue.length) return;

      var item      = this._queue[selIdx];
      var newSorted = this._sortedList.slice(0, pos).concat([item]).concat(this._sortedList.slice(pos));
      var newQueue  = this._queue.filter(function (_, i) { return i !== selIdx; });

      var correct = newSorted.every(function (x, i) {
        return i === 0 || newSorted[i - 1].v <= x.v;
      });

      // ── Sofort den Begriff an seiner platzierten Position zeigen ──
      // Temporär die Liste aktualisieren, damit man sieht wo der Begriff gelandet ist
      var prevSorted = this._sortedList;
      var prevQueue  = this._queue;
      this._sortedList = newSorted;
      this._queue      = newQueue;
      this._selected   = null;
      this._renderGame();

      // Die gerade platzierte Karte visuell hervorheben
      var sEl = document.getElementById('so-sorted');
      if (sEl) {
        // Karten sind an ungeraden Positionen (gerade = Pfeile), Index der Karte = pos
        var cards = sEl.querySelectorAll('div[style*="clip-path"]');
        // Die richtige Karte finden – sie hat den Text des platzierten Items
        for (var ci = 0; ci < cards.length; ci++) {
          if (cards[ci].textContent.indexOf(item.t) !== -1 && cards[ci].textContent.indexOf('\uD83D\uDCCD') === -1) {
            cards[ci].className = correct ? 'so-item-correct' : 'so-item-wrong';
            break;
          }
        }
      }

      // Sync den visuellen State auch zum anderen Spieler
      if (correct) {
        this.ctx.network.send('so_preview_place', { sortedList: newSorted, queue: newQueue, itemT: item.t, correct: true });
      } else {
        this.ctx.network.send('so_preview_place', { sortedList: newSorted, queue: newQueue, itemT: item.t, correct: false });
      }

      // Phase blockieren, damit keine weiteren Züge möglich sind während der Animation
      this.phase = 'animating';
      var self = this;

      if (!correct) {
        var loser   = this._currentTurn;
        var winnerP = (loser === 'p1') ? 'p2' : 'p1';
        if (winnerP === 'p1') this.p1Wins++; else this.p2Wins++;
        this._clearTimers();
        var sol = this._fullSolution;
        var p1w = this.p1Wins, p2w = this.p2Wins;
        // Kurz warten damit die rote Hervorhebung sichtbar ist, dann Flash+Resolve
        setTimeout(function () {
          // Zurücksetzen für den Flash
          self.ctx.network.send('so_wrong', { who: loser, p1Wins: p1w, p2Wins: p2w, solution: sol });
          self._flashResult(false, function () {
            self._showResolve(sol, function () {
              self._showResult('wrong', loser, p1w, p2w);
            });
          });
        }, 1000);
        return;
      }

      // Richtig – kurz grün zeigen lassen, dann weiter
      this._currentTurn = (this._currentTurn === 'p1') ? 'p2' : 'p1';

      if (this._queue.length === 0) {
        var roundWinner = (this._currentTurn === 'p1') ? 'p2' : 'p1';
        if (roundWinner === 'p1') this.p1Wins++; else this.p2Wins++;
        this._clearTimers();
        var p1w2 = this.p1Wins, p2w2 = this.p2Wins, rw = roundWinner;
        setTimeout(function () {
          self.ctx.network.send('so_roundwin', { who: rw, p1Wins: self.p1Wins, p2Wins: self.p2Wins });
          self._flashResult(true, function () {
            self._showResult('win', rw, p1w2, p2w2);
          });
        }, 800);
      } else {
        var turn = this._currentTurn;
        setTimeout(function () {
          self.phase = 'answering';
          self.ctx.network.send('so_update', {
            sortedList: self._sortedList,
            queue:      self._queue,
            turn:       turn,
          });
          self._renderGame();
          self._resetTimer();
        }, 800);
      }
    },

    // ─────────────────────────────────────────────────────────
    // TIMEOUT
    // ─────────────────────────────────────────────────────────
    _handleTimeout: function () {
      if (this.phase === 'result' || this.dead || !this.ctx.isHost) return;
      var loser   = this._currentTurn;
      var winnerP = (loser === 'p1') ? 'p2' : 'p1';
      if (winnerP === 'p1') this.p1Wins++; else this.p2Wins++;
      this._clearTimers();
      var sol = this._fullSolution, p1w = this.p1Wins, p2w = this.p2Wins;
      var self = this;
      this.ctx.network.send('so_timeout_ev', { who: loser, p1Wins: p1w, p2Wins: p2w, solution: sol });
      this._flashResult(false, function () {
        self._showResolve(sol, function () {
          self._showResult('timeout', loser, p1w, p2w);
        });
      });
    },

    // ─────────────────────────────────────────────────────────
    // ERGEBNIS-OVERLAY
    // ─────────────────────────────────────────────────────────
    _showResult: function (type, who, p1w, p2w) {
      var self = this;
      this.phase = 'result';
      document.getElementById('so-game-area').style.display  = 'none';
      document.getElementById('so-turn-info').style.display  = 'none';
      document.getElementById('so-timer').style.display      = 'none';
      document.getElementById('so-resolve').style.display    = 'none';

      var loserName  = (who === 'p1') ? this.ctx.p1Name : this.ctx.p2Name;
      var winnerName = (who === 'p1') ? this.ctx.p2Name : this.ctx.p1Name;
      var ico, ttl, msg;

      if (type === 'win') {
        ico = '\uD83C\uDFC5'; ttl = winnerName + ' punktet!'; msg = 'Alle Begriffe korrekt sortiert!';
        beep(880, 0.15, 'sine', 0.2);
        setTimeout(function () { beep(1100, 0.2, 'sine', 0.18); }, 150);
      } else if (type === 'timeout') {
        ico = '\u23F0'; ttl = 'Zeit abgelaufen!';
        msg = loserName + ' war zu langsam \u2014 ' + winnerName + ' bekommt den Punkt!';
      } else {
        ico = '\u274C'; ttl = 'Falsch sortiert!';
        msg = loserName + ' hat falsch platziert \u2014 ' + winnerName + ' bekommt den Punkt!';
      }

      document.getElementById('so-ov-ico').textContent = ico;
      document.getElementById('so-ov-ttl').textContent = ttl;
      document.getElementById('so-ov-msg').textContent = msg;
      document.getElementById('so-ov-sc').innerHTML    = p1w + ' : ' + p2w + ' \u00a0\u00b7\u00a0 Ziel: 4 Punkte';
      this._drawDots();

      var gameOver = (p1w >= 4 || p2w >= 4);
      var btn      = document.getElementById('so-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMEN\u00dc' : 'N\u00c4CHSTE RUNDE';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function () {
          self.ctx.network.send('so_next', { gameOver: gameOver });
          if (gameOver) { self._finish(); }
          else {
            self.mini++;
            self._startMini();
            document.getElementById('so-ov').style.display = 'none';
          }
        };
      } else {
        btn.style.display = 'none';
      }

      document.getElementById('so-ov').style.display = 'flex';
    },

    // ─────────────────────────────────────────────────────────
    // HELFER
    // ─────────────────────────────────────────────────────────
    _isMyTurn: function () {
      return (this.ctx.isHost  && this._currentTurn === 'p1') ||
             (!this.ctx.isHost && this._currentTurn === 'p2');
    },

    _drawDots: function () {
      var el = document.getElementById('so-dots');
      if (!el) return;
      var d1 = '', d2 = '';
      var bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 3px;border:2px solid ';
      for (var i = 0; i < 4; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)')  + '"></span>';
      }
      el.innerHTML =
        d1 +
        '<span style="color:#c0c0d8;margin:0 12px;font-size:12px;font-family:\'Barlow Condensed\',sans-serif;letter-spacing:.2em;">RUNDE ' + this.mini + '</span>' +
        d2;
    },

    _setStatus: function (t, c, s) {
      var el = document.getElementById('so-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    _clearTimers: function () {
      clearTimeout(this._roundTimer);
      clearInterval(this._tickInterval);
    },

    _finish: function () {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= 4 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },

    destroy: function () {
      this.dead = true;
      this.timers.forEach(clearTimeout);
      this._clearTimers();
      ['so_start_countdown','so_sync_round','so_update','so_preview_place','so_client_move',
       'so_wrong','so_timeout_ev','so_roundwin','so_next','so_show_score','so_ov_show']
        .forEach(function (ev) { this.ctx.network.off(ev); }, this);
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTRIEREN
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id:          'sortieren',
    name:        'Sortieren',
    description: '8 Begriffe in die richtige Reihenfolge bringen. Begriff wählen, dann Pfeil anklicken. Fehler gibt dem Gegner einen Punkt. Wer zuerst 4 Punkte hat, gewinnt!',
    init:    function (container, ctx, onEnd) { this._instance = new SortierenInstance(container, ctx, onEnd); },
    destroy: function () { if (this._instance) this._instance.destroy(); }
  });

})();
