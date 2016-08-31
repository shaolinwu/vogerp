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

    var legalPersonUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "legalPersonUILabel"]
    });

    var legalPersonUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "legalPersonUI"]
    });

    var tradeLicenseNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "tradeLicenseNumberUILabel"]
    });

    var tradeLicenseNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "tradeLicenseNumberUI"]
    });

    var busiLicenseNumberUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "busiLicenseNumberUILabel"]
    });

    var busiLicenseNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "busiLicenseNumberUI"]
    });

    var busiLicenseDateUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "busiLicenseDateUILabel"]
    });

    var busiLicenseDateUI = new UIMaster.ui.calendar
    ({
        ui: elementList[prefix + "busiLicenseDateUI"]
    });

    var enterpriseCodeUILabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "enterpriseCodeUILabel"]
    });

    var enterpriseCodeUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "enterpriseCodeUI"]
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
        ,subComponents: [prefix + "idUI",prefix + "verifiedUI",prefix + "orgIdUILabel",prefix + "orgIdUI",prefix + "legalPersonUILabel",prefix + "legalPersonUI",prefix + "tradeLicenseNumberUILabel",prefix + "tradeLicenseNumberUI",prefix + "busiLicenseNumberUILabel",prefix + "busiLicenseNumberUI",prefix + "busiLicenseDateUILabel",prefix + "busiLicenseDateUI",prefix + "enterpriseCodeUILabel",prefix + "enterpriseCodeUI",prefix + "bankAccountUILabel",prefix + "bankAccountUI",prefix + "bankTypeUILabel",prefix + "bankTypeUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [idUI,verifiedUI,orgIdUILabel,orgIdUI,legalPersonUILabel,legalPersonUI,tradeLicenseNumberUILabel,tradeLicenseNumberUI,busiLicenseNumberUILabel,busiLicenseNumberUI,busiLicenseDateUILabel,busiLicenseDateUI,enterpriseCodeUILabel,enterpriseCodeUI,bankAccountUILabel,bankAccountUI,bankTypeUILabel,bankTypeUI,okbtn,cancelbtn,fieldPanel,actionPanel]
    });

    Form.idUI=idUI;

    Form.verifiedUI=verifiedUI;

    Form.orgIdUILabel=orgIdUILabel;

    Form.orgIdUI=orgIdUI;

    Form.legalPersonUILabel=legalPersonUILabel;

    Form.legalPersonUI=legalPersonUI;

    Form.tradeLicenseNumberUILabel=tradeLicenseNumberUILabel;

    Form.tradeLicenseNumberUI=tradeLicenseNumberUI;

    Form.busiLicenseNumberUILabel=busiLicenseNumberUILabel;

    Form.busiLicenseNumberUI=busiLicenseNumberUI;

    Form.busiLicenseDateUILabel=busiLicenseDateUILabel;

    Form.busiLicenseDateUI=busiLicenseDateUI;

    Form.enterpriseCodeUILabel=enterpriseCodeUILabel;

    Form.enterpriseCodeUI=enterpriseCodeUI;

    Form.bankAccountUILabel=bankAccountUILabel;

    Form.bankAccountUI=bankAccountUI;

    Form.bankTypeUILabel=bankTypeUILabel;

    Form.bankTypeUI=bankTypeUI;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.idUI=idUI;

    Form.verifiedUI=verifiedUI;

    Form.orgIdUILabel=orgIdUILabel;

    Form.orgIdUI=orgIdUI;

    Form.legalPersonUILabel=legalPersonUILabel;

    Form.legalPersonUI=legalPersonUI;

    Form.tradeLicenseNumberUILabel=tradeLicenseNumberUILabel;

    Form.tradeLicenseNumberUI=tradeLicenseNumberUI;

    Form.busiLicenseNumberUILabel=busiLicenseNumberUILabel;

    Form.busiLicenseNumberUI=busiLicenseNumberUI;

    Form.busiLicenseDateUILabel=busiLicenseDateUILabel;

    Form.busiLicenseDateUI=busiLicenseDateUI;

    Form.enterpriseCodeUILabel=enterpriseCodeUILabel;

    Form.enterpriseCodeUI=enterpriseCodeUI;

    Form.bankAccountUILabel=bankAccountUILabel;

    Form.bankAccountUI=bankAccountUI;

    Form.bankTypeUILabel=bankTypeUILabel;

    Form.bankTypeUI=bankTypeUI;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_LegalOrganizationInfo */

        
       if (this.verifiedUI.value== "2") {
           $("<div style=\"background-color:greenyellow;\">\u8EAB\u4EFD\u9A8C\u8BC1\u901A\u8FC7\u3002</div>").prependTo($(this.fieldPanel));
       } else if (this.verifiedUI.value == "3") {
           $("<div style=\"background-color:red;\">\u8EAB\u4EFD\u9A8C\u8BC1\u672A\u901A\u8FC7\uFF01\u8BF7\u4FEE\u6539\u4FE1\u606F\u540E\u91CD\u65B0\u7533\u8BF7\u3002</div>").prependTo($(this.fieldPanel));
       } else if (this.verifiedUI.value == "1") {
           $("<div style=\"background-color:yellow;\">\u8EAB\u4EFD\u9A8C\u8BC1\u5BA1\u6838\u4E2D\u3002\u3002\u3002</div>").prependTo($(this.fieldPanel));
       } else {
           $("<div style=\"background-color:darkgrey;\">\u8EAB\u4EFD\u672A\u9A8C\u8BC1\uFF01</div>").prependTo($(this.fieldPanel));
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



