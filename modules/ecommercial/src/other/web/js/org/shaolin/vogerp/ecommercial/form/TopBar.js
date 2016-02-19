/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_TopBar(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_TopBar */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_TopBar */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_TopBar_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.TopBar";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_TopBar */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_TopBar */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_TopBar_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_TopBar_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_TopBar_invokeDynamicFunction */



