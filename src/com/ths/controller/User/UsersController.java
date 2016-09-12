package com.ths.controller.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.User.UserDAO;
import com.ths.JDO.User.UserJDO;

@RestController
@RequestMapping("/users")
public class UsersController {

    @Autowired
    private UserDAO userDao;
    
    @RequestMapping(value = "/createorupdate", method = RequestMethod.POST)
    public ResponseEntity<Void> saveorupdate(@RequestBody UserJDO userinfo, UriComponentsBuilder ucBuilder) {
        System.out.println("places details");
        UserJDO userInfoNew = userDao.findByUserEmailsingle(userinfo.getUseremail());
        if(userInfoNew!=null)
        {
        	userInfoNew.setLanguage(userinfo.getLanguage());
        	userInfoNew.setLastLoggedDate(userinfo.getLastLoggedDate());
        	userDao.update(userInfoNew);
        }
        else
        {
        	userDao.save(userinfo);
        }
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }

}
