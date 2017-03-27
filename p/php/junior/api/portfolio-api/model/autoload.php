<?php

spl_autoload_register(function ($class_path) {

	$path = explode('\\', $class_path);
	$className = end($path);
	$includePath = $className . '.class.php';
	//die(print_r($parts));
	if(stream_resolve_include_path($includePath))
	{
    	require_once $includePath;
	}
});