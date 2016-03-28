/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_page_OrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "purcharseOrderInfoPanel",prefix + "saleOrderInfoPanel",prefix + "productOrderInfoPanel",prefix + "inStoreOrderInfoPanel",prefix + "outStoreOrderInfoPanel"]
    });
    var purchaseOrderInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "purchaseOrderInfoTable"]
    });

    var purcharseOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "purcharseOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "purchaseOrderInfoTable"]
    });
    var saleOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "saleOrderTable"]
    });

    var saleOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "saleOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "saleOrderTable"]
    });
    var productOrderInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "productOrderInfoTable"]
    });

    var productOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "productOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "productOrderInfoTable"]
    });
    var inStoreOrderInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "inStoreOrderInfoTable"]
    });

    var inStoreOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "inStoreOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "inStoreOrderInfoTable"]
    });
    var outStoreOrderInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "outStoreOrderInfoTable"]
    });

    var outStoreOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "outStoreOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "outStoreOrderInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.purcharseOrderInfoPanel=purcharseOrderInfoPanel;

    Form.purchaseOrderInfoTable=purchaseOrderInfoTable;

    Form.saleOrderInfoPanel=saleOrderInfoPanel;

    Form.saleOrderTable=saleOrderTable;

    Form.productOrderInfoPanel=productOrderInfoPanel;

    Form.productOrderInfoTable=productOrderInfoTable;

    Form.inStoreOrderInfoPanel=inStoreOrderInfoPanel;

    Form.inStoreOrderInfoTable=inStoreOrderInfoTable;

    Form.outStoreOrderInfoPanel=outStoreOrderInfoPanel;

    Form.outStoreOrderInfoTable=outStoreOrderInfoTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_page_OrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_order_page_OrderManagement */
    };

    Form.createSaleOrder = org_shaolin_vogerp_order_page_OrderManagement_createSaleOrder;

    Form.openSaleOrder = org_shaolin_vogerp_order_page_OrderManagement_openSaleOrder;

    Form.createPurchaseOrder = org_shaolin_vogerp_order_page_OrderManagement_createPurchaseOrder;

    Form.openPurchaseOrder = org_shaolin_vogerp_order_page_OrderManagement_openPurchaseOrder;

    Form.openSaleOrderItem = org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderItem;

    Form.openSaleOrderTracker = org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderTracker;

    Form.openPurchaseOrderTracker = org_shaolin_vogerp_order_page_OrderManagement_openPurchaseOrderTracker;

    Form.createProductOrder = org_shaolin_vogerp_order_page_OrderManagement_createProductOrder;

    Form.openProductOrder = org_shaolin_vogerp_order_page_OrderManagement_openProductOrder;

    Form.createInStoreOrder = org_shaolin_vogerp_order_page_OrderManagement_createInStoreOrder;

    Form.openInStoreOrder = org_shaolin_vogerp_order_page_OrderManagement_openInStoreOrder;

    Form.createOutStoreOrder = org_shaolin_vogerp_order_page_OrderManagement_createOutStoreOrder;

    Form.openOutStoreOrder = org_shaolin_vogerp_order_page_OrderManagement_openOutStoreOrder;

    Form.initPageJs = org_shaolin_vogerp_order_page_OrderManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_order_page_OrderManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.order.page.OrderManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_page_OrderManagement */
/* Other_Func_LAST:org_shaolin_vogerp_order_page_OrderManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_createSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_createSaleOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createSaleOrder-20150918-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_createSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSaleOrder-20150918-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_createPurchaseOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_createPurchaseOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createPurchaseOrder-20160107-2301",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_createPurchaseOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openPurchaseOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openPurchaseOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPurchaseOrder-20160107-2301",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openPurchaseOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSaleOrderItem5673456",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSaleOrderTracker-20150614",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openPurchaseOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openPurchaseOrderTracker */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPurchaseOrderTracker-20150614",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openPurchaseOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_createProductOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_createProductOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createProductOrder-20150916",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_createProductOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openProductOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openProductOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductOrder-20150916",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openProductOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_createInStoreOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_createInStoreOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createInStoreOrder-20150916",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_createInStoreOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openInStoreOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openInStoreOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openInStoreOrder-20150916",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openInStoreOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_createOutStoreOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_createOutStoreOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createOutStoreOrder-20150916",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_createOutStoreOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openOutStoreOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openOutStoreOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openOutStoreOrder-20150916",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openOutStoreOrder */


    function org_shaolin_vogerp_order_page_OrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_initPageJs */


    function org_shaolin_vogerp_order_page_OrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_finalizePageJs */



