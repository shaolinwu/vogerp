/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEExtensionManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var CENameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "CENameUI"]
    });

    var typeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchy({"prefix":prefix + "typeUI."});

    var constantInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "constantInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [CENameUI,typeUI,constantInfoPanel]
    });

    Form.CENameUI=CENameUI;

    Form.typeUI=typeUI;

    Form.constantInfoPanel=constantInfoPanel;

    Form.typeUI=typeUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEExtensionManager */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEExtensionManager */
    };

    Form.deleteUser = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEExtensionManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEExtensionManager */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEExtensionManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'????',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction */



