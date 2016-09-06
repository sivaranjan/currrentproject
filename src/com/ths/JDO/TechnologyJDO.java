package com.ths.JDO;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class TechnologyJDO {
	
	@Id
	@Index
	private Long technology_Uniqueid;
	@Index
	private String technology;
	@Index
	private String productType;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();
	
	public TechnologyJDO()
	{
		
	}
	public Long getTechnology_Uniqueid() {
		return technology_Uniqueid;
	}
	public void setTechnology_Uniqueid(Long technology_Uniqueid) {
		this.technology_Uniqueid = technology_Uniqueid;
	}
	public String getTechnology() {
		return technology;
	}
	public void setTechnology(String technology) {
		this.technology = technology;
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
