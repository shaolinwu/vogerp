/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_GlobalStatistic(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "personalInfoPanel",prefix + "personalInfoPanel1",prefix + "personalInfoPanel2"]
    });
    var orgStatsByProvince = new org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince({"prefix":prefix + "orgStatsByProvince."});

    var orgStatsByProvince1 = new org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince({"prefix":prefix + "orgStatsByProvince1."});

    var orgStatsByProvince2 = new org_shaolin_vogerp_commonmodel_form_OrganizationStatsByProvince({"prefix":prefix + "orgStatsByProvince2."});


    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.orgStatsByProvince=orgStatsByProvince;

    Form.orgStatsByProvince1=orgStatsByProvince1;

    Form.orgStatsByProvince2=orgStatsByProvince2;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_GlobalStatistic */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_GlobalStatistic */
    };

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_GlobalStatistic_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_GlobalStatistic_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.GlobalStatistic";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_GlobalStatistic */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_GlobalStatistic */

    function org_shaolin_vogerp_commonmodel_page_GlobalStatistic_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_GlobalStatistic_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_GlobalStatistic_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_GlobalStatistic_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_GlobalStatistic_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_GlobalStatistic_finalizePageJs */



