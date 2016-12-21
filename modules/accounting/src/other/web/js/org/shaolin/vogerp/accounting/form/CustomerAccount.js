/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_CustomerAccount(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var accountIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "accountIdUILabel"]
    });

    var accountIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "accountIdUI"]
    });

    var WechatAccountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "WechatAccountUILabel"]
    });

    var WechatAccountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "WechatAccountUI"]
    });

    var AlipayAccountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "AlipayAccountUILabel"]
    });

    var AlipayAccountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "AlipayAccountUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "accountIdUILabel",prefix + "accountIdUI",prefix + "WechatAccountUILabel",prefix + "WechatAccountUI",prefix + "AlipayAccountUILabel",prefix + "AlipayAccountUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,accountIdUILabel,accountIdUI,WechatAccountUILabel,WechatAccountUI,AlipayAccountUILabel,AlipayAccountUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.accountIdUILabel=accountIdUILabel;

    Form.accountIdUI=accountIdUI;

    Form.WechatAccountUILabel=WechatAccountUILabel;

    Form.WechatAccountUI=WechatAccountUI;

    Form.AlipayAccountUILabel=AlipayAccountUILabel;

    Form.AlipayAccountUI=AlipayAccountUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.accountIdUILabel=accountIdUILabel;

    Form.accountIdUI=accountIdUI;

    Form.WechatAccountUILabel=WechatAccountUILabel;

    Form.WechatAccountUI=WechatAccountUI;

    Form.AlipayAccountUILabel=AlipayAccountUILabel;

    Form.AlipayAccountUI=AlipayAccountUI;

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

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160405-114830",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_CustomerAccount_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_CustomerAccount_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_CustomerAccount_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160405-114830",UIMaster.getValue(eventsource),o.__entityName);
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



