/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductTypeSupplier(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var pTypeIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "pTypeIdUI"]
    });

    var pTypeName0UI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "pTypeName0UI"]
    });

    var pTypeNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "pTypeNameUI"]
    });

    var selectConsumersTypeUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "selectConsumersTypeUI"]
        ,checked: true
        ,selected: true
    });

    var pTypeConsumersUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "pTypeConsumersUI"]
    });

    var pTypeSuppliersUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "pTypeSuppliersUI"]
    });

    var savebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "savebtn"]
    });

    var remveItembtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "remveItembtn"]
    });

    var productTypeTreeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchy({"prefix":prefix + "productTypeTreeUI."});

    var productTypeTreeUI1 = new org_shaolin_vogerp_commonmodel_form_CEHierarchy({"prefix":prefix + "productTypeTreeUI1."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: []
    });

    var rightPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "rightPanel"]
        ,items: []
        ,subComponents: [prefix + "pTypeIdUI",prefix + "pTypeName0UI",prefix + "pTypeNameUI",prefix + "selectConsumersTypeUI",prefix + "pTypeConsumersUI",prefix + "pTypeSuppliersUI",prefix + "savebtn",prefix + "remveItembtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "productTypeTreeUI",prefix + "productTypeTreeUI1"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [pTypeIdUI,pTypeName0UI,pTypeNameUI,selectConsumersTypeUI,pTypeConsumersUI,pTypeSuppliersUI,savebtn,remveItembtn,productTypeTreeUI,productTypeTreeUI1,fieldPanel,rightPanel,actionPanel]
    });

    Form.pTypeIdUI=pTypeIdUI;

    Form.pTypeName0UI=pTypeName0UI;

    Form.pTypeNameUI=pTypeNameUI;

    Form.selectConsumersTypeUI=selectConsumersTypeUI;

    Form.pTypeConsumersUI=pTypeConsumersUI;

    Form.pTypeSuppliersUI=pTypeSuppliersUI;

    Form.savebtn=savebtn;

    Form.remveItembtn=remveItembtn;

    Form.productTypeTreeUI=productTypeTreeUI;

    Form.productTypeTreeUI1=productTypeTreeUI1;

    Form.fieldPanel=fieldPanel;

    Form.productTypeTreeUI=productTypeTreeUI;

    Form.productTypeTreeUI1=productTypeTreeUI1;

    Form.rightPanel=rightPanel;

    Form.pTypeIdUI=pTypeIdUI;

    Form.pTypeName0UI=pTypeName0UI;

    Form.pTypeNameUI=pTypeNameUI;

    Form.selectConsumersTypeUI=selectConsumersTypeUI;

    Form.pTypeConsumersUI=pTypeConsumersUI;

    Form.pTypeSuppliersUI=pTypeSuppliersUI;

    Form.savebtn=savebtn;

    Form.remveItembtn=remveItembtn;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier */
    };

    Form.selectProductType = org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_selectProductType;

    Form.selectProductType1 = org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_selectProductType1;

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_Save;

    Form.RemoveItem = org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_RemoveItem;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductTypeSupplier";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_selectProductType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_selectProductType */
        var o = this;
        var UIEntity = this;
        this.productTypeTreeUI.clickTreeNode(eventsource,event);

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProductType-20160421-2032",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_selectProductType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_selectProductType1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_selectProductType1 */
        var o = this;
        var UIEntity = this;
        this.productTypeTreeUI1.clickTreeNode(eventsource,event);

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProductType1-20160421-2032",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_selectProductType1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-201609281504",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_RemoveItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_RemoveItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"RemoveItem-201609281504",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_RemoveItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-884729403",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSupplier_invokeDynamicFunction */



