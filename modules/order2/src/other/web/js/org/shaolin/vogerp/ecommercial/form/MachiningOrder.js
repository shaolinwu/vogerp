/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,vertical: true
        ,closeOthersByDefault: true
        ,items: []
        ,subComponents: [prefix + "basicInfoPanel",prefix + "deliveryInfoPanel"]
    });
    var photoUI = new org_shaolin_vogerp_ecommercial_form_CADUploader({"prefix":prefix + "photoUI."});

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
        ,showMaxLength: 100
        ,placeholder: "????????????"
    });

    var differentiationUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "differentiationUILabel"]
    });

    var differentiationUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "differentiationUI"]
        ,showMaxLength: 100
        ,placeholder: "??????????????"
    });

    var countUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUILabel"]
    });

    var countUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "countUI"]
        ,isNumber: true
    });

    var materialTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "materialTypeUILabel"]
    });

    var materialTypeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox({"prefix":prefix + "materialTypeUI."});

    var needCreateModelUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "needCreateModelUI"]
        ,label: "?????????"
    });

    var termsUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "termsUI"]
        ,label: "?????????"
        ,mustCheck: true
        ,checked: true
    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "differentiationUILabel",prefix + "differentiationUI",prefix + "countUILabel",prefix + "countUI",prefix + "materialTypeUILabel",prefix + "materialTypeUI",prefix + "needCreateModelUI",prefix + "termsUI"]
    });
    var basicInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "basicInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI",prefix + "attributePanel"]
    });
    var deliveryInfoUI = new org_shaolin_vogerp_commonmodel_form_DeliveryInfoSimpleView({"prefix":prefix + "deliveryInfoUI."});

    var invoiceTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "invoiceTypeUILabel"]
    });

    var invoiceTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "invoiceTypeUI"]
    });

    var invoiceSignUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "invoiceSignUILabel"]
    });

    var invoiceSignUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "invoiceSignUI"]
    });

    var deliveryInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "deliveryInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "deliveryInfoUI",prefix + "invoiceTypeUILabel",prefix + "invoiceTypeUI",prefix + "invoiceSignUILabel",prefix + "invoiceSignUI"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
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
        ,items: [funcsPanel,cancelbtn,fieldPanel,actionPanel]
    });

    Form.funcsPanel=funcsPanel;

    Form.basicInfoPanel=basicInfoPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.differentiationUILabel=differentiationUILabel;

    Form.differentiationUI=differentiationUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.materialTypeUILabel=materialTypeUILabel;

    Form.materialTypeUI=materialTypeUI;

    Form.needCreateModelUI=needCreateModelUI;

    Form.termsUI=termsUI;

    Form.deliveryInfoPanel=deliveryInfoPanel;

    Form.deliveryInfoUI=deliveryInfoUI;

    Form.invoiceTypeUILabel=invoiceTypeUILabel;

    Form.invoiceTypeUI=invoiceTypeUI;

    Form.invoiceSignUILabel=invoiceSignUILabel;

    Form.invoiceSignUI=invoiceSignUI;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.funcsPanel=funcsPanel;

    Form.basicInfoPanel=basicInfoPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.differentiationUILabel=differentiationUILabel;

    Form.differentiationUI=differentiationUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.materialTypeUILabel=materialTypeUILabel;

    Form.materialTypeUI=materialTypeUI;

    Form.needCreateModelUI=needCreateModelUI;

    Form.termsUI=termsUI;

    Form.deliveryInfoPanel=deliveryInfoPanel;

    Form.deliveryInfoUI=deliveryInfoUI;

    Form.invoiceTypeUILabel=invoiceTypeUILabel;

    Form.invoiceTypeUI=invoiceTypeUI;

    Form.invoiceSignUILabel=invoiceSignUILabel;

    Form.invoiceSignUI=invoiceSignUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrder */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrder */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_MachiningOrder_Save;

    Form.NotifyHurly = org_shaolin_vogerp_ecommercial_form_MachiningOrder_NotifyHurly;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_MachiningOrder_Cancel;

    Form.openUserTerms = org_shaolin_vogerp_ecommercial_form_MachiningOrder_openUserTerms;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachiningOrder_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachiningOrder";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrder */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrder */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_NotifyHurly(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_NotifyHurly */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"NotifyHurly-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_NotifyHurly */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_openUserTerms(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_openUserTerms */
        var o = this;
        var UIEntity = this;

        {   
            UIMaster.ui.mask.openHtml("/html/hints/machorderterms.html");
        }
            }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_openUserTerms */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_invokeDynamicFunction */



