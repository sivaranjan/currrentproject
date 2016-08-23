// This file was automatically generated from globalnavbar-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace globalnavigation.manager.
 */

if (typeof globalnavigation == 'undefined') { var globalnavigation = {}; }
if (typeof globalnavigation.manager == 'undefined') { globalnavigation.manager = {}; }


globalnavigation.manager.GlobalNavbarview = function(opt_data, opt_ignored) {
  return '<div class="container" id="globalnavbar"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button></div><!-- Collect the nav links, forms, and other content for toggling --><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><ul class="nav navbar-nav"><li id="home-tab" class="active"><a href="/">' + soy.$$escapeHtml(opt_data.paramValue['HOME']) + '</a></li><li id="createorder-tab"><a href="/#createorder">' + soy.$$escapeHtml(opt_data.paramValue['CREATE ORDER']) + '</a></li><li id="orderlist-tab"><a href="/#orderlisting">' + soy.$$escapeHtml(opt_data.paramValue['LIST ORDER']) + '</a></li><li id="adminsetting-tab"><a href="/#adminsetting">' + soy.$$escapeHtml(opt_data.paramValue['ADMIN SETTINGS']) + '</a></li></ul></div></div>';
};
if (goog.DEBUG) {
  globalnavigation.manager.GlobalNavbarview.soyTemplateName = 'globalnavigation.manager.GlobalNavbarview';
}
