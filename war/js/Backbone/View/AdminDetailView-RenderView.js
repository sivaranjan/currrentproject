BackboneData.Views.AdminDetailView = Backbone.View.extend({
    el: '#admin-section',
    render: function() {
        var ref = this;
        var adminDetailHTML = "";
        adminDetailHTML = admin.manager.AdminDetailView();
        ref.$el.html(adminDetailHTML);
        $(document).on("keyup", ".form-control", function(e) 
   		     {
        		$(this).removeClass('error');
   		      });
        $('.selectpicker').selectpicker();
        $('.selectpicker').on('changed.bs.select', function (e) {
        	$(this).selectpicker('setStyle','error','remove');
        	});
        $('#admin-section').removeClass('hide');
        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#orderlist-section').addClass('hide');
        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
        $('#adminsetting-tab').addClass('active');
        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        	  console.log($(event.target).text()); // newly activated tab
        	  var currentSelectedTab= $(event.target).text();
        	  var self = new BackboneData.Views.AdminDetailView();
        	  switch(currentSelectedTab) 
				{
					case "MEP Study":
											self.buildActorsTable("MEP Study");
								        	break;
					case "Quality":
											self.buildActorsTable("Quality");
								        	break;
					case "Proto workshop":
											self.buildActorsTable("Proto workshop");
								        	break;
					case "Control management":
											self.buildActorsTable("Control management");
								        	break;
					case "FO Trade":
											self.buildActorsTable("FO Trade");
											break;
					case "ADV":
											self.buildActorsTable("ADV");
								        	break;
					case "Project Manager":
											self.buildActorsTable("Project Manager");
								        	break;
				}
        	});
        
        
        $('#incoterms-table').DataTable({
            dom: 'Bfrtip',
            columnDefs: [
                         {
                             targets: [ 0 ],
                             orderable: false
                         },
                         {
                             targets: [ 3 ],
                             orderable: false
                         },
                         {
                             targets: [ 4 ],
                             orderable: false
                         }
                         ],
            "order": [[ 1, 'asc' ]],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Incoterms',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#incoterms-modal').modal('show');
                }
            }]
        });
        
        $('#clients-table').DataTable({
            dom: 'Bfrtip',
            columnDefs: [
                         {
                             targets: [ 0 ],
                             orderable: false
                         },
                         {
                             targets: [ 6 ],
                             orderable: false
                         },
                         {
                             targets: [ 7 ],
                             orderable: false
                         }
                         ],
            "order": [[ 1, 'asc' ]],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> New',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#clients-modal').modal('show');
                }
            }]
        });
        
        $('#platformssub-table').DataTable({
            dom: 'Bfrtip',
            columnDefs: [
                         {
                             targets: [ 0 ],
                             orderable: false
                         },
                         {
                             targets: [ 2 ],
                             orderable: false
                         },
                         {
                             targets: [ 3 ],
                             orderable: false
                         }
                         ],
            "order": [[ 1, 'asc' ]],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> New',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#platform-modal').modal('show');
                }
            }]
        });
        
        $('#locationsub-table').DataTable({
            dom: 'Bfrtip',
            columnDefs: [
                         {
                             targets: [ 0 ],
                             orderable: false
                         },
                         {
                             targets: [ 2 ],
                             orderable: false
                         },
                         {
                             targets: [ 3 ],
                             orderable: false
                         }
                         ],
            "order": [[ 1, 'asc' ]],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> New',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#location-modal').modal('show');
                }
            }]
        });
        
        $('#sitesub-table').DataTable({
            dom: 'Bfrtip',
            columnDefs: [
                         {
                             targets: [ 0 ],
                             orderable: false
                         },
                         {
                             targets: [ 3 ],
                             orderable: false
                         },
                         {
                             targets: [ 4 ],
                             orderable: false
                         }
                         ],
            "order": [[ 1, 'asc' ]],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> New',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#site-modal').modal('show');
                }
            }]
        });
        
        $('.dt-buttons a.btn').removeClass('dt-button');
    },
    events: {
    	"click #save_actor": "validateSaveOrderAction",
        "click #save_incoterms": "validateIncoterms",
        "click #save_customer": "validateCustomers",
        "click #save_plateform": "validatePlatforms",
        "click #save_places": "validateLocations",
        "click #save_site": "validateSites",
        "click #showtableslist": "showTablesList",
        
        /*sivaranjan changes*/
        "click #configactor-btn": "viewActorList",
        "click #incoterms-btn": "viewIncotermsList",
        "click #clients-btn": "viewClientsList",
        "click #platforms-btn": "viewPlatformList",
        "click #locations-btn": "viewLocationList",
        "click #sites-btn": "viewSiteList",

    },
    showTablesList : function(){
    	$('.configset,#config-pane article').removeClass('hide');
    	$('#configbreadcrumb,#actor-article').addClass('hide');
    },
    validateSaveOrderAction : function() {
    	 if (validate.getInstance().formordiv('actor_modal_body')) {
             console.log("trfdsf");
             this.saveActor();
         } else {
             $('#actor_modal_body').find('.selectpicker').each(function() {
                 if ($(this).hasClass('error')) {
                 	$(this).selectpicker('setStyle','error','add');
                 }
             })
         }
    },
    validateIncoterms : function() {
   	 if (validate.getInstance().formordiv('incoterms_modal_body')) {
            console.log("trfdsf");
            this.saveIncoterms();
        } else {
            $('#incoterms_modal_body').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) {
                	$(this).selectpicker('setStyle','error','add');
                }
            })
        }
   },
   validateCustomers : function() {
	   if (validate.getInstance().formordiv('customers_modal_body')) {
           console.log("trfdsf");
           this.saveCustomer();
       } else {
           $('#customers_modal_body').find('.selectpicker').each(function() {
               if ($(this).hasClass('error')) {
               	$(this).selectpicker('setStyle','error','add');
               }
           })
       }
   },
   validatePlatforms : function() {
	   if (validate.getInstance().formordiv('platform_modal_body')) {
           console.log("trfdsf");
           this.savePlateform();
       } else {
           $('#platform_modal_body').find('.selectpicker').each(function() {
               if ($(this).hasClass('error')) {
               	$(this).selectpicker('setStyle','error','add');
               }
           })
       }
   },
   validateLocations : function() {
	   if (validate.getInstance().formordiv('places_modal_body')) {
           console.log("trfdsf");
           this.savePlace();
       } else {
           $('#places_modal_body').find('.selectpicker').each(function() {
               if ($(this).hasClass('error')) {
               	$(this).selectpicker('setStyle','error','add');
               }
           })
       }
   },
   validateSites : function() {
	   if (validate.getInstance().formordiv('sites_modal_body')) {
           console.log("trfdsf");
           this.saveSite();
       } else {
           $('#sites_modal_body').find('.selectpicker').each(function() {
               if ($(this).hasClass('error')) {
               	$(this).selectpicker('setStyle','error','add');
               }
           })
       }
   },
    saveActor: function() {
    	var actor_Type = $('ul#addActorUL').find('li.active').data('attr');
        var actor_Email = $("#actor_email").val();
        var actorSite = $("#actor_site").val();
        $('#statusmsg').html("Saving actor..");
    	$('#statusLoader').removeClass('hide');
        $('#statusLoader .voicebox-content').addClass('in');
        var actorDetails = new BackboneData.Models.ActorListDetailsModel({ actorType: actor_Type, actorEmail: actor_Email, site: actorSite });
        actorDetails.save({}, {
            success: function(model, respose, options) {
            	$('#statusmsg').html("Actor saved successfully.");
            	$('#statusLoader').addClass('hide');
                $('#statusLoader .voicebox-content').removeClass('in');
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
            	$('#statusmsg').html("Actor saved successfully.");
            	$('#statusLoader').addClass('hide');
                $('#statusLoader .voicebox-content').removeClass('in');
                $('#actor-modal').modal('hide');
                console.log("Something went wrong while saving the model");
            }
        });
    },
    saveIncoterms: function() {
    	var incoterm = $("#incoterms_value").val();
        var info = $("#incoterms_info").val();
        $('#statusmsg').html("Saving Incoterms..");
    	$('#statusLoader').removeClass('hide');
        $('#statusLoader .voicebox-content').addClass('in');
        var incotermsDetails = new BackboneData.Models.IncotermsModel({ incoterms: incoterm, infos: info });
        incotermsDetails.save({}, {
            success: function(model, respose, options) {
            	$('#statusmsg').html("Actor saved successfully.");
            	$('#statusLoader').addClass('hide');
                $('#statusLoader .voicebox-content').removeClass('in');
                $('#actor-modal').modal('hide');
            },
            error: function(model, xhr, options) {
            	$('#statusmsg').html("Actor saved successfully.");
            	$('#statusLoader').addClass('hide');
                $('#statusLoader .voicebox-content').removeClass('in');
                $('#actor-modal').modal('hide');
            }
        });
    },
    saveCustomer: function() {
    	var name = $("#customer_name").val();
        var code = $("#customer_code").val();
        var branch_code = $("#customer_branch").val();
        var provider_code = $("#cust_provider_code").val();
        var address = $("#customer_address").val();
        var customerDetails = new BackboneData.Models.CustomersListModel({ customer_Name: name, customer_Code: code, branch_Code: branch_code, provider_Code: provider_code, customer_Address: address });
        customerDetails.save({}, {
            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
                console.log("Something went wrong while saving the model");
            }
        });
    },
    savePlateform: function() {
    	debugger;
    	 var plateformValue = $("#plateforms_value").val();
         var plateformDetails = new BackboneData.Models.PlateformDetailsModel({ plateform: plateformValue });
         plateformDetails.save({}, {
             success: function(model, respose, options) {
                 console.log("The model has been saved to the server");
             },
             error: function(model, xhr, options) {
                 console.log("Something went wrong while saving the model");
             }
         });
    },
    savePlace: function() {
    	var placeValue = $("#places").val();
        var placeDetails = new BackboneData.Models.PlacesDetailsModel({ places: placeValue });
        placeDetails.save({}, {
            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
                console.log("Something went wrong while saving the model");
            }
        });
    },
    saveSite: function() {
    	 var siteName = $("#site_name").val();
         var siteAddress = $("#site_address").val();
         var siteDetails = new BackboneData.Models.SitesListModel({ site_Name: siteName, address: siteAddress });
         siteDetails.save({}, {
             success: function(model, respose, options) {
                 console.log("The model has been saved to the server");
             },
             error: function(model, xhr, options) {
                 console.log("Something went wrong while saving the model");
             }
         });
    },
    /*sivaranjan changes*/
    viewActorList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#actor-article').removeClass('hide');
    	var self = new BackboneData.Views.AdminDetailView();
    	self.buildActorsTable("MEP Study");
    },
    viewIncotermsList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#incoterms-article').removeClass('hide');
    	var self = new BackboneData.Views.AdminDetailView();
    	self.buildIncotermsTable();
    },
    viewClientsList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#clients-article').removeClass('hide');
    	var self = new BackboneData.Views.AdminDetailView();
    	self.buildCustomersTable();
    },
    viewPlatformList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#platforms-article').removeClass('hide');
    	var self = new BackboneData.Views.AdminDetailView();
    	self.buildPlatformsTable();
    },
    viewLocationList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#locations-article').removeClass('hide');
    	var self = new BackboneData.Views.AdminDetailView();
    	self.buildPlacesTable();
    },
    viewSiteList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#sites-article').removeClass('hide');
    	var self = new BackboneData.Views.AdminDetailView();
    	self.buildSitesTable();
    },
    buildActorsTable : function(actorTypeFilter){
				    	$('#actorsub-table').DataTable({
				            dom: 'Bfrtip',
				            "ajax": "http://localhost:8888/fetchController/fetchActorsByType/"+actorTypeFilter,
				            "bDestroy": true,
				            "columns": [
						                { "data": "actorEmail" },
						                { "data": "actorType" },
						                { "data": "site" },
						            ],
				            "order": [[ 1, 'asc' ]],
				            buttons: [{
				                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add new actor',
				                className: 'btn btn-success btn-sm',
				                action: function() {
				                	var dataAttr = $('ul#addActorUL').find('li.active').data('attr');
				                	$('#actorLabel').html(dataAttr);
				                    $('#actor-modal').modal('show');
				                }
				            }]
				        });
    },
    buildIncotermsTable : function(){
					    	$('#incoterms-table').DataTable({
					            dom: 'Bfrtip',
					            "ajax": "http://localhost:8888/fetchController/fetchIncotermsList",
					            "bDestroy": true,
					            "columns": [
							                { "data": "incoterms" },
							                { "data": "infos" },
							            ],
					            "order": [[ 1, 'asc' ]],
					            buttons: [{
					                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Incoterms',
					                className: 'btn btn-success btn-sm',
					                action: function() {
					                    $('#incoterms-modal').modal('show');
					                }
					            }]
					        });
    },
    buildCustomersTable : function(){
    	$('#clients-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchCustomersList",
            "bDestroy": true,
            "columns": [
		                { "data": "customer_Name" },
		                { "data": "customer_Code" },
		                { "data": "branch_Code" },
		                { "data": "provider_Code" },
		                { "data": "customer_Address" },
		            ],
            "order": [[ 1, 'asc' ]],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Customer',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#clients-modal').modal('show');
                }
            }]
        });
    },
    buildPlatformsTable : function(){
    	$('#platformssub-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchPlateformList",
            "bDestroy": true,
            "columns": [
		                { "data": "plateform" },
		            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Platform',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#platform-modal').modal('show');
                }
            }]
        });
    },
    buildPlacesTable : function(){
    	$('#locationsub-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchPlacesList",
            "bDestroy": true,
            "columns": [
		                { "data": "places" },
		            ],
            "order": [[ 1, 'asc' ]],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Places',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#location-modal').modal('show');
                }
            }]
        });
    },
    buildSitesTable : function(){
    	$('#sitesub-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchSitesList",
            "bDestroy": true,
            "columns": [
		                { "data": "site_Name" },
		                { "data": "address" },
		            ],
            "order": [[ 1, 'asc' ]],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Sites',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#site-modal').modal('show');
                }
            }]
        });
    }
});
