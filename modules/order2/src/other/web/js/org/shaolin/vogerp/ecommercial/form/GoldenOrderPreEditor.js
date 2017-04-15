/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var purchaseOrderLabel = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "purchaseOrderLabel"]
    });

    var saleOrderLabel = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "saleOrderLabel"]
    });

    var addProductBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "addProductBtn"]
    });

    var hintsUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "hintsUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var priceSelector = new org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector({"prefix":prefix + "priceSelector."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var productPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "productPanel"]
        ,items: []
        ,subComponents: [prefix + "addProductBtn"]
    });

    var selectTypePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "selectTypePanel"]
        ,style: "display:none"
        ,items: []
        ,subComponents: [prefix + "purchaseOrderLabel",prefix + "saleOrderLabel"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "selectTypePanel",prefix + "productPanel",prefix + "hintsUI",prefix + "priceSelector"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [purchaseOrderLabel,saleOrderLabel,addProductBtn,hintsUI,okbtn,cancelbtn,priceSelector,fieldPanel,selectTypePanel,productPanel,actionPanel]
    });

    Form.purchaseOrderLabel=purchaseOrderLabel;

    Form.saleOrderLabel=saleOrderLabel;

    Form.addProductBtn=addProductBtn;

    Form.hintsUI=hintsUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.priceSelector=priceSelector;

    Form.fieldPanel=fieldPanel;

    Form.selectTypePanel=selectTypePanel;

    Form.purchaseOrderLabel=purchaseOrderLabel;

    Form.saleOrderLabel=saleOrderLabel;

    Form.productPanel=productPanel;

    Form.addProductBtn=addProductBtn;

    Form.hintsUI=hintsUI;

    Form.priceSelector=priceSelector;

    Form.selectTypePanel=selectTypePanel;

    Form.purchaseOrderLabel=purchaseOrderLabel;

    Form.saleOrderLabel=saleOrderLabel;

    Form.productPanel=productPanel;

    Form.addProductBtn=addProductBtn;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Cancel;

    Form.selectedPurchaseOrder = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_selectedPurchaseOrder;

    Form.selectedSaleOrder = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_selectedSaleOrder;

    Form.Next = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Next;

    Form.addProduct = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_addProduct;

    Form.refreshProductTree = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_refreshProductTree;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderPreEditor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_selectedPurchaseOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_selectedPurchaseOrder */
        var o = this;
        var UIEntity = this;

        {   
           $(this.selectTypePanel).dialog("close");
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedPurchaseOrder-20170106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_selectedPurchaseOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_selectedSaleOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_selectedSaleOrder */
        var o = this;
        var UIEntity = this;

        {   
           $(this.selectTypePanel).dialog("close");
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedSaleOrder-20170106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_selectedSaleOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Next(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Next */
        var o = this;
        var UIEntity = this;

        {   
           $(this.selectTypePanel).css("display", "block");
           $(this.selectTypePanel).dialog();
        }
            }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Next */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_addProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_addProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"addProduct-20170306-114008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_addProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_refreshProductTree(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_refreshProductTree */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refreshProductTree-20170306-114008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_refreshProductTree */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_invokeDynamicFunction */



