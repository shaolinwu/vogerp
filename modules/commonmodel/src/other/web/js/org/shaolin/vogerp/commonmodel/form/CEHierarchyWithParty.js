/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
      ,allowBlank:false
    });

    var partyUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "partyUI"]
      ,allowBlank:false
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "typeUI",prefix + "partyUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [typeUI,partyUI,fieldPanel]
    });

    Form.typeUI=typeUI;

    Form.partyUI=partyUI;

    Form.fieldPanel=fieldPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty */
    };

    Form.ChangeItem = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty_ChangeItem;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchyWithParty";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty_ChangeItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty_ChangeItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ChangeItem2432423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithParty_ChangeItem */



