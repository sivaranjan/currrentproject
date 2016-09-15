package com.ths.JDO.Attachment;
import java.util.List;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;
@Entity
public class AttachmentsJdo 
{
	@Id
	@Index
	private String ID;
	@Index
	private String attachment_Id;
	@Index
	private String red_Id; 
	@Index
	private String file_Name ;
	@Index
	private String upload_Type ;
	@Index
	private String upload_Link ;
	@Index
	private String file_Description ;
	@Index
	private List<String> revisionComment ;
	@Index
	private String Title;
	@Index
	private long uploaded_Date ;
	@Index
	private String uploaded_By ;
	@Index
	private String modified_By ;
	@Index
	private long modified_Date ;
	@Index
	private boolean isDeleted;

	public AttachmentsJdo() 
	{
		
    }

	public String getAttachment_Id() {
		return attachment_Id;
	}

	public void setAttachment_Id(String attachment_Id) {
		this.attachment_Id = attachment_Id;
	}

	public String getRed_Id() {
		return red_Id;
	}

	public void setRed_Id(String red_Id) {
		this.red_Id = red_Id;
	}

	public String getFile_Name() {
		return file_Name;
	}

	public void setFile_Name(String file_Name) {
		this.file_Name = file_Name;
	}

	public String getUpload_Type() {
		return upload_Type;
	}

	public void setUpload_Type(String upload_Type) {
		this.upload_Type = upload_Type;
	}

	public String getUpload_Link() {
		return upload_Link;
	}

	public void setUpload_Link(String upload_Link) {
		this.upload_Link = upload_Link;
	}

	public String getFile_Description() {
		return file_Description;
	}

	public void setFile_Description(String file_Description) {
		this.file_Description = file_Description;
	}

	public List<String> getRevisionComment() {
		return revisionComment;
	}

	public void setRevisionComment(List<String> revisionComment) {
		this.revisionComment = revisionComment;
	}

	public String getTitle() {
		return Title;
	}

	public void setTitle(String title) {
		Title = title;
	}

	public long getUploaded_Date() {
		return uploaded_Date;
	}

	public void setUploaded_Date(long uploaded_Date) {
		this.uploaded_Date = uploaded_Date;
	}

	public String getUploaded_By() {
		return uploaded_By;
	}

	public void setUploaded_By(String uploaded_By) {
		this.uploaded_By = uploaded_By;
	}

	public String getModified_By() {
		return modified_By;
	}

	public void setModified_By(String modified_By) {
		this.modified_By = modified_By;
	}

	public long getModified_Date() {
		return modified_Date;
	}

	public void setModified_Date(long modified_Date) {
		this.modified_Date = modified_Date;
	}

	public boolean isDeleted() {
		return isDeleted;
	}

	public void setDeleted(boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

	public String getID() {
		return ID;
	}

	public void setID(String iD) {
		ID = iD;
	}

}
