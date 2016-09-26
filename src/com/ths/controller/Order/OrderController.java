package com.ths.controller.Order;

import java.util.Date;
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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.ths.DAO.Order.IdDAO;
import com.ths.DAO.Order.OrderDAO;
import com.ths.JDO.Order.IdJDO;
import com.ths.JDO.Order.OrderJDO;

@RestController
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
        System.out.println("Creating Order ");
        List<IdJDO> idlist = null;
        try
        {
        	 order.setDate_of_the_Order(new Date());
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
    @RequestMapping(value = "/updateOrder", method = RequestMethod.POST)
    public ResponseEntity<Void> updateOrder(@RequestBody OrderJDO order,UriComponentsBuilder ucBuilder) 
    {
        System.out.println("Creating Order ");
        List<OrderJDO> orderBasedonID = null;
        try
        {
        	 if(order.getNo_prototype_order()!=null)
        	 {
        		 orderBasedonID = orderDao.findByProtoID(order.getLastPrototypeOrderID());
        		 for (OrderJDO obj :orderBasedonID )
            	 {
	            	 	obj.setSite_Workshop_Prototype(order.getSite_Workshop_Prototype());
	     	            obj.setGeoSite(order.getGeoSite());
	     	            obj.setNo_prototype_order(order.getNo_prototype_order());
	     	            obj.setProto_Type(order.getProto_Type());
	     	            obj.setPcc(order.isPcc());
	     	            obj.setOpen_Order(order.isOpen_Order());
	     	            obj.setFrittage(order.isFrittage());
	     	            obj.setE52(order.isE52());
	     	            obj.setIntraLE(order.isIntraLE());
	     	            obj.setType_of_the_Prototype_Order(order.getType_of_the_Prototype_Order());
	     	            obj.setNo_customerOrder(order.getNo_customerOrder());
	     	            obj.setCustomerOrderAttachment(order.getCustomerOrderAttachment());
	     	            obj.setCustomer_Name(order.getCustomer_Name());
	     	            obj.setCustomer_Code(order.getCustomer_Code());
	     	            obj.setBranch_Code(order.getBranch_Code());
	     	            obj.setProvider_Code(order.getProvider_Code());
	     	            obj.setFinal_Delivery_Address(order.getFinal_Delivery_Address());
	     	            obj.setAdditional_Address(order.getAdditional_Address());
	     	            obj.setSite_Address(order.getSite_Address());
	     	            obj.setPlateform(order.getPlateform());
	     	            obj.setIncoterms(order.getIncoterms());
	     	            obj.setPlace(order.getPlace());
	     	            obj.setCustomer_Receiver_Name(order.getCustomer_Receiver_Name());
	     	            obj.setCustomer_Receiver_Telephone(order.getCustomer_Receiver_Telephone());
	     	            obj.setAllocation_of_turnover(order.getAllocation_of_turnover());
	     	            obj.setRequester(order.getRequester());
	     	            obj.setCadTeamMember_MEPStudy(order.getCadTeamMember_MEPStudy());
	     	            obj.setQualityTeamMember(order.getQualityTeamMember());
	     	            obj.setProtoWorkshop(order.getProtoWorkshop());
	     	            obj.setManagementController(order.getManagementController());
	     	            obj.setKamCommerce(order.getKamCommerce());
	     	            obj.setSalesAdministrator_ADV(order.getSalesAdministrator_ADV());
	     	            obj.setProjectManager(order.getProjectManager());
	     	            obj.setOrder_Status(order.getOrder_Status());
	     	            obj.setTotal_Order_Amount(order.getTotal_Order_Amount());
	     	            obj.setLastModifiedDate(new Date());
	     	            obj.setLastModifiedBy(order.getLastModifiedBy());
	     	            obj.setLastPrototypeOrderID(order.getNo_prototype_order());
	     	            orderDao.save(obj);
            	 }
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
