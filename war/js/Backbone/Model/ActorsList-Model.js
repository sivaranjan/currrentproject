BackboneData.Models.ActorListDetailsModel = Backbone.Model.extend({
    defaults: {
        actorType: "",
        actorEmail: "",
        site: "",
        addedBy: "",
    },
    initialize: function() {
        console.log('ActorListDetailsModel has been initialized');
        this.on("invalid", function(model, error) {
            console.log("ActorListDetailsModel, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('ActorListDetailsModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {},
    urlRoot: 'http://localhost:8888/actorsList/create'
});
