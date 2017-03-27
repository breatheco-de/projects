<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');  
if(!isset($_GET['project'])){
  $result = file_get_contents('jsons/error.json');
  if($result) echo $result;
  else echo file_get_contents('jsons/error.json');
} 
else
{
    $result = file_get_contents('jsons/project'.$_GET['project'].'.json');
    if($result) echo $result;
    else echo file_get_contents('jsons/error.json');
}