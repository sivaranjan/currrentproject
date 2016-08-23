BackboneData.Views.ComponentGridDetailView = Backbone.View.extend({
	el:'#componentgdetailview',
	render:function()
	{
		var ref = this;
		var componentGridDetailHTML	="";
		if(window.language=="EN")
		{
			componentGridDetailHTML	 = component.manager.ComponentGridView({'paramValue':window.component_englishLabelList});
		}	
		else
		{
			componentGridDetailHTML	 =  component.manager.ComponentGridView({'paramValue':window.component_frenchLabelList});
		}
		ref.$el.html(componentGridDetailHTML);
	}
});