/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductDetailOverview(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
    });

    var pricePackageUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pricePackageUILabel"]
    });

    var pricePackageUI = new UIMaster.ui.matrix
    ({
        ui: elementList[prefix + "pricePackageUI"]
    });

    var amountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "amountUILabel"]
    });

    var amountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "amountUI"]
    });

    var orderActionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderActionUILabel"]
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

    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: ["detailPanel",""]
    });
    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
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

    var typeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox({"prefix":prefix + "typeUI."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var attrPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "attrPanel"]
        ,items: []
        ,subComponents: [prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "typeUILabel",prefix + "typeUI"]
    });

    var orderActionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "orderActionPanel"]
        ,items: []
        ,subComponents: []
    });

    var orderPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "orderPanel"]
        ,items: []
        ,subComponents: [prefix + "pricePackageUILabel",prefix + "pricePackageUI",prefix + "amountUILabel",prefix + "amountUI",prefix + "orderActionUILabel",prefix + "orderActionPanel"]
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
        ,subComponents: [prefix + "photoPanel",prefix + "orderPanel"]
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
        ,items: [photoUI,pricePackageUILabel,pricePackageUI,amountUILabel,amountUI,orderActionUILabel,nameUILabel,nameUI,descriptionUILabel,descriptionUI,typeUILabel,htmlDescUI,functionsTab,cancelbtn,typeUI,fieldPanel,attributePanel,photoPanel,orderPanel,orderActionPanel,attrPanel,actionPanel]
    });

    Form.photoUI=photoUI;

    Form.pricePackageUILabel=pricePackageUILabel;

    Form.pricePackageUI=pricePackageUI;

    Form.amountUILabel=amountUILabel;

    Form.amountUI=amountUI;

    Form.orderActionUILabel=orderActionUILabel;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.typeUILabel=typeUILabel;

    Form.htmlDescUI=htmlDescUI;

    Form.functionsTab=functionsTab;

    Form.cancelbtn=cancelbtn;

    Form.typeUI=typeUI;

    Form.fieldPanel=fieldPanel;

    Form.attributePanel=attributePanel;

    Form.photoPanel=photoPanel;

    Form.orderPanel=orderPanel;

    Form.orderActionPanel=orderActionPanel;

    Form.attrPanel=attrPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductDetailOverview */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductDetailOverview */
    };

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductDetailOverview_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductDetailOverview_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductDetailOverview";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductDetailOverview */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductDetailOverview */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductDetailOverview_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductDetailOverview_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-201504121132",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductDetailOverview_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductDetailOverview_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductDetailOverview_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductDetailOverview_invokeDynamicFunction */



