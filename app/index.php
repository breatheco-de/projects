<?php
session_set_cookie_params(0, '/', '.breatheco.de');
session_start();

ini_set('display_errors', '1');
require_once('vendor/autoload.php');

Twig_Autoloader::register();
$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader);

//$json = file_get_contents('data.json');
//$projects = json_encode($json);

$args = array(
	"assetsURL" => "/app/assets/",
	"version" => "0.".rand(0,9999999999),//avoid cache
	//"version" => "0.3",//avoid cache
	"title" => "Project Repository for the Breathe Code Movement",
	"logo" => array(
			"url" => "/app/assets/img/breathe-code-logo.png",
			"alt" => "Breath Code Movement Logo"
		)
	//"projects" => $projects
	);

if(isset($_GET['teacher'])) $args["teacherMode"] = $_GET['teacher'];
if(isset($_SESSION['academy_roles'])) $args["teacherMode"] = 'true';

if(isset($_GET['classroom'])) $classroom = $_GET['classroom'];

if(isset($classroom) and $classroom!=''){
	$args["classJSON"] = urldecode($classroom);
	$template = $twig->load('classroom.html');
}
else $template = $twig->load('index.html');

echo $template->render($args);