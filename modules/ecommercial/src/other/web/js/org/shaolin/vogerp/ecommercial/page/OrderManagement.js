/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OrderManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "goldenOrderInfoPanel"]
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

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OrderManagement */
    };

    Form.createGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_createGoldenOrder;

    Form.openGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder;

    Form.acceptGoldenOrder = org_shaolin_vogerp_ecommercial_page_OrderManagement_acceptGoldenOrder;

    Form.openGOrderTracker = org_shaolin_vogerp_ecommercial_page_OrderManagement_openGOrderTracker;

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
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_createGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_createGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createGoldenOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_createGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGoldenOrder-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_openGoldenOrder */


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


    function org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OrderManagement_finalizePageJs */



