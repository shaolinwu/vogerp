/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_page_MemberManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var mserviceInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "mserviceInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [mserviceInfoTable]
    });

    Form.mserviceInfoTable=mserviceInfoTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_page_MemberManagement */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_page_MemberManagement */
    };

    Form.createMember = org_shaolin_vogerp_commonmodel_page_MemberManagement_createMember;

    Form.openMemberDetail = org_shaolin_vogerp_commonmodel_page_MemberManagement_openMemberDetail;

    Form.initPageJs = org_shaolin_vogerp_commonmodel_page_MemberManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_commonmodel_page_MemberManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.commonmodel.page.MemberManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_page_MemberManagement */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_page_MemberManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_MemberManagement_createMember(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_MemberManagement_createMember */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createMember-201507132249",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_MemberManagement_createMember */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_page_MemberManagement_openMemberDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_page_MemberManagement_openMemberDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openMemberDetail-201507132246",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_MemberManagement_openMemberDetail */


    function org_shaolin_vogerp_commonmodel_page_MemberManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_MemberManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_MemberManagement_initPageJs */


    function org_shaolin_vogerp_commonmodel_page_MemberManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_commonmodel_page_MemberManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_commonmodel_page_MemberManagement_finalizePageJs */



