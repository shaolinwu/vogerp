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

    Form.uiPermissionTable=uiPermissionTable;

    Form.bePermissionTable=bePermissionTable;

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
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpermissionInfoPanel14314",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_createModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_openModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_openModelPerm */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpermissionInfoPanel253244",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_openModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteModelPerm */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteModePerm73563",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_createUIModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_createUIModelPerm */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpermissionInfoPanel14314kjhkj",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_createUIModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_openUIModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_openUIModelPerm */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpermissionInfoPanel253244asf",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_openUIModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUIModelPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUIModelPerm */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteUIModePermvdadfds",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUIModelPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_createBEPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_createBEPerm */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpermissionInfoPanel143142333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_createBEPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_openBEPerm(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_openBEPerm */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpermissionInfoPanel253244534",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_openBEPerm */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUser */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_deleteUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PermissionManager_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PermissionManager_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PermissionManager_invokeDynamicFunction */



