BackboneData.Views.ComponentDetailView = Backbone.View.extend({
	el:'#component-section',
	render:function()
	{
		var ref = this;
		var componentDetailHTML	="";
		if(window.language=="EN")
		{
			componentDetailHTML	 = component.manager.ComponentDetailView({'paramValue':window.actorDetails_englishLabelList});
		}	
		else
		{
			componentDetailHTML	 =  component.manager.ComponentDetailView({'paramValue':window.actorDetails_frenchLabelList});
		}	
		ref.$el.html(componentDetailHTML);
		$('#component-section').removeClass('hide');
    	$('#welcome-section,#createorder-section,#admin-section').addClass('hide');
	}
});