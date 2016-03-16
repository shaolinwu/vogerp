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

    Form.selectProductNodeUI=selectProductNodeUI;

    Form.productTree=productTree;

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
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SelectProduct_201506130258",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_SelectProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_clickTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_clickTreeNode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"clickTreeNode_201507092233",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_clickTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_expandTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_expandTreeNode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"expandTreeNode_201506130258",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_expandTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1358686533",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCostPackageSelector_invokeDynamicFunction */



