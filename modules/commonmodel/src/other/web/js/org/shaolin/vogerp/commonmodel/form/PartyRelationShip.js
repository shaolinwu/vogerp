/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PartyRelationship(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var srcPartyIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "srcPartyIdUILabel"]
    });

    var srcPartyIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "srcPartyIdUI"]
    });

    var tarPartyIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "tarPartyIdUILabel"]
    });

    var tarPartyIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "tarPartyIdUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "srcPartyIdUILabel",prefix + "srcPartyIdUI",prefix + "tarPartyIdUILabel",prefix + "tarPartyIdUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,typeUILabel,typeUI,srcPartyIdUILabel,srcPartyIdUI,tarPartyIdUILabel,tarPartyIdUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.srcPartyIdUILabel=srcPartyIdUILabel;

    Form.srcPartyIdUI=srcPartyIdUI;

    Form.tarPartyIdUILabel=tarPartyIdUILabel;

    Form.tarPartyIdUI=tarPartyIdUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.srcPartyIdUILabel=srcPartyIdUILabel;

    Form.srcPartyIdUI=srcPartyIdUI;

    Form.tarPartyIdUILabel=tarPartyIdUILabel;

    Form.tarPartyIdUI=tarPartyIdUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PartyRelationship */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PartyRelationship */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_PartyRelationship_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_PartyRelationship_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_PartyRelationship_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PartyRelationship";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PartyRelationship */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PartyRelationship */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PartyRelationship_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PartyRelationship_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1051313970",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PartyRelationship_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PartyRelationship_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PartyRelationship_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1752337454",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PartyRelationship_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PartyRelationship_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PartyRelationship_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PartyRelationship_invokeDynamicFunction */



