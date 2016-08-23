// This file was automatically generated from componentdetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace component.manager.
 */

if (typeof component == 'undefined') { var component = {}; }
if (typeof component.manager == 'undefined') { component.manager = {}; }


component.manager.ComponentDetailView = function(opt_data, opt_ignored) {
  return '<div class="col-md-12"><form role="form"><div class="panel panel-default col-md-12"><div class="row"><h3 class="col-md-12" style="font-size: 16px;font-weight: normal;padding-bottom: 20px;border-bottom: 1px solid #eee;margin-bottom: 15px;">Component Details</h3><div class="form-group col-md-6"><label for="name">N<sup>&#8728;</sup> Prototype Order</label><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label for="name">Order Type</label><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label for="name">Customer order N<sup>&#8728;</sup></label><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label for="name">Customer Refernce</label><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label for="name">Product Type</label><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label for="name">Component ID</label><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label for="name">Component Status</label><div class="input-group"><input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></div></div></form></div><div class="col-md-12"><!-- Nav tabs --><ul class="nav nav-tabs" role="tablist"><li role="presentation" class="active"><a href="#component-subtab" aria-controls="component-subtab" role="tab" data-toggle="tab">Component</a></li><li role="presentation"><a href="#execution-subtab" aria-controls="execution-subtab" role="tab" data-toggle="tab">Execution</a></li></ul><!-- Tab panes --><div class="tab-content"><div role="tabpanel" class="tab-pane active" id="component-subtab"><div class="panel-group" id="accordion-subtab" role="tablist" aria-multiselectable="true"><div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-subtab" href="#collapseOne-subtab" aria-expanded="true" aria-controls="collapseOne-subtab">Component Description</a></h4></div><div id="collapseOne-subtab" class="panel-collapse collapse in" role="tabpanel"><div class="panel-body"><form><div class="row"><div class="form-group col-md-6"><label for="name">Customer reference <span class="text-danger">*</span></label><input type="text" class="form-control" /></div><div class="form-group col-md-6"><label for="name">Product Specification <span class="text-danger">*</span></label><textarea class="form-control" rows="3"></textarea></div><div class="form-group col-md-6"><label for="name">Product Type <span class="text-danger">*</span></label><select class="form-control"><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option></select></div><div class="form-group col-md-6"><label for="name">Unit selling Price (&#x20AC;)</label><input type="text" class="form-control" /></div><div class="form-group col-md-6"><label>Direct delivery to the customer? <span class="text-danger">*</span></label><div><label class="radio-inline"><input type="radio" name="optradio1" style="margin-top: 1px;">Yes</label><label class="radio-inline"><input type="radio" name="optradio1" style="margin-top: 1px;">No</label></div></div><div class="form-group col-md-6"><label for="name">Customer</label><select class="form-control"><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option></select></div><div class="form-group col-md-6"><label for="name">Labo address or Other</label><textarea class="form-control" rows="3"></textarea></div><div class="form-group col-md-6"><label for="name">Comment</label><textarea class="form-control" rows="3"></textarea></div></div></form><hr/><h3 class="panel-heading" style="font-size: 16px;font-weight: normal;margin-bottom: 15px;background-color: #E6E6E6;">Planning Customer Devlivery</h3><table  class="table table-hover responsive nowrap" id="planningcust-table"><thead><tr><th>Quantity</th><th>Date</th><th>Comment</th><th>Edit</th><th>Delete</th><th>&nbsp;</th></tr></thead><tbody><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></button></td><td class="deleteopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></button></td><td class="deleteopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></button></td><td class="deleteopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></button></td><td class="deleteopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-pencil"></i></button></td><td class="deleteopt"><button type="button" class="btn btn-default"><i class="glyphicon glyphicon-trash"></i></button></td><td>&nbsp;</td></tr></tbody></table><div class=""><form role="form"><div class="form-group col-md-6"><label>Total Quantity</label><input type="text" class="form-control" placeholder="Total Quantity" /></div><div class="form-group col-md-6"><label>Total Amount</label><input type="text" class="form-control" placeholder="Total Amount" /></div></form></div></div></div></div><div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion-subtab" href="#collapseTwo-subtab" aria-expanded="false" aria-controls="collapseTwo-subtab">Technical Definition</a></h4></div><div id="collapseTwo-subtab" class="panel-collapse collapse" role="tabpanel"><div class="panel-body"><form role="form"><div class="row"><div class="form-group col-md-6"><label>Project Manager</label><div class="input-group"><input type="text" class="form-control" placeholder=""><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label>R&D Manager <span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>Project Phase <span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>Valeo Reference <span class="text-danger">*</span></label><div class="input-group"><input type="text" class="form-control" placeholder=""><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div><div class="form-group col-md-6"><label>Technology <span class="text-danger">*</span></label><select class="form-control"><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-6"><label>WBS/OI code</label><input type="text" class="form-control" placeholder=""></div><div class="form-group col-md-6"><label>BE code</label><input type="text" class="form-control" placeholder=""></div><div class="form-group col-md-6"><label>MIP/PWA code</label><input type="text" class="form-control" placeholder=""></div><div class="form-group col-md-6"><label>Validation Process</label><div><label class="radio-inline"><input type="radio" name="validprocess-radio" style="margin-top: 1px;">Yes</label><label class="radio-inline"><input type="radio" name="validprocess-radio" style="margin-top: 1px;">No</label></div></div><div class="form-group col-md-6"><label>Plan of laboratory tests</label><div><label class="radio-inline"><input type="radio" name="planlab-radio" style="margin-top: 1px;">Yes</label><label class="radio-inline"><input type="radio" name="planlab-radio" style="margin-top: 1px;">No</label></div></div></div></form></div></div></div><div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion-subtab" href="#collapseThree-subtab" aria-expanded="false" aria-controls="collapseThree-subtab">Collapsible Group Item #3</a></h4></div><div id="collapseThree-subtab" class="panel-collapse collapse" role="tabpanel"><div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</div></div></div><div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion-subtab" href="#collapseFour-subtab" aria-expanded="false" aria-controls="collapseFour-subtab">Collapsible Group Item #3</a></h4></div><div id="collapseFour-subtab" class="panel-collapse collapse" role="tabpanel"><div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</div></div></div><div class="panel panel-default"><div class="panel-heading" role="tab"><h4 class="panel-title"><a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion-subtab" href="#collapseFive-subtab" aria-expanded="false" aria-controls="collapseFive-subtab">Collapsible Group Item #3</a></h4></div><div id="collapseFive-subtab" class="panel-collapse collapse" role="tabpanel"><div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.</div></div></div></div></div><div role="tabpanel" class="tab-pane" id="execution-subtab">profile</div></div></div>';
};
if (goog.DEBUG) {
  component.manager.ComponentDetailView.soyTemplateName = 'component.manager.ComponentDetailView';
}
