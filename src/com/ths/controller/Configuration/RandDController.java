package com.ths.controller.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.Configuration.RandDDAO;
import com.ths.JDO.Configuration.RandDJDO;


@RestController
@RequestMapping("/rAndDController")
public class RandDController {

    @Autowired
    private RandDDAO randDAO;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody RandDJDO randD, UriComponentsBuilder ucBuilder) {
        System.out.println("RanD details");
  
        randDAO.save(randD);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}
