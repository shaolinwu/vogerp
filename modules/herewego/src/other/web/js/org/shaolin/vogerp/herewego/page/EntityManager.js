/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_EntityManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
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

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
    });

    var ceentityPanel = new org_shaolin_vogerp_commonmodel_form_CEExtensionManager({"prefix":prefix + "ceentityPanel."});

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [reloadPathText,reloadBtn,reloadCECacheText,reloadCECacheBtn,functionsTab,ceentityPanel]
    });

    Form.reloadPathText=reloadPathText;

    Form.reloadBtn=reloadBtn;

    Form.reloadCECacheText=reloadCECacheText;

    Form.reloadCECacheBtn=reloadCECacheBtn;

    Form.functionsTab=functionsTab;

    Form.ceentityPanel=ceentityPanel;

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

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPage",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_EntityManager_ReloadFunction */


    function org_shaolin_bmdp_adminconsole_page_EntityManager_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_EntityManager_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_EntityManager_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_EntityManager_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_EntityManager_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_EntityManager_finalizePageJs */



