/* null */
/* auto generated constructor */
function org_shaolin_vogerp_campaign_page_CampaignManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "campaignPanel"]
    });
    var campaignTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "campaignTable"]
    });

    var campaignPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "campaignPanel"]
        ,items: []
        ,subComponents: [prefix + "campaignTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.campaignPanel=campaignPanel;

    Form.campaignTable=campaignTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_campaign_page_CampaignManagement */
        /* Construct_LAST:org_shaolin_vogerp_campaign_page_CampaignManagement */
    };

    Form.createCampaign = org_shaolin_vogerp_campaign_page_CampaignManagement_createCampaign;

    Form.openCampaign = org_shaolin_vogerp_campaign_page_CampaignManagement_openCampaign;

    Form.disableCampaign = org_shaolin_vogerp_campaign_page_CampaignManagement_disableCampaign;

    Form.initPageJs = org_shaolin_vogerp_campaign_page_CampaignManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_campaign_page_CampaignManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.campaign.page.CampaignManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_campaign_page_CampaignManagement */
/* Other_Func_LAST:org_shaolin_vogerp_campaign_page_CampaignManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_campaign_page_CampaignManagement_createCampaign(eventsource,event) {/* Gen_First:org_shaolin_vogerp_campaign_page_CampaignManagement_createCampaign */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCampaign-20170220-2155",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_campaign_page_CampaignManagement_createCampaign */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_campaign_page_CampaignManagement_openCampaign(eventsource,event) {/* Gen_First:org_shaolin_vogerp_campaign_page_CampaignManagement_openCampaign */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openCampaign-20170220-2155",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_campaign_page_CampaignManagement_openCampaign */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_campaign_page_CampaignManagement_disableCampaign(eventsource,event) {/* Gen_First:org_shaolin_vogerp_campaign_page_CampaignManagement_disableCampaign */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"disableCampaign-20170220-2155",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_campaign_page_CampaignManagement_disableCampaign */


    function org_shaolin_vogerp_campaign_page_CampaignManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_campaign_page_CampaignManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_campaign_page_CampaignManagement_initPageJs */


    function org_shaolin_vogerp_campaign_page_CampaignManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_campaign_page_CampaignManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_campaign_page_CampaignManagement_finalizePageJs */



