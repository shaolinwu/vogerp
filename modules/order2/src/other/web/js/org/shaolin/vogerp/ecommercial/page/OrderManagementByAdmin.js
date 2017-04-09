/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "machiningInfoPanel",prefix + "goldenOrderInfoPanel",prefix + "rentOrderInfoPanel"]
    });
    var machiningTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "machiningTable"]
    });

    var machiningInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "machiningInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "machiningTable"]
    });
    var goldenOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "goldenOrderTable"]
    });

    var goldenOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "goldenOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "goldenOrderTable"]
    });
    var rentOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "rentOrderTable"]
    });

    var rentOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "rentOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "rentOrderTable"]
    });

    var citySelector = new org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor({"prefix":prefix + "citySelector."});

    var conditionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "conditionPanel"]
        ,items: []
        ,subComponents: [prefix + "citySelector"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab,citySelector,conditionPanel]
    });

    Form.functionsTab=functionsTab;

    Form.machiningInfoPanel=machiningInfoPanel;

    Form.machiningTable=machiningTable;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.rentOrderInfoPanel=rentOrderInfoPanel;

    Form.rentOrderTable=rentOrderTable;

    Form.citySelector=citySelector;

    Form.conditionPanel=conditionPanel;

    Form.citySelector=citySelector;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin */

        
		    {
		       var o = this;
               var UIEntity = this;
		       // workflow dynamic actions
		       Form.verifiedMOrder = function() {
		          new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.INPUT_DIALOG2,message:"\u7559\u8A00\uFF1A",messageType:UIMaster.ui.dialog.Information,optionType:UIMaster.ui.dialog.OK_CANCEL_OPTION,title:'',height:200,width:300,handler: function() {
		             
			          UIMaster.actionComment = encodeURI(this.value);
			          UIMaster.triggerServerEvent(UIMaster.getUIID(Form.machiningTable),"verifiedMOrder",UIMaster.getValue(Form.machiningTable),o.__entityName);
		          
		          }}).open();
		       };
		       Form.unverifiedMOrder = function() {
		          new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.INPUT_DIALOG2,message:"\u7559\u8A00\uFF1A",messageType:UIMaster.ui.dialog.Information,optionType:UIMaster.ui.dialog.OK_CANCEL_OPTION,title:'',height:200,width:300,handler: function() {
		          
		              UIMaster.actionComment = encodeURI(this.value);
		              UIMaster.triggerServerEvent(UIMaster.getUIID(Form.machiningTable),"unverifiedMOrder",UIMaster.getValue(Form.machiningTable),o.__entityName);
		          
		          }}).open();
		       };
		       Form.verifiedGOrder = function() {
		          new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.INPUT_DIALOG2,message:"\u7559\u8A00\uFF1A",messageType:UIMaster.ui.dialog.Information,optionType:UIMaster.ui.dialog.OK_CANCEL_OPTION,title:'',height:200,width:300,handler: function() {
		          
		             UIMaster.actionComment = encodeURI(this.value);
		             UIMaster.triggerServerEvent(UIMaster.getUIID(Form.goldenOrderTable),"verifiedGOrder",UIMaster.getValue(Form.goldenOrderTable),o.__entityName);
		          
		          }}).open();
		       };
		       Form.unverifiedGOrder = function() {
		          new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.INPUT_DIALOG2,message:"\u7559\u8A00\uFF1A",messageType:UIMaster.ui.dialog.Information,optionType:UIMaster.ui.dialog.OK_CANCEL_OPTION,title:'',height:200,width:300,handler: function() {
		          
			          UIMaster.actionComment = encodeURI(this.value);
			          UIMaster.triggerServerEvent(UIMaster.getUIID(Form.goldenOrderTable),"unverifiedGOrder",UIMaster.getValue(Form.goldenOrderTable),o.__entityName);
		          
		          }}).open();
		       };
		       Form.verifiedROrder = function() {
		          new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.INPUT_DIALOG2,message:"\u7559\u8A00\uFF1A",messageType:UIMaster.ui.dialog.Information,optionType:UIMaster.ui.dialog.OK_CANCEL_OPTION,title:'',height:200,width:300,handler: function() {
		          
			          UIMaster.actionComment = encodeURI(this.value);
			          UIMaster.triggerServerEvent(UIMaster.getUIID(Form.rentOrderTable),"verifyROrder",UIMaster.getValue(Form.rentOrderTable),o.__entityName);
		          
		          }}).open();
		       };
		       Form.unverifiedROrder = function() {
		          new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.INPUT_DIALOG2,message:"\u7559\u8A00\uFF1A",messageType:UIMaster.ui.dialog.Information,optionType:UIMaster.ui.dialog.OK_CANCEL_OPTION,title:'',height:200,width:300,handler: function() {
		          
		             UIMaster.actionComment = encodeURI(this.value);
		             UIMaster.triggerServerEvent(UIMaster.getUIID(Form.rentOrderTable),"unverifiedROrder",UIMaster.getValue(Form.rentOrderTable),o.__entityName);
		          
		          }}).open();
		       };
			}
	    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin */
    };

    Form.promoteGOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGOrder;

    Form.promoteRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteRentOrder;

    Form.openGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGoldenOrder;

    Form.openRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrder;

    Form.disableGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableGoldenOrder;

    Form.disableRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableRentOrder;

    Form.openGOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGOrderTracker;

    Form.openRentOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrderTracker;

    Form.openMachiningOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openMachiningOrder;

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.OrderManagementByAdmin";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"promoteGOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"promoteRentOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGoldenOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableGoldenOrder */
        var o = this;
        var UIEntity = this;

		        {   
		        	new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {
		        	
	        				UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"forbiddenGOrder",UIMaster.getValue(eventsource),o.__entityName);
			            }
			        }).open();
		        }
		            }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableRentOrder */
        var o = this;
        var UIEntity = this;

		        {
		            new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {
		        	
	        				UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"forbiddenGOrder",UIMaster.getValue(eventsource),o.__entityName);
			            }
			        }).open();   
		        }
		            }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGOrderTracker-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrderTracker-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openMachiningOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openMachiningOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMachiningOrder-20170125-1011",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openMachiningOrder */


    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_finalizePageJs */



