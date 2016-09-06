package com.ths.service;

import com.googlecode.objectify.ObjectifyService;
import com.ths.JDO.ActorsListJDO;
import com.ths.JDO.AllocationTurnOverJDO;
import com.ths.JDO.ClientLaboJDO;
import com.ths.JDO.ComponentIDJDO;
import com.ths.JDO.CustomersListJDO;
import com.ths.JDO.Example;
import com.ths.JDO.IdJDO;
import com.ths.JDO.IncotermsJDO;
import com.ths.JDO.OrderJDO;
import com.ths.JDO.PlacesJDO;
import com.ths.JDO.PlateformJDO;
import com.ths.JDO.ProductTypesJDO;
import com.ths.JDO.PrototypistsJDO;
import com.ths.JDO.RandDJDO;
import com.ths.JDO.SitesListJDO;
import com.ths.JDO.TechnologyJDO;
import com.ths.JDO.UserJDO;

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
        
    }

}
