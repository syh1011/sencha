Ext.ns("main");
Ext.require('Ext.form.FieldSet');  

Ext.require('src.first');
Ext.require('src.second');
Ext.require('src.third');
Ext.application({
  name:'PAGE',
  launch:function(){
    main = this;  
    src.first.init();//2.0에서는 반드시 function 안에 있어야 한다.
    src.second.init();
    src.third.init();
    main.panel = new Ext.create('Ext.Panel',{
      fullscreen:true,
      
      layout:{
      type:'card',
      animation:"flip",
      },                   
      items :[
      {
      docked: 'top',
      xtype: 'toolbar',
        items: [
        {
        xtype:'button',
        text: '첫번째',
        handler : function(btn) {
        main.panel.setActiveItem(src.first.panel);
        }
        },
        {
        text: '두번째',
        handler : function(btn) {
        main.panel.setActiveItem(src.second.panel);
        }                  
        },
        {
            text: '세번째',
            handler : function(btn) {
            main.panel.setActiveItem(src.third.panel);
            }                  
         }
        ]
      }], 
    }); 
    main.panel.setActiveItem(src.first.panel);
  }
});




