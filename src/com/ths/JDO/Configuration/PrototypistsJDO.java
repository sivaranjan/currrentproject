package com.ths.JDO.Configuration;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class PrototypistsJDO {
	
	@Id
	@Index
	private Long prototypist_Uniqueid;
	@Index
	private String prototypist;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();

	public PrototypistsJDO()
	{
		//
	}

	public Long getPrototypist_Uniqueid() {
		return prototypist_Uniqueid;
	}

	public void setPrototypist_Uniqueid(Long prototypist_Uniqueid) {
		this.prototypist_Uniqueid = prototypist_Uniqueid;
	}

	public String getPrototypist() {
		return prototypist;
	}

	public void setPrototypist(String prototypist) {
		this.prototypist = prototypist;
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
