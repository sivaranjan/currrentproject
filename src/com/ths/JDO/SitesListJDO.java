package com.ths.JDO;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class SitesListJDO {

	@Id
	@Index
	private Long site_address_UniqueId;
	@Index
	private String site_Name;
	@Index
	private String address;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();
	
	public SitesListJDO() {
        //
    }
	public Long getSite_address_UniqueId() {
		return site_address_UniqueId;
	}
	public void setSite_address_UniqueId(Long site_address_UniqueId) {
		this.site_address_UniqueId = site_address_UniqueId;
	}
	public String getSite_Name() {
		return site_Name;
	}
	public void setSite_Name(String site_Name) {
		this.site_Name = site_Name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getAdded_By() {
		return added_By;
	}
	public void setAdded_By(String addedBy) {
		this.added_By = addedBy;
	}
	public Date getAdded_On() {
		return added_On;
	}
	public void setAdded_On(Date addedOn) {
		this.added_On = addedOn;
	}
}
