<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (isset($_GET["id"]) and $_GET["id"]!='0')
{
	$link = mysqli_connect("localhost", "nachovz", "", "c9");
	if (!$link) {
	    echo "Error: Unable to connect to MySQL." . PHP_EOL;
	    echo "Debugging errno: " . mysqli_connect_errno() . PHP_EOL;
	    echo "Debugging error: " . mysqli_connect_error() . PHP_EOL;
	    exit;
	}

	$result = mysqli_query($link,"delete from users where id = ".$_GET["id"]);
	if($result){
		//header("Location: list.php");
		echo "true";
		return void;
	}else die("Error: ".mysqli_error($link));
}
else die('missing arguments from the form');
?>