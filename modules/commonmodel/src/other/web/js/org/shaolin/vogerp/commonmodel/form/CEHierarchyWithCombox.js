/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [typeUI,fieldPanel]
    });

    Form.typeUI=typeUI;

    Form.fieldPanel=fieldPanel;

    Form.typeUI=typeUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox */
    };

    Form.selectItem = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_selectItem;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchyWithCombox";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_selectItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_selectItem */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_selectItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox_invokeDynamicFunction */



