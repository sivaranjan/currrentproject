BackboneData.Views.AdminDetailView = Backbone.View.extend(
{
    el							: 	'#admin-section',
    render					    : 	function()
					    			{
								        var ref 			= 	this;
								        var adminDetailHTML = 	"";
								        adminDetailHTML 	= 	admin.manager.AdminDetailView();
								        ref.$el.html(adminDetailHTML);
					    			},
    initialize					:   function()
						    		{
						        		var _thisView = this;
						        		_thisView.render();
						    		},
    events						:   {
								        "click #showtableslist"		: 	"showTablesList",
								        "click #configactor-btn"	: 	"viewActorList",
								        "click #incoterms-btn"		: 	"viewIncotermsList",
								        "click #clients-btn"		: 	"viewClientsList",
								        "click #platforms-btn"		: 	"viewPlatformList",
								        "click #locations-btn"		: 	"viewLocationList",
								        "click #sites-btn"			: 	"viewSiteList",
								    },
    showTablesList				: 	function()
									{
									        $('.configset,#config-pane article').removeClass('hide');
									        $('#configbreadcrumb,#actor-article').addClass('hide');
									        $('.tablelistview').addClass('hide');
									},
    viewActorList				:   function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#actor-article').removeClass('hide');
									        buildActorsTable("MEP Study");
								    },
    viewIncotermsList			: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#incoterms-article').removeClass('hide');
									        buildIncotermsTable();
								    },
    viewClientsList				: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#clients-article').removeClass('hide');
									        buildCustomersTable();
								    },
    viewPlatformList			: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#platforms-article').removeClass('hide');
									        buildPlatformsTable();
								    },
    viewLocationList			: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#locations-article').removeClass('hide');
									        buildPlacesTable();
								    },
    viewSiteList				: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#sites-article').removeClass('hide');
									        buildSitesTable();
								    }
    
});