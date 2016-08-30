BackboneData.Views.WelcomeView = Backbone.View.extend({
	el:'#welcome-section',
	render:function()
	{
		var ref = this;
		var welcomeHTML	= "";
		if(window.language =="EN")
		{
			welcomeHTML = welcome.manager.WelcomeDetailView({'paramValue':window.welcome_englishLabelList});
		}	
		else
		{
			welcomeHTML =  welcome.manager.WelcomeDetailView({'paramValue':window.welcome_frenchLabelList});
		}	
		ref.$el.html(welcomeHTML);
		$('#createorder-section,#navfixed-wrapper,#component-section,#admin-section,#orderlist-section').addClass('hide');
        $('#welcome-section').removeClass('hide');
//        $('#bs-example-navbar-collapse-1 ul li').addClass('active');
        $('#createorder-tab').removeClass('active');
	}
});