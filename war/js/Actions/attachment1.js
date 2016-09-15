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
			       console.error("sdfdsf ajaxFileUpload edit:: "+data);
			       showVoiceBox.configure("Attachment has been successfully saved",2000);
			       $('#filenameholder').val('');
			       $('#filepath').val('');
			       $('#file_Title').val('');
			       $('#file_Description').val('');
			       attachmentIDArray.push(attachmentID);
			       actions_attach.pullAttachmentList(attachmentID);
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
	            	console.error("sdfdsf :: "+data);
	            	var urls = data.split("?uuid_")[0];
	            	localStorage.setItem("attachmentID", data.split("?uuid_")[1]);
	            	actions_attach.uploadFile(urls);
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
	        	   var google = data.data;
	                console.log(google);
	                console.log("hello");
	                google.forEach(function(arrayItem)
	                {
	 			         var attachmentHTML = '<li>'+
	 					'<i class="fa fa-file-text-o" aria-hidden="true"></i>'+
	 					'<a class="editattachment" id="edit_'+arrayItem.attachment_Id+'">'+arrayItem.file_Name+'</a>'+
	 					'<a class="pull-right fa fa-cloud-download" href='+arrayItem.upload_Link+'></a>'+
	 					'<a class="pull-right fa fa-times" id="remove_'+arrayItem.attachment_Id+'"></a></li>';
	 			        $('#customer_order_list').append(attachmentHTML);
	                });
	           }
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