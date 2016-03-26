/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GOOfferPrice(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var currPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "currPriceUILabel"]
    });

    var currPriceUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "currPriceUI"]
    });

    var lastPriceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lastPriceUILabel"]
    });

    var lastPriceUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lastPriceUI"]
    });

    var priceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceUILabel"]
    });

    var priceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "priceUI"]
    });

    var priceDescriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceDescriptionUILabel"]
    });

    var resultUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "resultUILabel"]
    });

    var samplePhotoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "samplePhotoUILabel"]
    });

    var samplePhotoUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "samplePhotoUI"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "currPriceUILabel",prefix + "currPriceUI",prefix + "lastPriceUILabel",prefix + "lastPriceUI",prefix + "priceUILabel",prefix + "priceUI",prefix + "priceDescriptionUILabel",prefix + "resultUILabel",prefix + "samplePhotoUILabel",prefix + "samplePhotoUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [currPriceUILabel,currPriceUI,lastPriceUILabel,lastPriceUI,priceUILabel,priceUI,priceDescriptionUILabel,resultUILabel,samplePhotoUILabel,samplePhotoUI,cancelbtn,fieldPanel,actionPanel]
    });

    Form.currPriceUILabel=currPriceUILabel;

    Form.currPriceUI=currPriceUI;

    Form.lastPriceUILabel=lastPriceUILabel;

    Form.lastPriceUI=lastPriceUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.priceDescriptionUILabel=priceDescriptionUILabel;

    Form.resultUILabel=resultUILabel;

    Form.samplePhotoUILabel=samplePhotoUILabel;

    Form.samplePhotoUI=samplePhotoUI;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.currPriceUILabel=currPriceUILabel;

    Form.currPriceUI=currPriceUI;

    Form.lastPriceUILabel=lastPriceUILabel;

    Form.lastPriceUI=lastPriceUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.priceDescriptionUILabel=priceDescriptionUILabel;

    Form.resultUILabel=resultUILabel;

    Form.samplePhotoUILabel=samplePhotoUILabel;

    Form.samplePhotoUI=samplePhotoUI;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */
    };

    Form.offerPrice = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice;

    Form.refreshPrice = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_refreshPrice;

    Form.selectImage = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_selectImage;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GOOfferPrice";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        {
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"offerPrice-20160124-175742",UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_refreshPrice(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_refreshPrice */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refreshPrice-20160211-201444",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_refreshPrice */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_selectImage(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_selectImage */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"selectImage-1317628417",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_selectImage */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160124-175742",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction */



