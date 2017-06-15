/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob(json)
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
        ,subComponents: [prefix + "machiningOrderInfoPanel",prefix + "goldenOrderInfoPanel",prefix + "gsaleOrderInfoPanel",prefix + "rentOrderInfoPanel",prefix + "loanOrderInfoPanel",prefix + "loanMasterInfoPanel"]
    });
    var machingOrderTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "machingOrderTable"]
    });

    var machiningOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "machiningOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "machingOrderTable"]
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
    var loanMasterTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "loanMasterTable"]
    });

    var loanMasterInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loanMasterInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "loanMasterTable"]
    });

    var searchBar = new org_shaolin_vogerp_ecommercial_form_SearchBar_mob({"prefix":prefix + "searchBar."});

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

    Form.machiningOrderInfoPanel=machiningOrderInfoPanel;

    Form.machingOrderTable=machingOrderTable;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.gsaleOrderInfoPanel=gsaleOrderInfoPanel;

    Form.gsaleOrderTable=gsaleOrderTable;

    Form.rentOrderInfoPanel=rentOrderInfoPanel;

    Form.rentOrderTable=rentOrderTable;

    Form.loanOrderInfoPanel=loanOrderInfoPanel;

    Form.loanOrderTable=loanOrderTable;

    Form.loanMasterInfoPanel=loanMasterInfoPanel;

    Form.loanMasterTable=loanMasterTable;

    Form.searchBar=searchBar;

    Form.searchConditionPanel=searchConditionPanel;

    Form.searchBar=searchBar;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob */

        
	          {
			}
	         
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob */
    };

    Form.openGoldenOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openGoldenOrder;

    Form.openSaleGoldenOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openSaleGoldenOrder;

    Form.openRentOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openRentOrder;

    Form.openLoanOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openLoanOrder;

    Form.openLoanMasterOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openLoanMasterOrder;

    Form.takeGoldenOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGoldenOrder;

    Form.takeGSaleOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGSaleOrder;

    Form.publishOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_publishOrder;

    Form.openMachingOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openMachingOrder;

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.OnlineOrderList_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openGoldenOrder-20160124-6546",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openSaleGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openSaleGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSaleGoldenOrder-20160124-6546",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openSaleGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openRentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openRentOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openRentOrder-20160124-15435",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openRentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openLoanOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openLoanOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openLoanOrder-20160124-15435",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openLoanOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openLoanMasterOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openLoanMasterOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openLoanMasterOrder-20170524-15435",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openLoanMasterOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"takeGoldenOrder-20160124-1333645",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGSaleOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"takeGSaleOrder-20160524-1333768",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_publishOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_publishOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"publishOrder-20160124-1333654",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_publishOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openMachingOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openMachingOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMachingOrder-20170125-1213",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_openMachingOrder */


    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			}
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_finalizePageJs */



