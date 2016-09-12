package com.ths.controller.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.Configuration.ProductTypeDAO;
import com.ths.JDO.Configuration.ProductTypesJDO;


@Controller
@RequestMapping("/producttype")
public class ProductTypeController {

    @Autowired
    private ProductTypeDAO producttypeDao;

    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody ProductTypesJDO places, UriComponentsBuilder ucBuilder) {
        System.out.println("Product Type details");
  
        producttypeDao.save(places);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}
