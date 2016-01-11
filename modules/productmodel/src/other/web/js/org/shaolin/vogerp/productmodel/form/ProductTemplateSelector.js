/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectProductNodeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectProductNodeUI"]
    });

    var productListUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "productListUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var productTypeTree = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithList({"prefix":prefix + "productTypeTree."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var secondPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "secondPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: []
    });

    var firstPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "firstPanel"]
        ,items: []
        ,subComponents: [prefix + "selectProductNodeUI",prefix + "productTypeTree",prefix + "productListUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "firstPanel",prefix + "secondPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [selectProductNodeUI,productListUI,okbtn,cancelbtn,productTypeTree,fieldPanel,firstPanel,secondPanel,actionPanel]
    });

    Form.selectProductNodeUI=selectProductNodeUI;

    Form.productListUI=productListUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.productTypeTree=productTypeTree;

    Form.fieldPanel=fieldPanel;

    Form.firstPanel=firstPanel;

    Form.selectProductNodeUI=selectProductNodeUI;

    Form.productTypeTree=productTypeTree;

    Form.productListUI=productListUI;

    Form.secondPanel=secondPanel;

    Form.firstPanel=firstPanel;

    Form.selectProductNodeUI=selectProductNodeUI;

    Form.productTypeTree=productTypeTree;

    Form.productListUI=productListUI;

    Form.secondPanel=secondPanel;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector */
    };

    Form.selectProductType = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectProductType;

    Form.selectPTemplate = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectPTemplate;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Cancel;

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Save;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductTemplateSelector";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectProductType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectProductType */
        this.productTypeTree.selectItem(eventsource,event);

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProductType-20150604847",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectProductType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectPTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectPTemplate */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectPTemplate-20160109-2247",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectPTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1358686533",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Save */

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_invokeDynamicFunction */



