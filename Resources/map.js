var win = Titanium.UI.currentWindow;
win.backgroundImage = '/bg.png';

win.name = "window";

/*var annotations = [
 Ti.Map.createAnnotation({
 latitude: 37.389569,
 longitude: -122.050212,
 title: 'Appcelerator HQ',
 subtitle: 'Mountain View, CA',
 animate: true,
 pincolor: Ti.Map.ANNOTATION_GREEN,
 leftButton: 'appcelerator.gif'
 }),
 Ti.Map.createAnnotation({
 latitude: 37.331689,
 longitude: -122.030731,
 title: 'Apple HQ',
 subtitle: 'Cupertino, CA',
 animate: true,
 pincolor: Ti.Map.ANNOTATION_RED,
 rightButton: 'apple.png'
 }),
 Ti.Map.createAnnotation({
 latitude: 37.422502,
 longitude: -122.0855498,
 title: 'Google HQ',
 subtitle: 'Mountain View, CA',
 animate: true,
 image: 'google.png',
 leftView: Ti.UI.createButton({
 title: 'leftView',
 height: 32,
 width: 70
 }),
 rightView: Ti.UI.createLabel({
 text: 'rightView',
 height: 'auto',
 width: 'auto',
 color: '#fff'
 })
 })
 ];*/

Titanium.Geolocation.purpose = "Recieve User Location";
Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

// Set Distance filter. This dictates how often an event fires based on the distance the device moves. This value is in meters.
Titanium.Geolocation.distanceFilter = 100;
//set the mapview with the current location
var mapview = Titanium.Map.createView({
	mapType : Titanium.Map.STANDARD_TYPE,
	animate : true,
	region : {
		latitude : 49.050095,
		longitude : 2.618140,
		latitudeDelta : 0.01,
		longitudeDelta : 0.01
	},
	regionFit : true,
	userLocation : true,
	visible : true,
	//  annotations: annotations
});

function getLocation() {
	//	Titanium.Geolocation.removeEventListener('location',getLocation());
	//Get the current position and set it to the mapview

	if(Ti.Geolocation.locationServicesEnabled) {
		Titanium.Geolocation.purpose = 'Get Current Location';
		Titanium.Geolocation.getCurrentPosition(function(e) {
			if(e.error) {
				Ti.API.error('Error: ' + e.error);
				return;
			} else {
				Ti.API.info(e.coords);
				var region={
            latitude: e.coords.latitude,
            longitude: e.coords.longitude,
            animate:true,
            latitudeDelta:0.001,
            longitudeDelta:0.001
        };
				mapview.setLocation(region);
				mapview.removeAllAnnotations();

				var lat = new Number(e.coords.latitude);
				var lon = new Number(e.coords.longitude);

				var url = "https://www2.integ.fdj.fr/api/pdv/get?x=" + lat.toFixed(6) + "&y=" + lon.toFixed(6) + "&r=1000&f=n";
				var json, annotation;

				var xhr = Ti.Network.createHTTPClient({
					onload : function() {
						Ti.API.debug(this.responseText);
						json = JSON.parse(this.responseText);
						for( i = 0; i < json.length; i++) {
							annotation = Ti.Map.createAnnotation({
								latitude : json[i].CX,
								longitude : json[i].CY,
								title : json[i].VILLE,
								subtitle : json[i].ENSEIGNE,
								animate : true,
								pincolor : Ti.Map.ANNOTATION_GREEN,
								leftButton : 'appcelerator.gif'
							});
							mapview.addAnnotation(annotation);
						}

					},
					onerror : function(e) {
						Ti.API.debug("STATUS: " + this.status);
						Ti.API.debug("TEXT:   " + this.responseText);
						Ti.API.debug("ERROR:  " + e.error);
						alert('There was an error retrieving the remote data. Try again.');
					},
					timeout : 5000
				});

				xhr.open("POST", url);
				xhr.send();
			}
		});
	} else {
		alert('Please enable location services');
	}
	/*
	 Titanium.Geolocation.getCurrentPosition(function(e){
	 var region={
	 latitude: e.coords.latitude,
	 longitude: e.coords.longitude,
	 animate:true,
	 latitudeDelta:0.01,
	 longitudeDelta:0.01
	 };
	 */
}

/*
 Titanium.Geolocation.addEventListener('location',function(e){
 Ti.API.info(e.coords);
 getLocation();
 });*/

getLocation();

win.add(mapview);
