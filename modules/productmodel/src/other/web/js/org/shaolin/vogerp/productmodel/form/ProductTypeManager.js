/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductTypeManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var closebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "closebtn"]
    });

    var productTypeTreeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchy({"prefix":prefix + "productTypeTreeUI."});

    var dynamicItems = new org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager({"prefix":prefix + "dynamicItems."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "closebtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "productTypeTreeUI",prefix + "dynamicItems"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [closebtn,productTypeTreeUI,dynamicItems,fieldPanel,actionPanel]
    });

    Form.closebtn=closebtn;

    Form.productTypeTreeUI=productTypeTreeUI;

    Form.dynamicItems=dynamicItems;

    Form.fieldPanel=fieldPanel;

    Form.productTypeTreeUI=productTypeTreeUI;

    Form.dynamicItems=dynamicItems;

    Form.actionPanel=actionPanel;

    Form.closebtn=closebtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductTypeManager */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductTypeManager */
    };

    Form.selectProductType = org_shaolin_vogerp_productmodel_form_ProductTypeManager_selectProductType;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductTypeManager_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductTypeManager_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductTypeManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductTypeManager */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductTypeManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeManager_selectProductType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeManager_selectProductType */
        var o = this;
        var UIEntity = this;
        this.productTypeTreeUI.clickTreeNode(eventsource,event);

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProductType-20160421-2032",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeManager_selectProductType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeManager_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeManager_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-884729403",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeManager_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeManager_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeManager_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeManager_invokeDynamicFunction */



