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
        cadTeamMember_MEPStudy: "",
        qualityTeamMember: "",
        protoWorkshop: "",
        managementController: "",
        kamCommerce: "",
        salesAdministrator_ADV: "",
        projectManager: "",
        order_Status: "",
        total_Order_Amount: "",
        list_Component_Keys: ["gfg", "kghh", "jhgj"],
    },
    initialize: function() {
        console.log('OrderDetailModel has been initialized');
        this.on("invalid", function(model, error) {
            console.log("OrderDetailModel we have a problem: " + error)
        });
    },
    constructor: function(attributes, options) {
        console.log('OrderDetailModel constructor had been called');
        Backbone.Model.apply(this, arguments);
    },
    validate: function(attr) {},
    urlRoot: ApplicationConstants.saveOrderUrl
});
