/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_PaymentMethod(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var alipayUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "alipayUI"]
        ,width: "250px"
        ,height: "80px"
        ,src: "/images/payment/alipay.jpg"
    });

    var wepayUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "wepayUI"]
        ,width: "250px"
        ,height: "80px"
        ,src: "/images/payment/wepay.jpg"
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "alipayUI",prefix + "wepayUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [alipayUI,wepayUI,cancelbtn,fieldPanel,actionPanel]
    });

    Form.alipayUI=alipayUI;

    Form.wepayUI=wepayUI;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.alipayUI=alipayUI;

    Form.wepayUI=wepayUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_PaymentMethod */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_PaymentMethod */
    };

    Form.alipayAction = org_shaolin_vogerp_accounting_form_PaymentMethod_alipayAction;

    Form.wepayAction = org_shaolin_vogerp_accounting_form_PaymentMethod_wepayAction;

    Form.Cancel = org_shaolin_vogerp_accounting_form_PaymentMethod_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_PaymentMethod_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.PaymentMethod";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_PaymentMethod */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_PaymentMethod */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PaymentMethod_alipayAction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PaymentMethod_alipayAction */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"alipayAction-20170211-201347",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PaymentMethod_alipayAction */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PaymentMethod_wepayAction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PaymentMethod_wepayAction */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"wepayAction-20170211-201347",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PaymentMethod_wepayAction */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PaymentMethod_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PaymentMethod_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170211-201346",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PaymentMethod_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PaymentMethod_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PaymentMethod_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PaymentMethod_invokeDynamicFunction */



