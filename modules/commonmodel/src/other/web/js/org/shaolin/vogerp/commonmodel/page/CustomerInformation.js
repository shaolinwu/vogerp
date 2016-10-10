/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_CustomerInformation(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "certifyForm",prefix + "memberForm",prefix + "personalInfoForm",prefix + "personalAccountForm",prefix + "contractForm",prefix + "addressForm"]
    });
    var certifyForm = new org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo({"prefix":prefix + "certifyForm."});

    var memberForm = new org_shaolin_vogerp_commonmodel_form_AssignedMember({"prefix":prefix + "memberForm."});

    var personalInfoForm = new org_shaolin_vogerp_commonmodel_form_PersonalInfo({"prefix":prefix + "personalInfoForm."});

    var personalAccountForm = new org_shaolin_vogerp_commonmodel_form_PersonalAccount({"prefix":prefix + "personalAccountForm."});

    var contractForm = new org_shaolin_vogerp_commonmodel_form_ContactInfoTable({"prefix":prefix + "contractForm."});

    var addressForm = new org_shaolin_vogerp_commonmodel_form_AddressInfoTable({"prefix":prefix + "addressForm."});


    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.certifyForm=certifyForm;

    Form.memberForm=memberForm;

    Form.personalInfoForm=personalInfoForm;

    Form.personalAccountForm=personalAccountForm;

    Form.contractForm=contractForm;

    Form.addressForm=addressForm;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_CustomerInformation */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_CustomerInformation */
    };

    Form.createUser = org_shaolin_vogerp_commonmodel_page_CustomerInformation_createUser;

    Form.openUserDetail = org_shaolin_vogerp_commonmodel_page_CustomerInformation_openUserDetail;

    Form.deleteUser = org_shaolin_vogerp_commonmodel_page_CustomerInformation_deleteUser;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_CustomerInformation_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_CustomerInformation_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.CustomerInformation";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_CustomerInformation */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_CustomerInformation */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerInformation_createUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerInformation_createUser */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpersonalInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerInformation_createUser */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerInformation_openUserDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerInformation_openUserDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpersonalInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerInformation_openUserDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerInformation_deleteUser(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerInformation_deleteUser */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerInformation_deleteUser */


    function org_shaolin_vogerp_commonmodel_page_CustomerInformation_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerInformation_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerInformation_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_CustomerInformation_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerInformation_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerInformation_finalizePageJs */



