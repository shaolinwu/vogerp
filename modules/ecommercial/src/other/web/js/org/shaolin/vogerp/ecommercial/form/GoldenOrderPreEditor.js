/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var hintsUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "hintsUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var priceSelector = new org_shaolin_vogerp_productmodel_form_ProductPricePackageSelector({"prefix":prefix + "priceSelector."});

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
        ,subComponents: [prefix + "hintsUI",prefix + "priceSelector"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [hintsUI,okbtn,cancelbtn,priceSelector,fieldPanel,actionPanel]
    });

    Form.hintsUI=hintsUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.priceSelector=priceSelector;

    Form.fieldPanel=fieldPanel;

    Form.hintsUI=hintsUI;

    Form.priceSelector=priceSelector;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Cancel;

    Form.Next = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Next;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GoldenOrderPreEditor";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160106-214008",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Next(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Next */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Next_49169030",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_Next */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GoldenOrderPreEditor_invokeDynamicFunction */



