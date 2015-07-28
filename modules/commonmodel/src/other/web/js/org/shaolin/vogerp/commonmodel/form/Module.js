/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_Module(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var groupIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "groupIdUILabel"]
    });

    var groupIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "groupIdUI"]
    });

    var accessURLUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "accessURLUILabel"]
    });

    var accessURLUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "accessURLUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var smallIconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "smallIconUILabel"]
    });

    var smallIconUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "smallIconUI"]
    });

    var bigIconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bigIconUILabel"]
    });

    var bigIconUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "bigIconUI"]
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
        ,subComponents: [prefix + "groupIdUILabel",prefix + "groupIdUI",prefix + "accessURLUILabel",prefix + "accessURLUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "smallIconUILabel",prefix + "smallIconUI",prefix + "bigIconUILabel",prefix + "bigIconUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [groupIdUILabel,groupIdUI,accessURLUILabel,accessURLUI,descriptionUILabel,descriptionUI,smallIconUILabel,smallIconUI,bigIconUILabel,bigIconUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.groupIdUILabel=groupIdUILabel;

    Form.groupIdUI=groupIdUI;

    Form.accessURLUILabel=accessURLUILabel;

    Form.accessURLUI=accessURLUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.smallIconUILabel=smallIconUILabel;

    Form.smallIconUI=smallIconUI;

    Form.bigIconUILabel=bigIconUILabel;

    Form.bigIconUI=bigIconUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_Module */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_Module */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_Module_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_Module_Cancel;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.Module";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_Module */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_Module */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Module_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Module_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1759217997",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Module_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Module_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Module_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-590083568",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Module_Cancel */



