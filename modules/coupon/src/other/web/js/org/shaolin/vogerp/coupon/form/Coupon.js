/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_Coupon(json)
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

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var discountProductUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "discountProductUILabel"]
    });

    var expiredDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expiredDateUILabel"]
    });

    var expiredDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "expiredDateUI"]
    });

    var statusUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "statusUILabel"]
    });

    var statusUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "statusUI"]
    });

    var discountProductUI = new org_shaolin_vogerp_coupon_form_DiscountProductWithCoupon({"prefix":prefix + "discountProductUI."});

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "discountProductUILabel",prefix + "discountProductUI",prefix + "expiredDateUILabel",prefix + "expiredDateUI",prefix + "statusUILabel",prefix + "statusUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,nameUILabel,nameUI,serialNumberUILabel,serialNumberUI,discountProductUILabel,expiredDateUILabel,expiredDateUI,statusUILabel,statusUI,discountProductUI,fieldPanel]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.discountProductUILabel=discountProductUILabel;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.discountProductUI=discountProductUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.discountProductUILabel=discountProductUILabel;

    Form.discountProductUI=discountProductUI;

    Form.expiredDateUILabel=expiredDateUILabel;

    Form.expiredDateUI=expiredDateUI;

    Form.statusUILabel=statusUILabel;

    Form.statusUI=statusUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_Coupon */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_Coupon */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_Coupon_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.Coupon";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_Coupon */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_Coupon */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_Coupon_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_Coupon_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_Coupon_invokeDynamicFunction */



