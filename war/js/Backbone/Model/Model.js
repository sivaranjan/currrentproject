BackboneData.Models.ActorListDetailsModel = Backbone.Model.extend(
{
    defaults:
    {
        actorType			: 	"",
        actorEmail			: 	"",
        site				:	"",
        addedBy				: 	"",
    },
    initialize: function()
    {
        console.log('ActorListDetailsModel has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("ActorListDetailsModel, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('ActorListDetailsModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.saveActorsListURL
});

BackboneData.Models.CustomersListModel = Backbone.Model.extend(
{
    defaults:
    {
        customer_Name		: 	"",
        customer_Code		: 	"",
        branch_Code			: 	"",
        provider_Code		: 	"",
        customer_Address	: 	"",
        added_By			: 	"",
    },
    initialize: function()
    {
        console.log('CustomersListModel has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("CustomersListModel, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('CustomersListModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.saveCustomersListURL
});

BackboneData.Models.IncotermsModel = Backbone.Model.extend(
{
    defaults:
    {

        incoterms		: 	"",
        infos			: 	"",
        added_By		: 	"",

    },
    initialize: function()
    {
        console.log('IncotermsModel has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("IncotermsModel, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('IncotermsModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.saveIncotermsListURL
});

BackboneData.Models.OrderDetailModel = Backbone.Model.extend(
{
    defaults:
    {
        site_Workshop_Prototype		: "",
        geoSite						: "",
        no_prototype_order			: "",
        proto_Type					: "",
        pcc							: "",
        open_Order					: "",
        frittage					: "",
        e52							: "",
        intraLE						: "",
        type_of_the_Prototype_Order	: "",
        date_of_the_Order			: "",
        no_customerOrder			: "",
        customerOrderAttachment		: "",
        customer_Name				: "",
        customer_Code				: "",
        branch_Code					: "",
        provider_Code				: "",
        final_Delivery_Address		: "",
        additional_Address			: "",
        site_Address				: "",
        plateform					: "",
        incoterms					: "",
        place						: "",
        customer_Receiver_Name		: "",
        customer_Receiver_Telephone	: "",
        allocation_of_turnover		: "",
        requester					: "",
        cadTeamMember_MEPStudy		: "",
        qualityTeamMember			: "",
        protoWorkshop				: "",
        managementController		: "",
        kamCommerce					: "",
        salesAdministrator_ADV		: "",
        projectManager				: "",
        order_Status				: "",
        total_Order_Amount			: "",
        list_Component_Keys			: ["gfg", "kghh", "jhgj"],
    },
    initialize: function()
    {
        console.log('OrderDetailModel has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("OrderDetailModel we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('OrderDetailModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.saveOrderUrl
});

BackboneData.Models.PlacesDetailsModel = Backbone.Model.extend(
{
    defaults:
    {
        places		: 	"",
        added_By	: 	"",
    },
    initialize: function()
    {
        console.log('PlacesDetailsModel has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("PlacesDetailsModel we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('PlacesDetailsModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.savePlacesListURL
});

BackboneData.Models.PlateformDetailsModel = Backbone.Model.extend(
{
    defaults:
    {
        plateform		: 	 "",
        added_By		:	 "",
    },
    initialize: function()
    {
        console.log('PlateformDetailsModel has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("PlateformDetailsModel we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('PlateformDetailsModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.savePlaterormsListURL
});

BackboneData.Models.SitesListModel = Backbone.Model.extend(
{
    defaults:
    {
        site_Name	: 	"",
        address		: 	"",
        added_By	: 	"",
    },
    initialize: function()
    {
        console.log('SitesListModel has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("SitesListModel we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('SitesListModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.savesSitesListURL
});

var Book = Backbone.Model.extend(
{
    defaults:
    {
        name	: ""
    },
    initialize: function()
    {
        console.log('Book has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('Book\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.generateNewId
});

BackboneData.Models.UserModel = Backbone.Model.extend(
{
    defaults:
    {
        useremail		: 	"",
        language		: 	"",
        lastLoggedDate	: 	""

    },
    initialize: function()
    {
        console.log('UserModel has been initialized');
        this.on("invalid", function(model, error)
        {
            console.log("UserModel, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options)
    {
        console.log('UserModels constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    urlRoot: ApplicationConstants.createorupdateuser
});