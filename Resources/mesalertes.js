//
// create controls tab and root window
//
var win = Titanium.UI.currentWindow;
win.backgroundImage = '/bg.png';

win.name = "window";
/*
var win2 = Titanium.UI.createWindow({  
    title:'Tab 2',
    backgroundColor:'#fff'
});
*/

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window Alerts',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win.add(label2);
