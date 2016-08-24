BackboneData.Views.ComponentGridDetailView = Backbone.View.extend({
	el:'#componentgdetailview',
	render:function()
	{
		var ref = this;
		var componentGridDetailHTML	="";
		if(window.language=="EN")
		{
			componentGridDetailHTML	 = component.manager.ComponentGridView({'paramValue':window.component_englishLabelList});
		}	
		else
		{
			componentGridDetailHTML	 =  component.manager.ComponentGridView({'paramValue':window.component_frenchLabelList});
		}
		ref.$el.html(componentGridDetailHTML);
		$('#example').DataTable({
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
            }],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add new component',
                className: 'btn btn-default btn-sm',
                action: function() {
                    window.location.href = "/#componentdetails";
                }
            }]
        });
	}

});