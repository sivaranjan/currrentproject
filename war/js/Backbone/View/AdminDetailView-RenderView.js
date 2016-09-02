BackboneData.Views.AdminDetailView = Backbone.View.extend({
    el: '#admin-section',
    render: function() {
        var ref = this;
        var adminDetailHTML = "";
        adminDetailHTML = admin.manager.AdminDetailView();
        ref.$el.html(adminDetailHTML);
        $(document).on("keyup", ".form-control", function(e) {
            $(this).removeClass('error');
        });
        $('.selectpicker').selectpicker();
        $('.selectpicker').on('changed.bs.select', function(e) {
            $(this).selectpicker('setStyle', 'error', 'remove');
        });
        $('#admin-section').removeClass('hide');
        $('#welcome-section,#createorder-section,#component-section,#navfixed-wrapper,#orderlist-section').addClass('hide');
        $('#bs-example-navbar-collapse-1 ul li').removeClass('active');
        $('#adminsetting-tab').addClass('active');
        $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            console.log($(event.target).text()); // newly activated tab
            var currentSelectedTab = $(event.target).text();
            switch (currentSelectedTab) {
                case "MEP Study":
                    ref.buildActorsTable("MEP Study");
                    break;
                case "Quality":
                    ref.buildActorsTable("Quality");
                    break;
                case "Proto workshop":
                    ref.buildActorsTable("Proto workshop");
                    break;
                case "Control management":
                    ref.buildActorsTable("Control management");
                    break;
                case "FO Trade":
                    ref.buildActorsTable("FO Trade");
                    break;
                case "ADV":
                    ref.buildActorsTable("ADV");
                    break;
                case "Project Manager":
                    ref.buildActorsTable("Project Manager");
                    break;
            }
        });
    },
    initialize: function() {
        _.bindAll(this, 'cleanup');
        var _thisView = this;
        _thisView.render();
        /*=====================================Fetch Actors List ====================================*/

        /*=====================================Fetch ID Generated List ====================================*/

        /*=====================================Fetch Platforms List ====================================*/
        /*=====================================Fetch Incoterms List ====================================*/
        /*=====================================Fetch Customers List ====================================*/
        /*=====================================Fetch Allocation of turnover List ====================================*/
        /*=====================================Fetch Places List ====================================*/
        /*=====================================Fetch Sites List ====================================*/

    },
    cleanup: function() {
        this.undelegateEvents();
        $(this.el).empty();
    },
    events: {
        "click #save_actor": "validateSaveOrderAction",
        "click #save_incoterms": "validateIncoterms",
        "click #save_customer": "validateCustomers",
        "click #save_plateform": "validatePlatforms",
        "click #save_places": "validateLocations",
        "click #save_site": "validateSites",
        "click #showtableslist": "showTablesList",

        /*sivaranjan changes*/
        "click #configactor-btn": "viewActorList",
        "click #incoterms-btn": "viewIncotermsList",
        "click #clients-btn": "viewClientsList",
        "click #platforms-btn": "viewPlatformList",
        "click #locations-btn": "viewLocationList",
        "click #sites-btn": "viewSiteList",

    },
    showTablesList: function() {
        $('.configset,#config-pane article').removeClass('hide');
        $('#configbreadcrumb,#actor-article').addClass('hide');
        $('.tablelistview').addClass('hide');
    },
    validateSaveOrderAction: function() {
        if (validate.getInstance().formordiv('actor_modal_body')) {
            console.log("trfdsf");
            this.saveActor();
        } else {
            $('#actor_modal_body').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) {
                    $(this).selectpicker('setStyle', 'error', 'add');
                }
            })
        }
    },
    validateIncoterms: function() {
        if (validate.getInstance().formordiv('incoterms_modal_body')) {
            console.log("trfdsf");
            this.saveIncoterms();
        } else {
            $('#incoterms_modal_body').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) {
                    $(this).selectpicker('setStyle', 'error', 'add');
                }
            })
        }
    },
    validateCustomers: function() {
        if (validate.getInstance().formordiv('customers_modal_body')) {
            console.log("trfdsf");
            this.saveCustomer();
        } else {
            $('#customers_modal_body').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) {
                    $(this).selectpicker('setStyle', 'error', 'add');
                }
            })
        }
    },
    validatePlatforms: function() {
        if (validate.getInstance().formordiv('platform_modal_body')) {
            console.log("trfdsf");
            this.savePlateform();
        } else {
            $('#platform_modal_body').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) {
                    $(this).selectpicker('setStyle', 'error', 'add');
                }
            })
        }
    },
    validateLocations: function() {
        if (validate.getInstance().formordiv('places_modal_body')) {
            console.log("trfdsf");
            this.savePlace();
        } else {
            $('#places_modal_body').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) {
                    $(this).selectpicker('setStyle', 'error', 'add');
                }
            })
        }
    },
    validateSites: function() {
        if (validate.getInstance().formordiv('sites_modal_body')) {
            console.log("trfdsf");
            this.saveSite();
        } else {
            $('#sites_modal_body').find('.selectpicker').each(function() {
                if ($(this).hasClass('error')) {
                    $(this).selectpicker('setStyle', 'error', 'add');
                }
            })
        }
    },
    saveActor: function() {
        var self = this;
        var actor_Type = $('ul#addActorUL').find('li.active').data('attr');
        var actor_Email = $("#actor_email").val();
        var actorSite = $("#actor_site").val();
        $('#statusmsg').html("Saving actor..");
        $('#statusLoader').removeClass('hide');
        $('#statusLoader .voicebox-content').addClass('in');
        var actorDetails = new BackboneData.Models.ActorListDetailsModel({ actorType: actor_Type, actorEmail: actor_Email, site: actorSite });
        actorDetails.save({}, {
            success: function(model, respose, options) {
                $('#statusmsg').html("Actor saved successfully.");
                $('#statusLoader').addClass('hide');
                $('#statusLoader .voicebox-content').removeClass('in');
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
                $('#statusmsg').html("Actor saved successfully.");
                $('#statusLoader').addClass('hide');
                $('#statusLoader .voicebox-content').removeClass('in');
                $('#actor-modal').modal('hide');
                console.log("Something went wrong while saving the model");
                self.buildActorsTable(actor_Type);
                setTimeout(function() { $('#statusLoader .voicebox-content').removeClass('in'); }, 3000);
            }
        });
    },
    saveIncoterms: function() {
        var self = this;
        var incoterm = $("#incoterms_value").val();
        var info = $("#incoterms_info").val();
        $('#statusmsg').html("Saving Incoterms..");
        $('#statusLoader').removeClass('hide');
        $('#statusLoader .voicebox-content').addClass('in');
        var incotermsDetails = new BackboneData.Models.IncotermsModel({ incoterms: incoterm, infos: info });
        incotermsDetails.save({}, {
            success: function(model, respose, options) {
                $('#statusmsg').html("Actor saved successfully.");
                $('#statusLoader').addClass('hide');
                $('#statusLoader .voicebox-content').removeClass('in');
                $('#incoterms-modal').modal('hide');
            },
            error: function(model, xhr, options) {
                $('#statusmsg').html("Actor saved successfully.");
                $('#statusLoader').addClass('hide');
                $('#statusLoader .voicebox-content').removeClass('in');
                $('#incoterms-modal').modal('hide');
                $('#statusmsg').html("New incoterms added successfully..");
                self.buildIncotermsTable();
                setTimeout(function() { $('#statusLoader .voicebox-content').removeClass('in'); }, 3000);
            }
        });
    },
    saveCustomer: function() {
        var self = this;
        var name = $("#customer_name").val();
        var code = $("#customer_code").val();
        var branch_code = $("#customer_branch").val();
        var provider_code = $("#cust_provider_code").val();
        var address = $("#customer_address").val();
        $('#statusmsg').html("Saving Incoterms..");
        $('#statusLoader').removeClass('hide');
        $('#statusLoader .voicebox-content').addClass('in');
        var customerDetails = new BackboneData.Models.CustomersListModel({ customer_Name: name, customer_Code: code, branch_Code: branch_code, provider_Code: provider_code, customer_Address: address });
        customerDetails.save({}, {
            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
                console.log("Something went wrong while saving the model");
                $('#clients-modal').modal('hide');
                $('#statusmsg').html("New customer added successfully..");
                self.buildCustomersTable();
                setTimeout(function() { $('#statusLoader .voicebox-content').removeClass('in'); }, 3000);
            }
        });
    },
    savePlateform: function() {
        var self = this;
        var plateformValue = $("#plateforms_value").val();
        $('#statusmsg').html("Saving Incoterms..");
        $('#statusLoader').removeClass('hide');
        $('#statusLoader .voicebox-content').addClass('in');
        var plateformDetails = new BackboneData.Models.PlateformDetailsModel({ plateform: plateformValue });
        plateformDetails.save({}, {
            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
                console.log("Something went wrong while saving the model");
                $('#platform-modal').modal('hide');
                $('#statusmsg').html("New plateform added successfully..");
                self.buildPlatformsTable();
                setTimeout(function() { $('#statusLoader .voicebox-content').removeClass('in'); }, 3000);
            }
        });
    },
    savePlace: function() {
        var self = this;
        var placeValue = $("#places").val();
        $('#statusmsg').html("Saving Incoterms..");
        $('#statusLoader').removeClass('hide');
        $('#statusLoader .voicebox-content').addClass('in');
        var placeDetails = new BackboneData.Models.PlacesDetailsModel({ places: placeValue });
        placeDetails.save({}, {
            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
                console.log("Something went wrong while saving the model");
                $('#location-modal').modal('hide');
                $('#statusmsg').html("New place added successfully..");
                self.buildPlacesTable();
                setTimeout(function() { $('#statusLoader .voicebox-content').removeClass('in'); }, 3000);
            }
        });
    },
    saveSite: function() {
        var self = this;
        var siteName = $("#site_name").val();
        var siteAddress = $("#site_address").val();
        $('#statusmsg').html("Saving Site..");
        $('#statusLoader').removeClass('hide');
        $('#statusLoader .voicebox-content').addClass('in');
        var siteDetails = new BackboneData.Models.SitesListModel({ site_Name: siteName, address: siteAddress });
        siteDetails.save({}, {
            success: function(model, respose, options) {
                console.log("The model has been saved to the server");
            },
            error: function(model, xhr, options) {
                console.log("Something went wrong while saving the model");
                $('#site-modal').modal('hide');
                $('#statusmsg').html("New site added successfully..");
                self.buildSitesTable();
                setTimeout(function() { $('#statusLoader .voicebox-content').removeClass('in'); }, 3000);
            }
        });
    },
    /*sivaranjan changes*/
    viewActorList: function() {
        $('.configset,#config-pane article').addClass('hide');
        $('#configbreadcrumb,#actor-article').removeClass('hide');
        this.buildActorsTable("MEP Study");
    },
    viewIncotermsList: function() {
        $('.configset,#config-pane article').addClass('hide');
        $('#configbreadcrumb,#incoterms-article').removeClass('hide');
        this.buildIncotermsTable();
    },
    viewClientsList: function() {
        $('.configset,#config-pane article').addClass('hide');
        $('#configbreadcrumb,#clients-article').removeClass('hide');
        this.buildCustomersTable();
    },
    viewPlatformList: function() {
        $('.configset,#config-pane article').addClass('hide');
        $('#configbreadcrumb,#platforms-article').removeClass('hide');
        this.buildPlatformsTable();
    },
    viewLocationList: function() {
        $('.configset,#config-pane article').addClass('hide');
        $('#configbreadcrumb,#locations-article').removeClass('hide');
        this.buildPlacesTable();
    },
    viewSiteList: function() {
        $('.configset,#config-pane article').addClass('hide');
        $('#configbreadcrumb,#sites-article').removeClass('hide');
        this.buildSitesTable();
    },
    buildActorsTable: function(actorTypeFilter) {
        $('#configbreadcrumb .active').html("Actors / " + actorTypeFilter);
        $('#actorsub-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "/fetchController/fetchActorsByType/" + actorTypeFilter,
            "bDestroy": true,
            "columns": [
                { "data": "actorEmail" },
                { "data": "actorType" },
                { "data": "site" },
            ],
            "order": [
                [1, 'asc']
            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add new actor',
                className: 'btn btn-success btn-sm',
                action: function() {
                    var dataAttr = $('ul#addActorUL').find('li.active').data('attr');
                    $('#actorLabel').html(dataAttr);
                    $('#actor-modal').modal('show');
                }
            }]
        });
        $('#actorsub-table tfoot th').each( function () {
            var title = $(this).text();
            $(this).html( '<input type="text" class="form-control input-sm" placeholder="Search '+title+'" />' );
        } );
     
        // DataTable
        var table = $('#actorsub-table').DataTable();
     
        // Apply the search
        table.columns().every( function () {
            var that = this;
     
            $( 'input', this.footer() ).on( 'keyup change', function () {
                if ( that.search() !== this.value ) {
                    that
                        .search( this.value )
                        .draw();
                }
            } );
        } );
        $('.dt-buttons a.btn').removeClass('dt-button');
    },
    buildIncotermsTable: function() {
        $('#configbreadcrumb .active').html("Incoterms");
        $('#incoterms-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchIncotermsList",
            "bDestroy": true,
            "columns": [
                { "data": "incoterms" },
                { "data": "infos" },
            ],
            "order": [
                [1, 'asc']
            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Incoterms',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#incoterms-modal').modal('show');
                }
            }]
        });
        $('.dt-buttons a.btn').removeClass('dt-button');
    },
    buildCustomersTable: function() {
        $('#configbreadcrumb .active').html("Customers");
        $('#clients-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchCustomersList",
            "bDestroy": true,
            "columns": [
                { "data": "customer_Name" },
                { "data": "customer_Code" },
                { "data": "branch_Code" },
                { "data": "provider_Code" },
                { "data": "customer_Address" },
            ],
            "order": [
                [1, 'asc']
            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Customer',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#clients-modal').modal('show');
                }
            }]
        });
        $('.dt-buttons a.btn').removeClass('dt-button');
    },
    buildPlatformsTable: function() {
        $('#configbreadcrumb .active').html("Platforms");
        $('#platformssub-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchPlateformList",
            "bDestroy": true,
            "columns": [
                { "data": "plateform" },
            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Platform',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#platform-modal').modal('show');
                }
            }]
        });
        $('.dt-buttons a.btn').removeClass('dt-button');
    },
    buildPlacesTable: function() {
        $('#configbreadcrumb .active').html("Places");
        $('#locationsub-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchPlacesList",
            "bDestroy": true,
            "columns": [
                { "data": "places" },
            ],
            "order": [
                [0, 'asc']
            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Places',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#location-modal').modal('show');
                }
            }]
        });
        $('.dt-buttons a.btn').removeClass('dt-button');
    },
    buildSitesTable: function() {
        $('#configbreadcrumb .active').html("Sites");
        $('#sitesub-table').DataTable({
            dom: 'Bfrtip',
            "ajax": "http://localhost:8888/fetchController/fetchSitesList",
            "bDestroy": true,
            "columns": [
                { "data": "site_Name" },
                { "data": "address" },
            ],
            "order": [
                [1, 'asc']
            ],
            buttons: [{
                text: '<i class="fa fa-plus" aria-hidden="true"></i> Add New Sites',
                className: 'btn btn-success btn-sm',
                action: function() {
                    $('#site-modal').modal('show');
                }
            }]
        });
        $('.dt-buttons a.btn').removeClass('dt-button');
    }
});
