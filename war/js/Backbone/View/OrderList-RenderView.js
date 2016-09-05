BackboneData.Views.OrderListview = Backbone.View.extend(
{
    el			: 	'#orderlist-section',
    render		: 	function()
    {
        var ref = this;
        var orderListViewHtml 	= 	"";
        orderListViewHtml 		= 	orderlist.manager.OrderListDetailView();
        ref.$el.html(orderListViewHtml);
    },
    initialize: function(name)
    {
        var _thisView 	= 	this;
        _thisView.render();
        this.buildOrderListTable();
    },
    buildOrderListTable		: 	function()
    {
        $('#orderlist-table').DataTable(
        {
            ajax		: 	ApplicationConstants.fetchOrdersList,
            bDestroy	: 	true,
            columns		: 	[
            {
                "data": "site_Workshop_Prototype"
            },
            {
                "data": "no_prototype_order"
            },
            {
                "data": "order_Status"
            },
            {
                "data": "branch_Code"
            },
            {
                "data": "no_customerOrder"
            },
            {
                "data": "projectManager"
            },
            {
                "data": "proto_Type"
            },
            {
                "data": "type_of_the_Prototype_Order"
            },
            {
                "data": "date_of_the_Order"
            },
            {
                "data": "requester"
            },
            {
                "data": ""
            }],
            responsive:
            {
                details:
                {
                    type	: 'column',
                    target	: -1
                }
            },
            columnDefs		: [
            {
                className	: 	'control',
                orderable	: 	false,
                targets		: 	-1
            }]
        });
    }
});