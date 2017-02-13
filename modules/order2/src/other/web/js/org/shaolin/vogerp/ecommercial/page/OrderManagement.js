/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "machiningInfoPanel",prefix + "goldenOrderInfoPanel",prefix + "rentOrderInfoPanel",prefix + "interestEOrderPanel",prefix + "takenGOrderInfoPanel",prefix + "takenROrderInfoPanel"]
    });
    var machiningTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "machiningTable"]
    });

    var machiningInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "machiningInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "machiningTable"]
    });
    var goldenOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "goldenOrderTable"]
    });

    var goldenOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "goldenOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "goldenOrderTable"]
    });
    var rentOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "rentOrderTable"]
    });

    var rentOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "rentOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "rentOrderTable"]
    });
    var interestEOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "interestEOrderTable"]
    });

    var interestEOrderPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "interestEOrderPanel"]
        ,items: []
        ,subComponents: [prefix + "interestEOrderTable"]
    });
    var takenGOrderInfoPanel = new org_shaolin_vogerp_ecommercial_form_GoldenOrderTrack({"prefix":prefix + "takenGOrderInfoPanel."});

    var takenROrderInfoPanel = new org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderTrack({"prefix":prefix + "takenROrderInfoPanel."});


    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.machiningInfoPanel=machiningInfoPanel;

    Form.machiningTable=machiningTable;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.rentOrderInfoPanel=rentOrderInfoPanel;

    Form.rentOrderTable=rentOrderTable;

    Form.interestEOrderPanel=interestEOrderPanel;

    Form.interestEOrderTable=interestEOrderTable;

    Form.takenGOrderInfoPanel=takenGOrderInfoPanel;

    Form.takenROrderInfoPanel=takenROrderInfoPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
    };

    Form.createGOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder;

    Form.openGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder;

    Form.openTakenGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openTakenGoldenOrder;

    Form.acceptGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder;

    Form.acceptRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptRentOrder;

    Form.deliveryGOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_deliveryGOrder;

    Form.deliveryROrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_deliveryROrder;

    Form.openGOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagement_openGOrderTracker;

    Form.createRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder;

    Form.openRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder;

    Form.openRentOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrderTracker;

    Form.createMachiningOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createMachiningOrder;

    Form.openMachiningOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openMachiningOrder;

    Form.responseOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_responseOrder;

    Form.offerPriceAgain = org_shaolin_vogerp_ecommercial_page_OrderManagement_offerPriceAgain;

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.OrderManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createGOrder-20160602",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGoldenOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openTakenGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openTakenGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openTakenGoldenOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openTakenGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"acceptGoldenOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"acceptRentOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_deliveryGOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_deliveryGOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deliveryGOrder-2016-1214-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_deliveryGOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_deliveryROrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_deliveryROrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deliveryROrder-2016-1214-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_deliveryROrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openGOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openGOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGOrderTracker-20150614",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openGOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createRentOrder-20160602",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrder-201606023543",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrderTracker-20150614",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createMachiningOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createMachiningOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createMachiningOrder-20170125",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createMachiningOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openMachiningOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openMachiningOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMachiningOrder-20170125",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openMachiningOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_responseOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_responseOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"responseOrder-20160618-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_responseOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_offerPriceAgain(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_offerPriceAgain */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"offerPriceAgain-20160618-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_offerPriceAgain */


    function org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs */



