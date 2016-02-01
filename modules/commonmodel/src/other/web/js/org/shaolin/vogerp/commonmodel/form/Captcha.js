/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_Captcha(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var questionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "questionUILabel"]
    });

    var questionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "questionUI"]
    });

    var answerUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "answerUILabel"]
    });

    var answerUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "answerUI"]
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
        ,subComponents: [prefix + "questionUILabel",prefix + "questionUI",prefix + "answerUILabel",prefix + "answerUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [questionUILabel,questionUI,answerUILabel,answerUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.questionUILabel=questionUILabel;

    Form.questionUI=questionUI;

    Form.answerUILabel=answerUILabel;

    Form.answerUI=answerUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.questionUILabel=questionUILabel;

    Form.questionUI=questionUI;

    Form.answerUILabel=answerUILabel;

    Form.answerUI=answerUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_Captcha */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_Captcha */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_Captcha_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_Captcha_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_Captcha_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.Captcha";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_Captcha */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_Captcha */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Captcha_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Captcha_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-20151227-172647",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Captcha_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Captcha_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Captcha_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20151227-172647",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Captcha_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_Captcha_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_Captcha_invokeDynamicFunction */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_Captcha_invokeDynamicFunction */


