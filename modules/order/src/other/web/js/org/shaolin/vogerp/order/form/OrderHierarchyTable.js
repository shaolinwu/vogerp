/* null */
/* auto generated constructor */
function org_shaolin_vogerp_order_form_OrderHierarchyTable(json)
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
        ,subComponents: [prefix + "parentIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,itemTable,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_order_form_OrderHierarchyTable */
        /* Construct_LAST:org_shaolin_vogerp_order_form_OrderHierarchyTable */
    };

    Form.createItem = org_shaolin_vogerp_order_form_OrderHierarchyTable_createItem;

    Form.deleteItem = org_shaolin_vogerp_order_form_OrderHierarchyTable_deleteItem;

    Form.Save = org_shaolin_vogerp_order_form_OrderHierarchyTable_Save;

    Form.Cancel = org_shaolin_vogerp_order_form_OrderHierarchyTable_Cancel;

    Form.__entityName="org.shaolin.vogerp.order.form.OrderHierarchyTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_order_form_OrderHierarchyTable */
/* Other_Func_LAST:org_shaolin_vogerp_order_form_OrderHierarchyTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderHierarchyTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderHierarchyTable_createItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_-326589607",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderHierarchyTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderHierarchyTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderHierarchyTable_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_630037609",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderHierarchyTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderHierarchyTable_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderHierarchyTable_Save */

        {
            this.itemTable.syncBodyDataToServer();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveItem_700162879",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderHierarchyTable_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_order_form_OrderHierarchyTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_order_form_OrderHierarchyTable_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1189980661",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_order_form_OrderHierarchyTable_Cancel */



