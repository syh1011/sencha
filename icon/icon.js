//2012. 10. 23.
Ext.application({
	launch : function() {
		var item1 = {title : 'info', iconCls : 'info', badgeText : '2'};
		var item2 = {title : 'favorites', iconCls : 'favorites'};
		var item3 = {title : 'settings', iconCls : 'settings'};
		var item4 = {title : 'user', iconCls : 'user'};
		var item5 = {title : 'star', iconCls : 'star'};
		var rootPanel = new Ext.create('Ext.TabPanel', {
			fullscreen : true,
			ui : 'light',
			cardSwitchAnimation : 'slide',
			tabBar : {
				docked : 'bottom',
			},
			items : [item1, item2, item3, item4, item5]
		});
	}
});