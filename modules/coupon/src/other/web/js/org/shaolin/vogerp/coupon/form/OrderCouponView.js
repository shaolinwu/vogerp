/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_OrderCouponView(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var couponId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "couponId"]
    });

    var productImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "productImage"]
    });

    var brandText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "brandText"]
    });

    var productNameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productNameUI"]
    });

    var productDiscountUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productDiscountUI"]
    });

    var expiredDateUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expiredDateUI"]
    });

    var productMessageUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productMessageUI"]
    });

    var productPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "productPanel"]
        ,items: []
        ,subComponents: [prefix + "productDiscountUI",prefix + "expiredDateUI"]
    });

    var couponInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "productNameUI",prefix + "productPanel",prefix + "productMessageUI"]
    });

    var couponInfoLeftPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponInfoLeftPanel"]
        ,items: []
        ,subComponents: [prefix + "productImage",prefix + "brandText"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [couponId,productImage,brandText,productNameUI,productDiscountUI,expiredDateUI,productMessageUI,couponInfoLeftPanel,couponInfoPanel,productPanel]
    });

    Form.couponId=couponId;

    Form.productImage=productImage;

    Form.brandText=brandText;

    Form.productNameUI=productNameUI;

    Form.productDiscountUI=productDiscountUI;

    Form.expiredDateUI=expiredDateUI;

    Form.productMessageUI=productMessageUI;

    Form.couponInfoLeftPanel=couponInfoLeftPanel;

    Form.productImage=productImage;

    Form.brandText=brandText;

    Form.couponInfoPanel=couponInfoPanel;

    Form.productNameUI=productNameUI;

    Form.productPanel=productPanel;

    Form.productDiscountUI=productDiscountUI;

    Form.expiredDateUI=expiredDateUI;

    Form.productMessageUI=productMessageUI;

    Form.productPanel=productPanel;

    Form.productDiscountUI=productDiscountUI;

    Form.expiredDateUI=expiredDateUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_OrderCouponView */

        
		{
			var $couponInfos = $(".couponInfoLeftPanel");
			$couponInfos.each(function(i, couponInfo){
				$(couponInfo).height($(couponInfo).width() * 0.90 + "px");
				$(couponInfo).children("div.uimaster_panel").height($(couponInfo).height() + "px");
				$(couponInfo).find(".productImage").height($(couponInfo).height() * 0.75 + "px");
			});
			
			var $couponPanels = $("div[class1='couponInfoPanel']");
			$couponPanels.each(function(j, couponPanel){
				$(couponPanel).parent("div.uimaster_container_cell").css({});
			});
			
			$("span[class1='expiredDateView']").css("width", "100%");
		}
		
            /* Construct_LAST:org_shaolin_vogerp_coupon_form_OrderCouponView */
    };

    Form.viewCoupon = org_shaolin_vogerp_coupon_form_OrderCouponView_viewCoupon;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_OrderCouponView_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.OrderCouponView";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_OrderCouponView */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_OrderCouponView */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_OrderCouponView_viewCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_OrderCouponView_viewCoupon */
        var o = this;
        var UIEntity = this;

				{
					var couponIds = $(eventsource).find(".coupoId");
					$("input[name='selectedCouponId']").val($(couponIds[0]).val());
					
					defaultname.backViewCouponLogic();
				}    }/* Gen_Last:org_shaolin_vogerp_coupon_form_OrderCouponView_viewCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_OrderCouponView_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_OrderCouponView_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_OrderCouponView_invokeDynamicFunction */



