BackboneData.Models.SitesListModel = Backbone.Model.extend({
    defaults: {
        site_Name: "",
        address: "",
        added_By: "",
    },
    initialize: function() {
        console.log('sitelist has been initialized');
        this.on("invalid", function(model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('sitelist\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {
        if (!attr.site_Name) {
            return "Invalid sitelist supplied."
        }
    },
    urlRoot: 'http://localhost:8888/siteslist/create'
});
