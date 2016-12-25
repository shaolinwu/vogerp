/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AddressInfoTable(json)
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

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,itemTable,fieldPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AddressInfoTable */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AddressInfoTable */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_AddressInfoTable_createItem;

    Form.openItem = org_shaolin_vogerp_commonmodel_form_AddressInfoTable_openItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_AddressInfoTable_deleteItem;

    Form.setAsDefaultAddress = org_shaolin_vogerp_commonmodel_form_AddressInfoTable_setAsDefaultAddress;

    Form.verifyAddress = org_shaolin_vogerp_commonmodel_form_AddressInfoTable_verifyAddress;

    Form.selectProvince = org_shaolin_vogerp_commonmodel_form_AddressInfoTable_selectProvince;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_AddressInfoTable_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_AddressInfoTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AddressInfoTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AddressInfoTable */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AddressInfoTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_-1416511085",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoTable_openItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_openItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openItem-1416511085",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_openItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_deleteItem */
        var o = this;
        var UIEntity = this;

         {
          new UIMaster.ui.dialog({
              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
              message:'\u786E\u5B9A\u5220\u9664\u5730\u5740\u5417',
              messageType:UIMaster.ui.dialog.Information,
              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
              title:'',
              height:150,
              width:300,
              handler: function() {
                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_1667539263",UIMaster.getValue(eventsource),o.__entityName);
              }
          }).open();
          return;
         }
         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_1667539263",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoTable_setAsDefaultAddress(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_setAsDefaultAddress */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"setAsDefaultAddress-20151229-1148",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_setAsDefaultAddress */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoTable_verifyAddress(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_verifyAddress */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifyAddress-20151229-1148",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_verifyAddress */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoTable_selectProvince(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_selectProvince */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProvince-201605102011",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_selectProvince */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1794947894",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AddressInfoTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AddressInfoTable_invokeDynamicFunction */



