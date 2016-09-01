BackboneData.Views.OrderListview = Backbone.View.extend({
    el: '#orderlist-section',
    render: function() {
        var ref = this;
        var orderListViewHtml = "";
        orderListViewHtml = orderlist.manager.OrderListDetailView();
        ref.$el.html(orderListViewHtml);
        $('#orderlist-section').removeClass('hide');
        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#admin-section').addClass('hide');
        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
        $('#orderlist-tab').addClass('active');
    },
    initialize: function(name) {
        var _thisView = this;
        _thisView.render();
        this.buildOrderListTable();
    },
    buildOrderListTable: function() {
    	/*$('#orderlist-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchOrders",
            "bDestroy": true,
            "columns": [
                        { "data": "site_Workshop_Prototype" },
                        { "data": "no_prototype_order" },
                        { "data": "order_Status" },
                        { "data": "branch_Code" },
                        { "data": "no_customerOrder" },
                        { "data": "projectManager" },
                        { "data": "proto_Type" },
                        { "data": "type_of_the_Prototype_Order" },
                        { "data": "site_Name" },
                        { "data": "date_of_the_Order" },
                        { "data": "requester" },
            ],
            "order": [
                [1, 'asc']
            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Sites',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#site-modal').modal('show');
                }
            }]
        });*/
    	$('#orderlist-table').DataTable({
    		ajax: "http://localhost:8888/fetchController/fetchOrders",
            bDestroy: true,
            columns: [
                        { "data": "site_Workshop_Prototype" },
                        { "data": "no_prototype_order" },
                        { "data": "order_Status" },
                        { "data": "branch_Code" },
                        { "data": "no_customerOrder" },
                        { "data": "projectManager" },
                        { "data": "proto_Type" },
                        { "data": "type_of_the_Prototype_Order" },
                        { "data": "date_of_the_Order" },
                        { "data": "requester" },
                        { "data": "" }
            ],
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
            }]
        });
    }
});
