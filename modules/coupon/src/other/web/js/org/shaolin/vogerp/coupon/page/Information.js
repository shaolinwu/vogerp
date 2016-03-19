/* null */
/* auto generated constructor */
function org_shaolin_vogerp_coupon_page_Information(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var functionsTab = new UIMaster.ui.tab
    ({
        ui: elementList[prefix + "functionsTab"]
        ,items: []
        ,subComponents: [prefix + "merchantInfoPanel",prefix + "ContractInfoPanel",prefix + "aboutPictoPanel"]
    });
    var mechantImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "mechantImage"]
    });

    var mechantInfoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mechantInfoLabel"]
    });

    var merchantInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "merchantInfoPanel"]
        ,items: []
        ,subComponents: [prefix + "mechantImage",prefix + "mechantInfoLabel"]
    });
    var ContractInfoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "ContractInfoPanel"]
        ,items: []
        ,subComponents: []
    });
    var pictoInfo1Label = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pictoInfo1Label"]
    });

    var pictoInfo2Label = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pictoInfo2Label"]
    });

    var pictoInfo3Label = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pictoInfo3Label"]
    });

    var pictoContact1Label = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pictoContact1Label"]
    });

    var pictoContact2Label = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pictoContact2Label"]
    });

    var pictoContact3Label = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "pictoContact3Label"]
    });

    var pictoInfoImage = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "pictoInfoImage"]
    });

    var aboutPictoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "aboutPictoPanel"]
        ,items: []
        ,subComponents: [prefix + "pictoInfo1Label",prefix + "pictoInfo2Label",prefix + "pictoInfo3Label",prefix + "pictoContact1Label",prefix + "pictoContact2Label",prefix + "pictoContact3Label",prefix + "pictoInfoImage"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [functionsTab]
    });

    Form.functionsTab=functionsTab;

    Form.merchantInfoPanel=merchantInfoPanel;

    Form.mechantImage=mechantImage;

    Form.mechantInfoLabel=mechantInfoLabel;

    Form.ContractInfoPanel=ContractInfoPanel;

    Form.aboutPictoPanel=aboutPictoPanel;

    Form.pictoInfo1Label=pictoInfo1Label;

    Form.pictoInfo2Label=pictoInfo2Label;

    Form.pictoInfo3Label=pictoInfo3Label;

    Form.pictoContact1Label=pictoContact1Label;

    Form.pictoContact2Label=pictoContact2Label;

    Form.pictoContact3Label=pictoContact3Label;

    Form.pictoInfoImage=pictoInfoImage;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_coupon_page_Information */
        /* Construct_LAST:org_shaolin_vogerp_coupon_page_Information */
    };

    Form.initPageJs = org_shaolin_vogerp_coupon_page_Information_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_coupon_page_Information_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.coupon.page.Information";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_coupon_page_Information */
/* Other_Func_LAST:org_shaolin_vogerp_coupon_page_Information */

    function org_shaolin_vogerp_coupon_page_Information_initPageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_Information_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Information_initPageJs */


    function org_shaolin_vogerp_coupon_page_Information_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_coupon_page_Information_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_coupon_page_Information_finalizePageJs */



