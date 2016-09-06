package com.ths.JDO;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ProductTypesJDO {
	
	@Id
	@Index
	private Long productType_Uniqueid;
	@Index
	private String productType;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();

	public ProductTypesJDO()
	{
		//
	}

	public Long getProductType_Uniqueid() {
		return productType_Uniqueid;
	}

	public void setProductType_Uniqueid(Long productType_Uniqueid) {
		this.productType_Uniqueid = productType_Uniqueid;
	}

	public String getProductType() {
		return productType;
	}

	public void setProductType(String productType) {
		this.productType = productType;
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
