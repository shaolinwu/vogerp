/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_CEHierarchy(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectCENameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectCENameUI"]
    });

    var ceTree = new UIMaster.ui.webtree
    ({
        ui: elementList[prefix + "ceTree"]
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
        ,subComponents: [prefix + "selectCENameUI",prefix + "ceTree"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [selectCENameUI,ceTree,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.selectCENameUI=selectCENameUI;

    Form.ceTree=ceTree;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchy */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchy */
    };

    Form.createItem = org_shaolin_vogerp_commonmodel_form_CEHierarchy_createItem;

    Form.deleteItem = org_shaolin_vogerp_commonmodel_form_CEHierarchy_deleteItem;

    Form.Save = org_shaolin_vogerp_commonmodel_form_CEHierarchy_Save;

    Form.expandTreeNode = org_shaolin_vogerp_commonmodel_form_CEHierarchy_expandTreeNode;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_CEHierarchy_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_CEHierarchy_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.CEHierarchy";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_CEHierarchy */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_CEHierarchy */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_createItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_createItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createItem_tretrqew",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_createItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_deleteItem */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"delete_fqw23423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveItem_2040990210",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_expandTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_expandTreeNode */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"expandTreeNode_2040990210",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_expandTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1358686533",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_CEHierarchy_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_CEHierarchy_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_CEHierarchy_invokeDynamicFunction */



