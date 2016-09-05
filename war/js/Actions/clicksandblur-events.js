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
			    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e)
		    	{
		    			console.log($(event.target).text()); // newly activated tab
		    			var currentSelectedTab = $(event.target).text();
		    			switch (currentSelectedTab)
		    			{
		    					case "MEP Study":
		    						          		buildActorsTable("MEP Study");
		    						          		break;
		    					case "Quality":
		    						                buildActorsTable("Quality");
		    						                break;
		    					case "Proto workshop":
		    						    	  		buildActorsTable("Proto workshop");
		    						    	  		break;
		    					case "Control management":
		    						    	  		buildActorsTable("Control management");
		    						    	  		break;
		    					case "FO Trade":
		    						                buildActorsTable("FO Trade");
		    						                break;
		    					case "ADV":
		    						                buildActorsTable("ADV");
		    						                break;
		    					case "Project Manager":
		    						    	  	    buildActorsTable("Project Manager");
		    						    	  	    break;
		    			}
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
