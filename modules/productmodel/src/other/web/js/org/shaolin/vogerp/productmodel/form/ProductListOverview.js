/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductListOverview(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var productInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "productInfoTable"]
    });

    var productInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "productInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "productInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [productInfoTable,productInfoPanel]
    });

    Form.productInfoTable=productInfoTable;

    Form.productInfoPanel=productInfoPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductListOverview */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductListOverview */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductListOverview_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductListOverview";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductListOverview */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductListOverview */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductListOverview_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductListOverview_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductListOverview_invokeDynamicFunction */



