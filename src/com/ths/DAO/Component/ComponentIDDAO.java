package com.ths.DAO.Component;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Component.ComponentIDJDO;

public class ComponentIDDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ComponentIDDAO.class.getName());

    public ComponentIDJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ComponentIDJDO.class, id)).now();
    }

    public ComponentIDJDO findByName(String name) {
        return ofy.load().type(ComponentIDJDO.class).filter("name =", name).first().now();
    }

    public List<ComponentIDJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ComponentIDJDO.class).list();
    }

    public ComponentIDJDO save(ComponentIDJDO genID) {
        ofy.save().entities(genID).now();
        return genID;
    }

    public void deleteAll() {
        List<Key<ComponentIDJDO>> keys = ofy.load().type(ComponentIDJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
    
}
