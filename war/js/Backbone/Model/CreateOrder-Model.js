BackboneData.Models.CreateOrderModel = Backbone.Model.extend({
    defaults: {
        ID: "",
        No_Prototype_Order: "",
        Site_Workshop_Prototype: "",
        Geosite: "",
        Proto_Type: "",
        Type_of_the_Prototype_Order: "",
        Date_of_the_Order: "",
        PCC: "",
        Open_Order: "",
        Frittage: "",
        E52: "",
        IntraLE: "",
        No_Customer_Order: "",
        Customer_Order: "",
        Customer_Name: "",
        Customer_Code: "",
        Branch_Code: "",
        Provider_Code: "",
        Final_Delivery_Address: "",
        Additional_Address: "",
        Site_Address: "",
        Plateform: "",
        Incoterms: "",
        Place: "",
        Customer_Receiver_Name: "",
        Customer_Receiver_Telephone: "",
        Allocation_of_turnover: "",
        Total_Order_Amount: "",
        Order_Status: "",
        Requester: "",
        MEP_Study: "",
        Quality: "",
        Proto_Workshop: "",
        Control_Management: "",
        FO_Trade: "",
        ADV: "",
        Project_Manager: "",
    },
    initialize: function(name) {
        var self = this;
        alert("comes gh ::" + self.get("name"));;
    },
    validateOrder: function() {
        alert("visit");
    }
});
