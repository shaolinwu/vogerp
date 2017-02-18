/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningComponentTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var mComponentTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "mComponentTable"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "mComponentTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,mComponentTable,fieldPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.mComponentTable=mComponentTable;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.mComponentTable=mComponentTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable */

        
      {
        var o = this;
        this.mComponentTable.callSelectedFunc = function() {
           o.mComponentTable.sync();
        };
      }
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable */
    };

    Form.createComponent = org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_createComponent;

    Form.openComponent = org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_openComponent;

    Form.deleteComponent = org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_deleteComponent;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachiningComponentTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_createComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_createComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createComponent-20160602",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_createComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_openComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_openComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_openComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_deleteComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_deleteComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_deleteComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningComponentTable_invokeDynamicFunction */



