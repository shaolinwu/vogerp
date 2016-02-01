/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_ModuleManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "moduleInfoPanel",prefix + "topPanel"]
    });
    var allOrgsUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "allOrgsUI"]
    });

    var moduleInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "moduleInfoTable"]
    });

    var moduleInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "moduleInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "allOrgsUI",prefix + "moduleInfoTable"]
    });
    var groupFlow = new UIMaster.ui.flow
    ({
        ui: elementList[prefix + "groupFlow"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "groupFlow"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.moduleInfoPanel=moduleInfoPanel;

    Form.allOrgsUI=allOrgsUI;

    Form.moduleInfoTable=moduleInfoTable;

    Form.topPanel=topPanel;

    Form.groupFlow=groupFlow;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_ModuleManagement */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_ModuleManagement */
    };

    Form.selectOrg = org_shaolin_vogerp_commonmodel_page_ModuleManagement_selectOrg;

    Form.newModuleGroup = org_shaolin_vogerp_commonmodel_page_ModuleManagement_newModuleGroup;

    Form.newModuleGroup1 = org_shaolin_vogerp_commonmodel_page_ModuleManagement_newModuleGroup1;

    Form.openModuleDetail = org_shaolin_vogerp_commonmodel_page_ModuleManagement_openModuleDetail;

    Form.openModuleDetail1 = org_shaolin_vogerp_commonmodel_page_ModuleManagement_openModuleDetail1;

    Form.deleteModule1 = org_shaolin_vogerp_commonmodel_page_ModuleManagement_deleteModule1;

    Form.deleteModuleGroup = org_shaolin_vogerp_commonmodel_page_ModuleManagement_deleteModuleGroup;

    Form.saveModuleGroup = org_shaolin_vogerp_commonmodel_page_ModuleManagement_saveModuleGroup;

    Form.refreshModuleGroup = org_shaolin_vogerp_commonmodel_page_ModuleManagement_refreshModuleGroup;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_ModuleManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_ModuleManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.ModuleManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_ModuleManagement */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_ModuleManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_selectOrg(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_selectOrg */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectOrg-201508111433",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_selectOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_newModuleGroup(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_newModuleGroup */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"newModuleGroup35433",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_newModuleGroup */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_newModuleGroup1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_newModuleGroup1 */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"newModuleGroup1-35433",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_newModuleGroup1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_openModuleDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_openModuleDetail */

                {   
                    var constraint_result = this.groupFlow.checkSelection();
                    if (constraint_result != true && constraint_result != null) {
                        return false;
                    }
                }
                
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openModuleDetail543543",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_openModuleDetail */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_openModuleDetail1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_openModuleDetail1 */

                
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openModuleDetail1-543543",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_openModuleDetail1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_deleteModule1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_deleteModule1 */

                
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteModule1-201511-2224",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_deleteModule1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_deleteModuleGroup(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_deleteModuleGroup */

                {   
                    var constraint_result = this.groupFlow.checkSelection();
                    if (constraint_result != true && constraint_result != null) {
                        return false;
                    }
                }
                
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteModule23423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_deleteModuleGroup */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_saveModuleGroup(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_saveModuleGroup */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveModuleGroup432423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_saveModuleGroup */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_refreshModuleGroup(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_refreshModuleGroup */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refreshModuleGroup432423",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_refreshModuleGroup */


    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_ModuleManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_ModuleManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_ModuleManagement_finalizePageJs */



