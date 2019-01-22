<?php
/*
* @title: Every cohort must have a replit
*/

require_once('./test/BaseTestClass.php');
require_once('./classes/autoload.php');

class ProjectsTest extends BaseTestClass {

    var $projects = [];
    
    public function setUp()
    {
        parent::setUp();
        $json = new ProjectsJSON('../p/');
        $this->projects = $json->getAllProjects();
    }

    function testProjectSlugs(){
        foreach($this->projects as $p){
            
            if(empty($p['slug'])) $this->log('Missing slug for project '.$p['url']);
            $this->assertFalse(empty($p['slug']));
            
            $this->assertSame($this->_checkProp($p, 'title'), "The property title exists in ".$p['slug']);
            $this->assertSame($this->_checkProp($p, 'status'), "The property status exists in ".$p['slug']);
            
            if($p['status'] == 'published'){
                $this->assertSame($this->_checkProp($p, 'duration'), "The property duration exists in ".$p['slug']);
                $this->assertSame($this->_checkProp($p, 'talents'), "The property talents exists in ".$p['slug']);
                $this->assertSame($this->_checkProp($p, 'description'), "The property description exists in ".$p['slug']);
            } 
        }
    }
    
    function testProjectLinksOnReadmes(){
        $this->assertSame($this->checkLinksOnFiles('../p', '*.md'), "There are 0 link errors");
    }
    
    private function _checkProp($project, $property){
        $title = '';
        if(!empty($project['slug'])) $title = $project['slug'];
        
        if(!empty($project[$property])) return "The property $property exists in $title";
        else return false;
    }
    
}