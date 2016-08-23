
BackboneData.Views.NavBtnSectionview = Backbone.View.extend({
	el:'#navbar-2',
	render:function()
	{
		var ref = this;
		var NavBtnSectionHTML	= "";
		if(window.language =="EN")
		{
			NavBtnSectionHTML = navigation.manager.NavBtnViewDetail({'paramValue':window.navBtnSection_englishLabelList});
		}	
		else
		{
			NavBtnSectionHTML =  navigation.manager.NavBtnViewDetail({'paramValue':window.navBtnSection_frenchLabelList});
		}	
		ref.$el.html(NavBtnSectionHTML);
		$('#navfixed-wrapper').removeClass('hide');
	}
});