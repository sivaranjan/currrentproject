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
                        'paramValue'	: 	window.componentCreation_englishLabelList
                 });
            }
            else
            {
                componentDetailHTML = component.manager.ComponentDetailView(
                {
                     	'paramValue'	: 	window.componentCreation_frenchLabelList
                });
            }
            ref.$el.html(componentDetailHTML);

            $('#planningcust-table').DataTable(
            {
                    dom				:	'Bfrtip',
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
                        targets		: 	[3],
                        orderable	: 	false,
                        width		: 	"40px",
                    },
                    {
                        targets		: 	[4],
                        orderable	: 	false,
                        width		: 	"40px",
                    }],
                    buttons: [
                    {
                        text		: '<i class="fa fa-plus" aria-hidden="true"></i> New',
                        className	: 'btn btn-default btn-sm newplanbtn',
                        action		: function()
                        {
                            $('#plancustdevlivery-modal').modal('show');
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
            'change #directDeliveryDiv input[type=radio]': "populateDependencies"
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
            /*var direct_delivery = $('#directDeliveryDiv input[name="optradio1"]:checked').val();
            if (direct_delivery == "No")
            {
                $('#customerOrderNodiv,#unitsellingpriceDiv,#directDeliveryDiv,#totalamtDiv,#customerdiv,#laboaddressdiv').removeClass('hide');
                $('#customerselect').attr('data-required', 'yes');
                $('#customerselect').attr('data-type', 'text');
                $('#laboaddress').attr('data-required', 'yes');
                $('#laboaddress').attr('data-type', 'text');
            }
            else
            {
                $('#customerdiv,#laboaddressdiv').addClass('hide');
                $('#customerselect,#laboaddress').removeAttr('data-required');
                $('#customerselect,#laboaddress').removeAttr('data-type');
            }*/
        }
    });