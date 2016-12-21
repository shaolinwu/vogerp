/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "detailPanel"]
    });
    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var attrPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attrPanel"]
        ,items: []
        ,subComponents: [prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "typeUILabel",prefix + "typeUI"]
    });
    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
        ,hiddenToolbar: true
        ,persistable: false
        ,viewMode: true
        ,height: "300px"
    });

    var detailPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "detailPanel"]
        ,items: []
        ,subComponents: [prefix + "attrPanel",prefix + "htmlDescUI"]
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

    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI"]
    });

    var attributePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attributePanel"]
        ,items: []
        ,subComponents: [prefix + "photoPanel"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "attributePanel",prefix + "functionsTab"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [photoUI,functionsTab,cancelbtn,fieldPanel,attributePanel,photoPanel,actionPanel]
    });

    Form.photoUI=photoUI;

    Form.functionsTab=functionsTab;

    Form.detailPanel=detailPanel;

    Form.attrPanel=attrPanel;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.htmlDescUI=htmlDescUI;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.attributePanel=attributePanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.functionsTab=functionsTab;

    Form.detailPanel=detailPanel;

    Form.attrPanel=attrPanel;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.htmlDescUI=htmlDescUI;

    Form.attributePanel=attributePanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview */
    };

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProdTempDetailOverview";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-201504121132",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProdTempDetailOverview_invokeDynamicFunction */



