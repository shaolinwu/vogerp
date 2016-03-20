/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_DiscountValidation(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "couponValidationPanel",prefix + "immediateCouponPanel",prefix + "resetOrderNumPanel"]
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
        ,subComponents: [prefix + "couponNumberText",prefix + "validateBtn"]
    });
    var orderNumText = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderNumText"]
    });

    var exchangeBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "exchangeBtn"]
    });

    var immediateCouponPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "immediateCouponPanel"]
        ,items: []
        ,subComponents: [prefix + "orderNumText",prefix + "exchangeBtn"]
    });
    var orderNum1Text = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderNum1Text"]
    });

    var resetBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "resetBtn"]
    });

    var resetOrderNumPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "resetOrderNumPanel"]
        ,items: []
        ,subComponents: [prefix + "orderNum1Text",prefix + "resetBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.couponValidationPanel=couponValidationPanel;

    Form.couponNumberText=couponNumberText;

    Form.validateBtn=validateBtn;

    Form.immediateCouponPanel=immediateCouponPanel;

    Form.orderNumText=orderNumText;

    Form.exchangeBtn=exchangeBtn;

    Form.resetOrderNumPanel=resetOrderNumPanel;

    Form.orderNum1Text=orderNum1Text;

    Form.resetBtn=resetBtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_DiscountValidation */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_DiscountValidation */
    };

    Form.CouponValidateFunction = org_shaolin_vogerp_coupon_page_DiscountValidation_CouponValidateFunction;

    Form.ImmediateExchangeFunction = org_shaolin_vogerp_coupon_page_DiscountValidation_ImmediateExchangeFunction;

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

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"CouponValidateFunction",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_CouponValidateFunction */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_DiscountValidation_ImmediateExchangeFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_DiscountValidation_ImmediateExchangeFunction */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ImmediateExchangeFunction",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_ImmediateExchangeFunction */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_DiscountValidation_ResetOrderCouponFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_DiscountValidation_ResetOrderCouponFunction */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"ResetOrderCouponFunction",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_ResetOrderCouponFunction */


    function org_shaolin_vogerp_coupon_page_DiscountValidation_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_DiscountValidation_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_initPageJs */


    function org_shaolin_vogerp_coupon_page_DiscountValidation_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_DiscountValidation_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_DiscountValidation_finalizePageJs */


