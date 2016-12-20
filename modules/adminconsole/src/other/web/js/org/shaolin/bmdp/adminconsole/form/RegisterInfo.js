/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_RegisterInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var phoneNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "phoneNumberUILabel"]
    });

    var phoneNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "phoneNumberUI"]
        ,validators:[
        {
            func: function() {
                
                    {
                        if (this.value.length > 0) {
                            if (/^1[3|4|5|7|8]\d{9}$/.test(this.value)) {
                              return true;
                            } else {
                              return false;
                            }
                        }
                        return true;
                    }
                    
            }
            ,msg: "\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7\u3002"
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
                            return !/[?~!@#$%\^\+\&\\\/\?\|:\.<>{}()';="]/.test(this.value);
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

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var industryUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "industryUILabel"]
    });

    var industryUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "industryUI"]
      ,allowBlank:false
      ,allowBlankText:"?????????"
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "phoneNumberUILabel",prefix + "phoneNumberUI",prefix + "passwordUILabel",prefix + "passwordUI",prefix + "password1UILabel",prefix + "password1UI",prefix + "nameUILabel",prefix + "nameUI",prefix + "industryUILabel",prefix + "industryUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [phoneNumberUILabel,phoneNumberUI,passwordUILabel,passwordUI,password1UILabel,password1UI,nameUILabel,nameUI,industryUILabel,industryUI,fieldPanel]
    });

    Form.phoneNumberUILabel=phoneNumberUILabel;

    Form.phoneNumberUI=phoneNumberUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.password1UILabel=password1UILabel;

    Form.password1UI=password1UI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.industryUILabel=industryUILabel;

    Form.industryUI=industryUI;

    Form.fieldPanel=fieldPanel;

    Form.phoneNumberUILabel=phoneNumberUILabel;

    Form.phoneNumberUI=phoneNumberUI;

    Form.passwordUILabel=passwordUILabel;

    Form.passwordUI=passwordUI;

    Form.password1UILabel=password1UILabel;

    Form.password1UI=password1UI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.industryUILabel=industryUILabel;

    Form.industryUI=industryUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
    };

    Form.verifiPhoneNumber = org_shaolin_bmdp_adminconsole_form_RegisterInfo_verifiPhoneNumber;

    Form.invokeDynamicFunction = org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.bmdp.adminconsole.form.RegisterInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_form_RegisterInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_RegisterInfo_verifiPhoneNumber(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_RegisterInfo_verifiPhoneNumber */
        var o = this;
        var UIEntity = this;

        {   
            //if(event.keyCode != 13 || event.keyCode != 9) {
               //return;
            //}
            var constraint_result = this.phoneNumberUI.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifiPhoneNumber-20160101-1112432",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_RegisterInfo_verifiPhoneNumber */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_RegisterInfo_invokeDynamicFunction */



