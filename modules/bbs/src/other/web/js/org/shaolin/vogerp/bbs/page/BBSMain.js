/* null */
/* auto generated constructor */
function org_shaolin_vogerp_bbs_page_BBSMain(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "mytopicPanel",prefix + "machiningPanel",prefix + "custServicePanel"]
    });
    var mytopicTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "mytopicTable"]
    });

    var mytopicPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "mytopicPanel"]
        ,items: []
        ,subComponents: [prefix + "mytopicTable"]
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

    Form.mytopicPanel=mytopicPanel;

    Form.mytopicTable=mytopicTable;

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

    Form.createSelfMachiningTopic = org_shaolin_vogerp_bbs_page_BBSMain_createSelfMachiningTopic;

    Form.openMachingTopic = org_shaolin_vogerp_bbs_page_BBSMain_openMachingTopic;

    Form.openSelfMachingTopic = org_shaolin_vogerp_bbs_page_BBSMain_openSelfMachingTopic;

    Form.deleteMachingTopic = org_shaolin_vogerp_bbs_page_BBSMain_deleteMachingTopic;

    Form.deleteSelfMachingTopic = org_shaolin_vogerp_bbs_page_BBSMain_deleteSelfMachingTopic;

    Form.createCustServiceTopic = org_shaolin_vogerp_bbs_page_BBSMain_createCustServiceTopic;

    Form.openCustServiceTopic = org_shaolin_vogerp_bbs_page_BBSMain_openCustServiceTopic;

    Form.deleteCustServiceTopic = org_shaolin_vogerp_bbs_page_BBSMain_deleteCustServiceTopic;

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
    function org_shaolin_vogerp_bbs_page_BBSMain_createSelfMachiningTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_createSelfMachiningTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createSelfMachiningTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_createSelfMachiningTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_openMachingTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_openMachingTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMachingTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_openMachingTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_openSelfMachingTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_openSelfMachingTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSelfMachingTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_openSelfMachingTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_deleteMachingTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_deleteMachingTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteMachingTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_deleteMachingTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_deleteSelfMachingTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_deleteSelfMachingTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteSelfMachingTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_deleteSelfMachingTopic */


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


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_page_BBSMain_deleteCustServiceTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_deleteCustServiceTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteCustServiceTopic-20170618-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_deleteCustServiceTopic */


    function org_shaolin_vogerp_bbs_page_BBSMain_initPageJs(){/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_initPageJs */


    function org_shaolin_vogerp_bbs_page_BBSMain_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_bbs_page_BBSMain_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_bbs_page_BBSMain_finalizePageJs */



