/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_PurchaseOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var statusUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "statusUILabel"]
    });

    var statusUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "statusUI"]
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

    var orderItemTable = new org_shaolin_vogerp_order_form_PurchaseItemTable({"prefix":prefix + "orderItemTable."});

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
        ,subComponents: [prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "statusUILabel",prefix + "statusUI",prefix + "deliveryDateUILabel",prefix + "deliveryDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [descriptionUILabel,descriptionUI,statusUILabel,statusUI,deliveryDateUILabel,deliveryDateUI,okbtn,cancelbtn,orderItemTable,fieldPanel,orderItemInfo,actionPanel]
    });

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.deliveryDateUILabel=deliveryDateUILabel;

    Form.deliveryDateUI=deliveryDateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.orderItemTable=orderItemTable;

    Form.fieldPanel=fieldPanel;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.deliveryDateUILabel=deliveryDateUILabel;

    Form.deliveryDateUI=deliveryDateUI;

    Form.orderItemInfo=orderItemInfo;

    Form.orderItemTable=orderItemTable;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_PurchaseOrder */
        /* Construct_LAST:org_shaolin_vogerp_order_form_PurchaseOrder */
    };

    Form.Save = org_shaolin_vogerp_order_form_PurchaseOrder_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_PurchaseOrder_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_order_form_PurchaseOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.order.form.PurchaseOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_PurchaseOrder */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_PurchaseOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseOrder_Save */

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

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1091751003",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseOrder_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1732443312",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_PurchaseOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_PurchaseOrder_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_PurchaseOrder_invokeDynamicFunction */



