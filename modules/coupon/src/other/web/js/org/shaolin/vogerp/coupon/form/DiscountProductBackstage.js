/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_DiscountProductBackstage(json)
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

    var iconUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "iconUILabel"]
    });

    var iconUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "iconUI"]
    });

    var couponTypeTreeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponTypeTreeUILabel"]
    });

    var couponTypeTreeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "couponTypeTreeUI"]
      ,allowBlank:false
      ,allowBlankText:"The coupon type must not be null."
    });

    var discountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "discountUILabel"]
    });

    var discountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "discountUI"]
    });

    var isSharedUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "isSharedUILabel"]
    });

    var isSharedUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "isSharedUI"]
    });

    var superiorityMessageUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "superiorityMessageUILabel"]
    });

    var superiorityMessageUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "superiorityMessageUI"]
    });

    var limitMessageUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "limitMessageUILabel"]
    });

    var limitMessageUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "limitMessageUI"]
    });

    var validityUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "validityUILabel"]
    });

    var validityUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "validityUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,nameUILabel,nameUI,iconUILabel,iconUI,couponTypeTreeUILabel,couponTypeTreeUI,discountUILabel,discountUI,isSharedUILabel,isSharedUI,superiorityMessageUILabel,superiorityMessageUI,limitMessageUILabel,limitMessageUI,validityUILabel,validityUI]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.iconUILabel=iconUILabel;

    Form.iconUI=iconUI;

    Form.couponTypeTreeUILabel=couponTypeTreeUILabel;

    Form.couponTypeTreeUI=couponTypeTreeUI;

    Form.discountUILabel=discountUILabel;

    Form.discountUI=discountUI;

    Form.isSharedUILabel=isSharedUILabel;

    Form.isSharedUI=isSharedUI;

    Form.superiorityMessageUILabel=superiorityMessageUILabel;

    Form.superiorityMessageUI=superiorityMessageUI;

    Form.limitMessageUILabel=limitMessageUILabel;

    Form.limitMessageUI=limitMessageUI;

    Form.validityUILabel=validityUILabel;

    Form.validityUI=validityUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_DiscountProductBackstage */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_DiscountProductBackstage */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_DiscountProductBackstage_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.DiscountProductBackstage";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_DiscountProductBackstage */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_DiscountProductBackstage */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_DiscountProductBackstage_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_DiscountProductBackstage_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_DiscountProductBackstage_invokeDynamicFunction */



