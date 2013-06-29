Ext.require('Ext.tab.Panel');
Ext.require('Ext.Label');

Ext.application({
	name:'ToolTabBar',
	launch:function(){

        var tabpanel = new Ext.create('Ext.TabPanel',{
            tabBar: {
                docked: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            fullscreen: true,
            defaults: {
                scrollable: 'vertical'
            },
            items: [{
                title: 'About',
                iconCls: 'info',                
                cls: 'card1'    
                
            },{
                title: 'Favorites',
                iconCls: 'favorites',
                cls: 'card2',
                badgeText: '1'
            }]   ,
            
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'top',
                title:'My Tabbar',
                items : [{
					ui : 'back',
					text : 'back'
				},{
					  xtype: 'spacer'
				},
				{
					ui : 'action',
					text : 'home'
				}]
            }]
        });
         
    }    
});