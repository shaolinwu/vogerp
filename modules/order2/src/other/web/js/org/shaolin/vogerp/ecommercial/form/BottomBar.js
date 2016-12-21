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
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_BottomBar_invokeDynamicFunction */



