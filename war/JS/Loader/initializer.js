var showVoiceBox = (function()
{
    return {
        configure: function(msg, timeoutlimit)
        {
            $('#statusmsg').html(msg);
            $('#statusLoader').removeClass('hide');
            $('#statusLoader .voicebox-content').addClass('in');
            if (timeoutlimit != undefined && timeoutlimit != '')
            {
                setTimeout(function()
                {
                    $('#statusLoader .voicebox-content').removeClass('in');
                }, timeoutlimit);
            }
        },
    };
})();
var Do = (function()
{
	return {
		setLanguageButton : function(languageChanged,callback)
		{
			   window.language = languageChanged;
			   if (languageChanged == "EN")
			   {
			      $(".language-dropdown:first-child").html('<img src="../statics/images/en.png"> EN <span class="caret"></span>');
			   }
			   else
			   {
			      $(".language-dropdown:first-child").html('<img src="../statics/images/fr.png"> FR <span class="caret"></span>');
			   }
			   $(".language-dropdown:first-child").val(languageChanged);
			   Do.validateAndDoCallback(callback);
		},
		validateAndDoCallback : function(callback)
		{
			   if (typeof callback === "function")
		       {
				   callback();
		       }
		},
		BackboneEncode	:   function(formValue)
		{
		      //return encodeURIComponent($.trim(formValue));
			  return $.trim(formValue);
		},
	};
})();

var currentPage = (function()
{
    return {
        get: function()
        {
            return document.URL.split("#")[1];
        },
    };
})();

var loader = (function()
{
	return {
		 show: function()
		 {
			 $('#pleasewait').modal('show');
		 },
		 hide: function()
		 {
			 $('#pleasewait').modal('hide');
		 },
	};
})();

var Build = (function()
{
	return {
		 attachmentModal: function()
		 {
			var modalHtml = '<div class="modal-dialog" role="document">'+
						 	'<div class="modal-content">'+
						 		'<div class="modal-header">'+
						 			'<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
						 				'<h4 class="modal-title" id="attachmenth4">Add Customer Order</h4>'+
						 		'</div>'+
							 	'<div class="modal-body">'+
							 		'<form role="form">'+
							 			'<div class="row">'+
							 				'<div class="col-md-6">'+
							 					'<h5><b style="color: #97d045;">Attachment Details</b></h5>'+
							 						'<div class="form-group" style="margin-bottom: 20px;">'+
							 							'<label for="name">File name</label>'+
							 								'<input type="text" id="filenameholder" class="form-control input-sm" readonly="">'+
							 						'</div>'+
													'<div class="form-group hide">'+
														'<label for="name">File path</label>'+
														'<input type="text" id="filepath" class="form-control" readonly="">'+
													'</div>'+
													'<div class="form-group">'+
														'<label for="inputfile">Upload Attachments</label>'+
														'<input class="attachclass" type="file" id="UploadFile" name="UploadFile">'+
													'</div>'+
													'<div class="form-group hide" id="filedownloadarea" style="margin-top: 17px;">'+
														'<label for="name">Download File : </label>'+
															'<a class="ellipsis" href="" id="filedownloadlink" style="text-decoration: initial;">'+
															'</a>'+
													'</div>'+
													'<div class="form-group hide" id="revisioncomment">'+
														'<label for="usr">Revision Comment</label>'+
														'<textarea class="form-control attachclass"  rows="3" id="revision_comment" style="resize: none;"></textarea>'+
													'</div>'+
											'</div>'+
										  '<div class="col-md-6" style="border-left: 1px solid #eee;">'+
										  	  '<h5><b style="color: #97d045;">Additional Details</b></h5>'+
										  	  	'<div class="form-group" style="margin-bottom: 20px;">'+
										  	  		'<label for="name">Title*</label>'+
										  	  		'<input type="text" class="form-control attachclass input-sm" id="file_Title">'+
										  	  	'</div>'+
												'<div class="form-group">'+
													'<label for="usr">Description</label>'+
													'<textarea class="form-control attachclass" name="file_Description" rows="3" id="file_Description" style="resize: none;"></textarea>'+
												'</div>'+
										'</div>'+
										'<hr class="col-md-12 hide" id="anothersection" style="box-sizing: border-box;">'+
										'<div class="col-md-6 form-horizontal hide" id="createdbydiv">'+
											'<div class="form-group">'+
												'<label class="col-sm-4 control-label">Created By :</label>'+ 
													'<div class="col-sm-8"> '+
														'<p class="form-control-static ellipsis" id="createdby"></p>'+ 
													'</div> '+
											'</div>'+
											'<div class="form-group">'+ 
												'<label class="col-sm-4 control-label">Created on :</label>'+ 
													'<div class="col-sm-8"> '+
														'<p class="form-control-static" id="createdon"></p>'+ 
													'</div>'+
											'</div>'+
									    '</div>'+
									    '<div class="col-md-6 form-horizontal hide" id="modifiedbydiv">'+
									    	'<div class="form-group">'+ 
									    		'<label class="col-sm-5 control-label" style="padding-left: 0;padding-right: 0;">Last Modified by : </label>'+ 
									    			'<div class="col-sm-7">'+
									    				'<p class="form-control-static ellipsis" id="modifiedby"></p>'+ 
									    			'</div>'+
									    	'</div>'+
									    	'<div class="form-group">'+ 
									    		'<label class="col-sm-5 control-label" style="padding-left: 0;padding-right: 0;">Last Modified on : </label>'+ 
									    		'<div class="col-sm-7">'+ 
									    			'<p class="form-control-static" id="modifiedon"></p>'+ 
									    		'</div>'+
									    	'</div>'+
									    '</div>'+
								'</div>'+
						'</form>'+
					'</div>'+
					'<div class="modal-footer">'+
						'<button type="button" id="uploadattachfilebtn" class="btn btn-success">Save changes</button>'+
						'<button id="updateattachment" type="button" class="btn btn-success hide"><i class="fa fa-floppy-o"></i><span>&nbsp;&nbsp; Update Attachment</span></button>'+
						'<button type="button" id="cancelattach" class="btn btn-default" data-dismiss="modal">Close</button>'+
					'</div>'+
			   '</div>'+
		  '</div>';
			return modalHtml;
		 },
	};

})();