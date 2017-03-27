<?php

require_once('vendor/autoload.php');


if(isset($_GET['url']))
{

	$Parsedown = new Parsedown();
	echo $Parsedown->text(file_get_contents($_GET['url']));
}
else
{
	echo 'Nothing to parse';
}