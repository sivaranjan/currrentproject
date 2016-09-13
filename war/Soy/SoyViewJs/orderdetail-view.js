// This file was automatically generated from orderdetail-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace order.manager.
 */

if (typeof order == 'undefined') { var order = {}; }
if (typeof order.manager == 'undefined') { order.manager = {}; }


order.manager.OrderDetailView = function(opt_data, opt_ignored) {
  return '<div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne"><div class="panel-body" style="border-top: 0;padding: 0 15px;"><form role="form"><div class="row"><div class="col-md-6"><div class="row" style="border-right: 1px solid #ddd;"><div class="panel-heading col-md-12" role="tab"><h2 style="color: #97D045;margin-top: 0;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">' + soy.$$escapeHtml(opt_data.paramValue['Order Detail']) + '</h2></div><div class="form-group col-md-6"><label for="name">N<sup>&#8728;</sup>  ' + soy.$$escapeHtml(opt_data.paramValue['Prototype Order']) + '<span class="text-danger">*</span></label><input type="text" ' + soy.$$escapeHtml(opt_data.editableconfig['no_prototype_order_txt']) + ' ' + soy.$$escapeHtml(opt_data.mandatoryconfig['no_prototype_order_txt']) + ' class="form-control input-sm"  id="No_Prototype_Order" ></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Order Status']) + '</label><input type="text" ' + soy.$$escapeHtml(opt_data.editableconfig['order_status_txt']) + ' ' + soy.$$escapeHtml(opt_data.mandatoryconfig['order_status_txt']) + ' class="form-control input-sm"  id="Order_Status"  aria-describedby="basic-addon2"></div><div class="form-group col-md-6 ' + soy.$$escapeHtml(opt_data.visibleconfig['geosite_txt']) + '"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Geosite']) + '<span class="text-danger">*</span></label><input type="text" id="Geosite" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['geosite_txt']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['geosite_txt']) + ' class="form-control input-sm"  ></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Site/Workshop Prototype']) + '<span class="text-danger">*</span></label><select class="selectpicker"   title=" " ' + soy.$$escapeHtml(opt_data.mandatoryconfig['site_workshop_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['site_workshop_drpdwn']) + ' id="Site_Workshop_Prototype" data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Proto Type']) + '<span class="text-danger">*</span></label><select class="selectpicker"  ' + soy.$$escapeHtml(opt_data.mandatoryconfig['prototype_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['proto_type_drpdwn']) + ' title=" " id="Proto_Type" data-width="100%"><option>P0</option><option>P1</option><option>P2</option></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Type of the prototype order']) + '<span class="text-danger">*</span></label><select class="selectpicker" ' + soy.$$escapeHtml(opt_data.editableconfig['type_of_the_prototype_order_drpdwn']) + '  title=" " ' + soy.$$escapeHtml(opt_data.mandatoryconfig['Type_of_the_Prototype_Order_drpdwn']) + ' id="Type_of_the_Prototype_Order" data-width="100%"><option>VENDU / SOLD</option><option>NON VENDU / NOT SOLD</option></select></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Date of the order']) + '</label><div class="input-group date"><input type="text" ' + soy.$$escapeHtml(opt_data.editableconfig['Date_of_the_order']) + ' id="Date_of_the_Order" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['Date_of_the_order']) + ' class="form-control input-sm"  ><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span></div></div><div class="form-group col-md-6 ' + soy.$$escapeHtml(opt_data.visibleconfig['total_order_amt_txt']) + '" id="totalorderamountdiv"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Total order amount']) + '(&#x20AC;)</label><input type="text" ' + soy.$$escapeHtml(opt_data.editableconfig['total_order_amt_txt']) + ' ' + soy.$$escapeHtml(opt_data.mandatoryconfig['total_order_amt_txt']) + ' class="form-control input-sm"  id="Total_Order_Amount" ></div><div class="form-group col-md-12" style="display: flex;margin-top: 15px;"><label class="checkbox-inline ' + soy.$$escapeHtml(opt_data.visibleconfig['pcc_label']) + '" id="pcclabel" style="flex-grow: 1;"><input class="' + soy.$$escapeHtml(opt_data.visibleconfig['pcc_checkbox']) + '" ' + soy.$$escapeHtml(opt_data.editableconfig['pcc_checkbox']) + ' type="checkbox" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['pcc_checkbox']) + ' id="pcccheckbox" name="optradio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['PCC']) + '</label><label class="checkbox-inline ' + soy.$$escapeHtml(opt_data.visibleconfig['openorder_label']) + '" id="openorderlabel" style="flex-grow: 1;"><input type="checkbox" ' + soy.$$escapeHtml(opt_data.editableconfig['openorder_checkbox']) + ' class="' + soy.$$escapeHtml(opt_data.visibleconfig['openorder_checkbox']) + '" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['openorder_checkbox']) + ' id="openordercheckbox" name="optradio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['Open Order']) + '</label><label class="checkbox-inline ' + soy.$$escapeHtml(opt_data.visibleconfig['frittage_label']) + '" id="frittagelabel" style="flex-grow: 1;"><input type="checkbox" class="' + soy.$$escapeHtml(opt_data.visibleconfig['frittage_checkbox']) + '" ' + soy.$$escapeHtml(opt_data.editableconfig['frittage_checkbox']) + ' id="frittagecheckbox" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['frittage_checkbox']) + ' name="optradio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['Frittage']) + '</label><label class="checkbox-inline ' + soy.$$escapeHtml(opt_data.visibleconfig['e52_label']) + '" id="e52label" style="flex-grow: 1;"><input type="checkbox" class="' + soy.$$escapeHtml(opt_data.visibleconfig['e52_checkbox']) + '" ' + soy.$$escapeHtml(opt_data.editableconfig['e52_checkbox']) + ' id="e52checkbox" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['e52_checkbox']) + ' name="optradio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['E52']) + '</label><label class="checkbox-inline ' + soy.$$escapeHtml(opt_data.visibleconfig['intrale_label']) + '" id="intralelabel" style="flex-grow: 1;"><input type="checkbox" class="' + soy.$$escapeHtml(opt_data.visibleconfig['intrale_checkbox']) + '" ' + soy.$$escapeHtml(opt_data.editableconfig['intrale_checkbox']) + ' ' + soy.$$escapeHtml(opt_data.mandatoryconfig['intrale_checkbox']) + ' id="intralecheckbox" name="optradio" style="margin-top: 1px;">' + soy.$$escapeHtml(opt_data.paramValue['IntraLE']) + '</label></div><div class="panel-heading col-md-12" role="tab" style="margin-top: 5px;"><h2 style="color: #97D045;margin-top: 0px;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">' + soy.$$escapeHtml(opt_data.paramValue['Actor']) + '</h2></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Requester']) + '</label><input type="text" ' + soy.$$escapeHtml(opt_data.editableconfig['requester_txt']) + ' ' + soy.$$escapeHtml(opt_data.mandatoryconfig['requester_txt']) + ' id="requester" class="form-control input-sm " ></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['MEP Study']) + ' <span class="text-danger ">*</span></label><select class="selectpicker" ' + soy.$$escapeHtml(opt_data.editableconfig['mep_study_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.mandatoryconfig['mep_study_drpdwn']) + ' id="mepstudy" title=" " data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Quality']) + ' <span class="text-danger">*</span></label><select class="selectpicker" ' + soy.$$escapeHtml(opt_data.editableconfig['quality_drpdwn']) + '  ' + soy.$$escapeHtml(opt_data.mandatoryconfig['quality_drpdwn']) + ' id="quality" title=" " data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Proto workshop']) + '<span class="text-danger">*</span></label><select class="selectpicker" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['proto_workshop_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['proto_workshop_drpdwn']) + '   id="protoworkshop" title=" " data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Control management']) + '<span class="text-danger">*</span></label><select class="selectpicker"  ' + soy.$$escapeHtml(opt_data.mandatoryconfig['control_management_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['control_management_drpdwn']) + '   id="controlmanagement" title=" " data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6 ' + soy.$$escapeHtml(opt_data.visibleconfig['fo_trade_drpdwn']) + '" id="fodiv"><label>' + soy.$$escapeHtml(opt_data.paramValue['FO Trade']) + '<span class="text-danger">*</span></label><select class="selectpicker" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['fo_trade_drpdwn']) + ' id="fotrade" title=" " ' + soy.$$escapeHtml(opt_data.editableconfig['fo_trade_drpdwn']) + ' data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6 ' + soy.$$escapeHtml(opt_data.visibleconfig['adv_drpdwn']) + '" id="advdiv"><label>' + soy.$$escapeHtml(opt_data.paramValue['ADV']) + '<span class="text-danger">*</span></label><select class="selectpicker" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['adv_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['adv_drpdwn']) + ' id="adv" title=" " data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6"><label>' + soy.$$escapeHtml(opt_data.paramValue['Project manager']) + '<span class="text-danger">*</span></label><select class="selectpicker" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['project_manager_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['project_manager_drpdwn']) + '  id="projmanager" title=" " data-width="100%" data-live-search="true"></select></div></div></div><div class="col-md-6"><div class="row"><div class="panel-heading col-md-12" role="tab"><h2 style="color: #97D045;margin-top: 0;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">' + soy.$$escapeHtml(opt_data.paramValue['Customer Detail']) + '</h2></div><div class="form-group col-md-6 ' + soy.$$escapeHtml(opt_data.visibleconfig['customer_order_no_txt']) + '" id="customer_order_no"><label for="name">N<sup>&#8728;</sup>  ' + soy.$$escapeHtml(opt_data.paramValue['N0 customer order']) + '<span class="text-danger">*</span></label><input type="text" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['customer_order_no_txt']) + '  class="form-control input-sm" id="no_customer_order" ' + soy.$$escapeHtml(opt_data.editableconfig['customer_order_no_txt']) + '></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Customer name']) + ' <span class="text-danger">*</span></label><select class="selectpicker"   title=" " ' + soy.$$escapeHtml(opt_data.mandatoryconfig['customer_name_drpdwn']) + ' id="Customer_Name" data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Customer code']) + '</label><input type="text" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['customer_code_txt']) + ' class="form-control input-sm" id="Customer_Code"></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Branch code']) + '</label><input type="text" ' + soy.$$escapeHtml(opt_data.editableconfig['branch_code_txt']) + ' ' + soy.$$escapeHtml(opt_data.mandatoryconfig['branch_code_txt']) + ' class="form-control input-sm" id="Branch_Code"></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Provider code']) + '</label><input type="text" class="form-control input-sm" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['provider_code_txt']) + ' id="Provider_Code"></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Plateform']) + ' <span class="text-danger">*</span></label><select class="selectpicker"   title=" " ' + soy.$$escapeHtml(opt_data.mandatoryconfig['plateform_drpdwn']) + ' id="Plateform" data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-3 ' + soy.$$escapeHtml(opt_data.visibleconfig['incoterms_drpdwn']) + '" id="incotermsdiv" style="padding-right: 5px;"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Incoterms']) + '</label><select class="selectpicker" title=" " ' + soy.$$escapeHtml(opt_data.mandatoryconfig['incoterms_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['incoterms_drpdwn']) + ' id="Incoterms" data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-3 ' + soy.$$escapeHtml(opt_data.visibleconfig['places_drpdwn']) + '" id="placediv" style="padding-left: 5px;"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Place']) + '</label><select class="selectpicker" title=" " ' + soy.$$escapeHtml(opt_data.mandatoryconfig['places_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['places_drpdwn']) + ' id="Place" data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Customer receiver name']) + '</label><input type="text" class="form-control input-sm" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['customer_receiver_txt']) + ' id="Customer_Receiver_Name" aria-describedby="basic-addon2"></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Customer receiver telephone']) + '</label><input type="text" class="form-control input-sm" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['customer_receiver_telephone_txt']) + ' id="Customer_Receiver_Telephone" aria-describedby="basic-addon2"></div><div class="form-group col-md-6 ' + soy.$$escapeHtml(opt_data.visibleconfig['allocation_of_turnover_drpdwn']) + '" id="allocationdiv"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Allocation of turnover']) + '</label><select class="selectpicker" title=" " ' + soy.$$escapeHtml(opt_data.mandatoryconfig['allocation_of_turnover_drpdwn']) + ' ' + soy.$$escapeHtml(opt_data.editableconfig['allocation_of_turnover_drpdwn']) + ' id="Allocation_of_turnover" data-width="100%" data-live-search="true"></select></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Final delivery Address']) + '</label><textarea class="form-control" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['final_delivery_address_txt']) + ' id="Final_Delivery_Address" style="height: 65px;resize: none;" id="comment"></textarea></div><div class="form-group col-md-6"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Additional address']) + '</label><textarea class="form-control" ' + soy.$$escapeHtml(opt_data.mandatoryconfig['additional_txt']) + '  id="Additional_Address" style="height: 65px;resize: none;" id="comment"></textarea></div><div class="form-group col-md-6 ' + soy.$$escapeHtml(opt_data.visibleconfig['site_address_txt']) + '"><label for="name">' + soy.$$escapeHtml(opt_data.paramValue['Site address']) + '</label><textarea class="form-control" ' + soy.$$escapeHtml(opt_data.editableconfig['site_address_txt']) + ' ' + soy.$$escapeHtml(opt_data.mandatoryconfig['site_address_txt']) + ' id="Site_Address" style="height: 65px;resize: none;" id="comment"></textarea></div><div class="form-group col-md-6 ' + soy.$$escapeHtml(opt_data.visibleconfig['customer_order_file']) + '" id="customer_order_file"><div class="panel panel-default"><div class="panel-heading" style="background: #fff;"><h4 class="panel-title"><label style="margin-bottom: 0;">' + soy.$$escapeHtml(opt_data.paramValue['Customer order']) + '</label> <button type="button" class="btn btn-default btn-sm pull-right" ' + soy.$$escapeHtml(opt_data.editableconfig['customer_order_file']) + 'style="margin-top: -5px;padding: 3px 5px;" data-toggle="modal" data-target="#orderattachment-modal"><i class="fa fa-paperclip" style="margin-right: 5px;"></i>' + soy.$$escapeHtml(opt_data.paramValue['Add Attach']) + '</button></h4></div><div class="panel-collapse collapse in"><div class="panel-body" style="min-height: 40px;padding: 5px;max-height: 115px;overflow: auto;"><ul class="list-unstyled attachcustomer" id="customer_order_list"><li><i class="fa fa-file-text-o" aria-hidden="true"></i><a>teste</a><a class="pull-right fa fa-cloud-download"></a><a class="pull-right fa fa-times"></a></li></ul></div></div></div></div></div></div><div class="col-md-12"><div class="panel-heading" style="padding: 10px 0px;"><h2 style="color: #97D045;margin-top: 0;font-size: 16px;margin-bottom: 0;font-weight: 500;border-bottom: 1px solid #eee;padding-bottom: 5px;">' + soy.$$escapeHtml(opt_data.paramValue['Component']) + '</h2></div><table class="table table-hover nowrap" id="compListTable"><thead><tr><th>' + soy.$$escapeHtml(opt_data.paramValue['Link']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Customer ref']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Product Designation']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Product Type']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['USP']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Total Quantity']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Total amount']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Component status']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity produced']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity App. Quality']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity Dfi']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity Delivered  to the customer']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Invoiced amount']) + '</th></tr></thead><tfoot id="complistTable_footer"><tr><th>' + soy.$$escapeHtml(opt_data.paramValue['Link']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Customer ref']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Product Designation']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Product Type']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['USP']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Total Quantity']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Total amount']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Component status']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity produced']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity App. Quality']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity Dfi']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Quantity Delivered  to the customer']) + '</th><th>' + soy.$$escapeHtml(opt_data.paramValue['Invoiced amount']) + '</th></tr></tfoot></table></div></div></form></div></div><div class="modal fade" id="orderattachment-modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title">Add Customer Order</h4></div><div class="modal-body"><form role="form"><div class="form-group"><label for="name">File name</label><input type="text" id="filenameholder" class="form-control" placeholder="File name" readonly></div><div class="form-group"><label for="name">File path</label><input type="text" id="filepath" class="form-control" placeholder="File path" readonly></div><div class="form-group"><label for="inputfile">Upload Attachments</label><input class="attachclass" type="file" id="UploadFile" name="UploadFile"><input type="hidden" name="hiddenname" id="hiddenname" value="" style="display: none;"><input type="hidden" name="hiddenredid" id="hiddenredid" value="" style="display: none;"><input type="hidden" name="hiddenhost" id="hiddenhost"  style="display: none;"></div><br><!-- <div class="form-group" id="revisioncommentdiv" style="display:none"><label for="name">Revision Comment</label><input type="text" id="revisioncomment" class="form-control" id="name" placeholder="Revision Comment"></div> --><div class="form-group"><label for="name">Title*</label><input type="text" class="form-control attachclass" id="file_Title" placeholder="Title"></div><div class="form-group"><label for="usr">Description</label><textarea class="form-control attachclass" name="file_Description" rows="5" id="file_Description" placeholder="Description"></textarea></div><br><div class="col-sm-6" id="createdbydiv" style="display:none"><label for="inputfile" id="createdby">Created by </label><br><br><label for="inputfile" id="createdon">Created On</label><br><br></div><div class="col-sm-6" id="modifiedbydiv" style="display:none"><label for="inputfile" id="modifiedby">Last Modified by</label><br><br><label for="inputfile" id="modifiedon">Last Modified on</label><br><br></div></form></div><div class="modal-footer"><button type="button" id="uploadattachfilebtn" class="btn btn-success">Save changes</button><button id="saveandaddanother" style="display:none" type="button" class="btn btn-success"><i class="fa fa-floppy-o"></i><span>&nbsp;&nbsp; Save and Add Another</span></button><button id="updateattachment" style="display:none" type="button" class="btn btn-success"><i class="fa fa-floppy-o"></i><span>&nbsp;&nbsp; Update</span></button><button type="button" id="cancelattach" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';
};
if (goog.DEBUG) {
  order.manager.OrderDetailView.soyTemplateName = 'order.manager.OrderDetailView';
}
