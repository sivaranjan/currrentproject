(function()
{
	var deferred 		= 			$.Deferred();
	saveOrder 			= 			function()
    								{
													showVoiceBox.configure("Saving your order",2000);
											        var Site_Workshop_Prototype 	= 	$('#Site_Workshop_Prototype').val();
											        var Geosite 					= 	$('#Geosite').val();
											        var No_Prototype_Order 			= 	$('#No_Prototype_Order').val();
											        var Proto_Type 					= 	$('#Proto_Type').val();
											        var pcccheckbox 				= 	$('#pcccheckbox').is(":checked");
											        var openordercheckbox 			= 	$('#openordercheckbox').is(":checked");
											        var frittagecheckbox 			= 	$('#frittagecheckbox').is(":checked");
											        var e52checkbox 				= 	$('#e52checkbox').is(":checked");
											        var intralecheckbox 			= 	$('#intralecheckbox').is(":checked");
											        var Type_of_the_Prototype_Order = 	$('#Type_of_the_Prototype_Order').val();
											        var Date_of_the_Order 			= 	$('#Date_of_the_Order').val();
											        var no_customer_order 			= 	$('#no_customer_order').val();
											        var customer_order_list 		=	$('#customer_order_list').val();
											        var Customer_Name 				= 	$('#Customer_Name').val();
											        var Customer_Code 				= 	$('#Customer_Code').val();
											        var Branch_Code 				= 	$('#Branch_Code').val();
											        var Provider_Code 				= 	$('#Provider_Code').val();
											        var Final_Delivery_Address 		= 	$('#Final_Delivery_Address').val();
											        var Additional_Address 			= 	$('#Additional_Address').val();
											        var Site_Address	 			= 	$('#Site_Address').val();
											        var Plateform 					= 	$('#Plateform').val();
											        var Incoterms 					= 	$('#Incoterms').val();
											        var Place 						= 	$('#Place').val();
											        var Customer_Receiver_Name 		= 	$('#Customer_Receiver_Name').val();
											        var Customer_Receiver_Telephone = 	$('#Customer_Receiver_Telephone').val();
											        var Allocation_of_turnover 		= 	$('#Allocation_of_turnover').val();
											        var Total_Order_Amount 			= 	$('#Total_Order_Amount').val();
											        var Order_Status 				= 	$('#Order_Status').val();
											        var requester 					= 	$('#requester').val();
											        var mepstudy 					= 	$('#mepstudy').val();
											        var quality 					= 	$('#quality').val();
											        var protoworkshop 				= 	$('#protoworkshop').val();
											        var controlmanagement		 	= 	$('#controlmanagement').val();
											        var fotrade 					= 	$('#fotrade').val();
											        var adv 						= 	$('#adv').val();
											        var projmanager 				= 	$('#projmanager').val();
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
										        			   }
										        	  });
    										};
    saveComponent		 			     = 		function()
		    									{
												    	showVoiceBox.configure("Component created successfully",2000);
												        $('#componentidfield').val("C0000001");
		    									};
	validateOrder						 =		function()
												{
													var setFlag = false;
													if (validate.getInstance().formordiv('orderdetailview'))
											        {
														deferred.resolve();
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
											            	deferred.resolve();
												        }
											        }
													return deferred;
												};
    validateProtypeID					=	function()
    										{
    											var currentProtypeID 	= 	$.trim(localStorage.getItem("lastGeneratedID"));
    											currentProtypeID 		= 	parseInt(currentProtypeID)-1;
    											$.ajax({
											           type: 'get',
											           url: ApplicationConstants.fetchlastPrototypeID,
											           contentType: "application/json; charset=utf-8",
											           traditional: true,
											           success: function (data) 
											           {
											        	     var lastIDObj 		= 	data.data;
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
		    										            	    	  deferred.resolve();
		    										            	       }
		    										            	  });
		    										              } 
		    										              else
		    										              {
		    										            	 deferred.resolve();
		    										              } 	  
		    											     });
		    									    
											           }
    											});
    											return deferred;
    										};
	validateComponent					= function(done)
										  {
												var setFlag = false;
												if (validate.getInstance().formordiv('component-section'))
										        {
										            deferred.resolve();
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
										            	deferred.resolve();
											        }
										        }
												return deferred;
										  };
	setOrderDetails					= function(orderDetailsObj)
									  {
											console.error("dog");
											console.log(orderDetailsObj);
											orderDetailsObj.forEach(function(arrayItem)
									        {
												$('#No_Prototype_Order').val(arrayItem.no_prototype_order);
												$('#Order_Status').val(arrayItem.order_Status);
												$('#Site_Workshop_Prototype').selectpicker('val', arrayItem.site_Workshop_Prototype); //drpdwn
									            $('#Proto_Type').selectpicker('val', arrayItem.proto_Type);  //drpdwn
										        $('#Geosite').val(arrayItem.geoSite);
										        $('#Type_of_the_Prototype_Order').selectpicker('val', arrayItem.type_of_the_Prototype_Order);//drpdwn
										        $('#Date_of_the_Order').val(arrayItem.date_of_the_Order); 
										        loadActorsOnOrderDetails(arrayItem.site_Workshop_Prototype).done(function()
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
										        $('#customer_order_list').val(arrayItem.customerOrderAttachment);
										        $('#Site_Address').val(arrayItem.site_Address);
										        $('#Total_Order_Amount').val(arrayItem.total_Order_Amount);
										        var  Type_of_the_Prototype_Order 	= 	$.trim($('#Type_of_the_Prototype_Order').val());
										        var  Site_Workshop_Prototype 		= 	$.trim($('#Site_Workshop_Prototype').val());
										        var  Proto_Type 					= 	$.trim($('#Proto_Type').val());
										        checkVisibilityOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
										        checkEditablesettingsOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
										        checkMandatoryOnLoad(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
									        });
									  };
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
									 			$('#openorderlabel,#openordercheckbox,#no_customer_order,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeAttr('readonly');
									 			$('#openorderlabel,#openordercheckbox,#no_customer_order,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeAttr('disabled');
									 			$('#fotrade,#incotermsdiv,#placediv,#allocationdiv').removeAttr('readonly');
									 			$('#fotrade,#Place,#Incoterms,#Allocation_of_turnover').removeAttr('disabled');
									 			$('#fodiv .bootstrap-select,#incotermsdiv .bootstrap-select,#placediv .bootstrap-select,#allocationdiv .bootstrap-select').removeClass('disabled');
									 			$('#fodiv .dropdown-toggle,#incotermsdiv .dropdown-toggle,#placediv .dropdown-toggle,#allocationdiv .dropdown-toggle').removeClass('disabled');
									 		}
									 		else
									 		{
									 			$('#openorderlabel,#openordercheckbox,#no_customer_order,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').attr('readonly',true);
									 			$('#openorderlabel,#openordercheckbox,#no_customer_order,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').attr('disabled',true);
									 		}
									 		if(Site_Workshop_Prototype.indexOf("La Verriere")!=-1 && Proto_Type=="P0" && Type_of_the_Prototype_Order == "VENDU/SOLD")
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
											if(Site_Workshop_Prototype.indexOf("La Verriere")!=-1 && Proto_Type=="P0" && Type_of_the_Prototype_Order == "VENDU/SOLD")
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
  loadActorsOnOrderDetails  	= 	function(Site_Workshop_Prototype)
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
									               var projectManagerList  	= 	new Array();
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
									               deferred.resolve();
									          }
										   	  });
										  return deferred;
  									};
  	buildCompListTable				=	function()
  										{
									  		$('#compListTable').DataTable(
											{
													  dom			: 'Bfrtip',
													  "ajax"		: ApplicationConstants.fetchAllocationofTurnOverList,
													  "bDestroy"	: true,
													  "columns"		: [{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""},{"data"	: ""}],
													  "order"		: [[0, 'asc']],
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
																                    	showVoiceBox.configure("Please save the order before creating component",2000);
																                    }
																                    else
																                    {
																                        window.location.href = "/#componentdetails";
																                    }
																                }
																      }]
													});
									  		 		buildSearchForTable('complistTable_footer th','compListTable');
  										};	
  										pullUserInfo 	= 			function()
  		    							{
  										        $.ajax({
										           type: 'get',
										           url: ApplicationConstants.fetchUserInfoDetails+useremailid,
										           contentType: "application/json; charset=utf-8",
										           traditional: true,
										           async : false,
										           success: function (data) 
										           {
										        	    var google = data.data;
 										                console.log(google);
 										                if (data.data.length)
 										                {
 										                    google.forEach(function(arrayItem)
 										                    {
 										                    	setLanguageButton(arrayItem.language).done(function(){});
 										                    });
 										                }
 										                else
 										                {
 										                	window.language = "EN";
 										                	setUserDetail("EN").done(function(){});
 										                }
 										                deferred.resolve();
										           }
  										        });
  										      return deferred;
  		    								 };
  		    pullOrderDependencies 			  = 		function()
  				    									{
  		    												
  		    												$.ajax({
														           type: 'get',
														           url: ApplicationConstants.fetchOrderDependencies,
														           contentType: "application/json; charset=utf-8",
														           traditional: true,
														           success: function (data) 
														           {
														        	   console.log(data);
	  													        	    window.orderDependenciesListObj || (window.orderDependenciesListObj = {});
	  													        	    window.orderDependenciesListObj = data;
	  													        	    SetDetails().done(function()
	  													        	    {
	  													        	    	deferred.resolve();	
	  													        	    });
														           }
  		    												});
  													        return deferred;
  				    									};
  		    loadAllViewsAgainBasedOnLanguage 	= 	function(languageChanged)
  		    										{
  		    											alert("11");
  		    											changeLanguageforUser(languageChanged).done(function()
  		    											{
  		    												alert("12");
  		    												renderBackboneView(document.URL.split("#")[1]).done(function()
  		    												{
  		    													alert("13");
  		    												       SetView(document.URL.split("#")[1]).done(function()
  		    												       {
  		    												    	   alert("14");
  		    												        	deferred.resolve();	
  		    												       });
  		    												});		
  		    											});
  		    											return deferred;
  		    										};
  		    SetDetails 					= 		function()
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
  		    	 										}	
  		    	 										deferred.resolve();
  		    	 										return deferred;
  		    									};
  		    SetView 					= 		function(currentpage)
  		    									{
  		    										
  											    	switch(currentpage)
  											    	{
  														case 'createorder' :
  																					 $('#createorder-section,#navbar-1').removeClass('hide');
  																		             $('#welcome-section,#admin-section,#component-section,#orderlist-section,#componentlist-section').addClass('hide');
  																		             $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
  																		             $('#createorder-tab').addClass('active');
  																		             deferred.resolve();
  																		             break;
  														case 'componentdetails' :
  																					$('#component-section,#navfixed-wrapper,#navbar-1').removeClass('hide');
  																					$('#welcome-section,#createorder-section,#admin-section,#componentlist-section').addClass('hide');
  																					$('.selectpicker').selectpicker();
  																					$('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
  																					$('#bs-example-navbar-collapse-1 ul li').removeClass('active');
  																					 $('#createorder-tab').addClass('active');
  																					deferred.resolve();
  																					break;
  														case 'adminsetting' 	:
  																					$('#admin-section,#navbar-1').removeClass('hide');
  																			        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#orderlist-section,#componentlist-section').addClass('hide');
  																			        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
  																			        $('#adminsetting-tab').addClass('active');
  																			        deferred.resolve();
  																			        break;																
  														case 'orderlisting':
  																					$('#orderlist-section,#navbar-1').removeClass('hide');
  																			        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#admin-section,#componentlist-section').addClass('hide');
  																			        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
  																			        $('#orderlist-tab').addClass('active');
  																			        deferred.resolve();
  																			        break;
  														case 'componentlisting':
  																					$('#componentlist-section').removeClass('hide');
  																			        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#admin-section,#orderlist-section').addClass('hide');
  																			        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
  																			        $('#componentlist-tab').addClass('active');
  																			        deferred.resolve();
  																			        break;
  														case 'home'			:
  																					 $('#createorder-section,#navfixed-wrapper,#component-section,#admin-section,#orderlist-section,#componentlist-section').addClass('hide');
  																			         $('#welcome-section').removeClass('hide');
  																			         $('#createorder-tab').removeClass('active');
  																			         $('#navbar-1').addClass('hide');
  																			         deferred.resolve();
  																			         break;
  														case 'orderdetails'	:
  																					 $('#createorder-section,#navbar-1').removeClass('hide');
  																		             $('#welcome-section,#admin-section,#component-section,#orderlist-section,#componentlist-section').addClass('hide');
  																		             $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
  																		             deferred.resolve();
  																		             break;
  											    	}
  											    	return deferred;
  		    									};
  		    renderBackboneView 			= 		function(currentPage)
  											    {
  		    										
  											    	switch(currentPage)
  											    	{
  														case 'createorder' :
  																		var globalNavbarHTML 		= 	new BackboneData.Views.GlobalNavbarview();
  															            var navBtnSectionHTML 		= 	new BackboneData.Views.NavBtnSectionview();
  															            if($.trim($('#orderdetailview').html())=="" || document.URL.indexOf("orderdetails?")>1)
  															            {
  															            	var orderDetailSectionHTML 	= 	new BackboneData.Views.OrderDetailView();
  															            }
  															            deferred.resolve();
  															            break;
  														case 'componentdetails' :
  																		var globalNavbarHTML 		= 	new BackboneData.Views.GlobalNavbarview();
  																        var navBtnSectionHTML 		= 	new BackboneData.Views.NavBtnSectionview();
  																        if($.trim($('#component-section').html())=="")
  															            {
  																        	var componentDetailHTMl 	= 	new BackboneData.Views.ComponentDetailView();
  															            }
  																        deferred.resolve();
  																        break;
  														case 'adminsetting' :
  																		var globalNavbarHTML 		= 	new BackboneData.Views.GlobalNavbarview();
  																        var navBtnSectionHTML 		=	new BackboneData.Views.NavBtnSectionview();
  																        var adminSettingsHTMl 		= 	new BackboneData.Views.AdminDetailView();
  																        deferred.resolve();
  																        break;																
  														case 'orderlisting':
  																		var globalNavbarHTML 		=	 new BackboneData.Views.GlobalNavbarview();
  																        var orderListHTMl 			= 	 new BackboneData.Views.OrderListview();
  																        deferred.resolve();
  																        break;
  														case 'home':
  																		var welcomeSectionHTML 		= 	new BackboneData.Views.WelcomeView();
  																		deferred.resolve();
  																		break;
  														case 'componentlisting':
  																		var globalNavbarHTML 		=	 new BackboneData.Views.GlobalNavbarview();
  																		var componentListDetailHTML = 	new BackboneData.Views.ComponentListView();
  																		deferred.resolve();
  																		break;
  														default:
  																		var componentListDetailHTML = 	new BackboneData.Views.WelcomeView();
  																		deferred.resolve();
  																		break;
  											    	}
  											    	return deferred;
  											    };
  		   changeLanguageforUser		 =		function(languageChanged)	
  		   										{
  			   										   setUserDetail(languageChanged).done(function()
  			   										   {
  			   											   if (languageChanged == "EN")
  													       {
  													           window.language = "EN";
  													           $(".language-dropdown:first-child").html('<img src="../statics/images/en.png"> EN <span class="caret"></span>');
  													           $(".language-dropdown:first-child").val("EN");
  													       }
  													       else
  													       {
  													           $(".language-dropdown:first-child").html('<img src="../statics/images/fr.png"> FR <span class="caret"></span>');
  													           $(".language-dropdown:first-child").val("FR");
  													           window.language = "FR";
  													       }   
  			   											   		renderBackboneView(document.URL.split("#")[1]).done(function()
  			   										        	{
  			   										        		SetView(document.URL.split("#")[1]).done(function()
  			   										        		{
  			   										        			pullOrderDependencies().done(function()
  			   										        			{
  			   										        					deferred.resolve();
  			   										        			});
  			   										                });
  			   										        	});
  			   										   });
  			   										   return deferred;  													  
  		   										};
  		   setUserDetail					=	function(languageChanged)
  		   										{
  			   										   
  													   var userModel = new BackboneData.Models.UserModel(
  													   {
  													        useremail: useremailid,
  													        language: languageChanged,
  													        lastLoggedDate: new Date()
  													   });
  													   $.when(userModel.save()).done(function(response, xhr)
  											           {
  														   deferred.resolve();
  											           }).fail(function() 
  											           {
  											        	   deferred.reject();
  											           });
  													   return deferred;
  		   										};
  		  setLanguageButton					=	function(languagefromDB)
  		  										{
  			  										  
  												      window.language = languagefromDB;
  												      if (languagefromDB == "EN")
  												      {
  												          $(".language-dropdown:first-child").html('<img src="../statics/images/en.png"> EN <span class="caret"></span>');
  												      }
  												      else
  												      {
  												          $(".language-dropdown:first-child").html('<img src="../statics/images/fr.png"> FR <span class="caret"></span>');
  												      }
  												      $(".language-dropdown:first-child").val(languagefromDB);
  												      deferred.resolve();
  												      return deferred;
  		  										};
  		  fetchProtypeOrderObject			 =		function(currentPrototypeID)
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
  													                setOrderDetails(google).done(function()
  													                {
  													                	deferred.resolve();
  													                });
  													           }
  														  });
  			  											 return deferred;
  		  											};
})();