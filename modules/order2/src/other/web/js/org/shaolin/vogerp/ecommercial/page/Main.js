/* null */
/* auto generated constructor */
function org_shaolin_vogerp_ecommercial_page_Main(json)
{
    var prefix = (typeof(json) == "string") ? json : json.prefix; 
    var topBar = new org_shaolin_vogerp_ecommercial_form_TopBar({"prefix":prefix + "topBar."});

    var searchBar = new org_shaolin_vogerp_ecommercial_form_SearchBar({"prefix":prefix + "searchBar."});

    var content = new org_shaolin_vogerp_ecommercial_form_Content({"prefix":prefix + "content."});

    var Form = new UIMaster.ui.panel
    ({
        ui: elementList[prefix + "Form"]
        ,items: [topBar,searchBar,content]
    });

    Form.topBar=topBar;

    Form.searchBar=searchBar;

    Form.content=content;

    Form.user_constructor = function()
    {
        /* Construct_FIRST:org_shaolin_vogerp_ecommercial_page_Main */
        /* Construct_LAST:org_shaolin_vogerp_ecommercial_page_Main */
    };

    Form.initPageJs = org_shaolin_vogerp_ecommercial_page_Main_initPageJs;

    Form.finalizePageJs = org_shaolin_vogerp_ecommercial_page_Main_finalizePageJs;

    Form.__AJAXSubmit = false;
    
    Form.__entityName="org.shaolin.vogerp.ecommercial.page.Main";

    Form.init();
    return Form;
};

    /* EventHandler Functions */
/* Other_Func_FIRST:org_shaolin_vogerp_ecommercial_page_Main */
/* Other_Func_LAST:org_shaolin_vogerp_ecommercial_page_Main */

    function org_shaolin_vogerp_ecommercial_page_Main_initPageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_Main_initPageJs */
        var constraint_result = true;
        var UIEntity = this;

			{
			}
    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Main_initPageJs */


    function org_shaolin_vogerp_ecommercial_page_Main_finalizePageJs(){/* Gen_First:org_shaolin_vogerp_ecommercial_page_Main_finalizePageJs */

    }/* Gen_Last:org_shaolin_vogerp_ecommercial_page_Main_finalizePageJs */



