/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable(json)
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

    var chatbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "chatbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "chatbtn",prefix + "cancelbtn"]
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
        ,items: [parentIdUI,itemTable,chatbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.chatbtn=chatbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.itemTable=itemTable;

    Form.actionPanel=actionPanel;

    Form.chatbtn=chatbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_Cancel;

    Form.chat = org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_chat;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.ROOfferPriceTable";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20160615-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_chat(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_chat */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"chat-20160615-112849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_chat */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_ROOfferPriceTable_invokeDynamicFunction */


