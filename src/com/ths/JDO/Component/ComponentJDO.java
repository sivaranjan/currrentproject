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
	private String customerReference;
	@Index
	private String productSpecification;
	@Index
	private String productType;
	@Index
	private String unitSellingPrice;
	@Index
	private String directDeliverytoCustomer;
	@Index
	private String customer;
	@Index
	private String laboAdress;
	@Index
	private String comment;
	/*public ComponentDescriptionJDO()
	{
		
	}*/
	
	
	
}
