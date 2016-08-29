// This file was automatically generated from admindetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace admin.manager.
 */

if (typeof admin == 'undefined') { var admin = {}; }
if (typeof admin.manager == 'undefined') { admin.manager = {}; }


admin.manager.AdminDetailView = function(opt_data, opt_ignored) {
  return '<div class="col-md-12"><div class="panel-group" role="tablist"><div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title">Users List</h4></div><div class="panel-collapse collapse in" role="tabpanel"><div class="panel-body"></div></div></div></div></div><input type="button" value="Create New Incoterms" id="create_Incoterms"/><input type="button" value="Create New Plateform" id="create_plateform"/><input type="button" value="Create New Place" id="create_Place"/><input type="button" value="Create New Customer" id="create_Customers"/><input type="button" value="Create New Site" id="create_site"/><input type="button" value="Create New Actor" id="create_Actor"/><div id="IncotermDetails" class="hide"><label id="incolabel">Incoterm :</label><input type="text" name="incoterms" id="incoterms_value" /><br><label>Infos :</label><input type="text" name="infos" id="incoterms_info"/><br><input type="button" value="Save" id="save_incoterms"/></div><div id="PlaceDetails" class="hide"><label id="placeslabel">Places :</label><input type="text" name="places" id="places"/><br><input type="button" value="Save" id="save_places"/></div><div id="PlateformDetails" class="hide"><label id="plateformlabel">Plateform :</label><input type="text" name="plateform" id="plateforms_value"/><br><input type="button" value="Save" id="save_plateform"/></div><div id="CustomerDetails" class="hide"><label id="Customername">Customer Name :</label><input type="text" name="cust_name" id="customer_name"/><br><label id="Customercode">Customer Code :</label><input type="text" name="cust_code" id="customer_code"/><br><label id="Branchcode">Branch Code :</label><input type="text" name="branch_code" id="customer_branch"/><br><label id="Providercode">Provider Code :</label><input type="text" name="provider_code" id="cust_provider_code"/><br><label id="CustomerAddress">Customer Address :</label><input type="text" name="cust_address" id="customer_address"/><br><input type="button" value="Save" id="save_customer"/></div><div id="SiteDetails" class="hide"><label id="sitename">site Name :</label><input type="text" name="site_name" id="site_name"/><br><label id="siteaddress">site Address :</label><input type="text" name="site_address" id="site_address"/><br><input type="button" value="Save" id="save_site"/></div><div id="ActorDetails" class="hide"><label id="actortype">Actor Type :</label><input type="text" name="actor_type" id="actor_type"/><br><label id="actoremail">Actor Email :</label><input type="text" name="actor_email" id="actor_email"/><br><label id="actoremail">Site :</label><input type="text" name="actor_site" id="actor_site"/><br><input type="button" value="Save" id="save_actorlist"/></div>';
};
if (goog.DEBUG) {
  admin.manager.AdminDetailView.soyTemplateName = 'admin.manager.AdminDetailView';
}
