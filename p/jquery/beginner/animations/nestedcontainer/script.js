    $(document).ready(function(){
      $("#dollFour").on("mouseenter", function(ev){
        $("#dollFour").animate({
          opacity: "0.9", 
          right: "100px",
        }, 800, function(){
          //animation complete
        });
        $("#dollThree").animate({
          opacity: "0.7", 
          top: "100px",
        }, 800, function(){
          //animation complete
        });
        $("#dollTwo").animate({
          opacity: "0.7", 
          left: "100px",
        }, 800, function(){
          //animation complete
        });
      });

      $("#dollOne").on("mouseleave", function(ev){
        $("#dollFour").animate({
          opacity: "1", 
          right: "0px",
        }, 800, function(){
          //animation complete
        });
        $("#dollThree").animate({
          opacity: "1", 
          top: "0px",
        }, 800, function(){
          //animation complete
        });
        $("#dollTwo").animate({
          opacity: "1", 
          left: "0px",
        }, 800, function(){
          //animation complete
        });
      });
    });