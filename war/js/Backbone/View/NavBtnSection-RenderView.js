BackboneData.Views.NavBtnSectionview = Backbone.View.extend({
    el: '#navbar-2',
    render: function() {
        var ref = this;
        var NavBtnSectionHTML = "";
        if (window.language == "EN") {
            NavBtnSectionHTML = navigation.manager.NavBtnViewDetail({ 'paramValue': window.navBtnSection_englishLabelList });
        } else {
            NavBtnSectionHTML = navigation.manager.NavBtnViewDetail({ 'paramValue': window.navBtnSection_frenchLabelList });
        }
        ref.$el.html(NavBtnSectionHTML);
        $('#navfixed-wrapper').removeClass('hide');
    },
    initialize: function(name) {
        var _thisView = this;
        _thisView.render();
    },
    events: {
        "click #saveorderbtn": "validateOrder"
    },
    validateOrder: function() {
    	var setFlag = false;
        if (validate.getInstance().formordiv('orderdetailview')) {
            console.log("trfdsf");
            this.saveOrder();
        } 
        else 
        {
            $('#orderdetailview').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) 
                {
                	if(!$(this).parent().parent().hasClass('hide'))
                	{
                		setFlag = true;
                		$(this).selectpicker('setStyle', 'error', 'add');
                	}	
                }
            });
            $('#orderdetailview').find('.form-control').each(function() {
                if ($(this).hasClass('error')) 
                {
                	if(!$(this).parent().hasClass('hide'))
                	{
                		setFlag = true;
                	}
                	else
                	{
                		$(this).removeClass('error');
                	}	
                }
            });
        }
        if(!setFlag)
        {
        	this.saveOrder();
        }	
    },
    saveOrder: function() {
    	 $('#statusmsg').html("Saving your order..");
         $('#statusLoader').removeClass('hide');
         $('#statusLoader .voicebox-content').addClass('in');
        var Site_Workshop_Prototype = $('#Site_Workshop_Prototype').val();
        var Geosite = $('#Geosite').val();
        var No_Prototype_Order = $('#No_Prototype_Order').val();
        var Proto_Type = $('#Proto_Type').val();
        var pcccheckbox = $('#pcccheckbox').is(":checked");
        var openordercheckbox = $('#openordercheckbox').is(":checked");
        var frittagecheckbox = $('#frittagecheckbox').is(":checked");
        var e52checkbox = $('#e52checkbox').is(":checked");
        var intralecheckbox = $('#intralecheckbox').is(":checked");
        var Type_of_the_Prototype_Order = $('#Type_of_the_Prototype_Order').val();
        var Date_of_the_Order = $('#Date_of_the_Order').val();
        var no_customer_order = $('#no_customer_order').val();
        var customer_order_list = $('#customer_order_list').val();
        var Customer_Name = $('#Customer_Name').val();
        var Customer_Code = $('#Customer_Code').val();
        var Branch_Code = $('#Branch_Code').val();
        var Provider_Code = $('#Provider_Code').val();
        var Final_Delivery_Address = $('#Final_Delivery_Address').val();
        var Additional_Address = $('#Additional_Address').val();
        var Site_Address = $('#Site_Address').val();
        var Plateform = $('#Plateform').val();
        var Incoterms = $('#Incoterms').val();
        var Place = $('#Place').val();
        var Customer_Receiver_Name = $('#Customer_Receiver_Name').val();
        var Customer_Receiver_Telephone = $('#Customer_Receiver_Telephone').val();
        var Allocation_of_turnover = $('#Allocation_of_turnover').val();
        var Total_Order_Amount = $('#Total_Order_Amount').val();
        var Order_Status = $('#Order_Status').val();
        var requester = $('#requester').val();
        var mepstudy = $('#mepstudy').val();
        var quality = $('#quality').val();
        var protoworkshop = $('#protoworkshop').val();
        var controlmanagement = $('#controlmanagement').val();
        var fotrade = $('#fotrade').val();
        var adv = $('#adv').val();
        var projmanager = $('#projmanager').val();

        var orderDetailsObj = new BackboneData.Models.OrderDetailModel({
            site_Workshop_Prototype: Site_Workshop_Prototype,
            geoSite: Geosite,
            no_prototype_order: "",
            proto_Type: Proto_Type,
            pcc: pcccheckbox,
            open_Order: openordercheckbox,
            frittage: frittagecheckbox,
            e52: e52checkbox,
            intraLE: intralecheckbox,
            type_of_the_Prototype_Order: Type_of_the_Prototype_Order,
            date_of_the_Order: "",
            order_Status: "Draft",
            total_Order_Amount: 0,
        });
        orderDetailsObj.save({}, {

            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
            	 $('#statusmsg').html("Order saved successfully..");
                 $('#statusLoader').removeClass('hide');
                 $('#statusLoader .voicebox-content').addClass('in');
                console.log("Something went wrong while saving the model :: " + model);
                console.log("Something went wrong while saving the xhr :: " + xhr);
                console.log("Something went wrong while saving the options :: " + options);
                console.log(model);
                console.log(xhr);
                console.log(options);
            }
        });
    }
});
