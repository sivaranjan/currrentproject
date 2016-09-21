BackboneData.Views.GlobalNavbarview = Backbone.View.extend(
{
    el		: 	'#navbar-1',
    render	: 	function()
    {
        var ref 				= 	this;
        var globalNavBarHTML 	= 	"";
        if (window.language == "EN")
        {
            globalNavBarHTML = globalnavigation.manager.GlobalNavbarview(
            {
                'paramValue'	: 	window.navBar_englishLabelList
            });
        }
        else
        {
            globalNavBarHTML 	= 	globalnavigation.manager.GlobalNavbarview(
            {
                'paramValue'	: 	window.navBar_frenchLabelList
            });
        }
        ref.$el.html(globalNavBarHTML);
    },
    initialize		: 		function()
    {
        var _thisView 	= 	this;
        _thisView.render();
    }
});