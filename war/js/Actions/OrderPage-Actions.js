(function()
{
	saveOrder 						= 		function()
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
											        var orderDetailsObj 	= 	new BackboneData.Models.OrderDetailModel(
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
										        	            date_of_the_Order			: 	"",
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
    											debugger;
    											var  IdListObj 	= 	new BackboneData.Collections.fetchlastPrototypeID();
    											debugger;
    									        $.when(IdListObj.fetch()).done(function(response, xhr)
    									        {
    									        	 var lastIDObj = response.data;
    									        	 debugger;
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
})();