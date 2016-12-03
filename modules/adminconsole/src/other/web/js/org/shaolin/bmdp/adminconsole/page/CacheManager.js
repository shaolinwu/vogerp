/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_CacheManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var cacheMaxSizeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "cacheMaxSizeUI"]
    });

    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "cacheListPanel",prefix + "lifeServicePanel"]
    });
    var cacheInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "cacheInfoTable"]
    });

    var cacheListPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "cacheListPanel"]
        ,items: []
        ,subComponents: [prefix + "cacheInfoTable"]
    });
    var lifeServiceTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "lifeServiceTable"]
    });

    var lifeServicePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "lifeServicePanel"]
        ,items: []
        ,subComponents: [prefix + "lifeServiceTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [cacheMaxSizeUI,functionsTab]
    });

    Form.cacheMaxSizeUI=cacheMaxSizeUI;

    Form.functionsTab=functionsTab;

    Form.cacheListPanel=cacheListPanel;

    Form.cacheInfoTable=cacheInfoTable;

    Form.lifeServicePanel=lifeServicePanel;

    Form.lifeServiceTable=lifeServiceTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_CacheManager */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_CacheManager */
    };

    Form.ReloadFunction = org_shaolin_bmdp_adminconsole_page_CacheManager_ReloadFunction;

    Form.reloadLifecycleService = org_shaolin_bmdp_adminconsole_page_CacheManager_reloadLifecycleService;

    Form.calculateCache = org_shaolin_bmdp_adminconsole_page_CacheManager_calculateCache;

    Form.updateMaxSize = org_shaolin_bmdp_adminconsole_page_CacheManager_updateMaxSize;

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
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openPage",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_ReloadFunction */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_CacheManager_reloadLifecycleService(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_CacheManager_reloadLifecycleService */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"reloadLifecycleService-20151212-1049",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_reloadLifecycleService */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_CacheManager_calculateCache(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_CacheManager_calculateCache */
        var o = this;
        var UIEntity = this;

	         
	         
	             }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_calculateCache */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_CacheManager_updateMaxSize(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_CacheManager_updateMaxSize */
        var o = this;
        var UIEntity = this;

	         {
	          var o = this;
	          new UIMaster.ui.dialog({
	              dialogType: UIMaster.ui.dialog.INPUT_DIALOG,
	              message:'\u8BF7\u8F93\u5165\u65B0\u7684\u4E8C\u7EA7\u7F13\u5B58\u6700\u5927\u503C',
	              messageType:UIMaster.ui.dialog.Information,
	              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
	              title:'',
	              height:150,
	              width:300,
	              handler: function(v) {
	                 if (this.value == null || this.value == "" || isNaN(this.value) || parseInt(this.value) < 1) {
	                    return;
	                 }
	                 Form.cacheMaxSizeUI.setValue(this.value);
	                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"updateMaxSize-2016122-0849",UIMaster.getValue(eventsource),o.__entityName);
	              }
	          }).open();
	          return;
	         }
	         
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"updateMaxSize-2016122-0849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_updateMaxSize */


    function org_shaolin_bmdp_adminconsole_page_CacheManager_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_CacheManager_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_CacheManager_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_CacheManager_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_CacheManager_finalizePageJs */



