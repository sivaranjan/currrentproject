BackboneData.Collections.IdCollection = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchIDList',

    initialize: function() {
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchOrderDependencies = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchorderDependencies',

    initialize: function() {
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchActorsList = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchActorsList',

    initialize: function() {
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchIncotermsList = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchIncotermsList',

    initialize: function() {
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchCustomersList = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchCustomersList',

    initialize: function() {
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchPlatformsList = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchPlateformList',

    initialize: function() {
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchPlacesList = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchPlacesList',

    initialize: function() {
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchSitesList = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchSitesList',

    initialize: function() {
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});

BackboneData.Collections.fetchCustomerDetailsbyName = Backbone.Collection.extend({

    //Specify REST URL
    url: 'http://localhost:8888/fetchController/fetchCustomerDetailsbyName/' + localStorage.getItem("customerNameSelected"),

    initialize: function() {
        var self = this;
        console.log(self);
        console.log("==================");
        this.bind("reset", function(model, options) {
            console.log("Inside event");
            console.log(model);

        });
    }
});
