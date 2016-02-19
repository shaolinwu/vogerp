/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OnlineOrderList(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var defaultAction = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "defaultAction"]
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
        ,items: [defaultAction,goldenOrderTable,goldenOrderInfoPanel]
    });

    Form.defaultAction=defaultAction;

    Form.goldenOrderTable=goldenOrderTable;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList */
    };

    Form.takeGoldenOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGoldenOrder;

    Form.publishOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_publishOrder;

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.OnlineOrderList";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"takeGoldenOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_publishOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_publishOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"publishOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_publishOrder */


    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_finalizePageJs */



