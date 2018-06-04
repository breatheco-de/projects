<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if ($_SERVER['REQUEST_METHOD'] === 'POST')
{
	if(!isset($_POST["email"]) or !isset($_POST["password"]) or !isset($_POST["role"]) or !isset($_POST["firstname"]) or !isset($_POST["lastname"]))
		die('missing arguments from the form');
	
	$link = mysqli_connect("localhost", "nachovz", "", "c9");
	if (!$link) {
	    echo "Error: Unable to connect to MySQL." . PHP_EOL;
	    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
	    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
	    exit;
	}

	$result = mysqli_query($link,"insert into users (email,password,role,full_name) values ('".$_POST["email"]."','".$_POST["password"]."','".$_POST["role"]."','".$_POST["firstname"]." ".$_POST["lastname"]."')");
	if($result){
		//header("Location: list.php");
		echo "true";
		return;
	}else die("Error: ".mysqli_error($link));
}

?>
