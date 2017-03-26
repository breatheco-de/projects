<?php

class FakePortfolio extends Portfolio{
    public function __construct(){
        
        parent::__construct();
        
        $max = 4;
        for($i = 0;$i<$max;$i++)
        {
            $project = new FakeSingleProject();
            $this->addProject($project);
        }
    }
}