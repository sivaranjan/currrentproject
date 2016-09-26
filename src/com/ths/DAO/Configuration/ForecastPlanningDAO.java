package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.ForecastPlanningOfWorkshopJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class ForecastPlanningDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ForecastPlanningDAO.class.getName());
    public ForecastPlanningOfWorkshopJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ForecastPlanningOfWorkshopJDO.class, id)).now();
    }

    public ForecastPlanningOfWorkshopJDO findByName(String name) {
        return ofy.load().type(ForecastPlanningOfWorkshopJDO.class).filter("name =", name).first().now();
    }
    public List<ForecastPlanningOfWorkshopJDO> findBySite(String site) {
        return ofy.load().type(ForecastPlanningOfWorkshopJDO.class).filter("site =", site).list();
    }
    public List<ForecastPlanningOfWorkshopJDO> findByType(String actorType) {
        return ofy.load().type(ForecastPlanningOfWorkshopJDO.class).filter("actorType =", actorType).list();
    }
    public List<ForecastPlanningOfWorkshopJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ForecastPlanningOfWorkshopJDO.class).list();
    }
    
   public ForecastPlanningOfWorkshopJDO save(ForecastPlanningOfWorkshopJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<ForecastPlanningOfWorkshopJDO>> keys = ofy.load().type(ForecastPlanningOfWorkshopJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
