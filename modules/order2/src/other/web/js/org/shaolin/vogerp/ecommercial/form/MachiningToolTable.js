/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningToolTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var mToolTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "mToolTable"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "mToolTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,mToolTable,fieldPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.mToolTable=mToolTable;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.mToolTable=mToolTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningToolTable */

        
      {
        var o = this;
        this.mToolTable.callSelectedFunc = function() {
           o.mToolTable.sync();
        };
      }
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningToolTable */
    };

    Form.createMachineTools = org_shaolin_vogerp_ecommercial_form_MachiningToolTable_createMachineTools;

    Form.openMachineTools = org_shaolin_vogerp_ecommercial_form_MachiningToolTable_openMachineTools;

    Form.deleteMachineTools = org_shaolin_vogerp_ecommercial_form_MachiningToolTable_deleteMachineTools;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachiningToolTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachiningToolTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningToolTable */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachiningToolTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningToolTable_createMachineTools(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningToolTable_createMachineTools */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createMachineTools-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningToolTable_createMachineTools */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningToolTable_openMachineTools(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningToolTable_openMachineTools */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMachineTools-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningToolTable_openMachineTools */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningToolTable_deleteMachineTools(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningToolTable_deleteMachineTools */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteMachineTools-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningToolTable_deleteMachineTools */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningToolTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningToolTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningToolTable_invokeDynamicFunction */



