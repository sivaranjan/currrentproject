package com.ths.DAO.Configuration;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Configuration.SitesListJDO;

public class SitesListDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(SitesListDAO.class.getName());

    public SitesListJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(SitesListJDO.class, id)).now();
    }

    public SitesListJDO findByName(String name) {
        return ofy.load().type(SitesListJDO.class).filter("name =", name).first().now();
    }

    public List<SitesListJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(SitesListJDO.class).list();
    }

    public SitesListJDO save(SitesListJDO sitesList) {
        log.log(FINER, "Saving example '{0}'", sitesList.getSite_Name());
        ofy.save().entities(sitesList).now();
        return sitesList;
    }

    public void deleteAll() {
        List<Key<SitesListJDO>> keys = ofy.load().type(SitesListJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
}
