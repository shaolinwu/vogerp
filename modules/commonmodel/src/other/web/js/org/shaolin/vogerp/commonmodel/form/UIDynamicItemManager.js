/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var CENameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "CENameUI"]
    });

    var uiDynamicInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "uiDynamicInfoTable"]
    });

    var constantInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "constantInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "uiDynamicInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [CENameUI,uiDynamicInfoTable,constantInfoPanel]
    });

    Form.CENameUI=CENameUI;

    Form.uiDynamicInfoTable=uiDynamicInfoTable;

    Form.constantInfoPanel=constantInfoPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_createItem;

    Form.openItemDetail = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_openItemDetail;

    Form.deleteUser = org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_deleteUser;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIDynamicItemManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_createItem */

	        {
	        	var o = this;
	        	new UIMaster.ui.dialog({
		            dialogType: UIMaster.ui.dialog.INPUT_DIALOG,
		            message:'Please enter an uipage name:',
		            messageType:UIMaster.ui.dialog.Information,
		            title:'',
		            height:150,
		            width:300,
		            handler: function() {
						if (this.value == null || this.value == "") {
							return;
						}
						o.CENameUI.setValue(this.value);
						UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_43242342",UIMaster.getValue(eventsource),o.__entityName);
		            }
	        	}).open();
	        	return;
	        }
	        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_43242342",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_openItemDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_openItemDetail */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showconstantInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_openItemDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_deleteUser */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager_deleteUser */



