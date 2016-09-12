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
	$('#pleasewait').html('<center><img src="/images/loader.gif" style="height: 80px;margin: 24%;"></img></center>');
    $('#pleasewait').modal('show');
    pullUserInfo(function()
    {
    	renderBackboneView("home",function()
        {
    		SetView("home",function()
            {
    			$('#pleasewait').modal('hide');
            });
        });
    });
});
routerTHS.on('route:order', function(action)
{
	$('#pleasewait').modal('show');
    pullUserInfo(function()
    {
        pullOrderDependencies(function()
        {
        	renderBackboneView("createorder",function()
        	{
        		SetView("createorder",function()
        		{
                	SetDetails();
                	$('#pleasewait').modal('hide');
                });
        	});
        });
    });
});
routerTHS.on('route:admin', function(action)
{
	$('#pleasewait').modal('show');
    pullUserInfo(function()
    {
    	renderBackboneView("adminsetting",function()
        {
    		SetView("adminsetting",function()
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
    pullUserInfo(function()
    {
    	renderBackboneView("componentdetails",function()
    	{
    		SetView("componentdetails",function()
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
    pullUserInfo(function()
    {
    	renderBackboneView("orderlisting",function()
    	{
    		SetView("orderlisting",function()
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
	pullUserInfo(function()
	{
		renderBackboneView("componentlisting",function()
		{
		    SetView("componentlisting",function()
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
				   				buildCompListTable();
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