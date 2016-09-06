package com.ths.DAO;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.JDO.TechnologyJDO;

public class TechnologyDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(PrototypistsDAO.class.getName());

    public TechnologyJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(TechnologyJDO.class, id)).now();
    }

    public TechnologyJDO findByTechnology(String technology) {
        return ofy.load().type(TechnologyJDO.class).filter("technology =", technology).first().now();
    }
    
    public TechnologyJDO findByProductType(String productType) {
        return ofy.load().type(TechnologyJDO.class).filter("productType =", productType).first().now();
    }

    public List<TechnologyJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(TechnologyJDO.class).list();
    }

    public TechnologyJDO save(TechnologyJDO technnology) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(technnology).now();
        return technnology;
    }
    
    public void deleteAll() {
        List<Key<TechnologyJDO>> keys = ofy.load().type(TechnologyJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
