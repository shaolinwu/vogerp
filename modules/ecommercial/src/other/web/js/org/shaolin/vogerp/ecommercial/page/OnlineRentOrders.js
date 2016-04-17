/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OnlineRentOrders(json)
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

    var searchBar = new org_shaolin_vogerp_ecommercial_form_SearchBar({"prefix":prefix + "searchBar."});

    var goldenOrderInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "goldenOrderInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "goldenOrderTable"]
    });

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
        ,items: [defaultAction,goldenOrderTable,searchBar,searchConditionPanel,goldenOrderInfoPanel]
    });

    Form.defaultAction=defaultAction;

    Form.goldenOrderTable=goldenOrderTable;

    Form.searchBar=searchBar;

    Form.searchConditionPanel=searchConditionPanel;

    Form.searchBar=searchBar;

    Form.goldenOrderInfoPanel=goldenOrderInfoPanel;

    Form.goldenOrderTable=goldenOrderTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders */
    };

    Form.takeGoldenOrder = org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_takeGoldenOrder;

    Form.publishOrder = org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_publishOrder;

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_finalizePageJs;

    Form.toGoldenOrder_OutFunctionName = org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_toGoldenOrder_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.OnlineRentOrders";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_takeGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_takeGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"takeGoldenOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_takeGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_publishOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_publishOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"publishOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_publishOrder */


    function org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_finalizePageJs */


    function org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_toGoldenOrder_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_toGoldenOrder_OutFunctionName */
        var constraint_result = true;
        var myForm;
        if (this.formName != undefined)
        {
            myForm = document.forms[this.formName];
        }
        else
        {
            var p = this.Form.parentNode;
            while(p.tagName != "FORM")
                p = p.parentNode;
            myForm = p;//document.forms[0];
        }

        var UIEntity = this;

        constraint_result = this.Form.validate();
{
            }        
        myForm._outname.value = "toGoldenOrder";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineRentOrders_toGoldenOrder_OutFunctionName */


