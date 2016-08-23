BackboneData.Views.CustomerDetailView = Backbone.View.extend({
    el: '#customerdetailview',
    render: function() {
        customerDetails_frenchLabelList = {
            'Customer Details': 'D\xE9tails du client',
            'N0 customer order': 'de la commande client',
            'Customer order': 'Commande client',
            'Customer name': 'Nom du client',
            'Customer code': 'Code client',
            'Branch code': 'Code branche',
            'Provider code': 'Code fournisseur',
            'Final delivery Address': 'Address de livraiso finale',
            'Additional address': 'Compl\xE9ment d\'adresse',
            'Site address': 'Adresse du site',
            'Plateform': 'Plateforme',
            'Incoterms': 'Incoterms',
            'Place': 'Lieu',
            'Customer receiver name': 'Nom du receptionnaire client',
            'Customer receiver telephone': 'T\xE9l\xE9phone du receptionnaire client',
            'Allocation of turnover': 'Affectation du Chiffre d\'Affaire',
            'Total order amount': 'Montant total de la commande',
            'Order Status': 'Status de la commande',
            'Back': 'Arri\xE9re',
            'Next': 'Prochain'
        };
        customerDetails_englishLabelList = {
            'Customer Details': 'Customer Details',
            'N0 customer order': 'Customer Order',
            'Customer order': 'Customer Order',
            'Customer name': 'Customer Name ',
            'Customer code': 'Customer Code',
            'Branch code': 'Branch Code',
            'Provider code': 'Provider Code',
            'Final delivery Address': 'Final Delivery Address',
            'Additional address': 'Additional Address',
            'Site address': 'Site Address',
            'Plateform': 'Plateform',
            'Incoterms': 'Incoterms',
            'Place': 'Place',
            'Customer receiver name': 'Customer Receiver Name',
            'Customer receiver telephone': 'Customer Receiver Telephone',
            'Allocation of turnover': 'Allocation of Turnover',
            'Total order amount': 'Total Order Amount',
            'Order Status': 'Order Status',
            'Back': 'Back',
            'Next': 'Next'
        };

        var ref = this;
        var customerDetailHTML = "";
        if (window.language == "EN") {
            customerDetailHTML = customer.manager.CustomerDetailView({ 'paramValue': window.customerDetails_englishLabelList });
        } else {
            customerDetailHTML = customer.manager.CustomerDetailView({ 'paramValue': window.customerDetails_frenchLabelList });
        }
        ref.$el.html(customerDetailHTML);
    },
    events: {
        'click #customernextbtn': 'validatecustomerdetail',
        'click #backcustomerbtn': 'backtoorderdetail',
    },
    validatecustomerdetail: function() {
    	$('#collapseThree').collapse('show');
    	$("html, body").animate({ scrollTop: 1295 }, "slow");
    },
    backtoorderdetail: function() {
    	$("html, body").animate({ scrollTop: 205 }, "slow");
    }

});
