"use strict";
var Router = Backbone.Router.extend({
    routes: {
        'home': 'home',
        'createorder': 'order',
        'adminsetting': 'admin',
        'componentdetails': 'component'
    }
});
var routerTHS = new Router();
routerTHS.on('route:home', function(action) {

    var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
    globalNavbarHTML.render();

    var welcomeSectionHTML = new BackboneData.Views.WelcomeView();
    welcomeSectionHTML.render();
});
routerTHS.on('route:order', function(action) {
    var navBtnSectionHTML = new BackboneData.Views.NavBtnSectionview();
    navBtnSectionHTML.render();

    var orderDetailSectionHTML = new BackboneData.Views.OrderDetailView();
    orderDetailSectionHTML.render();

    var customerDetailSectionHTML = new BackboneData.Views.CustomerDetailView();
    customerDetailSectionHTML.render();

    var actorDetailSectionHTML = new BackboneData.Views.ActorDetailview();
    actorDetailSectionHTML.render();

    var componentGridDetailSectionHTML = new BackboneData.Views.ComponentGridDetailView();
    componentGridDetailSectionHTML.render();
});
routerTHS.on('route:admin', function(action) {
    var adminSettingsHTMl = new BackboneData.Views.AdminDetailView();
    adminSettingsHTMl.render();

});
routerTHS.on('route:component', function(action) {
    var componentDetailHTMl = new BackboneData.Views.ComponentDetailView();
    componentDetailHTMl.render();

});
if (Backbone.history != undefined && Backbone.history != null && Backbone.history != '') {
    console.log('backnonhistory has  started!!!');
    Backbone.history.start();
} else {
    console.log('backnonhistory has already started!!!');
}
