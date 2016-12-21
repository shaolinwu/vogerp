/* null */
/* auto generated constructor */
function org_shaolin_vogerp_productmodel_form_ImportProducts(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var searchWordUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchWordUI"]
    });

    var searchBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "searchBtn"]
    });

    var okbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "okbtn"]
    });

    var closebtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "closebtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "okbtn",prefix + "closebtn"]
    });

    var resultPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "resultPanel"]
        ,items: []
        ,subComponents: []
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "searchWordUI",prefix + "searchBtn"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [searchWordUI,searchBtn,okbtn,closebtn,fieldPanel,resultPanel,actionPanel]
    });

    Form.searchWordUI=searchWordUI;

    Form.searchBtn=searchBtn;

    Form.okbtn=okbtn;

    Form.closebtn=closebtn;

    Form.fieldPanel=fieldPanel;

    Form.searchWordUI=searchWordUI;

    Form.searchBtn=searchBtn;

    Form.resultPanel=resultPanel;

    Form.actionPanel=actionPanel;

    Form.okbtn=okbtn;

    Form.closebtn=closebtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_productmodel_form_ImportProducts */
        /* Construct_LAST:org_shaolin_vogerp_productmodel_form_ImportProducts */
    };

    Form.analysis = org_shaolin_vogerp_productmodel_form_ImportProducts_analysis;

    Form.Save = org_shaolin_vogerp_productmodel_form_ImportProducts_Save;

    Form.Cancel = org_shaolin_vogerp_productmodel_form_ImportProducts_Cancel;

    Form.invokeDynamicFunction = org_shaolin_vogerp_productmodel_form_ImportProducts_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.productmodel.form.ImportProducts";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_productmodel_form_ImportProducts */
/* Other_Func_LAST:org_shaolin_vogerp_productmodel_form_ImportProducts */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ImportProducts_analysis(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ImportProducts_analysis */
        var o = this;
        var UIEntity = this;

        {   
            var constraint_result = this.Form.validate();
            if (constraint_result != true && constraint_result != null) {
                return false;
            }
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"analysis-20160822-100447",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ImportProducts_analysis */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ImportProducts_Save(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ImportProducts_Save */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"Save-20160904-172647",UIMaster.getValue(eventsource),o.__entityName);

        {   
            //?????????????????????
            new UIMaster.ui.dialog({
                dialogType: UIMaster.ui.dialog.MESSAGE_DIALOG,
                message:'\u4FDD\u5B58\u8FC7\u7A0B\u4E2D\u53EF\u80FD\u4F1A\u9700\u8981\u4E9B\u65F6\u95F4\uFF0C\u8BF7\u60A8\u7A0D\u7B49\u7247\u523B\uFF01',
                messageType:UIMaster.ui.dialog.Information,
                optionType:UIMaster.ui.dialog.OK_OPTION,
                title:'',
                height:150,
                width:300,
                handler: function() {
                }
            }).open();
        }
            }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ImportProducts_Save */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ImportProducts_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ImportProducts_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20151227-172647",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ImportProducts_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_productmodel_form_ImportProducts_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_productmodel_form_ImportProducts_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_productmodel_form_ImportProducts_invokeDynamicFunction */



