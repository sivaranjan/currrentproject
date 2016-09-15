var attachmentIDArray = new Array();
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
		$(document).on("click", "#uploadattachfilebtn", function(event) 
		{
			actions_attach.myUploadFunction();
		}),
		$(document).on("click", ".editattachmentcusorder", function(event) 
		{
			var attachID = $(this).attr('id').split("edit_")[1];
				actions_attach.editCustomerOrderAttachment(attachID);
		}),
		$(document).on("click", ".deleteattachmentcusorder", function(event) 
		{
			var attachID = $(this).attr('id').split("remove_")[1];
			actions_attach.deleteCustomerOrderAttachment(attachID);
		}),
		$(document).on("click", "#updateattachment", function(event) 
		{
			actions_attach.updateAttachment();
		})
	},
	uploadFile   : function(urls)
	{
		var file_Title = $('#file_Title').val();
		var file_Description = $('#file_Description').val();
		var filename  = $('#filenameholder').val();
		var newURL = window.location.protocol + "//" + window.location.host;
		var fileServeLink = newURL+'/serve?blob-key';
		var attachmentID = $.trim(localStorage.getItem("attachmentID"));
		$.ajaxFileUpload(
		{				
			   type : "POST",
			   secureuri:false,
			   url : urls,
			   async : false,
			   datatype:'json',
			   data:{file_Description:file_Description,attachmentID:attachmentID,file_Title:file_Title,fileServeLink:fileServeLink },
			   fileElementId : 'UploadFile',			    
			   success : function(data) 
			   {
			       showVoiceBox.configure("Attachment has been successfully saved",2000);
			       $('#filenameholder').val('');
			       $('#filepath').val('');
			       $('#file_Title').val('');
			       $('#file_Description').val('');
			       $('#cancelattach').trigger('click');
			       attachmentIDArray.push(attachmentID);
			       var returnAttachmentList = actions_attach.pullAttachmentList(attachmentID);
			       var google = returnAttachmentList.data;
	                console.log(google);
	                console.log("hello");
	                google.forEach(function(arrayItem)
	                {
	 			         var attachmentHTML = '<li>'+
	 					'<i class="fa fa-file-text-o" aria-hidden="true"></i>'+
	 					'<a class="editattachmentcusorder" id="edit_'+arrayItem.attachment_Id+'">'+arrayItem.file_Name+'</a>'+
	 					'<a class="pull-right fa fa-cloud-download" href='+arrayItem.upload_Link+'></a>'+
	 					'<a class="deleteattachmentcusorder pull-right fa fa-times" id="remove_'+arrayItem.attachment_Id+'"></a></li>';
	 			        $('#customer_order_list').append(attachmentHTML);
	                });
			   },
			   error: function(data)
			   {
				   alert("error");
			   }
		});
		 
	},
	cancelAttachment  : function()
	{
		
	},
	myUploadFunction : function()
	{
		if(actions_attach.validateForm())
		{
			$.ajax({
	            type	: 	'POST',
	            url		: 	ApplicationConstants.getuploadUrl,
	            data 	: 	'',
	            datatype:	'json',
	            async	:	false,
	            success	: 	function (data) 
	            {
	            	var urls = data.split("?uuid_")[0];
	            	localStorage.setItem("attachmentID", data.split("?uuid_")[1]);
	            	actions_attach.uploadFile(urls);
	            }
			});
		}	
	},
	updateAttachment : function()
	{
		if(actions_attach.validateForm())
		{
			$.ajax({
	            type	: 	'POST',
	            url		: 	ApplicationConstants.getuploadUrl,
	            data 	: 	'',
	            datatype:	'json',
	            async	:	false,
	            success	: 	function (data) 
	            {
	            	var urls = data.split("?uuid_")[0];
	            	localStorage.setItem("attachmentID", data.split("?uuid_")[1]);
	            	actions_attach.updateFile(urls);
	            }
			});
		}
	},
	pullAttachmentList  : function(attachmentID)
	{
		$.ajax({
	           type: 'get',
	           url: ApplicationConstants.fetchAttachmentListCustomerOrderbyID+attachmentID,
	           contentType: "application/json; charset=utf-8",
	           traditional: true,
	           success: function (data) 
	           {
	        	   return data;
	           }
		});
	},
	deleteCustomerOrderAttachment : function(attachmentID)
	{
		$.ajax({
	           type: 'POST',
	           url: ApplicationConstants.deleteCustomerOrderAttachment,
	           data:{attachmentID:attachmentID},
	           success: function (data) 
	           {
	        	   showVoiceBox.configure("Attachment deleted successfully",2000);
	        	   $('#remove_'+attachmentID).parent().remove();
	           }
		});
	},
	editCustomerOrderAttachment  : function(attachmentID)
	{
		$('#orderattachment-modal').modal('show');
		$('#customerorderattachmenth4').html('Edit Customer Order');
		$('#createdbydiv').removeClass('hide');
		$('#modifiedbydiv').removeClass('hide');
		$('#updateattachment').removeClass('hide');
		$('#uploadattachfilebtn').addClass('hide');
		$('#anothersection').removeClass('hide');
		$('#createdby').html("Created By : ")
		var returnAttachmentList = actions_attach.pullAttachmentList(attachmentID);
	    var google = returnAttachmentList.data;
         console.log(google);
         console.log("hello");
         google.forEach(function(arrayItem)
         {
        	 $('#filenameholder').val(arrayItem.file_Name);
        	 $('#filepath').val(arrayItem.upload_Link);
        	 $('#file_Title').val(arrayItem.Title);
        	 $('#file_Description').val(arrayItem.file_Description);
			 $('#createdby').html(arrayItem.uploaded_By);
			 $('#createdon').html(new Date(arrayItem.uploaded_Date).toUTCString());
			 $('#modifiedby').html(arrayItem.modified_By);
			 if(arrayItem.modified_Date!=0)
				 $('#modifiedon').html(new Date(arrayItem.modified_Date).toUTCString());
			 else
				 $('#modifiedon').html(''); 
         });
	},
	validateForm 	: function()
	{
		var filepath 		= 	$.trim($('#UploadFile').val());
		var title 			= 	$.trim($('#file_Title').val());
								 
		if (filepath == null || filepath == "")  // check for the file selected or not
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