(function () {

  // ═══════════════════════════════════════════════════════════
  // FRAGEN-DATENBANK
  // ═══════════════════════════════════════════════════════════
  var QUESTIONS = [
    { description: 'Ein alter Mann entführt ein Kind mit Tausenden von Luftballons.', answer: 'Oben', aliases: ['up','up film','oben pixar'] },
    { description: 'Ein Klempner nimmt Drogen und verprügelt Schildkröten.', answer: 'Super Mario', aliases: ['mario','super mario bros','mario bros','super mario film'] },
    { description: 'Vier Kinder laufen in einen Kleiderschrank und verschwinden.', answer: 'Die Chroniken von Narnia', aliases: ['narnia','chronicles of narnia','chroniken von narnia'] },
    { description: 'Eine Frau tanzt mit einem Biest bis sie ihn liebt.', answer: 'Die Schöne und das Biest', aliases: ['beauty and the beast','schone und das biest','schoene und das biest'] },
    { description: 'Ein Fisch verliert seinen Sohn und sucht ihn überall im Meer.', answer: 'Findet Nemo', aliases: ['finding nemo','nemo'] },
    { description: 'Ein Typ verbringt 12 Jahre damit, einen Ring wegzuwerfen.', answer: 'Der Herr der Ringe', aliases: ['lord of the rings','lotr','herr der ringe','the lord of the rings'] },
    { description: 'Eine Prinzessin friert alles ein, weil sie schlechte Laune hat.', answer: 'Die Eiskönigin', aliases: ['frozen','eiskoenigin','frozen die eiskoenigin'] },
    { description: 'Ein Waisenkind legt Stöcke auf eine Lampe und bekommt Freunde.', answer: 'Harry Potter', aliases: ['harry potter film'] },
    { description: 'Rebellen kämpfen gegen einen alten Asthmatiker mit Rüstung.', answer: 'Star Wars', aliases: ['starwars','star wars film','krieg der sterne'] },
    { description: 'Ein Hai frisst Leute. Polizist ist sauer.', answer: 'Der weiße Hai', aliases: ['jaws','weisse hai','weiße hai','der weisse hai'] },
    { description: 'Wissenschaftler bauen einen Freizeitpark und verlieren die Kontrolle.', answer: 'Jurassic Park', aliases: ['jurassicpark','jurassic world'] },
    { description: 'Eine Maschine aus der Zukunft tötet einen Terminator-Darsteller.', answer: 'Terminator', aliases: ['the terminator','terminator 2'] },
    { description: 'Ein Boxer verliert, verliert, verliert, gewinnt, verliert wieder.', answer: 'Rocky', aliases: ['rocky balboa','rocky film'] },
    { description: 'Vier Männer mit Rucksäcken fangen Geister ein und machen Werbung.', answer: 'Ghostbusters', aliases: ['ghost busters'] },
    { description: 'Spielzeug hat existenzielle Krisen.', answer: 'Toy Story', aliases: ['toystory','toy story film'] },
    { description: 'Ein reicher Waisenjunge verkleidet sich als Fledermaus.', answer: 'Batman', aliases: ['the batman','batman begins','dark knight','batman film'] },
    { description: 'Mann schluckt Pille und entscheidet sich, Computerprogramme zu verprügeln.', answer: 'Matrix', aliases: ['the matrix','matrix film'] },
    { description: 'Ein Mädchen und ihr Hund werden von einem Sturm in ein komisches Land geschickt.', answer: 'Der Zauberer von Oz', aliases: ['wizard of oz','zauberer von oz'] },
    { description: 'Ein Clown erschreckt Menschen und wohnt in der Kanalisation.', answer: 'Es', aliases: ['it','it pennywise','stephen king it'] },
    { description: 'Zwei Menschen küssen sich auf einem sinkenden Schiff.', answer: 'Titanic', aliases: ['titanic film'] },
    { description: 'Ein Lehrer kündigt seinen Job und stellt illegale Produkte her.', answer: 'Breaking Bad', aliases: ['breakingbad','breaking bad film'] },
    { description: 'Ein Mann schläft ein und wacht in einem anderen Traum auf. Immer wieder.', answer: 'Inception', aliases: ['inception film'] },
    { description: 'Eine Ratte kocht Essen in einem französischen Restaurant.', answer: 'Ratatouille', aliases: ['ratatouille film'] },
    { description: 'Zwei Männer essen ein Frühstück und reden viel über Burger.', answer: 'Pulp Fiction', aliases: ['pulpfiction'] },
    { description: 'Ein Mann rennt sehr lange und isst Pralinen.', answer: 'Forrest Gump', aliases: ['forrestgump','forrest gump film'] },
    { description: 'Ein Fuchs und ein Kaninchen ermitteln gemeinsam.', answer: 'Zootopia', aliases: ['zooptopia','zootopia film','zootropolis'] },
    { description: 'Ein Kind besiegt Einbrecher mit Heißkleber und Farbkugeln.', answer: 'Kevin allein zu Haus', aliases: ['home alone','kevin allein zu haus','allein zu haus'] },
    { description: 'Blaue Menschen kämpfen gegen Bergbauunternehmen.', answer: 'Avatar', aliases: ['avatar film','james cameron avatar'] },
    { description: 'Ein Buchhalter rettet Menschen durch Bürokratie.', answer: 'Schindlers Liste', aliases: ['schindlers list','schindler list','schindler\'s list'] },
    { description: 'Ein Mann schläft 100 Jahre, dann wird er wach.', answer: 'Dornröschen', aliases: ['sleeping beauty','dornroschen'] },
    { description: 'Wissenschaftler erschaffen Leben und sind überrascht, dass es schief geht.', answer: 'Frankenstein', aliases: ['frankenstein film'] },
    { description: 'Affe klettert auf Gebäude, Leute sind gestresst.', answer: 'King Kong', aliases: ['king kong film'] },
    { description: 'Ein Mann lebt in einem Einkaufszentrum und geht nicht nach Hause.', answer: 'The Terminal', aliases: ['the terminal film','terminal'] },
    { description: 'Ein Spielzeugmacher baut eine Puppe und sie wird lebendig.', answer: 'Pinocchio', aliases: ['pinocchio film'] },
    { description: 'Tiere reden in einem Regenwald, während Menschen Fehler machen.', answer: 'Dschungelbuch', aliases: ['jungle book','the jungle book','dschungelbuch film'] },
    { description: 'Ein Mathegenie hat unsichtbare Freunde und versteht sie nicht.', answer: 'A Beautiful Mind', aliases: ['a beautiful mind film','beautiful mind'] },
    { description: 'Ein Mann sitzt auf einer Insel und redet mit einem Ball.', answer: 'Cast Away', aliases: ['castaway','cast away film'] },
    { description: 'Kinder verlaufen sich im Weltall und müssen sich selbst retten.', answer: 'Gravity', aliases: ['gravity film'] },
    { description: 'Ein Botaniker pflanzt Kartoffeln auf einem anderen Planeten.', answer: 'Der Marsianer', aliases: ['the martian','marsianer','der marsianer'] },
    { description: 'Alle Helden sterben außer einem, und das wird ein Problem.', answer: 'Avengers: Infinity War', aliases: ['infinity war','avengers infinity war'] },
    { description: 'Ein Klempner hüpft auf Pilze und rettet eine Prinzessin. Wieder. Und nochmal.', answer: 'Super Mario', aliases: ['mario','super mario bros','mario bros'] },
    { description: 'Ein Typ in einem Hoodie ermordet Leute für eine religiöse Organisation.', answer: "Assassin's Creed", aliases: ['assassins creed','ac','assassin creed'] },
    { description: 'Man stiehlt Autos, schießt auf Polizisten und kauft Friseure.', answer: 'Grand Theft Auto', aliases: ['gta','grand theft auto','gta v','gta 5','gta san andreas','gta iv','gta vi'] },
    { description: 'Klötze fallen vom Himmel und man muss aufräumen.', answer: 'Tetris', aliases: ['tetris game'] },
    { description: 'Man platziert Blöcke, gräbt nach Steinen und redet mit Dorfbewohnern.', answer: 'Minecraft', aliases: ['mine craft'] },
    { description: 'Ein Igel rennt sehr schnell von links nach rechts.', answer: 'Sonic the Hedgehog', aliases: ['sonic','sonic hedgehog'] },
    { description: 'Ein Elfmann schleicht durch Dungeons und sammelt grüne Dreiecke.', answer: 'The Legend of Zelda', aliases: ['zelda','legend of zelda','breath of the wild','tears of the kingdom','botw'] },
    { description: 'Man baut eine Stadt, alle beschweren sich über den Verkehr.', answer: 'SimCity', aliases: ['sim city','cities skylines'] },
    { description: 'Ein Werwolfsmann tötet nordische Götter mit seinem Sohn.', answer: 'God of War', aliases: ['gow','god of war','god of war ragnarok'] },
    { description: 'Zombies haben Pilze im Kopf, man hat kein Benzin.', answer: 'The Last of Us', aliases: ['tlou','last of us'] },
    { description: 'Man erschießt Roboter durch Portale und denkt viel nach.', answer: 'Portal', aliases: ['portal 2','portal game','glados'] },
    { description: 'Cowboy reitet rum, schießt auf Leute und streichelt Pferde.', answer: 'Red Dead Redemption', aliases: ['rdr','rdr2','red dead redemption 2'] },
    { description: 'Wissenschaftler öffnet falsche Dimension und alle sterben fast.', answer: 'Half-Life', aliases: ['halflife','half life','half life 2'] },
    { description: 'Man schlägt mit Gitarre auf Knöpfe und glaubt, man kann spielen.', answer: 'Guitar Hero', aliases: ['guitarhero','guitar hero'] },
    { description: 'Man heiratet Dorfbewohner, fischt und dekoriert eine Insel.', answer: 'Animal Crossing', aliases: ['animalcrossing','new horizons','animal crossing'] },
    { description: 'Man erschießt Aliens auf einem Ringplaneten.', answer: 'Halo', aliases: ['halo reach','halo infinite','halo combat evolved'] },
    { description: 'Soldaten landen auf einer Insel und schießen sich gegenseitig an.', answer: 'Call of Duty', aliases: ['cod','call of duty modern warfare','warzone'] },
    { description: 'Man spielt Fußball und beschwert sich über Schiedsrichter.', answer: 'FIFA', aliases: ['ea fc','ea sports fc','fifa football'] },
    { description: 'Archäologin sucht Schätze, springt über Abgründe und fällt trotzdem oft.', answer: 'Tomb Raider', aliases: ['tomb raider game','lara croft'] },
    { description: 'Mann sucht seinen Sohn im Ödland und trödelt viel.', answer: 'Fallout', aliases: ['fallout 4','fallout 3','fallout new vegas','fallout game'] },
    { description: 'Klempner fährt Go-Kart und wirft Bananen auf seine Freunde.', answer: 'Mario Kart', aliases: ['mariokart','mario cart'] },
    { description: 'Ninja springt auf Dächern herum und stirbt 400 Mal.', answer: 'Sekiro', aliases: ['sekiro shadows die twice','sekiro game'] },
    { description: 'Man baut Städte und Krieger besiegen einander auf einer flachen Karte.', answer: 'Age of Empires', aliases: ['aoe','age of empires','age empires'] },
    { description: 'Held kämpft gegen seinen Vater, der ein böser Drache ist.', answer: 'The Elder Scrolls', aliases: ['skyrim','morrowind','oblivion','elder scrolls','tes'] },
    { description: 'Man schießt auf bunte Aliens und sammelt Waffen bis man genug Waffen hat.', answer: 'Borderlands', aliases: ['borderlands 2','borderlands 3'] },
    { description: 'Japanische Teenager kämpfen gegen Götter mithilfe von Persönlichkeitsstörungen.', answer: 'Persona', aliases: ['persona 5','persona 4','persona game'] },
    { description: 'Ein Detektiv schläft in seinem Büro und löst trotzdem Mordfälle.', answer: 'L.A. Noire', aliases: ['la noire','la noire game'] },
    { description: 'Hundert Spieler fallen auf eine Insel, 99 verlieren.', answer: 'Fortnite', aliases: ['fortnite battle royale'] },
    { description: 'Soldat kämpft gegen riesige Maschinen und reitet auf Pferden gleichzeitig.', answer: 'Horizon Zero Dawn', aliases: ['horizon zero dawn','horizon forbidden west','horizon game'] },
    { description: 'Man züchtet Pflanzen und verkauft sie. Das ist das ganze Spiel.', answer: 'Stardew Valley', aliases: ['stardew valley game','stardew'] },
    { description: 'Italiener baut Rohre und rettet Prinzessin erneut, diesmal in 3D.', answer: 'Super Mario 64', aliases: ['mario 64','super mario 64'] },
    { description: 'Kämpfer aus verschiedenen Universen prügeln sich auf einer kleinen Plattform.', answer: 'Super Smash Bros', aliases: ['smash bros','super smash brothers','ssbu'] },
    { description: 'Piraten kämpfen, singen und suchen Schätze auf Karibikinseln.', answer: 'Sea of Thieves', aliases: ['sea of thieves game'] },
    { description: 'Man fährt Rennautos und kauft immer mehr Rennautos die man nie fährt.', answer: 'Forza Horizon', aliases: ['forza motorsport','forza','forza horizon 5'] },
    { description: 'Wikinger wird unsterblich, schläft trotzdem immer mal wieder.', answer: 'Valheim', aliases: ['valheim game'] },
    { description: 'Man schleicht an Feinden vorbei und denkt man ist unsichtbar.', answer: 'Splinter Cell', aliases: ['splinter cell game','tom clancy splinter cell'] },
    { description: 'Ein Loewenjunges flieht nach dem Tod seines Vaters und kommt spaeter zurueck.', answer: 'Der Koenig der Loewen', aliases: ['lion king','der konig der lowen','konig der loewen','koenig der loewen','the lion king'] },
    { description: 'Eine Frau mit langen Haaren sitzt in einem Turm und wartet.', answer: 'Rapunzel', aliases: ['tangled','rapunzel film'] },
    { description: 'Ein Junge bekommt einen Brief und lernt zaubern.', answer: 'Harry Potter', aliases: ['harry potter film','harry potter und der stein der weisen'] },
    { description: 'Ein gruener Kerl lebt allein im Sumpf, bekommt aber unerwuenschten Besuch.', answer: 'Shrek', aliases: ['shrek film','shrek der tollkuhne held'] },
    { description: 'Zwei Hobbits tragen einen Ring in einen Vulkan.', answer: 'Der Herr der Ringe', aliases: ['lord of the rings','lotr','herr der ringe'] },
    { description: 'Ein Roboter raeumt die Erde auf und verliebt sich.', answer: 'WALL-E', aliases: ['wall e','walle'] },
    { description: 'Autos haben Augen und fahren Rennen.', answer: 'Cars', aliases: ['cars film','cars pixar'] },
    { description: 'Ein Maedchen faellt in ein Loch und trifft komische Leute.', answer: 'Alice im Wunderland', aliases: ['alice in wonderland'] },
    { description: 'Superhelden in bunten Anzuegen retten gemeinsam die Welt.', answer: 'Die Avengers', aliases: ['avengers','the avengers'] },
    { description: 'Ein Spinnenmann schwingt sich durch eine Grossstadt.', answer: 'Spider-Man', aliases: ['spiderman','spider man'] },
    { description: 'Ein Maedchen isst einen Apfel und schlaeft sehr lange.', answer: 'Schneewittchen', aliases: ['snow white','snow white and the seven dwarfs','schneewittchen und die sieben zwerge'] },
    { description: 'Taucher sucht seinen Sohn im Meer.', answer: 'Findet Nemo', aliases: ['finding nemo','nemo'] },
    { description: 'Dinosaurier laufen frei rum und fressen Touristen.', answer: 'Jurassic Park', aliases: ['jurassicpark','jurassic world'] },
    { description: 'Ein Maedchen mit rotem Umhang bringt Essen zu ihrer Oma.', answer: 'Rotkaeppchen', aliases: ['rotkappchen','little red riding hood','red riding hood'] },
    { description: 'Eine Prinzessin schlaeft und wird von einem Kuss geweckt.', answer: 'Dornroeschen', aliases: ['dornroschen','sleeping beauty'] },
    { description: 'Ein Mann in gruenen Strumpfhosen klaut von Reichen und gibt Armen.', answer: 'Robin Hood', aliases: ['robin hood film'] },
    { description: 'Kinder kaempfen mit leuchtenden Schwertern im Weltraum.', answer: 'Star Wars', aliases: ['starwars','krieg der sterne'] },
    { description: 'Kleine bunte Wesen kaempfen fuereinander und entwickeln sich weiter.', answer: 'Pokemon', aliases: ['pokemon game','pikachu'] },
    { description: 'Ameisen bauen eine Kolonie und eine kaempft gegen Heuschrecken.', answer: 'Das grosse Krabbeln', aliases: ['bugs life','a bugs life','das grosse krabbeln'] },
    { description: 'Ein Klotz fallt runter und man muss ihn drehen damit er passt.', answer: 'Tetris', aliases: ['tetris game'] },
    { description: 'Gelbe Kugel frisst Punkte und flieht vor Gespenstern.', answer: 'Pac-Man', aliases: ['pacman','pac man'] },
    { description: 'Man wirft Voegel mit einer Schleuder auf gruene Schweine.', answer: 'Angry Birds', aliases: ['angrybirds','angry birds game'] },
    { description: 'Ein Igel laeuft so schnell er kann und sammelt goldene Ringe.', answer: 'Sonic', aliases: ['sonic the hedgehog','sonic game'] },
    { description: 'Zwei Teams schieszen sich gegenseitig an und spawnen immer wieder.', answer: 'Counter-Strike', aliases: ['cs','csgo','cs go','counter strike','cs2'] },
    { description: 'Tiernachbarn besuchen dich jeden Tag und du schuldest ihnen immer Geld.', answer: 'Animal Crossing', aliases: ['animalcrossing','animal crossing game','new horizons'] },
    { description: 'Zwei Teams spielen Basketball aber mit Autos.', answer: 'Rocket League', aliases: ['rocketleague','rocket league game'] },
    { description: 'Ein Kloempner sammelt Muenzen und rettet die Prinzessin. Auf einem Kart.', answer: 'Mario Kart', aliases: ['mariokart','mario cart'] },
    { description: 'Man malt schnell ein Bild und andere tippen was es sein soll.', answer: 'skribbl.io', aliases: ['skribbl','skribblio','skribble'] },
    { description: 'Taenzer machen Pfeile nach die auf dem Bildschirm erscheinen.', answer: 'Just Dance', aliases: ['just dance game'] },
    { description: 'Man erschieszt Zombies in einer Apokalypse zusammen mit Freunden.', answer: 'Left 4 Dead', aliases: ['l4d','left 4 dead 2'] },
    { description: 'Eine Prinzessin wird entfuehrt, ein Gorilla klettert auf ein Gebaeude.', answer: 'Donkey Kong', aliases: ['donkeykong','donkey kong game'] },
    { description: 'Ein Ritter in gruener Ruestung rettet ein Koenigreich ganz alleine.', answer: 'The Legend of Zelda', aliases: ['zelda','legend of zelda'] },
    { description: 'Man baut eine Farm, heiratet jemanden und fischt eigentlich die ganze Zeit.', answer: 'Stardew Valley', aliases: ['stardew','stardew valley game'] },
    { description: 'Viele Menschen fallen auf eine Insel und nur einer gewinnt.', answer: 'Fortnite', aliases: ['fortnite battle royale'] },
    { description: 'Man baut Haeuser, Farmen und kaempft gegen Monster nachts.', answer: 'Minecraft', aliases: ['mine craft'] },
    { description: 'Man trainiert kleine Monster in einem Taschengeraet und laesst sie kaempfen.', answer: 'Pokemon', aliases: ['pokemon game','pikachu','tamagotchi'] },
    { description: 'Ein Mann in einem Fledermausanzug schlaegt Gangster und sagt wenig.', answer: 'Batman', aliases: ['the batman','batman film','dark knight'] },
    { description: 'Vier Schildkroeten leben in der Kanalisation und essen Pizza.', answer: 'Teenage Mutant Ninja Turtles', aliases: ['tmnt','ninja turtles','turtles film'] },
    { description: 'Ein Hund und ein Reh werden beste Freunde obwohl sie eigentlich Feinde sind.', answer: 'Cap und Capper', aliases: ['fox and the hound','cap und capper film'] },
    { description: 'Spielzeug wird lebendig wenn der Besitzer nicht hinschaut.', answer: 'Toy Story', aliases: ['toy story film','toystory'] },
  ];

  function esc(s) {
    return String(s||'').replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});
  }

  function beep(freq, dur, type, vol) {
    try {
      var ac = new (window.AudioContext||window.webkitAudioContext)();
      var o = ac.createOscillator(), g = ac.createGain();
      o.connect(g); g.connect(ac.destination);
      o.frequency.value = freq; o.type = type||'sine';
      g.gain.setValueAtTime(vol||0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime+dur);
      o.start(ac.currentTime); o.stop(ac.currentTime+dur+0.01);
    } catch(e) {}
  }

  function normalize(s) {
    return String(s||'').toLowerCase()
      .replace(/[àáâãäå]/g,'a').replace(/[èéêë]/g,'e').replace(/[ìíîï]/g,'i')
      .replace(/[òóôõöø]/g,'o').replace(/[ùúûü]/g,'u').replace(/ß/g,'ss')
      .replace(/[^a-z0-9]/g,'');
  }
  function levenshtein(a,b) {
    var m=a.length,n=b.length,dp=[],i,j;
    for(i=0;i<=m;i++){dp[i]=[i];}
    for(j=0;j<=n;j++){dp[0][j]=j;}
    for(i=1;i<=m;i++){for(j=1;j<=n;j++){
      dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
    }}
    return dp[m][n];
  }
  function checkAnswer(input, question) {
    var inp=normalize(input); if(!inp) return false;
    var targets=[question.answer].concat(question.aliases||[]);
    for(var i=0;i<targets.length;i++){
      var t=normalize(targets[i]);
      if(inp===t) return true;
      var d=Math.min(3,Math.floor(t.length*0.2));
      if(t.length>=4&&levenshtein(inp,t)<=d) return true;
      if(t.length>=5&&(inp.indexOf(t)!==-1||t.indexOf(inp)!==-1)) return true;
    }
    return false;
  }

  var WIN_SCORE = 3;
  var BUZZ_SECS = 15;

  // ═══════════════════════════════════════════════════════════
  // WIE DAS NETZWERK FUNKTIONIERT (aus Referenz-Spiel gelernt):
  //
  // network.send(event, data)  →  schickt NUR an die ANDERE Seite
  //                               (der Sender empfängt sein eigenes Event NICHT)
  //
  // Daher: Wer eine Aktion ausführt, muss seinen eigenen State DIREKT setzen.
  //         network.send informiert nur den Gegner.
  //
  // Timer-Modell: EIN setInterval läuft auf BEIDEN Seiten parallel.
  // Beide starten den Timer bei denselben Ereignissen. Der Timer ist
  // nur für die Anzeige — die Spiellogik wird vom Sender selbst geführt.
  //
  // ABLAUF:
  //   1. Frage erscheint → beide: phase='answering', kein Timer
  //   2. P1 oder P2 buzzert:
  //      → Buzzer setzt lokal: _buzzedPlayer, startet 15s-Timer
  //      → sendet pt_buzz an Gegner
  //      → Gegner empfängt pt_buzz, setzt _buzzedPlayer, startet 15s-Timer
  //   3. Buzzender gibt Antwort:
  //      richtig → sendet pt_result, zeigt Overlay
  //      falsch  → sendet pt_wrong { counter: 'p2'|'p1' }
  //                → beide: _buzzedPlayer=null, _counterPlayer=opponent, Timer neu starten
  //   4. Counter-Spieler buzzert → sendet pt_counter_buzz
  //      → beide: Eingabe oder Status zeigen
  //   5. Counter falsch → sendet pt_reset
  //      → beide: zurück zu waiting, Timer stoppen, Buzzer frei
  //   6. Skip: sendet pt_skip_vote; wenn beide → pt_result
  // ═══════════════════════════════════════════════════════════

  function PlotTwistInstance(container, ctx, onEnd) {
    this.container       = container;
    this.ctx             = ctx;
    this.onEnd           = onEnd;
    this.dead            = false;
    this.mini            = 1;
    this.p1Wins          = 0;
    this.p2Wins          = 0;
    this._deck           = [];
    this.currentQ        = null;
    this.phase           = 'idle';    // 'idle'|'countdown'|'answering'|'result'
    this._buzzedPlayer   = null;      // null|'p1'|'p2'  — wer gerade antworten muss
    this._counterPlayer  = null;      // null|'p1'|'p2'  — wer Konter-Chance hat
    this._buzzTimerLeft  = 0;
    this._tickInterval   = null;
    this._p1SkipVote     = false;
    this._p2SkipVote     = false;
    this._cdrTimers      = [];

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  PlotTwistInstance.prototype = {

    // ───────────────────────────────────────────────────────
    // UI AUFBAUEN
    // ───────────────────────────────────────────────────────
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'pt-root';
      root.style.cssText =
        'width:100%;height:100%;background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e1428,#060610);' +
        'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
        'position:relative;overflow:hidden;padding:16px 20px;box-sizing:border-box;font-family:"Bebas Neue",sans-serif;';

      root.innerHTML =
        // Hintergrund-Glow
        '<div style="position:absolute;pointer-events:none;width:560px;height:560px;border-radius:50%;' +
        'top:50%;left:50%;transform:translate(-50%,-50%);border:1px solid rgba(160,80,255,.04);"></div>' +
        // Punkte-Dots
        '<div id="pt-dots" style="display:flex;align-items:center;gap:16px;margin-bottom:14px;min-height:28px;"></div>' +
        // Subtitle
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;' +
        'color:#c0c0d8;text-transform:uppercase;margin-bottom:10px;">🎬 Der Plot-Twist – Filme &amp; Spiele schlecht erklärt!</div>' +
        // Timer (nur nach Buzz)
        '<div id="pt-timer" style="font-size:28px;font-family:\'Barlow Condensed\',sans-serif;' +
        'color:#f0c030;letter-spacing:.1em;margin-bottom:6px;display:none;min-height:36px;"></div>' +
        // Beschreibung
        '<div id="pt-desc-wrap" style="display:none;width:100%;max-width:500px;margin-bottom:16px;">' +
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:10px;letter-spacing:.35em;' +
          'color:#a070ff;text-transform:uppercase;margin-bottom:6px;text-align:center;">🤔 WAS WIRD HIER BESCHRIEBEN?</div>' +
          '<div id="pt-desc" style="background:rgba(160,112,255,.07);border:2px solid rgba(160,112,255,.3);' +
          'color:#e8e0ff;font-family:\'Barlow Condensed\',sans-serif;font-size:clamp(16px,3.5vw,22px);' +
          'letter-spacing:.04em;line-height:1.45;padding:18px 22px;text-align:center;' +
          'min-height:60px;display:flex;align-items:center;justify-content:center;"></div>' +
        '</div>' +
        // Status
        '<div id="pt-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:20px;' +
        'letter-spacing:.2em;color:#c0c0d8;text-transform:uppercase;min-height:30px;margin-bottom:14px;text-align:center;"></div>' +
        // Start-Button
        '<button id="pt-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';' +
        'margin-bottom:18px;background:#a070ff;border:none;color:#fff;cursor:pointer;' +
        'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;padding:12px 40px;' +
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));' +
        '">RUNDE STARTEN</button>' +
        // Buzzer-Bereich
        '<div id="pt-buzzers" style="display:none;gap:14px;width:100%;max-width:460px;justify-content:center;flex-wrap:wrap;margin-bottom:12px;"></div>' +
        // Skip-Bereich
        '<div id="pt-skip-area" style="display:none;flex-direction:column;align-items:center;gap:5px;width:100%;max-width:460px;margin-bottom:10px;">' +
          '<div id="pt-skip-info" style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;' +
          'letter-spacing:.2em;color:#444;text-transform:uppercase;min-height:16px;"></div>' +
          '<div id="pt-skip-btns" style="display:flex;gap:10px;justify-content:center;"></div>' +
        '</div>' +
        // Eingabe nach Buzz
        '<div id="pt-input-area" style="display:none;flex-direction:column;align-items:center;gap:10px;width:100%;max-width:420px;margin-top:4px;">' +
          '<div id="pt-input-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;' +
          'letter-spacing:.2em;color:#f0c030;text-transform:uppercase;"></div>' +
          '<div style="display:flex;gap:8px;width:100%;">' +
            '<input id="pt-inp" type="text" placeholder="Antwort eingeben…" autocomplete="off" autocorrect="off"' +
            ' style="flex:1;background:rgba(255,255,255,.06);border:2px solid #a070ff;color:#fff;' +
            'font-family:\'Barlow Condensed\',sans-serif;font-size:17px;padding:10px 14px;outline:none;"/>' +
            '<button id="pt-submit" style="background:#a070ff;border:none;color:#fff;cursor:pointer;' +
            'font-family:\'Bebas Neue\',sans-serif;font-size:16px;letter-spacing:.1em;padding:10px 20px;' +
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));' +
            '">OK</button>' +
          '</div>' +
        '</div>' +
        // Overlay
        '<div id="pt-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);display:none;' +
        'flex-direction:column;align-items:center;justify-content:center;gap:10px;text-align:center;padding:28px;">' +
          '<div id="pt-ov-ico" style="font-size:52px;"></div>' +
          '<div id="pt-ov-ttl" style="font-family:\'Bebas Neue\',sans-serif;font-size:clamp(24px,6vw,46px);color:#f0c030;letter-spacing:.05em;"></div>' +
          '<div id="pt-ov-desc" style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;color:#888;font-style:italic;max-width:400px;margin:2px 0;line-height:1.4;"></div>' +
          '<div id="pt-ov-note" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#f55a3a;min-height:18px;"></div>' +
          '<div id="pt-ov-badges" style="display:flex;gap:20px;margin:6px 0;flex-wrap:wrap;justify-content:center;"></div>' +
          '<div id="pt-ov-score" style="font-family:\'Barlow Condensed\',sans-serif;font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>' +
          '<button id="pt-ov-btn" style="margin-top:8px;display:none;background:#a070ff;border:none;color:#fff;cursor:pointer;' +
          'font-family:\'Bebas Neue\',sans-serif;font-size:20px;padding:12px 40px;' +
          'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));' +
          '">WEITER →</button>' +
        '</div>';

      this.container.appendChild(root);
      this._drawDots();

      if (this.ctx.isHost) {
        document.getElementById('pt-start-btn').addEventListener('click', function() {
          this.style.display = 'none';
          self.ctx.network.send('pt_start_countdown', {});
          self._runCountdown();
        });
      }
      document.getElementById('pt-submit').addEventListener('click', function() { self._submitAnswer(); });
      document.getElementById('pt-inp').addEventListener('keydown', function(e) { if(e.key==='Enter') self._submitAnswer(); });
    },

    // ───────────────────────────────────────────────────────
    // NETZWERK
    // WICHTIG: send() schickt nur an den GEGNER, nicht an sich selbst.
    // Daher empfängt jeder Handler nur Nachrichten der ANDEREN Seite.
    // ───────────────────────────────────────────────────────
    _setupNet: function() {
      var self = this;

      // Guest startet Countdown
      this.ctx.network.on('pt_start_countdown', function() {
        if (!self.ctx.isHost) self._runCountdown();
      });

      // Guest empfängt neue Frage vom Host
      this.ctx.network.on('pt_sync_question', function(msg) {
        if (self.ctx.isHost) return;
        self.currentQ       = msg.q;
        self.phase          = 'answering';
        self._buzzedPlayer  = null;
        self._counterPlayer = null;
        self._p1SkipVote    = false;
        self._p2SkipVote    = false;
        self._clearTickTimer();
        self._showQuestion();
      });

      // GEGNER hat gebuzzert → empfangender Spieler:
      //   - setzt _buzzedPlayer
      //   - startet 15s-Timer
      //   - zeigt Status "X antwortet…"
      // Host empfängt dies wenn P2 buzzert → startet auch Timer
      this.ctx.network.on('pt_buzz', function(msg) {
        self._buzzedPlayer = msg.player;
        self._renderBuzzers();
        self._startBuzzTimer();
        // Eingabe-Bereich ausblenden (ich bin nicht dran)
        document.getElementById('pt-input-area').style.display = 'none';
        var name = msg.player === 'p1' ? self.ctx.p1Name : self.ctx.p2Name;
        self._setStatus(name + ' antwortet… 15 Sek!', msg.player==='p1'?'#3ab4f5':'#f55a3a', '18px');
      });

      // Gegner hat falsch geantwortet → Konter-Chance
      this.ctx.network.on('pt_wrong', function(msg) {
        self._buzzedPlayer  = null;
        self._counterPlayer = msg.counter;
        self._clearTickTimer();
        self._renderBuzzers();
        document.getElementById('pt-input-area').style.display = 'none';
        self._startBuzzTimer(); // neuer 15s-Timer für Konter
        var cName = msg.counter==='p1' ? self.ctx.p1Name : self.ctx.p2Name;
        self._setStatus(msg.whoName + ' lag falsch! ' + cName + ' hat 15 Sek!', '#f55a3a', '15px');
      });

      // Konter-Spieler hat seinen Buzzer gedrückt → zeige Eingabe dem Gegner auch
      this.ctx.network.on('pt_counter_buzz', function(msg) {
        // Für den Empfänger (Nicht-Konter-Spieler): Status zeigen
        var name = msg.player==='p1' ? self.ctx.p1Name : self.ctx.p2Name;
        self._setStatus(name + ' antwortet (Konter)…', msg.player==='p1'?'#3ab4f5':'#f55a3a', '18px');
      });

      // Beide Konter-Antworten falsch / Konter-Zeit ab → zurück zu waiting
      this.ctx.network.on('pt_reset', function() {
        self._buzzedPlayer  = null;
        self._counterPlayer = null;
        self._clearTickTimer();
        document.getElementById('pt-timer').style.display = 'none';
        document.getElementById('pt-input-area').style.display = 'none';
        self._renderBuzzers();
        self._renderSkipArea();
        self._setStatus('BUZZ! Wer weiß es?', '#a070ff', '18px');
      });

      // Ergebnis empfangen (Guest)
      this.ctx.network.on('pt_result', function(msg) {
        if (self.ctx.isHost) return;
        self.p1Wins = msg.p1Wins; self.p2Wins = msg.p2Wins;
        self._showResult(msg);
      });

      // Skip-Stimme empfangen
      // Da send() nur an den Gegner geht: wenn ich skip drücke, empfängt der Gegner pt_skip_vote.
      // Wenn der Gegner dann auch skippt, empfange ich sein pt_skip_vote.
      this.ctx.network.on('pt_skip_vote', function(msg) {
        if (msg.player === 'p1') self._p1SkipVote = true;
        else                     self._p2SkipVote = true;
        self._renderSkipArea();
        // Wenn Host und jetzt beide geskippt → Ergebnis zeigen
        if (self.ctx.isHost && self._p1SkipVote && self._p2SkipVote) {
          self._clearTickTimer();
          beep(330, 0.12, 'sine', 0.1);
          self._doShowResult(null, true);
        }
      });

      // Host empfängt richtige Antwort von Guest (P2)
      this.ctx.network.on('pt_correct', function(msg) {
        if (!self.ctx.isHost) return;
        var winner = msg.winner;
        self._clearTickTimer();
        if (winner==='p1') self.p1Wins++; else self.p2Wins++;
        self._doShowResult(winner, false);
      });

      // Nächste Runde (Guest)
      this.ctx.network.on('pt_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) { self._finish(); return; }
        self.mini++;
        self._startMini();
        document.getElementById('pt-ov').style.display = 'none';
      });
    },

    // ───────────────────────────────────────────────────────
    // RUNDEN-MANAGEMENT
    // ───────────────────────────────────────────────────────
    _startMini: function() {
      if (this.dead) return;
      this.phase          = 'idle';
      this._buzzedPlayer  = null;
      this._counterPlayer = null;
      this._p1SkipVote    = false;
      this._p2SkipVote    = false;
      this._clearTickTimer();
      this._cdrTimers.forEach(clearTimeout); this._cdrTimers = [];

      document.getElementById('pt-desc-wrap').style.display  = 'none';
      document.getElementById('pt-buzzers').style.display    = 'none';
      document.getElementById('pt-skip-area').style.display  = 'none';
      document.getElementById('pt-input-area').style.display = 'none';
      document.getElementById('pt-timer').style.display      = 'none';
      this._setStatus('Bereit?', '#c0c0d8', '18px');

      if (this.ctx.isHost) {
        document.getElementById('pt-start-btn').style.display = 'block';
        if (this._deck.length === 0) {
          var idx = QUESTIONS.map(function(_,i){return i;});
          for (var i=idx.length-1;i>0;i--) {
            var j=Math.floor(Math.random()*(i+1)), t=idx[i]; idx[i]=idx[j]; idx[j]=t;
          }
          this._deck = idx;
        }
        this.currentQ = QUESTIONS[this._deck.shift()];
      }
      this._drawDots();
    },

    _runCountdown: function() {
      if (this.dead) return;
      var self = this, n = 3;
      document.getElementById('pt-start-btn').style.display = 'none';
      var tick = function() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self._cdrTimers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('', '#c0c0d8');
          if (self.ctx.isHost) {
            // Host setzt State und sendet an Guest
            self.phase         = 'answering';
            self._buzzedPlayer = null;
            self._counterPlayer= null;
            self._p1SkipVote   = false;
            self._p2SkipVote   = false;
            self.ctx.network.send('pt_sync_question', { q: self.currentQ });
            self._showQuestion();
          }
        }
      };
      tick();
    },

    // ───────────────────────────────────────────────────────
    // FRAGE ZEIGEN
    // ───────────────────────────────────────────────────────
    _showQuestion: function() {
      var el = document.getElementById('pt-desc');
      if (el && this.currentQ) el.textContent = this.currentQ.description;
      document.getElementById('pt-desc-wrap').style.display  = 'block';
      document.getElementById('pt-input-area').style.display = 'none';
      document.getElementById('pt-timer').style.display      = 'none';
      this._renderBuzzers();
      this._renderSkipArea();
      this._setStatus('BUZZ! Wer weiß es?', '#a070ff', '18px');
      beep(550, 0.1, 'sine', 0.12);
    },

    // ───────────────────────────────────────────────────────
    // BUZZER RENDERN
    // waiting (_buzzedPlayer=null, _counterPlayer=null): jeder sieht seinen Buzzer
    // buzzed  (_buzzedPlayer!=null):                     niemand sieht Buzzer
    // counter (_counterPlayer!=null):                    nur Konter-Spieler sieht Buzzer
    // ───────────────────────────────────────────────────────
    _renderBuzzers: function() {
      var self = this;
      var el = document.getElementById('pt-buzzers');
      if (!el) return;
      el.innerHTML = '';

      var me        = this.ctx.isHost ? 'p1' : 'p2';
      var color     = me==='p1' ? '#3ab4f5' : '#f55a3a';
      var colorBg   = me==='p1' ? 'rgba(58,180,245,.1)' : 'rgba(245,90,58,.1)';
      var colorBgH  = me==='p1' ? 'rgba(58,180,245,.25)' : 'rgba(245,90,58,.25)';

      // Buzzer zeigen?
      var isWaiting = !this._buzzedPlayer && !this._counterPlayer;
      var isMyCounter = this._counterPlayer === me;
      var showBuzz = (this.phase === 'answering') && (isWaiting || isMyCounter);

      if (!showBuzz) {
        el.style.display = 'none';
        return;
      }

      var isCounter = isMyCounter;
      var label = isCounter ? '🎯&nbsp;&nbsp;KONTER!' : '🔔&nbsp;&nbsp;BUZZ!';
      var b = document.createElement('button');
      b.innerHTML = label;
      b.style.cssText =
        'background:'+colorBg+';border:2px solid '+color+';color:'+color+';' +
        'font-family:\'Bebas Neue\',sans-serif;font-size:24px;letter-spacing:.2em;padding:16px 44px;' +
        'cursor:pointer;clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));transition:background .12s;';
      b.onmouseenter = function(){ this.style.background=colorBgH; };
      b.onmouseleave = function(){ this.style.background=colorBg; };
      b.onclick = function() {
        if (isCounter) self._doCounterBuzz();
        else           self._doBuzz();
      };
      el.appendChild(b);
      el.style.display = 'flex';
    },

    // ───────────────────────────────────────────────────────
    // SKIP RENDERN — nur wenn kein Buzz aktiv
    // ───────────────────────────────────────────────────────
    _renderSkipArea: function() {
      var self = this;
      var area    = document.getElementById('pt-skip-area');
      var infoEl  = document.getElementById('pt-skip-info');
      var btnsEl  = document.getElementById('pt-skip-btns');
      if (!area) return;
      btnsEl.innerHTML = '';

      var isWaiting = !this._buzzedPlayer && !this._counterPlayer;
      if (this.phase !== 'answering' || !isWaiting) {
        area.style.display = 'none';
        return;
      }
      area.style.display = 'flex';

      var me     = this.ctx.isHost ? 'p1' : 'p2';
      var myVote = me==='p1' ? this._p1SkipVote : this._p2SkipVote;
      var color  = me==='p1' ? '#3ab4f5' : '#f55a3a';

      if (!myVote) {
        var sb = document.createElement('button');
        sb.innerHTML = '⏭&nbsp;SKIP';
        sb.style.cssText =
          'background:rgba(255,255,255,.04);border:1px solid '+color+'55;color:'+color+';' +
          'font-family:\'Bebas Neue\',sans-serif;font-size:14px;letter-spacing:.15em;' +
          'padding:8px 24px;cursor:pointer;opacity:.75;';
        sb.onclick = function() { self._doSkip(); };
        btnsEl.appendChild(sb);
      }

      if (this._p1SkipVote && this._p2SkipVote) {
        infoEl.textContent = 'Beide skippen!'; infoEl.style.color = '#2af0a0';
      } else if (myVote) {
        infoEl.textContent = 'Skip bereit — warte auf Gegner…'; infoEl.style.color = '#888';
      } else {
        infoEl.textContent = 'Beide müssen Skip drücken.'; infoEl.style.color = '#444';
      }
    },

    // ───────────────────────────────────────────────────────
    // BUZZ-TIMER — läuft auf BEIDEN Seiten parallel
    // Gestartet bei: eigener Buzz, Empfang von pt_buzz, pt_wrong
    // ───────────────────────────────────────────────────────
    _startBuzzTimer: function() {
      var self = this;
      this._clearTickTimer();
      this._buzzTimerLeft = BUZZ_SECS;
      this._showTimer(BUZZ_SECS);

      this._tickInterval = setInterval(function() {
        if (self.dead) return;
        self._buzzTimerLeft--;
        self._showTimer(self._buzzTimerLeft);

        if (self._buzzTimerLeft <= 0) {
          self._clearTickTimer();
          // Nur Host entscheidet was passiert
          if (!self.ctx.isHost) return;

          if (self._buzzedPlayer) {
            // Buzz-Zeit abgelaufen → Konter-Chance
            var opp     = self._buzzedPlayer==='p1' ? 'p2' : 'p1';
            var whoName = self._buzzedPlayer==='p1' ? self.ctx.p1Name : self.ctx.p2Name;
            self._buzzedPlayer  = null;
            self._counterPlayer = opp;
            self.ctx.network.send('pt_wrong', { whoName: whoName, counter: opp });
            self._renderBuzzers();
            document.getElementById('pt-input-area').style.display = 'none';
            var cName = opp==='p1' ? self.ctx.p1Name : self.ctx.p2Name;
            self._setStatus(whoName + ' — Zeit! ' + cName + ' hat 15 Sek!', '#f55a3a', '15px');
            self._startBuzzTimer(); // neuer Timer für Konter
          } else if (self._counterPlayer) {
            // Konter-Zeit auch abgelaufen → zurück zu waiting
            self._buzzedPlayer  = null;
            self._counterPlayer = null;
            self.ctx.network.send('pt_reset', {});
            document.getElementById('pt-timer').style.display = 'none';
            document.getElementById('pt-input-area').style.display = 'none';
            self._renderBuzzers();
            self._renderSkipArea();
            self._setStatus('BUZZ! Wer weiß es?', '#a070ff', '18px');
          }
        }
      }, 1000);
    },

    _clearTickTimer: function() {
      if (this._tickInterval) { clearInterval(this._tickInterval); this._tickInterval = null; }
    },

    _showTimer: function(s) {
      var el = document.getElementById('pt-timer');
      if (!el) return;
      el.style.display = 'block';
      el.textContent   = '0:' + (s<10?'0':'') + s;
      el.style.color   = s<=5 ? '#f55a3a' : '#f0c030';
    },

    // ───────────────────────────────────────────────────────
    // AKTIONEN
    // ───────────────────────────────────────────────────────
    _doBuzz: function() {
      if (this.phase !== 'answering' || this._buzzedPlayer || this._counterPlayer) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      beep(660, 0.1, 'square', 0.2);
      // Eigenen State setzen
      this._buzzedPlayer = me;
      // Timer starten
      this._startBuzzTimer();
      // Buzzer verstecken, Eingabe zeigen
      this._renderBuzzers();
      this._renderSkipArea();
      this._showInputArea(me);
      // Gegner informieren
      this.ctx.network.send('pt_buzz', { player: me });
    },

    _doCounterBuzz: function() {
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (this.phase !== 'answering' || this._counterPlayer !== me) return;
      beep(550, 0.1, 'square', 0.15);
      // Eingabe zeigen (Timer läuft bereits)
      this._renderBuzzers();
      this._showInputArea(me);
      // Gegner informieren (damit er Status sieht)
      this.ctx.network.send('pt_counter_buzz', { player: me });
    },

    _doSkip: function() {
      if (this.phase !== 'answering' || this._buzzedPlayer || this._counterPlayer) return;
      var me = this.ctx.isHost ? 'p1' : 'p2';
      if (me==='p1') this._p1SkipVote = true;
      else           this._p2SkipVote = true;
      this._renderSkipArea();
      // Gegner informieren
      this.ctx.network.send('pt_skip_vote', { player: me });
      // Wenn Host und bereits beide gesetzt (wäre der Fall wenn Guest schon geskippt hatte)
      if (this.ctx.isHost && this._p1SkipVote && this._p2SkipVote) {
        this._clearTickTimer();
        beep(330, 0.12, 'sine', 0.1);
        this._doShowResult(null, true);
      }
    },

    // ───────────────────────────────────────────────────────
    // ANTWORT AUSWERTEN
    // ───────────────────────────────────────────────────────
    _submitAnswer: function() {
      var me = this.ctx.isHost ? 'p1' : 'p2';
      // Nur wenn ich dran bin
      var isMyTurn =
        (this._buzzedPlayer  === me) ||
        (this._counterPlayer === me);
      if (!isMyTurn) return;

      var inp = document.getElementById('pt-inp');
      var val = inp ? inp.value.trim() : '';
      if (!val) return;

      var wasCounter = this._counterPlayer === me;

      if (checkAnswer(val, this.currentQ)) {
        // ✓ Richtig
        beep(880, 0.15, 'sine', 0.2);
        this._clearTickTimer();
        if (this.ctx.isHost) {
          if (me==='p1') this.p1Wins++; else this.p2Wins++;
          this._doShowResult(me, false);
        } else {
          // Guest meldet richtige Antwort dem Host
          this.ctx.network.send('pt_correct', { winner: me });
        }

      } else {
        // ✗ Falsch
        beep(200, 0.2, 'sawtooth', 0.15);
        var myName = me==='p1' ? this.ctx.p1Name : this.ctx.p2Name;
        var opp    = me==='p1' ? 'p2' : 'p1';

        if (!wasCounter) {
          // Erster Buzz falsch → Konter-Chance
          this._clearTickTimer();
          this._buzzedPlayer  = null;
          this._counterPlayer = opp;
          this.ctx.network.send('pt_wrong', { whoName: myName, counter: opp });
          document.getElementById('pt-input-area').style.display = 'none';
          this._renderBuzzers();
          this._renderSkipArea();
          var cName = opp==='p1' ? this.ctx.p1Name : this.ctx.p2Name;
          this._setStatus(myName + ' lag falsch! ' + cName + ' hat 15 Sek!', '#f55a3a', '15px');
          this._startBuzzTimer(); // neuer 15s-Timer für Konter

        } else {
          // Konter auch falsch → SOFORT Buzzer frei, kein weiterer Timer
          this._clearTickTimer();
          this._buzzedPlayer  = null;
          this._counterPlayer = null;
          this.ctx.network.send('pt_reset', {});
          document.getElementById('pt-timer').style.display      = 'none';
          document.getElementById('pt-input-area').style.display = 'none';
          this._renderBuzzers();
          this._renderSkipArea();
          this._setStatus('Beide lagen falsch — BUZZ nochmal!', '#888', '16px');
        }
      }
    },

    // ───────────────────────────────────────────────────────
    // ERGEBNIS (nur Host ruft dies auf; sendet an Guest)
    // ───────────────────────────────────────────────────────
    _doShowResult: function(winner, skipped) {
      if (!this.ctx.isHost) return;
      this._clearTickTimer();
      var p1Pts = winner==='p1' ? 1 : 0;
      var p2Pts = winner==='p2' ? 1 : 0;
      var msg = {
        winner:  winner,
        answer:  this.currentQ.answer,
        desc:    this.currentQ.description,
        p1Pts:   p1Pts,
        p2Pts:   p2Pts,
        p1Wins:  this.p1Wins,
        p2Wins:  this.p2Wins,
        skipped: skipped||false
      };
      this.ctx.network.send('pt_result', msg);
      this._showResult(msg);
    },

    _showResult: function(msg) {
      var self = this;
      this.phase = 'result';
      this._clearTickTimer();
      this._cdrTimers.forEach(clearTimeout); this._cdrTimers = [];

      document.getElementById('pt-desc-wrap').style.display  = 'none';
      document.getElementById('pt-buzzers').style.display    = 'none';
      document.getElementById('pt-skip-area').style.display  = 'none';
      document.getElementById('pt-input-area').style.display = 'none';
      document.getElementById('pt-timer').style.display      = 'none';

      document.getElementById('pt-ov-ico').textContent  = msg.skipped ? '⏭' : (msg.winner ? '🎉' : '⏳');
      document.getElementById('pt-ov-ttl').textContent  = msg.answer || '?';
      document.getElementById('pt-ov-desc').textContent = '"' + (msg.desc||'') + '"';
      document.getElementById('pt-ov-note').textContent = msg.skipped ? 'Beide haben übersprungen.' : '';

      function badge(name, pts, col) {
        var vc=pts>0?'#2af0a0':'#777', mk=pts>0?'✓':'—';
        return '<div style="display:flex;flex-direction:column;align-items:center;gap:3px;">' +
          '<div style="font-family:\'Bebas Neue\',sans-serif;font-size:13px;color:'+col+';">'+esc(name)+'</div>' +
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:28px;color:'+vc+';">'+mk+'</div>' +
          (pts>0?'<div style="font-size:12px;color:'+vc+';">+1 Punkt</div>':'') +
          '</div>';
      }
      document.getElementById('pt-ov-badges').innerHTML =
        badge(this.ctx.p1Name, msg.p1Pts, '#3ab4f5') +
        '<div style="color:#c0c0d8;padding-top:8px;font-size:18px;">VS</div>' +
        badge(this.ctx.p2Name, msg.p2Pts, '#f55a3a');
      document.getElementById('pt-ov-score').innerHTML =
        msg.p1Wins + ' : ' + msg.p2Wins + ' &nbsp;·&nbsp; Ziel: ' + WIN_SCORE + ' Punkte';

      this._drawDots();
      document.getElementById('pt-ov').style.display = 'flex';

      var gameOver = msg.p1Wins >= WIN_SCORE || msg.p2Wins >= WIN_SCORE;
      var btn = document.getElementById('pt-ov-btn');
      btn.textContent   = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE';
      btn.style.display = this.ctx.isHost ? 'block' : 'none';

      if (this.ctx.isHost) {
        btn.onclick = function() {
          self.ctx.network.send('pt_next', { gameOver: gameOver });
          if (gameOver) { self._finish(); return; }
          self.mini++;
          self._startMini();
          document.getElementById('pt-ov').style.display = 'none';
        };
      }
    },

    // ───────────────────────────────────────────────────────
    // HELFER
    // ───────────────────────────────────────────────────────
    _showInputArea: function(player) {
      var me = this.ctx.isHost ? 'p1' : 'p2';
      document.getElementById('pt-buzzers').style.display = 'none';
      if (player === me) {
        var lbl = document.getElementById('pt-input-label');
        lbl.textContent = this._counterPlayer === me ? '🎯 Dein Konter! 15 Sekunden!' : '🔔 Deine Antwort! 15 Sekunden!';
        lbl.style.color = player==='p1' ? '#3ab4f5' : '#f55a3a';
        document.getElementById('pt-input-area').style.display = 'flex';
        var inp = document.getElementById('pt-inp');
        inp.value = '';
        setTimeout(function(){ inp.focus(); }, 50);
        this._setStatus('Deine Antwort!', player==='p1'?'#3ab4f5':'#f55a3a', '20px');
      } else {
        var name = player==='p1' ? this.ctx.p1Name : this.ctx.p2Name;
        this._setStatus(name + ' antwortet… 15 Sek!', player==='p1'?'#3ab4f5':'#f55a3a', '18px');
      }
    },

    _setStatus: function(t,c,s) {
      var el = document.getElementById('pt-status');
      if (el) { el.textContent=t; el.style.color=c||'#c0c0d8'; el.style.fontSize=s||'18px'; }
    },

    _drawDots: function() {
      var el = document.getElementById('pt-dots');
      if (!el) return;
      var d1='',d2='',bs='display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 2px;border:2px solid ';
      for(var i=0;i<WIN_SCORE;i++){
        d1+='<span style="'+bs+(i<this.p1Wins?'#3ab4f5;background:#3ab4f5':'rgba(58,180,245,.2)')+'"></span>';
        d2+='<span style="'+bs+(i<this.p2Wins?'#f55a3a;background:#f55a3a':'rgba(245,90,58,.2)')+'"></span>';
      }
      el.innerHTML=d1+'<span style="color:#c0c0d8;margin:0 10px;font-size:12px;">RUNDE '+this.mini+'</span>'+d2;
    },

    _finish: function() {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins>=WIN_SCORE?'p1':'p2', details: this.p1Wins+' : '+this.p2Wins });
    },

    destroy: function() {
      this.dead = true;
      this._clearTickTimer();
      this._cdrTimers.forEach(clearTimeout);
      ['pt_start_countdown','pt_sync_question','pt_buzz','pt_wrong','pt_counter_buzz',
       'pt_reset','pt_result','pt_correct','pt_skip_vote','pt_next']
        .forEach(function(ev){ try{ this.ctx.network.off(ev); }catch(e){} }.bind(this));
    }
  };

  GamePool.register({
    id:          'plot-twist',
    name:        'Der Plot-Twist',
    description: '🎬 Filme & Spiele absurd schlecht erklärt — buzz und rate! Wer zuerst 5 Punkte hat, gewinnt!',
    init:        function(container, ctx, onEnd) { this._instance = new PlotTwistInstance(container, ctx, onEnd); },
    destroy:     function() { if (this._instance) this._instance.destroy(); }
  });

})();
