<?php

require_once('model/Portfolio.model.php');

/**
 * Here I'm creating a new Portfolio object and then
 * calling the "fakeIt" function of that particular Portfolio instance.
 * 
 */
$portfolio1 = new Portfolio();

//remember that the fakeIt function generates a new fake portfolio 
//with 2 fake projects inside of it
$portfolio1->fakeIt();

//print the resulting Portfolio object, I'm wraping the result in a <pre>
//tag because the <pre> tag respects the identation on HMTL
echo '<pre>';
print_r($portfolio1);
echo '</pre>';