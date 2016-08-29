BackboneData.Views.ComponentDetailView = Backbone.View.extend({
	el:'#component-section',
	render:function()
	{
		var ref = this;
		var componentDetailHTML	="";
		if(window.language=="EN")
		{
			componentDetailHTML	 = component.manager.ComponentDetailView({'paramValue':window.actorDetails_englishLabelList});
		}	
		else
		{
			componentDetailHTML	 =  component.manager.ComponentDetailView({'paramValue':window.actorDetails_frenchLabelList});
		}	
		ref.$el.html(componentDetailHTML);
		$('#component-section,#navfixed-wrapper').removeClass('hide');
    	$('#welcome-section,#createorder-section,#admin-section').addClass('hide');
    	$('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
        
        $('#planningcust-table').DataTable({

            dom: 'Bfrtip',
            responsive: {
                details: {
                    type: 'column',
                    target: -1
                }
            },
            columnDefs: [{
                className: 'control',
                orderable: false,
                targets: -1
            },
            {
            	targets: [ 3 ],
                orderable: false,
                width: "40px",
            },
            {
            	targets: [ 4 ],
                orderable: false,
                width: "40px",
            }
            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> New',
                className: 'btn btn-default btn-sm newplanbtn',
                action: function() {
                    $('#plancustdevlivery-modal').modal('show');
                }
            }]
        });
        $('.newplanbtn').removeClass('dt-button');
	},
events: {
    "change #Type_of_the_Prototype_Order": "populatechanges",
    "change #deliverytothecustomer_Yes":"populatechanges",
    "change #deliverytothecustomer_No":"populatechanges",
},
populatechanges: function() {
	 alert("hi");
	 var Type_of_the_Prototype_Order=$("#Type_of_the_Prototype_Order :selected").text();
	 var delivery_to_the_customer=$("#delivery input[name='optradio1']:checked").val();
	 if(Type_of_the_Prototype_Order=="VENDU / SOLD")
	 {
		 $('#customerorderN0label,#customerorderN0,#unitsellingpricelabel,#unitsellingprice,#Direct delivery to the customer?,#delivery,#totalamountlabel,#totalamount').removeClass('hide');
		 if(delivery_to_the_customer=="on")
		 {
			 $('#customerorderN0label,#customerorderN0,#laboaddress').removeClass('Hide');
			 
		 }
		 else
		 {
			 $('#customerorderN0label,#customerorderN0,#laboaddress').addClass('Hide');
		 }	 
		 
	}	 
	 else
	{
		 $('#customerorderN0label,#customerorderN0,#unitsellingpricelabel,#unitsellingprice,#Direct delivery to the customer?,#delivery,#totalamountlabel,#totalamount,#laboaddress').addClass('Hide')
	}
	
}
});