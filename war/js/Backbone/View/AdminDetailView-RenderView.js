BackboneData.Views.AdminDetailView = Backbone.View.extend({
	el:'#admin-section',
	render:function()
	{
		var ref = this;
		var adminDetailHTML	="";
		if(window.language=="EN")
		{
			adminDetailHTML	 = admin.manager.AdminDetailView({'paramValue':window.actorDetails_englishLabelList});
		}	
		else
		{
			adminDetailHTML	 =  admin.manager.AdminDetailView({'paramValue':window.actorDetails_frenchLabelList});
		}	
		ref.$el.html(adminDetailHTML);
		$('#admin-section').removeClass('hide');
    	$('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper').addClass('hide');
    	$('#bs-example-navbar-collapse-1 ul li').removeClass('active');
    	$('#adminsetting-tab').addClass('active');
    	$('#admin-table').DataTable({
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
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add new User',
                className: 'btn btn-default btn-sm',
                action: function() {
                    $('#adminModal').modal('show');
                }
            }]
        });
	}
});