/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachOrderToolTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
        ,disableRefreshClear: true
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
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable */

        
      {
        var o = this;
        this.itemTable.callSelectedFunc = function() {
           o.itemTable.sync();
        };
      }
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable */
    };

    Form.add = org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_add;

    Form.open = org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_open;

    Form.delete = org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_delete;

    Form.selectOne = org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_selectOne;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachOrderToolTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_add(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_add */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"add-20160325-112850",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_add */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_open(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_open */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"open-20160325-112850",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_open */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_delete(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_delete */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"delete-20160325-112843",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_delete */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_selectOne(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_selectOne */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_selectOne */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachOrderToolTable_invokeDynamicFunction */



