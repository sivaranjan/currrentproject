package com.ths.JDO;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class IncotermsJDO {
	
@Id
@Index
private Long incoterms_Uniqueid;
@Index
private String incoterms;
@Index
private String infos;
@Index
private String added_By;
@Index
private Date added_On = new Date();

public IncotermsJDO()
{
	//
}

public Long getIncoterms_Uniqueid() {
	return incoterms_Uniqueid;
}

public void setIncoterms_Uniqueid(Long incoterms_Uniqueid) {
	this.incoterms_Uniqueid = incoterms_Uniqueid;
}

public String getIncoterms() {
	return incoterms;
}

public void setIncoterms(String incoterms) {
	this.incoterms = incoterms;
}

public String getInfos() {
	return infos;
}

public void setInfos(String infos) {
	this.infos = infos;
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
