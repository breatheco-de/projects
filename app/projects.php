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
			if(count(glob($path."/*.html"))===0 and count(glob($path."/*.php"))===0)
			{
				if(is_dir($newPath)) $pjcs = createDirectory($newPath,$pjcs);
			}
			else
			{
				$projectName = basename($path);
				array_push($pjcs, getInfo($urlparts, $path));
				break;
			}
		}
		//else echo "No es directorio".$newPath."\n";
	}
	return $pjcs;
}

function getInfo($parts, $path){
	$maxDepth = 5;
	while(!isset($parts[$maxDepth]) and $maxDepth>2) $maxDepth--;

	$prj = array();
	if(file_exists($path.'/info.json') and $json = file_get_contents($path.'/info.json'))
	{
		$prjObj = json_decode($json);
		$prj = (array) $prjObj;
	}
	else
	{
		$prj["title"] = "[Undefined title]";
		$prj["description"] = "description not found because there was no info.json";
		$prj["name"] = $parts[$maxDepth];
	}

	$prj["url"] = $path;
	$prj["technology"] = $parts[$maxDepth-3];
	$prj["difficulty"] = $parts[$maxDepth-2];
	$prj["category"] = $parts[$maxDepth-1];
	$prj["folder-name"] = $parts[$maxDepth];
	return $prj;
}

header("Content-type: application/json");
echo json_encode($projects);