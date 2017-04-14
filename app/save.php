<?php
ini_set('display_errors', '1');
require_once('vendor/autoload.php');
require_once('classes/autoload.php');

if(isset($_POST['url']) and $_POST['content'])
{
	$info = new InfoJSON($_POST['url']);
	$newInfoURL = $info->save($_POST['content']);
	if(!$newInfoURL) throwError($info->getLogs());
	else throwSuccess($newInfoURL);
}
else throwError("Missing params: url and content");

header("Content type: application/json");
function throwSuccess($data=null){
	$response = array(
		"code" => 200
		);
	if($data) $response["data"] = $data;

	echo json_encode($response);
}

function throwError($msg=''){
	$response = array(
		"code" => 500
		);
	if($msg) $response["msg"] = $msg;

	echo json_encode($response);
}

