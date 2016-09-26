package com.ths.JDO.Configuration;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class AllocationTurnOverJDO {
	
	@Id
	@Index
	private Long allocation_Uniqueid;
	@Index
	private String allocation;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();

	public AllocationTurnOverJDO()
	{
		
	}

	public Long getAllocation_Uniqueid() {
		return allocation_Uniqueid;
	}

	public void setAllocation_Uniqueid(Long allocation_Uniqueid) {
		this.allocation_Uniqueid = allocation_Uniqueid;
	}

	public String getAllocation() {
		return allocation;
	}

	public void setAllocation(String allocation) {
		this.allocation = allocation;
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
