package com.ths.model;

import java.util.Date;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;
import com.googlecode.objectify.annotation.Index;


@Entity
public class Entry 
{
  @Id public Long id;
  public String name;
  public String email;
  public String address;
  public String phone;
  @Index public Date date;


  public Entry() 
  {
    date = new Date();
  }


  public Entry(String name, String email,String address, String phone) 
  {
	this();  
	this.name = name;
	this.email = email;
	this.address = address;
	this.phone = phone;
	
          
  }

}
//[END all]
