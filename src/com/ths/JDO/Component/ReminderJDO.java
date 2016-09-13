package com.ths.JDO.Component;

import java.util.Date;

import com.google.appengine.api.datastore.Text;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ReminderJDO {
	@Id
	@Index
	private Long reminderID;
	@Index
	private String componentID;
	@Index
	private Long estimatingCostandDelayID;
	@Index
	private int Quantity;
	@Index
	private Date Dateof = new Date();
	public ReminderJDO()
	{
		//
	}
	public Long getReminderID() {
		return reminderID;
	}
	public void setReminderID(Long reminderID) {
		this.reminderID = reminderID;
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
	
	
	
}
