/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable(json)
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

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_createItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_deleteItem;

    Form.Save = org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AppUpdateRecordTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_20170207-173332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_20170207-173332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_Save */
        var o = this;
        var UIEntity = this;
{this.itemTable.syncBodyDataToServer();}
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveItem-20170207-173332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170207-173332",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AppUpdateRecordTable_invokeDynamicFunction */



