package com.ths.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;

@Entity
public class CreateOrder {
	@Id
	@Index
	private Long id;
	@Index
	private String geoSite;
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
	private Date date_of_the_Order;
	@Index
	private String order_Status;
	@Index
	private double total_Order_Amount;
	@Index
	private String site_Workshop_Prototype;
	@Index
	private List<String> list_Component_Keys=new ArrayList<String>();
	@Index
	private List<String> list_Tech_Def_Keys=new ArrayList<String>();
	@Index
	private List<String> list_Process_Validation_Keys=new ArrayList<String>();
	@Index
	private List<String> list_Estimation_Keys=new ArrayList<String>();
	@Index
	private List<String> list_Quality_Deliver_Keys=new ArrayList<String>();
	@Index
	private String order_Order_ID;
	@Index
	private String mep_Study;
	@Index
	private String quality;
	@Index
	private String proto_Workshop;
	@Index
	private String control_Management;
	@Index
	private String fo_Trade;
	@Index
	private String adv;
	@Index
	private String project_Manager;
	@Index
	private String requester;
	@Index
	private String customerOrderNo;
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
	private double allocation_of_turnover;
}
