/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachOrderComponents(json)
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
        ,subComponents: [prefix + "parentIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,itemTable,fieldPanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachOrderComponents */

        
      {
        var o = this;
        this.itemTable.callSelectedFunc = function() {
           o.itemTable.sync();
           UIMaster.triggerServerEvent(UIMaster.getUIID(o.itemTable),"SelectItem-20161225-172849",UIMaster.getValue(o.itemTable),Form.__entityName);
        };
      }
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachOrderComponents */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_MachOrderComponents_Cancel;

    Form.add = org_shaolin_vogerp_ecommercial_form_MachOrderComponents_add;

    Form.open = org_shaolin_vogerp_ecommercial_form_MachOrderComponents_open;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachOrderComponents_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachOrderComponents";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachOrderComponents */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachOrderComponents */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponents_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponents_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponents_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponents_add(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponents_add */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"add-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponents_add */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponents_open(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponents_open */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"open-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponents_open */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponents_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponents_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponents_invokeDynamicFunction */



