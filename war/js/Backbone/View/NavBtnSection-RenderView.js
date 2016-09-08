BackboneData.Views.NavBtnSectionview = Backbone.View.extend(
{
    el			: 	'#navbar-2',
    render		: 	function()
    {
        var ref 	= 	this;
        var NavBtnSectionHTML 	= 	"";
        if (window.language == "EN")
        {
        	if(document.URL.split("#")[1].indexOf("createorder")!=-1)
        	{
        		 NavBtnSectionHTML 	= 	navigation.manager.NavBtnViewDetail(
        		 {
        		        'paramValue'	: 	window.navBtnSection_englishLabelList,
        		        'visibleconfig'	: 	window.ordernavVisibilitySettings
        		 });
        	}
        	else if(document.URL.split("#")[1].indexOf("componentdetails")!=-1)
        	{
        		 NavBtnSectionHTML 	= 	navigation.manager.NavBtnViewDetail(
                 {
                		'paramValue'	: 	window.navBtnSection_englishLabelList,
                		'visibleconfig'	: 	window.componentnavVisibilitySettings
                 });
        	}	
        }
        else
        {
        	if(document.URL.split("#")[1].indexOf("createorder")!=-1)
        	{
        		NavBtnSectionHTML 	= 	navigation.manager.NavBtnViewDetail(
        	    {
        	          'paramValue'		: 	window.navBtnSection_frenchLabelList,
        	          'visibleconfig'	: 	window.ordernavVisibilitySettings
        	    });
        	}
        	else if(document.URL.split("#")[1].indexOf("componentdetails")!=-1)
        	{
        		 NavBtnSectionHTML 	= 	navigation.manager.NavBtnViewDetail(
                 {
                	  'paramValue'	: 	window.navBtnSection_frenchLabelList,
                	  'visibleconfig'	: 	window.componentnavVisibilitySettings
                 });
        	}
            
        }
        ref.$el.html(NavBtnSectionHTML);
        $('#navfixed-wrapper').removeClass('hide');
    },
    initialize		: 		function()
    {
        var _thisView 	= 	this;
        _thisView.render();
    },
});

 
