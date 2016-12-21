/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_PayOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var orderIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderIdUILabel"]
    });

    var orderIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderIdUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var payBusinessTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "payBusinessTypeUILabel"]
    });

    var payBusinessTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "payBusinessTypeUI"]
    });

    var statusUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "statusUILabel"]
    });

    var statusUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "statusUI"]
    });

    var customerAPaymentMethodUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "customerAPaymentMethodUILabel"]
    });

    var customerAPaymentMethodUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "customerAPaymentMethodUI"]
    });

    var customerAPayAccountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "customerAPayAccountUILabel"]
    });

    var customerAPayAccountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "customerAPayAccountUI"]
    });

    var thirdGenSerialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdGenSerialNumberUILabel"]
    });

    var thirdGenSerialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "thirdGenSerialNumberUI"]
    });

    var thirdTransactionTimeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdTransactionTimeUILabel"]
    });

    var thirdTransactionTimeUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "thirdTransactionTimeUI"]
    });

    var customerBPaymentMethodUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "customerBPaymentMethodUILabel"]
    });

    var customerBPaymentMethodUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "customerBPaymentMethodUI"]
    });

    var customerBPayAccountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "customerBPayAccountUILabel"]
    });

    var customerBPayAccountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "customerBPayAccountUI"]
    });

    var thirdGenSerialNumber2UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdGenSerialNumber2UILabel"]
    });

    var thirdGenSerialNumber2UI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "thirdGenSerialNumber2UI"]
    });

    var thirdTransactionTime2UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdTransactionTime2UILabel"]
    });

    var thirdTransactionTime2UI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "thirdTransactionTime2UI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "orderIdUILabel",prefix + "orderIdUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "payBusinessTypeUILabel",prefix + "payBusinessTypeUI",prefix + "statusUILabel",prefix + "statusUI",prefix + "customerAPaymentMethodUILabel",prefix + "customerAPaymentMethodUI",prefix + "customerAPayAccountUILabel",prefix + "customerAPayAccountUI",prefix + "thirdGenSerialNumberUILabel",prefix + "thirdGenSerialNumberUI",prefix + "thirdTransactionTimeUILabel",prefix + "thirdTransactionTimeUI",prefix + "customerBPaymentMethodUILabel",prefix + "customerBPaymentMethodUI",prefix + "customerBPayAccountUILabel",prefix + "customerBPayAccountUI",prefix + "thirdGenSerialNumber2UILabel",prefix + "thirdGenSerialNumber2UI",prefix + "thirdTransactionTime2UILabel",prefix + "thirdTransactionTime2UI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,orderIdUILabel,orderIdUI,serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,payBusinessTypeUILabel,payBusinessTypeUI,statusUILabel,statusUI,customerAPaymentMethodUILabel,customerAPaymentMethodUI,customerAPayAccountUILabel,customerAPayAccountUI,thirdGenSerialNumberUILabel,thirdGenSerialNumberUI,thirdTransactionTimeUILabel,thirdTransactionTimeUI,customerBPaymentMethodUILabel,customerBPaymentMethodUI,customerBPayAccountUILabel,customerBPayAccountUI,thirdGenSerialNumber2UILabel,thirdGenSerialNumber2UI,thirdTransactionTime2UILabel,thirdTransactionTime2UI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.orderIdUILabel=orderIdUILabel;

    Form.orderIdUI=orderIdUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.payBusinessTypeUILabel=payBusinessTypeUILabel;

    Form.payBusinessTypeUI=payBusinessTypeUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.customerAPaymentMethodUILabel=customerAPaymentMethodUILabel;

    Form.customerAPaymentMethodUI=customerAPaymentMethodUI;

    Form.customerAPayAccountUILabel=customerAPayAccountUILabel;

    Form.customerAPayAccountUI=customerAPayAccountUI;

    Form.thirdGenSerialNumberUILabel=thirdGenSerialNumberUILabel;

    Form.thirdGenSerialNumberUI=thirdGenSerialNumberUI;

    Form.thirdTransactionTimeUILabel=thirdTransactionTimeUILabel;

    Form.thirdTransactionTimeUI=thirdTransactionTimeUI;

    Form.customerBPaymentMethodUILabel=customerBPaymentMethodUILabel;

    Form.customerBPaymentMethodUI=customerBPaymentMethodUI;

    Form.customerBPayAccountUILabel=customerBPayAccountUILabel;

    Form.customerBPayAccountUI=customerBPayAccountUI;

    Form.thirdGenSerialNumber2UILabel=thirdGenSerialNumber2UILabel;

    Form.thirdGenSerialNumber2UI=thirdGenSerialNumber2UI;

    Form.thirdTransactionTime2UILabel=thirdTransactionTime2UILabel;

    Form.thirdTransactionTime2UI=thirdTransactionTime2UI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.orderIdUILabel=orderIdUILabel;

    Form.orderIdUI=orderIdUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.payBusinessTypeUILabel=payBusinessTypeUILabel;

    Form.payBusinessTypeUI=payBusinessTypeUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.customerAPaymentMethodUILabel=customerAPaymentMethodUILabel;

    Form.customerAPaymentMethodUI=customerAPaymentMethodUI;

    Form.customerAPayAccountUILabel=customerAPayAccountUILabel;

    Form.customerAPayAccountUI=customerAPayAccountUI;

    Form.thirdGenSerialNumberUILabel=thirdGenSerialNumberUILabel;

    Form.thirdGenSerialNumberUI=thirdGenSerialNumberUI;

    Form.thirdTransactionTimeUILabel=thirdTransactionTimeUILabel;

    Form.thirdTransactionTimeUI=thirdTransactionTimeUI;

    Form.customerBPaymentMethodUILabel=customerBPaymentMethodUILabel;

    Form.customerBPaymentMethodUI=customerBPaymentMethodUI;

    Form.customerBPayAccountUILabel=customerBPayAccountUILabel;

    Form.customerBPayAccountUI=customerBPayAccountUI;

    Form.thirdGenSerialNumber2UILabel=thirdGenSerialNumber2UILabel;

    Form.thirdGenSerialNumber2UI=thirdGenSerialNumber2UI;

    Form.thirdTransactionTime2UILabel=thirdTransactionTime2UILabel;

    Form.thirdTransactionTime2UI=thirdTransactionTime2UI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_PayOrder */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_PayOrder */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_PayOrder_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_PayOrder_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_PayOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.PayOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_PayOrder */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_PayOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrder_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160405-114830",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrder_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160405-114830",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrder_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrder_invokeDynamicFunction */



