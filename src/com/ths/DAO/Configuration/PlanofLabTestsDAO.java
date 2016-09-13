package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.PlanOfLabTestsJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class PlanofLabTestsDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(PlanofLabTestsDAO.class.getName());
    public PlanOfLabTestsJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(PlanOfLabTestsJDO.class, id)).now();
    }

    public PlanOfLabTestsJDO findByName(String name) {
        return ofy.load().type(PlanOfLabTestsJDO.class).filter("name =", name).first().now();
    }
    public List<PlanOfLabTestsJDO> findBySite(String site) {
        return ofy.load().type(PlanOfLabTestsJDO.class).filter("site =", site).list();
    }
    public List<PlanOfLabTestsJDO> findByType(String actorType) {
        return ofy.load().type(PlanOfLabTestsJDO.class).filter("actorType =", actorType).list();
    }
    public List<PlanOfLabTestsJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(PlanOfLabTestsJDO.class).list();
    }
    
   public PlanOfLabTestsJDO save(PlanOfLabTestsJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<PlanOfLabTestsJDO>> keys = ofy.load().type(PlanOfLabTestsJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
