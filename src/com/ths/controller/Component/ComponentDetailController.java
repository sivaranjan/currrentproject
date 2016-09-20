package com.ths.controller.Component;

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
import com.ths.JDO.Order.IdJDO;



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
        	 componentCreationDao.save(compObject);
         	 idlist = componentIDDAO.findAllUsers();
         	 for (ComponentIDJDO obj :idlist )
         	 {
         		 obj.setNext_id(obj.getNext_id()+1);
         		 componentIDDAO.save(obj);
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
        	 log.info("compObject is this "+compObject.getComment_componentDescription());
        	 componentDescriptionDao.save(compObject);
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
    	 List<ComponentDescriptionJDO> compDescriptionList = null;
    	 log.info("planningCusObject :: "+planningCusObject.getComponentID());
    	 log.info("planningCusObject :: "+planningCusObject.getQuantity());
    	 log.info("planningCusObject :: "+planningCusObject.getComment());
    	 log.info("planningCusObject :: "+planningCusObject.getDateOf());
    	 Long componentDescriptionID = null;
         try
         {
        	 String componentID = planningCusObject.getComponentID();
        	 compDescriptionList = componentDescriptionDao.findByComponentID(componentID);
        	 for(ComponentDescriptionJDO compObj : compDescriptionList)
        	 {
        		 componentDescriptionID = compObj.getComponentDescriptionID();
        	 }
        	 planningCusObject.setComponentDescriptionID(componentDescriptionID);
        	 planningcustomerDeliveryDao.save(planningCusObject);
         }
         catch(Exception e)
         {
         	log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
         }
        
         HttpHeaders headers = new HttpHeaders();
         return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
}
