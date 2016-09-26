package com.ths.JDO.Component;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class EstimatingCostandDelayJDO {
	@Id
	@Index
	private Long estimatingCostandDelayID;
	@Index
	private String componentID;
	@Index
	private String supportedBy;
	@Index
	private String listOfPrototypists;
	@Index
	private int estimatedAmountOfWorkshop;
	@Index
	private double estimatedUnitInternalCost;
	@Index
	private double estimatedUnitExternalCost;
	@Index
	private double estimatedTotalCostComponents;
	@Index
	private double hourlyRate;
	@Index
	private double fixedCosts;
	@Index
	private double estimatedTimeUnitOfComponents;
	@Index
	private double estimatedTimeTotalOfComponents;
	@Index
	private double totalCosts;
	@Index
	private Long modifiedDate;
	@Index
	private String modifiedBy;
	public EstimatingCostandDelayJDO()
	{
		
	}

	public Long getEstimatingCostandDelayID() {
		return estimatingCostandDelayID;
	}

	public void setEstimatingCostandDelayID(Long estimatingCostandDelayID) {
		this.estimatingCostandDelayID = estimatingCostandDelayID;
	}

	public String getComponentID() {
		return componentID;
	}

	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}

	public String getSupportedBy() {
		return supportedBy;
	}

	public void setSupportedBy(String supportedBy) {
		this.supportedBy = supportedBy;
	}

	public String getListOfPrototypists() {
		return listOfPrototypists;
	}

	public void setListOfPrototypists(String listOfPrototypists) {
		this.listOfPrototypists = listOfPrototypists;
	}

	public int getEstimatedAmountOfWorkshop() {
		return estimatedAmountOfWorkshop;
	}

	public void setEstimatedAmountOfWorkshop(int estimatedAmountOfWorkshop) {
		this.estimatedAmountOfWorkshop = estimatedAmountOfWorkshop;
	}

	public double getEstimatedUnitInternalCost() {
		return estimatedUnitInternalCost;
	}

	public void setEstimatedUnitInternalCost(double estimatedUnitInternalCost) {
		this.estimatedUnitInternalCost = estimatedUnitInternalCost;
	}

	public double getEstimatedUnitExternalCost() {
		return estimatedUnitExternalCost;
	}

	public void setEstimatedUnitExternalCost(double estimatedUnitExternalCost) {
		this.estimatedUnitExternalCost = estimatedUnitExternalCost;
	}

	public double getEstimatedTotalCostComponents() {
		return estimatedTotalCostComponents;
	}

	public void setEstimatedTotalCostComponents(double estimatedTotalCostComponents) {
		this.estimatedTotalCostComponents = estimatedTotalCostComponents;
	}

	public double getHourlyRate() {
		return hourlyRate;
	}

	public void setHourlyRate(double hourlyRate) {
		this.hourlyRate = hourlyRate;
	}

	public double getFixedCosts() {
		return fixedCosts;
	}

	public void setFixedCosts(double fixedCosts) {
		this.fixedCosts = fixedCosts;
	}

	public double getEstimatedTimeUnitOfComponents() {
		return estimatedTimeUnitOfComponents;
	}

	public void setEstimatedTimeUnitOfComponents(
			double estimatedTimeUnitOfComponents) {
		this.estimatedTimeUnitOfComponents = estimatedTimeUnitOfComponents;
	}

	public double getEstimatedTimeTotalOfComponents() {
		return estimatedTimeTotalOfComponents;
	}

	public void setEstimatedTimeTotalOfComponents(
			double estimatedTimeTotalOfComponents) {
		this.estimatedTimeTotalOfComponents = estimatedTimeTotalOfComponents;
	}

	public double getTotalCosts() {
		return totalCosts;
	}

	public void setTotalCosts(double totalCosts) {
		this.totalCosts = totalCosts;
	}

	public Long getModifiedDate() {
		return modifiedDate;
	}

	public void setModifiedDate(Long modifiedDate) {
		this.modifiedDate = modifiedDate;
	}

	public String getModifiedBy() {
		return modifiedBy;
	}

	public void setModifiedBy(String modifiedBy) {
		this.modifiedBy = modifiedBy;
	}
	
}
