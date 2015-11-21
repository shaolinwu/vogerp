/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_Organization(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var orgCodeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgCodeUILabel"]
    });

    var orgCodeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orgCodeUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var typeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox({"prefix":prefix + "typeUI."});

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
        ,subComponents: [prefix + "idUI",prefix + "parentIdUI",prefix + "orgCodeUILabel",prefix + "orgCodeUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "descriptionUILabel",prefix + "descriptionUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,parentIdUI,orgCodeUILabel,orgCodeUI,nameUILabel,nameUI,typeUILabel,descriptionUILabel,descriptionUI,okbtn,cancelbtn,typeUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.parentIdUI=parentIdUI;

    Form.orgCodeUILabel=orgCodeUILabel;

    Form.orgCodeUI=orgCodeUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.typeUILabel=typeUILabel;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.typeUI=typeUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.parentIdUI=parentIdUI;

    Form.orgCodeUILabel=orgCodeUILabel;

    Form.orgCodeUI=orgCodeUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_Organization */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_Organization */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_Organization_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_Organization_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_Organization_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.Organization";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_Organization */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_Organization */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Organization_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Organization_Save */

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail946655221",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Organization_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Organization_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Organization_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1509902581",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Organization_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Organization_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Organization_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Organization_invokeDynamicFunction */



