/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var typeUI = new UIMaster.ui.radiobuttongroup
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

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchyWithRadioGroup";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup_invokeDynamicFunction */



