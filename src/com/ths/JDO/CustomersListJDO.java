package com.ths.JDO;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class CustomersListJDO {
	
	@Id
	@Index
	private Long Customer_UniqueId;
	@Index
	private String customer_Name;
	@Index
	private String customer_Code;
	@Index
	private String branch_Code;
	@Index
	private String provider_Code;
	@Index
	private String customer_Address;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();
	
	public CustomersListJDO() {
        //
    }
	
	public Long getCustomer_UniqueId() {
		return Customer_UniqueId;
	}
	public void setCustomer_UniqueId(Long customer_UniqueId) {
		Customer_UniqueId = customer_UniqueId;
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
	public String getCustomer_Address() {
		return customer_Address;
	}
	public void setCustomer_Address(String customer_Address) {
		this.customer_Address = customer_Address;
	}
	public String getAdded_By() {
		return added_By;
	}
	public void setAdded_By(String added_By) {
		this.added_By = added_By;
	}
	public Date getAdded_On() {
		return added_On;
	}
	public void setAdded_On(Date added_On) {
		this.added_On = added_On;
	}
	
	
}
