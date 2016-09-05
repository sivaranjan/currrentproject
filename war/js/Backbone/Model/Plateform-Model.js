BackboneData.Models.PlateformDetailsModel = Backbone.Model.extend({
    defaults: {
        plateform: "",
        added_By: "",
    },
    initialize: function() {
        console.log('PlateformDetailsModel has been initialized');
        this.on("invalid", function(model, error) {
            console.log("PlateformDetailsModel we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('PlateformDetailsModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {
        if (!attr.plateform) {
            return "Invalid BookName supplied."
        }
    },
    urlRoot: 'http://localhost:8888/plateform/create'
});
