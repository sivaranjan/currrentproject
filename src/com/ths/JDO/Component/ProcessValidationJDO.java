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
	private String comment;
	
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

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}
}
