/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_createItem;

    Form.openItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_openItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_deleteItem;

    Form.reload = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_reload;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIDyanimcPageLinkTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_-136152441",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_openItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_openItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openItem_201610131644",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_openItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_209729176",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_reload(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_reload */
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
                     UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reload_201601171829",UIMaster.getValue(eventsource),o.__entityName);
                  }
              }).open();
              return;
             }
             
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reload_201601171829",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_reload */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-884197646",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_invokeDynamicFunction */



