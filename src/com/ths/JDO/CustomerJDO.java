package com.ths.JDO;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class CustomerJDO {
	@Id
	@Index
	private Long customer_Uniqueid;
	@Index
	private String order_Order_ID;
	@Index
	private String no_customerOrder;
	@Index
	private String customerOrderAttachment;
	@Index
	private String customer_Name;
	@Index
	private String customer_Code;
	@Index
	private String branch_Code;
	@Index
	private String provider_Code;
	@Index
	private String final_Delivery_Address;
	@Index
	private String additional_Address;
	@Index
	private String site_Address;
	@Index
	private String plateform;
	@Index
	private String incoterms;
	@Index
	private String place;
	@Index
	private String customer_Receiver_Name;
	@Index
	private String customer_Receiver_Telephone;
	@Index
	private String allocation_of_turnover;
	
	
	public Long getCustomer_Uniqueid() {
		return customer_Uniqueid;
	}
	public void setCustomer_Uniqueid(Long customer_Uniqueid) {
		this.customer_Uniqueid = customer_Uniqueid;
	}
	public String getOrder_Order_ID() {
		return order_Order_ID;
	}
	public void setOrder_Order_ID(String order_Order_ID) {
		this.order_Order_ID = order_Order_ID;
	}
	public String getNo_customerOrder() {
		return no_customerOrder;
	}
	public void setNo_customerOrder(String no_customerOrder) {
		this.no_customerOrder = no_customerOrder;
	}
	public String getCustomerOrderAttachment() {
		return customerOrderAttachment;
	}
	public void setCustomerOrderAttachment(String customerOrderAttachment) {
		this.customerOrderAttachment = customerOrderAttachment;
	}
	public String getCustomer_Name() {
		return customer_Name;
	}
	public void setCustomer_Name(String customer_Name) {
		this.customer_Name = customer_Name;
	}
	public String getCustomer_Code() {
		return customer_Code;
	}
	public void setCustomer_Code(String customer_Code) {
		this.customer_Code = customer_Code;
	}
	public String getBranch_Code() {
		return branch_Code;
	}
	public void setBranch_Code(String branch_Code) {
		this.branch_Code = branch_Code;
	}
	public String getProvider_Code() {
		return provider_Code;
	}
	public void setProvider_Code(String provider_Code) {
		this.provider_Code = provider_Code;
	}
	public String getFinal_Delivery_Address() {
		return final_Delivery_Address;
	}
	public void setFinal_Delivery_Address(String final_Delivery_Address) {
		this.final_Delivery_Address = final_Delivery_Address;
	}
	public String getAdditional_Address() {
		return additional_Address;
	}
	public void setAdditional_Address(String additional_Address) {
		this.additional_Address = additional_Address;
	}
	public String getSite_Address() {
		return site_Address;
	}
	public void setSite_Address(String site_Address) {
		this.site_Address = site_Address;
	}
	public String getPlateform() {
		return plateform;
	}
	public void setPlateform(String plateform) {
		this.plateform = plateform;
	}
	public String getIncoterms() {
		return incoterms;
	}
	public void setIncoterms(String incoterms) {
		this.incoterms = incoterms;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}
	public String getCustomer_Receiver_Name() {
		return customer_Receiver_Name;
	}
	public void setCustomer_Receiver_Name(String customer_Receiver_Name) {
		this.customer_Receiver_Name = customer_Receiver_Name;
	}
	public String getCustomer_Receiver_Telephone() {
		return customer_Receiver_Telephone;
	}
	public void setCustomer_Receiver_Telephone(String customer_Receiver_Telephone) {
		this.customer_Receiver_Telephone = customer_Receiver_Telephone;
	}
	public String getAllocation_of_turnover() {
		return allocation_of_turnover;
	}
	public void setAllocation_of_turnover(String allocation_of_turnover) {
		this.allocation_of_turnover = allocation_of_turnover;
	}
	
}
