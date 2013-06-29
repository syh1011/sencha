Ext.application({
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			items :[{
				xtype : 'toolbar',
				docked : 'top',
				title : 'My Toolbar',
				items :[{
					xtype : 'button',
					text : 'back'
				},{
					xtype :'spacer'
				},{
					
					xtype : 'button',
					text : 'home'
				}]
			}]
		});
	}
});