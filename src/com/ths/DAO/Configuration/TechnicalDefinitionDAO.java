package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.TechnicalDefinitionJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class TechnicalDefinitionDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(TechnicalDefinitionDAO.class.getName());
    public TechnicalDefinitionJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(TechnicalDefinitionJDO.class, id)).now();
    }

    public TechnicalDefinitionJDO findByName(String name) {
        return ofy.load().type(TechnicalDefinitionJDO.class).filter("name =", name).first().now();
    }
    public List<TechnicalDefinitionJDO> findBySite(String site) {
        return ofy.load().type(TechnicalDefinitionJDO.class).filter("site =", site).list();
    }
    public List<TechnicalDefinitionJDO> findByType(String actorType) {
        return ofy.load().type(TechnicalDefinitionJDO.class).filter("actorType =", actorType).list();
    }
    public List<TechnicalDefinitionJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(TechnicalDefinitionJDO.class).list();
    }
    
   public TechnicalDefinitionJDO save(TechnicalDefinitionJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<TechnicalDefinitionJDO>> keys = ofy.load().type(TechnicalDefinitionJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
