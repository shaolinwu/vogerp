/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack */

        
	    {
		}
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack */
    };

    Form.openTakenGoldenOrder = org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_openTakenGoldenOrder;

    Form.orderTrackDetail = org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_orderTrackDetail;

    Form.updateAddress = org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_updateAddress;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderTrack";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_openTakenGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_openTakenGoldenOrder */
        var o = this;
        var UIEntity = this;

        {   
            this.paymentTable.syncBodyDataToServer();
            this.paymentTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openTakenGoldenOrder-2016-1214-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_openTakenGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_orderTrackDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_orderTrackDetail */
        var o = this;
        var UIEntity = this;

        {   
            this.paymentTable.syncBodyDataToServer();
            this.paymentTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"orderTrackDetail-2017-0219-1651",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_orderTrackDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_updateAddress(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_updateAddress */
        var o = this;
        var UIEntity = this;

        {   
            this.paymentTable.syncBodyDataToServer();
            this.paymentTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"updateAddress-2017-0219-1141",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_updateAddress */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_invokeDynamicFunction */



