/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_PartyManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var personalInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "personalInfoTable"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [personalInfoTable,functionsTab]
    });

    Form.personalInfoTable=personalInfoTable;

    Form.functionsTab=functionsTab;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_PartyManagement */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_PartyManagement */
    };

    Form.createUser = org_shaolin_vogerp_commonmodel_page_PartyManagement_createUser;

    Form.openUserDetail = org_shaolin_vogerp_commonmodel_page_PartyManagement_openUserDetail;

    Form.deleteUser = org_shaolin_vogerp_commonmodel_page_PartyManagement_deleteUser;

    Form.deleteOrg = org_shaolin_vogerp_commonmodel_page_PartyManagement_deleteOrg;

    Form.createPartyRelation = org_shaolin_vogerp_commonmodel_page_PartyManagement_createPartyRelation;

    Form.openPartyRelationDetail = org_shaolin_vogerp_commonmodel_page_PartyManagement_openPartyRelationDetail;

    Form.deletePartyRelation = org_shaolin_vogerp_commonmodel_page_PartyManagement_deletePartyRelation;

    Form.openPersonalAccount = org_shaolin_vogerp_commonmodel_page_PartyManagement_openPersonalAccount;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_PartyManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_PartyManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.PartyManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_PartyManagement */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_PartyManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_PartyManagement_createUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_createUser */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpersonalInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_createUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_PartyManagement_openUserDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_openUserDetail */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpersonalInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_openUserDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_PartyManagement_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_deleteUser */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_deleteUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_PartyManagement_deleteOrg(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_deleteOrg */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_deleteOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_PartyManagement_createPartyRelation(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_createPartyRelation */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankPartyInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_createPartyRelation */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_PartyManagement_openPartyRelationDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_openPartyRelationDetail */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showPartyInfoPanel",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_openPartyRelationDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_PartyManagement_deletePartyRelation(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_deletePartyRelation */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_deletePartyRelation */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_PartyManagement_openPersonalAccount(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_openPersonalAccount */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPersonalAccount234324",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_openPersonalAccount */


    function org_shaolin_vogerp_commonmodel_page_PartyManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_PartyManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_PartyManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_PartyManagement_finalizePageJs */



