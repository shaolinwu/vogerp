/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ProductCode(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var productIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "productIdUI"]
    });

    var codeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "codeUILabel"]
    });

    var codeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "codeUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "productIdUI",prefix + "codeUILabel",prefix + "codeUI",prefix + "typeUILabel",prefix + "typeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [productIdUI,codeUILabel,codeUI,typeUILabel,typeUI,fieldPanel]
    });

    Form.productIdUI=productIdUI;

    Form.codeUILabel=codeUILabel;

    Form.codeUI=codeUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.fieldPanel=fieldPanel;

    Form.productIdUI=productIdUI;

    Form.codeUILabel=codeUILabel;

    Form.codeUI=codeUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ProductCode */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ProductCode */
    };

    Form.Save = org_shaolin_vogerp_productmodel_form_ProductCode_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ProductCode_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ProductCode_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ProductCode";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ProductCode */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ProductCode */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCode_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCode_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-1855742184",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCode_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCode_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCode_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-916237636",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCode_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ProductCode_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ProductCode_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'????',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ProductCode_invokeDynamicFunction */



