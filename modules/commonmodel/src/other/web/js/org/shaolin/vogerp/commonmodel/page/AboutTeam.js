/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_AboutTeam(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var textUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "textUI"]
        ,htmlValue: "????? ??????????????????????????????????????????????????????????? "
    });

    var text1UI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "text1UI"]
        ,htmlValue: "????? www.vogerp.com 2.0.release 2017-05-01"
    });

    var contactUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactUI"]
        ,htmlValue: "????: 159-2146-0670  ???  021-31009779"
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [textUI,text1UI,contactUI]
    });

    Form.textUI=textUI;

    Form.text1UI=text1UI;

    Form.contactUI=contactUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_AboutTeam */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_AboutTeam */
    };

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_AboutTeam_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_AboutTeam_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.AboutTeam";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_AboutTeam */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_AboutTeam */

    function org_shaolin_vogerp_commonmodel_page_AboutTeam_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_AboutTeam_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_AboutTeam_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_AboutTeam_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_AboutTeam_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_AboutTeam_finalizePageJs */



