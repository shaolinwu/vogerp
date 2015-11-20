/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_page_ProductListOverview(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var productInfoPanel = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "productInfoPanel"]
        ,items: [""]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [productInfoPanel]
    });

    Form.productInfoPanel=productInfoPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_page_ProductListOverview */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_page_ProductListOverview */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_page_ProductListOverview_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.page.ProductListOverview";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_page_ProductListOverview */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_page_ProductListOverview */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_page_ProductListOverview_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_page_ProductListOverview_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_page_ProductListOverview_invokeDynamicFunction */



