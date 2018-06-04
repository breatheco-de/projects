<!DOCTYPE html>
<html>
<head>
	<title>Without MVC</title>
	<link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
	
	<script type="text/javascript" src="list.js?236"></script>
</head>
<body>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="../">
	        <img class="img-responsive" alt="Brand" src="../assets/img/breathe-code-logo-white.png">
	      </a>
	    </div>
		<ul class="nav navbar-nav">
	        <li class="active"><a href="#">List Users <span class="sr-only">(current)</span></a></li>
	    </ul>
	  </div>
	</nav>
	<div class="container-fluid">
		<h1>Users</h1>
		<a class="btn btn-default create-action" href="create.php">
			Create
        </a>
		<table class="table table-striped">
			<thead> 
				<tr> 
					<th>#</th> 
					<th>Full Name</th> 
					<th>Email</th> 
					<th>Role</th> 
					<th>Options</th> 
				</tr> 
			</thead>
			<tbody> 
				<!-- Ajax Generated List -->
			</tbody>
		</table>
	</div>
</body>
</html>