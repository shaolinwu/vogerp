/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var thirdCompTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "thirdCompTable"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "thirdCompTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,thirdCompTable,fieldPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.thirdCompTable=thirdCompTable;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.thirdCompTable=thirdCompTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable */

        
      {
        var o = this;
        this.thirdCompTable.callSelectedFunc = function() {
           o.thirdCompTable.sync();
        };
      }
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable */
    };

    Form.createThirdComponent = org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_createThirdComponent;

    Form.openThirdComponent = org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_openThirdComponent;

    Form.deleteThirdComponent = org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_deleteThirdComponent;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachiningThirdCompTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_createThirdComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_createThirdComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createThirdComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_createThirdComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_openThirdComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_openThirdComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openThirdComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_openThirdComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_deleteThirdComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_deleteThirdComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteThirdComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_deleteThirdComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable_invokeDynamicFunction */



