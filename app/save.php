<?php
ini_set('display_errors', '1');
require_once('vendor/autoload.php');

if(isset($_POST['url']) and $_POST['content'])
{
	$fileURL = $_POST['url'];
	$newContent =	$_POST['content'];
	$oldContent = file_get_contents($fileURL);

	//$newfile = fopen(substr($fileURL, 0,strlen($fileURL)-5)."_backup.json", "w+") or die("Unable to create backup file!");
	//fwrite($newfile, $oldContent);
	//fclose($newfile);
	
	$oldfile = fopen($fileURL, "w+") or die("Unable to write new file file!");
	fwrite($oldfile, $newContent);
	fclose($oldfile);
}

