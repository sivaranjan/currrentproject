package com.ths.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.ActorsListDAO;
import com.ths.JDO.ActorsListJDO;


@RestController
@RequestMapping("/actorsList")
public class ActorsListController {

    @Autowired
    private ActorsListDAO actorsListDao;

    @RequestMapping("/find/{id}")
    @ResponseBody
    public ActorsListJDO link(@PathVariable("id") long id) {
        return actorsListDao.findById(id);
    }
    
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody ActorsListJDO actor, UriComponentsBuilder ucBuilder) 
    {
        System.out.println("Actor details");
  
        actorsListDao.save(actor);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
    
    @RequestMapping(value = "/wholelist", method = RequestMethod.GET)
    public ResponseEntity<List<ActorsListJDO>> listAllUsers() {
        List<ActorsListJDO> actors = actorsListDao.findAllUsers();
        if(actors.isEmpty()){
            return new ResponseEntity<List<ActorsListJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<ActorsListJDO>>(actors, HttpStatus.OK);
    }
}
