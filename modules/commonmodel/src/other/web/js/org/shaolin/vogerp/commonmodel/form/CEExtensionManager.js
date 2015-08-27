/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEExtensionManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var CENameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "CENameUI"]
    });

    var constantInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "constantInfoTable"]
    });

    var constantInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "constantInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "constantInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [CENameUI,constantInfoTable,constantInfoPanel]
    });

    Form.CENameUI=CENameUI;

    Form.constantInfoTable=constantInfoTable;

    Form.constantInfoPanel=constantInfoPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEExtensionManager */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEExtensionManager */
    };

    Form.createCE = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_createCE;

    Form.openCEDetail = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_openCEDetail;

    Form.reloadAllCE = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_reloadAllCE;

    Form.copyCE = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_copyCE;

    Form.viewHierarchy = org_shaolin_vogerp_commonmodel_form_CEExtensionManager_viewHierarchy;

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
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_createCE(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_createCE */

	        {
	        	var o = this;
	        	new UIMaster.ui.dialog({
		            dialogType: UIMaster.ui.dialog.INPUT_DIALOG,
		            message:'Please enter an unique Constant Name:',
		            messageType:UIMaster.ui.dialog.Information,
		            title:'',
		            height:150,
		            width:300,
		            handler: function() {
						if (this.value == null || this.value == "") {
							return;
						}
						o.CENameUI.setValue(this.value);
						UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCE_rewrews222",UIMaster.getValue(eventsource),o.__entityName);
		            }
	        	}).open();
	        	return;
	        }
	        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCE_rewrews222",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_createCE */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_openCEDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_openCEDetail */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showconstantInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_openCEDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_reloadAllCE(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_reloadAllCE */

	        {
	        	var o = this;
	        	new UIMaster.ui.dialog({
		            dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
		            message:'Are you sure reload the whole constant cache?',
		            messageType:UIMaster.ui.dialog.Information,
		            title:'',
		            height:150,
		            width:300,
		            handler: function() {
						UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"copyCE_243242dd",UIMaster.getValue(eventsource),o.__entityName);
		            }
	        	}).open();
	        	return;
	        }
	        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reloadAllCE_24eeeeee2",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_reloadAllCE */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_copyCE(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_copyCE */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"copyCE_243242dd",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_copyCE */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_viewHierarchy(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_viewHierarchy */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"viewHierarchy_243242dd",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_viewHierarchy */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_deleteUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEExtensionManager_invokeDynamicFunction */



