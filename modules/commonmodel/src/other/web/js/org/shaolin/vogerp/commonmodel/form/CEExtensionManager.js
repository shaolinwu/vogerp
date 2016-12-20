/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEExtensionManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var reloadBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "reloadBtn"]
    });

    var CENameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "CENameUI"]
    });

    var entityTypes = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "entityTypes"]
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
        ,items: [reloadBtn,CENameUI,entityTypes,typeUI,constantInfoPanel]
    });

    Form.reloadBtn=reloadBtn;

    Form.CENameUI=CENameUI;

    Form.entityTypes=entityTypes;

    Form.typeUI=typeUI;

    Form.constantInfoPanel=constantInfoPanel;

    Form.typeUI=typeUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEExtensionManager */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEExtensionManager */
    };

    Form.selectEntity = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_selectEntity;

    Form.reloadAllConstants = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_reloadAllConstants;

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
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_selectEntity(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_selectEntity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectEntity-20160228-2322",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_selectEntity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_reloadAllConstants(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_reloadAllConstants */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reloadAllConstants-2016054-2222",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_reloadAllConstants */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction */



