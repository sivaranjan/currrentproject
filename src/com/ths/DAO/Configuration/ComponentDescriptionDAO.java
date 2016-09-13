package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.ComponentDescriptionJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class ComponentDescriptionDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ComponentDescriptionJDO.class.getName());
    public ComponentDescriptionJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ComponentDescriptionJDO.class, id)).now();
    }

    public ComponentDescriptionJDO findByName(String name) {
        return ofy.load().type(ComponentDescriptionJDO.class).filter("name =", name).first().now();
    }
    public List<ComponentDescriptionJDO> findBySite(String site) {
        return ofy.load().type(ComponentDescriptionJDO.class).filter("site =", site).list();
    }
    public List<ComponentDescriptionJDO> findByType(String actorType) {
        return ofy.load().type(ComponentDescriptionJDO.class).filter("actorType =", actorType).list();
    }
    public List<ComponentDescriptionJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ComponentDescriptionJDO.class).list();
    }
    
   public ComponentDescriptionJDO save(ComponentDescriptionJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<ComponentDescriptionJDO>> keys = ofy.load().type(ComponentDescriptionJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
