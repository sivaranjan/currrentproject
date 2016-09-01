package com.ths.controller;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ths.DAO.ActorsListDAO;
import com.ths.DAO.CustomersListDAO;
import com.ths.DAO.IdDAO;
import com.ths.DAO.IncotermsDAO;
import com.ths.DAO.OrderDAO;
import com.ths.DAO.PlacesDAO;
import com.ths.DAO.PlateformDAO;
import com.ths.DAO.SitesListDAO;
import com.ths.JDO.ActorsListJDO;
import com.ths.JDO.CustomersListJDO;
import com.ths.JDO.IdJDO;
import com.ths.JDO.IncotermsJDO;
import com.ths.JDO.OrderJDO;
import com.ths.JDO.PlacesJDO;
import com.ths.JDO.PlateformJDO;
import com.ths.JDO.SitesListJDO;



@RestController
@RequestMapping("/fetchController")
public class FetchController {

    @Autowired
    private ActorsListDAO actorsListDao;
    @Autowired
    private IdDAO idDAO;
    @Autowired
    private IncotermsDAO incotermsDao;
    @Autowired
    private PlateformDAO plateformDao;
    @Autowired
    private CustomersListDAO customersListDao;
    @Autowired
    private SitesListDAO sitesListDao;
    @Autowired
    private PlacesDAO placesDao;
    @Autowired
    private OrderDAO orderDao;

    @RequestMapping(value = "/fetchActorsList", method = RequestMethod.GET)
    public ResponseEntity<List<ActorsListJDO>> listAllActors() {
        List<ActorsListJDO> actors = actorsListDao.findAllUsers();
        if(actors.isEmpty()){
            return new ResponseEntity<List<ActorsListJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<ActorsListJDO>>(actors, HttpStatus.OK);
    }
    @RequestMapping("/fetchActorsByType/{actorType}")
    public ResponseEntity<HashMap<String,List<ActorsListJDO>>> fetchActorsByType(@PathVariable("actorType") String actorType) {
    	List<ActorsListJDO> actors = actorsListDao.findByType(actorType);
    	HashMap<String,List<ActorsListJDO>> responseMap = new HashMap<String,List<ActorsListJDO>>();
    	responseMap.put("data", actors);
    	/*if(actors.isEmpty())
         {
             return new ResponseEntity<HashMap<String,List<ActorsListJDO>>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
         }*/
        return new ResponseEntity<HashMap<String,List<ActorsListJDO>>>(responseMap, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchIncotermsList", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<IncotermsJDO>>> fetchIncotermsList() {
        List<IncotermsJDO> incotermsList = incotermsDao.findAllUsers();
        HashMap<String,List<IncotermsJDO>> responseMap = new HashMap<String,List<IncotermsJDO>>();
        responseMap.put("data", incotermsList);
        /*if(incotermsList.isEmpty())
        {
            return new ResponseEntity<HashMap<String,List<IncotermsJDO>>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }*/
        return new ResponseEntity<HashMap<String,List<IncotermsJDO>>>(responseMap, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchCustomersList", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<CustomersListJDO>>> fetchCustomersList() {
        List<CustomersListJDO> customersList = customersListDao.findAllUsers();
        HashMap<String,List<CustomersListJDO>> responseMap = new HashMap<String,List<CustomersListJDO>>();
        responseMap.put("data", customersList);
        /*if(customersList.isEmpty())
        {
            return new ResponseEntity<HashMap<String,List<CustomersListJDO>>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }*/
        return new ResponseEntity<HashMap<String,List<CustomersListJDO>>>(responseMap, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchPlateformList", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<PlateformJDO>>> fetchPlateformList() {
        List<PlateformJDO> platFormList = plateformDao.findAllUsers();
        HashMap<String,List<PlateformJDO>> responseMap = new HashMap<String,List<PlateformJDO>>();
        responseMap.put("data", platFormList);
        /*if(platFormList.isEmpty())
        {
            return new ResponseEntity<HashMap<String,List<PlateformJDO>>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }*/
        return new ResponseEntity<HashMap<String,List<PlateformJDO>>>(responseMap, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchPlacesList", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<PlacesJDO>>> fetchPlacesList() {
        List<PlacesJDO> placesList = placesDao.findAllUsers();
        HashMap<String,List<PlacesJDO>> responseMap = new HashMap<String,List<PlacesJDO>>();
        responseMap.put("data", placesList);
        /*if(placesList.isEmpty())
        {
            return new ResponseEntity<HashMap<String,List<PlacesJDO>>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }*/
        return new ResponseEntity<HashMap<String,List<PlacesJDO>>>(responseMap, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchSitesList", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<SitesListJDO>>> fetchSitesList() {
        List<SitesListJDO> sitesList = sitesListDao.findAllUsers();
        HashMap<String,List<SitesListJDO>> responseMap = new HashMap<String,List<SitesListJDO>>();
        responseMap.put("data", sitesList);
        /*if(sitesList.isEmpty())
        {
            return new ResponseEntity<HashMap<String,List<SitesListJDO>>>(responseMap,HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }*/
        return new ResponseEntity<HashMap<String,List<SitesListJDO>>>(responseMap, HttpStatus.OK);
    }
    /*@RequestMapping(value = "/fetchAllocationofTurnOverList", method = RequestMethod.GET)
    public ResponseEntity<List<IncotermsJDO>> fetchAllocationofTurnOverList() {
        List<IncotermsJDO> incotermsList = incotermsDao.findAllUsers();
        if(incotermsList.isEmpty())
        {
            return new ResponseEntity<List<IncotermsJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<IncotermsJDO>>(incotermsList, HttpStatus.OK);
    }*/
    @RequestMapping(value = "/fetchIDList", method = RequestMethod.GET)
    public ResponseEntity<List<IdJDO>> listAllIDs() {
        List<IdJDO> idlist = idDAO.findAllUsers();
        if(idlist.isEmpty()){
            return new ResponseEntity<List<IdJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<IdJDO>>(idlist, HttpStatus.OK);
    }
    @RequestMapping("/fetchCustomerDetailsbyName/{customerName}")
    public ResponseEntity<HashMap<String,List<CustomersListJDO>>> fetchCustomerDetailsbyName(@PathVariable("customerName") String customerName) {
    	List<CustomersListJDO> actors = customersListDao.findByType(customerName);
    	HashMap<String,List<CustomersListJDO>> responseMap = new HashMap<String,List<CustomersListJDO>>();
    	responseMap.put("data", actors);
    	/*if(actors.isEmpty())
         {
             return new ResponseEntity<HashMap<String,List<ActorsListJDO>>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
         }*/
        return new ResponseEntity<HashMap<String,List<CustomersListJDO>>>(responseMap, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchOrders", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<OrderJDO>>> fetchOrders() {
        List<OrderJDO> ordersList = orderDao.findAllUsers();
        HashMap<String,List<OrderJDO>> responseMap = new HashMap<String,List<OrderJDO>>();
        responseMap.put("data", ordersList);
        /*if(customersList.isEmpty())
        {
            return new ResponseEntity<HashMap<String,List<CustomersListJDO>>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }*/
        return new ResponseEntity<HashMap<String,List<OrderJDO>>>(responseMap, HttpStatus.OK);
    }
    
   
    
    
}
