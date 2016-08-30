var IdCollection = Backbone.Collection.extend({
				
	//Specify REST URL
	url: 'http://localhost:8888/fetchController/fetchIDList',
	
	initialize: function () {
		this.bind("reset", function (model, options) {
			console.log("Inside event");
			console.log(model);
			
		});
	}	
});

var fetchOrderDependencies = Backbone.Collection.extend({
	
	//Specify REST URL
	url: 'http://localhost:8888/fetchController/fetchorderDependencies',
	
	initialize: function () {
		this.bind("reset", function (model, options) {
			console.log("Inside event");
			console.log(model);
			
		});
	}	
});

var fetchActorsList = Backbone.Collection.extend({
	
	//Specify REST URL
	url: 'http://localhost:8888/fetchController/fetchActorsList',
	
	initialize: function () {
		this.bind("reset", function (model, options) {
			console.log("Inside event");
			console.log(model);
			
		});
	}	
});