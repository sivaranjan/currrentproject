BackboneData.Views.ComponentDetailView = Backbone.View.extend({
    el: '#component-section',
    render: function() {
        var ref = this;
        var componentDetailHTML = "";
        if (window.language == "EN") {
            componentDetailHTML = component.manager.ComponentDetailView({ 'paramValue': window.componentCreation_englishLabelList });
        } else {
            componentDetailHTML = component.manager.ComponentDetailView({ 'paramValue': window.componentCreation_frenchLabelList });
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
            }, {
                targets: [3],
                orderable: false,
                width: "40px",
            }, {
                targets: [4],
                orderable: false,
                width: "40px",
            }],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> New',
                className: 'btn btn-default btn-sm newplanbtn',
                action: function() {
                    $('#plancustdevlivery-modal').modal('show');
                }
            }]
        });
        $('.newplanbtn').removeClass('dt-button');
    }
});
