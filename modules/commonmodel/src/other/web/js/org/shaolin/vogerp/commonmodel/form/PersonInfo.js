/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_PersonInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var firstNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "firstNameUILabel"]
    });

    var firstNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "firstNameUI"]
    });

    var lastNameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "lastNameUILabel"]
    });

    var lastNameUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "lastNameUI"]
    });

    var genderUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "genderUILabel"]
    });

    var genderUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "genderUI"]
    });

    var marriedUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "marriedUILabel"]
    });

    var marriedUI = new UIMaster.ui.checkbox
    ({
        ui: elementList[prefix + "marriedUI"]
    });

    var identityCardIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "identityCardIdUILabel"]
    });

    var identityCardIdUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "identityCardIdUI"]
    });

    var discriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "discriptionUILabel"]
    });

    var discriptionUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "discriptionUI"]
    });

    var birthdayUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "birthdayUILabel"]
    });

    var birthdayUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "birthdayUI"]
    });

    var birthdayStartUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "birthdayStartUILabel"]
    });

    var birthdayStartUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "birthdayStartUI"]
    });

    var birthdayEndUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "birthdayEndUILabel"]
    });

    var birthdayEndUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "birthdayEndUI"]
    });

    var languageUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "languageUILabel"]
    });

    var languageUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "languageUI"]
    });

    var educationUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "educationUILabel"]
    });

    var educationUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "educationUI"]
    });

    var majorUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "majorUILabel"]
    });

    var majorUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "majorUI"]
    });

    var addressesUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressesUILabel"]
    });

    var addressesUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "addressesUI"]
    });

    var contactsUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactsUILabel"]
    });

    var contactsUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "contactsUI"]
    });

    var commentUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "commentUILabel"]
    });

    var commentUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "commentUI"]
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
        ,subComponents: [prefix + "firstNameUILabel",prefix + "firstNameUI",prefix + "lastNameUILabel",prefix + "lastNameUI",prefix + "genderUILabel",prefix + "genderUI",prefix + "marriedUILabel",prefix + "marriedUI",prefix + "identityCardIdUILabel",prefix + "identityCardIdUI",prefix + "discriptionUILabel",prefix + "discriptionUI",prefix + "birthdayUILabel",prefix + "birthdayUI",prefix + "birthdayStartUILabel",prefix + "birthdayStartUI",prefix + "birthdayEndUILabel",prefix + "birthdayEndUI",prefix + "languageUILabel",prefix + "languageUI",prefix + "educationUILabel",prefix + "educationUI",prefix + "majorUILabel",prefix + "majorUI",prefix + "addressesUILabel",prefix + "addressesUI",prefix + "contactsUILabel",prefix + "contactsUI",prefix + "commentUILabel",prefix + "commentUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [firstNameUILabel,firstNameUI,lastNameUILabel,lastNameUI,genderUILabel,genderUI,marriedUILabel,marriedUI,identityCardIdUILabel,identityCardIdUI,discriptionUILabel,discriptionUI,birthdayUILabel,birthdayUI,birthdayStartUILabel,birthdayStartUI,birthdayEndUILabel,birthdayEndUI,languageUILabel,languageUI,educationUILabel,educationUI,majorUILabel,majorUI,addressesUILabel,addressesUI,contactsUILabel,contactsUI,commentUILabel,commentUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.firstNameUILabel=firstNameUILabel;

    Form.firstNameUI=firstNameUI;

    Form.lastNameUILabel=lastNameUILabel;

    Form.lastNameUI=lastNameUI;

    Form.genderUILabel=genderUILabel;

    Form.genderUI=genderUI;

    Form.marriedUILabel=marriedUILabel;

    Form.marriedUI=marriedUI;

    Form.identityCardIdUILabel=identityCardIdUILabel;

    Form.identityCardIdUI=identityCardIdUI;

    Form.discriptionUILabel=discriptionUILabel;

    Form.discriptionUI=discriptionUI;

    Form.birthdayUILabel=birthdayUILabel;

    Form.birthdayUI=birthdayUI;

    Form.birthdayStartUILabel=birthdayStartUILabel;

    Form.birthdayStartUI=birthdayStartUI;

    Form.birthdayEndUILabel=birthdayEndUILabel;

    Form.birthdayEndUI=birthdayEndUI;

    Form.languageUILabel=languageUILabel;

    Form.languageUI=languageUI;

    Form.educationUILabel=educationUILabel;

    Form.educationUI=educationUI;

    Form.majorUILabel=majorUILabel;

    Form.majorUI=majorUI;

    Form.addressesUILabel=addressesUILabel;

    Form.addressesUI=addressesUI;

    Form.contactsUILabel=contactsUILabel;

    Form.contactsUI=contactsUI;

    Form.commentUILabel=commentUILabel;

    Form.commentUI=commentUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.actionPanel=actionPanel;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_PersonInfo */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_PersonInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_PersonInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_PersonInfo_Cancel;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.PersonInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_PersonInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_PersonInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonInfo_Save */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail576930073",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_PersonInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_PersonInfo_Cancel */

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-1166183085",UIMaster.getValue(eventsource),this.__entityName);

        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_PersonInfo_Cancel */



