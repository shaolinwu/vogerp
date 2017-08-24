/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_AboutTeam(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var textUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "textUI"]
        ,htmlValue: "关于我们： 本系统由上海抚企信息科技有限公司提供。您有任何需要帮助，请拨打以下电话，或者访问我们的在线客服论坛。非常感谢您的光临！ "
    });

    var text1UI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "text1UI"]
        ,htmlValue: "版本信息： www.vogerp.com 3.0.release 2017-06-01"
    });

    var contactUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactUI"]
        ,htmlValue: "联系电话: <a href="tel:159-2146-0670">159-2146-0670</a>  坐机： <a href="tel:021-31009779">021-31009779</a>"
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



