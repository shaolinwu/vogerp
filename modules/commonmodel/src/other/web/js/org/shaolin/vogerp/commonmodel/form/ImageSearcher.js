/* null */
/* auto generated constructor */
function org_shaolin_vogerp_commonmodel_form_ImageSearcher(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var reloadPathText = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "reloadPathText"]
    });

    var searchBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "searchBtn"]
    });

    var photoUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "photoUI"]
        ,thumbnails: true
        ,hideThumbnailsOnInit: false
        ,width: "100%"
        ,height: "400px"
        ,mobheight: "220px"
    });

    var emtpyLabel = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "emtpyLabel"]
    });

    var refreshbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "refreshbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "refreshbtn",prefix + "cancelbtn"]
    });

    var aframePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "aframePanel"]
        ,items: []
        ,subComponents: [prefix + "emtpyLabel"]
    });

    var photoPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "photoPanel"]
        ,items: []
        ,subComponents: [prefix + "photoUI"]
    });

    var searchPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "searchPanel"]
        ,items: []
        ,subComponents: [prefix + "reloadPathText",prefix + "searchBtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "searchPanel",prefix + "photoPanel",prefix + "aframePanel"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [reloadPathText,searchBtn,photoUI,emtpyLabel,refreshbtn,cancelbtn,fieldPanel,searchPanel,photoPanel,aframePanel,actionPanel]
    });

    Form.reloadPathText=reloadPathText;

    Form.searchBtn=searchBtn;

    Form.photoUI=photoUI;

    Form.emtpyLabel=emtpyLabel;

    Form.refreshbtn=refreshbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.searchPanel=searchPanel;

    Form.reloadPathText=reloadPathText;

    Form.searchBtn=searchBtn;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.aframePanel=aframePanel;

    Form.emtpyLabel=emtpyLabel;

    Form.searchPanel=searchPanel;

    Form.reloadPathText=reloadPathText;

    Form.searchBtn=searchBtn;

    Form.photoPanel=photoPanel;

    Form.photoUI=photoUI;

    Form.aframePanel=aframePanel;

    Form.emtpyLabel=emtpyLabel;

    Form.actionPanel=actionPanel;

    Form.refreshbtn=refreshbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_commonmodel_form_ImageSearcher */

        
       var othis = this;
    
    
            /* Construct_LAST:org_shaolin_vogerp_commonmodel_form_ImageSearcher */
    };

    Form.searchFunc = org_shaolin_vogerp_commonmodel_form_ImageSearcher_searchFunc;

    Form.analysis = org_shaolin_vogerp_commonmodel_form_ImageSearcher_analysis;

    Form.Cancel = org_shaolin_vogerp_commonmodel_form_ImageSearcher_Cancel;

    Form.refresh = org_shaolin_vogerp_commonmodel_form_ImageSearcher_refresh;

    Form.invokeDynamicFunction = org_shaolin_vogerp_commonmodel_form_ImageSearcher_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.commonmodel.form.ImageSearcher";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_commonmodel_form_ImageSearcher */
/* Other_Func_LAST:org_shaolin_vogerp_commonmodel_form_ImageSearcher */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageSearcher_searchFunc(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageSearcher_searchFunc */
        var o = this;
        var UIEntity = this;

         {
            if (this.loading == undefined) {
               this.loading = $("<div>\u52A0\u8F7D\u4E2D\u3002\u3002\u3002</div>");
               $(this.aframePanel).append(this.loading);
            }
            this.loading.css("display", "block");
            if (this.fc != undefined) {
                $(this.fc).remove();
            }
            var frameId = "onlinesearchFrame";
	        var src = "http://image.baidu.com/search/index?tn=baiduimage&ipn=r&ct=201326592&cl=2&lm=-1&st=-1&fm=index&fr=&sf=1&fmq=&pv=&ic=0&nc=1&z=&se=1&showtab=0&fb=0&width=&height=&face=0&istype=2&ie=utf-8&word=" + encodeURI(this.reloadPathText.getValue()) + "&f=3&oq=&rsp=2";
            var fc = $("<iframe id=\""+frameId+"\" name=\""+frameId+"\" src=\""+src+"\" needsrc=\"true\" frameborder=\"0\" style=\"display:none;min-width:100%;min-height:100%;-webkit-transform: translateZ(0);\"></iframe>");
            this.fc = fc;
            $(this.aframePanel).append(fc);
            
            var othis = this;
            var checkF = function(){
               othis.loading.css("display", "none");
            };
            setTimeout(checkF, 5000);
            setTimeout(function() {
	            othis.emtpyLabel.setValue(src);
	            UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),
                   "analysis-20160522-100447",UIMaster.getValue(eventsource),othis.__entityName);
            }, 3000);
         }
            }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageSearcher_searchFunc */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageSearcher_analysis(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageSearcher_analysis */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"analysis-20160522-100447",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageSearcher_analysis */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageSearcher_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageSearcher_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageSearcher_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageSearcher_refresh(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageSearcher_refresh */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"refresh-20160522-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageSearcher_refresh */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_commonmodel_form_ImageSearcher_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_commonmodel_form_ImageSearcher_invokeDynamicFunction */
        var o = this;
        var UIEntity = this;

        new UIMaster.ui.dialog({dialogType: UIMaster.ui.dialog.CONFIRM_DIALOG,message:'Continue?',messageType:UIMaster.ui.dialog.Warning,optionType:UIMaster.ui.dialog.YES_NO_OPTION,title:'',height:150,width:300,handler: function() {

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),event,UIMaster.getValue(eventsource),o.__entityName);

        
        }
        }).open();
    }/* Gen_Last:org_shaolin_vogerp_commonmodel_form_ImageSearcher_invokeDynamicFunction */



