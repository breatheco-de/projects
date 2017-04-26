<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
$user = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
	if(!isset($_POST["id"]) or !isset($_POST["email"]) or !isset($_POST["role"]) or !isset($_POST["firstname"]) or !isset($_POST["lastname"]))
		die('missing arguments from the form');
	
	$link = mysqli_connect("localhost", "nachovz", "", "c9");
	if (!$link) {
	    echo "Error: Unable to connect to MySQL." . PHP_EOL;
	    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
	    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
	    exit;
	}
	$query = "UPDATE users SET email = '".$_POST["email"]."', role = '".$_POST["role"]."', full_name = '".$_POST["firstname"]." ".$_POST["lastname"]."' WHERE id = ".$_POST["id"];
	$result = mysqli_query($link,$query);
	if($result) header("Location: list.php");
	else die("Error: ".mysqli_error($link)."\n ".$query);
}
else if($_SERVER['REQUEST_METHOD'] === 'GET')
{
	if(!isset($_GET["id"])) die("You have to specify the user id");

	$link = mysqli_connect("localhost", "nachovz", "", "c9");
	if (!$link) {
	    echo "Error: Unable to connect to MySQL." . PHP_EOL;
	    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
	    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
	    exit;
	}

	$result = mysqli_query($link,"SELECT * FROM users WHERE id = ".$_GET["id"]);
	if(!$result or mysqli_num_rows($result)==0) die("User not found");

	$user = mysqli_fetch_array($result);
	$nameSplit = explode(" ",$user["full_name"]);
	$user["name"] = $nameSplit[0];
	if(isset($nameSplit[1])) $user["lastname"] = $nameSplit[1];
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>Update User</title>
	<link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="../assets/css/styles.css">
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
		<form action="#" method="post" action="update.php">
			<fieldset>
				<legend>Full Name</legend>
				<label for="firstname">First:</label>
				<input type="Text" name="firstname" value="<?php echo $user["name"]; ?>" placeholder="Your Name">
				<label for="lastname">Last:</label>
				<input type="Text" name="lastname" value="<?php echo (isset($user["lastname"])) ? $user["lastname"] : ''; ?>" placeholder="Your Last Name">
			</fieldset>
			<fieldset>
				<legend>Email</legend>
				<label for="lastname">Email:</label>
				<input type="Text" name="email" value="<?php echo $user["email"]; ?>" placeholder="username@domain.com">
			</fieldset>
			<fieldset>
				<legend>Role</legend>
				<label for="gender">Admin:</label>
				<input type="radio" name="role" value="admin" <?php if($user["role"]=='admin') echo 'checked="checked"'; ?>>
				<label for="gender">Subscriber:</label>
				<input type="radio" name="role" value="subscriber" <?php if($user["role"]=='subscriber') echo 'checked="checked"'; ?>>
			</fieldset>
			<input type="hidden" name="id" value="<?php echo $user["id"]; ?>">
			<input type='submit' value='SUBSCRIBE' />
		</form>
	</div>
</body>
</html>