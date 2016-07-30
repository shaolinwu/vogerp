/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "goldenOrderInfoPanel",prefix + "takenGOrderInfoPanel",prefix + "rentOrderInfoPanel",prefix + "takenROrderInfoPanel"]
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
    var takengGOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "takengGOrderTable"]
    });

    var takenGOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "takenGOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "takengGOrderTable"]
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
    var takenROrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "takenROrderTable"]
    });

    var takenROrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "takenROrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "takenROrderTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.takenGOrderInfoPanel=takenGOrderInfoPanel;

    Form.takengGOrderTable=takengGOrderTable;

    Form.rentOrderInfoPanel=rentOrderInfoPanel;

    Form.rentOrderTable=rentOrderTable;

    Form.takenROrderInfoPanel=takenROrderInfoPanel;

    Form.takenROrderTable=takenROrderTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
    };

    Form.createGOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createGOrder;

    Form.openGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder;

    Form.openTakenGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openTakenGoldenOrder;

    Form.acceptGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder;

    Form.openGOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagement_openGOrderTracker;

    Form.createRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createRentOrder;

    Form.openRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrder;

    Form.openRentOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagement_openRentOrderTracker;

    Form.payGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_payGoldenOrder;

    Form.payRentOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_payRentOrder;

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
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_payGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_payGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"payGoldenOrder-20160618-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_payGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_payRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_payRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"payRentOrder-20160618-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_payRentOrder */


    function org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs */



