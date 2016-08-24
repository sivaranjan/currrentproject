package com.ths.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.ExampleDao;
import com.ths.JDO.Example;

@Controller
@RequestMapping("/example")
public class ExampleController {

    @Autowired
    private ExampleDao exampleDao;

    @RequestMapping("/find/{id}")
    @ResponseBody
    public Example link(@PathVariable("id") long id) {
        return exampleDao.findById(id);
    }
//
//    @RequestMapping("/create")
//    @ResponseBody
//    public Example link() {
//        Example example = new Example();
////        example.setName("Example");
//        return exampleDao.save(example);
//    }
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody Example user, UriComponentsBuilder ucBuilder) {
        System.out.println("Creating User " + user.getName());
  
        exampleDao.save(user);
//        if (userService.isUserExist(user)) 
//        {
//            System.out.println("A User with name " + user.getName() + " already exist");
//            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
//        }
//  
//        userService.saveUser(user);
  
        HttpHeaders headers = new HttpHeaders();
//        headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(user.getId()).toUri());
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

    @RequestMapping("/clear}")
    @ResponseBody
    public void clearDB() {
        exampleDao.deleteAll();
    }

}
