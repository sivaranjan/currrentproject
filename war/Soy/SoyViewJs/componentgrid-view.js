// This file was automatically generated from componentgrid-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace component.manager.
 */

if (typeof component == 'undefined') { var component = {}; }
if (typeof component.manager == 'undefined') { component.manager = {}; }


component.manager.ComponentGridView = function(opt_data, opt_ignored) {
  return '<div class="panel-heading" role="tab" id="headingfour"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="" href="#collapsefour" aria-expanded="true" aria-controls="collapsefour">' + soy.$$escapeHtml(opt_data.paramValue['Component']) + '</a><a class="collapsed pull-right" role="button" data-toggle="collapse" data-parent="" href="#collapsefour" aria-expanded="true" aria-controls="collapsefour"><i class="fa fa-angle-down" aria-hidden="true"></i></a></h4></div><div id="collapsefour" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingfour"><div class="panel-body" id="component-table"><table class="table table-hover responsive nowrap" id="example"><thead><tr><th>' + soy.$$escapeHtml(opt_data.paramValue['Link']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Customer ref']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Product Designation']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Product Type']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['USP']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Total Quantity']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Total amount']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Component status']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity produced']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity App. Quality']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity Dfi']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity Delivered  to the customer']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Invoiced amount']) + '</th><th>&nbsp;</th></tr></thead><tbody><tr><td>Link</td><td>Customer Ref</td><td>Product Designation</td><td>Product Type</td><td>USP</td><td>Total Quantity</td><td>Total Amount</td><td>Component Status</td><td>Quantity Produced</td><td>Quantity App. Quality</td><td>Quantity DFi</td><td>e Customer</td><td>Invoiced Amount</td><td>&nbsp;</td></tr></tbody></table></div></div>';
};
if (goog.DEBUG) {
  component.manager.ComponentGridView.soyTemplateName = 'component.manager.ComponentGridView';
}
