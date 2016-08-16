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

    Form.productInfoTable=productInfoTable;

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
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductListOverview_invokeDynamicFunction */



