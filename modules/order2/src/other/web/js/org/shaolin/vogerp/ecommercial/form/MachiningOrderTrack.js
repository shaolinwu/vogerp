/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var funcsPanel = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,items: []
        ,subComponents: [prefix + "waitPaymentPanel",prefix + "waitDeliveryPanel",prefix + "deliveringPanel",prefix + "completedPanel"]
    });
    var waitPaymentTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "waitPaymentTable"]
    });

    var waitPaymentPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "waitPaymentPanel"]
        ,items: []
        ,subComponents: [prefix + "waitPaymentTable"]
    });
    var waitDeliveryTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "waitDeliveryTable"]
    });

    var waitDeliveryPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "waitDeliveryPanel"]
        ,items: []
        ,subComponents: [prefix + "waitDeliveryTable"]
    });
    var deliveringTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "deliveringTable"]
    });

    var deliveringPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "deliveringPanel"]
        ,items: []
        ,subComponents: [prefix + "deliveringTable"]
    });
    var completedTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "completedTable"]
    });

    var completedPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "completedPanel"]
        ,items: []
        ,subComponents: [prefix + "completedTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [funcsPanel]
    });

    Form.funcsPanel=funcsPanel;

    Form.waitPaymentPanel=waitPaymentPanel;

    Form.waitPaymentTable=waitPaymentTable;

    Form.waitDeliveryPanel=waitDeliveryPanel;

    Form.waitDeliveryTable=waitDeliveryTable;

    Form.deliveringPanel=deliveringPanel;

    Form.deliveringTable=deliveringTable;

    Form.completedPanel=completedPanel;

    Form.completedTable=completedTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack */

        
	    {
	       // workflow dynamic actions
	       Form.deliveryOrder = function() {
	          if (Form.waitDeliveryTable._selectedIndex < 0) {
	              alert("Please select an item!");
	              return;
	          }
	          Form.waitDeliveryTable.syncBodyDataToServer();
              Form.waitDeliveryTable.sync();
	          Form.invokeDynamicFunction(Form.waitDeliveryTable, "deliveryOrder");
	       };
	       Form.receivedOrder = function() {
	          if (Form.deliveringTable._selectedIndex < 0) {
	              alert("Please select an item!");
	              return;
	          }
	          Form.deliveringTable.syncBodyDataToServer();
              Form.deliveringTable.sync();
	          Form.invokeDynamicFunction(Form.deliveringTable, "receivedOrder");
	       };
		}
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack */
    };

    Form.payGoldenOrder = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_payGoldenOrder;

    Form.checkDeliveryStatus = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_checkDeliveryStatus;

    Form.openTakenGoldenOrder = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_openTakenGoldenOrder;

    Form.deliveryGOrder = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_deliveryGOrder;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachiningOrderTrack";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_payGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_payGoldenOrder */
        var o = this;
        var UIEntity = this;

        {   
            this.waitPaymentTable.syncBodyDataToServer();
            this.waitPaymentTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"payGoldenOrder-20170218-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_payGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_checkDeliveryStatus(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_checkDeliveryStatus */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"checkDeliveryStatus-20170218-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_checkDeliveryStatus */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_openTakenGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_openTakenGoldenOrder */
        var o = this;
        var UIEntity = this;

        {   
            this.waitPaymentTable.syncBodyDataToServer();
            this.waitPaymentTable.sync();
            this.waitDeliveryTable.syncBodyDataToServer();
            this.waitDeliveryTable.sync();
            this.deliveringTable.syncBodyDataToServer();
            this.deliveringTable.sync();
            this.completedTable.syncBodyDataToServer();
            this.completedTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openTakenGoldenOrder-2017-0218-2351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_openTakenGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_deliveryGOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_deliveryGOrder */
        var o = this;
        var UIEntity = this;

        {   
            this.waitDeliveryTable.syncBodyDataToServer();
            this.waitDeliveryTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deliveryGOrder-2016-1214-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_deliveryGOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_invokeDynamicFunction */



