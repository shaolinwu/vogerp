/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_UserManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var orgIdHidden = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "orgIdHidden"]
    });

    var orgNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgNameUILabel"]
    });

    var orgNameUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "orgNameUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var couponUserInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "couponUserInfoTable"]
    });

    var orgSelectPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "orgSelectPanel"]
        ,items: []
        ,subComponents: [prefix + "orgIdHidden",prefix + "orgNameUILabel",prefix + "orgNameUI",prefix + "nameUILabel",prefix + "nameUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [orgIdHidden,orgNameUILabel,orgNameUI,nameUILabel,nameUI,couponUserInfoTable,orgSelectPanel]
    });

    Form.orgIdHidden=orgIdHidden;

    Form.orgNameUILabel=orgNameUILabel;

    Form.orgNameUI=orgNameUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.couponUserInfoTable=couponUserInfoTable;

    Form.orgSelectPanel=orgSelectPanel;

    Form.orgIdHidden=orgIdHidden;

    Form.orgNameUILabel=orgNameUILabel;

    Form.orgNameUI=orgNameUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_UserManagement */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_UserManagement */
    };

    Form.selectOrg = org_shaolin_vogerp_coupon_page_UserManagement_selectOrg;

    Form.openCouponUserInfo = org_shaolin_vogerp_coupon_page_UserManagement_openCouponUserInfo;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_UserManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_UserManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.UserManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_UserManagement */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_UserManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_UserManagement_selectOrg(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_UserManagement_selectOrg */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectOrg-201508111433",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_UserManagement_selectOrg */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_UserManagement_openCouponUserInfo(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_UserManagement_openCouponUserInfo */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openCouponUserInfo-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_UserManagement_openCouponUserInfo */


    function org_shaolin_vogerp_coupon_page_UserManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_UserManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_UserManagement_initPageJs */


    function org_shaolin_vogerp_coupon_page_UserManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_UserManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_UserManagement_finalizePageJs */



