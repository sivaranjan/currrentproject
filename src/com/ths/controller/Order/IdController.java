package com.ths.controller.Order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.Order.IdDAO;
import com.ths.JDO.Order.IdJDO;



@RestController
@RequestMapping("/idgenerator")
public class IdController {

    @Autowired
    private IdDAO idDAO;

    @RequestMapping(value = "/createNewID", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody IdJDO genID, UriComponentsBuilder ucBuilder) 
    {
        System.out.println("Actor details");
        genID.setNext_id(2000);
        idDAO.save(genID);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
}
