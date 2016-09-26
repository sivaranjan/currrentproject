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
											                showVoiceBox.configure("Saved successfully",2000);
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
											            	showVoiceBox.configure("Saved successfully",2000);
											                console.log("Something went wrong while saving the model");
											                $('#location-modal').modal('hide');
											                buildPlacesTable();
											            }
											        });
		    								};
    saveProductType					=		function()
    										{
											    	var productType 		= 	$("#producttype").val();
											        showVoiceBox.configure("Saving Product Type",2000);
											        var productDetails 	= 	new BackboneData.Models.ProductTypesModel(
											        {
											        	productType	: 	productType,
											   	     	added_By	: 	useremailid
											        });
											        productDetails.save(
											        {},
											        {
											            success		: 	function(model, respose, options)
											            {
											                console.log("The model has been saved to the server");
											            },
											            error		: 	function(model, xhr, options)
											            {
											            	showVoiceBox.configure("Saved successfully",2000);
											                console.log("Something went wrong while saving the model");
											                $('#producttype-modal').modal('hide');
											                buildProductTypesList();
											            }
											        });
    										};
    savePrototypists					=		function()
    										{
											    	var prototypists 		= 	$("#prototypists").val();
											        showVoiceBox.configure("Saving Prototypists",2000);
											        var prototypistsDetails 	= 	new BackboneData.Models.PrototypistsModel(
											        {
											        	prototypist		: 	prototypists,
											    		added_By		: 	useremailid
											        });
											        prototypistsDetails.save(
											        {},
											        {
											            success		: 	function(model, respose, options)
											            {
											                console.log("The model has been saved to the server");
											            },
											            error		: 	function(model, xhr, options)
											            {
											            	showVoiceBox.configure("Saved successfully",2000);
											                console.log("Something went wrong while saving the model");
											                $('#prototypists-modal').modal('hide');
											                buildPrototypistsList();
											            }
											        });
    										};
    saveTechnology						=		function()
     										{
 											    	var prod_type_technology 		= 	$("#prod_type_technology").val();
 											    	var technology 					= 	$("#technology").val();
 											        showVoiceBox.configure("Saving",2000);
 											        var technologyDetails 	= 	new BackboneData.Models.TechnologyModel(
 											        {
 											        	technology		: 	technology,
 											        	productType		: 	prod_type_technology,
 											        	added_By		: 	useremailid
 											        });
 											       technologyDetails.save(
 											        {},
 											        {
 											            success		: 	function(model, respose, options)
 											            {
 											                console.log("The model has been saved to the server");
 											            },
 											            error		: 	function(model, xhr, options)
 											            {
 											            	showVoiceBox.configure("Saved successfully",2000);
 											                console.log("Something went wrong while saving the model");
 											                $('#technology-modal').modal('hide');
 											               buildTechnologyList();
 											            }
 											        });
     										};
     saveRandD							=	function()
     										{
 											    	var randD 			= 	$("#randD").val();
 											        showVoiceBox.configure("Saving",2000);
 											        var rAndDDetails 	= 	new BackboneData.Models.randDModel(
 											        {
 											        	randD		: 	randD,
 											        	added_By	: 	useremailid
 											        });
 											        rAndDDetails.save(
 											        {},
 											        {
 											            success		: 	function(model, respose, options)
 											            {
 											                console.log("The model has been saved to the server");
 											            },
 											            error		: 	function(model, xhr, options)
 											            {
 											            	showVoiceBox.configure("Saved successfully",2000);
 											                console.log("Something went wrong while saving the model");
 											                $('#randD-modal').modal('hide');
 											                buildRandDList();
 											            }
 											        });
     										};
     saveAllocation							=		function()
     										{
 											    	var allocationturnover 		= 	$("#allocationturnover").val();
 											        showVoiceBox.configure("Saving",2000);
 											        var allocationDetails 	= 	new BackboneData.Models.allocationModel(
 											        {
 											        	allocation		: 	allocationturnover,
 											        	added_By		:	useremailid
 											        });
 											        allocationDetails.save(
 											        {},
 											        {
 											            success		: 	function(model, respose, options)
 											            {
 											                console.log("The model has been saved to the server");
 											            },
 											            error		: 	function(model, xhr, options)
 											            {
 											            	showVoiceBox.configure("Saved successfully",2000);
 											                console.log("Something went wrong while saving the model");
 											                $('#allocation-turnover-modal').modal('hide');
 											                buildAllocationTurnOverList();
 											            }
 											        });
     										};
     saveClientLabo					=		function()
     										{
 											    	var clientName 			= 	$("#clientName").val();
 											    	var laboaddress 		= 	$("#laboaddress").val();
 											        showVoiceBox.configure("Saving",2000);
 											        var clientLaboDetails 	= 	new BackboneData.Models.ClientLaboModel(
 											        {
 											        	clientName		: 	clientName,
 											        	address			: 	laboaddress,
 											        	added_By		: 	useremailid
 											        });
 											        clientLaboDetails.save(
 											        {},
 											        {
 											            success		: 	function(model, respose, options)
 											            {
 											                console.log("The model has been saved to the server");
 											            },
 											            error		: 	function(model, xhr, options)
 											            {
 											            	showVoiceBox.configure("Saved successfully",2000);
 											                console.log("Something went wrong while saving the model");
 											                $('#clientLabo-modal').modal('hide');
 											                buildClientLaboList();
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
											            	showVoiceBox.configure("Saved successfully",2000);
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
										            	showVoiceBox.configure("Saved successfully",2000);
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
										            	showVoiceBox.configure("Saved successfully",2000);
										                $('#incoterms-modal').modal('hide');
										            },
										            error: function(model, xhr, options)
										            {
										            	showVoiceBox.configure("Saved successfully",2000);
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
										            	showVoiceBox.configure("Saved successfully",2000);
										                console.log("The model has been saved to the server");
										            },
										            error		: 	function(model, xhr, options)
										            {
										            	showVoiceBox.configure("Saved successfully",2000);
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
										                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> Add new',
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
										        buildSearchForTable('actorlisttable_footer th','actorsub-table');
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
										                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> Add New',
										                className	: 	'btn btn-success btn-sm',
										                action		: 	function()
										                {
										                    $('#incoterms-modal').modal('show');
										                }
										            }]
										        });
										        buildSearchForTable('incotermstable_footer th','incoterms-table');
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
										                text		: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
										                className	: 'btn btn-success btn-sm',
										                action		: function()
										                {
										                    $('#clients-modal').modal('show');
										                }
										            }]
										        });
										        buildSearchForTable('clientstable_footer th','clients-table');
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
										                text	  : '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
										                className : 'btn btn-success btn-sm',
										                action	  : function()
										                {
										                    $('#platform-modal').modal('show');
										                }
										            }]
										        });
										        buildSearchForTable('platformstable_footer th','platformssub-table');
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
										                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
										                className: 'btn btn-success btn-sm',
										                action	: function()
										                {
										                    $('#location-modal').modal('show');
										                }
										            }]
										        });
										        buildSearchForTable('location_footer th','locationsub-table');
											};
	buildProductTypesList				=	function()
											{
												$('#configbreadcrumb .active').html("Product Types");
												$('#productstypessub-table').DataTable(
												{
												            dom			: 'Bfrtip',
												            "ajax"		: ApplicationConstants.fetchProductTypeList,
												            "bDestroy"	: true,
												            "columns"	: [
												            {
												                "data"	: "productType"
												            }, ],
												            "order"		: [[0, 'asc']],
												            buttons		: [
												            {
												                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
												                className: 'btn btn-success btn-sm',
												                action	: function()
												                {
												                    $('#producttype-modal').modal('show');
												                }
												            }]
												  });
												  buildSearchForTable('productstypes_footer th','productstypessub-table');
											};
	buildPrototypistsList				=	function()
											{
												$('#configbreadcrumb .active').html("Prototypists");
												$('#protypistsub-table').DataTable(
												{
												            dom			: 'Bfrtip',
												            "ajax"		: ApplicationConstants.fetchPrototypitsList,
												            "bDestroy"	: true,
												            "columns"	: [
												            {
												                "data"	: "prototypist"
												            }, ],
												            "order"		: [[0, 'asc']],
												            buttons		: [
												            {
												                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
												                className: 'btn btn-success btn-sm',
												                action	: function()
												                {
												                    $('#prototypists-modal').modal('show');
												                }
												            }]
												  });
												buildSearchForTable('protypist_footer th','protypistsub-table');
											};
	buildTechnologyList					=	function()
											{
												$('#configbreadcrumb .active').html("Technology");
												$('#technolosub-table').DataTable(
												{
												            dom			: 'Bfrtip',
												            "ajax"		: ApplicationConstants.fetchTechnologyList,
												            "bDestroy"	: true,
												            "columns"	: 	[
																	            {
																	                "data"	: "technology"
																	            },
																	            {
																	                "data"	: "productType"
																	            },
																	         ],
												            "order"		: [[0, 'asc']],
												            buttons		: [
												            {
												                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
												                className: 'btn btn-success btn-sm',
												                action	: function()
												                {
												                    $('#technology-modal').modal('show');
												                }
												            }]
												  });
												buildSearchForTable('technolo_footer th','technolosub-table');
											};
	buildRandDList					=		function()
											{
												$('#configbreadcrumb .active').html("R&D List");
												$('#rdleadtsub-table').DataTable(
												{
												            dom			: 'Bfrtip',
												            "ajax"		: ApplicationConstants.fetchRandDList,
												            "bDestroy"	: true,
												            "columns"	: [
												            {
												                "data"	: "randD"
												            }, ],
												            "order"		: [[0, 'asc']],
												            buttons		: [
												            {
												                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
												                className: 'btn btn-success btn-sm',
												                action	: function()
												                {
												                    $('#randD-modal').modal('show');
												                }
												            }]
												  });
												buildSearchForTable('rdleadt_footer th','rdleadtsub-table');
											};
	buildAllocationTurnOverList		 =		function()
											{
												$('#configbreadcrumb .active').html("Allocation of Turnover");
												$('#allocationturnoversub-table').DataTable(
												{
												            dom			: 'Bfrtip',
												            "ajax"		: ApplicationConstants.fetchAllocationofTurnOverList,
												            "bDestroy"	: true,
												            "columns"	: [
												            {
												                "data"	: "allocation"
												            }, ],
												            "order"		: [[0, 'asc']],
												            buttons		: [
												            {
												                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
												                className: 'btn btn-success btn-sm',
												                action	: function()
												                {
												                    $('#allocation-turnover-modal').modal('show');
												                }
												            }]
												  });
												buildSearchForTable('allocationturnover_footer th','allocationturnoversub-table');
											};
	 buildClientLaboList		=			function()
											{
												$('#configbreadcrumb .active').html("Client Labo Lists");
												$('#clientaddsub-table').DataTable(
												{
												            dom			: 'Bfrtip',
												            "ajax"		: ApplicationConstants.fetchClientLaboList,
												            "bDestroy"	: true,
												            "columns"	: 	[
																	            {
																	                "data"	: "clientName"
																	            },
																	            {
																	                "data"	: "address"
																	            },
																	         ],
												            "order"		: [[0, 'asc']],
												            buttons		: [
												            {
												                text	: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
												                className: 'btn btn-success btn-sm',
												                action	: function()
												                {
												                    $('#clientLabo-modal').modal('show');
												                }
												            }]
												  });
												buildSearchForTable('clientadd_footer th','clientaddsub-table');
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
											        buildSearchForTable('site_footer th','sitesub-table');
											};
	buildSearchForTable					=	function(footer,tablename)
											{
												$('#'+footer).each(function()
												{
											        var title = '';
									                $(this).html('<input type="text" style="width: 100%;" class="form-control input-sm" placeholder="Search ' + title + '" />');
												});
												var table = $('#'+tablename).DataTable();
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
											},
	validateAdminSection				= 	function(div,done)
									    	{
										        if (validate.getInstance().formordiv(div))
										        {
										            Do.validateAndDoCallback(done);
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
	renderTabClick 						= 	function()
									    	{
												$('a[data-toggle="tab"]').on('shown.bs.tab', function(event)
												{
												    			console.log($(event.target).text()); // newly activated tab
												    			console.error("new tab is this ::"+$(event.relatedTarget).text());
												    			var currentSelectedTab = $(event.target).text();
												    			switch (currentSelectedTab)
												    			{
												    					case "MEP Study":
												    						          		buildActorsTable("MEP Study");
												    						          		break;
												    					case "Quality":
												    						                buildActorsTable("Quality");
												    						                break;
												    					case "Proto workshop":
												    						    	  		buildActorsTable("Proto workshop");
												    						    	  		break;
												    					case "Control management":
												    						    	  		buildActorsTable("Control management");
												    						    	  		break;
												    					case "FO Trade":
												    						                buildActorsTable("FO Trade");
												    						                break;
												    					case "ADV":
												    						                buildActorsTable("ADV");
												    						                break;
												    					case "Project Manager":
												    						    	  	    buildActorsTable("Project Manager");
												    						    	  	    break;
												    			}
												   });	
									    	   };
    
})();