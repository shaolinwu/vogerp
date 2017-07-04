/* null */
/* auto generated constructor */
function org_shaolin_vogerp_bbs_form_Topic(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var contentLinkUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contentLinkUILabel"]
    });

    var contentLinkUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "contentLinkUI"]
        ,hiddenToolbar: false
        ,persistable: true
        ,height: "500px"
    });

    var verifiedbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "verifiedbtn"]
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
        ,subComponents: [prefix + "verifiedbtn",prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "contentLinkUILabel",prefix + "contentLinkUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,nameUILabel,nameUI,descriptionUILabel,descriptionUI,contentLinkUILabel,contentLinkUI,verifiedbtn,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.contentLinkUILabel=contentLinkUILabel;

    Form.contentLinkUI=contentLinkUI;

    Form.verifiedbtn=verifiedbtn;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.contentLinkUILabel=contentLinkUILabel;

    Form.contentLinkUI=contentLinkUI;

    Form.actionPanel=actionPanel;

    Form.verifiedbtn=verifiedbtn;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_bbs_form_Topic */
        /* Construct_LAST:org_shaolin_vogerp_bbs_form_Topic */
    };

    Form.Save = org_shaolin_vogerp_bbs_form_Topic_Save;

    Form.PassVerifcation = org_shaolin_vogerp_bbs_form_Topic_PassVerifcation;

    Form.Cancel = org_shaolin_vogerp_bbs_form_Topic_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_bbs_form_Topic_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.bbs.form.Topic";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_bbs_form_Topic */
/* Other_Func_LAST:org_shaolin_vogerp_bbs_form_Topic */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_Topic_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_Topic_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_Topic_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_Topic_PassVerifcation(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_Topic_PassVerifcation */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"passVerifcation-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_Topic_PassVerifcation */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_Topic_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_Topic_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_Topic_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_Topic_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_Topic_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_Topic_invokeDynamicFunction */



