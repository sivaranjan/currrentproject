package com.ths.JDO;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class PlateformJDO {
	
@Id
@Index
private Long plateform_Uniqueid;
@Index
private String plateform;
@Index
private String added_By;
@Index
private Date added_On = new Date();

public PlateformJDO()
{
	//
}

public Long getPlateform_Uniqueid() {
	return plateform_Uniqueid;
}

public void setPlateform_Uniqueid(Long plateform_Uniqueid) {
	this.plateform_Uniqueid = plateform_Uniqueid;
}

public String getPlateform() {
	return plateform;
}

public void setPlateform(String plateform) {
	this.plateform = plateform;
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
