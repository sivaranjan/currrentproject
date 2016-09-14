package com.ths.controller.Attachment;
 
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Logger;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;

import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.xml.sax.SAXException;

import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.blobstore.BlobstoreService;
import com.google.appengine.api.blobstore.BlobstoreServiceFactory;
import com.google.appengine.api.blobstore.FileInfo;
import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserServiceFactory;
import com.ths.DAO.Attachment.AttachmentsDAO;
import com.ths.JDO.Attachment.AttachmentsJdo;
import com.ths.service.UuidGeneratorHelper;
 
@Controller
public class AttachmentContoller {
	private @Autowired HttpServletRequest request;
	private @Autowired HttpServletResponse resp;
	@Autowired
    private AttachmentsDAO attachmentDao;
	private static final 	Logger 	log 				= 	Logger.getLogger(AttachmentContoller.class.getName());
	private final BlobstoreService 	blobstore 			=   BlobstoreServiceFactory.getBlobstoreService();
	private BlobstoreService 		blobstoreService 	= 	BlobstoreServiceFactory.getBlobstoreService();
	
	@RequestMapping(value = "/serve",method = RequestMethod.GET)
  	public void serve(HttpServletRequest request, HttpServletResponse res) throws GeneralSecurityException, IOException, ServletException, ParserConfigurationException, SAXException, JSONException 
   {
		BlobKey blobKey 	=   null;
		String  blob_key	=	null;
		try
		{
			 blobKey 		= 	new BlobKey(request.getParameter("blob-key"));
			 blob_key		=	request.getParameter("blob-key");
			 log.info("blob_keu from hrer"+blob_key);
			 res.setContentType("APPLICATION/OCTET-STREAM");   
			 res.setHeader("Content-Disposition","attachment; filename="+request.getParameter("filename"));   
			 blobstoreService.serve(blobKey, resp);
		}
		catch(Exception e)
		{
			 log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
		}
   }
    @RequestMapping(value = "/uploadattachments", method = RequestMethod.POST)
  	public @ResponseBody String uploadattachments() throws GeneralSecurityException, IOException, ServletException, ParserConfigurationException, SAXException, JSONException 
   {
	  	String 	file_Name 					= 	null;
		String 	uploaded_By 				= 	null;
		String  red_Id						=	null;
		String 	upload_Type 				=	null;
		String 	upload_Link     			=   null;
		String 	file_Description 			=	null;
		String 	Title 						= 	null;
		String  attachment_Id 				= 	null;
		String    revisionComment			=	null;
		Map<String, List<BlobKey>> 	blobs 	= 	null;
		Map<String, List<FileInfo>> uploads = 	null;
		List<BlobKey>	blobKey  			= 	null;
		List<FileInfo> fileInfos 			= 	null;
		BlobKey blobKey1 					= 	null;
		boolean isDeleted 					= 	false;
		Date todate  						= 	new Date();
		List<AttachmentsJdo> attachmentInfo =	null;
		List<String> revisionCommentsList	=	null;
		long uploaded_Date;
		try
		{
			
			blobs				= 	blobstore.getUploads(request);
			uploads 			= 	blobstore.getFileInfos(request);
			blobKey 			= 	blobs.get("UploadFile");
			blobKey1			= 	blobKey.get(0);
			User user 			= 	UserServiceFactory.getUserService().getCurrentUser();
			fileInfos 			= 	uploads.get("UploadFile");
			uploaded_By 		= 	user.toString();
			red_Id				=	request.getParameter("hiddenredid");
			attachment_Id		=	request.getParameter("attachmentID"); //UUID.randomUUID();
			file_Description 	=  	request.getParameter("file_Description");
			Title   			= 	request.getParameter("file_Title");
			revisionComment		=	request.getParameter("revisionComment");
			uploaded_Date 		= 	todate.getTime();
			for (FileInfo fileInfo : fileInfos) 
		    {
				file_Name = fileInfo.getFilename();
				upload_Type = fileInfo.getContentType();
		    }
			upload_Link 		=   request.getParameter("hiddenhost")+blobKey1.getKeyString()+"&filename="+file_Name.replaceAll("[^a-zA-Z0-9.-]", "_");
			
			log.info("the attachment_Id  is this :: "+attachment_Id.toString());
			log.info("isDeleted is this :: "+isDeleted);
			log.info("file_Description is this :: "+file_Description);
			log.info("file_Name ::"+file_Name);
			log.info("red_Id ::"+red_Id);
			log.info("Title ::"+Title);
			log.info("upload_Link ::"+upload_Link);
			log.info("uploaded_By ::"+uploaded_By);
			log.info("uploaded_Date ::"+uploaded_Date);
			
			if(!attachment_Id.isEmpty() && attachment_Id.length()>0)
			{
				attachmentInfo = attachmentDao.findByAttachmentID(attachment_Id);
  			    revisionCommentsList	= 	new ArrayList<String>();
  			   	log.info("the attachmentInfo size is this :: "+attachmentInfo.size());	
  			   	for( AttachmentsJdo value:attachmentInfo )
  			   	{
  			   		value.setFile_Description(file_Description);
  			   		value.setFile_Name(file_Name);
  			   		value.setModified_By(user.toString());
  			   		value.setModified_Date(uploaded_Date);
	  			   	for(String revisionIndex : value.getRevisionComment())
  			   		{
  			   				revisionCommentsList.add(revisionIndex);
  			   		}
	  			    revisionCommentsList.add(revisionComment);
  			   		value.setRevisionComment(revisionCommentsList);
  			   		value.setTitle(Title);
  			   		value.setUpload_Link(upload_Link);
  			   		value.setUpload_Type(upload_Type);
  			   		attachmentDao.save(value);
  			   	}
			}
			else
			{
					AttachmentsJdo attachObject = new AttachmentsJdo();
					attachment_Id = UUID.randomUUID().toString();
					attachObject.setAttachment_Id(attachment_Id);
					attachObject.setDeleted(isDeleted);
					attachObject.setFile_Description(file_Description);
					attachObject.setFile_Name(file_Name);
					attachObject.setRed_Id(red_Id);
					attachObject.setTitle(Title);
					attachObject.setUpload_Link(upload_Link);
					attachObject.setUpload_Type(upload_Type);
					attachObject.setUploaded_By(uploaded_By);
					attachObject.setUploaded_Date(uploaded_Date);
					attachObject.setModified_By("None");
					attachObject.setRevisionComment(revisionCommentsList);
					attachmentDao.save(attachObject);
			}
			
		}
		catch(Exception e)
		{
			log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
		}
		return attachment_Id;
    }
    @RequestMapping(value = "/updateAttachments", method = RequestMethod.POST)
  	public @ResponseBody String updateAttachments() throws GeneralSecurityException, IOException, ServletException, ParserConfigurationException, SAXException, JSONException 
   {
		String 	file_Description 				=	null;
		String 	Title 							= 	null;
		String attachment_Id 					= 	null;
		Date todate  							= 	new Date();
		String revisionComment 					=	null;
		List<AttachmentsJdo> attachmentInfo 	=	null;
		List<String> revisionCommentsList		=	null;
		long modified_date;
		try
		{
			attachment_Id			=	request.getParameter("attachmentID"); 
			file_Description 		=  	request.getParameter("file_Description");
			Title   				= 	request.getParameter("file_Title");
			log.info("the attachment_Id  is this :: "+attachment_Id);
			log.info("file_Description is this :: "+file_Description);
			log.info("Title ::"+Title);
			revisionCommentsList	= 	new ArrayList<String>();
			attachmentInfo 			=   attachmentDao.findByAttachmentID(attachment_Id);
			log.info("the attachmentInfo size is this :: "+attachmentInfo.size());
			User user 				= 	UserServiceFactory.getUserService().getCurrentUser();
			modified_date 			= 	todate.getTime();
			revisionComment			=	request.getParameter("revisionComment");
			   	for(AttachmentsJdo value:attachmentInfo )
			   	{
			   		value.setFile_Description(file_Description);
			   		value.setTitle(Title);
			   		value.setModified_By(user.toString());
			   		value.setModified_Date(modified_date);
			   	    log.info("the revision index is this :: "+value.getRevisionComment());
			   	    log.info("the revision index is this sizes ::"+value.getRevisionComment().size());
			   		if(value.getRevisionComment()!= null)
			   		{
	  			   		for(String revisionIndex : value.getRevisionComment())
	  			   		{
	  			   				revisionCommentsList.add(revisionIndex);
	  			   		}
			   		}
			   		revisionCommentsList.add(revisionComment);
			   		value.setRevisionComment(revisionCommentsList);
			   		attachmentDao.save(value);
			   	}
		}
		catch(Exception e)
		{
			log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
		}
		return "success";
   }
    @RequestMapping(value = "/getuploadUrl")
	public  @ResponseBody String uploadpage() throws GeneralSecurityException, IOException, ServletException 
    {
    	String uploadUrl =  null;
    	String uuid		 =	null;
    	log.info("Generating upload url");
    	try
    	{
    		uuid		=	UuidGeneratorHelper.getUniqueId();
    		uploadUrl	=   dispatchUploadForm(request, resp);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
    	return uploadUrl+"uuid="+uuid;
  	}
    protected String dispatchUploadForm(HttpServletRequest req,HttpServletResponse resp) throws ServletException, IOException 
    {
    	String 	uploadUrl = null;
    	log.info("THe uploadurl is this :: "+uploadUrl);
    	try
    	{
    		uploadUrl =  blobstore.createUploadUrl("/uploadattachments");
    		log.info("THe uploadurl (dispatchUploadForm)  is this :: "+uploadUrl);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return uploadUrl;
    }
   public String dispatchUploadForm2() throws ServletException, IOException 
   {
	    String 	uploadUrl = null;
	    try
	    {
	    	uploadUrl =  blobstore.createUploadUrl("/uploadattachments");
	    	log.info("THe uploadurl (dispatchUploadForm2) is this :: "+uploadUrl);
	    }
	    catch(Exception e)
	    {
	    	log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
	    }
        return uploadUrl;
   }
   @RequestMapping(value = "/getAttachmentsList", method = RequestMethod.POST)
   public  @ResponseBody String getAttachmentsList() throws GeneralSecurityException, IOException, ServletException 
   {
	   String 			status 	= 		null;
	   String 			redID 	=		null;
	   List<AttachmentsJdo> attachmentsInfo=	null;
	   log.info("Inside fetchtable method !");
	   try
	   {
		   		redID 	=			request.getParameter("redID");
		   		HashMap<String, AttachmentsJdo> tableEntry 	    =      	new HashMap<String,  AttachmentsJdo>();
		   		attachmentsInfo 		=   attachmentDao.findByAttachmentID(redID);
//		   		queryUserDetails    	=  	pm.newQuery(AttachmentsJdo.class,"red_Id == '"+redID+"'");
//		   		attachmentsInfo     	=   (List<AttachmentsJdo>) queryUserDetails.execute();
		        for( AttachmentsJdo value:attachmentsInfo )
		        {
		        		tableEntry.put(value.getAttachment_Id(), value);
		        }  
		        status          =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
		   log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
	   }
	   return status;
   }
  @RequestMapping(value = "/deleteAttachment", method = RequestMethod.POST)
  public  @ResponseBody String deleteAttachment() throws GeneralSecurityException, IOException, ServletException 
  {
	    	log.info("visits deleteAttachment :: "+		request.getParameter("attachmentID"));
		 	String attachmentID					=		request.getParameter("attachmentID");
		    try
		    {
		    	if(attachmentID!=null)
		    	{
		    		 attachmentDao.deleteByAttachmentID(attachmentID);
		    	}
		    }
		    catch(Exception e)
		    {
		    	log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
		    }
		    return "success";
  }
}