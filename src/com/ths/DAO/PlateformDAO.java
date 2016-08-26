package com.ths.DAO;

import com.googlecode.objectify.Key;
import com.ths.JDO.Example;
import com.ths.JDO.PlateformJDO;

import java.util.List;
import java.util.logging.Logger;

import static java.util.logging.Level.FINER;

public class PlateformDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(PlateformDAO.class.getName());

    public Example findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(Example.class, id)).now();
    }

    public Example findByName(String name) {
        return ofy.load().type(Example.class).filter("name =", name).first().now();
    }

    public List<Example> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(Example.class).list();
    }

    public PlateformJDO save(PlateformJDO plateform) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(plateform).now();
        return plateform;
    }
    
    public void deleteAll() {
        List<Key<Example>> keys = ofy.load().type(Example.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
