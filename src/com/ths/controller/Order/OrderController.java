package com.ths.controller.Order;

import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.Order.IdDAO;
import com.ths.DAO.Order.OrderDAO;
import com.ths.JDO.Order.IdJDO;
import com.ths.JDO.Order.OrderJDO;

@Controller
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderDAO orderDao;
    @Autowired
    private IdDAO idDao;
    private static final Logger log = Logger.getLogger(OrderController.class.getName());
    @RequestMapping(value = "/create", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody OrderJDO order,UriComponentsBuilder ucBuilder) 
    {
        System.out.println("Creating User ");
        List<IdJDO> idlist = null;
        try
        {
        	 orderDao.save(order);
        	 idlist = idDao.findallEntries();
        	 for (IdJDO obj :idlist )
        	 {
        		 obj.setNext_id(obj.getNext_id()+1);
        		 idDao.update(obj);
        	 }
        }
        catch(Exception e)
        {
        	log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
        }
       
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
   
}
