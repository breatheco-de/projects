<?php
/**
 * This is the class that contains all the 
 * single projects of the portfolio
 */
class Portfolio{
    
    private $id;
    private $projects; //array of SingleProjects
    
    
    public function __construct(){
        $this->id = sha1(uniqid());
        $this->projects = array();
    }
    /**
     * addProject goal is to receive one project as a parameter
     * and add that project into the project list of the portfolio
     */ 
    function addProject($var1)
    {
        //arra_push will push the content of $var1 into the $this->projects array
        array_push($this->projects,$var1);

        return;//every function has to return, even if you don't need it
    }
    
    /**
     * deleProject receives a project as a parameter and removes that
     * project from the list of projects of the porfolio
     */
    function deleteProject($project)
    {
        //we need to loop the entier list of projects
        for($i=0; $i<count($this->projects);$i++){
            //on each project we ask: Is this project title = to the title of 
            //the project that was passed as parameter
            if($this->projects[$i]->title == $project->title){
                
                //if it is true, i can delete it from the array
                unset($this->projects[$i]);
                //if I found the project, and I deleted it, I don't need to 
                //continue looping or anything, I can stop the execution of
                //the function with "return"
                return;
            }
        }
        
    }
    
    public function getAllProjects()
    {
        return $this->projects;
    }
    /**
     * The toJSON function will return a json string from the instance
     * of a particular object ($this)
     */
    public function toJSON()
    {
        $result = get_object_vars($this);
        $result["projects"] = array();
        foreach($this->projects as $p)
        {
            array_push($result["projects"],$p->toArray());
        }
        return json_encode($result);
    }
    
}