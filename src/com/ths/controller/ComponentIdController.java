package com.ths.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.ComponentIDDAO;
import com.ths.JDO.ComponentIDJDO;


@RestController
@RequestMapping("/compidgenerator")
public class ComponentIdController {

    @Autowired
    private ComponentIDDAO componentIDDAO;

    @RequestMapping(value = "/createNewID", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody ComponentIDJDO genID, UriComponentsBuilder ucBuilder) 
    {
        System.out.println("Actor details");
        genID.setNext_id(2000);
        componentIDDAO.save(genID);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
}
