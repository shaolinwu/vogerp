/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductPriceTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [itemTable,fieldPanel]
    });

    Form.itemTable=itemTable;

    Form.fieldPanel=fieldPanel;

    Form.itemTable=itemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductPriceTable */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductPriceTable */
    };

    Form.createItem = org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem;

    Form.createItem0 = org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem0;

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
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem-201603142210",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem0(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem0 */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem0-201603142211",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_createItem0 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteConstantItem",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_Save */
        var o = this;
        var UIEntity = this;

        {
            this.itemTable.syncBodyDataToServer();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-7sdg234dd7",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-567092059",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPriceTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPriceTable_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPriceTable_invokeDynamicFunction */



