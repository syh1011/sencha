Ext.application({
	requires:[
	  	    'Ext.form.Panel',
	  	    'Ext.form.FieldSet',
	  	    'Ext.field.DatePicker',
	  	    'Ext.field.Spinner',
	  	    'Ext.field.Select',
	  	    'Ext.field.Url',
	  	    'Ext.field.Email',
	  	    'Ext.field.Slider',
	  	    'Ext.data.JsonP'
	],
	launch : function(){
		
		var date = new Date();
		Ext.Date.monthNames = ['1월','2월','3월','4월','5월','6월',
		                       '7월','8월','9월','10월','11월','12월'];
		Ext.define('genderModel',{
			extend : 'Ext.data.Model',
			config : {
				fields : [{
					name : 'indexNumber' , type : 'string'
				},{
					name : 'text' , type : 'string'
				}]
			}
		});
		
		var genderStore = new Ext.create('Ext.data.Store',{
			model : 'genderModel',
			data : [{
				indexNumber : '1', text : '남'
			},{
				indexNumber : '2', text : '여'
			}]
		});
		
		var formPanel = new Ext.create('Ext.form.FormPanel',{
			fullscreen : true,
			items : [{
				xtype : 'fieldset',
				title : '입사지원서',
				defaults : {
					required : true,
					labelAlign : 'left'
				},
				items : [{
					xtype : 'textfield',
					name : 'name',
					id : 'nameId',
					label : '이름',
					clearIcon : true,
					
				},{
					xtype : 'datepickerfield',
					name : 'birthday',
					id : 'birthday',
					label : '생연월일',
					value : date,
					dateFormat : 'Y/m/d',
					picker: {
						useTitles : true,
						dayText : '일',
						monthText : '월',
						yearText : '년',
						slotOrder : [ 'year','month','day']
		            }
				},{
					xtype : 'checkboxfield',
					name : 'mili',
					id : 'mili',
					label : '군필여부',
					checked : true
				},{
					xtype : 'spinnerfield',
					name : 'career',
					id : 'career',
					label : '경력',
					minValue : 0,
					maxValue : 100,
					stepValue : 1,
					value : 10
				},{
					layout : {
						xtype : 'panel',
						type : 'hbox',
						
					},
					width : '100%',
					items : [{
						xtype : 'selectfield',
						name : 'gender',
						id : 'gender',
						label : '성별',
						width : '50%',
						border : '1',
						store : genderStore
					},{
						xtype : 'numberfield',
						name : 'age',
						id:'age',
						label : '나이',
						width : '50%',
						value : 22,
						border : '1',
					}]
				},{
					xtype : 'emailfield',
					name : 'email',
					id:'email',
					label : '이메일',
					placeHolder : 'test@test.com',
					clearIcon : true
				},{
					xtype : 'urlfield',
					name : 'url',
					id:'url',
					label : '홈페이지'
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					width : '100%',
					items : [{
						xtype : 'sliderfield',
						label : '희망연봉',
						name : 'pay',
						id:'pay',
						value : 2000,
						maxValue : 10000,
						minValue : 1000,
						increment : 100,
						width : '85%',
						listeners:{  //이벤트 리스너 장착
				    		 	change:function(slider, thumb, newValue, oldValue){
				    		 		Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    		 	},
				    	        drag: function(slider){
				    	        	 	console.log('drag');
				    	        	 	Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    	        },
				    	        dragend: function(slider, thumb, value){
				    	        		console.log('dragend');
				    	        		//Ext.getCmp('result').setValue(slider.getValue()+'만원');
				    	        }
				    	 	}
					
					},{
				    	 	xtype:'textfield',
				    	 	id:'result',
				    	 	value:'2000만원',
				    	 	width : '15%',
				    	 	clearIcon : false
					}]
				},{
					layout : {
						type : 'hbox',
						pack : 'center'
					},
					items : [{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '등록',
						handler : function(){
							//console.log(Ext.ComponentQuery.query('emailfield')[0]);
							var loadValues = formPanel.getValues();
							//console.log("loadValues.name : "+ loadValues.name);
							//console.log("Ext.ComponentQuery.query('textfield')[0] : "+Ext.ComponentQuery.query('textfield')[0].getValue());
                      	    //console.log("Ext.ComponentQuery.query('textfield', formPanel)[0] : "+Ext.ComponentQuery.query('textfield', formPanel)[0].getValue());                              	    
                      	    //console.log("Ext.ComponentQuery.query('#url', formPanel)[0].getValue() : "+Ext.ComponentQuery.query('#url', formPanel)[0].getValue());
							// id를 이용하여 formPanel에 입력한 값을 저장하는 방법 
                      	    var name = Ext.getCmp('nameId').getValue(); 
                      	    var birthday = Ext.getCmp('birthday').getValue(); 
                      	    var mili = Ext.getCmp('mili').getChecked(); 
                      	    var career = Ext.getCmp('career').getValue(); 
                      	    var gender = Ext.getCmp('gender').getRecord( ).get('text') ; 
                      	    var age = Ext.getCmp('age').getValue(); 
                      	    var email = Ext.getCmp('email').getValue(); 
                      	    var url = Ext.getCmp('url').getValue(); 
                      	    var pay = Ext.getCmp('result').getValue(); 
                      	    
                      	    console.log('name : '+name);
                      	    console.log('birthday : '+birthday);
                      	    console.log('mili : '+mili);
                      	    console.log('career : '+career);
                      	    console.log('gender : '+gender);
                      	    console.log('age : '+age);
                      	    console.log('email : '+email);
                      	    console.log('url : '+url);
                      	    console.log('pay : '+pay);
                      	  /*
                      	    formPanel.submit({
                      	    		url:'formdata.jsp',
                      	    		method : 'POST',
                      	    		//params: formPanel.getValues(),
                      	    		
                      	    		params : [
                      	    		          {"name":name},{"birthday":birthday},{"mili":mili},
                      	    		          {"career":career},{"gender":gender},{"age":age},
                      	    		          {"email":email},{"url":url},{"pay":pay}
                      	    		],
                      	    		
                      	    		success: function(form, response) {
                      	          alert(response["success"]);
                      	    		},
                      	    		failure: function(form, response) {
                      	          alert(response["failure"]);
                      	    		}
				   	    			
			   	    		 	});
			   	    		 	*/
							
                      	    Ext.Viewport.mask({xtype:'loadmask',message:'loading...'});
	              			Ext.data.JsonP.request({
	              				url : 
	              			'http://hanbit1.cafe24.com/sencha/formdata_jsonp.jsp',
	              				callbackKey : 'callback',
	              				params : [name,birthday,mili,career,gender,age,email,url,pay], 
	              				success : function(result){
	              					Ext.Viewport.unmask();
	              					if(result.success=="ok"){
	              						alert("정상처리 되었습니다.");
	              					}else if(result.failure == "fail"){
	              						alert("다시 입력해주세요.");
	              					}
	              				},
	              				failure : function(result){
	              					Ext.Viewport.unmask();
	              					alert("failure : "+result);
	              				}
	              				
	              			});
	              			
                      	    
						}
					},{
						xtype : 'spacer',
						width : 10
					},{
						xtype : 'button',
						width : 100,
						align : 'center',
						text : '취소',
						handler : function(){
							formPanel.reset();
						}
					}]
				}]//end fieldset items
			}]//end formPanel items
		});//end formPanel
	}//end launch function
});




