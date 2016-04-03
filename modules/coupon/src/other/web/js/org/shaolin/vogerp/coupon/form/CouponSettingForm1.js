/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponSettingForm1(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var couponTypeNameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponTypeNameUI"]
    });

    var couponTypeImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "couponTypeImage"]
    });

    var couponTypeNumLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponTypeNumLabel"]
    });

    var couponTypeNumText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponTypeNumText"]
    });

    var couponTypePercentLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponTypePercentLabel"]
    });

    var couponTypePercentText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponTypePercentText"]
    });

    var resetIntervalLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "resetIntervalLabel"]
    });

    var resetIntervalUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "resetIntervalUI"]
    });

    var discountProductTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "discountProductTable"]
    });

    var discountProductsPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "discountProductsPanel"]
        ,items: []
        ,subComponents: [prefix + "discountProductTable"]
    });

    var couponTypePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponTypePanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "couponTypeNameUI",prefix + "couponTypeImage",prefix + "couponTypeNumLabel",prefix + "couponTypeNumText",prefix + "couponTypePercentLabel",prefix + "couponTypePercentText",prefix + "resetIntervalLabel",prefix + "resetIntervalUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,couponTypeNameUI,couponTypeImage,couponTypeNumLabel,couponTypeNumText,couponTypePercentLabel,couponTypePercentText,resetIntervalLabel,resetIntervalUI,discountProductTable,couponTypePanel,discountProductsPanel]
    });

    Form.idUI=idUI;

    Form.couponTypeNameUI=couponTypeNameUI;

    Form.couponTypeImage=couponTypeImage;

    Form.couponTypeNumLabel=couponTypeNumLabel;

    Form.couponTypeNumText=couponTypeNumText;

    Form.couponTypePercentLabel=couponTypePercentLabel;

    Form.couponTypePercentText=couponTypePercentText;

    Form.resetIntervalLabel=resetIntervalLabel;

    Form.resetIntervalUI=resetIntervalUI;

    Form.discountProductTable=discountProductTable;

    Form.couponTypePanel=couponTypePanel;

    Form.idUI=idUI;

    Form.couponTypeNameUI=couponTypeNameUI;

    Form.couponTypeImage=couponTypeImage;

    Form.couponTypeNumLabel=couponTypeNumLabel;

    Form.couponTypeNumText=couponTypeNumText;

    Form.couponTypePercentLabel=couponTypePercentLabel;

    Form.couponTypePercentText=couponTypePercentText;

    Form.resetIntervalLabel=resetIntervalLabel;

    Form.resetIntervalUI=resetIntervalUI;

    Form.discountProductsPanel=discountProductsPanel;

    Form.discountProductTable=discountProductTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponSettingForm1 */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponSettingForm1 */
    };

    Form.createDiscountProduct = org_shaolin_vogerp_coupon_form_CouponSettingForm1_createDiscountProduct;

    Form.openDiscountProduct = org_shaolin_vogerp_coupon_form_CouponSettingForm1_openDiscountProduct;

    Form.deleteDiscountProduct = org_shaolin_vogerp_coupon_form_CouponSettingForm1_deleteDiscountProduct;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponSettingForm1_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponSettingForm1";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponSettingForm1 */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponSettingForm1 */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponSettingForm1_createDiscountProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponSettingForm1_createDiscountProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createDiscountProduct-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponSettingForm1_createDiscountProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponSettingForm1_openDiscountProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponSettingForm1_openDiscountProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openDiscountProduct-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponSettingForm1_openDiscountProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponSettingForm1_deleteDiscountProduct(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponSettingForm1_deleteDiscountProduct */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"deleteDiscountProduct-201511-2224",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponSettingForm1_deleteDiscountProduct */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponSettingForm1_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponSettingForm1_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponSettingForm1_invokeDynamicFunction */



