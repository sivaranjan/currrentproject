// This file was automatically generated from componentdetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace component.manager.
 */

if (typeof component == 'undefined') { var component = {}; }
if (typeof component.manager == 'undefined') { component.manager = {}; }


component.manager.ComponentDetailView = function(opt_data, opt_ignored) {
  return '<div class="col-md-12"><form role="form"><div class="panel panel-default col-md-12" style="padding: 10px 15px;"><div class="row"><div class="panel-heading col-md-12"><h2 style="color: #97D045;margin-top: 0;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">Order details</h2></div><div class="form-group col-md-3"><label for="name">N<sup>&#8728;</sup> Prototype Order</label><input type="text" class="form-control input-sm"></div><div class="form-group col-md-3"><label for="name">Order Type</label><input type="text" class="form-control input-sm"></div><div class="form-group col-md-3"><label for="name" id="customerorderN0label">Customer order N<sup>&#8728;</sup></label><input type="text" class="form-control input-sm" id="customerorderN0"></div><div class="form-group col-md-3"><label for="name">Customer Refernce</label><input type="text" class="form-control input-sm"></div><div class="form-group col-md-3"><label for="name">Product Type</label><input type="text" class="form-control input-sm"></div><div class="form-group col-md-3"><label for="name">Component ID</label><input type="text" class="form-control input-sm"></div><div class="form-group col-md-3"><label for="name">Component Status</label><input type="text" class="form-control input-sm"></div></div><div class="row" style="margin-top: 15px;"><!-- Nav tabs --><ul class="nav nav-tabs comnav-tabs orderstabcol" role="tablist"><li role="presentation" class="active"><a href="#component-subtab" aria-controls="component-subtab" role="tab" data-toggle="tab">Component</a></li><li role="presentation"><a href="#execution-subtab" aria-controls="execution-subtab" role="tab" data-toggle="tab">Execution</a></li></ul><!-- Tab panes --><div class="tab-content"><div role="tabpanel" class="tab-pane active" id="component-subtab"><div class="tab-content"><ul class="nav nav-pills comnav-pills"><li role="presentation" class="active"><a href="#componentdesc-subtab" data-toggle="tab">Component Description</a></li><li role="presentation"><a href="#techdef-subtab" data-toggle="tab">Technical Definition</a></li><li role="presentation"><a href="#processvalid-subtab" data-toggle="tab">Process Validation</a></li><li role="presentation"><a href="#costdelay-subtab" data-toggle="tab">Estimating Costs & Delays</a></li><li role="presentation"><a href="#qualdel-subtab" data-toggle="tab">Qualities Deliverables</a></li></ul><div role="tabpanel" class="tab-pane active" id="componentdesc-subtab"><div class="row"><div class="col-md-12" style="padding-top: 15px;"><div class="form-group col-md-3"><label for="name">Customer reference <span class="text-danger">*</span></label><input type="text" class="form-control input-sm" /></div><div class="form-group col-md-3"><label for="name">Product Type <span class="text-danger">*</span></label><select class="selectpicker" data-width="100%" title="Choose one of the following..."><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option></select></div><div class="form-group col-md-3"><label for="name" id="unitsellingpricelabel">Unit selling Price (&#x20AC;)</label><input type="text" class="form-control input-sm" id="unitsellingprice"/></div><div class="form-group col-md-3"><label for="name">Customer</label><select class="selectpicker" data-width="100%" title="Choose one of the following..."><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option></select></div><div class="form-group col-md-3"><label id="Direct delivery to the customer?">Direct delivery to the customer? <span class="text-danger">*</span></label><div id="delivery"><label class="radio-inline" ><input type="radio" name="optradio1" style="margin-top: 1px;" value="Yes" >Yes</label><label class="radio-inline" ><input type="radio" name="optradio1" style="margin-top: 1px; value="No" >No</label></div></div><div class="form-group col-md-3"><label for="name">Product Specification <span class="text-danger">*</span></label><textarea class="form-control" style="height: 65px;resize: none;"></textarea></div><div class="form-group col-md-3"><label for="name">Labo address or Other</label><textarea class="form-control" style="height: 65px;resize: none;"></textarea></div><div class="form-group col-md-3"><label for="name">Comment</label><textarea class="form-control" style="height: 65px;resize: none;"></textarea></div></div></div><div class="panel-heading col-md-12" role="tab"><h2 style="color: #97D045;margin-top: 0;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">Planning Customer Devlivery</h2></div><div class="col-md-12"><table  class="table table-hover responsive nowrap" id="planningcust-table"><thead><tr><th>Quantity</th><th>Date</th><th>Comment</th><th class="editopt">Edit</th><th>Delete</th><th>&nbsp;</th></tr></thead><tbody><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr></tbody></table></div><div class=""><form role="form"><div class="form-group col-md-6"><label>Total Quantity</label><input type="text" class="form-control input-sm" placeholder="Total Quantity" /></div><div class="form-group col-md-6"><label id="totalamountlabel">Total Amount</label><input type="text" class="form-control input-sm" placeholder="Total Amount" id="totalamount"/></div></form></div></div><div role="tabpanel" class="tab-pane " id="techdef-subtab"><div class="row"><div class="col-md-12" style="padding-top: 15px;"><div class="form-group col-md-3"><label>Project Manager</label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>R&D Manager <span class="text-danger">*</span></label><select class="selectpicker" data-width="100%" title="Choose one of the following..."><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-3"><label>Project Phase <span class="text-danger">*</span></label><select class="selectpicker" data-width="100%" title="Choose one of the following..."><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-3"><label>Valeo Reference <span class="text-danger">*</span></label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>Technology <span class="text-danger">*</span></label><select class="selectpicker" data-width="100%" title="Choose one of the following..."><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-3"><label>WBS/OI code</label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>BE code</label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>MIP/PWA code</label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>Validation Process</label><div><label class="radio-inline"><input type="radio" name="validprocess-radio" style="margin-top: 1px;">Yes</label><label class="radio-inline"><input type="radio" name="validprocess-radio" style="margin-top: 1px;">No</label></div></div><div class="form-group col-md-3"><label>Plan of laboratory tests</label><div><label class="radio-inline"><input type="radio" name="planlab-radio" style="margin-top: 1px;">Yes</label><label class="radio-inline"><input type="radio" name="planlab-radio" style="margin-top: 1px;">No</label></div></div></div></div></div><div role="tabpanel" class="tab-pane" id="processvalid-subtab">processvalid</div><div role="tabpanel" class="tab-pane" id="costdelay-subtab">costdelay</div><div role="tabpanel" class="tab-pane" id="qualdel-subtab">qualdel</div></div></div><div role="tabpanel" class="tab-pane" id="execution-subtab"><ul class="nav nav-pills comnav-pills"><li role="presentation" class="active"><a href="#">Home</a></li><li role="presentation"><a href="#">Profile</a></li><li role="presentation"><a href="#">Messages</a></li></ul></div></div></div></div></form></div>';
};
if (goog.DEBUG) {
  component.manager.ComponentDetailView.soyTemplateName = 'component.manager.ComponentDetailView';
}
