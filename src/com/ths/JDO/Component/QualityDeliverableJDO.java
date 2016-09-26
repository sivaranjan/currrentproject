package com.ths.JDO.Component;

import com.google.appengine.api.datastore.Text;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class QualityDeliverableJDO {
	@Id
	@Index
	private Long qualityDeliverableID;
	@Index
	private String componentID;
	@Index
	private String qualityDeliverable;
	@Index
	private boolean yesISpecified;
	@Index
	private Text comment;
	@Index
	private Long modifiedDate;
	@Index
	private String modifiedBy;
	public QualityDeliverableJDO()
	{
		
	}
	public Long getQualityDeliverableID() {
		return qualityDeliverableID;
	}

	public void setQualityDeliverableID(Long qualityDeliverableID) {
		this.qualityDeliverableID = qualityDeliverableID;
	}

	public String getComponentID() {
		return componentID;
	}

	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}

	public String getQualityDeliverable() {
		return qualityDeliverable;
	}

	public void setQualityDeliverable(String qualityDeliverable) {
		this.qualityDeliverable = qualityDeliverable;
	}

	public boolean isYesISpecified() {
		return yesISpecified;
	}

	public void setYesISpecified(boolean yesISpecified) {
		this.yesISpecified = yesISpecified;
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
