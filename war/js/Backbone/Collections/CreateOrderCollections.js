BackboneData.Collections.IdCollection = Backbone.Collection.extend(
{
    url			: 	ApplicationConstants.fetchIDList,
    initialize	: 	function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside FetchID Collection");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchActorsListBySite = Backbone.Collection.extend(
{
    site_type	: 	'',
    initialize	: 	function()
    {
        this.bind("reset", function(model, options)
        {
            var self = this;
            console.log("Inside fetchactorslistbysite collection");
            console.log(model);
        });
    },
    url: ApplicationConstants.fetchActorsListBySite + $('#Site_Workshop_Prototype').val(),

});

BackboneData.Collections.fetchIncotermsList = Backbone.Collection.extend(
{

    initialize	: function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside fetchincoterms collection");
            console.log(model);

        });
    },
    url		: 	ApplicationConstants.fetchIncotermsList
});

BackboneData.Collections.fetchCustomersList = Backbone.Collection.extend(
{

    initialize	: function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside event");
            console.log(model);

        });
    },
    url	: ApplicationConstants.fetchCustomersList
});

BackboneData.Collections.fetchPlatformsList = Backbone.Collection.extend(
{
    initialize	: function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside fetchplatformlist collection");
            console.log(model);
        });
    },
    url		: 	ApplicationConstants.fetchPlateformesList
});

BackboneData.Collections.fetchPlacesList = Backbone.Collection.extend(
{
    initialize	: function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside fetchplaceslist collection");
            console.log(model);

        });
    },
    url		: ApplicationConstants.fetchPlacesList
});

BackboneData.Collections.fetchSitesList = Backbone.Collection.extend(
{
    initialize	: function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside fetchsiteslist collection");
            console.log(model);

        });
    },
    url	: ApplicationConstants.fetchSitesList
});

BackboneData.Collections.fetchCustomerDetailsbyName = Backbone.Collection.extend(
{
    initialize	: 	function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside fetchcustomerdetailsbyname collection");
            console.log(model);
            this.id = options.customerNameSelected;
        });
    },
    url	: ApplicationConstants.fetchCustomerDetailsbyName + this.id
});

BackboneData.Collections.fetchUserInfoDetails = Backbone.Collection.extend(
{
    initialize	: function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside fetchUserInfoDetails collection");
            console.log(model);
        });
    },
    url	: ApplicationConstants.fetchUserInfoDetails + useremailid
});
BackboneData.Collections.fetchOrderDependencies = Backbone.Collection.extend(
{
    initialize	: function()
    {
        this.bind("reset", function(model, options)
        {
            console.log("Inside fetchUserInfoDetails collection");
            console.log(model);
        });
    },
    url	: ApplicationConstants.fetchOrderDependencies
});	