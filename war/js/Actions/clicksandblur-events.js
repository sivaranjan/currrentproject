$(document).ready(function() 
{
				$(document).on("click", "#save_actor", function(e) 
				{
					validateAdminSection('actor_modal_body',function()
				    {
						saveActor();
				    });
				});
				$(document).on("click", "#save_incoterms", function(e) 
				{
					validateAdminSection('incoterms_modal_body',function()
					{
						saveIncoterms();
					});
				});
				$(document).on("click", "#save_customer", function(e) 
				{
					validateAdminSection('customers_modal_body',function()
					{
						saveCustomer();
					});
				});
		 		$(document).on("click", "#save_plateform", function(e) 
			    {
		 			validateAdminSection('platform_modal_body',function()
					{
		 				savePlateform();
					});
			    });
			    $(document).on("click", "#save_places", function(e) 
			    {
			    	validateAdminSection('places_modal_body',function()
					{
			    		savePlace();
					});
			    });
			    $(document).on("click", "#save_site", function(e) 
			    {
			    	validateAdminSection('sites_modal_body',function()
					{
			    		saveSite();
					});
			    });
			    $(document).on("click", "#save_producttype", function(e) 
			    {
					validateAdminSection('producttype_modal_body',function()
				    {
					    saveProductType();
					});
				});
			    $(document).on("click", "#save_prototypists", function(e) 
			    {
						validateAdminSection('Prototypists_modal_body',function()
						{
							savePrototypists();
						});
				});
			    $(document).on("click", "#save_technology", function(e) 
			    {
						validateAdminSection('technology_modal_body',function()
						{
							saveTechnology();
						});
				});
			    $(document).on("click", "#save_randD", function(e) 
			    {
						validateAdminSection('randD_modal_body',function()
						{
							saveRandD();
						});
				});
			    $(document).on("click", "#save_allocation", function(e) 
			    {
					    validateAdminSection('allocation_modal_body',function()
						{
					    	saveAllocation();
						});
				});
			    $(document).on("click", "#save_clientlabo", function(e) 
				{
						validateAdminSection('clientlabo_modal_body',function()
						{
							saveClientLabo();
						});
				});
			    $(document).on("keyup", ".form-control", function(e)
		    	{
		    	      $(this).removeClass('error');
		    	});
			    $(document).on("click", "#saveorderbtn", function(e)
				{
			    	 if(currentPage.get().indexOf("#createorder")!=-1)
			         {
			    		 validateOrder(function()
						 {
						    saveOrder();
						 });
			         }		 
			    	 else if(currentPage.get().indexOf("#componentdetails")!=-1)
			    	 {
			    		 validateComponent(function()
						 {
						   	saveComponent();
						 });
			    	 }	 
				});
		    	$('.selectpicker').selectpicker();
		    	$('.selectpicker').on('changed.bs.select', function(e)
		    	{
		    	       $(this).selectpicker('setStyle', 'error', 'remove');
		    	});
});
