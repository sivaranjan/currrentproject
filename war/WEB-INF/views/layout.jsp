<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ page
	import ="com.google.appengine.api.users.UserServiceFactory"
	import =" com.google.appengine.api.users.User;"		
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
		Welcome to THS France Prototype Database
    </title>
    <!-- CSS -->
    	<link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="http://storage.googleapis.com/valeo-design/css/bootstrap.css">
		<link rel="stylesheet" href="../css/dataTables.bootstrap.min.css">
		<link rel="stylesheet" href="../css/responsive.bootstrap.min.css">
		<link rel="stylesheet" href="../css/buttons.dataTables.min.css">
		<link rel="stylesheet" href="http://storage.googleapis.com/valeo-design/css/datepicker3.css">
		<link rel="stylesheet" href="../css/bootstrap-select.min.css">
		<link rel="stylesheet" href="../css/valeo-graphics.css">
		<link rel="stylesheet" href="../css/app.css">
	</head>

<body>
<div class="modal fade" id="pleasewait" role="dialog"></div>
	<main id="wrap">
	<div class="status-voicebox hide" id="statusLoader" >
		<div class="voicebox-content fade">
			<span class="loading"></span>
			<span id="statusmsg"></span>
		</div>
	</div>
    <header class="header">
            
            <div class="col-md-2 col-sm-2 col-xs-12">
                <a href="/"><img src="../statics/images/Valeo_Logo.svg.png" ></a>
            </div>
            <div class="col-md-6 col-sm-10 col-xs-12">
                <h3 id="headtitle" class="valeo-app-title">THS France Prototype Database</h3>
            </div>
            <div class="col-md-4 col-xs-12">
                
                <div class="col-md-10 hidden-xs hidden-sm">
                    <div class="btn-group pull-right" style="margin-left: 30px;">
                        <span id="userlabel" class="header-text">Welcome </span>
                    </div>
                    <div class="btn-group pull-right">
				        <button id='lang' type="button" class="btn btn-link dropdown-toggle language-dropdown" data-toggle="dropdown" aria-expanded="false" value="EN">
				        <img src="../statics/images/en.png"> EN <span class="caret"></span>
				        </button>
				        <ul class="dropdown-menu language" role="menu">
				          <li class="languageli" data-language="EN"><a style="cursor:pointer"><img src="../statics/images/en.png"> EN</a></li>
				          <li class="divider"></li>
				          <li class="languageli" data-language="FR"><a style="cursor:pointer"><img src="../statics/images/fr.png"> FR</a></li>
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
		            <img src="../statics/images/logo-valeo-2.png" alt="Valeo">
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
		<div class="modal fade" id="attachment-modal" tabindex="-1" role="dialog">
		  				<div class="modal-dialog" role="document">
		    				<div class="modal-content">
		      					<div class="modal-header">
		        					<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        						<h4 class="modal-title" id="attachmenth4">Add Customer Order</h4>
		     					 </div>
		      		<div class="modal-body">
		      			<form role="form">
							<div class="row">
								<div class="col-md-6">
									<h5><b style="color: #97d045;">Attachment Details</b></h5>
										<div class="form-group" style="margin-bottom: 20px;">
											<label for="name">File name</label>
											<input type="text" id="filenameholder" class="form-control input-sm" readonly="">
										</div>
										<div class="form-group hide">
											<label for="name">File path</label>
											<input type="text" id="filepath" class="form-control" readonly="">
										</div>
										<div class="form-group">
											<label for="inputfile">Upload Attachments</label>
											<input class="attachclass" type="file" id="UploadFile" name="UploadFile">
										</div>
										<div class="form-group hide" id="filedownloadarea" style="margin-top: 17px;">
											<label for="name">Download File : </label>
												<a class="ellipsis" href="" id="filedownloadlink" style="text-decoration: initial;">
												</a>
										</div>
										<div class="form-group hide" id="revisioncomment">
											<label for="usr">Revision Comment</label>
											<textarea class="form-control attachclass"  rows="3" id="revision_comment" style="resize: none;"></textarea>
										</div>
								 </div>
								<div class="col-md-6" style="border-left: 1px solid #eee;">
									<h5><b style="color: #97d045;">Additional Details</b></h5>
									<div class="form-group" style="margin-bottom: 20px;">
										<label for="name">Title*</label>
										<input type="text" class="form-control attachclass input-sm" id="file_Title">
									</div>
									<div class="form-group">
										<label for="usr">Description</label>
										<textarea class="form-control attachclass" name="file_Description" rows="3" id="file_Description" style="resize: none;"></textarea>
									</div>
								</div>
								<hr class="col-md-12 hide" id="anothersection" style="box-sizing: border-box;">
									<div class="col-md-6 form-horizontal hide" id="createdbydiv">
										<div class="form-group"> 
											<label class="col-sm-4 control-label">Created By :</label> 
											<div class="col-sm-8"> 
												<p class="form-control-static ellipsis" id="createdby"></p> 
											</div> 
										</div>
										<div class="form-group"> 
											<label class="col-sm-4 control-label">Created on :</label> 
											<div class="col-sm-8"> 
												<p class="form-control-static" id="createdon"></p> 
											</div> 
										</div>
									</div>
								<div class="col-md-6 form-horizontal hide" id="modifiedbydiv">
									<div class="form-group"> 
										<label class="col-sm-5 control-label" style="padding-left: 0;padding-right: 0;">Last Modified by : </label> 
										<div class="col-sm-7"> 
											<p class="form-control-static ellipsis" id="modifiedby"></p> 
										</div> 
									</div>
									<div class="form-group"> 
										<label class="col-sm-5 control-label" style="padding-left: 0;padding-right: 0;">Last Modified on : </label> 
										<div class="col-sm-7"> 
											<p class="form-control-static" id="modifiedon"></p> 
										</div> 
									</div>
								</div>
						</div>
				</form>
		      </div>
		      <div class="modal-footer">
		        <button type="button" id="uploadattachfilebtn" class="btn btn-success">Save changes</button>
		        <button id="updateattachment" type="button" class="btn btn-success hide"><i class="fa fa-floppy-o"></i><span>&nbsp;&nbsp; Update Attachment</span></button>
		        <button type="button" id="cancelattach" class="btn btn-default" data-dismiss="modal">Close</button>
		      </div>
		    </div>
		  </div>
		</div>


		
		<!-- JavaScript -->
		<script src="../js/Loader/language.js"></script>
		<script src="../js/Loader/constants.js"></script>
		<script src="../js/Configurations/Config-1-OrderCreation.js"></script>
		<script src="../js/Configurations/Config-2-ComponentCreation1.js"></script>
			
		<script src="../js/Actions/Operations.js"></script>
		<script src="https://code.jquery.com/jquery-1.11.3.js"></script>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
        
        <script src="../js/Library/underscore.js"></script>
        <script src="../js/Library/backbone-min.js"></script>
		<script src="../js/Library/validate.js"></script>
		<script src="../js/Library/ajaxfileupload.js"></script>
		<script type="text/javascript" src="../js/Library/jquery.dataTables.min.js"></script>
		<script type="text/javascript" src="../js/Library/dataTables.bootstrap.min.js"></script>
		<script type="text/javascript" src="../js/Library/dataTables.responsive.min.js"></script>
		<script type="text/javascript" src="../js/Library/responsive.bootstrap.min.js"></script>
		<script type="text/javascript" src="../js/Library/dataTables.buttons.min.js"></script> 
		<script type="text/javascript" src="http://storage.googleapis.com/valeo-design/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="http://storage.googleapis.com/valeo-design/js/bootstrap-datepicker.js"></script>
		<script type="text/javascript" src="../js/Library/valeo-graphics.js"></script>
		<script type="text/javascript" src="../js/Library/bootstrap-select.min.js"></script>
        <script src="../js/Library/BackboneData.js"></script>
        <script src="../js/Library/bootbox.js"></script>
        <script src="../Soy/SoyUtils/soyutils.js"></script>
    
 		 <script src="../Soy/SoyViewJs/globalnavbar-view.js"></script>
 		 <script src="../Soy/SoyViewJs/welcomesection-view.js"></script>
 		  <script src="../Soy/SoyViewJs/orderdetail-view.js"></script>
          <script src="../Soy/SoyViewJs/navbtn-view.js"></script>
         <script src="../Soy/SoyViewJs/componentdetail-view.js"></script>
          <script src="../Soy/SoyViewJs/admindetail-view.js"></script>
          <script src="../Soy/SoyViewJs/orderlist-view.js"></script>
          <script src="../Soy/SoyViewJs/componentlist-view.js"></script>

		<script src="../js/Backbone/Model/Model.js"></script>
         
		<script src="../js/Backbone/View/GlobalNavBar-RenderView.js"></script>
		<script src="../js/Backbone/Collections/CreateOrderCollections.js"></script>
		
		<script src="../js/Backbone/View/Welcome-RenderView.js"></script>
		<script src="../js/Backbone/View/NavBtnSection-RenderView.js"></script>
		<script src="../js/Backbone/View/OrderDetail-RenderView.js"></script>
		<script src="../js/Backbone/View/ComponentDetailView-RenderView.js"></script>
		<script src="../js/Backbone/View/AdminDetailView-RenderView.js"></script>
		<script src="../js/Backbone/View/OrderList-RenderView.js"></script>
		<script src="../js/Backbone/View/ComponentList-RenderView.js"></script>
		<script src="../js/Loader/initializer.js"></script>
        <script src="../js/Routers/router.js?yufyufyufufyu"></script>
        <script src="../js/Actions/clicksandblur-events.js"></script>
        <script src="../js/Actions/AdminPage-Actions.js"></script>
        <script src="../js/Actions/OrderPage-Actions.js"></script>
         <script src="../js/Actions/attachment1.js"></script>

        <script>
			$('#userlabel').html("Welcome "+useremailid);
        </script>
</body>

</html>
