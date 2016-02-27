/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponConfirmation(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var couponIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "couponIdUILabel"]
    });

    var couponIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "couponIdUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "couponIdUILabel",prefix + "couponIdUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,couponIdUILabel,couponIdUI,serialNumberUILabel,serialNumberUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.couponIdUILabel=couponIdUILabel;

    Form.couponIdUI=couponIdUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.couponIdUILabel=couponIdUILabel;

    Form.couponIdUI=couponIdUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponConfirmation */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponConfirmation */
    };

    Form.Save = org_shaolin_vogerp_coupon_form_CouponConfirmation_Save;

    Form.Cancel = org_shaolin_vogerp_coupon_form_CouponConfirmation_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponConfirmation_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponConfirmation";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponConfirmation */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponConfirmation */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponConfirmation_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponConfirmation_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160227-110021",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponConfirmation_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponConfirmation_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponConfirmation_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160227-110021",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponConfirmation_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponConfirmation_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponConfirmation_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponConfirmation_invokeDynamicFunction */



