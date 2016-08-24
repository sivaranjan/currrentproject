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

import com.ths.DAO.CustomerDAO;
import com.ths.JDO.CustomerJDO;

@Controller
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private CustomerDAO customerDao;
	
	@RequestMapping(value= "/create" , method=RequestMethod.POST)
	public ResponseEntity<Void> createCustomer(@RequestBody CustomerJDO customer, UriComponentsBuilder ucBuilder) {
		customerDao.save(customer);
		HttpHeaders headers=new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
}