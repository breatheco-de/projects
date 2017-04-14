<?php
ini_set('display_errors', '1');
require_once('vendor/autoload.php');
require_once('classes/autoload.php');

if(isset($_POST['url']) and $_POST['content'])
{
	$info = new InfoJSON($_POST['url']);
	$info->save($_POST['content']);

}

