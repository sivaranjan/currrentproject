$(document).ready(function() 
{
				$(document).on("keyup", ".form-control", function(e)
				{
					$(this).removeClass('error');
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
				$(document).on("click", ".openfilemodal", function(e) 
				{
					var hello = $(this).data('type');
					localStorage.setItem("currentfileuploader",hello );
					$('#attachment-modal').html('');
					var attachmentHTML = Build.attachmentModal();
					$('#attachment-modal').html(attachmentHTML);
					$('#attachment-modal').modal('show');
				});
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
			    	 if(currentPage.get().indexOf("createorder")!=-1)
			         {
			    		 validateOrder(function()
						 {
			    			 validateProtypeID(function()
			    			 {
			    				 saveOrder();
			    			 });
						 });
			         }		 
			    	 else if(currentPage.get().indexOf("componentdetails")!=-1)
			    	 {
			    		 validateComponent(function()
						 {
						   	saveComponent();
						 });
			    	 }	
			    	 else if(currentPage.get().indexOf("orderdetails")!=-1)
			    	 {
			    		 validateOrder(function()
						 {
					    	 saveOrder();
						 });
			    	 }
				});
		    	$(document).on("change", ".selectpicker", function(e)
				{
		    		 $(this).selectpicker('setStyle', 'error', 'remove');
				});
		    	$(document).on("change", "#Site_Workshop_Prototype", function(e)
				{
			        var  Site_Workshop_Prototype 		= 	$.trim($('#Site_Workshop_Prototype').val());
			        showVoiceBox.configure("Loading Actors",'');
		    		loadActorsOnOrderDetails(Site_Workshop_Prototype,function()
		    		{
		    			showVoiceBox.configure("Actors Loaded Successfully",10);
		    		});
				});
		    	
});
