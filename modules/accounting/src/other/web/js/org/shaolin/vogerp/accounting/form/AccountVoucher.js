/* null */
/* auto generated constructor */
function org_shaolin_vogerp_accounting_form_AccountVoucher(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var createDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUILabel"]
    });

    var createDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "createDateUI"]
    });

    var voucherTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "voucherTypeUILabel"]
    });

    var voucherTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "voucherTypeUI"]
    });

    var voucherNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "voucherNumberUILabel"]
    });

    var voucherNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "voucherNumberUI"]
    });

    var subVoucherNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "subVoucherNumberUILabel"]
    });

    var subVoucherNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "subVoucherNumberUI"]
    });

    var commentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentUILabel"]
    });

    var commentUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "commentUI"]
    });

    var managerUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "managerUILabel"]
    });

    var managerUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "managerUI"]
    });

    var enteredUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "enteredUILabel"]
    });

    var enteredUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "enteredUI"]
    });

    var preparedUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "preparedUILabel"]
    });

    var preparedUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "preparedUI"]
    });

    var auditorUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "auditorUILabel"]
    });

    var auditorUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "auditorUI"]
    });

    var cashierUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "cashierUILabel"]
    });

    var cashierUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "cashierUI"]
    });

    var receiverUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "receiverUILabel"]
    });

    var receiverUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "receiverUI"]
    });

    var settlementMethodUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "settlementMethodUILabel"]
    });

    var settlementMethodUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "settlementMethodUI"]
    });

    var settlementNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "settlementNumberUILabel"]
    });

    var settlementNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "settlementNumberUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var doubleEntiesUI = new org_shaolin_vogerp_accounting_form_DoubleEntryTable({"prefix":prefix + "doubleEntiesUI."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "commentUILabel",prefix + "commentUI",prefix + "managerUILabel",prefix + "managerUI",prefix + "enteredUILabel",prefix + "enteredUI",prefix + "preparedUILabel",prefix + "preparedUI",prefix + "auditorUILabel",prefix + "auditorUI",prefix + "cashierUILabel",prefix + "cashierUI",prefix + "receiverUILabel",prefix + "receiverUI",prefix + "settlementMethodUILabel",prefix + "settlementMethodUI",prefix + "settlementNumberUILabel",prefix + "settlementNumberUI"]
    });

    var tablePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "tablePanel"]
        ,items: []
        ,subComponents: [prefix + "doubleEntiesUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "createDateUILabel",prefix + "createDateUI",prefix + "voucherTypeUILabel",prefix + "voucherTypeUI",prefix + "voucherNumberUILabel",prefix + "voucherNumberUI",prefix + "subVoucherNumberUILabel",prefix + "subVoucherNumberUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [createDateUILabel,createDateUI,voucherTypeUILabel,voucherTypeUI,voucherNumberUILabel,voucherNumberUI,subVoucherNumberUILabel,subVoucherNumberUI,commentUILabel,commentUI,managerUILabel,managerUI,enteredUILabel,enteredUI,preparedUILabel,preparedUI,auditorUILabel,auditorUI,cashierUILabel,cashierUI,receiverUILabel,receiverUI,settlementMethodUILabel,settlementMethodUI,settlementNumberUILabel,settlementNumberUI,okbtn,cancelbtn,doubleEntiesUI,fieldPanel,tablePanel,bottomPanel,actionPanel]
    });

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.voucherTypeUILabel=voucherTypeUILabel;

    Form.voucherTypeUI=voucherTypeUI;

    Form.voucherNumberUILabel=voucherNumberUILabel;

    Form.voucherNumberUI=voucherNumberUI;

    Form.subVoucherNumberUILabel=subVoucherNumberUILabel;

    Form.subVoucherNumberUI=subVoucherNumberUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.managerUILabel=managerUILabel;

    Form.managerUI=managerUI;

    Form.enteredUILabel=enteredUILabel;

    Form.enteredUI=enteredUI;

    Form.preparedUILabel=preparedUILabel;

    Form.preparedUI=preparedUI;

    Form.auditorUILabel=auditorUILabel;

    Form.auditorUI=auditorUI;

    Form.cashierUILabel=cashierUILabel;

    Form.cashierUI=cashierUI;

    Form.receiverUILabel=receiverUILabel;

    Form.receiverUI=receiverUI;

    Form.settlementMethodUILabel=settlementMethodUILabel;

    Form.settlementMethodUI=settlementMethodUI;

    Form.settlementNumberUILabel=settlementNumberUILabel;

    Form.settlementNumberUI=settlementNumberUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.doubleEntiesUI=doubleEntiesUI;

    Form.fieldPanel=fieldPanel;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.voucherTypeUILabel=voucherTypeUILabel;

    Form.voucherTypeUI=voucherTypeUI;

    Form.voucherNumberUILabel=voucherNumberUILabel;

    Form.voucherNumberUI=voucherNumberUI;

    Form.subVoucherNumberUILabel=subVoucherNumberUILabel;

    Form.subVoucherNumberUI=subVoucherNumberUI;

    Form.tablePanel=tablePanel;

    Form.doubleEntiesUI=doubleEntiesUI;

    Form.bottomPanel=bottomPanel;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.managerUILabel=managerUILabel;

    Form.managerUI=managerUI;

    Form.enteredUILabel=enteredUILabel;

    Form.enteredUI=enteredUI;

    Form.preparedUILabel=preparedUILabel;

    Form.preparedUI=preparedUI;

    Form.auditorUILabel=auditorUILabel;

    Form.auditorUI=auditorUI;

    Form.cashierUILabel=cashierUILabel;

    Form.cashierUI=cashierUI;

    Form.receiverUILabel=receiverUILabel;

    Form.receiverUI=receiverUI;

    Form.settlementMethodUILabel=settlementMethodUILabel;

    Form.settlementMethodUI=settlementMethodUI;

    Form.settlementNumberUILabel=settlementNumberUILabel;

    Form.settlementNumberUI=settlementNumberUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_accounting_form_AccountVoucher */
        /* Construct_LAST:org_shaolin_vogerp_accounting_form_AccountVoucher */
    };

    Form.Save = org_shaolin_vogerp_accounting_form_AccountVoucher_Save;

    Form.Cancel = org_shaolin_vogerp_accounting_form_AccountVoucher_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_accounting_form_AccountVoucher_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.accounting.form.AccountVoucher";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_accounting_form_AccountVoucher */
/* Other_Func_LAST:org_shaolin_vogerp_accounting_form_AccountVoucher */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_AccountVoucher_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_AccountVoucher_Save */
        var o = this;
        var UIEntity = this;

        {    
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
            this.doubleEntiesUI.itemTable.syncBodyDataToServer();
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20150904-084548",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_AccountVoucher_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_AccountVoucher_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_AccountVoucher_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20150904-084548",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_AccountVoucher_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_accounting_form_AccountVoucher_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_accounting_form_AccountVoucher_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_accounting_form_AccountVoucher_invokeDynamicFunction */



