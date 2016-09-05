(function()
{
	saveSite 						= 		function()
    										{
											        var siteName 		= 	$("#site_name").val();
											        var siteAddress 	= 	$("#site_address").val();
											        showVoiceBox.configure("Saving Site",2000);
											        var siteDetails 	= 	new BackboneData.Models.SitesListModel(
											        {
											            site_Name	: 	siteName,
											            address		: 	siteAddress,
											            added_By 	: 	useremailid
											        });
											        siteDetails.save(
											        {},
											        {
											            success		: 	function(model, respose, options)
											            {
											                console.log("The model has been saved to the server");
											            },
											            error		: 	function(model, xhr, options)
											            {
											                console.log("Something went wrong while saving the model");
											                showVoiceBox.configure("New site added successfully",2000);
											                $('#site-modal').modal('hide');
											                buildSitesTable();
											            }
											        });
    											};
    savePlace		 			    = 		function()
		    								{
											        var placeValue 		= 	$("#places").val();
											        showVoiceBox.configure("Saving Places",2000);
											        var placeDetails 	= 	new BackboneData.Models.PlacesDetailsModel(
											        {
											            places		: 	placeValue,
											            added_By 	: 	useremailid
											        });
											        placeDetails.save(
											        {},
											        {
											            success		: 	function(model, respose, options)
											            {
											                console.log("The model has been saved to the server");
											            },
											            error		: 	function(model, xhr, options)
											            {
											            	showVoiceBox.configure("New place added successfully",2000);
											                console.log("Something went wrong while saving the model");
											                $('#location-modal').modal('hide');
											                buildPlacesTable();
											            }
											        });
		    								};
	savePlateform 					= 		function(languageChanged)
    										{
											        var plateformValue 		= 	$("#plateforms_value").val();
											        showVoiceBox.configure("Saving Plateform",2000);
											        var plateformDetails 	= 	new BackboneData.Models.PlateformDetailsModel(
											        {
											            plateform	: 	plateformValue,
											            added_By 	: 	useremailid
											        });
											        plateformDetails.save(
											        {},
											        {
											            success		: 	function(model, respose, options)
											            {
											                console.log("The model has been saved to the server");
											            },
											            error		: 	function(model, xhr, options)
											            {
											            	showVoiceBox.configure("New plateform added successfully",2000);
											                console.log("Something went wrong while saving the model");
											                $('#platform-modal').modal('hide');
											                buildPlatformsTable();
											            }
											        });
    										};
    saveCustomer 					= 		function()
    										{
										    	var self 	= 	this;
										        var name 	= 	$("#customer_name").val();
										        var code 	= 	$("#customer_code").val();
										        var branch_code 	=	 $("#customer_branch").val();
										        var provider_code 	=	 $("#cust_provider_code").val();
										        var address 		= 	 $("#customer_address").val();
										        showVoiceBox.configure("Saving Customer Entry",2000);
										        var customerDetails = 	 new BackboneData.Models.CustomersListModel(
										        {
										            customer_Name	: 	name,
										            customer_Code	: 	code,
										            branch_Code		: 	branch_code,
										            provider_Code	: 	provider_code,
										            customer_Address: 	address,
										            added_By 		: 	useremailid
										            
										        });
										        customerDetails.save(
										        {},
										        {
										            success: function(model, respose, options)
										            {
										                console.log("The model has been saved to the server");
										            },
										            error: function(model, xhr, options)
										            {
										            	showVoiceBox.configure("New customer added successfully",2000);
										                console.log("Something went wrong while saving the model");
										                $('#clients-modal').modal('hide');
										                buildCustomersTable();
										            }
										        });
    	 										
    									};
    	saveIncoterms 					= 	function(currentpage,docallBack)
    										{
									    	 	var self 		= 	this;
										        var incoterm 	= 	$("#incoterms_value").val();
										        var info 		= 	$("#incoterms_info").val();
										        showVoiceBox.configure("Saving Incoterms",2000);
										        var incotermsDetails	 = 	new BackboneData.Models.IncotermsModel(
										        {
										            incoterms	: 	incoterm,
										            infos		: 	info,
										            added_By 	: 	useremailid
										        });
										        incotermsDetails.save(
										        {},
										        {
										            success: function(model, respose, options)
										            {
										            	showVoiceBox.configure("Incoterms saved successfully",2000);
										                $('#incoterms-modal').modal('hide');
										            },
										            error: function(model, xhr, options)
										            {
										            	showVoiceBox.configure("Incoterms saved successfully",2000);
										                $('#incoterms-modal').modal('hide');
										                buildIncotermsTable();
										            }
										        });
    										};
    	saveActor 						= 	function(currentPage,docallBack)
									    	{
										    	var 	self 		= 	this;
										        var 	actor_Type 	= 	$('ul#addActorUL').find('li.active').data('attr');
										        var 	actor_Email = 	$("#actor_email").val();
										        var 	actorSite 	= 	$("#actor_site").val();
										        showVoiceBox.configure("Saving actor",2000);
										        var 	actorDetails = 	new BackboneData.Models.ActorListDetailsModel(
										        {
										            actorType	: 	actor_Type,
										            actorEmail	: 	actor_Email,
										            site		: 	actorSite,
										            addedBy		: 	useremailid
										        });
										        actorDetails.save(
										        {},
										        {
										            success		: 	function(model, respose, options)
										            {
										            	showVoiceBox.configure("Actor saved successfully",2000);
										                console.log("The model has been saved to the server");
										            },
										            error		: 	function(model, xhr, options)
										            {
										            	showVoiceBox.configure("Actor saved successfully",2000);
										                $('#actor-modal').modal('hide');
										                console.log("Something went wrong while saving the model");
										                buildActorsTable(actor_Type);
										            }
										        });
									    	};
	buildActorsTable 					= 	function(actorTypeFilter)
										  	{
										        $('#configbreadcrumb .active').html("Actors / " + actorTypeFilter);
										        $('#actorsub-table').DataTable(
										        {
										            dom			: 	'Bfrtip',
										            "ajax"		: 	ApplicationConstants.fetchActorsListByType + actorTypeFilter,
										            "bDestroy"	:	true,
										            "columns"	: 	[
										            {
										                "data"	: "actorEmail"
										            },
										            {
										                "data"	: "actorType"
										            },
										            {
										                "data"	: "site"
										            }, ],
										            "order"		: 	[
										                [1, 'asc']
										            ],
										            buttons: [
										            {
										                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> Add new actor',
										                className	: 	'btn btn-success btn-sm',
										                action		: 	function()
										                {
										                    var dataAttr = $('ul#addActorUL').find('li.active').data('attr');
										                    $('#actorLabel').html(dataAttr);
										                    $('#actor-modal').modal('show');
										                    var fetchSitesforActors = new BackboneData.Collections.fetchSitesList();
										                    $.when(fetchSitesforActors.fetch()).done(function(response, xhr)
															{
										                    	var responseData = response.data;
										                    	console.log("sites data down ");
										                    	console.log(responseData);
										                    	var sitesHTML 	= "";
										                    	responseData.forEach(function(arrayItem)
														        {
										                    		sitesHTML += '<option>' + arrayItem.site_Name + '</option>';
														        });
										                    	$('#actor_site').html(sitesHTML).selectpicker('refresh');
															}).fail(function() {});
										                }
										            }]
										        });
										        $('#actorsub-table tfoot th').each(function()
										        {
										            var title = $(this).text();
										            $(this).html('<input type="text" class="form-control input-sm" placeholder="Search ' + title + '" />');
										        });
										
										        // DataTable
										        var table = $('#actorsub-table').DataTable();
										
										        // Apply the search
										        table.columns().every(function()
										        {
										            var that = this;
										
										            $('input', this.footer()).on('keyup change', function()
										            {
										                if (that.search() !== this.value)
										                {
										                    that.search(this.value).draw();
										                }
										            });
										        });
										        $('.dt-buttons a.btn').removeClass('dt-button');
										  	};
	buildIncotermsTable					=	function()
											{
												$('#configbreadcrumb .active').html("Incoterms");
										        $('#incoterms-table').DataTable(
										        {
										            dom			: 	'Bfrtip',
										            "ajax"		: 	ApplicationConstants.fetchIncotermsList,
										            "bDestroy"	: 	true,
										            "columns"	: 	[
										            {
										                "data"	: "incoterms"
										            },
										            {
										                "data"	: "infos"
										            }, ],
										            "order"		: [[1, 'asc']],
										            buttons		: [
										            {
										                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> Add New Incoterms',
										                className	: 	'btn btn-success btn-sm',
										                action		: 	function()
										                {
										                    $('#incoterms-modal').modal('show');
										                }
										            }]
										        });
										        $('.dt-buttons a.btn').removeClass('dt-button');
											};
	buildCustomersTable					=	function()
											{
												$('#configbreadcrumb .active').html("Customers");
										        $('#clients-table').DataTable(
										        {
										            dom			: 	'Bfrtip',
										            "ajax"		: 	ApplicationConstants.fetchCustomersList,
										            "bDestroy"	: 	true,
										            "columns"	: 	[
										            {
										                "data"	: "customer_Name"
										            },
										            {
										                "data"	: "customer_Code"
										            },
										            {
										                "data"	: "branch_Code"
										            },
										            {
										                "data"	: "provider_Code"
										            },
										            {
										                "data"	: "customer_Address"
										            }, ],
										            "order"		: [[1, 'asc']],
										            buttons		: [
										            {
										                text		: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Customer',
										                className	: 'btn btn-success btn-sm',
										                action		: function()
										                {
										                    $('#clients-modal').modal('show');
										                }
										            }]
										        });
										        $('.dt-buttons a.btn').removeClass('dt-button');
											};
	buildPlatformsTable 				= 	function()
											{
												$('#configbreadcrumb .active').html("Platforms");
										        $('#platformssub-table').DataTable(
										        {
										            dom			: 'Bfrtip',
										            "ajax"		: ApplicationConstants.fetchPlateformesList,
										            "bDestroy"	: true,
										            "columns"	: [
										            {
										                "data"	: "plateform"
										            }, ],
										            buttons		: [
										            {
										                text	  : '<i class="fa fa-plus" aria-hidden="true"></i> Add New Platform',
										                className : 'btn btn-success btn-sm',
										                action	  : function()
										                {
										                    $('#platform-modal').modal('show');
										                }
										            }]
										        });
										        $('.dt-buttons a.btn').removeClass('dt-button');
											};
	buildPlacesTable 					= 	function()
											{
												$('#configbreadcrumb .active').html("Places");
										        $('#locationsub-table').DataTable(
										        {
										            dom			: 'Bfrtip',
										            "ajax"		: ApplicationConstants.fetchPlacesList,
										            "bDestroy"	: true,
										            "columns"	: [
										            {
										                "data"	: "places"
										            }, ],
										            "order"		: [[0, 'asc']],
										            buttons		: [
										            {
										                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Places',
										                className: 'btn btn-success btn-sm',
										                action	: function()
										                {
										                    $('#location-modal').modal('show');
										                }
										            }]
										        });
										        $('.dt-buttons a.btn').removeClass('dt-button');
											};
    buildSitesTable 					= 	function()
											{
												 $('#configbreadcrumb .active').html("Sites");
											        $('#sitesub-table').DataTable(
											        {
											            dom			: 'Bfrtip',
											            "ajax"		: ApplicationConstants.fetchSitesList,
											            "bDestroy"	: true,
											            "columns"	: [
											            {
											                "data"	: "site_Name"
											            },
											            {
											                "data"	: "address"
											            }, ],
											            "order"		: [[1, 'asc']],
											            buttons		: [
											            {
											                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Sites',
											                className: 'btn btn-success btn-sm',
											                action	: function()
											                {
											                    $('#site-modal').modal('show');
											                }
											            }]
											        });
											        $('.dt-buttons a.btn').removeClass('dt-button');
											}
	validateAdminSection				= 	function(div,done)
									    	{
										        if (validate.getInstance().formordiv(div))
										        {
										            validateAndDoCallback(done);
										        }
										        else
										        {
										            $('#'+div).find('.selectpicker').each(function()
										            {
										                if ($(this).hasClass('error'))
										                {
										                    $(this).selectpicker('setStyle', 'error', 'add');
										                }
										            })
										        }
									    	};
    
})();