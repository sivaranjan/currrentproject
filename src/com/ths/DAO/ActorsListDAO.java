package com.ths.DAO;

import com.googlecode.objectify.Key;
import com.ths.JDO.ActorsJDO;
import com.ths.JDO.ActorsListJDO;
import com.ths.JDO.Example;

import java.util.List;
import java.util.logging.Logger;

import static java.util.logging.Level.FINER;

public class ActorsListDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ActorsListDAO.class.getName());
    public ActorsListJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ActorsListJDO.class, id)).now();
    }

    public ActorsListJDO findByName(String name) {
        return ofy.load().type(ActorsListJDO.class).filter("name =", name).first().now();
    }
    public List<ActorsListJDO> findByType(String actorType) {
        return ofy.load().type(ActorsListJDO.class).filter("actorType =", actorType).list();
    }
    public List<ActorsListJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ActorsListJDO.class).list();
    }
    
   public ActorsListJDO save(ActorsListJDO actor) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
    }

   public void deleteAll() {
       List<Key<ActorsListJDO>> keys = ofy.load().type(ActorsListJDO.class).keys().list();
       ofy.delete().entities(keys).now();
   }
}
