package com.ths.JDO;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ActorsJDO 
{
	@Id
	@Index
	private Long actors_Uniqueid;
	@Index
	private String order_Order_ID;
	@Index
	private String requester; // view
	@Index 
	private String cadTeamMember_MEPStudy; // view
	@Index 
	private String managerRnD;
	@Index
	private String processTeamMember;
	@Index
	private String protoWorkshop; //  view
	@Index
	private String projectManager; // // view
	@Index
	private String managementController; //  view
	@Index
	private String qualityTeamMember; // view
	@Index
	private String kamCommerce;
	@Index
	private String salesAdministrator_ADV;  // view
	@Index
	private String invoicedLEController;
	@Index
	private String businessOwner;
	
	public ActorsJDO() {
        //
    }

	public Long getActors_Uniqueid() {
		return actors_Uniqueid;
	}

	public void setActors_Uniqueid(Long actors_Uniqueid) {
		this.actors_Uniqueid = actors_Uniqueid;
	}

	public String getOrder_Order_ID() {
		return order_Order_ID;
	}

	public void setOrder_Order_ID(String order_Order_ID) {
		this.order_Order_ID = order_Order_ID;
	}

	public String getRequester() {
		return requester;
	}

	public void setRequester(String requester) {
		this.requester = requester;
	}

	public String getCadTeamMember_MEPStudy() {
		return cadTeamMember_MEPStudy;
	}

	public void setCadTeamMember_MEPStudy(String cadTeamMember_MEPStudy) {
		this.cadTeamMember_MEPStudy = cadTeamMember_MEPStudy;
	}

	public String getManagerRnD() {
		return managerRnD;
	}

	public void setManagerRnD(String managerRnD) {
		this.managerRnD = managerRnD;
	}

	public String getProcessTeamMember() {
		return processTeamMember;
	}

	public void setProcessTeamMember(String processTeamMember) {
		this.processTeamMember = processTeamMember;
	}

	public String getProtoWorkshop() {
		return protoWorkshop;
	}

	public void setProtoWorkshop(String protoWorkshop) {
		this.protoWorkshop = protoWorkshop;
	}

	public String getProjectManager() {
		return projectManager;
	}

	public void setProjectManager(String projectManager) {
		this.projectManager = projectManager;
	}

	public String getManagementController() {
		return managementController;
	}

	public void setManagementController(String managementController) {
		this.managementController = managementController;
	}

	public String getQualityTeamMember() {
		return qualityTeamMember;
	}

	public void setQualityTeamMember(String qualityTeamMember) {
		this.qualityTeamMember = qualityTeamMember;
	}

	public String getKamCommerce() {
		return kamCommerce;
	}

	public void setKamCommerce(String kamCommerce) {
		this.kamCommerce = kamCommerce;
	}

	public String getSalesAdministrator_ADV() {
		return salesAdministrator_ADV;
	}

	public void setSalesAdministrator_ADV(String salesAdministrator_ADV) {
		this.salesAdministrator_ADV = salesAdministrator_ADV;
	}

	public String getInvoicedLEController() {
		return invoicedLEController;
	}

	public void setInvoicedLEController(String invoicedLEController) {
		this.invoicedLEController = invoicedLEController;
	}

	public String getBusinessOwner() {
		return businessOwner;
	}

	public void setBusinessOwner(String businessOwner) {
		this.businessOwner = businessOwner;
	}
	
	
}
