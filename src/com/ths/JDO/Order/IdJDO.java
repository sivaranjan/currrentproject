package com.ths.JDO.Order;

import com.googlecode.objectify.annotation.Entity;
import com.googlecode.objectify.annotation.Id;

@Entity
public class IdJDO {

    @Id
    private Long id;

    int next_id ;


    public IdJDO() {
        //
    }


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public int getNext_id() {
		return next_id;
	}


	public void setNext_id(int next_id) {
		this.next_id = next_id;
	}

   
}