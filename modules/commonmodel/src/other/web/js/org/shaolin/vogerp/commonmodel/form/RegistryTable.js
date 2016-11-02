/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_RegistryTable(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_RegistryTable */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_RegistryTable */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_RegistryTable_createItem;

    Form.openItem = org_shaolin_vogerp_commonmodel_form_RegistryTable_openItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_RegistryTable_deleteItem;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_RegistryTable_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_RegistryTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.RegistryTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_RegistryTable */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_RegistryTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_RegistryTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_RegistryTable_createItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_201610291544",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_RegistryTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_RegistryTable_openItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_RegistryTable_openItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openItem_201610291544",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_RegistryTable_openItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_RegistryTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_RegistryTable_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_201609729176",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_RegistryTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_RegistryTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_RegistryTable_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20161029-192102",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_RegistryTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_RegistryTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_RegistryTable_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_RegistryTable_invokeDynamicFunction */



