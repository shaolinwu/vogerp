/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_Index(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var topBar = new org_shaolin_vogerp_ecommercial_form_TopBar({"prefix":prefix + "topBar."});

    var searchBar = new org_shaolin_vogerp_ecommercial_form_SearchBar({"prefix":prefix + "searchBar."});

    var content = new org_shaolin_vogerp_ecommercial_form_Content({"prefix":prefix + "content."});

    var bottomBar = new org_shaolin_vogerp_ecommercial_form_BottomBar({"prefix":prefix + "bottomBar."});

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [topBar,searchBar,content,bottomBar]
    });

    Form.topBar=topBar;

    Form.searchBar=searchBar;

    Form.content=content;

    Form.bottomBar=bottomBar;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_Index */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_Index */
    };

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_Index_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_Index_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.Index";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_Index */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_Index */

    function org_shaolin_vogerp_ecommercial_page_Index_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_Index_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			}
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Index_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_Index_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_Index_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Index_finalizePageJs */



