/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "organizationInfoPanel",prefix + "organizationTypePanel",prefix + "employeeInfoPanel"]
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
    var organizationTypePanel = new org_shaolin_vogerp_commonmodel_form_CEHierarchy({"prefix":prefix + "organizationTypePanel."});

    var citySelector = new org_shaolin_vogerp_commonmodel_form_CityOnlySelelctor({"prefix":prefix + "citySelector."});

    var employeeInfoTablel = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "employeeInfoTablel"]
    });

    var employeeInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "employeeInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "citySelector",prefix + "employeeInfoTablel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.organizationInfoPanel=organizationInfoPanel;

    Form.organizationInfoTable=organizationInfoTable;

    Form.organizationTypePanel=organizationTypePanel;

    Form.employeeInfoPanel=employeeInfoPanel;

    Form.citySelector=citySelector;

    Form.employeeInfoTablel=employeeInfoTablel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2 */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2 */
    };

    Form.createOrg = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_createOrg;

    Form.openOrgDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openOrgDetail;

    Form.openOrgTreeDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openOrgTreeDetail;

    Form.createUser = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_createUser;

    Form.openUserDetail = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openUserDetail;

    Form.deleteUser = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_deleteUser;

    Form.assignRoles = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_assignRoles;

    Form.assignAccount = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_assignAccount;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.OrganizationManagement2";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2 */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_createOrg(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_createOrg */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankOrgInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_createOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openOrgDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openOrgDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showOrgInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openOrgDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openOrgTreeDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openOrgTreeDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showOrgTreeInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openOrgTreeDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_createUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_createUser */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createUser-20160728-2343",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_createUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openUserDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openUserDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openUserDetail-20160728-2343",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_openUserDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_deleteUser */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_deleteUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_assignRoles(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_assignRoles */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"assignRoles-2015-08140714",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_assignRoles */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_assignAccount(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_assignAccount */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"assignAccount-20160718-2342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_assignAccount */


    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_OrganizationManagement2_finalizePageJs */



