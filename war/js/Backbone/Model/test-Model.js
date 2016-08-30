var Book = Backbone.Model.extend({
    defaults: {
        name: ""
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
       /* if (!attr.name) {
            return "Invalid BookName supplied."
        }*/
    },
    urlRoot: 'http://localhost:8888/idgenerator/create'
});
