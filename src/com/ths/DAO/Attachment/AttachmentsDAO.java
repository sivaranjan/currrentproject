package com.ths.DAO.Attachment;

import static java.util.logging.Level.FINER;

import java.util.List;
import java.util.logging.Logger;

import com.googlecode.objectify.Key;
import com.ths.DAO.AbstractDao;
import com.ths.JDO.Attachment.AttachmentsJdo;


public class AttachmentsDAO extends AbstractDao {

    private static final Logger log = Logger.getLogger(AttachmentsDAO.class.getName());
    public AttachmentsJdo findById(long id) {
        log.log(FINER, "Loading example with ID {0}", id);
        return ofy.load().key(Key.create(AttachmentsJdo.class, id)).now();
    }

    public AttachmentsJdo findByName(String name) {
        return ofy.load().type(AttachmentsJdo.class).filter("name =", name).first().now();
    }
    public List<AttachmentsJdo> findByAttachmentID(String attachmentID) {
        return ofy.load().type(AttachmentsJdo.class).filter("attachment_Id =", attachmentID).list();
    }
    public List<AttachmentsJdo> findByType(String actorType) {
        return ofy.load().type(AttachmentsJdo.class).filter("actorType =", actorType).list();
    }
    public List<AttachmentsJdo> findWholeActorsList() {
        log.log(FINER, "Loading all examples.");
        return ofy.load().type(AttachmentsJdo.class).list();
    }
    
   public AttachmentsJdo save(AttachmentsJdo actor) 
   {
        log.log(FINER, "Saving example '{0}'");
        ofy.save().entities(actor).now();
        return actor;
   }
   public void deleteAll() 
   {
       List<Key<AttachmentsJdo>> keys = ofy.load().type(AttachmentsJdo.class).keys().list();
       ofy.delete().entities(keys).now();
   }
   public void deleteByAttachmentID(String attachmentID) 
   {
	   List<Key<AttachmentsJdo>> keys = ofy.load().type(AttachmentsJdo.class).filter("attachment_Id =", attachmentID).keys().list();
       ofy.delete().entities(keys).now();
   }
}
