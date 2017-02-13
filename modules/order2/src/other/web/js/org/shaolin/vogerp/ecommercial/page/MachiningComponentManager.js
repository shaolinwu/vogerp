/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "materialInfoPanel",prefix + "mToolInfoPanel",prefix + "skinInfoPanel",prefix + "thirdCompInfoPanel"]
    });
    var mComponentTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "mComponentTable"]
    });

    var materialInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "materialInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "mComponentTable"]
    });
    var mToolTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "mToolTable"]
    });

    var mToolInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "mToolInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "mToolTable"]
    });
    var skinHandleTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "skinHandleTable"]
    });

    var skinInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "skinInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "skinHandleTable"]
    });
    var thirdCompTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "thirdCompTable"]
    });

    var thirdCompInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "thirdCompInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "thirdCompTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.materialInfoPanel=materialInfoPanel;

    Form.mComponentTable=mComponentTable;

    Form.mToolInfoPanel=mToolInfoPanel;

    Form.mToolTable=mToolTable;

    Form.skinInfoPanel=skinInfoPanel;

    Form.skinHandleTable=skinHandleTable;

    Form.thirdCompInfoPanel=thirdCompInfoPanel;

    Form.thirdCompTable=thirdCompTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager */
    };

    Form.createComponent = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createComponent;

    Form.openComponent = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openComponent;

    Form.createMachineTools = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createMachineTools;

    Form.openMachineTools = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openMachineTools;

    Form.createSkinHandler = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createSkinHandler;

    Form.openSkinHandler = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openSkinHandler;

    Form.createThirdComponent = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createThirdComponent;

    Form.openThirdComponent = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openThirdComponent;

    Form.deleteComponent = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteComponent;

    Form.deleteSkinHandler = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteSkinHandler;

    Form.deleteMachineTools = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteMachineTools;

    Form.deleteThirdComponent = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteThirdComponent;

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.MachiningComponentManager";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createComponent-20160602",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createMachineTools(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createMachineTools */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createMachineTools-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createMachineTools */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openMachineTools(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openMachineTools */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMachineTools-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openMachineTools */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createSkinHandler(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createSkinHandler */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createSkinHandler-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createSkinHandler */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openSkinHandler(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openSkinHandler */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openSkinHandler-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openSkinHandler */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createThirdComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createThirdComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createThirdComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_createThirdComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openThirdComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openThirdComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openThirdComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_openThirdComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteComponent */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteSkinHandler(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteSkinHandler */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteSkinHandler-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteSkinHandler */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteMachineTools(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteMachineTools */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteMachineTools-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteMachineTools */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteThirdComponent(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteThirdComponent */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteThirdComponent-2016-0124-1351",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_deleteThirdComponent */


    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_finalizePageJs */



