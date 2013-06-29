Ext.application({
	launch : function(){
		var rootPanel = new Ext.create('Ext.Panel',{

			fullscreen : true,
			style : 'background:white',
			html : 'Center',
			
			items : [{
				xtype : 'panel',
				docked : 'top',
				style : 'background:red',
				html : 'Top'
			},{
				xtype : 'panel',
				docked : 'left',
				style : 'background:blue',
				html : 'Left'
			},{
				xtype : 'panel',
				docked : 'right',
				style : 'background:green',
				html : 'Right'
			},{
				xtype : 'panel',
				docked : 'bottom',
				style : 'background:yellow',
				html : 'Bottom'
			}]
		
		});
		
	}
});