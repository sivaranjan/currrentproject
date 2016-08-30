BackboneData.Models.OrderDetailModel=Backbone.Model.extend({
    defaults: {
    	site_Workshop_Prototype:"",
        geoSite:"",
        no_prototype_order:"",
        proto_Type:"",
        pcc:"",
        open_Order:"",
        frittage:"",
        e52:"",
        intraLE:"",
        type_of_the_Prototype_Order:"",
        date_of_the_Order:"",
        order_Status:"",
        total_Order_Amount:"",
    },
    initialize: function() {
        console.log('Book has been initialized');
        this.on("invalid", function(model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    getCustomUrl: function (method) {
        switch (method) {
            case 'read':
                return 'http://localhost:8888/fetch/orderDependencies';
                break;
            case 'create':
            	return 'http://localhost:8888/order/create';
                break;
            case 'update':
            	return 'http://localhost:8888/order/update';
                break;
            case 'delete':
            	return 'http://localhost:8888/order/delete';
                break;
        }
    },
    sync: function (method, model, options) {
        options || (options = {});
        options.url = this.getCustomUrl(method.toLowerCase());
        
        // Lets notify backbone to use our URLs and do follow default course
        return Backbone.sync.apply(this, arguments);
    },
    constructor: function(attributes, options) {
        console.log('Book\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {
        if (!attr.geoSite) {
            return "Invalid BookName supplied."
        }
    }
});
