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
            "deferRender": true,
            columns		: 	[
            {
                "data": "site_Workshop_Prototype"
            },
            {
                "data": "no_prototype_order",
                "render" : function(data, type, row, meta)
                {
                    if(type === 'display')
                    {
                        return $('<a>')
                            .attr('href','/#orderdetails?orderid='+data)
                            .text(data)
                            .wrap('<div></div>')
                            .parent()
                            .html();
                    } 
                    else 
                    {
                        return data;
                    }
                }
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
                "data": "date_of_the_Order",
                "render" : function(data, type, row, meta)
                 {
                     if(type === 'display')
                     {
                    	 return $('<a style="color: black;text-decoration: initial;">')
                         .text(new Date(data).toUTCString())
                         .wrap('<div></div>')
                         .parent()
                         .html();
                     } 
                     else 
                     {
                         return data;
                     }
                }
            },
            {
                "data": "requester"
            }]
        });
        buildSearchForTable('orderlisttable_footer th','orderlist-table');
    }
});