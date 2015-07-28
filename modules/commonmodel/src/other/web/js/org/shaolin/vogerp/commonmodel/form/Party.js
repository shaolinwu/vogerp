/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_Party(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var participantIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "participantIdUILabel"]
    });

    var participantIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "participantIdUI"]
    });

    var typesUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typesUILabel"]
    });

    var typesUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typesUI"]
    });

    var rolesUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "rolesUILabel"]
    });

    var rolesUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "rolesUI"]
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
        ,subComponents: [prefix + "nameUILabel",prefix + "nameUI",prefix + "participantIdUILabel",prefix + "participantIdUI",prefix + "typesUILabel",prefix + "typesUI",prefix + "rolesUILabel",prefix + "rolesUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [nameUILabel,nameUI,participantIdUILabel,participantIdUI,typesUILabel,typesUI,rolesUILabel,rolesUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.participantIdUILabel=participantIdUILabel;

    Form.participantIdUI=participantIdUI;

    Form.typesUILabel=typesUILabel;

    Form.typesUI=typesUI;

    Form.rolesUILabel=rolesUILabel;

    Form.rolesUI=rolesUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_Party */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_Party */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_Party_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_Party_Cancel;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.Party";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_Party */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_Party */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Party_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Party_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail910478385",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Party_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Party_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Party_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1363996150",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Party_Cancel */



