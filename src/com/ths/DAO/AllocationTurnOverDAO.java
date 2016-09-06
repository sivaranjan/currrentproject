package com.ths.DAO;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.JDO.AllocationTurnOverJDO;

public class AllocationTurnOverDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(AllocationTurnOverDAO.class.getName());

    public AllocationTurnOverJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(AllocationTurnOverJDO.class, id)).now();
    }

    public AllocationTurnOverJDO findByName(String allocation) {
        return ofy.load().type(AllocationTurnOverJDO.class).filter("randD =", allocation).first().now();
    }

    public List<AllocationTurnOverJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(AllocationTurnOverJDO.class).list();
    }

    public AllocationTurnOverJDO save(AllocationTurnOverJDO randD) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(randD).now();
        return randD;
    }
    
    public void deleteAll() {
        List<Key<AllocationTurnOverJDO>> keys = ofy.load().type(AllocationTurnOverJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
