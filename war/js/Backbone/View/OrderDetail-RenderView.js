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
        $('#welcome-section,#admin-section,#component-section,#orderlist-section').addClass('hide');
        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
        $('#createorder-tab').addClass('active');
        ref.$el.html(orderDetailHTML);
        console.log("hgh");
        $('#Order_Status').val("Draft");
        $('#requester').val(useremailid);
        var fetchPlatformsListObj = new BackboneData.Collections.fetchPlatformsList();
        $.when(fetchPlatformsListObj.fetch())
            .done(function(response, xhr) {
                var google = response.data;
                console.log(google);
                console.log("hello");
                var htmllist = "";
                google.forEach(function(arrayItem) {
                    htmllist += '<option>' + arrayItem.plateform + '</option>';
                });
                $('#Plateform').html(htmllist).selectpicker('refresh');
            })
            .fail(function() {});
        var fetchSitesListObj = new BackboneData.Collections.fetchSitesList();
        $.when(fetchSitesListObj.fetch())
            .done(function(response, xhr) {
                var google = response.data;
                console.log(google);
                console.log("hello");
                var htmllist = "";
                google.forEach(function(arrayItem) {
                    htmllist += '<option>' + arrayItem.site_Name + '</option>';
                });
                $('#Site_Workshop_Prototype').html(htmllist).selectpicker('refresh');
            })
            .fail(function() {});
        var fetchCustomersListObj = new BackboneData.Collections.fetchCustomersList();
        $.when(fetchCustomersListObj.fetch())
            .done(function(response, xhr) {
                var google = response.data;
                console.log(google);
                console.log("hello");
                var htmllist = "";
                google.forEach(function(arrayItem) {
                    htmllist += '<option>' + arrayItem.customer_Name + '</option>';
                });
                $('#Customer_Name').html(htmllist).selectpicker('refresh');
            })
            .fail(function() {});
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
                    if (window.orderStatus != "saved") {
                        $('#statusmsg').html("Please save the order before creating component");
                        $('#statusLoader').removeClass('hide');
                        $('#statusLoader .voicebox-content').addClass('in');
                    } else {
                        window.location.href = "/#componentdetails";
                    }
                    setTimeout(function() { $('#statusLoader .voicebox-content').removeClass('in'); }, 3000);
                    //window.location.href = "/#componentdetails";
                }
            }]
        });

        $('.refreshbtn,.newcompbtn').removeClass('dt-button');
        $('.selectpicker').selectpicker();
        $('.selectpicker').selectpicker('setStyle', 'btn-sm', 'add');
        $('.bs-searchbox input').addClass('input-sm');
        $('#Date_of_the_Order').val(new Date());
        $('.selectpicker').on('changed.bs.select', function(e) {
            $(this).selectpicker('setStyle', 'error', 'remove');
        });
    },
    initialize: function() {
        _.bindAll(this, 'cleanup');
        var _thisView = this;
        _thisView.render();
    },
    cleanup: function() {
        this.undelegateEvents();
        $(this.el).empty();
    },
    events: {
        "change #Type_of_the_Prototype_Order": "populateDependencies",
        "change #Site_Workshop_Prototype": "populateDependencies",
        "change #Proto_Type": "populateDependencies",
        "change #intralecheckbox": "populateDependencies",
        "change #Customer_Name": "fetchCustomerDetails",
    },
    fetchCustomerDetails: function() {
        var customerNameSelected = $('#Customer_Name').val();
        localStorage.setItem("customerNameSelected", customerNameSelected);
        var fetchCustomerDetailsbyNameObj = new BackboneData.Collections.fetchCustomerDetailsbyName();
        $.when(fetchCustomerDetailsbyNameObj.fetch())
            .done(function(response, xhr) {
                var google = response.data;
                console.log(google);
                console.log("hello");
                var htmllist = "";
                google.forEach(function(arrayItem) {
                    $('#Customer_Code').val(arrayItem.customer_Code);
                    $('#Branch_Code').val(arrayItem.branch_Code);
                    $('#Provider_Code').val(arrayItem.provider_Code);
                    $('#Final_Delivery_Address').val(arrayItem.customer_Address);
                });
            })
            .fail(function() {});
    },
    populateDependencies: function() {
        var Type_of_the_Prototype_Order = $.trim($('#Type_of_the_Prototype_Order').val());
        var Site_Workshop_Prototype = $.trim($('#Site_Workshop_Prototype').val());
        var Proto_Type = $.trim($('#Proto_Type').val());
        console.log("1 :: " + Type_of_the_Prototype_Order);
        console.log("2 :: " + Site_Workshop_Prototype);
        console.log("3 :: " + Proto_Type);
        var fetchPlacesListObj = new BackboneData.Collections.fetchPlacesList();
        $.when(fetchPlacesListObj.fetch())
            .done(function(response, xhr) {
                var google = response.data;
                console.log(google);
                console.log("hello");
                var htmllist = "";
                google.forEach(function(arrayItem) {
                    htmllist += '<option>' + arrayItem.places + '</option>';
                });
                $('#Place').html(htmllist).selectpicker('refresh');
            })
            .fail(function() {});
        var fetchIncotermsListObj = new BackboneData.Collections.fetchIncotermsList();
        $.when(fetchIncotermsListObj.fetch())
            .done(function(response, xhr) {
                var google = response.data;
                console.log(google);
                console.log("hello");
                var htmllist = "";
                google.forEach(function(arrayItem) {
                    htmllist += '<option>' + arrayItem.incoterms + '</option>';
                });
                $('#Incoterms').html(htmllist).selectpicker('refresh');
            })
            .fail(function() {});
        if (Site_Workshop_Prototype != "" && Type_of_the_Prototype_Order != "" && Proto_Type != "") {
            var IdCollectionObj = new BackboneData.Collections.IdCollection();
            $.when(IdCollectionObj.fetch())
                .done(function(response, xhr) {
                    console.log(response);
                    console.log(xhr);
                    response.forEach(function(arrayItem) {
                        var lastGeneratedID = parseInt(arrayItem.next_id) + 1;
                        var newPrototypeOrderID = "";
                        if (typeof(Storage) !== "undefined") {
                            localStorage.setItem("lastGeneratedID", lastGeneratedID);
                        }

                        if (Site_Workshop_Prototype == "La Suze (LAS)") {
                            newPrototypeOrderID = "LAS";
                        } else if (Site_Workshop_Prototype == "La Verriere (LVR)") {
                            newPrototypeOrderID = "LVR";
                        } else if (Site_Workshop_Prototype == "Laval (LVL)") {
                            newPrototypeOrderID = "LVL";
                        } else if (Site_Workshop_Prototype == "Nogent (NOG)") {
                            newPrototypeOrderID = "NOG";
                        } else if (Site_Workshop_Prototype == "Reims (RMS)") {
                            newPrototypeOrderID = "RMS";
                        }
                        if (lastGeneratedID.toString().length == 4) {
                            newPrototypeOrderID = newPrototypeOrderID + "000";
                        } else if (lastGeneratedID.toString().length == 5) {
                            newPrototypeOrderID = newPrototypeOrderID + "00";
                        } else if (lastGeneratedID.toString().length == 6) {
                            newPrototypeOrderID = newPrototypeOrderID + "0";
                        } else if (lastGeneratedID.toString().length == 7) {
                            newPrototypeOrderID = newPrototypeOrderID;
                        }
                        newPrototypeOrderID = newPrototypeOrderID + parseInt(lastGeneratedID) + "-" + Proto_Type;
                        if (Type_of_the_Prototype_Order == "VENDU / SOLD") {
                            newPrototypeOrderID = newPrototypeOrderID + "V";
                        } else if (Type_of_the_Prototype_Order == "NON VENDU / NOT SOLD") {
                            newPrototypeOrderID = newPrototypeOrderID + "N";
                        }
                        $('#No_Prototype_Order').val(newPrototypeOrderID);
                    });
                })
                .fail(function() {});
        }
        if (Site_Workshop_Prototype != null && Site_Workshop_Prototype.length > 0) {
            var fetchActorsListObj = new BackboneData.Collections.fetchActorsList();
            $.when(fetchActorsListObj.fetch())
                .done(function(response, xhr) {
                    console.log(response);
                    console.log(xhr);
                    var MEPList = new Array();
                    var QualityList = new Array();
                    var ProtoWorkshopList = new Array();
                    var ControlMgmtList = new Array();
                    var foTradeList = new Array();
                    var advList = new Array();
                    var projectManagerList = new Array();
                    response.forEach(function(arrayItem) {
                        if (arrayItem.site == Site_Workshop_Prototype) {
                            console.log("arrayItem.site :: " + arrayItem.site);
                            console.log("Site_Workshop_Prototype :: " + Site_Workshop_Prototype);
                            var actorType = arrayItem.actorType;
                            console.log("actor type is htis :: " + actorType);
                            switch (actorType) {
                                case "MEP Study":
                                    MEPList.push(arrayItem.actorEmail);
                                    break;
                                case "Quality":
                                    QualityList.push(arrayItem.actorEmail);
                                    break;
                                case "Proto workshop":
                                    ProtoWorkshopList.push(arrayItem.actorEmail);
                                    break;
                                case "Control management":
                                    ControlMgmtList.push(arrayItem.actorEmail);
                                    break;
                                case "FO Trade":
                                    foTradeList.push(arrayItem.actorEmail);
                                    break;
                                case "ADV":
                                    advList.push(arrayItem.actorEmail);
                                    break;
                                case "Project Manager":
                                    projectManagerList.push(arrayItem.actorEmail);
                                    break;
                            }
                        }
                    });
                    console.log("MEPList :: " + MEPList);
                    console.log("QualityList :: " + QualityList);
                    console.log("ProtoWorkshopList :: " + ProtoWorkshopList);
                    console.log("ControlMgmtList :: " + ControlMgmtList);
                    console.log("foTradeList :: " + foTradeList);
                    console.log("ADV :: " + advList);
                    console.log("projectManagerList :: " + projectManagerList);
                    $('#mepstudy').removeAttr('disabled');
                    $('[data-id="mepstudy"]').removeClass('disabled');
                    $('#quality').removeAttr('disabled');
                    $('[data-id="quality"]').removeClass('disabled');
                    $('#protoworkshop').removeAttr('disabled');
                    $('[data-id="protoworkshop"]').removeClass('disabled');
                    $('#controlmanagement').removeAttr('disabled');
                    $('[data-id="controlmanagement"]').removeClass('disabled');
                    $('#fotrade').removeAttr('disabled');
                    $('[data-id="fotrade"]').removeClass('disabled');
                    $('#adv').removeAttr('disabled');
                    $('[data-id="adv"]').removeClass('disabled');
                    $('#projmanager').removeAttr('disabled');
                    $('[data-id="projmanager"]').removeClass('disabled');
                    var htmllist = "";
                    for (var i in MEPList) {
                        htmllist += '<option>' + MEPList[i] + '</option>';
                    }
                    $('#mepstudy').html(htmllist).selectpicker('refresh');
                    htmllist = "";
                    for (var i in QualityList) {
                        htmllist += '<option>' + QualityList[i] + '</option>';
                    }
                    $('#quality').html(htmllist).selectpicker('refresh');
                    htmllist = "";
                    for (var i in ProtoWorkshopList) {
                        htmllist += '<option>' + ProtoWorkshopList[i] + '</option>';
                    }
                    $('#protoworkshop').html(htmllist).selectpicker('refresh');
                    htmllist = "";
                    for (var i in ControlMgmtList) {
                        htmllist += '<option>' + ControlMgmtList[i] + '</option>';
                    }
                    $('#controlmanagement').html(htmllist).selectpicker('refresh');
                    htmllist = "";
                    for (var i in foTradeList) {
                        htmllist += '<option>' + foTradeList[i] + '</option>';
                    }
                    $('#fotrade').html(htmllist).selectpicker('refresh');
                    htmllist = "";
                    for (var i in foTradeList) {
                        htmllist += '<option>' + foTradeList[i] + '</option>';
                    }
                    $('#fotrade').html(htmllist).selectpicker('refresh');
                    htmllist = "";
                    for (var i in advList) {
                        htmllist += '<option>' + advList[i] + '</option>';
                    }
                    $('#adv').html(htmllist).selectpicker('refresh');
                    htmllist = "";
                    for (var i in projectManagerList) {
                        htmllist += '<option>' + projectManagerList[i] + '</option>';
                    }
                    $('#projmanager').html(htmllist).selectpicker('refresh');
                })
                .fail(function() {});
        }

        var Proto_Type = $.trim($('#Proto_Type').val());
        if (Type_of_the_Prototype_Order == 'VENDU / SOLD') {
            if (Site_Workshop_Prototype == 'La Verriere (LVR)' && Proto_Type == 'P0') {
                $('#frittagelabel,#frittagecheckbox').removeClass('hide');
            } else {
                $('#frittagelabel,#frittagecheckbox').addClass('hide');
            }

            if ($('#intralecheckbox').is(":not(:checked)")) {
                $('#advdiv').removeClass('hide');
                $('#adv').attr('data-required', 'yes');
                $('#adv').attr('data-type', 'text');
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
            $('#fotrade').attr('data-required', 'yes');
            $('#fotrade').attr('data-type', 'text');
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
