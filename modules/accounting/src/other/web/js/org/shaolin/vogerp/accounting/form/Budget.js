/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_Budget(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var dateTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "dateTypeUILabel"]
    });

    var dateTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "dateTypeUI"]
    });

    var startDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "startDateUILabel"]
    });

    var startDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "startDateUI"]
    });

    var endDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "endDateUILabel"]
    });

    var endDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "endDateUI"]
    });

    var partyTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "partyTypeUILabel"]
    });

    var partyTypeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "partyTypeUI"]
    });

    var isRollingUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isRollingUILabel"]
    });

    var isRollingUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isRollingUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var stateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "stateUILabel"]
    });

    var stateUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "stateUI"]
    });

    var itemsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "itemsUILabel"]
    });

    var itemsUI = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemsUI"]
    });

    var commentsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentsUILabel"]
    });

    var commentsUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "commentsUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "dateTypeUILabel",prefix + "dateTypeUI",prefix + "startDateUILabel",prefix + "startDateUI",prefix + "endDateUILabel",prefix + "endDateUI",prefix + "partyTypeUILabel",prefix + "partyTypeUI",prefix + "isRollingUILabel",prefix + "isRollingUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "stateUILabel",prefix + "stateUI",prefix + "itemsUILabel",prefix + "itemsUI",prefix + "commentsUILabel",prefix + "commentsUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,dateTypeUILabel,dateTypeUI,startDateUILabel,startDateUI,endDateUILabel,endDateUI,partyTypeUILabel,partyTypeUI,isRollingUILabel,isRollingUI,typeUILabel,typeUI,stateUILabel,stateUI,itemsUILabel,itemsUI,commentsUILabel,commentsUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.dateTypeUILabel=dateTypeUILabel;

    Form.dateTypeUI=dateTypeUI;

    Form.startDateUILabel=startDateUILabel;

    Form.startDateUI=startDateUI;

    Form.endDateUILabel=endDateUILabel;

    Form.endDateUI=endDateUI;

    Form.partyTypeUILabel=partyTypeUILabel;

    Form.partyTypeUI=partyTypeUI;

    Form.isRollingUILabel=isRollingUILabel;

    Form.isRollingUI=isRollingUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.stateUILabel=stateUILabel;

    Form.stateUI=stateUI;

    Form.itemsUILabel=itemsUILabel;

    Form.itemsUI=itemsUI;

    Form.commentsUILabel=commentsUILabel;

    Form.commentsUI=commentsUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_Budget */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_Budget */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_Budget_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_Budget_Cancel;

    Form.__entityName="org.shaolin.vogerp.accounting.form.Budget";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_Budget */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_Budget */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Budget_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Budget_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150719-235626",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Budget_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Budget_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Budget_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150719-235626",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Budget_Cancel */



