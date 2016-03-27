/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_OrderCouponView(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var productImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "productImage"]
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

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [productImage,productNameUI,productDiscountUI,expiredDateUI,productMessageUI,couponInfoPanel,productPanel]
    });

    Form.productImage=productImage;

    Form.productNameUI=productNameUI;

    Form.productDiscountUI=productDiscountUI;

    Form.expiredDateUI=expiredDateUI;

    Form.productMessageUI=productMessageUI;

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
			var $couponImages = $("img[class1='couponImageView']");
			$couponImages.each(function(i, couponImage){
				$(couponImage).parent("div.uimaster_widget_cell").css({"margin" : "2%", "border" : "solid 2px white", "width" : "30%"});
			});
			
			var $couponPanels = $("div[class1='couponInfoPanel']");
			$couponPanels.each(function(j, couponPanel){
				$(couponPanel).parent("div.uimaster_container_cell").css({});
			});
			if ($("#advertBottomImage").length < 1) {
				$("#Form").append("<div id=\"advertBottomImage\" style=\"width:100%;position:relative;bottom:0;\"><img style=\"width:100%\" src=\"/uimaster/images/coupon/front/advert_bottom.jpg\"></div>");
			}
			var winHeight = $(window).height();
			$("#couponPanel").css("min-height", winHeight - $("#advertBottomImage").height() + "px")
			
			$("span[class1='expiredDateView']").css("width", "100%");
		}
		
            /* Construct_LAST:org_shaolin_vogerp_coupon_form_OrderCouponView */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_OrderCouponView_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.OrderCouponView";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_OrderCouponView */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_OrderCouponView */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_OrderCouponView_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_OrderCouponView_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_OrderCouponView_invokeDynamicFunction */



