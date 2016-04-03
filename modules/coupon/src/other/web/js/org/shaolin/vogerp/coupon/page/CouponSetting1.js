/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_CouponSetting1(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var addBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "addBtn"]
    });

    var modifyBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "modifyBtn"]
    });

    var deleteBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "deleteBtn"]
    });

    var couponTypeTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "couponTypeTable"]
        ,initialized: true
    });

    var couponTypeTablePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponTypeTablePanel"]
        ,items: []
        ,subComponents: [prefix + "couponTypeTable"]
    });

    var couponTypeBtnPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponTypeBtnPanel"]
        ,items: []
        ,subComponents: [prefix + "addBtn",prefix + "modifyBtn",prefix + "deleteBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [addBtn,modifyBtn,deleteBtn,couponTypeTable,couponTypeBtnPanel,couponTypeTablePanel]
    });

    Form.addBtn=addBtn;

    Form.modifyBtn=modifyBtn;

    Form.deleteBtn=deleteBtn;

    Form.couponTypeTable=couponTypeTable;

    Form.couponTypeBtnPanel=couponTypeBtnPanel;

    Form.addBtn=addBtn;

    Form.modifyBtn=modifyBtn;

    Form.deleteBtn=deleteBtn;

    Form.couponTypeTablePanel=couponTypeTablePanel;

    Form.couponTypeTable=couponTypeTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_CouponSetting1 */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_CouponSetting1 */
    };

    Form.initPageJs = org_shaolin_vogerp_coupon_page_CouponSetting1_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_CouponSetting1_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.CouponSetting1";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_CouponSetting1 */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_CouponSetting1 */

    function org_shaolin_vogerp_coupon_page_CouponSetting1_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting1_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting1_initPageJs */


    function org_shaolin_vogerp_coupon_page_CouponSetting1_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting1_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting1_finalizePageJs */



