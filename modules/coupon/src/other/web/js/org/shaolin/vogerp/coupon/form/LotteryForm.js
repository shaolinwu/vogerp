/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_LotteryForm(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var luckyImageUrlText = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "luckyImageUrlText"]
    });

    var orderNumText = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderNumText"]
    });

    var startLotyImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "startLotyImage"]
    });

    var restCouponPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "restCouponPanel"]
        ,items: []
        ,subComponents: []
    });

    var couponPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponPanel"]
        ,items: []
        ,subComponents: []
    });

    var lotteryStartPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "lotteryStartPanel"]
        ,items: []
        ,subComponents: [prefix + "luckyImageUrlText",prefix + "orderNumText",prefix + "startLotyImage"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [luckyImageUrlText,orderNumText,startLotyImage,lotteryStartPanel,couponPanel,restCouponPanel]
    });

    Form.luckyImageUrlText=luckyImageUrlText;

    Form.orderNumText=orderNumText;

    Form.startLotyImage=startLotyImage;

    Form.lotteryStartPanel=lotteryStartPanel;

    Form.luckyImageUrlText=luckyImageUrlText;

    Form.orderNumText=orderNumText;

    Form.startLotyImage=startLotyImage;

    Form.couponPanel=couponPanel;

    Form.restCouponPanel=restCouponPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_LotteryForm */

        
		{
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();
			this.roll = function(luckyImageUrl){
			
		        			//compute roll percent distance
		        			var rollTopArr = new Array();
		        			var cellTop = 32.3;
		        			
		        			$("#div-lotteryForm-hidden input[name='lotteryForm.luckyImageUrlText']").val(luckyImageUrl);
		        			$("input[name='luckyImageUrlText']").val(luckyImageUrl);
		        			
		        			var couponPanel = document.getElementById("lotteryForm.couponPanel");
							var $couponPan = $(couponPanel);
							var lotteryImageDivs = $couponPan.children(".lotteryForm_couponImage");
		        			if (null != lotteryImageDivs) {
		        				var row = lotteryImageDivs.length / 3;
		        				if (null != luckyImageUrl && "" != luckyImageUrl) {
		        					//setting lottery roll params
		        					for (var m = 0; m < 3; m++) {
		        						$("#lotteryForm_" + m + "-" + (row - 1) + " img").attr("src", luckyImageUrl);
									}
		        				} else {
		        					//setting no lottery
									var imageUrl1 = $("#lotteryForm_0-" + (row - 1) + " img").attr("src");
									var imageUrl2 = $("#lotteryForm_1-" + (row - 1) + " img").attr("src");
									if (imageUrl2 == imageUrl1) {
										for (var j = 0; j < lorrertImageDivs.length; j++) {
											var otherImageUrl = $(lorrertImageDivs[j]).attr("src");
											if (otherImageUrl != imageUrl1) {
												$("#lotteryForm_2-" + (row - 1) + " img").attr("src", otherImageUrl);
												break ;
											}
										}
									}
		        				}
		        				
		        				//roll
		        				for (var m = 0; m < 3; m++) {
									var needRollDivIds = "";
									for (var n = 0; n < row; n++) {
										if (null == needRollDivIds || "" == needRollDivIds) {
											needRollDivIds = "#lotteryForm_" + m + "-" + n;
										} else {
											needRollDivIds = needRollDivIds + "," +"#lotteryForm_" + m + "-" + n;
										}
									}
									var rollTime = 8000;
									var rollTop = ((row - 2) * cellTop);
									var cellTime = parseInt(rollTime / (row - 2));
									$(needRollDivIds).delay(m * cellTime).animate({"top" : "-" + rollTop + "%"}, rollTime, "linear");
								}
								var advertTopHeight = windowHeight - $couponPan.height() * 0.42 - $("#div-leftPanel-0_4").height();
								$("#div-leftPanel-0_1, #div-leftPanel-0_1 img").height(advertTopHeight + "px").css("display", "block");
								var rollHeight = advertTopHeight - $couponPan.height() * 0.28 - $couponPan.offset().top;
								$couponPan.css("top", "" + rollHeight + "px");
								var advertBottomHeight = windowHeight - advertTopHeight - $couponPan.height() * 0.40;
								$("#div-leftPanel-0_4, #div-leftPanel-0_4 img").height(advertBottomHeight + "px").css("display", "block");
								$("#div-leftPanel-0_5").css("left", $couponPan.offset().left + "px");
								$("#div-leftPanel-0_6").css("right", $couponPan.offset().right + "px");
		        				$("#div-leftPanel-0_5,#div-leftPanel-0_6").height($couponPan.height() + "px").css({"display" : "block", "top" : advertTopHeight + "px"});
		        				
		        			}
		        			
		        			//\u62BD\u5956\u6846\u6EDA\u52A8\u7ED3\u675F\uFF0C\u8C03\u7528\u540E\u53F0\u751F\u6210\u4F18\u60E0\u5238
		        			var othis = this;
							var eventsource = $couponPan;
							var delayTime = 11000;
							setTimeout(function(){
		        				UIMaster.triggerServerEvent("lotteryForm.couponPanel","genCoupon-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
		        			}, delayTime);
		        			
			};
			
			this.setJackpotNum = function(jackpotRes) {
				//var jackpotRes = "/uimaster/images/coupon/front/50off.png:5,/uimaster/images/coupon/front/sign.png:300,/uimaster/images/coupon/front/newProduct.png:12,/uimaster/images/coupon/front/cashDeduction.png:95";
				//alert(jackpotRes);
				var couponJackpots = jackpotRes.split(",");
				if (null != couponJackpots) {
					for (var a = 0; a < couponJackpots.length; a++) {
						var couponJackpot = couponJackpots[a].split(":");
						var widthNum = parseInt(100 / couponJackpots.length);
						$rCoupon.append("<div id=\"div_lotteryForm-restCouponPanel-" + (a * 2) + "_0\" class=\"couponJackpotImageDiv\" style=\"width:" + widthNum * 0.65 + "%\"><img src=\"" + couponJackpot[0] + "\" /></div>");
						$rCoupon.append("<div id=\"div_lotteryForm-restCouponPanel-" + (a * 2 + 1) + "_0\" class=\"couponJackpotTextDiv\" style=\"width:" + widthNum * 0.35 + "%\"><span>x" + couponJackpot[1] + "</span>");
					}
				}
			};
			
			this.loadLotteryBox = function(imageUrls) {
				//假设ajax请求返回该字符串，需要修改
				
				var imageUrlArr = imageUrls.split(",");
				var rowNum = 30;
				for (var m = 0; m < rowNum; m++) {
					for (var n = 0; n < 3; n++) {
						//随机取一张图片
						var index = Math.floor(Math.random() * imageUrlArr.length);
						var imageUrl = imageUrlArr[index];
						$couponPan.append("<div id=\"lotteryForm_" + n + "-" + m + "\" class=\"lotteryForm_couponImage\"><img src=\"" + imageUrl + "\" /></div>");
					}
				}
			};
			
			//$("#leftPanel").height(windowHeight + "px");
			var startLotteryHeight = $("#div-lotteryForm-lotteryStartPanel-1_0 img").height();
			$("#div-lotteryForm-lotteryStartPanel-0_0 input").height((startLotteryHeight - 6) + "px");
			
			var couponPanel = document.getElementById("lotteryForm.couponPanel");
			var $couponPan = $(couponPanel);
			$couponPan.height((windowWidth * 0.945 * 0.84) + "px");
			
			var restCoupon = document.getElementById("lotteryForm.restCouponPanel");
			var $rCoupon = $(restCoupon)
			$rCoupon.height((windowWidth * 0.945 * 0.32) + "px");
			
			$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "\u8BF7\u8F93\u5165\u8BA2\u5355\u53F7\u540E4\u4F4D");
			$("#div-lotteryForm-lotteryStartPanel-1_0 img").height($("#div-lotteryForm-lotteryStartPanel-0_0").height() + "px");
			
			var othis = this;
			var eventsource = $couponPan;
			//load lottery box of all coupon icon
			UIMaster.triggerServerEvent("lotteryForm.couponPanel","loadCouponImageUrl-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
			
			
			var lotyForm = document.getElementById("lotteryForm.Form");
			var lotyFormHeight = $("#div-lotteryForm-Form-0_0").height();
			$(lotyForm).height(lotyFormHeight + "px");
			$("#lotteryPanel,#div-lotteryPanel-0_0,#div-leftPanel-0_2").height(lotyFormHeight + "px");
			
			//\u67E5\u8BE2\u5E76\u8BBE\u7F6E\u5956\u6C60\u6570\u91CF
			var eventsource1 = $rCoupon;
			UIMaster.triggerServerEvent("lotteryForm.restCouponPanel","loadJackpot-20160112-232035",UIMaster.getValue(eventsource1),othis.__entityName);
		}
		
            /* Construct_LAST:org_shaolin_vogerp_coupon_form_LotteryForm */
    };

    Form.genCoupon = org_shaolin_vogerp_coupon_form_LotteryForm_genCoupon;

    Form.loadCouponImageUrl = org_shaolin_vogerp_coupon_form_LotteryForm_loadCouponImageUrl;

    Form.rollCoupon = org_shaolin_vogerp_coupon_form_LotteryForm_rollCoupon;

    Form.verifyOrderNum = org_shaolin_vogerp_coupon_form_LotteryForm_verifyOrderNum;

    Form.loadJackpot = org_shaolin_vogerp_coupon_form_LotteryForm_loadJackpot;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_LotteryForm_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.LotteryForm";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_LotteryForm */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_LotteryForm */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_LotteryForm_genCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_LotteryForm_genCoupon */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_LotteryForm_genCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_LotteryForm_loadCouponImageUrl(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_LotteryForm_loadCouponImageUrl */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"loadCouponImageUrl-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_LotteryForm_loadCouponImageUrl */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_LotteryForm_rollCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_LotteryForm_rollCoupon */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"rollCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_LotteryForm_rollCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_LotteryForm_verifyOrderNum(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_LotteryForm_verifyOrderNum */
        var o = this;
        var UIEntity = this;

				{
					var orderNum = $("#div-lotteryForm-lotteryStartPanel-0_0 input").val();
					var reg = new RegExp("^[0-9]+$");
		        	if (!reg.test(orderNum.trim())) {
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").val("");
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "请输入订单号后4位");
		        	} else {
		        		$("input[name='orderNumText']").val(orderNum);
		        	}
		        	
				}    }/* Gen_Last:org_shaolin_vogerp_coupon_form_LotteryForm_verifyOrderNum */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_LotteryForm_loadJackpot(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_LotteryForm_loadJackpot */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"loadJackpot-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_LotteryForm_loadJackpot */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_LotteryForm_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_LotteryForm_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_LotteryForm_invokeDynamicFunction */



