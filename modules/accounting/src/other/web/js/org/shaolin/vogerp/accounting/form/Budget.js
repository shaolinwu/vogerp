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
        ,subComponents: [prefix + "idUI",prefix + "dateTypeUILabel",prefix + "dateTypeUI",prefix + "startDateUILabel",prefix + "startDateUI",prefix + "endDateUILabel",prefix + "endDateUI",prefix + "partyTypeUILabel",prefix + "partyTypeUI",prefix + "isRollingUILabel",prefix + "isRollingUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "stateUILabel",prefix + "stateUI",prefix + "commentsUILabel",prefix + "commentsUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,dateTypeUILabel,dateTypeUI,startDateUILabel,startDateUI,endDateUILabel,endDateUI,partyTypeUILabel,partyTypeUI,isRollingUILabel,isRollingUI,typeUILabel,typeUI,stateUILabel,stateUI,commentsUILabel,commentsUI,okbtn,cancelbtn,fieldPanel,actionPanel]
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

    Form.commentsUILabel=commentsUILabel;

    Form.commentsUI=commentsUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

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

    Form.commentsUILabel=commentsUILabel;

    Form.commentsUI=commentsUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_Budget */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_Budget */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_Budget_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_Budget_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_Budget_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.Budget";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_Budget */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_Budget */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Budget_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Budget_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150904-084549",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Budget_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Budget_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Budget_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150904-084549",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Budget_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_Budget_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_Budget_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_Budget_invokeDynamicFunction */



