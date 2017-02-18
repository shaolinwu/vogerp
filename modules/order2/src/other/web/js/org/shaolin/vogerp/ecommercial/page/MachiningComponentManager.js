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
    var materialInfoPanel = new org_shaolin_vogerp_ecommercial_form_MachiningComponentTable({"prefix":prefix + "materialInfoPanel."});

    var mToolInfoPanel = new org_shaolin_vogerp_ecommercial_form_MachiningToolTable({"prefix":prefix + "mToolInfoPanel."});

    var skinInfoPanel = new org_shaolin_vogerp_ecommercial_form_MachiningSkinTable({"prefix":prefix + "skinInfoPanel."});

    var thirdCompInfoPanel = new org_shaolin_vogerp_ecommercial_form_MachiningThirdCompTable({"prefix":prefix + "thirdCompInfoPanel."});


    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.materialInfoPanel=materialInfoPanel;

    Form.mToolInfoPanel=mToolInfoPanel;

    Form.skinInfoPanel=skinInfoPanel;

    Form.thirdCompInfoPanel=thirdCompInfoPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager */
    };

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

    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_MachiningComponentManager_finalizePageJs */



