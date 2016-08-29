package com.ths.DAO;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.JDO.IdJDO;

public class IdDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(IdDAO.class.getName());

    public IdJDO findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(IdJDO.class, id)).now();
    }

    public IdJDO findByName(String name) {
        return ofy.load().type(IdJDO.class).filter("name =", name).first().now();
    }

    public List<IdJDO> findAllUsers() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(IdJDO.class).list();
    }

    public IdJDO save(IdJDO genID) {
        ofy.save().entities(genID).now();
        return genID;
    }

    public void deleteAll() {
        List<Key<IdJDO>> keys = ofy.load().type(IdJDO.class).keys().list();
        ofy.delete().entities(keys).now();
    }
    
   /* public String redIdGenerator()
	{
		//long unixTime = System.currentTimeMillis() / 1000L;
		Calendar calendar = Calendar.getInstance();
		String s = String.valueOf(calendar.getTimeInMillis());
		String id = "RED-"+s ;
		return id.trim() ;
		IdDao obj = new IdDao();
		int nextnum = obj.getNextIdfromDatastore();
		String nextnumString = String.format("%07d", nextnum);
		log.info("the next num is"+nextnumString);
		
		String red_Id = "LOG"+nextnumString ;
		return red_Id.trim() ;
        
	}*/
    
    /*try {
		logger.warning("The jdo detail are");
		pm = PersistenceManagerUtil.getPersistenceManager();

		String strQry2Execute = "";

		strQry2Execute = "SELECT FROM " + IdJdo.class.getName() ;

		logger.warning("strQry2Execute = " + strQry2Execute);

		Query query = pm.newQuery(strQry2Execute);
		idList = (List<IdJdo>) query.execute() ;
		obj = idList.get(0);
		nextnum = obj.getNext_id();
		obj.setNext_id(nextnum + 1);
		pm.makePersistent(obj);
		

	} */
}
