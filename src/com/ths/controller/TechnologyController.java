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

import com.ths.DAO.TechnologyDAO;
import com.ths.JDO.TechnologyJDO;


@Controller
@RequestMapping("/technology")
public class TechnologyController {

    @Autowired
    private TechnologyDAO technologyDao;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody TechnologyJDO technology, UriComponentsBuilder ucBuilder) {
        System.out.println("Technology details");
  
        technologyDao.save(technology);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}