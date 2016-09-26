package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Configuration.ClientLaboJDO;
import com.ths.JDO.Configuration.CustomersListJDO;

public class ClientLaboDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ClientLaboDAO.class.getName());

    public ClientLaboJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ClientLaboJDO.class, id)).now();
    }

    public ClientLaboJDO findByClientName(String clientName) {
        return ofy.load().type(ClientLaboJDO.class).filter("clientName =", clientName).first().now();
    }
    
    public ClientLaboJDO findByAddress(String address) {
        return ofy.load().type(ClientLaboJDO.class).filter("address =", address).first().now();
    }
    public List<ClientLaboJDO> findByClientNameOnLoad(String customer_Name) {
        return ofy.load().type(ClientLaboJDO.class).filter("clientName =", customer_Name).list();
    }
    public List<ClientLaboJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ClientLaboJDO.class).list();
    }

    public ClientLaboJDO save(ClientLaboJDO technnology) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(technnology).now();
        return technnology;
    }
    
    public void deleteAll() {
        List<Key<ClientLaboJDO>> keys = ofy.load().type(ClientLaboJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
