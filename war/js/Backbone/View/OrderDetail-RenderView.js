BackboneData.Views.OrderDetailView = Backbone.View.extend(
{
    el						:   '#orderdetailview',
    render					:   function()
							    {
							        var ref 			= 	this;
							        var orderDetailHTML = 	"";
							        if (window.language == "EN")
							        {
							            orderDetailHTML = order.manager.OrderDetailView(
							            {
							                'paramValue'		: 	window.orderDetails_englishLabelList,
							                'visibleconfig'		: 	window.orderCreationVisibilitySettings,
							                'editableconfig'	: 	window.orderCreationEditableSettings,
							                'mandatoryconfig'	: 	window.orderCreationMandatorySettings
							            });
							        }
							        else
							        {
							            orderDetailHTML 	= 	order.manager.OrderDetailView(
							            {
							                'paramValue'		: 	window.orderDetails_frenchLabelList,
							                'visibleconfig'		: 	window.orderCreationVisibilitySettings,
							                'editableconfig'	: 	window.orderCreationEditableSettings,
							                'mandatoryconfig'	: 	window.orderCreationMandatorySettings
							            });
							        }
							        ref.$el.html(orderDetailHTML);
							        ref.loadDefaults();
							        $('#compListTable').DataTable(
									{
										 dom		: 'Bfrtip',
										"bDestroy"	: true,
										 buttons	: [{
															text		: '<i class="fa fa-plus" aria-hidden="true"></i> New component',
															className	: 'btn btn-default btn-sm newcompbtn',
															action		: function()
															{
																	                    
															}
														}]
									});
							        $('.newcompbtn').attr('readonly',true);
							        $('.newcompbtn').attr('disabled',true);
							        $('.newcompbtn').css('cursor','not-allowed');
							    },
    initialize				: 	function()
							    {
							        var _thisView = this;
							        _thisView.render();
							    },
    events:
							    {
							        "change #Type_of_the_Prototype_Order"	: "populateDependencies",
							        "change #Site_Workshop_Prototype"		: "populateDependencies",
							        "change #Proto_Type"					: "populateDependencies",
							        "change #intralecheckbox"				: "populateDependencies",
							        "change #Customer_Name"					: "fetchCustomerDetails",
							    },
    fetchCustomerDetails	:   function()
							    {
							        var customerNameSelected 			= 	encodeURIComponent($.trim($('#Customer_Name').val())); //doubt
							        fetchCustomerDetailsOnLoad(customerNameSelected);
							    },
    populateDependencies	: 	function()
							    {  
    								var   ref = this;
							        var  Type_of_the_Prototype_Order 	= 	$.trim($('#Type_of_the_Prototype_Order').val());
							        var  Site_Workshop_Prototype 		= 	$.trim($('#Site_Workshop_Prototype').val());
							        var  Proto_Type 					= 	$.trim($('#Proto_Type').val());
							        console.log("1 :: " + Type_of_the_Prototype_Order);
							        console.log("2 :: " + Site_Workshop_Prototype);
							        console.log("3 :: " + Proto_Type);
							        
							        if(Site_Workshop_Prototype !="" && Type_of_the_Prototype_Order!="" && Proto_Type!="")
							        {
							        	if(currentPage.get().indexOf("orderdetails")!=-1)
							        	{
							        		setPrototypeIDOnUpdate(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
							        	}
							        	else
							        	{
							        		setPrototypeID(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);							        		
							        	}	
							        }	
							        checkVisibilityOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,function()
							        {
							        	checkEditablesettingsOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,function()
							        	{
							        		checkMandatoryOnLoad(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type,function()
							        		{
							        			
							        		});
							        	});
							        });
							    },
	loadDefaults				: function()
	  							  {
							    	        $('.selectpicker').selectpicker();
							    	        $('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
							    	        $('.refreshbtn,.newcompbtn').removeClass('dt-button');
									        $('.bs-searchbox input').addClass('input-sm');
									        $('#Date_of_the_Order').val(new Date());
									        $('#Order_Status').val("Draft");
									        $('#requester').val(useremailid);
									        $('#mepstudy').attr('readonly',true);
									        $('#mepstudy').attr('disabled',true);
									        $('#quality').attr('readonly',true);
									        $('#quality').attr('disabled',true);
						                    $('#protoworkshop').attr('readonly',true);
						                    $('#protoworkshop').attr('disabled',true);
						                    $('#controlmanagement').attr('readonly',true);
						                    $('#controlmanagement').attr('disabled',true);
						                    $('#fotrade').attr('readonly',true);
						                    $('#fotrade').attr('disabled',true);
						                    $('#adv').attr('readonly',true);
						                    $('#adv').attr('disabled',true);
						                    $('#projmanager').attr('readonly',true);
						                    $('#projmanager').attr('disabled',true);
	  							  }
});