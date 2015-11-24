/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_InvoiceItem(json)
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

    var productIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productIdUILabel"]
    });

    var productIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "productIdUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
    });

    var unitPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "unitPriceUILabel"]
    });

    var unitPriceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "unitPriceUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var isAdjustedUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isAdjustedUILabel"]
    });

    var isAdjustedUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isAdjustedUI"]
    });

    var statementUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "statementUILabel"]
    });

    var statementUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "statementUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "invoiceIdUILabel",prefix + "invoiceIdUI",prefix + "productIdUILabel",prefix + "productIdUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "unitPriceUILabel",prefix + "unitPriceUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "isAdjustedUILabel",prefix + "isAdjustedUI",prefix + "statementUILabel",prefix + "statementUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,invoiceIdUILabel,invoiceIdUI,productIdUILabel,productIdUI,amountUILabel,amountUI,unitPriceUILabel,unitPriceUI,typeUILabel,typeUI,isAdjustedUILabel,isAdjustedUI,statementUILabel,statementUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.invoiceIdUILabel=invoiceIdUILabel;

    Form.invoiceIdUI=invoiceIdUI;

    Form.productIdUILabel=productIdUILabel;

    Form.productIdUI=productIdUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.unitPriceUILabel=unitPriceUILabel;

    Form.unitPriceUI=unitPriceUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.isAdjustedUILabel=isAdjustedUILabel;

    Form.isAdjustedUI=isAdjustedUI;

    Form.statementUILabel=statementUILabel;

    Form.statementUI=statementUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.invoiceIdUILabel=invoiceIdUILabel;

    Form.invoiceIdUI=invoiceIdUI;

    Form.productIdUILabel=productIdUILabel;

    Form.productIdUI=productIdUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.unitPriceUILabel=unitPriceUILabel;

    Form.unitPriceUI=unitPriceUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.isAdjustedUILabel=isAdjustedUILabel;

    Form.isAdjustedUI=isAdjustedUI;

    Form.statementUILabel=statementUILabel;

    Form.statementUI=statementUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_InvoiceItem */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_InvoiceItem */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_InvoiceItem_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_InvoiceItem_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_InvoiceItem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.InvoiceItem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_InvoiceItem */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_InvoiceItem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InvoiceItem_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InvoiceItem_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150904-084552",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InvoiceItem_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InvoiceItem_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InvoiceItem_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150904-084552",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InvoiceItem_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_InvoiceItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_InvoiceItem_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_InvoiceItem_invokeDynamicFunction */



