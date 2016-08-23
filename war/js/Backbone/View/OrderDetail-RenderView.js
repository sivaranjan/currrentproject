BackboneData.Views.OrderDetailView = Backbone.View.extend({
    el: '#orderdetailview',
    render: function() {
        var ref = this;
        var orderDetailHTML = "";
        if (window.language == "EN") {
            orderDetailHTML = order.manager.OrderDetailView({ 'paramValue': window.orderDetails_englishLabelList });
        } else {
            orderDetailHTML = order.manager.OrderDetailView({ 'paramValue': window.orderDetails_frenchLabelList });
        }
        $('#createorder-section').removeClass('hide');
        $('#welcome-section,#admin-section,#component-section').addClass('hide');
        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
        $('#createorder-tab').addClass('active');
        ref.$el.html(orderDetailHTML);
        loadComponentTable();
    },
    events: {
        'click #ordernextbtn': 'validateorderdetail',
        "change #country-selector": "countrySelected"
    },

    validateorderdetail: function() {
        alert("you clicked it dude");
    }
});
