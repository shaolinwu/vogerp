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

    var serialNumber = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "serialNumber"]
    });

    var isExchanged = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "isExchanged"]
    });

    var wechatSign = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "wechatSign"]
    });

    var locationImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "locationImage"]
    });

    var locationText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "locationText"]
    });

    var phoneImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "phoneImage"]
    });

    var phoneText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "phoneText"]
    });

    var exchangeBtnImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "exchangeBtnImage"]
    });

    var exchange1Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "exchange1Text"]
    });

    var exchange2Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "exchange2Text"]
    });

    var couponImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "couponImage"]
    });

    var storeNameText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "storeNameText"]
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

    var bottom40Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom40Text"]
    });

    var bottom41Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom41Text"]
    });

    var fingerImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "fingerImage"]
    });

    var fingerPrintImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "fingerPrintImage"]
    });

    var clickInfoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "clickInfoImage"]
    });

    var clickInfoText = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "clickInfoText"]
    });

    var closeImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "closeImage"]
    });

    var exchangeClickInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "exchangeClickInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "clickInfoImage",prefix + "clickInfoText",prefix + "closeImage"]
    });

    var bottom3LeftPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottom3LeftPanel"]
        ,items: []
        ,subComponents: [prefix + "bottom40Text",prefix + "bottom41Text"]
    });

    var bottom3Panel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottom3Panel"]
        ,items: []
        ,subComponents: [prefix + "bottom3LeftPanel",prefix + "fingerImage"]
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

    var couponImageLeftPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponImageLeftPanel"]
        ,items: []
        ,subComponents: [prefix + "couponImage",prefix + "storeNameText"]
    });

    var couponImagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponImagePanel"]
        ,items: []
        ,subComponents: [prefix + "couponImageLeftPanel",prefix + "couponImageRightPanel"]
    });

    var exchangeTextPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "exchangeTextPanel"]
        ,items: []
        ,subComponents: [prefix + "exchange1Text",prefix + "exchange2Text"]
    });

    var exchangeInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "exchangeInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "exchangeBtnImage",prefix + "exchangeTextPanel"]
    });

    var contactPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "contactPanel"]
        ,items: []
        ,subComponents: [prefix + "locationImage",prefix + "locationText",prefix + "phoneImage",prefix + "phoneText"]
    });

    var exchangePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "exchangePanel"]
        ,items: []
        ,subComponents: [prefix + "contactPanel",prefix + "exchangeInfoPanel"]
    });

    var couponPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponPanel"]
        ,items: []
        ,subComponents: [prefix + "openId",prefix + "serialNumber",prefix + "isExchanged",prefix + "wechatSign",prefix + "exchangePanel",prefix + "couponImagePanel",prefix + "advertImage",prefix + "bottomPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [logoImage,openId,serialNumber,isExchanged,wechatSign,locationImage,locationText,phoneImage,phoneText,exchangeBtnImage,exchange1Text,exchange2Text,couponImage,storeNameText,couponNameText,couponDiscountText,couponMsgText,advertImage,bottom1Text,bottom2Text,bottom3Text,bottom5Text,bottom40Text,bottom41Text,fingerImage,fingerPrintImage,clickInfoImage,clickInfoText,closeImage,couponPanel,exchangePanel,contactPanel,exchangeInfoPanel,exchangeTextPanel,couponImagePanel,couponImageLeftPanel,couponImageRightPanel,bottomPanel,bottomLeftPanel,bottom3Panel,bottom3LeftPanel,exchangeClickInfoPanel]
    });

    Form.logoImage=logoImage;

    Form.openId=openId;

    Form.serialNumber=serialNumber;

    Form.isExchanged=isExchanged;

    Form.wechatSign=wechatSign;

    Form.locationImage=locationImage;

    Form.locationText=locationText;

    Form.phoneImage=phoneImage;

    Form.phoneText=phoneText;

    Form.exchangeBtnImage=exchangeBtnImage;

    Form.exchange1Text=exchange1Text;

    Form.exchange2Text=exchange2Text;

    Form.couponImage=couponImage;

    Form.storeNameText=storeNameText;

    Form.couponNameText=couponNameText;

    Form.couponDiscountText=couponDiscountText;

    Form.couponMsgText=couponMsgText;

    Form.advertImage=advertImage;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom40Text=bottom40Text;

    Form.bottom41Text=bottom41Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.clickInfoImage=clickInfoImage;

    Form.clickInfoText=clickInfoText;

    Form.closeImage=closeImage;

    Form.couponPanel=couponPanel;

    Form.openId=openId;

    Form.serialNumber=serialNumber;

    Form.isExchanged=isExchanged;

    Form.wechatSign=wechatSign;

    Form.exchangePanel=exchangePanel;

    Form.contactPanel=contactPanel;

    Form.locationImage=locationImage;

    Form.locationText=locationText;

    Form.phoneImage=phoneImage;

    Form.phoneText=phoneText;

    Form.exchangeInfoPanel=exchangeInfoPanel;

    Form.exchangeBtnImage=exchangeBtnImage;

    Form.exchangeTextPanel=exchangeTextPanel;

    Form.exchange1Text=exchange1Text;

    Form.exchange2Text=exchange2Text;

    Form.couponImagePanel=couponImagePanel;

    Form.couponImageLeftPanel=couponImageLeftPanel;

    Form.couponImage=couponImage;

    Form.storeNameText=storeNameText;

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

    Form.bottom3LeftPanel=bottom3LeftPanel;

    Form.bottom40Text=bottom40Text;

    Form.bottom41Text=bottom41Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.exchangePanel=exchangePanel;

    Form.contactPanel=contactPanel;

    Form.locationImage=locationImage;

    Form.locationText=locationText;

    Form.phoneImage=phoneImage;

    Form.phoneText=phoneText;

    Form.exchangeInfoPanel=exchangeInfoPanel;

    Form.exchangeBtnImage=exchangeBtnImage;

    Form.exchangeTextPanel=exchangeTextPanel;

    Form.exchange1Text=exchange1Text;

    Form.exchange2Text=exchange2Text;

    Form.contactPanel=contactPanel;

    Form.locationImage=locationImage;

    Form.locationText=locationText;

    Form.phoneImage=phoneImage;

    Form.phoneText=phoneText;

    Form.exchangeInfoPanel=exchangeInfoPanel;

    Form.exchangeBtnImage=exchangeBtnImage;

    Form.exchangeTextPanel=exchangeTextPanel;

    Form.exchange1Text=exchange1Text;

    Form.exchange2Text=exchange2Text;

    Form.exchangeTextPanel=exchangeTextPanel;

    Form.exchange1Text=exchange1Text;

    Form.exchange2Text=exchange2Text;

    Form.couponImagePanel=couponImagePanel;

    Form.couponImageLeftPanel=couponImageLeftPanel;

    Form.couponImage=couponImage;

    Form.storeNameText=storeNameText;

    Form.couponImageRightPanel=couponImageRightPanel;

    Form.couponNameText=couponNameText;

    Form.couponDiscountText=couponDiscountText;

    Form.couponMsgText=couponMsgText;

    Form.couponImageLeftPanel=couponImageLeftPanel;

    Form.couponImage=couponImage;

    Form.storeNameText=storeNameText;

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

    Form.bottom3LeftPanel=bottom3LeftPanel;

    Form.bottom40Text=bottom40Text;

    Form.bottom41Text=bottom41Text;

    Form.fingerImage=fingerImage;

    Form.fingerPrintImage=fingerPrintImage;

    Form.bottomLeftPanel=bottomLeftPanel;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.bottom3Text=bottom3Text;

    Form.bottom5Text=bottom5Text;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom3LeftPanel=bottom3LeftPanel;

    Form.bottom40Text=bottom40Text;

    Form.bottom41Text=bottom41Text;

    Form.fingerImage=fingerImage;

    Form.bottom3Panel=bottom3Panel;

    Form.bottom3LeftPanel=bottom3LeftPanel;

    Form.bottom40Text=bottom40Text;

    Form.bottom41Text=bottom41Text;

    Form.fingerImage=fingerImage;

    Form.bottom3LeftPanel=bottom3LeftPanel;

    Form.bottom40Text=bottom40Text;

    Form.bottom41Text=bottom41Text;

    Form.exchangeClickInfoPanel=exchangeClickInfoPanel;

    Form.clickInfoImage=clickInfoImage;

    Form.clickInfoText=clickInfoText;

    Form.closeImage=closeImage;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_CouponInfo */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_CouponInfo */
    };

    Form.effectCoupon = org_shaolin_vogerp_coupon_page_CouponInfo_effectCoupon;

    Form.toggleExchangeInfo = org_shaolin_vogerp_coupon_page_CouponInfo_toggleExchangeInfo;

    Form.exchangeCoupon = org_shaolin_vogerp_coupon_page_CouponInfo_exchangeCoupon;

    Form.exchangeSuccess = org_shaolin_vogerp_coupon_page_CouponInfo_exchangeSuccess;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_CouponInfo_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_CouponInfo_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.CouponInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_CouponInfo */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_CouponInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponInfo_effectCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_effectCoupon */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"effectCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_effectCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponInfo_toggleExchangeInfo(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_toggleExchangeInfo */
        var o = this;
        var UIEntity = this;

				{
					$("#div-Form-0_2").toggle();
				}    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_toggleExchangeInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponInfo_exchangeCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_exchangeCoupon */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"exchageCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_exchangeCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_CouponInfo_exchangeSuccess(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_exchangeSuccess */
        var o = this;
        var UIEntity = this;

				{
					$("#div-Form-0_2").hide();
					$("#exchangeInfoPanel").html("<div style=\"margin: 15% 0 0 20%;border: solid 1px white;width: 50%;\">\u5DF2\u5151\u6362</div>");
				}    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_exchangeSuccess */


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
						title: '????-???????-???',
						link: 'http://www.vogerp.com/uimaster/jsp/main.html',
						imgUrl: 'http://www.mr-prize.com/uimaster/images/coupon/front/couponIcon/50off.png',
						success: function () { 
							//???????????
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
				
				if ("true" == $("input[name='isExchanged']").val()) {
					$("#exchangeInfoPanel").html("<div style=\"margin: 15% 0 0 20%;border: solid 1px white;width: 50%;\">\u5DF2\u5151\u6362</div>");
				}
				
			}
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_initPageJs */


    function org_shaolin_vogerp_coupon_page_CouponInfo_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_CouponInfo_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_CouponInfo_finalizePageJs */



