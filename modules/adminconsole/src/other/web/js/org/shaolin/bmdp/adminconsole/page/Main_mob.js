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
                ’–WK>Ç´Ø€rÐÞµá®vøç²LÐ•®ÆÇÕ7}t”sÂÌf{^IÃT¬~É€Î9ÕjÀ÷¤‰ ¤‚4ÛM!óØ£fQÃ&ñ¦|ÍH¨§VJƒ•#¢Ï1?[;¨ˆô×R-’¯„ë9À#^yG‚réHnk˜_Ôw9fË’/§V=z#fh²},w‰5›^Æ%N5œb+EŠÊ¦¡Äñ‹ÊÖd¹e
Æ#¬žvz2}´¯”¥RJUóX¤æ£ª-R’­²qqHMM7|¼£ïe4Ud™¦äÂ ¼TqÕj	_c“¨H0Y“h½xÎ©¢Û¤ýÃ6©*ýš,Ô7SPM¦OBUlr™cEÔ­«c¸jÇy«?ÎNârìÞ_²4Må&Å“kwxëÅÑG¶F{“ŠBóPÒ€‹äß(ÞRÏ]F¾Ê(Ñì¤`Ôõ xæM+3yZÁ5;ŽëÐu$“vÚ&ÈÚüyÉ9…9)}]íaZ¬1É®%P'˜«%êçb)„[~KÀ¹jõn[ GÄm¨lÔùçø’Ód¬dEeãÝ1ˆV>¼öæ­VÃ„»¨÷žY,Ùã,Œ£˜ájñoL>ŠºÄV»±UÒjÇµ9],"*.S¤A*ªÈ41…@?Yš·óÔ(¦#ÐÁÜ¤CzŽ "P(”z¸ü{Ý‡‘  9D9˜w.ãk-ÆyÃ%$C¤´Ó¦I¬Œ­7@Ã&á©W]ÒÄfEÈ¢‰•g+¸M)W9Õ°œ¥»GÔìß¶êÏ±æñæxŠË­ Hé1¼Ø *µyœ|•VD*©>•vþ-R‹#¹ß¤²ï=e6ì	$àóÑ¤"å—ÑÇRkSáe.ÐÑí²‹ùV Í´r ^@˜å©„ÓRY‚ìÌÌ‹FG¤ÚÀŸ´Ú¾½´/YítÈcˆfwÃL;J²Þö¤”IçZ=‰k:5TN>dãÒúÅì¡\'+>`á0äAcÖÛ®  ‘%`1€:H&1IÁÄŽà_{.úAÐÈùuh x8¦¢[³Ÿ`C*;3On´—QšpÃ6Ltr•¢Šœ’Òc"Â@êÀ»`EQ+åößÞr‚”çë£kCtÈÐm[S%(œ"²Žß
3mµ’†ùF¬¡¡½$“Yg…“|™b•aõÝRáÒÙ?Üµz¡"þ7ø’`‰|Ÿ3Lh>ÙŒ›0ñšÄ?µô‹A™x7mŠªìH™êŠ;+¶MÁ¯Ò‹Wàã£¨‡HMÈ(AKƒôB§ÂÝPÂCz*©É,š§MDÄšüð>È?Ä:ûAÌ÷œ=“6rÂ;2!Qw‡7eºXw¨–$ª ¦qV ÇÉÈ8—o9s˜³9%\1b’ÍaÓ1cO1Ÿc[•<@­>Ëä|Ði|Ý[±ä°G ­”ò$Œ¼6+`„ümÅðÙìé™ûK6÷H¶awîåÙ¥,»	X–PÒÈ‡Ö=À>~CðÕtˆZo¹>)Ìzu\ahfy…˜J»ÈÊWWŽ!›•9FÍII›$’ëUH1>´ÉÓq@uUˆ:X<EäÉú# {É›¬S	é ¾‰BÌ%*¢š@` '~ 7ôhÑ ßŒw\ÍÞ»HÄ²²òmâ¯{ZV—;#Z”MŠ0“Ž'I¹c$tFLrsE U)ËØDÀûõƒnN‹”¶Æµ#(Å@cÍ½ØÓ"—{ùö^ÈÖì|£6,¬ô(Ú¦BÁF}Q‹É°l‚¿k17+W©*fÓôZS;Œ|Œ£ì5”;¯,‚ªÇ:Š%¼Lœ‘CàD¾æx\A2 'QŒ BðPñÉ„uõ½À|ƒôh<¡Aš-º&º˜(©Ö
%òpëå4GÈ@ÄèàzxÆõÈÁMîT
Ž+9Lé”ŠTÙ“	ÊpPë(ªû¢ÂB‡8&Nžëv£Óµ]Ë˜Åmÿ 1˜QàÅc»€Åã(‡Pp !Èw#•lŠ>ù¼äêSj6ïxGžåÆ²}`<÷ä=!yî"`Ð6_fÝx=l \$U„p«uDN&…ªÏÜGžGÌJ%tJc@Ja—aŒ` ê© £ã€àR*BwLƒèÈ>eK÷ F ]D€w÷ž¶þDPþ•Yµ/š=H¦
ôÀåLy
Šú#J…ýÕ/IèÖ/î†7JÅP¾WH’G%áÏâ#èýQÔTçô‰@ç9Œ9DAE9ôŠuÒÂcs»ª€yè<ßcFu…¡êé1”2f0	3¨™Ž)¨t2‹S¨S õaHNq5çŠPÂcµ ˆ”J%©ð' ‘LTÀÆ0pc æ!Ž™Œ)¨r|ËUÐy‡Žd&7÷2aÔ'0˜€$0Š…Lªˆœ‚P‰&‘ÇŸ}r‘@š»ÔÚºý]3IDå …à €~¢¼¼€Rû¡Û°qèêÞ¢‡n|¿(è.õ/{–ÇôyÍ´R+¶)Y*³^È³Vy‚B!AÅnJõ•¦û«—åHWL‹G*:VnQ:Ž­Z]¼{¦è7ýžîÿ "äœÏ0•².Ñuƒ†BÃ\ËñæÃ–Z³E‘B¼•2×Ã/µùD©¥ÝNÔŽ¦:ÇJ¿­Æ±Öés¬œ4F]"G	#%P=îÝ„°üùçËôëÉo Á¹LVè¤Ø cƒvé 0 —¨ÞŒ¥äÀ#Àˆ è5B@?{`Z·4tÉ”ªì{M£'Â‘ž²j÷ÑúvìÝ™»s®Õ‚ÆnÜê&c"—G¸1ìŒ'nEKé}0Q2Ä*œtŠš¦1 ÊR”S{å(¾œ‹=¸|w‰[µfzý«_n”ô¾×MõVf­Á",":o“œ]i7¼
·nRv1´âô^ÏgÕÔLòC¨NLaäæƒ”*ÿ åDyC€W¨ Tæ!ÑýÎC`oF¨R	ÌS‰ˆS˜Å)ÀJ^…
 r „1JkxGŽã­7§áªÂA(œîüôœü‡Jg *‚ A(&à;Žƒ‰ºHW)Õù›Dì‚pp‘N¦lî—Tí£!âP¯ž+é²‰"Õ²*¸R 8ô +'Ò©Ž°7\R¾ÌÉn"ù¤D¥ê
–3§Ékâ³µöëh‰‘D¤~F³ML=™¿¯åëtHn®ÒÉfcXFaÏ—kp¶àò‚˜í#.¦"ÄÒ,d!)ÎVìpQf å¼…f´ÙV“vV«”è»–,c)‡©õÈ‹!ÈBÑ
I&QL¢ ˜„©¶LH=TÒUN%oÒDHd“›ž­Âqì¬ÀÍ¸z@'¤F^“‰H)”N: NÜ	xç¸€ˆ …B-J™Ü©‘.L©D€€O  Låíð0y¼àb€·ôh<âÇ3l™Á³r$`'=Eç¬ÆtêÂc*r” RA1ÈÁê5÷Q¹ÁãçAÆìa`S[¨òsn³44]ÊŒu²6Dˆ–Œ­béñÿ ¯®ò$ËL+KÍZž·j³8˜)Œc%':â.ÔªÅò)ÍrßZ‚µWß•4ßÃY"XÍÃ>)DNB»Œ|“†®A#”§(9@ÉDD¼õì›t’ Æ6¶Xw±*.CµâÛ™W¥ÏTê6	xr3•l$v´½}üy‘4°4–”ojRZ°êV`"Åê®vç‰¨wz,¶9—­G'W•‚\#8¢„ñ1’Ôjs×$!ŽÅýjJ4ænþN¼ò2NM«98WŒ_³lé¦5*ö3§;Œ¢ÖëõHJü#õb+uè†PÕ¶Þ¬œ‹Ð*‘-˜·hEœ‰rT(uÎqŽsÞ^ßïÓ?ãŒ<Ý“y‹uZ:mûxàWÔ’Yés&€,” ¥éu÷:¸ä¢‡ÝmQvI|+–Þú|•WMy˜{3i•qºÓ¯P€¸E¯©°^v!ºlëÙ>$±‘2QvÀYXø…¨Ò4Û=‹Öw¹li—f0›Åæ“»ÂEšQÒ‹Õ¦®€¡ZNà´[)´Ø¬/eRƒU9S5A‰Š#"w
¢îgle3n`ÆÓJUÌ§AxòwNºpºEÓEšÊÀL]'Õ«,3·p/›;o Ý5ŽÊA6H:‰‹ÙªxGåìšûtp×J_jî‹~bÕÌk9¸TS¦’ó>Û9q‹)¦°¶¸áh²ä,³™ö«*šéàâ0&|Æùú&ZÁÞÉÈCEJ4Œtp/ Õ3×°Ñ“ŒŸ´Múh æ>VY„›'ŒŒCë˜ÏÙ3|
”®EÌs Iu}U"œ8˜é”äPÅM% ¥1‘áUP1Œ	ppôƒé
AT Úh»TÚ´.Ùª²ÕÈ9Éi¤¦æâäÜ°r‰ j±®`ëpõtÞÕê-$%ckÏ¬ÍaÛÌßVŽ<c{•¹Ôµ²F	¤ŒŠè)în¿uøÏhXJû²£Óý­SØ7ø„·Üç¥_2ƒ¯S©ÐçU%§,V»$¤Mj5°	œIÉ·"æE¹W]€oe#w‹¿œì>«eÂqöÝán5S¤Á´l2›^”6;¯¥4Í,-¥onÖq8†kÇDH Ð[JƒÆJ$ÐßB;OŽKnX-Ì›6hLaM)7jŠ-SL`.Ø¥"$A"¦zR¤@D@¥YdÀ¥"ªõÆ¶Æ6ihÅÐï=Ä™¦í·•^µ^òœJ«"ñ¾&§%$ž:Â°
’BA4ÙTkdŠ4û˜÷I·’³âëG‘BzA”]«€}0`ÿ Áu#ú9ûG@¶.= DÑpR¦à¸Cu¾÷?y÷¤ø‘0ËÂe)Cm"¦÷JûñíÈ'0Ý¹ã¹ƒŸ.ÞAÀvÖ}"qøÿ «F® óÑ ùûßïWäóÆÉ¿êÓ
ëë‹_#¿aš÷+²8ÿ õÇÉŸË0·ì××½îß÷©îoüÞóGú¸²i ÜÏ÷¿3_ùª]ÿ Õ«*ûµr˜mSsTzDØ3& »›ÙØGŸŸŸù4’îUB)á÷›@L rmFàqü ­_|<üÒ(‡Ç· Ú|¿¼õ°ò"‡ôªÍ©|üÂ?£úÄ5¾ÏSCÁça%/
¬A*Eêë-spBŠ¨¡‡Ž ‰¦s˜G±xÜÙ¹,-·jr×Ìë–1î§79Ò5£ Yb«1K®&\E¡¥_µj
)úÐ¤ÝeÔJ~²"(P_À_>@ó ë
‡çï
cˆ H=À;uqû? Gì€¶ßwu#´,-ºëÛ•—^»P.Á÷D±Õ®U›W®].L±lŠ‡©DÄ"f€E¤%NÕ²i®“¦Î$Yœ®5ï¾ÜÏŽFk]ÒxW`[zÚ\kJÌo/:'”là¢#éYÃÓvñ,Í„YÐÛ<BRRäý5JÙÃe¡‘QBŠa:jÈ ×Ñ‚¢%½0¤S	1ý	Jcô•SÃÇ%(p"&àKïk1&rºT( €#Ü GÌ~"Qãä