<?php

class InfoJSON{

	private $keyname = 'info.json';

	private $projectBaseDirectory;

	private $gitIgnoreURL;
	
	const CLASS_STEPS_DIRECTORY = "class-steps/";

	public function __construct($projectBaseDirectory)
	{
		$this->projectBaseDirectory = dirname($projectBaseDirectory).'/';
		$this->gitIgnoreURL = $this->projectBaseDirectory.'.gitignore';
	}

	public function save($string)
	{
		$this->put($string);
	}
	
	public function getOriginalContent()
	{
		$oldContent = file_get_contents($this->projectBaseDirectory.$this->keyname);
		if(!$oldContent) throw new Exception("Imposible to read info.json", 1);
		if(!json_decode($oldContent)) throw new Exception("The info.json has invalid syntax (imposible to parse).", 1);
	}

	private function put($content)
	{
		if(!$this->addToGitignore())
		    die('Failed to update gitignore...');
			

		if(!is_dir(self::CLASS_STEPS_DIRECTORY))
			if (!mkdir(self::CLASS_STEPS_DIRECTORY, 0777, true))
			    die('Failed to create folders...');

		if(file_put_contents($this->projectBaseDirectory.self::CLASS_STEPS_DIRECTORY.$this->keyname, $content))
			return true;
	}

	private function addToGitignore()
	{
		if( strpos(file_get_contents($this->gitIgnoreURL),self::CLASS_STEPS_DIRECTORY) !== false) return true;

		$success = false;
		// Let's make sure the file exists and is writable first.
		if (is_writable($this->gitIgnoreURL)) {

		    // In our example we're opening $filename in append mode.
		    // The file pointer is at the bottom of the file hence
		    // that's where $somecontent will go when we fwrite() it.
		    if (!$handle = fopen($this->gitIgnoreURL, 'a')) {
		         echo "Cannot open file ($this->gitIgnoreURL)";
		    }

		    // Write $somecontent to our opened file.
		    if (fwrite($handle, self::CLASS_STEPS_DIRECTORY) === FALSE) {
		        echo "Cannot write to file ($this->gitIgnoreURL)";
		    }
		    else $success = true;

		    fclose($handle);

		}

		return $success;
	}
}