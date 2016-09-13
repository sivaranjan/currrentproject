package com.ths.JDO.Component;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ComponentJDO {
	@Id
	@Index
	private Long id;
	@Index
	private String orderIDReference;
	@Index
	private String componentID;
	@Index
	private String componentStatus;
	@Index
	private Long componentDescriptionReference;
	@Index
	private String technicalDefinitionReference;
	@Index
	private String qualityDeliverableReference;
	@Index
	private String processValidationReference;
	@Index
	private String estimatingCostReference;
	
	public ComponentJDO()
	{
		//
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOrderIDReference() {
		return orderIDReference;
	}

	public void setOrderIDReference(String orderIDReference) {
		this.orderIDReference = orderIDReference;
	}

	public String getComponentID() {
		return componentID;
	}

	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}

	public String getComponentStatus() {
		return componentStatus;
	}

	public void setComponentStatus(String componentStatus) {
		this.componentStatus = componentStatus;
	}

	public Long getComponentDescriptionReference() {
		return componentDescriptionReference;
	}

	public void setComponentDescriptionReference(
			Long componentDescriptionReference) {
		this.componentDescriptionReference = componentDescriptionReference;
	}

	public String getQualityDeliverableReference() {
		return qualityDeliverableReference;
	}

	public void setQualityDeliverableReference(String qualityDeliverableReference) {
		this.qualityDeliverableReference = qualityDeliverableReference;
	}

	public String getProcessValidationReference() {
		return processValidationReference;
	}

	public void setProcessValidationReference(String processValidationReference) {
		this.processValidationReference = processValidationReference;
	}

	public String getEstimatingCostReference() {
		return estimatingCostReference;
	}

	public void setEstimatingCostReference(String estimatingCostReference) {
		this.estimatingCostReference = estimatingCostReference;
	}

	public String getTechnicalDefinitionReference() {
		return technicalDefinitionReference;
	}

	public void setTechnicalDefinitionReference(String technicalDefinitionReference) {
		this.technicalDefinitionReference = technicalDefinitionReference;
	}
	
}
