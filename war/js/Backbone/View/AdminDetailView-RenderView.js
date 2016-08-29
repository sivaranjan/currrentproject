BackboneData.Views.AdminDetailView = Backbone.View.extend({
	el:'#admin-section',
	render:function()
	{
		var ref = this;
		var adminDetailHTML	="";
		if(window.language=="EN")
		{
			adminDetailHTML	 = admin.manager.AdminDetailView({'paramValue':window.actorDetails_englishLabelList});
		}	
		else
		{
			adminDetailHTML	 =  admin.manager.AdminDetailView({'paramValue':window.actorDetails_frenchLabelList});
		}	
		ref.$el.html(adminDetailHTML);
		$('#admin-section').removeClass('hide');
    	$('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#orderlist-section').addClass('hide');
    	$('#bs-example-navbar-collapse-1 ul li').removeClass('active');
    	$('#adminsetting-tab').addClass('active');
    	$('#admin-table').DataTable({
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
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add new User',
                className: 'btn btn-default btn-sm',
                action: function() {
                    $('#adminModal').modal('show');
                }
            }]
            
        });
    },
    events:{
        "click #create_Incoterms":"saveIncoterms",
        "click #create_plateform":"savePlateform",
        "click #create_Place":"savePlace",
        "click #create_Customers":"saveCustomer",
        "click #create_site":"saveSite",
        "click #create_Actor":"saveActor",
        
    },
   saveIncoterms:function()
   {
	   			$('#IncotermDetails').removeClass('hide');
	   			$("#save_incoterms").click(function()
	   		    {
	   				var incoterm=$("#incoterms_value").val();
					var info=$("#incoterms_info").val();
	   			    var incotermsDetails= new IncotermsDetails({incoterms:incoterm,infos:info});
	   				    incotermsDetails.save({},{
	   					success: function (model, respose, options) {
	   						console.log("The model has been saved to the server");
	   							  },
	   					error: function (model, xhr, options) {
			                console.log("Something went wrong while saving the model");
			                      }
			                });
	   				 $('#IncotermDetails').addClass('hide');
	   			 });
   },
   savePlateform:function()
   {
	   			$('#PlateformDetails').removeClass('hide');
	   			$("#save_plateform").click(function()
	   		   		    {
	   		   			   var plateformValue=$("#plateforms_value").val();
	   		   			   var plateformDetails= new PlateformDetails({plateform:plateformValue});
	   		   				   plateformDetails.save({},{
	   		   					success: function (model, respose, options) {
	   		   						console.log("The model has been saved to the server");
	   		   							  },
	   		   					error: function (model, xhr, options) {
	   				                console.log("Something went wrong while saving the model");
	   				                      }
	   				          });

	   			   			$('#PlateformDetails').addClass('hide');
	   		   			 });
	   			
   },
   savePlace:function()
   {
	           $('#PlaceDetails').removeClass('hide');
	           $("#save_places").click(function()
	   		   		    {
	   		   			   var placeValue=$("#places").val();
	   		   			   var placeDetails= new PlacesDetails({places:placeValue});
	   		   				   placeDetails.save({},{
	   		   					success: function (model, respose, options) {
	   		   						console.log("The model has been saved to the server");
	   		   							  },
	   		   					error: function (model, xhr, options) {
	   				                console.log("Something went wrong while saving the model");
	   				                      }
	   				          });
	   		   			  $('#PlaceDetails').addClass('hide');
	   		   			 });
	   			
   },
   saveCustomer:function()
   {
	   			$('#CustomerDetails').removeClass('hide');
	   		    $("#save_customer").click(function()
	   		   		    {
	   		   			   var name=$("#customer_name").val();
	   		   			   var code=$("#customer_code").val();
	   		   			   var branch_code=$("#customer_branch").val();
	   		   			   var provider_code=$("#cust_provider_code").val();
	   		   			   var address=$("#customer_address").val();
	   		   			   var customerDetails= new CustomersListModel({customer_Name:name,customer_Code:code,branch_Code:branch_code,provider_Code:provider_code,customer_Address:address});
	   		   				   customerDetails.save({},{
	   		   					success: function (model, respose, options) {
	   		   						console.log("The model has been saved to the server");
	   		   							  },
	   		   					error: function (model, xhr, options) {
	   				                console.log("Something went wrong while saving the model");
	   				                      }
	   				          });
	   		   			   $('#CustomerDetails').addClass('hide');
	   		   			 });
   },
   saveSite:function()
   {
	   			$('#SiteDetails').removeClass('hide');
	   		    $("#save_site").click(function()
	   		   		    {
	   		   			   var siteName=$("#site_name").val();
	   		   			   var siteAddress=$("#site_address").val();
	   		   			   var siteDetails= new SitesListModel({site_Name:siteName,address:siteAddress});
	   		   				   siteDetails.save({},{
	   		   					success: function (model, respose, options) {
	   		   						console.log("The model has been saved to the server");
	   		   							  },
	   		   					error: function (model, xhr, options) {
	   				                console.log("Something went wrong while saving the model");
	   				                      }
	   				          });
	   		   			  $('#SiteDetails').addClass('hide');
	   		   			 });
   },
   saveActor:function()
   {
	   			$('#ActorDetails').removeClass('hide');
	   		    $("#save_actorlist").click(function()
	   		   		    {
	   		   			   var actor_Type=$("#actor_type").val();
	   		   			   var actor_Email=$("#actor_email").val();
	   		   		       var actorSite=$("#actor_site").val();
	   		   			   var actorDetails= new BackboneData.Models.ActorListDetailsModel({actorType:actor_Type,actorEmail:actor_Email,site:actorSite});
	   		   			        actorDetails.save({},{
	   		   					success: function (model, respose, options) {
	   		   						console.log("The model has been saved to the server");
	   		   							  },
	   		   					error: function (model, xhr, options) {
	   				                console.log("Something went wrong while saving the model");
	   				                      }
	   				          });
	   		   			  $('ActorDetails').addClass('hide');
	   		   			 });
   },
});