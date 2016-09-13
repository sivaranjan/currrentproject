package com.ths.controller.Attachment;
 
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.ParserConfigurationException;

import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
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
import com.ths.JDO.Attachment.AttachmentsJdo;
import com.ths.service.PersistenceManagerUtil;
import com.ths.service.UuidGeneratorHelper;
 
@Controller
@RequestMapping("/Attachment")
public class AttachmentContoller {
	
	private static final 	Logger 	log 				= 	Logger.getLogger(AttachmentContoller.class.getName());
	private final BlobstoreService 	blobstore 			=   BlobstoreServiceFactory.getBlobstoreService();
	private BlobstoreService 		blobstoreService 	= 	BlobstoreServiceFactory.getBlobstoreService();
	
	@RequestMapping(value = "/serve", method = RequestMethod.GET)
  	public void  serve(HttpServletRequest request, HttpServletResponse res) throws GeneralSecurityException, IOException, ServletException, ParserConfigurationException, SAXException, JSONException 
   {
		  BlobKey blobKey = new BlobKey(request.getParameter("blob-key"));
		  String blob_key=request.getParameter("blob-key");
		  System.out.println("blob_keu from hrer"+blob_key);
		          res.setContentType("APPLICATION/OCTET-STREAM");   
		          res.setHeader("Content-Disposition","attachment; filename="+request.getParameter("filename"));   
		          blobstoreService.serve(blobKey, res);
   }
    @RequestMapping(value = "/uploadattachments", method = RequestMethod.POST)
  	public @ResponseBody String uploadattachments(HttpServletRequest req, HttpServletResponse resp) throws GeneralSecurityException, IOException, ServletException, ParserConfigurationException, SAXException, JSONException 
   {
	  	String 	file_Name 					= 	null;
		String 	uploaded_By 				= 	null;
		String  red_Id						=	null;
		String 	upload_Type 				=	null;
		String 	upload_Link     			=   null;
		String 	file_Description 			=	null;
		String 	Title 						= 	null;
		String  attachment_Id 				= 	null;
		String  newrevisionList 			= 	null;
		Query   queryUserDetails			=	null;
		String    revisionComment				=	null;
		Map<String, List<BlobKey>> 	blobs 	= 	null;
		Map<String, List<FileInfo>> uploads = 	null;
		List<BlobKey>	blobKey  			= 	null;
		List<FileInfo> fileInfos 			= 	null;
		PersistenceManager 	pmf  			= 	null;
		BlobKey blobKey1 					= 	null;
		boolean isDeleted 					= 	false;
		Date todate  						= 	new Date();
		List<AttachmentsJdo> attachmentInfo =		null;
		List<String> revisionCommentsList	=		null;
		long uploaded_Date;
		try
		{
			
			pmf 				=   PersistenceManagerUtil.getPersistenceManager();
			blobs				= 	blobstore.getUploads(req);
			uploads 			= 	blobstore.getFileInfos(req);
			blobKey 			= 	blobs.get("UploadFile");
			blobKey1			= 	blobKey.get(0);
			User user 			= 	UserServiceFactory.getUserService().getCurrentUser();
			fileInfos 			= 	uploads.get("UploadFile");
			uploaded_By 		= 	user.toString();
			red_Id				=	req.getParameter("hiddenredid");
			attachment_Id		=	req.getParameter("attachmentID"); //UUID.randomUUID();
			file_Description 	=  	req.getParameter("file_Description");
			Title   			= 	req.getParameter("file_Title");
			revisionComment		=	req.getParameter("revisionComment");
			uploaded_Date 		= 	todate.getTime();
			for (FileInfo fileInfo : fileInfos) 
		    {
				file_Name = fileInfo.getFilename();
				upload_Type = fileInfo.getContentType();
		    }
			upload_Link 		=   req.getParameter("hiddenhost")+blobKey1.getKeyString()+"&filename="+file_Name.replaceAll("[^a-zA-Z0-9.-]", "_");
			
			System.out.println("the attachment_Id  is this :: "+attachment_Id.toString());
			System.out.println("isDeleted is this :: "+isDeleted);
			System.out.println("file_Description is this :: "+file_Description);
			System.out.println("file_Name ::"+file_Name);
			System.out.println("red_Id ::"+red_Id);
			System.out.println("Title ::"+Title);
			System.out.println("upload_Link ::"+upload_Link);
			System.out.println("uploaded_By ::"+uploaded_By);
			System.out.println("uploaded_Date ::"+uploaded_Date);
			
			if(!attachment_Id.isEmpty() && attachment_Id.length()>0)
			{
				pmf 				=   PersistenceManagerUtil.getPersistenceManager();
  			   	queryUserDetails 	=  	pmf.newQuery(AttachmentsJdo.class,"attachment_Id == '"+attachment_Id+"'");
  			   	attachmentInfo      =   (List<AttachmentsJdo>) queryUserDetails.execute();
  			    revisionCommentsList	= 	new ArrayList<String>();
  			   	System.out.println("the attachmentInfo size is this :: "+attachmentInfo.size());	
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
	  			   	pmf.currentTransaction().begin();
			        pmf.makePersistent(value);
			        pmf.currentTransaction().commit();
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
					pmf.currentTransaction().begin();
			        pmf.makePersistent(attachObject);
			        pmf.currentTransaction().commit();
			}
			
		}
		catch(Exception e)
		{
			System.out.println("Exception is this ::"+e);
			return "failure";
		}
		return "success";
    }
    @RequestMapping(value = "/updateAttachments", method = RequestMethod.POST)
  	public @ResponseBody String updateAttachments(HttpServletRequest req, HttpServletResponse resp) throws GeneralSecurityException, IOException, ServletException, ParserConfigurationException, SAXException, JSONException 
   {
		String 	file_Description 				=	null;
		String 	Title 							= 	null;
		String newrevisionList 					= 	null;
		PersistenceManager 	pmf  				= 	null;
		String attachment_Id 					= 	null;
		Date todate  							= 	new Date();
		String revisionComment 					=	null;
		Query queryUserDetails					=	null;
		List<AttachmentsJdo> attachmentInfo 	=	null;
		List<String> revisionCommentsList		=	null;
		long modified_date;
		try
		{
			attachment_Id			=	req.getParameter("attachmentID"); 
			file_Description 		=  	req.getParameter("file_Description");
			Title   				= 	req.getParameter("file_Title");
			System.out.println("the attachment_Id  is this :: "+attachment_Id);
			System.out.println("file_Description is this :: "+file_Description);
			System.out.println("Title ::"+Title);
			pmf 					=   PersistenceManagerUtil.getPersistenceManager();
			revisionCommentsList	= 	new ArrayList<String>();
			   	queryUserDetails 		=  	pmf.newQuery(AttachmentsJdo.class,"attachment_Id == '"+attachment_Id+"'");
			   	attachmentInfo      	=   (List<AttachmentsJdo>) queryUserDetails.execute();
			    System.out.println("the attachmentInfo size is this :: "+attachmentInfo.size());
			   	User user 				= 	UserServiceFactory.getUserService().getCurrentUser();
			modified_date 			= 	todate.getTime();
			revisionComment			=	req.getParameter("revisionComment");
			   	for(AttachmentsJdo value:attachmentInfo )
			   	{
			   		value.setFile_Description(file_Description);
			   		value.setTitle(Title);
			   		value.setModified_By(user.toString());
			   		value.setModified_Date(modified_date);
			   	    System.out.println("the revision index is this :: "+value.getRevisionComment());
			   	    System.out.println("the revision index is this sizes ::"+value.getRevisionComment().size());
			   		if(value.getRevisionComment()!= null)
			   		{
  			   		for(String revisionIndex : value.getRevisionComment())
  			   		{
  			   				revisionCommentsList.add(revisionIndex);
  			   		}
			   		}
			   		revisionCommentsList.add(revisionComment);
			   		value.setRevisionComment(revisionCommentsList);
  			   	pmf.currentTransaction().begin();
		        pmf.makePersistent(value);
		        pmf.currentTransaction().commit();
			   	}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return "failure";
		}
		return "success";
   }
    @RequestMapping(value = "/getuploadUrl", method = RequestMethod.GET)
	public  @ResponseBody String uploadpage(HttpServletRequest req, HttpServletResponse resp,@RequestBody String key) throws	GeneralSecurityException, IOException, ServletException 
   {
	  	String uploadUrl;
	  	System.out.println("Generating upload url");
	  		String uuid=UuidGeneratorHelper.getUniqueId();
	  		uploadUrl=  dispatchUploadForm(req, resp, null,"");
	  	
	  		return uploadUrl;
  	}
  protected String dispatchUploadForm(HttpServletRequest req,HttpServletResponse resp,String errorMsg,String isvpfilename) throws ServletException, IOException 
   {
	    String 	uploadUrl;
	    uploadUrl =  blobstore.createUploadUrl("/uploadattachments");
	    System.out.println("THe uploadurl is this :: "+uploadUrl);
       // uploadUrl  = blobstore.createUploadUrl("/upload", opts);
       
       return uploadUrl;
   }
  public String dispatchUploadForm2() throws ServletException, IOException 
   {
	    String 	uploadUrl;
	    uploadUrl =  blobstore.createUploadUrl("/uploadattachments");
	    System.out.println("THe uploadurl is this :: "+uploadUrl);
       // uploadUrl  = blobstore.createUploadUrl("/upload", opts);
       
       return uploadUrl;
   }
  @RequestMapping(value = "/getAttachmentsList", method = RequestMethod.POST)
  	public  @ResponseBody String getAttachmentsList(HttpServletRequest request, HttpServletResponse resp) throws GeneralSecurityException, IOException, ServletException 
   {
	   String 			status 	= 		null;
	   String 			redID 	=		null;
	   PersistenceManager 	pm 	= 		null;
	   Query queryUserDetails	=		null;
	   List<AttachmentsJdo> attachmentsInfo=		null;
		
	   try
	   {
		   		System.out.println("Inside fetchtable method !");
		   		redID 	=			request.getParameter("redID");
		   		pm      =      	PersistenceManagerUtil.getPersistenceManager();
		   		HashMap<String, AttachmentsJdo> tableEntry 	    =      	new HashMap<String,  AttachmentsJdo>();
		   		queryUserDetails    =  	 	pm.newQuery(AttachmentsJdo.class,"red_Id == '"+redID+"'");
		   		attachmentsInfo     =      	(List<AttachmentsJdo>) queryUserDetails.execute();
		        for( AttachmentsJdo value:attachmentsInfo )
		        {
		        		tableEntry.put(value.getAttachment_Id(), value);
		        }  
		        status               						   =   	  new ObjectMapper().writeValueAsString(tableEntry);
	   }
	   catch(Exception e)
	   {
		   log.log( Level.SEVERE  , e.getMessage() ,  e );
	   }
	return status;
   }
  @RequestMapping(value = "/deleteAttachment", method = RequestMethod.POST)
  public  @ResponseBody String deleteAttachment(HttpServletRequest req, HttpServletResponse resp) throws GeneralSecurityException, IOException, ServletException 
  {
	    System.out.println("visits deleteAttachment :: "+req.getParameter("attachmentID"));
		 	String attachmentID					=		req.getParameter("attachmentID");
		    Query queryUserDetails				=		null;
		    List<AttachmentsJdo> attachmentInfo	=		null;
		    PersistenceManager 	pm 				= 		null;
		    try
		    {
		    	if(attachmentID!=null)
		    	{
		    		pm 	=   PersistenceManagerUtil.getPersistenceManager();
 			   	queryUserDetails =  	 	pm.newQuery(AttachmentsJdo.class,"attachment_Id == '"+attachmentID+"'");
 			   	attachmentInfo     =      	(List<AttachmentsJdo>) queryUserDetails.execute();
 			   	System.out.println("the attachmentInfo size is this :: "+attachmentInfo.size());	
 			   	for( AttachmentsJdo value:attachmentInfo )
 			   	{
 			   			pm.deletePersistent(value);
 			   	}
		    	}
		    	
		    }
		    catch(Exception e)
		    {
		    	e.printStackTrace();
		    	return "failure";
		    }
		  return "success";
  }
}