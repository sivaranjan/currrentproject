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
BackboneData.Models.OrderDetailModelUpdate = Backbone.Model.extend(
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
		        console.log('OrderDetailModelUpdate has been initialized');
		        this.on("invalid", function(model, error)
		        {
		            console.log("OrderDetailModelUpdate we have a problem: " + error)
		        });
		    },
		    constructor: function(attributes, options)
		    {
		        console.log('OrderDetailModelUpdate constructor had been called');
		        Backbone.Model.apply(this, arguments);
		    },
		    urlRoot: ApplicationConstants.updateOrderURL
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

BackboneData.Models.ProductTypesModel = Backbone.Model.extend(
{
	defaults:
	{
		 productType	: 	"",
	     added_By		: 	"",
	},
	initialize: function()
	{
	     console.log('ProductTypesModel has been initialized');
	     this.on("invalid", function(model, error)
	     {
	         console.log("ProductTypesModel we have a problem: " + error)
	     });
	},
	constructor: function(attributes, options)
	{
	    console.log('PlacesDetailsModel constructor had been called');
	    Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.saveProductTypeListURL
});
BackboneData.Models.PrototypistsModel = Backbone.Model.extend(
{
	defaults:
	{
		prototypist		: 	"",
		added_By		: 	"",
	},
	initialize: function()
	{
	    console.log('PrototypistsModel has been initialized');
	    this.on("invalid", function(model, error)
		{
			console.log("PrototypistsModel we have a problem: " + error)
	    });
	},
	constructor: function(attributes, options)
	{
	    console.log('PrototypistsModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.savePrototypistListURL
});
BackboneData.Models.TechnologyModel = Backbone.Model.extend(
{
	defaults:
	{
		technology		: 	"",
		productType		: 	"",
		added_By		: 	"",
	},
	initialize: function()
	{
		console.log('TechnologyModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("TechnologyModel we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('TechnologyModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.saveTechnologyListURL
});
BackboneData.Models.randDModel = Backbone.Model.extend(
{
	defaults:
	{
		randD		: 	"",
		added_By	: 	"",
	},
	initialize: function()
	{
		console.log('randDModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("randDModel we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('randDModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.saveRandDListURL
});
BackboneData.Models.allocationModel = Backbone.Model.extend(
{
	defaults:
	{
		allocation		: 	"",
		added_By		:	"",
	},
	initialize: function()
	{
		console.log('allocationModel has been initialized');
	    this.on("invalid", function(model, error)
		{
			console.log("allocationModel we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('allocationModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.saveAllocationListURL
});
BackboneData.Models.ClientLaboModel = Backbone.Model.extend(
{
	defaults:
	{
		clientName		: 	"",
		address			: 	"",
		added_By		: 	"",
	},
	initialize: function()
	{
		console.log('ClientLaboModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("ClientLaboModel we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('ClientLaboModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.saveClientLaboListURL
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
var genCompID = Backbone.Model.extend(
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
    urlRoot: ApplicationConstants.generateNewComponentID
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
BackboneData.Models.ComponentCreateModel = Backbone.Model.extend(
{
	defaults:
	{
		orderIDReference	: 	"",
		componentID 		:   "",
		componentStatus		: 	"",
		totalQuantity		:	"",
		totalAmount			:	""
	},
	initialize: function()
	{
		console.log('ComponentCreateModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("ComponentCreateModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('ComponentCreateModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.createcomponent
});
BackboneData.Models.ComponentDescriptionModel = Backbone.Model.extend(
{
	defaults:
	{
		  componentID				: 	"",
		  customerReference 		:   "",
		  productSpecification		: 	"",
		  productType 				:   "",
	      directDeliverytoCustomer  :	"",
	      unitSellingPrice 			: 	"",
	      laboAdress 				: 	"",
	      customer 					: 	"",
	      comment_componentDescription : "",
    },
    initialize: function()
	{
		console.log('ComponentDescriptionModel has been initialized');
		this.on("invalid", function(model, error)
		{
		   console.log("ComponentDescriptionModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('ComponentDescriptionModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.saveComponentDescription
});
BackboneData.Models.PlanningCustomerDeliveryModel = Backbone.Model.extend(
{
	defaults:
	{
		  componentID	: 	"",
		  quantity		: 	"",
		  dateOf 		:   "",
		  comment  		:	"",
    },
    initialize: function()
	{
		console.log('PlanningCustomerDeliveryModel has been initialized');
		this.on("invalid", function(model, error)
		{
		   console.log("PlanningCustomerDeliveryModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('PlanningCustomerDeliveryModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.savePlanningandCustomerDelivery
});
BackboneData.Models.TechnicalDefinitionModel = Backbone.Model.extend(
{
	defaults:
	{
		componentID			: 	"",
		projectManager 		:   "",
		rAndDManager		: 	"",
		projectPhase 		:   "",
		valeoReference  	:	"",
		technology 			: 	"",
		wbsCode 			:   "",
		beCode 				:   "",
		mipPWACode 			:   "",
		validationProcess 	:   "",
		planofLabTests 		:	"",
		nomenClature 		:   "",
		plan 				:   "",
		comment				:	""
    },
	initialize: function()
	{
		console.log('TechnicalDefinitionModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("TechnicalDefinitionModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('TechnicalDefinitionModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.createorupdateuser
});

BackboneData.Models.PlanOfLabTestsModel = Backbone.Model.extend(
{
	defaults:
	{
		componentID					: 	"",
		technicalDefinitionID 		:   "",
		quantity					: 	"",
		testsType 					:   "",
		testRequestNumber  			:	"",
		atpDateOfDelivery 			: 	""
	},
	initialize: function()
	{
		console.log('planOfLabTestsModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("planOfLabTestsModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('planOfLabTestsModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.createorupdateuser
});

BackboneData.Models.ProcessValidationModel = Backbone.Model.extend(
{
	defaults:
	{
		componentID					: 	"",
		processDeliverable 			:   "",
		yesIspecified				: 	"",
		comment 					:   ""
	},
	initialize: function()
	{
		console.log('ProcessValidationModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("ProcessValidationModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('ProcessValidationModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.createorupdateuser
});
BackboneData.Models.EstimatingCostAndDelayModel = Backbone.Model.extend(
{
	defaults:
	{
		componentID						: 	"",
		supportedBy 					:   "",
		listOfPrototypists				: 	"",
		estimatedAmountOfWorkshop 		:   "",
		estimatedUnitInternalCost		: 	"",
		estimatedUnitExternalCost 		:   "",
		estimatedTotalCostComponents	: 	"",
		hourlyRate 						:   "",
		fixedCosts						: 	"",
		estimatedTimeUnitOfComponents 	:   "",
		estimatedTimeTotalOfComponents	: 	"",
		totalCosts 						:   ""
	},
	initialize: function()
	{
		console.log('EstimatingCostAndDelayModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("EstimatingCostAndDelayModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('EstimatingCostAndDelayModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.createorupdateuser
});
BackboneData.Models.ForecastPlanningOfWorkshopModel = Backbone.Model.extend(
{
	defaults:
	{
		componentID						: 	"",
		estimatingCostandDelayID 		:   "",
		Quantity						: 	"",
		Dateof 							:   "",
		Comment							: 	""
	},
	initialize: function()
	{
		console.log('EstimatingCostAndDelayModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("EstimatingCostAndDelayModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('EstimatingCostAndDelayModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.createorupdateuser
});
BackboneData.Models.ReminderModel = Backbone.Model.extend(
{
	defaults:
	{
		componentID						: 	"",
		estimatingCostandDelayID 		:   "",
		Quantity						: 	"",
		Dateof 							:   ""
	},
	initialize: function()
	{
		console.log('ReminderModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("ReminderModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('ReminderModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.createorupdateuser
});
BackboneData.Models.QualityDeliverableModel = Backbone.Model.extend(
{
	defaults:
	{
		componentID						: 	"",
		qualityDeliverable 				:   "",
		yesISpecified					: 	"",
		comment 						:   ""
	},
	initialize: function()
	{
		console.log('QualityDeliverableModel has been initialized');
		this.on("invalid", function(model, error)
		{
			console.log("QualityDeliverableModel, we have a problem: " + error)
		});
	},
	constructor: function(attributes, options)
	{
		console.log('QualityDeliverableModel constructor had been called');
		Backbone.Model.apply(this, arguments);
	},
	urlRoot: ApplicationConstants.createorupdateuser
});