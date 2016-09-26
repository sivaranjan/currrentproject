window.executionPartsProductionVisibilitySettings || (window.executionPartsProductionVisibilitySettings = {});
window.executionPartsProductionEditableSettings || (window.executionPartsProductionEditableSettings = {});
window.executionPartsProductionMandatorySettings || (window.executionPartsProductionMandatorySettings = {});

executionPartsProductionVisibilitySettings = {
								'notification_status_txt'		: 'hide',
								'save_and_notify_quality_btn'	: '',
								'quantity_produced_txt'			: '',
								'date_datetime'					: '',
								'mod_past_times_txt'			: '',
								'comment_txtarea'				: '',
								'attached_file_file'			: '',
}

executionPartsProductionEditableSettings = {
								'notification_status_txt'		: 'readonly disabled',
								'save_and_notify_quality_btn'	: 'readonly disabled',
								'quantity_produced_txt'			: '',
								'date_datetime'					: '',
								'mod_past_times_txt'			: '',
								'comment_txtarea'				: '',
								'attached_file_file'			: '',
}

executionPartsProductionMandatorySettings = {
								'notification_status_txt'		: '',
								'save_and_notify_quality_btn'	: '',
								'quantity_produced_txt'			: 'data-required=yes data-type=text',
								'date_datetime'					: 'data-required=yes data-type=text',
								'mod_past_times_txt'			: '',
								'comment_txtarea'				: '',
								'attached_file_file'			: '',
}