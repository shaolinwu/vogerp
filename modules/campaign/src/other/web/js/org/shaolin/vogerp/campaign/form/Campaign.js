/* null */
/* auto generated constructor */
function org_shaolin_vogerp_campaign_form_Campaign(json)
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

    var descURLUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descURLUILabel"]
    });

    var descURLUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "descURLUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var partyRolesUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "partyRolesUILabel"]
    });

    var partyRolesUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "partyRolesUI"]
    });

    var startDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "startDateUILabel"]
    });

    var startDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "startDateUI"]
        ,isDateOnly: true
        ,IsDateOnly: true
    });

    var endDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "endDateUILabel"]
    });

    var endDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "endDateUI"]
        ,isDateOnly: true
        ,IsDateOnly: true
    });

    var policyUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "policyUILabel"]
    });

    var policyUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "policyUI"]
    });

    var htmlDescUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "htmlDescUI"]
        ,maxHeight: true
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var advTitleImagesUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "advTitleImagesUI."});

    var advTabImagesUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "advTabImagesUI."});

    var advLoginImagesUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "advLoginImagesUI."});

    var advMainImagesUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "advMainImagesUI."});

    var advAppLuanchingImagesUI = new org_shaolin_vogerp_commonmodel_form_ImageUploader({"prefix":prefix + "advAppLuanchingImagesUI."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "cancelbtn"]
    });

    var fieldPanel2 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel2"]
        ,items: []
        ,subComponents: [prefix + "advTitleImagesUI",prefix + "advTabImagesUI",prefix + "advLoginImagesUI",prefix + "advMainImagesUI",prefix + "advAppLuanchingImagesUI",prefix + "htmlDescUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "descURLUILabel",prefix + "descURLUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "partyRolesUILabel",prefix + "partyRolesUI",prefix + "startDateUILabel",prefix + "startDateUI",prefix + "endDateUILabel",prefix + "endDateUI",prefix + "policyUILabel",prefix + "policyUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,nameUILabel,nameUI,descURLUILabel,descURLUI,typeUILabel,typeUI,partyRolesUILabel,partyRolesUI,startDateUILabel,startDateUI,endDateUILabel,endDateUI,policyUILabel,policyUI,htmlDescUI,okbtn,cancelbtn,advTitleImagesUI,advTabImagesUI,advLoginImagesUI,advMainImagesUI,advAppLuanchingImagesUI,fieldPanel,fieldPanel2,actionPanel]
    });

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descURLUILabel=descURLUILabel;

    Form.descURLUI=descURLUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.partyRolesUILabel=partyRolesUILabel;

    Form.partyRolesUI=partyRolesUI;

    Form.startDateUILabel=startDateUILabel;

    Form.startDateUI=startDateUI;

    Form.endDateUILabel=endDateUILabel;

    Form.endDateUI=endDateUI;

    Form.policyUILabel=policyUILabel;

    Form.policyUI=policyUI;

    Form.htmlDescUI=htmlDescUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.advTitleImagesUI=advTitleImagesUI;

    Form.advTabImagesUI=advTabImagesUI;

    Form.advLoginImagesUI=advLoginImagesUI;

    Form.advMainImagesUI=advMainImagesUI;

    Form.advAppLuanchingImagesUI=advAppLuanchingImagesUI;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.descURLUILabel=descURLUILabel;

    Form.descURLUI=descURLUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.partyRolesUILabel=partyRolesUILabel;

    Form.partyRolesUI=partyRolesUI;

    Form.startDateUILabel=startDateUILabel;

    Form.startDateUI=startDateUI;

    Form.endDateUILabel=endDateUILabel;

    Form.endDateUI=endDateUI;

    Form.policyUILabel=policyUILabel;

    Form.policyUI=policyUI;

    Form.fieldPanel2=fieldPanel2;

    Form.advTitleImagesUI=advTitleImagesUI;

    Form.advTabImagesUI=advTabImagesUI;

    Form.advLoginImagesUI=advLoginImagesUI;

    Form.advMainImagesUI=advMainImagesUI;

    Form.advAppLuanchingImagesUI=advAppLuanchingImagesUI;

    Form.htmlDescUI=htmlDescUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_campaign_form_Campaign */
        /* Construct_LAST:org_shaolin_vogerp_campaign_form_Campaign */
    };

    Form.Save = org_shaolin_vogerp_campaign_form_Campaign_Save;

    Form.Cancel = org_shaolin_vogerp_campaign_form_Campaign_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_campaign_form_Campaign_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.campaign.form.Campaign";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_campaign_form_Campaign */
/* Other_Func_LAST:org_shaolin_vogerp_campaign_form_Campaign */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_campaign_form_Campaign_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_campaign_form_Campaign_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20170220-211315",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_campaign_form_Campaign_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_campaign_form_Campaign_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_campaign_form_Campaign_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170220-211315",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_campaign_form_Campaign_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_campaign_form_Campaign_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_campaign_form_Campaign_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_campaign_form_Campaign_invokeDynamicFunction */



