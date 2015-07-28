/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_CacheManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var cacheInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "cacheInfoTable"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [cacheInfoTable,functionsTab]
    });

    Form.cacheInfoTable=cacheInfoTable;

    Form.functionsTab=functionsTab;

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



