(function()
{
	saveOrder 						= 		function()
    										{
													showVoiceBox.configure("Saving your order",2000);
											        var Site_Workshop_Prototype 	= 	BackboneEncode($('#Site_Workshop_Prototype').val());
											        var Geosite 					= 	BackboneEncode($('#Geosite').val());
											        var No_Prototype_Order 			= 	BackboneEncode($('#No_Prototype_Order').val());
											        var Proto_Type 					= 	BackboneEncode($('#Proto_Type').val());
											        var pcccheckbox 				= 	BackboneEncode($('#pcccheckbox').is(":checked"));
											        var openordercheckbox 			= 	BackboneEncode($('#openordercheckbox').is(":checked"));
											        var frittagecheckbox 			= 	BackboneEncode($('#frittagecheckbox').is(":checked"));
											        var e52checkbox 				= 	BackboneEncode($('#e52checkbox').is(":checked"));
											        var intralecheckbox 			= 	BackboneEncode($('#intralecheckbox').is(":checked"));
											        var Type_of_the_Prototype_Order = 	BackboneEncode($('#Type_of_the_Prototype_Order').val());
											        var Date_of_the_Order 			= 	BackboneEncode($('#Date_of_the_Order').val());
											        var no_customer_order 			= 	BackboneEncode($('#no_customer_order').val());
											        var customer_order_list 		=	attachmentIDArray;
											        var Customer_Name 				= 	BackboneEncode($('#Customer_Name').val());
											        var Customer_Code 				= 	BackboneEncode($('#Customer_Code').val());
											        var Branch_Code 				= 	BackboneEncode($('#Branch_Code').val());
											        var Provider_Code 				= 	BackboneEncode($('#Provider_Code').val());
											        var Final_Delivery_Address 		= 	BackboneEncode($('#Final_Delivery_Address').val());
											        var Additional_Address 			= 	BackboneEncode($('#Additional_Address').val());
											        var Site_Address	 			= 	BackboneEncode($('#Site_Address').val());
											        var Plateform 					= 	BackboneEncode($('#Plateform').val());
											        var Incoterms 					= 	BackboneEncode($('#Incoterms').val());
											        var Place 						= 	BackboneEncode($('#Place').val());
											        var Customer_Receiver_Name 		= 	BackboneEncode($('#Customer_Receiver_Name').val());
											        var Customer_Receiver_Telephone = 	BackboneEncode($('#Customer_Receiver_Telephone').val());
											        var Allocation_of_turnover 		= 	BackboneEncode($('#Allocation_of_turnover').val());
											        var Total_Order_Amount 			= 	BackboneEncode($('#Total_Order_Amount').val());
											        var Order_Status 				= 	BackboneEncode($('#Order_Status').val());
											        var requester 					= 	BackboneEncode($('#requester').val());
											        var mepstudy 					= 	BackboneEncode($('#mepstudy').val());
											        var quality 					= 	BackboneEncode($('#quality').val());
											        var protoworkshop 				= 	BackboneEncode($('#protoworkshop').val());
											        var controlmanagement		 	= 	BackboneEncode($('#controlmanagement').val());
											        var fotrade 					= 	BackboneEncode($('#fotrade').val());
											        var adv 						= 	BackboneEncode($('#adv').val());
											        var projmanager 				= 	BackboneEncode($('#projmanager').val());
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
										        	   });
											          console.log(orderDetailsObj);
											          console.log("orderDetailsObj :: "+orderDetailsObj);
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
										        			   }
										        	   });
    											};
    saveComponent		 			     = 		function()
		    									{
												    	var orderIDReference	= 	$('#no_prototype_order_comppage_txt').val();
														var componentID 		=   $('#componentID').val();
														var componentStatus		= 	$('#componentStatus').val();
														var TotalQuantity		=	$('#total_quantity_txt').val();
														var TotalAmount			=	$('#total_amount_txt').val();
														
														var customerReference_txt = $('#customerReference_txt').val();
														var product_type_component_description_drpdwn = $('#product_type_component_description_drpdwn').val();
														var product_specification_txtarea = $('#product_specification_txtarea').val();
														var comment_component_description_txtarea = $('#comment_component_description_txtarea').val();
														
														
														var componentcreationObject 			= 	new BackboneData.Models.ComponentCreateModel(
													    {
													    	orderIDReference		:	orderIDReference,
													    	componentID				: 	componentID,
													    	componentStatus			: 	componentStatus,
													    	TotalQuantity			: 	TotalQuantity,
													    	TotalAmount				: 	TotalAmount,
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
													        	window.componentstatus = "saved";
													        	showVoiceBox.configure("Component saved successfully",2000);
													            //buildCompListTable(No_Prototype_Order);
													        }
													    });
		    									};
	validateOrder						 =		function(done)
												{
													var setFlag = false;
													if (validate.getInstance().formordiv('orderdetailview'))
											        {
														validateAndDoCallback(done);
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
											            	validateAndDoCallback(done);
												        }
											        }
												};
    validateProtypeID					=	function(done)
    										{
    											var currentProtypeID = $.trim(localStorage.getItem("lastGeneratedID"));
    											currentProtypeID = parseInt(currentProtypeID)-1;
    											var  IdListObj 	= 	new BackboneData.Collections.fetchlastPrototypeID();
    									        $.when(IdListObj.fetch()).done(function(response, xhr)
    									        {
    									        	 var lastIDObj = response.data;
    									        	 lastIDObj.forEach(function(arrayItem)
    											     {
    										              var lastGeneratedID 	= 	parseInt(arrayItem.next_id);
    										              if(lastGeneratedID!=currentProtypeID)
    										              {
    										            	  bootbox.confirm("The selected ID has been chosen for other Order. New prototype order number has been created. Do you want to continue saving the order?", function(result)
    										            	  {
    										            	       if (result)
    										            	       {
    										            	    	   $('#No_Prototype_Order').val();
    										            	    	   generateNewPrototypeID();
    										            	    	   validateAndDoCallback(done);
    										            	       }
    										            	  });
    										              } 
    										              else
    										              {
    										            	  validateAndDoCallback(done);
    										              } 	  
    											     });
    									        	 
    									        }).fail(function() {});
    										};
	validateComponent					= function(done)
										  {
												var setFlag = false;
												if (validate.getInstance().formordiv('component-section'))
										        {
										            validateAndDoCallback(done);
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
										            	validateAndDoCallback(done);
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
										        	actions_attach.pullAttachmentList(arrayItem.customerOrderAttachment[totalfiles]);
										        }	
										        $('#Site_Address').val(arrayItem.site_Address);
										        $('#Total_Order_Amount').val(arrayItem.total_Order_Amount);
										        var  Type_of_the_Prototype_Order 	= 	$.trim($('#Type_of_the_Prototype_Order').val());
										        var  Site_Workshop_Prototype 		= 	$.trim($('#Site_Workshop_Prototype').val());
										        var  Proto_Type 					= 	$.trim($('#Proto_Type').val());
										        checkVisibilityOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
										        checkEditablesettingsOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
										        checkMandatoryOnLoad(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
										        
										        /*===================== Component Details Filling ======================*/
										        $('#no_prototype_order_comppage_txt').val(arrayItem.no_prototype_order);
										        $('#order_type_txt').val(arrayItem.type_of_the_Prototype_Order);
										        $('#orderinCompPage a').html(arrayItem.no_prototype_order);
										        $('#orderinCompPage').removeClass('hide');
										        $('#orderinCompPage a').attr('href','/#orderdetails?orderid='+arrayItem.no_prototype_order);
										        //$('#customer_reference_txt').val();
										        $('#product_type_component_txt').val();
										        $('#componentStatus').val('Draft');
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
										        validateAndDoCallback (calldone);
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
  fetchCustomerDetailsOnLoad    =    function(customerNameSelected,done)
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
										                validateAndDoCallback(done);
										           }
									      });
  									  };
  checkMandatoryOnLoad			=	 function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
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
  									 };
  checkEditablesettingsOnload	=	function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
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
  									};
  checkVisibilityOnload			=	function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)		
  									{
									  		if(Proto_Type=="P2")
											{
												$('#pcclabel,#pcccheckbox').removeClass('hide');
											}
											else
											{
												$('#pcclabel,#pcccheckbox').addClass('hide');
											}	
											if (Type_of_the_Prototype_Order == 'VENDU / SOLD')
											{
												$('#totalorderamountdiv,#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeClass('hide');
											}
											else
											{
												$('#totalorderamountdiv,#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').addClass('hide');
											}	
											if(Site_Workshop_Prototype.indexOf("La Verr")!=-1 && Proto_Type=="P0" && Type_of_the_Prototype_Order == "VENDU / SOLD")
											{
												$('#frittagelabel,#frittagecheckbox').removeClass('hide');
											}
											else
											{
												$('#frittagelabel,#frittagecheckbox').addClass('hide');
											}	
											if(Site_Workshop_Prototype.indexOf("Nogent")!=-1)
											{
												$('#e52label,#e52checkbox').removeClass('hide');
											}
											else
											{
												$('#e52label,#e52checkbox').addClass('hide');
											}	
											if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && Site_Workshop_Prototype.indexOf("La Suze")!=-1)
											{
												$('#intralelabel,#intralecheckbox').removeClass('hide');
											}
											else
											{
												$('#intralelabel,#intralecheckbox').addClass('hide');
											}	
											if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && $('#intralecheckbox').is(":not(:checked)"))
											{
												$('#advdiv').removeClass('hide');
											}
											else
											{
												$('#advdiv').addClass('hide');
											}	
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
									               var MEPList 			= 	new Array();
									               var QualityList 		= 	new Array();
									               var ProtoWorkshopList 	= 	new Array();
									               var ControlMgmtList 	= 	new Array();
									               var foTradeList 		= 	new Array();
									               var advList 			= 	new Array();
									               var projectManagerList  = 	new Array();
									               response.forEach(function(arrayItem)
									               {
									                       var actorType = arrayItem.actorType;
									                       console.log("actor type is htis :: " + actorType);
									                       switch (actorType)
									                       {
									                           case "MEP Study":
									                               MEPList.push(arrayItem.actorEmail);
									                               break;
									                           case "Quality":
									                               QualityList.push(arrayItem.actorEmail);
									                               break;
									                           case "Proto workshop":
									                               ProtoWorkshopList.push(arrayItem.actorEmail);
									                               break;
									                           case "Control management":
									                               ControlMgmtList.push(arrayItem.actorEmail);
									                               break;
									                           case "FO Trade":
									                               foTradeList.push(arrayItem.actorEmail);
									                               break;
									                           case "ADV":
									                               advList.push(arrayItem.actorEmail);
									                               break;
									                           case "Project Manager":
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
									               validateAndDoCallback(done);
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
																                    if (window.orderStatus != "saved")
																                    {
																                    	if(document.URL.indexOf('orderdetails')!=-1)
																                    	{
																                    		window.location.href = "/#componentdetails?orderid="+No_Prototype_Order;
																                    	}
																                    	else
																                    	{
																                    		showVoiceBox.configure("Please save the order before creating component",2000);
																                    	}	
																                    }
																                    else
																                    {
																                    	//$('#saveorderbtn').trigger('click');
																                    	window.location.href = "/#componentdetails?orderid="+No_Prototype_Order;
																                    }
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
									        	    validateAndDoCallback (calldone);
									        }).fail(function() {});
									        
    									};
  	BackboneEncode					=   function(formValue)
  									    {
  		                                    //return encodeURIComponent($.trim(formValue));
  											return $.trim(formValue);
  									    };
})();