/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductCharacteristic(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var fieldPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel1"]
        ,items: []
        ,subComponents: []
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: []
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [fieldPanel,fieldPanel1]
    });

    Form.fieldPanel=fieldPanel;

    Form.fieldPanel1=fieldPanel1;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductCharacteristic_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductCharacteristic";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1050829457",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-884729403",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCharacteristic_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'????',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_invokeDynamicFunction */



