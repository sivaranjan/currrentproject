var Router = Backbone.Router.extend(
{
    routes:
    {
        '/*'				: 	'home',
        'home'				: 	'home',
        'createorder'		: 	'order',
        'adminsetting'		: 	'admin',
        'componentdetails'	: 'component',
        'orderlisting'		: 	'orderlist',
        'orderdetails'		: 	'orderdetails',
        'componentlisting'	: 	'componentlist',
    }
});
var routerTHS = new Router();
routerTHS.on('route:home', function(action)
{
//    $('#pleasewait').modal('show');
    pullUserInfo().done(function()
    {
    	alert("1");
        renderBackboneView("home").done(function()
        {
        	alert("2");
            SetView("home").done(function()
            {
            	alert("3");
//                $('#pleasewait').modal('hide');
            });
        });
    });
});
routerTHS.on('route:order', function(action)
{
	$('#pleasewait').modal('show');
    pullUserInfo().done(function()
    {
        pullOrderDependencies().done(function()
        {
        	renderBackboneView("createorder").done(function()
        	{
        		SetView("createorder").done(function()
        		{
                	SetDetails().done(function()
                	{
                		$('#pleasewait').modal('hide');                		
                	})
                });
        	});
        });
    });
});
routerTHS.on('route:admin', function(action)
{
	$('#pleasewait').modal('show');
    pullUserInfo().done(function()
    {
    	renderBackboneView("adminsetting").done(function()
        {
    		SetView("adminsetting").done(function()
    	    {
    			$('#pleasewait').modal('hide');
    			// This does the hide and show of divs	
    	    });
        });
    });
});
routerTHS.on('route:component', function(action)
{
	$('#pleasewait').modal('show');
    pullUserInfo().done(function()
    {
    	renderBackboneView("componentdetails").done(function()
    	{
    		SetView("componentdetails").done(function()
    	    {
    			$('#pleasewait').modal('hide');
    	    	// This does the hide and show of divs    			
    	    });
    	});
    });
});
routerTHS.on('route:orderlist', function(action)
{
	$('#pleasewait').modal('show');
    pullUserInfo().done(function()
    {
    	renderBackboneView("orderlisting").done(function()
    	{
    		SetView("orderlisting").done(function()
    	    {
    			$('#pleasewait').modal('hide');
    			// This does the hide and show of divs    			
    	    });	
    	});
    });
});
routerTHS.on('route:componentlist', function(action)
{
	$('#pleasewait').modal('show');
	pullUserInfo().done(function()
	{
		renderBackboneView("componentlisting").done(function()
		{
		    SetView("componentlisting").done(function()
		    {
		    	$('#pleasewait').modal('hide');		// This does the hide and show of divs    			
		    });	
		});
	});
});
routerTHS.on('route:orderdetails', function(action)
{
	$('#pleasewait').modal('show');
	var currentPrototypeID = "";
	if(document.URL.indexOf('?orderid=')!=-1)
	{
		currentPrototypeID = document.URL.split('?orderid=')[1];
		pullUserInfo().done(function()
		{
			 pullOrderDependencies.done(function()
		     {
				 renderBackboneView("createorder").done(function()
				 {
				   	 SetView("orderdetails").done(function()
					 {
				   		  SetDetails().done(function()
				   		  {
				   			   fetchProtypeOrderObject(currentPrototypeID).done(function()
							   {
				   				   $('#pleasewait').modal('hide');
							   });
				   		  });
					  });	
				  });
		     });
		});
	}	
	else
	{
		bootbox.alert("No Prototype Order ID Found", function() 
		{
			  window.location.href="/#orderlisting";
		});
	}	
});
if (Backbone.history != undefined && Backbone.history != null && Backbone.history != '')
{
    console.log('backnonhistory has  started!!!');
    Backbone.history.start();
}
else
{
    console.log('backnonhistory has already started!!!');
}