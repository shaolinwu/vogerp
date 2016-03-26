/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_DoubleEntryTable(json)
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

    var totalAmountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "totalAmountUILabel"]
    });

    var totalAmountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "totalAmountUI"]
    });

    var totalPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "totalPanel"]
        ,items: []
        ,subComponents: [prefix + "totalAmountUILabel",prefix + "totalAmountUI"]
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
        ,items: [parentIdUI,itemTable,totalAmountUILabel,totalAmountUI,fieldPanel,totalPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.totalAmountUILabel=totalAmountUILabel;

    Form.totalAmountUI=totalAmountUI;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.totalPanel=totalPanel;

    Form.totalAmountUILabel=totalAmountUILabel;

    Form.totalAmountUI=totalAmountUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_DoubleEntryTable */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_DoubleEntryTable */
    };

    Form.createItem = org_shaolin_vogerp_accounting_form_DoubleEntryTable_createItem;

    Form.deleteItem = org_shaolin_vogerp_accounting_form_DoubleEntryTable_deleteItem;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_DoubleEntryTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.DoubleEntryTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_DoubleEntryTable */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_DoubleEntryTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_DoubleEntryTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_DoubleEntryTable_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_20150904-084549",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_DoubleEntryTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_DoubleEntryTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_DoubleEntryTable_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_20150904-084549",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_DoubleEntryTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_DoubleEntryTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_DoubleEntryTable_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_DoubleEntryTable_invokeDynamicFunction */



