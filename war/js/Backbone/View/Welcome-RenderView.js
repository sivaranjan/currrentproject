BackboneData.Views.WelcomeView = Backbone.View.extend({
    el: '#welcome-section',
    render: function() {
        var ref = this;
        var welcomeHTML = "";
        if (window.language == "EN") {
            welcomeHTML = welcome.manager.WelcomeDetailView({ 'paramValue': window.welcome_englishLabelList });
        } else {
            welcomeHTML = welcome.manager.WelcomeDetailView({ 'paramValue': window.welcome_frenchLabelList });
        }
        ref.$el.html(welcomeHTML);
    },
	initialize: function() {
	    _.bindAll(this, 'cleanup');
	    var _thisView = this;
	    _thisView.render();
	},
	cleanup: function() {
	    this.undelegateEvents();
	    $(this.el).empty();
	}
});
