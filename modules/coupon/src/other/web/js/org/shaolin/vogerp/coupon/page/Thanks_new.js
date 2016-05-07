/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_Thanks_new(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var topImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "topImage"]
    });

    var middle1Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "middle1Text"]
    });

    var middle2Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "middle2Text"]
    });

    var bottomImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "bottomImage"]
    });

    var bottom1Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom1Text"]
    });

    var bottom2Text = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottom2Text"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "bottomImage",prefix + "bottom1Text",prefix + "bottom2Text"]
    });

    var middlePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "middlePanel"]
        ,items: []
        ,subComponents: [prefix + "middle1Text",prefix + "middle2Text"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [topImage,middle1Text,middle2Text,bottomImage,bottom1Text,bottom2Text,middlePanel,bottomPanel]
    });

    Form.topImage=topImage;

    Form.middle1Text=middle1Text;

    Form.middle2Text=middle2Text;

    Form.bottomImage=bottomImage;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.middlePanel=middlePanel;

    Form.middle1Text=middle1Text;

    Form.middle2Text=middle2Text;

    Form.bottomPanel=bottomPanel;

    Form.bottomImage=bottomImage;

    Form.bottom1Text=bottom1Text;

    Form.bottom2Text=bottom2Text;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_Thanks_new */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_Thanks_new */
    };

    Form.initPageJs = org_shaolin_vogerp_coupon_page_Thanks_new_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_Thanks_new_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.Thanks_new";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_Thanks_new */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_Thanks_new */

    function org_shaolin_vogerp_coupon_page_Thanks_new_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_Thanks_new_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Thanks_new_initPageJs */


    function org_shaolin_vogerp_coupon_page_Thanks_new_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_Thanks_new_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Thanks_new_finalizePageJs */



