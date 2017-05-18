/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_page_PaymentOrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "MyWalletPanel",prefix + "PayVoucherInfoPanel1",prefix + "PayVoucherInfoPanel"]
    });
    var totalAmountUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "totalAmountUI"]
    });

    var withdrawAmountUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "withdrawAmountUI"]
    });

    var withdrawBtnUI = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "withdrawBtnUI"]
    });

    var MyWalletPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "MyWalletPanel"]
        ,items: []
        ,subComponents: [prefix + "totalAmountUI",prefix + "withdrawAmountUI",prefix + "withdrawBtnUI"]
    });
    var hintUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "hintUILabel"]
    });

    var payOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "payOrderTable"]
    });

    var PayVoucherInfoPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "PayVoucherInfoPanel1"]
        ,items: []
        ,subComponents: [prefix + "hintUILabel",prefix + "payOrderTable"]
    });
    var receivePayOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "receivePayOrderTable"]
    });

    var PayVoucherInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "PayVoucherInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "receivePayOrderTable"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: []
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab,actionPanel]
    });

    Form.functionsTab=functionsTab;

    Form.MyWalletPanel=MyWalletPanel;

    Form.totalAmountUI=totalAmountUI;

    Form.withdrawAmountUI=withdrawAmountUI;

    Form.withdrawBtnUI=withdrawBtnUI;

    Form.PayVoucherInfoPanel1=PayVoucherInfoPanel1;

    Form.hintUILabel=hintUILabel;

    Form.payOrderTable=payOrderTable;

    Form.PayVoucherInfoPanel=PayVoucherInfoPanel;

    Form.receivePayOrderTable=receivePayOrderTable;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_page_PaymentOrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_accounting_page_PaymentOrderManagement */
    };

    Form.openPOrder = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder;

    Form.openPOrder1 = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder1;

    Form.pay = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_pay;

    Form.ensurePayment = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_ensurePayment;

    Form.askForRefund = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_askForRefund;

    Form.withdrawPayOrder = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_withdrawPayOrder;

    Form.withdrawSetting = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_withdrawSetting;

    Form.initPageJs = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.accounting.page.PaymentOrderManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_page_PaymentOrderManagement */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_page_PaymentOrderManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPOrder-20150904-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder1 */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPOrder1-20150904-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_pay(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_pay */
        var o = this;
        var UIEntity = this;

		        {   
		        	eventsource = this.payOrderTable;
		        }
		        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"pay-20160406-1109",UIMaster.getValue(eventsource),o.__entityName);

		        {
		            event.stopPropagation();
		        	return false;   
		        }
		            }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_pay */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_ensurePayment(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_ensurePayment */
        var o = this;
        var UIEntity = this;

		        {   
		        	eventsource = this.payOrderTable;
		        }
		        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ensurePayment-20160406-1109",UIMaster.getValue(eventsource),o.__entityName);

		        {
		            event.stopPropagation();
		        	return false;   
		        }
		            }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_ensurePayment */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_askForRefund(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_askForRefund */
        var o = this;
        var UIEntity = this;

		        {   
		        
		          eventsource = this.payOrderTable;
		          new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,
		          handler: function() {
		        
		        	UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refundPrepayment",UIMaster.getValue(eventsource),o.__entityName);
		        	
		        	}
                  }).open();
		        }
		            }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_askForRefund */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_withdrawPayOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_withdrawPayOrder */
        var o = this;
        var UIEntity = this;

		        {   
		        
		          new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,
		          handler: function() {
		        
		        	UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"withdrawPayOrder",UIMaster.getValue(eventsource),o.__entityName);
		        	
		        	}
                  }).open();
		        }
		            }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_withdrawPayOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_withdrawSetting(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_withdrawSetting */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"withdrawSetting-20170406-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_withdrawSetting */


    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			}
			
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_initPageJs */


    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_finalizePageJs */



