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
	
	
}
