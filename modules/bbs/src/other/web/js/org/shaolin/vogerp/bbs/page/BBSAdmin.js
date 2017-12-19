/* null */
/* auto generated constructor */
function org_shaolin_vogerp_bbs_page_BBSAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "questionListPanel",prefix + "complainingListPanel"]
    });
    var questionListTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "questionListTable"]
    });

    var questionListPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "questionListPanel"]
        ,items: []
        ,subComponents: [prefix + "questionListTable"]
    });
    var complainingTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "complainingTable"]
    });

    var complainingListPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "complainingListPanel"]
        ,items: []
        ,subComponents: [prefix + "complainingTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.questionListPanel=questionListPanel;

    Form.questionListTable=questionListTable;

    Form.complainingListPanel=complainingListPanel;

    Form.complainingTable=complainingTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_bbs_page_BBSAdmin */
        /* Construct_LAST:org_shaolin_vogerp_bbs_page_BBSAdmin */
    };

    Form.openQuestionTopic = org_shaolin_vogerp_bbs_page_BBSAdmin_openQuestionTopic;

    Form.openComplainingTopic = org_shaolin_vogerp_bbs_page_BBSAdmin_openComplainingTopic;

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
    function org_shaolin_vogerp_bbs_page_BBSAdmin_openQuestionTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSAdmin_openQuestionTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openQuestionTopic-20171218-1142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSAdmin_openQuestionTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSAdmin_openComplainingTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSAdmin_openComplainingTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openComplainingTopic-20171218-1142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSAdmin_openComplainingTopic */


    function org_shaolin_vogerp_bbs_page_BBSAdmin_initPageJs(){/* Gen_First:org_shaolin_vogerp_bbs_page_BBSAdmin_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSAdmin_initPageJs */


    function org_shaolin_vogerp_bbs_page_BBSAdmin_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_bbs_page_BBSAdmin_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSAdmin_finalizePageJs */



