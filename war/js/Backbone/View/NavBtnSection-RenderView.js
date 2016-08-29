
BackboneData.Views.NavBtnSectionview = Backbone.View.extend({
	el:'#navbar-2',
	render:function()
	{
		var ref = this;
		var NavBtnSectionHTML	= "";
		if(window.language =="EN")
		{
			NavBtnSectionHTML = navigation.manager.NavBtnViewDetail({'paramValue':window.navBtnSection_englishLabelList});
		}	
		else
		{
			NavBtnSectionHTML =  navigation.manager.NavBtnViewDetail({'paramValue':window.navBtnSection_frenchLabelList});
		}	
		ref.$el.html(NavBtnSectionHTML);
		$('#navfixed-wrapper').removeClass('hide');
	},
	initialize: function(name) {
		var _thisView = this;
    	_thisView.render();
    },
	 events: {
	        "click #saveorderbtn": "saveOrder"
	    },
	    saveOrder: function() {
	    	var Site_Workshop_Prototype = $('#Site_Workshop_Prototype').val();
	    	var Proto_Type = $('#Proto_Type').val();
	    	var orderID = "";
	    	if (typeof(Storage) !== "undefined") 
	    	{
	    		if(localStorage.getItem("lastID")!=null && localStorage.getItem("lastID")!="")
	    		{
	    			localStorage.setItem("lastID", 0002000);
	    		}	
	    		else
	    		{
	    			 localStorage.setItem("lastID", 0002000);
	    			 
	    		}	
	    	   
	    	}
	    	var Type_of_the_Prototype_Order = $('#Type_of_the_Prototype_Order').val();
	    	if(Site_Workshop_Prototype == "La Suze (LAS)")
	    	{
	    		orderID = "LAS";
	    	}	
	    	else if(Site_Workshop_Prototype == "La Verriere (LVR)")
	    	{
	    		orderID = "LVR";
	    	}
	    	else if(Site_Workshop_Prototype == "Laval (LVL)")
	    	{
	    		orderID = "LVL";
	    	}
	    	else if(Site_Workshop_Prototype == "Nogent (NOG)")
	    	{
	    		orderID = "NOG";
	    	}
	    	else if(Site_Workshop_Prototype == "Reims (RMS)")
	    	{
	    		orderID = "RMS";
	    	}
	    	if(Type_of_the_Prototype_Order=="VENDU / SOLD")
	    	{
	    		Type_of_the_Prototype_Order = "V";
	    	}
	    	else if(Type_of_the_Prototype_Order=="NON VENDU / NOT SOLD")
	    	{
	    		Type_of_the_Prototype_Order = "N";
	    	}
	    	orderID = orderID+localStorage.getItem("lastID")+"-"+Proto_Type+Type_of_the_Prototype_Order;
	    	$('#No_Prototype_Order').val(orderID);
	    }
});