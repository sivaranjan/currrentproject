package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Configuration.PrototypistsJDO;

public class PrototypistsDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(PrototypistsDAO.class.getName());

    public PrototypistsJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(PrototypistsJDO.class, id)).now();
    }

    public PrototypistsJDO findByName(String prototypist) {
        return ofy.load().type(PrototypistsJDO.class).filter("prototypist =", prototypist).first().now();
    }

    public List<PrototypistsJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(PrototypistsJDO.class).list();
    }

    public PrototypistsJDO save(PrototypistsJDO prototypist) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(prototypist).now();
        return prototypist;
    }
    
    public void deleteAll() {
        List<Key<PrototypistsJDO>> keys = ofy.load().type(PrototypistsJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
