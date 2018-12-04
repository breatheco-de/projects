<?php
/**
 * This test checks that there is always an upcoming 4geeks night
 */
    $PATH = dirname(__FILE__);
    include $PATH.'/../vendor/autoload.php';
    include $PATH.'/../test/utils.php';
    
    use ZendDiagnostics\Check;
    use ZendDiagnostics\Runner\Runner;
    use ZendDiagnostics\Runner\Reporter\BasicConsole;
    
    $projectsURL = '/apis';
    // Create Runner instance
    $runner = new Runner();
    
    $runner->addCheck(checkEndpoint('GET','https://projects.breatheco.de/json')->assertSuccess());
    
    $runner->addReporter(new BasicConsole(80, true)); 
    // Run all checks
    $results = $runner->run();

    if($results->getFailureCount() > 0){
        exit(1);  
    } 