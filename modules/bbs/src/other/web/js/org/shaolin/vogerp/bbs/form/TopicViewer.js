/* null */
/* auto generated constructor */
function org_shaolin_vogerp_bbs_form_TopicViewer(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var contentUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "contentUI"]
        ,htmlSupport: true
        ,viewMode: true
        ,persistable: false
        ,height: "200px"
    });

    var commentsTable = new UIMaster.ui.objectlist
    ({
        ui: elementList[prefix + "commentsTable"]
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
        ,subComponents: [prefix + "idUI",prefix + "contentUI",prefix + "commentsTable"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,contentUI,commentsTable,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.contentUI=contentUI;

    Form.commentsTable=commentsTable;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.contentUI=contentUI;

    Form.commentsTable=commentsTable;

    Form.actionPanel=actionPanel;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_bbs_form_TopicViewer */
        /* Construct_LAST:org_shaolin_vogerp_bbs_form_TopicViewer */
    };

    Form.replyTopic = org_shaolin_vogerp_bbs_form_TopicViewer_replyTopic;

    Form.replyComment = org_shaolin_vogerp_bbs_form_TopicViewer_replyComment;

    Form.Cancel = org_shaolin_vogerp_bbs_form_TopicViewer_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_bbs_form_TopicViewer_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.bbs.form.TopicViewer";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_bbs_form_TopicViewer */
/* Other_Func_LAST:org_shaolin_vogerp_bbs_form_TopicViewer */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_TopicViewer_replyTopic(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_TopicViewer_replyTopic */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"replyTopic-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_TopicViewer_replyTopic */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_TopicViewer_replyComment(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_TopicViewer_replyComment */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"replyComment-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_TopicViewer_replyComment */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_TopicViewer_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_TopicViewer_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170609-122142",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_TopicViewer_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_bbs_form_TopicViewer_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_bbs_form_TopicViewer_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_bbs_form_TopicViewer_invokeDynamicFunction */



