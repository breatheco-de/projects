<?php
    require './app/vendor/autoload.php';
    
    use GlLinkChecker\GlLinkChecker;
    use GlLinkChecker\GlLinkCheckerReport;
    use Symfony\Component\Finder\Finder;
    
    //relative url use host http://lyon.glicer.com to check link
    $linkChecker  = new GlLinkChecker('https://projects.breatheco.de');
    
    //construct list of local html and json files to check
    $finder = new Finder();
    $files  = $finder->files()
                ->in('./p')
                ->name("*.md");
    
    //launch links checking
    $result  = $linkChecker->checkFiles(
        $files,
        function ($nbr) {
            // called at beginning - $nbr urls to check
        },
        function ($url, $files) {
            // called each $url - $files : list of filename containing $url link
        },
        function () {
            // called at the end
        },
        ['absolute']
    );
    
    return printErrors($result);
    
    //convert $result array in a temp html file
    function printErrors(array $links){
        /**
         * @var GlLinkCheckerError $link
         */
         $errorsFound = 0;
         $linkCount = count($links);
        foreach ($links as $link) {
            $errors = $link->getErrorMessages();
            if (count($errors) <= 0) continue;
            else $errorsFound += count($errors);

            $url    = $link->getLink();
            $files  = implode(", ", $link->getFiles());

            echo "\033[31m".$url . "\033[0m \033[33m->\033[0m " . implode(',', $errors). " \033[33min\033[0m ".$files."\n";
        }
        
        if($errorsFound > 0){
            echo "\033[31m".$errorsFound." errors found. \033[0m";
            return 1;
        } 
        else{
            echo "\n \033[32m Success! ".$errorsFound." errors found in ".$linkCount." links. \033[0m \n";
            return 0;
        } 
    }