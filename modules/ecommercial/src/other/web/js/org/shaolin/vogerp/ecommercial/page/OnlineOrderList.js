/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OnlineOrderList(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var defaultAction = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "defaultAction"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "goldenOrderInfoPanel",prefix + "gsaleOrderInfoPanel",prefix + "rentOrderInfoPanel",prefix + "loanOrderInfoPanel"]
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
    var gsaleOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "gsaleOrderTable"]
    });

    var gsaleOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "gsaleOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "gsaleOrderTable"]
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
    var loanOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "loanOrderTable"]
    });

    var loanOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loanOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "loanOrderTable"]
    });

    var searchBar = new org_shaolin_vogerp_ecommercial_form_SearchBar({"prefix":prefix + "searchBar."});

    var searchConditionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "searchConditionPanel"]
        ,items: []
        ,subComponents: [prefix + "searchBar"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [defaultAction,functionsTab,searchBar,searchConditionPanel]
    });

    Form.defaultAction=defaultAction;

    Form.functionsTab=functionsTab;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.gsaleOrderInfoPanel=gsaleOrderInfoPanel;

    Form.gsaleOrderTable=gsaleOrderTable;

    Form.rentOrderInfoPanel=rentOrderInfoPanel;

    Form.rentOrderTable=rentOrderTable;

    Form.loanOrderInfoPanel=loanOrderInfoPanel;

    Form.loanOrderTable=loanOrderTable;

    Form.searchBar=searchBar;

    Form.searchConditionPanel=searchConditionPanel;

    Form.searchBar=searchBar;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList */

        
	          {
			UIMaster.require("/js/org/shaolin/vogerp/ecommercial/form/GoldenOrderOverView.js");
			UIMaster.require("/js/org/shaolin/vogerp/ecommercial/form/RentOrderOverView.js");
			}
	         
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList */
    };

    Form.openGoldenOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openGoldenOrder;

    Form.openGoldenSaleOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openGoldenSaleOrder;

    Form.openRentOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openRentOrder;

    Form.takeGoldenOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGoldenOrder;

    Form.takeGSaleOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGSaleOrder;

    Form.takeRentOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeRentOrder;

    Form.publishOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_publishOrder;

    Form.openLoanOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openLoanOrder;

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
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGoldenOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openGoldenSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openGoldenSaleOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGoldenSaleOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openGoldenSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"takeGoldenOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGSaleOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"takeGSaleOrder-20160524-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeGSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"takeRentOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_takeRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_publishOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_publishOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"publishOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_publishOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openLoanOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openLoanOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openLoanOrder-20160124-15666",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_openLoanOrder */


    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_finalizePageJs */



