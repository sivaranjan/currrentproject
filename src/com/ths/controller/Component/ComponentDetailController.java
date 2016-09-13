package com.ths.controller.Component;

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
import com.ths.JDO.Component.ComponentIDJDO;



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

    @RequestMapping(value = "/createNewID", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody ComponentIDJDO genID, UriComponentsBuilder ucBuilder) 
    {
        System.out.println("Actor details");
        genID.setNext_id(2000);
        componentIDDAO.save(genID);
  
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
}
