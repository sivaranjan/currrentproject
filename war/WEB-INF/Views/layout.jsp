<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page
	import ="com.google.appengine.api.users.UserServiceFactory"
	import ="com.google.appengine.api.users.User"	
	import ="com.ths.service.WebServiceURLUtil"	
	 %> 
 	<%
	 	String useremailid = "";
	 	User user = UserServiceFactory.getUserService().getCurrentUser();
	    if(user.getEmail()!=null && !"".equals(user.getEmail()))
	    {
	    	System.out.println("session is there");
	    	useremailid = user.getEmail();
	    }
	 %>
	 <script>
	 	window.language || (window.language = {});
	 	var useremailid ='<%=useremailid%>';
	 </script>	 
<!DOCTYPE HTML>
<html lang="en">

<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
		THS France Prototype Database
    </title>
    	<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/fonts_googleapis_com.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/bootstrap.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/dataTables.bootstrap.min.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/responsive.bootstrap.min.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/buttons.dataTables.min.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/datepicker3.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/bootstrap-select.min.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/valeo-graphics.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/app.css">
		<link rel="stylesheet" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/CSS/pace.css">
		<link rel="shortcut icon" href="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/statics/images/myicon.ico" type="image/x-icon"/>
	</head>

<body>
<div class="modal fade" id="pleasewait" role="dialog">
	<center><img src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/statics/images/loader.gif" style="height: 48px;margin: 24%;"></img></center>
</div>
	<main id="wrap">
	<div class="status-voicebox hide" id="statusLoader" >
		<div class="voicebox-content fade">
			<span class="loading"></span>
			<span id="statusmsg"></span>
		</div>
	</div>
    <header class="header">
            
            <div class="col-md-2 col-sm-2 col-xs-12">
                <a href="/"><img src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/statics/images/Valeo_Logo.svg.png" ></a>
            </div>
            <div class="col-md-4 col-sm-10 col-xs-12" style="padding:0"> 
                <h3 id="headtitle" class="valeo-app-title">THS France Prototype Database</h3>
            </div>
            <div class="col-md-6 col-xs-12">
                
                <div class="col-md-10 hidden-xs hidden-sm">
                    <div class="btn-group pull-right" style="margin-left: 15px;">
                        <span id="userlabel" class="header-text">Welcome </span>
                    </div>
                    <div class="btn-group pull-right">
				        <button id='lang' type="button" class="btn btn-link dropdown-toggle language-dropdown" data-toggle="dropdown" aria-expanded="false" value="EN">
				        <img src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/statics/images/en.png"> EN <span class="caret"></span>
				        </button>
				        <ul class="dropdown-menu language" role="menu">
				          <li class="languageli" data-language="EN"><a style="cursor:pointer"><img src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/statics/images/en.png"> EN</a></li>
				          <li class="divider"></li>
				          <li class="languageli" data-language="FR"><a style="cursor:pointer"><img src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/statics/images/fr.png"> FR</a></li>
				        </ul>
				    </div>
                </div>
                <div class="col-md-2 hidden-xs hidden-sm">
                    <div class="btn-group pull-right">
                        <span class="header-text"><a href="" id="logout" style="cursor:"pointer">LOGOUT</a></span>
                    </div>
                </div>
            </div>
        </header>

        <!-- Tab Menus -->
        <nav class="navbar navbar-default" id="navbar-1" style="margin-bottom: 0px;">
           
        </nav>

        <!-- =========================== Home container ==================================================== -->
        
        <section class="custom-container" id="welcome-section">
        	
        </section>

		<section class="custom-container hide" id="navfixed-wrapper">
			<div id="navbar-2">
			
			</div>
		</section>
        <!-- =========================== Create Order container ==================================================== -->
        <section class="custom-container hide"  id="createorder-section">
			
            
            <div class="col-md-12">
            	
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                	<div class="panel panel-default" id="orderdetailview">
					</div>
                </div>
            </div>
        </section>
		<section class="custom-container hide"  id="admin-section">
			
			
		</section>
		<section class="custom-container hide" id="component-section">
			
		</section>
		<section class="custom-container hide" id="orderlist-section">
			
		</section>
		<section class="custom-container hide" id="componentlist-section">
			
		</section>
		</main>
        <!-- Footer -->
        <footer>
		    <div class="col-md-12 col-xs-12 logo">
		        <div class="col-md-2 col-xs-4">
		            <img src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/statics/images/logo-valeo-2.png" alt="Valeo">
		            <span>&#x40;</span>
		        </div>
		    </div>
		    <div class="col-md-12 col-xs-12 footer-text" style="padding: 15px 50px;">
		        Valeo is an automotive supplier, partner to all automakers worldwide.
		        As a technology company, Valeo proposes innovative products and systems that contribute
		        to the reduction of CO2 emissions and to the development of intuitive driving.<br> In 2013,
		        the Group generated sales of €12.1 billion euros and invested over 10% of its original
		        equipment sales in research and development. Valeo has 124 production sites, 16 Research centers,
		        35 Development centers and 12 distribution platforms, and employs 74,800 people in 29 countries
		        throughout the world. 
		    </div>
		</footer>

		
		
		
		
		
		
		
		
		<!-- Demote to requster Modal -->
		<div class="modal fade" id="demotereq-modal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Demote Or Reject</h4>
		      </div>
		      <div class="modal-body">
		      	<form role="form">
		      		<div class="form-group">
						    <label for="name">Comment</label>
						    <textarea class="form-control" rows="3"></textarea>
						</div>
		      	</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-success">Save changes</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
		
		
		
		
		<!-- Parts Production Modal -->
		<div class="modal fade" id="partsprod-modal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Creation of Parts Production</h4>
		      </div>
		      <div class="modal-body">
		      	<form role="form">
		      			<div class="form-group">
						    <label>Link</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Date</label>
						    <div class="input-group date">
							    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							</div>
						</div>
						<div class="form-group">
						    <label>Quantity</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Made by</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>MOD past hours</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Comment</label>
						    <textarea class="form-control" rows="3"></textarea>
						</div>
						<div class="form-group">
						    <label>Notification ?</label>
						    <input type="text" class="form-control">
						</div>
		      	</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-success">Save changes</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
		<!-- Quality Approval Modal -->
		<div class="modal fade" id="qualapp-modal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Creation of Quality Approval</h4>
		      </div>
		      <div class="modal-body">
		      	<form role="form">
		      			<div class="form-group">
						    <label>Link</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Date</label>
						    <div class="input-group date">
							    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							</div>
						</div>
						<div class="form-group">
						    <label>Quantity</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Compliant ?</label>
						    <select class="selectpicker" data-width="100%" title=" ">
						        <option>Yes</option>
						        <option>No</option>
						    </select>
						</div>
						<div class="form-group">
						    <label>BLi#</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Delivery</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Comment</label>
						    <textarea class="form-control" rows="3"></textarea>
						</div>
						<div class="form-group">
						    <label>Made by</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Notification ?</label>
						    <input type="text" class="form-control">
						</div>
		      	</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-success">Save changes</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
		<!-- Validation test report Modal -->
		<div class="modal fade" id="validtestreport-modal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Creation of Validation test report</h4>
		      </div>
		      <div class="modal-body">
		      	<form role="form">
		      			<div class="form-group">
						    <label>Link</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Date</label>
						    <div class="input-group date">
							    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							</div>
						</div>
						<div class="form-group">
						    <label>Quantity</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Approval ?</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>BLi#</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Delivery</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Notification ?</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Comment</label>
						    <textarea class="form-control" rows="3"></textarea>
						</div>
						<div class="form-group">
						    <label>Made by</label>
						    <input type="text" class="form-control">
						</div>
		      	</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-success">Save changes</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
		<!-- Delivery/Billing Modal -->
		<div class="modal fade" id="devliverbill-modal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Creation of Delivery/Billing</h4>
		      </div>
		      <div class="modal-body">
		      	<form role="form">
		      			<div class="form-group">
						    <label>Link</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Delivery Date</label>
						    <div class="input-group date">
							    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							</div>
						</div>
						<div class="form-group">
						    <label>Qty delivered</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>N<sup>&#8728;</sup> Marker</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>BL Cordys</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>BL SAP</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Invoice N<sup>&#8728;</sup></label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Inviced qty</label>
						   	<input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Billing date</label>
						    <div class="input-group date">
							    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							</div>
						</div>
						<div class="form-group">
						    <label>Delivery notif. ?</label>
						    <input type="text" class="form-control">
						</div>
						<div class="form-group">
						    <label>Billing notif. ?</label>
						    <input type="text" class="form-control">
						</div>
		      	</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-success">Save changes</button>
		        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>
		<div class="modal fade" id="attachment-modal" tabindex="-1" role="dialog" >
		  				
		</div>


		
		<!-- JavaScript -->
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Loader/language.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Loader/constants.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Configurations/Config-1-OrderCreation.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Configurations/Config-2-ComponentCreation1.js"></script>
			
		
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/jquery-1.11.3.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/jquery.min.js"></script>
        
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/underscore.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/backbone-min.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/validate.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/ajaxfileupload.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/jquery.dataTables.min.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/dataTables.bootstrap.min.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/dataTables.responsive.min.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/responsive.bootstrap.min.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/dataTables.buttons.min.js"></script> 
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/bootstrap.min.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/bootstrap-datepicker.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/valeo-graphics.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/bootstrap-select.min.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/BackboneData.js"></script>
         <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/bootbox.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Library/pace.js"></script>
        
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyUtils/soyutils.js"></script>
 		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyViewJs/globalnavbar-view.js"></script>
 		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyViewJs/welcomesection-view.js"></script>
 		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyViewJs/orderdetail-view.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyViewJs/navbtn-view.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyViewJs/componentdetail-view.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyViewJs/admindetail-view.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyViewJs/orderlist-view.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/SOY/SoyViewJs/componentlist-view.js"></script>

		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/Model/Model.js"></script>
         
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/View/GlobalNavBar-RenderView.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/Collections/CreateOrderCollections.js"></script>
		
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/View/Welcome-RenderView.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/View/NavBtnSection-RenderView.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/View/OrderDetail-RenderView.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/View/ComponentDetailView-RenderView.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/View/AdminDetailView-RenderView.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/View/OrderList-RenderView.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Backbone/View/ComponentList-RenderView.js"></script>
		<script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Loader/initializer.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Actions/clicksandblur-events.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Actions/AdminPage-Actions.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Actions/actions.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Actions/Attachment.js"></script>
        <script src="<%=WebServiceURLUtil.getGOOGLESTORAGEDOMAINPATH()%>/JS/Routers/router.js?yufyufyufufyu"></script>

        <script>
			$('#userlabel').html("Welcome "+useremailid);
        </script>
</body>

</html>
