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
							        console.log("hgh");
							
									//        $('#example').DataTable(
									//        {
									//            dom: 'Bfrtip',
									//            responsive:
									//            {
									//                details:
									//                {
									//                    type: 'column',
									//                    target: -1
									//                }
									//            },
									//            columnDefs: [
									//            {
									//                className: 'control',
									//                orderable: false,
									//                targets: -1
									//            }],
									//            buttons: [
									//            {
									//                text: '<i class="fa fa-refresh" aria-hidden="true"></i> Refresh',
									//                className: 'btn btn-default btn-sm refreshbtn',
									//                action: function() {
									//
									//                }
									//            },
									//            {
									//                text: '<i class="fa fa-plus" aria-hidden="true"></i> New component',
									//                className: 'btn btn-default btn-sm newcompbtn',
									//                action: function()
									//                {
									//                    if (window.orderStatus != "saved")
									//                    {
									//                        $('#statusmsg').html("Please save the order before creating component");
									//                        $('#statusLoader').removeClass('hide');
									//                        $('#statusLoader .voicebox-content').addClass('in');
									//                    }
									//                    else
									//                    {
									//                        window.location.href = "/#componentdetails";
									//                    }
									//                    setTimeout(function()
									//                    {
									//                        $('#statusLoader .voicebox-content').removeClass('in');
									//                    }, 3000);
									//                    //window.location.href = "/#componentdetails";
									//                }
									//            }]
									//        });
							    },
    initialize				: 	function()
							    {
							        _.bindAll(this, 'cleanup');
							        var _thisView = this;
							        _thisView.render();
							    },
    cleanup					: 	function()
							    {
							        this.undelegateEvents();
							        $(this.el).empty();
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
							        var customerNameSelected 			= 	$('#Customer_Name').val(); //doubt
							        var fetchCustomerDetailsbyNameObj 	= 	new BackboneData.Collections.fetchCustomerDetailsbyName(
							        {
							            customerNameSelected: customerNameSelected
							        });
							        $.when(fetchCustomerDetailsbyNameObj.fetch()).done(function(response, xhr)
							        {
							                var google = response.data;
							                console.log(google);
							                console.log("hello");
							                var htmllist = "";
							                google.forEach(function(arrayItem)
							                {
							                    $('#Customer_Code').val(arrayItem.customer_Code);
							                    $('#Branch_Code').val(arrayItem.branch_Code);
							                    $('#Provider_Code').val(arrayItem.provider_Code);
							                    $('#Final_Delivery_Address').val(arrayItem.customer_Address);
							                });
							         }).fail(function() {});
							    },
    populateDependencies	: 	function()
							    {  
    								var ref = this;
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
							    			$(document).on("keyup", ".form-control", function(e)
							    	        {
							    	            $(this).removeClass('error');
							    	        });
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
								            var  IdCollectionObj 	= 	new BackboneData.Collections.IdCollection();
								            $.when(IdCollectionObj.fetch()).done(function(response, xhr)
								            {
								            	    var google = response.data;
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
								                        else if (Site_Workshop_Prototype.indexOf("La Verriere")!=-1)
								                        {
								                            newPrototypeOrderID = "LVR";
								                        }
								                        else if (Site_Workshop_Prototype.indexOf("Laval (LVL)")!=-1)
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
								                })
								                .fail(function() {});
    								},
   loadActorsList				 :	function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
   									{
									   			var fetchActorsListObj 	= 	new BackboneData.Collections.fetchActorsListBySite(
									            {
									                site_type: Site_Workshop_Prototype
									            });
									            $.when(fetchActorsListObj.fetch()).done(function(response, xhr)
									            {
									                    console.log(response);
									                    console.log(xhr);
									                    var MEPList 			= 	new Array();
									                    var QualityList 		= 	new Array();
									                    var ProtoWorkshopList 	= 	new Array();
									                    var ControlMgmtList 	= 	new Array();
									                    var foTradeList 		= 	new Array();
									                    var advList 			= 	new Array();
									                    var projectManagerList  = 	new Array();
									                    response.forEach(function(arrayItem)
									                    {
									                            var actorType = arrayItem.actorType;
									                            console.log("actor type is htis :: " + actorType);
									                            switch (actorType)
									                            {
									                                case "MEP Study":
									                                    MEPList.push(arrayItem.actorEmail);
									                                    break;
									                                case "Quality":
									                                    QualityList.push(arrayItem.actorEmail);
									                                    break;
									                                case "Proto workshop":
									                                    ProtoWorkshopList.push(arrayItem.actorEmail);
									                                    break;
									                                case "Control management":
									                                    ControlMgmtList.push(arrayItem.actorEmail);
									                                    break;
									                                case "FO Trade":
									                                    foTradeList.push(arrayItem.actorEmail);
									                                    break;
									                                case "ADV":
									                                    advList.push(arrayItem.actorEmail);
									                                    break;
									                                case "Project Manager":
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
									                })
									                .fail(function() {});
   									},
   CheckVisibilitySettings		 :  function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
   									{
	   									if(Proto_Type=="P2")
	   									{
	   										$('#pcclabel,#pcccheckbox').removeClass('hide');
	   									}
	   									else
	   									{
	   										$('#pcclabel,#pcccheckbox').addClass('hide');
	   									}	
	   									if (Type_of_the_Prototype_Order == 'VENDU / SOLD')
								        {
	   										$('#totalorderamountdiv,#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeClass('hide');
								        }
	   									else
	   									{
	   										$('#totalorderamountdiv,#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').addClass('hide');
	   									}	
	   									if(Site_Workshop_Prototype.indexOf("La Verriere")!=-1 && Proto_Type=="P0" && Type_of_the_Prototype_Order == "VENDU/SOLD")
	   									{
	   										$('#frittagelabel,#frittagecheckbox').removeClass('hide');
	   									}
	   									else
	   									{
	   										$('#frittagelabel,#frittagecheckbox').addClass('hide');
	   									}	
	   									if(Site_Workshop_Prototype.indexOf("Nogent")!=-1)
	   									{
	   										$('#e52label,#e52checkbox').removeClass('hide');
	   									}
	   									else
	   									{
	   										$('#e52label,#e52checkbox').addClass('hide');
	   									}	
	   									if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && Site_Workshop_Prototype.indexOf("La Suze")!=-1)
	   									{
	   										$('#intralelabel,#intralecheckbox').removeClass('hide');
	   									}	
	   									if (Type_of_the_Prototype_Order == 'VENDU / SOLD' && $('#intralecheckbox').is(":not(:checked)"))
								        {
	   										$('#advdiv').removeClass('hide');
								        }
	   									else
	   									{
	   										$('#advdiv').addClass('hide');
	   									}	
   									},
   	CheckEditableSettings		 :  function(Site_Workshop_Prototype,Type_of_the_Prototype_Order,Proto_Type)
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
								   			$('#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeAttr('readonly');
								   			$('#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeAttr('disabled');
								   		}
								   		else
								   		{
								   			$('#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').attr('readonly',true);
								   			$('#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').attr('disabled',true);
								   		}
								   		if(Site_Workshop_Prototype.indexOf("La Verriere")!=-1 && Proto_Type=="P0" && Type_of_the_Prototype_Order == "VENDU/SOLD")
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
								        }
	   									else
	   									{
	   										$('#adv').attr('readonly',true);
	   										$('#adv').attr('disabled',true);
	   									}	
   									},
   CheckMandatorySettings			:	function()
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
   										}
});