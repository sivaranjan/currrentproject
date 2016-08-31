"use strict";
window.language || (window.language = {});
var lang = $(".language-dropdown:first-child").val();
if (lang == "EN") {
    window.language = "EN";
} else {
    window.language = "FR";
}
window.location.href = "/#home";
$('.language li a').click(function() {
    var languageChanged = $.trim($(this).text());
    if (window.language != languageChanged) {
        bootbox.confirm("Any unsaved changes will be lost. Are you sure you want to change the language?", function(result) {
            if (result) {
                console.log("ste ::" + languageChanged);
                if (languageChanged == "EN") {
                    window.language = "EN";
                    $(".language-dropdown:first-child").html('<img src="../statics/images/en.png"> EN <span class="caret"></span>');
                    $(".language-dropdown:first-child").val("EN");
                } else {
                    $(".language-dropdown:first-child").html('<img src="../statics/images/fr.png"> FR <span class="caret"></span>');
                    $(".language-dropdown:first-child").val("FR");
                    window.language = "FR";
                }
                if (document.URL.split("#")[1] == "home") {
                    var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
                    globalNavbarHTML.render();

                    var welcomeSectionHTML = new BackboneData.Views.WelcomeView();
                    welcomeSectionHTML.render();
                } else if (document.URL.split("#")[1] == "createorder") {
                    var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
                    globalNavbarHTML.render();
                    var navBtnSectionHTML = new BackboneData.Views.NavBtnSectionview();
                    var orderDetailModel = new BackboneData.Models.ActorListDetailsModel();
                    var orderDetailSectionHTML = new BackboneData.Views.OrderDetailView({ model: orderDetailModel });
                } else if (document.URL.split('#')[1] == "componentdetails") {
                    var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
                    globalNavbarHTML.render();
                    var navBtnSectionHTML = new BackboneData.Views.NavBtnSectionview();
                    var componentDetailHTMl = new BackboneData.Views.ComponentDetailView();
                    componentDetailHTMl.render();
                } else if (document.URL.split('#')[1] == "adminsetting") {
                    var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
                    globalNavbarHTML.render();
                    var adminSettingHTML = new BackboneData.Views.AdminDetailView();
                    adminSettingHTML.render();
                } else {
                    var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
                    globalNavbarHTML.render();

                    var welcomeSectionHTML = new BackboneData.Views.WelcomeView();
                    welcomeSectionHTML.render();
                }
            }

        });
    }

    $(document).on("keyup", ".form-control", function(e) {
        $(this).removeClass('error');
    });

});
