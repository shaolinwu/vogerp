/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductCharacteristic(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var savebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "savebtn"]
    });

    var closebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "closebtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "savebtn",prefix + "closebtn"]
    });

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
        ,items: [savebtn,closebtn,fieldPanel,fieldPanel1,actionPanel]
    });

    Form.savebtn=savebtn;

    Form.closebtn=closebtn;

    Form.fieldPanel=fieldPanel;

    Form.fieldPanel1=fieldPanel1;

    Form.actionPanel=actionPanel;

    Form.savebtn=savebtn;

    Form.closebtn=closebtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductCharacteristic */
    };

    Form.Selected = org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Selected;

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
    function org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Selected(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Selected */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1050829457",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_Selected */


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

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCharacteristic_invokeDynamicFunction */



