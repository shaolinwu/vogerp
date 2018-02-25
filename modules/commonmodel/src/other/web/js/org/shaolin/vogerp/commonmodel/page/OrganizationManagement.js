/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_OrganizationManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "orgVerificationPanel",prefix + "organizationInfoPanel",prefix + "indiviualInfoPanel",prefix + "memberServiceInfoPanel"]
    });
    var orgVerificationTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "orgVerificationTable"]
    });

    var orgVerificationPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "orgVerificationPanel"]
        ,items: []
        ,subComponents: [prefix + "orgVerificationTable"]
    });
    var organizationInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "organizationInfoTable"]
    });

    var organizationInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "organizationInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "organizationInfoTable"]
    });
    var indiviualInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "indiviualInfoTable"]
    });

    var indiviualInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "indiviualInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "indiviualInfoTable"]
    });
    var memberServiceTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "memberServiceTable"]
    });

    var memberServiceInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "memberServiceInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "memberServiceTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.orgVerificationPanel=orgVerificationPanel;

    Form.orgVerificationTable=orgVerificationTable;

    Form.organizationInfoPanel=organizationInfoPanel;

    Form.organizationInfoTable=organizationInfoTable;

    Form.indiviualInfoPanel=indiviualInfoPanel;

    Form.indiviualInfoTable=indiviualInfoTable;

    Form.memberServiceInfoPanel=memberServiceInfoPanel;

    Form.memberServiceTable=memberServiceTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement */
    };

    Form.createOrg = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createOrg;

    Form.openOrgDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgDetail;

    Form.verifyAccount = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_verifyAccount;

    Form.openOrgTreeDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgTreeDetail;

    Form.createUser = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createUser;

    Form.openUserDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openUserDetail;

    Form.deleteUser = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deleteUser;

    Form.assignRoles = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_assignRoles;

    Form.assignAccount = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_assignAccount;

    Form.refreshMemeberCache = org_shaolin_vogerp_commonmodel_page_OrganizationManagement_refreshMemeberCache;

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
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankOrgInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showOrgInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_verifyAccount(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_verifyAccount */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifyAccount-20171210-1222",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_verifyAccount */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgTreeDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgTreeDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showOrgTreeInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openOrgTreeDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createUser */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createUser-20160728-2343",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_createUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openUserDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openUserDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openUserDetail-20160728-2343",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_openUserDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deleteUser */
        var o = this;
        var UIEntity = this;

		         {
		          var o = this;
		          new UIMaster.ui.dialog({
		              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
		              message:'Are you sure delete this employee?',
		              messageType:UIMaster.ui.dialog.Information,
		              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
		              title:'',
		              height:150,
		              width:300,
		              handler: function() {
		                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteUser-2015-08140714",UIMaster.getValue(eventsource),o.__entityName);
		              }
		          }).open();
		          return;
		         }
		         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteUser-2015-08140714",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_deleteUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_assignRoles(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_assignRoles */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"assignRoles-2015-08140714",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_assignRoles */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_assignAccount(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_assignAccount */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"assignAccount-20160718-2342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_assignAccount */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_refreshMemeberCache(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_refreshMemeberCache */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refreshMemeberCache-20160728-2343",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_refreshMemeberCache */


    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement_finalizePageJs */



