/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_EntityManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "reloadPanel",prefix + "ceentityPanel",prefix + "dynamicUIPanel",prefix + "dynamicPageLinkPanel",prefix + "dynamicPageHintsPanel",prefix + "registryTable",prefix + "InterfacePanel"]
    });
    var reloadPathText = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "reloadPathText"]
    });

    var reloadBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "reloadBtn"]
    });

    var reloadPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "reloadPanel"]
        ,items: []
        ,subComponents: [prefix + "reloadPathText",prefix + "reloadBtn"]
    });
    var ceentityPanel = new org_shaolin_vogerp_commonmodel_form_CEExtensionManager({"prefix":prefix + "ceentityPanel."});

    var dynamicUIPanel = new org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager({"prefix":prefix + "dynamicUIPanel."});

    var dynamicPageLinkPanel = new org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable({"prefix":prefix + "dynamicPageLinkPanel."});

    var dynamicPageHintsPanel = new org_shaolin_vogerp_commonmodel_form_UIDyanimcPageHintsTable({"prefix":prefix + "dynamicPageHintsPanel."});

    var registryTable = new org_shaolin_vogerp_commonmodel_form_RegistryTable({"prefix":prefix + "registryTable."});

    var scriptCodeUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "scriptCodeUI"]
    });

    var testBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "testBtn"]
    });

    var InterfacePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "InterfacePanel"]
        ,items: []
        ,subComponents: [prefix + "scriptCodeUI",prefix + "testBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.reloadPanel=reloadPanel;

    Form.reloadPathText=reloadPathText;

    Form.reloadBtn=reloadBtn;

    Form.ceentityPanel=ceentityPanel;

    Form.dynamicUIPanel=dynamicUIPanel;

    Form.dynamicPageLinkPanel=dynamicPageLinkPanel;

    Form.dynamicPageHintsPanel=dynamicPageHintsPanel;

    Form.registryTable=registryTable;

    Form.InterfacePanel=InterfacePanel;

    Form.scriptCodeUI=scriptCodeUI;

    Form.testBtn=testBtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_EntityManager */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_EntityManager */
    };

    Form.ReloadFunction = org_shaolin_vogerp_commonmodel_page_EntityManager_ReloadFunction;

    Form.testScript = org_shaolin_vogerp_commonmodel_page_EntityManager_testScript;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_EntityManager_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_EntityManager_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.EntityManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_EntityManager */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_EntityManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_EntityManager_ReloadFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_EntityManager_ReloadFunction */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reloadFunction-20161011-1513",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_EntityManager_ReloadFunction */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_EntityManager_testScript(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_EntityManager_testScript */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"testScript-20161011-1513",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_EntityManager_testScript */


    function org_shaolin_vogerp_commonmodel_page_EntityManager_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_EntityManager_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_EntityManager_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_EntityManager_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_EntityManager_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_EntityManager_finalizePageJs */



