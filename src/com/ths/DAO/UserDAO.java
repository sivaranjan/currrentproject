package com.ths.DAO;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.JDO.UserJDO;

public class UserDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(UserDAO.class.getName());

    public UserJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(UserJDO.class, id)).now();
    }

    public UserJDO findByUserEmailsingle(String userEmail) {
        return ofy.load().type(UserJDO.class).filter("userEmail =", userEmail).first().now();
    }
    public List<UserJDO> findByUserEmail(String userEmail) {
        return ofy.load().type(UserJDO.class).filter("userEmail =", userEmail).list();
    }
    public List<UserJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(UserJDO.class).list();
    }

    public UserJDO save(UserJDO userinfo) {
        ofy.save().entities(userinfo).now();
        return userinfo;
    }
    public UserJDO update(UserJDO userInfoNew) {
        ofy.save().entities(userInfoNew).now();
        return userInfoNew;
    }

    public void deleteAll() {
        List<Key<UserJDO>> keys = ofy.load().type(UserJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
    
}
