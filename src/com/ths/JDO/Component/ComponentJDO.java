package com.ths.JDO.Component;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ComponentJDO {
	@Id
	@Index
	private Long id;
	@Index
	private String orderIDReference;
	@Index
	private String componentID;
	@Index
	private String componentStatus;
	@Index
	private int totalQuantity;
	@Index
	private double totalAmount;
	@Index
	private long createdDate;
	@Index
	private long modifiedDate;
	@Index
	private String createdBy;
	@Index
	private String lastModifiedBy;
	
	public ComponentJDO()
	{
		//
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOrderIDReference() {
		return orderIDReference;
	}

	public void setOrderIDReference(String orderIDReference) {
		this.orderIDReference = orderIDReference;
	}

	public String getComponentID() {
		return componentID;
	}

	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}

	public String getComponentStatus() {
		return componentStatus;
	}

	public void setComponentStatus(String componentStatus) {
		this.componentStatus = componentStatus;
	}

	public int getTotalQuantity() {
		return totalQuantity;
	}

	public void setTotalQuantity(int totalQuantity) {
		this.totalQuantity = totalQuantity;
	}

	public double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(double totalAmount) {
		this.totalAmount = totalAmount;
	}

	public long getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(long createdDate) {
		this.createdDate = createdDate;
	}

	public long getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(long modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getLastModifiedBy() {
		return lastModifiedBy;
	}

	public void setLastModifiedBy(String lastModifiedBy) {
		this.lastModifiedBy = lastModifiedBy;
	}
	
}
