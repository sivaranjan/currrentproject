package com.ths.JDO.Component;

import java.util.Date;

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
	private String componentDescriptionID;
	@Index
	private String Quantity;
	@Index
	private Date Dateof = new Date();
	@Index
	private String Comment;
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
	public String getComponentDescriptionID() {
		return componentDescriptionID;
	}
	public void setComponentDescriptionID(String componentDescriptionID) {
		this.componentDescriptionID = componentDescriptionID;
	}
	public String getQuantity() {
		return Quantity;
	}
	public void setQuantity(String quantity) {
		Quantity = quantity;
	}
	public Date getDateof() {
		return Dateof;
	}
	public void setDateof(Date dateof) {
		Dateof = dateof;
	}
	public String getComment() {
		return Comment;
	}
	public void setComment(String comment) {
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
