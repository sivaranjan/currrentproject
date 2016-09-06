package com.ths.JDO;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class RandDJDO {
	
	@Id
	@Index
	private Long rAndD_Uniqueid;
	@Index
	private String randD;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();

	public RandDJDO()
	{
		//
	}

	public Long getrAndD_Uniqueid() {
		return rAndD_Uniqueid;
	}

	public void setrAndD_Uniqueid(Long rAndD_Uniqueid) {
		this.rAndD_Uniqueid = rAndD_Uniqueid;
	}

	public String getRandD() {
		return randD;
	}

	public void setRandD(String randD) {
		this.randD = randD;
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
