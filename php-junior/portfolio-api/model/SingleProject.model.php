<?php

/**
 * This is the class that describes each portfolio 
 * of the project
 */
class SingleProject{
    
    var $id = 0; //a unique id for each project
    var $title = ''; //empty string
    var $images = array(); //empty array pf string URL
    var $description = ''; //empty string
    var $links = array(); //array of strings URL
    var $thumb = ''; //the main image of the portfolio
    var $category = ''; //string with the category
    
    function fakeIt(){
        $this->id = rand(0,9999999999999);
        $this->title = 'Title of project '.$this->id;
    }
}