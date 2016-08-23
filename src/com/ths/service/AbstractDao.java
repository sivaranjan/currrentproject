package com.ths.service;

import com.googlecode.objectify.Objectify;
import com.googlecode.objectify.ObjectifyService;

public abstract class AbstractDao {

    protected Objectify ofy = ObjectifyService.ofy();

}
