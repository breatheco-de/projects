$(document).ready(function(){
   $.ajax({
       url: "fake.json",
       success: function(data){
           console.log('ajax success');
           $('#list-of-items').html('');
           for(var i = 0; i<data.length;i++)
           {
                $('#list-of-items').append(renderProject(data[i]));
           }
           reallyReady();
       },
       error: function(p1,p2){
           console.log(p2);
       }
   });
});

function renderProject(project){
    //alert(project.thumb);
    var htmlString = '';
    htmlString = '<div class="portfolio-item graphic-design">';
    htmlString += '<div class="he-wrap tpl6">';
      htmlString += ' <img src=" '+project.thumb+' " class="img-responsive" alt="">';
        htmlString += '<div class="he-view">';
          htmlString += '<div class="bg a0" data-animate="fadeIn">';
            htmlString += '<h3 class="a1" data-animate="fadeInDown">'+project.title+'</h3>';
            htmlString += '<a data-rel="prettyPhoto" href="assets/img/portfolio/portfolio_09.jpg" class="dmbutton a2" data-animate="fadeInUp"><i class="ion-search"></i></a>';
            htmlString += '<a href="single-project.html#id='+project.id+'" class="dmbutton a2" data-animate="fadeInUp"><i class="ion-link"></i></a>';
           htmlString += '</div><!-- he bg -->';
        htmlString += '</div><!-- he view --> ';   
      htmlString += '</div><!-- he wrap -->';
    htmlString += '</div><!-- end col-12 -->';
    //write the code to fill htmlString with the needed html to render a project
    return htmlString;
}

function reallyReady(){
  console.log('ready...');
  "use strict";
  var $container = $('.portfolio'),
    $items = $container.find('.portfolio-item'),
    portfolioLayout = 'fitRows';
    
    if( $container.hasClass('portfolio-centered') ) {
      portfolioLayout = 'masonry';
    }
        
    $container.isotope({
      filter: '*',
      animationEngine: 'best-available',
      layoutMode: portfolioLayout,
      animationOptions: {
      duration: 750,
      easing: 'linear',
      queue: false
    },
    masonry: {
    }
    }, refreshWaypoints());
    
    function refreshWaypoints() {
      setTimeout(function() {
      }, 1000);   
    }
        
    $('nav.portfolio-filter ul a').on('click', function() {
        alert('portfolio-filter');
        var selector = $(this).attr('data-filter');
        $container.isotope({ filter: selector }, refreshWaypoints());
        $('nav.portfolio-filter ul a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    
    function getColumnNumber() { 
      var winWidth = $(window).width(), 
      columnNumber = 1;
    
      if (winWidth > 1200) {
        columnNumber = 5;
      } else if (winWidth > 950) {
        columnNumber = 4;
      } else if (winWidth > 600) {
        columnNumber = 3;
      } else if (winWidth > 400) {
        columnNumber = 2;
      } else if (winWidth > 250) {
        columnNumber = 1;
      }
        return columnNumber;
      }       
      
      function setColumns() {
        var winWidth = $(window).width();
        var columnNumber = getColumnNumber(); 
        var itemWidth = Math.floor(winWidth / columnNumber);
        
        $container.find('.portfolio-item').each(function() { 
          $(this).css( { 
          width : itemWidth + 'px' 
        });
      });
    }
    
    function setPortfolio() { 
      setColumns();
      $container.isotope('reLayout');
    }
      
    $container.imagesLoaded(function () { 
      setPortfolio();
    });
    
    $(window).on('resize', function () { 
    setPortfolio();          
  });
}