<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Content-type: application/json");

function getProjects($slug=null){
    $dir = dirname(__FILE__);
    $size = !empty($_GET['size']) ? "_".$_GET['size'] : '';
    $myfile = file_get_contents($dir."/projects".$size.".json") or die("Unable to open file!");
    if(!$slug) return json_decode($myfile);
    else{
        $projects = json_decode($myfile);
        forEach($projects as $p)
            if($p->slug === $slug) return $p;

        return null;
    }
}
if(!empty($_REQUEST['slug']))
{
	$project = getProjects($_REQUEST['slug']);
	if($project){
		if(isset($_REQUEST['preview']) || isset($_REQUEST['preview/'])){
			$filePath = $project->preview;
			$file_ext = pathinfo($filePath, PATHINFO_EXTENSION);
			if(file_exists($filePath)){
				header("Content-type: image/".$file_ext);
				header('Content-Length: ' . filesize($filePath));
				readfile($filePath);
				die();
			}
			else{
				header("HTTP/1.0 404 Not Found");
				echo json_encode(['msg' => 'preview not found in '.$_REQUEST['slug'].'/preview.'.$file_ext]);
			}
        }
		else if(isset($_REQUEST['readme']) || isset($_REQUEST['readme/'])){
            echo $project->markdown;
            die();
		}
		else echo json_encode($project);
	}
	else{
		header("HTTP/1.0 404 Not Found");
		echo json_encode(array());
	}
}
else{
    echo json_encode(getProjects());
}