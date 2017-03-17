/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_CouponSetting(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var addBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "addBtn"]
    });

    var selectedCouponTypeId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectedCouponTypeId"]
    });

    var selectedDiscountProductId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "selectedDiscountProductId"]
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
        ,subComponents: [prefix + "addBtn",prefix + "selectedCouponTypeId",prefix + "selectedDiscountProductId",prefix + "modifyBtn",prefix + "deleteBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [addBtn,selectedCouponTypeId,selectedDiscountProductId,modifyBtn,deleteBtn,couponTypeTable,couponTypeBtnPanel,couponTypeTablePanel]
    });

    Form.addBtn=addBtn;

    Form.selectedCouponTypeId=selectedCouponTypeId;

    Form.selectedDiscountProductId=selectedDiscountProductId;

    Form.modifyBtn=modifyBtn;

    Form.deleteBtn=deleteBtn;

    Form.couponTypeTable=couponTypeTable;

    Form.couponTypeBtnPanel=couponTypeBtnPanel;

    Form.addBtn=addBtn;

    Form.selectedCouponTypeId=selectedCouponTypeId;

    Form.selectedDiscountProductId=selectedDiscountProductId;

    Form.modifyBtn=modifyBtn;

    Form.deleteBtn=deleteBtn;

    Form.couponTypeTablePanel=couponTypeTablePanel;

    Form.couponTypeTable=couponTypeTable;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_CouponSetting */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_CouponSetting */
    };

    Form.createCouponType = org_shaolin_vogerp_coupon_page_CouponSetting_createCouponType;

    Form.openCouponType = org_shaolin_vogerp_coupon_page_CouponSetting_openCouponType;

    Form.deleteCouponType = org_shaolin_vogerp_coupon_page_CouponSetting_deleteCouponType;

    Form.delCouponType = org_shaolin_vogerp_coupon_page_CouponSetting_delCouponType;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_CouponSetting_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_CouponSetting_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.CouponSetting";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_CouponSetting */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_CouponSetting */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponSetting_createCouponType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting_createCouponType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"createCouponType-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting_createCouponType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponSetting_openCouponType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting_openCouponType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"openCouponType-20160302-3542",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting_openCouponType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponSetting_deleteCouponType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting_deleteCouponType */
        var o = this;
        var UIEntity = this;

					{
			        	var couponTypeId = $("input[name='selectedCouponTypeId']");
			        	if (typeof(conponTypeId) != undefined) {
			        		if (!confirm("????????????????")) {
					        	return ;
			        		}
			        	} else {
			        		alert("???????");
			        		return ;
			        	}
					}    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting_deleteCouponType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponSetting_delCouponType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting_delCouponType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"delCouponType-201511-2224",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting_delCouponType */


    function org_shaolin_vogerp_coupon_page_CouponSetting_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
				$(".resetIntervalUI").show();
			}
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting_initPageJs */


    function org_shaolin_vogerp_coupon_page_CouponSetting_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponSetting_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponSetting_finalizePageJs */



