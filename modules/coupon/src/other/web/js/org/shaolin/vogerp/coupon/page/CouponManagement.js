/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_CouponManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var couponInfoTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "couponInfoTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [couponInfoTable]
    });

    Form.couponInfoTable=couponInfoTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_CouponManagement */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_CouponManagement */
    };

    Form.createCustomer = org_shaolin_vogerp_coupon_page_CouponManagement_createCustomer;

    Form.openCustomerDetail = org_shaolin_vogerp_coupon_page_CouponManagement_openCustomerDetail;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_CouponManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_CouponManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.CouponManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_CouponManagement */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_CouponManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponManagement_createCustomer(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_createCustomer */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCustomer-201507132249",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_createCustomer */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponManagement_openCustomerDetail(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_openCustomerDetail */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openCustomerDetail-201507132246",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_openCustomerDetail */


    function org_shaolin_vogerp_coupon_page_CouponManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_initPageJs */


    function org_shaolin_vogerp_coupon_page_CouponManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_finalizePageJs */



