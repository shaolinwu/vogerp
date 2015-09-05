/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_Invoice(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var customerInfoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "customerInfoUILabel"]
    });

    var customerInfoUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "customerInfoUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var createDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUILabel"]
    });

    var createDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "createDateUI"]
    });

    var roleUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "roleUILabel"]
    });

    var roleUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "roleUI"]
    });

    var statusUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "statusUILabel"]
    });

    var statusUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "statusUI"]
    });

    var paymentPartyIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "paymentPartyIdUILabel"]
    });

    var paymentPartyIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "paymentPartyIdUI"]
    });

    var sourceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "sourceUILabel"]
    });

    var sourceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "sourceUI"]
    });

    var targetPartyIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "targetPartyIdUILabel"]
    });

    var targetPartyIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "targetPartyIdUI"]
    });

    var destinationUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "destinationUILabel"]
    });

    var destinationUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "destinationUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "customerInfoUILabel",prefix + "customerInfoUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "createDateUILabel",prefix + "createDateUI",prefix + "roleUILabel",prefix + "roleUI",prefix + "statusUILabel",prefix + "statusUI",prefix + "paymentPartyIdUILabel",prefix + "paymentPartyIdUI",prefix + "sourceUILabel",prefix + "sourceUI",prefix + "targetPartyIdUILabel",prefix + "targetPartyIdUI",prefix + "destinationUILabel",prefix + "destinationUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,serialNumberUILabel,serialNumberUI,customerInfoUILabel,customerInfoUI,descriptionUILabel,descriptionUI,createDateUILabel,createDateUI,roleUILabel,roleUI,statusUILabel,statusUI,paymentPartyIdUILabel,paymentPartyIdUI,sourceUILabel,sourceUI,targetPartyIdUILabel,targetPartyIdUI,destinationUILabel,destinationUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.customerInfoUILabel=customerInfoUILabel;

    Form.customerInfoUI=customerInfoUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.roleUILabel=roleUILabel;

    Form.roleUI=roleUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.paymentPartyIdUILabel=paymentPartyIdUILabel;

    Form.paymentPartyIdUI=paymentPartyIdUI;

    Form.sourceUILabel=sourceUILabel;

    Form.sourceUI=sourceUI;

    Form.targetPartyIdUILabel=targetPartyIdUILabel;

    Form.targetPartyIdUI=targetPartyIdUI;

    Form.destinationUILabel=destinationUILabel;

    Form.destinationUI=destinationUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_Invoice */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_Invoice */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_Invoice_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_Invoice_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_Invoice_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.Invoice";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_Invoice */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_Invoice */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Invoice_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Invoice_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150904-084552",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Invoice_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Invoice_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Invoice_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150904-084552",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Invoice_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Invoice_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Invoice_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Invoice_invokeDynamicFunction */



