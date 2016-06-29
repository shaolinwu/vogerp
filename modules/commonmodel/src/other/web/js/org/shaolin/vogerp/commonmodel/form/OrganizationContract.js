/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_OrganizationContract(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "idUILabel"]
    });

    var idUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "idUI"]
    });

    var orgIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgIdUILabel"]
    });

    var orgIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "orgIdUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var termsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "termsUILabel"]
    });

    var termsUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "termsUI"]
    });

    var expirationDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "expirationDateUILabel"]
    });

    var expirationDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "expirationDateUI"]
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
        ,subComponents: [prefix + "idUILabel",prefix + "idUI",prefix + "orgIdUILabel",prefix + "orgIdUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "termsUILabel",prefix + "termsUI",prefix + "expirationDateUILabel",prefix + "expirationDateUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUILabel,idUI,orgIdUILabel,orgIdUI,typeUILabel,typeUI,termsUILabel,termsUI,expirationDateUILabel,expirationDateUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUILabel=idUILabel;

    Form.idUI=idUI;

    Form.orgIdUILabel=orgIdUILabel;

    Form.orgIdUI=orgIdUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.termsUILabel=termsUILabel;

    Form.termsUI=termsUI;

    Form.expirationDateUILabel=expirationDateUILabel;

    Form.expirationDateUI=expirationDateUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUILabel=idUILabel;

    Form.idUI=idUI;

    Form.orgIdUILabel=orgIdUILabel;

    Form.orgIdUI=orgIdUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.termsUILabel=termsUILabel;

    Form.termsUI=termsUI;

    Form.expirationDateUILabel=expirationDateUILabel;

    Form.expirationDateUI=expirationDateUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_OrganizationContract */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_OrganizationContract */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_OrganizationContract_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_OrganizationContract_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_OrganizationContract_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.OrganizationContract";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_OrganizationContract */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_OrganizationContract */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_OrganizationContract_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_OrganizationContract_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail835027652",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_OrganizationContract_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_OrganizationContract_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_OrganizationContract_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1504018014",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_OrganizationContract_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_OrganizationContract_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_OrganizationContract_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_OrganizationContract_invokeDynamicFunction */



