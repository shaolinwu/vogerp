/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var chatbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "chatbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "cancelbtn",prefix + "chatbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,itemTable,cancelbtn,chatbtn,fieldPanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.cancelbtn=cancelbtn;

    Form.chatbtn=chatbtn;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.chatbtn=chatbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_Cancel;

    Form.chat = org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_chat;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.GOOfferPriceTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_chat(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_chat */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"chat-20160325-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_chat */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_invokeDynamicFunction */



