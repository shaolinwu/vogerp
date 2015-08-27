/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ModuleGroup(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var groupIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "groupIdUI"]
    });

    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var accessURLUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "accessURLUILabel"]
    });

    var accessURLUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "accessURLUI"]
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

    var roleUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "roleUILabel"]
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

    var roleUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList({"prefix":prefix + "roleUI."});

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
        ,subComponents: [prefix + "groupIdUI",prefix + "parentIdUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "accessURLUILabel",prefix + "accessURLUI",prefix + "smallIconUILabel",prefix + "smallIconUI",prefix + "bigIconUILabel",prefix + "roleUILabel",prefix + "roleUI",prefix + "bigIconUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [groupIdUI,parentIdUI,nameUILabel,nameUI,descriptionUILabel,descriptionUI,accessURLUILabel,accessURLUI,smallIconUILabel,smallIconUI,bigIconUILabel,roleUILabel,bigIconUI,okbtn,cancelbtn,roleUI,fieldPanel,actionPanel]
    });

    Form.groupIdUI=groupIdUI;

    Form.parentIdUI=parentIdUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.accessURLUILabel=accessURLUILabel;

    Form.accessURLUI=accessURLUI;

    Form.smallIconUILabel=smallIconUILabel;

    Form.smallIconUI=smallIconUI;

    Form.bigIconUILabel=bigIconUILabel;

    Form.roleUILabel=roleUILabel;

    Form.bigIconUI=bigIconUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.roleUI=roleUI;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ModuleGroup */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ModuleGroup */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_ModuleGroup_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_ModuleGroup_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ModuleGroup_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ModuleGroup";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ModuleGroup */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ModuleGroup */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModuleGroup_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModuleGroup_Save */

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail2134807383",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModuleGroup_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModuleGroup_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModuleGroup_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-945221342",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModuleGroup_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ModuleGroup_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ModuleGroup_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ModuleGroup_invokeDynamicFunction */



