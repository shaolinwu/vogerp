/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var ceNameUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "ceNameUI"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var subtypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "subtypeUI"]
    });

    var sub2typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "sub2typeUI"]
      ,allowBlank:false
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "ceNameUI",prefix + "typeUI",prefix + "subtypeUI",prefix + "sub2typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [ceNameUI,typeUI,subtypeUI,sub2typeUI,fieldPanel]
    });

    Form.ceNameUI=ceNameUI;

    Form.typeUI=typeUI;

    Form.subtypeUI=subtypeUI;

    Form.sub2typeUI=sub2typeUI;

    Form.fieldPanel=fieldPanel;

    Form.ceNameUI=ceNameUI;

    Form.typeUI=typeUI;

    Form.subtypeUI=subtypeUI;

    Form.sub2typeUI=sub2typeUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector */
    };

    Form.selectSubItem = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectSubItem;

    Form.selectSub2Item = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectSub2Item;

    Form.selectItem = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectItem;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductHierarchySelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectSubItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectSubItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectSubItem_20160804_5433",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectSubItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectSub2Item(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectSub2Item */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectSub2Item_20160804_5433",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectSub2Item */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectItem */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_selectItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductHierarchySelector_invokeDynamicFunction */



