/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_ViewOrderCoupon(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var logoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "logoImage"]
    });

    var couponTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "couponTable"]
    });

    var couponPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponPanel"]
        ,items: []
        ,subComponents: [prefix + "couponTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [logoImage,couponTable,couponPanel]
    });

    Form.logoImage=logoImage;

    Form.couponTable=couponTable;

    Form.couponPanel=couponPanel;

    Form.couponTable=couponTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_ViewOrderCoupon */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_ViewOrderCoupon */
    };

    Form.initPageJs = org_shaolin_vogerp_coupon_page_ViewOrderCoupon_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_ViewOrderCoupon_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.ViewOrderCoupon";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_ViewOrderCoupon */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_ViewOrderCoupon */

    function org_shaolin_vogerp_coupon_page_ViewOrderCoupon_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_initPageJs */


    function org_shaolin_vogerp_coupon_page_ViewOrderCoupon_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_ViewOrderCoupon_finalizePageJs */



