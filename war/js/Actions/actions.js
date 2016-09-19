(function()
{
	saveOrder 						= 		function(callback)
    										{
													showVoiceBox.configure("Saving your order",2000);
											        var Site_Workshop_Prototype 	= 	Do.BackboneEncode($('#Site_Workshop_Prototype').val());
											        var Geosite 					= 	Do.BackboneEncode($('#Geosite').val());
											        var No_Prototype_Order 			= 	Do.BackboneEncode($('#No_Prototype_Order').val());
											        var Proto_Type 					= 	Do.BackboneEncode($('#Proto_Type').val());
											        var pcccheckbox 				= 	Do.BackboneEncode($('#pcccheckbox').is(":checked"));
											        var openordercheckbox 			= 	Do.BackboneEncode($('#openordercheckbox').is(":checked"));
											        var frittagecheckbox 			= 	Do.BackboneEncode($('#frittagecheckbox').is(":checked"));
											        var e52checkbox 				= 	Do.BackboneEncode($('#e52checkbox').is(":checked"));
											        var intralecheckbox 			= 	Do.BackboneEncode($('#intralecheckbox').is(":checked"));
											        var Type_of_the_Prototype_Order = 	Do.BackboneEncode($('#Type_of_the_Prototype_Order').val());
											        var Date_of_the_Order 			= 	Do.BackboneEncode($('#Date_of_the_Order').val());
											        var no_customer_order 			= 	Do.BackboneEncode($('#no_customer_order').val());
											        var customer_order_list 		=	attachmentIDArray;
											        var Customer_Name 				= 	Do.BackboneEncode($('#Customer_Name').val());
											        var Customer_Code 				= 	Do.BackboneEncode($('#Customer_Code').val());
											        var Branch_Code 				= 	Do.BackboneEncode($('#Branch_Code').val());
											        var Provider_Code 				= 	Do.BackboneEncode($('#Provider_Code').val());
											        var Final_Delivery_Address 		= 	Do.BackboneEncode($('#Final_Delivery_Address').val());
											        var Additional_Address 			= 	Do.BackboneEncode($('#Additional_Address').val());
											        var Site_Address	 			= 	Do.BackboneEncode($('#Site_Address').val());
											        var Plateform 					= 	Do.BackboneEncode($('#Plateform').val());
											        var Incoterms 					= 	Do.BackboneEncode($('#Incoterms').val());
											        var Place 						= 	Do.BackboneEncode($('#Place').val());
											        var Customer_Receiver_Name 		= 	Do.BackboneEncode($('#Customer_Receiver_Name').val());
											        var Customer_Receiver_Telephone = 	Do.BackboneEncode($('#Customer_Receiver_Telephone').val());
											        var Allocation_of_turnover 		= 	Do.BackboneEncode($('#Allocation_of_turnover').val());
											        var Total_Order_Amount 			= 	Do.BackboneEncode($('#Total_Order_Amount').val());
											        var Order_Status 				= 	Do.BackboneEncode($('#Order_Status').val());
											        var requester 					= 	Do.BackboneEncode($('#requester').val());
											        var mepstudy 					= 	Do.BackboneEncode($('#mepstudy').val());
											        var quality 					= 	Do.BackboneEncode($('#quality').val());
											        var protoworkshop 				= 	Do.BackboneEncode($('#protoworkshop').val());
											        var controlmanagement		 	= 	Do.BackboneEncode($('#controlmanagement').val());
											        var fotrade 					= 	Do.BackboneEncode($('#fotrade').val());
											        var adv 						= 	Do.BackboneEncode($('#adv').val());
											        var projmanager 				= 	Do.BackboneEncode($('#projmanager').val());
											        var orderDetailsObj 			= 	new BackboneData.Models.OrderDetailModel(
										        	{
										        	            site_Workshop_Prototype		:	Site_Workshop_Prototype,
										        	            geoSite						: 	Geosite,
										        	            no_prototype_order			: 	No_Prototype_Order,
										        	            proto_Type					: 	Proto_Type,
										        	            pcc							: 	pcccheckbox,
										        	            open_Order					: 	openordercheckbox,
										        	            frittage					: 	frittagecheckbox,
										        	            e52							: 	e52checkbox,
										        	            intraLE						: 	intralecheckbox,
										        	            type_of_the_Prototype_Order	: 	Type_of_the_Prototype_Order,
										        	            no_customerOrder			: 	no_customer_order,
										        	            customerOrderAttachment		: 	customer_order_list,
										        	            customer_Name				: 	Customer_Name,
										        	            customer_Code				:	Customer_Code,
										        	            branch_Code					: 	Branch_Code,
										        	            provider_Code				: 	Provider_Code,
										        	            final_Delivery_Address		: 	Final_Delivery_Address,
										        	            additional_Address			: 	Additional_Address,
										        	            site_Address				:	Site_Address,
										        	            plateform					: 	Plateform,
										        	            incoterms					: 	Incoterms,
										        	            place						: 	Place,
										        	            customer_Receiver_Name		: 	Customer_Receiver_Name,
										        	            customer_Receiver_Telephone	: 	Customer_Receiver_Telephone,
										        	            allocation_of_turnover		: 	Allocation_of_turnover,
										        	            requester					: 	requester,
										        	            cadTeamMember_MEPStudy		: 	mepstudy,
										        	            qualityTeamMember			: 	quality,
										        	            protoWorkshop				: 	protoworkshop,
										        	            managementController		: 	controlmanagement,
										        	            kamCommerce					: 	fotrade,
										        	            salesAdministrator_ADV		: 	adv,
										        	            projectManager				: 	projmanager,
										        	            order_Status				: 	"Draft",
										        	            total_Order_Amount			: 	0,
										        	            lastPrototypeOrderID		:   No_Prototype_Order
										        	   });
											          console.log(orderDetailsObj);
											          console.log("orderDetailsObj :: "+orderDetailsObj);
											          if(currentPage.get().indexOf("orderdetails")!=-1)
											          {
											        	  			var orderDetailsUpdateObj 			= 	new BackboneData.Models.OrderDetailModelUpdate(
														        	{
														        	            site_Workshop_Prototype		:	Site_Workshop_Prototype,
														        	            geoSite						: 	Geosite,
														        	            no_prototype_order			: 	No_Prototype_Order,
														        	            proto_Type					: 	Proto_Type,
														        	            pcc							: 	pcccheckbox,
														        	            open_Order					: 	openordercheckbox,
														        	            frittage					: 	frittagecheckbox,
														        	            e52							: 	e52checkbox,
														        	            intraLE						: 	intralecheckbox,
														        	            type_of_the_Prototype_Order	: 	Type_of_the_Prototype_Order,
														        	            no_customerOrder			: 	no_customer_order,
														        	            customerOrderAttachment		: 	customer_order_list,
														        	            customer_Name				: 	Customer_Name,
														        	            customer_Code				:	Customer_Code,
														        	            branch_Code					: 	Branch_Code,
														        	            provider_Code				: 	Provider_Code,
														        	            final_Delivery_Address		: 	Final_Delivery_Address,
														        	            additional_Address			: 	Additional_Address,
														        	            site_Address				:	Site_Address,
														        	            plateform					: 	Plateform,
														        	            incoterms					: 	Incoterms,
														        	            place						: 	Place,
														        	            customer_Receiver_Name		: 	Customer_Receiver_Name,
														        	            customer_Receiver_Telephone	: 	Customer_Receiver_Telephone,
														        	            allocation_of_turnover		: 	Allocation_of_turnover,
														        	            requester					: 	requester,
														        	            cadTeamMember_MEPStudy		: 	mepstudy,
														        	            qualityTeamMember			: 	quality,
														        	            protoWorkshop				: 	protoworkshop,
														        	            managementController		: 	controlmanagement,
														        	            kamCommerce					: 	fotrade,
														        	            salesAdministrator_ADV		: 	adv,
														        	            projectManager				: 	projmanager,
														        	            order_Status				: 	"Draft",
														        	            total_Order_Amount			: 	0,
														        	            lastModifiedBy				:	useremailid,
														        	            lastPrototypeOrderID		:   $.trim(localStorage.getItem("lastPrototypeOrderID"))
														        	   });
											        	  				orderDetailsUpdateObj.save(
																	    {},
																	    {
																		     success: function(model, respose, options)
																		     {
																		         console.log("The model has been saved to the server");
																		     },
																		     error: function(model, xhr, options)
																		     {
																		         showVoiceBox.configure("Order saved successfully",2000);
																		         Do.validateAndDoCallback(callback);
																		     }
																		     
																	   });
											          }
											          else
											          { 
											        	    orderDetailsObj.save(
													        {},
													        {
														          success: function(model, respose, options)
														          {
														               console.log("The model has been saved to the server");
														          },
														          error: function(model, xhr, options)
														          {
														            	showVoiceBox.configure("Order saved successfully",2000);
														                window.orderStatus = "saved";
														                buildCompListTable(No_Prototype_Order);
														                Do.validateAndDoCallback(callback);
														          }
													        });  
											          }	
    											};
    saveComponent		 			     = 		function(callback)
		    									{
												    	var orderIDReference	= 	$('#no_prototype_order_comppage_txt').val();
														var componentID 		=   $('#componentID').val();
														var componentStatus		= 	$('#componentStatus').val();
														var TotalQuantity		=	$('#total_quantity_txt').val();
														var TotalAmount			=	$('#total_amount_txt').val();
														
														var customerReference_txt = $('#customerReference_txt').val();
														var product_type_component_description_drpdwn = $('#product_type_component_description_drpdwn').val();
														var unit_selling_price_txt = $('#unit_selling_price_txt').val();
														var customer_drpdwn = $('#customer_drpdwn').val();
														var DirecedeliverytoCustomer = $('#directDeliveryDiv input[name="optradio1"]:checked').val();
														var product_specification_txtarea = $('#product_specification_txtarea').val();
														var labo_address_or_other_txtarea = $('#labo_address_or_other_txtarea').val();
														var comment_component_description_txtarea = $('#comment_component_description_txtarea').val();
														
														var componentcreationObject 			= 	new BackboneData.Models.ComponentCreateModel(
													    {
													    	orderIDReference		:	orderIDReference,
													    	componentID				: 	componentID,
													    	componentStatus			: 	componentStatus,
													    	TotalQuantity			: 	TotalQuantity,
													    	TotalAmount				: 	TotalAmount,
													    });
														var componentDescriptionModelObject   = new BackboneData.Models.ComponentDescriptionModel({
															
															  componentID				: 	componentID,
															  customerReference 		:   customerReference_txt,
															  productType 				:   product_type_component_description_drpdwn,
															  unitSellingPrice 			: 	unit_selling_price_txt,
															  customer 					: 	customer_drpdwn,
															  directDeliverytoCustomer  :	DirecedeliverytoCustomer,
															  productSpecification		: 	product_specification_txtarea,
														      laboAdress 				: 	labo_address_or_other_txtarea,
														      comment_componentDescription : comment_component_description_txtarea,
														});
														componentcreationObject.save(
													    {},
													    {
													        success: function(model, respose, options)
													        {
													        	console.log("The model has been saved to the server");
													        },
													        error: function(model, xhr, options)
													        {
													        			componentDescriptionModelObject.save(
																	    {},
																	    {
																	        success: function(model, respose, options)
																	        {
																	        	console.log("The model has been saved to the server");
																	        },
																	        error: function(model, xhr, options)
																	        {
																	        	showVoiceBox.configure("Component saved successfully",2000);
																	        	 Do.validateAndDoCallback(callback);
																	            //buildCompListTable(No_Prototype_Order);
																	        }
																	    });
													        }
													    });
		    									};
    savePlanningCustomerDelivery		 =      function(qty_plancustdelivery,date_plancustdelivery,comment_plancustomerdelivery,done)
    											{
    												  var componentID = $('#componentID').val();
												      var planningDeliveryModelObject   = new BackboneData.Models.PlanningCustomerDeliveryModel({
															
												    	  componentID					: 	componentID,
														  Quantity						: 	qty_plancustdelivery,
														  Dateof 						:   date_plancustdelivery,
														  Comment  						:	comment_plancustomerdelivery,
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
																Do.validateAndDoCallback(done);
															}
													  });	     
    											};
	validateOrder						 =		function(done)
												{
													var setFlag = false;
													if (validate.getInstance().formordiv('orderdetailview'))
											        {
														Do.validateAndDoCallback(done);
											        }
											        else
											        {
											            $('#orderdetailview').find('.selectpicker').each(function()
											            {
											                if ($(this).hasClass('error'))
											                {
											                    if (!$(this).parent().parent().hasClass('hide'))
											                    {
											                        setFlag = true;
											                        $(this).selectpicker('setStyle', 'error', 'add');
											                    }
											                }
											            });
											            $('#orderdetailview').find('.form-control').each(function()
											            {
											                if ($(this).hasClass('error'))
											                {
											                    if (!$(this).parent().hasClass('hide'))
											                    {
											                        setFlag = true;
											                    }
											                    else
											                    {
											                        $(this).removeClass('error');
											                    }
											                }
											            });
											            if (!setFlag)
												        {
											            	Do.validateAndDoCallback(done);
												        }
											        }
												};
	validateComponent					= function(done)
										  {
												var setFlag = false;
												if (validate.getInstance().formordiv('component-section'))
										        {
										            Do.validateAndDoCallback(done);
										        }
										        else
										        {
										            $('#component-section').find('.selectpicker').each(function()
										            {
										                if ($(this).hasClass('error'))
										                {
										                    if (!$(this).parent().parent().hasClass('hide'))
										                    {
										                        setFlag = true;
										                        $(this).selectpicker('setStyle', 'error', 'add');
										                    }
										                }
										            });
										            $('#component-section').find('.form-control').each(function()
										            {
										                if ($(this).hasClass('error'))
										                {
										                    if (!$(this).parent().hasClass('hide'))
										                    {
										                        setFlag = true;
										                    }
										                    else
										                    {
										                        $(this).removeClass('error');
										                    }
										                }
										            });
										            if (!setFlag)
											        {
										            	var isDirectDeliveryMandatory = $('#direct_delivery_to_the_customer_radiobtn2').data('required');
										            	if(isDirectDeliveryMandatory)
										            	{
										            		if($('#directDeliveryDiv input[name="optradio1"]:checked').val()!=undefined)
										            		{
										            			Do.validateAndDoCallback(done);
										            		}
										            		else
										            		{
										            			showVoiceBox.configure("Please select your option for 'Direct Delivery to Customer' ",2000);
										            		}
										            	}
										            	else
										            	{
										            		Do.validateAndDoCallback(done);
										            	}	
											        }
										            else
										            {
										            	showVoiceBox.configure("Please fill the mandatory fields",2000);
										            }	
										        }
										  };
	setOrderDetails					= function(orderDetailsObj)
									  {
											console.error("dog");
											console.log(orderDetailsObj);
											window.currentOrderObject || (window.currentOrderObject = {});
								        	window.currentOrderObject = orderDetailsObj;
											orderDetailsObj.forEach(function(arrayItem)
									        {
												localStorage.setItem("lastPrototypeOrderID", arrayItem.lastPrototypeOrderID);
												localStorage.setItem("prototypeIDOnupdate",arrayItem.lastPrototypeOrderID.slice('3','10'));
												$('#No_Prototype_Order').val(arrayItem.no_prototype_order);
												$('#Order_Status').val(arrayItem.order_Status);
												$('#Site_Workshop_Prototype').selectpicker('val', arrayItem.site_Workshop_Prototype); //drpdwn
									            $('#Proto_Type').selectpicker('val', arrayItem.proto_Type);  //drpdwn
										        $('#Geosite').val(arrayItem.geoSite);
										        $('#Type_of_the_Prototype_Order').selectpicker('val', arrayItem.type_of_the_Prototype_Order);//drpdwn
										        $('#Date_of_the_Order').val(new Date(arrayItem.date_of_the_Order).toUTCString()); 
										        loadActorsOnOrderDetails(arrayItem.site_Workshop_Prototype,function()
										        {
										        	 /*=========== Actors ==========*/
											        $('#requester').selectpicker('val', arrayItem.requester);
											        $('#mepstudy').selectpicker('val', arrayItem.cadTeamMember_MEPStudy); //drpdwn
											        $('#quality').selectpicker('val', arrayItem.qualityTeamMember); //drpdwn
											        $('#protoworkshop').selectpicker('val', arrayItem.protoWorkshop); //drpdwn
											        $('#controlmanagement').selectpicker('val', arrayItem.managementController); //drpdwn
											        $('#fotrade').selectpicker('val', arrayItem.kamCommerce); //drpdwn
											        $('#adv').selectpicker('val', arrayItem.salesAdministrator_ADV); //drpdwn
											        $('#projmanager').selectpicker('val', arrayItem.projectManager); //drpdwn
										        });
										        if(arrayItem.pcc)
										        {
										        	$('#pcccheckbox').prop('checked', true);
										        }
										        if(arrayItem.open_Order)
										        {
										        	$('#openordercheckbox').prop('checked', true);
										        }
										        if(arrayItem.frittage)
										        {
										        	$('#frittagecheckbox').prop('checked', true);
										        }
										        if(arrayItem.e52)
										        {
										        	$('#e52checkbox').prop('checked', true);
										        }
										        if(arrayItem.intraLE)
										        {
										        	$('#intralecheckbox').prop('checked', true);
										        }
										        
										        /*============== Customers =============*/
										        
										        $('#no_customer_order').val(arrayItem.no_customerOrder);
										        $('#Customer_Name').selectpicker('val', arrayItem.customer_Name); //drpdwn
										        $('#Customer_Code').val(arrayItem.customer_Code);
										        $('#Branch_Code').val(arrayItem.branch_Code);
										        $('#Provider_Code').val(arrayItem.provider_Code);
										        $('#Plateform').selectpicker('val', arrayItem.plateform); //drpdwn
										        $('#Incoterms').selectpicker('val', arrayItem.incoterms); //drpdwn
										        $('#Place').selectpicker('val', arrayItem.place); //drpdwn
										        $('#Customer_Receiver_Name').val(arrayItem.customer_Receiver_Name);
										        $('#Customer_Receiver_Telephone').val(arrayItem.customer_Receiver_Telephone);
										        $('#Allocation_of_turnover').selectpicker('val', arrayItem.allocation_of_turnover); //drpdwn
										        $('#Final_Delivery_Address').val(arrayItem.final_Delivery_Address);
										        $('#Additional_Address').val(arrayItem.additional_Address);
										        for(var totalfiles=0;totalfiles<arrayItem.customerOrderAttachment.length;totalfiles++)
										        {
										        	attachmentIDArray=[];
										        	actions_attach.pullAttachmentList(arrayItem.customerOrderAttachment[totalfiles]);
										        }	
										        $('#Site_Address').val(arrayItem.site_Address);
										        $('#Total_Order_Amount').val(arrayItem.total_Order_Amount);
										        var  Type_of_the_Prototype_Order 	= 	$.trim($('#Type_of_the_Prototype_Order').val());
										        var  Site_Workshop_Prototype 		= 	$.trim($('#Site_Workshop_Prototype').val());
										        var  Proto_Type 					= 	$.trim($('#Proto_Type').val());
										        checkVisibilityOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,function()
										        {
										        	checkEditablesettingsOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,function()
													{
										        		checkMandatoryOnLoad(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,function()
														{
										        			/*===================== Component Details Filling ======================*/
													        $('#no_prototype_order_comppage_txt').val(arrayItem.no_prototype_order);
													        $('#order_type_txt').val(arrayItem.type_of_the_Prototype_Order);
													        $('#orderinCompPage a').html(arrayItem.no_prototype_order);
													        $('#orderinCompPage').removeClass('hide');
													        $('#orderinCompPage a').attr('href','/#orderdetails?orderid='+arrayItem.no_prototype_order);
													        //$('#customer_reference_txt').val();
													        $('#product_type_component_txt').val();
													        $('#componentStatus').val('Draft');	
													        if(arrayItem.type_of_the_Prototype_Order=="VENDU / SOLD")
													        {
													        	$('#direct_delivery_to_the_customer_radiobtn1').attr('data-type',"text");
													        	$('#direct_delivery_to_the_customer_radiobtn1').attr('data-required',true);
													        	$('#direct_delivery_to_the_customer_radiobtn2').attr('data-type',"text");
													        	$('#direct_delivery_to_the_customer_radiobtn2').attr('data-required',true);
													        }
													        else
													        {
													        	$('#direct_delivery_to_the_customer_radiobtn1').removeAttr('data-type');
													        	$('#direct_delivery_to_the_customer_radiobtn1').attr('data-required',false);
													        	$('#direct_delivery_to_the_customer_radiobtn2').removeAttr('data-type');
													        	$('#direct_delivery_to_the_customer_radiobtn2').attr('data-required',false);
													        }	
														});  	
													});
										        });
									        });
									  };
  setComponentDropdowns			=	  function(calldone)
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
										        Do.validateAndDoCallback (calldone);
											}	
  									 }
  fetchComponentIDList			=	 function()	
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
  fetchCustomerDetailsOnLoad    =    function(customerNameSelected)
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
  fetchLaboAddressOnLoad      	=   function(customerNameSelected)
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
  setPrototypeIDOnUpdate		=	 function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
  									 {
	  									   var currentPrototypeOrderID 	= 	$.trim(localStorage.getItem("prototypeIDOnupdate"));
	  									   var newPrototypeOrderID = "";
	  									   if (Site_Workshop_Prototype.indexOf("La Suze")!=-1)
						                   {
						                       newPrototypeOrderID = "LAS";
						                   }
						                   else if (Site_Workshop_Prototype.indexOf("La Verr")!=-1)
						                   {
						                       newPrototypeOrderID = "LVR";
						                   }
						                   else if (Site_Workshop_Prototype.indexOf("Laval")!=-1)
						                   {
						                       newPrototypeOrderID = "LVL";
						                   }
						                   else if (Site_Workshop_Prototype.indexOf("Nogent")!=-1)
						                   {
						                       newPrototypeOrderID = "NOG";
						                   }
						                   else if (Site_Workshop_Prototype.indexOf("Reims")!=-1)
						                   {
						                       newPrototypeOrderID = "RMS";
						                   }
	  									   newPrototypeOrderID = newPrototypeOrderID+currentPrototypeOrderID+"-"+Proto_Type;
						                   if (Type_of_the_Prototype_Order == "VENDU / SOLD")
						                   {
						                       newPrototypeOrderID = newPrototypeOrderID + "V";
						                   }
						                   else if (Type_of_the_Prototype_Order == "NON VENDU / NOT SOLD")
						                   {
						                       newPrototypeOrderID = newPrototypeOrderID + "N";
						                   }
						                   $('#No_Prototype_Order').val(newPrototypeOrderID);
						                   $('#No_Prototype_Order').removeClass('error');
  									 }
  setPrototypeID			    =    function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
  									 {
	  									  showVoiceBox.configure("Setting Prototype ID",500);
										  $.ajax({
									          type: 'get',
									          url: ApplicationConstants.fetchIDList,
									          contentType: "application/json; charset=utf-8",
									          traditional: true,
									          success: function (data) 
									          {
									       	   	   var google = data.data;
									               console.log(google);
									               console.log("hello");
									               var htmllist = "";
									               google.forEach(function(arrayItem)
									               {
									                   var lastGeneratedID 	= 	parseInt(arrayItem.next_id) + 1;
									                   var newPrototypeOrderID = 	"";
									                   localStorage.setItem("lastGeneratedID", lastGeneratedID);
									                   if (Site_Workshop_Prototype.indexOf("La Suze")!=-1)
									                   {
									                       newPrototypeOrderID = "LAS";
									                   }
									                   else if (Site_Workshop_Prototype.indexOf("La Verr")!=-1)
									                   {
									                       newPrototypeOrderID = "LVR";
									                   }
									                   else if (Site_Workshop_Prototype.indexOf("Laval")!=-1)
									                   {
									                       newPrototypeOrderID = "LVL";
									                   }
									                   else if (Site_Workshop_Prototype.indexOf("Nogent")!=-1)
									                   {
									                       newPrototypeOrderID = "NOG";
									                   }
									                   else if (Site_Workshop_Prototype.indexOf("Reims")!=-1)
									                   {
									                       newPrototypeOrderID = "RMS";
									                   }
									                   if (lastGeneratedID.toString().length == 4)
									                   {
									                       newPrototypeOrderID = newPrototypeOrderID + "000";
									                   }
									                   else if (lastGeneratedID.toString().length == 5)
									                   {
									                       newPrototypeOrderID = newPrototypeOrderID + "00";
									                   }
									                   else if (lastGeneratedID.toString().length == 6)
									                   {
									                       newPrototypeOrderID = newPrototypeOrderID + "0";
									                   }
									                   else if (lastGeneratedID.toString().length == 7)
									                   {
									                       newPrototypeOrderID = newPrototypeOrderID;
									                   }
									                   newPrototypeOrderID = newPrototypeOrderID + parseInt(lastGeneratedID) + "-" + Proto_Type;
									                   if (Type_of_the_Prototype_Order == "VENDU / SOLD")
									                   {
									                       newPrototypeOrderID = newPrototypeOrderID + "V";
									                   }
									                   else if (Type_of_the_Prototype_Order == "NON VENDU / NOT SOLD")
									                   {
									                       newPrototypeOrderID = newPrototypeOrderID + "N";
									                   }
									                   $('#No_Prototype_Order').val(newPrototypeOrderID);
									                   $('#No_Prototype_Order').removeClass('error');
									               });
									          }
									   });
  									 };
 validateProtypeID				=	function(done)
									{
										var  IdListObj 	= 	new BackboneData.Collections.fetchlastPrototypeID();
								        $.when(IdListObj.fetch()).done(function(response, xhr)
								        {
								        	 var lastIDObj = response.data;
								        	 lastIDObj.forEach(function(arrayItem)
										     {
									              var lastGeneratedID 	= 	parseInt(arrayItem.next_id); // 2001
									              var currentProtypeID = $.trim(localStorage.getItem("lastGeneratedID")); //2001
	    										  currentProtypeID = parseInt(currentProtypeID)-1; // 2000
									              if(lastGeneratedID!=currentProtypeID) // 2001 !=2000
									              {
									            	  bootbox.confirm("The selected ID has been chosen for other Order. New prototype order number has been created. Do you want to continue saving the order?", function(result)
									            	  {
									            	       if (result)
									            	       {
									            	    	   generateNewPrototypeID(function()
									            	    	   {
									            	    		   //Do.validateAndDoCallback(done);
									            	    	   });
									            	       }
									            	  });
									              } 
									              else
									              {
									            	  Do.validateAndDoCallback(done);
									              } 	  
										     });
								        	 
								        }).fail(function() {});
									};
 generateNewPrototypeID			=	 function(callback)
 									 {
										 var  Type_of_the_Prototype_Order 	= 	$.trim($('#Type_of_the_Prototype_Order').val());
									     var  Site_Workshop_Prototype 		= 	$.trim($('#Site_Workshop_Prototype').val());
									     var  Proto_Type 					= 	$.trim($('#Proto_Type').val());
									     setPrototypeID(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
									     Do.validateAndDoCallback(callback);
 									 };
  checkMandatoryOnLoad			=	 function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,done)
  									 {
										  if (Type_of_the_Prototype_Order == 'VENDU / SOLD')
										  {
												$('#fotrade').attr('data-required','yes');
												$('#fotrade').attr('data-type','text');
										  }	
										  else
										  {
											   $('#fotrade').removeAttr('data-required');
											   $('#fotrade').removeAttr('data-type');
										  }
										  if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && $('#intralecheckbox').is(":not(:checked)"))
									      {
												$('#adv').attr('data-required','yes');
												$('#adv').attr('data-type','text');
									      }
										  else
										  {
												$('#adv').removeAttr('data-required');
												$('#adv').removeAttr('data-required');
										  }
										  Do.validateAndDoCallback(done);
  									 };
  checkEditablesettingsOnload	=	function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,done)
  									{
										    if(Proto_Type=="P2")
											{
												$('#pcccheckbox').removeAttr('readonly');
												$('#pcccheckbox').removeAttr('disabled');
											}
									 		else
									 		{
									 			$('#pcccheckbox').attr('readonly',true);
												$('#pcccheckbox').attr('disabled',true);
									 		}	
									 		if (Type_of_the_Prototype_Order == 'VENDU / SOLD')
									 		{
									 			$('#openorderlabel,#openordercheckbox,#no_customer_order,#customer_order_file button,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeAttr('readonly');
									 			$('#openorderlabel,#openordercheckbox,#no_customer_order,#customer_order_file button,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeAttr('disabled');
									 			$('#fotrade,#incotermsdiv,#placediv,#allocationdiv').removeAttr('readonly');
									 			$('#fotrade,#Place,#Incoterms,#Allocation_of_turnover').removeAttr('disabled');
									 			$('#fodiv .bootstrap-select,#incotermsdiv .bootstrap-select,#placediv .bootstrap-select,#allocationdiv .bootstrap-select').removeClass('disabled');
									 			$('#fodiv .dropdown-toggle,#incotermsdiv .dropdown-toggle,#placediv .dropdown-toggle,#allocationdiv .dropdown-toggle').removeClass('disabled');
									 		}
									 		else
									 		{
									 			$('#openorderlabel,#openordercheckbox,#no_customer_order,#customer_order_file button,#incotermsdiv,#placediv,#allocationdiv,#fodiv').attr('readonly',true);
									 			$('#openorderlabel,#openordercheckbox,#no_customer_order,#customer_order_file button,#incotermsdiv,#placediv,#allocationdiv,#fodiv').attr('disabled',true);
									 		}
									 		if(Site_Workshop_Prototype.indexOf("La Verr")!=-1 && Proto_Type=="P0" && Type_of_the_Prototype_Order == "VENDU / SOLD")
											{
												$('#frittagelabel,#frittagecheckbox').removeAttr('readonly');
												$('#frittagelabel,#frittagecheckbox').removeAttr('disabled');
											}
									 		else
									 		{
									 			$('#frittagelabel,#frittagecheckbox').attr('readonly',true);
												$('#frittagelabel,#frittagecheckbox').attr('disabled',true);
									 		}	
									 		if(Site_Workshop_Prototype.indexOf("Nogent")!=-1)
											{
												$('#e52label,#e52checkbox').removeAttr('readonly');
												$('#e52label,#e52checkbox').removeAttr('disabled');
											}
									 		else
									 		{
									 			$('#e52label,#e52checkbox').attr('readonly',true);
												$('#e52label,#e52checkbox').attr('disabled',true);
									 		}	
											if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && Site_Workshop_Prototype.indexOf("La Suze")!=-1)
											{
												$('#intralelabel,#intralecheckbox').removeAttr('readonly');
												$('#intralelabel,#intralecheckbox').removeAttr('disabled');
											}	
											else
											{
												$('#intralelabel,#intralecheckbox').attr('readonly',true);
												$('#intralelabel,#intralecheckbox').attr('disabled',true);
											}	
											if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && $('#intralecheckbox').is(":not(:checked)"))
									        {
												$('#adv').removeAttr('readonly');
									 			$('#adv').removeAttr('disabled');
									 			$('#advdiv .bootstrap-select').removeClass('disabled');
									 			$('#advdiv .dropdown-toggle').removeClass('disabled');
									        }
											else
											{
												$('#adv').attr('readonly',true);
												$('#adv').attr('disabled',true);
											}
											Do.validateAndDoCallback(done);
  									};
  checkVisibilityOnload			=	function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,done)		
  									{
									  		if(Proto_Type=="P2")
											{
												$('#pcclabel,#pcccheckbox').removeClass('hide');
											}
											else
											{
												$('#pcclabel,#pcccheckbox').addClass('hide');
												$('#pcccheckbox').attr('checked', false);
											}	
											if (Type_of_the_Prototype_Order == 'VENDU / SOLD')
											{
												$('#totalorderamountdiv,#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeClass('hide');
											}
											else
											{
												$('#totalorderamountdiv,#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').addClass('hide');
												$('#Total_Order_Amount').val('');
												$('#openordercheckbox').attr('checked',false);
												$('#no_customer_order').val('');
												attachmentIDArray = [];
												$('#customer_order_list').html('');
												$('#Incoterms').selectpicker('deselectAll')
												$('#Incoterms').selectpicker('val', '');
												$('#Incoterms').selectpicker('refresh');
												$('#Place').selectpicker('deselectAll')
												$('#Place').selectpicker('val', '');
												$('#Place').selectpicker('refresh');
												$('#Allocation_of_turnover').selectpicker('deselectAll')
												$('#Allocation_of_turnover').selectpicker('val', '');
												$('#Allocation_of_turnover').selectpicker('refresh');
												$('#fotrade').selectpicker('deselectAll')
												$('#fotrade').selectpicker('val', '');
												$('#fotrade').selectpicker('refresh');
											}	
											if(Site_Workshop_Prototype.indexOf("La Verr")!=-1 && Proto_Type=="P0" && Type_of_the_Prototype_Order == "VENDU / SOLD")
											{
												$('#frittagelabel,#frittagecheckbox').removeClass('hide');
											}
											else
											{
												$('#frittagelabel,#frittagecheckbox').addClass('hide');
												$('#frittagecheckbox').attr('checked', false);
											}	
											if(Site_Workshop_Prototype.indexOf("Nogent")!=-1)
											{
												$('#e52label,#e52checkbox').removeClass('hide');
											}
											else
											{
												$('#e52label,#e52checkbox').addClass('hide');
												$('#e52checkbox').attr('checked', false);
											}	
											if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && Site_Workshop_Prototype.indexOf("La Suze")!=-1)
											{
												$('#intralelabel,#intralecheckbox').removeClass('hide');
											}
											else
											{
												$('#intralelabel,#intralecheckbox').addClass('hide');
												$('#intralecheckbox').attr('checked', false);
											}	
											if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && $('#intralecheckbox').is(":not(:checked)"))
											{
												$('#advdiv').removeClass('hide');
											}
											else
											{
												$('#advdiv').addClass('hide');
												$('#adv').selectpicker('deselectAll')
												$('#adv').selectpicker('val', '');
												$('#adv').selectpicker('refresh');
											}	
											Do.validateAndDoCallback(done);
  									};
  loadActorsOnOrderDetails  	= 	function(Site_Workshop_Prototype,done)
  									{
										  $.ajax({
									          type: 'get',
									          url: ApplicationConstants.fetchActorsListBySite+Site_Workshop_Prototype ,
									          contentType: "application/json; charset=utf-8",
									          traditional: true,
									          success: function (data) 
									          {
										       	   console.log(data);
										       	   console.log("mini areat");
										       	   var response = data;
										       	   response =response.data;
									               var MEPList 				= 	new Array();
									               var QualityList 			= 	new Array();
									               var ProtoWorkshopList 	= 	new Array();
									               var ControlMgmtList 		= 	new Array();
									               var foTradeList 			= 	new Array();
									               var advList 				= 	new Array();
									               var projectManagerList   = 	new Array();
									               response.forEach(function(arrayItem)
									               {
									                       var actorType = arrayItem.actorType;
									                       console.log("actor type is htis :: " + actorType);
									                       switch (actorType)
									                       {
									                           case "MEP Study"		  :
													                               		   MEPList.push(arrayItem.actorEmail);
													                               		   break;
									                           case "Quality"		  :
													                               		   QualityList.push(arrayItem.actorEmail);
													                               		   break;
									                           case "Proto workshop"  :
															                               ProtoWorkshopList.push(arrayItem.actorEmail);
															                               break;
									                           case "Control management":
															                               ControlMgmtList.push(arrayItem.actorEmail);
															                               break;
									                           case "FO Trade"		  :
															                               foTradeList.push(arrayItem.actorEmail);
															                               break;
									                           case "ADV"			  :
															                               advList.push(arrayItem.actorEmail);
															                               break;
									                           case "Project Manager" :
															                               projectManagerList.push(arrayItem.actorEmail);
															                               break;
									                       }
									               });
									               console.log("MEPList :: " + MEPList);
									               console.log("QualityList :: " + QualityList);
									               console.log("ProtoWorkshopList :: " + ProtoWorkshopList);
									               console.log("ControlMgmtList :: " + ControlMgmtList);
									               console.log("foTradeList :: " + foTradeList);
									               console.log("ADV :: " + advList);
									               console.log("projectManagerList :: " + projectManagerList);
									               $('#mepstudy').removeAttr('disabled');
									               $('[data-id="mepstudy"]').removeClass('disabled');
									               $('#quality').removeAttr('disabled');
									               $('[data-id="quality"]').removeClass('disabled');
									               $('#protoworkshop').removeAttr('disabled');
									               $('[data-id="protoworkshop"]').removeClass('disabled');
									               $('#controlmanagement').removeAttr('disabled');
									               $('[data-id="controlmanagement"]').removeClass('disabled');
									               $('#fotrade').removeAttr('disabled');
									               $('[data-id="fotrade"]').removeClass('disabled');
									               $('#adv').removeAttr('disabled');
									               $('[data-id="adv"]').removeClass('disabled');
									               $('#projmanager').removeAttr('disabled');
									               $('[data-id="projmanager"]').removeClass('disabled');
									               var htmllist = "";
									               for (var i in MEPList)
									               {
									                   htmllist += '<option>' + MEPList[i] + '</option>';
									               }
									               $('#mepstudy').html(htmllist).selectpicker('refresh');
									               htmllist = "";
									               for (var i in QualityList)
									               {
									                   htmllist += '<option>' + QualityList[i] + '</option>';
									               }
									               $('#quality').html(htmllist).selectpicker('refresh');
									               htmllist = "";
									               for (var i in ProtoWorkshopList)
									               {
									                   htmllist += '<option>' + ProtoWorkshopList[i] + '</option>';
									               }
									               $('#protoworkshop').html(htmllist).selectpicker('refresh');
									               htmllist = "";
									               for (var i in ControlMgmtList)
									               {
									                   htmllist += '<option>' + ControlMgmtList[i] + '</option>';
									               }
									               $('#controlmanagement').html(htmllist).selectpicker('refresh');
									               htmllist = "";
									               for (var i in foTradeList)
									               {
									                   htmllist += '<option>' + foTradeList[i] + '</option>';
									               }
									               $('#fotrade').html(htmllist).selectpicker('refresh');
									               htmllist = "";
									               for (var i in foTradeList)
									               {
									                   htmllist += '<option>' + foTradeList[i] + '</option>';
									               }
									               $('#fotrade').html(htmllist).selectpicker('refresh');
									               htmllist = "";
									               for (var i in advList)
									               {
									                   htmllist += '<option>' + advList[i] + '</option>';
									               }
									               $('#adv').html(htmllist).selectpicker('refresh');
									               htmllist = "";
									               for (var i in projectManagerList)
									               {
									                   htmllist += '<option>' + projectManagerList[i] + '</option>';
									               }
									               $('#projmanager').html(htmllist).selectpicker('refresh');
									               Do.validateAndDoCallback(done);
									          }
										   	  });
  									};
  	buildCompListTable				=	function(No_Prototype_Order)
  										{
									  		$('#compListTable').DataTable(
											{
													  dom			: 'Bfrtip',
													  "ajax"		: ApplicationConstants.fetchComponentListforOrder+No_Prototype_Order,
													  "bDestroy"	: true,
													  "columns"		: [{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""}],
													  buttons		: [{
																          text		: '<i class="fa fa-refresh" aria-hidden="true"></i> Refresh',
																          className : 'btn btn-default btn-sm refreshbtn',
																          action	: function() 
																          			  {	
																        	  
																          			  }
																            },
																            {
																                text		: '<i class="fa fa-plus" aria-hidden="true"></i> New component',
																                className	: 'btn btn-default btn-sm newcompbtn',
																                action		: function()
																                {
																                	 validateOrder(function()
																    				 {
																                		 saveOrder(function()
																                		 {
																                			 var updatedPrototypeOrderID = $('#No_Prototype_Order').val();
																                			 window.location.href = "/#componentdetails?orderid="+updatedPrototypeOrderID;
																                		 });
																    				});
																                }
																      }]
													});
									  				$('#complistTable_footer').removeClass('hide');
									  		 		buildSearchForTable('complistTable_footer th','compListTable');
  										};	
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
    pullUserInfo 					= 	function(done)
    	    							{
    									        var fetchUserInfoDetailsObj = new BackboneData.Collections.fetchUserInfoDetails();
    									        $.when(fetchUserInfoDetailsObj.fetch()).done(function(response, xhr)
    									        {
    									                var google = response.data;
    									                console.log(google);
    									                if (response.data.length)
    									                {
    									                    google.forEach(function(arrayItem)
    									                    {
    									                    	Do.setLanguageButton(arrayItem.language,function()
    									                    	{
    									                    		// This sets the language button based on the user
    									                    		Do.validateAndDoCallback(done);
    									                    	});
    									                    });
    									                }
    									                else
    									                {
    									                	window.language = "EN";
    									                	setUserDetail("EN",function()
    									                	{
    									                		  // This sets the user record for the first time
    									                		Do.validateAndDoCallback(done);
    									                	});
    									                }
    									                
    									            }).fail(function() {});
    	    							};
    pullOrderDependencies 			  = 	function(calldone)
	    									{
										        var fetchOrderDependenciesObj = new BackboneData.Collections.fetchOrderDependencies();
										        $.when(fetchOrderDependenciesObj.fetch()).done(function(response, xhr)
										        {
										        	    console.log(response);
										        	    window.orderDependenciesListObj || (window.orderDependenciesListObj = {});
										        	    window.orderDependenciesListObj = response;
										        	    SetDetails();
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
	fetchProtypeOrderObject			 =		function(currentPrototypeID,done)
	  											{
													  $.ajax({
												           type: 'get',
												           url: ApplicationConstants.fetchProtypeOrderObject+currentPrototypeID ,
												           contentType: "application/json; charset=utf-8",
												           traditional: true,
												           success: function (data) 
												           {
												        	    var google = data.data;
												                console.log(google);
												                console.log("prototype Object");
												                setOrderDetails(google);
												                /*google.forEach(function(arrayItem)
												                {
												                    $('#Customer_Code').val(arrayItem.customer_Code);
												                    $('#Branch_Code').val(arrayItem.branch_Code);
												                    $('#Provider_Code').val(arrayItem.provider_Code);
												                    $('#Final_Delivery_Address').val(arrayItem.customer_Address);
												                });*/
												                Do.validateAndDoCallback(done);
												           }
													  });
		  											 
	  											};
	loadAllViewsAgainBasedOnLanguage 	= 	function(languageChanged)
	    									{
	    										changeLanguageforUser(languageChanged);
	    									};
	SetDetails 							= 	function(done)
	    									{
	    	 										var buildDropDowns 	= 	window.orderDependenciesListObj;
	    	 										if(buildDropDowns!=undefined && buildDropDowns!=null)
	    	 										{
	    	 											var customersMap 	= 	buildDropDowns.customersMap.list;
	        	 										var incotermsMap 	= 	buildDropDowns.incotermsMap.list;
	        	 										var placesMap 		= 	buildDropDowns.placesMap.list;
	        	 										var platformMap 	= 	buildDropDowns.platformMap.list;
	        	 										var sitesMap 		= 	buildDropDowns.sitesMap.list;
	        	 										var allocationTurnOverMap = buildDropDowns.allocationTurnOverMap.list;
	    								                var platformlistHTML,sitesListHTML,customersListHTML,placesListHTML,incotermsListHTML,allocationHTML = "";
	    								                customersMap.forEach(function(arrayItem)
	    								                {
	    								                	  	customersListHTML += '<option>' + arrayItem.customer_Name + '</option>';
	    								                });
	    								                incotermsMap.forEach(function(arrayItem)
	    										        {
	    								                		incotermsListHTML += '<option>' + arrayItem.incoterms + '</option>';
	    										        });
	    								                placesMap.forEach(function(arrayItem)
	    										        {
	    								                		placesListHTML += '<option>' + arrayItem.places + '</option>';
	    										        });
	    								                platformMap.forEach(function(arrayItem)
	    										        {
	    								                		platformlistHTML += '<option>' + arrayItem.plateform + '</option>';
	    										        });
	    								                sitesMap.forEach(function(arrayItem)
	    										        {
	    								                		sitesListHTML += '<option>' + arrayItem.site_Name + '</option>';
	    										        });
	    								                allocationTurnOverMap.forEach(function(arrayItem)
	    	    										{
	    								                	allocationHTML += '<option>' + arrayItem.allocation + '</option>';
	    	    										});
	    								                $('#Plateform').html(platformlistHTML).selectpicker('refresh');
	    										        $('#Site_Workshop_Prototype').html(sitesListHTML).selectpicker('refresh');
	    										        $('#Customer_Name').html(customersListHTML).selectpicker('refresh');
	    										        $('#Place').html(placesListHTML).selectpicker('refresh');
	    										        $('#Incoterms').html(incotermsListHTML).selectpicker('refresh');
	    										        $('#Incoterms').html(incotermsListHTML).selectpicker('refresh');
	    										        $('#Allocation_of_turnover').html(allocationHTML).selectpicker('refresh');
	    										        Do.validateAndDoCallback (done);
	    	 										}	
	    	 										
	    									};
	    SetView 					= 		function(currentpage,docallBack)
	    									{
										    	switch(currentpage)
										    	{
													case 'createorder' :
																				 $('#createorder-section,#navbar-1').removeClass('hide');
																	             $('#welcome-section,#admin-section,#component-section,#orderlist-section,#componentlist-section').addClass('hide');
																	             $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																	             $('#createorder-tab').addClass('active');
																	             Do.validateAndDoCallback(docallBack);
																	             break;
													case 'componentdetails' :
																				$('#component-section,#navfixed-wrapper,#navbar-1').removeClass('hide');
																				$('#welcome-section,#createorder-section,#admin-section,#componentlist-section').addClass('hide');
																				$('.selectpicker').selectpicker();
																				$('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
																				$('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																				 //$('#createorder-tab').addClass('active');
																				Do.validateAndDoCallback(docallBack);
																				break;
													case 'adminsetting' 	:
																				$('#admin-section,#navbar-1').removeClass('hide');
																		        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#orderlist-section,#componentlist-section').addClass('hide');
																		        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																		        $('#adminsetting-tab').addClass('active');
																		        Do.validateAndDoCallback(docallBack);
																		        break;																
													case 'orderlisting':
																				$('#orderlist-section,#navbar-1').removeClass('hide');
																		        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#admin-section,#componentlist-section').addClass('hide');
																		        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																		        $('#orderlist-tab').addClass('active');
																		        Do.validateAndDoCallback(docallBack);
																		        break;
													case 'componentlisting':
																				$('#componentlist-section').removeClass('hide');
																		        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#admin-section,#orderlist-section').addClass('hide');
																		        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																		        $('#componentlist-tab').addClass('active');
																		        Do.validateAndDoCallback(docallBack);
																		        break;
													case 'home'			:
																				 $('#createorder-section,#navfixed-wrapper,#component-section,#admin-section,#orderlist-section,#componentlist-section').addClass('hide');
																		         $('#welcome-section').removeClass('hide');
																		         $('#createorder-tab').removeClass('active');
																		         $('#navbar-1').addClass('hide');
																		         Do.validateAndDoCallback(docallBack);
																		         break;
													case 'orderdetails'	:
																				 $('#createorder-section,#navbar-1').removeClass('hide');
																	             $('#welcome-section,#admin-section,#component-section,#orderlist-section,#componentlist-section').addClass('hide');
																	             $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																	             Do.validateAndDoCallback(docallBack);
																	             break;
										    	}
	    									};
	    renderBackboneView 			= 		function(currentPage,docallBack)
										    {
										    	switch(currentPage)
										    	{
													case 'createorder' :
																	var globalNavbarHTML 		= 	new BackboneData.Views.GlobalNavbarview();
														            var navBtnSectionHTML 		= 	new BackboneData.Views.NavBtnSectionview();
														            var orderDetailSectionHTML 	= 	new BackboneData.Views.OrderDetailView();
														           /* if($.trim($('#orderdetailview').html())=="" || currentPage.get().indexOf("orderdetails?")>1 || window.langstatusChanged)
														            {
														            	var orderDetailSectionHTML 	= 	new BackboneData.Views.OrderDetailView();
														            }*/
														            Do.validateAndDoCallback(docallBack);
														            break;
													case 'componentdetails' :
																	var globalNavbarHTML 		= 	new BackboneData.Views.GlobalNavbarview();
															        var navBtnSectionHTML 		= 	new BackboneData.Views.NavBtnSectionview();
															        var componentDetailHTMl 	= 	new BackboneData.Views.ComponentDetailView();
															       /* if($.trim($('#component-section').html())=="")
														            {
															        	var componentDetailHTMl 	= 	new BackboneData.Views.ComponentDetailView();
														            }*/
															        Do.validateAndDoCallback(docallBack);
															        break;
													case 'adminsetting' :
																	var globalNavbarHTML 		= 	new BackboneData.Views.GlobalNavbarview();
															        var navBtnSectionHTML 		=	new BackboneData.Views.NavBtnSectionview();
															        var adminSettingsHTMl 		= 	new BackboneData.Views.AdminDetailView();
															        Do.validateAndDoCallback(docallBack);
															        break;																
													case 'orderlisting':
																	var globalNavbarHTML 		=	 new BackboneData.Views.GlobalNavbarview();
															        var orderListHTMl 			= 	 new BackboneData.Views.OrderListview();
															        Do.validateAndDoCallback(docallBack);
															        break;
													case 'home':
																	var welcomeSectionHTML 		= 	new BackboneData.Views.WelcomeView();
																	Do.validateAndDoCallback(docallBack);
																	break;
													case 'componentlisting':
																	var globalNavbarHTML 		=	 new BackboneData.Views.GlobalNavbarview();
																	var componentListDetailHTML = 	new BackboneData.Views.ComponentListView();
																	Do.validateAndDoCallback(docallBack);
																	break;
													default:
																	var componentListDetailHTML = 	new BackboneData.Views.WelcomeView();
																	Do.validateAndDoCallback(docallBack);
																	break;
										     }
										};
	   changeLanguageforUser		 =	function(languageChanged)	
	   									{
		   									setUserDetail(languageChanged,function()
		   									{
		   										Do.setLanguageButton(languageChanged,function()
		   										{
		   										    renderBackboneView(currentPage.get(),function()
		 		   									{
		 		   										SetView(currentPage.get(),function()
		 		   										{
		 		   										    pullOrderDepvalidateComponentendencies();
		 		   										});
		 		   									 }); 
		   										 });   
		   									 });
	   									};
	setUserDetail					=	function(languageChanged,callback)
	   									{
											    var userModel = new BackboneData.Models.UserModel(
												{
												     useremail: useremailid,
												     language: languageChanged,
												     lastLoggedDate: new Date()
												});
												$.when(userModel.save()).done(function(response, xhr)
										        {
													 Do.validateAndDoCallback(callback);
										        }).fail(function() 
										        {
										        	Do.validateAndDoCallback(callback);
										        });
	   									};
})();