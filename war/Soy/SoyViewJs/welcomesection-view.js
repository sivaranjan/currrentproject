// This file was automatically generated from welcomesection-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace welcome.manager.
 */

if (typeof welcome == 'undefined') { var welcome = {}; }
if (typeof welcome.manager == 'undefined') { welcome.manager = {}; }


welcome.manager.WelcomeDetailView = function(opt_data, opt_ignored) {
  return '<h2 class="col-md-12 text-center"> ' + soy.$$escapeHtml(opt_data.paramValue['Welcome to']) + '<span class="valeo-green"> THS France Prototype Database </span></h2><div class="home-sections"><div class="col-md-2 col-md-offset-1 col-xs-12"><a href="/#createorder" style="cursor: pointer;"><div class="well text-center" style="min-height: auto;padding: 0;"><div style="background-color: #97D045;padding: 50px 0px;color: #fff;"><i class="glyphicon glyphicon-plus home-glyphicon" style="border-color: #fff;"></i></div><div class="glyphicon-title text-center" style="margin-top: 0px;padding: 10px;"><b> ' + soy.$$escapeHtml(opt_data.paramValue['Create']) + ' </b></div></div></a></div><div class="col-md-2 col-xs-12"><a href="/#orderlisting" style="cursor: pointer;"><div class="well text-center" style="min-height: auto;padding: 0;"><div style="background-color: #97D045;padding: 50px 0px;color: #fff;"><i class="glyphicon glyphicon-list-alt home-glyphicon" style="border-color: #fff;"></i></div><div class="glyphicon-title text-center" style="margin-top: 0px;padding: 10px;"><b> ' + soy.$$escapeHtml(opt_data.paramValue['List Orders']) + '</b></div></div></a></div><div class="col-md-2 col-xs-12"><a href="#" style="cursor: pointer;"><div class="well text-center" style="min-height: auto;padding: 0;"><div style="background-color: #97D045;padding: 50px 0px;color: #fff;"><i class="glyphicon glyphicon-list-alt home-glyphicon" style="border-color: #fff;"></i></div><div class="glyphicon-title text-center" style="margin-top: 0px;padding: 10px;"><b>List Components</b></div></div></a></div><div class="col-md-2 col-xs-12"><a href="#" style="cursor: pointer;"><div class="well text-center" style="min-height: auto;padding: 0;"><div style="background-color: #97D045;padding: 50px 0px;color: #fff;"><i class="glyphicon glyphicon-list-alt home-glyphicon" style="border-color: #fff;"></i></div><div class="glyphicon-title text-center" style="margin-top: 0px;padding: 10px;"><b>Configure workflow</b></div></div></a></div><div class="col-md-2 col-xs-12"><a href="/#adminsetting" style="cursor: pointer;"><div class="well text-center" style="min-height: auto;padding: 0;"><div style="background-color: #97D045;padding: 50px 0px;color: #fff;"><i class="glyphicon glyphicon-cog home-glyphicon" style="border-color: #fff;"></i></div><div class="glyphicon-title text-center" style="margin-top: 0px;padding: 10px;"><b> ' + soy.$$escapeHtml(opt_data.paramValue['Admin settings']) + ' </b></div></div></a></div></div>';
};
if (goog.DEBUG) {
  welcome.manager.WelcomeDetailView.soyTemplateName = 'welcome.manager.WelcomeDetailView';
}
