/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ImageViewer(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var callbackUIIDUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "callbackUIIDUI"]
    });

    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
        ,thumbnails: true
        ,width: "100%"
        ,height: "400px"
        ,mobheight: "250px"
    });

    var uploadFile = new UIMaster.ui.file
    ({
        ui: elementList[prefix + "uploadFile"]
    });

    var refreshbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "refreshbtn"]
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
        ,subComponents: [prefix + "refreshbtn",prefix + "okbtn",prefix + "cancelbtn"]
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
        ,items: [callbackUIIDUI,photoUI,uploadFile,refreshbtn,okbtn,cancelbtn,fieldPanel,photoPanel,actionPanel]
    });

    Form.callbackUIIDUI=callbackUIIDUI;

    Form.photoUI=photoUI;

    Form.uploadFile=uploadFile;

    Form.refreshbtn=refreshbtn;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.uploadFile=uploadFile;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.actionPanel=actionPanel;

    Form.refreshbtn=refreshbtn;

    Form.okbtn=okbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ImageViewer */
        /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ImageViewer */
    };

    Form.addAblum = org_shaolin_vogerp_commonmodel_form_ImageViewer_addAblum;

    Form.Save = org_shaolin_vogerp_commonmodel_form_ImageViewer_Save;

    Form.movePicToAlbum = org_shaolin_vogerp_commonmodel_form_ImageViewer_movePicToAlbum;

    Form.refresh = org_shaolin_vogerp_commonmodel_form_ImageViewer_refresh;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_ImageViewer_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ImageViewer_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ImageViewer";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ImageViewer */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ImageViewer */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageViewer_addAblum(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageViewer_addAblum */
        var o = this;
        var UIEntity = this;

        { 
            this.photoUI.createAlbum();
        
        }    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageViewer_addAblum */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageViewer_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageViewer_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Save-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageViewer_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageViewer_movePicToAlbum(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageViewer_movePicToAlbum */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"movePicToAlbum-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageViewer_movePicToAlbum */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageViewer_refresh(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageViewer_refresh */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refresh-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageViewer_refresh */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageViewer_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageViewer_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageViewer_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageViewer_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageViewer_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Are you sure continuing? ^_^',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageViewer_invokeDynamicFunction */



