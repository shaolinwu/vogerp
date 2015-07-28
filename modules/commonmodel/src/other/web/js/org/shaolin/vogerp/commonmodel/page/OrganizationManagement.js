/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_OrganizationManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var organizationInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "organizationInfoTable"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [organizationInfoTable,functionsTab]
    });

    Form.organizationInfoTable=organizationInfoTable;

    Form.functionsTab=functionsTab;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement */
    };

    Form.createOrg = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createOrg;

    Form.openOrgDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgDetail;

    Form.openOrgTreeDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgTreeDetail;

    Form.deleteOrg = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deleteOrg;

    Form.createPartyRelation = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createPartyRelation;

    Form.openPartyRelationDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openPartyRelationDetail;

    Form.deletePartyRelation = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deletePartyRelation;

    Form.openPersonalAccount = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openPersonalAccount;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.OrganizationManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createOrg(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createOrg */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankOrgInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgDetail */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showOrgInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgTreeDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgTreeDetail */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showOrgTreeInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgTreeDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deleteOrg(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deleteOrg */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deleteOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createPartyRelation(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createPartyRelation */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankPartyInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createPartyRelation */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openPartyRelationDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openPartyRelationDetail */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showPartyInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openPartyRelationDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deletePartyRelation(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deletePartyRelation */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deletePartyRelation */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openPersonalAccount(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openPersonalAccount */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPersonalAccount234324",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openPersonalAccount */


    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_finalizePageJs */



