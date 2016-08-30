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
        "click #saveorderbtn": "saveOrder"
    },
    validateOrder: function() {
        if (validate.getInstance().formordiv('orderdetailview')) {
            console.log("trfdsf");
            saveOrder();
        } else {
            $('#orderdetailview').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) {

                }
            })
        }
    },
    saveOrder: function() {
    	$('#statusmsg').html("Saving your order..")
    	$('#statusLoader').removeClass('hide');
    	
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
        var projmanager = 	$('#projmanager').val();
        
        var orderDetailsObj = new BackboneData.Models.OrderDetailModel({ 
        	site_Workshop_Prototype:Site_Workshop_Prototype,
            geoSite:Geosite,
            no_prototype_order:"",
            proto_Type:Proto_Type,
            pcc:pcccheckbox,
            open_Order:openordercheckbox,
            frittage:frittagecheckbox,
            e52:e52checkbox,
            intraLE:intralecheckbox,
            type_of_the_Prototype_Order:Type_of_the_Prototype_Order,
            date_of_the_Order:Date_of_the_Order,
            order_Status:"Draft",
            total_Order_Amount:0,
        });
        orderDetailsObj.save({}, {
        	
            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
            	$('#statusmsg').html("Order saved successully.");
//            	$('#statusLoader').addClass('hide');
                console.log("Something went wrong while saving the model :: "+model);
                console.log("Something went wrong while saving the xhr :: "+xhr);
                console.log("Something went wrong while saving the options :: "+options);
                console.log(model);
                console.log(xhr);
                console.log(options);
            }
        });
        
        var orderID = "";
        if (typeof(Storage) !== "undefined") 
        {
            if (localStorage.getItem("lastID") != null && localStorage.getItem("lastID") != "") {
                localStorage.setItem("lastID", 0002000);
            } else {
                localStorage.setItem("lastID", 0002000);

            }
        }
        
        if (Site_Workshop_Prototype == "La Suze (LAS)") {
            orderID = "LAS";
        } else if (Site_Workshop_Prototype == "La Verriere (LVR)") {
            orderID = "LVR";
        } else if (Site_Workshop_Prototype == "Laval (LVL)") {
            orderID = "LVL";
        } else if (Site_Workshop_Prototype == "Nogent (NOG)") {
            orderID = "NOG";
        } else if (Site_Workshop_Prototype == "Reims (RMS)") {
            orderID = "RMS";
        }
        if (Type_of_the_Prototype_Order == "VENDU / SOLD") {
            Type_of_the_Prototype_Order = "V";
        } else if (Type_of_the_Prototype_Order == "NON VENDU / NOT SOLD") {
            Type_of_the_Prototype_Order = "N";
        }
        orderID = orderID + localStorage.getItem("lastID") + "-" + Proto_Type + Type_of_the_Prototype_Order;
        $('#No_Prototype_Order').val(orderID);
    }
});
