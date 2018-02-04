/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_CoinPolicyTemplate(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var rewardCoinUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "rewardCoinUILabel"]
    });

    var rewardCoinUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "rewardCoinUI"]
    });

    var rewardScoreUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "rewardScoreUILabel"]
    });

    var rewardScoreUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "rewardScoreUI"]
    });

    var reasonUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "reasonUILabel"]
    });

    var reasonUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "reasonUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "rewardCoinUILabel",prefix + "rewardCoinUI",prefix + "rewardScoreUILabel",prefix + "rewardScoreUI",prefix + "reasonUILabel",prefix + "reasonUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,rewardCoinUILabel,rewardCoinUI,rewardScoreUILabel,rewardScoreUI,reasonUILabel,reasonUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.rewardCoinUILabel=rewardCoinUILabel;

    Form.rewardCoinUI=rewardCoinUI;

    Form.rewardScoreUILabel=rewardScoreUILabel;

    Form.rewardScoreUI=rewardScoreUI;

    Form.reasonUILabel=reasonUILabel;

    Form.reasonUI=reasonUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.rewardCoinUILabel=rewardCoinUILabel;

    Form.rewardCoinUI=rewardCoinUI;

    Form.rewardScoreUILabel=rewardScoreUILabel;

    Form.rewardScoreUI=rewardScoreUI;

    Form.reasonUILabel=reasonUILabel;

    Form.reasonUI=reasonUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.CoinPolicyTemplate";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20180203-215640",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20180203-215640",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_CoinPolicyTemplate_invokeDynamicFunction */



