/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_page_PaymentOrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "PayVoucherInfoPanel",prefix + "PayVoucherInfoPanel1"]
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
    var payOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "payOrderTable"]
    });

    var PayVoucherInfoPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "PayVoucherInfoPanel1"]
        ,items: []
        ,subComponents: [prefix + "payOrderTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.PayVoucherInfoPanel=PayVoucherInfoPanel;

    Form.receivePayOrderTable=receivePayOrderTable;

    Form.PayVoucherInfoPanel1=PayVoucherInfoPanel1;

    Form.payOrderTable=payOrderTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_page_PaymentOrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_accounting_page_PaymentOrderManagement */
    };

    Form.openPOrder = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder;

    Form.openPOrder1 = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_openPOrder1;

    Form.pay = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_pay;

    Form.ensurePayment = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_ensurePayment;

    Form.refund = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_refund;

    Form.cancelPayment = org_shaolin_vogerp_accounting_page_PaymentOrderManagement_cancelPayment;

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

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"pay-20160406-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_pay */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_ensurePayment(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_ensurePayment */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ensurePayment-20160406-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_ensurePayment */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_refund(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_refund */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refund-20160406-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_refund */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_cancelPayment(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_cancelPayment */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelPayment-20160406-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_cancelPayment */


    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
				BC.err = function(data) {
                    //注册错误信息接受
                    alert(data["ERROR"]);
                }
                /**
                 * click调用错误返回：默认行为console.log(err)
                 */
                BC.err = function(err) {
                    //err 为object, 例 ｛”ERROR“ : "xxxx"｝;
                    console.log(err);
                    alert(err["ERROR"]);
                }
			}
			
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_initPageJs */


    function org_shaolin_vogerp_accounting_page_PaymentOrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_accounting_page_PaymentOrderManagement_finalizePageJs */



