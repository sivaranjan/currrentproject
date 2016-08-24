package com.ths.service;

import com.googlecode.objectify.ObjectifyService;
import com.ths.JDO.ActorsJDO;
import com.ths.JDO.CustomerJDO;
import com.ths.JDO.Example;
import com.ths.JDO.OrderJDO;

public class Entity {


    protected void init() {
       System.out.println("Starting app");

        registerEntities();
    }

    private void registerEntities() {
        System.out.println("Registering entities...");
        ObjectifyService.register(Example.class);
        ObjectifyService.register(OrderJDO.class);
        ObjectifyService.register(CustomerJDO.class);
        ObjectifyService.register(ActorsJDO.class);
        

    }

}
