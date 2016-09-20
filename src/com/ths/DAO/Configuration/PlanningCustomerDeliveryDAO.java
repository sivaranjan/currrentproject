package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.PlanningCustomerDeliveryJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class PlanningCustomerDeliveryDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(PlanningCustomerDeliveryDAO.class.getName());
    public PlanningCustomerDeliveryJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(PlanningCustomerDeliveryJDO.class, id)).now();
    }

    public PlanningCustomerDeliveryJDO findByName(String name) {
        return ofy.load().type(PlanningCustomerDeliveryJDO.class).filter("name =", name).first().now();
    }
    public List<PlanningCustomerDeliveryJDO> findByComponentID(String componentID) {
        return ofy.load().type(PlanningCustomerDeliveryJDO.class).filter("componentID =", componentID).list();
    }
    public List<PlanningCustomerDeliveryJDO> findByType(String actorType) {
        return ofy.load().type(PlanningCustomerDeliveryJDO.class).filter("actorType =", actorType).list();
    }
    public List<PlanningCustomerDeliveryJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(PlanningCustomerDeliveryJDO.class).list();
    }
    
   public PlanningCustomerDeliveryJDO save(PlanningCustomerDeliveryJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<PlanningCustomerDeliveryJDO>> keys = ofy.load().type(PlanningCustomerDeliveryJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
