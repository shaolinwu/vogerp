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

    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "productTypeUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,productTypeUI,itemTable,fieldPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.productTypeUI=productTypeUI;

    Form.itemTable=itemTable;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.productTypeUI=productTypeUI;

    Form.itemTable=itemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_PurchaseItemTable */
        /* Construct_LAST:org_shaolin_vogerp_order_form_PurchaseItemTable */
    };

    Form.addItem = org_shaolin_vogerp_order_form_PurchaseItemTable_addItem;

    Form.deleteItem = org_shaolin_vogerp_order_form_PurchaseItemTable_deleteItem;

    Form.openProductPriceSelector = org_shaolin_vogerp_order_form_PurchaseItemTable_openProductPriceSelector;

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
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedProduct0_49169030",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_addItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_839670735",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_openProductPriceSelector(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_openProductPriceSelector */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductPriceSelector-201601091120",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_openProductPriceSelector */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_SaveSelectedTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_SaveSelectedTemplate */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SaveSelectedTemplate-201504121132",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_SaveSelectedTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseItemTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseItemTable_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseItemTable_invokeDynamicFunction */



