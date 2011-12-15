// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


var win1 = Titanium.UI.createWindow({
			url : './Resultats.js'
		});
		
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Resultats',
    window:win1
});

var win2 = Titanium.UI.createWindow({
			url : './mesgrilles.js'
		});
		
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Mes grilles',
    window:win2
});

var win3 = Titanium.UI.createWindow({
			url : './mesalerts.js'
		});
		
var tab3 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Mes Alerts',
    window:win3
});

var win4 = Titanium.UI.createWindow({
			url : './map.js'
		});
		
var tab4 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Jouer',
    window:win4
});

var win5 = Titanium.UI.createWindow({
			url : './other.js'
		});
		
		
var tab5 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Others',
    window:win5
});

//
//  add tabs
//
tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3); 
tabGroup.addTab(tab4); 
tabGroup.addTab(tab5); 

// open tab group
tabGroup.open();
