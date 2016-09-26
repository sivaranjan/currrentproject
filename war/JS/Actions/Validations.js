(function()
{
	validateOrder			=		function(done)
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
	validateComponent		= 		  function(done)
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
	validateProtypeID			=		function(done)
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

})();