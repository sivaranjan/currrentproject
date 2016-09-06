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

import com.ths.DAO.IncotermsDAO;
import com.ths.JDO.IncotermsJDO;


@Controller
@RequestMapping("/incoterm")
public class IncotermsController {

    @Autowired
    private IncotermsDAO incotermsDao;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody IncotermsJDO incoterm, UriComponentsBuilder ucBuilder) {
        System.out.println("Incoterms details");
  
        incotermsDao.save(incoterm);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}
