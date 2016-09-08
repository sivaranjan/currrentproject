package com.ths.controller;

import static java.util.logging.Level.FINER;

import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.ths.DAO.ActorsListDAO;
import com.ths.DAO.AllocationTurnOverDAO;
import com.ths.DAO.ClientLaboDAO;
import com.ths.DAO.ComponentIDDAO;
import com.ths.DAO.CustomersListDAO;
import com.ths.DAO.IdDAO;
import com.ths.DAO.IncotermsDAO;
import com.ths.DAO.OrderDAO;
import com.ths.DAO.PlacesDAO;
import com.ths.DAO.PlateformDAO;
import com.ths.DAO.ProductTypeDAO;
import com.ths.DAO.PrototypistsDAO;
import com.ths.DAO.RandDDAO;
import com.ths.DAO.SitesListDAO;
import com.ths.DAO.TechnologyDAO;
import com.ths.DAO.UserDAO;
import com.ths.JDO.ActorsListJDO;
import com.ths.JDO.AllocationTurnOverJDO;
import com.ths.JDO.ClientLaboJDO;
import com.ths.JDO.ComponentIDJDO;
import com.ths.JDO.CustomersListJDO;
import com.ths.JDO.IdJDO;
import com.ths.JDO.IncotermsJDO;
import com.ths.JDO.OrderJDO;
import com.ths.JDO.PlacesJDO;
import com.ths.JDO.PlateformJDO;
import com.ths.JDO.ProductTypesJDO;
import com.ths.JDO.PrototypistsJDO;
import com.ths.JDO.RandDJDO;
import com.ths.JDO.SitesListJDO;
import com.ths.JDO.TechnologyJDO;
import com.ths.JDO.UserJDO;

@RestController
@RequestMapping("/fetchController")
public class FetchController {

    @Autowired
    private ActorsListDAO actorsListDao;
    @Autowired
    private IdDAO idDAO;
    @Autowired
    private ComponentIDDAO componentidDAO;
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
    @Autowired
    private ProductTypeDAO productTypeDao;
    @Autowired
    private PrototypistsDAO prototypistDao;
    @Autowired
    private RandDDAO rAndDao;
    @Autowired
    private TechnologyDAO technologyDao;
    @Autowired
    private AllocationTurnOverDAO allocationDao;
    @Autowired
    private ClientLaboDAO clientLaboDao;
    @Autowired
    private UserDAO userDao;
    private static final Logger log = Logger.getLogger(FetchController.class.getName());
    
    /*================================ Actors ======================================== */
    
    @RequestMapping(value = "/fetchActorsList", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<ActorsListJDO>>> listAllActors() 
    {
    	log.log(FINER, "Visits fetchActorsList Controller");
    	List<ActorsListJDO> actorsList = null;
    	HashMap<String,List<ActorsListJDO>> responseMap = null;
    	try
    	{
    		responseMap = new HashMap<String,List<ActorsListJDO>>();
    		actorsList = actorsListDao.findWholeActorsList();
    		responseMap.put("data", actorsList);
    		log.log(FINER, "Response Map from fetchActorsList :: "+responseMap);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
    	return new ResponseEntity<HashMap<String,List<ActorsListJDO>>>(responseMap, HttpStatus.OK);
    }
    
    @RequestMapping("/fetchActorsListBySite/{siteType}")
    public ResponseEntity<HashMap<String,List<ActorsListJDO>>> fetchActorsBySite(@PathVariable("siteType") String siteType) 
    {
    	log.log(FINER, "Visits fetchActorsListBySite Controller - SiteType :: "+siteType);
    	List<ActorsListJDO> actorsListbyType = null;
    	HashMap<String,List<ActorsListJDO>> responseMap = null;
    	try
    	{
    		actorsListbyType = actorsListDao.findBySite(siteType);
    		responseMap = new HashMap<String,List<ActorsListJDO>>();
    		responseMap.put("data", actorsListbyType);
    		log.log(FINER, "Response Map from fetchActorsListBySite :: "+responseMap);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return new ResponseEntity<HashMap<String,List<ActorsListJDO>>>(responseMap, HttpStatus.OK);
    }
    
    @RequestMapping("/fetchActorsByType/{actorType}")
    public ResponseEntity<HashMap<String,List<ActorsListJDO>>> fetchActorsByType(@PathVariable("actorType") String actorType) 
    {
    	log.log(FINER, "Visits fetchActorsByType Controller - ActorType :: "+actorType);
    	List<ActorsListJDO> actors = null;
    	HashMap<String,List<ActorsListJDO>> responseMap = null;
    	try
    	{
    		actors = actorsListDao.findByType(actorType);
    		responseMap = new HashMap<String,List<ActorsListJDO>>();
        	responseMap.put("data", actors);
        	 log.log(FINER, "Response Map from fetchActorsByType :: "+responseMap);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return new ResponseEntity<HashMap<String,List<ActorsListJDO>>>(responseMap, HttpStatus.OK);
    }
    
    /*================================ ID and Component ======================================== */
    
    @RequestMapping(value = "/fetchIDList", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<IdJDO>>> listAllIDs()
    {
    	log.log(FINER, "Visits fetchIDList Controller");
    	List<IdJDO> idlist = null;
    	HashMap<String,List<IdJDO>> responseMap = null;
    	try
    	{
    		idlist = idDAO.findallEntries();
    		responseMap = new HashMap<String,List<IdJDO>>();
        	responseMap.put("data", idlist);
            log.log(FINER, "Response Map from fetchIDList :: "+responseMap);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
    	return new ResponseEntity<HashMap<String,List<IdJDO>>>(responseMap, HttpStatus.OK);
    }
    
    @RequestMapping(value = "/fetchComponentIDList", method = RequestMethod.GET)
    public ResponseEntity<List<ComponentIDJDO>> listallComponentIDlist() 
    {
    	log.log(FINER, "Visits fetchComponentIDList Controller");
    	List<ComponentIDJDO> componentidlist = null;
    	HashMap<String,List<ComponentIDJDO>> responseMap = null;
    	try
    	{
    		componentidlist = componentidDAO.findAllUsers();
    		responseMap = new HashMap<String,List<ComponentIDJDO>>();
        	responseMap.put("data", componentidlist);
    		log.log(FINER, "Response Map from fetchComponentIDList :: "+componentidlist);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return new ResponseEntity<List<ComponentIDJDO>>(componentidlist, HttpStatus.OK);
    }
    
    /*================================ Customers ======================================== */
    
    @RequestMapping("/fetchCustomerDetailsbyName/{customerName}")
    public ResponseEntity<HashMap<String,List<CustomersListJDO>>> fetchCustomerDetailsbyName(@PathVariable("customerName") String customerName) 
    {
    	log.log(FINER, "Visits fetchCustomerDetailsbyName Controller - Customer Name :: "+customerName);
    	List<CustomersListJDO> actors = null;
    	HashMap<String,List<CustomersListJDO>> responseMap = null;
    	try
    	{
    		actors = customersListDao.findByType(customerName);
        	responseMap = new HashMap<String,List<CustomersListJDO>>();
        	responseMap.put("data", actors);
        	log.log(FINER, "Response Map from fetchCustomerDetailsbyName :: "+responseMap);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return new ResponseEntity<HashMap<String,List<CustomersListJDO>>>(responseMap, HttpStatus.OK);
    }
    
    /*================================ Fetch Order ======================================== */
    
    @RequestMapping(value = "/fetchOrders", method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,List<OrderJDO>>> fetchOrders() 
    {
    	log.log(FINER, "Visits fetchOrdersList Controller");
    	List<OrderJDO> ordersList = null;
    	 HashMap<String,List<OrderJDO>> responseMap = null;
    	try
    	{
    		ordersList = orderDao.findAllUsers();
    		responseMap = new HashMap<String,List<OrderJDO>>();
    		responseMap.put("data", ordersList);
    		log.log(FINER, "Response Map from fetchOrders :: "+responseMap);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return new ResponseEntity<HashMap<String,List<OrderJDO>>>(responseMap, HttpStatus.OK);
    }
    /*================================ Fetch Order by Prototype ID======================================== */
    @RequestMapping(value = "/fetchProtypeOrderbasedOnID/{protoID}")
    public ResponseEntity<HashMap<String,List<OrderJDO>>> fetchProtypeOrderObject(@PathVariable("protoID") String protoID) 
    {
    	log.log(FINER, "Visits fetchProtypeOrderObject Controller - protoID :: "+protoID);
    	List<OrderJDO> OrderObj = null;
    	HashMap<String,List<OrderJDO>> responseMap = null;
    	try
    	{
    		OrderObj 		= 	orderDao.findByProtoID(protoID);
        	responseMap 	= 	new HashMap<String,List<OrderJDO>>();
        	responseMap.put("data", OrderObj);
        	log.log(FINER, "Response Map from fetchProtypeOrderObject :: "+responseMap);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return new ResponseEntity<HashMap<String,List<OrderJDO>>>(responseMap, HttpStatus.OK);
    }
    /*================================ Fetch User Details and Roles ======================================== */
    
    @RequestMapping("/fetchUserDetails/{userEmail:.+}")
    public ResponseEntity<HashMap<String,List<UserJDO>>> fetchUserDetailsByEmail(@PathVariable("userEmail") String userEmail) 
    {
    	log.log(FINER, "Visits fetchUserDetails Controller - UserEmail :: "+userEmail);
    	List<UserJDO> userInfo = null;
    	HashMap<String,List<UserJDO>> responseMap = null;
    	try
    	{
    		userInfo = userDao.findByUserEmail(userEmail+"");
    		responseMap = new HashMap<String,List<UserJDO>>();
    		responseMap.put("data", userInfo);
    		log.log(FINER, "Response Map from fetchUserDetails :: "+responseMap);
    		
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return new ResponseEntity<HashMap<String,List<UserJDO>>>(responseMap, HttpStatus.OK);
    }
    
    /*================================ Fetch Order dependencies ======================================== */
    
    @RequestMapping(value ="/fetchOrderDependencies",method = RequestMethod.GET)
    public ResponseEntity<HashMap<String,Object>> orderDependencies() 
    {
    	log.log(FINER, "Visits fetchOrderDependencies Controller");
    	HashMap<String,Object> responseMap = null;
    	HashMap<String,List<PlateformJDO>> platformMap= null;
    	HashMap<String,List<SitesListJDO>> sitesMap = null;
    	HashMap<String,List<CustomersListJDO>> customersMap = null;
    	HashMap<String,List<PlacesJDO>> placesMap = null;
    	HashMap<String,List<IncotermsJDO>> incotermsMap = null;
    	HashMap<String,List<AllocationTurnOverJDO>> allocationTurnOverMap = null;
    	List<PlateformJDO> platformsList = null;
    	List<SitesListJDO> sitesList = null;
    	List<CustomersListJDO> customersList = null;
    	List<PlacesJDO> placesList = null;
    	List<IncotermsJDO> incotermsList = null;
    	List<AllocationTurnOverJDO> allocationList = null;
    	try
    	{
    		platformMap 	= new HashMap<String,List<PlateformJDO>>();
        	sitesMap 		= new HashMap<String,List<SitesListJDO>>();
        	customersMap 	= new HashMap<String,List<CustomersListJDO>>();
        	placesMap 		= new HashMap<String,List<PlacesJDO>>();
        	incotermsMap 	= new HashMap<String,List<IncotermsJDO>>();
        	allocationTurnOverMap = new HashMap<String,List<AllocationTurnOverJDO>>();
    		responseMap 	= new HashMap<String,Object>();
        	platformsList   = plateformDao.findAllUsers();
        	sitesList 		= sitesListDao.findAllUsers();
        	customersList 	= customersListDao.findAllUsers();
        	placesList 		= placesDao.findAllUsers();
        	incotermsList 	= incotermsDao.findAllUsers();
        	allocationList 	= allocationDao.findAllUsers();
        	platformMap.put("list", platformsList);
        	sitesMap.put("list", sitesList);
        	customersMap.put("list", customersList);
        	placesMap.put("list", placesList);
        	incotermsMap.put("list", incotermsList);
        	allocationTurnOverMap.put("list", allocationList);
        	responseMap.put("platformMap", platformMap);
        	responseMap.put("sitesMap", sitesMap);
        	responseMap.put("customersMap", customersMap);
        	responseMap.put("placesMap", placesMap);
        	responseMap.put("incotermsMap", incotermsMap);
        	responseMap.put("allocationTurnOverMap", allocationTurnOverMap);
        	log.log(FINER, "Response Map from fetchOrderDependencies :: "+responseMap);
    	}
    	catch(Exception e)
    	{
    		log.log(java.util.logging.Level.SEVERE, e.getMessage(), e);
    	}
        return new ResponseEntity<HashMap<String,Object>>(responseMap, HttpStatus.OK);
    }
    
     /*===================== List of services for future =============================== */ 
     
    		 @RequestMapping(value = "/fetchIncotermsList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<IncotermsJDO>>> fetchIncotermsList() {
	         List<IncotermsJDO> incotermsList = incotermsDao.findAllUsers();
	         HashMap<String,List<IncotermsJDO>> responseMap = new HashMap<String,List<IncotermsJDO>>();
	         responseMap.put("data", incotermsList);
	         return new ResponseEntity<HashMap<String,List<IncotermsJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchCustomersList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<CustomersListJDO>>> fetchCustomersList() {
	         List<CustomersListJDO> customersList = customersListDao.findAllUsers();
	         HashMap<String,List<CustomersListJDO>> responseMap = new HashMap<String,List<CustomersListJDO>>();
	         responseMap.put("data", customersList);
	         return new ResponseEntity<HashMap<String,List<CustomersListJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchPlateformList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<PlateformJDO>>> fetchPlateformList() {
	         List<PlateformJDO> platFormList = plateformDao.findAllUsers();
	         HashMap<String,List<PlateformJDO>> responseMap = new HashMap<String,List<PlateformJDO>>();
	         responseMap.put("data", platFormList);
	         return new ResponseEntity<HashMap<String,List<PlateformJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchPlacesList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<PlacesJDO>>> fetchPlacesList() {
	         List<PlacesJDO> placesList = placesDao.findAllUsers();
	         HashMap<String,List<PlacesJDO>> responseMap = new HashMap<String,List<PlacesJDO>>();
	         responseMap.put("data", placesList);
	         return new ResponseEntity<HashMap<String,List<PlacesJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchSitesList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<SitesListJDO>>> fetchSitesList() {
	         List<SitesListJDO> sitesList = sitesListDao.findAllUsers();
	         HashMap<String,List<SitesListJDO>> responseMap = new HashMap<String,List<SitesListJDO>>();
	         responseMap.put("data", sitesList);
	         return new ResponseEntity<HashMap<String,List<SitesListJDO>>>(responseMap, HttpStatus.OK);
	     }	
	     @RequestMapping(value = "/fetchProductTypeList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<ProductTypesJDO>>> fetchProductTypeList() {
	         List<ProductTypesJDO> productTypesList = productTypeDao.findAllUsers();
	         HashMap<String,List<ProductTypesJDO>> responseMap = new HashMap<String,List<ProductTypesJDO>>();
	         responseMap.put("data", productTypesList);
	         return new ResponseEntity<HashMap<String,List<ProductTypesJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchPrototypitsList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<PrototypistsJDO>>> fetchPrototypitsList() {
	         List<PrototypistsJDO> prototypistsList = prototypistDao.findAllUsers();
	         HashMap<String,List<PrototypistsJDO>> responseMap = new HashMap<String,List<PrototypistsJDO>>();
	         responseMap.put("data", prototypistsList);
	         return new ResponseEntity<HashMap<String,List<PrototypistsJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchRandDList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<RandDJDO>>> fetchRandDList() {
	         List<RandDJDO> rAndDList = rAndDao.findAllUsers();
	         HashMap<String,List<RandDJDO>> responseMap = new HashMap<String,List<RandDJDO>>();
	         responseMap.put("data", rAndDList);
	         return new ResponseEntity<HashMap<String,List<RandDJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchTechnologyList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<TechnologyJDO>>> fetchTechnologyList() {
	         List<TechnologyJDO> technologyList = technologyDao.findAllUsers();
	         HashMap<String,List<TechnologyJDO>> responseMap = new HashMap<String,List<TechnologyJDO>>();
	         responseMap.put("data", technologyList);
	         return new ResponseEntity<HashMap<String,List<TechnologyJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchClientLaboList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<ClientLaboJDO>>> fetchClientLaboList() {
	         List<ClientLaboJDO> clientLaboList = clientLaboDao.findAllUsers();
	         HashMap<String,List<ClientLaboJDO>> responseMap = new HashMap<String,List<ClientLaboJDO>>();
	         responseMap.put("data", clientLaboList);
	         return new ResponseEntity<HashMap<String,List<ClientLaboJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchAllocationofTurnOverList", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<AllocationTurnOverJDO>>> fetchAllocationofTurnOverList() {
	         List<AllocationTurnOverJDO> allocationTurnOverList = allocationDao.findAllUsers();
	         HashMap<String,List<AllocationTurnOverJDO>> responseMap = new HashMap<String,List<AllocationTurnOverJDO>>();
	         responseMap.put("data", allocationTurnOverList);
	         return new ResponseEntity<HashMap<String,List<AllocationTurnOverJDO>>>(responseMap, HttpStatus.OK);
	     }
	     @RequestMapping(value = "/fetchlastPrototypeID", method = RequestMethod.GET)
	     public ResponseEntity<HashMap<String,List<IdJDO>>> fetchlastPrototypeID() {
	         List<IdJDO> lastIDList = idDAO.findallEntries();
	         HashMap<String,List<IdJDO>> responseMap = new HashMap<String,List<IdJDO>>();
	         responseMap.put("data", lastIDList);
	         return new ResponseEntity<HashMap<String,List<IdJDO>>>(responseMap, HttpStatus.OK);
	     }
	     
}
