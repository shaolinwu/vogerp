/* null */
/* auto generated constructor */
function org_shaolin_vogerp_bbs_form_QuestionTopicViewer(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var descriptionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var commentsTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "commentsTable"]
    });

    var resolvebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "resolvebtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "resolvebtn",prefix + "cancelbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "descriptionUI",prefix + "commentsTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,descriptionUI,commentsTable,resolvebtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.descriptionUI=descriptionUI;

    Form.commentsTable=commentsTable;

    Form.resolvebtn=resolvebtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.descriptionUI=descriptionUI;

    Form.commentsTable=commentsTable;

    Form.actionPanel=actionPanel;

    Form.resolvebtn=resolvebtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_bbs_form_QuestionTopicViewer */
        /* Construct_LAST:org_shaolin_vogerp_bbs_form_QuestionTopicViewer */
    };

    Form.replyTopic = org_shaolin_vogerp_bbs_form_QuestionTopicViewer_replyTopic;

    Form.resolveTopic = org_shaolin_vogerp_bbs_form_QuestionTopicViewer_resolveTopic;

    Form.replyComment = org_shaolin_vogerp_bbs_form_QuestionTopicViewer_replyComment;

    Form.Cancel = org_shaolin_vogerp_bbs_form_QuestionTopicViewer_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_bbs_form_QuestionTopicViewer_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.bbs.form.QuestionTopicViewer";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_bbs_form_QuestionTopicViewer */
/* Other_Func_LAST:org_shaolin_vogerp_bbs_form_QuestionTopicViewer */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_QuestionTopicViewer_replyTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_replyTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"replyTopic1-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_replyTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_QuestionTopicViewer_resolveTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_resolveTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"resolveTopic-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_resolveTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_QuestionTopicViewer_replyComment(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_replyComment */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"replyComment1-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_replyComment */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_QuestionTopicViewer_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_QuestionTopicViewer_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_QuestionTopicViewer_invokeDynamicFunction */



