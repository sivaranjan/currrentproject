package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Configuration.IncotermsJDO;

public class IncotermsDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(IncotermsDAO.class.getName());

    public IncotermsJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(IncotermsJDO.class, id)).now();
    }

    public IncotermsJDO findByName(String name) {
        return ofy.load().type(IncotermsJDO.class).filter("name =", name).first().now();
    }

    public List<IncotermsJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(IncotermsJDO.class).list();
    }

    public IncotermsJDO save(IncotermsJDO incoterm) {
        log.log(FINER, "Saving incoterms '{0}'");
        ofy.save().entities(incoterm).now();
        return incoterm;
    }
    
    public void deleteAll() {
        List<Key<IncotermsJDO>> keys = ofy.load().type(IncotermsJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}

