/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_SaleOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var discountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "discountUILabel"]
    });

    var discountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "discountUI"]
    });

    var statusUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "statusUILabel"]
    });

    var statusUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "statusUI"]
    });

    var itemsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "itemsUILabel"]
    });

    var itemsUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "itemsUI"]
    });

    var customerTreeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "customerTreeUILabel"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var deliveryDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "deliveryDateUILabel"]
    });

    var deliveryDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "deliveryDateUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var customerTreeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo({"prefix":prefix + "customerTreeUI."});

    var orderItemTable = new org_shaolin_vogerp_order_form_OrderItemTable({"prefix":prefix + "orderItemTable."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var orderItemInfo = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "orderItemInfo"]
        ,items: []
        ,subComponents: [prefix + "orderItemTable"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "discountUILabel",prefix + "discountUI",prefix + "statusUILabel",prefix + "statusUI",prefix + "itemsUILabel",prefix + "itemsUI",prefix + "customerTreeUILabel",prefix + "customerTreeUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "deliveryDateUILabel",prefix + "deliveryDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,serialNumberUILabel,serialNumberUI,discountUILabel,discountUI,statusUILabel,statusUI,itemsUILabel,itemsUI,customerTreeUILabel,descriptionUILabel,descriptionUI,deliveryDateUILabel,deliveryDateUI,okbtn,cancelbtn,customerTreeUI,orderItemTable,fieldPanel,orderItemInfo,actionPanel]
    });

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.discountUILabel=discountUILabel;

    Form.discountUI=discountUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.itemsUILabel=itemsUILabel;

    Form.itemsUI=itemsUI;

    Form.customerTreeUILabel=customerTreeUILabel;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.deliveryDateUILabel=deliveryDateUILabel;

    Form.deliveryDateUI=deliveryDateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.customerTreeUI=customerTreeUI;

    Form.orderItemTable=orderItemTable;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.discountUILabel=discountUILabel;

    Form.discountUI=discountUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.itemsUILabel=itemsUILabel;

    Form.itemsUI=itemsUI;

    Form.customerTreeUILabel=customerTreeUILabel;

    Form.customerTreeUI=customerTreeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.deliveryDateUILabel=deliveryDateUILabel;

    Form.deliveryDateUI=deliveryDateUI;

    Form.orderItemInfo=orderItemInfo;

    Form.orderItemTable=orderItemTable;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_SaleOrder */
        /* Construct_LAST:org_shaolin_vogerp_order_form_SaleOrder */
    };

    Form.Save = org_shaolin_vogerp_order_form_SaleOrder_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_SaleOrder_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_order_form_SaleOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.order.form.SaleOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_SaleOrder */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_SaleOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_SaleOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_SaleOrder_Save */

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        {
            this.orderItemTable.itemTable.syncBodyDataToServer();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail688493913",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_SaleOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_SaleOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_SaleOrder_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1240797585",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_SaleOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_SaleOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_SaleOrder_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_SaleOrder_invokeDynamicFunction */



