package com.ths.JDO;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ActorsListJDO 
{
	@Id
	@Index
	private Long actors_Uniqueid;
	@Index
	private String actorType;
	@Index
	private String actorEmail;
	@Index
	private String site;
	@Index
	private String addedBy;
	@Index
	private Date created = new Date();
	
	public ActorsListJDO() {
        //
    }

	public String getSite() {
		return site;
	}

	public void setSite(String site) {
		this.site = site;
	}

	public Long getActors_Uniqueid() {
		return actors_Uniqueid;
	}

	public void setActors_Uniqueid(Long actors_Uniqueid) {
		this.actors_Uniqueid = actors_Uniqueid;
	}

	public String getActorType() {
		return actorType;
	}

	public void setActorType(String actorType) {
		this.actorType = actorType;
	}

	public String getActorEmail() {
		return actorEmail;
	}

	public void setActorEmail(String actorEmail) {
		this.actorEmail = actorEmail;
	}

	public String getAddedBy() {
		return addedBy;
	}

	public void setAddedBy(String addedBy) {
		this.addedBy = addedBy;
	}

	public Date getCreated() {
		return created;
	}

	public void setCreated(Date created) {
		this.created = created;
	}
	
}
