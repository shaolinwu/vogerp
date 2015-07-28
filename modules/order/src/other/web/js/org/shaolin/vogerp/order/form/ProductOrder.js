/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_ProductOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var parentIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "parentIdUILabel"]
    });

    var parentIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var createDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUILabel"]
    });

    var createDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "createDateUI"]
    });

    var startCreateDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "startCreateDateUILabel"]
    });

    var startCreateDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "startCreateDateUI"]
    });

    var endCreateDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "endCreateDateUILabel"]
    });

    var endCreateDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "endCreateDateUI"]
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

    var customerIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "customerIdUILabel"]
    });

    var customerIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "customerIdUI"]
    });

    var customerUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "customerUILabel"]
    });

    var deliveryInfoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "deliveryInfoUILabel"]
    });

    var purchasedOrderIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "purchasedOrderIdUILabel"]
    });

    var purchasedOrderIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "purchasedOrderIdUI"]
    });

    var supplierIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "supplierIdUILabel"]
    });

    var supplierIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "supplierIdUI"]
    });

    var supplierIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "supplierIdUILabel"]
    });

    var supplierIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "supplierIdUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

// refered ui form[customerUI] is null.// refered ui form[deliveryInfoUI] is null.    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "parentIdUILabel",prefix + "parentIdUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "createDateUILabel",prefix + "createDateUI",prefix + "startCreateDateUILabel",prefix + "startCreateDateUI",prefix + "endCreateDateUILabel",prefix + "endCreateDateUI",prefix + "discountUILabel",prefix + "discountUI",prefix + "statusUILabel",prefix + "statusUI",prefix + "itemsUILabel",prefix + "itemsUI",prefix + "customerIdUILabel",prefix + "customerIdUI",prefix + "customerUILabel",prefix + "customerUI",prefix + "deliveryInfoUILabel",prefix + "deliveryInfoUI",prefix + "purchasedOrderIdUILabel",prefix + "purchasedOrderIdUI",prefix + "supplierIdUILabel",prefix + "supplierIdUI",prefix + "supplierIdUILabel",prefix + "supplierIdUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,parentIdUILabel,parentIdUI,serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,createDateUILabel,createDateUI,startCreateDateUILabel,startCreateDateUI,endCreateDateUILabel,endCreateDateUI,discountUILabel,discountUI,statusUILabel,statusUI,itemsUILabel,itemsUI,customerIdUILabel,customerIdUI,customerUILabel,deliveryInfoUILabel,purchasedOrderIdUILabel,purchasedOrderIdUI,supplierIdUILabel,supplierIdUI,supplierIdUILabel,supplierIdUI,okbtn,cancelbtn,customerUI,deliveryInfoUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.parentIdUILabel=parentIdUILabel;

    Form.parentIdUI=parentIdUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.startCreateDateUILabel=startCreateDateUILabel;

    Form.startCreateDateUI=startCreateDateUI;

    Form.endCreateDateUILabel=endCreateDateUILabel;

    Form.endCreateDateUI=endCreateDateUI;

    Form.discountUILabel=discountUILabel;

    Form.discountUI=discountUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.itemsUILabel=itemsUILabel;

    Form.itemsUI=itemsUI;

    Form.customerIdUILabel=customerIdUILabel;

    Form.customerIdUI=customerIdUI;

    Form.customerUILabel=customerUILabel;

    Form.deliveryInfoUILabel=deliveryInfoUILabel;

    Form.purchasedOrderIdUILabel=purchasedOrderIdUILabel;

    Form.purchasedOrderIdUI=purchasedOrderIdUI;

    Form.supplierIdUILabel=supplierIdUILabel;

    Form.supplierIdUI=supplierIdUI;

    Form.supplierIdUILabel=supplierIdUILabel;

    Form.supplierIdUI=supplierIdUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.customerUI=customerUI;

    Form.deliveryInfoUI=deliveryInfoUI;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_ProductOrder */
        /* Construct_LAST:org_shaolin_vogerp_order_form_ProductOrder */
    };

    Form.Save = org_shaolin_vogerp_order_form_ProductOrder_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_ProductOrder_Cancel;

    Form.__entityName="org.shaolin.vogerp.order.form.ProductOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_ProductOrder */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_ProductOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_ProductOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_ProductOrder_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-960573218",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_ProductOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_ProductOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_ProductOrder_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-639841284",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_ProductOrder_Cancel */



