/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderItem(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var productTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productTypeUI"]
    });

    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "productTypeUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [productTypeUI,itemTable,fieldPanel]
    });

    Form.productTypeUI=productTypeUI;

    Form.itemTable=itemTable;

    Form.fieldPanel=fieldPanel;

    Form.productTypeUI=productTypeUI;

    Form.itemTable=itemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem */
    };

    Form.addItem = org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_addItem;

    Form.deleteItem = org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_deleteItem;

    Form.openProductPriceSelector = org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_openProductPriceSelector;

    Form.SaveSelectedTemplate = org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_SaveSelectedTemplate;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderItem";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_addItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_addItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedProduct0_201606123423",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_addItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem_201606123242",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_openProductPriceSelector(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_openProductPriceSelector */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductPriceSelector-2016010911202342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_openProductPriceSelector */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_SaveSelectedTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_SaveSelectedTemplate */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SaveSelectedTemplate-2015041211323424",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_SaveSelectedTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderItem_invokeDynamicFunction */



