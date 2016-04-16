/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob */
    };

    Form.takeGoldenOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGoldenOrder;

    Form.publishOrder = org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_publishOrder;

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
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGoldenOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGoldenOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"takeGoldenOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_takeGoldenOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_publishOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_publishOrder */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"publishOrder-20160124-1333",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_publishOrder */


    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

            {
               $("#goldenOrderTableActionBar").css("position", "absolute").css("top","70px").css("left",($(window).width()-70)+"px").width(80);
               $(window).scroll(function(event){
                  var winPos = $(window).scrollTop();
                  $("#goldenOrderTableActionBar").css("top", (winPos + 20) + "px");
               });
            }
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_OnlineOrderList_mob_finalizePageJs */



