/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ImportProductsResult(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
        ,disableScrollY: true
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [itemTable]
    });

    Form.itemTable=itemTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ImportProductsResult */

        
       $(this.searchWordUI).css("width", "100%");
       $(this.Form).parent().css("width", "100%");
    
    
            /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ImportProductsResult */
    };

    Form.deleteItem = org_shaolin_vogerp_productmodel_form_ImportProductsResult_deleteItem;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ImportProductsResult_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ImportProductsResult";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ImportProductsResult */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ImportProductsResult */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ImportProductsResult_deleteItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ImportProductsResult_deleteItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteItem-20160828-100447",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ImportProductsResult_deleteItem */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ImportProductsResult_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ImportProductsResult_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ImportProductsResult_invokeDynamicFunction */



