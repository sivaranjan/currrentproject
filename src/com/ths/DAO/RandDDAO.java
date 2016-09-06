package com.ths.DAO;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.JDO.RandDJDO;

public class RandDDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(RandDDAO.class.getName());

    public RandDJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(RandDJDO.class, id)).now();
    }

    public RandDJDO findByName(String randD) {
        return ofy.load().type(RandDJDO.class).filter("randD =", randD).first().now();
    }

    public List<RandDJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(RandDJDO.class).list();
    }

    public RandDJDO save(RandDJDO randD) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(randD).now();
        return randD;
    }
    
    public void deleteAll() {
        List<Key<RandDJDO>> keys = ofy.load().type(RandDJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
