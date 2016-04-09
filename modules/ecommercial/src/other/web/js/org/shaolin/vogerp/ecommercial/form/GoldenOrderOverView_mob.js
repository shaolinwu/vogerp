/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var expiratedDateUI = new UIMaster.ui.countdown
    ({
        ui: elementList[prefix + "expiratedDateUI"]
        ,style: "width:100%;height:90px;"
    });

    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var serialNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUILabel"]
    });

    var serialNumberUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "serialNumberUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var estimatedPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estimatedPriceUILabel"]
    });

    var estimatedPriceUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "estimatedPriceUI"]
    });

    var publishedCustomerIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUILabel"]
    });

    var publishedCustomerIdUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "publishedCustomerIdUI"]
    });

    var createDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUILabel"]
    });

    var createDateUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "createDateUI"]
    });

    var moreDetailUILabel0 = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "moreDetailUILabel0"]
    });

    var moreDetailUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "moreDetailUILabel"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "serialNumberUILabel",prefix + "serialNumberUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "estimatedPriceUILabel",prefix + "estimatedPriceUI",prefix + "publishedCustomerIdUILabel",prefix + "publishedCustomerIdUI",prefix + "createDateUILabel",prefix + "createDateUI",prefix + "moreDetailUILabel0",prefix + "moreDetailUILabel"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "expiratedDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [expiratedDateUI,idUI,serialNumberUILabel,serialNumberUI,descriptionUILabel,descriptionUI,estimatedPriceUILabel,estimatedPriceUI,publishedCustomerIdUILabel,publishedCustomerIdUI,createDateUILabel,createDateUI,moreDetailUILabel0,moreDetailUILabel,topPanel,fieldPanel]
    });

    Form.expiratedDateUI=expiratedDateUI;

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.moreDetailUILabel0=moreDetailUILabel0;

    Form.moreDetailUILabel=moreDetailUILabel;

    Form.topPanel=topPanel;

    Form.expiratedDateUI=expiratedDateUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.serialNumberUILabel=serialNumberUILabel;

    Form.serialNumberUI=serialNumberUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.estimatedPriceUILabel=estimatedPriceUILabel;

    Form.estimatedPriceUI=estimatedPriceUI;

    Form.publishedCustomerIdUILabel=publishedCustomerIdUILabel;

    Form.publishedCustomerIdUI=publishedCustomerIdUI;

    Form.createDateUILabel=createDateUILabel;

    Form.createDateUI=createDateUI;

    Form.moreDetailUILabel0=moreDetailUILabel0;

    Form.moreDetailUILabel=moreDetailUILabel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob */
    };

    Form.Save = org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_Save;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderOverView_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20160106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderOverView_mob_invokeDynamicFunction */



