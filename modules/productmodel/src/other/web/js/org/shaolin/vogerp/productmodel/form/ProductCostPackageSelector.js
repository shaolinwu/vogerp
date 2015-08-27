/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector(json)
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

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "selectProductNodeUI",prefix + "productTree"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [selectProductNodeUI,productTree,fieldPanel]
    });

    Form.selectProductNodeUI=selectProductNodeUI;

    Form.productTree=productTree;

    Form.fieldPanel=fieldPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector */
    };

    Form.SelectProduct = org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_SelectProduct;

    Form.clickTreeNode = org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_clickTreeNode;

    Form.expandTreeNode = org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_expandTreeNode;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductCostPackageSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_SelectProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_SelectProduct */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SelectProduct_201506130258",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_SelectProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_clickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_clickTreeNode */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"clickTreeNode_201507092233",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_clickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_expandTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_expandTreeNode */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"expandTreeNode_201506130258",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_expandTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1358686533",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_invokeDynamicFunction */



