/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,vertical: true
        ,items: []
        ,subComponents: [prefix + "photoPanel",prefix + "deliveryInfoPanel",prefix + "prodcutInfoPanel"]
    });
    var photoUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "photoUI."});

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

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var rentTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "rentTypeUILabel"]
    });

    var rentTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "rentTypeUI"]
    });

    var rentDateTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "rentDateTypeUILabel"]
    });

    var rentDateTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "rentDateTypeUI"]
    });

    var estimatedPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estimatedPriceUILabel"]
    });

    var estimatedPriceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "estimatedPriceUI"]
    });

    var finalPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "finalPriceUILabel"]
    });

    var finalPriceUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "finalPriceUI"]
    });

    var expiredDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expiredDateUILabel"]
    });

    var expiredDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "expiredDateUI"]
    });

    var publishedCustomerIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUILabel"]
    });

    var publishedCustomerIdUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUI"]
    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "rentTypeUILabel",prefix + "rentTypeUI",prefix + "rentDateTypeUILabel",prefix + "rentDateTypeUI",prefix + "estimatedPriceUILabel",prefix + "estimatedPriceUI",prefix + "finalPriceUILabel",prefix + "finalPriceUI",prefix + "expiredDateUILabel",prefix + "expiredDateUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI"]
    });
    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI",prefix + "attributePanel"]
    });
    var deliveryInfoUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithDeliveryInfo({"prefix":prefix + "deliveryInfoUI."});

    var deliveryInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "deliveryInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "deliveryInfoUI"]
    });
    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
        ,hiddenToolbar: false
        ,persistable: true
        ,height: "300px"
    });

    var prodcutInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "prodcutInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "htmlDescUI"]
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
        ,subComponents: [prefix + "funcsPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [funcsPanel,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.funcsPanel=funcsPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.rentTypeUILabel=rentTypeUILabel;

    Form.rentTypeUI=rentTypeUI;

    Form.rentDateTypeUILabel=rentDateTypeUILabel;

    Form.rentDateTypeUI=rentDateTypeUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.finalPriceUILabel=finalPriceUILabel;

    Form.finalPriceUI=finalPriceUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.deliveryInfoPanel=deliveryInfoPanel;

    Form.deliveryInfoUI=deliveryInfoUI;

    Form.prodcutInfoPanel=prodcutInfoPanel;

    Form.htmlDescUI=htmlDescUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.funcsPanel=funcsPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.rentTypeUILabel=rentTypeUILabel;

    Form.rentTypeUI=rentTypeUI;

    Form.rentDateTypeUILabel=rentDateTypeUILabel;

    Form.rentDateTypeUI=rentDateTypeUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.finalPriceUILabel=finalPriceUILabel;

    Form.finalPriceUI=finalPriceUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.deliveryInfoPanel=deliveryInfoPanel;

    Form.deliveryInfoUI=deliveryInfoUI;

    Form.prodcutInfoPanel=prodcutInfoPanel;

    Form.htmlDescUI=htmlDescUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.RentOrLoanOrderEditor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
            this.htmlDescUI.saveBtn.trigger("click");
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RentOrLoanOrderEditor_invokeDynamicFunction */



