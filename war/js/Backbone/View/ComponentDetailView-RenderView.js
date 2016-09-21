BackboneData.Views.ComponentDetailView = Backbone.View
    .extend(
    {
        el: '#component-section',
        render: function()
        {
            var ref					 = 	this;
            var componentDetailHTML  = 	"";
            if (window.language == "EN")
            {
                componentDetailHTML = component.manager.ComponentDetailView(
                {
                        'paramValue'		: 	window.componentCreation_englishLabelList,
                        'visibleconfig'		: 	window.componentCreationVisibilitySettings,
		                'editableconfig'	: 	window.componentCreationEditableSettings,
		                'mandatoryconfig'	: 	window.componentCreationMandatorySettings
                 });
            }
            else
            {
                componentDetailHTML = component.manager.ComponentDetailView(
                {
                     	'paramValue'		: 	window.componentCreation_frenchLabelList,
                     	'visibleconfig'		: 	window.componentCreationVisibilitySettings,
		                'editableconfig'	: 	window.componentCreationEditableSettings,
		                'mandatoryconfig'	: 	window.componentCreationMandatorySettings
                });
            }
            ref.$el.html(componentDetailHTML);

            $('#planningcust-table').DataTable(
            {
                    dom				:	'Bfrtip',
                    "bDestroy"	: true,
                    buttons: [
                    {
                        text		: '<i class="fa fa-plus" aria-hidden="true"></i> New',
                        className	: 'btn btn-default btn-sm newplanbtn',
                        action		: function()
                        {
                        	 validateComponent(function()
            				 {
            					  saveComponent(function()
            					  {
            						  $('#plancustdevlivery-modal').modal('show');
            					  });
            				 });
                        }
                    }]
                });

            $('#planninglab-table').DataTable(
            {
                    dom				:   'Bfrtip',
                    responsive:
                    {
                        details:
                        {
                            type	: 	'column',
                            target	: 	-1
                        }
                    },
                    columnDefs: [
                    {
                        className	: 	'control',
                        orderable	: 	false,
                        targets		: 	-1
                    },
                    {
                        targets		: 	[4],
                        orderable	: 	false,
                        width		: 	"40px"
                    },
                    {
                        targets		: 	[5],
                        orderable	: 	false,
                        width		: 	"40px"
                    }],
                    buttons: [
                    {
                        text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> New',
                        className	: 	'btn btn-default btn-sm newplanbtn',
                        action		: 	function()
                        {
                            $('#planlabtest-modal').modal('show');
                        }
                    }]
                });
            $('#planningworkshop-table').DataTable(
                    {
                            dom				:   'Bfrtip',
                            columnDefs: [
                            {
                                targets		: 	[3],
                                orderable	: 	false,
                                width		: 	"40px"
                            },
                            {
                                targets		: 	[4],
                                orderable	: 	false,
                                width		: 	"40px"
                            }],
                            buttons: [
                            {
                                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> New',
                                className	: 	'btn btn-default btn-sm newplanbtn',
                                action		: 	function()
                                {
                                    $('#planningworkshop-modal').modal('show');
                                }
                            }]
                        });
//            Execution tables
            $('#partsprod-table').DataTable(
                    {
                            dom				:   'Bfrtip',
                            buttons: [
                            {
                                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> Creation',
                                className	: 	'btn btn-default btn-sm newplanbtn',
                                action		: 	function()
                                {
                                    $('#partsprod-modal').modal('show');
                                }
                            }]
                        });
            $('#qualapp-table').DataTable(
                    {
                            dom				:   'Bfrtip',
                            buttons: [
                            {
                                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> Creation',
                                className	: 	'btn btn-default btn-sm newplanbtn',
                                action		: 	function()
                                {
                                    $('#qualapp-modal').modal('show');
                                }
                            }]
                        });
            $('#validtestreport-table').DataTable(
                    {
                            dom				:   'Bfrtip',
                            buttons: [
                            {
                                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> Creation',
                                className	: 	'btn btn-default btn-sm newplanbtn',
                                action		: 	function()
                                {
                                    $('#validtestreport-modal').modal('show');
                                }
                            }]
                        });
            $('#devliverbill-table').DataTable(
                    {
                            dom				:   'Bfrtip',
                            buttons: [
                            {
                                text		: 	'<i class="fa fa-plus" aria-hidden="true"></i> Creation',
                                className	: 	'btn btn-default btn-sm newplanbtn',
                                action		: 	function()
                                {
                                    $('#devliverbill-modal').modal('show');
                                }
                            }]
                        });
            $('.newplanbtn').removeClass('dt-button');
            /*var Type_of_the_Prototype_Order = $.trim($('#Type_of_the_Prototype_Order').val());
            if (Type_of_the_Prototype_Order == "VENDU / SOLD")
            {
                $('#customerOrderNodiv,#unitsellingpriceDiv,#directDeliveryDiv,#totalamtDiv').removeClass('hide');
                $('#unitsellingprice').attr('data-required', 'yes');
                $('#unitsellingprice').attr('data-type', 'text');
            }
            else
            {
                $('#customerOrderNodiv,#unitsellingpriceDiv,#directDeliveryDiv,#totalamtDiv').addClass('hide');
                $('#unitsellingprice').removeAttr('data-required');
                $('#unitsellingprice').removeAttr('data-type');
            }*/
        },
        events:
        {
            'change #directDeliveryDiv input[type=radio]': "populateDependencies",
            'change #customer_drpdwn'	: 'fetchLaboAddress'
        },
        fetchLaboAddress	:   function()
	    {
	        var customerNameSelected 	= 	encodeURIComponent($.trim($('#customer_drpdwn').val())); //doubt
	        fetchLaboAddressOnLoad(customerNameSelected);
	    },
        initialize		: 	function()
        {
            _.bindAll(this, 'cleanup');
            var _thisView = this;
            _thisView.render();
        },
        cleanup			:	 function()
        {
            this.undelegateEvents();
            $(this.el).empty();
        },
        populateDependencies	: 	function()
        {
            var direct_delivery = $('#directDeliveryDiv input[name="optradio1"]:checked').val();
            var currentOrderObject = window.currentOrderObject;
                currentOrderObject.forEach(function(arrayItem)
				{
					if(arrayItem.type_of_the_Prototype_Order == "VENDU / SOLD" && direct_delivery == "No")
					{
						$('#customerdiv,#laboaddressdiv').removeClass('hide');
						$('#customer_drpdwn,#labo_address_or_other_txtarea').attr('data-type',"text");
		                $('#customer_drpdwn,#labo_address_or_other_txtarea').attr('data-required',true);
		                $('#customerdiv button').removeClass('disabled');
		                $('#customerdiv .bootstrap-select').removeClass('disabled');
		                $('#customerdiv .dropdown-toggle').removeClass('disabled');
		                $('#labo_address_or_other_txtarea').removeAttr('readonly');
		                $('#labo_address_or_other_txtarea').removeAttr('disabled');
		                $('#customer_drpdwn').removeAttr('disabled');
		                $('#customer_drpdwn').removeAttr('readonly');
					}
					else
					{
						$('#customerdiv,#laboaddressdiv').addClass('hide');
		                $('#customer_drpdwn,#labo_address_or_other_txtarea').removeAttr('data-required');
		                $('#customer_drpdwn,#labo_address_or_other_txtarea').removeAttr('data-type');
		                $('#labo_address_or_other_txtarea').val('');
		                $('#customer_drpdwn').selectpicker('deselectAll')
						$('#customer_drpdwn').selectpicker('val', '');
						$('#customer_drpdwn').selectpicker('refresh');
						$('#customerdiv button').addClass('disabled');
						$('#customerdiv .dropdown-toggle').addClass('disabled');
						$('#customerdiv .bootstrap-select').addClass('disabled');
						$('#labo_address_or_other_txtarea').attr('disabled',true);
						$('#labo_address_or_other_txtarea').attr('readonly',true);
						$('#customer_drpdwn').attr('disabled',true);
		                $('#customer_drpdwn').attr('readonly',true);
					}	
				});
        }
    });