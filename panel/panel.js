Ext.application({
	launch : function(){
		/*
		var rootPanel = new Ext.create('Ext.Panel',{

			fullscreen : true,
			items : [{
				docked : 'top',
				style : 'background-color:blue;font-size:40px',
				xtype : 'panel',
				html : 'TOP'
			},{
				docked : 'bottom',
				style : 'background-color:green;font-size:40px',
				xtype : 'panel',
				html : 'TOP'
			}],
			html : 'Panel 바탕입니다.'
		
		});
		*/
		var dock1 = Ext.create('Ext.Panel',{
			docked : 'top',
			style : 'background-color:blue;font-size:40px',
			html : 'TOP'
		});
		
		var dock2 = Ext.create('Ext.Panel',{
			docked : 'bottom',
			style : 'background-color:green;font-size:40px',
			html : 'BOTTOM'
		});
		
		var panel1 = Ext.create('Ext.Panel',{
			html : 'Panel 바탕입니다.'
		});
		
		var rootPanel = Ext.create('Ext.Panel',{
			items : [dock1, dock2, panel1]
		});
		
		Ext.Viewport.add(rootPanel);
	}
});









