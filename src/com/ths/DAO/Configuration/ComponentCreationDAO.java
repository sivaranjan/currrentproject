package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.ComponentJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class ComponentCreationDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ComponentCreationDAO.class.getName());
    public ComponentJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ComponentJDO.class, id)).now();
    }

    public ComponentJDO findByName(String name) {
        return ofy.load().type(ComponentJDO.class).filter("name =", name).first().now();
    }
    
    public List<ComponentJDO> findBySite(String site) {
        return ofy.load().type(ComponentJDO.class).filter("site =", site).list();
    }
    public List<ComponentJDO> findByComponentID(String componentID) {
        return ofy.load().type(ComponentJDO.class).filter("componentID =", componentID).list();
    }
    
    public List<ComponentJDO> findByOrderID(String orderIDReference) {
        return ofy.load().type(ComponentJDO.class).filter("orderIDReference =", orderIDReference).list();
    }
    public List<ComponentJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ComponentJDO.class).list();
    }
    
   public ComponentJDO save(ComponentJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<ComponentJDO>> keys = ofy.load().type(ComponentJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
