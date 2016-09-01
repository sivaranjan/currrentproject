package com.ths.DAO;

import com.googlecode.objectify.Key;
import com.ths.JDO.Example;
import com.ths.JDO.OrderJDO;

import java.util.List;
import java.util.logging.Logger;

import static java.util.logging.Level.FINER;

public class OrderDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(OrderDAO.class.getName());

    public OrderJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(OrderJDO.class, id)).now();
    }

    public OrderJDO findByName(String name) {
        return ofy.load().type(OrderJDO.class).filter("name =", name).first().now();
    }

    public List<OrderJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(OrderJDO.class).list();
    }

    public OrderJDO save(OrderJDO order) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(order).now();
        return order;
    }
    
    public void deleteAll() {
        List<Key<OrderJDO>> keys = ofy.load().type(OrderJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
