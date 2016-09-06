package com.ths.DAO;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.JDO.ProductTypesJDO;

public class ProductTypeDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(ProductTypeDAO.class.getName());

    public ProductTypesJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(ProductTypesJDO.class, id)).now();
    }

    public ProductTypesJDO findByName(String productType) {
        return ofy.load().type(ProductTypesJDO.class).filter("productType =", productType).first().now();
    }

    public List<ProductTypesJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(ProductTypesJDO.class).list();
    }

    public ProductTypesJDO save(ProductTypesJDO productType) {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(productType).now();
        return productType;
    }
    
    public void deleteAll() {
        List<Key<ProductTypesJDO>> keys = ofy.load().type(ProductTypesJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
