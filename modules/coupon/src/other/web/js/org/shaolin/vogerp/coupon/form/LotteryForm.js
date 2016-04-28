/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_LotteryForm(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var luckyImageUrlText = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "luckyImageUrlText"]
    });

    var phoneNumText = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "phoneNumText"]
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
        ,subComponents: [prefix + "luckyImageUrlText",prefix + "phoneNumText",prefix + "startLotyImage"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [luckyImageUrlText,phoneNumText,startLotyImage,lotteryStartPanel,couponPanel,restCouponPanel]
    });

    Form.luckyImageUrlText=luckyImageUrlText;

    Form.phoneNumText=phoneNumText;

    Form.startLotyImage=startLotyImage;

    Form.lotteryStartPanel=lotteryStartPanel;

    Form.luckyImageUrlText=luckyImageUrlText;

    Form.phoneNumText=phoneNumText;

    Form.startLotyImage=startLotyImage;

    Form.couponPanel=couponPanel;

    Form.restCouponPanel=restCouponPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_LotteryForm */

        
		{
				var windowHeight = $(window).height();
				var windowWidth = $(window).width();
				this.roll = function(luckyImageUrl, showImages){
					
					//alert(luckyImageUrl+ "    " +showImages);
					
					$("input[name='luckyImageUrlText']").val(luckyImageUrl);
					$("#div-leftPanel-0_1").height(windowHeight * 0.6353).show();
		        	$("#div-leftPanel-0_4").height(windowHeight * 0.2118).show();
					var orgId = $("input[name='orgId']").val();
					//$("#rollLottery").append("<img id=\"rollImage1\" src=\"/uimaster/images/coupon/front/couponIcon/" + orgId + "/lotteryRoll_a.gif\" /><img id=\"rollImage2\"  src=\"/uimaster/images/coupon/front/couponIcon/" + orgId + "/lotteryRoll_b.gif\" /><img id=\"rollImage3\"  src=\"/uimaster/images/coupon/front/couponIcon/" + orgId + "/lotteryRoll_c.gif\" />");
					$("#rollLottery").append("<img id=\"rollImage1\" src=\"/uimaster/images/coupon/front/lotteryRoll_a.gif\" /><img id=\"rollImage2\"  src=\"/uimaster/images/coupon/front/lotteryRoll_b.gif\" /><img id=\"rollImage3\"  src=\"/uimaster/images/coupon/front/lotteryRoll_c.gif\" />");
					$("#div-leftPanel-0_5").height(windowHeight * 0.1529).css("top" , windowHeight * 0.6353 + "px").show();
					//$("#div-leftPanel-0_5 img").css({"height":windowHeight * 0.16 + "px", "margin-top":windowHeight * 0.05 + "px"});
					
					var showIcons = showImages.split(",");
					
					setTimeout(function(){
						$("#rollImage1").attr("src", showIcons[0]);
					}, 7800);
					setTimeout(function(){
						$("#rollImage2").attr("src", showIcons[1]);
					}, 9000);
					setTimeout(function(){
						$("#rollImage3").attr("src", showIcons[2]);
					}, 10200);
					
					var othis = this;
					var couponPanel = document.getElementById("lotteryForm.couponPanel");
					var eventsource = $(couponPanel);
					setTimeout(function(){
        				UIMaster.triggerServerEvent("lotteryForm.couponPanel","genCoupon-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
        			}, 13000);
				};
				
				this.setJackpotNum = function(jackpotRes) {
					//var jackpotRes = "/uimaster/images/coupon/front/50off.png:5,/uimaster/images/coupon/front/sign.png:300,/uimaster/images/coupon/front/newProduct.png:12,/uimaster/images/coupon/front/cashDeduction.png:95";
					//alert(jackpotRes);
					var couponJackpots = jackpotRes.split(",");
					if (null != couponJackpots) {
						for (var a = 0; a < couponJackpots.length; a++) {
							var couponJackpot = couponJackpots[a].split(":");
							var widthNum = parseInt(100 / couponJackpots.length);
							$rCoupon.append("<div id=\"div_lotteryForm-restCouponPanel-" + (a * 2) + "_0\" class=\"couponJackpotImageDiv\" style=\"width:" + widthNum * 0.65 + "%\"><img data-src=\"" + couponJackpot[0] + "\" /></div>");
							$rCoupon.append("<div id=\"div_lotteryForm-restCouponPanel-" + (a * 2 + 1) + "_0\" class=\"couponJackpotTextDiv\" style=\"width:" + widthNum * 0.35 + "%\"><span>x" + couponJackpot[1] + "</span>");
						}
						
						$(".couponJackpotImageDiv").each(function(i, jackpot){
							$(jackpot).height(windowHeight * 0.26 * 0.5 + "px");
							$(jackpot).css("padding-top", $("#lotteryForm\\.restCouponPanel").height() * 0.28 + "px");
						});
						$(".couponJackpotTextDiv").each(function(i, jackpot){
							$(jackpot).css("padding-top", $("#lotteryForm\\.restCouponPanel").height()/ 2 + "px");
						});
					}
				};
				
				this.loadLotteryBox = function(imageUrls) {
					//假设ajax请求返回该字符串，需要修改
					
					var imageUrlArr = imageUrls.split(",");
					var rowNum = 3;
					for (var m = 0; m < rowNum; m++) {
						for (var n = 0; n < 3; n++) {
							//随机取一张图片
							var index = Math.floor(Math.random() * imageUrlArr.length);
							var imageUrl = imageUrlArr[index];
							$couponPan.append("<div id=\"lotteryForm_" + n + "-" + m + "\" class=\"lotteryForm_couponImage\"><img data-src=\"" + imageUrl + "\" /></div>");
						}
					}
					
					var $couponImages = $("div.lotteryForm_couponImage");
					$couponImages.each(function(i, couponImage){
						//$(couponImage).width(windowWidth * 0.945 * 0.33 + "px");
						$(couponImage).height(windowHeight * 0.53 * 0.325 + "px");
					});
				};
				
				//$("#leftPanel").height(windowHeight + "px");
				var startLotteryHeight = $("#div-lotteryForm-lotteryStartPanel-1_0 img").height();
				$("#div-lotteryForm-lotteryStartPanel-0_0 input").height(windowHeight * 0.05 + "px");
				
				var couponPanel = document.getElementById("lotteryForm.couponPanel");
				var $couponPan = $(couponPanel);
				$couponPan.height(windowHeight * 0.53 + "px");
				
				var restCoupon = document.getElementById("lotteryForm.restCouponPanel");
				var $rCoupon = $(restCoupon);
				$rCoupon.height(windowHeight * 0.26 + "px");
				
				$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u540E4\u4F4D");
				$("#div-lotteryForm-lotteryStartPanel-1_0 img").height($("#div-lotteryForm-lotteryStartPanel-0_0").height() + "px");
				
				var othis = this;
				var eventsource = $couponPan;
				setTimeout(function(){
					//load lottery box of all coupon icon
					UIMaster.triggerServerEvent("lotteryForm.couponPanel","loadCouponImageUrl-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
					
					var lotyForm = document.getElementById("lotteryForm.Form");
					var lotyFormHeight = $("#div-lotteryForm-Form-0_0").height();
					$(lotyForm).height(lotyFormHeight + "px");
					$(lotyForm).width(windowWidth * 0.945 + "px");
					$("#lotteryPanel,#div-lotteryPanel-0_0,#div-leftPanel-0_2").height(lotyFormHeight + "px");
					
					$("#div-leftPanel-0_0").height(windowHeight * 0.05 + "px");
					$("#div-leftPanel-0_0 img").height(windowHeight * 0.05 + "px");
					$("#div-leftPanel-0_3").height(windowHeight * 0.05 + "px");
					
					var eventsource1 = $rCoupon;
					UIMaster.triggerServerEvent("lotteryForm.restCouponPanel","loadJackpot-20160112-232035",UIMaster.getValue(eventsource1),othis.__entityName);
					var $dataImgs = $("img[data-src]");
					$dataImgs.each(function(i, dataImg){
						setTimeout(function(){
							$(dataImg).attr("src", $(dataImg).attr("data-src"));
						}, i * 50);
					});
				}, 100);
				
			}
		
            /* Construct_LAST:org_shaolin_vogerp_coupon_form_LotteryForm */
    };

    Form.genCoupon = org_shaolin_vogerp_coupon_form_LotteryForm_genCoupon;

    Form.loadCouponImageUrl = org_shaolin_vogerp_coupon_form_LotteryForm_loadCouponImageUrl;

    Form.rollCoupon = org_shaolin_vogerp_coupon_form_LotteryForm_rollCoupon;

    Form.verifyPhoneNum = org_shaolin_vogerp_coupon_form_LotteryForm_verifyPhoneNum;

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

				{
					
					var phoneNum = $("#div-lotteryForm-lotteryStartPanel-0_0 input").val();
					var reg = new RegExp("^[0-9]{4}$");
		        	if (!reg.test(phoneNum.trim())) {
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").val("");
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u540E4\u4F4D");
		        		return ;
		        	} else {
		        		$("input[name='phoneNumText']").val(phoneNum);
		        	}
				}
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"rollCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_LotteryForm_rollCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_LotteryForm_verifyPhoneNum(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_LotteryForm_verifyPhoneNum */
        var o = this;
        var UIEntity = this;

				{
					var phoneNum = $("#div-lotteryForm-lotteryStartPanel-0_0 input").val();
					var reg = new RegExp("^[0-9]+$");
		        	if (!reg.test(phoneNum.trim())) {
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").val("");
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u540E4\u4F4D");
		        	} else {
		        		$("input[name='phoneNumText']").val(phoneNum);
		        	}
		        	
				}    }/* Gen_Last:org_shaolin_vogerp_coupon_form_LotteryForm_verifyPhoneNum */


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



