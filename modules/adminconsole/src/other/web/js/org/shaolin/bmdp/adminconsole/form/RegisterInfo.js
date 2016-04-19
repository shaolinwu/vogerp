/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_RegisterInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var emailUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "emailUILabel"]
    });

    var emailUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "emailUI"]
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

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
                            return !/[¡£~!@#$%\^\+\&\\\/\?\|:\.<>{}()';="]/.test(this.value);
                        }
                        return true;
                    }
                    
            }
            ,msg: "\u8BF7\u8F93\u5165A-Z\u5B57\u6BCD\u62160-9\u6570\u5B57\u4F5C\u4E3A\u5BC6\u7801\u3002"
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
                            return !/[¡£~!@#$%\^\+\&\\\/\?\|:\.<>{}()';="]/.test(this.value);
                        }
                        return true;
                    }
            }
            ,msg: "\u8BF7\u8F93\u5165A-Z\u5B57\u6BCD\u62160-9\u6570\u5B57\u4F5C\u4E3A\u5BC6\u7801\u3002"
        }
,
        {
            func: function() {
                
                    { 
                    return this.value == passwordUI.value;
                    }
            }
            ,msg: "\u5BC6\u7801\u4E0D\u5339\u914D\uFF01"
        }
]    });

    var orgNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgNameUILabel"]
    });

    var orgNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orgNameUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "emailUILabel",prefix + "emailUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "passwordUILabel",prefix + "passwordUI",prefix + "password1UILabel",prefix + "password1UI",prefix + "orgNameUILabel",prefix + "orgNameUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [emailUILabel,emailUI,nameUILabel,nameUI,passwordUILabel,passwordUI,password1UILabel,password1UI,orgNameUILabel,orgNameUI,fieldPanel]
    });

    Form.emailUILabel=emailUILabel;

    Form.emailUI=emailUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.password1UILabel=password1UILabel;

    Form.password1UI=password1UI;

    Form.orgNameUILabel=orgNameUILabel;

    Form.orgNameUI=orgNameUI;

    Form.fieldPanel=fieldPanel;

    Form.emailUILabel=emailUILabel;

    Form.emailUI=emailUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.password1UILabel=password1UILabel;

    Form.password1UI=password1UI;

    Form.orgNameUILabel=orgNameUILabel;

    Form.orgNameUI=orgNameUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
    };

    Form.invokeDynamicFunction = org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.bmdp.adminconsole.form.RegisterInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction */



