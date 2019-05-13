<?php

require_once('./vendor/autoload.php');
require_once('./classes/autoload.php');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$json = new ProjectsJSON('../p/');

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");
if(!empty($_REQUEST['slug']))
{
	$project = $json->getProject($_REQUEST['slug']);
	if($project){
		if(isset($_REQUEST['preview']) || isset($_REQUEST['preview/'])){
			$filePath = '../'.$project['preview'];
			$file_ext = pathinfo($filePath, PATHINFO_EXTENSION);
			if(file_exists($filePath)){
				header("Content-type: image/".$file_ext);
				header('Content-Length: ' . filesize($filePath));
				readfile($filePath);
				die();
			}
			else{
				header("HTTP/1.0 404 Not Found");
				echo json_encode(['msg' => 'preview not found']);
			}
		}
		else echo json_encode($project);
	}
	else{
		header("HTTP/1.0 404 Not Found");
		echo json_encode(array());
	}
}
else if(!empty($_GET['size'])) echo json_encode($json->getAllProjects($_GET['size']));
else echo json_encode($json->getAllProjects());