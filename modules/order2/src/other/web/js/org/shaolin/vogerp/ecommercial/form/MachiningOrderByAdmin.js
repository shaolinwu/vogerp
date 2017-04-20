/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectTableUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectTableUI"]
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

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
        ,showMaxLength: 100
    });

    var countUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUILabel"]
    });

    var countUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "countUI"]
    });

    var materialTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "materialTypeUILabel"]
    });

    var taxRateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "taxRateUILabel"]
    });

    var taxRateUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "taxRateUI"]
    });

    var selectMComponentTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "selectMComponentTable"]
        ,style: "display:none;"
    });

    var closeDialogBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "closeDialogBtn"]
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

    var photoUI = new org_shaolin_vogerp_ecommercial_form_CADUploader({"prefix":prefix + "photoUI."});

    var materialTypeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox({"prefix":prefix + "materialTypeUI."});

    var componentTable = new org_shaolin_vogerp_ecommercial_form_MachOrderComponentTable({"prefix":prefix + "componentTable."});

    var machineToolTable = new org_shaolin_vogerp_ecommercial_form_MachOrderToolTable({"prefix":prefix + "machineToolTable."});

    var skinTable = new org_shaolin_vogerp_ecommercial_form_MachOrderSkinTable({"prefix":prefix + "skinTable."});

    var thirdComponentTable = new org_shaolin_vogerp_ecommercial_form_MachOrderThirdCompTable({"prefix":prefix + "thirdComponentTable."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "viewbtn",prefix + "savebtn",prefix + "cancelbtn"]
    });

    var attributePanel1 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel1"]
        ,items: []
        ,subComponents: [prefix + "selectMComponentTable",prefix + "closeDialogBtn"]
    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "countUILabel",prefix + "countUI",prefix + "materialTypeUILabel",prefix + "materialTypeUI",prefix + "taxRateUILabel",prefix + "taxRateUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI",prefix + "attributePanel",prefix + "componentTable",prefix + "machineToolTable",prefix + "skinTable",prefix + "thirdComponentTable",prefix + "attributePanel1"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [selectTableUI,serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,countUILabel,countUI,materialTypeUILabel,taxRateUILabel,taxRateUI,selectMComponentTable,closeDialogBtn,viewbtn,savebtn,cancelbtn,photoUI,materialTypeUI,componentTable,machineToolTable,skinTable,thirdComponentTable,fieldPanel,attributePanel,attributePanel1,actionPanel]
    });

    Form.selectTableUI=selectTableUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.materialTypeUILabel=materialTypeUILabel;

    Form.taxRateUILabel=taxRateUILabel;

    Form.taxRateUI=taxRateUI;

    Form.selectMComponentTable=selectMComponentTable;

    Form.closeDialogBtn=closeDialogBtn;

    Form.viewbtn=viewbtn;

    Form.savebtn=savebtn;

    Form.cancelbtn=cancelbtn;

    Form.photoUI=photoUI;

    Form.materialTypeUI=materialTypeUI;

    Form.componentTable=componentTable;

    Form.machineToolTable=machineToolTable;

    Form.skinTable=skinTable;

    Form.thirdComponentTable=thirdComponentTable;

    Form.fieldPanel=fieldPanel;

    Form.photoUI=photoUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.materialTypeUILabel=materialTypeUILabel;

    Form.materialTypeUI=materialTypeUI;

    Form.taxRateUILabel=taxRateUILabel;

    Form.taxRateUI=taxRateUI;

    Form.componentTable=componentTable;

    Form.machineToolTable=machineToolTable;

    Form.skinTable=skinTable;

    Form.thirdComponentTable=thirdComponentTable;

    Form.attributePanel1=attributePanel1;

    Form.selectMComponentTable=selectMComponentTable;

    Form.closeDialogBtn=closeDialogBtn;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.countUILabel=countUILabel;

    Form.countUI=countUI;

    Form.materialTypeUILabel=materialTypeUILabel;

    Form.materialTypeUI=materialTypeUI;

    Form.taxRateUILabel=taxRateUILabel;

    Form.taxRateUI=taxRateUI;

    Form.attributePanel1=attributePanel1;

    Form.selectMComponentTable=selectMComponentTable;

    Form.closeDialogBtn=closeDialogBtn;

    Form.actionPanel=actionPanel;

    Form.viewbtn=viewbtn;

    Form.savebtn=savebtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin */

        
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
           } else if (tableId.indexOf("thirdComponentTable.itemTable") != -1) {
              othis.selectTableUI.setValue("4"); 
           }
           othis.showSelectOneTable(othis.savebtn);
       };
       this.componentTable.selectOne = overrideSelectOne;
       this.machineToolTable.selectOne = overrideSelectOne;
       this.skinTable.selectOne = overrideSelectOne;
       this.thirdComponentTable.selectOne = overrideSelectOne;
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_Save;

    Form.PreView = org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_PreView;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_Cancel;

    Form.showSelectOneTable = org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_showSelectOneTable;

    Form.CloseDialog = org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_CloseDialog;

    Form.selectedOne = org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_selectedOne;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.MachiningOrderByAdmin";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_PreView(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_PreView */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"preView-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_PreView */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_showSelectOneTable(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_showSelectOneTable */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showSelectOne-20170202-155225",UIMaster.getValue(eventsource),o.__entityName);

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
        }    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_showSelectOneTable */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_CloseDialog(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_CloseDialog */
        var o = this;
        var UIEntity = this;

        { 
            var othis = this;
            if (IS_MOBILEVIEW) {
               $(othis.attributePanel1).parent().dialog("close");
            } else {
               $(othis.attributePanel1).parent().dialog("close");
            }
        }    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_CloseDialog */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_selectedOne(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_selectedOne */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectedOne-20170202-155225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_selectedOne */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_MachiningOrderByAdmin_invokeDynamicFunction */



