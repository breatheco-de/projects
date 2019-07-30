<?php

class ProjectsJSON{

	private $projects = [];

	public function __construct($rootPath)
	{
		//removing the "class-steps/" part from the directory
		return $this->createHierarchy($rootPath);
	}

    function getRelative($path){
        return substr($path, strpos($path, "/json/")+6);
    }

	function createHierarchy($path){

		$directories = scandir($path);
		$urlparts = explode("/", $path);
		foreach ($directories as $value) {
			$newPath = $path.$value.'/';
			//echo "Recorriendo: $newPath \n";
			if($value!='.' and $value!='..' and is_dir($path))
			{
				$laspath = basename($path);
				if(count(glob($path."/*.html"))===0 and count(glob($path."/*.php"))===0 and count(glob($path."/*.md"))===0)
				{
					if(is_dir($newPath)) $this->createHierarchy($newPath,$this->projects);
				}
				else
				{
					$projectName = basename($path);
					//print_r($this->generateProjectJSON($urlparts, $path)); die();
					$project = $this->generateProjectJSON($urlparts, $path);
					if($project) array_push($this->projects, $project);
					break;
				}
			}
		}
	}

	function generateProjectJSON($parts, $path){
		$maxDepth = 5;
		while(!isset($parts[$maxDepth]) and $maxDepth>2) $maxDepth--;

		$prj = array();

		//generating video.json path (if any)
		$prj = $this->fillVideoFilePath($prj, $path);

		//generating readme path (if any)
		$prj = $this->fillReadmeFilePath($prj, $path);

		//generating preview path (if any)
		$prj = $this->fillPreviewFilePath($prj, $path);

		//generating source path (if any), it can be a zip or tar.gz
		$prj = $this->fillSourceFilePath($prj, $path);

		//generating info.json path (if any)
		$prj = $this->fillProjectInfoFilePath($prj, $path);

		if(!empty($prj["info-path"])) $prj["name"] = $parts[$maxDepth];

		//if(!array_key_exists("slug",$prj)) return false;

		if(array_key_exists("live-url",$prj)) $prj["demo"] = $prj["live-url"];
		else if(array_key_exists("demo",$prj)) $prj["demo"] = $prj["demo"];
		$prj["url"] = $this->getRelative($path);

		if(array_key_exists("status",$prj)) $prj["status"] = $prj["status"];
		else $prj["status"] = "draft";

        $pIndex = array_search("p", $parts);
        //print_r($parts); die();
		$prj["technology"] = $parts[$pIndex+1];
		$prj["difficulty"] = !empty($parts[$pIndex+3]) ? $parts[$pIndex+2] : null;
		$prj["category"] = $parts[$pIndex+1];
		$prj["folder-name"] = !empty($parts[$pIndex+3]) ? $parts[$pIndex+3] : $parts[$pIndex+2];

		return $prj;
	}

	function getProject($slug){
		if(empty($slug)) return null;

		foreach ($this->projects as $p) {
			if(isset($p['slug']) and $p['slug']==$slug) return $p;
		}

		return null;
	}

	function getAllProjects($size='small'){
        $projects = [];
        if($size == 'small') foreach($this->projects as $p){
            $p = (array) $p;
            unset($p["markdown"]);
            $projects[] = $p;
        }
        else $projects = $this->projects;

		return $projects;
	}

	function fillProjectInfoFilePath($prj,$path){

        $relativePath = $this->getRelative($path);
		if(file_exists($path.'info.json') and $json = file_get_contents($path.'info.json'))
		{
			$prjObj = json_decode($json);
			if(is_object($prjObj))
			{
				foreach($prjObj as $key => $val) $prj[$key] = $val;
				$prj["info-path"] = $relativePath.'info.json';
			}
			else{
				echo json_encode(array(
					"code" => 500,
					"msg" => "Invalid info-path or info.json for ".$relativePath
				)); die();
			}
		}
		else
		{
			throw new Exception("No info.json was found on: ".$path);
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

            $relativePath = $this->getRelative($path);
			$prj["video-path"] = $relativePath.'video.json';
		}

		return $prj;
	}

	function fillReadmeFilePath($prj,$path){

		if(file_exists($path.'README.md')){
            $relativePath = $this->getRelative($path);
            $prj["readme"] = $relativePath;
            $prj["markdown"] = file_get_contents($path.'README.md');
        }

		return $prj;
	}

	function fillPreviewFilePath($prj,$path){
        $relativePath = $this->getRelative($path);

		if(file_exists($path.'preview.gif')) $prj["preview"] = $relativePath.'/preview.gif';
		else if(file_exists($path.'preview.png')) $prj["preview"] = $relativePath.'/preview.png';
		else if(file_exists($path.'preview.jpeg')) $prj["preview"] = $relativePath.'/preview.jpeg';

		return $prj;
	}

	function fillSourceFilePath($prj,$path){
        $relativePath = $this->getRelative($path);

		if(file_exists($path.'src.zip')) $prj["source-code"] =  $relativePath.'src.zip';
		else if(file_exists($path.'src.tar.gz')) $prj["source-code"] =  $relativePath.'src.tar.gz';

		return $prj;
	}
}