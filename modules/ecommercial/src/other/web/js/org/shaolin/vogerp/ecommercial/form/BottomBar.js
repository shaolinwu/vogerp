/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_BottomBar(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_BottomBar */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_BottomBar */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_BottomBar_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.BottomBar";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_BottomBar */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_BottomBar */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_BottomBar_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_BottomBar_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_BottomBar_invokeDynamicFunction */



