package com.ths.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.PrototypistsDAO;
import com.ths.JDO.PrototypistsJDO;


@Controller
@RequestMapping("/prototypist")
public class ProtoTypistsController {

    @Autowired
    private PrototypistsDAO prototypistDao;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody PrototypistsJDO places, UriComponentsBuilder ucBuilder) {
        System.out.println("Prototypist details");
  
        prototypistDao.save(places);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}
