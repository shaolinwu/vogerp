/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var selectProductTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectProductTypeUI"]
    });

    var selectPTemplateIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectPTemplateIdUI"]
    });

    var searchTemplateUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchTemplateUI"]
        ,placeholder: "??????"
    });

    var pTemplateListUI = new UIMaster.ui.list
    ({
        ui: elementList[prefix + "pTemplateListUI"]
    });

    var addTemplateBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "addTemplateBtn"]
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
        ,subComponents: [prefix + "addTemplateBtn",prefix + "okbtn",prefix + "cancelbtn"]
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
        ,subComponents: [prefix + "selectProductTypeUI",prefix + "selectPTemplateIdUI",prefix + "searchTemplateUI",prefix + "productTypeTree",prefix + "pTemplateListUI"]
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
        ,items: [selectProductTypeUI,selectPTemplateIdUI,searchTemplateUI,pTemplateListUI,addTemplateBtn,okbtn,cancelbtn,productTypeTree,fieldPanel,firstPanel,secondPanel,actionPanel]
    });

    Form.selectProductTypeUI=selectProductTypeUI;

    Form.selectPTemplateIdUI=selectPTemplateIdUI;

    Form.searchTemplateUI=searchTemplateUI;

    Form.pTemplateListUI=pTemplateListUI;

    Form.addTemplateBtn=addTemplateBtn;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.productTypeTree=productTypeTree;

    Form.fieldPanel=fieldPanel;

    Form.firstPanel=firstPanel;

    Form.selectProductTypeUI=selectProductTypeUI;

    Form.selectPTemplateIdUI=selectPTemplateIdUI;

    Form.searchTemplateUI=searchTemplateUI;

    Form.productTypeTree=productTypeTree;

    Form.pTemplateListUI=pTemplateListUI;

    Form.secondPanel=secondPanel;

    Form.firstPanel=firstPanel;

    Form.selectProductTypeUI=selectProductTypeUI;

    Form.selectPTemplateIdUI=selectPTemplateIdUI;

    Form.searchTemplateUI=searchTemplateUI;

    Form.productTypeTree=productTypeTree;

    Form.pTemplateListUI=pTemplateListUI;

    Form.secondPanel=secondPanel;

    Form.actionPanel=actionPanel;

    Form.addTemplateBtn=addTemplateBtn;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector */

        
        { 
        var o = this;
        window.setTimeout(function(){
            // any ajax operation must be settle down as delay after invoking user constructor code.
	        o.selectProductType(o.productTypeTree.typeUI);
	        o.selectPTemplate(o.pTemplateListUI);
        },500);
        }
            /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector */
    };

    Form.selectProductType = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectProductType;

    Form.selectPTemplate = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectPTemplate;

    Form.addTemplate = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_addTemplate;

    Form.searchTemplate = org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_searchTemplate;

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
        var o = this;
        var UIEntity = this;
        this.productTypeTree.selectItem(eventsource,event);

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectProductType-20150604847",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectProductType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectPTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectPTemplate */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectPTemplate-20160109-2247",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_selectPTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_addTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_addTemplate */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"addTemplate-20160109-2247",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_addTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_searchTemplate(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_searchTemplate */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"searchTemplate-20160109-2247",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_searchTemplate */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1358686533",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Save */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductTemplateSelector_invokeDynamicFunction */



