"use strict";
var Router = Backbone.Router.extend({
    routes: {
        'home': 'home',
        'createorder': 'order',
        'adminsetting': 'admin',
        'componentdetails': 'component',
        'orderlisting': 'orderlist'
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
    var orderDetailModel  		= new BackboneData.Models.ActorListDetailsModel();
    var orderDetailSectionHTML  = new BackboneData.Views.OrderDetailView({model: orderDetailModel});
    var navBtnSectionHTML 	    = new BackboneData.Views.NavBtnSectionview();
    
});
routerTHS.on('route:admin', function(action) {
    var adminSettingsHTMl = new BackboneData.Views.AdminDetailView();
    adminSettingsHTMl.render();

});
routerTHS.on('route:component', function(action) {
	var navBtnSectionHTML = new BackboneData.Views.NavBtnSectionview();
    navBtnSectionHTML.render();
    
    var componentDetailHTMl = new BackboneData.Views.ComponentDetailView();
    componentDetailHTMl.render();

});
routerTHS.on('route:orderlist', function(action) {
	$('#orderlist-section').removeClass('hide');
	$('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#admin-section').addClass('hide');
	$('#bs-example-navbar-collapse-1 ul li').removeClass('active');
	$('#orderlist-tab').addClass('active');
	$('#orderlist-table').DataTable({
        responsive: {
            details: {
                type: 'column',
                target: -1
            }
        },
        columnDefs: [{
            className: 'control',
            orderable: false,
            targets: -1
        }]
    });

});
if (Backbone.history != undefined && Backbone.history != null && Backbone.history != '') {
    console.log('backnonhistory has  started!!!');
    Backbone.history.start();
} else {
    console.log('backnonhistory has already started!!!');
}
