/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_form_CouponUserInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var orgIdHidden = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "orgIdHidden"]
    });

    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var lotteryLinkUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lotteryLinkUILabel"]
    });

    var lotteryLinkUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lotteryLinkUI"]
    });

    var queryLinkUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "queryLinkUILabel"]
    });

    var queryLinkUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "queryLinkUI"]
    });

    var lotteryQrCodeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lotteryQrCodeUILabel"]
    });

    var lotteryQrCodeUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "lotteryQrCodeUI"]
    });

    var volumnUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "volumnUILabel"]
    });

    var volumnUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "volumnUI"]
    });

    var addressUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressUILabel"]
    });

    var addressUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "addressUI"]
    });

    var mainBusinessUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mainBusinessUILabel"]
    });

    var mainBusinessUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "mainBusinessUI"]
    });

    var remarkUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "remarkUILabel"]
    });

    var remarkUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "remarkUI"]
    });

    var topAdvertImageUIBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "topAdvertImageUIBtn"]
    });

    var topAdvertImageUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "topAdvertImageUI"]
    });

    var bottomAdvertImageUIBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "bottomAdvertImageUIBtn"]
    });

    var bottomAdvertImageUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "bottomAdvertImageUI"]
    });

    var lotteryChannelUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lotteryChannelUILabel"]
    });

    var lotteryChannelUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "lotteryChannelUI"]
    });

    var qrCodeUIBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "qrCodeUIBtn"]
    });

    var qrCodeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "qrCodeUI"]
    });

    var brandUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "brandUILabel"]
    });

    var brandUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "brandUI"]
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
        ,subComponents: [prefix + "orgIdHidden",prefix + "idUI",prefix + "lotteryLinkUILabel",prefix + "lotteryLinkUI",prefix + "queryLinkUILabel",prefix + "queryLinkUI",prefix + "lotteryQrCodeUILabel",prefix + "lotteryQrCodeUI",prefix + "volumnUILabel",prefix + "volumnUI",prefix + "addressUILabel",prefix + "addressUI",prefix + "mainBusinessUILabel",prefix + "mainBusinessUI",prefix + "remarkUILabel",prefix + "remarkUI",prefix + "topAdvertImageUIBtn",prefix + "topAdvertImageUI",prefix + "bottomAdvertImageUIBtn",prefix + "bottomAdvertImageUI",prefix + "lotteryChannelUILabel",prefix + "lotteryChannelUI",prefix + "qrCodeUIBtn",prefix + "qrCodeUI",prefix + "brandUILabel",prefix + "brandUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [orgIdHidden,idUI,lotteryLinkUILabel,lotteryLinkUI,queryLinkUILabel,queryLinkUI,lotteryQrCodeUILabel,lotteryQrCodeUI,volumnUILabel,volumnUI,addressUILabel,addressUI,mainBusinessUILabel,mainBusinessUI,remarkUILabel,remarkUI,topAdvertImageUIBtn,topAdvertImageUI,bottomAdvertImageUIBtn,bottomAdvertImageUI,lotteryChannelUILabel,lotteryChannelUI,qrCodeUIBtn,qrCodeUI,brandUILabel,brandUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.orgIdHidden=orgIdHidden;

    Form.idUI=idUI;

    Form.lotteryLinkUILabel=lotteryLinkUILabel;

    Form.lotteryLinkUI=lotteryLinkUI;

    Form.queryLinkUILabel=queryLinkUILabel;

    Form.queryLinkUI=queryLinkUI;

    Form.lotteryQrCodeUILabel=lotteryQrCodeUILabel;

    Form.lotteryQrCodeUI=lotteryQrCodeUI;

    Form.volumnUILabel=volumnUILabel;

    Form.volumnUI=volumnUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.mainBusinessUILabel=mainBusinessUILabel;

    Form.mainBusinessUI=mainBusinessUI;

    Form.remarkUILabel=remarkUILabel;

    Form.remarkUI=remarkUI;

    Form.topAdvertImageUIBtn=topAdvertImageUIBtn;

    Form.topAdvertImageUI=topAdvertImageUI;

    Form.bottomAdvertImageUIBtn=bottomAdvertImageUIBtn;

    Form.bottomAdvertImageUI=bottomAdvertImageUI;

    Form.lotteryChannelUILabel=lotteryChannelUILabel;

    Form.lotteryChannelUI=lotteryChannelUI;

    Form.qrCodeUIBtn=qrCodeUIBtn;

    Form.qrCodeUI=qrCodeUI;

    Form.brandUILabel=brandUILabel;

    Form.brandUI=brandUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.orgIdHidden=orgIdHidden;

    Form.idUI=idUI;

    Form.lotteryLinkUILabel=lotteryLinkUILabel;

    Form.lotteryLinkUI=lotteryLinkUI;

    Form.queryLinkUILabel=queryLinkUILabel;

    Form.queryLinkUI=queryLinkUI;

    Form.lotteryQrCodeUILabel=lotteryQrCodeUILabel;

    Form.lotteryQrCodeUI=lotteryQrCodeUI;

    Form.volumnUILabel=volumnUILabel;

    Form.volumnUI=volumnUI;

    Form.addressUILabel=addressUILabel;

    Form.addressUI=addressUI;

    Form.mainBusinessUILabel=mainBusinessUILabel;

    Form.mainBusinessUI=mainBusinessUI;

    Form.remarkUILabel=remarkUILabel;

    Form.remarkUI=remarkUI;

    Form.topAdvertImageUIBtn=topAdvertImageUIBtn;

    Form.topAdvertImageUI=topAdvertImageUI;

    Form.bottomAdvertImageUIBtn=bottomAdvertImageUIBtn;

    Form.bottomAdvertImageUI=bottomAdvertImageUI;

    Form.lotteryChannelUILabel=lotteryChannelUILabel;

    Form.lotteryChannelUI=lotteryChannelUI;

    Form.qrCodeUIBtn=qrCodeUIBtn;

    Form.qrCodeUI=qrCodeUI;

    Form.brandUILabel=brandUILabel;

    Form.brandUI=brandUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_form_CouponUserInfo */
        /* Construct_LAST:org_shaolin_vogerp_coupon_form_CouponUserInfo */
    };

    Form.Save = org_shaolin_vogerp_coupon_form_CouponUserInfo_Save;

    Form.Cancel = org_shaolin_vogerp_coupon_form_CouponUserInfo_Cancel;

    Form.selectTopAdvertImage = org_shaolin_vogerp_coupon_form_CouponUserInfo_selectTopAdvertImage;

    Form.selectBottomAdvertImage = org_shaolin_vogerp_coupon_form_CouponUserInfo_selectBottomAdvertImage;

    Form.selectUserQrCode = org_shaolin_vogerp_coupon_form_CouponUserInfo_selectUserQrCode;

    Form.invokeDynamicFunction = org_shaolin_vogerp_coupon_form_CouponUserInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.coupon.form.CouponUserInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_form_CouponUserInfo */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_form_CouponUserInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponUserInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponUserInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160417-092847",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponUserInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponUserInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponUserInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160417-092847",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponUserInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponUserInfo_selectTopAdvertImage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponUserInfo_selectTopAdvertImage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectTopAdvertImage-1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponUserInfo_selectTopAdvertImage */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponUserInfo_selectBottomAdvertImage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponUserInfo_selectBottomAdvertImage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectBottomAdvertImage-1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponUserInfo_selectBottomAdvertImage */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponUserInfo_selectUserQrCode(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponUserInfo_selectUserQrCode */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectUserQrCode-1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponUserInfo_selectUserQrCode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_form_CouponUserInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_form_CouponUserInfo_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_coupon_form_CouponUserInfo_invokeDynamicFunction */



