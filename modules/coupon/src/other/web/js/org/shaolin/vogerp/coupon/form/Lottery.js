/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_Lottery(json)
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
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_Lottery */

        
		{
			var windowHeight = $(window).height();
			
			//$("#leftPanel").height(windowHeight + "px");
			var startLotteryHeight = $("#div-lotteryForm-lotteryStartPanel-1_0 img").height();
			$("#div-lotteryForm-lotteryStartPanel-0_0 input").height((startLotteryHeight - 6) + "px");
			var restCoupon = document.getElementById("lotteryForm.restCouponPanel");
			var $rCoupon = $(restCoupon)
			$rCoupon.height(($rCoupon.width() * 0.32) + "px");
			
			var couponPanel = document.getElementById("lotteryForm.couponPanel");
			var $couponPan = $(couponPanel);
			$couponPan.height(($couponPan.width() * 0.84) + "px");
			
			$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "请输入订单号后4位");
			$("#div-lotteryForm-lotteryStartPanel-1_0 img").height($("#div-lotteryForm-lotteryStartPanel-0_0").height() + "px");
			
			var othis = this;
			var eventsource = $couponPan;
			//TODO ajax请求获取所有奖项图片url
			var url = UIMaster.triggerServerEvent("lotteryForm.couponPanel","loadCouponImageUrl-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
			//alert(url);
			
			//假设ajax请求返回该字符串，需要修改
			var imageUrls = "/uimaster/images/coupon/front/50off.png,/uimaster/images/coupon/front/sign.png,/uimaster/images/coupon/front/newProduct.png,/uimaster/images/coupon/front/cashDeduction.png";
			
			var imageUrlArr = imageUrls.split(",");
			var size = imageUrlArr.length;
			//生成(size + 2)行3列的奖项图标,最后一行和第一行相同
			for (var m = 0; m < size + 2; m++) {
				for (var n = 0; n < 3; n++) {
					//随机取一张图片
					var index = Math.floor(Math.random() * size);
					var imageUrl = imageUrlArr[index];
					if (m == size + 1) {
						imageUrl = $("#lotteryForm_" + n + "-0 img").attr("src");
					}
					$couponPan.append("<div id=\"lotteryForm_" + n + "-" + m + "\" class=\"lotteryForm_couponImage\"><img src=\"" + imageUrl + "\" /></div>");
				}
			}
			
			var lotyForm = document.getElementById("lotteryForm.Form");
			var lotyFormHeight = $("#div-lotteryForm-Form-0_0").height();
			$(lotyForm).height(lotyFormHeight + "px");
			$("#lotteryPanel,#div-lotteryPanel-0_0,#div-leftPanel-0_2").height(lotyFormHeight + "px");
			
			//查询并设置奖池数量
			var eventsource1 = $rCoupon;
			UIMaster.triggerServerEvent("lotteryForm.restCouponPanel","loadJackpot-20160112-232035",UIMaster.getValue(eventsource1),othis.__entityName);
			
			//TODO 假设返回奖池数量
			var jackpotRes = "/uimaster/images/coupon/front/50off.png:5,/uimaster/images/coupon/front/sign.png:300,/uimaster/images/coupon/front/newProduct.png:12,/uimaster/images/coupon/front/cashDeduction.png:95";
			var couponJackpots = jackpotRes.split(",");
			if (null != couponJackpots) {
				for (var a = 0; a < couponJackpots.length; a++) {
					var couponJackpot = couponJackpots[a].split(":");
					var widthNum = parseInt(100 / couponJackpots.length);
					$rCoupon.append("<div id=\"div_lotteryForm-restCouponPanel-" + (a * 2) + "_0\" class=\"couponJackpotImageDiv\" style=\"width:" + widthNum * 0.65 + "%\"><img src=\"" + couponJackpot[0] + "\" /></div>");
					$rCoupon.append("<div id=\"div_lotteryForm-restCouponPanel-" + (a * 2 + 1) + "_0\" class=\"couponJackpotTextDiv\" style=\"width:" + widthNum * 0.35 + "%\"><span>x" + couponJackpot[1] + "</span>");
				}
			}
		}
		
            /* Construct_LAST:org_shaolin_vogerp_coupon_form_Lottery */
    };

    Form.loadCouponImageUrl = org_shaolin_vogerp_coupon_form_Lottery_loadCouponImageUrl;

    Form.rollCoupon = org_shaolin_vogerp_coupon_form_Lottery_rollCoupon;

    Form.verifyOrderNum = org_shaolin_vogerp_coupon_form_Lottery_verifyOrderNum;

    Form.veriOrderNumBack = org_shaolin_vogerp_coupon_form_Lottery_veriOrderNumBack;

    Form.genLuckyCouponType = org_shaolin_vogerp_coupon_form_Lottery_genLuckyCouponType;

    Form.loadJackpot = org_shaolin_vogerp_coupon_form_Lottery_loadJackpot;

    Form.genCoupon = org_shaolin_vogerp_coupon_form_Lottery_genCoupon;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_Lottery_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.Lottery";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_Lottery */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_Lottery */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Lottery_loadCouponImageUrl(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Lottery_loadCouponImageUrl */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"loadCouponImageUrl-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Lottery_loadCouponImageUrl */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Lottery_rollCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Lottery_rollCoupon */
        var o = this;
        var UIEntity = this;

		        {
		        	var orderNum = $("#div-lotteryForm-lotteryStartPanel-0_0 input").val();
		        	var reg = new RegExp("^[0-9]{4}$");
		        	if (reg.test(orderNum)) {
		        		//调ajax后台校验
		        		var othis = this;
		        		UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"veriOrderNumBack-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
		        		
		        		//TODO 假设ajax调用返回
		        		var veriSuccess = true;
		        		if (veriSuccess) {
		        			//调用后台生成中奖的奖项
		        			UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genLuckyCouponType-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
		        			
		        			//TODO 假设后台生成的图标url
		        			var imageUrlArr = new Array("/uimaster/images/coupon/front/50off.png", "/uimaster/images/coupon/front/sign.png", "/uimaster/images/coupon/front/newProduct.png", "/uimaster/images/coupon/front/cashDeduction.png");
		        			var luckyIndex = Math.floor(Math.random() * (imageUrlArr.length + 1));
		        			var luckyImageUrl = imageUrlArr[luckyIndex];
		        			//var luckyImageUrl = "";
		        			$("#div-lotteryForm-hidden input[name='lotteryForm.luckyImageUrlText']").val(luckyImageUrl);
		        			alert(luckyImageUrl);
		        			
		        			//计算每列的滚动百分比
		        			var rollTopArr = new Array();
		        			var cellTop = 32;
		        			
		        			var couponPanel = document.getElementById("lotteryForm.couponPanel");
							var $couponPan = $(couponPanel);
							var lotteryImageDivs = $couponPan.children(".lotteryForm_couponImage");
		        			if (null != lotteryImageDivs) {
		        				var row = lotteryImageDivs.length / 3;
		        				if (null != luckyImageUrl && "" != luckyImageUrl) {
		        					//中奖滚动设置
		        					for (var m = 0; m < 3; m++) {
										for (var n = 0; n < row - 1; n++) {
											var divid = "#lotteryForm_" + m + "-" + n;
											var imageUrl = $(divid + " img").attr("src");
											if (imageUrl == luckyImageUrl) {
												var n1 = n == 0 ? row - 1 : n;
												rollTopArr[m] = (n1 - 1) * cellTop;
												break ;
											}
										}
										if (null == rollTopArr[m]) {
											rollTopArr[m] = (row - 3) * cellTop;
											$("#lotteryForm_" + m + "-" + (row - 2) + " img").attr("src", luckyImageUrl);
										}
									}
		        				} else {
		        					//未中奖滚动设置
		        					var i1 = Math.floor(Math.random() * (row - 1)) + 1;
									var i2 = Math.floor(Math.random() * (row - 1)) + 1;
									rollTopArr[0] = (i1 - 1) * cellTop;
									rollTopArr[1] = (i2 - 1) * cellTop;
									var imageUrl1 = $("#lotteryForm_0-" + i1 + " img").attr("src");
									var imageUrl2 = $("#lotteryForm_1-" + i2 + " img").attr("src");
									if (imageUrl2 != imageUrl1) {
										var i3 = Math.floor(Math.random() * (row - 1)) + 1;
										rollTopArr[2] = (i3 - 1) * cellTop;
									} else {
										for (var k = 3; k < row; k++) {
											if ($("#lotteryForm_2-" + k + " img").attr("src") != imageUrl1) {
												rollTopArr[2] = (k - 1) * cellTop;
												break ;
											}
										}
										//如果第3列取到的全部是和第1列颜色相同，则取最后一个div，并修改该div的颜色为其它颜色
										if (null == rollTopArr[2]) {
											var i3 = row - 1;
											rollTopArr[2] = (i3 - 1) * cellTop;
											for (var j = 0; j < lorrertImageDivs.length; j++) {
												var otherImageUrl = $(lorrertImageDivs[j]).attr("src");
												if (otherImageUrl != imageUrl1) {
													$("#lotteryForm_2-" + (row - 1) + " img").attr("src", otherImageUrl);
													break ;
												}
											}
										}
									}
		        				}
		        				
		        				//滚动奖项图标
		        				for (var m = 0; m < 3; m++) {
									var needRollDivIds = "";
									for (var n = 0; n < row; n++) {
										if (null == needRollDivIds || "" == needRollDivIds) {
											needRollDivIds = "#lotteryForm_" + m + "-" + n;
										} else {
											needRollDivIds = needRollDivIds + "," +"#lotteryForm_" + m + "-" + n;
										}
									}
									var t1 = ((row - 2) * cellTop);
									var count = rollTopArr[m] / cellTop + 1;
									var cellTime = parseInt(3000 / (count + row - 2));
									$(needRollDivIds).delay(m * 3000).animate({"top" : "-" + t1 + "%"}, cellTime * (row - 2)).animate({"top" : 97 - 2 * cellTop + "%"}, 0).animate({"top" : "-" + rollTopArr[m] + "%"}, cellTime * count);
								}
								var tt = 700;
								var advertTopHeight = $(window).height() - $couponPan.height() * 0.42 - $("#div-leftPanel-0_4").height();
								$("#div-leftPanel-0_1, #div-leftPanel-0_1 img").height(advertTopHeight + "px").slideDown(tt * 2);
								var rollHeight = advertTopHeight - $couponPan.height() * 0.28 - $couponPan.offset().top;
								$couponPan.animate({"top" : "" + rollHeight + "px"}, tt);
								var advertBottomHeight = $(window).height() - advertTopHeight - $couponPan.height() * 0.40;
								$("#div-leftPanel-0_4, #div-leftPanel-0_4 img").height(advertBottomHeight + "px").slideDown(tt * 2);
								$("#div-leftPanel-0_5").css("left", $couponPan.offset().left + "px");
								$("#div-leftPanel-0_6").css("right", $couponPan.offset().right + "px");
		        				$("#div-leftPanel-0_5,#div-leftPanel-0_6").height($couponPan.height() + "px").delay(tt * 2).css({"display" : "block", "top" : advertTopHeight + "px"});
		        				
		        			}
		        			//抽奖框滚动结束，调用后台生成优惠券
		        			var delayTime = 12000;
		        			setTimeout(function(){
		        				UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genCoupon-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
		        			}, delayTime);
		        			
		        		} else {
		        			$("#div-lotteryForm-lotteryStartPanel-0_0 input").val("");
		        			$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "订单无效");
		        		}
		        	} else {
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").val("");
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "请输入订单号后4位");
		        	}
		        }
		            }/* Gen_Last:org_shaolin_vogerp_coupon_form_Lottery_rollCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Lottery_verifyOrderNum(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Lottery_verifyOrderNum */
        var o = this;
        var UIEntity = this;

				{
					var orderNum = $("#div-lotteryForm-lotteryStartPanel-0_0 input").val();
					var reg = new RegExp("^[0-9]+$");
		        	if (!reg.test(orderNum.trim())) {
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").val("");
		        		$("#div-lotteryForm-lotteryStartPanel-0_0 input").attr("placeholder", "请输入订单号后4位");
		        	}
				}    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Lottery_verifyOrderNum */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Lottery_veriOrderNumBack(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Lottery_veriOrderNumBack */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"veriOrderNumBack-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Lottery_veriOrderNumBack */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Lottery_genLuckyCouponType(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Lottery_genLuckyCouponType */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genLuckyCouponType-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Lottery_genLuckyCouponType */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Lottery_loadJackpot(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Lottery_loadJackpot */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"loadJackpot-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Lottery_loadJackpot */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Lottery_genCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Lottery_genCoupon */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"genCoupon-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Lottery_genCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Lottery_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Lottery_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Lottery_invokeDynamicFunction */



