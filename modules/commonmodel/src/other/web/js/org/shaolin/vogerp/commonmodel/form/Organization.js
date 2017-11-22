/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_Organization(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var parentIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "parentIdUI"]
    });

    var idUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "idUILabel"]
    });

    var idUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "idUI"]
    });

    var orgCodeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgCodeUILabel"]
    });

    var orgCodeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orgCodeUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
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
        ,subComponents: [prefix + "parentIdUI",prefix + "idUILabel",prefix + "idUI",prefix + "orgCodeUILabel",prefix + "orgCodeUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "descriptionUILabel",prefix + "descriptionUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [parentIdUI,idUILabel,idUI,orgCodeUILabel,orgCodeUI,nameUILabel,nameUI,typeUILabel,typeUI,descriptionUILabel,descriptionUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.parentIdUI=parentIdUI;

    Form.idUILabel=idUILabel;

    Form.idUI=idUI;

    Form.orgCodeUILabel=orgCodeUILabel;

    Form.orgCodeUI=orgCodeUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.parentIdUI=parentIdUI;

    Form.idUILabel=idUILabel;

    Form.idUI=idUI;

    Form.orgCodeUILabel=orgCodeUILabel;

    Form.orgCodeUI=orgCodeUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_Organization */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_Organization */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_Organization_Save;

    Form.ShowIllegalInfo = org_shaolin_vogerp_commonmodel_form_Organization_ShowIllegalInfo;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_Organization_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_Organization_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.Organization";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_Organization */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_Organization */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Organization_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Organization_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail946655221",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Organization_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Organization_ShowIllegalInfo(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Organization_ShowIllegalInfo */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"showIllegalInfo-1509902581",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Organization_ShowIllegalInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Organization_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Organization_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1509902581",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Organization_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Organization_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Organization_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Organization_invokeDynamicFunction */



