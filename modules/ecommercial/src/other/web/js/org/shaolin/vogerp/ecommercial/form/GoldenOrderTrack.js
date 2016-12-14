/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack */
    };

    Form.payGoldenOrder = org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_payGoldenOrder;

    Form.checkDeliveryStatus = org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_checkDeliveryStatus;

    Form.openTakenGoldenOrder = org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_openTakenGoldenOrder;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderTrack";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_payGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_payGoldenOrder */
        var o = this;
        var UIEntity = this;

        {   
            this.waitPaymentTable.syncBodyDataToServer();
            this.waitPaymentTable.sync();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"payGoldenOrder-20160618-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_payGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_checkDeliveryStatus(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_checkDeliveryStatus */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"checkDeliveryStatus-20160618-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_checkDeliveryStatus */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_openTakenGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_openTakenGoldenOrder */
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

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openTakenGoldenOrder-2016-1214-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_openTakenGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack_invokeDynamicFunction */



