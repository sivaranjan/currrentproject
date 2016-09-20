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
            }],
            initComplete: function () 
	        { 
	            this.api().columns().every( function () 
	            {
	                var column = this;
	                var select = $('<select class="selectpicker show-tick" title="Search" data-size="9" size="7" data-live-search="true" data-width="100%"><option value="" class="btn btn-default btn-sm text-center">No Filter</option></select>').appendTo( $(column.footer()).empty()).on( 'change', function () 
	                			 {
	                        			var val = $.fn.dataTable.util.escapeRegex($(this).val());
	                        			column.search( val ? '^'+val+'$' : '', true, false ).draw();
	                			 });
				                	column.data().unique().sort().each( function ( d, j ) 
				                	{
				                		select.append( '<option value="'+d+'">'+d+'</option>' )
				                	});
				                	$('.selectpicker').selectpicker().selectpicker('setStyle', 'btn-sm', 'add');
				                    $('.bs-searchbox input').addClass('input-sm');
	             });
	          },
        });
        
       // buildSearchForTable('orderlisttable_footer th','orderlist-table');
    }
});