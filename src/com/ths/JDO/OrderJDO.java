package com.ths.JDO;

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
	private Date date_of_the_Order;
	
		
	@Index
	private String order_Status;
	@Index
	private double total_Order_Amount;
	@Index
	private List<String> list_Component_Keys=new ArrayList<String>();
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
	
}
