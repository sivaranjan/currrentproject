var attachmentIDArray = new Array();
var nomenIDArray = new Array();
var planIDArray = new Array();
var processdeliverIDArray = new Array();
var qualityIDArray = new Array();

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
		$(document).on("click", ".editattachment", function(event) 
		{
			var attachID = $(this).attr('id').split("edit_")[1];
			var hello = $(this).data('type');
			localStorage.setItem("currentfileuploader",hello );
			actions_attach.editAttachment(attachID);
		}),
		$(document).on("click", ".deleteattachment", function(event) 
		{
			var attachID = $(this).attr('id').split("remove_")[1];
			var hello = $(this).data('type');
			bootbox.confirm("Are you sure that you want to delete the attachment?", function(result)
			{
				if (result)
				{
					localStorage.setItem("currentfileuploader",hello );
					actions_attach.deleteAttachmentbyID(attachID);
				}
			});
		}),
		$(document).on("click", "#updateattachment", function(event) 
		{
			var attachmentID = $('#updateattachment').data('attachid');
			showVoiceBox.configure("This feature is yet to be done. Please try again later",2000);
			//actions_attach.updateAttachment(attachmentID);
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
			   type : "GET",
			   secureuri:false,
			   url : urls,
			   async : false,
			   datatype:'json',
			   data:{file_Description:file_Description,attachmentID:attachmentID,file_Title:file_Title,fileServeLink:fileServeLink },
			   fileElementId : 'UploadFile',			    
			   success : function(data) 
			   {
			       showVoiceBox.configure("Attachment has been successfully saved",2000);
			       loader.hide();
			       $('#attachment-modal').css('z-index','666666');
			       $('#filenameholder').val('');
			       $('#filepath').val('');
			       $('#file_Title').val('');
			       $('#file_Description').val('');
			       $('#cancelattach').trigger('click');
			       actions_attach.pullAttachmentList(attachmentID);
			   },
			   error: function(data)
			   {
				   alert("error");
			   }
		});
	},
	updateFile   : function(urls,attachment_Id)
	{
		
	},
	cancelAttachment  : function()
	{
		
	},
	myUploadFunction : function()
	{   
		if(actions_attach.validateForm())
		{
			loader.show();
			$('#attachment-modal').css('z-index','666');
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
	updateAttachment : function(attachmentID)
	{
		
	},
	pullAttachmentList  : function(attachmentID)
	{
		$.ajax({
	           type: 'get',
	           url: ApplicationConstants.fetchAttachmentList+attachmentID,
	           contentType: "application/json; charset=utf-8",
	           traditional: true,
	           success: function (data) 
	           {
	        	   var google = data.data;
	                console.log(google);
	                console.log("hello");
	                google.forEach(function(arrayItem)
	                {
	                	if(currentPage.get().indexOf('orderdetails')!=-1)
	                	{
	                		localStorage.setItem("currentfileuploader","orderpage");
	                	}	
	 			         var attachmentHTML = '<li>'+
	 					'<i class="fa fa-file-text-o" aria-hidden="true"></i>'+
	 					'<a class="editattachment" data-type='+localStorage.getItem("currentfileuploader")+' id="edit_'+arrayItem.attachment_Id+'">'+arrayItem.file_Name+'</a>'+
	 					'<a class="pull-right fa fa-cloud-download" href='+arrayItem.upload_Link+'></a>'+
	 					'<a class="deleteattachment pull-right fa fa-times" data-type='+localStorage.getItem("currentfileuploader")+' id="remove_'+arrayItem.attachment_Id+'"></a></li>';
	 			         if(localStorage.getItem("currentfileuploader")=="orderpage" || currentPage.get().indexOf('orderdetails')!=-1)
	 			         {
	 			        	$('#customer_order_list').append(attachmentHTML);
	 			        	 attachmentIDArray.push(attachmentID);
	 			         }
	 			         else if(localStorage.getItem("currentfileuploader")=="nomenclature" )
	 			         {
	 			        	$('#nomenclaturelist').append(attachmentHTML);
	 			        	nomenIDArray.push(attachmentID);
	 			         }	 
	 			         else if(localStorage.getItem("currentfileuploader")=="planmodal")
	 			         {
	 			        	$('#planfilelist').append(attachmentHTML);
	 			        	 planIDArray.push(attachmentID);
	 			         }
	 			         else if(localStorage.getItem("currentfileuploader")=="processmodal")
	 			         {
	 			        	$('#processdeliverablelist').append(attachmentHTML);
	 			        	 processdeliverIDArray.push(attachmentID);
	 			         }
	 			         else if(localStorage.getItem("currentfileuploader")=="qualitymodal")
	 			         {
	 			        	$('#qualitydeliverablelist').append(attachmentHTML);
	 			        	 qualityIDArray.push(attachmentID);
	 			         }
	 			        
	 			         $('#filenameholder').val(arrayItem.file_Name);
	 		        	 $('#filepath').val(arrayItem.upload_Link);
	 		        	 $('#file_Title').val(arrayItem.title);
	 		        	 $('#file_Description').val(arrayItem.file_Description);
	 					 $('#createdby').html(arrayItem.uploaded_By);
	 					 $('#createdon').html(new Date(arrayItem.uploaded_Date).toUTCString());
	 					 $('#modifiedby').html(arrayItem.modified_By);
	 					 $('#filedownloadlink').attr('href',arrayItem.upload_Link);
	 					 $('#filedownloadlink').html('&nbsp;&nbsp;<span class="label label-success ellipsis" style="text-decoration: initial;font-size: 11px;">'+arrayItem.file_Name+'</span>');
	 					 if(arrayItem.modified_Date!=0)
	 						 $('#modifiedon').html(new Date(arrayItem.modified_Date).toUTCString());
	 					 else
	 						 $('#modifiedon').html('None'); 
	                });
	           }
		});
	},
	deleteAttachmentbyID : function(attachmentID)
	{
		var prototypeID = localStorage.getItem("lastPrototypeOrderID");
		$.ajax({
	           type: 'POST',
	           url: ApplicationConstants.deleteAttachmentbyID,
	           data:{attachmentID:attachmentID,prototypeID:prototypeID},
	           success: function (data) 
	           {
	        	   showVoiceBox.configure("Attachment deleted successfully",2000);
	        	   $('#remove_'+attachmentID).parent().remove();
	      	     if(localStorage.getItem("currentfileuploader")=="orderpage")
	              {
	      	    	 var arrayIndex = attachmentIDArray.indexOf(attachmentID);
	      	    	 if (arrayIndex > -1) 
	      	    	 {
	      	    		 attachmentIDArray.splice(arrayIndex, 1);
	      	    	 }
	              }
	              else if(localStorage.getItem("currentfileuploader")=="nomenclature")
	              {
	             	 var arrayIndex = nomenIDArray.indexOf(attachmentID);
	      	    	 if (arrayIndex > -1) 
	      	    	 {
	      	    		 nomenIDArray.splice(arrayIndex, 1);
	      	    	 }
	              }	 
	              else if(localStorage.getItem("currentfileuploader")=="planmodal")
	              {
	             	 var arrayIndex = planIDArray.indexOf(attachmentID);
	      	    	 if (arrayIndex > -1) 
	      	    	 {
	      	    		 planIDArray.splice(arrayIndex, 1);
	      	    	 }
	              }
	              else if(localStorage.getItem("currentfileuploader")=="processmodal")
	              {
	             	 var arrayIndex = processdeliverIDArray.indexOf(attachmentID);
	      	    	 if (arrayIndex > -1) 
	      	    	 {
	      	    		 processdeliverIDArray.splice(arrayIndex, 1);
	      	    	 }
	              }
	              else if(localStorage.getItem("currentfileuploader")=="qualitymodal")
	              {
	             	 var arrayIndex = qualityIDArray.indexOf(attachmentID);
	      	    	 if (arrayIndex > -1) 
	      	    	 {
	      	    		 qualityIDArray.splice(arrayIndex, 1);
	      	    	 }
	              }
	           }
		});
	},
	editAttachment  : function(attachmentID)
	{
		$('#attachment-modal').modal('show');
		$('#attachmenth4').html('Edit Customer Order');
		$('#createdbydiv').removeClass('hide');
		$('#modifiedbydiv').removeClass('hide');
		$('#updateattachment').removeClass('hide');
		$('#uploadattachfilebtn').addClass('hide');
		$('#anothersection').removeClass('hide');
		$('#filedownloadarea').removeClass('hide');
		$('#revisioncomment').removeClass('hide');
		$('#updateattachment').attr('data-attachid',attachmentID);
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
			$('#file_Title').addClass('error');
		}
		else 
		{
				return true;
		}
	}
};