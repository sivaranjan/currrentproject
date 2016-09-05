BackboneData.Views.NavBtnSectionview = Backbone.View.extend(
{
    el: '#navbar-2',
    render: function()
    {
        var ref = this;
        var NavBtnSectionHTML = "";
        if (window.language == "EN")
        {
            NavBtnSectionHTML = navigation.manager.NavBtnViewDetail(
            {
                'paramValue': window.navBtnSection_englishLabelList,
                'visibleconfig': window.navVisibilitySettings
            });
        }
        else
        {
            NavBtnSectionHTML = navigation.manager.NavBtnViewDetail(
            {
                'paramValue': window.navBtnSection_frenchLabelList,
                'visibleconfig': window.navVisibilitySettings
            });
        }
        ref.$el.html(NavBtnSectionHTML);
        $('#navfixed-wrapper').removeClass('hide');
    },
    initialize: function()
    {
        var _thisView = this;
        _thisView.render();
    },
});