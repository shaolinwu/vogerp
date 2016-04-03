/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_CouponSetting2(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var couponTypeTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "couponTypeTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [couponTypeTable]
    });

    Form.couponTypeTable=couponTypeTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_CouponSetting2 */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_CouponSetting2 */
    };

    Form.initPageJs = org_shaolin_vogerp_coupon_page_CouponSetting2_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_CouponSetting2_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.CouponSetting2";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_CouponSetting2 */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_CouponSetting2 */

    function org_shaolin_vogerp_coupon_page_CouponSetting2_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting2_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting2_initPageJs */


    function org_shaolin_vogerp_coupon_page_CouponSetting2_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting2_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting2_finalizePageJs */



