/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var isPurchaseOrderUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isPurchaseOrderUILabel"]
    });

    var isPurchaseOrderUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isPurchaseOrderUI"]
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

    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
        ,hiddenToolbar: false
        ,persistable: true
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var photoUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "photoUI."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var prodcutInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "prodcutInfoPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "htmlDescUI"]
    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "isPurchaseOrderUILabel",prefix + "isPurchaseOrderUI",prefix + "rentTypeUILabel",prefix + "rentTypeUI",prefix + "rentDateTypeUILabel",prefix + "rentDateTypeUI",prefix + "estimatedPriceUILabel",prefix + "estimatedPriceUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI",prefix + "createDateUILabel",prefix + "createDateUI"]
    });

    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "photoPanel",prefix + "attributePanel",prefix + "prodcutInfoPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [serialNumberUILabel,serialNumberUI,isPurchaseOrderUILabel,isPurchaseOrderUI,rentTypeUILabel,rentTypeUI,rentDateTypeUILabel,rentDateTypeUI,estimatedPriceUILabel,estimatedPriceUI,publishedCustomerIdUILabel,publishedCustomerIdUI,createDateUILabel,createDateUI,htmlDescUI,okbtn,cancelbtn,photoUI,fieldPanel,photoPanel,attributePanel,prodcutInfoPanel,actionPanel]
    });

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.isPurchaseOrderUILabel=isPurchaseOrderUILabel;

    Form.isPurchaseOrderUI=isPurchaseOrderUI;

    Form.rentTypeUILabel=rentTypeUILabel;

    Form.rentTypeUI=rentTypeUI;

    Form.rentDateTypeUILabel=rentDateTypeUILabel;

    Form.rentDateTypeUI=rentDateTypeUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.htmlDescUI=htmlDescUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.photoUI=photoUI;

    Form.fieldPanel=fieldPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.isPurchaseOrderUILabel=isPurchaseOrderUILabel;

    Form.isPurchaseOrderUI=isPurchaseOrderUI;

    Form.rentTypeUILabel=rentTypeUILabel;

    Form.rentTypeUI=rentTypeUI;

    Form.rentDateTypeUILabel=rentDateTypeUILabel;

    Form.rentDateTypeUI=rentDateTypeUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.prodcutInfoPanel=prodcutInfoPanel;

    Form.htmlDescUI=htmlDescUI;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.isPurchaseOrderUILabel=isPurchaseOrderUILabel;

    Form.isPurchaseOrderUI=isPurchaseOrderUI;

    Form.rentTypeUILabel=rentTypeUILabel;

    Form.rentTypeUI=rentTypeUI;

    Form.rentDateTypeUILabel=rentDateTypeUILabel;

    Form.rentDateTypeUI=rentDateTypeUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.prodcutInfoPanel=prodcutInfoPanel;

    Form.htmlDescUI=htmlDescUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderEditor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
            //this.infoPanel2.itemTable.syncBodyDataToServer();
            this.htmlDescUI.saveBtn.trigger("click");
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160416-173334",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderEditor_invokeDynamicFunction */



