/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable */

        
      {
        var o = this;
        this.itemTable.callSelectedFunc = function() {
           o.itemTable.sync();
        };
      }
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable */
    };

    Form.add = org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_add;

    Form.open = org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_open;

    Form.delete = org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_delete;

    Form.selectOne = org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_selectOne;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachOrderComponentTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_add(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_add */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"add-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_add */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_open(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_open */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"open-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_open */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_delete(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_delete */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"delete-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_delete */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_selectOne(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_selectOne */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_selectOne */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable_invokeDynamicFunction */



