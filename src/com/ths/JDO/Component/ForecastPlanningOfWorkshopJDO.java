package com.ths.JDO.Component;

import java.util.Date;

import com.google.appengine.api.datastore.Text;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ForecastPlanningOfWorkshopJDO {
	@Id
	@Index
	private Long forkcastPlanningOfWorkshopID;
	@Index
	private String componentID;
	@Index
	private Long estimatingCostandDelayID;
	@Index
	private int Quantity;
	@Index
	private Date Dateof = new Date();
	@Index
	private Text Comment;
	public ForecastPlanningOfWorkshopJDO()
	{
		//
	}
	public String getComponentID() {
		return componentID;
	}
	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}
	public Long getEstimatingCostandDelayID() {
		return estimatingCostandDelayID;
	}
	public void setEstimatingCostandDelayID(Long estimatingCostandDelayID) {
		this.estimatingCostandDelayID = estimatingCostandDelayID;
	}
	public int getQuantity() {
		return Quantity;
	}
	public void setQuantity(int quantity) {
		Quantity = quantity;
	}
	public Date getDateof() {
		return Dateof;
	}
	public void setDateof(Date dateof) {
		Dateof = dateof;
	}
	public Text getComment() {
		return Comment;
	}
	public void setComment(Text comment) {
		Comment = comment;
	}
	public Long getForkcastPlanningOfWorkshopID() {
		return forkcastPlanningOfWorkshopID;
	}
	public void setForkcastPlanningOfWorkshopID(Long forkcastPlanningOfWorkshopID) {
		this.forkcastPlanningOfWorkshopID = forkcastPlanningOfWorkshopID;
	}
	
	
}
