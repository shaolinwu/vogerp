/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var invoiceIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "invoiceIdUILabel"]
    });

    var invoiceIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "invoiceIdUI"]
    });

    var invoiceItemIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "invoiceItemIdUILabel"]
    });

    var invoiceItemIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "invoiceItemIdUI"]
    });

    var invoiceAmountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "invoiceAmountUILabel"]
    });

    var invoiceAmountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "invoiceAmountUI"]
    });

    var orderIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderIdUILabel"]
    });

    var orderIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderIdUI"]
    });

    var orderItemIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderItemIdUILabel"]
    });

    var orderItemIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderItemIdUI"]
    });

    var orderAmountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderAmountUILabel"]
    });

    var orderAmountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderAmountUI"]
    });

    var orderUnitPricetUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderUnitPricetUILabel"]
    });

    var orderUnitPricetUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderUnitPricetUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "invoiceIdUILabel",prefix + "invoiceIdUI",prefix + "invoiceItemIdUILabel",prefix + "invoiceItemIdUI",prefix + "invoiceAmountUILabel",prefix + "invoiceAmountUI",prefix + "orderIdUILabel",prefix + "orderIdUI",prefix + "orderItemIdUILabel",prefix + "orderItemIdUI",prefix + "orderAmountUILabel",prefix + "orderAmountUI",prefix + "orderUnitPricetUILabel",prefix + "orderUnitPricetUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,invoiceIdUILabel,invoiceIdUI,invoiceItemIdUILabel,invoiceItemIdUI,invoiceAmountUILabel,invoiceAmountUI,orderIdUILabel,orderIdUI,orderItemIdUILabel,orderItemIdUI,orderAmountUILabel,orderAmountUI,orderUnitPricetUILabel,orderUnitPricetUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.invoiceIdUILabel=invoiceIdUILabel;

    Form.invoiceIdUI=invoiceIdUI;

    Form.invoiceItemIdUILabel=invoiceItemIdUILabel;

    Form.invoiceItemIdUI=invoiceItemIdUI;

    Form.invoiceAmountUILabel=invoiceAmountUILabel;

    Form.invoiceAmountUI=invoiceAmountUI;

    Form.orderIdUILabel=orderIdUILabel;

    Form.orderIdUI=orderIdUI;

    Form.orderItemIdUILabel=orderItemIdUILabel;

    Form.orderItemIdUI=orderItemIdUI;

    Form.orderAmountUILabel=orderAmountUILabel;

    Form.orderAmountUI=orderAmountUI;

    Form.orderUnitPricetUILabel=orderUnitPricetUILabel;

    Form.orderUnitPricetUI=orderUnitPricetUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder_Cancel;

    Form.__entityName="org.shaolin.vogerp.accounting.form.InvoiceItemWithOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1319604446",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail219755024",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InvoiceItemWithOrder_Cancel */



