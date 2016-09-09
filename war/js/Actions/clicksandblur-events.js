$(document).ready(function() 
{
				$(document).on("click", "#save_actor", function(e) 
				{
					validateAdminSection('actor_modal_body').done(function()
				    {
						saveActor();
				    });
				});
				$(document).on("click", "#save_incoterms", function(e) 
				{
					validateAdminSection('incoterms_modal_body').done(function()
					{
						saveIncoterms();
					});
				});
				$(document).on("click", "#save_customer", function(e) 
				{
					validateAdminSection('customers_modal_body').done(function()
					{
						saveCustomer();
					});
				});
		 		$(document).on("click", "#save_plateform", function(e) 
			    {
		 			validateAdminSection('platform_modal_body').done(function()
					{
		 				savePlateform();
					});
			    });
			    $(document).on("click", "#save_places", function(e) 
			    {
			    	validateAdminSection('places_modal_body').done(function()
					{
			    		savePlace();
					});
			    });
			    $(document).on("click", "#save_site", function(e) 
			    {
			    	validateAdminSection('sites_modal_body').done(function()
					{
			    		saveSite();
					});
			    });
			    $(document).on("click", "#save_producttype", function(e) 
			    {
					validateAdminSection('producttype_modal_body').done(function()
				    {
					    saveProductType();
					});
				});
			    $(document).on("click", "#save_prototypists", function(e) 
			    {
						validateAdminSection('Prototypists_modal_body').done(function()
						{
							savePrototypists();
						});
				});
			    $(document).on("click", "#save_technology", function(e) 
			    {
						validateAdminSection('technology_modal_body').done(function()
						{
							saveTechnology();
						});
				});
			    $(document).on("click", "#save_randD", function(e) 
			    {
						validateAdminSection('randD_modal_body').done(function()
						{
							saveRandD();
						});
				});
			    $(document).on("click", "#save_allocation", function(e) 
			    {
					    validateAdminSection('allocation_modal_body').done(function()
						{
					    	saveAllocation();
						});
				});
			    $(document).on("click", "#save_clientlabo", function(e) 
				{
						validateAdminSection('clientlabo_modal_body').done(function()
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
			    		 validateOrder().done(function()
						 {
			    			 validateProtypeID().done(function()
			    			 {
			    				 saveOrder();
			    			 });
						 });
			         }		 
			    	 else if(currentPage.get().indexOf("#componentdetails")!=-1)
			    	 {
			    		 validateComponent().done(function()
						 {
						   	saveComponent();
						 });
			    	 }	 
				});
			    $(document).on("click", ".language li a", function(e)
			    {
			    	   var languageChanged = $.trim($(this).text());
			    	   if (window.language != languageChanged)
			    	        {
			    	            bootbox.confirm("Any unsaved changes will be lost. Are you sure you want to change the language?", function(result)
			    	            {
			    	                if (result)
			    	                {
			    	                    console.log("ste ::" + languageChanged);
			    	                    loadAllViewsAgainBasedOnLanguage(languageChanged);
			    	                }
			    	            });
			    	        }
			    });
		    	$('.selectpicker').selectpicker();
		    	$('.selectpicker').on('changed.bs.select', function(e)
		    	{
		    	       $(this).selectpicker('setStyle', 'error', 'remove');
		    	});
});
