(function()
{
	window.langstatusChanged	 	= false;
    pullUserInfo 	= 			function(done)
    							{
								        var fetchUserInfoDetailsObj = new BackboneData.Collections.fetchUserInfoDetails();
								        $.when(fetchUserInfoDetailsObj.fetch()).done(function(response, xhr)
								        {
								                var google = response.data;
								                console.log(google);
								                if (response.data.length)
								                {
								                    google.forEach(function(arrayItem)
								                    {
								                    	setLanguageButton(arrayItem.language,function()
								                    	{
								                    		// This sets the language button based on the user
								                    		validateAndDoCallback(done);
								                    	});
								                    });
								                }
								                else
								                {
								                	window.language = "EN";
								                	setUserDetail("EN",function()
								                	{
								                		  // This sets the user record for the first time
								                		validateAndDoCallback(done);
								                	});
								                }
								                
								            }).fail(function() {});
    								 };
    pullOrderDependencies 			  = 		function(calldone)
		    									{
											        var fetchOrderDependenciesObj = new BackboneData.Collections.fetchOrderDependencies();
											        $.when(fetchOrderDependenciesObj.fetch()).done(function(response, xhr)
											        {
											        	    console.log(response);
											        	    window.orderDependenciesListObj || (window.orderDependenciesListObj = {});
											        	    window.orderDependenciesListObj = response;
											        	    SetDetails();
											        	    validateAndDoCallback (calldone);
											        }).fail(function() {});
											        
		    									};
    loadAllViewsAgainBasedOnLanguage 	= 	function(languageChanged)
    										{
    											changeLanguageforUser(languageChanged);
    										};
    SetDetails 					= 		function(done)
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
    										        validateAndDoCallback (done);
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
																             validateAndDoCallback(docallBack);
																             break;
												case 'componentdetails' :
																			$('#component-section,#navfixed-wrapper,#navbar-1').removeClass('hide');
																			$('#welcome-section,#createorder-section,#admin-section,#componentlist-section').addClass('hide');
																			$('.selectpicker').selectpicker();
																			$('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
																			$('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																			 $('#createorder-tab').addClass('active');
																			validateAndDoCallback(docallBack);
																			break;
												case 'adminsetting' 	:
																			$('#admin-section,#navbar-1').removeClass('hide');
																	        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#orderlist-section,#componentlist-section').addClass('hide');
																	        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																	        $('#adminsetting-tab').addClass('active');
																	        validateAndDoCallback(docallBack);
																	        break;																
												case 'orderlisting':
																			$('#orderlist-section,#navbar-1').removeClass('hide');
																	        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#admin-section,#componentlist-section').addClass('hide');
																	        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																	        $('#orderlist-tab').addClass('active');
																	        validateAndDoCallback(docallBack);
																	        break;
												case 'componentlisting':
																			$('#componentlist-section').removeClass('hide');
																	        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#admin-section,#orderlist-section').addClass('hide');
																	        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																	        $('#componentlist-tab').addClass('active');
																	        validateAndDoCallback(docallBack);
																	        break;
												case 'home'			:
																			 $('#createorder-section,#navfixed-wrapper,#component-section,#admin-section,#orderlist-section,#componentlist-section').addClass('hide');
																	         $('#welcome-section').removeClass('hide');
																	         $('#createorder-tab').removeClass('active');
																	         $('#navbar-1').addClass('hide');
																	         validateAndDoCallback(docallBack);
																	         break;
												case 'orderdetails'	:
																			 $('#createorder-section,#navbar-1').removeClass('hide');
																             $('#welcome-section,#admin-section,#component-section,#orderlist-section,#componentlist-section').addClass('hide');
																             $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
																             validateAndDoCallback(docallBack);
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
													            if($.trim($('#orderdetailview').html())=="" || document.URL.indexOf("orderdetails?")>1 || window.langstatusChanged)
													            {
													            	var orderDetailSectionHTML 	= 	new BackboneData.Views.OrderDetailView();
													            }
													            validateAndDoCallback(docallBack);
													            break;
												case 'componentdetails' :
																var globalNavbarHTML 		= 	new BackboneData.Views.GlobalNavbarview();
														        var navBtnSectionHTML 		= 	new BackboneData.Views.NavBtnSectionview();
														        if($.trim($('#component-section').html())=="")
													            {
														        	var componentDetailHTMl 	= 	new BackboneData.Views.ComponentDetailView();
													            }
														        validateAndDoCallback(docallBack);
														        break;
												case 'adminsetting' :
																var globalNavbarHTML 		= 	new BackboneData.Views.GlobalNavbarview();
														        var navBtnSectionHTML 		=	new BackboneData.Views.NavBtnSectionview();
														        var adminSettingsHTMl 		= 	new BackboneData.Views.AdminDetailView();
														        validateAndDoCallback(docallBack);
														        break;																
												case 'orderlisting':
																var globalNavbarHTML 		=	 new BackboneData.Views.GlobalNavbarview();
														        var orderListHTMl 			= 	 new BackboneData.Views.OrderListview();
														        validateAndDoCallback(docallBack);
														        break;
												case 'home':
																var welcomeSectionHTML 		= 	new BackboneData.Views.WelcomeView();
																validateAndDoCallback(docallBack);
																break;
												case 'componentlisting':
																var globalNavbarHTML 		=	 new BackboneData.Views.GlobalNavbarview();
																var componentListDetailHTML = 	new BackboneData.Views.ComponentListView();
																validateAndDoCallback(docallBack);
																break;
												default:
																var componentListDetailHTML = 	new BackboneData.Views.WelcomeView();
																validateAndDoCallback(docallBack);
																break;
									    	}
									    };
   changeLanguageforUser		 =		function(languageChanged)	
   										{
	   										   setUserDetail(languageChanged,function()
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
	   											   window.langstatusChanged =true;
	   											   renderBackboneView(document.URL.split("#")[1],function()
	   										       {
	   										          SetView(document.URL.split("#")[1],function()
	   										          {
	   										        	  pullOrderDependencies();
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
												   validateAndDoCallback(callback);
									           }).fail(function() {validateAndDoCallback(callback);});
											   
   										};
  setLanguageButton					=	function(languagefromDB,callback)
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
										      validateAndDoCallback(callback);
  										};
  fetchProtypeOrderObject			 =		function(currentPrototypeID,done)
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
											                setOrderDetails(google);
											                /*google.forEach(function(arrayItem)
											                {
											                    $('#Customer_Code').val(arrayItem.customer_Code);
											                    $('#Branch_Code').val(arrayItem.branch_Code);
											                    $('#Provider_Code').val(arrayItem.provider_Code);
											                    $('#Final_Delivery_Address').val(arrayItem.customer_Address);
											                });*/
											                validateAndDoCallback(done);
											           }
												  });
	  											 
  											};
  validateAndDoCallback		 		 =		function (done)
  											{
											   if (typeof done === "function")
										       {
										           done();
										       }
  											};
})();
