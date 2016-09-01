// This file was automatically generated from componentdetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace component.manager.
 */

if (typeof component == 'undefined') { var component = {}; }
if (typeof component.manager == 'undefined') { component.manager = {}; }


component.manager.ComponentDetailView = function(opt_data, opt_ignored) {
  return '<div class="col-md-12"><form role="form"><div class="panel panel-default col-md-12" style="padding: 10px 15px;"><div class="row"><div class="panel-heading col-md-12"><h2 style="color: #97D045;margin-top: 0;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">' + soy.$$escapeHtml(opt_data.paramValue['Order Details']) + '</h2></div><div class="form-group col-md-3"><label for="name">N<sup>&#8728;</sup>  ' + soy.$$escapeHtml(opt_data.paramValue['Prototype Order']) + '</label><input type="text" class="form-control input-sm" disabled readonly></div><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Order type']) + '</label><input type="text" class="form-control input-sm" disabled readonly></div><div class="form-group col-md-3"><label for="name" id="customerorderN0label">' + soy.$$escapeHtml(opt_data.paramValue['Customer order N0']) + '</label><input id="customerorderN0" type="text" class="form-control input-sm" disabled readonly></div><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Customer reference']) + '</label><input type="text" class="form-control input-sm" disabled readonly></div><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Product type']) + '</label><input type="text" class="form-control input-sm" disabled readonly></div><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Component ID']) + '</label><input type="text" class="form-control input-sm" disabled readonly></div><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Component status']) + '</label><input type="text" class="form-control input-sm" disabled readonly></div></div><div class="row" style="margin-top: 15px;"><!-- Nav tabs --><ul class="nav nav-tabs comnav-tabs orderstabcol" role="tablist"><li role="presentation" class="active"><a href="#component-subtab" aria-controls="component-subtab" role="tab" data-toggle="tab">' + soy.$$escapeHtml(opt_data.paramValue['Component']) + '</a></li><li role="presentation"><a href="#execution-subtab" aria-controls="execution-subtab" role="tab" data-toggle="tab">' + soy.$$escapeHtml(opt_data.paramValue['Execution']) + '</a></li></ul><!-- Tab panes --><div class="tab-content"><div role="tabpanel" class="tab-pane active" id="component-subtab"><div class="tab-content"><ul class="nav nav-pills comnav-pills"><li role="presentation" class="active"><a href="#componentdesc-subtab" data-toggle="tab">' + soy.$$escapeHtml(opt_data.paramValue['Component description']) + '</a></li><li role="presentation"><a href="#techdef-subtab" data-toggle="tab">' + soy.$$escapeHtml(opt_data.paramValue['Technical definition']) + '</a></li><li role="presentation"><a href="#processvalid-subtab" data-toggle="tab">' + soy.$$escapeHtml(opt_data.paramValue['Process validation']) + '</a></li><li role="presentation"><a href="#costdelay-subtab" data-toggle="tab">' + soy.$$escapeHtml(opt_data.paramValue['Estimation Costs and Delays']) + '</a></li><li role="presentation"><a href="#qualdel-subtab" data-toggle="tab">' + soy.$$escapeHtml(opt_data.paramValue['Qualities deliverables']) + '</a></li></ul><div role="tabpanel" class="tab-pane active" id="componentdesc-subtab"><div class="row"><div class="col-md-12" style="padding-top: 15px;"><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Customer reference']) + ' <span class="text-danger">*</span></label><input type="text" class="form-control input-sm" data-required="yes" data-type="text"/></div><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Product type']) + ' <span class="text-danger">*</span></label><select class="selectpicker" data-width="100%" title=" " data-required="yes" data-type="text"><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option></select></div><div class="form-group col-md-3"><label for="name" id="unitsellingpricelabel">' + soy.$$escapeHtml(opt_data.paramValue['Unit selling price']) + '(&#x20AC;)</label><input type="text" class="form-control input-sm" id="unitsellingprice"/></div><div class="form-group col-md-3 hide" id="customerdiv"><label for="name" id="customerlabel">' + soy.$$escapeHtml(opt_data.paramValue['Customer']) + '</label><select class="selectpicker" data-width="100%" title=" " id="customer"><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option><option>option</option></select></div><div class="form-group col-md-3"><label id="Direct_delivery_to_customer">' + soy.$$escapeHtml(opt_data.paramValue['Direct delivery to the customer']) + '? <span class="text-danger">*</span></label><div id="delivery"><label class="radio-inline"><input type="radio" name="optradio1" style="margin-top: 1px;" value="Yes" >' + soy.$$escapeHtml(opt_data.paramValue['Yes']) + '</label><label class="radio-inline"><input type="radio" name="optradio1" style="margin-top: 1px;" value="No" >' + soy.$$escapeHtml(opt_data.paramValue['No']) + '</label></div></div><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Product specification']) + ' <span class="text-danger">*</span></label><textarea class="form-control" style="height: 65px;resize: none;" data-required="yes" data-type="text"></textarea></div><div class="form-group col-md-3"><label for="name" class="hide" id="labolabel">' + soy.$$escapeHtml(opt_data.paramValue['Labo address or other']) + '</label><textarea class="form-control hide" style="height: 65px;resize: none;" id="laboaddress"></textarea></div><div class="form-group col-md-3"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Comment']) + '</label><textarea class="form-control" style="height: 65px;resize: none;"></textarea></div></div></div><div class="panel-heading col-md-12" role="tab"><h2 style="color: #97D045;margin-top: 0;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">' + soy.$$escapeHtml(opt_data.paramValue['Planning customer delivery']) + '</h2></div><div class="col-md-12"><table  class="table table-hover responsive nowrap" id="planningcust-table"><thead><tr><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Date']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Comment']) + '</th><th class="editopt">' + soy.$$escapeHtml(opt_data.paramValue['Edit']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Delete']) + '</th><th>&nbsp;</th></tr></thead><tbody><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr></tbody></table></div><div class=""><form role="form"><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Total Quantity']) + '</label><input type="text" class="form-control input-sm" disabled readonly/></div><div class="form-group col-md-6"><label id="totalamountlabel">' + soy.$$escapeHtml(opt_data.paramValue['Total amount']) + '</label><input type="text" class="form-control input-sm" disabled readonly id="totalamount"/></div></form></div></div><div role="tabpanel" class="tab-pane " id="techdef-subtab"><div class="row"><div class="col-md-12" style="padding-top: 15px;"><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['Project manager']) + '</label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['R&D manager']) + ' <span class="text-danger">*</span></label><select class="selectpicker" data-width="100%" title=" "><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['Project phase']) + ' <span class="text-danger">*</span></label><select class="selectpicker" data-width="100%" title=" "><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['Valeo reference']) + ' <span class="text-danger">*</span></label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['Technology']) + ' <span class="text-danger">*</span></label><select class="selectpicker" data-width="100%" title=" "><option>1</option><option>2</option><option>3</option><option>4</option></select></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['WBS / OI code']) + '</label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['BE code']) + '</label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['MIP/PWA code']) + '</label><input type="text" class="form-control input-sm" placeholder=""></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['Validation process']) + '</label><div><label class="radio-inline"><input type="radio" name="validprocess-radio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['Yes']) + '</label><label class="radio-inline"><input type="radio" name="validprocess-radio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['No']) + '</label></div></div><div class="form-group col-md-3"><label>' + soy.$$escapeHtml(opt_data.paramValue['Plan of laboratory tests']) + '</label><div><label class="radio-inline"><input type="radio" name="planlab-radio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['Yes']) + '</label><label class="radio-inline"><input type="radio" name="planlab-radio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['No']) + '</label></div></div></div><div class="panel-heading col-md-12" role="tab"><h2 style="color: #97D045;margin-top: 0;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">Plan of Laboratory test</h2></div><div class="col-md-12"><table  class="table table-hover responsive nowrap" id="planninglab-table"><thead><tr><th>Quantity</th><th>Tests Type</th><th>Test Request N<sup>&#8728;</sup></th><th>ATP date delivery to Lab</th><th class="editopt">' + soy.$$escapeHtml(opt_data.paramValue['Edit']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Delete']) + '</th><th>&nbsp;</th></tr></thead><tbody><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr><tr><td>4</t><td>22 Aug 2016</td><td>Text test</td><td class="editopt"><button type="button"><i class="fa fa-pencil"></i></button></td><td class="deleteopt"><button type="button"><i class="fa fa-trash"></i></button></td><td>&nbsp;</td></tr></tbody></table></div></div></div><div role="tabpanel" class="tab-pane" id="processvalid-subtab">processvalid</div><div role="tabpanel" class="tab-pane" id="costdelay-subtab">costdelay</div><div role="tabpanel" class="tab-pane" id="qualdel-subtab">qualdel</div></div></div><div role="tabpanel" class="tab-pane" id="execution-subtab"><ul class="nav nav-pills comnav-pills"><li role="presentation" class="active"><a href="#">Home</a></li><li role="presentation"><a href="#">Profile</a></li><li role="presentation"><a href="#">Messages</a></li></ul></div></div></div></div></form></div>';
};
if (goog.DEBUG) {
  component.manager.ComponentDetailView.soyTemplateName = 'component.manager.ComponentDetailView';
}
