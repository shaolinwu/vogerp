/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var takenCustomerIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "takenCustomerIdUI"]
    });

    var itemTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "itemTable"]
    });

    var imageViewer = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "imageViewer"]
        ,thumbnails: true
        ,width: "100%"
        ,height: "400px"
        ,mobheight: "250px"
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

    var imagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "imagePanel"]
        ,items: []
        ,subComponents: [prefix + "imageViewer"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "parentIdUI",prefix + "takenCustomerIdUI",prefix + "itemTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,takenCustomerIdUI,itemTable,imageViewer,chatbtn,cancelbtn,fieldPanel,imagePanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.takenCustomerIdUI=takenCustomerIdUI;

    Form.itemTable=itemTable;

    Form.imageViewer=imageViewer;

    Form.chatbtn=chatbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.takenCustomerIdUI=takenCustomerIdUI;

    Form.itemTable=itemTable;

    Form.imagePanel=imagePanel;

    Form.imageViewer=imageViewer;

    Form.actionPanel=actionPanel;

    Form.chatbtn=chatbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable */

        
      {
        var o = this;
        this.itemTable.callSelectedFunc = function() {
           o.itemTable.sync();
           UIMaster.triggerServerEvent(UIMaster.getUIID(o.itemTable),"SelectItem-20161225-172849",UIMaster.getValue(o.itemTable),Form.__entityName);
        };
      }
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable */
    };

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_Cancel;

    Form.SelectItem = org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_SelectItem;

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
    function org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_SelectItem(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_SelectItem */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"SelectItem-20161225-172849",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_SelectItem */


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

        var constraint_result = this.Form.validate();
        if (constraint_result != true && constraint_result != null) {
            return false;
        }

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:WORKFLOW_COMFORMATION_MSG,messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_GOOfferPriceTable_invokeDynamicFunction */



