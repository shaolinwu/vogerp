/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var CENameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "CENameUI"]
    });

    var filterId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "filterId"]
    });

    var entityTypes = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "entityTypes"]
    });

    var uiDynamicInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "uiDynamicInfoTable"]
    });

    var constantInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "constantInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "entityTypes",prefix + "uiDynamicInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [CENameUI,filterId,entityTypes,uiDynamicInfoTable,constantInfoPanel]
    });

    Form.CENameUI=CENameUI;

    Form.filterId=filterId;

    Form.entityTypes=entityTypes;

    Form.uiDynamicInfoTable=uiDynamicInfoTable;

    Form.constantInfoPanel=constantInfoPanel;

    Form.entityTypes=entityTypes;

    Form.uiDynamicInfoTable=uiDynamicInfoTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager */
    };

    Form.selectEntity = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_selectEntity;

    Form.createItem = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_createItem;

    Form.openItemDetail = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_openItemDetail;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_deleteItem;

    Form.reload = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_reload;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIDynamicItemManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_selectEntity(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_selectEntity */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectEntity-20160228-2322",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_selectEntity */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_43242342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_openItemDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_openItemDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showconstantInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_openItemDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_201511101829",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_reload(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_reload */
        var o = this;
        var UIEntity = this;

	         {
	          var o = this;
	          new UIMaster.ui.dialog({
	              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
	              message:'Are you sure reload all dynamic ui configuration?',
	              messageType:UIMaster.ui.dialog.Warning,
	              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
	              title:'',
	              height:150,
	              width:300,
	              handler: function() {
	                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reload_201511101829",UIMaster.getValue(eventsource),o.__entityName);
	              }
	          }).open();
	          return;
	         }
	         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reload_201511101829",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_reload */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_invokeDynamicFunction */



