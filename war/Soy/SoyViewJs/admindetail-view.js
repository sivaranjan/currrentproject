// This file was automatically generated from admindetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace admin.manager.
 */

if (typeof admin == 'undefined') { var admin = {}; }
if (typeof admin.manager == 'undefined') { admin.manager = {}; }


admin.manager.AdminDetailView = function(opt_data, opt_ignored) {
  return '<div class="col-md-12"><div class="panel-group" role="tablist"><div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title">Application Configuration</h4></div><div class="panel-collapse collapse in" role="tabpanel"><div class="panel-body" id="config-panel"><ol class="breadcrumb hide" id="configbreadcrumb"><li><a href="#">App Configuration</a></li><li class="active">Data</li></ol><ul class="list-unstyled row configset"><li class="col-md-4"><a id="configactor-btn"><img src="../resources/images/formicon.png" />List of Actors</a></li><li class="col-md-4"><a id="incoterms-btn"><img src="../resources/images/formicon.png" />List of Incoterms</a></li><li class="col-md-4"><a id="clients-btn"><img src="../resources/images/formicon.png" />List of Clients</a></li><li class="col-md-4"><a id="platforms-btn"><img src="../resources/images/formicon.png" />List of Platforms</a></li><li class="col-md-4"><a id="locations-btn"><img src="../resources/images/formicon.png" />List of Locations</a></li><li class="col-md-4"><a id="sites-btn"><img src="../resources/images/formicon.png" />List of Sites</a></li></ul><article class="hide" id="actor-article"><ul class="nav nav-pills comnav-pills" style="margin-bottom: 15px;"><li class="active"><a href="#mepstudy-subtab" data-toggle="tab">MEP Study</a></li><li><a href="#quality-subtab" data-toggle="tab">Quality</a></li><li><a href="#proto-subtab" data-toggle="tab">Proto workshop</a></li><li><a href="#manage-subtab" data-toggle="tab">Management Control</a></li><li><a href="#trade-subtab" data-toggle="tab">FO trade</a></li><li><a href="#adv-subtab" data-toggle="tab">ADV</a></li><li><a href="#project-subtab" data-toggle="tab">Project Manager</a></li></ul><div class="tab-content"><div role="tabpanel" class="tab-pane active" id="mepstudy-subtab"><table class="table table-hover" id="mepstudysub-table"><thead><tr><th><input type="checkbox"></th><th>MEP Study</th><th>Site</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>bernard.cheron@apps-test.valeo.com</td><td>Nogent</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></div><div role="tabpanel" class="tab-pane" id="quality-subtab"><table class="table table-hover" id="qualitysub-table"><thead><tr><th><input type="checkbox"></th><th>Quality</th><th>Site</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>bernard.cheron@apps-test.valeo.com</td><td>Nogent</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></div><div role="tabpanel" class="tab-pane" id="proto-subtab"><table class="table table-hover" id="protosub-table"><thead><tr><th><input type="checkbox"></th><th>Proto Workshop</th><th>Site</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>bernard.cheron@apps-test.valeo.com</td><td>Nogent</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></div><div role="tabpanel" class="tab-pane" id="manage-subtab"><table class="table table-hover" id="managesub-table"><thead><tr><th><input type="checkbox"></th><th>Management Control</th><th>Site</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>bernard.cheron@apps-test.valeo.com</td><td>Nogent</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></div><div role="tabpanel" class="tab-pane" id="trade-subtab"><table class="table table-hover" id="tradesub-table"><thead><tr><th><input type="checkbox"></th><th>FO trade</th><th>Site</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>bernard.cheron@apps-test.valeo.com</td><td>Nogent</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></div><div role="tabpanel" class="tab-pane" id="adv-subtab"><table class="table table-hover" id="advsub-table"><thead><tr><th><input type="checkbox"></th><th>ADV</th><th>Site</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>bernard.cheron@apps-test.valeo.com</td><td>Nogent</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></div><div role="tabpanel" class="tab-pane" id="project-subtab"><table class="table table-hover" id="prosub-table"><thead><tr><th><input type="checkbox"></th><th>Project Manager</th><th>Site</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>bernard.cheron@apps-test.valeo.com</td><td>Nogent</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></div></div></article><article class="hide" id="incoterms-article"><table class="table table-hover" id="incoterms-table"><thead><tr><th><input type="checkbox"></th><th>Incoterms</th><th>Info</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>CPT</td><td>Port pay\uFFFD jusqu\'au lieu d\uFFFDsign\uFFFD. Frais d\'assurance \uFFFD la charger de l\'acheteur.</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></article><article class="hide" id="clients-article"><table class="table table-hover" id="clients-table"><thead><tr><th><input type="checkbox"></th><th>Client name</th><th>Customer Code</th><th>Branch Code</th><th>Vendor Code</th><th>Final delivery address</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>AUDI / GROSSMEHRING</td><td>0192DES003\\01929999BB</td><td>AUDI</td><td>53246</td><td>AUDI AG WARENEINGANG TEGUTENBERGSTRASS</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></article><article class="hide" id="prototypists-article"></article><article class="hide" id="platforms-article"><table class="table table-hover" id="platformssub-table"><thead><tr><th><input type="checkbox"></th><th>Platforms</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>A-Entry</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></article><article class="hide" id="productstypes-article"></article><article class="hide" id="technologies-article"></article><article class="hide" id=" rdlead-article"></article><article class="hide" id="clientadd-article"></article><article class="hide" id="locations-article"><table class="table table-hover" id="locationsub-table"><thead><tr><th><input type="checkbox"></th><th>Place</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>Guyancourt</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></article><article class="hide" id="sites-article"><table class="table table-hover" id="sitesub-table"><thead><tr><th><input type="checkbox"></th><th>Site Name</th><th>Site Address</th><th>Edit</th><th>Delete</th></tr></thead><tbody><tr><td><input type="checkbox"></td><td>La Suze</td><td>VALEO SYSTEMES THERMIQUESRoute de Chemir\uFFFD Le Gaudin72210 La Suze S</td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-pencil"></i></button></td><td><button type="button" class="btn btn-default btn-sm"><i class="fa fa-trash"></i></button></td></tr></tbody></table></article><article class="hide" id="workconfig-article"></article><article class="hide" id="adminview-article"></article><article class="hide" id="deldraft-article"></article><article class="hide" id="restartpro-article"></article><article class="hide" id="timeperiod-article"></article></div></div></div></div></div><input type="button" value="Create New Incoterms" id="create_Incoterms"/><input type="button" value="Create New Plateform" id="create_plateform"/><input type="button" value="Create New Place" id="create_Place"/><input type="button" value="Create New Customer" id="create_Customers"/><input type="button" value="Create New Site" id="create_site"/><input type="button" value="Create New Actor" id="create_Actor"/><div id="IncotermDetails" class="hide"><label id="incolabel">Incoterm :</label><input type="text" name="incoterms" id="incoterms_value" /><br><label>Infos :</label><input type="text" name="infos" id="incoterms_info"/><br><input type="button" value="Save" id="save_incoterms"/></div><div id="PlaceDetails" class="hide"><label id="placeslabel">Places :</label><input type="text" name="places" id="places"/><br><input type="button" value="Save" id="save_places"/></div><div id="PlateformDetails" class="hide"><label id="plateformlabel">Plateform :</label><input type="text" name="plateform" id="plateforms_value"/><br><input type="button" value="Save" id="save_plateform"/></div><div id="CustomerDetails" class="hide"><label id="Customername">Customer Name :</label><input type="text" name="cust_name" id="customer_name"/><br><label id="Customercode">Customer Code :</label><input type="text" name="cust_code" id="customer_code"/><br><label id="Branchcode">Branch Code :</label><input type="text" name="branch_code" id="customer_branch"/><br><label id="Providercode">Provider Code :</label><input type="text" name="provider_code" id="cust_provider_code"/><br><label id="CustomerAddress">Customer Address :</label><input type="text" name="cust_address" id="customer_address"/><br><input type="button" value="Save" id="save_customer"/></div><div id="SiteDetails" class="hide"><label id="sitename">site Name :</label><input type="text" name="site_name" id="site_name"/><br><label id="siteaddress">site Address :</label><input type="text" name="site_address" id="site_address"/><br><input type="button" value="Save" id="save_site"/></div><div id="ActorDetails" class="hide"><label id="actortype">Actor Type :</label><input type="text" name="actor_type" id="actor_type"/><br><label id="actoremail">Actor Email :</label><input type="text" name="actor_email" id="actor_email"/><br><label id="actoremail">Site :</label><input type="text" name="actor_site" id="actor_site"/><br><input type="button" value="Save" id="save_actorlist"/></div>';
};
if (goog.DEBUG) {
  admin.manager.AdminDetailView.soyTemplateName = 'admin.manager.AdminDetailView';
}
