/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_Product(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var funcsPanel = new UIMaster.ui.prenextpanel
    ({
        ui: elementList[prefix + "funcsPanel"]
        ,vertical: true
        ,items: []
        ,subComponents: [prefix + "infoPanel0",prefix + "htmlPanel"]
    });
    var templateIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "templateIdUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new org_shaolin_vogerp_productmodel_form_ProductHierarchySelector({"prefix":prefix + "typeUI."});

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var priceInfoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceInfoLabel"]
    });

    var infoPanel1 = new org_shaolin_vogerp_productmodel_form_ProductPriceTable({"prefix":prefix + "infoPanel1."});

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "priceInfoLabel",prefix + "infoPanel1"]
    });
    var infoPanel0 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "infoPanel0"]
        ,items: []
        ,subComponents: [prefix + "templateIdUI",prefix + "attributePanel"]
    });
    var photoUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "photoUI."});

    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI"]
    });
    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
        ,height: "300px"
    });

    var htmlPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "htmlPanel"]
        ,items: []
        ,subComponents: [prefix + "photoPanel",prefix + "htmlDescUI"]
    });

    var importTemplate = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "importTemplate"]
    });

    var previewbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "previewbtn"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var closebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "closebtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "importTemplate",prefix + "previewbtn",prefix + "okbtn",prefix + "closebtn"]
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
        ,items: [funcsPanel,importTemplate,previewbtn,okbtn,closebtn,fieldPanel,actionPanel]
    });

    Form.funcsPanel=funcsPanel;

    Form.infoPanel0=infoPanel0;

    Form.templateIdUI=templateIdUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.priceInfoLabel=priceInfoLabel;

    Form.infoPanel1=infoPanel1;

    Form.htmlPanel=htmlPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.htmlDescUI=htmlDescUI;

    Form.importTemplate=importTemplate;

    Form.previewbtn=previewbtn;

    Form.okbtn=okbtn;

    Form.closebtn=closebtn;

    Form.fieldPanel=fieldPanel;

    Form.funcsPanel=funcsPanel;

    Form.infoPanel0=infoPanel0;

    Form.templateIdUI=templateIdUI;

    Form.attributePanel=attributePanel;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.priceInfoLabel=priceInfoLabel;

    Form.infoPanel1=infoPanel1;

    Form.htmlPanel=htmlPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.htmlDescUI=htmlDescUI;

    Form.actionPanel=actionPanel;

    Form.importTemplate=importTemplate;

    Form.previewbtn=previewbtn;

    Form.okbtn=okbtn;

    Form.closebtn=closebtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_Product */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_Product */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_Product_Save;

    Form.openProductTempSelector = org_shaolin_vogerp_productmodel_form_Product_openProductTempSelector;

    Form.SaveSelectedTemplate = org_shaolin_vogerp_productmodel_form_Product_SaveSelectedTemplate;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_Product_Cancel;

    Form.openProductOverview = org_shaolin_vogerp_productmodel_form_Product_openProductOverview;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_Product_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.Product";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_Product */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_Product */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
            constraint_result = this.typeUI.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
            this.infoPanel1.itemTable.syncBodyDataToServer();
            this.htmlDescUI.saveBtn.trigger("click");
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-201504121132",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_openProductTempSelector(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_openProductTempSelector */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductTempSelector-201601091120",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_openProductTempSelector */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_SaveSelectedTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_SaveSelectedTemplate */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SaveSelectedTemplate-201504121132",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_SaveSelectedTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-201504121132",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_openProductOverview(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_openProductOverview */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openProductOverview-20160317-454353",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_openProductOverview */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_Product_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_Product_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_Product_invokeDynamicFunction */



