package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.ProcessValidationJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class ProcessValidationDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ProcessValidationDAO.class.getName());
    public ProcessValidationJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ProcessValidationJDO.class, id)).now();
    }

    public ProcessValidationJDO findByName(String name) {
        return ofy.load().type(ProcessValidationJDO.class).filter("name =", name).first().now();
    }
    public List<ProcessValidationJDO> findBySite(String site) {
        return ofy.load().type(ProcessValidationJDO.class).filter("site =", site).list();
    }
    public List<ProcessValidationJDO> findByType(String actorType) {
        return ofy.load().type(ProcessValidationJDO.class).filter("actorType =", actorType).list();
    }
    public List<ProcessValidationJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ProcessValidationJDO.class).list();
    }
    
   public ProcessValidationJDO save(ProcessValidationJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<ProcessValidationJDO>> keys = ofy.load().type(ProcessValidationJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
