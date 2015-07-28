/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_CacheManager(json)
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

    var reloadPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "reloadPanel"]
        ,items: []
        ,subComponents: [prefix + "reloadPathText",prefix + "reloadBtn",prefix + "reloadCECacheText",prefix + "reloadCECacheBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [reloadPathText,reloadBtn,reloadCECacheText,reloadCECacheBtn,reloadPanel]
    });

    Form.reloadPathText=reloadPathText;

    Form.reloadBtn=reloadBtn;

    Form.reloadCECacheText=reloadCECacheText;

    Form.reloadCECacheBtn=reloadCECacheBtn;

    Form.reloadPanel=reloadPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_CacheManager */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_CacheManager */
    };

    Form.ReloadFunction = org_shaolin_bmdp_adminconsole_page_CacheManager_ReloadFunction;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_CacheManager_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_CacheManager_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.CacheManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_CacheManager */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_CacheManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_CacheManager_ReloadFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_CacheManager_ReloadFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPage",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_ReloadFunction */


    function org_shaolin_bmdp_adminconsole_page_CacheManager_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_CacheManager_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_CacheManager_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_CacheManager_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_finalizePageJs */



