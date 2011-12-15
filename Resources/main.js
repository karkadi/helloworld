var win = Titanium.UI.currentWindow;
win.backgroundImage = '/bg.png';



win.name = "window";

var screenWidth = Titanium.Platform.displayCaps.platformWidth;
var screenHeight = Titanium.Platform.displayCaps.platformHeight;
var posHeader = (screenWidth - 450)/2;

var ivHeader = Titanium.UI.createImageView({
	backgroundImage : './header.png',
	height : '112',
	width : '450',
	top : 5,
	left : posHeader
});


var ivResult = Titanium.UI.createImageView({
	backgroundColor : '#fbc543',
	height : 300,
	width : 450,
	top : 122,
	left : posHeader
});

var lbDate = Titanium.UI.createLabel({
	height : 30,
	width : 450,
	top : 132,
	left : posHeader,
	text : "Lundi 25 Novembre",
	textAlign : 'center',
	color : '#0041BC',
	font : {fontSize:24,fontWeight:'bold'}
});

var ivRes1 = Titanium.UI.createImageView({
	backgroundImage :'boule_orange_big.png',
	height : 57,
	width : 54,
	top : 170,
	left : posHeader + 5
});
var lbRes1 = Titanium.UI.createLabel({
	height : 57,
	width : 54,
	top : 168,
	left : posHeader + 5,
	text : "1",
	textAlign : 'center',
	color : '#0041BC',
	font : {fontSize:24, fontWeight:'bold'}
});

var ivRes2 = Titanium.UI.createImageView({
	backgroundImage :'boule_orange_big.png',
	height : 57,
	width : 54,
	top : 170,
	left : posHeader + 5 + 60
});
var lbRes2 = Titanium.UI.createLabel({
	height : 57,
	width : 54,
	top : 168,
	left : posHeader + 5 + 60,
	text : "16",
	textAlign : 'center',
	color : '#0041BC',
	font : {fontSize:24,fontWeight:'bold'}
});

var ivRes3 = Titanium.UI.createImageView({
	backgroundImage :'boule_orange_big.png',
	height : 57,
	width : 54,
	top : 170,
	left : posHeader + 5 + 60*2
});
var lbRes3 = Titanium.UI.createLabel({
	height : 57,
	width : 54,
	top : 168,
	left : posHeader + 5 + 60*2,
	text : "25",
	textAlign : 'center',
	color : '#0041BC',
	font : {fontSize:24,fontWeight:'bold'}
});
var ivRes4 = Titanium.UI.createImageView({
	backgroundImage :'boule_orange_big.png',
	height : 57,
	width : 54,
	top : 170,
	left : posHeader + 5 + 60*3
});
var lbRes4 = Titanium.UI.createLabel({
	height : 57,
	width : 54,
	top : 168,
	left : posHeader + 5 + 60*3,
	text : "29",
	textAlign : 'center',
	color : '#0041BC',
	font : {fontSize:24,fontWeight:'bold'}
});
var ivRes5 = Titanium.UI.createImageView({
	backgroundImage :'boule_orange_big.png',
	height : 57,
	width : 54,
	top : 170,
	left : posHeader + 5 + 60*4
});
var lbRes5= Titanium.UI.createLabel({
	height : 57,
	width : 54,
	top : 168,
	left : posHeader + 5 + 60*4,
	text : "48",
	textAlign : 'center',
	color : '#0041BC',
	font : {fontSize:24,fontWeight:'bold'}
});
var ivSymbNumChance = Titanium.UI.createImageView({
	backgroundImage :'numero_chance_tirage.png',
	height : 36,
	width : 42,
	top : 172,
	left : posHeader + 5 + 60*5
});
var ivChance = Titanium.UI.createImageView({
	backgroundImage :'boule_rouge_big.png',
	height : 57,
	width : 54,
	top : 170,
	left : posHeader + 5 + 60*6
});
var lbChance = Titanium.UI.createLabel({
	height : 57,
	width : 54,
	top : 168,
	left : posHeader + 5 + 60*6,
	text : "1",
	textAlign : 'center',
	color : '#FF0000',
	font : {fontSize:24,fontWeight:'bold'}
});


var ivJoker = Titanium.UI.createImageView({
	backgroundImage :'img_jokerplus.png',
	height : 65,
	width : 318,
	top : 240,
	left : posHeader + 5 + 60
});

var lbJoker = Titanium.UI.createLabel({
	height : 57,
	width : 150,
	top : 250,
	left : posHeader + 5 + 230,
	text : "6 347 526",
	textAlign : 'center',
	color : '#FF0000',
	font : {fontSize:24, fontWeight:'bold'}
});

var ivHisto = Titanium.UI.createImageView({
	backgroundImage :'btn_rapports.png',
	height : 48,
	width : 191,
	top : 335,
	left : posHeader + 5
});

var ivSimul = Titanium.UI.createImageView({
	backgroundImage :'btn_simu_grille.png',
	height : 49,
	width : 230,
	top : 335,
	left : posHeader + 5 + 200
});

ivHisto.addEventListener('click', function(e) {
	Ti.UI.createNotification({
		message : 'Simul selected'
	}).show();
});

ivSimul.addEventListener('click', function(e) {
	Ti.UI.createNotification({
		message : 'Histo selected'
	}).show();
});

var ivNext = Titanium.UI.createImageView({
	backgroundImage :'bg_prochain_tirage.png',
	height : 129,
	width : 452,
	top : 450,
	left : posHeader + 5
});

var lbNext = Titanium.UI.createLabel({
	height : 57,
	width : 250,
	top : 440,
	left : posHeader + 5 + 190,
	text : "mercredi 14 décembre",
	textAlign : 'center',
	color : '#FFFFFF',
	font : {fontSize:18, fontWeight:'bold'}
});

var lbNextMont = Titanium.UI.createLabel({
	height : 100,
	width : 50,
	top : 480,
	left : posHeader + 5 + 200,
	text : '6',
	textAlign : 'center',
	color : '#FF0000',
	font : {fontSize:72, fontWeight:'bold'}
});

var lbInfo = Titanium.UI.createLabel({
	height : 100,
	width : 450,
	top : 550,
	left : posHeader + 5,
	text : '* Montant à partager entre les gagants du 1er rang.\'Voir règlement.',
	textAlign : 'left',
	color : '#0041BC',
	font : {fontSize:18, fontWeight:'bold'}
});

var ivInpes = Titanium.UI.createImageView({
	backgroundImage :'img_inpes.png',
	height : 40,
	width : 450,
	top : 630,
	left : posHeader + 5
});

var lbInpes = Titanium.UI.createLabel({
	height : 40,
	width : 450,
	top : 630,
	left : posHeader + 5,
	text : 'JOUER COMPORTE DES RISQUES : DEPENDANCES, ISOLEMENT ...\'APPELEZ LE 09 74 75 13 13 (appel non surtaxé)',
	textAlign : 'center',
	color : '#000000',
	font : {fontSize:14, fontWeight:'bold'}
});


//zone IPhone
var fgResult = false;
var fgGrilles = false;
var fgAlertes = false;
var fgOuJouer = false;
var fgInfo = false;

var topGap = screenHeight - 100;
var iphoneHeight = 100;
var ivIphoneMenuResult = Titanium.UI.createImageView({
	backgroundImage :'./iphone_result_off.png',
	height : iphoneHeight,
	width : screenWidth/5,
	top : topGap,
	left : 0
});

ivIphoneMenuResult.addEventListener('click', function(e) {
	ivIphoneMenuGrilles.backgroundImage = './iphone_grilles_off.png';
	ivIphoneMenuAlertes.backgroundImage = './iphone_alertes_off.png';
	ivIphoneMenuOuJouer.backgroundImage = './iphone_ou_jouer_off.png';
	ivIphoneMenuInfo.backgroundImage = './iphone_info_off.png';
	if (ivIphoneMenuResult.backgroundImage == './iphone_result_off.png'){
		ivIphoneMenuResult.backgroundImage = './iphone_result_on.png';
	}else{
		ivIphoneMenuResult.backgroundImage = './iphone_result_off.png';
	}
	win.close();
	var newWin = Titanium.UI.createWindow({
		url : './Resultats.js'
	});
	newWin.open();
});

var ivIphoneMenuGrilles = Titanium.UI.createImageView({
	backgroundImage :'./iphone_grilles_off.png',
	height : iphoneHeight,
	width : screenWidth/5,
	top : topGap,
	left : screenWidth/5
});
ivIphoneMenuGrilles.addEventListener('click', function(e) {
	ivIphoneMenuResult.backgroundImage = './iphone_result_off.png';
	ivIphoneMenuAlertes.backgroundImage = './iphone_alertes_off.png';
	ivIphoneMenuOuJouer.backgroundImage = './iphone_ou_jouer_off.png';
	ivIphoneMenuInfo.backgroundImage = './iphone_info_off.png';
	if (ivIphoneMenuGrilles.backgroundImage == './iphone_grilles_off.png'){
		ivIphoneMenuGrilles.backgroundImage = './iphone_grilles_on.png';
	}else{
		ivIphoneMenuGrilles.backgroundImage = './iphone_grilles_off.png';
	}
	win.close();
	var newWin = Titanium.UI.createWindow({
		url : './mesgrilles.js'
	});
	newWin.open();
});

var ivIphoneMenuAlertes = Titanium.UI.createImageView({
	backgroundImage :'./iphone_alertes_off.png',
	height : iphoneHeight,
	width : screenWidth/5,
	top : topGap,
	left : (screenWidth/5)*2
});
ivIphoneMenuAlertes.addEventListener('click', function(e) {
	ivIphoneMenuResult.backgroundImage = './iphone_result_off.png';
	ivIphoneMenuGrilles.backgroundImage = './iphone_grilles_off.png';
	ivIphoneMenuOuJouer.backgroundImage = './iphone_ou_jouer_off.png';
	ivIphoneMenuInfo.backgroundImage = './iphone_info_off.png';
	if (ivIphoneMenuAlertes.backgroundImage == './iphone_alertes_off.png'){
		ivIphoneMenuAlertes.backgroundImage = './iphone_alertes_on.png';
	}else{
		ivIphoneMenuAlertes.backgroundImage = './iphone_alertes_off.png';
	}
	win.close();
	var newWin = Titanium.UI.createWindow({
		url : './mesalertes.js'
	});
	newWin.open();
});

var ivIphoneMenuOuJouer = Titanium.UI.createImageView({
	backgroundImage :'./iphone_ou_jouer_off.png',
	height : iphoneHeight,
	width : screenWidth/5,
	top : topGap,
	left : (screenWidth/5)*3
});
ivIphoneMenuOuJouer.addEventListener('click', function(e) {
	ivIphoneMenuResult.backgroundImage = './iphone_result_off.png';
	ivIphoneMenuGrilles.backgroundImage = './iphone_grilles_off.png';
	ivIphoneMenuAlertes.backgroundImage = './iphone_alertes_off.png';
	ivIphoneMenuInfo.backgroundImage = './iphone_info_off.png';
	if (ivIphoneMenuOuJouer.backgroundImage == './iphone_ou_jouer_off.png'){
		ivIphoneMenuOuJouer.backgroundImage = './iphone_ou_jouer_on.png';
	}else{
		ivIphoneMenuOuJouer.backgroundImage = './iphone_ou_jouer_off.png';
	}
});

var ivIphoneMenuInfo = Titanium.UI.createImageView({
	backgroundImage :'./iphone_info_off.png',
	height : iphoneHeight,
	width : screenWidth/5,
	top : topGap,
	left : (screenWidth/5)*4
});
ivIphoneMenuInfo.addEventListener('click', function(e) {
	ivIphoneMenuResult.backgroundImage = './iphone_result_off.png';
	ivIphoneMenuGrilles.backgroundImage = './iphone_grilles_off.png';
	ivIphoneMenuAlertes.backgroundImage = './iphone_alertes_off.png';
	ivIphoneMenuOuJouer.backgroundImage = './iphone_ou_jouer_off.png';
	if (ivIphoneMenuInfo.backgroundImage == './iphone_info_off.png'){
		ivIphoneMenuInfo.backgroundImage = './iphone_info_on.png';	
	}else{
		ivIphoneMenuInfo.backgroundImage = './iphone_info_off.png';
	}
	win.close();
	var newWin = Titanium.UI.createWindow({
		url : './other.js'
	});
	newWin.open();
});


win.add(ivHeader);
win.add(ivResult);
win.add(lbDate);
win.add(ivRes1);
win.add(lbRes1);
win.add(ivRes2);
win.add(lbRes2);
win.add(ivRes3);
win.add(lbRes3);
win.add(ivRes4);
win.add(lbRes4);
win.add(ivRes5);
win.add(lbRes5);
win.add(ivSymbNumChance);
win.add(ivChance);
win.add(lbChance);
win.add(ivJoker);
win.add(lbJoker);
win.add(ivHisto);
win.add(ivSimul);
win.add(ivNext);
win.add(lbNext);
win.add(lbNextMont);
win.add(lbInfo);
win.add(ivInpes);
win.add(lbInpes);

if (Titanium.Platform.osname == 'iphone'){
	win.add(ivIphoneMenuResult);
	win.add(ivIphoneMenuGrilles);
	win.add(ivIphoneMenuAlertes);
	win.add(ivIphoneMenuOuJouer);
	win.add(ivIphoneMenuInfo);
}



if (Titanium.Platform.osname == 'android'){
	var activity = Ti.Android.currentActivity;
	activity.onCreateOptionsMenu = function(e) {
		menu = e.menu; 
		menuResult = menu.add({
			title : 'Résultats',
			itemId : 1,
			groupId : 0,
			order : 0
		});
		menuResult.setIcon("ico_resultats.png");
		menuResult.addEventListener('click', function(e) {
			Ti.UI.createNotification({
				message : 'menuResult selected'
			}).show();
			win.close();
			var newWin = Titanium.UI.createWindow({
				url : './Resultats.js'
			});
			newWin.open();
		});
		menuGrilles = menu.add({
			title : 'Mes Grilles',
			itemId : 2,
			groupId : 0,
			order : 0
		});
		menuGrilles.addEventListener('click', function(e) {
			Ti.UI.createNotification({
				message : 'menuGrilles selected'
			}).show();
			
			win.close();
			var newWin = Titanium.UI.createWindow({
				url : './mesgrilles.js'
			});
			newWin.open();
		});
		menuGrilles.setIcon("ico_grilles.png");
		menuAlerte = menu.add({
			title : 'Les alertes',
			itemId : 3,
			groupId : 0,
			order : 0
		});
		menuAlerte.addEventListener('click', function(e) {
			Ti.UI.createNotification({
				message : 'menuAlerte selected'
			}).show();
			win.close();
			var newWin = Titanium.UI.createWindow({
				url : './mesalertes.js'
			});
			newWin.open();
		});
		menuAlerte.setIcon("ico_mesalertes.png");
		menuOuJouer = menu.add({
			title : 'Où jouer',
			itemId : 4,
			groupId : 0,
			order : 0
		});
		menuOuJouer.addEventListener('click', function(e) {
			Ti.UI.createNotification({
				message : 'menuOuJouer selected'
			}).show();
		});
		menuOuJouer.setIcon("ico_oujouer.png");
		menuPlusInfo = menu.add({
			title : 'Plus d\'infos',
			itemId : 5,
			groupId : 0,
			order : 0
		});
		menuPlusInfo.addEventListener('click', function(e) {
			Ti.UI.createNotification({
				message : 'menuPlusInfo selected'
			}).show();
			win.close();
			var newWin = Titanium.UI.createWindow({
				url : './other.js'
			});
			newWin.open();
		});
		menuPlusInfo.setIcon("ico_plusinfos.png");
	};
}



