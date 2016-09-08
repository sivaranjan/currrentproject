var Router = Backbone.Router.extend(
{
    routes:
    {
        '/*'			: 	'home',
        'home'			: 	'home',
        'createorder'	: 	'order',
        'adminsetting'	: 	'admin',
        'componentdetails': 'component',
        'orderlisting'	: 	'orderlist',
        'orderdetails'	: 	'orderdetails',
        'componentlisting'	: 	'componentlist',
    }
});
var routerTHS = new Router();
routerTHS.on('route:home', function(action)
{
    pullUserInfo(function()
    {
    	renderBackboneView("home",function()
        {
    		SetView("home",function()
            {
    			
            });
        });
    });
});
routerTHS.on('route:order', function(action)
{
    pullUserInfo(function()
    {
        pullOrderDependencies(function()
        {
        	renderBackboneView("createorder",function()
        	{
        		SetView("createorder",function()
        		{
                	SetDetails();
                });
        	});
        });
    });
});
routerTHS.on('route:admin', function(action)
{
    pullUserInfo(function()
    {
    	renderBackboneView("adminsetting",function()
        {
    		SetView("adminsetting",function()
    	    {
    			// This does the hide and show of divs	
    	    });
        });
    });
});
routerTHS.on('route:component', function(action)
{
    pullUserInfo(function()
    {
    	renderBackboneView("componentdetails",function()
    	{
    		SetView("componentdetails",function()
    	    {
    	    	// This does the hide and show of divs    			
    	    });
    	});
    });
});
routerTHS.on('route:orderlist', function(action)
{
    pullUserInfo(function()
    {
    	renderBackboneView("orderlisting",function()
    	{
    		SetView("orderlisting",function()
    	    {
    			// This does the hide and show of divs    			
    	    });	
    	});
    });
});
routerTHS.on('route:componentlist', function(action)
{
	pullUserInfo(function()
	{
		renderBackboneView("componentlisting",function()
		{
		    SetView("componentlisting",function()
		    {
		    			// This does the hide and show of divs    			
		    });	
		});
	});
});
routerTHS.on('route:orderdetails', function(action)
{
	var currentPrototypeID = "";
	if(document.URL.indexOf('?orderid=')!=-1)
	{
		currentPrototypeID = document.URL.split('?orderid=')[1];
		pullUserInfo(function()
		{
			 pullOrderDependencies(function()
		     {
				 renderBackboneView("createorder",function()
				 {
				   	 SetView("orderdetails",function()
					 {
				   		  SetDetails(function()
				   		  {
				   			   fetchProtypeOrderObject(currentPrototypeID,function()
							   {
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