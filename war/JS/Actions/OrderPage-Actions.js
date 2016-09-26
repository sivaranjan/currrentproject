(function()
{
	saveOrder 						= 		function(callback)
    										{
													showVoiceBox.configure("Saving your order",2000);
											          if(currentPage.get().indexOf("orderdetails")!=-1)
											          {
											        	   var orderDetailsUpdateModelObject = getOrderModelUpdateObject();
											        	   orderDetailsUpdateModelObject.save(
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
											        	    var orderDetailsModelObject = getOrderModelObject();
											        	    orderDetailsModelObject.save(
													        {},
													        {
														          success: function(model, respose, options)
														          {
														               console.log("The model has been saved to the server");
														          },
														          error: function(model, xhr, options)
														          {
														            	showVoiceBox.configure("Order saved successfully",2000);
														                buildCompListTable(No_Prototype_Order,function()
														                {
														                	 Do.validateAndDoCallback(callback);
														                });
														          }
													        });  
											          }	
    											};
	setOrderDetails					= function(orderDetailsObj)
									  {
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
											        $('#requester').val(arrayItem.requester);
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
  	buildCompListTable				=	function(No_Prototype_Order,done)
  										{
									  		$('#compListTable').DataTable(
											{
													  dom			: 'Bfrtip',
													  "ajax"		: ApplicationConstants.fetchComponentListforOrder+No_Prototype_Order,
													  "bDestroy"	: true,
													  "deferRender" : true,
													  "columns"		: [
													           		   {"data"	: "link",
													           			 "render" : function(data, type, row, meta)
													                     {
													                         if(type === 'display')
													                         {
													                             return $('<a>')
													                                 .attr('href','/#componentdetails?orderid='+No_Prototype_Order+'&compId='+data)
													                                 .text(data)
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
													           		   {"data"	: "customerref"},
													           		   {"data"	: "prod_designation"},
													           		   {"data"	: "prod_type"},
													           		   {"data"	: "usp"},
													           		   {"data"	: "total_qty"},
													           		   {"data"	: "total_amt"},
													           		   {"data"	: "comp_status"},
													           		   {"data"	: "qty_produced"},
													           		   {"data"	: "qty_App_quqlity"},
													           		   {"data"	: "qty_DFI"},
													           		   {"data"	: "qty_delivered"},
													           		   {"data"	: "invoicedAmt"}],
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
										    				                    $('#complistTable_footer').removeClass('hide');
										    	             });
										    	          },
													   buttons		: [    {
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
																            }
																      ]
													});
									  		      Do.validateAndDoCallback(done);
									  		 		//buildSearchForTable('complistTable_footer th','compListTable');
  										};
    pullUserInfo 					= 	function(done)
    	    							{
    									        var fetchUserInfoDetailsObj = new BackboneData.Collections.fetchUserInfoDetails();
    									        $.when(fetchUserInfoDetailsObj.fetch()).done(function(response, xhr)
    									        {
    									                var google = response.data;
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
										        	    window.orderDependenciesListObj || (window.orderDependenciesListObj = {});
										        	    window.orderDependenciesListObj = response;
										        	    SetDetails();
										        	    Do.validateAndDoCallback (calldone);
										        }).fail(function() {});
										        
	    									};
	fetchProtypeOrderObject			 =		function(currentPrototypeID,done)
	  											{
													  $.ajax({
												           type: 'get',
												           url: ApplicationConstants.fetchProtypeOrderObject+currentPrototypeID ,
												           contentType: "application/json; charset=utf-8",
												           traditional: true,
												           async : false,
												           success: function (data) 
												           {
												        	    var google = data.data;
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
	loadAllViewsAgainBasedOnLanguage 		 = 	function(languageChanged)
		    									{
		    										changeLanguageforUser(languageChanged);
		    									};
	SetDetails 								= 	function(done)
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
   fetchAddressforSite				  = function(Site_Workshop_Prototype)
   										{
											$.ajax({
										           type: 'get',
										           url: ApplicationConstants.fetchAddressforSite+Site_Workshop_Prototype,
										           contentType: "application/json; charset=utf-8",
										           traditional: true,
										           success: function (data) 
										           {
										        	    var siteRespoonse = data.data;
										        	    siteRespoonse.forEach(function(arrayItem)
			    								        {
										        	    			$('#Site_Address').val(arrayItem.address)
			    								        });
										           }
											});
   										};
})();