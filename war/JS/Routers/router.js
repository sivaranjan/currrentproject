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
	loader.show();
    pullUserInfo(function()
    {
    	renderBackboneView("home",function()
        {
    		SetView("home",function()
            {
    			loader.hide();
            });
        });
    });
});
routerTHS.on('route:order', function(action)
{
	loader.show();
    pullUserInfo(function()
    {
        pullOrderDependencies(function()
        {
        	renderBackboneView("createorder",function()
        	{
        		SetView("createorder",function()
        		{
                	SetDetails();
                	loader.hide();
                });
        	});
        });
    });
});
routerTHS.on('route:admin', function(action)
{
	loader.show();
    pullUserInfo(function()
    {
    	renderBackboneView("adminsetting",function()
        {
    		SetView("adminsetting",function()
    	    {
    			loader.hide();
    			// This does the hide and show of divs	
    	    });
        });
    });
});
routerTHS.on('route:component', function(action)
{
	loader.show();
	var currentPrototypeID = document.URL.split('?orderid=')[1];
    pullUserInfo(function()
    {
    	renderBackboneView("componentdetails",function()
    	{
    		SetView("componentdetails",function()
    	    {
    			fetchProtypeOrderObject(currentPrototypeID,function()
				{
    				pullComponentDependencies(function()
					{
					       setComponentDropdowns(function()
					       {
					        		fetchComponentIDList();
					        		buildCompListTable(currentPrototypeID);
					        		setAdjustablePropertiesforCompPage(function()
					        		{
					        			loader.hide();
					        		})
					       });
					});
			   		
				});
    	    });
    	});
    });
});
routerTHS.on('route:orderlist', function(action)
{
	loader.show();
	showVoiceBox.configure("Fetching Orders List",'');
    pullUserInfo(function()
    {
    	renderBackboneView("orderlisting",function()
    	{
    		SetView("orderlisting",function()
    	    {
    			loader.hide();
    			showVoiceBox.configure("Orders List Fetched Successfully",10);
    			// This does the hide and show of divs    			
    	    });	
    	});
    });
});
routerTHS.on('route:componentlist', function(action)
{
	loader.show();
	pullUserInfo(function()
	{
		renderBackboneView("componentlisting",function()
		{
		    SetView("componentlisting",function()
		    {
		    	loader.hide();		// This does the hide and show of divs    			
		    });	
		});
	});
});
routerTHS.on('route:orderdetails', function(action)
{
	loader.show();
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
				   			   showVoiceBox.configure("Fetching Order Details",'');
				   			   fetchProtypeOrderObject(currentPrototypeID,function()
							   {
				   				 showVoiceBox.configure("Order Loaded Successfully",1000);
				   				 buildCompListTable(currentPrototypeID,function()
				   				 {
				   					loader.hide();
				   				 });
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