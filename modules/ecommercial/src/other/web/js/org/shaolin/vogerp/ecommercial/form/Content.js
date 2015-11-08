/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_Content(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var root = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "root"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: []
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [root]
    });

    Form.root=root;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_Content */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_Content */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_Content_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.Content";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_Content */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_Content */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_Content_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_Content_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_Content_invokeDynamicFunction */



