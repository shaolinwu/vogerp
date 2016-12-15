/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var comment = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "comment"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "goldenOrderInfoPanel",prefix + "gsaleOrderInfoPanel",prefix + "rentOrderInfoPanel",prefix + "loanOrderInfoPanel"]
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
    var gsaleOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "gsaleOrderTable"]
    });

    var gsaleOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "gsaleOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "gsaleOrderTable"]
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
    var loanOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "loanOrderTable"]
    });

    var loanOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loanOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "loanOrderTable"]
    });

    var citySelector = new org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor({"prefix":prefix + "citySelector."});

    var conditionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "conditionPanel"]
        ,items: []
        ,subComponents: [prefix + "citySelector",prefix + "comment"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [comment,functionsTab,citySelector,conditionPanel]
    });

    Form.comment=comment;

    Form.functionsTab=functionsTab;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.gsaleOrderInfoPanel=gsaleOrderInfoPanel;

    Form.gsaleOrderTable=gsaleOrderTable;

    Form.rentOrderInfoPanel=rentOrderInfoPanel;

    Form.rentOrderTable=rentOrderTable;

    Form.loanOrderInfoPanel=loanOrderInfoPanel;

    Form.loanOrderTable=loanOrderTable;

    Form.citySelector=citySelector;

    Form.conditionPanel=conditionPanel;

    Form.citySelector=citySelector;

    Form.comment=comment;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin */
    };

    Form.promoteGOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGOrder;

    Form.promoteGSOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGSOrder;

    Form.promoteRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteRentOrder;

    Form.promoteLoanOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteLoanOrder;

    Form.openGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGoldenOrder;

    Form.openSaleGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openSaleGoldenOrder;

    Form.openRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrder;

    Form.openLoanOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openLoanOrder;

    Form.disableGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableGoldenOrder;

    Form.disableSaleGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableSaleGoldenOrder;

    Form.disableRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableRentOrder;

    Form.disableLoanOrder = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableLoanOrder;

    Form.openGOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGOrderTracker;

    Form.openGSOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGSOrderTracker;

    Form.openRentOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrderTracker;

    Form.openLoanOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openLoanOrderTracker;

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
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGSOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGSOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"promoteGSOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteGSOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"promoteRentOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteLoanOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteLoanOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"promoteLoanOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_promoteLoanOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGoldenOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openSaleGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openSaleGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSaleGoldenOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openSaleGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openLoanOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openLoanOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openLoanOrder-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openLoanOrder */


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
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableSaleGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableSaleGoldenOrder */
        var o = this;
        var UIEntity = this;

		        {
		            new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {
		        	
	        				UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"forbiddenGOrder",UIMaster.getValue(eventsource),o.__entityName);
			            }
			        }).open();   
		        }
		            }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableSaleGoldenOrder */


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
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableLoanOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableLoanOrder */
        var o = this;
        var UIEntity = this;

		        {   
		            new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {
		        	
	        				UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"forbiddenGOrder",UIMaster.getValue(eventsource),o.__entityName);
			            }
			        }).open();
		        }
		            }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_disableLoanOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGOrderTracker-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGSOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGSOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGSOrderTracker-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openGSOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrderTracker-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openRentOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openLoanOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openLoanOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openLoanOrderTracker-20161017-2229",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_openLoanOrderTracker */


    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagementByAdmin_finalizePageJs */



