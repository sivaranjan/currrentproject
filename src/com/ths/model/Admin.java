package com.ths.model;

import java.io.Serializable;

import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
@SuppressWarnings("serial")
@PersistenceCapable(detachable="true")
public class Admin implements Serializable
{
@Persistent
@PrimaryKey
public String emailID;
@Persistent
public String privileges;
@Persistent
public String actor;
@Persistent
public String addedBy;
@Persistent
public String addedOn;
@Persistent
public String languages;

public String getEmailID() {
	return emailID;
}
public void setEmailID(String emailID) {
	this.emailID = emailID;
}
public String getPrivileges() {
	return privileges;
}
public void setPrivileges(String privileges) {
	this.privileges = privileges;
}
public String getActor() {
	return actor;
}
public void setActor(String actor) {
	this.actor = actor;
}
public String getAddedBy() {
	return addedBy;
}
public void setAddedBy(String addedBy) {
	this.addedBy = addedBy;
}
public String getAddedOn() {
	return addedOn;
}
public void setAddedOn(String addedOn) {
	this.addedOn = addedOn;
}
public String getLanguages() {
	return languages;
}
public void setLanguages(String languages) {
	this.languages = languages;
}
}
