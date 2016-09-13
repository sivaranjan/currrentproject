var newURL = window.location.protocol + "//" + window.location.host;
$('#hiddenhost').val(newURL+'/serve?blob-key=');
$('#hiddenname').val(useremailid);
var totalattachments = 0;
var currentfileID = "";
$(document).ready(function() 
{
	actions_attach.attachHandlerss();
});
var actions_attach = 
{
	attachHandlerss: function()
	{
		$(document).on("change", "#UploadFile", function(event) 
		{
			$('#filepath').val($.trim($('#UploadFile').val()));	
			if($('#UploadFile').val()!="")
			{
				$('#filenameholder').val($('#UploadFile').val().split("fakepath")[1]);
			}	
		}),
		$(document).on("click", "#cancelattach", function(event) 
		{
					actions_attach.cancelAttachment();
			    	bootbox.dialog({
	            		  title: "Info",
	            		  message: 'Your changes has been discarded.'
	            	 });
		}),
		$(document).on("click", "#uploadattachfilebtn", function(event) 
		{
			actions_attach.myUploadFunction("");
		}),
		$(document).on("click", "#updateattachment", function(event) 
		{
				actions_attach.myUploadFunction(currentfileID);
		}),
		 $(document).on("change", "#inputfile", function(event) 
		{
					 $('#filepath').val($(this).val());
		}),
		 $(document).on("change", ".attachclass", function(event) 
		{
			 		$('#cancelattach').removeClass('disabled');
		}),
		$(document).on("keypress", ".attachclass", function(event) 
		{
					$('#cancelattach').removeClass('disabled');
		}),
		$(document).on("click", "#addattachments", function(event) 
		{
				 	$('#attachments_div').show();
				 	$('#modifiedbydiv').hide();
				 	$('#savebuttonarea').show();
				 	$('#updatebuttonarea').hide();
				 	$('#filepath').val("");
				 	$('#file_Title').val("");
				 	$('#filenameholder').val("")
				 	$('#file_Description').val("");
					$('#revisioncommentdiv').hide();
					$('#revisioncomment').val("");
					$('#createdbydiv').hide();
					$('#modifiedbydiv').hide();
				 $('html, body').animate({
				        scrollTop: $("#attachments_div").offset().top
				    }, 1000);
	    }),
		$(document).on("click", ".editattachment", function(event) 
		{
			if(checkCurrentuserRights() && $('#status').val()!="Alert closed")
			{
				var id	=  $(this).attr('id');
				id		=	id.split('edit_')[1];
				currentfileID = id;
				$('#cancelattach').removeClass('disabled');
				$('#createdbydiv').show();
				$('#modifiedbydiv').show();
				$('#revisioncommentdiv').show();
				$('#revisioncomment').val("");
				 $('#attachments_div').show();
				 $('#filepath').val(jsonvar[id].upload_Link);
				 $('#filenameholder').val(jsonvar[id].file_Name);
				 $('#file_Title').val(jsonvar[id].title);
				 $('#file_Description').val(jsonvar[id].file_Description);
				 $('#createdby').html('Created by - '+jsonvar[id].uploaded_By);
				 $('#createdon').html('Created On - '+new Date(jsonvar[id].uploaded_Date).toUTCString());
				 $('#modifiedby').html('Last Modified by - '+jsonvar[id].modified_By);
				 $('#modifiedon').html('Last Modified on - ' +new Date(jsonvar[id].modified_Date).toUTCString());
				 $('#savebuttonarea').hide();
				 $('#updatebuttonarea').show();
				 $('html, body').animate({
				        scrollTop: $("#attachments_div").offset().top
				    }, 1000);
			}
			else
			{
				bootbox.dialog({
  	            	title: "Info",
  	            	message: 'You do not have the rights to edit the attachment for this alert.'
    			});
			}	
		}),
		$(document).on("click", ".deleteattachment", function(event) 
		{ 
				if(checkCurrentuserRights() && $('#status').val()!="Alert closed")
				{
					var id= $(this).attr('id');
					bootbox.confirm('Are you sure you want to delete this attachment ?', function(result) {
						if(result)
						{
							actions_attach.deleteAlertfromDB(id.split('_')[1]);
							$('#'+id).parent().parent().remove();	
						}
					});
				}
				else
				{
					bootbox.dialog({
	  	            	title: "Info",
	  	            	message: 'You do not have the rights to delete the attachment for this alert.'
	    			});
				}
		});
		
	},
	goToByScroll : function()
	{
		$('html,body').animate({
		      scrollTop: $("#filepath").offset().top},
		      'slow');
		  $('#filepath').attr('placeholder','Upload your new file');
	},
	deleteAlertfromDB : function(attachmentID)
	{
	    console.log("the attachment url :: "+ApplicationConstants.deleteAttachment);
	    $.ajax({
            type: 'POST',
            url: ApplicationConstants.deleteAttachment,
            data : {attachmentID : attachmentID},
            traditional: true,
            success: function (data) 
            {
            	if(data === "success")
    	    	{
    	    		bootbox.dialog({
	            		  title: "Info",
	            		  message: 'Attachment has been deleted successfully.',
	            	 });
    	    	}
    	    	else
    	    	{
    	    		bootbox.dialog({
	            		  title: "Info",
	            		  message: 'Something went wrong. Please try again later.'
	            	 });
    	    	}
            	var hiddenredid    	=	$.trim($('#hiddenredid').val());
            	console.log("Fetch attachments for this ID :: "+hiddenredid);
            	var urlToCall=ApplicationConstants.getAttachmentsList+hiddenredid;
		    	fetchAttachmentList(urlToCall);
            },
            error: function() 
            {
                console.error("Error while deleting attachments");
            }
        });
	},
	AjaxFileUpload   : function(urls,file_Description,file_Title,hiddenname,hiddenredid,hiddenhost,revisionComment,attachmentID)
	{
		if(urls==ApplicationConstants.updateAttachmentsURL)
		{
			 $.ajax({
		            type: 'POST',
		            url: urls,
		            async:false,
		            data:{file_Description:file_Description,file_Title:file_Title,hiddenname:hiddenname,hiddenredid:hiddenredid,revisionComment:revisionComment,hiddenhost:hiddenhost,attachmentID:attachmentID},
		            success: function (data) 
		            {
		            	$('#innerModal').modal('hide');
		            	bootbox.dialog({
		  	            	title: "Info",
		  	            	message: 'Your attachment has been successfully saved.'
		    			});
		            	actions_attach.cancelAttachment();
	    				fetchAttachmentList(ApplicationConstants.getAttachmentsList+hiddenredid);
		            }
			 });
		}
		else
		{
			$.ajaxFileUpload(
				    {				
				    	 type : "POST",
				    	 secureuri:false,
				    	 url : urls,
				    	 datatype:'json',
				    	 data:{file_Description:file_Description,file_Title:file_Title,hiddenname:hiddenname,hiddenredid:hiddenredid,revisionComment:revisionComment,hiddenhost:hiddenhost,attachmentID:attachmentID},
				    	 fileElementId : 'UploadFile',			    
				    	 success : function(data) 
				    	 {
				    		 	$('#innerModal').modal('hide');
				    			bootbox.dialog({
				  	            	title: "Info",
				  	            	message: 'Your attachment has been successfully saved.'
				    			});
				    			actions_attach.cancelAttachment();
			    				fetchAttachmentList(ApplicationConstants.getAttachmentsList+hiddenredid);
				    	 }
				    });
		}	
	},
	cancelAttachment  : function()
	{
		$('#filepath').val('');
		$('#file_Title').val('');
		$('#filenameholder').val('');
		$('#file_Description').val('');
		$('#UploadFile').val('');
		$('#cancelattach').addClass('disabled');
		$('#revisioncommentdiv').hide();
		$('#revisioncomment').val("");
		$('#createdbydiv').hide();
		$('#modifiedbydiv').hide();
		$('#savebuttonarea').show();
		 $('#updatebuttonarea').hide();
		 $('#attachments_div').hide();
	},
	myUploadFunction : function(currentID)
	{
		 var previousFilePath 	= 	null;
		 var currentPath		=	null;
		 var newUploadURl	 	=	null;
		 var filepath 			= 	null;
		 var file_Title 		= 	null;
		 var file_Description 	= 	null;
		 var hiddenname			=	null;
		 var hiddenredid    	=	null;
		 var hiddenhost 		=	null;
		 var revisioncomments	=	null;
		 try
		 {
			 	if(actions_attach.validateForm(currentID))
				{
			 		previousFilePath 	= 	((currentID!="") ? jsonvar[currentID].upload_Link : "");
		    		currentPath			=	$('#filepath').val();
			    	file_Title 			= 	$.trim($('#file_Title').val());
			    	file_Description 	= 	$.trim($('#file_Description').val());
			    	hiddenname			=	$.trim($('#hiddenname').val());
			    	hiddenredid    		=	$.trim($('#hiddenredid').val());
			    	hiddenhost 			=	$.trim($('#hiddenhost').val());
			    	revisioncomments	=	$.trim($('#revisioncomment').val());
			    	if(currentPath!=previousFilePath)
					{
			    		if(currentID!="")
			    		{
			    			bootbox.prompt("Give your revision comment before editing the attachment", function(result) 
						    		{
						    			if($.trim(result)!="")
										{
						    				$('#innerModal').html('<img src="/images/loader.gif" style="height: 80px;"></img>');
									 	    $('#innerModal').modal('show');
									 	    revisioncomments = result;
								    		 $.ajax({
										            type: 'GET',
										            url: ApplicationConstants.getuploadUrl,
										            async:false,
										            success: function (data) 
										            {
										            	var urls = data;
										            	actions_attach.AjaxFileUpload(urls,file_Description,file_Title,hiddenname,hiddenredid,hiddenhost,revisioncomments,currentID);
										            }
								    		 });
										}
						    			else
						    			{
						    				bootbox.dialog({
												title: "Error",
												message: 'No revision comment found.'
						    				});
						    			}	
						    			
						    		});
			    		}
			    		else
			    		{
			    			$('#innerModal').html('<img src="/images/loader.gif" style="height: 80px;"></img>');
					 	    $('#innerModal').modal('show');
			    			$.ajax({
					            type: 'GET',
					            url: ApplicationConstants.getuploadUrl,
					            async:false,
					            success: function (data) 
					            {
					            	var urls = data;
					            	actions_attach.AjaxFileUpload(urls,file_Description,file_Title,hiddenname,hiddenredid,hiddenhost,revisioncomments,currentID);
					            }
			    			});
			    		}	
			    		
					}
			    	else
			    	{
			    		if(currentID!="")
			    		{
			    			bootbox.prompt("Give your revision comment before editing the attachment !", function(result) 
						    {
			    				if($.trim(result)!="")
								{
			    					$('#innerModal').html('<img src="/images/loader.gif" style="height: 80px;"></img>');
							 	    $('#innerModal').modal('show');
							 	   revisioncomments = result;
							 	   actions_attach.AjaxFileUpload(ApplicationConstants.updateAttachmentsURL,file_Description,file_Title,hiddenname,hiddenredid,hiddenhost,revisioncomments,currentID);
								}
			    				else
			    				{
			    					bootbox.dialog({
										title: "Error",
										message: 'No revision comment found.'
				    				});
			    				}	
						    });
			    		}
			    		else
			    		{
			    			$('#innerModal').html('<img src="/images/loader.gif" style="height: 80px;"></img>');
					 	    $('#innerModal').modal('show');
			    			actions_attach.AjaxFileUpload(ApplicationConstants.updateAttachmentsURL,file_Description,file_Title,hiddenname,hiddenredid,hiddenhost,revisioncomments,currentID);
			    		}	
			    	}	
				}	
		 }
		 catch(e)
		 {
			 console.error(e);
		 }
	},
	validateForm 	: function(status)
	{
				var filepath 		= 	$.trim($('#UploadFile').val());
				var title 			= 	$.trim($('#file_Title').val());
				var description 	= 	$.trim($('#file_Description').val());
				var revisioncomment =	$.trim($('#revisioncomment').val());
										 
				if (status=="" && (filepath == null || filepath == "")) 
				{
						bootbox.dialog({
									         title: "Info",
									         message: 'No file has been chosen yet.'
									  });
						return false;
				}
				else if (title == null || title == "") 
				{
					bootbox.dialog({
								            title: "Info",
								            message: 'Please fill the title.'
								  });
						return false;
				}
				else 
				{
						return true;
				}
	}
};