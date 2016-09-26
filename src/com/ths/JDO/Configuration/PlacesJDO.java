package com.ths.JDO.Configuration;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class PlacesJDO {
	
	@Id
	@Index
	private Long places_Uniqueid;
	@Index
	private String places;
	@Index
	private String added_By;
	@Index
	private Date added_On = new Date();

	public PlacesJDO()
	{
		//
	}

	public Long getPlaces_Uniqueid() {
		return places_Uniqueid;
	}

	public void setPlaces_Uniqueid(Long places_Uniqueid) {
		this.places_Uniqueid = places_Uniqueid;
	}

	public String getPlaces() {
		return places;
	}

	public void setPlaces(String places) {
		this.places = places;
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
