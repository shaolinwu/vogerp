/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment(json)
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

    var shipmentIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "shipmentIdUILabel"]
    });

    var shipmentIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "shipmentIdUI"]
    });

    var shipmentItemIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "shipmentItemIdUILabel"]
    });

    var shipmentItemIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "shipmentItemIdUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "invoiceIdUILabel",prefix + "invoiceIdUI",prefix + "invoiceItemIdUILabel",prefix + "invoiceItemIdUI",prefix + "shipmentIdUILabel",prefix + "shipmentIdUI",prefix + "shipmentItemIdUILabel",prefix + "shipmentItemIdUI",prefix + "amountUILabel",prefix + "amountUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,invoiceIdUILabel,invoiceIdUI,invoiceItemIdUILabel,invoiceItemIdUI,shipmentIdUILabel,shipmentIdUI,shipmentItemIdUILabel,shipmentItemIdUI,amountUILabel,amountUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.invoiceIdUILabel=invoiceIdUILabel;

    Form.invoiceIdUI=invoiceIdUI;

    Form.invoiceItemIdUILabel=invoiceItemIdUILabel;

    Form.invoiceItemIdUI=invoiceItemIdUI;

    Form.shipmentIdUILabel=shipmentIdUILabel;

    Form.shipmentIdUI=shipmentIdUI;

    Form.shipmentItemIdUILabel=shipmentItemIdUILabel;

    Form.shipmentItemIdUI=shipmentItemIdUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment_Cancel;

    Form.__entityName="org.shaolin.vogerp.accounting.form.InvoiceItemWithShipment";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail876728565",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail239057424",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InvoiceItemWithShipment_Cancel */



