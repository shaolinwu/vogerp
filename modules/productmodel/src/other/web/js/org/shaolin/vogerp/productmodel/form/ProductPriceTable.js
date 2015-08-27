/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductPriceTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var productIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productIdUI"]
    });

    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
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
        ,subComponents: [prefix + "productIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [productIdUI,itemTable,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.productIdUI=productIdUI;

    Form.itemTable=itemTable;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductPriceTable */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductPriceTable */
    };

    Form.createItem = org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem;

    Form.deleteItem = org_shaolin_vogerp_productmodel_form_ProductPriceTable_deleteItem;

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductPriceTable_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductPriceTable_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductPriceTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductPriceTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductPriceTable */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductPriceTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem-7vq3r4f7",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteConstantItem",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_Save */

        {
            this.itemTable.syncBodyDataToServer();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-7sdg234dd7",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-567092059",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_invokeDynamicFunction */



