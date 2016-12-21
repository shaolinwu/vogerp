/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentTypeUI"]
    });

    var parentSubTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentSubTypeUI"]
    });

    var parentSubType2UI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentSubType2UI"]
    });

    var productNameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productNameUI"]
    });

    var ceNameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "ceNameUI"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
      ,allowBlank:false
    });

    var subtypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "subtypeUI"]
      ,allowBlank:false
    });

    var sub2typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "sub2typeUI"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentTypeUI",prefix + "parentSubTypeUI",prefix + "parentSubType2UI",prefix + "productNameUI",prefix + "ceNameUI",prefix + "typeUI",prefix + "subtypeUI",prefix + "sub2typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentTypeUI,parentSubTypeUI,parentSubType2UI,productNameUI,ceNameUI,typeUI,subtypeUI,sub2typeUI,cancelbtn,fieldPanel,actionPanel]
    });

    Form.parentTypeUI=parentTypeUI;

    Form.parentSubTypeUI=parentSubTypeUI;

    Form.parentSubType2UI=parentSubType2UI;

    Form.productNameUI=productNameUI;

    Form.ceNameUI=ceNameUI;

    Form.typeUI=typeUI;

    Form.subtypeUI=subtypeUI;

    Form.sub2typeUI=sub2typeUI;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.parentTypeUI=parentTypeUI;

    Form.parentSubTypeUI=parentSubTypeUI;

    Form.parentSubType2UI=parentSubType2UI;

    Form.productNameUI=productNameUI;

    Form.ceNameUI=ceNameUI;

    Form.typeUI=typeUI;

    Form.subtypeUI=subtypeUI;

    Form.sub2typeUI=sub2typeUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2 */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2 */
    };

    Form.selectSubItem = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectSubItem;

    Form.selectSub2Item = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectSub2Item;

    Form.selectItem = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectItem;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductHierarchySelector2";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2 */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectSubItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectSubItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectSubItem_20160804_5435",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectSubItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectSub2Item(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectSub2Item */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectSub2Item_20160804_5435",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectSub2Item */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectItem_20160804_5435",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_selectItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Cancel-20160904_54356",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector2_invokeDynamicFunction */



