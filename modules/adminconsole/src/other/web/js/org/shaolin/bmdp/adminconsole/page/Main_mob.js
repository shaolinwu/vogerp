/* null */
/* auto generated constructor */
function org_shaolin_bmdp_adminconsole_page_Main_mob(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var tempSentPartyIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "tempSentPartyIdUI"]
    });

    var tempSessionIdUI = new UIMaster.ui.hidden
    ({
        ui: elementList[prefix + "tempSessionIdUI"]
    });

    var searchContext = new UIMaster.ui.textfield
    ({
        ui: elementList[prefix + "searchContext"]
    });

    var userIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userIcon"]
    });

    var helpIcon = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "helpIcon"]
        ,text: ""
    });

    var advImagesUI = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "advImagesUI"]
        ,value: "/images/adv/mainpage"
        ,thumbnails: false
        ,height: 150
        ,mobheight: 150
        ,width: "100%"
        ,mode: "slider"
        ,slideshowAutostart: "true"
        ,thumbnailsFullScreen: false
        ,enableSelectSync: false
    });

    var matrixUI = new UIMaster.ui.matrix
    ({
        ui: elementList[prefix + "matrixUI"]
    });

    var collapseLabel1 = new UIMaster.ui.label
    ({
        ui: elementList[prefix + "collapseLabel1"]
    });

    var userLogout = new UIMaster.ui.image
    ({
        ui: elementList[prefix + "userLogout"]
    });

    var userFormContent = new org_shaolin_bmdp_adminconsole_form_UserAccount({"prefix":prefix + "userFormContent."});

    var notificationFormContent = new org_shaolin_bmdp_workflow_form_NotificationBoard({"prefix":prefix + "notificationFormContent."});

    var notificationForm = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "notificationForm"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "notificationFormContent"]
    });

    var userForm = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "userForm"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "collapseLabel1",prefix + "userFormContent",prefix + "userLogout"]
    });

    var bottomPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "bottomPanel"]
        ,items: []
        ,subComponents: [prefix + "userForm",prefix + "notificationForm"]
    });

    var pagePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "pagePanel"]
        ,items: []
        ,subComponents: [prefix + "matrixUI"]
    });

    var middlePanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "middlePanel"]
        ,items: []
        ,subComponents: [prefix + "pagePanel"]
    });

    var searchPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "searchPanel"]
        ,items: []
        ,subComponents: [prefix + "searchContext",prefix + "userIcon",prefix + "helpIcon"]
    });

    var topPanel = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "topPanel"]
        ,uiskin: "org.shaolin.uimaster.page.skin.TitlePanel"
        ,items: []
        ,subComponents: [prefix + "searchPanel",prefix + "advImagesUI"]
    });

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [tempSentPartyIdUI,tempSessionIdUI,searchContext,userIcon,helpIcon,advImagesUI,matrixUI,collapseLabel1,userLogout,userFormContent,notificationFormContent,topPanel,searchPanel,middlePanel,pagePanel,bottomPanel,userForm,notificationForm]
    });

    Form.tempSentPartyIdUI=tempSentPartyIdUI;

    Form.tempSessionIdUI=tempSessionIdUI;

    Form.searchContext=searchContext;

    Form.userIcon=userIcon;

    Form.helpIcon=helpIcon;

    Form.advImagesUI=advImagesUI;

    Form.matrixUI=matrixUI;

    Form.collapseLabel1=collapseLabel1;

    Form.userLogout=userLogout;

    Form.userFormContent=userFormContent;

    Form.notificationFormContent=notificationFormContent;

    Form.topPanel=topPanel;

    Form.searchPanel=searchPanel;

    Form.searchContext=searchContext;

    Form.userIcon=userIcon;

    Form.helpIcon=helpIcon;

    Form.advImagesUI=advImagesUI;

    Form.searchPanel=searchPanel;

    Form.searchContext=searchContext;

    Form.userIcon=userIcon;

    Form.helpIcon=helpIcon;

    Form.middlePanel=middlePanel;

    Form.pagePanel=pagePanel;

    Form.matrixUI=matrixUI;

    Form.pagePanel=pagePanel;

    Form.matrixUI=matrixUI;

    Form.bottomPanel=bottomPanel;

    Form.userForm=userForm;

    Form.collapseLabel1=collapseLabel1;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.notificationForm=notificationForm;

    Form.notificationFormContent=notificationFormContent;

    Form.userForm=userForm;

    Form.collapseLabel1=collapseLabel1;

    Form.userFormContent=userFormContent;

    Form.userLogout=userLogout;

    Form.notificationForm=notificationForm;

    Form.notificationFormContent=notificationFormContent;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_bmdp_adminconsole_page_Main_mob */
        /* Construct_LAST:org_shaolin_bmdp_adminconsole_page_Main_mob */
    };

    Form.Submit = org_shaolin_bmdp_adminconsole_page_Main_mob_Submit;

    Form.logout = org_shaolin_bmdp_adminconsole_page_Main_mob_logout;

    Form.clickFunctionNode = org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode;

    Form.showUserInfo = org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo;

    Form.showStartMenu = org_shaolin_bmdp_adminconsole_page_Main_mob_showStartMenu;

    Form.showNotification = org_shaolin_bmdp_adminconsole_page_Main_mob_showNotification;

    Form.showHelp = org_shaolin_bmdp_adminconsole_page_Main_mob_showHelp;

    Form.initPageJs = org_shaolin_bmdp_adminconsole_page_Main_mob_initPageJs;

    Form.finalizePageJs = org_shaolin_bmdp_adminconsole_page_Main_mob_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.bmdp.adminconsole.page.Main_mob";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_bmdp_adminconsole_page_Main_mob */
/* Other_Func_LAST:org_shaolin_bmdp_adminconsole_page_Main_mob */

    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_Submit(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_Submit */
        var o = this;
        var UIEntity = this;
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_Submit */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_logout(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_logout */
        var o = this;
        var UIEntity = this;

        // cal ajax function. 

        UIMaster.triggerServerEvent(UIMaster.getUIID(eventsource),"logout-945221342",UIMaster.getValue(eventsource),o.__entityName);
    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_logout */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode */
        var o = this;
        var UIEntity = this;

				{
				    var link = eventsource;
				    var name = event;
				    showMobileFrame(link, name);
				}
				    }/* Gen_Last:org_shaolin_bmdp_adminconsole_page_Main_mob_clickFunctionNode */


    /* auto generated eventlistener function declaration */
    function org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo(eventsource,event) {/* Gen_First:org_shaolin_bmdp_adminconsole_page_Main_mob_showUserInfo */
        var o = this;
        var UIEntity = this;

                {
                ��WK>Ǵ؀�r�ޝ��v��LЕ����7}t�s��f{^I�T�~���9�j���� ��4�M!���fQ�&�|�H��VJ��#��1?[;����R-����9�#^yG�r�Hnk�_�w9f˒�/�V=z#fh�},w�5�^�%N5�b+E�ʦ�����d�e
�#��vz2}����RJU�X�棐�-R����qqHMM7|���e4Ud���� �Tq�j�	_�c��H0Y�h�x���ۤ��6�*��,�7SPM�OBUlr�cEԭ�c�j�y�?�N�r��_�4M�&œkwx���G�F{��B�PҀ���(�R�]F��(��`�� x�M+3yZ�5;���u$�v�&���y�9�9)}]�aZ�1ɮ%P'���%��b)�[~K��j�n[ G�m�l������d�dEe��1�V>���V��������Y,��,����j�oL�>���V��U�jǵ9],"*.S�A*��41�@?Y����(�#��ܤCz� "P(�z��{݇� � 9D9�w.�k-�y�%$C��ӦI���7@�&�W]��fEȢ��g+�M)W9�����G��߶�ϱ���x�˭�H�1�ؠ*�y�|�VD*�>�v�-R�#�ߤ��=e6�	$��Ѥ"���RkS�e.����V�ʹr ^@�婄�RY���̋FG�����ھ���/Y�t�c�fw�L;J�����I�Z=�k:5TN>d������\'+>`�0�Ac�ۮ� �%`1�:H&1I����_{�.�A���uh x8��[��`C*;3On��Q�p�6Ltr������c"�@���`EQ+����r���룍kCt��m[S%(�"���
3m����F����$�Yg��|�b�a��R���?�ܵz�"�7��`�|�3Lh>ٌ�0��?���A�x7m���H��;+�M���ҋW�㣨�HM�(AK��B���P�Cz�*���,��MDĚ��>�?�:�A���=�6r�;2!Qw�7e�Xw���$� �qV ���8�o9s��9%\1b��a�1cO1�c[�<@�>��|�i|�[��G ���$��6+`��m������K6�H�aw��٥,�	X�PҐȇ�=�>~C��t�Zo�>)�zu\ahfy��J����WW��!��9F�II�$��UH1>���q@uU�:X<E���# {ɛ�S	� ����B�%*��@` '~ 7�hѠ���w\���HĲ��m�{ZV�;#Z�M��0��'I�c$tFLrsE U)��D����nN���Ƶ#(�@cͽ��"�{��^���|�6,��(ڦB�F}Q�ɰl��k17+W�*f��ZS;�|����5�;�,���:�%�L��C�D��x\A2 �'Q� B�P�Ʉu���|��h<�A�-��&���(���
%�p��4G�@���zx����M��T
��+9L锊�Tٓ	�p�P�(�����B�8&N��v�ӵ]˘�m� 1�Q��c����(�Pp !�w#�l�>����Sj6�xG��Ʋ}`<��=!y�"`�6_f��x=l \$U�p�uDN&����G�G�J%tJc@Ja�a�` � ���R*BwL���>eK� F ]D��w����DP��Y�/�=H�
����Ly
��#J���/I��/�7J�P��W�H�G%���#��Q�T��@�9�9DAE9�u��cs���y�<�cFu�����1�2f0	3���)�t2�S�S��aHNq5犏P�c� ��J%��' �LT��0pc� �!���)�r|�U�y��d&7�2a�'0��$0��L����P�&�ǟ}r�@���ځ��]3ID� ����~�����R��۰q��ޢ�n|�(�.�/{���yʹR+�)Y*�^ȳVy�B!A�nJ�������HWL�G*:V�nQ:��Z]�{��7���� "�ϐ0��.�u���B�\���ÖZ�E�B��2��/��D���NԎ�:�J��Ʊ��s��4F]"G	#%P=�݄��������o ��LV�� c�v� 0 ��ތ����#�� �5B@?{`Z��4tɔ��{M�'��j���v�ݙ�s����n��&c"�G�1�'nEK�}0Q2�*�t����1 �R�S{�(����=�|w�[�fz��_n����M�Vf��",":o��]i7�
�nRv1���^�g��L�C�NLa����*� �DyC�W� T�!���C`oF�R	�S��S��)�J^�
 r �1JkxG��7���A(�������Jg *� A(&�;����HW)���D�pp�N�l�T�!�P��+���"ղ*�R 8��+'ҩ��7\R����n"��D��
�3��k⳵��h��D�~F�ML=�����tH�n���fcXFaϗkp����#.�"��,d!)�V�pQf 弅f��V�vV��軖,c)���ȋ!�B�
I&�QL� ����LH=T�UN%o�DHd�����q���͸z@'�F^��H)�N: N�	x縀� �B-�J�ܩ�.�L�D��O  L���0y��b���h<��3l���r$`'=E��t��c*r��RA1���5�Q����A��a`S[��sn�44]ʌu�6D����b��� ���$�L+K�Z��j�8�)�c%':�.Ԫ��)�r�Z��Wߕ4��Y"X��>)DNB��|���A#��(9@ɐDD�����t���6�Xw�*.C��ۙW��T�6	xr3�l$v��}�y�4�4��ojRZ��V`"��v牨wz,�9��G'W��\#8���1��js�$!���jJ4�n�N��2NM�98W�_�l��5*�3�;�����HJ�#�b+u�Pնެ���*�-��hE��rT(u�q�s�^���?㌁<ݓy�uZ:m�x�WԒY�s&�,� ��u�:����mQvI|+���|�WMy�{3i�q�ӯP��E���^v!�l��>$��2Qv�YX����4�=��w�li�f0��擻�E�Qҋզ���ZN�[)�ج/eR�U9S5A��#"w
��gle3n`��JU̧Ax�wN�p�E�E���L�]'ի,3�p/�;o �5��A6H:��٪xG���tp�J_�j�~b��k9�TS���>�9q�)�����h��,����*����0&|���&Z�����CEJ4�tp/��3װѓ���M�h��>VY��'��C���3|
��E�s Iu}U"�8���P�M% �1��UP1�	pp��
AT �h�Tڴ.٪���9�i�����ܰr��j��`�p�t���-$%ckϬ�a���V�<c{��Ե�F	����)�n�u��hXJ�������S�7������_2��S���U%�,V�$�Mj5�	�Iɷ"�E�W]�oe#w����>�e��q���n5S���l2�^�6;��4́,-�on�q8�k�DH �[J��J$��B;O��KnX-̛6hLaM)7j�-SL`.إ"$A"��zR�@D@�Yd��"��ƶ�6ih���=ę��^�^�J�"�&�%$�:°
�BA4�Tkd�4���I�����G�BzA�]��}0`� �u#�9�G@�.= D�pR���Cu��?y����0��e)Cm"��J����'0ݹ㹃�.�A�v�}"q�� �F� �Ѡ����W���ɿ��
��_#�a��+�8� ��ɟˍ0�����������o���G���i ����3_��]� ի�*��r�mSsTzD�3& ����G����4��UB)���@L rmF�q� ��_|<��(��Ƿ �|�����"���ͩ|��?���5��SC��a%/
�A*E��-spB������ ��s�G�x��ٹ,-�jr���1��79�5� Yb�1K�&\E��_�j
)�Ф�e�J~�"(P_�_>@�� �
���
c� �H=�;uq�?�G쀶�wu#�,-���ە�^�P.��D�ծU�W�].L�l���D�"f�E�%Nղi����$Y��5��ώFk]�xW`[z�\kJ��o/:'�l�#�Y��v�,̈́Y��<BRR��5J��e��QB�a:j� �т�%�0�S	1�	Jc��S��%(p"&�K�k1&r��T( ��#� G�~"Q��