/**
 * 
 */
var IncotermsDetails=Backbone.Model.extend({
    defaults: {
    	
    	incoterms:"",
    	infos:"",
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
        if (!attr.incoterms) {
            return "Invalid BookName supplied."
        }
    },
    urlRoot: 'http://is-office-2016.appspot.com/incoterm/create'
});
