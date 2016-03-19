/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_CouponManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "couponTypePanel",prefix + "discountProductPanel"]
    });
    var couponTypeTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "couponTypeTable"]
    });

    var couponTypePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponTypePanel"]
        ,items: []
        ,subComponents: [prefix + "couponTypeTable"]
    });
    var discountProductTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "discountProductTable"]
    });

    var discountProductPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "discountProductPanel"]
        ,items: []
        ,subComponents: [prefix + "discountProductTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.couponTypePanel=couponTypePanel;

    Form.couponTypeTable=couponTypeTable;

    Form.discountProductPanel=discountProductPanel;

    Form.discountProductTable=discountProductTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_CouponManagement */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_CouponManagement */
    };

    Form.createCouponType = org_shaolin_vogerp_coupon_page_CouponManagement_createCouponType;

    Form.openCouponType = org_shaolin_vogerp_coupon_page_CouponManagement_openCouponType;

    Form.deleteCouponType = org_shaolin_vogerp_coupon_page_CouponManagement_deleteCouponType;

    Form.createDiscountProduct = org_shaolin_vogerp_coupon_page_CouponManagement_createDiscountProduct;

    Form.openDiscountProduct = org_shaolin_vogerp_coupon_page_CouponManagement_openDiscountProduct;

    Form.deleteDiscountProduct = org_shaolin_vogerp_coupon_page_CouponManagement_deleteDiscountProduct;

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
    function org_shaolin_vogerp_coupon_page_CouponManagement_createCouponType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_createCouponType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCouponType-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_createCouponType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponManagement_openCouponType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_openCouponType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openCouponType-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_openCouponType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponManagement_deleteCouponType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_deleteCouponType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteCouponType-201511-2224",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_deleteCouponType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponManagement_createDiscountProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_createDiscountProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createDiscountProduct-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_createDiscountProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponManagement_openDiscountProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_openDiscountProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openDiscountProduct-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_openDiscountProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponManagement_deleteDiscountProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_deleteDiscountProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteDiscountProduct-201511-2224",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_deleteDiscountProduct */


    function org_shaolin_vogerp_coupon_page_CouponManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_initPageJs */


    function org_shaolin_vogerp_coupon_page_CouponManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponManagement_finalizePageJs */



