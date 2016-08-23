// This file was automatically generated from orderdetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace order.manager.
 */

if (typeof order == 'undefined') { var order = {}; }
if (typeof order.manager == 'undefined') { order.manager = {}; }


order.manager.OrderDetailView = function(opt_data, opt_ignored) {
  return '<div class="panel-heading" role="tab" id="headingOne"><h4 class="panel-title">' + soy.$$escapeHtml(opt_data.paramValue['Order Details']) + '<a class="pull-right collapsed" role="button"><i class="fa fa-angle-down" aria-hidden="true"></i></a></h4></div><div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne"><div class="panel-body"><form role="form"><div class="row"><div class="form-group col-md-6"><label for="name">N<sup>&#8728;</sup>  ' + soy.$$escapeHtml(opt_data.paramValue['Prototype Order']) + '<span class="text-danger">*</span></label><div class="input-group"><input type="text" class="form-control" disabled id="No_Prototype_Order" readonly aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Site/Workshop Prototype']) + '<span class="text-danger">*</span></label><select class="form-control" id="Site_Workshop_Prototype"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Geosite']) + '<span class="text-danger">*</span></label><div class="input-group"><input type="text" id="Geosite" class="form-control" disabled readonly aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Proto Type']) + '<span class="text-danger">*</span></label><select class="form-control" id="Proto_Type"><option>P0</option><option>P1</option><option>P2</option></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Type of the prototype order']) + '<span class="text-danger">*</span></label><select class="form-control" id="Type_of_the_Prototype_Order"><option>VENDU / SOLD</option><option>NON VENDU / NOT SOLD</option></select></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Date of the order']) + '</label><div class="input-group date"><input type="text" id="Date_of_the_Order" class="form-control" disabled readonly><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div></div><div class="form-group col-md-12"><label class="checkbox-inline"><input type="checkbox" name="optradio">' + soy.$$escapeHtml(opt_data.paramValue['PCC']) + '</label><label class="checkbox-inline"><input type="checkbox" name="optradio">' + soy.$$escapeHtml(opt_data.paramValue['Open Order']) + '</label><label class="checkbox-inline"><input type="checkbox" name="optradio">' + soy.$$escapeHtml(opt_data.paramValue['Frittage']) + '</label><label class="checkbox-inline"><input type="checkbox" name="optradio">' + soy.$$escapeHtml(opt_data.paramValue['E52']) + '</label><label class="checkbox-inline"><input type="checkbox" name="optradio">' + soy.$$escapeHtml(opt_data.paramValue['IntraLE']) + '</label></div><div class="form-group col-md-12"><button type="button" id="ordernextbtn" class="btn btn-default">' + soy.$$escapeHtml(opt_data.paramValue['Next']) + '</button></div></div></form></div></div>';
};
if (goog.DEBUG) {
  order.manager.OrderDetailView.soyTemplateName = 'order.manager.OrderDetailView';
}
