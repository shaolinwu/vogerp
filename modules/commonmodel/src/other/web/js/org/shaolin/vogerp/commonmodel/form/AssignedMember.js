/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_AssignedMember(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var orgIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "orgIdUI"]
    });

    var type0UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "type0UILabel"]
    });

    var type0UI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "type0UI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var endDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "endDateUILabel"]
    });

    var termsUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "termsUI"]
        ,label: "????????????"
        ,mustCheck: true
    });

    var paybtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "paybtn"]
    });

    var typeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithMatrix({"prefix":prefix + "typeUI."});

    var endDateUI = new org_shaolin_vogerp_commonmodel_form_DateRangeSelector({"prefix":prefix + "endDateUI."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "paybtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "orgIdUI",prefix + "type0UILabel",prefix + "type0UI",prefix + "typeUILabel",prefix + "typeUI",prefix + "endDateUILabel",prefix + "endDateUI",prefix + "termsUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,orgIdUI,type0UILabel,type0UI,typeUILabel,endDateUILabel,termsUI,paybtn,typeUI,endDateUI,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.orgIdUI=orgIdUI;

    Form.type0UILabel=type0UILabel;

    Form.type0UI=type0UI;

    Form.typeUILabel=typeUILabel;

    Form.endDateUILabel=endDateUILabel;

    Form.termsUI=termsUI;

    Form.paybtn=paybtn;

    Form.typeUI=typeUI;

    Form.endDateUI=endDateUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.orgIdUI=orgIdUI;

    Form.type0UILabel=type0UILabel;

    Form.type0UI=type0UI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.endDateUILabel=endDateUILabel;

    Form.endDateUI=endDateUI;

    Form.termsUI=termsUI;

    Form.actionPanel=actionPanel;

    Form.paybtn=paybtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_AssignedMember */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_AssignedMember */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_AssignedMember_Save;

    Form.openUserTerms = org_shaolin_vogerp_commonmodel_form_AssignedMember_openUserTerms;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_AssignedMember_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.AssignedMember";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_AssignedMember */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_AssignedMember */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AssignedMember_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AssignedMember_Save */
        var o = this;
        var UIEntity = this;

       {   
           var constraint_result = this.Form.validate();
           if (constraint_result != true && constraint_result != null) {
               return false;
           }
       }
       
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20161004-225302",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AssignedMember_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AssignedMember_openUserTerms(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AssignedMember_openUserTerms */
        var o = this;
        var UIEntity = this;

        {   
            UIMaster.ui.mask.openHtml("/html/hints/payterms.html");
        }
            }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AssignedMember_openUserTerms */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_AssignedMember_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_AssignedMember_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_AssignedMember_invokeDynamicFunction */



