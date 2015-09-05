/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_BudgetItem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
    });

    var reasonUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "reasonUILabel"]
    });

    var reasonUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "reasonUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "reasonUILabel",prefix + "reasonUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,amountUILabel,amountUI,reasonUILabel,reasonUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.reasonUILabel=reasonUILabel;

    Form.reasonUI=reasonUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_BudgetItem */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_BudgetItem */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_BudgetItem_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_BudgetItem_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_BudgetItem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.BudgetItem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_BudgetItem */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_BudgetItem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_BudgetItem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_BudgetItem_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150904-084550",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_BudgetItem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_BudgetItem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_BudgetItem_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150904-084550",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_BudgetItem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_BudgetItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_BudgetItem_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_BudgetItem_invokeDynamicFunction */



