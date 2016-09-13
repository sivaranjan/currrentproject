package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.QualityDeliverableJDO;
import com.ths.JDO.Configuration.ActorsListJDO;


public class QualityDeliverableDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(QualityDeliverableDAO.class.getName());
    public QualityDeliverableJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(QualityDeliverableJDO.class, id)).now();
    }

    public QualityDeliverableJDO findByName(String name) {
        return ofy.load().type(QualityDeliverableJDO.class).filter("name =", name).first().now();
    }
    public List<QualityDeliverableJDO> findBySite(String site) {
        return ofy.load().type(QualityDeliverableJDO.class).filter("site =", site).list();
    }
    public List<QualityDeliverableJDO> findByType(String actorType) {
        return ofy.load().type(QualityDeliverableJDO.class).filter("actorType =", actorType).list();
    }
    public List<QualityDeliverableJDO> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(QualityDeliverableJDO.class).list();
    }
    
   public QualityDeliverableJDO save(QualityDeliverableJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<QualityDeliverableJDO>> keys = ofy.load().type(QualityDeliverableJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
