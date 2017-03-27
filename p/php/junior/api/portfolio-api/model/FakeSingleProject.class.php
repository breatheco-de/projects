<?php
/**
 * This class is the same as SigleProject with th only difference that
 * it generates fake random data on the contsructor.
 */
class FakeSingleProject extends SingleProject{
    public function __construct(){
        parent::__construct();
        
        //the the title based on the ID
        $this->setTitle('Title of project '.$this->getId());
        
        //set the description using the loreupsun.net API
        $this->setDescription(file_get_contents('http://loripsum.net/api/2/plaintext'));
        
        //set the thum using the unspash API
        $this->setThumb('https://source.unsplash.com/category/nature/400x300');
        
        //all projects are going to be websites
        $this->setCategory('websites');
        
        //Add 4 images
        $this->addImage("https://source.unsplash.com/category/nature/400x300");
        $this->addImage("https://source.unsplash.com/category/nature/400x300");
        $this->addImage("https://source.unsplash.com/category/nature/400x300");
        $this->addImage("https://source.unsplash.com/category/nature/400x300");
    }
}