/**
 * 
 */
var CustomerDetails = Backbone.Model.extend({
    defaults: {
        order_Status: "",
        total_Order_Amount: "",
        customer_Name: "",
        customer_Code: "",
        branch_Code: "",
        provider_Code: "",
        final_Delivery_Address: "",
        additional_Address: "",
        plateform: "",
        incoterms: "",
        place: "",
        allocation_of_turnover: "",
        customer_Receiver_Telephone: "",
        customer_Receiver_Name: "",
        site_Address: "",
        customerOrderAttachment: "",
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
        if (!attr.name) {
            return "Invalid BookName supplied."
        }
    },
    urlRoot: 'http://localhost:8888/example/create'
});
