/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectProductNodeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectProductNodeUI"]
    });

    var productTree = new UIMaster.ui.combobox
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
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductSelector */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductSelector */
    };

    Form.SelectProduct = org_shaolin_vogerp_productmodel_form_ProductSelector_SelectProduct;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductSelector */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductSelector_SelectProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductSelector_SelectProduct */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductSelector_SelectProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductSelector_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductSelector_invokeDynamicFunction */



