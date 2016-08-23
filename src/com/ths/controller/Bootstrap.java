package com.ths.controller;

import com.googlecode.objectify.ObjectifyService;
import com.ths.model.Example;

public class Bootstrap {


    protected void init() {
       System.out.println("Starting app");

        registerEntities();
    }

    private void registerEntities() {
        System.out.println("Registering entities...");
        ObjectifyService.register(Example.class);


    }

}
