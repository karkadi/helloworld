var win = Titanium.UI.createWindow({
	backgroung : '#cccccc'

});




var screenWidth = Titanium.Platform.displayCaps.platformWidth;
var screenHeight = Titanium.Platform.displayCaps.platformHeight;

var ivProgress = Titanium.UI.createImageView({
	backgroundImage : './img_progress.png',
	height : '73',
	width : '73',
	top : (screenHeight - 73)/2,
	left : (screenWidth - 73)/2
});

var lbDebug = Titanium.UI.createLabel({
	height : '150',
	width : screenWidth,
	top : 10,
	left : 0
});
win.add(lbDebug);


var start = Titanium.UI.create2DMatrix();
start = start.rotate(360);

ivProgress.animate({
	transform:start,
	repeat:3000,
	duration:2000,
	curve:Titanium.UI.ANIMATION_CURVE_LINEAR
});
var strVersion = '';
var strGeoloc = '';
var strAndroidMarket = '';
var strMediametrie = '';

win.addEventListener('open',function() {
	//Get Config
	var strText = "";
	var http = Titanium.Network.createHTTPClient({
		onload: function(e){
			strJson = this.responseText;
			//Big Titatiunm - Ne lit pas - dans les Tag JSon
			strJson = strJson.replace('service-geolocalisation', 'service_geolocalisation');
			strJson = strJson.replace('check-version', 'check_version');
			//Ti.API.debug(this.responseText);
			var response = JSON.parse(strJson);
			strVersion = response.check_version;
			strGeoloc = response.service_geolocalisation;
			strAndroidMarket = response.android_market;
			strMediametrie = response.mediametrie;
			lbDebug.text = strVersion + '\n' + strGeoloc + '\n' + strAndroidMarket + '\n' + strMediametrie;
			Ti.UI.createNotification({
				message : response.check_version
			}).show();
			//alert(response.length);
			
			//init mediametrie
			var httpMediametrie = Titanium.Network.createHTTPClient();
			httpMediametrie.open("GET", strMediametrie);
			httpMediametrie.send();
			
			//getVersion
			var httpVersion = Titanium.Network.createHTTPClient({
				onload: function(e){
					strJson = this.responseText;
					//Big Titatiunm - Ne lit pas - dans les Tag JSon
					strJson = strJson.replace('service-geolocalisation', 'service_geolocalisation');
					strJson = strJson.replace('check-version', 'check_version');
					//Ti.API.debug(this.responseText);
					var response = JSON.parse(strJson);
					strVersion = response.android.mobile.version;
					lbDebug.text = strVersion ;
					//Check version
					
					
					lbDebug.text = Titanium.version;
					//Passe a la  page principale
					
					win.close();
					var window = Titanium.UI.createWindow({
						url : './main.js'
					});
					window.open();
					
					
				},
				onerror: function(e){
					alert("Erreur");
				},
				timeout:5000
			});
			httpVersion.open("GET", strVersion);
			httpVersion.send();
			
		},
		onerror: function(e){
			alert("Erreur");
		},
		timeout:5000
	});
	http.open("GET", "https://www4.integ.fdj.fr/api/config/loto/");
	http.send();

});




win.add(ivProgress);
win.open();
