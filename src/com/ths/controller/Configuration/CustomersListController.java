package com.ths.controller.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.Configuration.CustomersListDAO;
import com.ths.JDO.Configuration.CustomersListJDO;

@RestController
@RequestMapping(value= "/customerslist")
public class CustomersListController {

	@Autowired
	private CustomersListDAO customersListDao;
	
	@RequestMapping(value= "/create" , method=RequestMethod.POST)
	public ResponseEntity<Void> createCustomers(@RequestBody CustomersListJDO customersList , UriComponentsBuilder ucBuilder) {
		
		customersListDao.save(customersList);
		HttpHeaders headers=new HttpHeaders();
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);	
		}
}
