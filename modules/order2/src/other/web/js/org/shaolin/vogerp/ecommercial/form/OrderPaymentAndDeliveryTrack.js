/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var trackFormUI = new UIMaster.ui.field
    ({
        ui: elementList[prefix + "trackFormUI"]
    });

    var descProgressUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descProgressUI"]
    });

    var descProgressbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "descProgressbtn"]
    });

    var expressVendorUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "expressVendorUI"]
    });

    var expressNumberUI = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "expressNumberUI"]
    });

    var expressbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "expressbtn"]
    });

    var descCommentUI = new UIMaster.ui.textarea
    ({
        ui: elementList[prefix + "descCommentUI"]
    });

    var qualityUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "qualityUI"]
    });

    var serviceUI = new UIMaster.ui.combobox
    ({
        ui: elementList[prefix + "serviceUI"]
    });

    var descCommentbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "descCommentbtn"]
    });

    var refreshbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "refreshbtn"]
    });

    var updateAddressbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "updateAddressbtn"]
    });

    var cancelbtn = new UIMaster.ui.button
    ({
        ui: elementList[prefix + "cancelbtn"]
    });

    var actionPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "actionPanel"]
        ,items: []
        ,subComponents: [prefix + "refreshbtn",prefix + "updateAddressbtn",prefix + "cancelbtn"]
    });

    var addCommentInfo = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "addCommentInfo"]
        ,style: "display:none"
        ,items: []
        ,subComponents: [prefix + "descCommentUI",prefix + "qualityUI",prefix + "serviceUI",prefix + "descCommentbtn"]
    });

    var addDeliveryInfo = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "addDeliveryInfo"]
        ,style: "display:none"
        ,items: []
        ,subComponents: [prefix + "expressVendorUI",prefix + "expressNumberUI",prefix + "expressbtn"]
    });

    var addProductInfo = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "addProductInfo"]
        ,style: "display:none"
        ,items: []
        ,subComponents: [prefix + "descProgressUI",prefix + "descProgressbtn"]
    });

    var fieldPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "fieldPanel"]
        ,items: []
        ,subComponents: [prefix + "trackFormUI",prefix + "addProductInfo",prefix + "addDeliveryInfo",prefix + "addCommentInfo"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [trackFormUI,descProgressUI,descProgressbtn,expressVendorUI,expressNumberUI,expressbtn,descCommentUI,qualityUI,serviceUI,descCommentbtn,refreshbtn,updateAddressbtn,cancelbtn,fieldPanel,addProductInfo,addDeliveryInfo,addCommentInfo,actionPanel]
    });

    Form.trackFormUI=trackFormUI;

    Form.descProgressUI=descProgressUI;

    Form.descProgressbtn=descProgressbtn;

    Form.expressVendorUI=expressVendorUI;

    Form.expressNumberUI=expressNumberUI;

    Form.expressbtn=expressbtn;

    Form.descCommentUI=descCommentUI;

    Form.qualityUI=qualityUI;

    Form.serviceUI=serviceUI;

    Form.descCommentbtn=descCommentbtn;

    Form.refreshbtn=refreshbtn;

    Form.updateAddressbtn=updateAddressbtn;

    Form.cancelbtn=cancelbtn;

    Form.fieldPanel=fieldPanel;

    Form.trackFormUI=trackFormUI;

    Form.addProductInfo=addProductInfo;

    Form.descProgressUI=descProgressUI;

    Form.descProgressbtn=descProgressbtn;

    Form.addDeliveryInfo=addDeliveryInfo;

    Form.expressVendorUI=expressVendorUI;

    Form.expressNumberUI=expressNumberUI;

    Form.expressbtn=expressbtn;

    Form.addCommentInfo=addCommentInfo;

    Form.descCommentUI=descCommentUI;

    Form.qualityUI=qualityUI;

    Form.serviceUI=serviceUI;

    Form.descCommentbtn=descCommentbtn;

    Form.addProductInfo=addProductInfo;

    Form.descProgressUI=descProgressUI;

    Form.descProgressbtn=descProgressbtn;

    Form.addDeliveryInfo=addDeliveryInfo;

    Form.expressVendorUI=expressVendorUI;

    Form.expressNumberUI=expressNumberUI;

    Form.expressbtn=expressbtn;

    Form.addCommentInfo=addCommentInfo;

    Form.descCommentUI=descCommentUI;

    Form.qualityUI=qualityUI;

    Form.serviceUI=serviceUI;

    Form.descCommentbtn=descCommentbtn;

    Form.actionPanel=actionPanel;

    Form.refreshbtn=refreshbtn;

    Form.updateAddressbtn=updateAddressbtn;

    Form.cancelbtn=cancelbtn;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack */

        
	    {
	       // workflow dynamic actions
	       Form.deliveryOrder = function() {
	          Form.invokeDynamicFunction(Form.trackFormUI, "deliveryOrder");
	          $(Form.addDeliveryInfo).dialog("close");
	       };
	       Form.receivedOrder = function() {
	          Form.invokeDynamicFunction(Form.trackFormUI, "receivedOrder");
	       };
		}
    
            /* Construct_LAST:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack */
    };

    Form.payOrder = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_payOrder;

    Form.addProductionNote = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_addProductionNote;

    Form.savePregressNote = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_savePregressNote;

    Form.updateExpress = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_updateExpress;

    Form.commentOrder = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_commentOrder;

    Form.saveComment = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_saveComment;

    Form.Cancel = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_Cancel;

    Form.RefreshTest = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_RefreshTest;

    Form.updateAddress = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_updateAddress;

    Form.invokeDynamicFunction = org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_invokeDynamicFunction;

    Form.__entityName="org.shaolin.vogerp.ecommercial.form.OrderPaymentAndDeliveryTrack";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack */

    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_payOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_payOrder */
        var o = this;
        var UIEntity = this;

        {   
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"payOrder-20170218-2044",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_payOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_addProductionNote(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_addProductionNote */
        var o = this;
        var UIEntity = this;

        {   
           $(this.addProductInfo).css("display", "block");
           $(this.addProductInfo).dialog();
        }
            }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_addProductionNote */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_savePregressNote(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_savePregressNote */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"savePregressNote-20170325-215225",UIMaster.getValue(eventsource),o.__entityName);

        {   
           $(this.addProductInfo).dialog("close");
        }
            }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_savePregressNote */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_updateExpress(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_updateExpress */
        var o = this;
        var UIEntity = this;

        {   
           $(this.addDeliveryInfo).css("display", "block");
           $(this.addDeliveryInfo).dialog();
        }
            }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_updateExpress */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_commentOrder(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_commentOrder */
        var o = this;
        var UIEntity = this;

        {   
           $(this.addCommentInfo).css("display", "block");
           $(this.addCommentInfo).dialog();
        }
            }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_commentOrder */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_saveComment(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_saveComment */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"saveComment-20170325-215225",UIMaster.getValue(eventsource),o.__entityName);

        {   
           $(this.addCommentInfo).dialog("close");
        }
            }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_saveComment */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_Cancel(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_Cancel */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"cancelDetail-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_Cancel */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_RefreshTest(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_RefreshTest */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"RefreshTest-20170125-215225",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_RefreshTest */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_updateAddress(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_updateAddress */
        var o = this;
        var UIEntity = this;

        {   
        }
        
        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"updateAddress-2017-0219-1131",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_updateAddress */


    /* auto generated eventlistener function declaration */
    function org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_invokeDynamicFunction(eventsource,event) {/* Gen_First:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_invokeDynamicFunction */
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
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_form_OrderPaymentAndDeliveryTrack_invokeDynamicFunction */



