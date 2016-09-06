// This file was automatically generated from admindetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace admin.manager.
 */

if (typeof admin == 'undefined') { var admin = {}; }
if (typeof admin.manager == 'undefined') { admin.manager = {}; }


admin.manager.AdminDetailView = function(opt_data, opt_ignored) {
  return '<div class="col-md-12"><div class="panel-group" role="tablist"><div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title">Application Configuration</h4></div><div class="panel-collapse collapse in" role="tabpanel"><div class="panel-body" id="config-panel"><ol class="breadcrumb hide" id="configbreadcrumb"><li><a id="showtableslist" style="cursor:pointer">App Configuration</a></li><li class="active">Data</li></ol><ul class="list-unstyled row configset"><li class="col-md-4"><a id="configactor-btn"><img src="../resources/images/formicon.png" />List of Actors</a></li><li class="col-md-4"><a id="incoterms-btn"><img src="../resources/images/formicon.png" />List of Incoterms</a></li><li class="col-md-4"><a id="clients-btn"><img src="../resources/images/formicon.png" />List of Clients</a></li><li class="col-md-4"><a id="prototypists-btn"><img src="../resources/images/formicon.png" />List of Prototypists</a></li><li class="col-md-4"><a id="platforms-btn"><img src="../resources/images/formicon.png" />List of Platforms</a></li><li class="col-md-4"><a id="producttype-btn"><img src="../resources/images/formicon.png" />List of Products Types</a></li><li class="col-md-4 "><a id="technologie-btn"><img src="../resources/images/formicon.png" />List of Technologies</a></li><li class="col-md-4 "><a id="rdlead-btn"><img src="../resources/images/formicon.png" />List of R & D Leaders</a></li><li class="col-md-4" ><a id="clientadd-btn"><img src="../resources/images/formicon.png" />List of Clients and Labo Addresses</a></li><li class="col-md-4" ><a id="allocation-btn"><img src="../resources/images/formicon.png" />List of Allocation of Turnover</a></li><li class="col-md-4"><a id="locations-btn"><img src="../resources/images/formicon.png" />List of Locations</a></li><li class="col-md-4"><a id="sites-btn"><img src="../resources/images/formicon.png" />List of Sites</a></li><li class="col-md-4 hide"><a id="wflowconfig-btn"><img src="../resources/images/formicon.png" />Workflow Configuration</a></li><li class="col-md-4 hide"><a id="adminwiew-btn"><img src="../resources/images/formicon.png" />Administrator view</a></li><li class="col-md-4 hide"><a id="deldraft-btn"><img src="../resources/images/formicon.png" />Delete draft requests</a></li><li class="col-md-4 hide"><a id="restart-btn"><img src="../resources/images/formicon.png" />Restart process</a></li><li class="col-md-4 hide"><a id="timeperiod-btn"><img src="../resources/images/formicon.png" />Define a delegate for a period of time</a></li></ul><article class="tablelistview hide" id="actor-article"><ul class="nav nav-pills comnav-pills" id="addActorUL" style="margin-bottom: 15px;"><li class="active" data-attr="MEP Study"><a href="#mepstudy-subtab" data-toggle="tab">MEP Study</a></li><li data-attr="Quality"><a href="#quality-subtab" data-toggle="tab">Quality</a></li><li data-attr="Proto workshop"><a href="#proto-subtab" data-toggle="tab">Proto workshop</a></li><li data-attr="Control management"><a href="#manage-subtab" data-toggle="tab">Control management</a></li><li data-attr="FO Trade"><a href="#trade-subtab" data-toggle="tab">FO Trade</a></li><li data-attr="ADV"><a href="#adv-subtab" data-toggle="tab">ADV</a></li><li data-attr="Project Manager"><a href="#project-subtab" data-toggle="tab">Project Manager</a></li></ul><div class="tab-content"><div role="tabpanel" class="tab-pane active" id="mepstudy-subtab"><table class="table table-hover" id="actorsub-table"><thead><tr><th>Actor Email</th><th>Actor Type</th><th>Site</th></tr></thead><tfoot id="actorlisttable_footer"><tr><th>Actor Email</th><th>Actor Type</th><th>Site</th></tr></tfoot></table></div></div></article><article class=" tablelistview hide" id="incoterms-article"><table class="table table-hover" id="incoterms-table"><thead><tr><th>Incoterms</th><th>Info</th></tr></thead></table></article><article class="tablelistview hide" id="clients-article"><table class="table table-hover" id="clients-table"><thead><tr><th>Client name</th><th>Customer Code</th><th>Branch Code</th><th>Vendor Code</th><th>Final delivery address</th></tr></thead></table></article><article class="tablelistview hide" id="prototypists-article"><table class="table table-hover" id="protypistsub-table"><thead><tr><th>Prototypists</th></tr></thead></table></article><article class="tablelistview hide" id="platforms-article"><table class="table table-hover" id="platformssub-table"><thead><tr><th>Platforms</th></tr></thead></table></article><article class="tablelistview hide" id="productstypes-article"><table class="table table-hover" id="productstypessub-table"><thead><tr><th>Product Type</th></tr></thead></table></article><article class="tablelistview hide" id="technologies-article"><table class="table table-hover" id="technolosub-table"><thead><tr><th>Technology</th><th>Product Type</th></tr></thead></table></article><article class="tablelistview hide" id="rdlead-article"><table class="table table-hover" id="rdleadtsub-table"><thead><tr><th>Name of the responsible R&D</th></tr></thead></table></article><article class="tablelistview hide" id="clientadd-article"><table class="table table-hover" id="clientaddsub-table"><thead><tr><th>Client Name</th><th>Labo Address</th></tr></thead></table></article><article class="tablelistview hide" id="allocationturnover-article"><table class="table table-hover" id="allocationturnoversub-table"><thead><tr><th>Allocation of turnover</th></tr></thead></table></article><article class="tablelistview hide" id="locations-article"><table class="table table-hover" id="locationsub-table"><thead><tr><th>Place</th></tr></thead></table></article><article class="tablelistview hide" id="sites-article"><table class="table table-hover" id="sitesub-table"><thead><tr><th>Site Name</th><th>Site Address</th></tr></thead></table></article><article class="tablelistview hide" id="workconfig-article"></article><article class="tablelistview hide" id="adminview-article"></article><article class="tablelistview hide" id="deldraft-article"></article><article class="tablelistview hide" id="restartpro-article"></article><article class="tablelistview hide" id="timeperiod-article"></article></div></div></div></div></div><!-- Actor Modal --><div class="modal fade" id="actor-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">New Actor</h4></div><div class="modal-body" id="actor_modal_body"><form role="form"><div class="form-group"><label id="actorLabel">MEP Study</label><div class="input-group"><input type="text" data-required="yes" data-type="email" class="form-control" id="actor_email" placeholder="firstname.lastname@valeo.com"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group"><label>Site</label><select class="selectpicker" data-required="yes" data-live-search="true" data-type="text" id="actor_site" data-width="100%" title="  "></select></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_actor">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Incoterms Modal --><div class="modal fade" id="incoterms-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">New Incoterms</h4></div><div class="modal-body" id="incoterms_modal_body"><form role="form"><div class="form-group"><label>Incoterms</label><input type="text" class="form-control" data-required="yes" data-type="text" placeholder="" id="incoterms_value"></div><div class="form-group"><label>Site</label><textarea class="form-control" rows="3" data-required="yes" data-type="text" id="incoterms_info"></textarea></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_incoterms">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Clients Modal --><div class="modal fade" id="clients-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">New Client</h4></div><div class="modal-body" id="customers_modal_body"><form role="form"><div class="form-group"><label>Client name</label><input type="text" class="form-control" placeholder="" data-required="yes" data-type="text" id="customer_name"></div><div class="form-group"><label>Customer Code</label><input type="text" class="form-control" placeholder="" data-required="yes" data-type="text" id="customer_code"></div><div class="form-group"><label>Branch Code</label><input type="text" class="form-control" placeholder="" data-required="yes" data-type="text" id="customer_branch"></div><div class="form-group"><label>Vendor Code</label><input type="text" class="form-control" placeholder="" data-required="yes" data-type="text" id="cust_provider_code"></div><div class="form-group"><label>Final delivery address</label><textarea class="form-control" rows="3" data-required="yes" data-type="text" id="customer_address"></textarea></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_customer">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Platform Modal --><div class="modal fade" id="platform-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">New Platform</h4></div><div class="modal-body" id="platform_modal_body"><form role="form"><div class="form-group"><label>Platform</label><input type="text" class="form-control" placeholder="" id="plateforms_value" data-required="yes" data-type="text"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_plateform">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- location Modal --><div class="modal fade" id="location-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">New Place</h4></div><div class="modal-body" id="places_modal_body"><form role="form"><div class="form-group"><label>Place</label><input type="text" class="form-control" placeholder="" id="places" data-required="yes" data-type="text"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_places">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Product Type Modal --><div class="modal fade" id="producttype-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">New Product Type</h4></div><div class="modal-body" id="producttype_modal_body"><form role="form"><div class="form-group"><label>Product Type</label><input type="text" class="form-control" placeholder="" id="producttype" data-required="yes" data-type="text"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_producttype">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Prototypists Type Modal --><div class="modal fade" id="prototypists-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">New Product Type</h4></div><div class="modal-body" id="Prototypists_modal_body"><form role="form"><div class="form-group"><label>Prototypists</label><input type="text" class="form-control" placeholder="" id="prototypists" data-required="yes" data-type="text"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_prototypists">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Techonology Type Modal --><div class="modal fade" id="technology-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Technology</h4></div><div class="modal-body" id="technology_modal_body"><form role="form"><div class="form-group"><label>Product Type</label><input type="text" class="form-control" placeholder="" id="prod_type_technology" data-required="yes" data-type="text"></div><div class="form-group"><label>Technology</label><input type="text" class="form-control" placeholder="" id="technology" data-required="yes" data-type="text"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_technology">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- R and D Type Modal --><div class="modal fade" id="randD-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">R and D</h4></div><div class="modal-body" id="randD_modal_body"><form role="form"><div class="form-group"><label>Name of the responsible R&D</label><input type="text" class="form-control" placeholder="" id="randD" data-required="yes" data-type="text"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_randD">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Allocation on Turnover Type Modal --><div class="modal fade" id="allocation-turnover-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Allocation of TurnOver</h4></div><div class="modal-body" id="allocation_modal_body"><form role="form"><div class="form-group"><label>Allocation of turnover</label><input type="text" class="form-control" placeholder="" id="allocationturnover" data-required="yes" data-type="text"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_allocation">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- ClientLabo Type Modal --><div class="modal fade" id="clientLabo-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Client and Labo Address</h4></div><div class="modal-body" id="clientlabo_modal_body"><form role="form"><div class="form-group"><label>Client </label><input type="text" class="form-control" placeholder="" id="clientName" data-required="yes" data-type="text"></div><div class="form-group"><label>Labo Address </label><input type="textarea" class="form-control" placeholder="" id="laboaddress" data-required="yes" data-type="text"></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_clientlabo">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div><!-- Site Modal --><div class="modal fade" id="site-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">New Site</h4></div><div class="modal-body" id="sites_modal_body"><form role="form"><div class="form-group"><label>Site Name</label><input type="text" class="form-control" placeholder="" id="site_name" data-required="yes" data-type="text"></div><div class="form-group"><label>Site Address</label><textarea class="form-control" rows="3" data-required="yes" id="site_address" data-type="text"></textarea></div></form></div><div class="modal-footer"><button type="button" class="btn btn-success" id="save_site">Save changes</button><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
};
if (goog.DEBUG) {
  admin.manager.AdminDetailView.soyTemplateName = 'admin.manager.AdminDetailView';
}
