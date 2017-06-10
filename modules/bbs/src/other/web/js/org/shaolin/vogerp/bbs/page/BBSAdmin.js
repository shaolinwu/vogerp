/* null */
/* auto generated constructor */
function org_shaolin_vogerp_bbs_page_BBSAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "machiningPanel",prefix + "custServicePanel"]
    });
    var machiningTopicTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "machiningTopicTable"]
    });

    var machiningPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "machiningPanel"]
        ,items: []
        ,subComponents: [prefix + "machiningTopicTable"]
    });
    var custServiceTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "custServiceTable"]
    });

    var custServicePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "custServicePanel"]
        ,items: []
        ,subComponents: [prefix + "custServiceTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.machiningPanel=machiningPanel;

    Form.machiningTopicTable=machiningTopicTable;

    Form.custServicePanel=custServicePanel;

    Form.custServiceTable=custServiceTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_bbs_page_BBSAdmin */
        /* Construct_LAST:org_shaolin_vogerp_bbs_page_BBSAdmin */
    };

    Form.createTopic = org_shaolin_vogerp_bbs_page_BBSAdmin_createTopic;

    Form.openTopic = org_shaolin_vogerp_bbs_page_BBSAdmin_openTopic;

    Form.initPageJs = org_shaolin_vogerp_bbs_page_BBSAdmin_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_bbs_page_BBSAdmin_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.bbs.page.BBSAdmin";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_bbs_page_BBSAdmin */
/* Other_Func_LAST:org_shaolin_vogerp_bbs_page_BBSAdmin */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSAdmin_createTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSAdmin_createTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSAdmin_createTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSAdmin_openTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSAdmin_openTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSAdmin_openTopic */


    function org_shaolin_vogerp_bbs_page_BBSAdmin_initPageJs(){/* Gen_First:org_shaolin_vogerp_bbs_page_BBSAdmin_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSAdmin_initPageJs */


    function org_shaolin_vogerp_bbs_page_BBSAdmin_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_bbs_page_BBSAdmin_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSAdmin_finalizePageJs */



