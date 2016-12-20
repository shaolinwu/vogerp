/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ContactInfoTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
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
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ContactInfoTable */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ContactInfoTable */
    };

    Form.VerfiyPhoneNumber = org_shaolin_vogerp_commonmodel_form_ContactInfoTable_VerfiyPhoneNumber;

    Form.createItem = org_shaolin_vogerp_commonmodel_form_ContactInfoTable_createItem;

    Form.openItem = org_shaolin_vogerp_commonmodel_form_ContactInfoTable_openItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_ContactInfoTable_deleteItem;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_ContactInfoTable_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ContactInfoTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ContactInfoTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ContactInfoTable */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ContactInfoTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfoTable_VerfiyPhoneNumber(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_VerfiyPhoneNumber */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"VerfiyPhoneNumber_1993740592",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_VerfiyPhoneNumber */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfoTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_1993740592",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfoTable_openItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_openItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openItem-1993740592",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_openItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfoTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_deleteItem */
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
                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_78319948",UIMaster.getValue(eventsource),o.__entityName);
              }
          }).open();
          return;
         }
         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_78319948",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfoTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1914027132",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfoTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfoTable_invokeDynamicFunction */



