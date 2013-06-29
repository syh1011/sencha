//2012. 10. 23.
Ext.application({
	launch : function() {
		var categories = ['Animals', 'Architecture','Cars','Food'];
		var itemCount = 10;
		var hCarousels = [];
		
		for(var i=0 ; i<categories.length;i++){
			var imgs = [];
			var category = categories[i];
			for(var j=1;j<=10;j++ ){
				imgs.push({
					xtype : 'image',
					src : '../images/photos/'+category + '/'+j+'.jpg'
				});
			}
			hCarousels.push({
				xtype : 'carousel',
				direction : 'horizontal',
				items : imgs
			});
		}
		
		Ext.Viewport.add({
			xtype : 'carousel',
			direction : 'vertical',
			items : hCarousels
		});
		
	}
});