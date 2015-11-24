/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_InBalanceSheet(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var transIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "transIdUILabel"]
    });

    var transIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "transIdUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "transIdUILabel",prefix + "transIdUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,transIdUILabel,transIdUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.transIdUILabel=transIdUILabel;

    Form.transIdUI=transIdUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.transIdUILabel=transIdUILabel;

    Form.transIdUI=transIdUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_InBalanceSheet */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_InBalanceSheet */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_InBalanceSheet_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_InBalanceSheet_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_InBalanceSheet_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.InBalanceSheet";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_InBalanceSheet */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_InBalanceSheet */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InBalanceSheet_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InBalanceSheet_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150904-084551",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InBalanceSheet_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InBalanceSheet_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InBalanceSheet_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150904-084551",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InBalanceSheet_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InBalanceSheet_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InBalanceSheet_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InBalanceSheet_invokeDynamicFunction */



