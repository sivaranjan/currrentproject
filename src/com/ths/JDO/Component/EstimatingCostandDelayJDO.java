package com.ths.JDO.Component;

import java.util.ArrayList;
import java.util.List;

import com.google.appengine.api.datastore.Text;
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
	private Text listOfPrototypists;
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
	private List<Long> foreCastPlanningOfWorkShopReference=new ArrayList<Long>();
	@Index
	private List<Long> reminderReference=new ArrayList<Long>();
		
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

	public Text getListOfPrototypists() {
		return listOfPrototypists;
	}

	public void setListOfPrototypists(Text listOfPrototypists) {
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

	public List<Long> getForeCastPlanningOfWorkShopReference() {
		return foreCastPlanningOfWorkShopReference;
	}

	public void setForeCastPlanningOfWorkShopReference(
			List<Long> foreCastPlanningOfWorkShopReference) {
		this.foreCastPlanningOfWorkShopReference = foreCastPlanningOfWorkShopReference;
	}

	public List<Long> getReminderReference() {
		return reminderReference;
	}

	public void setReminderReference(List<Long> reminderReference) {
		this.reminderReference = reminderReference;
	}

	
}
