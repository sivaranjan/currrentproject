BackboneData.Models.PlacesDetailsModel = Backbone.Model.extend({
    defaults: {

        places: "",
        added_By: "",

    },
    initialize: function() {
        console.log('PlacesDetailsModel has been initialized');
        this.on("invalid", function(model, error) {
            console.log("PlacesDetailsModel we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('PlacesDetailsModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {
        //        if (!attr.places) {
        //            return "Invalid place supplied."
        //        }
    },
    urlRoot: 'http://localhost:8888/place/create'
});
