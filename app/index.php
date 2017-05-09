<?php
session_set_cookie_params(0, '/', '.breatheco.de');
session_start();

require_once "vendor/autoload.php";

Twig_Autoloader::register();
$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader);

//$json = file_get_contents('data.json');
//$projects = json_encode($json);

$args = array(
	"assetsURL" => "/app/assets/",
	"assetsGlobalURL" => "http://assets.breatheco.de/",
	"projectsGlobalURL" => 'http://'.$_SERVER['HTTP_HOST'].'/',
	"version" => "0.".rand(0,9999999999),//avoid cache
	//"version" => "0.4",//avoid cache
	"title" => "Project Repository from Breathe Code",
	"logo" => array(
			"url" => "/app/assets/img/breathe-code-logo.png",
			"alt" => "Breath Code Logo"
		)
	//"projects" => $projects
	);

if(isset($_GET['teacher'])) $args["teacherMode"] = $_GET['teacher'];
if(isset($_SESSION['academy_roles'])) $args["teacherMode"] = 'true';

if(isset($_GET['classroom']))
{
	$classroom = $_GET['classroom'];

	if($classroom!=''){
		$args["classJSON"] = urldecode($classroom);
		if($args["classJSON"]) $template = $twig->load('classroom.html');
		else $template = $twig->load('404.html');
	}
	else $template = $twig->load('404.html');
}
elseif(isset($_GET['vtutorial']))
{
	$classroom = $_GET['vtutorial'];

	if($classroom!=''){
		$args["videoJSON"] = urldecode($classroom);
		if($args["videoJSON"]) $template = $twig->load('tutorial.html');
		else $template = $twig->load('404.html');
	}
	else $template = $twig->load('404.html');
}
else if(isset($_GET['d']))
{
	$slug = $_GET['d'];
	if($slug!=''){
		$args["requestSlug"] = urldecode($slug);
		if($args["requestSlug"]) $template = $twig->load('demo.html');
		else $template = $twig->load('404.html');
	}
	else $template = $twig->load('404.html');
}
else if(isset($_GET['new']) and $_GET['new']=='project')
{
	$twig->load('new-project.html');
}
else $template = $twig->load('index.html');

echo $template->render($args);