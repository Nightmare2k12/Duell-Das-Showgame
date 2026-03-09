(function () {

  var ANAGRAMS = [
[
[
    { scrambled: 'OIMAR',          answer: 'MARIO',           hint: 'Nintendos berühmter Klempner im Pilzkönigreich' },
    { scrambled: 'COSNI',          answer: 'SONIC',           hint: 'SEGAs blauer Igel, der superschnell rennt' },
    { scrambled: 'ADLZE',          answer: 'ZELDA',           hint: 'Nintendos Prinzessin – Link rettet sie in Hyrule' },
    { scrambled: 'IRYBK',          answer: 'KIRBY',           hint: 'Nintendos rosafarbenes Schluckwunder aus Pop-Star' }, // Korrigiert (O entfernt, I rein)
    { scrambled: 'MNAPAC',         answer: 'PACMAN',          hint: 'Gelbes Wesen frisst Punkte und flieht vor Geistern' },
    { scrambled: 'NILK',           answer: 'LINK',            hint: 'Grün gekleideter Held, der Zelda immer wieder rettet' }, // Korrigiert (E entfernt)
    { scrambled: 'LAOH',           answer: 'HALO',            hint: 'Master Chief kämpft gegen die Allianz' },
    { scrambled: 'LTUAFOL',        answer: 'FALLOUT',         hint: 'Postapokalyptisches Rollenspiel im Ödland' },
    { scrambled: 'OTNRFITE',       answer: 'FORTNITE',        hint: '100 Spieler, einer überlebt – bunte Battle-Royale-Welt' },
    { scrambled: 'TARCENFIM',      answer: 'MINECRAFT',       hint: 'Sandbox-Spiel mit pixeligen Blöcken – bau was du willst' }, // Korrigiert (K entfernt)
    { scrambled: 'MONEOPK',        answer: 'POKEMON',         hint: 'Fang sie alle – Taschenmonster von Nintendo' }, // Korrigiert (D entfernt)
    { scrambled: 'LIDOBA',         answer: 'DIABLO',          hint: 'Blizzards düsteres Action-RPG in Tristram' }, // Korrigiert (T entfernt)
    { scrambled: 'TRARCSFAT',      answer: 'STARCRAFT',       hint: 'Blizzards Echtzeit-Strategiespiel – Zerg, Protoss, Terraner' }, // Korrigiert (R gefehlt)
    { scrambled: 'UDOYLFALCT',     answer: 'CALL OF DUTY',    hint: 'Populärer Ego-Shooter in verschiedenen Kriegsszenarien' },
    { scrambled: 'FRADITLSE',      answer: 'STARFIELD',       hint: 'Bethesdas Weltraum-RPG zwischen den Sternen' },
    { scrambled: 'MRTAKORAI',      answer: 'MARIO KART',      hint: 'Rennen mit Pilzen und Bananenschalen auf bunten Strecken' }, // Korrigiert (E entfernt, R dazu)
    { scrambled: 'MSSUA',          answer: 'SAMUS',           hint: 'Metroid-Heldin in Rüstung – Nintendos Galactic Bounty Hunter' },
    { scrambled: 'XFATROS',        answer: 'STAR FOX',        hint: 'Nintendos Fuchs-Pilot Fox McCloud im Arwing-Jäger' },
    { scrambled: 'ARSONPE',        answer: 'PERSONA',         hint: 'Atlus JRPG – Schüler kämpfen mit Personas' },
    { scrambled: 'SYNAAFATNLFI',   answer: 'FINAL FANTASY',   hint: 'Square Enix JRPG-Reihe mit Kristallen und Chocobos' }, // Komplett neu (S,Y,N fehlten)
    { scrambled: 'KRSADULOS',      answer: 'DARK SOULS',      hint: 'From Softwares brutales Fantasy-RPG – You Died' },
    { scrambled: 'CTWERIH',        answer: 'WITCHER',         hint: 'CD Projekt RED – Geralt von Riva auf Monsterjagd' },
    { scrambled: 'OOGFDRWA',       answer: 'GOD OF WAR',      hint: 'Kratos und Atreus – Nordische Götter zittern' }, // Korrigiert (Jetzt 2x O)
    { scrambled: 'WARTARSS',       answer: 'STAR WARS',       hint: 'Luke Skywalker gegen das galaktische Imperium' },
    { scrambled: 'TIACTIN',        answer: 'TITANIC',         hint: 'Jack und Rose auf dem sinkenden Ozeanriesen' },
    { scrambled: 'XMRITA',         answer: 'MATRIX',          hint: 'Neo nimmt die rote Pille und entdeckt die Simulation' },
    { scrambled: 'RAATVA',         answer: 'AVATAR',          hint: "Blaue Na'vi auf dem Planeten Pandora" },
    { scrambled: 'HRVEAEATBR',     answer: 'BRAVEHEART',      hint: 'Mel Gibson als William Wallace – Freedom!' },
    { scrambled: 'HEFTDRTAEOGH',   answer: 'THE GODFATHER',   hint: 'Marlon Brando – ein Angebot, das man nicht ablehnen kann' }, // Komplett neu (T fehlte)
    { scrambled: 'DKRKINHGAT',     answer: 'DARK KNIGHT',     hint: 'Heath Ledger als Joker – „Why so serious?"' },
    { scrambled: 'BCLHUTFIG',      answer: 'FIGHT CLUB',      hint: 'Brad Pitt und Edward Norton – erste Regel: nicht drüber reden' },
    { scrambled: 'NITPUFILCOP',    answer: 'PULP FICTION',    hint: 'Tarantinos non-lineares Gangster-Meisterwerk' },
    { scrambled: 'NETCOIINP',      answer: 'INCEPTION',       hint: 'Leonardo DiCaprio bricht in Träume ein' },
    { scrambled: 'LTARTERSLNEI',   answer: 'INTERSTELLAR',    hint: 'Matthew McConaughey reist durch Wurmlöcher und Zeit' },
    { scrambled: 'RRKESTTA',       answer: 'STAR TREK',       hint: 'Raumschiff Enterprise – in unbekannte Galaxien' }, // Korrigiert (Zu viele T)
    { scrambled: 'MNPARSDIE',      answer: 'SPIDER-MAN',      hint: 'Peter Parker spinnt Netze durch New York' }, // Korrigiert (E war doppelt)
    { scrambled: 'NNJDEIAOSNIA',   answer: 'INDIANA JONES',   hint: 'Archäologe mit Peitsche und Hut auf Schatzsuche' }, // Korrigiert (I fehlte, falsches R)
    { scrambled: 'NMRNOIA',        answer: 'IRON MAN',        hint: 'Tony Stark in seinem Eisenanzug – I am Iron Man' }, // Korrigiert (D, E, T entfernt)
    { scrambled: 'AAIMNCCIPAEART', answer: 'CAPTAIN AMERICA', hint: 'Steve Rogers mit Schild – Avengers-Symbol' }, // Komplett neu (C, A, I fehlten)
    { scrambled: 'TAHCBEKRNALP',   answer: 'BLACK PANTHER',   hint: "T'Challa – König von Wakanda" }, // Komplett neu (P, E fehlten)
    { scrambled: 'GDORTEONCARTS',  answer: 'DOCTOR STRANGE',  hint: 'Benedict Cumberbatch als Meister der mystischen Künste' }, // Korrigiert (2x O, etc.)
    { scrambled: 'AINRAN',         answer: 'NARNIA',          hint: 'Löwe, Hexe und Kleiderschrank – magische Welt' },
    { scrambled: 'BOORCOP',        answer: 'ROBOCOP',         hint: 'Halbmenschlicher Polizist in Detroit der Zukunft' },
    { scrambled: 'AMOFRESTRSNR',   answer: 'TRANSFORMERS',    hint: 'Autobots gegen Decepticons – mehr als trifft das Auge' },
    { scrambled: 'SRBTUGHSSEOT',   answer: 'GHOSTBUSTERS',    hint: 'Wen wirst du rufen? – Geisterjäger in New York' }, // Korrigiert (T fehlte)
    { scrambled: 'RUPMNSEA',       answer: 'SUPERMAN',        hint: 'Stählernen Manns kryptonischer Superheld aus Krypton' }, // Korrigiert (L entfernt)
    { scrambled: 'FGEROAONHTMES',  answer: 'GAME OF THRONES', hint: 'Drachen, der Eiserne Thron und Winter is Coming' }, // Komplett neu
    { scrambled: 'GRNBEBKAADI',    answer: 'BREAKING BAD',    hint: 'Walter White wird zu Heisenberg – Say my name' }, // Korrigiert (E fehlte)
    { scrambled: 'RHTSNGRSGEITAN', answer: 'STRANGER THINGS', hint: 'Eleven und das Upside Down in Hawkins, Indiana' }, // Korrigiert (N, G fehlten)
    { scrambled: 'SDIFNRE',        answer: 'FRIENDS',         hint: 'Ross, Rachel, Monica, Chandler, Joey und Phoebe in NYC' },
    { scrambled: 'KDWLNIGEADAHTE', answer: 'THE WALKING DEAD',hint: 'Rick Grimes kämpft ums Überleben unter Zombies' }, // Korrigiert (E fehlte)
    { scrambled: 'BSRUCS',         answer: 'SCRUBS',          hint: 'J.D. und Turk als Ärzte im Sacred Heart Hospital' },
    { scrambled: 'FHCETOIFE',      answer: 'THE OFFICE',      hint: 'Michael Scott leitet das Scranton-Büro von Dunder Mifflin' }, // Korrigiert (H, O waren doppelt)
    { scrambled: 'TWLDORSEW',      answer: 'WESTWORLD',       hint: 'Futuristischer Wildwest-Park, in dem KI-Cowboys erwachen' },
    { scrambled: 'ANIDRLOMAATNHE', answer: 'THE MANDALORIAN', hint: 'Din Djarin und Grogu – This is the Way' }, // Korrigiert (E fehlte)
    { scrambled: 'EORANTOHSPS',    answer: 'THE SOPRANOS',    hint: 'Tony Soprano – Mafia-Boss zwischen Therapie und Geschäft' },
    { scrambled: 'FDNELISE',       answer: 'SEINFELD',        hint: 'Jerry, George, Elaine und Kramer – die Show über nichts' }, // Korrigiert (L war doppelt)
    { scrambled: 'THDOCRWOO',      answer: 'DOCTOR WHO',      hint: 'Der Doctor reist in der TARDIS durch Zeit und Raum' },
    { scrambled: 'PYBNISALDKERE',  answer: 'PEAKY BLINDERS',  hint: 'Tommy Shelby und die Shelby-Gangsterfamilie in Birmingham' }, // Korrigiert (E fehlte)
    { scrambled: 'GNIR',           answer: 'RING',            hint: 'Horrorfilm – sieben Tage nach dem Ansehen stirbst du' },
    { scrambled: 'SEAREG',         answer: 'GREASE',          hint: 'John Travolta und Olivia Newton-John – Summer Nights' }.
    { scrambled: 'TTIERS',           answer: 'TETRIS',           hint: 'Klassisches Puzzlespiel mit fallenden Blöcken aus Russland' },
    { scrambled: 'MODO',             answer: 'DOOM',             hint: 'Pionier der Ego-Shooter – Dämonenjagd auf dem Mars' },
    { scrambled: 'MISKYR',           answer: 'SKYRIM',           hint: 'Bethesdas legendäres RPG – Fus Ro Dah!' },
    { scrambled: 'DIRAMBORET',       answer: 'TOMB RAIDER',      hint: 'Lara Croft auf der Suche nach antiken Artefakten' },
    { scrambled: 'CFEAFSTMES',       answer: 'MASS EFFECT',      hint: 'Commander Shepard rettet die Galaxie vor den Reapern' },
    { scrambled: 'LTRPOA',           answer: 'PORTAL',           hint: 'The cake is a lie – Rätselspiel mit Aperture Science' },
    { scrambled: 'FLILAEHF',         answer: 'HALF-LIFE',        hint: 'Gordon Freeman kämpft mit einem Brecheisen gegen Aliens' },
    { scrambled: 'VILENTEDRIES',     answer: 'RESIDENT EVIL',    hint: 'Survival-Horror von Capcom mit Zombies und der Umbrella Corporation' },
    { scrambled: 'KOOBSICH',         answer: 'BIOSHOCK',         hint: 'Willkommen in Rapture – Big Daddies und Little Sisters' },
    { scrambled: 'GINSLACRSOMANI',   answer: 'ANIMAL CROSSING',  hint: 'Entspanntes Inselleben mit Tom Nook und tierischen Nachbarn' },
    { scrambled: 'KRAPISSCURAJ',     answer: 'JURASSIC PARK',    hint: 'Dinosaurier erwachen auf Isla Nublar zum Leben' },
    { scrambled: 'RRTTOYPEHAR',      answer: 'HARRY POTTER',     hint: 'Der Junge, der überlebte – Magie in Hogwarts' },
    { scrambled: 'SRVGEEAN',      answer: 'AVENGERS',     hint: 'Marvels Superhelden-Team vereint gegen Loki und Thanos' },
    { scrambled: 'DTAOILRAG',        answer: 'GLADIATOR',        hint: 'Maximus Decimus Meridius kämpft im Kolosseum um Rache' },
    { scrambled: 'NIELA',            answer: 'ALIEN',            hint: 'Im Weltraum hört dich niemand schreien – Ripley vs. Xenomorph' },
    { scrambled: 'TRNRMOAITE',       answer: 'TERMINATOR',       hint: 'Arnold Schwarzenegger sagt: I\'ll be back' },
    { scrambled: 'PUMGSERROTF',      answer: 'FORREST GUMP',     hint: 'Das Leben ist wie eine Schachtel Pralinen' },
    { scrambled: 'KOCRY',            answer: 'ROCKY',            hint: 'Sylvester Stallone als Boxer aus Philadelphia' },
    { scrambled: 'GINKNOILHET',      answer: 'THE LION KING',    hint: 'Simbas Weg zum König der Löwen mit Hakuna Matata' },
    { scrambled: 'SSPONSMIEHT',      answer: 'THE SIMPSONS',     hint: 'Gelbe Familie aus Springfield mit Homer, Marge, Bart, Lisa und Maggie' },
    { scrambled: 'KRPAHTUOS',        answer: 'SOUTH PARK',       hint: 'Cartman, Kenny, Kyle und Stan in einer bizarren Kleinstadt' },
    { scrambled: 'TSOL',             answer: 'LOST',             hint: 'Flug 815 stürzt auf einer mysteriösen Insel ab' },
    { scrambled: 'YSEBOTH',          answer: 'THE BOYS',         hint: 'Korrupte Superhelden wie Homelander werden gejagt' },
    { scrambled: 'RRROMIKCALB',      answer: 'BLACK MIRROR',     hint: 'Dystopische Sci-Fi-Anthologie-Serie über die dunkle Seite der Technik' },
    { scrambled: 'VDIEEETCETUTR',    answer: 'TRUE DETECTIVE',   hint: 'Düstere Krimiserie – Staffel 1 glänzt mit Matthew McConaughey und Woody Harrelson' },
    { scrambled: 'RXTEED',           answer: 'DEXTER',           hint: 'Forensiker beim Miami Metro Police Department und Serienkiller in der Nacht' },
    { scrambled: 'MAGEIQDUS',        answer: 'SQUID GAME',       hint: 'Tödliche koreanische Kinderspiele um ein riesiges Preisgeld' },
    { scrambled: 'FXEIHTLSE',        answer: 'THE X-FILES',      hint: 'Mulder und Scully untersuchen paranormale Phänomene – Die Wahrheit ist irgendwo da draußen' },
    { scrambled: 'SOCEUSSCIN',       answer: 'SUCCESSION',       hint: 'Intrigen und Machtkämpfe in der schwerreichen Roy-Familie' },
    { scrambled: 'STFLOUASHET',      answer: 'THE LAST OF US',   hint: 'Joel und Ellie auf einer gefährlichen Reise durch ein infiziertes Amerika' },
    { scrambled: 'DIMETRO',          answer: 'METROID',          hint: 'Nintendos Sci-Fi-Klassiker mit Samus Aran' },
    { scrambled: 'CHAVWORET',       answer: 'OVERWATCH',        hint: 'Blizzards Team-Shooter mit Helden wie Tracer und Winston' },
    { scrambled: 'TRALAVON',        answer: 'VALORANT',         hint: 'Taktik-Shooter von Riot Games mit Agenten-Fähigkeiten' },
    { scrambled: 'RODBOBLEON',      answer: 'BLOODBORNE',       hint: 'Düsteres From-Software-Spiel in der Stadt Yharnam' },
    { scrambled: 'ROIKES',          answer: 'SEKIRO',           hint: 'Einarmiger Wolf kämpft im feudalen Japan' },
    { scrambled: 'UNKPBERYC',       answer: 'CYBERPUNK',        hint: 'Düstere Zukunft in Night City mit Keanu Reeves' },
    { scrambled: 'KEUQA',           answer: 'QUAKE',            hint: 'Legendärer Arena-Shooter von id Software' },
    { scrambled: 'LFIEATEBTLD',     answer: 'BATTLEFIELD',      hint: 'Große Kriegsszenarien mit Panzern und Zerstörung' },
    { scrambled: 'RARIETRA',        answer: 'TERRARIA',         hint: '2D-Sandbox-Abenteuer voller Bosse und Erze' },
    { scrambled: 'XBOLRO',          answer: 'ROBLOX',           hint: 'Plattform, auf der Nutzer eigene Spiele erstellen' },
    { scrambled: 'LDONDRABERS',     answer: 'BORDERLANDS',      hint: 'Loot-Shooter auf Pandora mit Claptrap' },
    { scrambled: 'ENTSOWFLEIN',     answer: 'WOLFENSTEIN',      hint: 'B.J. Blazkowicz kämpft gegen ein Schreckensregime' },
    { scrambled: 'SAHDE',           answer: 'HADES',            hint: 'Roguelike, in dem man aus der griechischen Unterwelt flieht' },
    { scrambled: 'SETECEL',         answer: 'CELESTE',          hint: 'Herausforderndes Jump-and-Run über das Besteigen eines Berges' },
    { scrambled: 'OPSRY',           answer: 'SPYRO',            hint: 'Der kleine lila Drache, der Edelsteine sammelt' },
    { scrambled: 'NETKEK',          answer: 'TEKKEN',           hint: 'Berühmte Fighting-Game-Reihe um den Iron Fist Tournament' },
    { scrambled: 'LALDOGZI',        answer: 'GODZILLA',         hint: 'Die berühmteste Riesenechse der Filmgeschichte' },
    { scrambled: 'ENTET',           answer: 'TENET',            hint: 'Christopher Nolans Film über invertierte Zeit' },
    { scrambled: 'IJMNUAJ',         answer: 'JUMANJI',          hint: 'Ein Brettspiel, das den Dschungel ins Wohnzimmer bringt' },
    { scrambled: 'LELOTARUTAI',     answer: 'RATATOUILLE',      hint: 'Eine Ratte wird zum Gourmetkoch in Paris' },
    { scrambled: 'KERHS',           answer: 'SHREK',            hint: 'Der grüne Oger, der seinen Sumpf zurückhaben will' },
    { scrambled: 'ZENROF',          answer: 'FROZEN',           hint: 'Disney-Film mit Elsa, Anna und Olaf' },
    { scrambled: 'ODAEPDLO',        answer: 'DEADPOOL',         hint: 'Der "Söldner mit der großen Klappe" im roten Anzug' },
    { scrambled: 'NYBRLOCHE',       answer: 'CHERNOBYL',        hint: 'Packende Miniserie über die Atomkatastrophe von 1986' },
    { scrambled: 'ROGFA',           answer: 'FARGO',            hint: 'Krimiserie und Film über bizarre Verbrechen im Schnee' },
    { scrambled: 'URALRATPENUS',    answer: 'SUPERNATURAL',     hint: 'Die Winchester-Brüder jagen Dämonen und Geister' },
    { scrambled: 'KCOSLREH',        answer: 'SHERLOCK',         hint: 'Der modernisierte Meisterdetektiv aus der Baker Street' },
    { scrambled: 'KEMACEAPER',      answer: 'PEACEMAKER',       hint: 'John Cena als Antiheld, der Frieden um jeden Preis will' },
    { scrambled: 'TAYOBAENT',       answer: 'BAYONETTA',        hint: 'Actionspiel über eine Hexe mit Pistolen an den Schuhen' },
    { scrambled: 'ONISAC',          answer: 'CASINO',           hint: 'Robert De Niro und Joe Pesci im Las Vegas der Mafia' },
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

  function beepWin()  { beep(523,0.08,'sine',0.15); setTimeout(function(){beep(659,0.08,'sine',0.15);},100); setTimeout(function(){beep(784,0.2,'sine',0.18);},200); }
  function beepLose() { beep(220,0.25,'sawtooth',0.12); }
  function beepBuzz() { beep(660,0.06,'sine',0.15); setTimeout(function(){beep(880,0.06,'sine',0.15);},80); }

  function AnagrammAlarmInstance(container, ctx, onEnd) {
    this.container              = container;
    this.ctx                    = ctx;
    this.onEnd                  = onEnd;
    this.dead                   = false;
    this.mini                   = 1;
    this.p1Wins                 = 0;
    this.p2Wins                 = 0;
    this.timers                 = [];
    this._roundTimer            = null;
    this._tickInterval          = null;
    this._hintTimer             = null;
    this._hintCountdownInterval = null;
    this._inputTimerInterval    = null;
    this._inputTimeLeft         = 15;
    this.phase                  = 'idle';
    this.currentQ               = null;
    this._deck                  = [];
    this._timeLeft              = 60;
    this._buzzedBy              = null;
    this._p1Wrong               = false;
    this._p2Wrong               = false;
    this._p1Answer              = null;
    this._p2Answer              = null;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  AnagrammAlarmInstance.prototype = {

    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'aa-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:center;',
        'position:relative;overflow:hidden;padding:16px 20px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>',
        '<div id="aa-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:14px;min-height:28px;"></div>',
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:10px;">Anagramm-Alarm \xb7 Erkenne den Titel!</div>',
        '<div id="aa-timer" style="font-size:22px;color:#f0c030;letter-spacing:.1em;margin-bottom:6px;font-family:\'Barlow Condensed\',sans-serif;display:none;">1:00</div>',
        '<div id="aa-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:30px;margin-bottom:10px;text-align:center;transition:color .2s;"></div>',
        '<button id="aa-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-bottom:18px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">RUNDE STARTEN</button>',
        '<div id="aa-scrambled-wrap" style="display:none;flex-direction:column;align-items:center;gap:8px;margin-bottom:14px;width:100%;max-width:460px;">',
          '<div id="aa-scrambled" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(28px,7vw,52px);letter-spacing:.25em;color:#f0c030;text-align:center;word-break:break-all;padding:10px 18px;border:2px solid rgba(240,192,48,.25);background:rgba(240,192,48,.05);clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));"></div>',
          '<div id="aa-hint-countdown" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;color:#6060a0;letter-spacing:.15em;min-height:18px;text-align:center;text-transform:uppercase;transition:color .3s;"></div>',
          '<div id="aa-hint" style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;color:#a0a0bc;letter-spacing:.1em;min-height:20px;text-align:center;opacity:0;transition:opacity .6s;max-width:380px;"></div>',
        '</div>',
        '<div id="aa-buzz-wrap" style="display:none;flex-direction:column;align-items:center;gap:10px;margin-bottom:10px;width:100%;max-width:420px;">',
          '<button id="aa-buzz-btn" style="width:100%;background:rgba(240,192,48,.08);border:2px solid #f0c030;color:#f0c030;font-family:\'Bebas Neue\',sans-serif;font-size:clamp(20px,4vw,32px);letter-spacing:.18em;padding:16px 10px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));transition:background .15s,box-shadow .15s;">&#9889; BUZZERN</button>',
        '</div>',
        '<div id="aa-input-wrap" style="display:none;flex-direction:column;align-items:center;gap:10px;margin-bottom:10px;width:100%;max-width:420px;">',
          '<div id="aa-input-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#f0c030;text-transform:uppercase;text-align:center;"></div>',
          '<div id="aa-input-timer" style="font-size:32px;color:#f0c030;letter-spacing:.1em;font-family:\'Barlow Condensed\',sans-serif;">15</div>',
          '<input id="aa-text-input" type="text" autocomplete="off" autocorrect="off" spellcheck="false" style="width:100%;box-sizing:border-box;background:rgba(255,255,255,.05);border:2px solid #f0c030;color:#fff;font-family:\'Bebas Neue\',sans-serif;font-size:clamp(20px,4vw,30px);letter-spacing:.15em;padding:12px 16px;outline:none;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));text-align:center;" placeholder="Antwort eingeben \u2026">',
          '<button id="aa-submit-btn" style="width:100%;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;letter-spacing:.15em;padding:12px 10px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">ABSCHICKEN &#10003;</button>',
        '</div>',
        '<div id="aa-wait" style="display:none;flex-direction:column;align-items:center;gap:4px;margin-bottom:10px;">',
          '<div id="aa-wait-p1" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#3ab4f5;text-transform:uppercase;"></div>',
          '<div id="aa-wait-p2" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#f55a3a;text-transform:uppercase;"></div>',
        '</div>',
        '<div id="aa-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:28px;">',
          '<div id="aa-ov-ico" style="font-size:52px;"></div>',
          '<div id="aa-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(26px,7vw,50px);color:#f0c030;letter-spacing:.05em;"></div>',
          '<div id="aa-ov-answer" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(20px,5vw,36px);color:#2af0a0;letter-spacing:.15em;margin:2px 0;"></div>',
          '<div id="aa-ov-hint" style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;color:#a0a0bc;max-width:380px;line-height:1.5;margin-bottom:4px;"></div>',
          '<div id="aa-ov-badges" style="display:flex;gap:20px;margin:4px 0;"></div>',
          '<div id="aa-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
          '<button id="aa-ov-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">WEITER &#8594;</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);
      this._drawDots();

      if (this.ctx.isHost) {
        document.getElementById('aa-start-btn').addEventListener('click', function() {
          this.style.display = 'none';
          self.ctx.network.send('aa_start_countdown', {});
          self._countdown();
        });
      }

      // FIX: _submitAnswer direkt verdrahten (war fälschlich _doSubmit)
      document.getElementById('aa-buzz-btn').addEventListener('click', function() { self._onBuzz(); });
      document.getElementById('aa-submit-btn').addEventListener('click', function() { self._submitAnswer(false); });
      document.getElementById('aa-text-input').addEventListener('keydown', function(e) { if (e.key === 'Enter') self._submitAnswer(false); });
    },

    _setupNet: function() {
      var self = this;

      this.ctx.network.on('aa_start_countdown', function() {
        if (!self.ctx.isHost) self._countdown();
      });
      this.ctx.network.on('aa_sync_question', function(msg) {
        if (self.ctx.isHost) return;
        self.currentQ = { scrambled: msg.scrambled, answer: msg.answer, hint: msg.hint };
        self._showAnagram(msg.scrambled);
        self._startBuzzPhase();
      });
      this.ctx.network.on('aa_buzz', function(msg) {
        if (self.ctx.isHost && msg.player === 'p2') self._handleBuzz('p2');
        if (!self.ctx.isHost && msg.player === 'p1') {
          self._buzzedBy = 'p1';
          self._disableBuzzBtn();
          self._setStatus(esc(self.ctx.p1Name) + ' HAT GEBUZZERT!', '#3ab4f5', '18px');
        }
      });
      this.ctx.network.on('aa_buzz_granted', function(msg) {
        if (self.ctx.isHost) return;
        self._buzzedBy = msg.player;
        if (msg.player === 'p2') self._showInputForMe();
        else self._showWaitForOther('p1');
      });
      this.ctx.network.on('aa_answer', function(msg) {
        if (self.ctx.isHost) self._handleAnswer('p2', msg.text);
      });
      this.ctx.network.on('aa_show_hint', function() {
        if (!self.ctx.isHost) self._revealHint();
      });
      this.ctx.network.on('aa_wrong', function(msg) {
        if (self.ctx.isHost) return;
        self._p1Wrong = msg.p1Wrong;
        self._p2Wrong = msg.p2Wrong;
        if (msg.nowAnswering === 'p2') self._showInputForMe();
        else if (msg.nowAnswering === 'p1') self._showWaitForOther('p1');
        else self._setStatus('Beide falsch \u2026', '#f55a3a', '18px');
      });
      this.ctx.network.on('aa_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._showResult(msg.winner, msg.p1Answer, msg.p2Answer, msg.correct, msg.hint, msg.p1Points, msg.p2Points);
      });
      this.ctx.network.on('aa_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._finish();
        else { self.mini++; self._startMini(); document.getElementById('aa-ov').style.display = 'none'; }
      });
    },

    _startMini: function() {
      if (this.dead) return;
      this.phase = 'idle';
      this._buzzedBy = null;
      this._p1Wrong = false;
      this._p2Wrong = false;
      this._p1Answer = null;
      this._p2Answer = null;
      this._clearAllTimers();
      this._hideInput();
      this._hideBuzzArea();
      var swrap = document.getElementById('aa-scrambled-wrap');
      if (swrap) swrap.style.display = 'none';
      document.getElementById('aa-wait').style.display = 'none';
      document.getElementById('aa-timer').style.display = 'none';
      this._setStatus('Bereit?', '#c0c0d8', '18px');
      if (this.ctx.isHost) {
        var btn = document.getElementById('aa-start-btn');
        if (btn) btn.style.display = 'block';
        if (this._deck.length === 0) {
          var indices = ANAGRAMS.map(function(_, i) { return i; });
          for (var i = indices.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var tmp = indices[i]; indices[i] = indices[j]; indices[j] = tmp;
          }
          this._deck = indices;
        }
        this.currentQ = ANAGRAMS[this._deck.shift()];
      }
      this._drawDots();
    },

    _countdown: function() {
      if (this.dead) return;
      var self = this, n = 3;
      this.phase = 'countdown';
      var startBtn = document.getElementById('aa-start-btn');
      if (startBtn) startBtn.style.display = 'none';
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
      this.ctx.network.send('aa_sync_question', {
        scrambled: this.currentQ.scrambled,
        answer: this.currentQ.answer,
        hint: this.currentQ.hint
      });
      this._showAnagram(this.currentQ.scrambled);
      this._startBuzzPhase();
    },

    _showAnagram: function(scrambled) {
      var wrap = document.getElementById('aa-scrambled-wrap');
      var el   = document.getElementById('aa-scrambled');
      var hint = document.getElementById('aa-hint');
      var hcd  = document.getElementById('aa-hint-countdown');
      if (wrap) wrap.style.display = 'flex';
      if (el)   el.textContent = scrambled;
      if (hint) { hint.textContent = ''; hint.style.opacity = '0'; }
      if (hcd)  hcd.textContent = '';
    },

    _revealHint: function() {
      if (!this.currentQ) return;
      var hint = document.getElementById('aa-hint');
      var hcd  = document.getElementById('aa-hint-countdown');
      if (hint) { hint.textContent = '\uD83D\uDCA1 ' + this.currentQ.hint; hint.style.opacity = '1'; }
      if (hcd)  hcd.textContent = '';
    },

    _startBuzzPhase: function() {
      var self = this;
      this.phase = 'buzzing';
      var buzzWrap = document.getElementById('aa-buzz-wrap');
      if (buzzWrap) buzzWrap.style.display = 'flex';
      var buzzBtn = document.getElementById('aa-buzz-btn');
      if (buzzBtn) { buzzBtn.disabled = false; buzzBtn.style.opacity = '1'; }
      this._setStatus('WER KENNT DEN TITEL?', '#f0c030', '18px');

      // NEU: Hinweis-Countdown (30 Sekunden)
      var HINT_DELAY = 30;
      var hcdLeft = HINT_DELAY;
      var hcd = document.getElementById('aa-hint-countdown');
      if (hcd) hcd.textContent = 'Hinweis erscheint in ' + hcdLeft + ' Sekunden';

      this._hintCountdownInterval = setInterval(function() {
        if (self.dead || self.phase !== 'buzzing') {
          clearInterval(self._hintCountdownInterval);
          self._hintCountdownInterval = null;
          return;
        }
        hcdLeft--;
        if (hcd) {
          if (hcdLeft > 0) {
            hcd.textContent = 'Hinweis erscheint in ' + hcdLeft + (hcdLeft <= 5 ? ' Sekunden \u26a0\ufe0f' : ' Sekunden');
            if (hcdLeft <= 5) hcd.style.color = '#f0a030';
          } else {
            hcd.textContent = '';
            hcd.style.color = '#6060a0';
            clearInterval(self._hintCountdownInterval);
            self._hintCountdownInterval = null;
          }
        }
      }, 1000);

      // Hinweis nach 30s anzeigen
      this._hintTimer = setTimeout(function() {
        if (self.dead || self.phase !== 'buzzing') return;
        self._revealHint();
        if (self.ctx.isHost) self.ctx.network.send('aa_show_hint', {});
      }, 30000);
    },

    _disableBuzzBtn: function() {
      var b = document.getElementById('aa-buzz-btn');
      if (b) { b.disabled = true; b.style.opacity = '0.4'; }
    },

    _onBuzz: function() {
      if (this.phase !== 'buzzing' || this.dead) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (me === 'p1' && this._p1Wrong) return;
      if (me === 'p2' && this._p2Wrong) return;

      beepBuzz();
      if (this.ctx.isHost) {
        this.ctx.network.send('aa_buzz', { player: 'p1' });
        this._handleBuzz('p1');
      } else {
        this.ctx.network.send('aa_buzz', { player: 'p2' });
        this._disableBuzzBtn();
        this._setStatus('Buzz gesendet\u2026', '#f0c030', '18px');
      }
    },

    _handleBuzz: function(player) {
      if (this._buzzedBy !== null) return;
      if (player === 'p1' && this._p1Wrong) return;
      if (player === 'p2' && this._p2Wrong) return;
      if (!this.ctx.isHost) return;

      this._buzzedBy = player;
      clearInterval(this._tickInterval); this._tickInterval = null;

      // NEU: Hinweis-Countdown beim Buzzern stoppen
      clearInterval(this._hintCountdownInterval); this._hintCountdownInterval = null;
      var hcd = document.getElementById('aa-hint-countdown');
      if (hcd) { hcd.textContent = ''; hcd.style.color = '#6060a0'; }

      this._disableBuzzBtn();
      this.ctx.network.send('aa_buzz_granted', { player: player });

      if (player === 'p1') this._showInputForMe();
      else this._showWaitForOther('p2');
    },

    _showInputForMe: function() {
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (me !== this._buzzedBy) return;

      this.phase = me === 'p1' ? 'p1_answering' : 'p2_answering';
      var wrap  = document.getElementById('aa-input-wrap');
      var label = document.getElementById('aa-input-label');
      var inp   = document.getElementById('aa-text-input');
      var sub   = document.getElementById('aa-submit-btn');
      this._hideBuzzArea();
      if (wrap)  wrap.style.display = 'flex';
      if (label) label.textContent = '\u270F\uFE0F Du hast gebuzzert \u2013 15 Sekunden!';
      if (inp)   { inp.value = ''; inp.disabled = false; setTimeout(function(){ inp.focus(); }, 50); }
      // FIX: Submit-Button bei jeder Anzeige aktivieren
      if (sub)   sub.disabled = false;
      this._setStatus('SCHNELL TIPPEN!', '#f0c030', '18px');
      this._startInputTimer();
    },

    _showWaitForOther: function(player) {
      var name = (player === 'p1') ? this.ctx.p1Name : this.ctx.p2Name;
      this._hideBuzzArea();
      this._setStatus(esc(name) + ' ANTWORTET\u2026', '#f0c030', '18px');
    },

    _startInputTimer: function() {
      var self = this;
      this._inputTimeLeft = 15;
      var el = document.getElementById('aa-input-timer');
      if (el) { el.textContent = '15'; el.style.color = '#f0c030'; }
      this._inputTimerInterval = setInterval(function() {
        if (self.dead) return;
        self._inputTimeLeft--;
        if (el) {
          el.textContent = self._inputTimeLeft;
          if (self._inputTimeLeft <= 5) el.style.color = '#f55a3a';
        }
        if (self._inputTimeLeft <= 0) {
          clearInterval(self._inputTimerInterval);
          self._inputTimerInterval = null;
          self._submitAnswer(true);
        }
      }, 1000);
    },

    _clearInputTimer: function() {
      clearInterval(this._inputTimerInterval);
      this._inputTimerInterval = null;
    },

    _submitAnswer: function(timeout) {
      this._clearInputTimer();
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (this._buzzedBy !== me) return;

      var inp  = document.getElementById('aa-text-input');
      var text = timeout ? '' : (inp ? inp.value.trim().toUpperCase() : '');
      if (inp) inp.disabled = true;
      var sub = document.getElementById('aa-submit-btn');
      if (sub) sub.disabled = true;

      if (this.ctx.isHost) {
        this._handleAnswer('p1', text);
      } else {
        this.ctx.network.send('aa_answer', { text: text });
        this._hideInput();
        this._setStatus('Warte auf Aufl\u00F6sung\u2026', '#a0a0bc', '16px');
      }
    },

    _handleAnswer: function(player, text) {
      if (!this.ctx.isHost) return;
      var correct = this.currentQ.answer.toUpperCase();
      var isRight = text !== '' && text === correct;

      if (player === 'p1') { this._p1Wrong = !isRight; this._p1Answer = text; }
      else                  { this._p2Wrong = !isRight; this._p2Answer = text; }

      if (isRight) {
        this._resolveRound(player);
      } else {
        var other = (player === 'p1') ? 'p2' : 'p1';
        var otherWrong = (other === 'p1') ? this._p1Wrong : this._p2Wrong;

        if (otherWrong) {
          this.ctx.network.send('aa_wrong', { p1Wrong: true, p2Wrong: true, nowAnswering: null });
          this._resolveRound(null);
        } else {
          this._buzzedBy = other;
          this.phase = (other === 'p1') ? 'p1_answering' : 'p2_answering';
          this.ctx.network.send('aa_wrong', { p1Wrong: this._p1Wrong, p2Wrong: this._p2Wrong, nowAnswering: other });
          this.ctx.network.send('aa_buzz_granted', { player: other });
          if (other === 'p1') this._showInputForMe();
          else this._showWaitForOther('p2');
        }
      }
    },

    _resolveRound: function(winner) {
      if (this.phase === 'result' || this.dead) return;
      this.phase = 'result';
      this._clearAllTimers();

      var p1Points = (winner === 'p1') ? 1 : 0;
      var p2Points = (winner === 'p2') ? 1 : 0;
      this.p1Wins += p1Points;
      this.p2Wins += p2Points;

      var p1A = this._p1Answer || (this._p1Wrong ? '(falsch)' : '\u2014');
      var p2A = this._p2Answer || (this._p2Wrong ? '(falsch)' : '\u2014');

      this.ctx.network.send('aa_result', {
        winner: winner,
        p1Answer: p1A, p2Answer: p2A,
        correct: this.currentQ.answer,
        hint: this.currentQ.hint,
        p1Points: p1Points, p2Points: p2Points,
        p1Wins: this.p1Wins, p2Wins: this.p2Wins
      });
      this._showResult(winner, p1A, p2A, this.currentQ.answer, this.currentQ.hint, p1Points, p2Points);
    },

    _showResult: function(winner, p1A, p2A, correct, hint, p1P, p2P) {
      var self = this;
      this._hideInput();
      this._hideBuzzArea();
      var swrap = document.getElementById('aa-scrambled-wrap');
      if (swrap) swrap.style.display = 'none';
      document.getElementById('aa-wait').style.display = 'none';
      document.getElementById('aa-timer').style.display = 'none';

      if (winner) beepWin(); else beepLose();

      document.getElementById('aa-ov-ico').textContent     = winner ? '\uD83C\uDF89' : '\uD83D\uDCA5';
      document.getElementById('aa-ov-ttl').textContent     = winner ? 'RICHTIG!' : 'AUFGEL\u00D6ST!';
      document.getElementById('aa-ov-answer').textContent  = correct;
      document.getElementById('aa-ov-hint').textContent    = hint || '';

      function badge(ans, name, col, pts, isW) {
        var vCol = isW ? '#2af0a0' : (ans && ans !== '\u2014' ? '#f55a3a' : '#c0c0d8');
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:' + col + ';">' + esc(name) + '</div>' +
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:20px;color:' + vCol + ';">' + (isW ? '\u2713 ' : '') + esc(ans || '\u2014') + '</div>' +
          (pts > 0 ? '<div style="font-size:12px;color:#2af0a0;">+' + pts + ' Punkt</div>' : '') +
          '</div>';
      }

      document.getElementById('aa-ov-badges').innerHTML =
        badge(p1A, this.ctx.p1Name, '#3ab4f5', p1P, winner === 'p1') +
        '<div style="color:#c0c0d8;padding-top:8px;">VS</div>' +
        badge(p2A, this.ctx.p2Name, '#f55a3a', p2P, winner === 'p2');

      document.getElementById('aa-ov-sc').innerHTML =
        this.p1Wins + ' : ' + this.p2Wins + ' &nbsp;&middot;&nbsp; Ziel: 5 Punkte';

      document.getElementById('aa-ov').style.display = 'flex';
      this._drawDots();

      var gameOver = this.p1Wins >= 5 || this.p2Wins >= 5;
      var btn = document.getElementById('aa-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMEN\u00DC' : 'N\u00C4CHSTE RUNDE';
      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('aa_next', { gameOver: gameOver });
          if (gameOver) self._finish();
          else { self.mini++; self._startMini(); document.getElementById('aa-ov').style.display = 'none'; }
        };
      } else {
        btn.style.display = 'none';
      }
    },

    _hideInput:    function() { var w = document.getElementById('aa-input-wrap');  if (w) w.style.display = 'none'; },
    _hideBuzzArea: function() { var w = document.getElementById('aa-buzz-wrap');   if (w) w.style.display = 'none'; },
    _setStatus: function(t, c, s) {
      var el = document.getElementById('aa-status');
      if (el) { el.textContent = t; el.style.color = c || '#c0c0d8'; el.style.fontSize = s || '18px'; }
    },
    _drawDots: function() {
      var el = document.getElementById('aa-dots'); if (!el) return;
      var d1 = '', d2 = '';
      var bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 2px;border:2px solid ';
      for (var i = 0; i < 5; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML = d1 + '<span style="color:#c0c0d8;margin:0 10px;font-size:12px;">RUNDE ' + this.mini + '</span>' + d2;
    },
    _clearAllTimers: function() {
      clearTimeout(this._roundTimer);
      clearInterval(this._tickInterval);
      clearTimeout(this._hintTimer);
      clearInterval(this._inputTimerInterval);
      clearInterval(this._hintCountdownInterval);
      this._tickInterval          = null;
      this._hintTimer             = null;
      this._inputTimerInterval    = null;
      this._hintCountdownInterval = null;
    },
    _finish: function() {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= 5 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },
    destroy: function() {
      this.dead = true;
      this.timers.forEach(clearTimeout);
      this._clearAllTimers();
      var evts = ['aa_start_countdown','aa_sync_question','aa_buzz','aa_buzz_granted',
                  'aa_answer','aa_show_hint','aa_wrong','aa_result','aa_next'];
      var self = this;
      evts.forEach(function(ev) { try { self.ctx.network.off(ev); } catch(e) {} });
    }
  };

  GamePool.register({
    id:          'anagramm-alarm',
    name:        'Anagramm-Alarm',
    description: 'Buchstaben eines ber\u00FChmten Titels sind durcheinander gew\u00FCrfelt. Buzzere und l\u00F6se das R\u00E4tsel in 15 Sekunden! Wer zuerst 5 Punkte hat, gewinnt.',
    init:        function(container, ctx, onEnd) { this._instance = new AnagrammAlarmInstance(container, ctx, onEnd); },
    destroy:     function() { if (this._instance) this._instance.destroy(); }
  });

})();
