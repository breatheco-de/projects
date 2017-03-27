<?php

/**
 * This is the class that describes each portfolio 
 * of the project
 */
class SingleProject{
    
    private $id; //a unique id for each project
    private $title = ''; //empty string
    private $images = array(); //empty array pf string URL
    private $description = ''; //empty string
    private $links = array(); //array of strings URL
    private $thumb = ''; //the main image of the portfolio
    private $category = ''; //string with the category
    
    public function __construct(){
        $this->id = sha1(uniqid());
    }
    
    public function getId(){ return $this->id; }
    
    public function getTitle(){ return $this->title;}
    public function setTitle($value){ $this->title = $value; }
    
    public function getDescription(){ return $this->description; }
    public function setDescription($value){ $this->description = $value; }
    
    public function getThumb(){ return $this->thumb; }
    public function setThumb($value){ $this->thumb = $value; }
    
    public function getCategory(){ return $this->category; }
    public function setCategory($value){ $this->category = $value; }
    
    public function getAllLink() {return $this->images; }
    
    public function addLink($item){array_push($this->images,$item);return;}
    public function deleteLink($item)
    {
        for($i=0; $i<count($this->images);$i++){
            if($this->images[$i]->title == $item->title){
                
                unset($this->images[$i]);
                return;
            }
        }
        
    }
    
    public function getAllImages(){return $this->images;}
    public function addImage($item){array_push($this->images,$item);}
    public function deleteImage($item)
    {
        for($i=0; $i<count($this->images);$i++){
            if($this->images[$i]->title == $item->title){
                
                unset($this->images[$i]);
                return;
            }
        }
        
    }
    /**
     * The toJSON function will return a json string from the instance
     * of a particular object ($this)
     */
    public function toJSON()
    {
        return json_encode(get_object_vars($this));
    }
    
    /**
     * We need to override the toArray function because we want private and
     * protected properties to be accessed.
     */
    public function toArray()
    {
        return get_object_vars($this);
    }
}