<?php

$currentDir = dirname(__FILE__) ;
print($currentDir);
// require_once($currentDir + '../vendor/autoload.php');
// require_once($currentDir + '../classes/autoload.php');

// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

// $json = new ProjectsJSON('../p/');
// $projects = json_encode($json->getAllProjects());

// $myfile = fopen("/projects_big.json", "w+") or die("Unable to open file!");
// fwrite($myfile, $projects);
// fclose($myfile);