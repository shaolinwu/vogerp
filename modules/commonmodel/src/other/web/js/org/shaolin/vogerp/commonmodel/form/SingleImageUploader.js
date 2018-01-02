/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_SingleImageUploader(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var imagePathUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "imagePathUI"]
    });

    var sampleImagePathUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "sampleImagePathUI"]
    });

    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
        ,isGallery: false
        ,needAjaxSupport: true
        ,width: "100%"
        ,height: "300px"
        ,mobheight: "220px"
    });

    var uploadFile = new UIMaster.ui.file
    ({
        ui: elementList[prefix + "uploadFile"]
        ,allowedNumbers: "1"
        ,disableSearch: true
    });

    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "photoPanel",prefix + "uploadFile"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [imagePathUI,sampleImagePathUI,photoUI,uploadFile,fieldPanel,photoPanel]
    });

    Form.imagePathUI=imagePathUI;

    Form.sampleImagePathUI=sampleImagePathUI;

    Form.photoUI=photoUI;

    Form.uploadFile=uploadFile;

    Form.fieldPanel=fieldPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.uploadFile=uploadFile;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_SingleImageUploader */

        
       var othis = this;
       this.uploadFile.callback = function() {
           othis.refresh(othis.uploadFile);
       }
    
    
            /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_SingleImageUploader */
    };

    Form.refresh = org_shaolin_vogerp_commonmodel_form_SingleImageUploader_refresh;

    Form.clean = org_shaolin_vogerp_commonmodel_form_SingleImageUploader_clean;

    Form.search = org_shaolin_vogerp_commonmodel_form_SingleImageUploader_search;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_SingleImageUploader_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.SingleImageUploader";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_SingleImageUploader */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_SingleImageUploader */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_SingleImageUploader_refresh(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_SingleImageUploader_refresh */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refresh-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_SingleImageUploader_refresh */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_SingleImageUploader_clean(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_SingleImageUploader_clean */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"clean-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_SingleImageUploader_clean */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_SingleImageUploader_search(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_SingleImageUploader_search */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_SingleImageUploader_search */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_SingleImageUploader_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_SingleImageUploader_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_SingleImageUploader_invokeDynamicFunction */



