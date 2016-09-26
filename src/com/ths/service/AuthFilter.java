package com.ths.service;
 
import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

import com.google.appengine.api.users.User;
import com.google.appengine.api.users.UserServiceFactory;
 
 
public class AuthFilter implements Filter {
 
    public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
        System.out.println("Filtering on...........................................................");
        HttpServletResponse response = (HttpServletResponse) res;
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "x-requested-with");
        User user = UserServiceFactory.getUserService().getCurrentUser();
        chain.doFilter(req, res);
//        if(user!=null && user.getEmail().contains("valeo.com"))
//        {
//        	chain.doFilter(req, res);	
//        } else {
//        	res.setContentType("text/plain");
//    		res.getWriter().println("Hello, world");
//        }
    }
 
    public void init(FilterConfig filterConfig) {}
 
    public void destroy() {}
 
}