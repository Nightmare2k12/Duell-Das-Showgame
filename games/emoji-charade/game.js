(function () {

  // ═══════════════════════════════════════════════════════════
  // FRAGEN-DATENBANK — Emoji Charade (Filme & Videospiele)
  // Alle Einträge haben genau 4 Emojis; Stage 1 zeigt 3, Stage 2 zeigt 4
  // ═══════════════════════════════════════════════════════════
  var QUESTIONS = [
    // ── FILME ───────────────────────────────────────────────
    { emojis: ['🦁','👑','🌍','🎶'], answer: 'Der König der Löwen', aliases: ['lion king','koenig der loewen','konig der loewen'], hints: ['Der König der Löwen','Bambi','Tarzan','Mulan'] },
    { emojis: ['🕷️','🕸️','🦸','🗽'], answer: 'Spider-Man', aliases: ['spiderman','spider man'], hints: ['Spider-Man','Batman','Superman','Ant-Man'] },
    { emojis: ['🧊','👸','❄️','⛄'], answer: 'Die Eiskönigin', aliases: ['frozen','eiskoenigin','frozen die eiskoenigin'], hints: ['Die Eiskönigin','Schneewittchen','Rapunzel','Cinderella'] },
    { emojis: ['🐟','🌊','🔍','🐡'], answer: 'Findet Nemo', aliases: ['finding nemo','nemo'], hints: ['Findet Nemo','Findet Dorie','Aquaman','Die kleine Meerjungfrau'] },
    { emojis: ['🧙','💍','🏔️','🌋'], answer: 'Der Herr der Ringe', aliases: ['lord of the rings','lotr','herr der ringe'], hints: ['Der Herr der Ringe','Game of Thrones','Harry Potter','Merlin'] },
    { emojis: ['🧙','⚡','🏫','🦉'], answer: 'Harry Potter', aliases: ['harry potter'], hints: ['Harry Potter','Merlin','Die Zauberer vom Waverly Place','Shazam'] },
    { emojis: ['🌹','🐾','🏰','💛'], answer: 'Die Schöne und das Biest', aliases: ['beauty and the beast','schone und das biest','schoene und das biest'], hints: ['Die Schöne und das Biest','Dornröschen','Aschenputtel','Shrek'] },
    { emojis: ['🚀','🌌','⭐','⚔️'], answer: 'Star Wars', aliases: ['starwars','star wars'], hints: ['Star Wars','Star Trek','Guardians of the Galaxy','Interstellar'] },
    { emojis: ['🦈','🏖️','😱','🩸'], answer: 'Der weiße Hai', aliases: ['jaws','weisse hai','weiße hai'], hints: ['Der weiße Hai','Sharknado','Meg','The Deep'] },
    { emojis: ['🦖','🌴','🏝️','🧬'], answer: 'Jurassic Park', aliases: ['jurassicpark','jurassic world'], hints: ['Jurassic Park','The Lost World','Dinosaurier','King Kong'] },
    { emojis: ['🤖','🔫','⏳','💀'], answer: 'Terminator', aliases: ['the terminator'], hints: ['Terminator','RoboCop','I, Robot','Ex Machina'] },
    { emojis: ['👊','🥊','🏆','🇺🇸'], answer: 'Rocky', aliases: ['rocky balboa'], hints: ['Rocky','Creed','Raging Bull','Cinderella Man'] },
    { emojis: ['👻','🚗','🎵','🔦'], answer: 'Ghostbusters', aliases: ['ghost busters'], hints: ['Ghostbusters','Poltergeist','Beetlejuice','The Haunting'] },
    { emojis: ['🧸','❤️','🌈','🚀'], answer: 'Toy Story', aliases: ['toystory'], hints: ['Toy Story','Paddington','A Bug\'s Life','Monsters, Inc.'] },
    { emojis: ['🦁','🧥','❄️','🚪'], answer: 'Die Chroniken von Narnia', aliases: ['narnia','chronicles of narnia'], hints: ['Die Chroniken von Narnia','Der Herr der Ringe','Eragon','Die Unendliche Geschichte'] },
    { emojis: ['🎩','🃏','🦇','🌃'], answer: 'Batman', aliases: ['the batman','batman begins','dark knight'], hints: ['Batman','Spider-Man','The Joker','Watchmen'] },
    { emojis: ['💊','🕳️','🤯','🥋'], answer: 'Matrix', aliases: ['the matrix'], hints: ['Matrix','Inception','Dark City','Ready Player One'] },
    { emojis: ['🌪️','👧','🐕','🧲'], answer: 'Der Zauberer von Oz', aliases: ['wizard of oz','zauberer von oz'], hints: ['Der Zauberer von Oz','Fantasia','Alice im Wunderland','Mary Poppins'] },
    { emojis: ['🎭','😂','😢','🃏'], answer: 'Joker', aliases: ['the joker','joker film'], hints: ['Joker','Batman','Harley Quinn','Pennywise'] },
    { emojis: ['🏎️','💥','🌎','🔧'], answer: 'Fast & Furious', aliases: ['fast and furious','fast furious','f&f'], hints: ['Fast & Furious','Need for Speed','Mad Max','Rush'] },
    { emojis: ['🕵️','🔎','🧩','🎩'], answer: 'Sherlock Holmes', aliases: ['sherlock'], hints: ['Sherlock Holmes','Columbo','Hercule Poirot','Monk'] },
    { emojis: ['🌕','👨‍🚀','🚀','🌊'], answer: 'Apollo 13', aliases: ['apollo13'], hints: ['Apollo 13','Interstellar','The Martian','Gravity'] },
    { emojis: ['🦸','⚡','🏙️','🌞'], answer: 'Superman', aliases: ['man of steel','superman returns'], hints: ['Superman','The Flash','Thor','Captain Marvel'] },
    { emojis: ['🎪','🤡','🎈','💧'], answer: 'Es', aliases: ['it','it pennywise','stephen king it'], hints: ['Es','Clown','Poltergeist','Gremlins'] },
    { emojis: ['🚢','💔','🌊','🧊'], answer: 'Titanic', aliases: ['titanic film'], hints: ['Titanic','Das Boot','Poseidon','Waterworld'] },
    { emojis: ['👨','💊','🧪','🏜️'], answer: 'Breaking Bad', aliases: ['breakingbad','breaking bad'], hints: ['Breaking Bad','Scarface','The Wire','Ozark'] },
    { emojis: ['🌀','🦋','🧠','🏙️'], answer: 'Inception', aliases: ['inception film'], hints: ['Inception','Interstellar','Tenet','Shutter Island'] },
    { emojis: ['🐀','🍽️','👨‍🍳','🇫🇷'], answer: 'Ratatouille', aliases: ['ratatouille film'], hints: ['Ratatouille','Chef','Julie & Julia','Burnt'] },
    { emojis: ['🕰️','🔫','💰','💼'], answer: 'Pulp Fiction', aliases: ['pulpfiction'], hints: ['Pulp Fiction','Reservoir Dogs','Snatch','Lock Stock'] },
    { emojis: ['🦋','🏃','🍫','🪶'], answer: 'Forrest Gump', aliases: ['forrestgump','forrest gump'], hints: ['Forrest Gump','Cast Away','The Terminal','Big Fish'] },
    { emojis: ['🦊','❄️','🌲','👮'], answer: 'Zootopia', aliases: ['zooptopia','zootopia film','zootropolis'], hints: ['Zootopia','The Wild','Open Season','Over the Hedge'] },
    { emojis: ['🎲','🌿','🦁','🎮'], answer: 'Jumanji', aliases: ['jumanji film'], hints: ['Jumanji','Night at the Museum','Jurassic Park','Zathura'] },
    { emojis: ['👦','🏠','🤑','❄️'], answer: 'Kevin allein zu Haus', aliases: ['home alone','kevin allein zu haus','allein zu haus'], hints: ['Kevin allein zu Haus','Weihnachten mit Hindernissen','The Burbs','3 Ninjas'] },
    { emojis: ['🚁','🌿','🔫','☀️'], answer: 'Apocalypse Now', aliases: ['apocalypse now film'], hints: ['Apocalypse Now','Full Metal Jacket','Platoon','The Deer Hunter'] },
    { emojis: ['🧟','🌍','🔫','✈️'], answer: 'World War Z', aliases: ['worldwarz'], hints: ['World War Z','Dawn of the Dead','I Am Legend','28 Days Later'] },
    { emojis: ['🌍','🌊','🦍','🛸'], answer: 'Avatar', aliases: ['avatar film','james cameron avatar'], hints: ['Avatar','Dances with Wolves','Pocahontas','Pandora'] },
    { emojis: ['🎻','💰','🇩🇪','⭐'], answer: 'Schindlers Liste', aliases: ['schindlers list','schindler list'], hints: ['Schindlers Liste','Der Pianist','Das Leben ist schön','Die Brücke'] },
    { emojis: ['🐠','🌊','🐡','🧬'], answer: 'Findet Dorie', aliases: ['finding dory','findet dory'], hints: ['Findet Dorie','Findet Nemo','Aquaman','Ponyo'] },
    { emojis: ['🎬','🎭','🎩','🏨'], answer: 'The Grand Budapest Hotel', aliases: ['grand budapest hotel'], hints: ['The Grand Budapest Hotel','Midnight in Paris','Amelie','Moulin Rouge'] },
    { emojis: ['👨‍🦰','🌵','🤠','🐍'], answer: 'Rango', aliases: ['rango film'], hints: ['Rango','The Good the Bad and the Ugly','Zootopia','Coco'] },
    { emojis: ['🦅','🧒','🌈','✨'], answer: 'Coco', aliases: ['coco pixar','coco film'], hints: ['Coco','Encanto','The Book of Life','Soul'] },

    // ── VIDEOSPIELE ─────────────────────────────────────────
    { emojis: ['🔴','🍄','⭐','🏰'], answer: 'Super Mario', aliases: ['mario','super mario bros','mario bros'], hints: ['Super Mario','Sonic','Crash Bandicoot','Kirby'] },
    { emojis: ['🏎️','🍌','🏆','💣'], answer: 'Mario Kart', aliases: ['mariokart','mario cart'], hints: ['Mario Kart','Crash Team Racing','F-Zero','Diddy Kong Racing'] },
    { emojis: ['🦊','🌀','💎','🏝️'], answer: 'Crash Bandicoot', aliases: ['crash','crash bandicoot'], hints: ['Crash Bandicoot','Spyro','Sonic','Rayman'] },
    { emojis: ['🗡️','🛡️','🏰','🧝'], answer: 'The Legend of Zelda', aliases: ['zelda','legend of zelda','breath of the wild','tears of the kingdom'], hints: ['The Legend of Zelda','Dark Souls','Prince of Persia','Castlevania'] },
    { emojis: ['🔵','💨','💎','🌀'], answer: 'Sonic the Hedgehog', aliases: ['sonic','sonic hedgehog'], hints: ['Sonic the Hedgehog','Mega Man','Pac-Man','Kirby'] },
    { emojis: ['🐉','🧝','⚔️','🌲'], answer: 'The Elder Scrolls', aliases: ['skyrim','morrowind','oblivion','elder scrolls','tes'], hints: ['The Elder Scrolls','Dragon Age','Divinity','Witcher'] },
    { emojis: ['🔫','👾','🏆','⛏️'], answer: 'Fortnite', aliases: ['fortnite battle royale'], hints: ['Fortnite','PUBG','Warzone','Apex Legends'] },
    { emojis: ['⛏️','🌲','🏠','💎'], answer: 'Minecraft', aliases: ['mine craft'], hints: ['Minecraft','Terraria','Roblox','Valheim'] },
    { emojis: ['🚗','💣','🏙️','🔫'], answer: 'Grand Theft Auto', aliases: ['gta','grand theft auto','gta v','gta 5','gta san andreas','gta iv'], hints: ['Grand Theft Auto','Saints Row','Sleeping Dogs','Watch Dogs'] },
    { emojis: ['⚽','🎮','🏟️','🏅'], answer: 'FIFA', aliases: ['ea fc','ea sports fc','fifa football'], hints: ['FIFA','Pro Evolution Soccer','Football Manager','Rocket League'] },
    { emojis: ['🧩','🔴','🟡','⬇️'], answer: 'Tetris', aliases: ['tetris game'], hints: ['Tetris','Pac-Man','Pong','Columns'] },
    { emojis: ['🌍','🏗️','💰','🚌'], answer: 'SimCity', aliases: ['sim city','cities skylines'], hints: ['SimCity','The Sims','Cities: Skylines','Anno'] },
    { emojis: ['🐾','🎣','🏡','🏝️'], answer: 'Animal Crossing', aliases: ['animalcrossing','new horizons'], hints: ['Animal Crossing','Stardew Valley','My Time at Portia','Harvest Moon'] },
    { emojis: ['🏔️','🧗','🗺️','💎'], answer: 'Uncharted', aliases: ['uncharted','nathan drake'], hints: ['Uncharted','Tomb Raider','Indiana Jones','The Last of Us'] },
    { emojis: ['🧟','🌲','🔫','🍄'], answer: 'The Last of Us', aliases: ['tlou','last of us'], hints: ['The Last of Us','Dying Light','Days Gone','Resident Evil'] },
    { emojis: ['🕷️','🗽','🦸','🌆'], answer: "Marvel's Spider-Man", aliases: ['spider man game','spiderman ps4','spiderman ps5','marvels spiderman'], hints: ["Marvel's Spider-Man",'Batman: Arkham','Infamous','Prototype'] },
    { emojis: ['🔫','🤖','🏜️','💊'], answer: 'Borderlands', aliases: ['borderlands 2','borderlands 3'], hints: ['Borderlands','Fallout','Rage','Outer Worlds'] },
    { emojis: ['🧠','👁️','🌑','🔬'], answer: 'Portal', aliases: ['portal 2','portal game','glados'], hints: ['Portal','Antichamber','Q.U.B.E.','The Talos Principle'] },
    { emojis: ['🏹','🐺','🧖','⚡'], answer: 'God of War', aliases: ['gow','god of war'], hints: ['God of War','Devil May Cry','Bayonetta','Darksiders'] },
    { emojis: ['🦅','🌾','🔪','🏰'], answer: "Assassin's Creed", aliases: ['assassins creed','ac','assassin creed'], hints: ["Assassin's Creed",'Hitman','Dishonored','Splinter Cell'] },
    { emojis: ['🏰','♟️','⚔️','🌾'], answer: 'Age of Empires', aliases: ['aoe','age of empires','age empires'], hints: ['Age of Empires','Civilization','StarCraft','Total War'] },
    { emojis: ['🎸','🎤','🎵','🎸'], answer: 'Guitar Hero', aliases: ['guitarhero','guitar hero'], hints: ['Guitar Hero','Rock Band','DJ Hero','Beat Saber'] },
    { emojis: ['🏰','👹','💣','🔴'], answer: 'Doom', aliases: ['doom eternal','doom 2016'], hints: ['Doom','Quake','Wolfenstein','Duke Nukem'] },
    { emojis: ['🔫','⚔️','🌍','🎖️'], answer: 'Call of Duty', aliases: ['cod','call of duty modern warfare','warzone'], hints: ['Call of Duty','Battlefield','Medal of Honor','Halo'] },
    { emojis: ['🌋','🗿','🏴','🐎'], answer: 'Red Dead Redemption', aliases: ['rdr','rdr2','red dead redemption 2'], hints: ['Red Dead Redemption','GTA','The Wild West','Gun'] },
    { emojis: ['🧫','👽','🔬','🚪'], answer: 'Half-Life', aliases: ['halflife','half life','half life 2'], hints: ['Half-Life','BioShock','Prey','System Shock'] },
    { emojis: ['🐊','🎩','🔱','🍌'], answer: 'Donkey Kong', aliases: ['donkeykong','dk','donkey kong'], hints: ['Donkey Kong','Banjo-Kazooie','Diddy Kong','Knack'] },
    { emojis: ['🌌','🤝','🔫','🚀'], answer: 'Mass Effect', aliases: ['masseffect','mass effect'], hints: ['Mass Effect','Star Wars: KOTOR','Dragon Age','Anthem'] },
    { emojis: ['🎃','👻','🏡','🔦'], answer: "Luigi's Mansion", aliases: ['luigis mansion','luigi mansion'], hints: ["Luigi's Mansion",'Haunted Mansion','Ghostbusters','Amnesia'] },
    { emojis: ['🏋️','👊','🕹️','🇯🇵'], answer: 'Street Fighter', aliases: ['streetfighter','street fighter 2','sf6'], hints: ['Street Fighter','Mortal Kombat','Tekken','Injustice'] },
    { emojis: ['🌌','🤖','🔵','🏙️'], answer: 'Mega Man', aliases: ['megaman','mega man'], hints: ['Mega Man','Sonic','Metroid','Castlevania'] },
    { emojis: ['🧲','🌊','🔋','🦑'], answer: 'Subnautica', aliases: ['subnautica'], hints: ['Subnautica','ABZÜ','Raft','Stranded Deep'] },
    { emojis: ['🐢','🍕','🔫','🌆'], answer: 'Teenage Mutant Ninja Turtles', aliases: ['tmnt','ninja turtles','turtles game'], hints: ['TMNT','Double Dragon','Streets of Rage','Final Fight'] },
    { emojis: ['🌸','🏯','🗡️','🦊'], answer: 'Ghost of Tsushima', aliases: ['ghost tsushima','ghost of tsushima'], hints: ['Ghost of Tsushima','Sekiro','Nioh','Samurai Warriors'] },
    { emojis: ['🏠','💀','🔦','😱'], answer: 'Resident Evil', aliases: ['residentevil','re','biohazard'], hints: ['Resident Evil','Silent Hill','Amnesia','Outlast'] },
    { emojis: ['🔫','🎖️','🪖','🌏'], answer: 'Battlefield', aliases: ['battlefield 4','battlefield 1','battlefield 5'], hints: ['Battlefield','Call of Duty','Medal of Honor','Brothers in Arms'] },
    { emojis: ['🌌','🛸','👾','🔋'], answer: 'Halo', aliases: ['halo reach','halo infinite','halo combat evolved'], hints: ['Halo','Destiny','Gears of War','Titanfall'] },
    { emojis: ['🏔️','⛺','🐻','🌲'], answer: 'Far Cry', aliases: ['farcry','far cry 5','far cry 3'], hints: ['Far Cry','Crysis','Just Cause','Dying Light'] },
    { emojis: ['🐸','🌿','🏅','🌈'], answer: 'Frogger', aliases: ['frogger game'], hints: ['Frogger','Pac-Man','Q*bert','Centipede'] },
    { emojis: ['🌍','🛸','👽','🔫'], answer: 'XCOM', aliases: ['x com','xcom 2','xcom enemy unknown'], hints: ['XCOM','Jagged Alliance','Phoenix Point','Mass Effect'] },
    { emojis: ['🧲','🔮','🌀','💡'], answer: 'Portal 2', aliases: ['portal2'], hints: ['Portal 2','Portal','The Talos Principle','Antichamber'] },
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

  // ─── Fuzzy-Match Algorithmus ────────────────────────────────
  function normalize(s) {
    return String(s || '')
      .toLowerCase()
      .replace(/[àáâãäå]/g,'a').replace(/[èéêë]/g,'e').replace(/[ìíîï]/g,'i')
      .replace(/[òóôõöø]/g,'o').replace(/[ùúûü]/g,'u').replace(/ß/g,'ss')
      .replace(/[^a-z0-9]/g,'');
  }

  function levenshtein(a, b) {
    var m = a.length, n = b.length, dp = [], i, j;
    for (i = 0; i <= m; i++) { dp[i] = [i]; }
    for (j = 0; j <= n; j++) { dp[0][j] = j; }
    for (i = 1; i <= m; i++) {
      for (j = 1; j <= n; j++) {
        if (a[i-1] === b[j-1]) dp[i][j] = dp[i-1][j-1];
        else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
      }
    }
    return dp[m][n];
  }

  function checkAnswer(input, question) {
    var inp = normalize(input);
    if (!inp) return false;
    var targets = [question.answer].concat(question.aliases || []);
    for (var i = 0; i < targets.length; i++) {
      var t = normalize(targets[i]);
      if (inp === t) return true;
      var maxDist = Math.min(3, Math.floor(t.length * 0.2));
      if (t.length >= 4 && levenshtein(inp, t) <= maxDist) return true;
      if (t.length >= 5 && (inp.indexOf(t) !== -1 || t.indexOf(inp) !== -1)) return true;
    }
    return false;
  }

  var WIN_SCORE = 7;

  // ─── Spiel-Instanz ──────────────────────────────────────────
  function EmojiCharadeInstance(container, ctx, onEnd) {
    this.container        = container;
    this.ctx              = ctx;
    this.onEnd            = onEnd;
    this.dead             = false;
    this.mini             = 1;
    this.p1Wins           = 0;
    this.p2Wins           = 0;
    this.timers           = [];
    this._tickInterval    = null;
    this.phase            = 'idle';
    this.currentQ         = null;
    this._deck            = [];
    this._timeLeft        = 20;
    this._stage           = 1;    // 1=3 Emojis, 2=4 Emojis, 3=Hints
    this._buzzedPlayer    = null; // null | 'p1' | 'p2'
    // Vor Stage 3: wer falsch lag, kann nicht mehr buzzen
    // In Stage 3: beide immer freigeschaltet
    this._p1BuzzedWrong   = false;
    this._p2BuzzedWrong   = false;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  EmojiCharadeInstance.prototype = {

    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'ec-root';
      root.style.cssText = [
        'width:100%;height:100%;',
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);',
        'display:flex;flex-direction:column;align-items:center;justify-content:center;',
        'position:relative;overflow:hidden;padding:16px 20px;box-sizing:border-box;',
        'font-family:"Bebas Neue",sans-serif;'
      ].join('');

      root.innerHTML = [
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(240,192,48,.04);"></div>',

        '<div id="ec-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:14px;min-height:28px;"></div>',

        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;color:#c0c0d8;text-transform:uppercase;margin-bottom:10px;">🎬 Film oder Videospiel erraten!</div>',

        '<div id="ec-timer" style="font-size:22px;color:#f0c030;letter-spacing:.1em;margin-bottom:8px;font-family:\'Barlow Condensed\',sans-serif;display:none;"></div>',

        '<div id="ec-stage-badge" style="display:none;font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.3em;color:#aaaacc;text-transform:uppercase;margin-bottom:6px;"></div>',

        '<div id="ec-emojis" style="font-size:clamp(42px,10vw,72px);letter-spacing:12px;margin-bottom:14px;min-height:80px;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:8px;text-align:center;"></div>',

        '<div id="ec-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:30px;margin-bottom:12px;text-align:center;transition:color .2s;"></div>',

        '<button id="ec-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';margin-bottom:18px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));">RUNDE STARTEN</button>',

        '<div id="ec-hints" style="display:none;flex-direction:column;gap:8px;width:100%;max-width:400px;margin-bottom:12px;"></div>',

        '<div id="ec-buzzers" style="display:none;gap:14px;width:100%;max-width:420px;margin-bottom:10px;justify-content:center;flex-wrap:wrap;"></div>',

        '<div id="ec-input-area" style="display:none;flex-direction:column;align-items:center;gap:10px;width:100%;max-width:400px;margin-bottom:10px;">',
          '<div id="ec-input-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;letter-spacing:.2em;color:#f0c030;text-transform:uppercase;"></div>',
          '<div style="display:flex;gap:8px;width:100%;">',
            '<input id="ec-answer-input" type="text" placeholder="Antwort eingeben…" autocomplete="off" autocorrect="off" style="flex:1;background:rgba(255,255,255,.06);border:2px solid #f0c030;color:#fff;font-family:\'Barlow Condensed\',sans-serif;font-size:17px;letter-spacing:.05em;padding:10px 14px;outline:none;"/>',
            '<button id="ec-submit-btn" style="background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:.1em;padding:10px 20px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));">OK</button>',
          '</div>',
        '</div>',

        '<div id="ec-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:28px;">',
          '<div id="ec-ov-ico" style="font-size:52px;"></div>',
          '<div id="ec-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(24px,6vw,46px);color:#f0c030;letter-spacing:.05em;"></div>',
          '<div id="ec-ov-emojis" style="font-size:32px;letter-spacing:8px;margin:4px 0;"></div>',
          '<div id="ec-ov-wrongguess" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#f55a3a;min-height:18px;"></div>',
          '<div id="ec-ov-answers" style="display:flex;gap:20px;margin:4px 0;flex-wrap:wrap;justify-content:center;"></div>',
          '<div id="ec-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
          '<button id="ec-ov-btn" style="margin-top:8px;background:#f0c030;border:none;color:#000;font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;cursor:pointer;clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));">WEITER →</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);
      this._drawDots();

      if (this.ctx.isHost) {
        document.getElementById('ec-start-btn').addEventListener('click', function() {
          this.style.display = 'none';
          self.ctx.network.send('ec_start_countdown', {});
          self._countdown();
        });
      }

      document.getElementById('ec-submit-btn').addEventListener('click', function() { self._submitAnswer(); });
      document.getElementById('ec-answer-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') self._submitAnswer();
      });
    },

    _setupNet: function() {
      var self = this;
      this.ctx.network.on('ec_start_countdown', function() { if (!self.ctx.isHost) self._countdown(); });

      this.ctx.network.on('ec_sync_question', function(msg) {
        if (self.ctx.isHost) return;
        self.currentQ = msg.q;
        self._stage = 1;
        self._buzzedPlayer = null;
        self._p1BuzzedWrong = false;
        self._p2BuzzedWrong = false;
        self._renderEmojis();
        self._startAnswering();
      });

      this.ctx.network.on('ec_stage_up', function(msg) {
        if (self.ctx.isHost) return;
        self._stage = msg.stage;
        if (msg.stage === 3) {
          // Stage 3: Buzzer für beide freischalten
          self._p1BuzzedWrong = false;
          self._p2BuzzedWrong = false;
          self._renderHints();
        }
        self._renderEmojis();
        self._updateStageBadge();
        self._renderBuzzers();
      });

      this.ctx.network.on('ec_buzz', function(msg) {
        self._buzzedPlayer = msg.player;
        self._showInputArea(msg.player);
      });

      this.ctx.network.on('ec_wrong', function(msg) {
        self._buzzedPlayer = null;
        if (msg.player === 'p1') self._p1BuzzedWrong = true;
        else self._p2BuzzedWrong = true;
        if (msg.p1Wins !== undefined) { self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins; }
        self._hideInputArea();
        self._setStatus(msg.who + ' falsch! +1 für Gegner', '#f55a3a', '16px');
        self._drawDots();
        self._renderBuzzers();
      });

      this.ctx.network.on('ec_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._showResult(msg.winner, msg.answer, msg.p1Pts, msg.p2Pts, msg.wrongGuess, msg.wrongPlayer);
      });

      this.ctx.network.on('ec_timeout', function() {
        if (self.ctx.isHost) return;
        self._clearTimers();
        self.phase = 'result';
        document.getElementById('ec-buzzers').style.display = 'none';
        document.getElementById('ec-input-area').style.display = 'none';
        document.getElementById('ec-timer').style.display = 'none';
        self._setStatus('Zeit abgelaufen!', '#f55a3a', '20px');
      });

      this.ctx.network.on('ec_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._finish();
        else { self.mini++; self._startMini(); document.getElementById('ec-ov').style.display = 'none'; }
      });
    },

    // ── Runde vorbereiten ───────────────────────────────────
    _startMini: function() {
      if (this.dead) return;
      this.phase = 'idle';
      this._stage = 1;
      this._buzzedPlayer = null;
      this._p1BuzzedWrong = false;
      this._p2BuzzedWrong = false;
      this._clearTimers();

      document.getElementById('ec-emojis').innerHTML = '';
      document.getElementById('ec-buzzers').style.display = 'none';
      document.getElementById('ec-hints').style.display = 'none';
      document.getElementById('ec-input-area').style.display = 'none';
      document.getElementById('ec-timer').style.display = 'none';
      document.getElementById('ec-stage-badge').style.display = 'none';
      this._setStatus('Bereit?', '#c0c0d8', '18px');

      if (this.ctx.isHost) {
        var btn = document.getElementById('ec-start-btn');
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
      var btn = document.getElementById('ec-start-btn');
      if (btn) btn.style.display = 'none';
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
      this.ctx.network.send('ec_sync_question', { q: this.currentQ });
      this._stage = 1;
      this._buzzedPlayer = null;
      this._p1BuzzedWrong = false;
      this._p2BuzzedWrong = false;
      this._renderEmojis();
      this._startAnswering();
    },

    // ── Timer & Stage-Logik ─────────────────────────────────
    _startAnswering: function() {
      var self = this;
      this.phase = 'answering';
      this._timeLeft = 20;
      this._renderEmojis();
      this._updateStageBadge();
      this._renderBuzzers();

      document.getElementById('ec-stage-badge').style.display = 'block';
      var timerEl = document.getElementById('ec-timer');
      timerEl.textContent = '0:20';
      timerEl.style.display = 'block';
      timerEl.style.color = '#f0c030';

      this._tickInterval = setInterval(function() {
        if (self.dead || self.phase !== 'answering') return;
        if (self._buzzedPlayer) return; // Timer pausiert

        self._timeLeft--;
        var s = self._timeLeft;
        timerEl.textContent = '0:' + (s < 10 ? '0' : '') + s;
        if (s <= 5) timerEl.style.color = '#f55a3a';

        if (s <= 0) {
          if (self._stage < 3) {
            self._timeLeft = 20;
            timerEl.style.color = '#f0c030';
            self._stage++;

            if (self._stage === 3) {
              // Buzzer für beide wieder freischalten!
              self._p1BuzzedWrong = false;
              self._p2BuzzedWrong = false;
              if (self.ctx.isHost) self.ctx.network.send('ec_stage_up', { stage: 3 });
              self._renderHints();
            } else {
              if (self.ctx.isHost) self.ctx.network.send('ec_stage_up', { stage: self._stage });
            }

            self._renderEmojis();
            self._updateStageBadge();
            self._renderBuzzers();
            beep(330, 0.12, 'sine', 0.15);
          } else {
            // Alle Chancen verbraucht → kein Punkt
            self._clearTimers();
            if (self.ctx.isHost) {
              self.ctx.network.send('ec_timeout', {});
              self._showResult(null, self.currentQ.answer, 0, 0, null, null);
            }
          }
        }
      }, 1000);

      this._setStatus('BUZZ! Wer weiß es?', '#f0c030', '18px');
      beep(550, 0.1, 'sine', 0.12);
    },

    // ── Emojis rendern ──────────────────────────────────────
    // Stage 1 → 3 Emojis, Stage 2+ → alle 4
    _renderEmojis: function() {
      if (!this.currentQ) return;
      var el = document.getElementById('ec-emojis');
      if (!el) return;
      var count = this._stage >= 2 ? 4 : 3;
      var show = this.currentQ.emojis.slice(0, count);
      el.innerHTML = show.map(function(e) {
        return '<span style="display:inline-block;">' + e + '</span>';
      }).join('');
    },

    _updateStageBadge: function() {
      var el = document.getElementById('ec-stage-badge');
      if (!el) return;
      var labels = ['','💡 3 Emojis','💡 4 Emojis','🔍 Mögliche Antworten:'];
      el.textContent = labels[this._stage] || '';
    },

    _renderHints: function() {
      if (!this.currentQ) return;
      var el = document.getElementById('ec-hints');
      if (!el) return;
      el.innerHTML = '';
      var colors = ['#3ab4f5','#f0c030','#2af0a0','#f55a3a'];
      (this.currentQ.hints || []).forEach(function(h, i) {
        var d = document.createElement('div');
        d.style.cssText = 'background:rgba(255,255,255,.04);border:1px solid ' + colors[i % 4] + '55;color:#c0c0d8;' +
          'font-family:\'Barlow Condensed\',sans-serif;font-size:15px;letter-spacing:.1em;padding:8px 14px;text-align:center;';
        d.textContent = h;
        el.appendChild(d);
      });
      el.style.display = 'flex';
    },

    // ── Buzzer rendern ──────────────────────────────────────
    // Stage 1+2: wer falsch lag, sieht seinen Buzzer nicht mehr
    // Stage 3: beide immer sichtbar (Anti-Spam durch Punktabzug geregelt)
    _renderBuzzers: function() {
      var self = this;
      var el = document.getElementById('ec-buzzers');
      if (!el) return;
      el.innerHTML = '';

      var isP1 = this.ctx.isHost;
      var isP2 = !this.ctx.isHost;
      var showP1 = isP1 && !this._p1BuzzedWrong;
      var showP2 = isP2 && !this._p2BuzzedWrong;

      if (showP1) {
        var b1 = document.createElement('button');
        b1.id = 'ec-buzz-p1';
        b1.innerHTML = '🔔&nbsp;&nbsp;BUZZ!';
        b1.style.cssText = 'background:rgba(58,180,245,.1);border:2px solid #3ab4f5;color:#3ab4f5;' +
          'font-family:\'Bebas Neue\',sans-serif;font-size:24px;letter-spacing:.2em;padding:16px 44px;' +
          'cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));transition:background .12s;';
        b1.onmouseenter = function() { this.style.background = 'rgba(58,180,245,.25)'; };
        b1.onmouseleave = function() { this.style.background = 'rgba(58,180,245,.1)'; };
        b1.onclick = function() { self._doBuzz('p1'); };
        el.appendChild(b1);
      }

      if (showP2) {
        var b2 = document.createElement('button');
        b2.id = 'ec-buzz-p2';
        b2.innerHTML = '🔔&nbsp;&nbsp;BUZZ!';
        b2.style.cssText = 'background:rgba(245,90,58,.1);border:2px solid #f55a3a;color:#f55a3a;' +
          'font-family:\'Bebas Neue\',sans-serif;font-size:24px;letter-spacing:.2em;padding:16px 44px;' +
          'cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));transition:background .12s;';
        b2.onmouseenter = function() { this.style.background = 'rgba(245,90,58,.25)'; };
        b2.onmouseleave = function() { this.style.background = 'rgba(245,90,58,.1)'; };
        b2.onclick = function() { self._doBuzz('p2'); };
        el.appendChild(b2);
      }

      el.style.display = (showP1 || showP2) ? 'flex' : 'none';
    },

    _doBuzz: function(player) {
      if (this.phase !== 'answering' || this._buzzedPlayer) return;
      beep(660, 0.1, 'square', 0.2);
      this._buzzedPlayer = player;
      this.ctx.network.send('ec_buzz', { player: player });
      this._showInputArea(player);
    },

    _showInputArea: function(player) {
      var me = this.ctx.isHost ? 'p1' : 'p2';
      var buzzers = document.getElementById('ec-buzzers');
      if (buzzers) buzzers.style.display = 'none';

      if (player === me) {
        var label = document.getElementById('ec-input-label');
        if (label) {
          label.textContent = '🔔 Deine Antwort!';
          label.style.color = player === 'p1' ? '#3ab4f5' : '#f55a3a';
        }
        var inputArea = document.getElementById('ec-input-area');
        if (inputArea) inputArea.style.display = 'flex';
        var inp = document.getElementById('ec-answer-input');
        if (inp) { inp.value = ''; setTimeout(function() { inp.focus(); }, 50); }
        this._setStatus('Deine Antwort?', player === 'p1' ? '#3ab4f5' : '#f55a3a', '18px');
      } else {
        var name = player === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
        this._setStatus(name + ' buzzert…', player === 'p1' ? '#3ab4f5' : '#f55a3a', '18px');
      }
    },

    _hideInputArea: function() {
      var el = document.getElementById('ec-input-area');
      if (el) el.style.display = 'none';
    },

    // ── Antwort auswerten ───────────────────────────────────
    _submitAnswer: function() {
      if (!this._buzzedPlayer) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (this._buzzedPlayer !== me) return;

      var inp = document.getElementById('ec-answer-input');
      if (!inp) return;
      var val = inp.value.trim();
      if (!val) return;

      if (checkAnswer(val, this.currentQ)) {
        // ✓ Richtig → buzzer bekommt Punkt
        beep(880, 0.15, 'sine', 0.2);
        if (me === 'p1') this.p1Wins++;
        else             this.p2Wins++;

        this.ctx.network.send('ec_result', {
          winner: me, answer: this.currentQ.answer,
          p1Pts: me === 'p1' ? 1 : 0,
          p2Pts: me === 'p2' ? 1 : 0,
          p1Wins: this.p1Wins, p2Wins: this.p2Wins,
          wrongGuess: null, wrongPlayer: null
        });
        this._showResult(me, this.currentQ.answer, me === 'p1' ? 1 : 0, me === 'p2' ? 1 : 0, null, null);

      } else {
        // ✗ Falsch → Gegner bekommt +1 Punkt, Runde läuft weiter
        beep(200, 0.2, 'sawtooth', 0.15);
        var wrongName = me === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
        var opponent  = me === 'p1' ? 'p2' : 'p1';

        if (opponent === 'p1') this.p1Wins++;
        else                    this.p2Wins++;

        if (me === 'p1') this._p1BuzzedWrong = true;
        else             this._p2BuzzedWrong = true;

        // Sende Zwischenpunkt (kein winner-Flag = Runde geht weiter)
        this.ctx.network.send('ec_wrong', {
          player: me, who: wrongName,
          p1Wins: this.p1Wins, p2Wins: this.p2Wins,
          penaltyTo: opponent
        });

        this._buzzedPlayer = null;
        this._hideInputArea();
        this._setStatus(wrongName + ' falsch! +1 für Gegner', '#f55a3a', '16px');
        this._drawDots();
        this._renderBuzzers();
      }
    },

    // ── Ergebnis-Overlay ────────────────────────────────────
    _showResult: function(winner, answer, p1Pts, p2Pts, wrongGuess, wrongPlayer) {
      var self = this;
      this.phase = 'result';
      this._clearTimers();

      document.getElementById('ec-buzzers').style.display = 'none';
      document.getElementById('ec-input-area').style.display = 'none';
      document.getElementById('ec-hints').style.display = 'none';
      document.getElementById('ec-timer').style.display = 'none';

      var ov = document.getElementById('ec-ov');
      if (!ov) return;

      document.getElementById('ec-ov-ico').textContent = wrongGuess ? '❌' : (winner ? '🎉' : '⏳');
      document.getElementById('ec-ov-ttl').textContent = answer || '?';
      document.getElementById('ec-ov-emojis').textContent = this.currentQ ? this.currentQ.emojis.join(' ') : '';

      if (wrongGuess) {
        var wName = wrongPlayer === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
        document.getElementById('ec-ov-wrongguess').textContent = wName + ' sagte: „' + wrongGuess + '"';
      } else {
        document.getElementById('ec-ov-wrongguess').textContent = '';
      }

      function badge(name, pts, col, isWrong) {
        var vCol = pts > 0 ? '#2af0a0' : (isWrong ? '#f55a3a' : '#777');
        var mark  = pts > 0 ? '✓' : (isWrong ? '✗' : '—');
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:'+col+';">' + esc(name) + '</div>' +
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:28px;color:'+vCol+';">' + mark + '</div>' +
          (pts > 0 ? '<div style="font-size:12px;color:'+vCol+';">+1 Punkt</div>' : '') +
          (isWrong && pts === 0 ? '<div style="font-size:11px;color:#f55a3a;">Falsche Antwort</div>' : '') +
          '</div>';
      }

      document.getElementById('ec-ov-answers').innerHTML =
        badge(this.ctx.p1Name, p1Pts, '#3ab4f5', wrongPlayer === 'p1') +
        '<div style="color:#c0c0d8;padding-top:8px;font-size:18px;">VS</div>' +
        badge(this.ctx.p2Name, p2Pts, '#f55a3a', wrongPlayer === 'p2');

      document.getElementById('ec-ov-sc').innerHTML = this.p1Wins + ' : ' + this.p2Wins + ' &nbsp;·&nbsp; Ziel: ' + WIN_SCORE + ' Punkte';
      this._drawDots();
      ov.style.display = 'flex';

      var gameOver = this.p1Wins >= WIN_SCORE || this.p2Wins >= WIN_SCORE;
      var btn = document.getElementById('ec-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('ec_next', { gameOver: gameOver });
          if (gameOver) self._finish();
          else { self.mini++; self._startMini(); ov.style.display = 'none'; }
        };
      } else {
        btn.style.display = 'none';
      }
    },

    // ── Punkte-Dots ─────────────────────────────────────────
    _drawDots: function() {
      var el = document.getElementById('ec-dots');
      if (!el) return;
      var d1 = '', d2 = '', bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 2px;border:2px solid ';
      for (var i = 0; i < WIN_SCORE; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML = d1 + '<span style="color:#c0c0d8;margin:0 10px;font-size:12px;">RUNDE ' + this.mini + '</span>' + d2;
    },

    _setStatus: function(t, c, s) {
      var el = document.getElementById('ec-status');
      if (el) { el.textContent = t; el.style.color = c || '#c0c0d8'; el.style.fontSize = s || '18px'; }
    },

    _clearTimers: function() {
      clearInterval(this._tickInterval);
      this._tickInterval = null;
      this.timers.forEach(clearTimeout);
      this.timers = [];
    },

    _finish: function() {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= WIN_SCORE ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },

    destroy: function() {
      this.dead = true;
      this._clearTimers();
      ['ec_start_countdown','ec_sync_question','ec_stage_up','ec_buzz','ec_wrong','ec_result','ec_timeout','ec_next']
        .forEach(function(ev) { try { this.ctx.network.off(ev); } catch(e) {} }.bind(this));
    }
  };

  GamePool.register({
    id: 'emoji-charade',
    name: 'Emoji Charade',
    description: '🎬 Film oder Spiel per Emojis erraten! Falsch gebuzzert = Punkt für den Gegner. Wer zuerst 7 Punkte hat, gewinnt!',
    init: function(container, ctx, onEnd) { this._instance = new EmojiCharadeInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
