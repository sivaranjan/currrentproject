package com.ths.JDO.Component;

import java.util.Date;

import com.google.appengine.api.datastore.Text;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class PlanningCustomerDeliveryJDO {
	@Id
	@Index
	private Long PlanningCustomerDeliveryID;
	@Index
	private String componentID;
	@Index
	private int quantity;
	@Index
	private Date dateOf ;
	@Index
	private Text comment;
	public PlanningCustomerDeliveryJDO()
	{
		//
	}
	public Long getPlanningCustomerDeliveryID() {
		return PlanningCustomerDeliveryID;
	}
	public void setPlanningCustomerDeliveryID(Long planningCustomerDeliveryID) {
		PlanningCustomerDeliveryID = planningCustomerDeliveryID;
	}
	public String getComponentID() {
		return componentID;
	}
	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public Date getDateOf() {
		return dateOf;
	}
	public void setDateOf(Date dateOf) {
		this.dateOf = dateOf;
	}
	public Text getComment() {
		return comment;
	}
	public void setComment(Text comment) {
		this.comment = comment;
	}
	
	
}
