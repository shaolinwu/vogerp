/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_page_OrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var saleOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "saleOrderTable"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
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

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [saleOrderTable,functionsTab]
    });

    Form.saleOrderTable=saleOrderTable;

    Form.functionsTab=functionsTab;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_page_OrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_order_page_OrderManagement */
    };

    Form.createSaleOrder = org_shaolin_vogerp_order_page_OrderManagement_createSaleOrder;

    Form.openSaleOrder = org_shaolin_vogerp_order_page_OrderManagement_openSaleOrder;

    Form.openSaleOrderItem = org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderItem;

    Form.openSaleOrderTracker = org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderTracker;

    Form.approveSaleOrder = org_shaolin_vogerp_order_page_OrderManagement_approveSaleOrder;

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

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankorderInfoPanel3413",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_createSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrder */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showorderInfoPanel543542",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSaleOrderItem5673456",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderTracker(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderTracker */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSaleOrderTracker-20150614",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_openSaleOrderTracker */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_page_OrderManagement_approveSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_approveSaleOrder */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"approveSaleOrder-20150815-0906",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_approveSaleOrder */


    function org_shaolin_vogerp_order_page_OrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_initPageJs */


    function org_shaolin_vogerp_order_page_OrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_order_page_OrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_order_page_OrderManagement_finalizePageJs */



