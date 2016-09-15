package com.ths.JDO.Order;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class OrderJDO {
	@Id
	@Index
	private Long id;
	@Index
	private String site_Workshop_Prototype;
	@Index
	private String geoSite;
	@Index
	private String no_prototype_order;
	@Index
	private String proto_Type;
	@Index
	private boolean pcc;
	@Index
	private boolean open_Order;
	@Index
	private boolean frittage;
	@Index
	private boolean e52;
	@Index
	private boolean intraLE;
	@Index
	private String type_of_the_Prototype_Order;
	@Index
	private Date date_of_the_Order  = new Date();
	
	/*============================================== Actors JDO ===============================================*/
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
	
	/*=============================================== Customers JDO ==================================================*/
	private String no_customerOrder;
	@Index
	private List<String> customerOrderAttachment=new ArrayList<String>();
	@Index
	private String customer_Name;
	@Index
	private String customer_Code;
	@Index
	private String branch_Code;
	@Index
	private String provider_Code;
	@Index
	private String final_Delivery_Address;
	@Index
	private String additional_Address;
	@Index
	private String site_Address;
	@Index
	private String plateform;
	@Index
	private String incoterms;
	@Index
	private String place;
	@Index
	private String customer_Receiver_Name;
	@Index
	private String customer_Receiver_Telephone;
	@Index
	private String allocation_of_turnover;
	
	/*================================================= Yet to decided ==================================*/
	@Index
	private String order_Status;
	@Index
	private double total_Order_Amount;
	
	@Index
	private List<String> list_Component_Keys=new ArrayList<String>();
	public OrderJDO()
	{
		//
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getSite_Workshop_Prototype() {
		return site_Workshop_Prototype;
	}
	public void setSite_Workshop_Prototype(String site_Workshop_Prototype) {
		this.site_Workshop_Prototype = site_Workshop_Prototype;
	}
	public String getGeoSite() {
		return geoSite;
	}
	public void setGeoSite(String geoSite) {
		this.geoSite = geoSite;
	}
	public String getNo_prototype_order() {
		return no_prototype_order;
	}
	public void setNo_prototype_order(String no_prototype_order) {
		this.no_prototype_order = no_prototype_order;
	}
	public String getProto_Type() {
		return proto_Type;
	}
	public void setProto_Type(String proto_Type) {
		this.proto_Type = proto_Type;
	}
	public boolean isPcc() {
		return pcc;
	}
	public void setPcc(boolean pcc) {
		this.pcc = pcc;
	}
	public boolean isOpen_Order() {
		return open_Order;
	}
	public void setOpen_Order(boolean open_Order) {
		this.open_Order = open_Order;
	}
	public boolean isFrittage() {
		return frittage;
	}
	public void setFrittage(boolean frittage) {
		this.frittage = frittage;
	}
	public boolean isE52() {
		return e52;
	}
	public void setE52(boolean e52) {
		this.e52 = e52;
	}
	public boolean isIntraLE() {
		return intraLE;
	}
	public void setIntraLE(boolean intraLE) {
		this.intraLE = intraLE;
	}
	public String getType_of_the_Prototype_Order() {
		return type_of_the_Prototype_Order;
	}
	public void setType_of_the_Prototype_Order(String type_of_the_Prototype_Order) {
		this.type_of_the_Prototype_Order = type_of_the_Prototype_Order;
	}
	public Date getDate_of_the_Order() {
		return date_of_the_Order;
	}
	public void setDate_of_the_Order(Date date_of_the_Order) {
		this.date_of_the_Order = date_of_the_Order;
	}
	public String getOrder_Status() {
		return order_Status;
	}
	public void setOrder_Status(String order_Status) {
		this.order_Status = order_Status;
	}
	public double getTotal_Order_Amount() {
		return total_Order_Amount;
	}
	public void setTotal_Order_Amount(double total_Order_Amount) {
		this.total_Order_Amount = total_Order_Amount;
	}
	public List<String> getList_Component_Keys() {
		return list_Component_Keys;
	}
	public void setList_Component_Keys(List<String> list_Component_Keys) {
		this.list_Component_Keys = list_Component_Keys;
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

	public String getNo_customerOrder() {
		return no_customerOrder;
	}

	public void setNo_customerOrder(String no_customerOrder) {
		this.no_customerOrder = no_customerOrder;
	}

	public List<String> getCustomerOrderAttachment() {
		return customerOrderAttachment;
	}

	public void setCustomerOrderAttachment(List<String> customerOrderAttachment) {
		this.customerOrderAttachment = customerOrderAttachment;
	}

	public String getCustomer_Name() {
		return customer_Name;
	}

	public void setCustomer_Name(String customer_Name) {
		this.customer_Name = customer_Name;
	}

	public String getCustomer_Code() {
		return customer_Code;
	}

	public void setCustomer_Code(String customer_Code) {
		this.customer_Code = customer_Code;
	}

	public String getBranch_Code() {
		return branch_Code;
	}

	public void setBranch_Code(String branch_Code) {
		this.branch_Code = branch_Code;
	}

	public String getProvider_Code() {
		return provider_Code;
	}

	public void setProvider_Code(String provider_Code) {
		this.provider_Code = provider_Code;
	}

	public String getFinal_Delivery_Address() {
		return final_Delivery_Address;
	}

	public void setFinal_Delivery_Address(String final_Delivery_Address) {
		this.final_Delivery_Address = final_Delivery_Address;
	}

	public String getAdditional_Address() {
		return additional_Address;
	}

	public void setAdditional_Address(String additional_Address) {
		this.additional_Address = additional_Address;
	}

	public String getSite_Address() {
		return site_Address;
	}

	public void setSite_Address(String site_Address) {
		this.site_Address = site_Address;
	}

	public String getPlateform() {
		return plateform;
	}

	public void setPlateform(String plateform) {
		this.plateform = plateform;
	}

	public String getIncoterms() {
		return incoterms;
	}

	public void setIncoterms(String incoterms) {
		this.incoterms = incoterms;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getCustomer_Receiver_Name() {
		return customer_Receiver_Name;
	}

	public void setCustomer_Receiver_Name(String customer_Receiver_Name) {
		this.customer_Receiver_Name = customer_Receiver_Name;
	}

	public String getCustomer_Receiver_Telephone() {
		return customer_Receiver_Telephone;
	}

	public void setCustomer_Receiver_Telephone(String customer_Receiver_Telephone) {
		this.customer_Receiver_Telephone = customer_Receiver_Telephone;
	}

	public String getAllocation_of_turnover() {
		return allocation_of_turnover;
	}

	public void setAllocation_of_turnover(String allocation_of_turnover) {
		this.allocation_of_turnover = allocation_of_turnover;
	}
	
	
}
