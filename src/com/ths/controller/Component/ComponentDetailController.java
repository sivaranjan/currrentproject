package com.ths.controller.Component;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserServiceFactory;
import com.ths.DAO.Component.ComponentIDDAO;
import com.ths.DAO.Configuration.ComponentCreationDAO;
import com.ths.DAO.Configuration.ComponentDescriptionDAO;
import com.ths.DAO.Configuration.EstimatiingCostandDelayDAO;
import com.ths.DAO.Configuration.ForecastPlanningDAO;
import com.ths.DAO.Configuration.PlanningCustomerDeliveryDAO;
import com.ths.DAO.Configuration.PlanofLabTestsDAO;
import com.ths.DAO.Configuration.ProcessValidationDAO;
import com.ths.DAO.Configuration.QualityDeliverableDAO;
import com.ths.DAO.Configuration.ReminderDAO;
import com.ths.DAO.Configuration.TechnicalDefinitionDAO;
import com.ths.JDO.Component.ComponentDescriptionJDO;
import com.ths.JDO.Component.ComponentIDJDO;
import com.ths.JDO.Component.ComponentJDO;
import com.ths.JDO.Component.PlanningCustomerDeliveryJDO;



@RestController
@RequestMapping("/saveComponent")
public class ComponentDetailController {

    @Autowired
    private ComponentIDDAO componentIDDAO;
    @Autowired
    private ComponentCreationDAO componentCreationDao;
    @Autowired
    private ComponentDescriptionDAO componentDescriptionDao;
    @Autowired
    private EstimatiingCostandDelayDAO estimatingCostDao;
    @Autowired
    private ForecastPlanningDAO forecastPlanningDao;
    @Autowired
    private PlanningCustomerDeliveryDAO planningcustomerDeliveryDao;
    @Autowired
    private PlanofLabTestsDAO planofLabTestsDao;
    @Autowired
    private ProcessValidationDAO processValidationDao;
    @Autowired
    private QualityDeliverableDAO qualityDeliverableDao;
    @Autowired
    private ReminderDAO reminderDao;
    @Autowired 
    private TechnicalDefinitionDAO technicalDefintionDao;
    private static final Logger log = Logger.getLogger(ComponentIDDAO.class.getName());
    @RequestMapping(value = "/createcomponent", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody ComponentJDO compObject, UriComponentsBuilder ucBuilder) 
    {
    	 System.out.println("Creating User ");
         List<ComponentIDJDO> idlist = null;
         try
         {
        	 String componentID = compObject.getComponentID();
        	 User user 				= 	UserServiceFactory.getUserService().getCurrentUser();
        	 if(componentCreationDao.findByComponentID(componentID).size()>0)
        	 {
        		 callUpdate(componentID,compObject);
        	 }
        	 else
        	 {
        		 SimpleDateFormat sdf = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
        		 Date date = new Date();
        		 compObject.setCreatedBy(user.toString());
        		 compObject.setCreatedDate(date.getTime());
        		 componentCreationDao.save(compObject);
             	 idlist = componentIDDAO.findAllUsers();
             	 for (ComponentIDJDO obj :idlist )
             	 {
             		 obj.setNext_id(obj.getNext_id()+1);
             		 componentIDDAO.save(obj);
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
    @RequestMapping(value = "/saveComponentDescription", method = RequestMethod.POST)
    public ResponseEntity<Void> saveComponentDescription(@RequestBody ComponentDescriptionJDO compObject, UriComponentsBuilder ucBuilder) 
    {
    	 System.out.println("Saving ComponentDescription ");
         try
         {
        	 if(componentDescriptionDao.findByComponentID(compObject.getComponentID()).size()>0)
        	 {
        		 updateComponentDescription(compObject);
        	 }
        	 else
        	 {
        		 componentDescriptionDao.save(compObject);
        	 }
         }
         catch(Exception e)
         {
         	log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
         }
        
         HttpHeaders headers = new HttpHeaders();
         return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
    @RequestMapping(value = "/savePlanningandCustomerDelivery", method = RequestMethod.POST)
    public ResponseEntity<Void> savePlanningandCustomerDelivery(@RequestBody PlanningCustomerDeliveryJDO planningCusObject, UriComponentsBuilder ucBuilder) 
    {
    	 System.out.println("Saving savePlanningandCustomerDelivery ");
    	 log.info("planningCusObject :: "+planningCusObject.getComponentID());
    	 log.info("planningCusObject :: "+planningCusObject.getQuantity());
    	 log.info("planningCusObject :: "+planningCusObject.getComment());
    	 log.info("planningCusObject :: "+planningCusObject.getDateOf());
         try
         {
        	 planningcustomerDeliveryDao.save(planningCusObject);
         }
         catch(Exception e)
         {
         	log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
         }
        
         HttpHeaders headers = new HttpHeaders();
         return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
    public void callUpdate(String componentID,ComponentJDO compObject)
    {
    	List<ComponentJDO> compList = null;
    	compList = componentCreationDao.findByComponentID(componentID);
    	User user 				= 	UserServiceFactory.getUserService().getCurrentUser();
    	 SimpleDateFormat sdf = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
		 Date date = new Date();
    	 for (ComponentJDO obj :compList )
    	 {
    		obj.setComponentID(componentID);
    		obj.setComponentStatus(compObject.getComponentStatus());
    		obj.setOrderIDReference(compObject.getOrderIDReference());
    		obj.setTotalAmount(obj.getTotalAmount());
    		obj.setTotalQuantity(obj.getTotalQuantity());
    		obj.setModifiedDate(date.getTime());
    		obj.setLastModifiedBy(user.toString());
    		componentCreationDao.save(obj);
    	 }
    }
    public void updateComponentDescription(ComponentDescriptionJDO compObject)
    {
    	List<ComponentDescriptionJDO> compDescriptionList = null;
    	compDescriptionList = componentDescriptionDao.findByComponentID(compObject.getComponentID());
    	 for (ComponentDescriptionJDO obj :compDescriptionList )
    	 {
    		obj.setComponentID(compObject.getComponentID());
    		obj.setCustomerReference(compObject.getCustomerReference());
    		obj.setProductSpecification(compObject.getProductSpecification());
    		obj.setProductType(compObject.getProductType());
    		obj.setUnitSellingPrice(compObject.getUnitSellingPrice());
    		obj.setDirectDeliverytoCustomer(compObject.getDirectDeliverytoCustomer());
    		obj.setCustomer(compObject.getCustomer());
    		obj.setLaboAdress(compObject.getLaboAdress());
    		log.info("before parse ::"+compObject.getComment_componentDescription());
    		obj.setComment_componentDescription(compObject.getComment_componentDescription());
    		componentDescriptionDao.save(obj);
    	 }
    }
}
