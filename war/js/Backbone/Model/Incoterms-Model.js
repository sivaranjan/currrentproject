BackboneData.Models.IncotermsModel = Backbone.Model.extend({
    defaults: {

        incoterms: "",
        infos: "",
        added_By: "",

    },
    initialize: function() {
        console.log('Incoterms has been initialized');
        this.on("invalid", function(model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('Incoterms\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {
        //        if (!attr.incoterms) {
        //            return "Invalid BookName supplied."
        //        }
    },
    urlRoot: 'http://localhost:8888/incoterm/create'
});
