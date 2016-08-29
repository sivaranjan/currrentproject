package com.ths.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.ActorsDAO;
import com.ths.JDO.ActorsJDO;


@RestController
@RequestMapping("/actor")
public class ActorsController {

    @Autowired
    private ActorsDAO actorsDao;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody ActorsJDO actor, UriComponentsBuilder ucBuilder) 
    {
        System.out.println("Actor details");
  
        actorsDao.save(actor);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}
