/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_AccountManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "personalInfoPanel"]
    });
    var personalInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "personalInfoTable"]
    });

    var personalInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "personalInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "personalInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.personalInfoPanel=personalInfoPanel;

    Form.personalInfoTable=personalInfoTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_AccountManagement */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_AccountManagement */
    };

    Form.createAccount = org_shaolin_vogerp_commonmodel_page_AccountManagement_createAccount;

    Form.openAccount = org_shaolin_vogerp_commonmodel_page_AccountManagement_openAccount;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_AccountManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_AccountManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.AccountManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_AccountManagement */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_AccountManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_AccountManagement_createAccount(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_AccountManagement_createAccount */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showBlankpersonalInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_AccountManagement_createAccount */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_AccountManagement_openAccount(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_AccountManagement_openAccount */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showpersonalInfoPanel",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_AccountManagement_openAccount */


    function org_shaolin_vogerp_commonmodel_page_AccountManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_AccountManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_AccountManagement_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_AccountManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_AccountManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_AccountManagement_finalizePageJs */



