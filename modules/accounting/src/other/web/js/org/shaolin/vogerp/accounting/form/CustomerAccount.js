/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_CustomerAccount(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var alipayAccountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "alipayAccountUILabel"]
    });

    var alipayAccountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "alipayAccountUI"]
    });

    var alipayUserNameLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "alipayUserNameLabel"]
    });

    var alipayUserNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "alipayUserNameUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "alipayAccountUILabel",prefix + "alipayAccountUI",prefix + "alipayUserNameLabel",prefix + "alipayUserNameUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [alipayAccountUILabel,alipayAccountUI,alipayUserNameLabel,alipayUserNameUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.alipayAccountUILabel=alipayAccountUILabel;

    Form.alipayAccountUI=alipayAccountUI;

    Form.alipayUserNameLabel=alipayUserNameLabel;

    Form.alipayUserNameUI=alipayUserNameUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.alipayAccountUILabel=alipayAccountUILabel;

    Form.alipayAccountUI=alipayAccountUI;

    Form.alipayUserNameLabel=alipayUserNameLabel;

    Form.alipayUserNameUI=alipayUserNameUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_CustomerAccount */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_CustomerAccount */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_CustomerAccount_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_CustomerAccount_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_CustomerAccount_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.CustomerAccount";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_CustomerAccount */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_CustomerAccount */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_CustomerAccount_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_CustomerAccount_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20170422-224500",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_CustomerAccount_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_CustomerAccount_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_CustomerAccount_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170422-224500",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_CustomerAccount_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_CustomerAccount_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_CustomerAccount_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_CustomerAccount_invokeDynamicFunction */



