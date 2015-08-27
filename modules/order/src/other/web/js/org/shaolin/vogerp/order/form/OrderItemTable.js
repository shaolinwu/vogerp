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

    var productTreeUI = new org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector({"prefix":prefix + "productTreeUI."});

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "productTreeUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,itemTable,productTreeUI,fieldPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.productTreeUI=productTreeUI;

    Form.fieldPanel=fieldPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_OrderItemTable */
        /* Construct_LAST:org_shaolin_vogerp_order_form_OrderItemTable */
    };

    Form.selectedProduct = org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct;

    Form.selectedProduct0 = org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct0;

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
    function org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct */

		{
		var othis = this;
		$(othis.productTreeUI.Form).css("display","block");
		$(othis.productTreeUI.Form).dialog({
            	title: "Product Price Tree",
            	height: 280,
                width: 500,
                modal: true,
                show: {
                  effect: "blind",
                  duration: 500
                },
                close: function() {
                },
                buttons: [{text:"Ok", click:function(){
                			$(othis.productTreeUI.Form).dialog("close");
                            UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedProduct0_49169030",UIMaster.getValue(eventsource),othis.__entityName);
                		 }}]
            });
		}
		
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct0(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct0 */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedProduct0_49169030",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable_selectedProduct0 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_839670735",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable_invokeDynamicFunction */



