/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: []
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
        ,items: [itemTable,fieldPanel,actionPanel]
    });

    Form.itemTable=itemTable;

    Form.fieldPanel=fieldPanel;

    Form.itemTable=itemTable;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_createItem;

    Form.openItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_openItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_deleteItem;

    Form.reload = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_reload;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIDyanimcPageHintsTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_201610131544",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_openItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_openItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openItem_201610131544",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_openItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_209729176",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_reload(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_reload */
        var o = this;
        var UIEntity = this;

             {
              var o = this;
              new UIMaster.ui.dialog({
                  dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
                  message:'Are you sure reload all dynamic ui configuration?',
                  messageType:UIMaster.ui.dialog.Warning,
                  optionType:UIMaster.ui.dialog.YES_NO_OPTION,
                  title:'',
                  height:150,
                  width:300,
                  handler: function() {
                     UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reload_201601171839",UIMaster.getValue(eventsource),o.__entityName);
                  }
              }).open();
              return;
             }
             
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reload_201601171839",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_reload */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable_invokeDynamicFunction */



