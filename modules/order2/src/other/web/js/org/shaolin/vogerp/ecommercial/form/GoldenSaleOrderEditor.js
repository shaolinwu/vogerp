/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,vertical: true
        ,closeOthersByDefault: true
        ,items: []
        ,subComponents: [prefix + "photoPanel",prefix + "prodcutInfoPanel"]
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
        ,placeholder: "请您填写批量非加工类机械产品的销售订单信息。"
    });

    var countUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUILabel"]
    });

    var countUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "countUI"]
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
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "countUILabel",prefix + "countUI",prefix + "estimatedPriceUILabel",prefix + "estimatedPriceUI"]
    });
    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI",prefix + "attributePanel"]
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
        ,subComponents: [prefix + "idUI",prefix + "funcsPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,funcsPanel,saveTempbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.funcsPanel=funcsPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.prodcutInfoPanel=prodcutInfoPanel;

    Form.htmlDescUI=htmlDescUI;

    Form.saveTempbtn=saveTempbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.funcsPanel=funcsPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.prodcutInfoPanel=prodcutInfoPanel;

    Form.htmlDescUI=htmlDescUI;

    Form.actionPanel=actionPanel;

    Form.saveTempbtn=saveTempbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor */

        
        { 
        if (this.idUI.value != "0") {
           //this.funcsPanel.collapseTab(0);
        }
        }
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenSaleOrderEditor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_Save */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenSaleOrderEditor_invokeDynamicFunction */



