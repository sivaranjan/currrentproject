var newURL = window.location.protocol + "//" + window.location.host;
$('#hiddenhost').val(newURL+'/serve?blob-key=');
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
			showVoiceBox.configure("Your changes has been discarded",2000);
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
	    }),
		$(document).on("click", ".editattachment", function(event) 
		{
			$('#orderattachment-modal').modal('show');
				var id	=  $(this).attr('id');
				id		=	id.split('edit_')[1];
				currentfileID = id;
				$('#cancelattach').removeClass('disabled');
				$('#createdbydiv').show();
				$('#modifiedbydiv').show();
				$('#revisioncommentdiv').show();
				$('#revisioncomment').val("");
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
		}),
		$(document).on("click", ".deleteattachment", function(event) 
		{ 
			var id= $(this).attr('id');
			bootbox.confirm('Are you sure you want to delete this attachment ?', function(result)
			{
				if(result)
				{
					actions_attach.deleteAlertfromDB(id.split('_')[1]);
					$('#'+id).parent().remove();	
				}
			});
		});
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
            		showVoiceBox.configure("Attachment has been deleted successfully.",2000);
    	    	}
    	    	else
    	    	{
    	    		showVoiceBox.configure("Oops! Something went wrong. Please try again later",2000);
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
	AjaxFileUpload   : function(urls,file_Description,file_Title,hiddenredid,hiddenhost,revisionComment,attachmentID)
	{
		if(urls==ApplicationConstants.updateAttachmentsURL)
		{
			 $.ajax({
		            type: 'POST',
		            url: urls,
		            async:false,
		            data:{file_Description:file_Description,file_Title:file_Title,hiddenredid:hiddenredid,revisionComment:revisionComment,hiddenhost:hiddenhost,attachmentID:attachmentID},
		            success: function (data) 
		            {
		            	showVoiceBox.configure("Attachment has been successfully saved",2000);
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
				    	 data:{file_Description:file_Description,file_Title:file_Title,hiddenredid:hiddenredid,revisionComment:revisionComment,hiddenhost:hiddenhost,attachmentID:attachmentID},
				    	 fileElementId : 'UploadFile',			    
				    	 success : function(data) 
				    	 {
				    		    console.log(data);
				    		 	console.error("sdfdsf ajaxFileUpload edit:: "+data);
				    		 	showVoiceBox.configure("Attachment has been successfully saved",2000);
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
	},
	myUploadFunction : function(currentID)
	{
		 var previousFilePath 	= 	null;
		 var currentPath		=	null;
		 var newUploadURl	 	=	null;
		 var filepath 			= 	null;
		 var file_Title 		= 	null;
		 var file_Description 	= 	null;
		 var hiddenredid    	=	null;
		 var hiddenhost 		=	null;
		 var revisioncomments	=	null;
		 try
		 {
			 	if(actions_attach.validateForm(currentID)) // Does the validations for file upload
				{
			 		//previousFilePath 	= 	((currentID!="") ? jsonvar[currentID].upload_Link : "");
		    		currentPath			=	$('#filepath').val();
			    	file_Title 			= 	$.trim($('#file_Title').val());
			    	file_Description 	= 	$.trim($('#file_Description').val());
			    	hiddenredid    		=	$.trim($('#hiddenredid').val());
			    	hiddenhost 			=	$.trim($('#hiddenhost').val());
			    	revisioncomments	=	$.trim($('#revisioncomment').val());
			    	if(currentPath!=previousFilePath) // The user changed the previously uploaded file and trying to edit
					{
			    		if(currentID!="")  // For update
			    		{
			    			bootbox.prompt("Give your revision comment before editing the attachment", function(result) 
						    {
						    	if($.trim(result)!="")
								{
						    		showVoiceBox.configure("Please wait, loading",2000);
									revisioncomments = result;
								    $.ajax({
										    type: 'POST',
										    url: ApplicationConstants.getuploadUrl,
										    data : "",
										    async:false,
										    success: function (data) 
										    {
										        console.error("sdfdsf success edit:: "+data);
										        var urls = data;
										        actions_attach.AjaxFileUpload(urls,file_Description,file_Title,hiddenredid,hiddenhost,revisioncomments,currentID);
										    }
								    	});
								}
						    	else
						    	{
						    		showVoiceBox.configure("No revision comment found",2000);
						    	}	
						     });
			    		}
			    		else   // new attachment added here
			    		{
			    			showVoiceBox.configure("Please wait, loading",2000);
			    			$.ajax({
					            type	: 	'POST',
					            url		: 	ApplicationConstants.getuploadUrl,
					            data 	: 	'',
					            datatype:	'json',
					            async	:	false,
					            success	: 	function (data) 
					            {
					            	console.error("sdfdsf :: "+data);
					            	var urls = data;
					            	actions_attach.AjaxFileUpload(urls,file_Description,file_Title,hiddenredid,hiddenhost,revisioncomments,currentID);
					            }
			    			});
			    		}	
			    		
					}
			    	else  // The user is uploading the new file attachment
			    	{
			    		if(currentID!="") 
			    		{
			    			bootbox.prompt("Give your revision comment before editing the attachment !", function(result) 
						    {
			    				if($.trim(result)!="")
								{
			    					showVoiceBox.configure("Please wait, loading",2000);
							 	   revisioncomments = result;
							 	   actions_attach.AjaxFileUpload(ApplicationConstants.updateAttachmentsURL,file_Description,file_Title,hiddenredid,hiddenhost,revisioncomments,currentID);
								}
			    				else
			    				{
			    					showVoiceBox.configure("No revision comment found",2000);
			    				}	
						    });
			    		}
			    		else
			    		{
			    			showVoiceBox.configure("Please wait, loading",2000);
			    			actions_attach.AjaxFileUpload(ApplicationConstants.updateAttachmentsURL,file_Description,file_Title,hiddenredid,hiddenhost,revisioncomments,currentID);
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
										 
				if (status=="" && (filepath == null || filepath == ""))  // check for the file selected or not
				{
					showVoiceBox.configure("No file has been chosen yet",2000);
				}
				else if (title == null || title == "") 
				{
					showVoiceBox.configure("Please fill the title",2000);
					$('#file_Title').addClass('error');
				}
				else 
				{
						return true;
				}
	}
};