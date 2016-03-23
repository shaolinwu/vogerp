/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductBasicOverview(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
        ,width: "240px"
        ,height: "240px"
    });

    var priceUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceUI"]
    });

    var descriptionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI",prefix + "priceUI",prefix + "descriptionUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [photoUI,priceUI,descriptionUI,fieldPanel]
    });

    Form.photoUI=photoUI;

    Form.priceUI=priceUI;

    Form.descriptionUI=descriptionUI;

    Form.fieldPanel=fieldPanel;

    Form.photoUI=photoUI;

    Form.priceUI=priceUI;

    Form.descriptionUI=descriptionUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductBasicOverview */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductBasicOverview */
    };

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductBasicOverview_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductBasicOverview";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductBasicOverview */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductBasicOverview */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductBasicOverview_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductBasicOverview_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductBasicOverview_invokeDynamicFunction */



