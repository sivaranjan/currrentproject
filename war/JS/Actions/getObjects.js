(function()
{
		getComponentObject					   =	function()
													{
												   		var orderIDReference	= 	Do.BackboneEncode($('#no_prototype_order_comppage_txt').val());
														var componentID 		=   Do.BackboneEncode($('#componentID').val());
														var componentStatus		= 	Do.BackboneEncode($('#componentStatus').val());
														var TotalQuantity		=	Do.BackboneEncode($('#total_quantity_txt').val());
														var TotalAmount			=	Do.BackboneEncode($('#total_amount_txt').val());
														var componentcreationObject 	= 	new BackboneData.Models.ComponentCreateModel(
														{
															   orderIDReference		:	orderIDReference,
															   componentID			: 	componentID,
															   componentStatus		: 	componentStatus,
															   totalQuantity		: 	parseInt(TotalQuantity),
															   totalAmount			: 	parseInt(TotalAmount),
														});
														return componentcreationObject;
													};
		getComponentDescriptionModelObject	  = 	function()
													{
												   		var customerReference_txt 		  		  = 	Do.BackboneEncode($('#customerReference_txt').val());
												    	var componentID 						  =   	Do.BackboneEncode($('#componentID').val());
												    	var unit_selling_price_txt 		  		  = 	Do.BackboneEncode($('#unit_selling_price_txt').val());
														var customer_drpdwn 			  		  = 	Do.BackboneEncode($('#customer_drpdwn').val());
														var DirecedeliverytoCustomer 	  		  = 	Do.BackboneEncode($('#directDeliveryDiv input[name="optradio1"]:checked').val());
														var product_specification_txtarea 		  = 	Do.BackboneEncode($('#product_specification_txtarea').val());
														var labo_address_or_other_txtarea 		  = 	Do.BackboneEncode($('#labo_address_or_other_txtarea').val());
														var product_type_component_description_drpdwn = Do.BackboneEncode($('#product_type_component_description_drpdwn').val());
														var comment_component_description_txtarea = $('#comment_component_description_txtarea').val();
														
														var componentDescriptionModelObject   	  = 	new BackboneData.Models.ComponentDescriptionModel({
															  componentID				: 	componentID,
															  customerReference 		:   customerReference_txt,
															  productType 				:   product_type_component_description_drpdwn,
															  unitSellingPrice 			: 	unit_selling_price_txt,
															  customer 					: 	customer_drpdwn,
															  directDeliverytoCustomer  :	DirecedeliverytoCustomer,
															  productSpecification		: 	product_specification_txtarea,
														      laboAdress 				: 	labo_address_or_other_txtarea,
														      comment_componentDescription : comment_component_description_txtarea,
														});
														return componentDescriptionModelObject;
													};
		getTechnicalDefinitionModelObject    =  function()
												{	
														var componentID 		 =  Do.BackboneEncode($('#componentID').val());
														var projectManagerComp   = 	Do.BackboneEncode($('#projectManagerComp').val());
														var rAndManagerComp		 =	Do.BackboneEncode($('#r_d_manager_dprdwn').val());
														var technology_drpdwn    = 	Do.BackboneEncode($('#technology_drpdwn').val());
														var wbs_code			 =	Do.BackboneEncode($('#wbs_code').val());
														var project_phase_drpdwn = 	Do.BackboneEncode($('#project_phase_drpdwn').val());
														var valeo_Reference      = 	Do.BackboneEncode($('#valeo_Reference').val());
														var be_code 			 =  Do.BackboneEncode($('#be_code').val());
														var mip_code             =  Do.BackboneEncode($('#mip_code').val());
														var comment_techdef		 =	Do.BackboneEncode($('#comment_technical_definition_txtarea').val());
														var validationRadioBtn	 =  Do.BackboneEncode($('#validationProcessDiv input[name="validprocess-radio"]:checked').val());
														var planOfLabRadioBtn	 =  Do.BackboneEncode($('#planlaboDiv input[name="planlab-radio"]:checked').val());
														var processteamMember	 =  Do.BackboneEncode($('#processteammemberdrpdwn').val());
														var nomenClatureList	 =	nomenIDArray;
														var planTechDefList		 =	planIDArray;
														if(planOfLabRadioBtn=="Yes")
														{
															planOfLabRadioBtn = true;
														}	
														else
														{
															planOfLabRadioBtn = false;
														}
														if(validationRadioBtn=="Yes")
														{
															validationRadioBtn = true;
														}	
														else
														{
															validationRadioBtn = false;
														}
														
													  var technicalDefinitionModelObject   = new BackboneData.Models.TechnicalDefinitionModel({
													
														    componentID			: 	componentID,
															projectManager 		:   projectManagerComp,
															rAndDManager		: 	rAndManagerComp,
															projectPhase 		:   project_phase_drpdwn,
															valeoReference  	:	valeo_Reference,
															technology 			: 	technology_drpdwn,
															wbsCode 			:   wbs_code,
															beCode 				:   be_code,
															mipPWACode 			:   mip_code,
															validationProcess 	:   validationRadioBtn,
															planofLabTests 		:	planOfLabRadioBtn,
															processteamMember	:	processteamMember,
															nomenClature 		:   nomenClatureList,
															plan 				:   planTechDefList,
															comment				:	comment_techdef
													  });
														return technicalDefinitionModelObject;
												}
		getProcessValidationModelObject		=	function()
												{
													var componentID 		 		  =  Do.BackboneEncode($('#componentID').val());
													var processDeliverableIDList      =  processdeliverIDArray;
													var processValidationComments	  =  Do.BackboneEncode($('#comment_process_validation_txtarea').val());
													var yesISpecified				  =	 Do.BackboneEncode($('#yes_i_specified_process_req_checkbox').is(":checked"));
											   		var processValidationModelObject  =  new BackboneData.Models.ProcessValidationModel({
														
											   			componentID					: 	componentID,
											   			processDeliverable 			:   processdeliverIDArray,
											   			yesIspecified				: 	yesISpecified,
											   			comment 					:   processValidationComments
													});
													return processValidationModelObject;
												};
		getEstimationDelaysModelObject		=	function()
												{
													var componentID 		 				=   Do.BackboneEncode($('#componentID').val());
													var supported_by_drpdwn   				= 	Do.BackboneEncode($('#supported_by_drpdwn').val());
													var list_of_prototypists_txtarea  		= 	Do.BackboneEncode($('#list_of_prototypists_txtarea').val());
													var estimated_amount_of_workshop_txt 	= 	Do.BackboneEncode($('#estimated_amount_of_workshop_txt').val());
													var estimated_unit_external_cost_txt 	= 	Do.BackboneEncode($('#estimated_unit_external_cost_txt').val());
													var estimated_time_unit_of_components_txt = Do.BackboneEncode($('#estimated_time_unit_of_components_txt').val());
													var estimated_time_total_of_components_txt = Do.BackboneEncode($('#estimated_time_total_of_components_txt').val());
													var estimated_unit_internal_cost_txt 	= 	Do.BackboneEncode($('#estimated_unit_internal_cost_txt').val());
													var estimated_total_cost_components_txt = 	Do.BackboneEncode($('#estimated_total_cost_components_txt').val());
													var hourly_rate_txt 					= 	Do.BackboneEncode($('#hourly_rate_txt').val());
													var fixed_costs_txt 					=	Do.BackboneEncode($('#fixed_costs_txt').val());
													var total_cost_txt 						= 	Do.BackboneEncode($('#total_cost_txt').val());
													
											   		var estimationDelayModelObject   = new BackboneData.Models.EstimatingCostAndDelayModel({
														
											   			componentID						: 	componentID,
											   			supportedBy 					:   supported_by_drpdwn,
											   			listOfPrototypists				: 	list_of_prototypists_txtarea,
											   			estimatedAmountOfWorkshop 		:   estimated_amount_of_workshop_txt,
											   			estimatedUnitInternalCost		: 	estimated_unit_internal_cost_txt,
											   			estimatedUnitExternalCost 		:   estimated_unit_external_cost_txt,
											   			estimatedTotalCostComponents	: 	estimated_total_cost_components_txt,
											   			hourlyRate 						:   hourly_rate_txt,
											   			fixedCosts						: 	fixed_costs_txt,
											   			estimatedTimeUnitOfComponents 	:   estimated_time_unit_of_components_txt,
											   			estimatedTimeTotalOfComponents	: 	estimated_time_total_of_components_txt,
											   			totalCosts 						:   total_cost_txt
													});
													return estimationDelayModelObject;
												};
		getQualityDeliverableModelObject	=	function()
												{
													var componentID 		 =  Do.BackboneEncode($('#componentID').val());
													var comment_quality_deliverable = Do.BackboneEncode($('#comment_quality_deliverable').val());
													var yes_i_specified_quality_req_checkbox =  Do.BackboneEncode($('#yes_i_specified_quality_req_checkbox').is(":checked"));
											   		var qualityDeliverableModelObject   = new BackboneData.Models.QualityDeliverableModel({
														
												   			componentID						: 	componentID,
												   			qualityDeliverable 				:   qualityIDArray,
												   			yesISpecified					: 	yes_i_specified_quality_req_checkbox,
												   			comment 						:   comment_quality_deliverable
											   			});
											   			return qualityDeliverableModelObject;
												};
		getOrderModelObject 				=	function()
												{
														var Site_Workshop_Prototype 	= 	Do.BackboneEncode($('#Site_Workshop_Prototype').val());
												        var Geosite 					= 	Do.BackboneEncode($('#Geosite').val());
												        var No_Prototype_Order 			= 	Do.BackboneEncode($('#No_Prototype_Order').val());
												        var Proto_Type 					= 	Do.BackboneEncode($('#Proto_Type').val());
												        var pcccheckbox 				= 	Do.BackboneEncode($('#pcccheckbox').is(":checked"));
												        var openordercheckbox 			= 	Do.BackboneEncode($('#openordercheckbox').is(":checked"));
												        var frittagecheckbox 			= 	Do.BackboneEncode($('#frittagecheckbox').is(":checked"));
												        var e52checkbox 				= 	Do.BackboneEncode($('#e52checkbox').is(":checked"));
												        var intralecheckbox 			= 	Do.BackboneEncode($('#intralecheckbox').is(":checked"));
												        var Type_of_the_Prototype_Order = 	Do.BackboneEncode($('#Type_of_the_Prototype_Order').val());
												        var Date_of_the_Order 			= 	Do.BackboneEncode($('#Date_of_the_Order').val());
												        var no_customer_order 			= 	Do.BackboneEncode($('#no_customer_order').val());
												        var customer_order_list 		=	attachmentIDArray;
												        var Customer_Name 				= 	Do.BackboneEncode($('#Customer_Name').val());
												        var Customer_Code 				= 	Do.BackboneEncode($('#Customer_Code').val());
												        var Branch_Code 				= 	Do.BackboneEncode($('#Branch_Code').val());
												        var Provider_Code 				= 	Do.BackboneEncode($('#Provider_Code').val());
												        var Final_Delivery_Address 		= 	Do.BackboneEncode($('#Final_Delivery_Address').val());
												        var Additional_Address 			= 	Do.BackboneEncode($('#Additional_Address').val());
												        var Site_Address	 			= 	Do.BackboneEncode($('#Site_Address').val());
												        var Plateform 					= 	Do.BackboneEncode($('#Plateform').val());
												        var Incoterms 					= 	Do.BackboneEncode($('#Incoterms').val());
												        var Place 						= 	Do.BackboneEncode($('#Place').val());
												        var Customer_Receiver_Name 		= 	Do.BackboneEncode($('#Customer_Receiver_Name').val());
												        var Customer_Receiver_Telephone = 	Do.BackboneEncode($('#Customer_Receiver_Telephone').val());
												        var Allocation_of_turnover 		= 	Do.BackboneEncode($('#Allocation_of_turnover').val());
												        var Total_Order_Amount 			= 	Do.BackboneEncode($('#Total_Order_Amount').val());
												        var Order_Status 				= 	Do.BackboneEncode($('#Order_Status').val());
												        var requester 					= 	Do.BackboneEncode($('#requester').val());
												        var mepstudy 					= 	Do.BackboneEncode($('#mepstudy').val());
												        var quality 					= 	Do.BackboneEncode($('#quality').val());
												        var protoworkshop 				= 	Do.BackboneEncode($('#protoworkshop').val());
												        var controlmanagement		 	= 	Do.BackboneEncode($('#controlmanagement').val());
												        var fotrade 					= 	Do.BackboneEncode($('#fotrade').val());
												        var adv 						= 	Do.BackboneEncode($('#adv').val());
												        var projmanager 				= 	Do.BackboneEncode($('#projmanager').val());
												        
												        var orderDetailsModelObject 			= 	new BackboneData.Models.OrderDetailModel(
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
													        	            lastPrototypeOrderID		:   No_Prototype_Order
													    });
												        return orderDetailsModelObject;
												};
			getOrderModelUpdateObject		=	function()
												{
													var Site_Workshop_Prototype 	= 	Do.BackboneEncode($('#Site_Workshop_Prototype').val());
											        var Geosite 					= 	Do.BackboneEncode($('#Geosite').val());
											        var No_Prototype_Order 			= 	Do.BackboneEncode($('#No_Prototype_Order').val());
											        var Proto_Type 					= 	Do.BackboneEncode($('#Proto_Type').val());
											        var pcccheckbox 				= 	Do.BackboneEncode($('#pcccheckbox').is(":checked"));
											        var openordercheckbox 			= 	Do.BackboneEncode($('#openordercheckbox').is(":checked"));
											        var frittagecheckbox 			= 	Do.BackboneEncode($('#frittagecheckbox').is(":checked"));
											        var e52checkbox 				= 	Do.BackboneEncode($('#e52checkbox').is(":checked"));
											        var intralecheckbox 			= 	Do.BackboneEncode($('#intralecheckbox').is(":checked"));
											        var Type_of_the_Prototype_Order = 	Do.BackboneEncode($('#Type_of_the_Prototype_Order').val());
											        var Date_of_the_Order 			= 	Do.BackboneEncode($('#Date_of_the_Order').val());
											        var no_customer_order 			= 	Do.BackboneEncode($('#no_customer_order').val());
											        var customer_order_list 		=	attachmentIDArray;
											        var Customer_Name 				= 	Do.BackboneEncode($('#Customer_Name').val());
											        var Customer_Code 				= 	Do.BackboneEncode($('#Customer_Code').val());
											        var Branch_Code 				= 	Do.BackboneEncode($('#Branch_Code').val());
											        var Provider_Code 				= 	Do.BackboneEncode($('#Provider_Code').val());
											        var Final_Delivery_Address 		= 	Do.BackboneEncode($('#Final_Delivery_Address').val());
											        var Additional_Address 			= 	Do.BackboneEncode($('#Additional_Address').val());
											        var Site_Address	 			= 	Do.BackboneEncode($('#Site_Address').val());
											        var Plateform 					= 	Do.BackboneEncode($('#Plateform').val());
											        var Incoterms 					= 	Do.BackboneEncode($('#Incoterms').val());
											        var Place 						= 	Do.BackboneEncode($('#Place').val());
											        var Customer_Receiver_Name 		= 	Do.BackboneEncode($('#Customer_Receiver_Name').val());
											        var Customer_Receiver_Telephone = 	Do.BackboneEncode($('#Customer_Receiver_Telephone').val());
											        var Allocation_of_turnover 		= 	Do.BackboneEncode($('#Allocation_of_turnover').val());
											        var Total_Order_Amount 			= 	Do.BackboneEncode($('#Total_Order_Amount').val());
											        var Order_Status 				= 	Do.BackboneEncode($('#Order_Status').val());
											        var requester 					= 	Do.BackboneEncode($('#requester').val());
											        var mepstudy 					= 	Do.BackboneEncode($('#mepstudy').val());
											        var quality 					= 	Do.BackboneEncode($('#quality').val());
											        var protoworkshop 				= 	Do.BackboneEncode($('#protoworkshop').val());
											        var controlmanagement		 	= 	Do.BackboneEncode($('#controlmanagement').val());
											        var fotrade 					= 	Do.BackboneEncode($('#fotrade').val());
											        var adv 						= 	Do.BackboneEncode($('#adv').val());
											        var projmanager 				= 	Do.BackboneEncode($('#projmanager').val());
													var orderDetailsUpdateObj 			= 	new BackboneData.Models.OrderDetailModelUpdate(
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
										        	            lastModifiedBy				:	useremailid,
										        	            lastPrototypeOrderID		:   $.trim(localStorage.getItem("lastPrototypeOrderID"))
										        	   });
													return orderDetailsUpdateObj;
												}
})();