/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_InterestEOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var orderInfoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderInfoLabel"]
    });

    var offerPriceInfoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "offerPriceInfoLabel"]
    });

    var changePricebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "changePricebtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var chatUI = new org_shaolin_bmdp_workflow_form_ChatWindow({"prefix":prefix + "chatUI."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "changePricebtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "orderInfoLabel",prefix + "offerPriceInfoLabel",prefix + "chatUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [orderInfoLabel,offerPriceInfoLabel,changePricebtn,cancelbtn,chatUI,fieldPanel,actionPanel]
    });

    Form.orderInfoLabel=orderInfoLabel;

    Form.offerPriceInfoLabel=offerPriceInfoLabel;

    Form.changePricebtn=changePricebtn;

    Form.cancelbtn=cancelbtn;

    Form.chatUI=chatUI;

    Form.fieldPanel=fieldPanel;

    Form.orderInfoLabel=orderInfoLabel;

    Form.offerPriceInfoLabel=offerPriceInfoLabel;

    Form.chatUI=chatUI;

    Form.actionPanel=actionPanel;

    Form.changePricebtn=changePricebtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_InterestEOrder */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_InterestEOrder */
    };

    Form.ChangePrice = org_shaolin_vogerp_ecommercial_form_InterestEOrder_ChangePrice;

    Form.Save = org_shaolin_vogerp_ecommercial_form_InterestEOrder_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_InterestEOrder_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_InterestEOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.InterestEOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_InterestEOrder */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_InterestEOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_InterestEOrder_ChangePrice(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_InterestEOrder_ChangePrice */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ChangePrice-20170111-163402",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_InterestEOrder_ChangePrice */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_InterestEOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_InterestEOrder_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20161111-163402",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_InterestEOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_InterestEOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_InterestEOrder_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20161111-163402",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_InterestEOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_InterestEOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_InterestEOrder_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_InterestEOrder_invokeDynamicFunction */



