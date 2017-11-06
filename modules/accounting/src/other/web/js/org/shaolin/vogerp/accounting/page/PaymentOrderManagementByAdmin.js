/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var orgNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orgNameUI"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "PayVoucherInfoPanel1",prefix + "PayVoucherInfoPanel2",prefix + "PayVoucherInfoPanel",prefix + "chargeServiceInfoPanel"]
    });
    var payOrderRequestTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "payOrderRequestTable"]
    });

    var PayVoucherInfoPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "PayVoucherInfoPanel1"]
        ,items: []
        ,subComponents: [prefix + "payOrderRequestTable"]
    });
    var payOrderRefundTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "payOrderRefundTable"]
    });

    var PayVoucherInfoPanel2 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "PayVoucherInfoPanel2"]
        ,items: []
        ,subComponents: [prefix + "payOrderRefundTable"]
    });
    var receivepayOrderRequestTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "receivepayOrderRequestTable"]
    });

    var PayVoucherInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "PayVoucherInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "receivepayOrderRequestTable"]
    });
    var chargeServiceTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "chargeServiceTable"]
    });

    var chargeServiceInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "chargeServiceInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "chargeServiceTable"]
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
        ,items: [orgNameUI,functionsTab,actionPanel]
    });

    Form.orgNameUI=orgNameUI;

    Form.functionsTab=functionsTab;

    Form.PayVoucherInfoPanel1=PayVoucherInfoPanel1;

    Form.payOrderRequestTable=payOrderRequestTable;

    Form.PayVoucherInfoPanel2=PayVoucherInfoPanel2;

    Form.payOrderRefundTable=payOrderRefundTable;

    Form.PayVoucherInfoPanel=PayVoucherInfoPanel;

    Form.receivepayOrderRequestTable=receivepayOrderRequestTable;

    Form.chargeServiceInfoPanel=chargeServiceInfoPanel;

    Form.chargeServiceTable=chargeServiceTable;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin */
        /* Construct_LAST:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin */
    };

    Form.openWithdrawRequest = org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_openWithdrawRequest;

    Form.openRufundPayOrder = org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_openRufundPayOrder;

    Form.initPageJs = org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.accounting.page.PaymentOrderManagementByAdmin";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_openWithdrawRequest(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_openWithdrawRequest */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openWithdrawRequest-20160115-1135",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_openWithdrawRequest */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_openRufundPayOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_openRufundPayOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRufundPayOrder-20160115-1135",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_openRufundPayOrder */


    function org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_initPageJs(){/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			}
			
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_initPageJs */


    function org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagementByAdmin_finalizePageJs */



