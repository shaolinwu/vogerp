/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_AdvertManagement(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var topAdvertLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "topAdvertLabel"]
    });

    var topAdvertUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "topAdvertUI"]
    });

    var bottomAdvertLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottomAdvertLabel"]
    });

    var bottomAdvertUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "bottomAdvertUI"]
    });

    var changeBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "changeBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [topAdvertLabel,topAdvertUI,bottomAdvertLabel,bottomAdvertUI,changeBtn]
    });

    Form.topAdvertLabel=topAdvertLabel;

    Form.topAdvertUI=topAdvertUI;

    Form.bottomAdvertLabel=bottomAdvertLabel;

    Form.bottomAdvertUI=bottomAdvertUI;

    Form.changeBtn=changeBtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_AdvertManagement */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_AdvertManagement */
    };

    Form.changeAdvertImage = org_shaolin_vogerp_coupon_page_AdvertManagement_changeAdvertImage;

    Form.selectTopAdvertImage = org_shaolin_vogerp_coupon_page_AdvertManagement_selectTopAdvertImage;

    Form.selectBottomAdvertImage = org_shaolin_vogerp_coupon_page_AdvertManagement_selectBottomAdvertImage;

    Form.initPageJs = org_shaolin_vogerp_coupon_page_AdvertManagement_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_AdvertManagement_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.AdvertManagement";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_AdvertManagement */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_AdvertManagement */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_AdvertManagement_changeAdvertImage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_AdvertManagement_changeAdvertImage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"changeAdvertImage-20160112-232035",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_AdvertManagement_changeAdvertImage */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_AdvertManagement_selectTopAdvertImage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_AdvertManagement_selectTopAdvertImage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectTopAdvertImage-1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_AdvertManagement_selectTopAdvertImage */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_coupon_page_AdvertManagement_selectBottomAdvertImage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_coupon_page_AdvertManagement_selectBottomAdvertImage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectBottomAdvertImage-1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_coupon_page_AdvertManagement_selectBottomAdvertImage */


    function org_shaolin_vogerp_coupon_page_AdvertManagement_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_AdvertManagement_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_AdvertManagement_initPageJs */


    function org_shaolin_vogerp_coupon_page_AdvertManagement_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_AdvertManagement_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_AdvertManagement_finalizePageJs */



