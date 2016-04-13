/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_DiscountProductView(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var productImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "productImage"]
    });

    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var productNameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productNameUI"]
    });

    var productDiscountUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "productDiscountUI"]
    });

    var confirmTextUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "confirmTextUI"]
    });

    var vsImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vsImage"]
    });

    var productInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "productInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "productNameUI",prefix + "productDiscountUI",prefix + "confirmTextUI"]
    });

    var discountProductPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "discountProductPanel"]
        ,items: []
        ,subComponents: [prefix + "productImage",prefix + "productInfoPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [productImage,idUI,productNameUI,productDiscountUI,confirmTextUI,vsImage,discountProductPanel,productInfoPanel]
    });

    Form.productImage=productImage;

    Form.idUI=idUI;

    Form.productNameUI=productNameUI;

    Form.productDiscountUI=productDiscountUI;

    Form.confirmTextUI=confirmTextUI;

    Form.vsImage=vsImage;

    Form.discountProductPanel=discountProductPanel;

    Form.productImage=productImage;

    Form.productInfoPanel=productInfoPanel;

    Form.idUI=idUI;

    Form.productNameUI=productNameUI;

    Form.productDiscountUI=productDiscountUI;

    Form.confirmTextUI=confirmTextUI;

    Form.productInfoPanel=productInfoPanel;

    Form.idUI=idUI;

    Form.productNameUI=productNameUI;

    Form.productDiscountUI=productDiscountUI;

    Form.confirmTextUI=confirmTextUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_DiscountProductView */

        
		{
			var productInfoViews = $("div[class1='discountProductInfoView']");
			for (var i = 0; i < productInfoViews.length; i++) {
				var productInfoView = productInfoViews[i];
				var subImageView = $(productInfoView).children("div.uimaster_widget_cell")[0];
				var subTextView = $(productInfoView).children("div.uimaster_container_cell")[0];
				var productImage = $(subImageView).children("img")[0];
				$(productImage).height($(productImage).width() * 0.73 + "px");
			}
		}
		
            /* Construct_LAST:org_shaolin_vogerp_coupon_form_DiscountProductView */
    };

    Form.choiceCoupon = org_shaolin_vogerp_coupon_form_DiscountProductView_choiceCoupon;

    Form.choiceCoupon1 = org_shaolin_vogerp_coupon_form_DiscountProductView_choiceCoupon1;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_DiscountProductView_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.DiscountProductView";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_DiscountProductView */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_DiscountProductView */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_DiscountProductView_choiceCoupon(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_DiscountProductView_choiceCoupon */
        var o = this;
        var UIEntity = this;

				{
					var textView = $(eventsource).parents("div[class1='discountProductTextView']")[0];
					//discountProductForm4.productInfoPanel
					var attrId = $(textView).attr("id");
					var attrFormId = attrId.split(".")[0];
					var id = attrFormId.substring("discountProductForm".length, attrFormId.length)
					//alert(id);
					$("input[name='selectedProductId']").val(id);
					
					var othis = this;
					UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"choiceCoupon1-20160112-232035",UIMaster.getValue(eventsource),othis.__entityName);
				}    }/* Gen_Last:org_shaolin_vogerp_coupon_form_DiscountProductView_choiceCoupon */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_DiscountProductView_choiceCoupon1(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_DiscountProductView_choiceCoupon1 */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"choiceCoupon1-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_DiscountProductView_choiceCoupon1 */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_DiscountProductView_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_DiscountProductView_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_DiscountProductView_invokeDynamicFunction */



