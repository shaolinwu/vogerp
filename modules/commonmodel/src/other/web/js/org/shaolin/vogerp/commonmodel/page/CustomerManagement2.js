/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_CustomerManagement2(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var customerInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "customerInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [customerInfoTable]
    });

    Form.customerInfoTable=customerInfoTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_CustomerManagement2 */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_CustomerManagement2 */
    };

    Form.createCustomer = org_shaolin_vogerp_commonmodel_page_CustomerManagement2_createCustomer;

    Form.openCustomerDetail = org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openCustomerDetail;

    Form.openAddresses = org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openAddresses;

    Form.openContacts = org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openContacts;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_CustomerManagement2_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_CustomerManagement2_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.CustomerManagement2";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_CustomerManagement2 */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_CustomerManagement2 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerManagement2_createCustomer(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_createCustomer */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCustomer-201507132249",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_createCustomer */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openCustomerDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openCustomerDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openCustomerDetail-201507132246",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openCustomerDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openAddresses(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openAddresses */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openAddresses-201507132240",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openAddresses */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openContacts(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openContacts */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openContacts-201507132240",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_openContacts */


    function org_shaolin_vogerp_commonmodel_page_CustomerManagement2_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_CustomerManagement2_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_CustomerManagement2_finalizePageJs */



