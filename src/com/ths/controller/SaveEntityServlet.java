/**
 * Copyright 2014-2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//[START all]
package com.ths.controller;

import java.io.IOException;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import static com.googlecode.objectify.ObjectifyService.ofy;
import com.ths.model.Entry;

public class SaveEntityServlet extends HttpServlet 
{

  @Override
  public void doPost(HttpServletRequest req, HttpServletResponse resp) throws IOException 
  {
	 System.out.println("sathhya");
    Entry entry;

    String name = req.getParameter("name");
    String address = req.getParameter("address");
    String phone = req.getParameter("phone");
    entry = new Entry(name, "gh",address, phone);
	 ofy().save().entity(entry).now();
	 Entry entrys= ofy().load().type(Entry.class).filter("name", "sathya").first().now();
	 System.out.println("dsfs :::"+entrys);
	
  }
}
