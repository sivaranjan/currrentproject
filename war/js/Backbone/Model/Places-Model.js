/**
 * 
 */
var PlacesDetails=Backbone.Model.extend({
    defaults: {
    	
    	places:"",
    	added_By:"",
        
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
        if (!attr.places) {
            return "Invalid BookName supplied."
        }
    },
    urlRoot: 'http://is-office-2016.appspot.com/place/create'
});
