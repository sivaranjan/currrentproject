"use strict";
var Router = Backbone.Router.extend({
    routes: {
    	'/*': 'home',
        'home': 'home',
        'createorder': 'order',
        'adminsetting': 'admin',
        'componentdetails': 'component',
        'orderlisting': 'orderlist'
    }
});
var routerTHS = new Router();
routerTHS.on('route:home', function(action) {

//    var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
//    globalNavbarHTML.render();

    var welcomeSectionHTML = new BackboneData.Views.WelcomeView();
    welcomeSectionHTML.render();
});
routerTHS.on('route:order', function(action) {
	var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
	  globalNavbarHTML.render();
	var navBtnSectionHTML = new BackboneData.Views.NavBtnSectionview();
	navBtnSectionHTML.render();
    var orderDetailSectionHTML = new BackboneData.Views.OrderDetailView();

});
routerTHS.on('route:admin', function(action) {
	 var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
	  globalNavbarHTML.render();
	var navBtnSectionHTML = new BackboneData.Views.NavBtnSectionview();
	navBtnSectionHTML.render();
    var adminSettingsHTMl = new BackboneData.Views.AdminDetailView();
    //adminSettingsHTMl.render();

});
routerTHS.on('route:component', function(action) {
	 var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
	  globalNavbarHTML.render();
	var navBtnSectionHTML = new BackboneData.Views.NavBtnSectionview();
	navBtnSectionHTML.render();
    var componentDetailHTMl = new BackboneData.Views.ComponentDetailView();
    componentDetailHTMl.render();

});
routerTHS.on('route:orderlist', function(action) {
	var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
	  globalNavbarHTML.render();
	var orderListHTMl = new BackboneData.Views.OrderListview();
});
if (Backbone.history != undefined && Backbone.history != null && Backbone.history != '') {
    console.log('backnonhistory has  started!!!');
    Backbone.history.start();
} else {
    console.log('backnonhistory has already started!!!');
}
