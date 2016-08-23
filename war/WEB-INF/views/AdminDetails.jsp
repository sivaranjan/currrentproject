<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Admin Settings</title>
<script src="js/jquery-3.1.0.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$("#save").click(function(){
		var username=$("input[name='emailID']").val();
		var  privilegesSelected=$("#privileges :selected").text();
		var actorSelected=$("#Actorlist :selected").text();
		alert(privilegesSelected);
		if((username=="")&&(privilegesSelected=="select privileges...")&&(actorSelected=="select actor..."))
		{
				alert("All the fields are required");
				return false;
			
		}
		if(username=="")
		{
		
			alert("emailId is must");
			return false;
		}
		if(privilegesSelected=="select privileges...")
		{
			alert("select the privileges");
			return false;
		}
		if(actorSelected=="select actor...")
		{
			alert("select actor");
			return false;
		}
		else
		{
			$.ajax({
				type : "POST",
				url  : '/verifydetails',
				data :{emailID:username,privilegeslist:privilegesSelected,actorslist:actorSelected},
				success : function(response){
				if(response=="success")
						{
						alert("saved successfully");
						}
 					else
						{
							alert("failed");
						}
				}
			});
		}
		
	});
	
	
});
</script>
</head>
<body>
<h4>ADD NEW USER</h4>
<form name= "admin" action="Post">
Email ID <input type="email" name="emailID"><br>
Privileges <select id="privileges" name="privilegeslist">
<option value="select">select privileges...</option>
<option value="Reader">Reader</option>
<option value="User">User</option>
<option value="Admin">Admin/Business Owner</option>
</select><br>
Actor <select id="Actorlist" name="actorslist">
<option value="select">select actor...</option>
<option value="Req">Requester / Emetteur</option>
<option value="CAD">CAD Team Member / MEP Etude</option>
<option value="Manager R&D">Manager R&D / Responsible R&D</option>
<option value="Process">Process Team Member / MEP Process</option>
<option value="Proto">Proto Workshop / Atelier proto</option>
<option value="Project">Project Manager / Chef de Project</option>
<option value="Management">Management Controller / Contrôleur de gestion</option>
<option value="Quality">Quality Team Member / MEP Qualité</option>
<option value="KAM">KAM / Commerce FO</option>
<option value="Sales">Sales Administrator / ADV</option>
<option value="Invoiced">Invoiced LE Controller / contrôle de gestion entité facturée</option>
<option value="Business Owner"></option>
<option value=""></option>
</select>
<input type="button" value="Save" id="save">
</form>
</body>
</html>