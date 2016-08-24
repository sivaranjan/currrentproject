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
	public String getMep_Study() {
		return mep_Study;
	}
	public void setMep_Study(String mep_Study) {
		this.mep_Study = mep_Study;
	}
	public String getQuality() {
		return quality;
	}
	public void setQuality(String quality) {
		this.quality = quality;
	}
	public String getProto_Workshop() {
		return proto_Workshop;
	}
	public void setProto_Workshop(String proto_Workshop) {
		this.proto_Workshop = proto_Workshop;
	}
	public String getControl_Management() {
		return control_Management;
	}
	public void setControl_Management(String control_Management) {
		this.control_Management = control_Management;
	}
	public String getFo_Trade() {
		return fo_Trade;
	}
	public void setFo_Trade(String fo_Trade) {
		this.fo_Trade = fo_Trade;
	}
	public String getAdv() {
		return adv;
	}
	public void setAdv(String adv) {
		this.adv = adv;
	}
	public String getProject_Manager() {
		return project_Manager;
	}
	public void setProject_Manager(String project_Manager) {
		this.project_Manager = project_Manager;
	}
	public String getRequester() {
		return requester;
	}
	public void setRequester(String requester) {
		this.requester = requester;
	}
	
}
