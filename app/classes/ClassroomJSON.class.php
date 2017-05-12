<?php

class ClassRoomJSON{

	private $keyname = 'classroom.json';

	private $projectBaseDirectory;

	private $gitIgnoreURL;

	private $logManager;

	const CLASS_STEPS_DIRECTORY = "class-steps/";

	public function __construct($projectBaseDirectory)
	{
		//removing the "class-steps/" part from the directory
		$pos = strpos($projectBaseDirectory, self::CLASS_STEPS_DIRECTORY);
		if($pos !== false) $projectBaseDirectory = substr($projectBaseDirectory, 0,$pos);
		else
		{
			$pos = strpos($projectBaseDirectory, $this->keyname);
			if($pos !== false) $projectBaseDirectory = substr($projectBaseDirectory, 0,$pos);
			else throw new Exception($this->keyname." not found", 1);
		}

		$this->projectBaseDirectory = $projectBaseDirectory;
		$this->gitIgnoreURL = $this->projectBaseDirectory.'.gitignore';
		$this->logManager = new ASLogin();
	}

	public function save($string)
	{
		return $this->put($string);
	}

	public function getLogs(){
		return $this->logManager->getLogs();
	}
	
	public function getOriginalContent()
	{
		$oldContent = file_get_contents($this->projectBaseDirectory.$this->keyname);
		if(!$oldContent) throw new Exception("Imposible to read ".$keyname, 1);
		if(!json_decode($oldContent)) throw new Exception("The "+$keyname+" has invalid syntax (imposible to parse).", 1);
	}

	private function put($content)
	{
		if(!$this->addToGitignore())
		{
		    $this->logManager->add('Failed to update gitignore...');
			return false;
		}
			

		if(!is_dir($this->projectBaseDirectory.self::CLASS_STEPS_DIRECTORY))
		{
			if(is_writable($this->projectBaseDirectory))
			{
				if (!mkdir($this->projectBaseDirectory.self::CLASS_STEPS_DIRECTORY, 0777, true))
				{
					$this->logManager->add('Failed to create folders...');
				    return false;
				}
			}else{
				$this->logManager->add('The directory '.$this->projectBaseDirectory.' is not writable, failed creating steps directory.');
				return false;
			} 
		}

		$newDir = $this->projectBaseDirectory.self::CLASS_STEPS_DIRECTORY.$this->keyname;
		if(file_put_contents($newDir, $content))
			return $newDir;
	}

	private function addToGitignore()
	{
		if(file_exists($this->gitIgnoreURL) and strpos(file_get_contents($this->gitIgnoreURL),self::CLASS_STEPS_DIRECTORY) !== false) return true;

		$success = false;
		// Let's make sure the file exists and is writable first.
		if (!file_exists($this->gitIgnoreURL) or is_writable($this->gitIgnoreURL)) {

		    // In our example we're opening $filename in append mode.
		    // The file pointer is at the bottom of the file hence
		    // that's where $somecontent will go when we fwrite() it.
		    if (!$handle = fopen($this->gitIgnoreURL, 'a')) {
		         $this->logManager->add("Cannot open file ($this->gitIgnoreURL)");
		    }

		    // Write $somecontent to our opened file.
		    if (fwrite($handle, self::CLASS_STEPS_DIRECTORY) === FALSE) {
		        $this->logManager->add("Cannot write to file ($this->gitIgnoreURL)");
		    }
		    else $success = true;

		    fclose($handle);

		}else $this->logManager->add(".gitignore not writable");

		return $success;
	}
}