//Ext.require('Ext.MessageBox');
Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : {
				type : 'hbox',
				align : 'center',
				pack : 'center'
			},
			items :[{
				xtype:'button',
				ui : 'decline',//normal, decline, action,confirm, back,forward
				text : 'decline',
				handler : function(button, event){
					Ext.Msg.alert("Message","Title",Ext.emptyFn);
				}
			},{
				xtype:'button',
				ui : 'decline-round',
				text : 'decline-round'
			},{
				xtype:'button',
				ui : 'decline-small',
				text : 'decline-small'
			}]
		});
	}
});