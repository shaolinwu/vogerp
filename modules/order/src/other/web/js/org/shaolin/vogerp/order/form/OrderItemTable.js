/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_OrderItemTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
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
        ,subComponents: [prefix + "parentIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,itemTable,fieldPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_OrderItemTable */
        /* Construct_LAST:org_shaolin_vogerp_order_form_OrderItemTable */
    };

    Form.openProductPriceSelector = org_shaolin_vogerp_order_form_OrderItemTable_openProductPriceSelector;

    Form.selectedProduct = org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct;

    Form.deleteItem = org_shaolin_vogerp_order_form_OrderItemTable_deleteItem;

    Form.invokeDynamicFunction = org_shaolin_vogerp_order_form_OrderItemTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.order.form.OrderItemTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_OrderItemTable */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_OrderItemTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable_openProductPriceSelector(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable_openProductPriceSelector */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductPriceSelector-201601091120",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable_openProductPriceSelector */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedProduct0_49169030",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_839670735",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable_invokeDynamicFunction */



