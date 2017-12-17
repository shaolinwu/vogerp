/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningOrder(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectTableUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectTableUI"]
    });

    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,vertical: true
        ,closeOthersByDefault: true
        ,items: []
        ,subComponents: [prefix + "basicInfoPanel",prefix + "configInfoPanel",prefix + "deliveryInfoPanel"]
    });
    var photoUIForm = new org_shaolin_vogerp_ecommercial_form_CADUploader({"prefix":prefix + "photoUIForm."});

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
        ,placeholder: "请详细写明您的加工要求。"
    });

    var differentiationUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "differentiationUILabel"]
    });

    var differentiationUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "differentiationUI"]
        ,showMaxLength: 100
        ,placeholder: "请详细写明您的加工公差要求。"
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

    var materialTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "materialTypeUILabel"]
    });

    var materialTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "materialTypeUI"]
      ,allowBlank:false
        ,validators:[
        {
            func: function() {
                
	                    { 
	                    return this.value != "org.shaolin.vogerp.ecommercial.ce.MachiningMaterialType";
	                    }
            }
            ,msg: "\u8BF7\u9009\u62E9\u52A0\u5DE5\u6750\u6599\uFF01"
        }
]    });

    var needCreateModelUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "needCreateModelUILabel"]
    });

    var needCreateModelUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "needCreateModelUI"]
    });

    var termsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "termsUILabel"]
    });

    var termsUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "termsUI"]
        ,label: "同意《加工协议书》"
        ,mustCheck: true
        ,checked: true
    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "differentiationUILabel",prefix + "differentiationUI",prefix + "countUILabel",prefix + "countUI",prefix + "materialTypeUILabel",prefix + "materialTypeUI",prefix + "needCreateModelUILabel",prefix + "needCreateModelUI",prefix + "termsUILabel",prefix + "termsUI"]
    });
    var basicInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "basicInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUIForm",prefix + "attributePanel"]
    });
    var componentTable = new org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable({"prefix":prefix + "componentTable."});

    var machineToolTable = new org_shaolin_vogerp_ecommercial_form_MachOrderToolTable({"prefix":prefix + "machineToolTable."});

    var skinTable = new org_shaolin_vogerp_ecommercial_form_MachOrderSkinTable({"prefix":prefix + "skinTable."});

    var selectMComponentTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "selectMComponentTable"]
        ,style: "display:none;"
    });

    var closeDialogBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "closeDialogBtn"]
    });

    var attributePanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel1"]
        ,items: []
        ,subComponents: [prefix + "selectMComponentTable",prefix + "closeDialogBtn"]
    });
    var configInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "configInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "componentTable",prefix + "machineToolTable",prefix + "skinTable",prefix + "attributePanel1"]
    });
    var deliveryInfoUI = new org_shaolin_vogerp_ecommercial_form_DeliveryInfoSimpleView({"prefix":prefix + "deliveryInfoUI."});

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

    var viewbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "viewbtn"]
    });

    var savebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "savebtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "viewbtn",prefix + "savebtn",prefix + "cancelbtn"]
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
        ,items: [selectTableUI,funcsPanel,viewbtn,savebtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.selectTableUI=selectTableUI;

    Form.funcsPanel=funcsPanel;

    Form.basicInfoPanel=basicInfoPanel;

    Form.photoUIForm=photoUIForm;

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

    Form.needCreateModelUILabel=needCreateModelUILabel;

    Form.needCreateModelUI=needCreateModelUI;

    Form.termsUILabel=termsUILabel;

    Form.termsUI=termsUI;

    Form.configInfoPanel=configInfoPanel;

    Form.componentTable=componentTable;

    Form.machineToolTable=machineToolTable;

    Form.skinTable=skinTable;

    Form.attributePanel1=attributePanel1;

    Form.selectMComponentTable=selectMComponentTable;

    Form.closeDialogBtn=closeDialogBtn;

    Form.deliveryInfoPanel=deliveryInfoPanel;

    Form.deliveryInfoUI=deliveryInfoUI;

    Form.invoiceTypeUILabel=invoiceTypeUILabel;

    Form.invoiceTypeUI=invoiceTypeUI;

    Form.invoiceSignUILabel=invoiceSignUILabel;

    Form.invoiceSignUI=invoiceSignUI;

    Form.viewbtn=viewbtn;

    Form.savebtn=savebtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.funcsPanel=funcsPanel;

    Form.basicInfoPanel=basicInfoPanel;

    Form.photoUIForm=photoUIForm;

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

    Form.needCreateModelUILabel=needCreateModelUILabel;

    Form.needCreateModelUI=needCreateModelUI;

    Form.termsUILabel=termsUILabel;

    Form.termsUI=termsUI;

    Form.configInfoPanel=configInfoPanel;

    Form.componentTable=componentTable;

    Form.machineToolTable=machineToolTable;

    Form.skinTable=skinTable;

    Form.attributePanel1=attributePanel1;

    Form.selectMComponentTable=selectMComponentTable;

    Form.closeDialogBtn=closeDialogBtn;

    Form.deliveryInfoPanel=deliveryInfoPanel;

    Form.deliveryInfoUI=deliveryInfoUI;

    Form.invoiceTypeUILabel=invoiceTypeUILabel;

    Form.invoiceTypeUI=invoiceTypeUI;

    Form.invoiceSignUILabel=invoiceSignUILabel;

    Form.invoiceSignUI=invoiceSignUI;

    Form.actionPanel=actionPanel;

    Form.viewbtn=viewbtn;

    Form.savebtn=savebtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrder */

        
       $(this.attributePanel1).parent().css("display", "none");
       $(this.attributePanel1).css("display", "block");
       var othis = this;
       var overrideSelectOne = function(tableId) {
           if (tableId.indexOf("componentTable.itemTable") != -1) {
              othis.selectTableUI.setValue("1"); 
           } else if (tableId.indexOf("machineToolTable.itemTable") != -1) {
              othis.selectTableUI.setValue("2"); 
           } else if (tableId.indexOf("skinTable.itemTable") != -1) {
              othis.selectTableUI.setValue("3"); 
           } 
           othis.showSelectOneTable(othis.cancelbtn);
       };
       this.componentTable.selectOne = overrideSelectOne;
       this.machineToolTable.selectOne = overrideSelectOne;
       this.skinTable.selectOne = overrideSelectOne;
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrder */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_MachiningOrder_Save;

    Form.NotifyHurly = org_shaolin_vogerp_ecommercial_form_MachiningOrder_NotifyHurly;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_MachiningOrder_Cancel;

    Form.openUserTerms = org_shaolin_vogerp_ecommercial_form_MachiningOrder_openUserTerms;

    Form.selectedOne = org_shaolin_vogerp_ecommercial_form_MachiningOrder_selectedOne;

    Form.showSelectOneTable = org_shaolin_vogerp_ecommercial_form_MachiningOrder_showSelectOneTable;

    Form.CloseDialog = org_shaolin_vogerp_ecommercial_form_MachiningOrder_CloseDialog;

    Form.TempSave = org_shaolin_vogerp_ecommercial_form_MachiningOrder_TempSave;

    Form.PreView = org_shaolin_vogerp_ecommercial_form_MachiningOrder_PreView;

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
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_selectedOne(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_selectedOne */
        var o = this;
        var UIEntity = this;

        { 
            this.componentTable.itemTable.sync();
            this.machineToolTable.itemTable.sync();
            this.skinTable.itemTable.sync();
            this.selectMComponentTable.sync();
        }
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedOne-20171202-110225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_selectedOne */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_showSelectOneTable(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_showSelectOneTable */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showSelectOne-20171202-155225",UIMaster.getValue(eventsource),o.__entityName);

        { 
            var othis = this;
            if (IS_MOBILEVIEW) {
               $(othis.attributePanel1).parent().dialog({
                    height: ($(window.top).height()),
                    width: "100%",
                    modal: true,
                    closeOnEscape: true,
                    open: function(event, ui) {
                       $(othis.selectMComponentTable).css("display", "block");
                       $(othis.attributePanel1).parent().css("display", "block");
                    },
                    beforeClose: function() {
                       $(othis.attributePanel1).parent().css("display", "none");
                    }
                });
            } else {
               $(othis.attributePanel1).parent().dialog({
                    height: "300",
                    width: "400",
                    modal: true,
                    closeOnEscape: true,
                    open: function(event, ui) {
                       $(othis.attributePanel1).parent().css("display", "block");
                    },
                    beforeClose: function() {
                       $(othis.attributePanel1).parent().css("display", "none");
                    }
                });
            }
        }    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_showSelectOneTable */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_CloseDialog(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_CloseDialog */
        var o = this;
        var UIEntity = this;

        { 
            var othis = this;
            if (IS_MOBILEVIEW) {
               $(othis.attributePanel1).parent().dialog("close");
            } else {
               $(othis.attributePanel1).parent().dialog("close");
            }
        }    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_CloseDialog */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_TempSave(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_TempSave */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"tempSaveDetail-20171225-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_TempSave */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrder_PreView(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrder_PreView */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"preView-201701225-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrder_PreView */


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



