/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_OrderHierarchy(json)
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

    var orderIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderIdUILabel"]
    });

    var orderIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderIdUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var createDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUILabel"]
    });

    var createDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "createDateUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "parentIdUILabel",prefix + "parentIdUI",prefix + "orderIdUILabel",prefix + "orderIdUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "createDateUILabel",prefix + "createDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,parentIdUILabel,parentIdUI,orderIdUILabel,orderIdUI,typeUILabel,typeUI,createDateUILabel,createDateUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.parentIdUILabel=parentIdUILabel;

    Form.parentIdUI=parentIdUI;

    Form.orderIdUILabel=orderIdUILabel;

    Form.orderIdUI=orderIdUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_OrderHierarchy */
        /* Construct_LAST:org_shaolin_vogerp_order_form_OrderHierarchy */
    };

    Form.Save = org_shaolin_vogerp_order_form_OrderHierarchy_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_OrderHierarchy_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_order_form_OrderHierarchy_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.order.form.OrderHierarchy";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_OrderHierarchy */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_OrderHierarchy */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderHierarchy_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderHierarchy_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1544297028",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderHierarchy_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderHierarchy_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderHierarchy_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1940077719",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderHierarchy_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderHierarchy_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderHierarchy_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderHierarchy_invokeDynamicFunction */



