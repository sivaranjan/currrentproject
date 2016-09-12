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
							        	ref.setPrototypeID(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
							        }	
							        ref.CheckVisibilitySettings(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
							        ref.CheckEditableSettings(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
							        ref.CheckMandatorySettings(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
							        ref.loadActorsList(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
							    },
	loadDefaults				: function()
	  							  {
							    	        $('.selectpicker').selectpicker();
							    	        $('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
							    	        $('.selectpicker').on('changed.bs.select', function(e)
							    	        {
							    	            $(this).selectpicker('setStyle', 'error', 'remove');
							    	        });
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
	  							  },
    setPrototypeID 				:	function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
    								{
								            $.ajax({
										           type: 'get',
										           url: ApplicationConstants.fetchIDList,
										           contentType: "application/json; charset=utf-8",
										           traditional: true,
										           success: function (data) 
										           {
										        	   var google = data.data;
										                console.log(google);
										                console.log("hello");
										                var htmllist = "";
										                google.forEach(function(arrayItem)
										                {
									                        var lastGeneratedID 	= 	parseInt(arrayItem.next_id) + 1;
									                        
									                        var newPrototypeOrderID = 	"";
									                        if (typeof(Storage) !== "undefined")
									                        {
									                            localStorage.setItem("lastGeneratedID", lastGeneratedID);
									                        }
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
									                    });
										           }
								            });
    								},
   loadActorsList				 :	function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
   									{
	   										loadActorsOnOrderDetails(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
   									},
   CheckVisibilitySettings		 :  function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
   									{
	   										checkVisibilityOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
   									},
   	CheckEditableSettings		 :  function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
   									{
   										    checkEditablesettingsOnload(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);
   									},
   CheckMandatorySettings		 :	function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
   									{
	   									   checkMandatoryOnLoad(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type);		
   									}
});