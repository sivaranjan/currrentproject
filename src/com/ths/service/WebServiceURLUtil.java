package com.ths.service;

import static com.google.appengine.api.utils.SystemProperty.environment;

import com.google.appengine.api.utils.SystemProperty;
import com.google.appengine.api.utils.SystemProperty.Environment.Value;
import com.google.apphosting.api.ApiProxy;

public class WebServiceURLUtil 
{
	private static SystemProperty.Environment.Value env = environment.value();
	private static String appId = ApiProxy.getCurrentEnvironment().getAppId();
	private static String GOOGLESTORAGEBUCKET ;
	private static String GOOGLESTORAGEDOMAIN = "https://storage.googleapis.com";
	private static String GOOGLESTORAGEDOMAINPATH;
	
	
	static
	{
		System.out.println("env : " +env +" appId: " +appId);
		System.out.println("Value.Development is this :: "+Value.Development);
		System.out.println("Value.Production is this :: "+Value.Production);
		if(appId.toLowerCase().contains("valeo-ths-prototype-acp"))
		{
			GOOGLESTORAGEDOMAIN 		=   "https://storage.googleapis.com";
			GOOGLESTORAGEBUCKET 		= 	"valeo-ths-prototype-acp.appspot.com";
			GOOGLESTORAGEDOMAINPATH		=	 GOOGLESTORAGEDOMAIN+"/"+GOOGLESTORAGEBUCKET;
			
		}
		else if(appId.toLowerCase().contains("localhost"))
		{
			GOOGLESTORAGEDOMAIN 		= 	"";
			GOOGLESTORAGEBUCKET 		=   "";
			GOOGLESTORAGEDOMAINPATH     =   "..";
		}
		else
		{
			GOOGLESTORAGEDOMAIN 		= 	"https://storage.googleapis.com";
			GOOGLESTORAGEBUCKET 		=   "valeo-is-ths-prototype.appspot.com";
			GOOGLESTORAGEDOMAINPATH		=	GOOGLESTORAGEDOMAIN+"/"+GOOGLESTORAGEBUCKET;
		}
	}


	public static String getGOOGLESTORAGEBUCKET() {
		return GOOGLESTORAGEBUCKET;
	}
	public static String getGOOGLESTORAGEDOMAIN() {
		return GOOGLESTORAGEDOMAIN;
	}
	public static String getGOOGLESTORAGEDOMAINPATH() {
		return GOOGLESTORAGEDOMAINPATH;
	}
	
}
