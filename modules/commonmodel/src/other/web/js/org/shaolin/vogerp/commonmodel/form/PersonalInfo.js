/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PersonalInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var firstNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "firstNameUILabel"]
    });

    var firstNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "firstNameUI"]
    });

    var genderUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "genderUILabel"]
    });

    var genderUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "genderUI"]
      ,allowBlank:false
    });

    var discriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "discriptionUILabel"]
    });

    var discriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "discriptionUI"]
    });

    var cityUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "cityUILabel"]
    });

    var cityListUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "cityListUI"]
    });

    var languageUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "languageUILabel"]
    });

    var languageUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "languageUI"]
      ,allowBlank:false
    });

    var majorUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "majorUILabel"]
    });

    var majorUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "majorUI"]
      ,allowBlank:true
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "firstNameUILabel",prefix + "firstNameUI",prefix + "genderUILabel",prefix + "genderUI",prefix + "discriptionUILabel",prefix + "discriptionUI",prefix + "cityUILabel",prefix + "cityListUI",prefix + "languageUILabel",prefix + "languageUI",prefix + "majorUILabel",prefix + "majorUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,firstNameUILabel,firstNameUI,genderUILabel,genderUI,discriptionUILabel,discriptionUI,cityUILabel,cityListUI,languageUILabel,languageUI,majorUILabel,majorUI,okbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.firstNameUILabel=firstNameUILabel;

    Form.firstNameUI=firstNameUI;

    Form.genderUILabel=genderUILabel;

    Form.genderUI=genderUI;

    Form.discriptionUILabel=discriptionUILabel;

    Form.discriptionUI=discriptionUI;

    Form.cityUILabel=cityUILabel;

    Form.cityListUI=cityListUI;

    Form.languageUILabel=languageUILabel;

    Form.languageUI=languageUI;

    Form.majorUILabel=majorUILabel;

    Form.majorUI=majorUI;

    Form.okbtn=okbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.firstNameUILabel=firstNameUILabel;

    Form.firstNameUI=firstNameUI;

    Form.genderUILabel=genderUILabel;

    Form.genderUI=genderUI;

    Form.discriptionUILabel=discriptionUILabel;

    Form.discriptionUI=discriptionUI;

    Form.cityUILabel=cityUILabel;

    Form.cityListUI=cityListUI;

    Form.languageUILabel=languageUILabel;

    Form.languageUI=languageUI;

    Form.majorUILabel=majorUILabel;

    Form.majorUI=majorUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PersonalInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PersonalInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_PersonalInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_PersonalInfo_Cancel;

    Form.updateCityLocation = org_shaolin_vogerp_commonmodel_form_PersonalInfo_updateCityLocation;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_PersonalInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PersonalInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PersonalInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PersonalInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalInfo_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-2117220046",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail99521939",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalInfo_updateCityLocation(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalInfo_updateCityLocation */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"updateCityLocation-20180227-1939",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalInfo_updateCityLocation */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalInfo_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalInfo_invokeDynamicFunction */



