/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectProductNodeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectProductNodeUI"]
    });

    var productTree = new UIMaster.ui.webtree
    ({
        ui: elementList[prefix + "productTree"]
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
        ,subComponents: [prefix + "selectProductNodeUI",prefix + "productTree"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [selectProductNodeUI,productTree,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.selectProductNodeUI=selectProductNodeUI;

    Form.productTree=productTree;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.selectProductNodeUI=selectProductNodeUI;

    Form.productTree=productTree;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector */
    };

    Form.SelectProduct = org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_SelectProduct;

    Form.clickTreeNode = org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_clickTreeNode;

    Form.expandTreeNode = org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_expandTreeNode;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductPricePackageSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_SelectProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_SelectProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SelectProduct_20150604847",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_SelectProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_clickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_clickTreeNode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"clickTreeNode_201507092234",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_clickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_expandTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_expandTreeNode */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_expandTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1358686533",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector_invokeDynamicFunction */



