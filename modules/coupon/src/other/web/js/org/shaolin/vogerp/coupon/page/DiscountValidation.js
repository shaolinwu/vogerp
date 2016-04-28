/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_DiscountValidation(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "couponValidationPanel",prefix + "resetPhoneNumPanel"]
    });
    var validateResultText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "validateResultText"]
    });

    var couponNumberText = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "couponNumberText"]
    });

    var validateBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "validateBtn"]
    });

    var couponValidationPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponValidationPanel"]
        ,items: []
        ,subComponents: [prefix + "validateResultText",prefix + "couponNumberText",prefix + "validateBtn"]
    });
    var phoneNum1Text = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "phoneNum1Text"]
    });

    var resetBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "resetBtn"]
    });

    var resetPhoneNumPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "resetPhoneNumPanel"]
        ,items: []
        ,subComponents: [prefix + "phoneNum1Text",prefix + "resetBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.couponValidationPanel=couponValidationPanel;

    Form.validateResultText=validateResultText;

    Form.couponNumberText=couponNumberText;

    Form.validateBtn=validateBtn;

    Form.resetPhoneNumPanel=resetPhoneNumPanel;

    Form.phoneNum1Text=phoneNum1Text;

    Form.resetBtn=resetBtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_DiscountValidation */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_DiscountValidation */
    };

    Form.CouponValidateFunction = org_shaolin_vogerp_coupon_page_DiscountValidation_CouponValidateFunction;

    Form.ResetOrderCouponFunction = org_shaolin_vogerp_coupon_page_DiscountValidation_ResetOrderCouponFunction;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_DiscountValidation_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_DiscountValidation_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.DiscountValidation";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_DiscountValidation */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_DiscountValidation */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_DiscountValidation_CouponValidateFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_DiscountValidation_CouponValidateFunction */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"CouponValidateFunction-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_CouponValidateFunction */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_DiscountValidation_ResetOrderCouponFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_DiscountValidation_ResetOrderCouponFunction */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ResetOrderCouponFunction-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_ResetOrderCouponFunction */


    function org_shaolin_vogerp_coupon_page_DiscountValidation_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_DiscountValidation_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_initPageJs */


    function org_shaolin_vogerp_coupon_page_DiscountValidation_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_DiscountValidation_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_finalizePageJs */



