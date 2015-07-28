/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_OrderItemTable1(json)
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

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var productTreeUI = new org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector({"prefix":prefix + "productTreeUI."});

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
        ,subComponents: [prefix + "parentIdUI",prefix + "productTreeUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,itemTable,okbtn,cancelbtn,productTreeUI,fieldPanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.productTreeUI=productTreeUI;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_OrderItemTable1 */
        /* Construct_LAST:org_shaolin_vogerp_order_form_OrderItemTable1 */
    };

    Form.selectedProduct = org_shaolin_vogerp_order_form_OrderItemTable1_selectedProduct;

    Form.selectedProduct0 = org_shaolin_vogerp_order_form_OrderItemTable1_selectedProduct0;

    Form.deleteItem = org_shaolin_vogerp_order_form_OrderItemTable1_deleteItem;

    Form.Save = org_shaolin_vogerp_order_form_OrderItemTable1_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_OrderItemTable1_Cancel;

    Form.__entityName="org.shaolin.vogerp.order.form.OrderItemTable1";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_OrderItemTable1 */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_OrderItemTable1 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable1_selectedProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable1_selectedProduct */

		{
		var othis = this;
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
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable1_selectedProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable1_selectedProduct0(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable1_selectedProduct0 */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedProduct0_49169030",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable1_selectedProduct0 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable1_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable1_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_839670735",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable1_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable1_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable1_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveItem_-1847648336",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable1_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderItemTable1_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderItemTable1_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1491989577",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderItemTable1_Cancel */



