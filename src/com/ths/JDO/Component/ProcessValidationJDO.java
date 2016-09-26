package com.ths.JDO.Component;

import com.google.appengine.api.datastore.Text;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ProcessValidationJDO {
	@Id
	@Index
	private Long processValidationID;
	@Index
	private String componentID;
	@Index
	private String processDeliverable;
	@Index
	private boolean yesIspecified;
	@Index
	private Text comment;
	@Index
	private Long modifiedDate;
	@Index
	private String modifiedBy;
	public ProcessValidationJDO()
	{
		
	}

	public Long getProcessValidationID() {
		return processValidationID;
	}

	public void setProcessValidationID(Long processValidationID) {
		this.processValidationID = processValidationID;
	}

	public String getComponentID() {
		return componentID;
	}

	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}

	public String getProcessDeliverable() {
		return processDeliverable;
	}

	public void setProcessDeliverable(String processDeliverable) {
		this.processDeliverable = processDeliverable;
	}

	public boolean isYesIspecified() {
		return yesIspecified;
	}

	public void setYesIspecified(boolean yesIspecified) {
		this.yesIspecified = yesIspecified;
	}

	public Text getComment() {
		return comment;
	}

	public void setComment(Text comment) {
		this.comment = comment;
	}

	public Long getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Long modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public String getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	
}
