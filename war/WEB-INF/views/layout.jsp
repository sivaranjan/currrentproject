<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

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
		<link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/dataTables.bootstrap.min.css">
		<link rel="stylesheet" href="https://cdn.datatables.net/responsive/2.1.0/css/responsive.bootstrap.min.css">
		<link rel="stylesheet" href="https://cdn.datatables.net/buttons/1.2.2/css/buttons.dataTables.min.css">
		<link rel="stylesheet" href="http://storage.googleapis.com/valeo-design/css/datepicker3.css">
		<link rel="stylesheet" href="../css/bootstrap-select.min.css">
		<link rel="stylesheet" href="../css/valeo-graphics.css">
		<link rel="stylesheet" href="../css/app.css">
	</head>

<body>
	<div class="status-voicebox hide">
		<div class="voicebox-content fade in">
			<span class="loading"></span>
			<span>loading...</span>
		</div>
	</div>
    <header class="header">
            
            <div class="col-md-2 col-sm-2 col-xs-12">
                <a href="/"><img src="../statics/images/logo-valeo.png"></a>
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
				        <button id='lang' type="button" class="btn btn-link dropdown-toggle language-dropdown" data-toggle="dropdown" aria-expanded="false" value="en_US">
				        <img src="../statics/images/en.png"> EN <span class="caret"></span>
				        </button>
				        <ul class="dropdown-menu language" role="menu">
				          <li class="languageli" data-language="EN"><a href="#"><img src="../statics/images/en.png"> EN</a></li>
				          <li class="divider"></li>
				          <li class="languageli" data-language="FR"><a href="#"><img src="../statics/images/fr.png"> FR</a></li>
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
        
        <section class="container" id="welcome-section">
        	
        </section>

		<section class="container hide" id="navfixed-wrapper">
			<div id="navbar-2">
			
			</div>
		</section>
        <!-- =========================== Create Order container ==================================================== -->
        <section class="container hide"  id="createorder-section">
			
            
            <div class="col-md-12">
            	
                <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                	<div class="panel panel-default" id="orderdetailview">
						<!--  orderdetail-view.soy will be rendereed -->
					</div>
                </div>
            </div>
        </section>
		<section class="container hide"  id="admin-section">
			
			
		</section>
		<section class="container hide" id="component-section">
			
		</section>
		<section class="container hide" id="orderlist-section">
			<div class="col-md-12">
				<div class="panel-group" role="tablist">
                	<div class="panel panel-default">
						<div class="panel-heading" role="tab">
					      <h4 class="panel-title">
					        Order List
					      </h4>
					    </div>
					    <div class="panel-collapse collapse in" role="tabpanel">
					      <div class="panel-body">
						      <table class="table table-hover responsive nowrap" id="orderlist-table">
								<thead>
									<tr>
										<th><input type="checkbox"></th>
										<th>Site</th>
										<th>Number</th>
										<th>Status</th>
										<th>Branch Code</th>
										<th>N<sup>&#8728;</sup> Customer order</th>
										<th>Project Manager</th>
										<th>Proto Type</th>
										<th>type</th>
										<th>Cde Ouverte</th>
										<th>Added By</th>
										<th>Added On</th>
										<th>CommandeID</th>
										<th>&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td><input type="checkbox"></td>
										<td>La Suze</td>
										<td>LAS0000220-P0V</td>
										<td>EN COURS</td>
										<td>BMW</td>
										<td></td>
										<td>teste.valeo005@app-test.valeo.com</td>
										<td>p1</td>
										<td>vendu</td>
										<td><input type="checkbox"></td>
										<td>18/08/2016</td>
										<td>sivaranjan.venkatachalam@test.com</td>
										<td>CMD0000220</td>
										<td>&nbsp;</td>
									</tr>
									<tr>
										<td><input type="checkbox"></td>
										<td>La Suze</td>
										<td>LAS0000221-P0V</td>
										<td>EN COURS</td>
										<td>Valeo</td>
										<td>Test affctation CA / CdP</td>
										<td>teste.valeo005@app-test.valeo.com</td>
										<td>p0</td>
										<td>vendu</td>
										<td><input type="checkbox"></td>
										<td>19/08/2016</td>
										<td>sivaranjan.venkatachalam@test.com</td>
										<td>CMD0000221</td>
										<td>&nbsp;</td>
									</tr>
								</tbody>
							  </table>
							</div>
					    </div>
					</div>
				</div>
			</div>
		</section>
        <!-- Footer -->
        <footer>
		    <div class="col-md-12 col-xs-12 logo">
		        <div class="col-md-2 col-xs-4 text-center">
		            <img src="../statics/images/logo-valeo-2.png" alt="Valeo">
		            <span>&#x40;</span>
		        </div>
		    </div>
		    <div class="col-md-11 col-md-offset-1 col-xs-11 col-xs-offset-1 footer-text">
		        Valeo is an automotive supplier, partner to all automakers worldwide.
		        As a technology company, Valeo proposes innovative products and systems that contribute
		        to the reduction of CO2 emissions and to the development of intuitive driving.<br> In 2013,
		        the Group generated sales of €12.1 billion euros and invested over 10% of its original
		        equipment sales in research and development. Valeo has 124 production sites, 16 Research centers,
		        35 Development centers and 12 distribution platforms, and employs 74,800 people in 29 countries
		        throughout the world. 
		    </div>
		</footer>

		<!-- Admin setting Modal -->
		<div class="modal fade" id="adminModal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Add User</h4>
		      </div>
		      <div class="modal-body">
		      	<form role="form">
		      		<div class="form-group">
		      			<label>User ID</label>
		      			<input type="text" class="form-control" placeholder="firstname.lastname@valeo.com">
		      		</div>
		      		<div class="form-group">
					    <label>Actor</label>
					    <select class="form-control">
					        <option>Requester</option>
					        <option>CAD Team Member</option>
					        <option>Manager R&D</option>
					        <option>Process Team Member</option>
					        <option>Proto Worshop</option>
					        <option>Project Manager</option>
					        <option>Management Controller</option>
					        <option>Quality Team Member</option>
					        <option>KAM</option>
					        <option>Sales Administrator</option>
					        <option>Invoice LE controller</option>
					        <option>Business Owner</option>
					    </select>
					</div>
		      		<div class="form-group">
		      			<label>User Access</label>
		      			<div>
		      				<label class="radio-inline"><input type="radio" name="optradio" style="margin-top: 1px;">User</label>
							<label class="radio-inline"><input type="radio" name="optradio" style="margin-top: 1px;">Actor</label>
							<label class="radio-inline"><input type="radio" name="optradio" style="margin-top: 1px;">Admin</label>
		      			</div>
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
		
		<!-- Planning Customer Devlivery Modal -->
		<div class="modal fade" id="plancustdevlivery-modal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Add New</h4>
		      </div>
		      <div class="modal-body">
		      	<form role="form">
		      		<div class="form-group">
						    <label for="name">Quantity</label>
						    <input type="text" class="form-control" placeholder="Quantity">
						</div>
						<div class="form-group">
						    <label for="name">Date</label>
						    <div class="input-group date">
							    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							</div>
						</div>
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
		
		
		<!-- Order Attachment Modal -->
		<div class="modal fade" id="orderattach-modal" tabindex="-1" role="dialog">
		  <div class="modal-dialog" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
		        <h4 class="modal-title">Add Attach</h4>
		      </div>
		      <div class="modal-body">
		      	<form role="form">
		      		<div class="form-group">
						    <label for="name">Quantity</label>
						    <input type="text" class="form-control" placeholder="Quantity">
						</div>
						<div class="form-group">
						    <label for="name">Date</label>
						    <div class="input-group date">
							    <input type="text" class="form-control"><span class="input-group-addon"><i class="glyphicon glyphicon-calendar"></i></span>
							</div>
						</div>
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

		<!-- JavaScript -->
		<script src="../js/Actions/language.js"></script>
        <script src="../js/Library/jquery-3.1.0.min.js"></script>
        <script src="../js/Library/underscore.js"></script>
        <script src="../js/Library/backbone-min.js"></script>
		<script src="../js/Library/validate.js"></script>		
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/1.10.12/js/dataTables.bootstrap.min.js"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/responsive/2.1.0/js/dataTables.responsive.min.js"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/responsive/2.1.0/js/responsive.bootstrap.min.js"></script>
		<script type="text/javascript" src="https://cdn.datatables.net/buttons/1.2.2/js/dataTables.buttons.min.js"></script> 
		<script type="text/javascript" src="http://storage.googleapis.com/valeo-design/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="http://storage.googleapis.com/valeo-design/js/bootstrap-datepicker.js"></script>
		<script type="text/javascript" src="http://storage.googleapis.com/valeo-design/js/valeo-graphics.js"></script>
		<script type="text/javascript" src="../js/Library/bootstrap-select.min.js"></script>
        <script src="../js/Library/BackboneData.js"></script>
        <script src="../Soy/SoyUtils/soyutils.js"></script>

 		 <script src="../Soy/SoyViewJs/globalnavbar-view.js"></script>
 		 <script src="../Soy/SoyViewJs/welcomesection-view.js"></script>
 		  <script src="../Soy/SoyViewJs/orderdetail-view.js"></script>
          <script src="../Soy/SoyViewJs/navbtn-view.js"></script>
         <script src="../Soy/SoyViewJs/componentdetail-view.js"></script>
          <script src="../Soy/SoyViewJs/admindetail-view.js"></script>

 		 <script src="../js/Backbone/Model/test-Model.js"></script>

         <script src="../js/Backbone/Model/ActorsList-Model.js"></script>
         <script src="../js/Backbone/Model/SitesList_Model.js"></script>
         <script src="../js/Backbone/Model/CustomersList_Model.js"></script>
         <script src="../js/Backbone/Model/Incoterms-Model.js"></script>
         <script src="../js/Backbone/Model/Places-Model.js"></script>
         <script src="../js/Backbone/Model/Plateform-Model.js"></script>
         
		//<script src="../js/Backbone/Model/CreateOrder-Model.js"></script>
		<script src="../js/Backbone/Model/OrderDetails-Model.js"></script>
		<script src="../js/Backbone/View/GlobalNavBar-RenderView.js"></script>
		
		<script src="../js/Backbone/View/Welcome-RenderView.js"></script>
		<script src="../js/Backbone/View/NavBtnSection-RenderView.js"></script>
		<script src="../js/Backbone/View/OrderDetail-RenderView.js"></script>
		<script src="../js/Backbone/View/ComponentDetailView-RenderView.js"></script>
		<script src="../js/Backbone/View/AdminDetailView-RenderView.js"></script>
		<script src="../js/Loader/initializer.js"></script>
        <script src="../js/Routers/router.js"></script>
        <script src="../js/Actions/actions.js"></script>
        
</body>

</html>
