/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
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
        ,subComponents: [prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [itemTable,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.itemTable=itemTable;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.itemTable=itemTable;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_createItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_deleteItem;

    Form.Save = org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Save;

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

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_-136152444",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_209729176",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Save */
{this.itemTable.syncBodyDataToServer();}
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveItem-20150713-125459",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_reload(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_reload */

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

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reload_201601171829",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_reload */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-884197646",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable_invokeDynamicFunction */



