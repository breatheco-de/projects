<?php
//Start by including the SingleProject class because I will use it
//insite of one of the functions declared in the Portfolio class 
//specifically the fakeIt function.
require_once('model/SingleProject.model.php');

/**
 * This is the class that contains all the 
 * single projects of the portfolio
 */
class Portfolio{
    
    var $projects = array(); //array of SingleProjects
    
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
    
    /**
     * This function will generate a random Portfolio, comprised by
     * a list two different random SingProjects
     */
    function fakeIt()
    {
        //Create my first project
        $project1 = new SingleProject();
        //fake the content of my first project
        $project1->fakeIt();
        
        //Create my second project
        $project2 = new SingleProject();
        //fake the content of my second project
        $project2->fakeIt();
        
        //add both projects to the list of projects of the current instance
        $this->addProject($project1);
        $this->addProject($project2);
    }
    
}