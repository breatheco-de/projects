<?php

session_start();

if($_SESSION['logged_in'] != true) 
{
    header('Location: login.php');
    die();
}

?>

<h1>If you can see this, you are are logged in</h1>
<a href="logout.php">Logout</a>