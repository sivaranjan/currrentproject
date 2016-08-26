var CustomerModel = Backbone.Model.extend({
    defaults: {
    	order_Order_ID:"",
    	no_customerOrder:"",
    	customerOrderAttachment:"",
    	customer_Name:"",
    	customer_Code:"",
    	branch_Code:"",
    	provider_Code:"",
    	final_Delivery_Address:"",
    	additional_Address:"",
    	site_Address:"",
    	plateform:"",
    	incoterms:"",
    	place:"",
    	customer_Receiver_Name:"",
    	customer_Receiver_Telephone:"",
    	allocation_of_turnover:""
    },
    initialize: function() {
        console.log('Book has been initialized');
        this.on("invalid", function(model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('Book\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {
        if (!attr.no_customerOrder) {
            return "Invalid BookName supplied."
        }
    },
    urlRoot: 'http://is-office-2016.appspot.com/customer/create'
});
