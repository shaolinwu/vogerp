/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_Transaction(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var partyIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "partyIdUILabel"]
    });

    var partyIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "partyIdUI"]
    });

    var invoiceIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "invoiceIdUILabel"]
    });

    var invoiceIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "invoiceIdUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
    });

    var plusTaxUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "plusTaxUILabel"]
    });

    var plusTaxUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "plusTaxUI"]
    });

    var commentsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentsUILabel"]
    });

    var commentsUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "commentsUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var doubleEntiesUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "doubleEntiesUILabel"]
    });

    var doubleEntiesUI = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "doubleEntiesUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "partyIdUILabel",prefix + "partyIdUI",prefix + "invoiceIdUILabel",prefix + "invoiceIdUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "plusTaxUILabel",prefix + "plusTaxUI",prefix + "commentsUILabel",prefix + "commentsUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "doubleEntiesUILabel",prefix + "doubleEntiesUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,partyIdUILabel,partyIdUI,invoiceIdUILabel,invoiceIdUI,amountUILabel,amountUI,plusTaxUILabel,plusTaxUI,commentsUILabel,commentsUI,typeUILabel,typeUI,doubleEntiesUILabel,doubleEntiesUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.partyIdUILabel=partyIdUILabel;

    Form.partyIdUI=partyIdUI;

    Form.invoiceIdUILabel=invoiceIdUILabel;

    Form.invoiceIdUI=invoiceIdUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.plusTaxUILabel=plusTaxUILabel;

    Form.plusTaxUI=plusTaxUI;

    Form.commentsUILabel=commentsUILabel;

    Form.commentsUI=commentsUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.doubleEntiesUILabel=doubleEntiesUILabel;

    Form.doubleEntiesUI=doubleEntiesUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_Transaction */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_Transaction */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_Transaction_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_Transaction_Cancel;

    Form.__entityName="org.shaolin.vogerp.accounting.form.Transaction";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_Transaction */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_Transaction */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Transaction_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Transaction_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150719-235624",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Transaction_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Transaction_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Transaction_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150719-235625",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Transaction_Cancel */



