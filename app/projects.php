<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$projects = array();
$projects = createDirectory('../p/', $projects);

function createDirectory($path,$pjcs){
	$directories = scandir($path);
	$urlparts = explode("/", $path);
	foreach ($directories as $value) {
		$newPath = $path.$value.'/';
		//echo "Recorriendo: $newPath \n";
		if($value!='.' and $value!='..' and is_dir($path)) 
		{
			$laspath = basename($path);
			//echo "entro...$laspath... \n";
			//if(isset($urlparts[5])) echo $urlparts[5]."\n";
			if(count(glob($path."/*.html"))===0 and count(glob($path."/*.php"))===0 and count(glob($path."/*.md"))===0)
			{
				if(is_dir($newPath)) $pjcs = createDirectory($newPath,$pjcs);
			}
			else
			{
				$projectName = basename($path);
				array_push($pjcs, generateJSON($urlparts, $path));
				break;
			}
		}
		//else echo "No es directorio".$newPath."\n";
	}
	return $pjcs;
}

function generateJSON($parts, $path){
	$maxDepth = 5;
	while(!isset($parts[$maxDepth]) and $maxDepth>2) $maxDepth--;

	$prj = array();

	//generating classroom.json path (if any)
	$prj = fillProjectClassFilePath($prj, $path);

	//generating video.json path (if any)
	$prj = fillVideoFilePath($prj, $path);

	//generating readme path (if any)
	$prj = fillReadmeFilePath($prj, $path);
	
	//generating source path (if any), it can be a zip or tar.gz
	$prj = fillSourceFilePath($prj, $path);

	//generating info.json path (if any)
	$prj = fillProjectInfoFilePath($prj, $path);

	if(!empty($prj["info-path"])) $prj["name"] = $parts[$maxDepth];
	
	if(array_key_exists("live-url",$prj)) $prj["url"] = $prj["live-url"];
	else $prj["url"] = $path;
	
	$prj["technology"] = $parts[$maxDepth-3];
	$prj["difficulty"] = $parts[$maxDepth-2];
	$prj["category"] = $parts[$maxDepth-1];
	$prj["folder-name"] = $parts[$maxDepth];

	return $prj;
}

function fillProjectClassFilePath($prj, $path){
	//verify that the classroom data exists
	if(file_exists($path.'class-steps/classroom.json') and $json = file_get_contents($path.'class-steps/classroom.json'))
	{
		$prj["classroom"] = $path.'class-steps/classroom.json';
	}
	else if(file_exists($path.'classroom.json') and $json = file_get_contents($path.'classroom.json'))
	{
		$prj["classroom"] = $path.'classroom.json';
	}

	return $prj;
}

function fillProjectInfoFilePath($prj,$path){
	
	if(file_exists($path.'info.json') and $json = file_get_contents($path.'info.json'))
	{
		$prjObj = json_decode($json);
		if(is_object($prjObj))
		{
			foreach($prjObj as $key => $val) $prj[$key] = $val;
			$prj["info-path"] = $path.'info.json';
		}
		else{
			echo json_encode(array(
				"code" => 500,
				"msg" => "Invalid info-path or info.json for ".$path
			)); die();
		}
	}
	else
	{
		$prj["title"] = "[Undefined title]";
		$prj["description"] = "description not found because there was no info.json";
	}

	return $prj;
}

function fillVideoFilePath($prj,$path){
	
	if(file_exists($path.'video.json') and $json = file_get_contents($path.'video.json'))
	{
		$prjObj = json_decode($json);
		foreach($prjObj as $key => $val) $prj[$key] = $val;
		$prj["video-path"] = $path.'video.json';
	}

	return $prj;
}

function fillReadmeFilePath($prj,$path){
	
	if(file_exists($path.'README.md')) $prj["readme"] = str_replace('../','',$path.'README.md');

	return $prj;
}

function fillSourceFilePath($prj,$path){
	
	if(file_exists($path.'src.zip')) $prj["source-code"] = str_replace('../','',$path.'src.zip');
	else if(file_exists($path.'src.tar.gz')) $prj["source-code"] = str_replace('../','',$path.'src.tar.gz');

	return $prj;
}

function getProject($projects,$slug){
	if(empty($slug)) return null;

	foreach ($projects as $p) {
		if(isset($p['slug']) and $p['slug']==$slug) return $p;
	}

	return null;
}

header("Content-type: application/json");
if(!empty($_REQUEST['slug']))
{
	$project = getProject($projects,$_REQUEST['slug']);
	if($project) echo json_encode($project);
	else echo json_encode(array());
}
else echo json_encode($projects);