var ActorDetails = Backbone.Model.extend({
    defaults: {
        requester: "",
        mep_Study: "",
        quality: "",
        proto_Workshop: "",
        control_Management: "",
        fo_Trade: "",
        adv: "",
        project_Manager: "",
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
        if (!attr.requester) {
            return "Invalid BookName supplied."
        }
    },
    urlRoot: 'http://localhost:8888/actor/create'
});
