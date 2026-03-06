(function () {

  // ═══════════════════════════════════════════════════════════
  // SOUNDTRACK-DATENBANK
  // Deezer Track-IDs: auf deezer.com den Track suchen,
  // Zahl aus der URL kopieren → z.B. deezer.com/track/916744
  // Widget startet automatisch: autoplay=true im iFrame-URL
  // ═══════════════════════════════════════════════════════════
  var QUESTIONS = [
     {
      deezerTrackId: '877505',       // Hans Zimmer & Lisa Gerrard – Now We Are Free
      options: ['Gladiator', 'Braveheart', 'Der König der Löwen', 'Titanic'],
      answer: 'Gladiator',
      explanation: '"Now We Are Free" von Hans Zimmer & Lisa Gerrard ist der ikonische Soundtrack aus Gladiator (2000).'
    },
    {
      deezerTrackId: '2771985381',       // John Williams – Hedwig's Theme (Harry Potter)
      options: ['Harry Potter', 'Star Wars', 'Fluch der Karibik', 'Indiana Jones'],
      answer: 'Harry Potter',
      explanation: '"Hedwig\'s Theme" von John Williams ist das unverkennbare Hauptthema aus Harry Potter.'
    },
	{
      deezerTrackId: '1965783067',     // Ramin Djawadi – Game of Thrones Main Title
      options: ['Game of Thrones', 'Breaking Bad', 'Stranger Things', 'The Witcher'],
      answer: 'Game of Thrones',
      explanation: 'Das Hauptthema von Ramin Djawadi ist der epische Opener der HBO-Serie Game of Thrones.'
    },
    {
      deezerTrackId: '2531157971',     // Hans Zimmer – Cornfield Chase (Interstellar)
      options: ['Interstellar', 'Inception', 'The Dark Knight', 'Dunkirk'],
      answer: 'Interstellar',
      explanation: '"Cornfield Chase" von Hans Zimmer stammt aus dem Weltraum-Epos Interstellar (2014).'
    },
    {
      deezerTrackId: '1046389082',      // John Williams – Jurassic Park Theme
      options: ['Jurassic Park', 'E.T.', 'Schindlers Liste', 'Der weiße Hai'],
      answer: 'Jurassic Park',
      explanation: 'Das majestätische Hauptthema von John Williams eröffnet Jurassic Park (1993).'
    },
    {
      deezerTrackId: '3026951211',      // Klaus Badelt – He's a Pirate
      options: ['Fluch der Karibik', 'Der Herr der Ringe', 'Der Hobbit', 'Königreich der Himmel'],
      answer: 'Fluch der Karibik',
      explanation: '"He\'s a Pirate" von Klaus Badelt ist das mitreißende Hauptthema aus Fluch der Karibik (2003).'
    },
    {
      deezerTrackId: '2958349221',      // Howard Shore – Concerning Hobbits (LOTR)
      options: ['Der Herr der Ringe', 'Der Hobbit', 'Eragon', 'Narnia'],
      answer: 'Der Herr der Ringe',
      explanation: '"Concerning Hobbits" von Howard Shore ist das bezaubernde Auenland-Thema aus dem Herrn der Ringe.'
    },
    {
      deezerTrackId: '13131436',       // Céline Dion – My Heart Will Go On
      options: ['Titanic', 'Ghost', 'Pretty Woman', 'Dirty Dancing'],
      answer: 'Titanic',
      explanation: '"My Heart Will Go On" von Céline Dion ist der weltbekannte Song aus James Camerons Titanic (1997).'
    },
    {
      deezerTrackId: '81105396',     // Elton John – Circle of Life (Lion King)
      options: ['Der König der Löwen', 'Aladdin', 'Pocahontas', 'Mulan'],
      answer: 'Der König der Löwen',
      explanation: '"Circle of Life" von Elton John & Hans Zimmer eröffnet Der König der Löwen (1994).'
    },
    {
      deezerTrackId: '3857395741',      // Ennio Morricone – The Good The Bad and The Ugly
      options: ['Spiel mir das Lied vom Tod', 'Django', 'Unforgiven', 'True Grit'],
      answer: 'Spiel mir das Lied vom Tod',
      explanation: 'Ennio Morricones unverwechselbares Pfeif-Motiv ist das Thema aus "Spiel mir das Lied vom Tod" (1966).'
    },
    {
      deezerTrackId: '722927',      // Danny Elfman – Batman Theme
      options: ['Batman', 'Superman', 'Spider-Man', 'The Dark Knight'],
      answer: 'Batman',
      explanation: 'Danny Elfmans Batman-Theme (1989) ist eines der ikonischsten Superhelden-Themen der Filmgeschichte.'
    },
    {
      deezerTrackId: '952971192',   // Toss A Coin To Your Witcher (Solo Piano Version)
      options: ['The Witcher', 'Dark', 'Stranger Things', 'Peaky Blinders'],
      answer: 'The Witcher',
      explanation: '(Solo Piano Version) Dieser virale Hit des Barden Rittersporn machte die Serie weltweit berühmt und bescherte Geralt von Riva unfreiwillig jede Menge Aufmerksamkeit.'
    },
	{
      deezerTrackId: '2327822945',       // Monty Norman – James Bond Theme
      options: ['James Bond', 'Mission Impossible', 'Bourne Identität', 'Kingsman'],
      answer: 'James Bond',
      explanation: 'Das weltberühmte "James Bond Theme" wurde ursprünglich von Monty Norman für "007 jagt Dr. No" (1962) komponiert.'
    },
    {
      deezerTrackId: '3505100921',        // John Williams – Raiders March
      options: ['Indiana Jones', 'Star Wars', 'Jurassic Park', 'Superman'],
      answer: 'Indiana Jones',
      explanation: 'Der "Raiders March" von John Williams ist das heldenhafte Thema von Indiana Jones.'
    },
    {
      deezerTrackId: '5404530',      // Survivor – Eye of the Tiger
      options: ['Rocky', 'Karate Kid', 'Rambo', 'Top Gun'],
      answer: 'Rocky',
      explanation: '"Eye of the Tiger" wurde für Rocky III (1982) geschrieben und ist die ultimative Trainings-Hymne.'
    },
    {
      deezerTrackId: '3148811',        // Dick Dale – Misirlou (Pulp Fiction)
      options: ['Pulp Fiction', 'Kill Bill', 'Reservoir Dogs', 'Scarface'],
      answer: 'Pulp Fiction',
      explanation: 'Das energiegeladene Surf-Rock-Stück "Misirlou" ist untrennbar mit dem Vorspann von Pulp Fiction verbunden.'
    },
    {
      deezerTrackId: '790078872',     // Kyle Dixon & Michael Stein – Stranger Things
      options: ['Stranger Things', 'Dark', 'Black Mirror', 'Mindhunter'],
      answer: 'Stranger Things',
      explanation: 'Der analoge Synthesizer-Sound fängt die 80er-Jahre-Nostalgie von Stranger Things perfekt ein.'
    },
    {
      deezerTrackId: '969252',        // Ray Parker Jr. – Ghostbusters
      options: ['Ghostbusters', 'Back to the Future', 'Beetlejuice', 'Men in Black'],
      answer: 'Ghostbusters',
      explanation: '"Who you gonna call?" – Der Titelsong von Ray Parker Jr. war 1984 ein weltweiter Nummer-eins-Hit.'
    },
    {
      deezerTrackId: '3447420421',       // Alan Silvestri – Back to the Future Theme
      options: ['Zurück in die Zukunft', 'Star Wars', 'E.T.', 'Interstellar'],
      answer: 'Zurück in die Zukunft',
      explanation: 'Alan Silvestris triumphaler Score begleitet Marty McFly und Doc Brown durch die Zeit.'
    },
    {
      deezerTrackId: '876476',      // Lalo Schifrin – Mission: Impossible Theme
      options: ['Mission Impossible', 'James Bond', 'Oceans Eleven', 'Sherlock Holmes'],
      answer: 'Mission Impossible',
      explanation: 'Das Thema im unkonventionellen 5/4-Takt stammt ursprünglich aus der 60er-Jahre TV-Serie.'
    },
    {
      deezerTrackId: '5304387',        // Bill Conti – Gonna Fly Now
      options: ['Rocky', 'Creed', 'Karate Kid', 'Ali'],
      answer: 'Rocky',
      explanation: '"Gonna Fly Now" ist das Thema, zu dem Sylvester Stallone die Stufen des Philadelphia Museum of Art erklimmt.'
    },
    {
      deezerTrackId: '798742662',     // Ludwig Göransson – The Mandalorian
      options: ['The Mandalorian', 'Star Wars', 'Star Trek', 'Dune'],
      answer: 'The Mandalorian',
      explanation: 'Ludwig Göransson mischte für diese Star-Wars-Serie Flöten-Klänge mit modernen Synthesizern.'
    },
	// --- NEUE SOUNDTRACKS (50 STÜCK) ---
    {
      deezerTrackId: '61538062', // Star Wars (Main Title) - John Williams
      options: ['Star Wars', 'Star Trek', 'Battlestar Galactica', 'Stargate'],
      answer: 'Star Wars',
      explanation: 'Der triumphale Auftakt von John Williams ist wohl das bekannteste Filmthema der Welt.'
    },
    {
      deezerTrackId: '128996628', // Inception (Time) - Hans Zimmer
      options: ['Inception', 'Interstellar', 'Tenet', 'Shutter Island'],
      answer: 'Inception',
      explanation: '"Time" von Hans Zimmer baut eine unglaubliche Spannung auf und endet ganz leise.'
    },
    {
      deezerTrackId: '2327823485', // Jaws Theme - John Williams
      options: ['Der weiße Hai', 'Psycho', 'Halloween', 'Alien'],
      answer: 'Der weiße Hai',
      explanation: 'Nur zwei Töne reichen aus, um puren Horror zu verbreiten.'
    },
    {
      deezerTrackId: '2991539901', // The Godfather (Main Title) - Nino Rota
      options: ['Der Pate', 'Goodfellas', 'Scarface', 'Casino'],
      answer: 'Der Pate',
      explanation: 'Nino Rotas melancholische Melodie fängt das Mafia-Epos perfekt ein.'
    },
    {
      deezerTrackId: '14553784', // Imperial March (Darth Vader's Theme) - John Williams
      options: ['Star Wars', 'Star Trek', 'Dune', 'Flash Gordon'],
      answer: 'Star Wars',
      explanation: 'Das bedrohliche Thema von Darth Vader ist ein Meisterwerk der Filmmusik.'
    },
    {
      deezerTrackId: '2327823155', // Raiders March - John Williams
      options: ['Indiana Jones', 'Die Mumie', 'Lara Croft', 'National Treasure'],
      answer: 'Indiana Jones',
      explanation: 'Wenn diese Melodie spielt, weiß man: Indy ist zur Rettung bereit.'
    },
    {
      deezerTrackId: '16237404', // Schindlers Liste (Main Theme) - John Williams
      options: ['Schindlers Liste', 'Der Pianist', 'Das Leben ist schön', 'Sophie\'s Choice'],
      answer: 'Schindlers Liste',
      explanation: 'Das zutiefst bewegende Violinen-Solo wurde von Itzhak Perlman eingespielt.'
    },
    {
      deezerTrackId: '17479922', // Forrest Gump Suite - Alan Silvestri
      options: ['Forrest Gump', 'Cast Away', 'Big', 'Rain Man'],
      answer: 'Forrest Gump',
      explanation: 'So leicht und unbeschwert wie die Feder am Anfang des Films.'
    },
    {
      deezerTrackId: '956613', // Pink Panther Theme - Henry Mancini
      options: ['Der rosarote Panther', 'James Bond', 'Get Smart', 'The Munsters'],
      answer: 'Der rosarote Panther',
      explanation: 'Das Saxophon-Thema von Henry Mancini ist Inbegriff der "Coolness".'
    },
    {
      deezerTrackId: '91018591', // Danger Zone - Kenny Loggins
      options: ['Top Gun', 'Iron Eagle', 'Days of Thunder', 'Speed'],
      answer: 'Top Gun',
      explanation: 'Der Inbegriff des 80er-Jahre Action-Kinos.'
    },
    {
      deezerTrackId: '2044099337', // Braveheart (For the Love of a Princess) - James Horner
      options: ['Braveheart', 'Rob Roy', 'The Patriot', 'Outlander'],
      answer: 'Braveheart',
      explanation: 'James Horners Dudelsack-Klänge transportieren uns direkt nach Schottland.'
    },
    {
      deezerTrackId: '1637414822', // Superman March - John Williams
      options: ['Superman', 'Spider-Man', 'Captain America', 'Thor'],
      answer: 'Superman',
      explanation: 'Bevor es das MCU gab, definierte dieser Marsch den Superhelden-Sound.'
    },
    {
      deezerTrackId: '812146852', // Beverly Hills Cop (Axel F) - Harold Faltermeyer
      options: ['Beverly Hills Cop', 'Lethal Weapon', 'Bad Boys', 'Rush Hour'],
      answer: 'Beverly Hills Cop',
      explanation: 'Einer der bekanntesten Synthesizer-Tracks der Filmgeschichte.'
    },
    {
      deezerTrackId: '99930576', // Tubular Bells (The Exorcist) - Mike Oldfield
      options: ['Der Exorzist', 'Halloween', 'Suspiria', 'Hereditary'],
      answer: 'Der Exorzist',
      explanation: 'Das hypnotische Klavier-Thema sorgt sofort für Gänsehaut.'
    },
    {
      deezerTrackId: '10155790', // Twisted Nerve - Bernard Herrmann
      options: ['Kill Bill', 'John Wick', 'The Matrix', 'Oldboy'],
      answer: 'Kill Bill',
      explanation: 'Quentin Tarantino verhalf dem Song zu Weltruhm, als die Figur Elle Driver ihn pfeift, während sie sich darauf vorbereitet, die Braut im Krankenhaus zu vergiften.'
    },
    {
      deezerTrackId: '1361607012', // Why So Serious? (The Dark Knight) - Hans Zimmer
      options: ['The Dark Knight', 'Joker', 'The Batman', 'Watchmen'],
      answer: 'The Dark Knight',
      explanation: 'Das hämmernde, industrielle Thema des Jokers.'
    },
    {
      deezerTrackId: '2131884577', // He's a Pirate (Pirates of the Caribbean) - Hans Zimmer
      options: ['Fluch der Karibik', 'Master and Commander', 'Peter Pan', 'Hook'],
      answer: 'Fluch der Karibik',
      explanation: 'Zwar oft Klaus Badelt zugeschrieben, stammte das Thema aus der Feder von Hans Zimmer.'
    },
    {
      deezerTrackId: '3596596992', // Vertigo (Prelude) - Bernard Herrmann
      options: ['Vertigo', 'Rear Window', 'North by Northwest', 'Citizen Kane'],
      answer: 'Vertigo',
      explanation: 'Die kreisenden Melodien spiegeln die Höhenangst des Protagonisten wider.'
    },
    {
      deezerTrackId: '59966101', // Blade Runner Main Titles - Vangelis
      options: ['Blade Runner', 'Tron', 'Dune', 'Alien'],
      answer: 'Blade Runner',
      explanation: 'Vangelis schuf mit dem Yamaha CS-80 Synthesizer den Sound der Zukunft.'
    },
    {
      deezerTrackId: '695884612', // You're the One That I Want (Grease) - John Travolta/Olivia Newton-John
      options: ['Grease', 'Dirty Dancing', 'Footloose', 'Hairspray'],
      answer: 'Grease',
      explanation: 'Der ultimative Musical-Hit aus dem Jahr 1978.'
    },
    {
      deezerTrackId: '139138751', // Stayin' Alive (Saturday Night Fever) - Bee Gees
      options: ['Saturday Night Fever', 'Stayin\' Alive', 'Flashdance', 'Boogie Nights'],
      answer: 'Saturday Night Fever',
      explanation: 'Der Beat, der perfekt zum Gehrhythmus von Tony Manero passt.'
    },
    {
      deezerTrackId: '2057044837', // Sherlock Holmes (Discombobulate) - Hans Zimmer
      options: ['Sherlock Holmes', 'The Gentlemen', 'Enola Holmes', 'Peaky Blinders'],
      answer: 'Sherlock Holmes',
      explanation: 'Hans Zimmer nutzte ein verstimmtes Klavier für diesen speziellen Sound.'
    },
    {
      deezerTrackId: '3089012', // The Good, the Bad & the Ugly - Ennio Morricone
      options: ['Zwei glorreiche Halunken', 'Spiel mir das Lied vom Tod', 'Django Unchained', 'The Hateful Eight'],
      answer: 'Zwei glorreiche Halunken',
      explanation: 'Ikonischen „Kojoten-Rufe“, peitschende Rhythmen und den Einsatz von Mundharmonika und E-Gitarre'
    },
    {
      deezerTrackId: '64699353', // Chariots of Fire - Vangelis
      options: ['Die Stunde des Siegers', 'Rocky', 'Braveheart', 'The Flying Scotsman'],
      answer: 'Die Stunde des Siegers',
      explanation: 'Das berühmteste Thema für Zeitlupen-Laufszenen.'
    },
    {
      deezerTrackId: '2069914877', // E.T. Flying Theme - John Williams
      options: ['E.T.', 'Super 8', 'The Goonies', 'Close Encounters'],
      answer: 'E.T.',
      explanation: 'Musik, die abhebt – genau wie das Fahrrad am Mond vorbei.'
    },
    {
      deezerTrackId: '1395028802', // The Terminator Theme - Brad Fiedel
      options: ['The Terminator', 'RoboCop', 'Total Recall', 'Predator'],
      answer: 'The Terminator',
      explanation: 'Der metallische Herzschlag der Maschine.'
    },
    {
      deezerTrackId: '812147162', // Halloween Theme - John Carpenter
      options: ['Halloween', 'Friday the 13th', 'Scream', 'Nightmare on Elm Street'],
      answer: 'Halloween',
      explanation: 'Komponiert vom Regisseur John Carpenter selbst in einem simplen 5/4-Takt.'
    },
    {
      deezerTrackId: '95830040', // Requiem for a Dream (Lux Aeterna) - Clint Mansell
      options: ['Requiem for a Dream', 'The Fountain', 'Black Swan', 'Interstellar'],
      answer: 'Requiem for a Dream',
      explanation: 'Dieses Stück wurde später in unzähligen Trailern verwendet.'
    },
    {
      deezerTrackId: '1967665', // Take My Breath Away - Berlin
      options: ['Top Gun', 'Dirty Dancing', 'Flashdance', 'Footloose'],
      answer: 'Top Gun',
      explanation: 'Die Oscar-gekrönte Ballade aus dem Jahr 1986.'
    },
    {
      deezerTrackId: '1996909717', // The Throne Room (Star Wars) - John Williams
      options: ['Star Wars', 'Indiana Jones', 'Harry Potter', 'Jurassic Park'],
      answer: 'Star Wars',
      explanation: 'Das majestätische Finale von Episode IV.'
    },
{
      deezerTrackId: '5304381', // Call Me - Blondie
      options: ['American Gigolo', 'Scarface', 'The Breakfast Club', 'Flashdance'],
      answer: 'American Gigolo',
      explanation: 'Der Song war das Hauptthema des Films von 1980 und wurde von Giorgio Moroder produziert.'
    },
	{
      deezerTrackId: '5304382', // Lust For Life - Iggy Pop
      options: ['Trainspotting', 'Snatch', 'Fight Club', 'Human Traffic'],
      answer: 'Trainspotting',
      explanation: 'Berühmt für die legendäre Eröffnungsszene, in der Ewan McGregor durch die Straßen von Edinburgh rennt.'
    },
	{
      deezerTrackId: '5304383', // That's Amore - Dean Martin
      options: ['Moonstruck', 'Der Pate', 'GoodFellas', 'Susi und Strolch'],
      answer: 'Moonstruck',
      explanation: 'Der Song eröffnet den Film (Moonstruck) von 1987 mit Cher und Nicolas Cage in den Hauptrollen.'
    },
	{
      deezerTrackId: '5304384', // Every Day Should Be A Holiday - The Dandy Warhols
      options: ['Theres Something About Mary', 'American Pie', 'Cruel Intentions', 'Road Trip'],
      answer: 'Theres Something About Mary',
      explanation: 'Verrückt nach Mary (1998) machte den Song durch seinen markanten Soundtrack weltweit bekannt.'
    },
	{
      deezerTrackId: '5304389', // Fisherman's Blues - The Waterboys
      options: ['Good Will Hunting', 'Waking Ned Devine', 'The Boat That Rocked', 'Dom Hemingway'],
      answer: 'Good Will Hunting',
      explanation: 'Der Song untermalt die Schlussszene des Films, während Matt Damon in seinem Wagen in eine neue Zukunft fährt.'
    },
	{
      deezerTrackId: '5304397', // The Pink Panther Theme - Henry Mancini
      options: ['The Pink Panther', 'James Bond', 'Mission: Impossible', 'Oceans Eleven'],
      answer: 'The Pink Panther',
      explanation: 'Das berühmte Saxophon-Solo stammt von Plas Johnson und wurde 1964 für einen Grammy nominiert.'
    },
	{
      deezerTrackId: '5304398', // Talk Show Host - Radiohead
      options: ['Romeo and Juliet', 'Trainspotting', 'The Beach', 'Fight Club'],
      answer: 'Romeo and Juliet',
      explanation: 'Dieser Remix von Nellee Hooper untermalt den ersten Auftritt von Leonardo DiCaprio als Romeo am Strand von Verona Beach.'
    },
	{
      deezerTrackId: '388848041', // Secret - The Pierces
      options: ['Pretty Little Liars', 'Gossip Girl', 'The Vampire Diaries', 'Desperate Housewives'],
      answer: 'Pretty Little Liars',
      explanation: 'Der Song wurde zum Markenzeichen der Serie und untermalt das ikonische Intro, in dem die Mädchen ein Geheimnis bewahren.'
    },
    {
      deezerTrackId: '388848051', // Forever Young - Audra Mae & The Forest Rangers
      options: ['Sons of Anarchy', 'Mayans M.C.', 'Peaky Blinders', 'Yellowstone'],
      answer: 'Sons of Anarchy',
      explanation: 'Der Soundtrack der Serie ist bekannt für seine Cover-Versionen berühmter Songs durch die Hausband "The Forest Rangers".'
    },
	{
      deezerTrackId: '388848071', // Red Right Hand - Nick Cave & The Bad Seeds
      options: ['Peaky Blinders', 'Boardwalk Empire', 'Sons of Anarchy', 'The Alienist'],
      answer: 'Peaky Blinders',
      explanation: 'Der Song wurde zum Markenzeichen der Serie und beschreibt die bedrohliche Präsenz von Thomas Shelby in Birmingham.'
    },
	{
      deezerTrackId: '388848081', // Breaking Bad Main Title Theme - Dave Porter
      options: ['Breaking Bad', 'Better Call Saul', 'Narcos', 'Ozark'],
      answer: 'Breaking Bad',
      explanation: 'Das von Dave Porter komponierte Thema kombiniert Dobro-Gitarre und Percussion zu einem unverkennbaren Wüsten-Vibe.'
    },
	{
      deezerTrackId: '388848101', // Orphan Black Theme - Two Fingers
      options: ['Orphan Black', 'Sense8', 'Black Mirror', 'Westworld'],
      answer: 'Orphan Black',
      explanation: 'Das pulsierende Thema stammt von Amon Tobin (unter seinem Alias Two Fingers) und spiegelt die genetische Hektik der Serie wider.'
    },
	{
      deezerTrackId: '93386078', // Stop, I'm Already Dead - Deadboy & The Elephantmen
      options: ['iZombie', 'The Walking Dead', 'Santa Clarita Diet', 'Lucifer'],
      answer: 'iZombie',
      explanation: 'Der Song passt mit seinem Titel "Stop, I\'m Already Dead" perfekt zum Comic-Look und der humorvollen Zombie-Thematik der Serie.'
    },
	{
      deezerTrackId: '68529043', // You've Got Time - Regina Spektor
      options: ['Orange Is the New Black', 'Wentworth', 'Glow', 'Dead to Me'],
      answer: 'Orange Is the New Black',
      explanation: 'Regina Spektor schrieb den Song "You\'ve Got Time" speziell für das Intro, das echte ehemalige Häftlinge zeigt.'
    },
	{
      deezerTrackId: '388848141', // House of Cards Main Title - Jeff Beal
      options: ['House of Cards', 'The West Wing', 'Designated Survivor', 'Succession'],
      answer: 'House of Cards',
      explanation: 'Das Thema wurde von Jeff Beal komponiert und untermalt die Zeitraffer-Aufnahmen von Washington D.C. im Vorspann.'
    },
	{
      deezerTrackId: '388848151', // Riverdale (Main Title Theme) - Blake Neely
      options: ['Riverdale', 'Chilling Adventures of Sabrina', 'Pretty Little Liars', 'Twin Peaks'],
      answer: 'Riverdale',
      explanation: 'Das kurze, neblige Intro von Blake Neely fängt die düstere Atmosphäre der Stadt ein, die hinter der Fassade der perfekten Kleinstadt lauert.'
    },
	{
      deezerTrackId: '388848171', // The Night We Met - Lord Huron
      options: ['13 Reasons Why', 'Euphoria', 'Riverdale', 'Stranger Things'],
      answer: '13 Reasons Why',
      explanation: 'Der Song wurde durch die Tanzszene von Hannah und Clay zum Symbol der Serie und erreichte dadurch weltweite Berühmtheit.'
    },
	{
      deezerTrackId: '102624392', // World Falls Apart - Dash Berlin
      options: ['Sense8', 'The OA', 'Stranger Things', 'Dark'],
      answer: 'Sense8',
      explanation: 'Die Serie der Wachowski-Geschwister ist bekannt für ihren emotionalen Soundtrack, der oft elektronische Hymnen nutzt, um die Verbundenheit der Charaktere zu zeigen.'
    },
	{
      deezerTrackId: '631085652', // The Walking Dead Main Title - Bear McCreary
      options: ['The Walking Dead', 'Fear the Walking Dead', 'The Last of Us', 'Z Nation'],
      answer: 'The Walking Dead',
      explanation: 'Komponist Bear McCreary schuf mit den harten, repetitiven Streicherklängen eine Atmosphäre ständiger Gefahr und Rastlosigkeit.'
    },
	{
      deezerTrackId: '421551522', // Somewhere in My Memory - John Williams
      options: ['Kevin – Allein in New York', 'Der Grinch', 'Santa Clause', 'Buddy der Weihnachtself'],
      answer: 'Kevin – Allein in New York',
      explanation: 'Komponist John Williams schuf mit "Somewhere in My Memory" eine der bekanntesten Weihnachtsmelodien der Filmgeschichte.'
    },
	{
      deezerTrackId: '812147272', // Jurassic Park (End Titles) - Royal Symphony Orchestra
      options: ['Jurassic Park', 'Indiana Jones', 'Star Wars', 'Der weiße Hai'],
      answer: 'Jurassic Park',
      explanation: 'Das majestätische Thema von John Williams untermalt den Moment, in dem die Charaktere zum ersten Mal die Dinosaurier sehen.'
    },
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
      var scaledVol = (vol || 0.2);
      g.gain.setValueAtTime(scaledVol, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(ac.currentTime); o.stop(ac.currentTime + dur + 0.01);
    } catch(e) {}
  }

  var MAX_ERRORS = 5;

  function SoundtracksInstance(container, ctx, onEnd) {
    this.container      = container;
    this.ctx            = ctx;
    this.onEnd          = onEnd;
    this.dead           = false;
    this.mini           = 1;
    this.p1Errors       = 0;
    this.p2Errors       = 0;
    this.timers         = [];
    this._roundTimer    = null;
    this._tickInterval  = null;
    this.phase          = 'idle';
    this.currentQ       = null;
    this._deck          = [];
    this.p1Answer       = null;
    this.p2Answer       = null;
    this._timeLeft      = 30;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  SoundtracksInstance.prototype = {

    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'st-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0a0a20,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:flex-start;',
        'position:relative;overflow:hidden;padding:14px 18px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        '<div style="position:absolute;pointer-events:none;width:500px;height:500px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(224,64,160,.06);"></div>',
        '<div id="st-dots" style="display:flex;align-items:center;gap:14px;margin-bottom:10px;min-height:26px;flex-wrap:wrap;justify-content:center;"></div>',
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:8px;">🎬 Aus welchem Film / Serie stammt dieser Soundtrack?</div>',
        '<div id="st-timer" style="font-size:22px;color:#f0c030;letter-spacing:.1em;margin-bottom:6px;font-family:\'Barlow Condensed\',sans-serif;display:none;">1:00</div>',
        '<div id="st-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:20px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:28px;margin-bottom:8px;text-align:center;transition:color .2s;"></div>',
        '<button id="st-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-bottom:14px;background:#e040a0;border:none;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">▶ SOUNDTRACK ABSPIELEN</button>',
        // Deezer Widget – 76px: Play-Button + Fortschrittsbalken vollständig sichtbar
        '<div id="st-dz-wrap" style="display:none;width:100%;max-width:440px;margin-bottom:12px;border-radius:6px;overflow:hidden;box-shadow:0 0 0 2px rgba(224,64,160,.3);">',
          '<iframe id="st-dz-frame" scrolling="no" frameborder="0"',
          ' allow="autoplay; encrypted-media"',
          ' style="width:100%;height:76px;border:none;display:block;">',
          '</iframe>',
        '</div>',

        '<div id="st-options" style="display:none;flex-direction:column;gap:8px;width:100%;max-width:440px;margin-bottom:10px;"></div>',
        '<div id="st-wait" style="display:none;flex-direction:column;align-items:center;gap:4px;margin-bottom:8px;">',
          '<div id="st-wait-p1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#3ab4f5;text-transform:uppercase;"></div>',
          '<div id="st-wait-p2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#f55a3a;text-transform:uppercase;"></div>',
        '</div>',
        '<div id="st-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:24px;">',
          '<div id="st-ov-ico" style="font-size:52px;"></div>',
          '<div id="st-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(24px,6vw,46px);color:#e040a0;letter-spacing:.05em;"></div>',
          '<div id="st-ov-expl" style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#a0a0bc;max-width:380px;line-height:1.5;"></div>',
          '<div id="st-ov-answers" style="display:flex;gap:20px;margin:4px 0;flex-wrap:wrap;justify-content:center;"></div>',
          '<div id="st-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
          '<button id="st-ov-btn" style="margin-top:6px;background:#e040a0;border:none;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">WEITER →</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);
      this._drawDots();

      if (this.ctx.isHost) {
        document.getElementById('st-start-btn').addEventListener('click', function() {
          this.style.display = 'none';
          self.ctx.network.send('st_start_countdown', {});
          self._countdown();
        });
      }

    },

    _setupNet: function() {
      var self = this;
      this.ctx.network.on('st_status_update', function(msg) {
        if (self.ctx.isHost) return;
        // P2 aktualisiert die Wartestatusanzeige basierend auf dem Host-Update
        var p1El = document.getElementById('st-wait-p1');
        var p2El = document.getElementById('st-wait-p2');
        if (p1El) p1El.textContent = self.ctx.p1Name + ': ' + (msg.p1Answered ? '✓ gewählt' : '…überlegt');
        if (p2El) p2El.textContent = self.ctx.p2Name + ': ' + (msg.p2Answered ? '✓ gewählt' : '…überlegt');
      });
      this.ctx.network.on('st_start_countdown', function() {
        if (!self.ctx.isHost) self._countdown();
      });
      this.ctx.network.on('st_sync_question', function(msg) {
        if (self.ctx.isHost) return;
        self.currentQ = { deezerTrackId: msg.deezerTrackId, options: msg.options, answer: msg.answer, explanation: msg.explanation };
        self._loadDeezer(msg.deezerTrackId);
        self._renderOptions(msg.options);
        self._startAnswering();
      });
      this.ctx.network.on('st_answer', function(msg) {
        if (!self.ctx.isHost) return;
        if (msg.player === 'p2') {
          self.p2Answer = msg.answer;
          self._updateWaitStatus();
          // P2 informieren, dass P1's Status sich ggf. geändert hat
          self.ctx.network.send('st_status_update', { p1Answered: !!self.p1Answer, p2Answered: !!self.p2Answer });
          self._tryResolve();
        }
      });
      this.ctx.network.on('st_result', function(msg) {
        if (self.ctx.isHost) return;
        self._clearTimers();
        self.phase = 'result';
        self.p1Errors = msg.p1Errors;
        self.p2Errors = msg.p2Errors;
        self._showResult(msg.p1Answer, msg.p2Answer, msg.correct, msg.explanation, msg.p1Wrong, msg.p2Wrong);
      });
      this.ctx.network.on('st_timeout', function() {
        if (self.ctx.isHost) return;
        self._clearTimers();
        self.phase = 'result';
        self._stopDeezer();
        document.getElementById('st-options').style.display = 'none';
        document.getElementById('st-wait').style.display = 'none';
        document.getElementById('st-timer').style.display = 'none';
        self._setStatus('Zeit abgelaufen!', '#f55a3a', '20px');
      });
      this.ctx.network.on('st_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._showFinal();
        else {
          self.mini++;
          self._startMini();
          document.getElementById('st-ov').style.display = 'none';
        }
      });
    },

    // ── Deezer Widget (offizielles Embed, kein CORS, autoplay=true) ──
    _loadDeezer: function(trackId) {
      var wrap  = document.getElementById('st-dz-wrap');
      var frame = document.getElementById('st-dz-frame');
      if (!wrap || !frame) return;
      frame.src = 'https://widget.deezer.com/widget/dark/track/' + trackId + '?autoplay=true';
      wrap.style.display = 'block';
    },

    _stopDeezer: function() {
      var wrap  = document.getElementById('st-dz-wrap');
      var frame = document.getElementById('st-dz-frame');
      if (frame) frame.src = 'about:blank';
      if (wrap)  wrap.style.display = 'none';
    },

    _startMini: function() {
      if (this.dead) return;
      this.phase = 'idle';
      this.p1Answer = null;
      this.p2Answer = null;
      this._clearTimers();
      this._stopDeezer();
      document.getElementById('st-options').style.display = 'none';
      document.getElementById('st-wait').style.display = 'none';
      document.getElementById('st-timer').style.display = 'none';
      this._setStatus('Bereit fürs nächste Stück?', '#c0c0d8', '16px');
      if (this.ctx.isHost) {
        var btn = document.getElementById('st-start-btn');
        if (btn) btn.style.display = 'block';
        if (this._deck.length === 0) {
          var indices = QUESTIONS.map(function(_, i) { return i; });
          // Fisher-Yates shuffle
          for (var i = indices.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = indices[i]; indices[i] = indices[j]; indices[j] = tmp;
          }
          this._deck = indices;
          this._usedThisGame = this._usedThisGame || [];
        }
        // Überspringe bereits gespielte Songs – pro Spielsitzung jede Frage nur einmal
        while (this._deck.length > 0) {
          var candidate = this._deck[0];
          if (!this._usedThisGame || this._usedThisGame.indexOf(candidate) === -1) {
            this._deck.shift();
            this._usedThisGame = this._usedThisGame || [];
            this._usedThisGame.push(candidate);
            this.currentQ = QUESTIONS[candidate];
            break;
          }
          this._deck.shift();
          // Wenn alle Fragen gespielt wurden, Reset
          if (this._deck.length === 0) {
            this._usedThisGame = [];
            var indices2 = QUESTIONS.map(function(_, i) { return i; });
            for (var ii = indices2.length - 1; ii > 0; ii--) {
              var jj = Math.floor(Math.random() * (ii + 1));
              var tt = indices2[ii]; indices2[ii] = indices2[jj]; indices2[jj] = tt;
            }
            this._deck = indices2;
            this._usedThisGame.push(this._deck.shift());
            this.currentQ = QUESTIONS[this._usedThisGame[this._usedThisGame.length - 1]];
            break;
          }
        }
      }
      this._drawDots();
    },

    _countdown: function() {
      if (this.dead) return;
      var self = this, n = 3;
      this.phase = 'countdown';
      document.getElementById('st-start-btn').style.display = 'none';
      var tick = function() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '52px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('🎵 Hört gut hin!', '#e040a0', '22px');
          self.timers.push(setTimeout(function() {
            if (self.ctx.isHost) self._sendQuestion();
          }, 400));
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
      var payload = {
        deezerTrackId: this.currentQ.deezerTrackId,
        options: shuffled,
        answer: this.currentQ.answer,
        explanation: this.currentQ.explanation
      };
      this.ctx.network.send('st_sync_question', payload);
      this.currentQ = {
        deezerTrackId: this.currentQ.deezerTrackId,
        options: shuffled,
        answer: this.currentQ.answer,
        explanation: this.currentQ.explanation
      };
      this._loadDeezer(this.currentQ.deezerTrackId);
      this._renderOptions(shuffled);
      this._startAnswering();
    },

    _renderOptions: function(options) {
      var self = this;
      var container = document.getElementById('st-options');
      container.innerHTML = '';
      var grid = document.createElement('div');
      grid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;';
      var colors = ['#3ab4f5', '#f0c030', '#2af0a0', '#f55a3a'];
      var labels = ['A', 'B', 'C', 'D'];
      options.forEach(function(opt, idx) {
        var btn = document.createElement('button');
        btn.id = 'st-opt-' + idx;
        btn.style.cssText = [
          'background:rgba(255,255,255,.03);',
          'border:2px solid ' + colors[idx] + ';',
          'color:' + colors[idx] + ';',
          'font-family:"Bebas Neue",sans-serif;',
          'font-size:clamp(14px,3vw,21px);',
          'letter-spacing:.06em;',
          'padding:12px 8px;cursor:pointer;',
          'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));',
          'transition:background .12s,box-shadow .12s,opacity .2s;',
          'display:flex;align-items:center;gap:6px;justify-content:center;',
          'word-break:break-word;text-align:center;line-height:1.2;'
        ].join('');
        btn.innerHTML = '<span style="font-size:.65em;opacity:.5;">' + labels[idx] + '</span>' + esc(opt);
        btn.onclick = function() { self._selectAnswer(opt, idx); };
        grid.appendChild(btn);
      });
      container.appendChild(grid);
    },

    _startAnswering: function() {
      var self = this;
      this.phase = 'answering';
      document.getElementById('st-options').style.display = 'block';
      document.getElementById('st-wait').style.display = 'flex';
      this._updateWaitStatus();
      this._timeLeft = 60;
      var timerEl = document.getElementById('st-timer');
      timerEl.style.display = 'block';
      timerEl.style.color = '#f0c030';
      timerEl.textContent = '1:00';
      this._tickInterval = setInterval(function() {
        if (self.dead || self.phase !== 'answering') return;
        self._timeLeft--;
        var s = self._timeLeft;
        var m = Math.floor(s / 60);
        var sec = s % 60;
        timerEl.textContent = m + ':' + (sec < 10 ? '0' : '') + sec;
        if (s <= 10) timerEl.style.color = '#f55a3a';
        if (s <= 5 && s > 0) beep(880, 0.05, 'sine', 0.08);
        if (s <= 0) self._clearTimers();
      }, 1000);
      if (this.ctx.isHost) {
        this._roundTimer = setTimeout(function() {
          self.ctx.network.send('st_timeout', {});
          self._resolveRound();
        }, 60000);
      }
      this._setStatus('', '#e040a0', '14px');
      beep(550, 0.1, 'sine', 0.12);
    },

    _selectAnswer: function(answer, btnIdx) {
      if (this.phase !== 'answering' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      var colors = ['#3ab4f5', '#f0c030', '#2af0a0', '#f55a3a'];
      for (var i = 0; i < 4; i++) {
        var b = document.getElementById('st-opt-' + i);
        if (b) {
          b.disabled = true;
          if (i === btnIdx) {
            b.style.background = 'rgba(255,255,255,.12)';
            b.style.boxShadow = '0 0 20px ' + colors[i] + '44';
          } else {
            b.style.opacity = '0.3';
          }
        }
      }
      beep(660, 0.07, 'sine', 0.15);
      if (me === 'p1') {
        this.p1Answer = answer;
        this._updateWaitStatus();
        // P2 informieren, dass P1 geantwortet hat
        this.ctx.network.send('st_status_update', { p1Answered: true, p2Answered: !!this.p2Answer });
        this._tryResolve();
      } else {
        this.p2Answer = answer;
        this._updateWaitStatus();  // P2 aktualisiert seinen eigenen Status lokal
        this.ctx.network.send('st_answer', { player: 'p2', answer: answer });
      }
    },

    _tryResolve: function() {
      if (this.ctx.isHost && this.p1Answer && this.p2Answer) this._resolveRound();
    },

    _resolveRound: function() {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result';
      this._clearTimers();
      var correct = this.currentQ.answer;
      var p1Wrong = (this.p1Answer !== correct);
      var p2Wrong = (this.p2Answer !== correct);
      if (p1Wrong) this.p1Errors++;
      if (p2Wrong) this.p2Errors++;
      if (this.ctx.isHost) {
        this.ctx.network.send('st_result', {
          p1Answer: this.p1Answer,
          p2Answer: this.p2Answer,
          correct: correct,
          explanation: this.currentQ.explanation,
          p1Wrong: p1Wrong,
          p2Wrong: p2Wrong,
          p1Errors: this.p1Errors,
          p2Errors: this.p2Errors
        });
      }
      this._showResult(this.p1Answer, this.p2Answer, correct, this.currentQ.explanation, p1Wrong, p2Wrong);
    },

    _showResult: function(p1A, p2A, correct, expl, p1Wrong, p2Wrong) {
      var self = this;
      this._stopDeezer();
      document.getElementById('st-options').style.display = 'none';
      document.getElementById('st-wait').style.display = 'none';
      document.getElementById('st-timer').style.display = 'none';

      var ov = document.getElementById('st-ov');
      var bothWrong = p1Wrong && p2Wrong;
      var bothRight = !p1Wrong && !p2Wrong;

      document.getElementById('st-ov-ico').textContent = bothRight ? '🎉' : (bothWrong ? '😅' : '🎬');
      document.getElementById('st-ov-ttl').textContent = '🎵 ' + esc(correct);
      document.getElementById('st-ov-expl').textContent = expl || '';

      function badge(ans, name, col, isWrong) {
        var verdict = ans === null ? '⏳' : (isWrong ? '✗' : '✓');
        var vCol = ans === null ? '#555' : (isWrong ? '#f55a3a' : '#2af0a0');
        var label = isWrong
          ? '<div style="font-size:12px;color:#f55a3a;">+1 Fehler</div>'
          : '<div style="font-size:12px;color:#2af0a0;">Richtig!</div>';
        return [
          '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;">',
            '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:' + col + ';">' + esc(name) + '</div>',
            '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:20px;color:' + vCol + ';">' + verdict + ' ' + esc(ans || '—') + '</div>',
            label,
          '</div>'
        ].join('');
      }

      document.getElementById('st-ov-answers').innerHTML =
        badge(p1A, this.ctx.p1Name, '#3ab4f5', p1Wrong) +
        '<div style="color:#c0c0d8;padding-top:8px;">VS</div>' +
        badge(p2A, this.ctx.p2Name, '#f55a3a', p2Wrong);

      document.getElementById('st-ov-sc').innerHTML =
        '❌ ' + esc(this.ctx.p1Name) + ': ' + this.p1Errors + '/' + MAX_ERRORS +
        ' &nbsp;·&nbsp; ' +
        '❌ ' + esc(this.ctx.p2Name) + ': ' + this.p2Errors + '/' + MAX_ERRORS +
        ' &nbsp;·&nbsp; Runde ' + this.mini;

      ov.style.display = 'flex';
      this._drawDots();

      // Spielende: mindestens einer hat MAX_ERRORS erreicht UND einer hat mehr als der andere
      var eitherOver = this.p1Errors >= MAX_ERRORS || this.p2Errors >= MAX_ERRORS;
      var gameOver = eitherOver && (this.p1Errors !== this.p2Errors);
      var btn = document.getElementById('st-ov-btn');
      btn.textContent = gameOver ? 'AUFLÖSUNG ANZEIGEN' : 'NÄCHSTE RUNDE ▶';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('st_next', { gameOver: gameOver });
          if (gameOver) self._showFinal();
          else {
            self.mini++;
            self._startMini();
            ov.style.display = 'none';
          }
        };
      } else {
        btn.style.display = 'none';
      }
    },

    _showFinal: function() {
      var self = this;
      var p1Lost = this.p1Errors > this.p2Errors;
      var p2Lost = this.p2Errors > this.p1Errors;
      var winnerName = p1Lost ? this.ctx.p2Name : this.ctx.p1Name;
      var loserName  = p1Lost ? this.ctx.p1Name : this.ctx.p2Name;

      document.getElementById('st-ov-ico').textContent = '🏆';
      document.getElementById('st-ov-ttl').textContent = winnerName + ' gewinnt!';
      document.getElementById('st-ov-expl').textContent =
        loserName + ' hat ' + MAX_ERRORS + ' Fehler gesammelt und verliert. Herzlichen Glückwunsch, ' + winnerName + '!';
      document.getElementById('st-ov-answers').innerHTML = [
        '<div style="display:flex;flex-direction:column;align-items:center;gap:4px;">',
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:14px;color:#3ab4f5;">' + esc(this.ctx.p1Name) + '</div>',
          '<div style="font-size:28px;">' + (p1Lost ? '💀' : '🏆') + '</div>',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#c0c0d8;">❌ ' + this.p1Errors + ' Fehler</div>',
        '</div>',
        '<div style="color:#c0c0d8;padding-top:8px;font-size:20px;">VS</div>',
        '<div style="display:flex;flex-direction:column;align-items:center;gap:4px;">',
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:14px;color:#f55a3a;">' + esc(this.ctx.p2Name) + '</div>',
          '<div style="font-size:28px;">' + (p2Lost ? '💀' : '🏆') + '</div>',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:15px;color:#c0c0d8;">❌ ' + this.p2Errors + ' Fehler</div>',
        '</div>',
      ].join('');
      document.getElementById('st-ov-sc').innerHTML = 'Gespielt: ' + this.mini + ' Runden';

      var btn = document.getElementById('st-ov-btn');
      btn.textContent = 'ZUM HAUPTMENÜ';
      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('st_end_final', {});
          self._finish();
        };
      }
    },

    _updateWaitStatus: function() {
      document.getElementById('st-wait-p1').textContent = this.ctx.p1Name + ': ' + (this.p1Answer ? '✓ gewählt' : '…überlegt');
      document.getElementById('st-wait-p2').textContent = this.ctx.p2Name + ': ' + (this.p2Answer ? '✓ gewählt' : '…überlegt');
    },

    _drawDots: function() {
      var el = document.getElementById('st-dots');
      if (!el) return;
      var d1 = '', d2 = '';
      var bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 2px;border:2px solid ';
      for (var i = 0; i < MAX_ERRORS; i++) {
        d1 += '<span style="' + bs + (i < this.p1Errors ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Errors ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML =
        '<span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#3ab4f5;letter-spacing:.1em;">' + esc(this.ctx.p1Name) + '</span> ' +
        d1 +
        '<span style="color:#c0c0d8;margin:0 6px;font-size:11px;white-space:nowrap;">RUNDE ' + this.mini + '</span>' +
        d2 +
        ' <span style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;color:#f55a3a;letter-spacing:.1em;">' + esc(this.ctx.p2Name) + '</span>';
    },

    _setStatus: function(t, c, s) {
      var el = document.getElementById('st-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    _clearTimers: function() {
      clearTimeout(this._roundTimer);
      clearInterval(this._tickInterval);
    },

    _finish: function() {
      this.dead = true;
      var winner = this.p1Errors > this.p2Errors ? 'p2' : 'p1';
      this.onEnd({ winner: winner, details: '❌ ' + this.p1Errors + ' : ' + this.p2Errors });
    },

    destroy: function() {
      this.dead = true;
      this._stopDeezer();
      this.timers.forEach(clearTimeout);
      this._clearTimers();
      ['st_start_countdown','st_sync_question','st_answer','st_result','st_timeout','st_next','st_end_final','st_status_update'].forEach(function(ev) {
        this.ctx.network.off(ev);
      }, this);
    }
  };

  GamePool.register({
    id: 'soundtracks',
    name: 'Soundtracks',
    description: 'Ein Filmklassiker oder Serienhit wird abgespielt — erkennst du den Soundtrack? Beide Spieler antworten gleichzeitig. Wer zuerst 5 Fehler sammelt, hat verloren!',
    init: function(container, ctx, onEnd) { this._instance = new SoundtracksInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
