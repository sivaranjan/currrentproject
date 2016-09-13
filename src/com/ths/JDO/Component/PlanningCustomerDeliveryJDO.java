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
	private Long componentDescriptionID;
	@Index
	private int Quantity;
	@Index
	private Date Dateof = new Date();
	@Index
	private Text Comment;
	@Index
	private int TotalQuantity;
	@Index
	private double TotalAmount;
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
	public Long getComponentDescriptionID() {
		return componentDescriptionID;
	}
	public void setComponentDescriptionID(Long componentDescriptionID) {
		this.componentDescriptionID = componentDescriptionID;
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
	public int getTotalQuantity() {
		return TotalQuantity;
	}
	public void setTotalQuantity(int totalQuantity) {
		TotalQuantity = totalQuantity;
	}
	public double getTotalAmount() {
		return TotalAmount;
	}
	public void setTotalAmount(double totalAmount) {
		TotalAmount = totalAmount;
	}
	
}
