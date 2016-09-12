package com.ths.JDO.Configuration;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ClientLaboJDO {
	
	@Id
	@Index
	private Long clientLabo_Uniqueid;
	@Index
	private String clientName;
	@Index
	private String address;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();
	
	public ClientLaboJDO()
	{
		
	}

	public Long getClientLabo_Uniqueid() {
		return clientLabo_Uniqueid;
	}

	public void setClientLabo_Uniqueid(Long clientLabo_Uniqueid) {
		this.clientLabo_Uniqueid = clientLabo_Uniqueid;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
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
