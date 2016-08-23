BackboneData.Views.ActorDetailview = Backbone.View.extend({
    el: '#actordetailview',
    render: function() {
        var ref = this;
        var actorDetailHTML = "";
        if (window.language == "EN") {
            actorDetailHTML = actor.manager.ActorDetailView({ 'paramValue': window.actorDetails_englishLabelList });
        } else {
            actorDetailHTML = actor.manager.ActorDetailView({ 'paramValue': window.actorDetails_frenchLabelList });
        }
        ref.$el.html(actorDetailHTML);
    },
    events: {
        'click #saveorderbtn': 'validateactordetail',
        'click #backactorbtn': 'backtocustomerdetail',
    },
    validateactordetail: function() {
        alert("you clicked it dude");
    },
    backtocustomerdetail: function() {
    	$("html, body").animate({ scrollTop: 595 }, "slow");
    }
});
