/* null */
/* auto generated constructor */
function org_shaolin_vogerp_bbs_page_BBSMain(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_bbs_page_BBSMain */
        /* Construct_LAST:org_shaolin_vogerp_bbs_page_BBSMain */
    };

    Form.createMachiningTopic = org_shaolin_vogerp_bbs_page_BBSMain_createMachiningTopic;

    Form.openMachingTopic = org_shaolin_vogerp_bbs_page_BBSMain_openMachingTopic;

    Form.createCustServiceTopic = org_shaolin_vogerp_bbs_page_BBSMain_createCustServiceTopic;

    Form.openCustServiceTopic = org_shaolin_vogerp_bbs_page_BBSMain_openCustServiceTopic;

    Form.initPageJs = org_shaolin_vogerp_bbs_page_BBSMain_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_bbs_page_BBSMain_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.bbs.page.BBSMain";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_bbs_page_BBSMain */
/* Other_Func_LAST:org_shaolin_vogerp_bbs_page_BBSMain */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_createMachiningTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_createMachiningTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createMachiningTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_createMachiningTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_openMachingTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_openMachingTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMachingTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_openMachingTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_createCustServiceTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_createCustServiceTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCustServiceTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_createCustServiceTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_openCustServiceTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_openCustServiceTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openCustServiceTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_openCustServiceTopic */


    function org_shaolin_vogerp_bbs_page_BBSMain_initPageJs(){/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_initPageJs */


    function org_shaolin_vogerp_bbs_page_BBSMain_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_finalizePageJs */



