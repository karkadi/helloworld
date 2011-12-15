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


var animRotate = Titanium.UI.create2DMatrix({
	rotate:180
});


var anim = Titanium.UI.createAnimation({
	transform:animRotate,
	duration:10000
});

anim.addEventListener('complete', function(e){
	animRotate.rotate = 0,
	ivProgress.animate(anim)
});

ivProgress.animate(anim);



win.addEventListener('open',function() {
	
	var strText = "";
	var http = Titanium.Network.createHTTPClient({
		onload: function(e){
			strText = this.responseText;
			Ti.API.debug(this.responseText);
			//alert(strText);
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

setTimeout(function()
	{
		win.close();
		var window = Titanium.UI.createWindow({
			url : './main.js'
		});
		window.open();
	},5000);
	