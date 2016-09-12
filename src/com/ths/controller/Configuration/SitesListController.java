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

import com.ths.DAO.Configuration.SitesListDAO;
import com.ths.JDO.Configuration.SitesListJDO;

@Controller
@RequestMapping( value="/siteslist")
public class SitesListController {

	@Autowired
	private SitesListDAO sitesListDao;
	
	@RequestMapping(value = "/create" , method=RequestMethod.POST)
	public ResponseEntity<Void> createSitesList(@RequestBody SitesListJDO sitesList, UriComponentsBuilder ucBuilder) {
		
		sitesListDao.save(sitesList);
		HttpHeaders headers=new HttpHeaders();
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}
}
