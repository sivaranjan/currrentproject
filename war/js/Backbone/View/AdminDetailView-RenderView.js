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
								        "click #producttype-btn"	:	"viewProductTypeList",
								        "click #prototypists-btn"	:	"viewPrototypistsList",
								        "click #rdlead-btn"			:	"viewRandDManagerList",
								        "click #technologie-btn"	:	"viewTechnologyList",
								        "click #allocation-btn"		:	"viewAllocationTurnOverList",
								        "click #clientadd-btn"		:	"viewClientLaboList",
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
									        renderTabClick();
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
								    },
	viewProductTypeList			: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#productstypes-article').removeClass('hide');
									        buildProductTypesList();
								    },
	viewPrototypistsList		: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#prototypists-article').removeClass('hide');
									        buildPrototypistsList();
								    },
	viewTechnologyList			: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#technologies-article').removeClass('hide');
									        buildTechnologyList();
								    },
	viewRandDManagerList		: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#rdlead-article').removeClass('hide');
									        buildRandDList();
								    },
	viewAllocationTurnOverList	: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#allocationturnover-article').removeClass('hide');
									        buildAllocationTurnOverList();
								    },
	viewClientLaboList			: 	function()
								    {
									        $('.configset,#config-panel article').addClass('hide');
									        $('#configbreadcrumb,#clientadd-article').removeClass('hide');
									        buildClientLaboList();
								    }
});