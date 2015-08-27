/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable(json)
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
        ,subComponents: [prefix + "parentIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,itemTable,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_createItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_deleteItem;

    Form.Save = org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.UIDyanimcItemTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_createItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_-408376257",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_-1881938397",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_Save */
{this.itemTable.syncBodyDataToServer();}
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveItem-20150713-125329",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail2089724981",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_UIDyanimcItemTable_invokeDynamicFunction */



