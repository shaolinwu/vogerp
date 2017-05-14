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

    var priceUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "priceUILabel"]
    });

    var priceUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "priceUI"]
        ,isNumber: true
        ,validators:[
        {
            func: function() {
                
                   {
                       if (this.value.length > 0) {
                           if (/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/.test(this.value)) {
                             return true;
                           } else {
                             return false;
                           }
                       }
                       return true;
                   }
                   
            }
            ,msg: ""
        }
]    });

    var leaveWordUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "leaveWordUILabel"]
    });

    var leaveWordUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "leaveWordUI"]
    });

    var samplePhotoUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "samplePhotoUILabel"]
    });

    var resultUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "resultUILabel"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var samplePhotoUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "samplePhotoUI."});

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
        ,subComponents: [prefix + "currPriceUILabel",prefix + "currPriceUI",prefix + "priceUILabel",prefix + "priceUI",prefix + "leaveWordUILabel",prefix + "leaveWordUI",prefix + "samplePhotoUILabel",prefix + "samplePhotoUI",prefix + "resultUILabel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [currPriceUILabel,currPriceUI,priceUILabel,priceUI,leaveWordUILabel,leaveWordUI,samplePhotoUILabel,resultUILabel,cancelbtn,samplePhotoUI,fieldPanel,actionPanel]
    });

    Form.currPriceUILabel=currPriceUILabel;

    Form.currPriceUI=currPriceUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.leaveWordUILabel=leaveWordUILabel;

    Form.leaveWordUI=leaveWordUI;

    Form.samplePhotoUILabel=samplePhotoUILabel;

    Form.resultUILabel=resultUILabel;

    Form.cancelbtn=cancelbtn;

    Form.samplePhotoUI=samplePhotoUI;

    Form.fieldPanel=fieldPanel;

    Form.currPriceUILabel=currPriceUILabel;

    Form.currPriceUI=currPriceUI;

    Form.priceUILabel=priceUILabel;

    Form.priceUI=priceUI;

    Form.leaveWordUILabel=leaveWordUILabel;

    Form.leaveWordUI=leaveWordUI;

    Form.samplePhotoUILabel=samplePhotoUILabel;

    Form.samplePhotoUI=samplePhotoUI;

    Form.resultUILabel=resultUILabel;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GOOfferPrice */
    };

    Form.offerPrice = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_offerPrice;

    Form.refreshPrice = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_refreshPrice;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel;

    Form.showSimplePanel = org_shaolin_vogerp_ecommercial_form_GOOfferPrice_showSimplePanel;

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

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

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
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160124-175742",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_showSimplePanel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_showSimplePanel */
        var o = this;
        var UIEntity = this;

        {
           $(this.samplePhotoUI.Form).css("display", "block");
           $(this.samplePhotoUI.Form).parent().parent().parent().css("display", "block");
        }
            }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_showSimplePanel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPrice_invokeDynamicFunction */



