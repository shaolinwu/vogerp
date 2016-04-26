/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_CouponInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var logoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "logoImage"]
    });

    var openId = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "openId"]
    });

    var wechatSign = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "wechatSign"]
    });

    var serialLabeText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialLabeText"]
    });

    var serialNumText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumText"]
    });

    var orderLabelText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderLabelText"]
    });

    var phoneNumText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "phoneNumText"]
    });

    var couponImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "couponImage"]
    });

    var couponNameText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponNameText"]
    });

    var couponDiscountText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponDiscountText"]
    });

    var couponMsgText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponMsgText"]
    });

    var advertImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advertImage"]
    });

    var bottom1Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom1Text"]
    });

    var bottom2Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom2Text"]
    });

    var bottom3Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom3Text"]
    });

    var bottom5Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom5Text"]
    });

    var bottom4Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom4Text"]
    });

    var fingerImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "fingerImage"]
    });

    var fingerPrintImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "fingerPrintImage"]
    });

    var bottom3Panel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottom3Panel"]
        ,items: []
        ,subComponents: [prefix + "bottom4Text",prefix + "fingerImage"]
    });

    var bottomLeftPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomLeftPanel"]
        ,items: []
        ,subComponents: [prefix + "bottom1Text",prefix + "bottom2Text",prefix + "bottom3Text",prefix + "bottom5Text",prefix + "bottom3Panel"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "bottomLeftPanel",prefix + "fingerPrintImage"]
    });

    var couponImageRightPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponImageRightPanel"]
        ,items: []
        ,subComponents: [prefix + "couponNameText",prefix + "couponDiscountText",prefix + "couponMsgText"]
    });

    var couponImagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponImagePanel"]
        ,items: []
        ,subComponents: [prefix + "couponImage",prefix + "couponImageRightPanel"]
    });

    var serialNumPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "serialNumPanel"]
        ,items: []
        ,subComponents: [prefix + "serialLabeText",prefix + "serialNumText",prefix + "orderLabelText",prefix + "phoneNumText"]
    });

    var couponPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponPanel"]
        ,items: []
        ,subComponents: [prefix + "openId",prefix + "wechatSign",prefix + "serialNumPanel",prefix + "couponImagePanel",prefix + "advertImage",prefix + "bottomPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [logoImage,openId,wechatSign,serialLabeText,serialNumText,orderLabelText,phoneNumText,couponImage,couponNameText,couponDiscountText,couponMsgText,advertImage,bottom1Text,bottom2Text,bottom3Text,bottom5Text,bottom4Text,fingerImage,fingerPrintImage,couponPanel,serialNumPanel,couponImagePanel,couponImageRightPanel,bottomPanel,bottomLeftPanel,bottom3Panel]
    });

    Form.logoImage=logoImage;

    Form.openId=openId;

    Form.wechatSign=wechatSign;

    Form.serialLabeText=serialLabeText;

    Form.serialNumText=serialNumText;

    Form.orderLabelText=orderLabelText;

    Form.phoneNumText=phoneNumText;

    Form.couponImage=couponImage;

    Form.couponNameText=couponNameText;

    Form.couponDiscountText=couponDiscountText;

    Form.couponMsgText=couponMsgText;

    Form.advertImage=advertImage;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.couponPanel=couponPanel;

    Form.openId=openId;

    Form.wechatSign=wechatSign;

    Form.serialNumPanel=serialNumPanel;

    Form.serialLabeText=serialLabeText;

    Form.serialNumText=serialNumText;

    Form.orderLabelText=orderLabelText;

    Form.phoneNumText=phoneNumText;

    Form.couponImagePanel=couponImagePanel;

    Form.couponImage=couponImage;

    Form.couponImageRightPanel=couponImageRightPanel;

    Form.couponNameText=couponNameText;

    Form.couponDiscountText=couponDiscountText;

    Form.couponMsgText=couponMsgText;

    Form.advertImage=advertImage;

    Form.bottomPanel=bottomPanel;

    Form.bottomLeftPanel=bottomLeftPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.serialNumPanel=serialNumPanel;

    Form.serialLabeText=serialLabeText;

    Form.serialNumText=serialNumText;

    Form.orderLabelText=orderLabelText;

    Form.phoneNumText=phoneNumText;

    Form.couponImagePanel=couponImagePanel;

    Form.couponImage=couponImage;

    Form.couponImageRightPanel=couponImageRightPanel;

    Form.couponNameText=couponNameText;

    Form.couponDiscountText=couponDiscountText;

    Form.couponMsgText=couponMsgText;

    Form.couponImageRightPanel=couponImageRightPanel;

    Form.couponNameText=couponNameText;

    Form.couponDiscountText=couponDiscountText;

    Form.couponMsgText=couponMsgText;

    Form.bottomPanel=bottomPanel;

    Form.bottomLeftPanel=bottomLeftPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.bottomLeftPanel=bottomLeftPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom4Text=bottom4Text;

    Form.fingerImage=fingerImage;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_CouponInfo */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_CouponInfo */
    };

    Form.viewCoupon = org_shaolin_vogerp_coupon_page_CouponInfo_viewCoupon;

    Form.effectCoupon = org_shaolin_vogerp_coupon_page_CouponInfo_effectCoupon;

    Form.ViewOrderCouponLogic = org_shaolin_vogerp_coupon_page_CouponInfo_ViewOrderCouponLogic;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_CouponInfo_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_CouponInfo_finalizePageJs;

    Form.ViewOrderCouponLogic_OutFunctionName = org_shaolin_vogerp_coupon_page_CouponInfo_ViewOrderCouponLogic_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.CouponInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_CouponInfo */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_CouponInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponInfo_viewCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_viewCoupon */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"viewCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_viewCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponInfo_effectCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_effectCoupon */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"effectCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_effectCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponInfo_ViewOrderCouponLogic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_ViewOrderCouponLogic */
        var o = this;
        var UIEntity = this;

        o.ViewOrderCouponLogic_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_ViewOrderCouponLogic */


    function org_shaolin_vogerp_coupon_page_CouponInfo_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
				var timestamp = "";
				var nonceStr = "";
				var signature = "";
				var wechatSign = $("input[name='wechatSign']").val();
				var attrs = wechatSign.split(",");
				if (null != attrs && attrs.length > 0) {
					for(var i = 0; i < attrs.length; i++) {
						var attrItems = attrs[i].split("=");
						if ("timestamp" == attrItems[0]) {
							timestamp = attrItems[1];
						}
						if ("nonceStr" == attrItems[0]) {
							nonceStr = attrItems[1];
						}
						if ("signature" == attrItems[0]) {
							signature = attrItems[1];
						}
					}
				}
				wx.config({
					debug: false,
					appId: 'wx7425c40996a4e8c3',
					timestamp: timestamp,
					nonceStr: nonceStr,
					signature: signature,
					jsApiList: ['hideOptionMenu','hideMenuItems', 'onMenuShareTimeline']
				});
				wx.ready(function(){
					wx.hideMenuItems({
					    menuList: ["menuItem:exposeArticle", "menuItem:setFont", "menuItem:refresh", "menuItem:share:appMessage", 
					    	"menuItem:share:qq", "menuItem:share:weiboApp", "menuItem:favorite", "menuItem:share:facebook", "menuItem:share:QZone", 
					    	"menuItem:share:email", "menuItem:openWithSafari", "menuItem:openWithQQBrowser", "menuItem:readMode", "menuItem:copyUrl"]
					});
					wx.onMenuShareTimeline({
						title: '测试测试-我的分享小功能-朋友圈',
						link: 'http://www.vogerp.com/uimaster/jsp/main.html',
						imgUrl: 'http://www.mr-prize.com/uimaster/images/coupon/front/couponIcon/50off.png',
						success: function () { 
							//设置优惠券状态为已生效
							othis = this;
							var eventsource = $("#couponPanel");
							UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"effectCoupon-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
						},
						cancel: function () { 
							//alert("share cancel");
						}
					});	
				});
				
				var windowHeight = $(window).height();
				if ($("#couponPanel").height() < windowHeight) {
					$("#couponPanel").height(windowHeight - $("#div-Form-0_0").height() - 4 + "px");
				}
				
			}
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_initPageJs */


    function org_shaolin_vogerp_coupon_page_CouponInfo_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_finalizePageJs */


    function org_shaolin_vogerp_coupon_page_CouponInfo_ViewOrderCouponLogic_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_ViewOrderCouponLogic_OutFunctionName */
        var constraint_result = true;
        var myForm;
        if (this.formName != undefined)
        {
            myForm = document.forms[this.formName];
        }
        else
        {
            var p = this.Form.parentNode;
            while(p.tagName != "FORM")
                p = p.parentNode;
            myForm = p;//document.forms[0];
        }

        var UIEntity = this;

        constraint_result = this.Form.validate();
{
			// hello, my first js.
			}        
        myForm._outname.value = "ViewOrderCouponLogic";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_ViewOrderCouponLogic_OutFunctionName */


