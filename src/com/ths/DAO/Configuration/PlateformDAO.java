package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Configuration.PlateformJDO;

public class PlateformDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(PlateformDAO.class.getName());

    public PlateformJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(PlateformJDO.class, id)).now();
    }

    public PlateformJDO findByName(String name) {
        return ofy.load().type(PlateformJDO.class).filter("name =", name).first().now();
    }

    public List<PlateformJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(PlateformJDO.class).list();
    }

    public PlateformJDO save(PlateformJDO plateform) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(plateform).now();
        return plateform;
    }
    
    public void deleteAll() {
        List<Key<PlateformJDO>> keys = ofy.load().type(PlateformJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
