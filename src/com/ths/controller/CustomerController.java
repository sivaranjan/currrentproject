package com.ths.controller;

import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

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

import com.ths.DAO.CustomerDAO;
import com.ths.JDO.CustomerJDO;

@RestController
@RequestMapping("/customer")
public class CustomerController {
	
	@Autowired
	private CustomerDAO customerDao;
	
	@RequestMapping(value= "/create" , method=RequestMethod.POST)
	public ResponseEntity<Void> createCustomer(@RequestBody CustomerJDO customer, ServletResponse res, UriComponentsBuilder ucBuilder) 
	{
		HttpServletResponse response = (HttpServletResponse) res;
	    response.setHeader("Access-Control-Allow-Origin", "*");
	    response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
	        response.setHeader("Access-Control-Max-Age", "3600");
	        response.setHeader("Access-Control-Allow-Headers", "x-requested-with");
		customerDao.save(customer);
		HttpHeaders headers=new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
}