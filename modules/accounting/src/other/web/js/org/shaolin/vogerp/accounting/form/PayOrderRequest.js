/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_PayOrderRequest(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var stateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "stateUILabel"]
    });

    var stateUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "stateUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
    });

    var payOrderIdsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "payOrderIdsUILabel"]
    });

    var payOrderIdsUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "payOrderIdsUI"]
    });

    var commentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentUILabel"]
    });

    var commentUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "commentUI"]
    });

    var userIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userIdUILabel"]
    });

    var userIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "userIdUI"]
    });

    var thirdPartyAccountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdPartyAccountUILabel"]
    });

    var thirdPartyAccountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "thirdPartyAccountUI"]
    });

    var thirdPartyAccountTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "thirdPartyAccountTypeUILabel"]
    });

    var thirdPartyAccountTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "thirdPartyAccountTypeUI"]
    });

    var payOrderIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "payOrderIdUILabel"]
    });

    var payOrderIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "payOrderIdUI"]
    });

    var payOrderUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "payOrderUILabel"]
    });

    var startCreateDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "startCreateDateUILabel"]
    });

    var startCreateDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "startCreateDateUI"]
    });

    var endCreateDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "endCreateDateUILabel"]
    });

    var endCreateDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "endCreateDateUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

// refered ui form[payOrderUI] is null.    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "stateUILabel",prefix + "stateUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "payOrderIdsUILabel",prefix + "payOrderIdsUI",prefix + "commentUILabel",prefix + "commentUI",prefix + "userIdUILabel",prefix + "userIdUI",prefix + "thirdPartyAccountUILabel",prefix + "thirdPartyAccountUI",prefix + "thirdPartyAccountTypeUILabel",prefix + "thirdPartyAccountTypeUI",prefix + "payOrderIdUILabel",prefix + "payOrderIdUI",prefix + "payOrderUILabel",prefix + "payOrderUI",prefix + "startCreateDateUILabel",prefix + "startCreateDateUI",prefix + "endCreateDateUILabel",prefix + "endCreateDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,typeUILabel,typeUI,stateUILabel,stateUI,amountUILabel,amountUI,payOrderIdsUILabel,payOrderIdsUI,commentUILabel,commentUI,userIdUILabel,userIdUI,thirdPartyAccountUILabel,thirdPartyAccountUI,thirdPartyAccountTypeUILabel,thirdPartyAccountTypeUI,payOrderIdUILabel,payOrderIdUI,payOrderUILabel,startCreateDateUILabel,startCreateDateUI,endCreateDateUILabel,endCreateDateUI,okbtn,cancelbtn,payOrderUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.stateUILabel=stateUILabel;

    Form.stateUI=stateUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.payOrderIdsUILabel=payOrderIdsUILabel;

    Form.payOrderIdsUI=payOrderIdsUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.userIdUILabel=userIdUILabel;

    Form.userIdUI=userIdUI;

    Form.thirdPartyAccountUILabel=thirdPartyAccountUILabel;

    Form.thirdPartyAccountUI=thirdPartyAccountUI;

    Form.thirdPartyAccountTypeUILabel=thirdPartyAccountTypeUILabel;

    Form.thirdPartyAccountTypeUI=thirdPartyAccountTypeUI;

    Form.payOrderIdUILabel=payOrderIdUILabel;

    Form.payOrderIdUI=payOrderIdUI;

    Form.payOrderUILabel=payOrderUILabel;

    Form.startCreateDateUILabel=startCreateDateUILabel;

    Form.startCreateDateUI=startCreateDateUI;

    Form.endCreateDateUILabel=endCreateDateUILabel;

    Form.endCreateDateUI=endCreateDateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.payOrderUI=payOrderUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.stateUILabel=stateUILabel;

    Form.stateUI=stateUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.payOrderIdsUILabel=payOrderIdsUILabel;

    Form.payOrderIdsUI=payOrderIdsUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.userIdUILabel=userIdUILabel;

    Form.userIdUI=userIdUI;

    Form.thirdPartyAccountUILabel=thirdPartyAccountUILabel;

    Form.thirdPartyAccountUI=thirdPartyAccountUI;

    Form.thirdPartyAccountTypeUILabel=thirdPartyAccountTypeUILabel;

    Form.thirdPartyAccountTypeUI=thirdPartyAccountTypeUI;

    Form.payOrderIdUILabel=payOrderIdUILabel;

    Form.payOrderIdUI=payOrderIdUI;

    Form.payOrderUILabel=payOrderUILabel;

    Form.payOrderUI=payOrderUI;

    Form.startCreateDateUILabel=startCreateDateUILabel;

    Form.startCreateDateUI=startCreateDateUI;

    Form.endCreateDateUILabel=endCreateDateUILabel;

    Form.endCreateDateUI=endCreateDateUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_PayOrderRequest */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_PayOrderRequest */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_PayOrderRequest_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_PayOrderRequest_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_PayOrderRequest_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.PayOrderRequest";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_PayOrderRequest */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_PayOrderRequest */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrderRequest_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrderRequest_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20170521-001135",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrderRequest_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrderRequest_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrderRequest_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170521-001135",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrderRequest_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_PayOrderRequest_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_PayOrderRequest_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_PayOrderRequest_invokeDynamicFunction */



