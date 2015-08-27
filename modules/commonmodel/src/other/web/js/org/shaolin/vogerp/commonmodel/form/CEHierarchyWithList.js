/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var typeUI = new UIMaster.ui.list
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
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchyWithList";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList_invokeDynamicFunction */



