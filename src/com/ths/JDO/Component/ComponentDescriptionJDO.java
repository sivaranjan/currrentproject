package com.ths.JDO.Component;

import com.google.appengine.api.datastore.Text;
import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class ComponentDescriptionJDO {
	@Id
	@Index
	private Long componentDescriptionID;
	@Index
	private String componentID;
	@Index
	private String customerReference;
	@Index
	private String productSpecification;
	@Index
	private String productType;
	@Index
	private double unitSellingPrice;
	@Index
	private String directDeliverytoCustomer;
	@Index
	private String customer;
	@Index
	private String laboAdress;
	@Index
	private Text comment_componentDescription;
	@Index
	private Long modifiedDate;
	@Index
	private String modifiedBy;

	public ComponentDescriptionJDO()
	{
		
	}
	public Long getComponentDescriptionID() {
		return componentDescriptionID;
	}
	public void setComponentDescriptionID(Long componentDescriptionID) {
		this.componentDescriptionID = componentDescriptionID;
	}
	public String getComponentID() {
		return componentID;
	}
	public void setComponentID(String componentID) {
		this.componentID = componentID;
	}
	public String getCustomerReference() {
		return customerReference;
	}
	public void setCustomerReference(String customerReference) {
		this.customerReference = customerReference;
	}
	public String getProductSpecification() {
		return productSpecification;
	}
	public void setProductSpecification(String productSpecification) {
		this.productSpecification = productSpecification;
	}
	public String getProductType() {
		return productType;
	}
	public void setProductType(String productType) {
		this.productType = productType;
	}
	public double getUnitSellingPrice() {
		return unitSellingPrice;
	}
	public void setUnitSellingPrice(double unitSellingPrice) {
		this.unitSellingPrice = unitSellingPrice;
	}
	public String getDirectDeliverytoCustomer() {
		return directDeliverytoCustomer;
	}
	public void setDirectDeliverytoCustomer(String directDeliverytoCustomer) {
		this.directDeliverytoCustomer = directDeliverytoCustomer;
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public String getLaboAdress() {
		return laboAdress;
	}
	public void setLaboAdress(String laboAdress) {
		this.laboAdress = laboAdress;
	}
	public Text getComment_componentDescription() {
		return comment_componentDescription;
	}
	public void setComment_componentDescription(Text comment_componentDescription) {
		this.comment_componentDescription = comment_componentDescription;
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
