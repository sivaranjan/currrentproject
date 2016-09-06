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

import com.ths.DAO.ClientLaboDAO;
import com.ths.DAO.TechnologyDAO;
import com.ths.JDO.ClientLaboJDO;
import com.ths.JDO.TechnologyJDO;


@Controller
@RequestMapping("/clientLabo")
public class clientLaboController {

    @Autowired
    private ClientLaboDAO clientLaboDao;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody ClientLaboJDO clientLabo, UriComponentsBuilder ucBuilder) {
        System.out.println("Technology details");
  
        clientLaboDao.save(clientLabo);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}
