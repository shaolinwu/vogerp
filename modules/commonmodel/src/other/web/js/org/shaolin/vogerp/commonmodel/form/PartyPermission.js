/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PartyPermission(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var roleUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "roleUILabel"]
    });

    var roleUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "roleUI"]
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
        ,subComponents: [prefix + "roleUILabel",prefix + "roleUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [roleUILabel,roleUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.roleUILabel=roleUILabel;

    Form.roleUI=roleUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PartyPermission */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PartyPermission */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_PartyPermission_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_PartyPermission_Cancel;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PartyPermission";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PartyPermission */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PartyPermission */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PartyPermission_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PartyPermission_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1986637093",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PartyPermission_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PartyPermission_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PartyPermission_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-662319067",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PartyPermission_Cancel */



