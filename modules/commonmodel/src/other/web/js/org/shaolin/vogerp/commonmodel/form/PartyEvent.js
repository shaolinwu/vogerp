/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PartyEvent(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var srcPartyUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "srcPartyUILabel"]
    });

    var srcPartyUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "srcPartyUI"]
    });

    var tarPartyUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "tarPartyUILabel"]
    });

    var tarPartyUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "tarPartyUI"]
    });

    var eventRecordUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "eventRecordUILabel"]
    });

    var eventRecordUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "eventRecordUI"]
    });

    var eventTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "eventTypeUILabel"]
    });

    var eventTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "eventTypeUI"]
    });

    var eventStateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "eventStateUILabel"]
    });

    var eventStateUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "eventStateUI"]
    });

    var notifyDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "notifyDateUILabel"]
    });

    var notifyDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "notifyDateUI"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

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
        ,subComponents: [prefix + "srcPartyUILabel",prefix + "srcPartyUI",prefix + "tarPartyUILabel",prefix + "tarPartyUI",prefix + "eventRecordUILabel",prefix + "eventRecordUI",prefix + "eventTypeUILabel",prefix + "eventTypeUI",prefix + "eventStateUILabel",prefix + "eventStateUI",prefix + "notifyDateUILabel",prefix + "notifyDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [srcPartyUILabel,srcPartyUI,tarPartyUILabel,tarPartyUI,eventRecordUILabel,eventRecordUI,eventTypeUILabel,eventTypeUI,eventStateUILabel,eventStateUI,notifyDateUILabel,notifyDateUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.srcPartyUILabel=srcPartyUILabel;

    Form.srcPartyUI=srcPartyUI;

    Form.tarPartyUILabel=tarPartyUILabel;

    Form.tarPartyUI=tarPartyUI;

    Form.eventRecordUILabel=eventRecordUILabel;

    Form.eventRecordUI=eventRecordUI;

    Form.eventTypeUILabel=eventTypeUILabel;

    Form.eventTypeUI=eventTypeUI;

    Form.eventStateUILabel=eventStateUILabel;

    Form.eventStateUI=eventStateUI;

    Form.notifyDateUILabel=notifyDateUILabel;

    Form.notifyDateUI=notifyDateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PartyEvent */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PartyEvent */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_PartyEvent_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_PartyEvent_Cancel;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PartyEvent";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PartyEvent */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PartyEvent */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PartyEvent_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PartyEvent_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail1851644040",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PartyEvent_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PartyEvent_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PartyEvent_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1639675926",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PartyEvent_Cancel */



