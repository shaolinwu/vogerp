/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var totalNumUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "totalNumUILabel"]
    });

    var totalNumUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "totalNumUI"]
    });

    var resetIntervalUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "resetIntervalUILabel"]
    });

    var resetIntervalUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "resetIntervalUI"]
    });

    var couponTypeField = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "couponTypeField"]
        ,items: [idUI,nameUILabel,nameUI,totalNumUILabel,totalNumUI,resetIntervalUILabel,resetIntervalUI]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.totalNumUILabel=totalNumUILabel;

    Form.totalNumUI=totalNumUI;

    Form.resetIntervalUILabel=resetIntervalUILabel;

    Form.resetIntervalUI=resetIntervalUI;

    couponTypeField.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponTypeWithDiscountProduct";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponTypeWithDiscountProduct_invokeDynamicFunction */



