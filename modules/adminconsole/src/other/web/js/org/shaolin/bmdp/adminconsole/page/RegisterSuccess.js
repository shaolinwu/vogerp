/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_RegisterSuccess(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var vogerplogo = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "vogerplogo"]
    });

    var infoLabel = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "infoLabel"]
    });

    var forwardMainBtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "forwardMainBtn"]
    });

    var bottomPanelInfo = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "bottomPanelInfo"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "bottomPanelInfo"]
    });

    var loginPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "loginPanel"]
        ,items: []
        ,subComponents: [prefix + "infoLabel",prefix + "forwardMainBtn"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,items: []
        ,subComponents: [prefix + "vogerplogo"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [vogerplogo,infoLabel,forwardMainBtn,bottomPanelInfo,topPanel,loginPanel,bottomPanel]
    });

    Form.vogerplogo=vogerplogo;

    Form.infoLabel=infoLabel;

    Form.forwardMainBtn=forwardMainBtn;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.topPanel=topPanel;

    Form.vogerplogo=vogerplogo;

    Form.loginPanel=loginPanel;

    Form.infoLabel=infoLabel;

    Form.forwardMainBtn=forwardMainBtn;

    Form.bottomPanel=bottomPanel;

    Form.bottomPanelInfo=bottomPanelInfo;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_RegisterSuccess */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_RegisterSuccess */
    };

    Form.Forward = org_shaolin_bmdp_adminconsole_page_RegisterSuccess_Forward;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_RegisterSuccess_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_RegisterSuccess_finalizePageJs;

    Form.Forward_OutFunctionName = org_shaolin_bmdp_adminconsole_page_RegisterSuccess_Forward_OutFunctionName;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.RegisterSuccess";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_RegisterSuccess */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_RegisterSuccess */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_RegisterSuccess_Forward(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_RegisterSuccess_Forward */
        var o = this;
        var UIEntity = this;

        o.Forward_OutFunctionName(eventsource);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_RegisterSuccess_Forward */


    function org_shaolin_bmdp_adminconsole_page_RegisterSuccess_initPageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_RegisterSuccess_initPageJs */
        var constraint_result = true;
        var UIEntity = this;
{
			// hello, my first js.
			}
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_RegisterSuccess_initPageJs */


    function org_shaolin_bmdp_adminconsole_page_RegisterSuccess_finalizePageJs(){/* Gen_First:org_shaolin_bmdp_adminconsole_page_RegisterSuccess_finalizePageJs */

    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_RegisterSuccess_finalizePageJs */


    function org_shaolin_bmdp_adminconsole_page_RegisterSuccess_Forward_OutFunctionName(eventsource) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_RegisterSuccess_Forward_OutFunctionName */
        var constraint_result = true;
        var myForm;
        if (this.formName != undefined)
        {
            myForm = document.forms[this.formName];
        }
        else
        {
            var p = this.Form.parentNode;
            while(p.tagName != "FORM")
                p = p.parentNode;
            myForm = p;//document.forms[0];
        }

        var UIEntity = this;

        constraint_result = this.Form.validate();
{
			// hello, my first js.
			}        
        myForm._outname.value = "Forward";
        myForm.target = "_self";
             
        if ( (constraint_result == true || constraint_result == null) && (!ajax_execute_onerror) ) {
          myForm.submit();
        }
        return constraint_result;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_RegisterSuccess_Forward_OutFunctionName */


