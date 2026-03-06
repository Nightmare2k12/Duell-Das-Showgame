(function () {

  // ═══════════════════════════════════════════════════════════
  // PROMI-DATENBANK
  // ═══════════════════════════════════════════════════════════
  var CELEBS = [
    { name: 'Albert Einstein',       alt: ['einstein'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg' },
    { name: 'Barack Obama',          alt: ['obama','barrack obama'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg' },
    { name: 'Elon Musk',             alt: ['musk','elon'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg' },
    { name: 'Angela Merkel',         alt: ['merkel'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Angela_Merkel_%282008%29-2.jpg/640px-Angela_Merkel_%282008%29-2.jpg' },
    { name: 'Cristiano Ronaldo',     alt: ['ronaldo','cr7','cristiano'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg' },
    { name: 'Lionel Messi',          alt: ['messi','leo messi','leonel messi'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg' },
    { name: 'Marilyn Monroe',        alt: ['marylin monroe','marylin','marilyn'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Marilyn_Monroe%2C_Photoplay_1953.jpg/500px-Marilyn_Monroe%2C_Photoplay_1953.jpg?_=20200515134336' },
    { name: 'Leonardo DiCaprio',     alt: ['dicaprio','leonardo','di caprio'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Leonardo_Dicaprio_Cannes_2019.jpg' },
    { name: 'Eminem',                alt: ['slim shady','marshall mathers'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Eminem_2021_Color_Corrected.jpg/500px-Eminem_2021_Color_Corrected.jpg?_=20231204135935' },
    { name: 'Arnold Schwarzenegger', alt: ['schwarzenegger','arnie','arnold'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg/500px-Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg?_=20190723102249' },
    { name: 'Oprah Winfrey',         alt: ['oprah','winfrey'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Oprah_in_2014.jpg' },
    { name: 'Dwayne Johnson',        alt: ['the rock','rock','dwayne','johnson'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Dwayne_Johnson_2014_%28cropped%29.jpg' },
    { name: 'Adele',                 alt: ['adel'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Adele_-_Live_2016%2C_Glasgow_SSE_Hydro_03.jpg/500px-Adele_-_Live_2016%2C_Glasgow_SSE_Hydro_03.jpg?_=20211114071239' },
    { name: 'Justin Bieber',         alt: ['bieber','justin'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Justin_Bieber_in_2015.jpg/500px-Justin_Bieber_in_2015.jpg?_=20210730084435' },
    { name: 'Meryl Streep',          alt: ['streep'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Meryl_Streep_December_2018_%28cropped%29.jpg/500px-Meryl_Streep_December_2018_%28cropped%29.jpg?_=20231011013835' },
    { name: 'Tom Hanks',             alt: ['hanks','tomhanks'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Tom_Hanks_TIFF_2019.jpg' },
    { name: 'Johnny Depp',           alt: ['depp','johnnydepp'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Johnny_Depp-2821.jpg/960px-Johnny_Depp-2821.jpg?_=20201023195459' },
    { name: 'Will Smith',            alt: ['smith','willsmith'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Will_Smith_by_Gage_Skidmore.jpg/500px-Will_Smith_by_Gage_Skidmore.jpg?_=20160728053858' },
    { name: 'Rihanna',               alt: ['riana','rianna'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Rihanna_Fenty_2018.png/500px-Rihanna_Fenty_2018.png?_=20200320030536' },
    { name: 'Billie Eilish',         alt: ['billie','eilish'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Billie_Eilish_%40Pukkelpop_2019_%2848590585552%29.jpg/960px-Billie_Eilish_%40Pukkelpop_2019_%2848590585552%29.jpg?_=20191027221829' },
    { name: 'Shakira',               alt: ['shakiera','shakera'],
      img: 'https://quadro.burda-forward.de/ctf/a1442004-94cd-42b1-a0e3-37a9f3a1271e.a6c6ac89-420e-4a4e-935e-0d7d2638aa75.jpeg?im=RegionOfInterestCrop%3D%28780%2C439%29%2CregionOfInterest%3D%28500%2C375%29&hash=6142f1093c444421ac853f6d8804a77a2455dd8b0afa28fe423a1f16247c99e3' },
    { name: 'Lady Gaga',             alt: ['gaga','ladygaga'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg/500px-Lady_Gaga_at_Joe_Biden%27s_inauguration_%28cropped_5%29.jpg?_=20250326183710' },
    { name: 'Kim Kardashian',        alt: ['kim','kardashian'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kim_Kardashian_%288002632513%29_%28cropped1%29.jpg/500px-Kim_Kardashian_%288002632513%29_%28cropped1%29.jpg?_=20171016095554' },
    { name: 'Beyonce',               alt: ['beyoncé','beyonc','bey'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Beyonc%C3%A9_at_The_Lion_King_European_Premiere_2019.png' },
    { name: 'Taylor Swift',          alt: ['taylorswift','swift','taylor'],
      img: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/191125_Taylor_Swift_at_the_2019_American_Music_Awards_%28cropped%29.png' },
	  // ═══════════════════════════════════════════════════════════
  // ERWEITERUNG: 60 WEITERE PROMIS & INFLUENCER
  // ═══════════════════════════════════════════════════════════
  { name: 'Brad Pitt', alt: ['pitt', 'brad'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Brad_Pitt_2019_by_Glenn_Francis.jpg/500px-Brad_Pitt_2019_by_Glenn_Francis.jpg' },
	  { name: 'Megan Fox', alt: ['fox', 'megan'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Megan_Fox_%2851914406561%29_%28cropped%29_%28cropped%29.jpg' },
  { name: 'Angelina Jolie', alt: ['jolie', 'angelina'], 
    img: 'https://i0.web.de/image/768/38031768%2cpd=1%2cf=size-l/angelina-jolie.webp' },
  { name: 'Tom Cruise', alt: ['cruise', 'tom'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tom_Cruise_by_Gage_Skidmore_2.jpg/500px-Tom_Cruise_by_Gage_Skidmore_2.jpg' },
  { name: 'Keanu Reeves', alt: ['reeves', 'keanu', 'john wick'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Keanu_Reeves_%28crop_and_levels%29_%28cropped%29.jpg/500px-Keanu_Reeves_%28crop_and_levels%29_%28cropped%29.jpg' },
  { name: 'Scarlett Johansson', alt: ['johansson', 'scarlett'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29.jpg' },
  { name: 'Robert Downey Jr.', alt: ['iron man', 'downey', 'rdj'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg' },
  { name: 'Margot Robbie', alt: ['robbie', 'margot', 'barbie'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Margot_Robbie_at_Somerset_House_in_2013_%28cropped%29.jpg' },
  { name: 'Zendaya', alt: ['zendaya'], 
    img: 'https://i0.web.de/image/106/36567106%2cpd=2%2cf=size-l/zendaya-coleman.webp' },
  { name: 'Ryan Reynolds', alt: ['reynolds', 'ryan', 'deadpool'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg/500px-Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg' },
  { name: 'Emma Watson', alt: ['watson', 'emma', 'hermine'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emma_Watson_2013.jpg/500px-Emma_Watson_2013.jpg' },
  
  // Musik & Entertainment
  { name: 'Drake', alt: ['drake', 'champagnepapi'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Drake_July_2016.jpg/500px-Drake_July_2016.jpg' },
  { name: 'Ed Sheeran', alt: ['sheeran', 'ed'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Ed_Sheeran-6886_%28cropped%29.jpg/500px-Ed_Sheeran-6886_%28cropped%29.jpg' },
  { name: 'Ariana Grande', alt: ['grande', 'ariana', 'ari'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Ariana_Grande_promoting_Wicked_%282024%29.jpg' },
  { name: 'Harry Styles', alt: ['styles', 'harry'], 
    img: 'https://i0.web.de/image/770/41952770%2cpd=3%2cf=responsive169-w1900/harry-styles.webp' },
  { name: 'The Weeknd', alt: ['weeknd', 'abel'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/95/The_Weeknd_Cannes_2023.png' },
  { name: 'Selena Gomez', alt: ['gomez', 'selena'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Selena_Gomez_at_the_2024_Toronto_International_Film_Festival_10_%28cropped%29.jpg/250px-Selena_Gomez_at_the_2024_Toronto_International_Film_Festival_10_%28cropped%29.jpg' },
  { name: 'Dua Lipa', alt: ['lipa', 'dua'], 
    img: 'https://i0.web.de/image/448/38933448%2cpd=2%2cf=size-l/dua-lipa.webp' },
  { name: 'Katy Perry', alt: ['perry', 'katy'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/KatyPerryWestminst111224_%2881_of_95%29_%2854206733094%29_%28cropped_2%29.jpg' },
  { name: 'Post Malone', alt: ['posty', 'malone'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Post_Malone_at_the_2019_American_Music_Awards.png' },

  // Sport
  { name: 'LeBron James', alt: ['james', 'lebron', 'king james'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg' },
  { name: 'Lewis Hamilton', alt: ['hamilton', 'lewis'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg/500px-Lewis_Hamilton_2016_Malaysia_2.jpg' },
  { name: 'Roger Federer', alt: ['federer', 'roger'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Roger_Federer_%2819113580056%29.jpg' },
  { name: 'Serena Williams', alt: ['williams', 'serena'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Serena_Williams_US_Open_2013.jpg' },
  { name: 'Thomas Müller', alt: ['müller', 'muller'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/FIFA_WC-qualification_2014_-_Austria_vs._Germany_2012-09-11_-_Thomas_M%C3%BCller_01.JPG' },
  { name: 'Manuel Neuer', alt: ['neuer', 'manuel'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/20180602_FIFA_Friendly_Match_Austria_vs._Germany_Manuel_Neuer_850_0723.jpg' },
  { name: 'David Beckham', alt: ['beckham', 'david'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/David_Beckham_UNICEF_%28cropped%29.jpg' },
  { name: 'Michael Jordan', alt: ['jordan', 'mj', 'air jordan'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Steve_Lipfosky_--_Michael_Jordan_%281997%29.jpg' },

  // Tech & Business
  { name: 'Mark Zuckerberg', alt: ['zuckerberg', 'mark'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg' },
  { name: 'Bill Gates', alt: ['gates', 'bill'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/500px-Bill_Gates_2017_%28cropped%29.jpg' },
  { name: 'Jeff Bezos', alt: ['bezos', 'jeff', 'amazon'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Jeff_Bezos-171025-F-PP655-236_%2839479699761%29_%28cropped%29.jpg/250px-Jeff_Bezos-171025-F-PP655-236_%2839479699761%29_%28cropped%29.jpg' },

  // Influencer & YouTuber (International)
  { name: 'MrBeast', alt: ['mr beast', 'beast', 'jimmy donaldson'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/48/MrBeast_2022_02_crop_%28cropped%29.jpg' },
  { name: 'PewDiePie', alt: ['pewdiepie', 'pewds', 'felix'], 
    img: 'https://cdn.prod.www.spiegel.de/images/c735e2ac-0001-0004-0000-000001106828_w960_r1.5_fpx56.07_fpy50.webp' },
  { name: 'Khaby Lame', alt: ['khaby', 'lame'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/1/15/KhabyLame.jpg' },
  { name: 'Charli D Amelio', alt: ['charli', 'damelio'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Charli_D%27Amelio_in_Nov_2020_5.jpg' },
  { name: 'Logan Paul', alt: ['paul', 'logan'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Logan_Paul_%2848086619418%29.jpg' },
  { name: 'Emma Chamberlain', alt: ['chamberlain', 'emma'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Emma_Chamberlain_at_%2721_Paris_Fashion_Week_%28cropped%29.jpg' },

  // Twitch Streamer (International)
  { name: 'Ninja', alt: ['ninja', 'tyler blevins'], 
    img: 'https://www.tubefilter.com/wp-content/uploads/2023/06/ninja-stream-kick-1920x1131.jpg' },
  { name: 'Pokimane', alt: ['poki', 'pokimane', 'ane'], 
    img: 'https://www.ingame.de/assets/images/31/136/31136476-twitch-streamerin-pokimane-mit-wuetendem-gesichtsausdruck-2lLCZXNFWB70.jpg' },
  { name: 'xQc', alt: ['xqc', 'felix lengyel'], 
    img: 'https://www.tubefilter.com/wp-content/uploads/2024/07/xqc-money-1920x1131.jpg' },
  { name: 'Kai Cenat', alt: ['kai', 'cenat'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Kai_Cenat_July_2025.jpg' },

  // Deutsche Twitch Streamer & Internet-Promis
  { name: 'MontanaBlack', alt: ['montana black', 'monte', 'marcel eris'], 
    img: 'https://www.hna.de/assets/images/37/551/37551049-streamer-montanablack-2qXkwm5GX573.jpg' },
  { name: 'Knossi', alt: ['knossi', 'jens knossalla'], 
    img: 'https://financefwd.com/wp-content/uploads/2022/08/Design-ohne-Titel-3-580x303.png' },
  { name: 'Trymacs', alt: ['trymacs', 'max', 'Stemmler'], 
    img: 'https://financefwd.com/wp-content/uploads/2022/01/Trymacs-580x355.png' },
  { name: 'EliasN97', alt: ['elias', 'eliasn97', 'nerlich'], 
    img: 'https://images.bild.de/6319b53dbd692720d99d928e/3eb356e7ff83afde2dcc5bc9bcd05c74,a01d1827?w=992' },
  { name: 'Gronkh', alt: ['gronkh', 'erik range'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Gronkh_IMG_7985.jpg' },
  { name: 'Unge', alt: ['unge', 'simon unge', 'ungespielt'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/2/27/Re-publica_2013_%E2%80%93_Simon_%28ungespielt%29%2C_Amy_Herzstark%2C_LeFloid_%288718718936%29_cropped.jpg' },
  { name: 'Rezo', alt: ['rezo'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Rezo_Portrait_2019.jpg' },
  { name: 'Heidi Klum', alt: ['klum', 'heidi'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Heidi_Klum_by_Glenn_Francis.jpg' },
  { name: 'Lena Meyer-Landrut', alt: ['lena', 'meyer-landrut'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Lena_Meyer_Landrut_2010.jpg' },

  // Weitere Weltstars
  { name: 'Jackie Chan', alt: ['chan', 'jackie'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Jackie_Chan_July_2016.jpg/500px-Jackie_Chan_July_2016.jpg' },
  { name: 'Morgan Freeman', alt: ['freeman', 'morgan'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Morgan_Freeman%2C_2006_%28sq-trim%29.jpg' },
  { name: 'Gordon Ramsay', alt: ['ramsay', 'gordon'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Gordon_Ramsay.jpg' },
  { name: 'Benedict Cumberbatch', alt: ['cumberbatch', 'benedict', 'sherlock'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Benedict_Cumberbatch-67295.jpg' },
  { name: 'Chris Hemsworth', alt: ['hemsworth', 'chris', 'thor'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Chris_Hemsworth_by_Gage_Skidmore_3.jpg' },
  { name: 'Daniel Radcliffe', alt: ['radcliffe', 'daniel', 'harry potter'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Daniel_Radcliffe_in_July_2015.jpg' },
  { name: 'Jennifer Aniston', alt: ['aniston', 'jennifer'], 
    img: 'https://assets.vogue.com/photos/695e27745e4eb931a4a383a2/master/w_1920,c_limit/2247007987' },
  { name: 'Kylie Jenner', alt: ['jenner', 'kylie'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/6/6e/Kylie_Jenner1_%28cropped%29.png' },
  { name: 'Miley Cyrus', alt: ['cyrus', 'miley'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Miley_Cyrus_Primavera19_-226_%2848986293772%29_%28cropped%29.jpg' },
  { name: 'Zlatan Ibrahimovic', alt: ['zlatan', 'ibrahimovic', 'ibra'], 
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Zlatan_Ibrahimovi%C4%87_June_2018.jpg' },
	{ name: "Shirin David", alt: ["Shirin", "David", "Babsi"], image: "https://znaki.fm/static/content/thumbs/1034x582/a/be/gsppr5---c1034x582x50px50p--61f95db9ff03d5535e7b4616df6f5bea.webp" },
{ name: "Julien Bam", alt: ["Julien", "Bam", "Ju"], image: "https://upload.wikimedia.org/wikipedia/commons/9/91/1LIVE_Krone_2016_-_2015_-_Show_-_Julien_Bam-6632.jpg" },
{ name: "Pamela Reif", alt: ["Pamela", "Reif", "Pam"], image: "https://www.n-tv.de/img/6508162/1753131194/Img_16_9/1024/458780800.webp" },
{ name: "BibisBeautyPalace", alt: ["Bibi", "Claßen", "Heinicke", "Bianca"], image: "https://upload.wikimedia.org/wikipedia/commons/7/7d/2016-06-28_282_Bianca_%E2%80%9EBibi%E2%80%9C_Heinicke_von_%E2%80%9EBibisBeautyPalace%E2%80%9C.jpg" },
{ name: "Dagi Bee", alt: ["Dagi", "Bee", "Dagmara"], image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/2023_Dagi_Bee_-_by_2eight_-_9SC2817.jpg" },
{ name: "Katja Krasavice", alt: ["Katja", "Krasavice"], image: "https://i0.web.de/image/238/38339238%2cpd=3%2cf=responsive169-w1900/stars-katja-krasavice-queen-of-bitches.webp" },
{ name: "Paluten", alt: ["Paluten", "Palle", "Patrick Mayer"], image: "https://www.comicschau.de/wp-content/uploads/2020/10/Screenshot_2020-10-17-Paluten.png" },
{ name: "Lisa und Lena", alt: ["Lisa", "Lena", "LeLi"], image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Sing_Lisa_%26_Lena.jpg" },
{ name: "Jeremy Fragrance", alt: ["Jeremy", "Fragrance", "Daniel Schütz"], image: "https://ga.de/imgs/93/1/8/7/3/6/4/5/2/9/tok_da590de6c8c03f034312f9597258fcc8/w1100_h737_x1500_y1005_DPA_bfunk_dpa_5FAF1800DDC94326-e2bf1b1b4be79c26.jpg" },
{ name: "Matthias Schweighöfer", alt: ["Matthias", "Schweighöfer"], image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/MJK_33812_Matthias_Schweigh%C3%B6fer_%28Medienboard-Party_2019%29_cropped.jpg" },
{ name: "Elyas M'Barek", alt: ["Elyas", "M'Barek", "Mbarek"], image: "https://upload.wikimedia.org/wikipedia/commons/0/00/Elyas_M%E2%80%99Barek_ROMY_2016_%28cropped%29.jpg" },
{ name: "Karoline Herfurth", alt: ["Karoline", "Herfurth"], image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Karoline_Herfurth-68597.jpg" },
{ name: "Daniel Brühl", alt: ["Daniel", "Brühl"], image: "https://de.web.img3.acsta.net/c_310_420/pictures/15/10/22/10/47/086126.jpg" },
{ name: "Frederick Lau", alt: ["Frederick", "Lau"], image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Grimme-Preis_2011_-_Frederick_Lau_4.JPG" },
{ name: "Tom Schilling", alt: ["Tom", "Schilling"], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/MKr24470_Tom_Schilling_%28NRW-Empfang%2C_Berlinale_2023%29~2.jpg/500px-MKr24470_Tom_Schilling_%28NRW-Empfang%2C_Berlinale_2023%29~2.jpg?_=20240304120629" },
{ name: "Alexandra Maria Lara", alt: ["Alexandra", "Maria", "Lara"], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/MJK_68027_Alexandra_Maria_Lara_%28Berlinale_2020%29.jpg/500px-MJK_68027_Alexandra_Maria_Lara_%28Berlinale_2020%29.jpg?_=20200419171520" },
{ name: "Louis Hofmann", alt: ["Louis", "Hofmann", "Jonas"], image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Louis_Hofmann_Hessischer_Film-_und_Kinopreis_2015.JPG/500px-Louis_Hofmann_Hessischer_Film-_und_Kinopreis_2015.JPG?_=20161110203824" },

  ];

  // ═══════════════════════════════════════════════════════════
  // HILFSFUNKTIONEN
  // ═══════════════════════════════════════════════════════════
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
      o.frequency.value = freq; o.type = type || 'sine';
      g.gain.setValueAtTime(vol || 0.2, ac.currentTime);
      g.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + dur);
      o.start(ac.currentTime); o.stop(ac.currentTime + dur + 0.01);
    } catch(e) {}
  }

  function normalize(s) {
    return s.toLowerCase().replace(/[^a-z0-9äöüßàáâèéêìíîòóôùúû ]/g,'').replace(/\s+/g,' ').trim();
  }

  function levenshtein(a, b) {
    var m = a.length, n = b.length, dp = [], i, j;
    for (i = 0; i <= m; i++) {
      dp[i] = [i];
      for (j = 1; j <= n; j++) {
        dp[i][j] = i === 0 ? j : Math.min(dp[i-1][j]+1, dp[i][j-1]+1, dp[i-1][j-1]+(a[i-1]===b[j-1]?0:1));
      }
    }
    return dp[m][n];
  }

  function isCorrectAnswer(input, celeb) {
    var inp = normalize(input);
    if (!inp) return false;
    var candidates = [normalize(celeb.name)].concat((celeb.alt||[]).map(normalize));
    for (var i = 0; i < candidates.length; i++) {
      var ref = candidates[i];
      if (inp === ref) return true;
      var maxDist = Math.max(1, Math.floor(ref.length / 5));
      if (levenshtein(inp, ref) <= maxDist) return true;
      var parts = ref.split(' ');
      if (parts.length > 1) {
        var last = parts[parts.length-1];
        var ok = inp.split(' ').some(function(p) {
          return levenshtein(p, last) <= Math.max(1, Math.floor(last.length/5));
        });
        if (ok && inp.split(' ').length === 1) return true;
      }
    }
    return false;
  }

  // ═══════════════════════════════════════════════════════════
  // HAUPTKLASSE
  // ═══════════════════════════════════════════════════════════
  function PromiRateInstance(container, ctx, onEnd) {
    this.container       = container;
    this.ctx             = ctx;
    this.onEnd           = onEnd;
    this.dead            = false;
    this.mini            = 1;
    this.p1Wins          = 0;
    this.p2Wins          = 0;
    this.timers          = [];
    this.phase           = 'idle';   // idle | countdown | buzzing | answering | result
    this.currentCeleb    = null;
    this.usedIdx         = [];
    this.buzzer          = null;     // 'p1' | 'p2' | null
    this._buzzTimer      = null;
    this._buzzInterval   = null;
    this._buzzLeft       = 20;
    this._answerTimer    = null;
    this._answerInterval = null;
    this._answerLeft     = 15;

    this._buildUI();
    this._setupNet();
    this._startMini();
  }

  PromiRateInstance.prototype = {

    // ════════════════════════════════════════════════════════
    // UI
    // ════════════════════════════════════════════════════════
    _buildUI: function() {
      var self = this;
      this.container.innerHTML = '';
      var root = document.createElement('div');
      root.id = 'pr-root';
      root.style.cssText =
        'width:100%;height:100%;' +
        'background:radial-gradient(ellipse 130% 90% at 50% -10%,#0e0e28,#060610);' +
        'display:flex;flex-direction:column;align-items:center;justify-content:center;' +
        'position:relative;overflow:hidden;padding:16px;box-sizing:border-box;' +
        'font-family:"Bebas Neue",sans-serif;';

      root.innerHTML = [
        // Hintergrunddeko
        '<div style="position:absolute;pointer-events:none;width:600px;height:600px;border-radius:50%;',
        'top:50%;left:50%;transform:translate(-50%,-50%);',
        'border:1px solid rgba(240,192,48,.04);"></div>',

        // Keyframes für Buzzer-Glow-Puls
        '<style>',
        '@keyframes pr-glow{0%,100%{box-shadow:0 0 18px 4px rgba(255,60,60,.55),0 0 40px 8px rgba(255,0,0,.25);}',
        '50%{box-shadow:0 0 32px 10px rgba(255,80,80,.8),0 0 70px 20px rgba(255,0,0,.4);}}',
        '@keyframes pr-ring{0%{transform:scale(1);opacity:.7}80%{transform:scale(1.9);opacity:0}100%{opacity:0}}',
        '.pr-ring{position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(255,80,80,.6);',
        'animation:pr-ring 2s ease-out infinite;pointer-events:none;}',
        '.pr-ring:nth-child(2){animation-delay:.75s;}',
        '.pr-ring:nth-child(3){animation-delay:1.5s;}',
        '</style>',

        // Punkte-Dots
        '<div id="pr-dots" style="display:flex;align-items:center;gap:20px;margin-bottom:12px;min-height:30px;"></div>',

        // Subtitle
        '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:11px;letter-spacing:.4em;',
        'color:#c0c0d8;text-transform:uppercase;margin-bottom:10px;">Wer ist das?</div>',

        // ── Foto (234 px) ──
        '<div id="pr-img-wrap" style="width:234px;height:234px;border-radius:50%;overflow:hidden;',
        'border:3px solid rgba(240,192,48,.30);margin-bottom:12px;flex-shrink:0;',
        'box-shadow:0 0 60px rgba(240,192,48,.12),0 0 0 6px rgba(240,192,48,.05);',
        'background:#111128;display:flex;align-items:center;justify-content:center;">',
          '<img id="pr-img" src="" alt="" style="width:100%;height:100%;object-fit:cover;display:none;"/>',
          '<div id="pr-img-ph" style="font-size:72px;opacity:.18;">👤</div>',
        '</div>',

        // Timer-Ring
        '<div id="pr-timer-wrap" style="position:relative;width:72px;height:72px;margin-bottom:10px;display:none;">',
          '<svg viewBox="0 0 72 72" style="position:absolute;inset:0;transform:rotate(-90deg);">',
            '<circle cx="36" cy="36" r="30" fill="none" stroke="rgba(255,255,255,.06)" stroke-width="5"/>',
            '<circle id="pr-timer-ring" cx="36" cy="36" r="30" fill="none" stroke="#f0c030" stroke-width="5"',
            ' stroke-dasharray="188.5" stroke-dashoffset="0" stroke-linecap="round"',
            ' style="transition:stroke-dashoffset 1s linear,stroke .3s;"/>',
          '</svg>',
          '<div id="pr-timer-num" style="position:absolute;inset:0;display:flex;align-items:center;',
          'justify-content:center;font-size:26px;color:#f0c030;">20</div>',
        '</div>',

        // Status
        '<div id="pr-status" style="font-family:\'Barlow Condensed\',sans-serif;font-size:22px;',
        'letter-spacing:.25em;color:#c0c0d8;text-transform:uppercase;min-height:32px;',
        'margin-bottom:12px;text-align:center;transition:color .2s;"></div>',

        // Start-Button
        '<button id="pr-start-btn" style="display:' + (this.ctx.isHost ? 'block' : 'none') + ';',
        'margin-bottom:14px;background:#f0c030;border:none;color:#000;',
        'font-family:\'Bebas Neue\',sans-serif;font-size:18px;letter-spacing:.15em;',
        'padding:12px 40px;cursor:pointer;',
        'clip-path:polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px));',
        '">RUNDE STARTEN</button>',

        // ── BUZZER ─────────────────────────────────────────
        '<div id="pr-buzz-area" style="display:none;flex-direction:column;align-items:center;gap:10px;margin-bottom:14px;">',
          // Äußerer Glow-Container
          '<div style="position:relative;width:84px;height:84px;display:flex;align-items:center;justify-content:center;">',
            '<div class="pr-ring"></div>',
            '<div class="pr-ring"></div>',
            '<div class="pr-ring"></div>',
            // Buzzer
            '<button id="pr-buzz-btn" style="',
            'position:relative;z-index:2;',
            'width:77px;height:77px;border-radius:50%;',
            'border:none;cursor:pointer;',
            // Tiefenwirkung: dunkler Außenring + heller Innenkreis
            'background:',
            '  radial-gradient(circle at 40% 32%, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 55%),',
            '  radial-gradient(circle at 50% 50%, #d40000 0%, #7a0000 65%, #3d0000 100%);',
            'box-shadow:',
            '  inset 0 -5px 12px rgba(0,0,0,.6),',   // Innenschatten unten → Tiefe
            '  inset 0 4px 8px rgba(255,180,180,.22),', // Innenglanz oben
            '  0 6px 0 #3d0000,',                       // harter Bodenschatten → 3D
            '  0 0 18px 4px rgba(255,60,60,.55),',      // roter Glow
            '  0 0 40px 8px rgba(255,0,0,.25);',        // weiter Glow
            'animation:pr-glow 2.2s ease-in-out infinite;',
            'transition:transform .07s ease,box-shadow .07s ease;',
            '">',
            '</button>',
          '</div>',
          '<div style="font-family:\'Barlow Condensed\',sans-serif;font-size:12px;',
          'letter-spacing:.2em;color:#555;text-transform:uppercase;">Wer zuerst drückt, darf antworten!</div>',
        '</div>',

        // ── Antwort-Eingabe ─────────────────────────────────
        '<div id="pr-answer-area" style="display:none;flex-direction:column;align-items:center;gap:10px;margin-bottom:14px;">',
          '<div id="pr-answerer-label" style="font-family:\'Barlow Condensed\',sans-serif;font-size:14px;',
          'letter-spacing:.25em;color:#f0c030;text-transform:uppercase;"></div>',
          '<div style="display:flex;gap:8px;align-items:center;">',
            '<input id="pr-name-input" type="text" placeholder="Name eingeben…" maxlength="60"',
            ' style="background:#0d0d24;border:2px solid rgba(240,192,48,.4);color:#e8e4f0;',
            'font-family:\'Barlow Condensed\',sans-serif;font-size:18px;letter-spacing:.05em;',
            'padding:10px 16px;outline:none;width:220px;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));"/>',
            '<button id="pr-submit-btn" style="background:#f0c030;border:none;color:#000;',
            'font-family:\'Bebas Neue\',sans-serif;font-size:20px;letter-spacing:.1em;',
            'padding:10px 22px;cursor:pointer;',
            'clip-path:polygon(0 0,calc(100% - 6px) 0,100% 6px,100% 100%,6px 100%,0 calc(100% - 6px));',
            '">OK</button>',
          '</div>',
        '</div>',

        // ── Ergebnis-Overlay ────────────────────────────────
        '<div id="pr-ov" style="position:absolute;inset:0;z-index:30;background:rgba(6,6,16,.94);',
        'display:none;flex-direction:column;align-items:center;justify-content:center;',
        'gap:12px;text-align:center;padding:28px;">',
          '<div id="pr-ov-ico" style="font-size:54px;"></div>',
          '<div id="pr-ov-ttl" style="font-size:clamp(26px,7vw,48px);',
          'font-family:\'Bebas Neue\',sans-serif;letter-spacing:.05em;"></div>',
          '<div id="pr-ov-answer" style="font-family:\'Barlow Condensed\',sans-serif;',
          'font-size:20px;color:#e8e4f0;letter-spacing:.1em;"></div>',
          '<div id="pr-ov-given" style="font-family:\'Barlow Condensed\',sans-serif;',
          'font-size:14px;color:#888;max-width:380px;"></div>',
          '<div id="pr-ov-sc" style="font-family:\'Barlow Condensed\',sans-serif;',
          'font-size:13px;color:#c0c0d8;text-transform:uppercase;letter-spacing:.2em;"></div>',
          '<button id="pr-ov-btn" style="margin-top:10px;background:#f0c030;border:none;color:#000;',
          'font-family:\'Bebas Neue\',sans-serif;font-size:21px;padding:13px 42px;cursor:pointer;',
          'clip-path:polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px));',
          '">WEITER →</button>',
        '</div>',
      ].join('');

      this.container.appendChild(root);
      this._drawDots();

      // Start-Button
      document.getElementById('pr-start-btn').addEventListener('click', function() {
        document.getElementById('pr-start-btn').style.display = 'none';
        self.ctx.network.send('pr_start_countdown', {});
        self._countdown();
      });

      // Buzzer – Klick + Press-Effekt
      var buzzBtn = document.getElementById('pr-buzz-btn');
      buzzBtn.addEventListener('mousedown', function() {
        buzzBtn.style.transform  = 'translateY(5px) scale(0.95)';
        buzzBtn.style.boxShadow  =
          'inset 0 -2px 6px rgba(0,0,0,.7),' +
          'inset 0 2px 4px rgba(255,120,120,.15),' +
          '0 1px 0 #3d0000,' +
          '0 0 12px 3px rgba(255,60,60,.4)';
        buzzBtn.style.animation  = 'none';
      });
      ['mouseup','mouseleave'].forEach(function(ev) {
        buzzBtn.addEventListener(ev, function() {
          buzzBtn.style.transform = '';
          buzzBtn.style.boxShadow = '';
          buzzBtn.style.animation = '';
        });
      });
      buzzBtn.addEventListener('click', function() { self._onBuzz(); });

      document.getElementById('pr-submit-btn').addEventListener('click', function() { self._submitAnswer(); });
      document.getElementById('pr-name-input').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') self._submitAnswer();
      });
    },

    // ════════════════════════════════════════════════════════
    // NETZWERK
    // ════════════════════════════════════════════════════════
    _setupNet: function() {
      var self = this;

      this.ctx.network.on('pr_start_countdown', function() {
        if (!self.ctx.isHost) self._countdown();
      });

      this.ctx.network.on('pr_sync_celeb', function(msg) {
        if (self.ctx.isHost) return;
        self.currentCeleb = { name: msg.name, alt: msg.alt, img: msg.img };
        self._showCeleb();
        self._startBuzzing();
      });

      // Gast hat gebuzzert → Host verarbeitet
      this.ctx.network.on('pr_buzz', function() {
        if (!self.ctx.isHost) return;
        if (self.phase !== 'buzzing') return;
        self._processBuzz('p2');
      });

      // Nur der Gast empfängt dies – zeigt Eingabefeld oder Wartemeldung
      this.ctx.network.on('pr_show_answer_input', function(msg) {
        if (self.ctx.isHost) return;
        self._clearBuzzTimer();
        self.phase  = 'answering';
        self.buzzer = msg.buzzer;
        self._hideActionAreas();

        if (msg.buzzer === 'p2') {
          // Gast ist der Buzzer → Eingabefeld zeigen
          self._openAnswerField();
        } else {
          // Host hat gebuzzert → Gast wartet nur
          self._startGuestWaitTimer(15);
        }
      });

      this.ctx.network.on('pr_answer', function(msg) {
        if (!self.ctx.isHost) return;
        if (self.phase !== 'answering') return;
        self._clearAnswerTimer();
        self._evaluateAnswer(msg.player, msg.answer);
      });

      this.ctx.network.on('pr_result', function(msg) {
        if (self.ctx.isHost) return;
        self._clearAnswerTimer();
        self.p1Wins = msg.p1Wins;
        self.p2Wins = msg.p2Wins;
        self._showResult(msg.buzzer, msg.input, msg.correct, msg.correctName, msg.scoreDelta, msg.reason);
      });

      this.ctx.network.on('pr_next', function(msg) {
        if (self.ctx.isHost) return;
        if (msg.gameOver) self._finish();
        else {
          self.mini++;
          self._startMini();
          document.getElementById('pr-ov').style.display = 'none';
        }
      });

      this.ctx.network.on('pr_timeout_buzz', function() {
        if (self.ctx.isHost) return;
        self._clearBuzzTimer();
        self.phase = 'result';
        self._hideActionAreas();
        document.getElementById('pr-timer-wrap').style.display = 'none';
      });

      this.ctx.network.on('pr_timeout_answer', function() {
        if (self.ctx.isHost) return;
        self._clearAnswerTimer();
        self.phase = 'result';
        self._hideActionAreas();
        document.getElementById('pr-timer-wrap').style.display = 'none';
      });
    },

    // ════════════════════════════════════════════════════════
    // SPIELPHASEN
    // ════════════════════════════════════════════════════════
    _startMini: function() {
      if (this.dead) return;
      this.phase  = 'idle';
      this.buzzer = null;
      this._clearBuzzTimer();
      this._clearAnswerTimer();
      this._hideActionAreas();
      document.getElementById('pr-timer-wrap').style.display = 'none';

      var img = document.getElementById('pr-img');
      img.style.display = 'none'; img.src = '';
      document.getElementById('pr-img-ph').style.display = 'block';
      document.getElementById('pr-img-ph').textContent   = '👤';
      this._setStatus('Bereit?', '#c0c0d8', '18px');

      if (this.ctx.isHost) {
        document.getElementById('pr-start-btn').style.display = 'block';
        if (this.usedIdx.length >= CELEBS.length) this.usedIdx = [];
        var idx;
        do { idx = Math.floor(Math.random() * CELEBS.length); }
        while (this.usedIdx.indexOf(idx) !== -1);
        this.usedIdx.push(idx);
        this.currentCeleb = CELEBS[idx];
      }
      this._drawDots();
    },

    _countdown: function() {
      if (this.dead) return;
      var self = this;
      this.phase = 'countdown';
      document.getElementById('pr-start-btn').style.display = 'none';
      document.getElementById('pr-timer-wrap').style.display = 'none';
      this._hideActionAreas();

      var n = 3;
      (function tick() {
        if (self.dead) return;
        if (n > 0) {
          self._setStatus(String(n), '#aaaacc', '48px');
          beep(440, 0.07, 'sine', 0.18);
          n--;
          self.timers.push(setTimeout(tick, 900));
        } else {
          self._setStatus('', '#c0c0d8', '18px');
          if (self.ctx.isHost) self._sendCeleb();
        }
      })();
    },

    _sendCeleb: function() {
      if (!this.ctx.isHost || !this.currentCeleb) return;
      this.ctx.network.send('pr_sync_celeb', {
        name: this.currentCeleb.name, alt: this.currentCeleb.alt || [], img: this.currentCeleb.img
      });
      this._showCeleb();
      this._startBuzzing();
    },

    _showCeleb: function() {
      var img = document.getElementById('pr-img');
      var ph  = document.getElementById('pr-img-ph');
      img.onload  = function() { img.style.display = 'block'; ph.style.display = 'none'; };
      img.onerror = function() { ph.textContent = '🤔'; };
      img.src = this.currentCeleb.img;
      beep(550, 0.1, 'sine', 0.12);
    },

    _startBuzzing: function() {
      var self = this;
      this.phase  = 'buzzing';
      this.buzzer = null;

      document.getElementById('pr-buzz-area').style.display = 'flex';
      document.getElementById('pr-buzz-btn').disabled = false;
      this._setStatus('BUZZERN!', '#2af0a0', '22px');

      // Timer
      this._buzzLeft = 20;
      this._showTimer(20, 20);

      this._buzzInterval = setInterval(function() {
        if (self.dead || self.phase !== 'buzzing') { clearInterval(self._buzzInterval); return; }
        self._buzzLeft--;
        if (self._buzzLeft < 0) self._buzzLeft = 0;
        self._updateTimer(self._buzzLeft, 20);
        beep(280 + self._buzzLeft * 18, 0.03, 'sine', 0.06);
      }, 1000);

      if (this.ctx.isHost) {
        this._buzzTimer = setTimeout(function() {
          self._clearBuzzTimer();
          self.ctx.network.send('pr_timeout_buzz', {});
          self._showResult(null, null, null, self.currentCeleb.name, null, 'Niemand hat gebuzzert!');
        }, 20500);
      }
    },

    // ─ Lokaler Buzzer-Klick ──────────────────────────────────
    _onBuzz: function() {
      if (this.phase !== 'buzzing' || this.dead) return;
      beep(880, 0.05, 'square', 0.2);
      document.getElementById('pr-buzz-btn').disabled = true;

      if (this.ctx.isHost) {
        // HOST buzzert: direkt verarbeiten, Gast informieren
        this._processBuzz('p1');


      } else {
        // GAST buzzert: dem Host melden, warten
        this.ctx.network.send('pr_buzz', {});
        this._hideActionAreas();
        this._setStatus('Gebuzzert! Warte…', '#f0c030', '18px');
      }
    },

    // ─ Buzz verarbeiten (immer nur beim Host) ────────────────
    _processBuzz: function(player) {
      this._clearBuzzTimer();
      this.phase  = 'answering';
      this.buzzer = player;
      this._hideActionAreas();

      var buzzerName = player === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
      this._setStatus(buzzerName + ' antwortet!', '#f0c030', '18px');

      if (player === 'p1') {
        // HOST ist der Buzzer
        this.ctx.network.send('pr_show_answer_input', { buzzer: 'p1' });
        this._openAnswerField();
      } else {
        // GAST ist der Buzzer: Signal senden, Host-Watchdog starten
        this.ctx.network.send('pr_show_answer_input', { buzzer: 'p2' });
        this._startAnswerCountdown(15, true);
      }
    },

    // ─ Eingabefeld öffnen + Countdown starten ────────────────
    // Wird vom Buzzer aufgerufen (Host wenn p1, Gast wenn p2)
    _openAnswerField: function() {
      var self = this;
      // Status-Anzeige: wer antwortet
      var buzzerName = this.buzzer === 'p1' ? this.ctx.p1Name : this.ctx.p2Name;
      this._setStatus(buzzerName + ' antwortet!', '#f0c030', '18px');
      document.getElementById('pr-answerer-label').textContent = 'Du hast 15 Sekunden!';
      document.getElementById('pr-answer-area').style.display = 'flex';
      document.getElementById('pr-name-input').value = '';
      setTimeout(function() {
        var inp = document.getElementById('pr-name-input');
        if (inp) inp.focus();
      }, 60);
      this._startAnswerCountdown(15, false);
    },

    // ─ Gast-Wartetimer (sieht nur laufende Zeit) ─────────────
    _startGuestWaitTimer: function(secs) {
      var self = this;
      this._setStatus(
        (this.buzzer === 'p1' ? this.ctx.p1Name : this.ctx.p2Name) + ' antwortet!',
        '#f0c030', '18px'
      );
      this._answerLeft = secs;
      this._showTimer(secs, secs);
      this._answerInterval = setInterval(function() {
        if (self.dead || self.phase !== 'answering') { clearInterval(self._answerInterval); return; }
        self._answerLeft--;
        if (self._answerLeft < 0) self._answerLeft = 0;
        self._updateTimer(self._answerLeft, secs);
      }, 1000);
    },

    // ─ Countdown mit optionalem Watchdog ─────────────────────
    _startAnswerCountdown: function(secs, watchdogOnly) {
      var self = this;
      this._answerLeft = secs;
      this._showTimer(secs, secs);

      this._answerInterval = setInterval(function() {
        if (self.dead || self.phase !== 'answering') { clearInterval(self._answerInterval); return; }
        self._answerLeft--;
        if (self._answerLeft < 0) self._answerLeft = 0;
        self._updateTimer(self._answerLeft, secs);
        if (!watchdogOnly) beep(280 + self._answerLeft * 28, 0.04, 'sine', 0.08);
        if (self._answerLeft <= 0 && !watchdogOnly) {
          clearInterval(self._answerInterval);
          self._submitAnswerWithText('');
        }
      }, 1000);

      // Sicherheits-Timeout
      this._answerTimer = setTimeout(function() {
        self._clearAnswerTimer();
        if (self.phase !== 'answering') return;
        if (watchdogOnly) {
          // Host-Watchdog: Gast hat nicht geantwortet
          self.ctx.network.send('pr_timeout_answer', {});
          self._evaluateAnswer('p2', '');
        } else {
          // Buzzer selbst hat Zeit überschritten
          self._submitAnswerWithText('');
        }
      }, (secs + 0.5) * 1000);
    },

    // ─ Antwort abschicken ────────────────────────────────────
    _submitAnswer: function() {
      var inp = document.getElementById('pr-name-input');
      this._submitAnswerWithText(inp ? inp.value : '');
    },

    _submitAnswerWithText: function(text) {
      if (this.phase !== 'answering' || this.dead) return;

      this._clearAnswerTimer();
      this._hideActionAreas();
      this.phase = 'result';

      if (this.ctx.isHost) {
        // HOST bewertet direkt
        this._evaluateAnswer('p1', text);
      } else {
        // GAST schickt ans Host
        this.ctx.network.send('pr_answer', { player: 'p2', answer: text });
        this._setStatus('Antwort eingereicht…', '#c0c0d8', '16px');
      }
    },

    // ─ Bewertung (nur Host) ───────────────────────────────────
    _evaluateAnswer: function(player, answer) {
      if (this.dead) return;
      this.phase = 'result';
      this._clearAnswerTimer();

      var noAnswer = !answer || !answer.trim();
      var correct  = noAnswer ? false : isCorrectAnswer(answer, this.currentCeleb);
      var reason   = correct ? 'Richtig!' : (noAnswer ? 'Zeit abgelaufen!' : 'Falsch!');
      var winner, loser;

      if (correct) { winner = player; }
      else         { winner = player === 'p1' ? 'p2' : 'p1'; }

      if (winner === 'p1') this.p1Wins++; else this.p2Wins++;

      var payload = {
        buzzer:      player,
        input:       answer || '',
        correct:     correct,
        correctName: this.currentCeleb.name,
        scoreDelta:  winner,
        reason:      reason,
        p1Wins:      this.p1Wins,
        p2Wins:      this.p2Wins
      };

      this.ctx.network.send('pr_result', payload);
      this._showResult(payload.buzzer, payload.input, payload.correct, payload.correctName, payload.scoreDelta, payload.reason);
    },

    // ════════════════════════════════════════════════════════
    // ERGEBNIS ANZEIGEN
    // ════════════════════════════════════════════════════════
    _showResult: function(buzzer, input, correct, correctName, scoreDelta, reason) {
      var self = this;
      this._hideActionAreas();
      document.getElementById('pr-timer-wrap').style.display = 'none';

      var ttlEl = document.getElementById('pr-ov-ttl');
      document.getElementById('pr-ov-ico').textContent = correct ? '🎉' : (correct === null ? '⏰' : '❌');
      ttlEl.textContent = reason || '';
      ttlEl.style.color = correct ? '#2af0a0' : '#f55a3a';

      document.getElementById('pr-ov-answer').innerHTML =
        '<span style="color:#888;font-size:14px;letter-spacing:.3em;">GESUCHT: </span>' +
        '<span style="color:#f0c030;">' + esc(correctName) + '</span>';

      var givenEl = document.getElementById('pr-ov-given');
      if (input && input.trim()) {
        givenEl.textContent = esc(buzzer === 'p1' ? this.ctx.p1Name : this.ctx.p2Name) + ' tippte: „' + esc(input) + '"';
      } else if (buzzer) {
        givenEl.textContent = esc(buzzer === 'p1' ? this.ctx.p1Name : this.ctx.p2Name) + ' hat die Zeit überschritten.';
      } else {
        givenEl.textContent = 'Niemand hat gebuzzert.';
      }

      var dHtml = scoreDelta === 'p1'
        ? '<span style="color:#3ab4f5;">+1 für ' + esc(this.ctx.p1Name) + '</span>'
        : (scoreDelta === 'p2' ? '<span style="color:#f55a3a;">+1 für ' + esc(this.ctx.p2Name) + '</span>' : '');
      document.getElementById('pr-ov-sc').innerHTML =
        dHtml + '<br><span style="font-size:18px;">' + this.p1Wins + ' : ' + this.p2Wins + '</span>';

      document.getElementById('pr-ov').style.display = 'flex';
      this._drawDots();
      beep(correct ? 880 : 200, 0.2, correct ? 'sine' : 'sawtooth', 0.15);

      var gameOver = this.p1Wins >= 7 || this.p2Wins >= 7;
      var btn = document.getElementById('pr-ov-btn');
      btn.textContent = gameOver ? 'ZUM HAUPTMENÜ' : 'NÄCHSTE RUNDE';

      if (this.ctx.isHost) {
        btn.style.display = 'block';
        btn.onclick = function() {
          self.ctx.network.send('pr_next', { gameOver: gameOver });
          if (gameOver) { self._finish(); }
          else { self.mini++; self._startMini(); document.getElementById('pr-ov').style.display = 'none'; }
        };
      } else {
        btn.style.display = 'none';
      }
    },

    // ════════════════════════════════════════════════════════
    // TIMER-HELFER
    // ════════════════════════════════════════════════════════
    _showTimer: function(val, max) {
      var wrap = document.getElementById('pr-timer-wrap');
      wrap.style.display = 'block';
      document.getElementById('pr-timer-num').textContent = String(val);
      document.getElementById('pr-timer-num').style.color = '#f0c030';
      this._setTimerRing(val / max);
    },

    _updateTimer: function(val, max) {
      var numEl = document.getElementById('pr-timer-num');
      if (numEl) {
        numEl.textContent = String(val);
        if (val <= 5) numEl.style.color = '#f55a3a';
      }
      this._setTimerRing(val / max);
    },

    _setTimerRing: function(frac) {
      var ring = document.getElementById('pr-timer-ring');
      if (!ring) return;
      ring.style.strokeDashoffset = String(188.5 * (1 - frac));
      ring.style.stroke = frac > 0.4 ? '#f0c030' : '#f55a3a';
    },

    _drawDots: function() {
      var el = document.getElementById('pr-dots');
      if (!el) return;
      var bs = 'display:inline-block;width:10px;height:10px;border-radius:50%;margin:0 2px;border:2px solid ';
      var d1 = '', d2 = '';
      for (var i = 0; i < 7; i++) {
        d1 += '<span style="' + bs + (i < this.p1Wins ? '#3ab4f5;background:#3ab4f5' : 'rgba(58,180,245,.2)') + '"></span>';
        d2 += '<span style="' + bs + (i < this.p2Wins ? '#f55a3a;background:#f55a3a' : 'rgba(245,90,58,.2)') + '"></span>';
      }
      el.innerHTML = d1 +
        '<span style="color:#2a2a40;margin:0 10px;font-family:\'Barlow Condensed\',sans-serif;font-size:12px;letter-spacing:.2em;">RUNDE ' + this.mini + '</span>' +
        d2;
    },

    _setStatus: function(t, c, s) {
      var el = document.getElementById('pr-status');
      if (el) { el.textContent = t; el.style.color = c; el.style.fontSize = s; }
    },

    _hideActionAreas: function() {
      ['pr-buzz-area','pr-answer-area'].forEach(function(id) {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
      });
    },

    _clearBuzzTimer: function() {
      clearTimeout(this._buzzTimer);   this._buzzTimer   = null;
      clearInterval(this._buzzInterval); this._buzzInterval = null;
    },

    _clearAnswerTimer: function() {
      clearTimeout(this._answerTimer);   this._answerTimer   = null;
      clearInterval(this._answerInterval); this._answerInterval = null;
    },

    _finish: function() {
      this.dead = true;
      this.onEnd({ winner: this.p1Wins >= 7 ? 'p1' : 'p2', details: this.p1Wins + ' : ' + this.p2Wins });
    },

    destroy: function() {
      this.dead = true;
      this.timers.forEach(clearTimeout);
      this._clearBuzzTimer();
      this._clearAnswerTimer();
      var self = this;
      ['pr_start_countdown','pr_sync_celeb','pr_buzz','pr_show_answer_input',
       'pr_answer','pr_result','pr_next','pr_timeout_buzz','pr_timeout_answer'
      ].forEach(function(ev) { self.ctx.network.off(ev); });
    }
  };

  // ═══════════════════════════════════════════════════════════
  // REGISTRIERUNG
  // ═══════════════════════════════════════════════════════════
  GamePool.register({
    id:          'wer-ist-es',
    name:        'Wer ist es?',
    description: 'Ein Promi-Foto wird eingeblendet — wer zuerst drückt, darf den Namen eingeben! Tippfehler werden verziehen. Falsche oder keine Antwort? Der Gegner kassiert den Punkt. Wer zuerst 7 Punkte hat, gewinnt!',
    init:    function(container, ctx, onEnd) { this._instance = new PromiRateInstance(container, ctx, onEnd); },
    destroy: function() { if (this._instance) this._instance.destroy(); }
  });

})();
