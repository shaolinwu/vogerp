/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,items: []
        ,subComponents: [prefix + "photoPanel"]
    });
    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUI"]
        ,showMaxLength: 50
    });

    var dateMethodUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "dateMethodUILabel"]
    });

    var dateMethodUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "dateMethodUI"]
    });

    var publishedCustomerIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUILabel"]
    });

    var publishedCustomerIdUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUI"]
    });

    var createDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUILabel"]
    });

    var createDateUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUI"]
    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "dateMethodUILabel",prefix + "dateMethodUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI",prefix + "createDateUILabel",prefix + "createDateUI"]
    });
    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "attributePanel"]
    });

    var offerPriceBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "offerPriceBtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "offerPriceBtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "funcsPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [funcsPanel,offerPriceBtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.funcsPanel=funcsPanel;

    Form.photoPanel=photoPanel;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.dateMethodUILabel=dateMethodUILabel;

    Form.dateMethodUI=dateMethodUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.offerPriceBtn=offerPriceBtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.funcsPanel=funcsPanel;

    Form.photoPanel=photoPanel;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.dateMethodUILabel=dateMethodUILabel;

    Form.dateMethodUI=dateMethodUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.actionPanel=actionPanel;

    Form.offerPriceBtn=offerPriceBtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_Cancel;

    Form.OfferPrice = org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_OfferPrice;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.RLoanMasterOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_OfferPrice(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_OfferPrice */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"OfferPrice-20160106-214009",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_OfferPrice */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrder_invokeDynamicFunction */



