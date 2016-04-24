/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ImageUploader(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var imagePathUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "imagePathUI"]
    });

    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
        ,width: "100%"
        ,height: "220px"
        ,mobheight: "220px"
    });

    var uploadFile = new UIMaster.ui.file
    ({
        ui: elementList[prefix + "uploadFile"]
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
        ,items: [imagePathUI,photoUI,uploadFile,fieldPanel,photoPanel]
    });

    Form.imagePathUI=imagePathUI;

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
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ImageUploader */

        
       var othis = this;
       this.uploadFile.callback = function() {
           othis.refresh(othis.uploadFile);
       }
       this.uploadFile.cleanAll = function() {
           othis.clean(othis.uploadFile);
       }
    
    
            /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ImageUploader */
    };

    Form.refresh = org_shaolin_vogerp_commonmodel_form_ImageUploader_refresh;

    Form.clean = org_shaolin_vogerp_commonmodel_form_ImageUploader_clean;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ImageUploader_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ImageUploader";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ImageUploader */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ImageUploader */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageUploader_refresh(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageUploader_refresh */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refresh-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageUploader_refresh */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageUploader_clean(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageUploader_clean */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"clean-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageUploader_clean */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageUploader_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageUploader_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageUploader_invokeDynamicFunction */


