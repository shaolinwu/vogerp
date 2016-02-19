/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_EntityManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "reloadPanel",prefix + "ceentityPanel",prefix + "dynamicUIPanel",prefix + "dynamicPageLinkPanel"]
    });
    var reloadPathText = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "reloadPathText"]
    });

    var reloadBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "reloadBtn"]
    });

    var reloadCECacheText = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "reloadCECacheText"]
    });

    var reloadCECacheBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "reloadCECacheBtn"]
    });

    var reloadPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "reloadPanel"]
        ,items: []
        ,subComponents: [prefix + "reloadPathText",prefix + "reloadBtn",prefix + "reloadCECacheText",prefix + "reloadCECacheBtn"]
    });
    var ceentityPanel = new org_shaolin_vogerp_commonmodel_form_CEHierarchy({"prefix":prefix + "ceentityPanel."});

    var dynamicUIPanel = new org_shaolin_vogerp_commonmodel_form_UIDynamicItemManager({"prefix":prefix + "dynamicUIPanel."});

    var dynamicPageLinkPanel = new org_shaolin_vogerp_commonmodel_form_UIDyanimcPageLinkTable({"prefix":prefix + "dynamicPageLinkPanel."});


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

    Form.reloadCECacheText=reloadCECacheText;

    Form.reloadCECacheBtn=reloadCECacheBtn;

    Form.ceentityPanel=ceentityPanel;

    Form.dynamicUIPanel=dynamicUIPanel;

    Form.dynamicPageLinkPanel=dynamicPageLinkPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_EntityManager */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_EntityManager */
    };

    Form.ReloadFunction = org_shaolin_bmdp_adminconsole_page_EntityManager_ReloadFunction;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_EntityManager_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_EntityManager_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.EntityManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_EntityManager */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_EntityManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_EntityManager_ReloadFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_EntityManager_ReloadFunction */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPage",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_EntityManager_ReloadFunction */


    function org_shaolin_bmdp_adminconsole_page_EntityManager_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_EntityManager_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_EntityManager_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_EntityManager_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_EntityManager_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_EntityManager_finalizePageJs */



