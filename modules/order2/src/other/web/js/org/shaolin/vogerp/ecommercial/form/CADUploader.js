/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_CADUploader(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var imagePathUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "imagePathUI"]
    });

    var searchWordsUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "searchWordsUI"]
    });

    var modelFileUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "modelFileUI"]
    });

    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
        ,width: "100%"
        ,height: "300px"
        ,mobheight: "220px"
    });

    var uploadFile = new UIMaster.ui.file
    ({
        ui: elementList[prefix + "uploadFile"]
    });

    var downloadBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "downloadBtn"]
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
        ,needAjaxSupport: true
        ,items: []
        ,subComponents: [prefix + "photoPanel",prefix + "uploadFile",prefix + "downloadBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: [imagePathUI,searchWordsUI,modelFileUI,photoUI,uploadFile,downloadBtn,fieldPanel,photoPanel]
    });

    Form.imagePathUI=imagePathUI;

    Form.searchWordsUI=searchWordsUI;

    Form.modelFileUI=modelFileUI;

    Form.photoUI=photoUI;

    Form.uploadFile=uploadFile;

    Form.downloadBtn=downloadBtn;

    Form.fieldPanel=fieldPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.uploadFile=uploadFile;

    Form.downloadBtn=downloadBtn;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_CADUploader */

        
       var othis = this;
       $(this.Form).css("border-bottom", "1px solid #dddddd");
       this.uploadFile.callback = function() {
           othis.refresh(othis.uploadFile);
       }
       this.uploadFile.cleanAll = function() {
           new UIMaster.ui.dialog({
              dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,
              message:'\u786E\u8BA4\u5220\u9664\u6240\u6709\u56FE\u7247\u5417\uFF1F',
              messageType:UIMaster.ui.dialog.Warning,
              optionType:UIMaster.ui.dialog.YES_NO_OPTION,
              title:'',
              height:150,
              width:300,
              handler: function() {
                 othis.clean(othis.uploadFile);
              }
          }).open();
           
       }
       this.uploadFile.onlineSearch = function() {
           othis.search(othis.uploadFile);
       }
    
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_CADUploader */
    };

    Form.refresh = org_shaolin_vogerp_ecommercial_form_CADUploader_refresh;

    Form.clean = org_shaolin_vogerp_ecommercial_form_CADUploader_clean;

    Form.search = org_shaolin_vogerp_ecommercial_form_CADUploader_search;

    Form.Download = org_shaolin_vogerp_ecommercial_form_CADUploader_Download;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_CADUploader_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.CADUploader";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_CADUploader */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_CADUploader */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_CADUploader_refresh(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_CADUploader_refresh */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refresh-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_CADUploader_refresh */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_CADUploader_clean(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_CADUploader_clean */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"clean-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_CADUploader_clean */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_CADUploader_search(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_CADUploader_search */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"search-20160520-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_CADUploader_search */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_CADUploader_Download(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_CADUploader_Download */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Download-20160520-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_CADUploader_Download */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_CADUploader_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_CADUploader_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_CADUploader_invokeDynamicFunction */



