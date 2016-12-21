/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var descriptionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUI"]
        ,showMaxLength: 100
    });

    var estimatedPriceUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estimatedPriceUI"]
    });

    var publishedCityUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCityUI"]
    });

    var createDateUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUI"]
    });

    var bannerPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bannerPanel"]
        ,items: []
        ,subComponents: [prefix + "estimatedPriceUI",prefix + "publishedCityUI",prefix + "createDateUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "descriptionUI",prefix + "bannerPanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,descriptionUI,estimatedPriceUI,publishedCityUI,createDateUI,fieldPanel,bannerPanel]
    });

    Form.idUI=idUI;

    Form.descriptionUI=descriptionUI;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.publishedCityUI=publishedCityUI;

    Form.createDateUI=createDateUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.descriptionUI=descriptionUI;

    Form.bannerPanel=bannerPanel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.publishedCityUI=publishedCityUI;

    Form.createDateUI=createDateUI;

    Form.bannerPanel=bannerPanel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.publishedCityUI=publishedCityUI;

    Form.createDateUI=createDateUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderOverView_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_invokeDynamicFunction */



