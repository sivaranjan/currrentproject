BackboneData.Views.AdminDetailView = Backbone.View.extend({
    el: '#admin-section',
    render: function() {
        var ref = this;
        var adminDetailHTML = "";
        adminDetailHTML = admin.manager.AdminDetailView();
        ref.$el.html(adminDetailHTML);
        $('#admin-section').removeClass('hide');
        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#orderlist-section').addClass('hide');
        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
        $('#adminsetting-tab').addClass('active');
        
        
        $('#mepstudysub-table').DataTable({
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
                    $('#actor-modal').modal('show');
                }
            }]
        });
        
        $('#qualitysub-table').DataTable({
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
                    $('#actor-modal').modal('show');
                }
            }]
        });
        
        $('#protosub-table').DataTable({
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
                    $('#actor-modal').modal('show');
                }
            }]
        });
        
        $('#managesub-table').DataTable({
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
                    $('#actor-modal').modal('show');
                }
            }]
        });
        
        $('#tradesub-table').DataTable({
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
                    $('#actor-modal').modal('show');
                }
            }]
        });
        
        $('#advsub-table').DataTable({
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
                    $('#actor-modal').modal('show');
                }
            }]
        });
        
        $('#prosub-table').DataTable({
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
                    $('#actor-modal').modal('show');
                }
            }]
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
                text: '<i class="fa fa-plus" aria-hidden="true"></i> New',
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
        "click #create_Incoterms": "saveIncoterms",
        "click #create_plateform": "savePlateform",
        "click #create_Place": "savePlace",
        "click #create_Customers": "saveCustomer",
        "click #create_site": "saveSite",
        "click #create_Actor": "saveActor",
        
        /*sivaranjan changes*/
        "click #configactor-btn": "viewActorList",
        "click #incoterms-btn": "viewIncotermsList",
        "click #clients-btn": "viewClientsList",
        "click #platforms-btn": "viewPlatformList",
        "click #locations-btn": "viewLocationList",
        "click #sites-btn": "viewSiteList",

    },
    saveIncoterms: function() {
        $('#IncotermDetails').removeClass('hide');
        $("#save_incoterms").click(function() {
            var incoterm = $("#incoterms_value").val();
            var info = $("#incoterms_info").val();
            var incotermsDetails = new IncotermsDetails({ incoterms: incoterm, infos: info });
            incotermsDetails.save({}, {
                success: function(model, respose, options) {
                    console.log("The model has been saved to the server");
                },
                error: function(model, xhr, options) {
                    console.log("Something went wrong while saving the model");
                }
            });
            $('#IncotermDetails').addClass('hide');
        });
    },
    savePlateform: function() {
        $('#PlateformDetails').removeClass('hide');
        $("#save_plateform").click(function() {
            var plateformValue = $("#plateforms_value").val();
            var plateformDetails = new PlateformDetails({ plateform: plateformValue });
            plateformDetails.save({}, {
                success: function(model, respose, options) {
                    console.log("The model has been saved to the server");
                },
                error: function(model, xhr, options) {
                    console.log("Something went wrong while saving the model");
                }
            });

            $('#PlateformDetails').addClass('hide');
        });

    },
    savePlace: function() {
        $('#PlaceDetails').removeClass('hide');
        $("#save_places").click(function() {
            var placeValue = $("#places").val();
            var placeDetails = new PlacesDetails({ places: placeValue });
            placeDetails.save({}, {
                success: function(model, respose, options) {
                    console.log("The model has been saved to the server");
                },
                error: function(model, xhr, options) {
                    console.log("Something went wrong while saving the model");
                }
            });
            $('#PlaceDetails').addClass('hide');
        });

    },
    saveCustomer: function() {
        $('#CustomerDetails').removeClass('hide');
        $("#save_customer").click(function() {
            var name = $("#customer_name").val();
            var code = $("#customer_code").val();
            var branch_code = $("#customer_branch").val();
            var provider_code = $("#cust_provider_code").val();
            var address = $("#customer_address").val();
            var customerDetails = new CustomersListModel({ customer_Name: name, customer_Code: code, branch_Code: branch_code, provider_Code: provider_code, customer_Address: address });
            customerDetails.save({}, {
                success: function(model, respose, options) {
                    console.log("The model has been saved to the server");
                },
                error: function(model, xhr, options) {
                    console.log("Something went wrong while saving the model");
                }
            });
            $('#CustomerDetails').addClass('hide');
        });
    },
    saveSite: function() {
        $('#SiteDetails').removeClass('hide');
        $("#save_site").click(function() {
            var siteName = $("#site_name").val();
            var siteAddress = $("#site_address").val();
            var siteDetails = new SitesListModel({ site_Name: siteName, address: siteAddress });
            siteDetails.save({}, {
                success: function(model, respose, options) {
                    console.log("The model has been saved to the server");
                },
                error: function(model, xhr, options) {
                    console.log("Something went wrong while saving the model");
                }
            });
            $('#SiteDetails').addClass('hide');
        });
    },
    saveActor: function() {
        $('#ActorDetails').removeClass('hide');
        $("#save_actorlist").click(function() {
            var actor_Type = $("#actor_type").val();
            var actor_Email = $("#actor_email").val();
            var actorSite = $("#actor_site").val();
            var actorDetails = new BackboneData.Models.ActorListDetailsModel({ actorType: actor_Type, actorEmail: actor_Email, site: actorSite });
            actorDetails.save({}, {
                success: function(model, respose, options) {
                    console.log("The model has been saved to the server");
                },
                error: function(model, xhr, options) {
                    console.log("Something went wrong while saving the model");
                }
            });
            $('ActorDetails').addClass('hide');
        });
    },
    /*sivaranjan changes*/
    viewActorList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#actor-article').removeClass('hide');
    },
    viewIncotermsList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#incoterms-article').removeClass('hide');
    },
    viewClientsList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#clients-article').removeClass('hide');
    },
    viewPlatformList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#platforms-article').removeClass('hide');
    },
    viewLocationList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#locations-article').removeClass('hide');
    },
    viewSiteList: function(){
    	$('.configset,#config-pane article').addClass('hide');
    	$('#configbreadcrumb,#sites-article').removeClass('hide');
    },
});
