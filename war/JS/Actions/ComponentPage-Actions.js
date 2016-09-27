(function()
{
    saveComponent		 			     = 		function(callback)
		    									{
    													var componentcreationObject 	=   getComponentObject();
														componentcreationObject.save(
														{},
														{
															        success: function(model, respose, options)
															        {
															        	console.log("The model has been saved to the server");
															        },
															        error: function(model, xhr, options)
															        {
															        	 var currentActivePart = $('ul#componentNavUL').find('li.active').data('label');
															        	 switch (currentActivePart)
													                       {
													                           case "componentdescription"		  :
																	                               		   saveComponentDescription(callback);
																	                               		   break;
													                           case "technicaldefinition"		  :
													                        	   						   saveTechnicalDefinition(callback);
																	                               		   break;
													                           case "processvalidation"  :
																			                               saveProcessValidation(callback);
																			                               break;
													                           case "estimationdelays":
																			                               saveEstimationDelays(callback);
																			                               break;
													                           case "qualitydeliverable"		  :
																			                               saveQualityDeliverable(callback);
																			                               break;
													                       }	
															        }
													    });
		    									};
    saveComponentDescription			 =		function(callback)
    											{
    													var componentDescriptionModelObject 	=   getComponentDescriptionModelObject();
											    		componentDescriptionModelObject.save(
														{},
														{
														    success: function(model, respose, options)
														    {
														       console.log("The model has been saved to the server");
														    },
														    error: function(model, xhr, options)
														    {    
														    	$('#customer_reference_txt').val($('#customerReference_txt').val());
													        	$('#product_type_component_txt').val($('#product_type_component_description_drpdwn').val());
														       //showVoiceBox.configure("Component Description Saved Successfully",2000);
														       Do.validateAndDoCallback(callback);
														    }
														});
    											}
	saveTechnicalDefinition			 	=		function(callback)
												{
													var technicalDefinitionModelObject 	=   getTechnicalDefinitionModelObject();
										    	    technicalDefinitionModelObject.save(
													{},
													{
													    success: function(model, respose, options)
													    {
													       console.log("The model has been saved to the server");
													    },
													    error: function(model, xhr, options)
													    {    
													       Do.validateAndDoCallback(callback);
													    }
													});
												}
    saveProcessValidation			 	  =		function(callback)
												{
    												   var processValidationModelObject 	=   getProcessValidationModelObject();
											    	   processValidationModelObject.save(
														{},
														{
														    success: function(model, respose, options)
														    {
														       console.log("The model has been saved to the server");
														    },
														    error: function(model, xhr, options)
														    {    
														       Do.validateAndDoCallback(callback);
														    }
														});
												}
    saveEstimationDelays			 	  =		function(callback)
												{
    												var estimationCostsDelaysModelObject 	=   getEstimationDelaysModelObject();
										    	    estimationCostsDelaysModelObject.save(
													{},
													{
													    success: function(model, respose, options)
													    {
													       console.log("The model has been saved to the server");
													    },
													    error: function(model, xhr, options)
													    {    
													       Do.validateAndDoCallback(callback);
													    }
													});
												}
    saveQualityDeliverable			 	=		function(callback)
												{
    												var qualityDeliverableModelObject 	=   getQualityDeliverableModelObject();
										    		qualityDeliverablesModelObject.save(
													{},
													{
													    success: function(model, respose, options)
													    {
													       console.log("The model has been saved to the server");
													    },
													    error: function(model, xhr, options)
													    {    
													       Do.validateAndDoCallback(callback);
													    }
													});
												}
    savePlanningCustomerDelivery		=       function(qty_plancustdelivery,date_plancustdelivery,comment_plancustomerdelivery,callback)
    											{
    												  var componentID = $('#componentID').val();
												      var planningDeliveryModelObject   = new BackboneData.Models.PlanningCustomerDeliveryModel({
															
												    	  componentID	: 	componentID,
												    	  quantity		: 	qty_plancustdelivery,
												    	  dateOf 		:   new Date(),
												    	  comment  		:	comment_plancustomerdelivery,
													  });
												      planningDeliveryModelObject.save(
													  {},
													  {
														  success: function(model, respose, options)
														  {
															    console.log("The model has been saved to the server");
													      },
														  error: function(model, xhr, options)
														  {
															  buildPlanningCusDeliveryTable(componentID,function()
															  {
																  $('.dt-buttons a.btn').removeClass('dt-button');
																  $('#planningcust_footer').removeClass('hide');
																  Do.validateAndDoCallback(callback);
															  });
														   }
													   });	     
    											};
    calculateTotalQuantityandPrice		 = 		function()
    											{
    												var componentID = $('#componentID').val();
    												var unitSellingPrice = $('#unit_selling_price_txt').val();
											    	$.ajax({
													           type: 'get',
													           url: ApplicationConstants.fetchQuantityBasedonComponentID+componentID ,
													           contentType: "application/json; charset=utf-8",
													           traditional: true,
													           success: function (data) 
													           {
													        	   var totalQuantity = data.data;
													                console.log("total quantity is this ::"+totalQuantity);
													                $('#total_quantity_txt').val(totalQuantity);
													                var total_amount = parseInt(unitSellingPrice*totalQuantity);
											           				$('#total_amount_txt').val(total_amount);
													           }
											    		});
    											};
    setComponentDropdowns				=	  function(calldone)
  									 		  {
												    var buildDropDowns 	= 	window.componentDependenciesListObj;
													if(buildDropDowns!=undefined && buildDropDowns!=null)
													{
														var productTypeMap 	    = 	buildDropDowns.productTypeMap.list;
														var laboCustomerMap 	= 	buildDropDowns.laboCustomerMap.list;
														var rAndDMap 			= 	buildDropDowns.rAndDMap.list;
														var technologyMap 		= 	buildDropDowns.technologyMap.list;
														var protypistsMap 		= 	buildDropDowns.protypistsMap.list;
											            var productTypeListHTML,lablCustomertHTML,randDlistHTML,technologyListHTML,prototypistListHTML = "";
											          	productTypeMap.forEach(function(arrayItem)
											          	{
											        	  productTypeListHTML += '<option>' + arrayItem.productType + '</option>';
											          	});
											          	laboCustomerMap.forEach(function(arrayItem)
												        {
											        	  lablCustomertHTML += '<option>' + arrayItem.clientName + '</option>';
												        });
											          	rAndDMap.forEach(function(arrayItem)
												        {
											        	  randDlistHTML += '<option>' + arrayItem.randD + '</option>';
												        });
											          	technologyMap.forEach(function(arrayItem)
												        {
											        	  technologyListHTML += '<option>' + arrayItem.technology + '</option>';
												        });
											          	protypistsMap.forEach(function(arrayItem)
												        {
											        	   prototypistListHTML += '<option>' + arrayItem.prototypist + '</option>';
												        });
											            $('#product_type_component_description_drpdwn').html(productTypeListHTML).selectpicker('refresh');
												        $('#customer_drpdwn').html(lablCustomertHTML).selectpicker('refresh');
												        $('#r_d_manager_dprdwn').html(randDlistHTML).selectpicker('refresh');
												        $('#technology_drpdwn').html(technologyListHTML).selectpicker('refresh');
												        $('#supported_by_drpdwn').html(prototypistListHTML).selectpicker('refresh');
												        buildProcessTeamMemberList(calldone);
													}	
  									 		  }
  buildProcessTeamMemberList		   =	 function(calldone)
		  									 {
												  var currentOrderObject = window.currentOrderObject;
												  var processTeamMemberHTML ="";
													currentOrderObject.forEach(function(arrayItem)
													{
														var site = arrayItem.site_Workshop_Prototype ;
														$('#projectManagerComp').val(arrayItem.projectManager);
														var getURL = ApplicationConstants.fetchMembersByActorTypeandSite+site+'/MEP Study';
														 $.ajax({
													          type: 'get',
													          url: getURL,
													          contentType: "application/json; charset=utf-8",
													          traditional: true,
													          async:false,
													          success: function (data) 
													          {
													        	    var google = data.data;
													                console.log(google);
													                console.log("generating compoenent ID please wait..");
													                google.forEach(function(arrayItem)
															        {
													                	if(arrayItem.actorType=="MEP Study")
													                	{
													                		processTeamMemberHTML += '<option>' + arrayItem.actorEmail + '</option>';
													                	}	
															        });
													                $('#processteammemberdrpdwn').html(processTeamMemberHTML).selectpicker('refresh');
													                Do.validateAndDoCallback (calldone);
													          }
											        	 });
													});
		  									 }
  fetchComponentIDList				=	 function()	
	  									 {
											  $.ajax({
										          type: 'get',
										          url: ApplicationConstants.fetchComponentIDList,
										          contentType: "application/json; charset=utf-8",
										          traditional: true,
										          async:false,
										          success: function (data) 
										          {
										        	    var google = data.data;
										                console.log(google);
										                console.log("generating compoenent ID please wait..");
										                google.forEach(function(arrayItem)
												        {
										                	var compID = parseInt(arrayItem.next_id)+1;
										                	var newComponentID = 'C';
										                	if (compID.toString().length == 7)
										                	{
										                		newComponentID = newComponentID+compID;
										                	}
										                	else if (compID.toString().length == 6)
										                	{
										                		newComponentID = newComponentID+"0"+compID;
										                	}
										                	else if (compID.toString().length == 5)
										                	{
										                		newComponentID = newComponentID+"00"+compID;
										                	}
										                	else if (compID.toString().length == 4)
										                	{
										                		newComponentID = newComponentID+"000"+compID;
										                	}
										                	else if (compID.toString().length == 3)
										                	{
										                		newComponentID = newComponentID+"0000"+compID;
										                	}
										                	else if (compID.toString().length == 2)
										                	{
										                		newComponentID = newComponentID+"00000"+compID;
										                	}
										                	else if (compID.toString().length == 1)
										                	{
										                		newComponentID = newComponentID+"000000"+compID;
										                	}
										                	$('#componentID').val(newComponentID);
												        });
										          }
											  });
	  									 }
  fetchCustomerDetailsOnLoad    	=    function(customerNameSelected)
	  									 {
										      $.ajax({
											           type: 'get',
											           url: ApplicationConstants.fetchCustomerDetailsbyName+customerNameSelected ,
											           contentType: "application/json; charset=utf-8",
											           traditional: true,
											           success: function (data) 
											           {
											        	   var google = data.data;
											                console.log(google);
											                console.log("hello");
											                google.forEach(function(arrayItem)
											                {
											                    $('#Customer_Code').val(arrayItem.customer_Code);
											                    $('#Branch_Code').val(arrayItem.branch_Code);
											                    $('#Provider_Code').val(arrayItem.provider_Code);
											                    $('#Final_Delivery_Address').val(arrayItem.customer_Address);
											                });
											           }
										      });
	  									  };
  fetchLaboAddressOnLoad      		=   function(customerNameSelected)
	 									 {
										      $.ajax({
											           type: 'get',
											           url: ApplicationConstants.fetchLaboAddressOnLoad+customerNameSelected ,
											           contentType: "application/json; charset=utf-8",
											           traditional: true,
											           success: function (data) 
											           {
											        	   var google = data.data;
											                console.log(google);
											                console.log("hello");
											                google.forEach(function(arrayItem)
											                {
											                    $('#labo_address_or_other_txtarea').val(arrayItem.address);
											                    $('#labo_address_or_other_txtarea').removeClass('error');
											                });
											           }
										      });
	 									 };
buildPlanningCusDeliveryTable			=	function(componentID,done)
  											{
										  		$('#planningcust-table').DataTable(
												{
														  dom			: 'Bfrtip',
														  "ajax"		: ApplicationConstants.fetchPlanningCustomerDeliveryDetails+componentID,
														  "bDestroy"	: true,
														  "deferRender" : true,
														  "columns"		: [
														           		   {
														           			   "data"	: "quantity",
														           		   },
														           		   {
														           			    "data"	: "dateOf",
															           			"render" : function(data, type, row, meta)
															                    {
															                        if(type === 'display')
															                        {
															                       	 return $('<a style="color: black;text-decoration: initial;">')
															                            .text(new Date(data).toUTCString())
															                            .wrap('<div></div>')
															                            .parent()
															                            .html();
															                        } 
															                        else 
															                        {
															                            return data;
															                        }
															                   }   
														           		   },
														           		   {"data"	: "comment",
															           			"render" : function(data, type, row, meta)
															                    {
															                        if(type === 'display')
															                        {
															                       	 return $('<a style="color: black;text-decoration: initial;">')
															                            .text(data.value)
															                            .wrap('<div></div>')
															                            .parent()
															                            .html();
															                        } 
															                        else 
															                        {
															                            return data;
															                        }
															                   }    
														           		   }
														           		  ],
															           		initComplete: function () 
															    	        { 
															    	            this.api().columns().every( function () 
															    	            {
															    	                var column = this;
															    	                var select = $('<select class="selectpicker show-tick" title="Search" data-size="9" size="7" data-live-search="true" data-width="100%"><option value="" class="btn btn-default btn-sm text-center">No Filter</option></select>').appendTo( $(column.footer()).empty()).on( 'change', function () 
															    	                			 {
															    	                        			var val = $.fn.dataTable.util.escapeRegex($(this).val());
															    	                        			column.search( val ? '^'+val+'$' : '', true, false ).draw();
															    	                			 });
															    				                	column.data().unique().sort().each( function ( d, j ) 
															    				                	{
															    				                		select.append( '<option value="'+d+'">'+d+'</option>' )
															    				                	});
															    				                	$('.selectpicker').selectpicker().selectpicker('setStyle', 'btn-sm', 'add');
															    				                    $('.bs-searchbox input').addClass('input-sm');
															    				                    Do.validateAndDoCallback(done);
															    	             });
															    	          },
															    	          "columnDefs": [
															    	                         { "width": "20%", "targets": 0 }
															    	                        ],
															    	          buttons: [{
														                              text		: '<i class="fa fa-plus" aria-hidden="true"></i> Add New',
														                              className	: 'btn btn-sucess btn-sm newplanbtn',
														                              action		: function()
														                              {
														                              	 validateComponent(function()
														                  				 {
														                  					  saveComponent(function()
														                  					  {
														                  						  $('#plancustdevlivery-modal').modal('show');
														                  					  });
														                  				 });
														                              }
														                          }]
														});
  										}
  pullComponentDependencies 		=   function(calldone)
    									{
									        var fetchComponentDependenciesObj = new BackboneData.Collections.fetchComponentdependencies();
									        $.when(fetchComponentDependenciesObj.fetch()).done(function(response, xhr)
									        {
									        	    console.log(response);
									        	    window.componentDependenciesListObj || (window.componentDependenciesListObj = {});
									        	    window.componentDependenciesListObj = response;
									        	    Do.validateAndDoCallback (calldone);
									        }).fail(function() {});
									        
    									};
   setAdjustablePropertiesforCompPage		=   function(done)
												{
  													var currentOrderObject = window.currentOrderObject;
  													currentOrderObject.forEach(function(arrayItem)
  													{
  														if(arrayItem.type_of_the_Prototype_Order == "VENDU / SOLD")
  														{
  															$('#unitsellingpriceDiv').removeClass('hide');
  															$('#directDeliveryDiv').removeClass('hide');
  															$('#totalamtDiv').removeClass('hide');
  															$('#direct_delivery_to_the_customer_radiobtn1').removeAttr('disabled');
  															$('#direct_delivery_to_the_customer_radiobtn1').removeAttr('readonly');
  															$('#direct_delivery_to_the_customer_radiobtn2').removeAttr('disabled');
  															$('#direct_delivery_to_the_customer_radiobtn2').removeAttr('readonly');
  															$('#unit_selling_price_txt').removeAttr('disabled');
  															$('#unit_selling_price_txt').removeAttr('readonly');
  															$('#customer_order_no_compage_txt').removeAttr('disabled');
  															$('#customer_order_no_compage_txt').removeAttr('readonly');
  															$('#unit_selling_price_txt').attr('data-type',"text");
  															$('#unit_selling_price_txt').attr('data-required',true);
  														}	
  													});
  													Do.validateAndDoCallback(done);
												};
	fetchComponentObjectbasedOnComponentID   =  function(componentID,done)
											    {
													$.ajax({
												           type: 'get',
												           url: ApplicationConstants.fetchComponentObjectbasedOnComponentID+componentID ,
												           contentType: "application/json; charset=utf-8",
												           traditional: true,
												           async : false,
												           success: function (data) 
												           {
												        	    var google = data.data;
												        	    var componentList = google[0];
												        	    var componentDescriptionList = google[1];
												                console.log(google);
												                console.log("Component Object is here");
												                componentList.forEach(function(arrayItem){
												                	$('#componentID').val(arrayItem.componentID);
												                	$('#componentStatus').val(arrayItem.componentStatus);
												                	$('#total_quantity_txt').val(arrayItem.totalQuantity);
												                	$('#total_amount_txt').val(arrayItem.totalAmount);
												                });
												                componentDescriptionList.forEach(function(arrayItem){
												                	$('#customerReference_txt').val(arrayItem.customerReference);
												                	$('#customer_reference_txt').val(arrayItem.customerReference);
												                	$('#product_type_component_txt').val(arrayItem.productType);
												                	$('#product_type_component_description_drpdwn').selectpicker('val', arrayItem.productType);
												                	$('#product_specification_txtarea').val(arrayItem.productSpecification);
												                	$('#comment_component_description_txtarea').val(arrayItem.comment_componentDescription.value);
												                	if(arrayItem.directDeliverytoCustomer=="Yes")
												                	{
												                		$("#direct_delivery_to_the_customer_radiobtn1").prop("checked", true);
												                	}
												                	else if(arrayItem.directDeliverytoCustomer=="No")
												                	{
												                		$('#laboaddressdiv').removeClass('hide');
												                		$('#customerdiv').removeClass('hide');
												                		$("#direct_delivery_to_the_customer_radiobtn2").prop("checked", true);
												                	}
												                	$('#unit_selling_price_txt').val(arrayItem.unitSellingPrice);
												                	$('#customer_drpdwn').selectpicker('val', arrayItem.customer);
												                	$('#labo_address_or_other_txtarea').val(arrayItem.laboAdress);
												                });
												                buildPlanningCusDeliveryTable($('#componentID').val(),function()
												                {
												                	Do.validateAndDoCallback(done);
												                });
												           }
													  });
											    };
   	changeComponentSection			  = function(currentTab,PreviousTab)
   										{
   											  switch (PreviousTab)
									          {
									              case "Component description"  :
									            	  								validateComponent(function()
									            	  								{
									            	  									saveComponentDescription();
									            	  									checkCurrentTab(currentTab);
									            	  								});
									            	  								break;
									              case "Technical definition"    :
									            	  								validateComponent(function()
									            	  								{
									            	  									saveTechnicalDefinition();
									            	  									checkCurrentTab(currentTab);
									            	  								});
									            	  								break;
									              case "Process validation"      :
									            	  								validateComponent(function()
									            	  								{
									            	  									saveProcessValidation();
									            	  									checkCurrentTab(currentTab);
									            	  								});
									            	  								break;
									              case "Estimation Costs and Delays"		:
									            	  								validateComponent(function()
									            	  								{ 
									            	  									 saveEstimationDelays();
									            	  									checkCurrentTab(currentTab);
									            	  								});
									            	  								break;
									              case "Qualities deliverables"		:
									            	  								validateComponent(function()
									            	  								{
									            	  									saveQualityDeliverable();
									            	  									checkCurrentTab(currentTab);
									            	  								});
									            	  								break;
									          }
   										};
   	checkCurrentTab					= function(currentTab)
   									  {
									   		switch (currentTab)
									        {
									            case "Component description"  :
																	            	$('#componentdesc-subtab').show();
																		    		$('#techdef-subtab').hide();
																		    		$('#processvalid-subtab').hide();
																		    		$('#costdelay-subtab').hide();
																		    		$('#qualdel-subtab').hide();
									          	  									break;
									            case "Technical definition"    :
																	            	$('#techdef-subtab').show();
																	    			$('#componentdesc-subtab').hide();
																	    			$('#processvalid-subtab').hide();
																	    			$('#costdelay-subtab').hide();
																	    			$('#qualdel-subtab').hide();
									          	  									break;
									            case "Process validation"      :
																	            	$('#processvalid-subtab').show(); 
																	    			$('#componentdesc-subtab').hide();
																	    			$('#techdef-subtab').hide();
																	    			$('#costdelay-subtab').hide();
																	    			$('#qualdel-subtab').hide();
									          	  									break;
									            case "Estimation Costs and Delays"		:
																			            	$('#costdelay-subtab').show(); 
																			    			$('#componentdesc-subtab').hide();
																			    			$('#techdef-subtab').hide();
																			    			$('#processvalid-subtab').hide();
																			    			$('#qualdel-subtab').hide();
																			    			break;
									            case "Qualities deliverables"		:
																			            	$('#qualdel-subtab').show();
																			    			$('#componentdesc-subtab').hide();
																			    			$('#techdef-subtab').hide();
																			    			$('#processvalid-subtab').hide();
																			    			$('#costdelay-subtab').hide();
																			    			break;
									        }
   									  };	
   	
})();