/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_PurchaseItemTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var productTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productTypeUI"]
    });

    var templateIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "templateIdUI"]
    });

    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
        ,editable: true
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "productTypeUI",prefix + "templateIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,productTypeUI,templateIdUI,itemTable,fieldPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.productTypeUI=productTypeUI;

    Form.templateIdUI=templateIdUI;

    Form.itemTable=itemTable;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.productTypeUI=productTypeUI;

    Form.templateIdUI=templateIdUI;

    Form.itemTable=itemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_PurchaseItemTable */
        /* Construct_LAST:org_shaolin_vogerp_order_form_PurchaseItemTable */
    };

    Form.addItem = org_shaolin_vogerp_order_form_PurchaseItemTable_addItem;

    Form.deleteItem = org_shaolin_vogerp_order_form_PurchaseItemTable_deleteItem;

    Form.openProductTempSelector = org_shaolin_vogerp_order_form_PurchaseItemTable_openProductTempSelector;

    Form.SaveSelectedTemplate = org_shaolin_vogerp_order_form_PurchaseItemTable_SaveSelectedTemplate;

    Form.invokeDynamicFunction = org_shaolin_vogerp_order_form_PurchaseItemTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.order.form.PurchaseItemTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_PurchaseItemTable */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_PurchaseItemTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_addItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_addItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedProduct0_49169030",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_addItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_839670735",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_openProductTempSelector(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_openProductTempSelector */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductTempSelector-201601091120",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_openProductTempSelector */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_SaveSelectedTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_SaveSelectedTemplate */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SaveSelectedTemplate-201504121132",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_SaveSelectedTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_invokeDynamicFunction */



