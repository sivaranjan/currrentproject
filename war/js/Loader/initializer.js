"use strict";
window.language || (window.language = {});
var lang = $('#lang').text().trim();

if (lang == "EN") {
    window.language = "EN";
} else {
    window.language = "FR";
}
window.location.href = "/#home";
$('.languageli').click(function() {
	
	var currentLang=$('#lang').text().trim();
	if(currentLang == "EN")
	{
	    window.language = "EN";
	}
	else
	{
	    window.language = "FR";
	}
	if(document.URL.split("#")[1]=="home")
	{
		 var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
		    globalNavbarHTML.render();

		    var welcomeSectionHTML = new BackboneData.Views.WelcomeView();
		    welcomeSectionHTML.render();
	}
	else if(document.URL.split("#")[1]=="createorder")
	{
		var navBtnSectionHTML 	    = new BackboneData.Views.NavBtnSectionview();
		var orderDetailModel  		= new BackboneData.Models.ActorListDetailsModel();
	    var orderDetailSectionHTML  = new BackboneData.Views.OrderDetailView();	
	    navBtnSectionHTML.render();
	    orderDetailSectionHTML.render();
	}
	else
	{
		 var globalNavbarHTML = new BackboneData.Views.GlobalNavbarview();
		    globalNavbarHTML.render();

		    var welcomeSectionHTML = new BackboneData.Views.WelcomeView();
		    welcomeSectionHTML.render();
	}	
	
	/*var orderDetailHTML = "";
    if (window.language == "EN") {
           orderDetailHTML = order.manager.OrderDetailView({ 'paramValue': window.orderDetails_englishLabelList });
    } 
    else {
            orderDetailHTML = order.manager.OrderDetailView({ 'paramValue': window.orderDetails_frenchLabelList});
    }
    $('#createorder-section').removeClass('hide');
    $('#welcome-section,#admin-section,#component-section,#orderlist-section').addClass('hide');
    $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
    $('#createorder-tab').addClass('active');
    $('#orderdetailview').html(orderDetailHTML);
    $('#example').DataTable({
        dom: 'Bfrtip',
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
        }],
        buttons: [{
            text: '<i class="fa fa-refresh" aria-hidden="true"></i> Refresh',
            className: 'btn btn-default btn-sm refreshbtn',
            action: function() {

            }
        }, {
            text: '<i class="fa fa-plus" aria-hidden="true"></i> New component',
            className: 'btn btn-default btn-sm newcompbtn',
            action: function() {
                window.location.href = "/#componentdetails";
            }
        }]
    });

    $('.refreshbtn,.newcompbtn').removeClass('dt-button');
    $('.selectpicker').selectpicker();
    $('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
    $('.bs-searchbox input').addClass('input-sm');*/

});
