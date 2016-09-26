package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.ReminderJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class ReminderDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ReminderDAO.class.getName());
    public ReminderJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ReminderJDO.class, id)).now();
    }

    public ReminderJDO findByName(String name) {
        return ofy.load().type(ReminderJDO.class).filter("name =", name).first().now();
    }
    public List<ReminderJDO> findBySite(String site) {
        return ofy.load().type(ReminderJDO.class).filter("site =", site).list();
    }
    public List<ReminderJDO> findByType(String actorType) {
        return ofy.load().type(ReminderJDO.class).filter("actorType =", actorType).list();
    }
    public List<ReminderJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ReminderJDO.class).list();
    }
    
   public ReminderJDO save(ReminderJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<ReminderJDO>> keys = ofy.load().type(ReminderJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
