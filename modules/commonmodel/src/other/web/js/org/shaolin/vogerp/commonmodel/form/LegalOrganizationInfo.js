/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var idUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "idUI"]
    });

    var verifiedUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "verifiedUI"]
    });

    var orgIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgIdUILabel"]
    });

    var orgIdUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgIdUI"]
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

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var legalPersonUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "legalPersonUILabel"]
    });

    var legalPersonUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "legalPersonUI"]
    });

    var busiLicenseNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "busiLicenseNumberUILabel"]
    });

    var busiLicenseNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "busiLicenseNumberUI"]
    });

    var bankAccountUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bankAccountUILabel"]
    });

    var bankAccountUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "bankAccountUI"]
    });

    var bankTypeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bankTypeUILabel"]
    });

    var bankTypeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "bankTypeUI"]
    });

    var personalPhotoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "personalPhotoLabel"]
    });

    var personalIdentifierPhotoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "personalIdentifierPhotoLabel"]
    });

    var busiLicensePhotoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "busiLicensePhotoLabel"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var typeUI = new org_shaolin_vogerp_commonmodel_form_CEHierarchyWithCombox({"prefix":prefix + "typeUI."});

    var personalPhoto = new org_shaolin_vogerp_commonmodel_form_SingleImageUploader({"prefix":prefix + "personalPhoto."});

    var personalIdentifierPhoto = new org_shaolin_vogerp_commonmodel_form_SingleImageUploader({"prefix":prefix + "personalIdentifierPhoto."});

    var busiLicensePhoto = new org_shaolin_vogerp_commonmodel_form_SingleImageUploader({"prefix":prefix + "busiLicensePhoto."});

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
        ,subComponents: [prefix + "idUI",prefix + "verifiedUI",prefix + "orgIdUILabel",prefix + "orgIdUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "legalPersonUILabel",prefix + "legalPersonUI",prefix + "busiLicenseNumberUILabel",prefix + "busiLicenseNumberUI",prefix + "bankAccountUILabel",prefix + "bankAccountUI",prefix + "bankTypeUILabel",prefix + "bankTypeUI",prefix + "personalPhotoLabel",prefix + "personalPhoto",prefix + "personalIdentifierPhotoLabel",prefix + "personalIdentifierPhoto",prefix + "busiLicensePhotoLabel",prefix + "busiLicensePhoto"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,verifiedUI,orgIdUILabel,orgIdUI,nameUILabel,nameUI,typeUILabel,descriptionUILabel,descriptionUI,legalPersonUILabel,legalPersonUI,busiLicenseNumberUILabel,busiLicenseNumberUI,bankAccountUILabel,bankAccountUI,bankTypeUILabel,bankTypeUI,personalPhotoLabel,personalIdentifierPhotoLabel,busiLicensePhotoLabel,okbtn,typeUI,personalPhoto,personalIdentifierPhoto,busiLicensePhoto,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.verifiedUI=verifiedUI;

    Form.orgIdUILabel=orgIdUILabel;

    Form.orgIdUI=orgIdUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.typeUILabel=typeUILabel;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.legalPersonUILabel=legalPersonUILabel;

    Form.legalPersonUI=legalPersonUI;

    Form.busiLicenseNumberUILabel=busiLicenseNumberUILabel;

    Form.busiLicenseNumberUI=busiLicenseNumberUI;

    Form.bankAccountUILabel=bankAccountUILabel;

    Form.bankAccountUI=bankAccountUI;

    Form.bankTypeUILabel=bankTypeUILabel;

    Form.bankTypeUI=bankTypeUI;

    Form.personalPhotoLabel=personalPhotoLabel;

    Form.personalIdentifierPhotoLabel=personalIdentifierPhotoLabel;

    Form.busiLicensePhotoLabel=busiLicensePhotoLabel;

    Form.okbtn=okbtn;

    Form.typeUI=typeUI;

    Form.personalPhoto=personalPhoto;

    Form.personalIdentifierPhoto=personalIdentifierPhoto;

    Form.busiLicensePhoto=busiLicensePhoto;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.verifiedUI=verifiedUI;

    Form.orgIdUILabel=orgIdUILabel;

    Form.orgIdUI=orgIdUI;

    Form.nameUILabel=nameUILabel;

    Form.nameUI=nameUI;

    Form.typeUILabel=typeUILabel;

    Form.typeUI=typeUI;

    Form.descriptionUILabel=descriptionUILabel;

    Form.descriptionUI=descriptionUI;

    Form.legalPersonUILabel=legalPersonUILabel;

    Form.legalPersonUI=legalPersonUI;

    Form.busiLicenseNumberUILabel=busiLicenseNumberUILabel;

    Form.busiLicenseNumberUI=busiLicenseNumberUI;

    Form.bankAccountUILabel=bankAccountUILabel;

    Form.bankAccountUI=bankAccountUI;

    Form.bankTypeUILabel=bankTypeUILabel;

    Form.bankTypeUI=bankTypeUI;

    Form.personalPhotoLabel=personalPhotoLabel;

    Form.personalPhoto=personalPhoto;

    Form.personalIdentifierPhotoLabel=personalIdentifierPhotoLabel;

    Form.personalIdentifierPhoto=personalIdentifierPhoto;

    Form.busiLicensePhotoLabel=busiLicensePhotoLabel;

    Form.busiLicensePhoto=busiLicensePhoto;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo */

        
       if (this.verifiedUI.value== "2") {
           $("<div style=\"background-color:greenyellow;font-size: x-large;\">\u8EAB\u4EFD\u9A8C\u8BC1\u901A\u8FC7\u3002</div>").prependTo($(this.fieldPanel));
       } else if (this.verifiedUI.value == "3") {
           $("<div style=\"background-color:red;font-size: x-large;\">\u8EAB\u4EFD\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF01\u8BF7\u4FEE\u6539\u4FE1\u606F\u540E\u91CD\u65B0\u7533\u8BF7\u3002</div>").prependTo($(this.fieldPanel));
       } else if (this.verifiedUI.value == "1") {
           $("<div style=\"background-color:yellow;font-size: x-large;\">\u8EAB\u4EFD\u9A8C\u8BC1\u5BA1\u6838\u4E2D\u3002\u3002\u3002</div>").prependTo($(this.fieldPanel));
       } else {
           $("<div style=\"background-color:darkgrey;font-size: x-large;\">\u8EAB\u4EFD\u672A\u9A8C\u8BC1\uFF01</div>").prependTo($(this.fieldPanel));
       }
    
    
            /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo */
    };

    Form.Save = org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_Save;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.LegalOrganizationInfo";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveDetail-847970502",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail1712758469",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo_invokeDynamicFunction */



