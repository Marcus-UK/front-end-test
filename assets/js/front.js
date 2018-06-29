//Nav Functions
//-------------------------------------------------------------
function getNavHeight(){
    var $navHeight = $('nav').outerHeight();
    return $navHeight;
}

function headerHeight(){
    $header = $('header');
    $navBar =  getNavHeight();
    $($header).css('height', 'calc(100vh - '+$navBar+'px');
}

function addDropdownClass($navHolder){
    $($navHolder+' ul li:has(ul)').addClass('hasDropdown');
    $('.hasDropdown').on('click', function(e){
        e.preventDefault();
        $(this).toggleClass('open').find('ul').slideToggle();
    });
}

function displayMobileNavNar(){
  $('.menu-icon').on('click',function(e){
      e.preventDefault();
      $('.mob-nav-holder').slideToggle("slow");
  });
}


function addTwitter($navHolder){
    $($navHolder+" ul.main-nav > li:last-child").after( '<li><a href="http://twitter.com"><i class="social-btn fa fa-twitter"></i></a></li>' );
}
//-------------------------------------------------------------



//Doc Ready
//-------------------------------------------------------------
$( document ).ready(function() {
    console.log( "jQuery is setup and running!" );

    //headerHeight function
    headerHeight();
    //Nav
    addDropdownClass('nav');
    addTwitter('nav');
    displayMobileNavNar();
}); //END Doc Ready--------------------------------------------
