package com.ths.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ths.DAO.ActorsListDAO;
import com.ths.DAO.CustomersListDAO;
import com.ths.DAO.IdDAO;
import com.ths.DAO.IncotermsDAO;
import com.ths.DAO.PlacesDAO;
import com.ths.DAO.PlateformDAO;
import com.ths.DAO.SitesListDAO;
import com.ths.JDO.ActorsListJDO;
import com.ths.JDO.CustomerJDO;
import com.ths.JDO.CustomersListJDO;
import com.ths.JDO.IdJDO;
import com.ths.JDO.IncotermsJDO;
import com.ths.JDO.PlacesJDO;
import com.ths.JDO.PlateformJDO;
import com.ths.JDO.SitesListJDO;



@RestController
@RequestMapping("/fetchController")
public class FetchController {

    @Autowired
    private ActorsListDAO actorsListDao;
    private IdDAO idDAO;
    private IncotermsDAO incotermsDao;
    private PlateformDAO plateformDao;
    private CustomersListDAO customersListDao;
    private SitesListDAO sitesListDao;
    private PlacesDAO placesDao;

    @RequestMapping(value = "/fetchActorsList", method = RequestMethod.GET)
    public ResponseEntity<List<ActorsListJDO>> listAllActors() {
        List<ActorsListJDO> actors = actorsListDao.findAllUsers();
        if(actors.isEmpty()){
            return new ResponseEntity<List<ActorsListJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<ActorsListJDO>>(actors, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchIDList", method = RequestMethod.GET)
    public ResponseEntity<List<IdJDO>> listAllIDs() {
        List<IdJDO> idlist = idDAO.findAllUsers();
        if(idlist.isEmpty()){
            return new ResponseEntity<List<IdJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<IdJDO>>(idlist, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchIncotermsList", method = RequestMethod.GET)
    public ResponseEntity<List<IncotermsJDO>> fetchIncotermsList() {
        List<IncotermsJDO> incotermsList = incotermsDao.findAllUsers();
        if(incotermsList.isEmpty())
        {
            return new ResponseEntity<List<IncotermsJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<IncotermsJDO>>(incotermsList, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchPlacesList", method = RequestMethod.GET)
    public ResponseEntity<List<PlacesJDO>> fetchPlacesList() {
        List<PlacesJDO> placesList = placesDao.findAllUsers();
        if(placesList.isEmpty())
        {
            return new ResponseEntity<List<PlacesJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<PlacesJDO>>(placesList, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchSitesList", method = RequestMethod.GET)
    public ResponseEntity<List<SitesListJDO>> fetchSitesList() {
        List<SitesListJDO> sitesList = sitesListDao.findAllUsers();
        if(sitesList.isEmpty())
        {
            return new ResponseEntity<List<SitesListJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<SitesListJDO>>(sitesList, HttpStatus.OK);
    }
    @RequestMapping(value = "/fetchCustomersList", method = RequestMethod.GET)
    public ResponseEntity<List<CustomersListJDO>> fetchCustomersList() {
        List<CustomersListJDO> customersList = customersListDao.findAllUsers();
        if(customersList.isEmpty())
        {
            return new ResponseEntity<List<CustomersListJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<CustomersListJDO>>(customersList, HttpStatus.OK);
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
    @RequestMapping(value = "/fetchPlateformList", method = RequestMethod.GET)
    public ResponseEntity<List<PlateformJDO>> fetchPlateformList() {
        List<PlateformJDO> platFormList = plateformDao.findAllUsers();
        if(platFormList.isEmpty())
        {
            return new ResponseEntity<List<PlateformJDO>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<PlateformJDO>>(platFormList, HttpStatus.OK);
    }
}
