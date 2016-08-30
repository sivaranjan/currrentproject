BackboneData.Views.OrderDetailView = Backbone.View.extend({
    el: '#orderdetailview',
    render: function() {
        var ref = this;
        var orderDetailHTML = "";
        if (window.language == "EN") {
            orderDetailHTML = order.manager.OrderDetailView({ 'paramValue': window.orderDetails_englishLabelList });
        } else {
            orderDetailHTML = order.manager.OrderDetailView({ 'paramValue': window.orderDetails_frenchLabelList});
        }
        $('#createorder-section').removeClass('hide');
        $('#welcome-section,#admin-section,#component-section,#orderlist-section').addClass('hide');
        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
        $('#createorder-tab').addClass('active');
        ref.$el.html(orderDetailHTML);
        console.log(this.model.toJSON());
        console.log("hgh");
        $('#example').DataTable({
            dom: 'Bfrtip',
            responsive: {
                details: {
                    type: 'column',
                    target: -1
                }
            },
            columnDefs: [{
                className: 'control',
                orderable: false,
                targets: -1
            }],
            buttons: [{
                text: '<i class="fa fa-refresh" aria-hidden="true"></i> Refresh',
                className: 'btn btn-default btn-sm refreshbtn',
                action: function() {

                }
            }, {
                text: '<i class="fa fa-plus" aria-hidden="true"></i> New component',
                className: 'btn btn-default btn-sm newcompbtn',
                action: function() {
                    window.location.href = "/#componentdetails";
                }
            }]
        });

        $('.refreshbtn,.newcompbtn').removeClass('dt-button');
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
        $('.bs-searchbox input').addClass('input-sm');
    },
    initialize: function(){
    	var _thisView = this;
    	$.when(this.model.fetch())
        .done(function () {
          _thisView.render();
        });
    },
    events: {
        "change #Type_of_the_Prototype_Order": "populateDependencies",
        "change #Site_Workshop_Prototype": "populateDependencies",
        "change #Proto_Type": "populateDependencies",
        "change #intralecheckbox": "populateDependencies",
    },
    updateFilter : function(){
    	debugger;
    	alert($(this));
    },
    populateDependencies: function() {
        var Type_of_the_Prototype_Order = $.trim($('#Type_of_the_Prototype_Order').val());
        var Site_Workshop_Prototype = $.trim($('#Site_Workshop_Prototype').val());
        var Proto_Type = $.trim($('#Proto_Type').val());
        if (Type_of_the_Prototype_Order == 'VENDU / SOLD') {
            if (Site_Workshop_Prototype == 'La Verriere (LVR)' && Proto_Type == 'P0') {
                $('#frittagelabel,#frittagecheckbox').removeClass('hide');
            } else {
                $('#frittagelabel,#frittagecheckbox').addClass('hide');
            }

            if ($('#intralecheckbox').is(":not(:checked)")) {
                $('#advdiv').removeClass('hide');
                $('#adv').attr('data-required','yes');
                $('#adv').attr('data-type','text');
            } else {
                $('#advdiv').addClass('hide');
                $('#adv').removeAttr('data-required');
                $('#adv').removeAttr('data-type');
            }

            if (Site_Workshop_Prototype == 'La Suze (LAS)') {
                $('#intralelabel,#intralecheckbox').removeClass('hide');
            } else {
                $('#intralelabel,#intralecheckbox').addClass('hide');
            }
            if (Proto_Type == 'P2') {
                $('#pcclabel,#pcccheckbox').removeClass('hide');
            } else {
                $('#pcclabel,#pcccheckbox').addClass('hide');
            }
            if (Site_Workshop_Prototype == 'Nogent (NOG)') {
                $('#e52label,#e52checkbox').removeClass('hide');
            } else {
                $('#e52label,#e52checkbox').addClass('hide');
            }
            $('#fotrade').attr('data-required','yes');
            $('#fotrade').attr('data-type','text');
            $('#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#fodiv').removeClass('hide');
        } else {
            if (Proto_Type == 'P2') {
                $('#pcclabel,#pcccheckbox').removeClass('hide');
            } else {
                $('#pcclabel,#pcccheckbox').addClass('hide');
            }
            if (Site_Workshop_Prototype == 'Nogent (NOG)') {
                $('#e52label,#e52checkbox').removeClass('hide');
            } else {
                $('#e52label,#e52checkbox').addClass('hide');
            }
            $('#fotrade').removeAttr('data-required');
            $('#fotrade').removeAttr('data-type');
            $('#openorderlabel,#openordercheckbox,#customer_order_no,#customer_order_file,#incotermsdiv,#placediv,#allocationdiv,#frittagelabel,#frittagecheckbox,#advdiv,#intralelabel,#intralecheckbox,#fodiv').addClass('hide');
        }
    }
});
