// This file was automatically generated from welcomesection-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace welcome.manager.
 */

if (typeof welcome == 'undefined') { var welcome = {}; }
if (typeof welcome.manager == 'undefined') { welcome.manager = {}; }


welcome.manager.WelcomeDetailView = function(opt_data, opt_ignored) {
  return '<h2 class="col-md-12"> ' + soy.$$escapeHtml(opt_data.paramValue['Welcome to']) + '<span class="valeo-green"> THS France Prototype Database </span></h2><div class="home-sections"><div class="col-md-4 col-xs-12"><a href="/#createorder" style="cursor: pointer;"><div class="well text-center"><i class="glyphicon glyphicon-plus home-glyphicon"></i><div class="glyphicon-title"><b> ' + soy.$$escapeHtml(opt_data.paramValue['Create']) + ' </b></div><div><p>' + soy.$$escapeHtml(opt_data.paramValue['Create new orders and its associate components']) + '</p></div></div></a></div><div class="col-md-4 col-xs-12"><a href="/#orderlisting" style="cursor: pointer;"><div class="well text-center"><i class="glyphicon glyphicon-list-alt home-glyphicon"></i><div class="glyphicon-title"><b> ' + soy.$$escapeHtml(opt_data.paramValue['List Orders']) + '</b></div><div><p>' + soy.$$escapeHtml(opt_data.paramValue['View list of orders']) + '</p></div></div></a></div><div class="col-md-4 col-xs-12"><a href="/#adminsetting" style="cursor: pointer;"><div class="well text-center"><i class="glyphicon glyphicon-cog home-glyphicon"></i><div class="glyphicon-title"><b> ' + soy.$$escapeHtml(opt_data.paramValue['Admin settings']) + ' </b></div><div><p>' + soy.$$escapeHtml(opt_data.paramValue['Configure roles and privileges']) + '</p></div></div></a></div></div>';
};
if (goog.DEBUG) {
  welcome.manager.WelcomeDetailView.soyTemplateName = 'welcome.manager.WelcomeDetailView';
}
