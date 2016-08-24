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
}
