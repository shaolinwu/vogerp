/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ContactInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var mobileUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "mobileUILabel"]
    });

    var mobileUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "mobileUI"]
    });

    var telephoneUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "telephoneUILabel"]
    });

    var telephoneUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "telephoneUI"]
    });

    var emailUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "emailUILabel"]
    });

    var emailUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "emailUI"]
    });

    var remarkUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "remarkUILabel"]
    });

    var remarkUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "remarkUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "parentIdUI",prefix + "mobileUILabel",prefix + "mobileUI",prefix + "telephoneUILabel",prefix + "telephoneUI",prefix + "emailUILabel",prefix + "emailUI",prefix + "remarkUILabel",prefix + "remarkUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,parentIdUI,mobileUILabel,mobileUI,telephoneUILabel,telephoneUI,emailUILabel,emailUI,remarkUILabel,remarkUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.parentIdUI=parentIdUI;

    Form.mobileUILabel=mobileUILabel;

    Form.mobileUI=mobileUI;

    Form.telephoneUILabel=telephoneUILabel;

    Form.telephoneUI=telephoneUI;

    Form.emailUILabel=emailUILabel;

    Form.emailUI=emailUI;

    Form.remarkUILabel=remarkUILabel;

    Form.remarkUI=remarkUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.parentIdUI=parentIdUI;

    Form.mobileUILabel=mobileUILabel;

    Form.mobileUI=mobileUI;

    Form.telephoneUILabel=telephoneUILabel;

    Form.telephoneUI=telephoneUI;

    Form.emailUILabel=emailUILabel;

    Form.emailUI=emailUI;

    Form.remarkUILabel=remarkUILabel;

    Form.remarkUI=remarkUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ContactInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ContactInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_ContactInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_ContactInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ContactInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ContactInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ContactInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ContactInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-476185528",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1571372437",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ContactInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ContactInfo_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ContactInfo_invokeDynamicFunction */



