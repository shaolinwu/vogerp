/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponOperation(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var orderNumUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orderNumUILabel"]
    });

    var orderNumUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orderNumUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var operateDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "operateDateUILabel"]
    });

    var operateDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "operateDateUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "orderNumUILabel",prefix + "orderNumUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "operateDateUILabel",prefix + "operateDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,orderNumUILabel,orderNumUI,serialNumberUILabel,serialNumberUI,typeUILabel,typeUI,operateDateUILabel,operateDateUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.orderNumUILabel=orderNumUILabel;

    Form.orderNumUI=orderNumUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.operateDateUILabel=operateDateUILabel;

    Form.operateDateUI=operateDateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.orderNumUILabel=orderNumUILabel;

    Form.orderNumUI=orderNumUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.operateDateUILabel=operateDateUILabel;

    Form.operateDateUI=operateDateUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponOperation */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponOperation */
    };

    Form.Save = org_shaolin_vogerp_coupon_form_CouponOperation_Save;

    Form.Cancel = org_shaolin_vogerp_coupon_form_CouponOperation_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponOperation_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponOperation";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponOperation */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponOperation */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponOperation_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponOperation_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160305-124310",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponOperation_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponOperation_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponOperation_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160305-124310",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponOperation_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponOperation_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponOperation_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponOperation_invokeDynamicFunction */


