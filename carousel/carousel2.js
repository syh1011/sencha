Ext.application({
	name:'MyApp',
	requires:[
	   'Ext.Carousel'
	],
	launch:function(){
		var panel = Ext.create('Ext.Panel',{
			layout:{
				type:'vbox', 
				align:'stretch',
				pack:'center'
			},
			items:[
		       {
		    	   style:'background-color:yellow',
		    	   html:'화면전환용2',
		       },
		       {
		    	 xtype:'carousel',
		    	 flex:1,
				 ui:'dark',
				 indicator:true,
				 direction:'horizontal', // vertical
				 items:[
				    {html:'<br><img src="../images/s1.png" width="200"/><br>직급:사원<br>이름:신선해'},
				    {html:'<br><img src="../images/s2.png" width="200"/><br>직급:대리<br>이름:신나는'},
				    {html:'<br><img src="../images/s3.png" width="200"/><br>직급:과장<br>이름:신기루'},
				 ]
		       }
			]
		});
		
		Ext.Viewport.add(panel);
	}
});