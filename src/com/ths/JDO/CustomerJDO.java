package com.ths.JDO;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class CustomerJDO {
	@Id
	@Index
	private Long customer_Uniqueid;
	@Index
	private String order_Order_ID;
	@Index
	private String no_customerOrder;
	@Index
	private String customerOrderAttachment;
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
	
	
}
