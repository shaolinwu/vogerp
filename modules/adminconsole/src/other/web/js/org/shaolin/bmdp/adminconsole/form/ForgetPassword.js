/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_form_ForgetPassword(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var phoneNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "phoneNumberUI"]
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
        ,subComponents: [prefix + "phoneNumberUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [phoneNumberUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.phoneNumberUI=phoneNumberUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.phoneNumberUI=phoneNumberUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_form_ForgetPassword */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_form_ForgetPassword */
    };

    Form.sendPassword = org_shaolin_bmdp_adminconsole_form_ForgetPassword_sendPassword;

    Form.Cancel = org_shaolin_bmdp_adminconsole_form_ForgetPassword_Cancel;

    Form.invokeDynamicFunction = org_shaolin_bmdp_adminconsole_form_ForgetPassword_invokeDynamicFunction;

    Form.__entityName="org.shaolin.bmdp.adminconsole.form.ForgetPassword";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_form_ForgetPassword */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_form_ForgetPassword */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_ForgetPassword_sendPassword(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_ForgetPassword_sendPassword */
        var o = this;
        var UIEntity = this;

       {   
           var constraint_result = this.Form.validate();
           if (constraint_result != true && constraint_result != null) {
               return false;
           }
       }
       
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"sendPassword_2040990210",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_ForgetPassword_sendPassword */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_ForgetPassword_Cancel(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_ForgetPassword_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1358686533",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_ForgetPassword_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_form_ForgetPassword_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_form_ForgetPassword_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_form_ForgetPassword_invokeDynamicFunction */



