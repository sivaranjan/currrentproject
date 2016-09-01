BackboneData.Views.ComponentDetailView = Backbone.View
		.extend({
			el : '#component-section',
			render : function() {
				var ref = this;
				var componentDetailHTML = "";
				if (window.language == "EN") {
					componentDetailHTML = component.manager
							.ComponentDetailView({
								'paramValue' : window.componentCreation_englishLabelList
							});
				} else {
					componentDetailHTML = component.manager
							.ComponentDetailView({
								'paramValue' : window.componentCreation_frenchLabelList
							});
				}
				ref.$el.html(componentDetailHTML);
				$('#component-section,#navfixed-wrapper').removeClass('hide');
				$('#welcome-section,#createorder-section,#admin-section')
						.addClass('hide');
				$('.selectpicker').selectpicker();
				$('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');

				$('#planningcust-table')
						.DataTable(
								{

									dom : 'Bfrtip',
									responsive : {
										details : {
											type : 'column',
											target : -1
										}
									},
									columnDefs : [ {
										className : 'control',
										orderable : false,
										targets : -1
									}, {
										targets : [ 3 ],
										orderable : false,
										width : "40px",
									}, {
										targets : [ 4 ],
										orderable : false,
										width : "40px",
									} ],
									buttons : [ {
										text : '<i class="fa fa-plus" aria-hidden="true"></i> New',
										className : 'btn btn-default btn-sm newplanbtn',
										action : function() {
											$('#plancustdevlivery-modal')
													.modal('show');
										}
									} ]
								});
				$('.newplanbtn').removeClass('dt-button');
		        var Type_of_the_Prototype_Order = $.trim($('#Type_of_the_Prototype_Order').val());
				if(Type_of_the_Prototype_Order =="VENDU / SOLD")
				{
					$('#customerorderN0label,#customerorderN0,#unitsellingpricelabel,#unitsellingprice,#Direct_delivery_to_customer,#delivery,#totalamountlabel,#totalamount').removeClass('hide');
					$('#unitsellingprice').attr('data-required','yes');
					$('#unitsellingprice').attr('data-type','text');
				}
				else
				{
					$('#customerorderN0label,#customerorderN0,#unitsellingpricelabel,#unitsellingprice,#Direct_delivery_to_customer,#delivery,#totalamountlabel,#totalamount,#customerdiv,#labolabel,#laboaddress').addClass('hide');
					$('#unitsellingprice').removeAttr('data-required');
					$('#unitsellingprice').removeAttr('data-type');
				}
			},
			events : {
		        "change #delivery":"populateDependencies"
			},
			populateDependencies:function() {
				var direct_delivery=$('#delivery input[name="optradio1"]:checked').val();
	            if (direct_delivery == "No") 
				{
					$('#customerdiv,#labolabel,#laboaddress').removeClass('hide');
					$('#customer,#laboaddress').attr('data-required','yes');
					$('#customer,#laboaddress').attr('data-type','text');
				}
				else
				{
					$('#customerdiv,#labolabel,#laboaddress').addClass('hide');
					$('#customer,#laboaddress').removeAttr('data-required');
					$('#customer,#laboaddress').removeAttr('data-type');
				}
			}
		});
