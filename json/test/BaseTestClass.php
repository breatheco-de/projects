<?php

use Aws\Ses\SesClient;
use Aws\Ses\Exception\SesException;
use PHPUnit\Framework\TestCase;
use ZendDiagnostics\Check\GuzzleHttpService;
use ZendDiagnostics\Check;
use ZendDiagnostics\Runner\Runner;
use ZendDiagnostics\Runner\Reporter\BasicConsole;
use GlLinkChecker\GlLinkChecker;
use GlLinkChecker\GlLinkCheckerReport;
use Symfony\Component\Finder\Finder;

class BaseTestClass extends TestCase {
    
    var $runner;
    var $links; //all links being checked for errors in all the unit tests
    var $cache = [];
    var $samples = [];
 
    /**
     * Default preparation for each test
     */
    public function setUp(){
        parent::setUp();
        $this->runner = new Runner();
        $this->runner->addReporter(new BasicConsole(80, true)); 
        
        if(!defined('RUNING_TEST')) define('RUNING_TEST',true);
    }
    
    function testFake(){
        $this->assertSame(0, 0);
    }
    
    /**
     * End of the tests
     */
    public function tearDown(){
        // Run all checks
        $results = $this->runner->run();
        
        //check for all ZendDiagnostics tests
        $status = ($results->getFailureCount() + $results->getWarningCount()) > 0 ? 1 : 0;
        $this->assertSame($status, 0);
        
    }
    
    public function checkEndpoint($method,$url,$body=null){
        return new HTTPChecker($method, $url, $body);
    }
    
    public function checkURLAndContent($url, $string){
        $this->runner->addCheck(new GuzzleHttpService(
            $url,
            array(),
            array(),
            200,
            $string
        ));
    }
    
    public function get($url){
        $content = file_get_contents($url);
        if(!$content) throw new Exception('Invalid file url: '.$url);
        
        $obj = json_decode($content);
        if(!$obj) throw new Exception('Invalid sample syntax');
        if(empty($this->cache[$url])) $this->cache[$url] = $obj;
        
        return $this->cache[$url];
    }
    
    public function getSample($slug){
        if(!empty($this->samples[$slug])) return $this->samples[$slug];
        else{
            $url = ASSETS_HOST.'/apis/hook/sample/'.$slug;
            $content = file_get_contents($url);
            if(!$content) throw new Exception('Invalid Sample URL: '.$url);
            
            $obj = json_decode($content);
            if(!$obj) throw new Exception('Invalid sample syntax for sample/'.$slug.' '.$content);
            if(empty($samples[$slug])) $this->samples[$slug] = $obj;
            
            return $this->samples[$slug];
        }
    }
    
    private function sendError($to,$subject,$message){
        
        if(!is_array($to)) $to = [$to];
        
        $ABS_PATH = dirname(__FILE__).'/';
        $loader = new \Twig_Loader_Filesystem($ABS_PATH);
        $twig = new \Twig_Environment($loader);
        
        $template = $twig->load('error_template.html');
        
        $client = SesClient::factory(array(
            'version'=> 'latest',     
            'region' => 'us-west-2',
            'credentials' => [
                'key'    => S3_KEY,
                'secret' => S3_SECRETE,
            ]
        ));
        
        try {
             $result = $client->sendEmail([
            'Destination' => [
                'ToAddresses' => $to,
            ],
            'Message' => [
                'Body' => [
                    'Html' => [
                        'Charset' => 'UTF-8',
                        'Data' => $template->render(['subject' => 'Error! '.$subject, 'message' => $message]),
                    ],
        			'Text' => [
                        'Charset' => 'UTF-8',
                        'Data' => $message,
                    ],
                ],
                'Subject' => [
                    'Charset' => 'UTF-8',
                    'Data' => $subject,
                ],
            ],
            'Source' => 'info@breatheco.de',
            //'ConfigurationSetName' => 'ConfigSet',
        ]);
             $messageId = $result->get('MessageId');
             return true;
        
        } catch (SesException $error) {
            throw new Exception("The email was not sent. Error message: ".$error->getAwsErrorMessage()."\n");
        }
    }
    
    public function checkLinksOnFiles($pathToFolder, $extentions){
        $linkChecker  = new GlLinkChecker('');
        
        //construct list of local html and json files to check
        $finder = new Finder();
        $links = [];
        if(!is_array($extentions)) $extentions = [$extentions];
        foreach($extentions as $ext){
            $scanedFiles = $finder->files()->in($pathToFolder)->name($ext);            
            $links = array_merge($links, $linkChecker->checkFiles($scanedFiles,
                function ($nbr) { /* called at beginning - $nbr urls to check */ },
                function ($url, $files) { /* called each $url - $files : list of filename containing $url link */ },
                function () { /* called at the end */ },
                ['absolute']
            ));
        }
        
        
        return "There are ".$this->_getErrorsFromLinks($links, false)." link errors";
    }
    
    function log($msg){
        echo "\033[31m \n";
        print_r($msg);
        echo "\033[0m \n";
    }
    
    private function _getErrorsFromLinks($links, $silent = true){
        /**
         * @var GlLinkCheckerError $link
         */
         $errorsFound = 0;
         $linkCount = count($links);
        foreach ($links as $link) {
            $errors = $link->getErrorMessages();
            if (count($errors) <= 0) continue;
            else $errorsFound += count($errors);

            if(!$silent){
                $url    = $link->getLink();
                $files  = implode(", ", $link->getFiles());
    
                echo "\033[31m".$url . "\033[0m \033[33m->\033[0m " . implode(',', $errors). " \033[33min\033[0m ".$files."\n";
            }
        }
        
        if($errorsFound > 0){
            if(!$silent) echo "\033[31m".$errorsFound." errors found. \033[0m";
            return 1;
        } 
        else{
            if(!$silent) echo "\n \033[32m Success! ".$errorsFound." errors found in ".$linkCount." links. \033[0m \n";
            return 0;
        } 
    }
    
    public function getAllFiles($path, $extension) {
        $files = [];
        if(is_dir($path)){
            $_upcomingFiles = scandir($path);
            foreach($_upcomingFiles as $newFile){
                if($newFile != '.' and $newFile != '..' and substr( $newFile, 0, 1 ) != '.' and is_dir($path.'/'.$newFile)){
                    $files = array_merge($files, $this->getAllFiles($path.'/'.$newFile, $extension));
                }
                else if(strpos($newFile, $extension) !== false)
                    $files[] = $path.'/'.$newFile;
            }
        } 
        
        return $files;
    }
}

class HTTPChecker{
    private $p = [];
    function __construct($method,$url,$body){
        $this->p = [
            $url,
            array(),
            array(),
            200,
            null,
            null,
            $method,//POST
            $body//array
        ];
    }
    function assertSuccess(){
        if($this->p[6] == 'POST')
        {
            $this->p[1] = ['Content-Type' => 'application/json'];
            $this->p[2] = ['json' => $this->p[7]];
            
        }
        return new GuzzleHttpService($this->p[0],$this->p[1],$this->p[2],200,$this->p[4],$this->p[5],$this->p[6],null);
    }
    function assertFail(){
        if($this->p[6] == 'POST'){
            $this->p[1] = ['Content-Type' => 'application/json'];
            $this->p[2] = ['json' => $this->p[7]];
        } 
        return new GuzzleHttpService($this->p[0],$this->p[1],$this->p[2],500,$this->p[4],$this->p[5],$this->p[6],null);
    }
    
}

function debug($something){
    print_r($something); die();
}