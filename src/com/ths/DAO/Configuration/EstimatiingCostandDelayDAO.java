package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.EstimatingCostandDelayJDO;
import com.ths.JDO.Component.ProcessValidationJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class EstimatiingCostandDelayDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(EstimatiingCostandDelayDAO.class.getName());
    public EstimatingCostandDelayJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(EstimatingCostandDelayJDO.class, id)).now();
    }

    public EstimatingCostandDelayJDO findByName(String name) {
        return ofy.load().type(EstimatingCostandDelayJDO.class).filter("name =", name).first().now();
    }
    public List<EstimatingCostandDelayJDO> findBySite(String site) {
        return ofy.load().type(EstimatingCostandDelayJDO.class).filter("site =", site).list();
    }
    public List<EstimatingCostandDelayJDO> findByType(String actorType) {
        return ofy.load().type(EstimatingCostandDelayJDO.class).filter("actorType =", actorType).list();
    }
    public List<EstimatingCostandDelayJDO> findByComponentID(String componentID) {
        return ofy.load().type(EstimatingCostandDelayJDO.class).filter("componentID =", componentID).list();
    }
    public List<EstimatingCostandDelayJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(EstimatingCostandDelayJDO.class).list();
    }
    
   public EstimatingCostandDelayJDO save(EstimatingCostandDelayJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<EstimatingCostandDelayJDO>> keys = ofy.load().type(EstimatingCostandDelayJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
