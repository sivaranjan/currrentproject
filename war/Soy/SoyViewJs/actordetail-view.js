// This file was automatically generated from actordetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace actor.manager.
 */

if (typeof actor == 'undefined') { var actor = {}; }
if (typeof actor.manager == 'undefined') { actor.manager = {}; }


actor.manager.ActorDetailView = function(opt_data, opt_ignored) {
  return '<div class="panel-heading" role="tab" id="headingThree"><h4 class="panel-title">' + soy.$$escapeHtml(opt_data.paramValue['Configure Actors']) + '<a class="collapsed pull-right" role="button"><i class="fa fa-angle-down" aria-hidden="true"></i></a></h4></div><div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree"><div class="panel-body"><form role="form"><div class="row"><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Requester']) + '</label><div class="input-group"><input type="text" class="form-control disabled" readonly aria-describedby="basic-addon2"><span class="input-group-addon" id="basic-addon2"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['MEP Study']) + '<span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Quality']) + '<span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Proto workshop']) + '<span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Control management']) + '<span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['FO Trade']) + '<span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['ADV']) + '<span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Project manager']) + '<span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-12"><button type="button" id="backactorbtn" data-back="customers" class="btn btn-default">' + soy.$$escapeHtml(opt_data.paramValue['Back']) + '</button><button type="button" id="saveorderbtn" class="btn btn-default">Save order</button></div></div></form></div></div>';
};
if (goog.DEBUG) {
  actor.manager.ActorDetailView.soyTemplateName = 'actor.manager.ActorDetailView';
}
