package com.ths.service;

import static com.google.appengine.api.utils.SystemProperty.environment;

import com.google.appengine.api.utils.SystemProperty;
import com.google.appengine.api.utils.SystemProperty.Environment.Value;
import com.google.apphosting.api.ApiProxy;

public class WebServiceURLUtil {

	private static SystemProperty.Environment.Value env = environment.value();
	
	private static String appId = ApiProxy.getCurrentEnvironment().getAppId();
	
	private static String DISTRIBUTEDSOURCEAPI;
	
	private static String GOOGLESTORAGEBUCKET = "contactmanager";
	
	private static String GOOGLESTORAGEFOLDER;
	
	private static String GOOGLESTORAGEDOMAIN = "https://commondatastorage.googleapis.com";
	
	private static String CONTACTMANAGERDOMAIN;
	private static String CONTACTMANAGERDOMAINPROFILE;
	
	static{
		System.out.println("env : " +env +" appId: " +appId);
		if(env == Value.Development){
//			DISTRIBUTEDSOURCEAPI = "https://live-contactsapi.appspot.com";
//			GOOGLESTORAGEFOLDER = "newcontactimages/staging";
//			CONTACTMANAGERDOMAIN = "https://live-contactmanagerview.appspot.com";
//			CONTACTMANAGERDOMAINPROFILE	=	"https://sritest.staging-contactmanagerview.appspot.com";
			DISTRIBUTEDSOURCEAPI		= 	"https://distributedsource-cms.appspot.com";
			GOOGLESTORAGEFOLDER 		= 	"newcontactimages/staging";
			CONTACTMANAGERDOMAIN 		= 	"https://staging-contactmanagerview.appspot.com";
			CONTACTMANAGERDOMAINPROFILE	=	"https://staging-contactmanagerview.appspot.com";
		}else if(env == Value.Production)
		{
			if(appId.toLowerCase().contains("staging"))
			{
				DISTRIBUTEDSOURCEAPI		=	"https://distributedsource-cms.appspot.com";
				GOOGLESTORAGEFOLDER 		= 	"newcontactimages/staging";
				CONTACTMANAGERDOMAIN 		= 	"https://staging-contactmanagerview.appspot.com";
				CONTACTMANAGERDOMAINPROFILE	=	"https://staging-contactmanagerview.appspot.com";
				
			}
			else
			{
//				 GOOGLESTORAGEFOLDER = "contactimages/live";				
				DISTRIBUTEDSOURCEAPI		=	"https://live-contactsapi.appspot.com";
				GOOGLESTORAGEFOLDER 		=	"newcontactimages/live";
				CONTACTMANAGERDOMAIN 		=	"https://live-contactmanagerview.appspot.com";
				CONTACTMANAGERDOMAINPROFILE	=	"https://live-contactmanagerview.appspot.com";
			}
		}
	}

	public static String getDISTRIBUTEDSOURCEAPI() {
		return DISTRIBUTEDSOURCEAPI;
	}

	public static String getGOOGLESTORAGEBUCKET() {
		return GOOGLESTORAGEBUCKET;
	}

	public static String getGOOGLESTORAGEFOLDER() {
		return GOOGLESTORAGEFOLDER;
	}

	public static String getGOOGLESTORAGEDOMAIN() {
		return GOOGLESTORAGEDOMAIN;
	}

	public static String getCONTACTMANAGERDOMAIN() {
		return CONTACTMANAGERDOMAIN;
	}
	public static String getCONTACTMANAGERDOMAINPROFILE() {
		System.out.println("CONTACTMANAGERDOMAINPROFILE : " +CONTACTMANAGERDOMAINPROFILE);
		return CONTACTMANAGERDOMAINPROFILE;
	}
	
}
