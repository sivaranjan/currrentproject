window.componentCreationVisibilitySettings || (window.componentCreationVisibilitySettings = {});
window.componentCreationEditableSettings || (window.componentCreationEditableSettings = {});
window.componentCreationMandatorySettings || (window.componentCreationMandatorySettings = {});
window.componentnavVisibilitySettings || (window.componentnavVisibilitySettings = {});

componentnavVisibilitySettings = {
										'breadcrumb'	: 'hide',
										'print'			: '',
										'duplicate'		: '',
										'saveorder'		: '',
										'close'			: '',
										'closeorder'	: 'hide',
										'cancelorder'	: 'hide',
										'validateorder'	: '',
										'refuseorder'	: 'hide',
										'demoteprevious': 'hide', 
										'demoterequester': 'hide',
										'fixednavbar'	: 'hide'
									}

componentCreationVisibilitySettings = {
						    'comment_component_details_txtarea'				: 'hide', 	// This is meant for bootbox - Refuse Comment ** Jayapriya
						    'no_prototype_order_comppage_txt'				: '',
						    'order_type_txt'								: '',
						    'customer_order_no_component_details_txt'		: 'hide',
						    'customer_reference_component_details_txt'		: '',
						    'product_type_component_details_txt'			: '',
						    'component_id_txt'								: '',
						    'component_status_txt'							: '',
						    'customer_reference_component_description_txt'	: '',
						    'product_specification_txtarea'					: '',
						    'product_type_component_description_drpdwn'		: '',
						    'unit_selling_price_txt'						: 'hide',
						    'direct_delivery_to_the_customer_radiobtn'		: 'hide',
						    'customer_drpdwn'       						: 'hide', 
						    'labo_address_or_other_txtarea'					: 'hide',
						    'comment_component_description_txtarea'			: '',
						    'total_quantity_txt'							: '',
						    'total_amount_txt'      						: 'hide',
						    'project_manager_technical_definition_txt'		: '',
						    'r_d_manager_dprdwn'							: '',
						    'project_phase_drpdwn'							: '',
						    'valeo_reference_txt'							: '',
						    'technology_drpdwn'								: '',
						    'wbs_oi_code_txt'								: '',
						    'be_code_txt'									: '',
						    'mip_pwa_code_txt'								: '',
						    'validation_process_radiobtn'					: '',
						    'plan_of_laboratory_tests_radiobtn'				: '',
						    'process_team_member_drpdwn'					: 'hide',
						    'nomenclature_file'								: '',
						    'plan_file'										: '',
						    'comment_technical_definition_txtarea'			: '',
						    'process_deliverable_file'						: 'hide',
						    'yes_i_specified_process_req_checkbox'			: 'hide',
						    'comment_process_validation_txtarea'			: 'hide',
						    'supported_by_drpdwn'							: '',
						    'list_of_prototypists_txtarea'					: '',
						    'component_projected_costs_label'				: '',
						    'estimated_amount_of_workshop_txt'				: '',
						    'estimated_unit_internal_cost_txt'				: '',
						    'estimated_unit_external_cost_txt'				: '',
						    'estimated_total_cost_components_txt'			: '',
						    'hourly_rate_txt'								: '',
						    'fixed_costs_txt'								: '',
						    'estimated_time_unit_of_components_txt'			: '',
						    'estimated_time_total_of_components_txt'		: '',
						    'total_cost_txt'								: '',
						    'quality_deliverable_file'						: '',
						    'yes_i_specified_quality_req_checkbox'			: '',
						    'comment_quality_deliverable_txtarea'			: '',
						    'customer_qty_txt'								: '',
						    'qty_lab_tests_qty_txt'							: '',
						    'qty_produced_txt'								: '',
						    'qty_test_report_txt'							: '',
						    'qty_approv_compliant_quality_txt'				: '',
						    'qty_approv_not_compliant_quality_txt'			: '',
						    'delivered_quantity_txt'						: '',
						    'invoiced_qty_txt'								: ''
};
componentCreationEditableSettings = {
		
							'comment_component_details_txtarea'				: '', 									//component page starts here
							'no_prototype_order_comppage_txt'				: 'readonly disabled',
							'order_type_txt'								: 'readonly disabled',
							'customer_order_no_component_details_txt'		: 'readonly disabled',
							'customer_reference_component_details_txt'		: 'readonly disabled',
							'product_type_component_details_txt'			: 'readonly disabled',
							'component_id_txt'								: 'readonly disabled',
							'component_status_txt'							: 'readonly disabled',
							'customer_reference_component_description_txt'	: '',
							'product_specification_txtarea'					: '',
							'product_type_component_description_drpdwn'		: '',
							'unit_selling_price_txt'						: 'readonly disabled',
							'direct_delivery_to_the_customer_radiobtn'		: 'readonly disabled',
							'customer_drpdwn'       						: 'readonly disabled', 
							'labo_address_or_other_txtarea'					: 'readonly disabled',
							'comment_component_description_txtarea'			: '',
							'total_quantity_txt'							: 'readonly disabled',
							'total_amount_txt'      						: 'readonly disabled',
							'project_manager_technical_definition_txt'		: '',
							'r_d_manager_dprdwn'							: '',
							'project_phase_drpdwn'							: '',
							'valeo_reference_txt'							: '',
							'technology_drpdwn'								: '',
							'wbs_oi_code_txt'								: '',
							'be_code_txt'									: '',
							'mip_pwa_code_txt'								: '',
							'validation_process_radiobtn'					: '',
							'plan_of_laboratory_tests_radiobtn'				: '',
						    'process_team_member_drpdwn'					: '',
							'nomenclature_file'								: '',
							'plan_file'										: '',
							'comment_technical_definition_txtarea'			: 'readonly disabled',
							'process_deliverable_file'						: 'readonly disabled',
							'yes_i_specified_process_req_checkbox'			: 'readonly disabled',
							'comment_process_validation_txtarea'			: 'readonly disabled',
							'supported_by_drpdwn'							: 'readonly disabled',
							'list_of_prototypists_txtarea'					: 'readonly disabled',
							'component_projected_costs_label'				: 'readonly disabled',
							'estimated_amount_of_workshop_txt'				: 'readonly disabled',
							'estimated_unit_internal_cost_txt'				: 'readonly disabled',
							'estimated_unit_external_cost_txt'				: 'readonly disabled',
							'estimated_total_cost_components_txt'			: 'readonly disabled',
							'hourly_rate_txt'								: 'readonly disabled',
							'fixed_costs_txt'								: 'readonly disabled',
							'estimated_time_unit_of_components_txt'			: 'readonly disabled',
							'estimated_time_total_of_components_txt'		: 'readonly disabled',
							'total_cost_txt'								: 'readonly disabled',
							'quality_deliverable_file'						: '',
							'yes_i_specified_quality_req_checkbox'			: 'readonly disabled',
							'comment_quality_deliverable_txtarea'			: '',
							'customer_qty_txt'								: 'readonly disabled',
							'qty_lab_tests_qty_txt'							: 'readonly disabled',
							'qty_produced_txt'								: 'readonly disabled',
							'qty_test_report_txt'							: 'readonly disabled',
							'qty_approv_compliant_quality_txt'				: 'readonly disabled',
							'qty_approv_not_compliant_quality_txt'			: 'readonly disabled',
							'delivered_quantity_txt'						: 'readonly disabled',
							'invoiced_qty'									: 'readonly disabled'
							
}

componentCreationMandatorySettings = {
							'comment_component_details_txtarea'				: '', 												//component page starts here
							'no_prototype_order_comppage_txt'				: '',
							'order_type_txt'								: '',
							'customer_order_no_component_details_txt'		: '',
							'customer_reference_component_details_txt'		: '',
							'product_type_component_details_txt'			: '',
							'component_id_txt'								: 'data-required=yes data-type=text',
							'component_status_txt'							: '',
							'customer_reference_component_description_txt'	: 'data-required=yes data-type=text',
							'product_specification_txtarea'					: 'data-required=yes data-type=text',
							'product_type_component_description_drpdwn'		: 'data-required=yes data-type=text',
							'unit_selling_price_txt'						: '',
							'direct_delivery_to_the_customer_radiobtn'		: '',                      //Default-mandatory.but it is visible only if VENDU/SOLD
							'customer_drpdwn'       						: '', 
							'labo_address_or_other_txtarea'					: '',
							'comment_component_description_txtarea'			: '',
							'total_quantity_txt'							: '',
							'total_amount_txt'      						: '',
							'project_manager_technical_definition_txt'		: '',
							'r_d_manager_dprdwn'							: '',
							'project_phase_drpdwn'							: '',
							'valeo_reference_txt'							: '',
							'technology_drpdwn'								: '',
							'wbs_oi_code_txt'								: '',
							'be_code_txt'									: '',
							'mip_pwa_code_txt'								: '',
							'validation_process_radiobtn'					: '',
							'plan_of_laboratory_tests_radiobtn'				: '',
						    'process_team_member_drpdwn'					: '',
							'nomenclature_file'								: '',
							'plan_file'										: '',
							'comment_technical_definition_txtarea'			: '',
							'process_deliverable_file'						: '',
							'yes_i_specified_process_req_checkbox'			: '',
							'comment_process_validation_txtarea'			: '',
							'supported_by_drpdwn'							: '',
							'list_of_prototypists_txtarea'					: '',
							'component_projected_costs_label'				: '',
							'estimated_amount_of_workshop_txt'				: '',
							'estimated_unit_internal_cost_txt'				: 'data-required=yes data-type=text',
							'estimated_unit_external_cost_txt'				: 'data-required=yes data-type=text',
							'estimated_total_cost_components_txt'			: '',
							'hourly_rate_txt'								: 'data-required=yes data-type=text',
							'fixed_costs_txt'								: 'data-required=yes data-type=text',
							'estimated_time_unit_of_components_txt'			: 'data-required=yes data-type=text',
							'estimated_time_total_of_components_txt'		: '',
							'total_cost_txt'								: '',
							'quality_deliverable_file'						: '',
							'yes_i_specified_quality_req_checkbox'			: '',
							'comment_quality_deliverable_txtarea'			: '',
							'customer_qty_txt'								: '',
							'qty_lab_tests_qty_txt'							: '',
							'qty_produced_txt'								: '',
							'qty_test_report_txt'							: '',
							'qty_approv_compliant_quality_txt'				: '',
							'qty_approv_not_compliant_quality_txt'			: '',
							'delivered_quantity_txt'						: '',
							'invoiced_qty'									: ''
							
							
}