/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_DoubleEntry(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var relatedTransIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "relatedTransIdUILabel"]
    });

    var relatedTransIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "relatedTransIdUI"]
    });

    var isLendedUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isLendedUILabel"]
    });

    var isLendedUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isLendedUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "relatedTransIdUILabel",prefix + "relatedTransIdUI",prefix + "isLendedUILabel",prefix + "isLendedUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "commentsUILabel",prefix + "commentsUI",prefix + "typeUILabel",prefix + "typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,relatedTransIdUILabel,relatedTransIdUI,isLendedUILabel,isLendedUI,amountUILabel,amountUI,commentsUILabel,commentsUI,typeUILabel,typeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.relatedTransIdUILabel=relatedTransIdUILabel;

    Form.relatedTransIdUI=relatedTransIdUI;

    Form.isLendedUILabel=isLendedUILabel;

    Form.isLendedUI=isLendedUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.commentsUILabel=commentsUILabel;

    Form.commentsUI=commentsUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_DoubleEntry */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_DoubleEntry */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_DoubleEntry_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_DoubleEntry_Cancel;

    Form.__entityName="org.shaolin.vogerp.accounting.form.DoubleEntry";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_DoubleEntry */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_DoubleEntry */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_DoubleEntry_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_DoubleEntry_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150719-235625",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_DoubleEntry_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_DoubleEntry_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_DoubleEntry_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150719-235625",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_DoubleEntry_Cancel */



