/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,vertical: true
        ,items: []
        ,subComponents: [prefix + "photoPanel",prefix + "deliveryInfoPanel"]
    });
    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var publishedCustomerIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUILabel"]
    });

    var publishedCustomerIdUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
        ,placeholder: "???????????????"
    });

    var masterTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "masterTypeUILabel"]
    });

    var masterTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "masterTypeUI"]
      ,allowBlank:false
    });

    var rentDateTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "rentDateTypeUILabel"]
    });

    var rentDateTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "rentDateTypeUI"]
      ,allowBlank:false
    });

    var dateCountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "dateCountUILabel"]
    });

    var dateCountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "dateCountUI"]
        ,isNumber: true
        ,validators:[
        {
            func: function() {
                
	                    { 
	                    return this.value != 0 || this.value != "0";
	                    }
            }
            ,msg: ""
        }
]    });

    var workExpiUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "workExpiUILabel"]
    });

    var workExpiUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "workExpiUI"]
        ,isNumber: true
    });

    var estimatedPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estimatedPriceUILabel"]
    });

    var estimatedPriceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "estimatedPriceUI"]
        ,isNumber: true
        ,validators:[
        {
            func: function() {
                
	                    {
	                        if (this.value.length > 0) {
	                            if (/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(this.value)) {
	                              return true;
	                            } else {
	                              return false;
	                            }
	                        }
	                        return true;
	                    }
	                    
            }
            ,msg: ""
        }
]    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "masterTypeUILabel",prefix + "masterTypeUI",prefix + "rentDateTypeUILabel",prefix + "rentDateTypeUI",prefix + "dateCountUILabel",prefix + "dateCountUI",prefix + "workExpiUILabel",prefix + "workExpiUI",prefix + "estimatedPriceUILabel",prefix + "estimatedPriceUI"]
    });
    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "attributePanel"]
    });
    var deliveryInfoPanel = new org_shaolin_vogerp_commonmodel_form_DeliveryInfoSimpleView({"prefix":prefix + "deliveryInfoPanel."});


    var saveTempbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "saveTempbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "saveTempbtn",prefix + "cancelbtn"]
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
        ,items: [funcsPanel,saveTempbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.funcsPanel=funcsPanel;

    Form.photoPanel=photoPanel;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.masterTypeUILabel=masterTypeUILabel;

    Form.masterTypeUI=masterTypeUI;

    Form.rentDateTypeUILabel=rentDateTypeUILabel;

    Form.rentDateTypeUI=rentDateTypeUI;

    Form.dateCountUILabel=dateCountUILabel;

    Form.dateCountUI=dateCountUI;

    Form.workExpiUILabel=workExpiUILabel;

    Form.workExpiUI=workExpiUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.deliveryInfoPanel=deliveryInfoPanel;

    Form.saveTempbtn=saveTempbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.funcsPanel=funcsPanel;

    Form.photoPanel=photoPanel;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.masterTypeUILabel=masterTypeUILabel;

    Form.masterTypeUI=masterTypeUI;

    Form.rentDateTypeUILabel=rentDateTypeUILabel;

    Form.rentDateTypeUI=rentDateTypeUI;

    Form.dateCountUILabel=dateCountUILabel;

    Form.dateCountUI=dateCountUI;

    Form.workExpiUILabel=workExpiUILabel;

    Form.workExpiUI=workExpiUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.deliveryInfoPanel=deliveryInfoPanel;

    Form.actionPanel=actionPanel;

    Form.saveTempbtn=saveTempbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.RLoanMasterOrderEditor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_RLoanMasterOrderEditor_invokeDynamicFunction */



