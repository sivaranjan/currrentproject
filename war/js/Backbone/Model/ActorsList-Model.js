BackboneData.Models.ActorListDetailsModel = Backbone.Model.extend({
    defaults: {
    	actorType:"",
    	actorEmail:"",
    	site:"",
    	addedBy:"",
    },
    initialize: function() {
        console.log('actorlist has been initialized');
        this.on("invalid", function(model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    getCustomUrl: function (method) {
        switch (method) {
            case 'read':
                return 'http://localhost:8888/actorsList/wholelist';
                break;
            case 'create':
            	return 'http://localhost:8888/actorsList/create';
                break;
            case 'update':
            	return 'http://localhost:8888/actorsList/test1';
                break;
            case 'delete':
            	return 'http://localhost:8888/actorsList/test2';
                break;
        }
    },
    sync: function (method, model, options) {
        options || (options = {});
        options.url = this.getCustomUrl(method.toLowerCase());
        
        // Lets notify backbone to use our URLs and do follow default course
        return Backbone.sync.apply(this, arguments);
    },
    constructor: function(attributes, options) {
        console.log('actorlist\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {
       /* if (!attr.name) 
        {
            return "Invalid BookName supplied."
        }*/
    }
});