BackboneData.Models.OrderDetailModel = Backbone.Model.extend({
    defaults: {
        site_Workshop_Prototype: "",
        geoSite: "",
        no_prototype_order: "",
        proto_Type: "",
        pcc: "",
        open_Order: "",
        frittage: "",
        e52: "",
        intraLE: "",
        type_of_the_Prototype_Order: "",
        date_of_the_Order: "",
        no_customerOrder: "",
        customerOrderAttachment: "",
        customer_Name: "",
        customer_Code: "",
        branch_Code: "",
        provider_Code: "",
        final_Delivery_Address: "",
        additional_Address: "",
        site_Address:"",
        plateform: "",
        incoterms: "",
        place: "",
        customer_Receiver_Name: "",
        customer_Receiver_Telephone: "",
        allocation_of_turnover: "",
        requester:"",
        mep_Study: "",
        quality: "",
        proto_Workshop: "",
        control_Management: "",
        fo_Trade: "",
        adv: "",
        project_Manager: "",
        order_Status: "",
        total_Order_Amount: "",
        list_Component_Keys: ["gfg", "kghh", "jhgj"],
    },
    initialize: function() {
        console.log('Book has been initialized');
        this.on("invalid", function(model, error) {
            console.log("Houston, we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('Book\'s constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {},
    urlRoot: 'http://localhost:8888/order/create'
});
