package com.ths.controller.Attachment;
 
import java.io.IOException;
import java.security.GeneralSecurityException;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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
import com.ths.DAO.Order.OrderDAO;
import com.ths.JDO.Attachment.AttachmentsJdo;
import com.ths.JDO.Order.OrderJDO;
import com.ths.service.UuidGeneratorHelper;
 
@Controller
public class AttachmentContoller {
	private @Autowired HttpServletRequest request;
	private @Autowired HttpServletResponse resp;
	@Autowired
    private AttachmentsDAO attachmentDao;
	@Autowired
    private OrderDAO orderDao;
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
  	public void uploadattachments() throws GeneralSecurityException, IOException, ServletException, ParserConfigurationException, SAXException, JSONException 
   {
    	System.out.println("hgggfhfhfgftytfyfytfyfyf");
	  	String 	file_Name 					= 	null;
		String 	uploaded_By 				= 	null;
		String 	upload_Type 				=	null;
		String 	upload_Link     			=   null;
		String 	file_Description 			=	null;
		String 	Title 						= 	null;
		String  attachmentID 				= 	null;
		Map<String, List<BlobKey>> 	blobs 	= 	null;
		Map<String, List<FileInfo>> uploads = 	null;
		List<BlobKey>	blobKey  			= 	null;
		List<FileInfo> fileInfos 			= 	null;
		BlobKey blobKey1 					= 	null;
		boolean isDeleted 					= 	false;
		Date todate  						= 	new Date();
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
			file_Description 	=  	request.getParameter("file_Description");
			Title   			= 	request.getParameter("file_Title");
			uploaded_Date 		= 	todate.getTime();
			attachmentID        =   request.getParameter("attachmentID");
			for (FileInfo fileInfo : fileInfos) 
		    {
				file_Name = fileInfo.getFilename();
				upload_Type = fileInfo.getContentType();
		    }
			upload_Link 		=   request.getParameter("fileServeLink")+"="+blobKey1.getKeyString()+"&filename="+file_Name.replaceAll("[^a-zA-Z0-9.-]", "_");
			
			log.info("isDeleted is this :: "+isDeleted);
			log.info("file_Description is this :: "+file_Description);
			log.info("file_Name ::"+file_Name);
			log.info("Title ::"+Title);
			log.info("upload_Link ::"+upload_Link);
			log.info("uploaded_By ::"+uploaded_By);
			log.info("uploaded_Date ::"+uploaded_Date);
			AttachmentsJdo attachObject = new AttachmentsJdo();
			attachObject.setID(UuidGeneratorHelper.getUniqueId());
			attachObject.setAttachment_Id(attachmentID);
			attachObject.setDeleted(isDeleted);
			attachObject.setFile_Description(file_Description);
			attachObject.setFile_Name(file_Name);
			attachObject.setTitle(Title);
			attachObject.setUpload_Link(upload_Link);
			attachObject.setUpload_Type(upload_Type);
			attachObject.setUploaded_By(uploaded_By);
			attachObject.setUploaded_Date(uploaded_Date);
			attachObject.setModified_By("None");
			attachObject.setRevisionComment(null);
			attachmentDao.save(attachObject);
		}
		catch(Exception e)
		{
			log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
		}
    }
    @RequestMapping(value = "/updateAttachments", method = RequestMethod.GET)
  	public @ResponseBody String updateAttachments() throws GeneralSecurityException, IOException, ServletException, ParserConfigurationException, SAXException, JSONException 
   {
		String 	file_Description 				=	null;
		String 	Title 							= 	null;
		String attachment_Id 					= 	null;
		String  fileServeLink					=	null;
		String filename							=	null;
		Date todate  							= 	new Date();
		String revisionComment 					=	null;
		List<AttachmentsJdo> attachmentInfo 	=	null;
		List<String> revisionCommentsList		=	null;
		long modified_date;
		try
		{
			attachment_Id			=	request.getParameter("attachment_Id"); 
			file_Description 		=  	request.getParameter("file_Description");
			Title   				= 	request.getParameter("file_Title");
			fileServeLink			=	request.getParameter("fileServeLink");
			filename				=	request.getParameter("filename");
			log.info("the attachment_Id  is this :: "+attachment_Id);
			log.info("file_Description is this :: "+file_Description);
			log.info("Title ::"+Title);
			revisionCommentsList	= 	new ArrayList<String>();
			attachmentInfo 			=   attachmentDao.findByAttachmentID(attachment_Id);
			log.info("the attachmentInfo size is this :: "+attachmentInfo.size());
			User user 				= 	UserServiceFactory.getUserService().getCurrentUser();
			modified_date 			= 	todate.getTime();
			revisionComment			=	request.getParameter("revision_comment");
			   	for(AttachmentsJdo value:attachmentInfo )
			   	{
			   		value.setFile_Description(file_Description);
			   		value.setTitle(Title);
			   		value.setModified_By(user.toString());
			   		value.setModified_Date(modified_date);
			   		value.setUpload_Link(fileServeLink);
			   		value.setFile_Name(filename);
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
    	return uploadUrl+"?uuid_"+uuid;
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
  @RequestMapping(value = "/deleteAttachmentbyID", method = RequestMethod.POST)
  public  @ResponseBody String deleteCustomerOrderAttachment() throws GeneralSecurityException, IOException, ServletException 
  {
	    	log.info("visits deleteAttachmentbyID :: "+		request.getParameter("attachmentID"));
		 	String attachmentID			=		request.getParameter("attachmentID");
		 	String prototypeOrderID			=		request.getParameter("prototypeID");
		 	List<OrderJDO> orderBasedonID = null;
		 	List<String> customerOrderAttachment=new ArrayList<String>();
		    try
		    {
		    	 if(prototypeOrderID!=null)
	        	 {
	        		 orderBasedonID = orderDao.findByProtoID(prototypeOrderID);
	        		 log.info("orderBasedonID ::"+orderBasedonID);
	        		 for (OrderJDO obj :orderBasedonID )
	            	 {
	        			 customerOrderAttachment = obj.getCustomerOrderAttachment();
	        			 log.info("ipa va ::"+customerOrderAttachment);
	        			 for(int i=0;i<customerOrderAttachment.size();i++)
	        			 {
	        				 String attachmrntValue = customerOrderAttachment.get(i);
	        				 log.info("trying ..."+attachmrntValue);
	        				 log.info("checking.. ..."+attachmrntValue+" :: housing .."+attachmentID);
	        				 if(attachmrntValue.equalsIgnoreCase(attachmentID))
	        				 {
	        					 log.info("joo");
	        					 customerOrderAttachment.remove(attachmrntValue);
	        				 }
	        			 }
	        			 obj.setCustomerOrderAttachment(customerOrderAttachment);
	        			 orderDao.save(obj);
	            	 }
	        	 }
		    	 attachmentDao.deleteByAttachmentID(attachmentID);
		    }
		    catch(Exception e)
		    {
		    	log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
		    }
		    return "success";
  }
  
}