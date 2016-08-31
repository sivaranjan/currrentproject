BackboneData.Models.PlacesDetailsModel = Backbone.Model.extend({
    defaults: {

        places: "",
        added_By: "",

    },
    initialize: function() {
        console.log('place has been initialized');
        this.on("invalid", function(model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('place\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {
        //        if (!attr.places) {
        //            return "Invalid place supplied."
        //        }
    },
    urlRoot: 'http://localhost:8888/place/create'
});
