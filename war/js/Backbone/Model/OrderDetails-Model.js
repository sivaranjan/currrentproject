/**
 * 
 */
var OrderDetails=Backbone.Model.extend({
    defaults: {
        geoSite:"",
        proto_Type:"",
        pcc:"",
        open_Order:"",
        frittage:"",
        e52:"",
        intraLE:"",
        type_of_the_Prototype_Order:"",
        date_of_the_Order:"",
        site_Workshop_Prototype:"",
        order_Status:"",
        total_Order_Amount:"",
        no_prototype_order:"",
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
        if (!attr.geoSite) {
            return "Invalid BookName supplied."
        }
    },
    urlRoot: 'http://localhost:8888/order/create'
});
