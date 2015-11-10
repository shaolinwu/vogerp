/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_CustomerManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var customerInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "customerInfoTable"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: ["customerInfoPanel",""]
    });
    var customerInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "customerInfoTable"]
    });

    var customerInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "customerInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "customerInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [customerInfoTable,functionsTab]
    });

    Form.customerInfoTable=customerInfoTable;

    Form.functionsTab=functionsTab;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_CustomerManagement */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_CustomerManagement */
    };

    Form.createCustomer = org_shaolin_vogerp_commonmodel_page_CustomerManagement_createCustomer;

    Form.openCustomerDetail = org_shaolin_vogerp_commonmodel_page_CustomerManagement_openCustomerDetail;

    Form.openAddresses = org_shaolin_vogerp_commonmodel_page_CustomerManagement_openAddresses;

    Form.openContacts = org_shaolin_vogerp_commonmodel_page_CustomerManagement_openContacts;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_CustomerManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_CustomerManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.CustomerManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_CustomerManagement */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_CustomerManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerManagement_createCustomer(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement_createCustomer */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCustomer-201507132249",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement_createCustomer */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerManagement_openCustomerDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement_openCustomerDetail */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openCustomerDetail-201507132246",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement_openCustomerDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerManagement_openAddresses(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement_openAddresses */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openAddresses-201507132240",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement_openAddresses */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerManagement_openContacts(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement_openContacts */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openContacts-201507132240",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement_openContacts */


    function org_shaolin_vogerp_commonmodel_page_CustomerManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_CustomerManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement_finalizePageJs */



