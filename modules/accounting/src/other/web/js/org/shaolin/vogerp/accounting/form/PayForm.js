/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_PayForm(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var beecloudButton = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "beecloudButton"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "beecloudButton"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [beecloudButton,cancelbtn,fieldPanel,actionPanel]
    });

    Form.beecloudButton=beecloudButton;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.beecloudButton=beecloudButton;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_PayForm */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_PayForm */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_PayForm_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_PayForm_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_PayForm_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.PayForm";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_PayForm */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_PayForm */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayForm_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayForm_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150904-084551",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayForm_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayForm_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayForm_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150904-084551",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayForm_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayForm_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayForm_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayForm_invokeDynamicFunction */


