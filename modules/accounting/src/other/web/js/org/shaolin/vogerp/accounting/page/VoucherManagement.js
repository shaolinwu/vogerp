/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_page_VoucherManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "VoucherInfoPanel",prefix + "PayVoucherInfoPanel"]
    });
    var voucherTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "voucherTable"]
    });

    var VoucherInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "VoucherInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "voucherTable"]
    });
    var payVoucherTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "payVoucherTable"]
    });

    var PayVoucherInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "PayVoucherInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "payVoucherTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.VoucherInfoPanel=VoucherInfoPanel;

    Form.voucherTable=voucherTable;

    Form.PayVoucherInfoPanel=PayVoucherInfoPanel;

    Form.payVoucherTable=payVoucherTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_page_VoucherManagement */
        /* Construct_LAST:org_shaolin_vogerp_accounting_page_VoucherManagement */
    };

    Form.createVoucher = org_shaolin_vogerp_accounting_page_VoucherManagement_createVoucher;

    Form.openVoucher = org_shaolin_vogerp_accounting_page_VoucherManagement_openVoucher;

    Form.initPageJs = org_shaolin_vogerp_accounting_page_VoucherManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_accounting_page_VoucherManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.accounting.page.VoucherManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_page_VoucherManagement */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_page_VoucherManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_VoucherManagement_createVoucher(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_VoucherManagement_createVoucher */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createVoucher-20150904-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_VoucherManagement_createVoucher */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_page_VoucherManagement_openVoucher(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_page_VoucherManagement_openVoucher */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openVoucher-20150904-1109",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_page_VoucherManagement_openVoucher */


    function org_shaolin_vogerp_accounting_page_VoucherManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_accounting_page_VoucherManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_accounting_page_VoucherManagement_initPageJs */


    function org_shaolin_vogerp_accounting_page_VoucherManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_accounting_page_VoucherManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_accounting_page_VoucherManagement_finalizePageJs */



