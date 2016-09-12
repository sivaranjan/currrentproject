package com.ths.JDO.User;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class UserJDO {

    @Id
    @Index
	private Long uniqueId;
	@Index
	private String userEmail;
	@Index
	private String language;
	@Index
	private Date lastLoggedDate = new Date();
	
	public UserJDO()
	{
		
	}
	public Long getUniqueId() {
		return uniqueId;
	}
	public void setUniqueId(Long uniqueId) {
		this.uniqueId = uniqueId;
	}
	public String getUseremail() {
		return userEmail;
	}
	public void setUseremail(String userEmail) {
		this.userEmail = userEmail;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public Date getLastLoggedDate() {
		return lastLoggedDate;
	}
	public void setLastLoggedDate(Date lastLoggedDate) {
		this.lastLoggedDate = lastLoggedDate;
	}

   
}