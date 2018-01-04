/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin(json)
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

    var orgTypeUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "orgTypeUI"]
    });

    var adminCommentIU = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "adminCommentIU"]
    });

    var orgIdUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgIdUILabel"]
    });

    var orgIdUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "orgIdUI"]
        ,needAjaxSupport: true
    });

    var nameUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUILabel"]
    });

    var nameUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "nameUI"]
    });

    var typeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "typeUILabel"]
    });

    var typeUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "typeUI"]
    });

    var descriptionUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUILabel"]
    });

    var descriptionUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "descriptionUI"]
    });

    var legalPersonUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "legalPersonUILabel"]
    });

    var legalPersonUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "legalPersonUI"]
    });

    var busiLicenseNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "busiLicenseNumberUILabel"]
    });

    var busiLicenseNumberUI = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "busiLicenseNumberUI"]
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

    var locationphotoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "locationphotoLabel"]
    });

    var applyForVeriBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "applyForVeriBtn"]
    });

    var verifyInfoFailedBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "verifyInfoFailedBtn"]
    });

    var closeBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "closeBtn"]
    });

    var personalPhoto = new org_shaolin_vogerp_commonmodel_form_SingleImageUploader({"prefix":prefix + "personalPhoto."});

    var personalIdentifierPhoto = new org_shaolin_vogerp_commonmodel_form_SingleImageUploader({"prefix":prefix + "personalIdentifierPhoto."});

    var busiLicensePhoto = new org_shaolin_vogerp_commonmodel_form_SingleImageUploader({"prefix":prefix + "busiLicensePhoto."});

    var locationPhoto = new org_shaolin_vogerp_commonmodel_form_MultiImageUploader({"prefix":prefix + "locationPhoto."});

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "applyForVeriBtn",prefix + "verifyInfoFailedBtn",prefix + "closeBtn"]
    });

    var fieldPanel2 = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel2"]
        ,items: []
        ,subComponents: [prefix + "idUI",prefix + "verifiedUI",prefix + "orgTypeUI",prefix + "adminCommentIU",prefix + "orgIdUILabel",prefix + "orgIdUI",prefix + "nameUILabel",prefix + "nameUI",prefix + "typeUILabel",prefix + "typeUI",prefix + "descriptionUILabel",prefix + "descriptionUI",prefix + "legalPersonUILabel",prefix + "legalPersonUI",prefix + "busiLicenseNumberUILabel",prefix + "busiLicenseNumberUI",prefix + "personalPhotoLabel",prefix + "personalPhoto",prefix + "personalIdentifierPhotoLabel",prefix + "personalIdentifierPhoto",prefix + "busiLicensePhotoLabel",prefix + "busiLicensePhoto",prefix + "locationphotoLabel",prefix + "locationPhoto"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,verifiedUI,orgTypeUI,adminCommentIU,orgIdUILabel,orgIdUI,nameUILabel,nameUI,typeUILabel,typeUI,descriptionUILabel,descriptionUI,legalPersonUILabel,legalPersonUI,busiLicenseNumberUILabel,busiLicenseNumberUI,personalPhotoLabel,personalIdentifierPhotoLabel,busiLicensePhotoLabel,locationphotoLabel,applyForVeriBtn,verifyInfoFailedBtn,closeBtn,personalPhoto,personalIdentifierPhoto,busiLicensePhoto,locationPhoto,fieldPanel2,actionPanel]
    });

    Form.idUI=idUI;

    Form.verifiedUI=verifiedUI;

    Form.orgTypeUI=orgTypeUI;

    Form.adminCommentIU=adminCommentIU;

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

    Form.personalPhotoLabel=personalPhotoLabel;

    Form.personalIdentifierPhotoLabel=personalIdentifierPhotoLabel;

    Form.busiLicensePhotoLabel=busiLicensePhotoLabel;

    Form.locationphotoLabel=locationphotoLabel;

    Form.applyForVeriBtn=applyForVeriBtn;

    Form.verifyInfoFailedBtn=verifyInfoFailedBtn;

    Form.closeBtn=closeBtn;

    Form.personalPhoto=personalPhoto;

    Form.personalIdentifierPhoto=personalIdentifierPhoto;

    Form.busiLicensePhoto=busiLicensePhoto;

    Form.locationPhoto=locationPhoto;

    Form.fieldPanel2=fieldPanel2;

    Form.idUI=idUI;

    Form.verifiedUI=verifiedUI;

    Form.orgTypeUI=orgTypeUI;

    Form.adminCommentIU=adminCommentIU;

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

    Form.personalPhotoLabel=personalPhotoLabel;

    Form.personalPhoto=personalPhoto;

    Form.personalIdentifierPhotoLabel=personalIdentifierPhotoLabel;

    Form.personalIdentifierPhoto=personalIdentifierPhoto;

    Form.busiLicensePhotoLabel=busiLicensePhotoLabel;

    Form.busiLicensePhoto=busiLicensePhoto;

    Form.locationphotoLabel=locationphotoLabel;

    Form.locationPhoto=locationPhoto;

    Form.actionPanel=actionPanel;

    Form.applyForVeriBtn=applyForVeriBtn;

    Form.verifyInfoFailedBtn=verifyInfoFailedBtn;

    Form.closeBtn=closeBtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin */
    };

    Form.verifyCustomerInfoFailed = org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_verifyCustomerInfoFailed;

    Form.verifiedLegalInfo = org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_verifiedLegalInfo;

    Form.Close = org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_Close;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.LegalOrganizationInfoByAdmin";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_verifyCustomerInfoFailed(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_verifyCustomerInfoFailed */
        var o = this;
        var UIEntity = this;

        {   
         var o = this;
          new UIMaster.ui.dialog({
              dialogType: UIMaster.ui.dialog.INPUT_DIALOG,
              message:'Reason',
              messageType:UIMaster.ui.dialog.Information,
              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
              title:'',
              height:150,
              width:300,
              handler: function(v) {
                 if (this.value == null || this.value == "") return;
                 o.adminCommentIU.setValue(this.value);
                 UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifyCustomerInfoFailed-2018-0101-0101",UIMaster.getValue(eventsource),o.__entityName);
              }
          }).open();
          if (true)
             return; 
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifyCustomerInfoFailed-2018-0101-0101",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_verifyCustomerInfoFailed */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_verifiedLegalInfo(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_verifiedLegalInfo */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"verifiedLegalInfo-2018-0101-0101",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_verifiedLegalInfo */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_Close(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_Close */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Close-847970502ddd",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_Close */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfoByAdmin_invokeDynamicFunction */



