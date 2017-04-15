/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var paymentTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "paymentTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [paymentTable]
    });

    Form.paymentTable=paymentTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack */

        
	    {
		}
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack */
    };

    Form.openTakenGoldenOrder = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_openTakenGoldenOrder;

    Form.orderTrackDetail = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_orderTrackDetail;

    Form.updateAddress = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_updateAddress;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachiningOrderTrack";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_openTakenGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_openTakenGoldenOrder */
        var o = this;
        var UIEntity = this;

        {   
            this.paymentTable.syncBodyDataToServer();
            this.paymentTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openTakenGoldenOrder-2017-0218-2351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_openTakenGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_orderTrackDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_orderTrackDetail */
        var o = this;
        var UIEntity = this;

        {   
            this.paymentTable.syncBodyDataToServer();
            this.paymentTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"orderTrackDetail-2017-0218-2351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_orderTrackDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_updateAddress(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_updateAddress */
        var o = this;
        var UIEntity = this;

        {   
            this.paymentTable.syncBodyDataToServer();
            this.paymentTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"updateAddress-2017-0219-1131",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderTrack_updateAddress */


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



