//
// create base UI tab and root window
//
/*
var win1 = Titanium.UI.createWindow({  
    title:'Tab 1',
    backgroundColor:'#fff'
});
*/
var win = Titanium.UI.currentWindow;
win.backgroundImage = '/bg.png';

win.name = "window";

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'I am Window Resultats',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win.add(label1);