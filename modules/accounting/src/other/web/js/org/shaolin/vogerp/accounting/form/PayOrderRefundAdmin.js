/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var stateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "stateUILabel"]
    });

    var stateUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "stateUI"]
    });

    var payOrderIdsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "payOrderIdsUILabel"]
    });

    var payOrderIdsUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "payOrderIdsUI"]
    });

    var thirdPartyAccountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdPartyAccountUILabel"]
    });

    var thirdPartyAccountUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdPartyAccountUI"]
    });

    var thirdPartyAccountTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdPartyAccountTypeUILabel"]
    });

    var thirdPartyAccountTypeUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdPartyAccountTypeUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUI"]
    });

    var commentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentUILabel"]
    });

    var commentUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "commentUI"]
    });

    var payorderInfoUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "payorderInfoUI"]
    });

    var okbtn1 = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn1"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn1",prefix + "cancelbtn"]
    });

    var fieldPanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel1"]
        ,items: []
        ,subComponents: [prefix + "payorderInfoUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "typeUILabel",prefix + "typeUI",prefix + "stateUILabel",prefix + "stateUI",prefix + "payOrderIdsUILabel",prefix + "payOrderIdsUI",prefix + "thirdPartyAccountUILabel",prefix + "thirdPartyAccountUI",prefix + "thirdPartyAccountTypeUILabel",prefix + "thirdPartyAccountTypeUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "commentUILabel",prefix + "commentUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [typeUILabel,typeUI,stateUILabel,stateUI,payOrderIdsUILabel,payOrderIdsUI,thirdPartyAccountUILabel,thirdPartyAccountUI,thirdPartyAccountTypeUILabel,thirdPartyAccountTypeUI,amountUILabel,amountUI,commentUILabel,commentUI,payorderInfoUI,okbtn1,cancelbtn,fieldPanel,fieldPanel1,actionPanel]
    });

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.stateUILabel=stateUILabel;

    Form.stateUI=stateUI;

    Form.payOrderIdsUILabel=payOrderIdsUILabel;

    Form.payOrderIdsUI=payOrderIdsUI;

    Form.thirdPartyAccountUILabel=thirdPartyAccountUILabel;

    Form.thirdPartyAccountUI=thirdPartyAccountUI;

    Form.thirdPartyAccountTypeUILabel=thirdPartyAccountTypeUILabel;

    Form.thirdPartyAccountTypeUI=thirdPartyAccountTypeUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.payorderInfoUI=payorderInfoUI;

    Form.okbtn1=okbtn1;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.stateUILabel=stateUILabel;

    Form.stateUI=stateUI;

    Form.payOrderIdsUILabel=payOrderIdsUILabel;

    Form.payOrderIdsUI=payOrderIdsUI;

    Form.thirdPartyAccountUILabel=thirdPartyAccountUILabel;

    Form.thirdPartyAccountUI=thirdPartyAccountUI;

    Form.thirdPartyAccountTypeUILabel=thirdPartyAccountTypeUILabel;

    Form.thirdPartyAccountTypeUI=thirdPartyAccountTypeUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.fieldPanel1=fieldPanel1;

    Form.payorderInfoUI=payorderInfoUI;

    Form.actionPanel=actionPanel;

    Form.okbtn1=okbtn1;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin */
    };

    Form.cancelRefund = org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_cancelRefund;

    Form.Cancel = org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.PayOrderRefundAdmin";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_cancelRefund(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_cancelRefund */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelRefund-20170519-231757",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_cancelRefund */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170519-231757",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrderRefundAdmin_invokeDynamicFunction */



