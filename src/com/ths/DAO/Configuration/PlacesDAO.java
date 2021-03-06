package com.ths.DAO.Configuration;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Configuration.PlacesJDO;

import java.util.List;
import java.util.logging.Logger;

import static java.util.logging.Level.FINER;

public class PlacesDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(PlacesDAO.class.getName());

    public PlacesJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(PlacesJDO.class, id)).now();
    }

    public PlacesJDO findByName(String name) {
        return ofy.load().type(PlacesJDO.class).filter("name =", name).first().now();
    }

    public List<PlacesJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(PlacesJDO.class).list();
    }

    public PlacesJDO save(PlacesJDO places) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(places).now();
        return places;
    }
    
    public void deleteAll() {
        List<Key<PlacesJDO>> keys = ofy.load().type(PlacesJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
