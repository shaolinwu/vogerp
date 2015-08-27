/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PermissionManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var uiPermissionTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "uiPermissionTable"]
    });

    var bePermissionTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "bePermissionTable"]
    });

    var permissionInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "permissionInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "uiPermissionTable",prefix + "bePermissionTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [uiPermissionTable,bePermissionTable,permissionInfoPanel]
    });

    Form.uiPermissionTable=uiPermissionTable;

    Form.bePermissionTable=bePermissionTable;

    Form.permissionInfoPanel=permissionInfoPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PermissionManager */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PermissionManager */
    };

    Form.createModelPerm = org_shaolin_vogerp_commonmodel_form_PermissionManager_createModelPerm;

    Form.openModelPerm = org_shaolin_vogerp_commonmodel_form_PermissionManager_openModelPerm;

    Form.deleteModelPerm = org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteModelPerm;

    Form.createUIModelPerm = org_shaolin_vogerp_commonmodel_form_PermissionManager_createUIModelPerm;

    Form.openUIModelPerm = org_shaolin_vogerp_commonmodel_form_PermissionManager_openUIModelPerm;

    Form.deleteUIModelPerm = org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUIModelPerm;

    Form.createBEPerm = org_shaolin_vogerp_commonmodel_form_PermissionManager_createBEPerm;

    Form.openBEPerm = org_shaolin_vogerp_commonmodel_form_PermissionManager_openBEPerm;

    Form.deleteUser = org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUser;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_PermissionManager_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PermissionManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PermissionManager */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PermissionManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_createModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_createModelPerm */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpermissionInfoPanel14314",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_createModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_openModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_openModelPerm */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpermissionInfoPanel253244",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_openModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteModelPerm */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteModePerm73563",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_createUIModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_createUIModelPerm */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpermissionInfoPanel14314kjhkj",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_createUIModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_openUIModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_openUIModelPerm */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpermissionInfoPanel253244asf",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_openUIModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUIModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUIModelPerm */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteUIModePermvdadfds",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUIModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_createBEPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_createBEPerm */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpermissionInfoPanel143142333",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_createBEPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_openBEPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_openBEPerm */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpermissionInfoPanel253244534",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_openBEPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUser */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_invokeDynamicFunction */



