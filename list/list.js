Ext.application({
	requires : ['Ext.MessageBox'],
	launch : function(){
		//모델정의
		Ext.define('company',{
			extend : 'Ext.data.Model',
			config : {
				fields : ['grade','ban','name']
			}
		});
		
		var companyStore = Ext.create('Ext.data.Store',{
			model : 'company',
			sorters : 'ban',
			data : [{
				grade : '1', ban : '1', name : '홍길동1'
			},{
				grade : '2', ban : '2', name : '홍길동2'
			},{
				grade : '3', ban : '3', name : '홍길동3'
			},{
				grade : '1', ban : '1', name : '홍길동4'
			},{
				grade : '2', ban : '4', name : '홍길동5'
			},{
				grade : '3', ban : '4', name : '홍길동6'
			}],
			grouper : {
				groupFn : function(record){
					return record.get('ban')[0]+'반 입니다.';
				}
			}
		});
		
		var rootPanel = new Ext.create('Ext.Panel',{
			fullscreen : true,
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [{
				xtype : 'list',
				flex : 1,
				store : companyStore,//데이터를 저장한곳
				itemTpl : '{grade}학년 {ban}반 이름 : {name}',//store에 저장된 데이터를 표현하는 방법
				grouped : true,
				indexBar : true,
				onItemDisclosure : true,
				listeners : {
					itemtap : function (dataList, index, target, record, e, eOpts ){
						Ext.Msg.alert('Title',record.get('grade')+'학년 '+
						record.get('ban')+'반 이름 : '+record.get('name'));
					}
				}
			}]
		});
		
	}
});





