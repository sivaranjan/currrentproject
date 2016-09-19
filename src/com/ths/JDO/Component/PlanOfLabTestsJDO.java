package com.ths.JDO.Component;

import java.util.Date;

import com.google.appengine.api.datastore.Text;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class PlanOfLabTestsJDO {
	@Id
	@Index
	private Long PlanOfLabTestsID;
	@Index
	private String componentID;
	@Index
	private Long technicalDefinitionID;
	@Index
	private int quantity;
	@Index
	private String testsType;
	@Index
	private String testRequestNumber;
	@Index
	private Date atpDateOfDelivery;
	public PlanOfLabTestsJDO()
	{
		//
	}
	public Long getPlanOfLabTestsID() {
		return PlanOfLabTestsID;
	}
	public void setPlanOfLabTestsID(Long planOfLabTestsID) {
		PlanOfLabTestsID = planOfLabTestsID;
	}
	public String getComponentID() {
		return componentID;
	}
	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}
	public Long getTechnicalDefinitionID() {
		return technicalDefinitionID;
	}
	public void setTechnicalDefinitionID(Long technicalDefinitionID) {
		this.technicalDefinitionID = technicalDefinitionID;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getTestsType() {
		return testsType;
	}
	public void setTestsType(String testsType) {
		this.testsType = testsType;
	}
	public String getTestRequestNumber() {
		return testRequestNumber;
	}
	public void setTestRequestNumber(String testRequestNumber) {
		this.testRequestNumber = testRequestNumber;
	}
	public Date getAtpDateOfDelivery() {
		return atpDateOfDelivery;
	}
	public void setAtpDateOfDelivery(Date atpDateOfDelivery) {
		this.atpDateOfDelivery = atpDateOfDelivery;
	}
}
