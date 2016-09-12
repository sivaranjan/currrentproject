package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Configuration.CustomersListJDO;

public class CustomersListDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(CustomersListDAO.class.getName());

    public CustomersListJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(CustomersListJDO.class, id)).now();
    }

    public CustomersListJDO findByName(String name) {
        return ofy.load().type(CustomersListJDO.class).filter("name =", name).first().now();
    }
    public List<CustomersListJDO> findByType(String customer_Name) {
        return ofy.load().type(CustomersListJDO.class).filter("customer_Name =", customer_Name).list();
    }
    public List<CustomersListJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(CustomersListJDO.class).list();
    }

    public CustomersListJDO save(CustomersListJDO customersList) {
        log.log(FINER, "Saving example '{0}'", customersList.getCustomer_Name());
        ofy.save().entities(customersList).now();
        return customersList;
    }

    public void deleteAll() {
        List<Key<CustomersListJDO>> keys = ofy.load().type(CustomersListJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
