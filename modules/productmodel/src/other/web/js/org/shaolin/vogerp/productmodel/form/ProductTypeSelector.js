/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductTypeSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var typeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithRadioGroup({"prefix":prefix + "typeUI."});

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [typeUI,fieldPanel]
    });

    Form.typeUI=typeUI;

    Form.fieldPanel=fieldPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductTypeSelector */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductTypeSelector */
    };

    Form.SelectProduct = org_shaolin_vogerp_productmodel_form_ProductTypeSelector_SelectProduct;

    Form.expandTreeNode = org_shaolin_vogerp_productmodel_form_ProductTypeSelector_expandTreeNode;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductTypeSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductTypeSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductTypeSelector */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductTypeSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSelector_SelectProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSelector_SelectProduct */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SelectProduct_20250604847",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSelector_SelectProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSelector_expandTreeNode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSelector_expandTreeNode */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"expandTreeNode_2040990210",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSelector_expandTreeNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTypeSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTypeSelector_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTypeSelector_invokeDynamicFunction */



