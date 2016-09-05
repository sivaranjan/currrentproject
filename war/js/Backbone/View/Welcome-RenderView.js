BackboneData.Views.WelcomeView = Backbone.View.extend(
{
    el: '#welcome-section',
    render: function()
    {
        var ref = this;
        var welcomeHTML = "";
        if (window.language == "EN")
        {
            welcomeHTML = welcome.manager.WelcomeDetailView(
            {
                'paramValue': window.welcome_englishLabelList
            });
        }
        else
        {
            welcomeHTML = welcome.manager.WelcomeDetailView(
            {
                'paramValue': window.welcome_frenchLabelList
            });
        }
        ref.$el.html(welcomeHTML);
    },
    initialize: function()
    {
        var _thisView = this;
        _thisView.render();
    }
});