<?php

class ProjectsJSON{

	private $projects = [];

	public function __construct($rootPath)
	{
		//removing the "class-steps/" part from the directory
		return $this->createHierarchy($rootPath);
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
					array_push($this->projects, $this->generateProjectJSON($urlparts, $path));
					break;
				}
			}
		}
	}
	
	function generateProjectJSON($parts, $path){
		$maxDepth = 5;
		while(!isset($parts[$maxDepth]) and $maxDepth>2) $maxDepth--;
	
		$prj = array();
		
		//generating classroom.json path (if any)
		$prj = $this->fillProjectClassFilePath($prj, $path);
	
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
		
		if(array_key_exists("live-url",$prj)) $prj["url"] = $prj["live-url"];
		else $prj["url"] = $path;
		
		if(array_key_exists("status",$prj)) $prj["status"] = $prj["status"];
		else $prj["status"] = "draft";
		
		$prj["technology"] = $parts[$maxDepth-3];
		$prj["difficulty"] = $parts[$maxDepth-2];
		$prj["category"] = $parts[$maxDepth-1];
		$prj["folder-name"] = $parts[$maxDepth];
	
		return $prj;
	}
	
	function getProject($slug){
		if(empty($slug)) return null;
	
		foreach ($this->projects as $p) {
			if(isset($p['slug']) and $p['slug']==$slug) return $p;
		}
	
		return null;
	}
	
	function getAllProjects(){
		return $this->projects;
	}

	function fillProjectClassFilePath($prj, $path){
		//verify that the classroom data exists
		if(file_exists($path.'class-steps/classroom.json') and $json = file_get_contents($path.'class-steps/classroom.json'))
			$prj["classroom"] = $path.'class-steps/classroom.json';
		else if(file_exists($path.'classroom.json') and $json = file_get_contents($path.'classroom.json'))
			$prj["classroom"] = $path.'classroom.json';
	
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
			$prj["video-path"] = $path.'video.json';
		}
	
		return $prj;
	}
	
	function fillReadmeFilePath($prj,$path){
		
		if(file_exists($path.'README.md')) $prj["readme"] = str_replace('../','',$path.'README.md');
	
		return $prj;
	}
	
	function fillPreviewFilePath($prj,$path){
		if(file_exists($path.'preview.gif')) $prj["preview"] = str_replace('../','',$path.'preview.gif');
		else if(file_exists($path.'preview.png')) $prj["preview"] = str_replace('../','',$path.'preview.png');
		else if(file_exists($path.'preview.jpeg')) $prj["preview"] = str_replace('../','',$path.'preview.jpeg');
		return $prj;
	}
	
	function fillSourceFilePath($prj,$path){
		
		if(file_exists($path.'src.zip')) $prj["source-code"] = str_replace('../','',$path.'src.zip');
		else if(file_exists($path.'src.tar.gz')) $prj["source-code"] = str_replace('../','',$path.'src.tar.gz');
	
		return $prj;
	}
}