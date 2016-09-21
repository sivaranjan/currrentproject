BackboneData.Views.ComponentListView = Backbone.View.extend(
{
        el: '#componentlist-section',
        render: function()
        {
            var ref					 		= 	this;
            var componentListDetailHTML  	= 	"";
            componentListDetailHTML 		= 	componentlist.manager.ComponentListDetailView();
            ref.$el.html(componentListDetailHTML);
        },
        initialize: function(name)
        {
            var _thisView 	= 	this;
            _thisView.render();
        }
});