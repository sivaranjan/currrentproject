package com.ths.service;

import com.googlecode.objectify.ObjectifyService;
import com.ths.JDO.Attachment.AttachmentsJdo;
import com.ths.JDO.Component.ComponentIDJDO;
import com.ths.JDO.Configuration.ActorsListJDO;
import com.ths.JDO.Configuration.AllocationTurnOverJDO;
import com.ths.JDO.Configuration.ClientLaboJDO;
import com.ths.JDO.Configuration.CustomersListJDO;
import com.ths.JDO.Configuration.IncotermsJDO;
import com.ths.JDO.Configuration.PlacesJDO;
import com.ths.JDO.Configuration.PlateformJDO;
import com.ths.JDO.Configuration.ProductTypesJDO;
import com.ths.JDO.Configuration.PrototypistsJDO;
import com.ths.JDO.Configuration.RandDJDO;
import com.ths.JDO.Configuration.SitesListJDO;
import com.ths.JDO.Configuration.TechnologyJDO;
import com.ths.JDO.Example.Example;
import com.ths.JDO.Order.IdJDO;
import com.ths.JDO.Order.OrderJDO;
import com.ths.JDO.User.UserJDO;

public class Entity {


    protected void init() {
       System.out.println("Starting app");

        registerEntities();
    }

    private void registerEntities() {
        System.out.println("Registering entities...");
        ObjectifyService.register(Example.class);
        ObjectifyService.register(OrderJDO.class);
        ObjectifyService.register(ActorsListJDO.class);
        ObjectifyService.register(SitesListJDO.class);
        ObjectifyService.register(CustomersListJDO.class);
        ObjectifyService.register(IncotermsJDO.class);
        ObjectifyService.register(PlacesJDO.class);
        ObjectifyService.register(PlateformJDO.class);
        ObjectifyService.register(IdJDO.class);
        ObjectifyService.register(UserJDO.class);
        ObjectifyService.register(ComponentIDJDO.class);
        ObjectifyService.register(ProductTypesJDO.class);
        ObjectifyService.register(PrototypistsJDO.class);
        ObjectifyService.register(RandDJDO.class);
        ObjectifyService.register(TechnologyJDO.class);
        ObjectifyService.register(AllocationTurnOverJDO.class);
        ObjectifyService.register(ClientLaboJDO.class);
        ObjectifyService.register(AttachmentsJdo.class);
    }

}
