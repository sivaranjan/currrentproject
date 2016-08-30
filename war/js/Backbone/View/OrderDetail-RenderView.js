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
        var today = new Date();
        $('#Date_of_the_Order').val(today);
        $('.selectpicker').on('changed.bs.select', function (e) {
        	$(this).selectpicker('setStyle','error','remove');
        	});
    },
    initialize: function(){
    	var _thisView = this;
    	 _thisView.render();
         var navBtnSectionHTML = new BackboneData.Views.NavBtnSectionview();
    	/*=====================================Fetch Actors List ====================================*/
    	
    	/*=====================================Fetch ID Generated List ====================================*/
    	var IdCollectionObj = new IdCollection();
    	$.when(IdCollectionObj.fetch())
        .done(function(response, xhr) {
            console.log(response);
            console.log(xhr);
        })
        .fail(function() {
        });
    	/*=====================================Fetch Platforms List ====================================*/
    	/*=====================================Fetch Incoterms List ====================================*/
    	/*=====================================Fetch Customers List ====================================*/
    	/*=====================================Fetch Allocation of turnover List ====================================*/
    	/*=====================================Fetch Places List ====================================*/
    	/*=====================================Fetch Sites List ====================================*/
    	
    },
    events: {
        "change #Type_of_the_Prototype_Order": "populateDependencies",
        "change #Site_Workshop_Prototype": "populateDependencies",
        "change #Proto_Type": "populateDependencies",
        "change #intralecheckbox": "populateDependencies",
    },
    populateDependencies: function() {
        var Type_of_the_Prototype_Order = $.trim($('#Type_of_the_Prototype_Order').val());
        var Site_Workshop_Prototype = $.trim($('#Site_Workshop_Prototype').val());
        if(Site_Workshop_Prototype!=null && Site_Workshop_Prototype.length>0)
        {
        	var fetchActorsListObj = new fetchActorsList();
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
                response.forEach( function (arrayItem)
                		{
                			if(arrayItem.site==Site_Workshop_Prototype)
                			{
                				var actorType = arrayItem.actorType;
                    			switch(actorType) 
        						{
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
                console.log("MEPList :: "+MEPList);
                console.log("QualityList :: "+QualityList);
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
              	 htmllist+='<option>'+MEPList[i]+'</option>';
              	}
                $('#mepstudy').html(htmllist).selectpicker('refresh');
                htmllist = "";
                for (var i in QualityList) {
                 	 htmllist+='<option>'+QualityList[i]+'</option>';
                 	}
                $('#quality').html(htmllist).selectpicker('refresh');
            })
            .fail(function() {
            });
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
