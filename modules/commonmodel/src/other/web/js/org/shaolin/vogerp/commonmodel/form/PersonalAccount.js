/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PersonalAccount(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var userNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userNameUILabel"]
    });

    var userNameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "userNameUI"]
    });

    var orgPasswordUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgPasswordUILabel"]
    });

    var orgPasswordUI = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "orgPasswordUI"]
        ,validators:[
        {
            func: function() {
                
                    {
                        if (this.value.length > 0) {
                            return !/[?~!@#$%\^\+\&\\\/\?\|:\.<>{}()';="]/.test(this.value);
                        }
                        return true;
                    }
                    
            }
            ,msg: "\u53EA\u5141\u8BB8\u5B57\u6BCD\u548C\u6570\u5B57\u3002"
        }
,
        {
            func: function() {
                
                    return this.value != "******";
                    
            }
            ,msg: "Please change your password."
        }
]    });

    var passwordUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "passwordUILabel"]
    });

    var passwordUI = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "passwordUI"]
        ,validators:[
        {
            func: function() {
                
                    {
                        if (this.value.length > 0) {
                            return !/[?~!@#$%\^\+\&\\\/\?\|:\.<>{}()';="]/.test(this.value);
                        }
                        return true;
                    }
                    
            }
            ,msg: "\u53EA\u5141\u8BB8\u5B57\u6BCD\u548C\u6570\u5B57\u3002"
        }
,
        {
            func: function() {
                
                    return this.value != "******";
                    
            }
            ,msg: "Please change your password."
        }
]    });

    var password1UILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "password1UILabel"]
    });

    var password1UI = new UIMaster.ui.passwordfield
    ({
        ui: elementList[prefix + "password1UI"]
        ,validators:[
        {
            func: function() {
                
                    {
	                    if (this.value.length > 0) {
					        return !/[?~!@#$%\^\+\&\\\/\?\|:\.<>{}()';="]/.test(this.value);
					    }
					    return true;
                    }
            }
            ,msg: "\u53EA\u5141\u8BB8\u5B57\u6BCD\u548C\u6570\u5B57\u3002"
        }
,
        {
            func: function() {
                
                    { 
                    return this.value == passwordUI.value;
                    }
            }
            ,msg: "\u5BC6\u7801\u4E0D\u4E00\u81F4!"
        }
,
        {
            func: function() {
                
                    return this.value != "******";
                    
            }
            ,msg: "Please change your password."
        }
]    });

    var resetPasswordbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "resetPasswordbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "resetPasswordbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "userNameUILabel",prefix + "userNameUI",prefix + "orgPasswordUILabel",prefix + "orgPasswordUI",prefix + "passwordUILabel",prefix + "passwordUI",prefix + "password1UILabel",prefix + "password1UI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,userNameUILabel,userNameUI,orgPasswordUILabel,orgPasswordUI,passwordUILabel,passwordUI,password1UILabel,password1UI,resetPasswordbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.userNameUILabel=userNameUILabel;

    Form.userNameUI=userNameUI;

    Form.orgPasswordUILabel=orgPasswordUILabel;

    Form.orgPasswordUI=orgPasswordUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.password1UILabel=password1UILabel;

    Form.password1UI=password1UI;

    Form.resetPasswordbtn=resetPasswordbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.userNameUILabel=userNameUILabel;

    Form.userNameUI=userNameUI;

    Form.orgPasswordUILabel=orgPasswordUILabel;

    Form.orgPasswordUI=orgPasswordUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.password1UILabel=password1UILabel;

    Form.password1UI=password1UI;

    Form.actionPanel=actionPanel;

    Form.resetPasswordbtn=resetPasswordbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PersonalAccount */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PersonalAccount */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_PersonalAccount_Save;

    Form.ResetPassword = org_shaolin_vogerp_commonmodel_form_PersonalAccount_ResetPassword;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_PersonalAccount_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_PersonalAccount_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PersonalAccount";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PersonalAccount */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PersonalAccount */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalAccount_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalAccount_Save */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-201604052212-2342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalAccount_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalAccount_ResetPassword(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalAccount_ResetPassword */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"resetPassword-201604052212-2342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalAccount_ResetPassword */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalAccount_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalAccount_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1310282081",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalAccount_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonalAccount_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonalAccount_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonalAccount_invokeDynamicFunction */



