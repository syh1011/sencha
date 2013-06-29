Ext.ns("src.third");

src.third.init = function()
{

   src.third.panel = new Ext.create('Ext.Panel',
    {
		flex: 1,
		layout: {
			type: 'vbox',
			pack: 'center',
			align:'stretch',
		},            
		items: [
		{
		    xtype: 'fieldset',
		    title: '세번째 페이지',
		    instructions: 'Sencha Touch 페이지이동',		
       
		    items:[
		    { 	xtype: 'spacer',
		    	height: 50
		    },		            
			{
				xtype:'button',
				text:'첫번째 페이지 호출',
				handler:function(){
					main.panel.setActiveItem(src.first.panel);
					
				}
			},
			{
				xtype:'button',
				text:'두번째 페이지 호출',
				handler:function(){
					main.panel.setActiveItem(src.second.panel);
					
				}
			},
		    { 	
		    	xtype: 'spacer',
		    	height: 50
		    }],
		}],		
	});
}


