<!DOCTYPE html>
<html>
<head>
	<title>Create User</title>
	<link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/styles.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	
	<script type="text/javascript" src="create.js"></script>
</head>
<body>
	<nav class="navbar navbar-default">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="#">
	        <img class="img-responsive" alt="Brand" src="../assets/img/breathe-code-logo-white.png">
	      </a>
	    </div>
		<ul class="nav navbar-nav">
	        <li class="active"><a href="list.php">List Users <span class="sr-only">(current)</span></a></li>
	    </ul>
	  </div>
	</nav>
	<div class="container-fluid">
		<h1>Create User</h1>
		<form id="create-form" method="post" action="create-backend.php">
			<fieldset>
				<legend>Full Name</legend>
				<label for="firstname">First:</label>
				<input type="Text" name="firstname" placeholder="Your Name">
				<label for="lastname">Last:</label>
				<input type="Text" name="lastname" placeholder="Your Last Name">
			</fieldset>
			<fieldset>
				<legend>Email</legend>
				<label for="lastname">Email:</label>
				<input type="Text" name="email" placeholder="username@domain.com">
			</fieldset>
			<fieldset>
				<legend>Password</legend>
				<label for="lastname">Password:</label>
				<input type="password" name="password">
			</fieldset>
			<fieldset>
				<legend>Role</legend>
				<label for="gender">Admin:</label>
				<input type="radio" name="role" value="admin">
				<label for="gender">Subscriber:</label>
				<input type="radio" name="role" value="subscriber">
			</fieldset>
			<input type='submit' value='SUBSCRIBE' />
		</form>
	</div>
</body>
</html>