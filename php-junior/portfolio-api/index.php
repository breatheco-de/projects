<?php

require 'vendor/autoload.php';
require 'model/autoload.php';

$app = new \Slim\Slim(array(
    'debug' => true
));
//All the API reponses are going to be JSON
$app->response->headers->set('Content-Type', 'application/json');

$app->get('/project/:id', function ($id) use ($app) {
    $project = new FakeSingleProject();
    //the will echo the json into the BODY of the response
    $app->response->setBody($project->toJSON());
    //set the reponse code to 200, that way the jquery $.ajax function will success
    $app->response->setStatus(200);
    $app->response->finalize();
});

$app->get('/projects/', function () use ($app) {
    $portfolio = new FakePortfolio();
    //the will echo the json into the BODY of the response
    $app->response->setBody($portfolio->toJSON());
    //set the reponse code to 200, that way the jquery $.ajax function will succeed
    $app->response->setStatus(200);
    $app->response->finalize();
});
$app->get('/',function(){
    
});

$app->run();